;/*FB_PKG_DELIM*/

__d("CometSurfaceHighlight.react",["fbt","BaseContainerQueryElement.react","BaseRow.react","CometCard.react","FDSUnitHeader.react","react","stylex","useResizeObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react")),l=j.useState,m={hidden:{display:"x1s85apg",$$css:!0},item:{maxWidth:"x1ap80js",$$css:!0},notifsContainer:{paddingBottom:"xwib8y2",$$css:!0}},n=575;function a(a){var b=a.actionLinkProps,d=a.actionRef,e=a.border;e=e===void 0?"none":e;var f=a.borderHighlightAnimation;f=f===void 0?!1:f;var g=a.children,j=a.dropShadow;j=j===void 0?2:j;var o=a.onActionPress,p=a.title,q=a.totalNotifications;a=l(function(){return q>=2?q:null});var r=a[0],s=a[1];a=l(!0);var t=a[0],u=a[1];a=c("useResizeObserver")(function(a){if(q>2||q===1)return;a.width>n?s(null):s(2)});var v=c("useResizeObserver")(function(a){a=a.width===0;a?u(!0):u(!1)});r=r!=null?h._("__JHASH__Nujp0VPL_ko__JHASH__",[h._param("number of total notifications",q)]):null;return k.jsxs(c("CometCard.react"),{background:"white",border:e,borderHighlight:f?"animated":void 0,dropShadow:j,ref:a,children:[k.jsx(c("FDSUnitHeader.react"),{action:(e=r)!=null?e:void 0,actionLinkProps:b,actionRef:d,headline:p,level:3,onActionPress:o}),k.jsx(c("BaseRow.react"),{xstyle:m.notifsContainer,children:k.Children.toArray(g).slice(0,2).map(function(a,b){return b===0?k.jsx(c("BaseContainerQueryElement.react"),{breakpoint:n,inverseToContainer:!0,maxWidth:"100%",minWidth:"50%",children:k.jsx("div",{className:"x1ap80js",children:a})},"notif-"+b):k.jsx(c("BaseContainerQueryElement.react"),{breakpoint:n,maxWidth:"50%",minWidth:0,ref:v,children:k.jsx("div",{className:(i||(i=c("stylex")))(m.item,t&&m.hidden),children:a})},"notif-"+b)})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("FDSPivotLinkRow.react",["CometRow.react","CometRowItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={link:{maxWidth:"xthy2uy",$$css:!0}};function a(a){var b=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);return i.jsx(c("CometRow.react"),babelHelpers["extends"]({},a,{align:"start",spacing:8,children:i.Children.map(b,function(a){return i.jsx(c("CometRowItem.react"),{xstyle:j.link,children:a})})}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometEventCreateControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/create/",Object.freeze({default_is_online:!1,default_is_paid_online_event:!1,dialog_entry_point:"others",should_skip_format_step:!1}),void 0);b=a;g["default"]=b}),98);
__d("XCometMarketplaceComposerControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/marketplace/create/{listing_type}/",Object.freeze({shipping:!1}),void 0);b=a;g["default"]=b}),98);
__d("XCometMarketplaceShippingHowItWorksDialogControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/marketplace/selling/shipping_how_it_works/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("useYourListingsUrlDispatcher",["XCometMarketplaceYouSellingControllerRouteBuilder","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var d=c("useCometRouterDispatcher")(),e=c("XCometMarketplaceYouSellingControllerRouteBuilder").buildURL({offer_shipping:a});return function(){b==null?void 0:b(),d==null?void 0:d.go(e,{replace:!0})}}g["default"]=a}),98);