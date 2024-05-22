;/*FB_PKG_DELIM*/

__d("CometReelsMediaVideoPlayerAudioTrackToggle.react",["fbt","ix","CometLazyPopoverTrigger.react","FBReelsAvailableAudioTracksContext","FDSIcon.react","JSResourceForInteraction","StoriesViewerMenuButton.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react"));b=j;var l=b.useContext,m=b.useState,n=c("JSResourceForInteraction")("CometReelsMediaVideoPlayerAudioTrackPicker.react").__setRef("CometReelsMediaVideoPlayerAudioTrackToggle.react");function a(a){var b=a.align;a=a.position;var e=l(c("FBReelsAvailableAudioTracksContext"));e=e.availableAudioTracks;var f=m(!0),g=f[0],j=f[1];if(e.length<=1)return null;f=function(){j(!1)};var o=k.jsx(c("FDSIcon.react"),{color:"white",icon:d("fbicon")._(i("259117"),20),testid:void 0}),p=h._("__JHASH__PgqwepzyLFe__JHASH__");return k.jsx(c("CometLazyPopoverTrigger.react"),{align:b,popoverProps:{onClose:f,showPane:g},popoverResource:n,position:a,children:function(a,b){return k.jsx(c("StoriesViewerMenuButton.react"),{icon:o,label:p,onClick:b,ref:a})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("useFBReelsViewerClose",["CometRouteRenderType","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("CometRouteRenderType").useIsPushView(),b=c("useCometRouterDispatcher")();return function(){!a&&b&&b.goBack?b.goBack():a&&b&&b.popPushView&&b.popPushView()}}g["default"]=a}),98);
__d("FBReelsCloseButton.react",["fbt","ix","CometPressable.react","IconSource","TetraIcon.react","react","useFBReelsViewerClose"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||d("react");function a(a){a=a.dark;a=a===void 0?!1:a;var b=c("useFBReelsViewerClose")(),d=function(a){b()};a=a?new(c("IconSource"))("FB",i("1351092"),24):new(c("IconSource"))("FB",i("1495001"),24);return k.jsx("div",{className:"x78zum5 xds687c xbyyjgo x10l6tqk x13vifvy x13dflua x19991ni xz4gly6 x1o7uuvo",children:k.jsx(c("CometPressable.react"),{"aria-label":h._("__JHASH__tnRfHlva-bL__JHASH__"),display:"inline",onPress:d,overlayDisabled:!0,children:k.jsx("div",{className:"x1ypdohk x78zum5 xw7yly9 xktsk01 x1yztbdb x17adc0v",children:k.jsx(c("TetraIcon.react"),{icon:a,size:24})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("FBReelsFullScreenContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={isFullScreen:!0,setFullScreen:function(a){}};c=a.createContext(b);g["default"]=c}),98);
__d("ReelsNavigationButtonGlimmer.react",["FDSGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={button:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"xsdox4t",marginStart:"x540dpk",marginLeft:null,marginRight:null,marginEnd:"x1m39q7l",width:"x1useyqa",$$css:!0}};function a(){return i.jsx("div",{className:"x6s0dn4 x78zum5 x5yr21d",children:i.jsx(c("FDSGlimmer.react"),{index:0,xstyle:j.button})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FBReelsNavigationButtonsPlaceholder.react",["ReelsNavigationButtonGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){a=a.children;return i.jsxs("div",{className:"x6s0dn4 x78zum5 x1q0g3np x5yr21d xl56j7k xh8yej3",children:[i.jsx(c("ReelsNavigationButtonGlimmer.react"),{}),a,i.jsx(c("ReelsNavigationButtonGlimmer.react"),{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useFBReelsViewerBaseDimensions",["CometAppNavigationConstants","CometRouteRenderType","FBReelsConstants","FBReelsFullScreenContext","react","useCometWindowSize"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext,j=36,k=200,l=320;function a(){var a=i(c("FBReelsFullScreenContext"));a=a.isFullScreen;var b=d("CometRouteRenderType").useIsPushView(),e=c("useCometWindowSize")(),f=e.innerHeight;e=e.innerWidth;a=!a;var g=e<=d("FBReelsConstants").VIEWER_WIDTH_THRESHOLD;f=f;a&&g&&(f=Math.round(f/2));b?!a&&g&&(f-=d("CometAppNavigationConstants").HEADER_HEIGHT):(!a||!g)&&(f-=d("CometAppNavigationConstants").HEADER_HEIGHT);f=Math.max(f,d("FBReelsConstants").MIN_VIEWER_HEIGHT);f-=j;b=Math.round(f*d("FBReelsConstants").MEDIA_ASPECT_RATIO);var h=b+k,m=e-l;a?!g&&h>m&&(b=m-k,f=Math.round(b/d("FBReelsConstants").MEDIA_ASPECT_RATIO)):h>e&&(b=e-k,f=Math.round(b/d("FBReelsConstants").MEDIA_ASPECT_RATIO));return{height:f,width:b}}g["default"]=a}),98);
__d("ReelsVideoLoadingView.react",["CometHeroHoldTrigger.react","FBReelsConstants","ReelsCardHeaderGlimmer.react","react","useFBReelsViewerBaseDimensions"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){a=a.reason;var b=babelHelpers["extends"]({},c("useFBReelsViewerBaseDimensions")(),{minHeight:d("FBReelsConstants").MIN_VIEWER_HEIGHT,minWidth:d("FBReelsConstants").MIN_VIEWER_HEIGHT*9/16});a=a!=null?"("+a+")":"";a="Reels View Loading "+a;return i.jsx("div",{className:"x6s0dn4 x78zum5 xt7dq6l xl56j7k x1n2onr6 xh8yej3",children:i.jsx("div",{className:"xjbqb8w x1lq5wgf xgqcy7u x30kzoy x9jhf4c x78zum5 x1q0g3np x6ikm8r x10wlt62 x1n2onr6 x1k90msu x6o7n8i x9lcvmn x1m6m0jg",style:b,children:i.jsx("div",{className:"x1cy8zhl x132nzbk x78zum5 xdt5ytf x5yr21d x1nhvcw1 x1n2onr6 xh8yej3",children:i.jsxs("div",{className:"xod5an3 x1d52u69 x14vqqas xktia5q",children:[i.jsx(c("CometHeroHoldTrigger.react"),{description:a,hold:!0}),i.jsx(c("ReelsCardHeaderGlimmer.react"),{})]})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FBReelsViewerPlaceholder.react",["fbt","CometRouteRenderType","FBReelsCloseButton.react","FBReelsFeedbackBarPlaceholder.react","FBReelsLoggingConstants","FBReelsNavigationButtonsPlaceholder.react","ReelsVideoLoadingView.react","TetraText.react","react","stylex","useFBReelsProcessRoute","useOnBeforeUnload","useReelsLogger"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react"),l={titleStylePermalink:{position:"xixxii4",start:"xfylb8w",top:"xvt0np",$$css:!0},titleStylePushView:{position:"xixxii4",start:"x1heu26e",top:"xmhk92p",$$css:!0}};function a(){var a=d("CometRouteRenderType").useIsPushView(),b=c("useReelsLogger")(),e=b.exitViewerLog;b=c("useFBReelsProcessRoute")();var f=b.trackingString,g=b.videoID;c("useOnBeforeUnload")(function(){e(0,c("FBReelsLoggingConstants").CLOSE_REELS_GESTURE.UNKNOWN,[f],g)});return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"xal61yo x5yr21d x10l6tqk xh8yej3"}),k.jsx("div",{className:(i||(i=c("stylex")))(a?l.titleStylePushView:l.titleStylePermalink),children:k.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headlineEmphasized1",children:h._("__JHASH__1eW6SFrr-z-__JHASH__")})}),k.jsx("div",{className:"x6s0dn4 x1ey2m1c x78zum5 xds687c xl56j7k x6ikm8r x10wlt62 x10l6tqk x17qophe x13vifvy",children:k.jsxs("div",{className:"x6s0dn4 x78zum5 x5yr21d xl56j7k xh8yej3",children:[k.jsxs(c("FBReelsNavigationButtonsPlaceholder.react"),{children:[k.jsx("div",{children:k.jsx(c("ReelsVideoLoadingView.react"),{reason:"Placeholder"})}),k.jsx("div",{className:"xuk3077 x78zum5 x5yr21d x1hq5gj4 xt1id46",children:k.jsx(c("FBReelsFeedbackBarPlaceholder.react"),{})})]}),k.jsx(c("FBReelsCloseButton.react"),{})]})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("FBReelsRootWrapper.react",["CometPlaceholder.react","CometRouteParams","CometRouteRenderType","FBReelsViewerPlaceholder.react","StoriesTrayLoggerSessionProvider","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={hosted:{display:"x78zum5",flexBasis:"x1r8uery",flexGrow:"x1iyjqo2",flexShrink:"xs83m0k",position:"x1n2onr6",$$css:!0},nonHosted:{bottom:"x1ey2m1c",display:"x78zum5",end:"xds687c",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0}};function a(a){var b=a.children;a=a.trackingString;var e=d("CometRouteRenderType").useIsHosted(),f=d("CometRouteParams").useRouteParams();f=typeof f.video_id==="string"?f.video_id:"";return j.jsx("div",{className:(h||(h=c("stylex")))(e&&k.hosted,!e&&k.nonHosted),children:j.jsx(c("CometPlaceholder.react"),{fallback:j.jsx(c("FBReelsViewerPlaceholder.react"),{}),children:j.jsx(c("StoriesTrayLoggerSessionProvider"),{trackingStrings:new Map([[f,a]]),children:b})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useFBReelsFalcoOpenSource",["FBReelsLoggingConstants","useFBReelsProcessRoute"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=c("useFBReelsProcessRoute")();a=a.source;var b=null,d=c("FBReelsLoggingConstants").OPEN_SOURCE;switch(a){case d.IFU:case d.IFU_END_CARD:case d.IFU_SEE_MORE:b=c("FBReelsLoggingConstants").OPEN_SOURCE_FOR_FALCO.COMET_IN_FEED_UNIT;break;case d.BOOKMARK:b=c("FBReelsLoggingConstants").OPEN_SOURCE_FOR_FALCO.BOOKMARK;break;default:b=c("FBReelsLoggingConstants").OPEN_SOURCE_FOR_FALCO.COMET_URL}return b}g["default"]=a}),98);
__d("FBReelsRoot.react",["CometStoryRenderLocationContext.react","FBReelsRootWrapper.react","cr:8092","deferredLoadComponent","react","requireDeferredForDisplay","useFBReelsFalcoOpenSource","useFBReelsProcessRoute","useReelsLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;var j=e.useEffect,k=e.useRef,l=c("deferredLoadComponent")(c("requireDeferredForDisplay")("FBReelsRootWithEntrypoint.react").__setRef("FBReelsRoot.react"));b("cr:8092");function a(a){var b,d=a.extraProps;a=a.queries;b=(b=d==null?void 0:d.renderLocation)!=null?b:"fb_shorts_video_deep_dive";d=(d=d==null?void 0:d.isAggregationProfileViewer)!=null?d:!1;var e=c("useFBReelsProcessRoute")(),f=e.source,g=e.trackingString,h=e.videoID,m=e.viewerSessionID,n=c("useFBReelsFalcoOpenSource")();e=c("useReelsLogger")();var o=e.openViewerLog,p=k(!1);j(function(){p.current||(o(n,h,m),p.current=!0)});return i.jsx(c("CometStoryRenderLocationContext.react").Provider,{value:b,children:i.jsx(c("FBReelsRootWrapper.react"),{trackingString:g,children:i.jsx(l,{isAggregationProfileViewer:d,openSource:f,queries:a,videoID:h})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FBReelsTargetAudioTrackContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({setTargetAudioTrack:function(a){},targetAudioTrack:null});g["default"]=b}),98);
__d("FBReelsVideoPlayerControllerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({controller:null,setController:function(a){}});g["default"]=b}),98);
__d("VideoPlayerRelayDeferredForDisplay.react",["deferredLoadComponent","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";a=c("deferredLoadComponent")(c("requireDeferredForDisplay")("VideoPlayerRelayWithSSR.react").__setRef("VideoPlayerRelayDeferredForDisplay.react"));b=a;g["default"]=b}),98);/*FB_PKG_DELIM*/
__d("CometFeedUFIContainerExperimental_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={fields:[{kind:"Variable",name:"fb_feed_location",variableName:"feedLocation"},{kind:"Variable",name:"focused_comment_id",variableName:"focusCommentID"}],kind:"ObjectValue",name:"feed_rendering_context"};return{argumentDefinitions:[{kind:"RootArgument",name:"feedLocation"},{kind:"RootArgument",name:"focusCommentID"},{kind:"RootArgument",name:"useDefaultActor"}],kind:"Fragment",metadata:null,name:"CometFeedUFIContainerExperimental_renderer",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:[a],concreteType:"FeedbackContext",kind:"LinkedField",name:"feedback_context",plural:!1,selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback_target_with_context",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],concreteType:null,kind:"LinkedField",name:"viewer_actor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:[a,{kind:"Literal",name:"supported",value:"ApCGa"}],concreteType:null,kind:"LinkedField",name:"story_ufi_container",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUFIContainerExperimental_renderer",fragmentName:"CometFullUFIContainer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBFullUFIContainer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUFIContainerExperimental_renderer",fragmentName:"CometSimplifiedUFIContainer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBSimplifiedUFIContainer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUFIContainerExperimental_renderer",fragmentName:"CometStoryPreviewUFIContainer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBStoryPreviewUFIContainer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUFIContainerExperimental_renderer",fragmentName:"CometInlineLiveUFIContainer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBInlineLiveUFIContainer",abstractKey:null}],storageKey:null}],storageKey:null}],type:"XFBCometFeedUFIContainerExperimental",abstractKey:null}}();e.exports=a}),null);
__d("CometFeedUFIContainerExperimental.react",["CometFeedUFIContainerExperimental_renderer.graphql","CometFeedUnitIsFocusedStoryViewContext","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useContext;function a(a){var e,f=a.feedbackSource,g=a.feedLocation,i=a.focusCommentID,l=a.forwardedRef,m=a.onActorSelected;a=a.renderer;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometFeedUFIContainerExperimental_renderer.graphql"),a);e=a==null?void 0:(e=a.story)==null?void 0:e.story_ufi_container;var n=k(c("CometFeedUnitIsFocusedStoryViewContext"));f={feedbackSource:(f=f)!=null?f:1,feedLocation:(f=g)!=null?f:"NEWSFEED",focusCommentID:(g=i)!=null?g:null,onActorSelected:m,renderer:e};return e==null||n?null:j.jsx(d("CometRelay").MatchContainer,{match:e,props:babelHelpers["extends"]({},f,{ref:l})},(e=a==null?void 0:(i=a.story)==null?void 0:(g=i.feedback_context)==null?void 0:(m=g.feedback_target_with_context)==null?void 0:(n=m.viewer_actor)==null?void 0:n.id)!=null?e:"UNKNOWN")}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedUFIContainerExperimental_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={fields:[{kind:"Variable",name:"fb_feed_location",variableName:"feedLocation"},{kind:"Variable",name:"focused_comment_id",variableName:"focusCommentID"}],kind:"ObjectValue",name:"feed_rendering_context"},b={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometFeedUFIContainerExperimental_renderer$normalization",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:[a],concreteType:"FeedbackContext",kind:"LinkedField",name:"feedback_context",plural:!1,selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback_target_with_context",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],concreteType:null,kind:"LinkedField",name:"viewer_actor",plural:!1,selections:[b,c],storageKey:null},c],storageKey:null}],storageKey:null},{alias:null,args:[a,{kind:"Literal",name:"supported",value:"ApCGa"}],concreteType:null,kind:"LinkedField",name:"story_ufi_container",plural:!1,selections:[b,{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUFIContainerExperimental_renderer",fragmentName:"CometFullUFIContainer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBFullUFIContainer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUFIContainerExperimental_renderer",fragmentName:"CometSimplifiedUFIContainer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBSimplifiedUFIContainer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUFIContainerExperimental_renderer",fragmentName:"CometStoryPreviewUFIContainer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBStoryPreviewUFIContainer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUFIContainerExperimental_renderer",fragmentName:"CometInlineLiveUFIContainer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBInlineLiveUFIContainer",abstractKey:null}],storageKey:null},c],storageKey:null}]}}();e.exports=a}),null);
__d("CometFeedUserVerifiedBadgeStrategy_badge.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedUserVerifiedBadgeStrategy_badge",selections:[{args:null,kind:"FragmentSpread",name:"useCometFeedStoryMatchDebugger_iCometStorySection"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"CometFeedUserVerifiedBadgeStrategy",abstractKey:null};e.exports=a}),null);
__d("CometUserVerificationBadge.react",["CometLazyPopoverTrigger.react","CometPageVerificationIcon.react","JSResourceForInteraction","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j=c("JSResourceForInteraction")("CometVerificationBadgeInfoPopover.react").__setRef("CometUserVerificationBadge.react");function a(a){var b=a.shouldBeWhite,d=b===void 0?!1:b;b=a.size;var e=b===void 0?"large":b;return i.jsx(c("CometLazyPopoverTrigger.react"),{popoverProps:{verificationBadge:"USER_VERIFIED"},popoverResource:j,position:"above",children:function(a,b){return i.jsx("span",{onMouseEnter:b,ref:a,children:i.jsx(c("CometPageVerificationIcon.react"),{isInverted:d,size:e,verificationBadge:"BLUE_VERIFIED"})})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedUserVerifiedBadgeStrategy.react",["CometFeedUserVerifiedBadgeStrategy_badge.graphql","CometRelay","CometUserVerificationBadge.react","react","useCometFeedStoryMatchDebugger"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var e=a.badge;a=a.shouldBeWhite;e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometFeedUserVerifiedBadgeStrategy_badge.graphql"),e);c("useCometFeedStoryMatchDebugger")(e);return j.jsxs("span",{className:"x1dor1uw x1n2onr6",children:["\xa0",j.jsx(c("CometUserVerificationBadge.react"),{shouldBeWhite:a,size:"small"})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedUserVerifiedBadgeStrategy_badge$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometFeedUserVerifiedBadgeStrategy_badge$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null}],type:"ICometStorySection",abstractKey:"__isICometStorySection"}]};e.exports=a}),null);
__d("CometGHLMockSponsoredCTAButton_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGHLMockSponsoredCTAButton_attachment",selections:[{alias:null,args:null,concreteType:"GHLMockedFooterFields",kind:"LinkedField",name:"ghl_mocked_footer_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null},{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"cta_button",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometGHLScrambledLabel_label"}],storageKey:null}],storageKey:null}],type:"StoryAttachment",abstractKey:null};e.exports=a}),null);
__d("CometGHLMockSponsoredCTAButton.react",["CometGHLMockSponsoredCTAButton_attachment.graphql","CometRelay","TetraButton.react","cr:1008801","react","useGHLLinkProps"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k=h!==void 0?h:h=b("CometGHLMockSponsoredCTAButton_attachment.graphql"),l="Learn More";function a(a){var e,f;a=a.attachment;a=d("CometRelay").useFragment(k,a);e=(e=a==null?void 0:(e=a.ghl_mocked_footer_info)==null?void 0:e.link)!=null?e:"";var g=c("useGHLLinkProps")({href:e,label:l});return a&&((f=a.ghl_mocked_footer_info)==null?void 0:f.cta_button)&&b("cr:1008801")&&e!==""?j.jsx(c("TetraButton.react"),{"aria-label":(f=g.label)!=null?f:"",label:j.jsx(b("cr:1008801"),{label:a.ghl_mocked_footer_info.cta_button,text:l,withTextDecoration:!1}),linkProps:{url:g.href},onFocusIn:g.onFocus,onHoverIn:g.onHoverStart,onPress:function(){},size:"medium",type:"secondary"},"cta_icon_button"):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometStoryAttachmentFooterGHLMockedGenericShareStrategy_attachmentFooter.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometStoryAttachmentFooterGHLMockedGenericShareStrategy_attachmentFooter",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:"GHLMockedFooterFields",kind:"LinkedField",name:"ghl_mocked_footer_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"headline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"footer_body",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"meta",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometGHLMockSponsoredCTAButton_attachment"}],storageKey:null}],type:"CometStoryAttachmentFooterGHLMockedGenericShareStrategy",abstractKey:null};e.exports=a}),null);
__d("CometStoryAttachmentFooterGHLMockedGenericShareStrategy.react",["CometGHLMockSponsoredCTAButton.react","CometGHLRenderingContext","CometLink.react","CometRelay","CometStoryAttachmentFooter.react","CometStoryAttachmentFooterGHLMockedGenericShareStrategy_attachmentFooter.graphql","FBLogger","gkx","react","useGHLLinkProps"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k=h!==void 0?h:h=b("CometStoryAttachmentFooterGHLMockedGenericShareStrategy_attachmentFooter.graphql");function a(a){var b,e,f,g;a=a.attachmentFooter;a=d("CometRelay").useFragment(k,a);a=a.attachment;b=(b=a==null?void 0:(b=a.ghl_mocked_footer_info)==null?void 0:b.link)!=null?b:"";e=(e=a==null?void 0:(e=a.ghl_mocked_footer_info)==null?void 0:e.headline)!=null?e:"";f=(f=a==null?void 0:(f=a.ghl_mocked_footer_info)==null?void 0:f.footer_body)!=null?f:"";g=(g=a==null?void 0:(g=a.ghl_mocked_footer_info)==null?void 0:g.meta)!=null?g:"";var h=2;(b===""||e===""||f===""||g==="")&&c("FBLogger")("ad_blocker_defense_ghost_owl_mocked_footer").mustfix("missing footer data, url: %s, headline: %s, footerBody: %s, meta: %s",b,e,f,g);var i=c("useGHLLinkProps")({href:b,label:""}),m=c("gkx")("23017");return j.jsx(c("CometGHLRenderingContext").Provider,{value:c("gkx")("23018"),children:j.jsx("div",{className:"x1s85apg",children:m?j.jsx(c("CometLink.react"),{href:i.href,lynxMode:"ASYNCLAZY",onFocus:i.onFocus,onHoverStart:i.onHoverStart,role:"link",suppressHydrationWarning:!0,xstyle:l.link,children:j.jsx(c("CometStoryAttachmentFooter.react"),{body:f,cta:j.jsx(c("CometGHLMockSponsoredCTAButton.react"),{attachment:a}),headline:e,headlineLineLimit:h,meta:g})}):j.jsx(c("CometLink.react"),{href:b,lynxMode:"ASYNCLAZY",suppressHydrationWarning:!0,xstyle:l.link,children:j.jsx(c("CometStoryAttachmentFooter.react"),{body:f,cta:j.jsx(c("CometGHLMockSponsoredCTAButton.react"),{attachment:a}),headline:e,headlineLineLimit:h,meta:g})})})})}a.displayName=a.name+" [from "+f.id+"]";var l={link:{display:"x1lliihq",":hover_textDecoration":"x1lku1pv",$$css:!0}};g["default"]=a}),98);
__d("CometStoryAttachmentFooterGHLMockedGenericShareStrategy_attachmentFooter$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"val",storageKey:null}],b={alias:null,args:null,concreteType:"GHLScramblingProperty",kind:"LinkedField",name:"attributes",plural:!0,selections:a,storageKey:null};a={alias:null,args:null,concreteType:"GHLScramblingProperty",kind:"LinkedField",name:"styles",plural:!0,selections:a,storageKey:null};var c={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"tag",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometStoryAttachmentFooterGHLMockedGenericShareStrategy_attachmentFooter$normalization",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:"GHLMockedFooterFields",kind:"LinkedField",name:"ghl_mocked_footer_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"headline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"footer_body",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"meta",storageKey:null},{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"cta_button",plural:!1,selections:[b,a,c,d,{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"children",plural:!0,selections:[b,a,c,d,{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"children",plural:!0,selections:[b,a,c,d],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("UserCometVerifiedBadgeRenderer_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"UserCometVerifiedBadgeRenderer_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("UserCometVerifiedBadgeRenderer",["CometProfileVerificationBadge.react","UserCometVerifiedBadgeRenderer_user.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");h!==void 0?h:h=b("UserCometVerifiedBadgeRenderer_user.graphql");function a(a){var b=new Set(a==null?void 0:a.map(function(a){a=a.id;return a}).filter(Boolean));return function(a,d){var e=d.id;d=d.is_verified;return d==null||d===!1||e==null||!b.has(e)?a:j.jsxs(j.Fragment,{children:[a,j.jsx("span",{className:"x1t2a60a x1n2onr6",children:j.jsx(c("CometProfileVerificationBadge.react"),{profileID:e,size:"small"})})]})}}g["default"]=a}),98);