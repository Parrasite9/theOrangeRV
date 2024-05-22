;/*FB_PKG_DELIM*/

__d("CometListCellHoverActions.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={menuButtonContainer:{display:"x78zum5",pointerEvents:"x67bb7w",position:"x10l6tqk",top:"xwa60dl",transform:"x1cb1t30",$$css:!0},menuButtonContainerFar:{end:"x84fkku",$$css:!0},menuButtonContainerNear:{end:"x1923su1",$$css:!0},visuallyHidden:{WebkitClipPath:"x11adwwt",clip:"x1qvwoe0",clipPath:"x1vzd84k",height:"xjm9jq1",overflowX:"x6ikm8r",overflowY:"x10wlt62",width:"x1i1rx1s",$$css:!0}};function a(a){var b=a.children,d=a.hidden;a=a.showNear;return j.jsx("div",{className:(h||(h=c("stylex")))(k.menuButtonContainer,a===!0?k.menuButtonContainerNear:k.menuButtonContainerFar,d&&k.visuallyHidden),children:Array.isArray(b)?b.filter(function(a){return a!=null}).map(function(a,b){return j.jsx("div",{className:"x1i64zmx",children:a},b)}):b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometListCellHoverButton.react",["fbt","ix","CometCircleButton.react","CometDeferredPopoverTrigger.react","CometEntryPointPopoverTrigger.react","CometLazyPopoverTrigger.react","FocusWithinHandler.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||(k=d("react")),m=k.useCallback,n={buttonShadow:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",boxShadow:"x10xjkym",$$css:!0}};function a(a){var b=a.label,e=a.onFocusChange,f=a.onHoverChange,g=a.onMenuStateChange,k=a.onPress,o=a.size,p=a.testid,q=m(function(a){g!=null&&g(a)},[g]),r=m(function(a,g,m,p,q){return l.jsx("div",{ref:a,children:l.jsx(c("FocusWithinHandler.react"),{onFocusChange:e,children:function(a){return l.jsx("div",{className:(j||(j=c("stylex")))(!a&&n.buttonShadow),children:l.jsx(c("CometCircleButton.react"),{color:"secondary",icon:d("fbicon")._(i("484387"),20),label:b!=null?b:h._("__JHASH__oYmrdmuxyrt__JHASH__"),onHoverIn:function(a){m&&m(a),f&&f(!0)},onHoverOut:function(){p&&p(),f&&f(!1)},onPress:function(){k&&k(),g()},onPressIn:q,size:(a=o)!=null?a:36,testid:void 0,type:"overlay"})})}})})},[e,b,f,k,p,o]);p={align:"middle",fallback:a.popoverFallback,onVisibilityChange:q,popoverProps:a.popoverProps,position:"below"};if(a.popoverTriggerType==="lazy")return l.jsx(c("CometLazyPopoverTrigger.react"),babelHelpers["extends"]({},p,{popoverResource:a.popoverResource,children:function(a,b){return r(a,b)}}));if(a.popoverTriggerType==="entryPoint"){q=p.popoverProps;var s=babelHelpers.objectWithoutPropertiesLoose(p,["popoverProps"]);return l.jsx(c("CometEntryPointPopoverTrigger.react"),babelHelpers["extends"]({},s,{entryPointParams:a.entryPointParams,otherProps:q,popoverEntryPoint:a.popoverEntryPoint,preloadTrigger:"button_aggressive",children:function(a,b,c,d,e,f){return r(a,b,d,e,f)}}))}return l.jsx(c("CometDeferredPopoverTrigger.react"),babelHelpers["extends"]({},p,{popoverResource:a.popoverResource,children:function(a,b){return r(a,b)}}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometNotificationsDropdownMenuButton_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometNotificationsDropdownMenuButton_actor",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},action:"THROW",path:"name"}],type:"Actor",abstractKey:"__isActor"};e.exports=a}),null);
__d("CometNotificationsDropdownMenuButton_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometNotificationsDropdownMenuButton_notification",selections:[{alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_type",storageKey:null},{kind:"ClientExtension",selections:[{alias:"id_for_entrypoint",args:null,kind:"ScalarField",name:"__id",storageKey:null}]}],type:"Notification",abstractKey:null};e.exports=a}),null);
__d("CometNotificationsDropdownMenuContainerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="25177592171888803"}),null);
__d("CometNotificationsDropdownMenuContainerQuery$Parameters",["CometNotificationsDropdownMenuContainerQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometNotificationsDropdownMenuContainerQuery_facebookRelayOperation"),metadata:{},name:"CometNotificationsDropdownMenuContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometNotificationsDropdownMenuContainer.entrypoint",["CometNotificationsDropdownMenuContainerQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c={encoded_notif_id:a.encodedNotifId,environment:a.environment,notif_type:a.notifType,scale:d("WebPixelRatio").get()};return{extraProps:{queryID:a.queryId},queries:{dropdownQueryRef:{parameters:b("CometNotificationsDropdownMenuContainerQuery$Parameters"),variables:c}}}},root:c("JSResourceForInteraction")("CometNotificationsDropdownMenuContainer.react").__setRef("CometNotificationsDropdownMenuContainer.entrypoint")};g["default"]=a}),98);
__d("CometNotificationsDropdownMenuButton.react",["fbt","CometListCellHoverActions.react","CometListCellHoverButton.react","CometNotificationsDropdownMenuButton_actor.graphql","CometNotificationsDropdownMenuButton_notification.graphql","CometNotificationsDropdownMenuContainer.entrypoint","CometRelay","react","requireDeferred","useNotificationsEnvironmentFromContext"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l=k||(k=d("react")),m=k.useCallback,n=c("requireDeferred")("OpenOptionsMenuFalcoEvent").__setRef("CometNotificationsDropdownMenuButton.react");function a(a){var e=a.actor$key,f=a.hidden,g=a.notification$key,k=a.onFocusChange,o=a.onHoverChange,p=a.onMenuStateChange,q=a.queryId,r=a.userId;a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometNotificationsDropdownMenuButton_actor.graphql"),e);var s=d("CometRelay").useFragment(j!==void 0?j:j=b("CometNotificationsDropdownMenuButton_notification.graphql"),g);e=m(function(){n.onReady(function(a){a=a.log;return a(function(){return{notification_data:{alert_id:s==null?void 0:s.notif_id,logger_context:"www_tab",notif_type:s==null?void 0:s.notif_type,user_id:r},ref:"www_tab"}})})},[s,r]);g=c("useNotificationsEnvironmentFromContext")();return l.jsx(c("CometListCellHoverActions.react"),{hidden:f,children:l.jsx(c("CometListCellHoverButton.react"),{entryPointParams:{encodedNotifId:s==null?void 0:s.id_for_entrypoint,environment:g,notifType:s==null?void 0:s.notif_type,queryId:q},label:h._("__JHASH__3pUDE4N6fxL__JHASH__",[h._param("entity name",a==null?void 0:a.name)]),onFocusChange:k,onHoverChange:o,onMenuStateChange:p,onPress:e,popoverEntryPoint:c("CometNotificationsDropdownMenuContainer.entrypoint"),popoverProps:{},popoverTriggerType:"entryPoint",popoverType:"menu"})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometNotificationsListItemAttachment_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"isToast"}],kind:"Fragment",metadata:null,name:"CometNotificationsListItemAttachment_notification",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notif_attachments",plural:!0,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemFriendRequestAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"FriendRequestNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemInlineCTAAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"InlineCTACometNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemPageInviteAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"PageInviteNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemQuickPromotionAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"QuickPromotionNotifAttachment",abstractKey:null},{condition:"isToast",kind:"Condition",passingValue:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemInlineSurveyAttachment_attachment",fragmentPropName:"attachment",kind:"ModuleImport"}],type:"InlineSurveyNotifAttachment",abstractKey:null}]}],storageKey:null}],type:"Notification",abstractKey:null};e.exports=a}),null);
__d("CometNotificationsListItemAttachment.react",["CometErrorBoundary.react","CometNotificationsListItemAttachment_notification.graphql","CometRelay","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k=c("requireDeferred")("NotifCtaImpressionFalcoEvent").__setRef("CometNotificationsListItemAttachment.react");function a(a){var b=a.date,d=a.notification,e=a.notificationId;a=a.onPress;return j.jsx(c("CometErrorBoundary.react"),{children:j.jsx(l,{date:b,notification:d,notificationId:e,onPress:a})})}a.displayName=a.name+" [from "+f.id+"]";function l(a){var c=a.date,e=a.notification,f=a.notificationId,g=a.onPress;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometNotificationsListItemAttachment_notification.graphql"),e);var i=function(a){k.onReady(function(b){b=b.log;b(function(){return{cta_type:a,notif_id:f}})})};e=a.notif_attachments;if(e==null)return null;a=e.map(function(a,b){return j.jsx(d("CometRelay").MatchContainer,{match:a,props:{date:c,notifAttachments:a,notificationId:f,onImpression:i,onPress:g}},b)}).filter(Boolean);return a.length===0?null:a}g["default"]=a}),98);
__d("CometNotificationsListItemSeenContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(function(){});g["default"]=b}),98);
__d("CometNotificationsListItem_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometNotificationsListItem_actor",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometNotificationsDropdownMenuButton_actor"}],type:"Actor",abstractKey:"__isActor"};e.exports=a}),null);
__d("CometNotificationsListItem_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"hideIcon"},{defaultValue:!1,kind:"LocalArgument",name:"isToast"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometNotificationsListItem_notification",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometNotificationsDropdownMenuButton_notification"},{args:[{kind:"Variable",name:"isToast",variableName:"isToast"}],kind:"FragmentSpread",name:"CometNotificationsListItemAttachment_notification"},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"body",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notif_attachments",plural:!0,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StructuredSurveySession",kind:"LinkedField",name:"inline_survey",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],type:"InlineSurveyNotifAttachment",abstractKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:56},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:56}],concreteType:"Image",kind:"LinkedField",name:"notif_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_type",storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometNotificationURL_notification"},{alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null},{alias:"creation_time",args:null,concreteType:"CreationTimeWithRelativeText",kind:"LinkedField",name:"creation_time_with_relative_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"timestamp",storageKey:null}],storageKey:null},{condition:"hideIcon",kind:"Condition",passingValue:!1,selections:[{alias:null,args:null,concreteType:"GlyphIconData",kind:"LinkedField",name:"icon_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"glyph_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"glyph_icon_url",storageKey:null}],storageKey:null}]},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{condition:"isToast",kind:"Condition",passingValue:!1,selections:[{alias:null,args:null,concreteType:"NotificationContextInfo",kind:"LinkedField",name:"context_info",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"short_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:null}]},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_hidden",storageKey:null}]}],type:"Notification",abstractKey:null};e.exports=a}),null);
__d("cometNotificationsListItemIcon",["ix","ImageIconSource","getReactionSVGSource"],(function(a,b,c,d,e,f,g,h){"use strict";var i={alarm_clock:h("377559"),app_facebook:h("958818"),app_facebook_avatars_face:h("394258"),app_facebook_reels:h("157566"),app_instagram:h("958820"),app_messenger:h("958823"),app_pages:h("958824"),app_rooms:h("1395467"),"app-business-suite":h("268798"),"app-horizon":h("382687"),"app-oculus":h("20924"),"app-threads":h("396852"),arrows_up_down:h("958826"),badge_heart:h("958827"),ballot_box:h("175937"),bar_chart:h("958828"),bookmark:h("958830"),breaking_news:h("958831"),briefcase:h("958832"),cake:h("958833"),calendar:h("958835"),camcorder_live:h("958836"),"camcorder-cross":h("305625"),card:h("1289629"),caution_triangle:h("958837"),"caution-triangle":h("958837"),"checkmark-circle":h("353184"),circle_3:h("958838"),"circle-heart-ribbon":h("12810"),comment:h("958852"),comment_star:h("958851"),coupon:h("372864"),"default":h("958829"),"desktop-mobile":h("1964681"),diamond:h("380351"),"diamond-rise":h("110482"),direct:h("958854"),friend_add:h("958857"),friends:h("958858"),fundraiser:h("958859"),games:h("958821"),group:h("958860"),headphones:h("2007797"),heart_lock:h("1250959"),high_five_hands:h("958861"),instagram_reels:h("1951540"),link:h("421159"),marketplace:h("894424"),"messages-spotlight":h("150623"),monetization:h("339655"),music:h("232925"),notif_messages_question_live:h("1495236"),"notif-audio-wave-square":h("265477"),"notif-circle-blue-fb-pay":h("290477"),"notif-hex-star":h("340390"),"notif-messenger-breaking-news":h("396950"),"notif-meta":h("184314"),"notif-note":h("286102"),"notif-star-tip":h("1970274"),"notif-unlink":h("389964"),pencil:h("958866"),pencil_checkmark:h("958865"),"phone-cross":h("305627"),photo:h("958867"),pin:h("958868"),play_circle:h("958869"),poke:h("958870"),politics:h("958871"),polls:h("958872"),posts:h("958873"),profile_circle:h("958874"),"profile-professional":h("352978"),relationship:h("958875"),safety_check:h("958876"),send:h("402864"),share:h("958877"),shield:h("958878"),shops:h("1686153"),spark_ar:h("1079479"),stop:h("353186"),stories:h("1819883"),tag:h("958882"),"tag-star":h("276484"),topics:h("958883"),trophy_star:h("158332"),volunteer:h("1185872"),watch_tv:h("958885"),water:h("958886")};function j(a){return new(c("ImageIconSource"))(i[a]||i["default"],28,28)}function a(a,b,e,f){if(b!=null){var g=d("getReactionSVGSource").getReactionSVGSource(b);if(g!=null)return new(c("ImageIconSource"))(g,28,28);else if(b===17&&e!=null)return new(c("ImageIconSource"))(e,28,28)}return a!=null?f===!0&&a==="app_messenger"?j("send"):j(a):null}g["default"]=a}),98);
__d("getCometNotificationURL_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"getCometNotificationURL_notification"};e.exports=a}),null);
__d("isAccountsCenterURI",["isFacebookURI"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("isFacebookURI")(a)&&a.getSubdomain()==="accountscenter"}g["default"]=a}),98);
__d("isAppsURI",["isFacebookURI"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("isFacebookURI")(a)&&a.getSubdomain()==="apps"}g["default"]=a}),98);
__d("isDevelopersURI",["isFacebookURI"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("isFacebookURI")(a)&&a.getSubdomain()==="developers"}g["default"]=a}),98);
__d("getCometNotificationURL",["CometRelay","ConstUriUtils","absoluteToRelative","getCometNotificationURL_notification.graphql","isAccountsCenterURI","isAppsURI","isBulletinDotComURI","isBusinessURI","isDevelopersURI"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=d("CometRelay").readInlineData(h!==void 0?h:h=b("getCometNotificationURL_notification.graphql"),a);a=a==null?void 0:a.url;if(a==null)return null;var e=d("ConstUriUtils").getUri(a);if(e==null)return a;if(window.location.hostname.startsWith("www.facebook.com")||c("isBusinessURI")(e)||c("isDevelopersURI")(e)||c("isBulletinDotComURI")(e)||c("isAccountsCenterURI")(e)||c("isAppsURI")(e))return a;else return c("absoluteToRelative")(a)}g["default"]=a}),98);
__d("useCometNotificationURL_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometNotificationURL_notification",selections:[{kind:"InlineDataFragmentSpread",name:"getCometNotificationURL_notification",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'}],args:null,argumentDefinitions:[]}],type:"Notification",abstractKey:null};e.exports=a}),null);
__d("useCometNotificationURL",["CometRelay","getCometNotificationURL","useCometNotificationURL_notification.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometNotificationURL_notification.graphql"),a);return c("getCometNotificationURL")(a)}g["default"]=a}),98);
__d("CometNotificationsUpdateSeenStateMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="9689526877756190"}),null);
__d("CometNotificationsUpdateSeenStateMutation.graphql",["CometNotificationsUpdateSeenStateMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"environment"},c={defaultValue:null,kind:"LocalArgument",name:"input"},d=[{kind:"Variable",name:"data",variableName:"input"}],e={alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notifications",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,c],kind:"Fragment",metadata:null,name:"CometNotificationsUpdateSeenStateMutation",selections:[{alias:null,args:d,concreteType:"NotificationsUpdateSeenOrReadResponsePayload",kind:"LinkedField",name:"notifications_update_seen_or_read",plural:!1,selections:[e,{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometNotificationsBadgeCountFragment_viewer"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,a],kind:"Operation",name:"CometNotificationsUpdateSeenStateMutation",selections:[{alias:null,args:d,concreteType:"NotificationsUpdateSeenOrReadResponsePayload",kind:"LinkedField",name:"notifications_update_seen_or_read",plural:!1,selections:[e,{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"environment",variableName:"environment"}],kind:"ScalarField",name:"notifications_unseen_count",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("CometNotificationsUpdateSeenStateMutation_facebookRelayOperation"),metadata:{},name:"CometNotificationsUpdateSeenStateMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometNotificationsUpdateSeenStateMutation",["CometNotificationsThinClientConnectionHandler","CometNotificationsUpdateSeenStateMutation.graphql","CometRelay","relay-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("CometNotificationsUpdateSeenStateMutation.graphql"),j=function(a){return a.get(d("relay-runtime").VIEWER_ID)},k=function(a){return a.getValue("notifications_unseen_count",{environment:"MAIN_SURFACE"})},l=function(a){a=j(a);if(a==null)return;a=d("CometNotificationsThinClientConnectionHandler").getConnection(a,"CometNotificationsList_notifications_page");if(a==null)return;a=a.getLinkedRecords("edges");if(a==null||a.length===0)return;var b=[];a.forEach(function(a){if(a==null)return;a=a.getLinkedRecord("node");if(a==null)return;var c=a.getType();if(c!=="NotifPageNotificationRow"&&c!=="NotifPageCachedNotificationRow")return;c=a.getLinkedRecord("notif");if(c==null)return;b.push(c)});return b};function a(a,b){a=l(a);if(a==null||a.length===0)return;var c=a.findIndex(function(a){return a.getValue("id")===b});if(c<0)return;a[c]!=null&&a[c].setValue("SEEN_BUT_UNREAD","seen_state")}function c(a,b){a=l(a);if(a==null||a.length===0)return;var c=a.findIndex(function(a){return a.getValue("id")===b});if(c<0)return;a[c]!=null&&a[c].setValue("SEEN_AND_READ","seen_state")}var m=function(a,b){a=l(a);if(a==null||a.length===0)return;a.forEach(function(a){return b(a)})};function e(a){var b=function(a){if(a==null)return;a.getValue("seen_state")==="UNSEEN_AND_UNREAD"&&a.setValue("SEEN_BUT_UNREAD","seen_state")};m(a,b)}function f(a){var b=function(a){if(a==null)return;(a.getValue("seen_state")==="UNSEEN_AND_UNREAD"||a.getValue("seen_state")==="SEEN_BUT_UNREAD")&&a.setValue("SEEN_AND_READ","seen_state")};m(a,b)}function n(a){a=j(a);if(a==null)return;var b=k(a);if(b==null)return;b=+b-1;a.setValue(Math.max(0,b),"notifications_unseen_count",{environment:"MAIN_SURFACE"})}function o(a){a=j(a);if(a==null)return;a.setValue(0,"notifications_unseen_count",{environment:"MAIN_SURFACE"})}function p(a,b,c){var e=c.mutationLogger(),f=e.logOnError,g=e.logOnSuccess;return d("CometRelay").commitMutation(a,{mutation:i,onCompleted:function(){g(),c.onSuccess&&c.onSuccess()},onError:function(a){f(a),c.onError&&c.onError(a)},optimisticUpdater:c.updater,variables:b})}g.updateSingleNotifSeenState=a;g.updateSingleNotifReadState=c;g.updateMultiNotifSeenState=e;g.updateMultiNotifReadState=f;g.lowerBadgeCountByOne=n;g.clearBadgeCount=o;g.CometNotificationsUpdateSeenStateMutation=p;g.mutation=i}),98);
__d("useGetCancellableSeenStateCallback",["CometRelay","CometThrottle","createCancelableFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useMemo;function a(a){var b=a.accessibilityString,e=a.mutationLogger,f=a.notifId,g=a.queryEnvironment,h=a.queryID,j=a.receivedNotificationIdsRef,k=a.seenState,l=a.timestamp,m=a.triggerAccessibilityAlert,n=a.updater,o=a.updateType,p=d("CometRelay").useRelayEnvironment();return i(function(){var a=c("createCancelableFunction")(function(){return n({accessibilityString:b,environment:p,mutationLogger:e,notifId:f,queryEnvironment:g,queryID:h,receivedNotificationIdsRef:j,seenState:k,timestamp:l,triggerAccessibilityAlert:m,updateType:o})}),d=!1,i=c("CometThrottle")(function(){d=!1,a()},1e3,{leading:!0}),q=function(){d=!0,i()};q.dispose=function(){d&&a(),a.cancel()};return q},[n,b,p,e,f,g,h,j,k,l,m,o])}g["default"]=a}),98);
__d("useHandleUpdateSingleNotifReadState",["CometNotificationsUpdateSeenStateMutation","recoverableViolation","useGetCancellableSeenStateCallback"],(function(a,b,c,d,e,f,g){"use strict";function h(a){var b=a.environment,e=a.mutationLogger,f=a.notifId,g=a.queryEnvironment,h=a.queryID,i=a.seenState;a=a.updateType;if(f==null||e==null||i==null||a==null)return;d("CometNotificationsUpdateSeenStateMutation").CometNotificationsUpdateSeenStateMutation(b,{environment:g,input:{environment:g,is_comet:!0,last_notif_sync_time:0,notif_ids:[f],query_id:h,source:"unknown",update_type:a}},{mutationLogger:function(){return e(i)},onError:function(a){c("recoverableViolation")("Update read state (single) mutation failed with an error: ","Notifications",{error:a})},updater:function(a){d("CometNotificationsUpdateSeenStateMutation").updateSingleNotifReadState(a,f)}})}function a(a){return c("useGetCancellableSeenStateCallback")(babelHelpers["extends"]({},a,{updater:h}))}g["default"]=a}),98);
__d("useNotificationsImpressionLogger",["gkx","react","requireDeferred","usePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback,j=c("requireDeferred")("NotifImpressionEventsFalcoEvent").__setRef("useNotificationsImpressionLogger");function a(a){var b=a.actorId,d=a.loggerContext,e=a.notifId,f=a.trackingData;a=i(function(a){a=a.visibleDuration;var c={notification_data:{duration:String(a),logger_context:d,notif_id:e,user_id:b},ref:"www_tab",tracking:JSON.stringify(f)};j.onReady(function(a){a=a.log;return a(function(){return c})})},[f,d,e,b]);a=c("usePartialViewImpression")({onImpressionEnd:a});return[a,null]}g["default"]=a}),98);
__d("useScrollToNotif",["CometRouteMatch","XCometNotificationsControllerRouteBuilder","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useRef;function a(a){var b,e=(b=d("CometRouteMatch")).useCurrentRouteMatcher(b.MatchFunctions.urlMatchFunction);b=b.useHostedRouteMatcher(b.MatchFunctions.urlMatchFunction);b=a!=null?b(a):!1;a=e(c("XCometNotificationsControllerRouteBuilder").buildURL({}).toString());e=i(b&&!a);return[b,e]}g.useScrollToNotif=a}),98);
__d("CometNotificationsListItem.react",["fbt","CometBadge.react","CometBoldedEntityRenderer","CometEmojiTransform","CometEmoticonTransform","CometFocusTableContext","CometNotificationsDropdownMenuButton.react","CometNotificationsListItemAttachment.react","CometNotificationsListItemSeenContext","CometNotificationsListItem_actor.graphql","CometNotificationsListItem_notification.graphql","CometNotificationsMutationLogger","CometNotificationsTimestamp.react","CometPassiveGetRouterStateContext","CometPressable.react","CometProductAttribution","CometRelay","CometTextWithEntitiesRelay.react","FocusWithinHandler.react","MWFacebookUserWithoutMessengerAccess","TetraAccessoryListCell_DEPRECATED.react","TetraIcon.react","TetraText.react","cometNotificationsListItemIcon","isStringNullOrEmpty","mergeRefs","qex","react","requireDeferred","scrollIntoView","useCometNotificationURL","useHandleUpdateSingleNotifReadState","useMenuButtonVisibilityState","useNotificationsEnvironmentFromContext","useNotificationsImpressionLogger","useScrollToNotif","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l=k||(k=d("react"));e=k;var m=e.useCallback,n=e.useContext,o=e.useLayoutEffect,p=e.useMemo,q=e.useRef,r=c("requireDeferred")("NotifClickEventsFalcoEvent").__setRef("CometNotificationsListItem.react"),s={pressable:{alignItems:"x6s0dn4",display:"x78zum5",height:"xsdox4t",justifyContent:"xl56j7k",paddingStart:"x1e558r4",paddingLeft:null,paddingRight:null,width:"xw4jnvo",$$css:!0}},t={"*":[c("CometBoldedEntityRenderer")]},u=[c("CometEmoticonTransform")(),c("CometEmojiTransform")()],aa=i!==void 0?i:i=b("CometNotificationsListItem_actor.graphql"),ba=j!==void 0?j:j=b("CometNotificationsListItem_notification.graphql");function a(a){var b=a.actor,e=a.hideMenuButton,f=e===void 0?!1:e;e=a.isFromPageNotification;var g=a.isNotificationsRoute,i=g===void 0?!1:g;g=a.loggerContext;var j=g===void 0?"www_tab":g;g=a.notification;var k=a.onClick,v=a.onClose,w=a.preventLocalNavigation,x=a.queryID,y=a.replace,z=a.routeTarget,A=a.shouldOpenInBlankTarget,B=a.shouldPrefetch;B=B===void 0?!1:B;var C=a.showSelectedState,ca=C===void 0?!1:C,D=a.trackingData,E=d("CometRelay").useFragment(aa,b),F=d("CometRelay").useFragment(ba,g);C=c("useCometNotificationURL")(F);a=F.body;b=F.context_info;g=F.creation_time;var G=F.id,da=F.notif_attachments,H=F.notif_id,I=F.notif_image,J=F.notif_type,K=F.seen_state,L=F.tracking,M=q(null),N=E==null?void 0:E.id,O=(e=e)!=null?e:!1;e=babelHelpers["extends"]({navigation_source:"notifications_click"},J!=null?{notif_type:J}:null);var P=p(function(){var a;return(a=D)!=null?a:{notif_tracking:L}},[L,D]),ea={onNavigate:v,passthroughProps:{initialTracePolicy:"comet.notifications",notification_id:(v=H)!=null?v:void 0,notificationTracking:P,notificationType:J,ref:"notification"},prefetchQueriesOnHover:B,preventLocalNavigation:(v=w)!=null?v:!1,productAttribution:{tap_point:"via_notification"},replace:(B=y)!=null?B:void 0,routeTarget:O?"content":(w=z)!=null?w:void 0,target:A===!0?"_blank":void 0,traceParams:e,url:(v=C)!=null?v:void 0};y=d("useScrollToNotif").useScrollToNotif(C);var fa=y[0],Q=y[1],R=Q.current;B=n(c("CometFocusTableContext"));var S=B.FocusCell;z=B.FocusRow;var ga=(w=z)!=null?w:l.Fragment;o(function(){M.current!=null&&R&&(c("scrollIntoView")(M.current,{behavior:"auto",verticalAlign:"center"}),Q.current=!1)},[R,Q]);A=c("useNotificationsEnvironmentFromContext")();var T=c("useHandleUpdateSingleNotifReadState")({accessibilityString:h._("__JHASH__c_y3p8iLeMa__JHASH__"),mutationLogger:d("CometNotificationsMutationLogger").notificationMarkAsReadStart,notifId:G,queryEnvironment:A,queryID:x,seenState:K,timestamp:null,updateType:"MARK_READ"}),U=n(c("CometPassiveGetRouterStateContext")),ha=m(function(){G!=null&&N!=null&&(k&&k(),r.onReady(function(a){a=a.log;return a(function(){var a;return{navigation_chain_minified:d("CometProductAttribution").getMinifiedTopMostRouteProductAttribution(U),notification_data:{alert_id:(a=H)!=null?a:"",logger_context:(a=j)!=null?a:"",to_user:N},ref:i?"notifications_route":"www_tab",tracking:JSON.stringify(D)}})}),T())},[N,T,i,j,H,G,k,U,D]),V=a;e=g==null?void 0:g.timestamp;v=I==null?void 0:I.uri;C=c("useMenuButtonVisibilityState")();var ia=C[0];y=C[1];var W=y.setListItemHovered,ja=y.setMenuBtnFocused,ka=y.setMenuBtnHovered,la=y.setMenuOpened,ma=m(function(){W(!1)},[W]),na=m(function(){W(!0)},[W]);B=c("useNotificationsImpressionLogger")({actorId:N,loggerContext:j,notifId:H,trackingData:P});var X=B[0],oa=B[1],pa=n(c("CometNotificationsListItemSeenContext")),Y=c("useVisibilityObserver")({onVisible:function(){pa(G)}}),qa=p(function(){if(j==="www_tab"||j==="beeper")return c("mergeRefs")(X,M,Y);else return M},[Y,j,X]);z=d("MWFacebookUserWithoutMessengerAccess").useIsFacebookUserWithoutMessengerAccess();if(G==null||V==null||v==null||K==null||e==null)return null;w=new Date(e*1e3);var Z=K==="SEEN_AND_READ";a=(A=F.icon_data)==null?void 0:A.reaction_type;I=(g=F.icon_data)==null?void 0:g.glyph_name;y=(C=F.icon_data)==null?void 0:C.glyph_icon_url;P=c("cometNotificationsListItemIcon")(I,a,y,z);B=P!=null?{backgroundColor:"transparent",icon:l.jsx(c("TetraIcon.react"),{color:"white",icon:P}),size:28,type:"activityBadge"}:null;a===17&&(B.overflow="visible");K=(e=c("qex")._("1463"))!=null?e:!1;g=(A=c("qex")._("1464"))!=null?A:!1;C=l.jsx(c("CometNotificationsTimestamp.react"),{date:w,format:K?"minimized":"normal",seenAndRead:Z});var ra={addOn:B,shape:"circle",size:56,source:{uri:v},type:"profile-photo"},sa={component:l.jsx(c("CometNotificationsListItemAttachment.react"),{date:w,notification:F,notificationId:(I=F.notif_id)!=null?I:"",onPress:T}),type:"override-column"};y=F==null?void 0:F.is_hidden;if(y===!0)return null;var $=da.find(function(a){return a.inline_survey!=null})!=null;P=b==null?void 0:(z=b.short_text)==null?void 0:z.text;a=g?Z?l.jsx(c("TetraText.react"),{color:"secondary",testid:void 0,type:"body4",children:P}):l.jsx(c("TetraText.react"),{color:"highlight",testid:void 0,type:"bodyLink4",children:P}):P;var ta=l.jsxs(l.Fragment,{children:[C,!c("isStringNullOrEmpty")(P)&&l.jsxs(l.Fragment,{children:[l.jsx("span",{"aria-hidden":"true",className:"xw3qccf xsgj6o6",children:"\xb7"}),a]})]});return l.jsx(c("FocusWithinHandler.react"),{children:function(a,b){a=J!=="friend"&&J!=="page_invite"&&!$?l.jsx(c("CometNotificationsDropdownMenuButton.react"),{actor$key:E,hidden:f||O||!(a&&b)&&!ia,notification$key:F,onFocusChange:ja,onHoverChange:ka,onMenuStateChange:la,queryId:x,userId:N}):null;return l.jsx(ga,{children:l.jsxs("div",{className:"x1n2onr6",onMouseEnter:na,onMouseLeave:ma,ref:qa,role:"row",children:[oa,l.jsx(c("TetraAccessoryListCell_DEPRECATED.react"),{addOnBottom:sa,addOnPrimary:ra,addOnSecondary:{addOn:Z?l.jsx("div",{className:"x1kpxq89 xsmyaan"}):l.jsx(c("CometPressable.react"),{expanding:!0,onPress:T,overlayDisabled:!0,role:"none",testid:void 0,xstyle:s.pressable,children:l.jsx(c("CometBadge.react"),{color:"blue",isProfileBadge:!0,size:12})}),type:"body"},addOnSecondaryVerticalAlign:$?"top":"center",body:l.jsxs(l.Fragment,{children:[Z?null:l.jsx("div",{className:"xzpqnlu x179tack x10l6tqk xdnwjd9",children:h._("__JHASH__0NXUkEu5yQv__JHASH__")}),l.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:t,textWithEntities:V,transforms:u})]}),bodyColor:Z?"secondary":"primary",bodyLineLimit:3,linkProps:ea,meta:ta,metaLineLimit:1,onPress:ha,role:"none",selected:fa&&ca,testid:void 0}),S?l.jsx(S,{"aria-label":h._("__JHASH__SJFVJ1HCRT3__JHASH__"),children:a}):a]})})}})}a.displayName=a.name+" [from "+f.id+"]";e=l.memo(a);g["default"]=e}),226);