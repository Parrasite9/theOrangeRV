;/*FB_PKG_DELIM*/

__d("XLoginControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/login/",Object.freeze({first_attempt:!1,signed_next:!1,one_time_password:!1,ig_cp_login:!1,pl_dbl:!1,dyiRequest:!1,deact_messaging:!1,user_wants_http:!1,fbconnect:!1,canvas:!1,offline_access:!1,skip_api_login:!1,no_next_msg:!1,_fb_noscript:!1,nothacked:!1,isprivate:!1,fw2x:!1,uc_qa:!1,fl:!1,show_profileshare_nativebanner:!1,crst:!1,from_contact_claiming:!1,kid_directed_site:!1,chat_plugin_upgrade:!1,re_engagement_opt_in:!1,hide_upsell:!1,hide_language_selector:!1,hide_registration:!1,shbl:!1,lara_cancel:!1,is_two_steps_login:!1,one_step_redir:!1,login_from_aymh:!1}),new Set(["first_attempt","fbconnect","canvas","offline_access","no_next_msg","_fb_noscript","uc_qa","fl","show_profileshare_nativebanner"]));b=a;g["default"]=b}),98);
__d("useCometLoggedOutPopupCTA",["JSResourceForInteraction","XLoginControllerRouteBuilder","react","useCometLazyDialog","useCometRouterDispatcher","useCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h;h||(h=d("react"));var i=h.useCallback,j=c("JSResourceForInteraction")("CometLoggedOutPopupCTA.react").__setRef("useCometLoggedOutPopupCTA");function a(a){var b=a.onClose,d=babelHelpers.objectWithoutPropertiesLoose(a,["onClose"]),e=c("useCurrentRoute")();a=(e==null?void 0:(a=e.rootView)==null?void 0:(a=a.props)==null?void 0:a.shouldRedirectInsteadOfLoginPopupExperiment)===!0;var f=c("useCometRouterDispatcher")(),g=i(function(){var a;a=c("XLoginControllerRouteBuilder").buildUri({next:e==null?void 0:(a=e.url)==null?void 0:a.toString()}).toString();var b={replace:!0};f==null?void 0:f.go(a,b)},[e,f]),h=c("useCometLazyDialog")(j),k=h[0];h=i(function(){k(d,b)},[k,d,b]);return a?g:h}g["default"]=a}),98);