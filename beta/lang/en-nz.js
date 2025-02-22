(function(factory){if(typeof module==="object"&&typeof module.exports==="object"){var v=factory(require, exports);if(v!==undefined)module.exports=v}else if(typeof define==="function"&&define.amd){define(["require","exports"],factory);}})(function(require,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});let r=Symbol();exports.WeavingArg={setRenderable:t=>(t[r]=true,t),isRenderable:t=>!!t[r]};let s=t=>typeof t=="string"?t:Array.isArray(t)?t.map(s).join(""):typeof t!="object"||t===null||!t.content?String(t):typeof t.content=="object"?s(t.content):String(t.content);let ii=u=>(typeof u=="object"||typeof u=="function")&&Symbol.iterator in u;let c=c=>({content:c,toString(){return s(this.content)}});let j=(a,s,v)=>{a=(!a?[]:Array.isArray(a)?a:ii(a)?[...a]:[a]);return (v?a.map(v):a).flatMap((v,i)=>i<a.length-1?[].concat(v,s):v)};let l=v=>!v?0:typeof v.length=="number"?v.length:typeof v.size=="number"?v.size:ii(v)?[...v].length:typeof v=="object"?Object.keys(v).length:0;var q={"fluff4me/title":_=>c([{content:"fluff4.me / Tell your story!"}]),"home/label":_=>c([{content:"home"}]),"shared/preview":_=>c([{content:"Preview"}]),"shared/mention/unresolved":_=>c([{content:"unknown"}]),"shared/prompt/confirm":_=>c([{content:"Are you sure?"}]),"shared/prompt/reauth":_=>c([{content:"To perform this action, reauthenticate to verify your identity:"}]),"shared/prompt/beta-restrictions/title":_=>c([{content:"Beta Restrictions"}]),"shared/prompt/beta-restrictions/description":_=>c([{content:"While fluff4.me is in beta, due to a lack of legal consult and limited content moderation abilities, the content that can be published is restricted.\n- **DO NOT post NSFW/18+ content.** Use your best judgement. A swear word here or there is fine, and violence, assuming it's not gratuitous.  \nThis restriction will be lifted when there is proper content moderation, reporting, and a full suite of official tags.\n- **DO NOT post stories based on published, copyrighted works**, such as fanfics or spitefics.  \nThis restriction will be lifted after legal consult.\n"}]),"shared/term/profile":_=>c([{content:"Profile"}]),"shared/term/chapters":_=>c([{content:"Chapters"}]),"shared/term/settings":_=>c([{content:"Settings"}]),"shared/term/account-settings":_=>c([{content:"Account Settings"}]),"shared/term/notes":_=>c([{content:"Notes"}]),"shared/action/login-or-signup":_=>c([{content:"Log In or Sign Up"}]),"shared/action/love":_=>c([{content:"Love"}]),"shared/action/edit":_=>c([{content:"Edit"}]),"shared/action/follow":_=>c([{content:"Follow"}]),"shared/action/ignore":_=>c([{content:"Ignore"}]),"shared/action/unfollow":_=>c([{content:"Unfollow"}]),"shared/action/unignore":_=>c([{content:"Unignore"}]),"shared/action/delete":(...a)=>c([{content:"Delete"},{content:(a[0]?[{content:" "},a[0]]:[])}]),"shared/action/save":_=>c([{content:"Save"}]),"shared/action/create":_=>c([{content:"Create!"}]),"shared/action/cancel":_=>c([{content:"Cancel"}]),"shared/action/confirm":_=>c([{content:"Confirm"}]),"shared/action/return":_=>c([{content:"Return"}]),"shared/action/view-profile":(...a)=>c([{content:"View Profile"},...a[0]?[{content:" ("},{content:a[0]},{content:")"}]:[]]),"shared/action/continue":_=>c([{content:"Continue"}]),"shared/action/new-chapter":_=>c([{content:"New Chapter"}]),"shared/toast/failed-to-save":(...a)=>c([{content:"Failed to save "},{content:a[0]}]),"shared/toast/saved":(...a)=>c([{content:"Saved "},{content:a[0]}]),"shared/toast/error-occurred":_=>c([{content:"An error has occurred!"}]),"shared/form/name/label":_=>c([{content:"Name"}]),"shared/form/vanity/label":_=>c([{content:"Vanity"}]),"shared/form/description/label":_=>c([{content:"Description"}]),"shared/form/body/label":_=>c([{content:"Body"}]),"shared/form/notes/label":(...a) => q["shared/term/notes"](...a),"shared/form/tags/label":_=>c([{content:"Tags"}]),"shared/form/tags/placeholder":_=>c([{content:"Type to filter tag suggestions..."}]),"shared/form/tags/suggestion/add-as-custom":_=>c([{content:"Add custom tag:"}]),"shared/form/tags/suggestion/label":_=>c([{content:"Suggestions"}]),"shared/form/tags/hint/main":_=>c([{content:"fluff4.me has two kinds of tags."}]),"shared/form/tags/hint/global":_=>c([{content:[{content:"Global tags"}],tag:`B`},{content:" are chosen from a predefined list, meant for primary categorisation.\nThe first eight will always be displayed with your work. Any others will display only on the full work page."}]),"shared/form/tags/hint/custom":_=>c([{content:[{content:"Custom tags"}],tag:`B`},{content:" are custom text — whatever you want. Useful as stand-ins for missing global tags, or to better describe specifics.\nThese "},{content:[{content:"only"}],tag:`I`},{content:" display on the full work page."}]),"shared/form/progress-wheel/remaining/label":(...a)=>c([{content:a[0]}]),"shared/form/progress-wheel/progress/label":(...a)=>c([{content:a[0]},{content:"%"}]),"shared/form/visibility/label":_=>c([{content:"Visibility"}]),"shared/form/visibility/public":_=>c([{content:"Public"}]),"shared/form/visibility/private":_=>c([{content:"Private"}]),"shared/form/visibility/patreon":_=>c([{content:"Patreon"}]),"shared/form/invalid/too-long":_=>c([{content:"This text is too long."}]),"shared/form/invalid/required":_=>c([{content:"This field is required."}]),"shared/form/invalid/tags/too-many-global":_=>c([{content:"Too many global tags."}]),"shared/form/invalid/tags/too-many-custom":_=>c([{content:"Too many custom tags."}]),"component/popover/button":(...a)=>c([{content:"open "},{content:(a[0]?a[0]:[{content:"details"}])},{content:(a[1]?[{content:" "},a[1]]:[])}]),"component/popover":(...a)=>c([{content:(a[0]?a[0]:[{content:"details"}])}]),"component/paginator/error":_=>c([{content:"Failed to load content."}]),"component/paginator/error/retry":_=>c([{content:"Retry"}]),"component/text-editor/toolbar/group/inline":_=>c([{content:"inline formatting"}]),"component/text-editor/toolbar/button/strong":_=>c([{content:"strong (bold)"}]),"component/text-editor/toolbar/button/em":_=>c([{content:"emphasis (italic)"}]),"component/text-editor/toolbar/button/underline":_=>c([{content:"underline"}]),"component/text-editor/toolbar/button/strikethrough":_=>c([{content:"strikethrough"}]),"component/text-editor/toolbar/button/subscript":_=>c([{content:"subscript"}]),"component/text-editor/toolbar/button/superscript":_=>c([{content:"superscript"}]),"component/text-editor/toolbar/button/code":_=>c([{content:"code"}]),"component/text-editor/toolbar/button/link":_=>c([{content:"link"}]),"component/text-editor/toolbar/button/other-formatting":_=>c([{content:"other formatting options"}]),"component/text-editor/toolbar/group/block":_=>c([{content:"block formatting"}]),"component/text-editor/toolbar/button/align":(...a)=>c([{content:"text align (currently "},{content:a[0]},{content:")"}]),"component/text-editor/toolbar/button/align-left":_=>c([{content:"align left"}]),"component/text-editor/toolbar/button/align-centre":_=>c([{content:"centre"}]),"component/text-editor/toolbar/button/align-right":_=>c([{content:"align right"}]),"component/text-editor/toolbar/button/align/currently/left":_=>c([{content:"aligned left"}]),"component/text-editor/toolbar/button/align/currently/right":_=>c([{content:"aligned right"}]),"component/text-editor/toolbar/button/align/currently/centre":_=>c([{content:"centred"}]),"component/text-editor/toolbar/button/align/currently/mixed":_=>c([{content:"mixed"}]),"component/text-editor/toolbar/button/block-type":(...a)=>c([{content:"block type (currently "},{content:a[0]},{content:")"}]),"component/text-editor/toolbar/button/code-block":_=>c([{content:"code block"}]),"component/text-editor/toolbar/button/paragraph":_=>c([{content:"paragraph"}]),"component/text-editor/toolbar/button/block-type/currently/code-block":_=>c([{content:"code block"}]),"component/text-editor/toolbar/button/block-type/currently/paragraph":_=>c([{content:"paragraph"}]),"component/text-editor/toolbar/button/block-type/currently/mixed":_=>c([{content:"mixed"}]),"component/text-editor/toolbar/group/wrapper":_=>c([{content:"block wrappers"}]),"component/text-editor/toolbar/button/lift":_=>c([{content:"unwrap"}]),"component/text-editor/toolbar/button/bullet-list":_=>c([{content:"wrap in list"}]),"component/text-editor/toolbar/button/ordered-list":_=>c([{content:"wrap in ordered list"}]),"component/text-editor/toolbar/button/blockquote":_=>c([{content:"wrap in block quote"}]),"component/text-editor/toolbar/group/insert":_=>c([{content:"insert"}]),"component/text-editor/toolbar/button/hr":_=>c([{content:"horizontal rule"}]),"component/text-editor/toolbar/group/actions":_=>c([{content:"actions"}]),"component/text-editor/toolbar/button/undo":_=>c([{content:"undo"}]),"component/text-editor/toolbar/button/redo":_=>c([{content:"redo"}]),"component/text-editor/toolbar/button/fullscreen":_=>c([{content:"fullscreen"}]),"component/text-editor/toolbar/button/unfullscreen":_=>c([{content:"exit fullscreen"}]),"component/text-editor/formatting/none":_=>c([{content:"no formatting"}]),"component/text-editor/formatting/strong":_=>c([{content:"strong (bolded)"}]),"component/text-editor/formatting/em":_=>c([{content:"emphasised (italic)"}]),"component/text-editor/formatting/underline":_=>c([{content:"underlined"}]),"component/text-editor/formatting/strikethrough":_=>c([{content:"strikethrough"}]),"component/text-editor/formatting/subscript":_=>c([{content:"subscript"}]),"component/text-editor/formatting/superscript":_=>c([{content:"superscript"}]),"component/text-editor/formatting/code":_=>c([{content:"code"}]),"component/text-editor/formatting/link":_=>c([{content:"link"}]),"component/text-editor/formatting/mention":_=>c([{content:"mention"}]),"masthead/skip-navigation":_=>c([{content:"Skip Navigation"}]),"masthead/primary-nav/alt":_=>c([{content:"primary"}]),"masthead/action/login":(...a) => q["shared/action/login-or-signup"](...a),"masthead/user/notifications/alt":_=>c([{content:"notifications"}]),"masthead/user/notifications/title":_=>c([{content:"Notifications"}]),"masthead/user/notifications/link/label":_=>c([{content:"View All"}]),"masthead/user/profile/alt":(...a) => q["shared/term/profile"](...a),"masthead/user/profile/popover/profile":(...a) => q["shared/action/view-profile"](...a),"masthead/user/profile/popover/account":(...a) => q["shared/term/account-settings"](...a),"sidebar/section/browse":_=>c([{content:"Browse"}]),"sidebar/link/new":(...a) => q["view/new/main/title"](...a),"sidebar/link/feed":(...a) => q["view/feed/main/title"](...a),"sidebar/link/history":(...a) => q["view/history/main/title"](...a),"sidebar/section/create":_=>c([{content:"Create"}]),"sidebar/link/create-work":_=>c([{content:"Create Work"}]),"sidebar/section/profile":(...a) => q["shared/term/profile"](...a),"sidebar/link/login":_=>c([{content:"Log In/Sign up"}]),"sidebar/link/profile":(...a) => q["shared/action/view-profile"](...a),"sidebar/link/settings":(...a) => q["shared/term/account-settings"](...a),"sidebar/section/dev":_=>c([{content:"Dev"}]),"sidebar/link/debug":_=>c([{content:"Debug"}]),"work/chapters/label":(...a) => q["shared/term/chapters"](...a),"work/description/empty":_=>c([{content:"This work has no description."}]),"work/state/private":_=>c([{content:"Private"}]),"work/state/private-no-chapters":_=>c([{content:"Hidden (No Chapters)"}]),"work/action/label/edit":(...a) => q["shared/action/edit"](...a),"work/action/label/new-chapter":(...a) => q["shared/action/new-chapter"](...a),"work/action/label/follow":(...a) => q["shared/action/follow"](...a),"work/action/label/unfollow":(...a) => q["shared/action/unfollow"](...a),"work/action/label/ignore":(...a) => q["shared/action/ignore"](...a),"work/action/label/unignore":(...a) => q["shared/action/unignore"](...a),"work/action/label/delete":(...a) => q["shared/action/delete"](...a),"author/description/empty":_=>c([{content:"This author prefers to remain elusive and mysterious..."}]),"author/support-message/placeholder":_=>c([{content:"Support My Writing"}]),"author/action/label/edit":(...a) => q["shared/action/edit"](...a),"author/action/label/follow":(...a) => q["shared/action/follow"](...a),"author/action/label/unfollow":(...a) => q["shared/action/unfollow"](...a),"author/action/label/ignore":(...a) => q["shared/action/ignore"](...a),"author/action/label/unignore":(...a) => q["shared/action/unignore"](...a),"tag/action/label/follow":(...a) => q["shared/action/follow"](...a),"tag/action/label/unfollow":(...a) => q["shared/action/unfollow"](...a),"tag/action/label/ignore":(...a) => q["shared/action/ignore"](...a),"tag/action/label/unignore":(...a) => q["shared/action/unignore"](...a),"comment/timestamp/edited":(...a)=>c([{content:"Edited "},{content:a[0]}]),"comment/deleted/body":_=>c([{content:"*This comment has been deleted...*"}]),"comment/deleted/author":_=>c([{content:"unknown"}]),"comment/hint":_=>c([{content:"Make sure to be nice! Nobody wants pure critique."}]),"comment/action/reply":_=>c([{content:"Reply"}]),"comment/action/edit":(...a) => q["shared/action/edit"](...a),"comment/action/cancel":(...a) => q["shared/action/cancel"](...a),"comment/action/save":(...a) => q["shared/action/save"](...a),"comment/action/delete":(...a) => q["shared/action/delete"](...a),"chapter/action/index":_=>c([{content:"Index"}]),"chapter/state/private":_=>c([{content:"Private"}]),"chapter/action/label/love":(...a) => q["shared/action/love"](...a),"chapter/action/label/edit":(...a) => q["shared/action/edit"](...a),"chapter/action/label/delete":(...a) => q["shared/action/delete"](...a),"chapter/action/label/reorder":_=>c([{content:"Reorder"}]),"chapter/action/label/reorder-cancel":_=>c([{content:"Cancel Reordering"}]),"chapter/tags/label":_=>c([{content:"This chapter contains:"}]),"chapter/notes/label":(...a) => q["shared/term/notes"](...a),"notification/comment-chapter":(...a)=>c([{content:a[0]?.TRIGGERED_BY},{content:" has commented on "},{content:a[0]?.CHAPTER},{content:" of "},{content:a[0]?.WORK}]),"notification/comment-reply":(...a)=>c([{content:a[0]?.TRIGGERED_BY},{content:" has replied to your comment on "},{content:a[0]?.CHAPTER},{content:" of "},{content:a[0]?.WORK}]),"notification/comment-mention":(...a)=>c([{content:a[0]?.TRIGGERED_BY},{content:" has mentioned you in a comment on "},{content:a[0]?.CHAPTER},{content:" of "},{content:a[0]?.WORK}]),"work-feed/empty":_=>c([{content:"And all was quiet..."}]),"view/container/alt":_=>c([{content:"main content"}]),"view/shared/login-required/title":_=>c([{content:"Log-in required"}]),"view/shared/login-required/description":_=>c([{content:"You must log in or sign up to view this content."}]),"view/shared/login-required/action":(...a) => q["shared/action/login-or-signup"](...a),"view/shared/info/following":(...a)=>c([{content:"Following "},{content:(a[0]?a[0]:[{content:"None"}])}]),"view/shared/info/ignoring":(...a)=>c([{content:"Ignoring "},{content:(a[0]?a[0]:[{content:"None"}])}]),"view/error/title":(...a)=>c([{content:"Error "},{content:a[0]?.CODE}]),"view/error/description-404":_=>c([{content:"Your adventure has come to a close, your questions left unanswered, your goals unfulfilled. What will you do?"}]),"view/new/main/title":_=>c([{content:"New"}]),"view/new/main/description":_=>c([{content:"Today in fluff..."}]),"view/feed/main/title":_=>c([{content:"Feed"}]),"view/feed/main/description":_=>c([{content:"New works and new chapters from the things you follow!"}]),"view/history/main/title":_=>c([{content:"History"}]),"view/history/main/description":_=>c([{content:"A history of the content you've viewed, ordered by recency."}]),"view/following/main/title":_=>c([{content:"Following"}]),"view/following/main/description":_=>c([{content:"The content you're following. Latest updates for matching works appear in your "},{content:[{content:"Feed"}],tag:`LINK(/feed)`},{content:"."}]),"view/following/tab/works":_=>c([{content:"Works"}]),"view/following/tab/authors":_=>c([{content:"Authors"}]),"view/following/tab/tags":_=>c([{content:"Tags"}]),"view/following/tab/categories":_=>c([{content:"Tag Categories"}]),"view/following/panel/shared/empty":(...a)=>c([{content:"You are not following any "},{content:a[0]},{content:"."}]),"view/following/panel/works/empty":(...a) => q["view/following/panel/shared/empty"]((_=>c([{content:"works"}]))(),...a),"view/following/panel/authors/empty":(...a) => q["view/following/panel/shared/empty"]((_=>c([{content:"authors"}]))(),...a),"view/following/panel/tags/empty":(...a) => q["view/following/panel/shared/empty"]((_=>c([{content:"tags"}]))(),...a),"view/following/panel/categories/empty":(...a) => q["view/following/panel/shared/empty"]((_=>c([{content:"tag categories"}]))(),...a),"view/ignoring/main/title":_=>c([{content:"Ignoring"}]),"view/ignoring/main/description":_=>c([{content:"The content you're ignoring. Ignored content is hidden everywhere on the site."}]),"view/ignoring/panel/shared/empty":(...a)=>c([{content:"You are not ignoring any "},{content:a[0]},{content:"."}]),"view/ignoring/panel/works/empty":(...a) => q["view/ignoring/panel/shared/empty"]((_=>c([{content:"works"}]))(),...a),"view/ignoring/panel/authors/empty":(...a) => q["view/ignoring/panel/shared/empty"]((_=>c([{content:"authors"}]))(),...a),"view/ignoring/panel/tags/empty":(...a) => q["view/ignoring/panel/shared/empty"]((_=>c([{content:"tags"}]))(),...a),"view/ignoring/panel/categories/empty":(...a) => q["view/ignoring/panel/shared/empty"]((_=>c([{content:"tag categories"}]))(),...a),"view/account/name/label":(...a) => q["shared/form/name/label"](...a),"view/account/name/hint":_=>c([{content:"Your display name or penname — the name your comments and works are attributed to. This can be changed whenever you like, and doesn't have to be unique."}]),"view/account/vanity/label":(...a) => q["shared/form/vanity/label"](...a),"view/account/vanity/hint":_=>c([{content:"Your username, and what people use to "},{content:[{content:"@ping"}],tag:`B`},{content:" you in comments. This "},{content:[{content:"can"}],tag:`I`},{content:" be changed whenever you like, but "},{content:[{content:"must always be unique"}],tag:`B`},{content:"."}]),"view/account/vanity/url-preview":(...a) => q["shared/preview"](...a),"view/account/description/label":(...a) => q["shared/form/description/label"](...a),"view/account/description/hint":_=>c([{content:"This bio will appear on your profile above any works."}]),"view/account/support-link/label":_=>c([{content:"Support Link"}]),"view/account/support-link/hint":_=>c([{content:"An optional link that people can use to support you. You could link directly to a payment or subscription platform, or you could use a service like Linktree."}]),"view/account/support-message/label":_=>c([{content:"Message"}]),"view/account/support-message/hint":_=>c([{content:"A message to display instead of the support link itself. This is required, and will default to \"Support My Writing.\"\nIf you want it to actually display the link, for whatever reason, you can put the link here as well."}]),"view/account/support-message/placeholder":(...a) => q["author/support-message/placeholder"](...a),"view/account/pronouns/label":_=>c([{content:"Pronouns"}]),"view/account/pronouns/hint":_=>c([{content:"The pronouns that others should refer to you with. These will appear next to your name, usually."}]),"view/account/action/logout":_=>c([{content:"Log Out"}]),"view/account/action/delete":_=>c([{content:"Delete Account"}]),"view/account/toast/failed-to-save":(...a) => q["shared/toast/failed-to-save"]((_=>c([{content:"account data"}]))(),...a),"view/account/toast/saved":(...a) => q["shared/toast/saved"]((_=>c([{content:"account data"}]))(),...a),"view/account/auth/service/accessibility/connect":(...a)=>c([{content:"connect "},{content:a[0]}]),"view/account/auth/service/accessibility/disconnect":(...a)=>c([{content:"disconnect "},{content:a[0]},{content:" account "},{content:a[1]}]),"view/account/auth/none/title":_=>c([{content:"Log in or sign up"}]),"view/account/auth/none/description":_=>c([{content:"fluff4.me does not store an email address or password for your account. You must authenticate with a third-party service to begin."}]),"view/account/auth/none/needs-session":_=>c([{content:"You must have a session in order to log in. Try refreshing the page?"}]),"view/account/auth/has-authorisations/title":_=>c([{content:"Authorisations"}]),"view/account/auth/has-authorisations/description":_=>c([{content:"Your authorisation(s) are not currently associated with a fluff4.me account. You may authenticate with additional third party services to log in or sign up."}]),"view/account/auth/logged-in/title":_=>c([{content:"Authorisations"}]),"view/account/auth/logged-in/description":_=>c([{content:"These third party service accounts are linked to your fluff4.me account and may be used to log in."}]),"view/account/create/title":_=>c([{content:"Create account"}]),"view/account/create/description":_=>c([{content:"The "},{content:[{content:"connected third party service accounts"}],tag:`LINK(#authorisations)`},{content:" will be used for login."}]),"view/account/create/submit":_=>c([{content:"Sign Up!"}]),"view/account/update/title":_=>c([{content:"Update profile"}]),"view/account/update/submit":(...a) => q["shared/action/save"](...a),"view/author/works/title":_=>c([{content:"Works"}]),"view/author/works/content/empty":_=>c([{content:"This author has not yet shared any work..."}]),"view/author/works/action/label/new":_=>c([{content:"New Work"}]),"view/work-edit/shared/toast/failed-to-save":(...a) => q["shared/toast/failed-to-save"](...a),"view/work-edit/shared/toast/saved":(...a) => q["shared/toast/saved"](...a),"view/work-edit/shared/form/name/label":(...a) => q["shared/form/name/label"](...a),"view/work-edit/shared/form/name/hint":_=>c([{content:"The name of your work. This does not have to be unique."}]),"view/work-edit/shared/form/vanity/label":(...a) => q["shared/form/vanity/label"](...a),"view/work-edit/shared/form/vanity/hint":_=>c([{content:"The identifier for this work, which will appear in its URL."}]),"view/work-edit/shared/form/vanity/url-preview":(...a) => q["shared/preview"](...a),"view/work-edit/shared/form/description/label":(...a) => q["shared/form/description/label"](...a),"view/work-edit/shared/form/description/hint":_=>c([{content:"A simple 1-2 sentence description of the work. This will be the only descriptive text shown when works are displayed in lists."}]),"view/work-edit/shared/form/synopsis/label":_=>c([{content:"Synopsis"}]),"view/work-edit/shared/form/synopsis/hint":_=>c([{content:"The full text describing this work. This will only appear in the full work view."}]),"view/work-edit/shared/form/tags/label":(...a) => q["shared/form/tags/label"](...a),"view/work-edit/shared/form/visibility/label":(...a) => q["shared/form/visibility/label"](...a),"view/work-edit/shared/form/visibility/hint":_=>c([{content:"When set to public, a work will not be visible until it has a public chapter as well."}]),"view/work-edit/shared/form/visibility/public":(...a) => q["shared/form/visibility/public"](...a),"view/work-edit/shared/form/visibility/private":(...a) => q["shared/form/visibility/private"](...a),"view/work-edit/create/title":_=>c([{content:"Create work"}]),"view/work-edit/create/submit":(...a) => q["shared/action/create"](...a),"view/work-edit/update/title":_=>c([{content:"Edit work"}]),"view/work-edit/update/submit":(...a) => q["shared/action/save"](...a),"view/work-edit/update/action/delete":_=>c([{content:"Delete Work"}]),"view/work-edit/update/action/new-chapter":(...a) => q["shared/action/new-chapter"](...a),"view/work/chapters/title":(...a) => q["shared/term/chapters"](...a),"view/work/chapters/content/empty":_=>c([{content:"This work does not contain any chapters."}]),"view/work/chapters/action/label/new":(...a) => q["shared/action/new-chapter"](...a),"view/chapter-edit/shared/toast/failed-to-save":(...a) => q["shared/toast/failed-to-save"]((_=>c([{content:"chapter"}]))(),...a),"view/chapter-edit/shared/toast/saved":(...a) => q["shared/toast/saved"]((_=>c([{content:"chapter"}]))(),...a),"view/chapter-edit/shared/form/name/label":(...a) => q["shared/form/name/label"](...a),"view/chapter-edit/shared/form/name/hint":_=>c([{content:"The name of this chapter. This does not have to be unique."}]),"view/chapter-edit/shared/form/tags/label":(...a) => q["shared/form/tags/label"](...a),"view/chapter-edit/shared/form/body/label":(...a) => q["shared/form/body/label"](...a),"view/chapter-edit/shared/form/body/hint":_=>c([{content:"The content of this chapter. There is no specific character count limit, but if your chapter exceeds 1MB it will be rejected. You will probably never run into this."}]),"view/chapter-edit/shared/form/notes/label":(...a) => q["shared/form/notes/label"](...a),"view/chapter-edit/shared/form/notes/hint":_=>c([{content:"Optional additional text to display alongside the chapter."}]),"view/chapter-edit/shared/form/visibility/label":(...a) => q["shared/form/visibility/label"](...a),"view/chapter-edit/shared/form/visibility/public":(...a) => q["shared/form/visibility/public"](...a),"view/chapter-edit/shared/form/visibility/private":(...a) => q["shared/form/visibility/private"](...a),"view/chapter-edit/shared/form/visibility/patreon":(...a) => q["shared/form/visibility/patreon"](...a),"view/chapter-edit/shared/form/type/label":_=>c([{content:"Type"}]),"view/chapter-edit/shared/form/type/numbered":_=>c([{content:"Numbered"}]),"view/chapter-edit/shared/form/type/numbered/example":(...a)=>c([{content:"Chapter "},{content:a[0]}]),"view/chapter-edit/shared/form/type/other":_=>c([{content:"Other"}]),"view/chapter-edit/shared/form/type/other/example":_=>c([{content:"Interlude"}]),"view/chapter-edit/create/title":_=>c([{content:"Create chapter"}]),"view/chapter-edit/create/submit":(...a) => q["shared/action/create"](...a),"view/chapter-edit/update/title":_=>c([{content:"Edit chapter"}]),"view/chapter-edit/update/submit":(...a) => q["shared/action/save"](...a),"view/chapter-edit/update/action/delete":_=>c([{content:"Delete Chapter"}]),"view/chapter/title":(...a)=>c([...a[0]?[{content:a[0]},{content:". "}]:[],{content:a[1]}]),};exports.default=q})