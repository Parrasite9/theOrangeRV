;/*FB_PKG_DELIM*/

__d("useCometLogInForm",["CometRelay","react","useCometLogInFormQuery.graphql","useCometLogInFormUtil","useIsCometOnMobile"],(function(a,b,c,d,e,f,g){"use strict";var h,i;i||d("react");function a(a){var e=c("useIsCometOnMobile")()?"MOBILE":"DESKTOP";e=d("CometRelay").useLazyLoadQuery(h!==void 0?h:h=b("useCometLogInFormQuery.graphql"),{source:e});return c("useCometLogInFormUtil")(e.login_data,a)}g["default"]=a}),98);