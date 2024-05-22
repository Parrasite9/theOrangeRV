;/*FB_PKG_DELIM*/

__d("CometMarketplaceDistanceWarning_target.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMarketplaceDistanceWarning_target",selections:[{alias:null,args:null,concreteType:"VirtualProductCategory",kind:"LinkedField",name:"seo_virtual_category",plural:!1,selections:[{alias:null,args:null,concreteType:"VirtualProductCategory",kind:"LinkedField",name:"taxonomy_path",plural:!0,selections:[{alias:null,args:null,concreteType:"ProductTaxonomySEOInfo",kind:"LinkedField",name:"seo_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"seo_url",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Location",kind:"LinkedField",name:"location",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"latitude",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"longitude",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_shipping_offered",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"sweepstake_enabled",storageKey:null}],type:"MarketplaceListingWithSweepstake",abstractKey:"__isMarketplaceListingWithSweepstake"}],type:"GroupCommerceProductItem",abstractKey:null};e.exports=a}),null);
__d("CometMarketplaceDistanceWarning.react",["fbt","ix","CometContextualMessage.react","CometMarketplaceDistanceWarning_target.graphql","MarketplaceApplicationContext.hybrid","MarketplaceDistance","MarketplacePDPContext","RelayHooks","TetraButtonGroup.react","TetraIcon.react","XCometMarketplaceCategoryControllerRouteBuilder","distance","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||d("react"),m=100;function a(a){var e,f,g;a=a.target;a=d("RelayHooks").useFragment(j!==void 0?j:j=b("CometMarketplaceDistanceWarning_target.graphql"),a);var k=d("MarketplaceApplicationContext.hybrid").useMarketplaceState();k=k.location;var n=0;e=a==null?void 0:(e=a.seo_virtual_category)==null?void 0:(e=e.taxonomy_path)==null?void 0:(e=e[0])==null?void 0:(e=e.seo_info)==null?void 0:e.seo_url;var o=k.latitude,p=k.longitude;k=k.vanityPageId;f=(f=a.location)==null?void 0:f.latitude;g=(g=a.location)==null?void 0:g.longitude;var q=d("MarketplacePDPContext").usePDPContext();q=q.isHoisted;var r=a.is_shipping_offered===!0;a=a.sweepstake_enabled===!0;f!=null&&g!=null&&(n=Math.round(c("MarketplaceDistance").km(d("distance").haversine(o,p,f,g)/1e3).toMiles()));return q!==!0||k==null||e==null||n<=m||r||a?null:l.jsx("div",{className:"xieb3on",children:l.jsx(c("CometContextualMessage.react"),{addOnPrimary:l.jsx(c("TetraButtonGroup.react"),{align:"start",primary:{label:h._("__JHASH__77a8FBWnFse__JHASH__"),linkProps:{url:c("XCometMarketplaceCategoryControllerRouteBuilder").buildURL({category_id:e,location_id:k})},reduceEmphasis:!0},size:"large"}),headline:h._("__JHASH__gzW34QJMa_h__JHASH__"),icon:l.jsx(c("TetraIcon.react"),{color:"highlight",icon:d("fbicon")._(i("481942"),20),size:20})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometMarketplaceRecordPDPDwellTimeMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4762470670475263"}),null);
__d("CometMarketplaceRecordPDPDwellTimeMutation.graphql",["CometMarketplaceRecordPDPDwellTimeMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],kind:"ScalarField",name:"marketplace_record_pdp_dwell_time",storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMarketplaceRecordPDPDwellTimeMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMarketplaceRecordPDPDwellTimeMutation",selections:c},params:{id:b("CometMarketplaceRecordPDPDwellTimeMutation_facebookRelayOperation"),metadata:{},name:"CometMarketplaceRecordPDPDwellTimeMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometMarketplaceRecordPDPDwellTimeMutation",["CometMarketplaceRecordPDPDwellTimeMutation.graphql","CometRelayEnvironment","createCommitMutation_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h;a=d("createCommitMutation_DEPRECATED").createCommitMutation_DEPRECATED(c("CometRelayEnvironment"),{mutation:h!==void 0?h:h=b("CometMarketplaceRecordPDPDwellTimeMutation.graphql")});g["default"]=a}),98);
__d("MarketplaceListingViewsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1880");b=d("FalcoLoggerInternal").create("marketplace_listing_views",a);e=b;g["default"]=e}),98);
__d("MarketplacePDPLoadingRightColumn.react",["FDSGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={glimmer0:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"xols6we",width:"x1f1nzxn",$$css:!0},glimmer1:{borderTopStartRadius:"x1ykpwxx",borderTopEndRadius:"x118zf8b",borderBottomEndRadius:"xnwxkdh",borderBottomStartRadius:"xfocsrx",height:"xx3o462",width:"xn6xo9k",$$css:!0},glimmer2:{borderTopStartRadius:"x1ykpwxx",borderTopEndRadius:"x118zf8b",borderBottomEndRadius:"xnwxkdh",borderBottomStartRadius:"xfocsrx",height:"xx3o462",width:"x1yo87oe",$$css:!0},glimmer3:{borderTopStartRadius:"x1ykpwxx",borderTopEndRadius:"x118zf8b",borderBottomEndRadius:"xnwxkdh",borderBottomStartRadius:"xfocsrx",height:"xx3o462",width:"xvni27",$$css:!0},glimmer4:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"xc9qbxq",width:"x143tcsw",$$css:!0},glimmer5:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"xc9qbxq",width:"xvni27",$$css:!0},glimmer6:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"xsdox4t",width:"xi55695",$$css:!0},marginBottom12:{marginBottom:"xod5an3",$$css:!0}};function a(a){return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"x1iyjqo2 x1odjw0f",children:i.jsxs("div",{className:"xz9dl7a xn6708d xsag5q8 x1ye3gou",children:[i.jsx(a=c("FDSGlimmer.react"),{index:0,xstyle:[j.glimmer0,j.marginBottom12]}),i.jsx(a,{index:1,xstyle:[j.glimmer1,j.marginBottom12]}),i.jsx(a,{index:2,xstyle:[j.glimmer2,j.marginBottom12]}),i.jsx(a,{index:3,xstyle:[j.glimmer3,j.marginBottom12]}),i.jsxs("div",{className:"x78zum5 x1qughib",children:[i.jsx(a,{index:1,xstyle:j.glimmer4}),i.jsx(a,{index:2,xstyle:j.glimmer5}),i.jsx(a,{index:3,xstyle:j.glimmer5})]})]})}),i.jsx("div",{className:"x6s0dn4 x82389b x9f619 x78zum5 xxm9e6e xdt5ytf x2lah0s xl56j7k xyinxu5 x1pi30zi x1g2khh7 x1swvt13 x2b8uid",children:i.jsx(a,{index:10,xstyle:j.glimmer6})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MarketplacePDPLoadingState.react",["FDSGlimmer.react","MarketplacePDPComponent.react","MarketplacePDPLoadingRightColumn.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={mediaViewer:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",justifyContent:"xl56j7k",overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},mediaViewerLoading:{height:"x5yr21d",$$css:!0}};function a(){return i.jsx(c("MarketplacePDPComponent.react"),{mediaViewer:i.jsx(c("FDSGlimmer.react"),{index:0,xstyle:[j.mediaViewer,j.mediaViewerLoading]}),rightColumn:i.jsx(c("MarketplacePDPLoadingRightColumn.react"),{})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useMarketplaceRouteIsDialog",["useCometRouterState"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=c("useCometRouterState")();a=a==null?void 0:(a=a.pushViewStack)==null?void 0:a.some(function(a){a=a.route;return a.routeType==="routable_dialog"});return(a=a)!=null?a:!1}g.useMarketplaceRouteIsDialog=a}),98);
__d("CometMarketplacePermalinkRoot.react",["CometMarketplaceApp.react","CometMarketplaceComponentLoggingContext","CometMarketplaceRecordPDPDwellTimeMutation","CometMarketplaceSurfaceComponent.react","CometPlaceholder.react","CometRouteParams","CometRouteRenderType","CurrentUser","MarketplaceListingViewsFalcoEvent","MarketplacePDPAdsQueryReferenceContext","MarketplacePDPContainerDeferred.react","MarketplacePDPLoadingState.react","promiseDone","react","stylex","useMarketplaceRouteIsDialog","useRoutePassthroughProps","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useEffect,m=b.useRef,n={root:{height:"xtp0wl1",maxHeight:"x1bwycvy",maxWidth:"x16xn7b0",minHeight:"x1bifzbx",overflowX:"x6ikm8r",overflowY:"x10wlt62",width:"xh8yej3","@media (max-width: 899px)_height":"xiylbte","@media (max-width: 899px)_maxHeight":"x7pk29f",$$css:!0},rootPushView:{height:"x1dr59a3","@media (max-width: 899px)_height":"xiylbte",$$css:!0}},o={metadata:{analyticsExperience:"pdp",analyticsPage:"product_details"}};function a(a){var b=a.props;a=a.queries;b=b.routeProps.location;var e=d("CometRouteParams").useRouteParams(),f=e.media_id;e=e.referral_code;f=typeof f==="number"?f:typeof f==="string"?Number(f):0;var g=a.rootQueryReference.variables.targetId,i=d("CometRouteRenderType").useIsPushView(),p=c("useRoutePassthroughProps")();p=(p==null?void 0:p.trackingData)!=null?String(p==null?void 0:p.trackingData):null;var q=m(0),r=d("useMarketplaceRouteIsDialog").useMarketplaceRouteIsDialog(),s=function(){c("MarketplaceListingViewsFalcoEvent").log(function(){return{listing_id:g,viewed_platform:"comet"}})};s=c("useSinglePartialViewImpression")({onImpressionStart:k(s,[g])});l(function(){q.current=Date.now();return function(){if(g==null||!c("CurrentUser").isLoggedIn())return;c("promiseDone")(c("CometMarketplaceRecordPDPDwellTimeMutation")({listing_id:g,start_time:q.current}))}},[g]);i=(h||(h=c("stylex")))(n.root,i&&n.rootPushView);var t="x5yr21d xh8yej3";b=j.jsx(c("CometMarketplaceApp.react"),{location:b,children:j.jsx("div",{className:i,ref:s,children:j.jsx("div",{className:t,children:j.jsx(c("MarketplacePDPAdsQueryReferenceContext").Provider,{value:a.pdpAdsQueryReference,children:j.jsx(c("CometPlaceholder.react"),{fallback:j.jsx(c("MarketplacePDPLoadingState.react"),{}),children:j.jsx(c("MarketplacePDPContainerDeferred.react"),{context:{mediaId:f,targetId:g,trackingData:p},imageQueryReference:a.imageQueryReference,rootQueryReference:a.rootQueryReference,showShadowBar:!r})})})})})});i=b;return j.jsx(c("CometMarketplaceComponentLoggingContext").Provider,{value:o,children:j.jsx(c("CometMarketplaceSurfaceComponent.react"),{metadata:{productItemID:g,referralCode:String(e),tracking:p},children:i})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMarketplaceSetProductItemSeenStateMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6872907519451834"}),null);
__d("CometMarketplaceSetProductItemSeenStateMutation.graphql",["CometMarketplaceSetProductItemSeenStateMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"MarketplaceSetProductItemSeenStateResponsePayload",kind:"LinkedField",name:"marketplace_set_product_item_seen_state",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupCommerceProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_viewer_previously_seen",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMarketplaceSetProductItemSeenStateMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMarketplaceSetProductItemSeenStateMutation",selections:c},params:{id:b("CometMarketplaceSetProductItemSeenStateMutation_facebookRelayOperation"),metadata:{},name:"CometMarketplaceSetProductItemSeenStateMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometMarketplaceSetProductItemSeenStateMutation",["CometMarketplaceSetProductItemSeenStateMutation.graphql","CometRelayEnvironment","createCommitMutation_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h;a=d("createCommitMutation_DEPRECATED").createCommitMutationWithVariables_DEPRECATED(c("CometRelayEnvironment"),function(a){return{mutation:h!==void 0?h:h=b("CometMarketplaceSetProductItemSeenStateMutation.graphql"),optimisticResponse:{marketplace_set_product_item_seen_state:{product_item:{has_viewer_previously_seen:a.has_seen,id:a.product_item_id}}}}});g["default"]=a}),98);
__d("MarketplacePDP_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Variable",name:"manualIncludeForLazyLoad",variableName:"manualIncludeForLazyLoad"}];return{argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"manualIncludeForLazyLoad"}],kind:"Fragment",metadata:null,name:"MarketplacePDP_page",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"marketplace_listing_renderable_target",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometMarketplaceDistanceWarning_target"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"MarketplacePDP_page",fragmentName:"MarketplacePDPBSGComponent_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"MarketplaceBuySellGroupItemProductDetailsPage",abstractKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"MarketplacePDP_page",fragmentName:"MarketplacePDPRealEstateComponent_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"MarketplaceRealEstateProductDetailsPage",abstractKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"MarketplacePDP_page",fragmentName:"MarketplacePDPAutosComponent_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"MarketplaceVehicleProductDetailsPage",abstractKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"MarketplacePDP_page",fragmentName:"MarketplacePDPForSaleComponent_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"MarketplaceForSaleItemProductDetailsPage",abstractKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"MarketplacePDP_page",fragmentName:"MarketplacePDPCommercePostComponent_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"MarketplaceCommercePostProductDetailsPage",abstractKey:null}],type:"MarketplaceProductDetailsPage",abstractKey:"__isMarketplaceProductDetailsPage"}}();e.exports=a}),null);
__d("MarketplacePDP.react",["CometMarketplaceSetProductItemSeenStateMutation","CometRelay","CurrentUser","MarketplacePDPContext","MarketplacePDP_page.graphql","cr:2538","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useEffect;function a(a){var e=d("MarketplacePDPContext").usePDPContext(),f=d("CometRelay").useFragment(h!==void 0?h:h=b("MarketplacePDP_page.graphql"),a.page),g=f==null?void 0:f.marketplace_listing_renderable_target,i=g==null?void 0:g.id,l=g==null?void 0:g.__typename;k(function(){if(i==null||l!=="GroupCommerceProductItem"||e.isPreview===!0||!d("CurrentUser").isLoggedIn())return;c("CometMarketplaceSetProductItemSeenStateMutation")({has_seen:!0,product_item_id:i})},[i,e.isPreview,l]);var m=g!=null&&b("cr:2538")!=null?j.jsx(b("cr:2538"),{target:g}):null;return j.jsxs(j.Fragment,{children:[j.jsx("meta",{content:"qwkUmvJm4UJD-jNt50ocledkp6q_9WuM0PwyX2HJDcQ",name:"google-site-verification"}),m,j.jsx(d("CometRelay").MatchContainer,{fallback:j.jsx("div",{}),match:g}),j.jsx(d("CometRelay").MatchContainer,{fallback:j.jsx("span",{}),match:f,props:{imageQueryRef:a.imageQueryRef,page:f}})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MarketplacePDPContainerQuery.graphql",["MarketplacePDPContainerQuery_facebookRelayOperation","MarketPlacePDPShouldSkipImageQuery.relayprovider","CometIsAdaptiveUFIEnabled.relayprovider","CometUFIShareActionMigration.relayprovider","CometUFIReactionsEnableShortName.relayprovider","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"adId"},c={defaultValue:null,kind:"LocalArgument",name:"feedLocation"},d={defaultValue:null,kind:"LocalArgument",name:"feedbackSource"},e={defaultValue:null,kind:"LocalArgument",name:"focusCommentID"},f={defaultValue:null,kind:"LocalArgument",name:"imageContext"},g={defaultValue:null,kind:"LocalArgument",name:"referralCode"},h={defaultValue:null,kind:"LocalArgument",name:"scale"},i={defaultValue:null,kind:"LocalArgument",name:"targetId"},j={defaultValue:null,kind:"LocalArgument",name:"useDefaultActor"},k=[{kind:"Variable",name:"ad_id",variableName:"adId"},{kind:"Variable",name:"referral_code",variableName:"referralCode"},{kind:"Variable",name:"target_id",variableName:"targetId"}],l={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"product_details_type",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"is_personalization_required",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"freeform_personalization_info_text",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f,g,h,i,j],kind:"Fragment",metadata:null,name:"MarketplacePDPContainerQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:k,concreteType:null,kind:"LinkedField",name:"marketplace_product_details_page",plural:!1,selections:[l,m,{args:null,kind:"FragmentSpread",name:"MarketplacePDP_page"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"marketplace_listing_renderable_target",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"ProductItemPersonalizationInfo",kind:"LinkedField",name:"personalization_info",plural:!1,selections:[n,o],storageKey:null}],type:"MarketplaceListingWithPersonalization",abstractKey:"__isMarketplaceListingWithPersonalization"}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,d,c,e,f,g,h,i,j,{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__MarketPlacePDPShouldSkipImageQueryrelayprovider"},{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__CometIsAdaptiveUFIEnabledrelayprovider"},{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__CometUFIShareActionMigrationrelayprovider"},{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider"}],kind:"Operation",name:"MarketplacePDPContainerQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:k,concreteType:null,kind:"LinkedField",name:"marketplace_product_details_page",plural:!1,selections:[l,m,{kind:"TypeDiscriminator",abstractKey:"__isMarketplaceProductDetailsPage"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"marketplace_listing_renderable_target",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"VirtualProductCategory",kind:"LinkedField",name:"seo_virtual_category",plural:!1,selections:[{alias:null,args:null,concreteType:"VirtualProductCategory",kind:"LinkedField",name:"taxonomy_path",plural:!0,selections:[{alias:null,args:null,concreteType:"ProductTaxonomySEOInfo",kind:"LinkedField",name:"seo_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"seo_url",storageKey:null},p],storageKey:null},p],storageKey:null},p],storageKey:null},{alias:null,args:null,concreteType:"Location",kind:"LinkedField",name:"location",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"latitude",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"longitude",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_shipping_offered",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"sweepstake_enabled",storageKey:null}],type:"MarketplaceListingWithSweepstake",abstractKey:"__isMarketplaceListingWithSweepstake"}],type:"GroupCommerceProductItem",abstractKey:null},l,p,{kind:"TypeDiscriminator",abstractKey:"__isMarketplaceListingRenderable"},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"ProductItemPersonalizationInfo",kind:"LinkedField",name:"personalization_info",plural:!1,selections:[n,o,p],storageKey:null}],type:"MarketplaceListingWithPersonalization",abstractKey:"__isMarketplaceListingWithPersonalization"}],storageKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Literal",name:"MarketplacePDPBSGComponent_page$manualIncludeForLazyLoad",value:!1}],documentName:"MarketplacePDP_page",fragmentName:"MarketplacePDPBSGComponent_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"MarketplaceBuySellGroupItemProductDetailsPage",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Literal",name:"MarketplacePDPRealEstateComponent_page$manualIncludeForLazyLoad",value:!1}],documentName:"MarketplacePDP_page",fragmentName:"MarketplacePDPRealEstateComponent_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"MarketplaceRealEstateProductDetailsPage",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Literal",name:"MarketplacePDPAutosComponent_page$manualIncludeForLazyLoad",value:!1}],documentName:"MarketplacePDP_page",fragmentName:"MarketplacePDPAutosComponent_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"MarketplaceVehicleProductDetailsPage",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Literal",name:"MarketplacePDPForSaleComponent_page$manualIncludeForLazyLoad",value:!1}],documentName:"MarketplacePDP_page",fragmentName:"MarketplacePDPForSaleComponent_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"MarketplaceForSaleItemProductDetailsPage",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Literal",name:"MarketplacePDPCommercePostComponent_page$manualIncludeForLazyLoad",value:!1}],documentName:"MarketplacePDP_page",fragmentName:"MarketplacePDPCommercePostComponent_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"MarketplaceCommercePostProductDetailsPage",abstractKey:null},p],storageKey:null}],storageKey:null}]},params:{id:b("MarketplacePDPContainerQuery_facebookRelayOperation"),metadata:{},name:"MarketplacePDPContainerQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__MarketPlacePDPShouldSkipImageQueryrelayprovider:b("MarketPlacePDPShouldSkipImageQuery.relayprovider"),__relay_internal__pv__CometIsAdaptiveUFIEnabledrelayprovider:b("CometIsAdaptiveUFIEnabled.relayprovider"),__relay_internal__pv__CometUFIShareActionMigrationrelayprovider:b("CometUFIShareActionMigration.relayprovider"),__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:b("CometUFIReactionsEnableShortName.relayprovider")}}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("ProductItemPersonalizationType",[],(function(a,b,c,d,e,f){a=Object.freeze({IS_OPTIONAL:0,IS_REQUIRED:1});f["default"]=a}),66);
__d("MarketplacePDPContainer.react",["CometHeroInteractionIDContext","CometPlaceholder.react","CometRelay","InteractionTracingMetrics","MarketplacePDP.react","MarketplacePDPContainerQuery.graphql","MarketplacePDPContext","MarketplacePDPLoadingState.react","ProductItemPersonalizationType","getGraphQLEnumSafe","gkx","marketplacePDPReducer","react","useMinifiedProductAttribution","useStoryVPVDLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;var k=e.useContext,l=e.useEffect,m=e.useMemo,n=e.useReducer,o=e.useRef,p=j.jsx(c("MarketplacePDPLoadingState.react"),{}),q=h!==void 0?h:h=b("MarketplacePDPContainerQuery.graphql");function r(a){var b,e=a.context,f=a.imageQueryReference,g=a.isRounded;g=g===void 0?!0:g;a.loadingState;var h=a.rootQueryReference;a=a.showShadowBar;a=a===void 0?!0:a;var i=d("CometRelay").usePreloadedQuery(q,h),p=(b=(b=i.viewer)==null?void 0:(b=b.marketplace_product_details_page)==null?void 0:(b=b.marketplace_listing_renderable_target)==null?void 0:(b=b.personalization_info)==null?void 0:b.freeform_personalization_info_text)!=null?b:"",r=((b=i.viewer)==null?void 0:(b=b.marketplace_product_details_page)==null?void 0:(b=b.marketplace_listing_renderable_target)==null?void 0:(b=b.personalization_info)==null?void 0:b.is_personalization_required)===c("getGraphQLEnumSafe")(c("ProductItemPersonalizationType"),1);b=i.viewer;var s=b==null?void 0:b.marketplace_product_details_page,t=k(c("CometHeroInteractionIDContext"));l(function(){var a;if(t==null)return;c("InteractionTracingMetrics").addMetadata(t,"MarketplacePDPType",(a=s==null?void 0:s.__typename)!=null?a:"UNKNOWN_PDP_TYPE")},[t,s==null?void 0:s.__typename]);i=s==null?void 0:s.product_details_type;b=d("MarketplacePDPContext").usePDPContext();b=n(d("marketplacePDPReducer").marketplacePDPReducer,d("marketplacePDPReducer").marketplacePDPReducer(babelHelpers["extends"]({},b,e,{isRounded:g,rootQueryReference:h,showShadowBar:a},i!=null&&{pdpType:i})));var u=b[0],v=b[1],w=function(a){v({type:"SET_PERSONALIZATION_REQUEST_FROM_BUYER",value:a})},x=function(a){v({type:"SET_IS_PERSONALIZATION_ENABLED",value:a})};l(function(){v({rootQueryReference:h,type:"update-root-query-reference"})},[v,h]);e=o(c("useMinifiedProductAttribution")());g=c("useStoryVPVDLogger")({interactionSourceOverride:79,navChainOverride:e.current,position:0,trackable:JSON.stringify({module:"marketplace_pdp_visit",top_level_post_id:h.variables.targetId})});a=g[0];i=g[1];b=m(function(){return babelHelpers["extends"]({},u,{isPersonalizationRequired:r,personalizationInstructionsFromSeller:p,setIsPersonalizationEnabled:x,setPersonalizationRequestFromBuyer:w})},[u,r,p]);if(h.variables.targetId==null)return null;e=j.jsx(d("MarketplacePDPContext").MarketplacePDPContext.Provider,{value:b,children:j.jsx(c("MarketplacePDP.react"),{imageQueryRef:f,page:s})});return c("gkx")("23599")?j.jsxs("div",{ref:a,style:{display:"inline"},children:[i?i:null,e]}):e}r.displayName=r.name+" [from "+f.id+"]";function a(a){var b=a.loadingState;b=b===void 0?p:b;a=babelHelpers.objectWithoutPropertiesLoose(a,["loadingState"]);return j.jsx(c("CometPlaceholder.react"),{fallback:b,children:j.jsx(r,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);