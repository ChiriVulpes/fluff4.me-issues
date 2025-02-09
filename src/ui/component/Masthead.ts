import Notifications from 'model/Notifications'
import Session from 'model/Session'
import Component from 'ui/Component'
import Button from 'ui/component/core/Button'
import Link from 'ui/component/core/Link'
import type Popover from 'ui/component/core/Popover'
import Slot from 'ui/component/core/Slot'
import Flag from 'ui/component/masthead/Flag'
import NotificationList from 'ui/component/NotificationList'
import PrimaryNav from 'ui/component/PrimaryNav'
import Sidebar from 'ui/component/Sidebar'
import Viewport from 'ui/utility/Viewport'
import type ViewContainer from 'ui/view/shared/component/ViewContainer'
import AbortPromise from 'utility/AbortPromise'
import Env from 'utility/Env'

interface MastheadExtensions {
	sidebar: Sidebar
}

interface Masthead extends Component, MastheadExtensions { }

const MASTHEAD_CLASS = '_masthead'

const Masthead = Component.Builder('header', (masthead, view: ViewContainer): Masthead => {
	masthead.style('masthead').classes.add(MASTHEAD_CLASS)

	const sidebar = Sidebar()
	const nav = PrimaryNav()

	Button()
		.style('masthead-skip-nav')
		.text.use('masthead/skip-navigation')
		.event.subscribe('click', view.focus)
		.appendTo(masthead)

	let popover!: Popover
	const left = Component()
		.append(Component()
			.and(Button)
			.setIcon('bars')
			.type('icon')
			.style('masthead-left-hamburger', 'masthead-left-hamburger-sidebar')
			.ariaHidden()
			.event.subscribe('click', sidebar.toggle))
		.append(Button()
			.setIcon('bars')
			.type('icon')
			.style('masthead-left-hamburger', 'masthead-left-hamburger-popover')
			.ariaLabel.use('masthead/primary-nav/alt')
			.clearPopover()
			.setPopover('hover', p => popover = p
				.style('primary-nav-popover')
				.anchor.add('aligned left', 'off bottom')
				.ariaRole('navigation')))
		.style('masthead-left')
		.appendTo(masthead)

	sidebar.style.bind(masthead.hasFocused, 'sidebar--visible-due-to-keyboard-navigation')

	let sizeTimeout: number | undefined
	Viewport.size.use(masthead, () => {
		window.clearTimeout(sizeTimeout)
		sizeTimeout = window.setTimeout(() => {
			nav.appendTo(sidebar.element.clientWidth ? sidebar : popover)
		}, 1)
	})

	const flag = Flag()
		.style('masthead-home-logo')

	const homeLink = Link('/')
		.ariaLabel.use('home/label')
		.clearPopover()
		.append(Component()
			.and(Button)
			.style('masthead-home', 'heading')
			.append(flag)
			.append(Component('img')
				.style('masthead-home-logo-wordmark')
				.ariaHidden()
				.attributes.set('src', `${Env.URL_ORIGIN}image/logo-wordmark.svg`)))
		.appendTo(left)

	flag.style.bind(homeLink.hoveredOrFocused, 'flag--focused')
	flag.style.bind(homeLink.active, 'flag--active')
	homeLink.hoveredOrFocused.subscribe(masthead, focus => flag.wave('home link focus', focus))

	Component()
		.style('masthead-search')
		.appendTo(masthead)

	Slot()
		.style.remove('slot')
		.style('masthead-user')
		.if(Session.Auth.loggedIn, () => Component()

			////////////////////////////////////
			//#region Notifications Button
			.append(Button()
				.setIcon('bell')
				.type('icon')
				.style('masthead-user-notifications')
				.clearPopover()
				.ariaLabel.use('masthead/user/notifications/alt')
				.append(Slot().use(Notifications.unreadCount, (slot, count) => !count ? undefined
					: Component()
						.style('masthead-user-notifications-badge')
						.text.set(`${count}`)))
				.setPopover('hover', popover => popover
					.style('masthead-user-notifications-popover')
					.anchor.add('aligned right', 'off bottom')
					.anchor.add('aligned left', `.${MASTHEAD_CLASS}`, 'off bottom')
					.append(Slot().use(Notifications.cache, AbortPromise.asyncFunction(async (signal, slot, notifications) => {
						const list = await NotificationList(true, 5)
						if (signal.aborted)
							return

						list.paginator.type('flush')
							.style('masthead-user-notifications-list')

						list.paginator.header.style('masthead-user-notifications-list-header')
						list.paginator.title.style('masthead-user-notifications-list-title')
						list.paginator.content.style('masthead-user-notifications-list-content')
						list.paginator.footer.style('masthead-user-notifications-list-footer')

						for (const action of list.paginator.primaryActions.getChildren())
							if (action.is(Button))
								action.style('masthead-user-notifications-list-action')

						Link('/notifications')
							.and(Button)
							.type('flush')
							.text.use('masthead/user/notifications/link/label')
							.appendTo(list.paginator.footer.middle)

						list.appendTo(slot)
					})))))
			//#endregion
			////////////////////////////////////

			////////////////////////////////////
			//#region Profile Button
			.append(Button()
				.setIcon('circle-user')
				.type('icon')
				.clearPopover()
				.ariaLabel.use('masthead/user/profile/alt')
				.setPopover('hover', popover => popover
					.anchor.add('aligned right', 'off bottom')
					.ariaRole('navigation')
					.append(Slot()
						.style('action-group')
						.style.remove('slot')
						.use(Session.Auth.author, (slot, author) => {
							if (!author)
								return

							Link(`/author/${author.vanity}`)
								.and(Button)
								.type('flush')
								.style('masthead-popover-link-button')
								.tweak(button => button.textWrapper.style('masthead-popover-link-button-text'))
								.setIcon('circle-user')
								.text.set(author.name)
								.ariaLabel.use(quilt => quilt['masthead/user/profile/popover/profile'](author.name))
								.appendTo(slot)

							Link('/account')
								.and(Button)
								.type('flush')
								.style('masthead-popover-link-button')
								.setIcon('id-card')
								.text.use('masthead/user/profile/popover/account')
								.appendTo(slot)

							Button()
								.type('flush')
								.style('masthead-popover-link-button')
								.setIcon('arrow-right-from-bracket')
								.text.use('view/account/action/logout')
								.event.subscribe('click', () => Session.reset())
								.appendTo(slot)
						}))))
			//#endregion
			////////////////////////////////////
		)
		.else(() => Button()
			.style('masthead-user-action-login')
			.type('primary')
			.setIcon('circle-user')
			.text.use('masthead/action/login')
			.event.subscribe('click', () => navigate.toURL('/account'))
		)
		.appendTo(masthead)

	return masthead.extend<MastheadExtensions>(masthead => ({
		sidebar,
	}))
})

export default Masthead
