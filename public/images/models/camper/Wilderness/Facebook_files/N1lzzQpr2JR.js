;/*FB_PKG_DELIM*/

__d("CometNotificationsMutationLogger",["QuickPerformanceLogger","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h,i=c("qpl")._(3473469,"7351"),j="client_action",k="status",l="seen_state",m=0;function n(a,b){var d;b===void 0&&(b=null);var e=m++;(h||(h=c("QuickPerformanceLogger"))).markerStart(i,e);h.markerAnnotate(i,{string:(d={},d[j]=a,d)},{instanceKey:e});h.markerAnnotate(i,{string:(a={},a[k]="started",a)},{instanceKey:e});h.markerAnnotate(i,{string:{environment:"MAIN_SURFACE"}},{instanceKey:e});if(b){(h||(h=c("QuickPerformanceLogger"))).markerAnnotate(i,{string:(d={},d[l]=b,d)},{instanceKey:e})}return q(e)}function o(a){var b;(h||(h=c("QuickPerformanceLogger"))).markerAnnotate(i,{string:(b={},b[k]="success",b)},{instanceKey:a});h.markerEnd(i,2,a)}function p(a,b){(h||(h=c("QuickPerformanceLogger"))).markerAnnotate(i,{string:{status:"error"}},{instanceKey:a}),h.markerAnnotate(i,{string:{error_localized_description:b==null?void 0:b.message}},{instanceKey:a}),h.markerAnnotate(i,{string:{error_domain:b==null?void 0:b.name}},{instanceKey:a}),h.markerEnd(i,87,a)}function q(a){return{logOnError:function(b){return p(a,b)},logOnSuccess:function(){return o(a)}}}function a(){return n("HIDE")}function b(){return n("MARK_ALL_AS_READ")}function d(){return n("MARK_ALL_AS_SEEN")}function e(a){return n("MARK_AS_READ",a)}function f(){return n("MARK_AS_SEEN")}function r(a){return n("MARK_AS_UNREAD",a)}function s(){return n("UNHIDE")}g.notificationHideStart=a;g.notificationMarkAllAsReadStart=b;g.notificationMarkAllAsSeenStart=d;g.notificationMarkAsReadStart=e;g.notificationMarkAsSeenStart=f;g.notificationMarkAsUnreadStart=r;g.notificationUnhideStart=s}),98);
__d("CometNotificationsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7776845209096008"}),null);
__d("CometNotificationsRootQuery$Parameters",["CometNotificationsRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometNotificationsRootQuery_facebookRelayOperation"),metadata:{},name:"CometNotificationsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("NotificationsStoriesEnvironmentConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({MAIN_SURFACE:"MAIN_SURFACE",COMET_DESKTOP:"COMET_DESKTOP",MOBILE:"MOBILE",MOBILE_WIDGET:"MOBILE_WIDGET",LOCKSCREEN_WIDGET:"LOCKSCREEN_WIDGET",PUSH:"PUSH",EMAIL:"EMAIL",BEEPER:"BEEPER",NOTIF_HEAD:"NOTIF_HEAD",CONVERSATION_HUB:"CONVERSATION_HUB",SERVER:"SERVER",TEST:"TEST",INTERN_NOTIFS:"INTERN_NOTIFS",UNKNOWN:"UNKNOWN",ADS_UNIFIED_NAV:"ADS_UNIFIED_NAV",ADS_MANAGER_APP:"ADS_MANAGER_APP",PAGES:"PAGES",IPHONE_IMMERSIVE:"IPHONE_IMMERSIVE",GROUPS:"GROUPS",GROUPS_SOCIAL:"GROUPS_SOCIAL",GROUPS_TAB:"GROUPS_TAB",GROUP_ADDS:"GROUP_ADDS",FACEBOOK_ANALYTICS:"FACEBOOK_ANALYTICS",FACEBOOK_MENTIONS:"FACEBOOK_MENTIONS",EVENTS:"EVENTS",MARKETPLACE:"MARKETPLACE",GAMES_DESKTOP:"GAMES_DESKTOP",VIDEO_HOME:"VIDEO_HOME",VIDEO_APP:"VIDEO_APP",WATCH_QUEUE:"WATCH_QUEUE",MESSENGER_ACTIVITY_TAB:"MESSENGER_ACTIVITY_TAB",MESSENGER_PEOPLE_TAB:"MESSENGER_PEOPLE_TAB",PAGE_ADMIN_FILTER:"PAGE_ADMIN_FILTER",PAGE_ADMIN_RICH_UPDATES:"PAGE_ADMIN_RICH_UPDATES",MENTION_FILTER:"MENTION_FILTER",WATCH:"WATCH",GAMING_APP:"GAMING_APP",GAMES_APP_TOP_UNIT:"GAMES_APP_TOP_UNIT",GAMES_TAB:"GAMES_TAB",KOTOTORO_APP:"KOTOTORO_APP",CARDIEM_SURFACE:"CARDIEM_SURFACE",JOBS:"JOBS",INTL_LOCPLAT:"INTL_LOCPLAT",DEVSITE:"devsite",CREATOR_STUDIO:"CREATOR_STUDIO",CREATOR_STUDIO_MOBILE:"CREATOR_STUDIO_MOBILE",CPX_INSIGHTS_RECOMMENDATIONS:"CPX_INSIGHTS_RECOMMENDATIONS",BUSINESS_HOME:"BUSINESS_HOME",BIZAPP_ALERT:"BIZAPP_ALERT",BIZAPP:"BIZAPP",BIZ_NOTIFICATION:"BIZ_NOTIFICATION",DATING_INACTIVE_USER_WATERFALL:"DATING_INACTIVE_USER_WATERFALL",NEWS_TAB:"NEWS_TAB",NEWS_TAB_NOTIF_SHEET:"NEWS_TAB_NOTIF_SHEET",DATING_TAB:"DATING_TAB",TODAY_IN:"TODAY_IN",MEMORIES:"MEMORIES",FRIENDS_TAB:"FRIENDS_TAB",IG_TOURNAMENT_MENU:"IG_TOURNAMENT_MENU",CORONAVIRUS_HUB_TAB:"CORONAVIRUS_HUB_TAB",PAGE_TAB_BADGING:"PAGE_TAB_BADGING",NEIGHBORHOODS_TAB:"NEIGHBORHOODS_TAB",CAMPUS_TAB:"CAMPUS_TAB",SHOP_TAB:"SHOP_TAB",DIRECT_SUPPORT_ADMIN_PANEL:"DIRECT_SUPPORT_ADMIN_PANEL",PRODASH_TAB:"PRODASH_TAB",BUSINESS_CONSOLE:"BUSINESS_CONSOLE",WORKSTREAM:"WORKSTREAM",PREVIEW:"PREVIEW",MOBILE_CENTER_TAB:"MOBILE_CENTER_TAB",FB_SHORTS_TAB:"FB_SHORTS_TAB",FEEDS:"FEEDS",WEARABLE_APP:"WEARABLE_APP",HORIZON:"HORIZON",COURIER:"COURIER",FEEDBACK_TILES:"FEEDBACK_TILES",WEB_DESKTOP:"WEB_DESKTOP",MESSENGER_FAMILY_CENTER:"MESSENGER_FAMILY_CENTER",FB_FAMILY_CENTER:"FB_FAMILY_CENTER"});f["default"]=a}),66);
__d("CometNotificationsRoot.entrypoint",["CometNotificationsRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";var h=15;a={getPreloadProps:function(a){a={count:h,environment:"MAIN_SURFACE",filter_tokens:(a=a==null?void 0:(a=a.passthroughProps)==null?void 0:a.filterTokens)!=null?a:[],scale:d("WebPixelRatio").get()};return{queries:{notificationsRootQueryReference:{parameters:b("CometNotificationsRootQuery$Parameters"),variables:a}}}},root:c("JSResourceForInteraction")("CometNotificationsRoot.react").__setRef("CometNotificationsRoot.entrypoint")};g["default"]=a}),98);
__d("CometNotificationsTimestamp.react",["CometRelativeTimestamp.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.date,d=a.format;a=a.seenAndRead;return a?i.jsx(c("TetraText.react"),{color:"secondary",testid:void 0,type:"body4",children:i.jsx(c("CometRelativeTimestamp.react"),{date:b,format:(a=d)!=null?a:"normal"})}):i.jsx(c("TetraText.react"),{color:"highlight",testid:void 0,type:"bodyLink4",children:i.jsx(c("CometRelativeTimestamp.react"),{date:b,format:(a=d)!=null?a:"normal"})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("isBusinessURI",["isFacebookURI"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("isFacebookURI")(a)&&a.getSubdomain()==="business"}g["default"]=a}),98);
__d("useNotificationsEnvironmentFromContext",["CometNotificationsRootContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){var a=i(c("CometNotificationsRootContext"));a=a.source;a=(a=a)!=null?a:"MAIN_SURFACE";return a}g["default"]=a}),98);