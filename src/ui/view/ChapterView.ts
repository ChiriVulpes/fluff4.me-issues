import type { ChapterReference, Work as WorkData, WorkFull } from 'api.fluff4.me'
import EndpointChapterGet from 'endpoint/chapter/EndpointChapterGet'
import EndpointChapterGetPaged from 'endpoint/chapter/EndpointChapterGetPaged'
import EndpointHistoryAddChapter from 'endpoint/history/EndpointHistoryAddChapter'
import EndpointReactChapter from 'endpoint/reaction/EndpointReactChapter'
import EndpointUnreactChapter from 'endpoint/reaction/EndpointUnreactChapter'
import EndpointWorkGet from 'endpoint/work/EndpointWorkGet'
import quilt from 'lang/en-nz'
import Chapters from 'model/Chapters'
import PagedData from 'model/PagedData'
import Session from 'model/Session'
import TextBody from 'model/TextBody'
import Component from 'ui/Component'
import Chapter from 'ui/component/Chapter'
import Comments from 'ui/component/Comments'
import Button from 'ui/component/core/Button'
import Link from 'ui/component/core/Link'
import Slot from 'ui/component/core/Slot'
import Reaction from 'ui/component/Reaction'
import Tags from 'ui/component/Tags'
import type { TagsState } from 'ui/component/TagsEditor'
import Work from 'ui/component/Work'
import PaginatedView from 'ui/view/shared/component/PaginatedView'
import ViewDefinition from 'ui/view/shared/component/ViewDefinition'
import Maths from 'utility/maths/Maths'
import State from 'utility/State'
import type { UUID } from 'utility/string/Strings'

export default ViewDefinition({
	async load (params: ChapterReference) {
		const response = await EndpointWorkGet.query({ params: Chapters.work(params) })
		if (response instanceof Error)
			throw response

		const initialChapterResponse = await EndpointChapterGet.query({ params })
		if (initialChapterResponse instanceof Error)
			throw initialChapterResponse

		return { workData: response.data as WorkData & Partial<WorkFull>, initialChapterResponse }
	},
	create (params: ChapterReference, { workData, initialChapterResponse }) {
		const view = PaginatedView('chapter')

		const author = workData.synopsis?.mentions.find(author => author.vanity === params.author)
		delete workData.synopsis
		delete workData.custom_tags

		Link(`/work/${author?.vanity}/${workData.vanity}`)
			.and(Work, workData, author)
			.viewTransition('chapter-view-work')
			.style('view-type-chapter-work')
			.setContainsHeading()
			.appendTo(view.content)

		const chapterState = State(initialChapterResponse.data)

		const chapters = PagedData.fromEndpoint(EndpointChapterGetPaged.prep({ params }))
		chapters.set(initialChapterResponse.page, initialChapterResponse.data, !initialChapterResponse.has_more)
		chapters.setPageCount(initialChapterResponse.page_count)

		const paginator = view.paginator()
			.viewTransition('chapter-view-chapter')
			.style('view-type-chapter-block')
			.type('flush')
			.tweak(p => p.title
				.style('view-type-chapter-block-title')
				.text.bind(chapterState.mapManual(chapter =>
					quilt['view/chapter/title'](Maths.parseIntOrUndefined(chapter.url), chapter.name)))
			)
			.appendTo(view.content)
			.tweak(p => p.page.value = initialChapterResponse.page)
			.set(chapters, (slot, chapter, page, chapters, paginator) => {
				paginator.setURL(`/work/${params.author}/${params.work}/chapter/${chapter.url}`)

				if (Session.Auth.loggedIn.value)
					void EndpointHistoryAddChapter.query({ params: chapter })

				if (chapter.notes_before || chapter.global_tags?.length || chapter.custom_tags?.length)
					Component()
						.style('view-type-chapter-block-notes', 'view-type-chapter-block-notes-before')
						.setMarkdownContent(TextBody.resolve(chapter.notes_before, chapter.mentions))
						.prepend(chapter.notes_before && Component()
							.style('view-type-chapter-block-notes-label')
							.text.use('chapter/notes/label'))
						.append((chapter.global_tags?.length || chapter.custom_tags?.length) && Component()
							.style('view-type-chapter-block-notes-label', 'view-type-chapter-block-tags-title')
							.text.use('chapter/tags/label'))
						.append(Tags()
							.set(chapter as TagsState)
							.style('view-type-chapter-block-tags'))
						.appendTo(slot)

				Component()
					.style('view-type-chapter-block-body')
					.setMarkdownContent(chapter.body ?? '')
					.appendTo(slot)

				if (chapter.notes_after)
					Component()
						.style('view-type-chapter-block-notes', 'view-type-chapter-block-notes-after')
						.setMarkdownContent(TextBody.resolve(chapter.notes_after, chapter.mentions))
						.prepend(chapter.notes_after && Component()
							.style('view-type-chapter-block-notes-label')
							.text.use('chapter/notes/label'))
						.appendTo(slot)
			})

		paginator.header.style('view-type-chapter-block-header')
		paginator.content.style('view-type-chapter-block-content')
		paginator.footer.style('view-type-chapter-block-paginator-actions')

		paginator.setActionsMenu(popover => Chapter.initActions(popover, chapterState, workData, author))

		Link(`/work/${params.author}/${params.work}`)
			.and(Button)
			.type('flush')
			.text.use('chapter/action/index')
			.appendTo(paginator.footer.middle)

		const reactions = chapterState.mapManual(chapter => chapter.reactions ?? 0)
		const reacted = chapterState.mapManual(chapter => !!chapter.reacted)
		Reaction('love', reactions, reacted)
			.event.subscribe('click', async () => {
				if (!author?.vanity)
					return

				const params = { ...Chapters.reference(chapterState.value), type: 'love' } as const
				if (reacted.value) {
					const response = await EndpointUnreactChapter.query({ params })
					if (toast.handleError(response))
						return

					delete chapterState.value.reacted
					if (chapterState.value.reactions)
						chapterState.value.reactions--
					chapterState.emit()
				}
				else {
					const response = await EndpointReactChapter.query({ params })
					if (toast.handleError(response))
						return

					chapterState.value.reacted = true
					chapterState.value.reactions ??= 0
					chapterState.value.reactions++
					chapterState.emit()
				}
			})
			.appendTo(paginator.footer.middle)

		paginator.data.use(paginator, chapter => chapterState.value = chapter)

		Slot()
			.use(paginator.data, (slot, chapter) => {
				if (!chapter.root_comment)
					return

				return Comments(chapter.root_comment as UUID, true)
			})
			.appendTo(view.content)

		return view
	},
})
