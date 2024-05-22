;/*FB_PKG_DELIM*/

__d("ClientJSResource",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=new Error("Expected `ClientJSResource` not to have been called at runtime. Haste rewrites CJSR calls to require, so this error indicates that something in Haste has gone awry.");a.stack;throw a}f["default"]=a}),66);
__d("CometMarketplaceCartToast",["fbt","ix","$InternalEnum","BaseToasterStateManager","TetraIcon.react","deferredLoadComponent","fbicon","react","requireDeferred"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||d("react"),l=c("deferredLoadComponent")(c("requireDeferred")("MarketplaceCartSuccessToast.react").__setRef("CometMarketplaceCartToast")),m=c("deferredLoadComponent")(c("requireDeferred")("CometToast.react").__setRef("CometMarketplaceCartToast")),n=c("BaseToasterStateManager").getInstance();f=b("$InternalEnum").Mirrored(["ADD_TO_CART","MOVE_TO_SAVED","REMOVE_FROM_CART","REMOVE_FROM_SAVED"]);function a(a,b,c,d,e,f,g,h,i){i!=null&&n["delete"](i);var j=n.push(k.jsx(l,{imageUri:b,onClose:function(){n["delete"](j)},productID:d,productName:c,quantity:e,referralCode:String(f),referralSurface:g,surface:h,toastAction:a}),5e3);return j}function e(a,b){b!=null&&n["delete"](b);b=h._("__JHASH__77lEc2VvlO7__JHASH__",[h._param("error-description",a)]);var e=n.push(k.jsx(m,{icon:k.jsx(c("TetraIcon.react"),{color:"warning",icon:d("fbicon")._(i("502062"),20)}),loadImmediately:!0,message:b,onDismiss:function(){n["delete"](e)},truncateText:!1}),5e3);return e}g.ToastActionType=f;g.showSuccessToast=a;g.showErrorToast=e}),226);
__d("CometMarketplaceListingNoticeSuggestionUserActionMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4775465649174941"}),null);
__d("CometMarketplaceListingNoticeSuggestionUserActionMutation.graphql",["CometMarketplaceListingNoticeSuggestionUserActionMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"MarketplaceListingSuggestionNoticeUserActionResponsePayload",kind:"LinkedField",name:"marketplace_listing_suggestion_notice_user_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"client_mutation_id",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMarketplaceListingNoticeSuggestionUserActionMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMarketplaceListingNoticeSuggestionUserActionMutation",selections:c},params:{id:b("CometMarketplaceListingNoticeSuggestionUserActionMutation_facebookRelayOperation"),metadata:{},name:"CometMarketplaceListingNoticeSuggestionUserActionMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometMarketplaceListingNoticeSuggestionUserActionMutation",["CometMarketplaceListingNoticeSuggestionUserActionMutation.graphql","CometRelay"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("CometMarketplaceListingNoticeSuggestionUserActionMutation.graphql");function a(a,b,c){return d("CometRelay").commitMutation(a,{mutation:i,onCompleted:c&&c.onCompleted,onError:c&&c.onError,optimisticUpdater:function(a){a=a.get(b.for_sale_item_id);if(a==null)return;var c=a.getLinkedRecords("listing_seller_notices");if(!Array.isArray(c))return;c=c.filter(function(a){return a!=null&&a.getValue("type")!==b.notice_type});a.setLinkedRecords(c,"listing_seller_notices")},variables:{input:b}})}g["default"]=a}),98);
__d("CometMarketplaceMessageSellerMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4861194384003324"}),null);
__d("CometMarketplaceMessageSellerMutation.graphql",["CometMarketplaceMessageSellerMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"MarketplaceMessageSellerResponsePayload",kind:"LinkedField",name:"marketplace_message_seller",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"success",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"thread_id",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMarketplaceMessageSellerMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMarketplaceMessageSellerMutation",selections:c},params:{id:b("CometMarketplaceMessageSellerMutation_facebookRelayOperation"),metadata:{},name:"CometMarketplaceMessageSellerMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometMarketplaceMessageSellerMutation",["CometMarketplaceMessageSellerMutation.graphql","CometRelayEnvironment","Promise","cr:819055"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a,d){var e=(d=d)!=null?d:c("CometRelayEnvironment");return new(i||(i=b("Promise")))(function(c,d){b("cr:819055").commitMutation(e,{mutation:h!==void 0?h:h=b("CometMarketplaceMessageSellerMutation.graphql"),onCompleted:function(a,b){b&&b.length?d(b):c(a)},onError:function(a){return d([a])},updater:function(b,c){c=c.marketplace_message_seller;var d=c==null?void 0:c.thread_id;if((c==null?void 0:c.success)!==!0||d==null||a.input.listing_id==null)return;c=b.get(a.input.listing_id);if(c==null)return;b=c.getOrCreateLinkedRecord("seller_message_thread","MessageThread");c=b.getOrCreateLinkedRecord("thread_key","MessageThreadKey");c.setValue(d,"thread_fbid")},variables:a})})}g.commitCometMarketplaceMessageSellerMutation=a}),98);
__d("CometMarketplaceSellerListingNotices_sellerNotices.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b=[a],c=[{kind:"Variable",name:"callsite",variableName:"callsite"}],d={alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"action",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null};return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"callsite"}],kind:"Fragment",metadata:null,name:"CometMarketplaceSellerListingNotices_sellerNotices",selections:[a,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"marketplace_listing_seller",plural:!1,selections:b,storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"MarketplaceBumpInfo",kind:"LinkedField",name:"marketplace_bump_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"bump_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"days_until_next_bump",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"max_bump_count",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"origin_group",plural:!1,selections:b,storageKey:null}],type:"GroupCommerceProductItem",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:c,concreteType:"XFBMarketplaceAppealUIData",kind:"LinkedField",name:"fi_enhanced_appeal_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"use_fi_appeals",storageKey:null}],storageKey:null},{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"listing_seller_notices",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_dismissible",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"body",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:[{kind:"Literal",name:"scale",value:2}],concreteType:"Image",kind:"LinkedField",name:"glyph_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:"glyph_image(scale:2)"},{alias:null,args:null,kind:"ScalarField",name:"style",storageKey:null},{alias:null,args:null,concreteType:"MarketplaceListingNoticeCTA",kind:"LinkedField",name:"primary_cta",plural:!1,selections:[d,e,f,{alias:null,args:null,concreteType:"MarketplaceListingNoticeOneClickOption",kind:"LinkedField",name:"client_one_click_options",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null},d],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"MarketplaceListingNoticeCTA",kind:"LinkedField",name:"secondary_cta",plural:!1,selections:[d,e,f],storageKey:null}],storageKey:null}],type:"MarketplaceListingSellerNotices",abstractKey:"__isMarketplaceListingSellerNotices"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_email_communication_enabled",storageKey:null}],type:"MarketplaceListingWithEmailCommunication",abstractKey:"__isMarketplaceListingWithEmailCommunication"}],type:"MarketplaceListingRenderable",abstractKey:"__isMarketplaceListingRenderable"}}();e.exports=a}),null);
__d("CometVerificationHubDialogQuery$Parameters",["CometVerificationHubDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVerificationHubDialogQuery_facebookRelayOperation"),metadata:{},name:"CometVerificationHubDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVerificationHubDialog.entrypoint",["CometVerificationHubDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{cometVerificationHubDialogQueryReference:{parameters:c("CometVerificationHubDialogQuery$Parameters"),variables:{forSaleItemId:a.listingId,mivhVerificationSource:a.mivhVerificationSource}}}}},root:c("JSResourceForInteraction")("CometVerificationHubDialog.react").__setRef("CometVerificationHubDialog.entrypoint")};g["default"]=a}),98);
__d("CometVerificationHubWWWGating",["gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("gkx")("24321")}function b(){return c("gkx")("20935")}function d(){return c("gkx")("24322")}g.passesWWWTargetingGk=a;g.isRunningOnComet=b;g.isEligibleForCometOnBlue=d}),98);
__d("CometVerificationHubRoutingUtils",["CometVerificationHubDialog.entrypoint","CometVerificationHubWWWGating","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,e,f){var g=c("useCometEntryPointDialog")(c("CometVerificationHubDialog.entrypoint"),{listingId:a,mivhVerificationSource:e}),h=g[0];return!d("CometVerificationHubWWWGating").isRunningOnComet?function(a){}:function(c){h({listingId:a,mivhReferralSource:f,mivhVerificationSource:e},b)}}g.useOpenVerificationHub=a}),98);
__d("EntityQualityComplianceEnforcementDetailsDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7659207050866439"}),null);
__d("EntityQualityComplianceEnforcementDetailsDialogQuery$Parameters",["CometImmersivePhotoCanUserDisable3DMotion.relayprovider","CometIsAdaptiveUFIEnabled.relayprovider","CometUFIReactionsEnableShortName.relayprovider","CometUFIShareActionMigration.relayprovider","EntityQualityComplianceEnforcementDetailsDialogQuery_facebookRelayOperation","IsMergQAPolls.relayprovider","IsWorkUser.relayprovider","StoriesArmadilloReplyEnabled.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("EntityQualityComplianceEnforcementDetailsDialogQuery_facebookRelayOperation"),metadata:{},name:"EntityQualityComplianceEnforcementDetailsDialogQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__CometImmersivePhotoCanUserDisable3DMotionrelayprovider:b("CometImmersivePhotoCanUserDisable3DMotion.relayprovider"),__relay_internal__pv__IsWorkUserrelayprovider:b("IsWorkUser.relayprovider"),__relay_internal__pv__IsMergQAPollsrelayprovider:b("IsMergQAPolls.relayprovider"),__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:b("CometUFIReactionsEnableShortName.relayprovider"),__relay_internal__pv__CometUFIShareActionMigrationrelayprovider:b("CometUFIShareActionMigration.relayprovider"),__relay_internal__pv__CometIsAdaptiveUFIEnabledrelayprovider:b("CometIsAdaptiveUFIEnabled.relayprovider"),__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider:b("StoriesArmadilloReplyEnabled.relayprovider")}}};e.exports=a}),null);
__d("EntityQualityComplianceEnforcementDetailsDialog.entrypoint",["EntityQualityComplianceEnforcementDetailsDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.content_action_type,e=a.content_id,f=a.entity_action_type;a=a.entity_id;return{queries:{queryReference:{parameters:c("EntityQualityComplianceEnforcementDetailsDialogQuery$Parameters"),variables:{content_action_type:b,content_id:e,entity_action_type:f,entity_id:a,feedLocation:"ENTITY_QUALITY",privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"entity_quality",scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("EntityQualityComplianceEnforcementDetailsDialog.react").__setRef("EntityQualityComplianceEnforcementDetailsDialog.entrypoint")};g["default"]=a}),98);
__d("CometMarketplaceSellerListingNotices.react",["fbt","ix","BumpInfo","CometContextualMessage.react","CometLinkedEntityRenderer","CometMarketplaceBumpDialog","CometMarketplaceDeleteAndRelistUtils","CometMarketplaceListingNoticeSuggestionUserActionMutation","CometMarketplaceSellerListingNotices_sellerNotices.graphql","CometPivotLink.react","CometRelay","CometTextWithEntitiesRelay.react","CometVerificationHubRoutingUtils","EntityQualityComplianceEnforcementDetailsDialog.entrypoint","FBLogger","FDSPivotLinkPile.react","FDSSkittleIcon.react","IconSource","JSResourceForInteraction","MarketplaceDeleteConfirmationDialog.entrypoint","MarketplaceDeleteUtils","TetraButtonGroup.react","XCometGroupDiscussionControllerRouteBuilder","XCometMarketplaceYouSellingControllerRouteBuilder","coerceRelayImage","cometPushToast","fbicon","react","useCometEntryPointDialog","useCometLazyDialog","useCometRouterDispatcher","useMarketplaceRelistAndDeleteMutation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||(k=d("react"));e=k;var m=e.useCallback,n=e.useEffect,o=e.useState,p=c("JSResourceForInteraction")("CometMarketplaceItemRejectionAppealDialog.react").__setRef("CometMarketplaceSellerListingNotices.react");function a(a){var e=a.callsite;a=a.sellerNotices;var f=d("CometRelay").useFragment(j!==void 0?j:j=b("CometMarketplaceSellerListingNotices_sellerNotices.graphql"),a),g=c("useCometRouterDispatcher")();a=d("MarketplaceDeleteUtils").useSimpleMarketplaceDeleteDialog({itemId:(a=f.id)!=null?a:""});var k=a[0];a=c("useCometLazyDialog")(p);var q=a[0];a=(a=f.marketplace_listing_seller)==null?void 0:a.id;a=c("useCometEntryPointDialog")(c("EntityQualityComplianceEnforcementDetailsDialog.entrypoint"),{content_action_type:"MARKETPLACE_LISTING_TAKEDOWN",content_id:f.id,entity_action_type:null,entity_id:(a=a)!=null?a:""});var r=a[0],s=d("CometVerificationHubRoutingUtils").useOpenVerificationHub((a=f.id)!=null?a:"",function(){},"POST_LISTING","PDP_BANNER"),t=function(){var a=function(){var a;a=(a=f.origin_group)==null?void 0:a.id;g&&g.go(a==null?c("XCometMarketplaceYouSellingControllerRouteBuilder").buildURL({}):c("XCometGroupDiscussionControllerRouteBuilder").buildURL({idorvanity:a}),{})};return function(){return k(a)}},u=function(a,b){if(b!=null)return function(){var a;((a=f.fi_enhanced_appeal_data)==null?void 0:a.use_fi_appeals)===!0?r({}):q({listingId:b})};return a==null?function(){}:function(){return window.open(a)}},v=function(a){g&&g.go(a,{})},w=function(){return s};a=d("CometMarketplaceBumpDialog").useMarketplaceBumpErrorDialog();var x=a[0];a=new(c("BumpInfo"))();a.setBumpDays({bumpCount:(a=f.marketplace_bump_info)==null?void 0:a.bump_count,maxBumpCount:(a=f.marketplace_bump_info)==null?void 0:a.max_bump_count,nextBumpDays:(a=f.marketplace_bump_info)==null?void 0:a.days_until_next_bump});var y=d("CometRelay").useRelayEnvironment(),z=c("useMarketplaceRelistAndDeleteMutation")().commitRelistAndDelete;a=d("CometMarketplaceDeleteAndRelistUtils").useMarketplaceDeleteAndRelistErrorDialog();var A=a[0],B=(f==null?void 0:f.is_email_communication_enabled)===!0,C=d("CometMarketplaceDeleteAndRelistUtils").useMarketplaceDeleteAndRelistSuccessToast(B);a=c("useCometEntryPointDialog")(c("MarketplaceDeleteConfirmationDialog.entrypoint"),{listingID:(a=f==null?void 0:f.id)!=null?a:""});var D=a[0],E=function(a,b){var c=function(b){b=b.get(a);b&&b.setValue(!1,"can_copy_and_delete")};z(a,c,b)};a=d("CometMarketplaceBumpDialog").useBumpPost();var F=a[0],G=function(a){var b;if(a==null||a.action==null)return function(){};switch(a.action){case"DELETE":return t();case"DISMISS":return function(){O()};case"OPEN_APPEAL_FLOW":return u((b=a==null?void 0:a.url)!=null?b:"",(b=f.id)!=null?b:"");case"OPEN_VERIFICATION_HUB_COMET":return w();case"OPEN_URL":return function(){var b;v((b=a==null?void 0:a.url)!=null?b:"");O()};case"RENEW_LISTING":return function(){var a=function(a){a=typeof a==="string"?a:a.message;c("FBLogger")("marketplace").warn("Error renewing post: %s",a);x()};O();if(f.id==null){a("No for sale item in response");return}F({forSaleItemId:f.id,onBumpError:a,onBumpSuccess:function(b){b=b==null?void 0:(b=b.marketplace_bump_item)==null?void 0:b.for_sale_item;if(!b){a("No for sale item in response");return}d("cometPushToast").cometPushSimpleToast(h._("__JHASH__da_LCyJmaBj__JHASH__"))}})};case"DELETE_AND_RELIST":return function(){var a=function(a){c("FBLogger")("marketplace").warn("Error deleting and relisting post: $s",a),A()};if(f.id==null||f.id===void 0){O();a("No for sale item data");return}var b=function(){var b;O();E((b=f.id)!=null?b:"",{onError:function(b){a(b.message)},onSuccess:function(a){C()}})};B?D({isDeleteAndRelist:!0,onConfirmDelete:b}):b()};default:return function(){O()}}},H=function(a){switch(a){case"ERROR":return"cherry";case"WARNING":return"tomato";case"CHECKMARK":return"seafoam";default:return"gray"}};a=o(!0);var I=a[0],J=a[1];a=o([]);var K=a[0],L=a[1];a=o(!0);var M=a[0],N=a[1],O=m(function(){J(!1)},[J]);a=(a=f==null?void 0:f.listing_seller_notices)!=null?a:[];var P=null,Q=function(a){var b;b=((b=a.primary_cta)==null?void 0:b.client_one_click_options)||[];if(b.length===0)return null;b=b.map(function(b){var e=b.key,g=b.label;if(e!=null&&g!=null){var h=K.includes(b.key),j=function(b,c){c=c?K.concat(b):K.filter(function(a){return a!==b});L(c);R(f.id,a.type,"PRIMARY",M,K);N(!1)};return l.jsx(c("CometPivotLink.react"),{image:h?{icon:d("fbicon")._(i("477813"),16),type:"icon"}:{icon:d("fbicon")._(i("483768"),16),type:"icon"},imagePlacement:"left",label:g,onPress:function(){j(e,!h)},selected:h},e)}}).filter(Boolean);return l.jsx(c("FDSPivotLinkPile.react"),{align:"start",children:b})};a!=null&&a.length!==0&&(P=a.slice(0,1).map(function(a,b){var d;if(!I)return null;d={body:a.body!=null?l.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:{ExternalUrl:[c("CometLinkedEntityRenderer")]},textWithEntities:a.body}):null,headline:(d=a==null?void 0:a.title)!=null?d:"",type:"secondary"};var e=a.glyph_image,g=a.style;g=e!=null&&g!=null?{color:H(g),icon:new(c("IconSource"))("FB",c("coerceRelayImage")(e),24),size:36}:null;a.is_dismissible===!0&&(d.onClose=function(){O(),R(f.id,a.type,"SECONDARY")});if(a.primary_cta!=null||a.secondary_cta!=null){e={};var h=null;if(a.primary_cta!=null){var i;if(((i=a.primary_cta)==null?void 0:i.action)==="ONE_CLICK_MULTICHOICE")h=Q(a);else{e.primary={label:(i=a.primary_cta.label)!=null?i:"",onPress:function(){G(a.primary_cta)(),R(f.id,a.type,"PRIMARY")}}}}if(a.secondary_cta!=null&&a.secondary_cta.action!=="DISMISS"){e.secondary={label:(i=a.secondary_cta.label)!=null?i:"",onPress:function(){G(a.secondary_cta)(),R(f.id,a.type,"SECONDARY")}}}d.addOnPrimary=h!=null?h:e.primary!=null||e.secondary!=null?l.jsx(c("TetraButtonGroup.react"),babelHelpers["extends"]({},e)):null}d.icon=l.jsx(c("FDSSkittleIcon.react"),babelHelpers["extends"]({},g));i=l.jsx(c("CometContextualMessage.react"),babelHelpers["extends"]({},d),b);return{display:i,info:a}}));var R=m(function(a,b,d,f,g){b!=null&&a!=null&&b.startsWith("SUGGESTION")&&c("CometMarketplaceListingNoticeSuggestionUserActionMutation")(y,{action_type:d,callsite:e,for_sale_item_id:a,is_first_selection:f,notice_type:b,selected_elements:g})},[y,e]);n(function(){var a;(a=P)==null?void 0:a.map(function(a){return R(f.id,a==null?void 0:a.info.type,null)})},[]);return P?l.jsx("div",{className:"xx6bls6",children:P.map(function(a){return a==null?void 0:a.display})}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometMarketplaceShopsContactMerchantMessageMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5371410682892919"}),null);
__d("CometMarketplaceShopsContactMerchantMessageMutation.graphql",["CometMarketplaceShopsContactMerchantMessageMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:"marketplace_message_seller",args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"CommerceMessageSellerResponsePayload",kind:"LinkedField",name:"commerce_message_seller",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"success",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"thread_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"page_id",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMarketplaceShopsContactMerchantMessageMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMarketplaceShopsContactMerchantMessageMutation",selections:c},params:{id:b("CometMarketplaceShopsContactMerchantMessageMutation_facebookRelayOperation"),metadata:{},name:"CometMarketplaceShopsContactMerchantMessageMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometMarketplaceShopsContactMerchantMessageMutation",["CometMarketplaceShopsContactMerchantMessageMutation.graphql","CometRelayEnvironment","Promise","cr:819055"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h!==void 0?h:h=b("CometMarketplaceShopsContactMerchantMessageMutation.graphql");function a(a){return new(i||(i=b("Promise")))(function(d,e){b("cr:819055").commitMutation(c("CometRelayEnvironment"),{mutation:j,onCompleted:function(a,b){b&&b.length?e(b):d(a)},onError:function(a){return e([a])},updater:function(b,c){c=c.marketplace_message_seller;var d=c==null?void 0:c.thread_id;if((c==null?void 0:c.success)!==!0||d==null||a.input.product_item_id==null)return;c=b.get(a.input.product_item_id);if(c==null)return;b=c.getOrCreateLinkedRecord("seller_message_thread","MessageThread");c=b.getOrCreateLinkedRecord("thread_key","MessageThreadKey");c.setValue(d,"thread_fbid")},variables:a})})}g.commitCometMarketplaceShopsContactMerchantMessageMutation=a}),98);
__d("CometMarketplaceVideoPlayerX.react",["VideoPlayerControlsContainerOverlay.react","VideoPlayerControlsGroups.react","VideoPlayerFullscreenControl.react","VideoPlayerInteractionOverlay.react","VideoPlayerPlaybackControl.react","VideoPlayerPlaybackTimer.react","VideoPlayerProgressiveImplementationData","VideoPlayerProgressiveImplementationV2.react","VideoPlayerScrubber.react","VideoPlayerSurface.react","VideoPlayerVolumeControl.react","VideoPlayerX.react","react","useVideoPlayerDefaultControlsVisibility"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.loopCount;b=b===void 0?0:b;var e=a.shouldShowControlsContainerOverlay;e=e===void 0?!0:e;var f=a.videoId;a=a.videoUri;a=d("VideoPlayerProgressiveImplementationData").makeProgressiveImplementationData({hdSrc:null,hdSrcPreferred:!1,isExternalMedia:!1,sdSrc:a});if(a instanceof Error||f==null)return null;a={Component:c("VideoPlayerProgressiveImplementationV2.react"),data:a,typename:"VideoPlayerProgressiveImplementation"};return i.jsx(c("VideoPlayerX.react"),{autoplaySetting:"default_autoplay",implementations:[a],loopCount:b,playerOriginOverride:"commerce",portalingEnabled:!1,subOrigin:"pdp_video",videoFBID:f,children:i.jsx(j,{shouldShowControlsContainerOverlay:e})})}a.displayName=a.name+" [from "+f.id+"]";function j(a){a=a.shouldShowControlsContainerOverlay;a=a===void 0?!0:a;var b=c("useVideoPlayerDefaultControlsVisibility")();b=b.onUserInteraction;return i.jsxs(c("VideoPlayerSurface.react"),{children:[i.jsx(d("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{}),a&&i.jsxs(c("VideoPlayerControlsContainerOverlay.react"),{children:[i.jsxs(d("VideoPlayerControlsGroups.react").Contracted,{isVisible:!0,children:[i.jsx(c("VideoPlayerPlaybackControl.react"),{}),i.jsx(c("VideoPlayerPlaybackTimer.react"),{})]}),i.jsx(d("VideoPlayerControlsGroups.react").Expanded,{isVisible:!0,children:i.jsx(c("VideoPlayerScrubber.react"),{onUserInteraction:b})}),i.jsxs(d("VideoPlayerControlsGroups.react").Contracted,{isVisible:!0,children:[i.jsx(c("VideoPlayerVolumeControl.react"),{onUserInteraction:b}),i.jsx(c("VideoPlayerFullscreenControl.react"),{onUserInteraction:b})]})]})]})}j.displayName=j.name+" [from "+f.id+"]";b=i.memo(a);g["default"]=b}),98);
__d("CometRelativeTimestamp.client",["CometRelativeTimestamp.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.date;a=a.format;b=new Date(b);return i.jsx(c("CometRelativeTimestamp.react"),{date:b,format:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTextArea.react",["BaseTextArea.react","CometScreenReaderText.react","CometTextInputStyles.react","react","useBaseInputValidators"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useId;function a(a,b){var d=a["aria-describedby"],e=a.autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,f=a.disabled,g=f===void 0?!1:f;f=a.expandable;var h=f===void 0?!1:f,k=a.label;f=a.labelIsHidden;var l=f===void 0?!1:f,m=a.maxLength;f=a.maxRows;var n=f===void 0?Infinity:f;f=a.rows;var o=f===void 0?1:f;f=a.textAlign;var p=a.validator,q=a.value,r=babelHelpers.objectWithoutPropertiesLoose(a,["aria-describedby","autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD","disabled","expandable","label","labelIsHidden","maxLength","maxRows","rows","textAlign","validator","value"]);a=j();p=c("useBaseInputValidators")({validator:p,value:String(q)});var s=p.topResultReason,t=p.topResultType,u=s!=null?a+" "+((p=d)!=null?p:""):(p=d)!=null?p:void 0;return i.jsxs("label",{className:"xzsf02u x6prxxf",children:[!l&&i.jsx("div",{className:"x1heor9g x1lliihq x1qlqyl8 xs9asl8",children:k}),i.jsx(c("CometTextInputStyles.react"),{align:f,dimension:"multi",disabled:g,children:function(a){return i.jsx(c("BaseTextArea.react"),babelHelpers["extends"]({},r,{"aria-describedby":u,"aria-invalid":t==="ERROR","aria-label":l?k:void 0,autoFocus:e,disabled:g,maxLength:m,maxRows:h?n:o,minRows:o,ref:b,value:q,xstyle:a}))}}),s!=null?i.jsx(c("CometScreenReaderText.react"),{id:a,text:s}):null]})}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("CometVerificationHubUtils",[],(function(a,b,c,d,e,f){"use strict";a=1378018;f.VERIFICATION_NEEDED_ERROR_CODE=a}),66);
__d("MarketplaceLegalDisclosureGating",["gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("gkx")("23633")}g.shouldShowLegalDisclosureOnPDP=a}),98);
__d("MarketplaceMessagingCustomizedInitialMessageFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("34");b=d("FalcoLoggerInternal").create("marketplace_messaging_customized_initial_message",a);e=b;g["default"]=e}),98);
__d("MarketplaceStaticMap.react",["CometStaticMap.react","CometTransientDialogProvider.react","MarketplacePDPContext","MarketplacePDPPreviewDisabledWrapper.hybrid","MarketplacePDPPreviewFocusBorder.hybrid","marketplaceComposerDispatchers.hybrid","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={mapPreview:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",$$css:!0},root:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",$$css:!0},rootPreview:{pointerEvents:"x47corl",$$css:!0}};function a(a){var b=a.expand;b=b===void 0?!1:b;var e=a.height,f=a.latitude,g=a.longitude,i=a.radiusKm,l=a.showCenterCircle;l=l===void 0?!0:l;var m=a.showCenterMarker;m=m===void 0?!1:m;a=a.width;g={latitude:f,longitude:g};var n=function(a){a=156543.03392*Math.cos(f*Math.PI/180)/Math.pow(2,a);return i*1e3/a*2},o=function(){var a=12,b=n(a);while(a>4&&b>e*.9)a-=1,b=n(a);return a};a={height:e,width:a};m=m?[{position:g}]:[];l=l?{position:g,radius:{unit:"kilometers",value:Math.round(i)}}:void 0;var p=d("MarketplacePDPContext").usePDPContext();p=p.isPreview;p=p===void 0?!1:p;var q=d("marketplaceComposerDispatchers.hybrid").useMarketplaceComposerCommonViewState();q=q.location;q=d("marketplaceComposerDispatchers.hybrid").usePDPPreviewConfig(q);var r=q.isGrayedOut;q=q.isHovered;return j.jsx(c("CometTransientDialogProvider.react"),{children:j.jsxs("div",{className:(h||(h=c("stylex")))(k.root,p&&k.rootPreview),children:[j.jsx(c("MarketplacePDPPreviewDisabledWrapper.hybrid"),{shouldGrayOut:r,children:j.jsx(c("CometStaticMap.react"),babelHelpers["extends"]({center:g,circle:l,expand:b,mapComponent:"MarketplaceStaticMap.react",mapSource:"marketplace_post_permalink",markers:m,zoom:o()},a))}),q&&j.jsx(c("MarketplacePDPPreviewFocusBorder.hybrid"),{xstyle:k.mapPreview})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useLogMarketplaceMessagingCustomizedInitialMessage",["MarketplaceMessagingCustomizedInitialMessageFalcoEvent","isStringNullOrEmpty","react","useCurrentMarketplaceSurface"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useRef;function a(a){var b=j(!1),d=c("useCurrentMarketplaceSurface")(),e=d.surface;return i(function(){!c("isStringNullOrEmpty")(a)&&!b.current&&(b.current=!0,c("MarketplaceMessagingCustomizedInitialMessageFalcoEvent").log(function(){return{clienttime:Date.now(),for_sale_item_id:a,surface:e}}))},[a,e])}g["default"]=a}),98);
__d("useMessengerThreadURLDispatcherForPage",["CometRouteRenderType","useCometRouterDispatcher","useMWChatOpenTabForPage","useShouldShowMessagingEntrypointOnCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=c("useMWChatOpenTabForPage")("marketplace"),b=d("CometRouteRenderType").useIsPushView(),e=c("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT"),f=c("useCometRouterDispatcher")();return function(c){a(c),b&&f&&!e&&f.popPushView()}}g["default"]=a}),98);
__d("useMarketplaceMessageSeller",["fbt","CometMarketplaceMessageSellerMutation","CometMarketplaceShopsContactMerchantMessageMutation","CometVerificationHubRoutingUtils","CometVerificationHubUtils","CometVerificationHubWWWGating","FBLogger","emptyFunction","killswitch","promiseDone","react","useCometAlertDialog","useCurrentMarketplaceSurface","useMessengerThreadURLDispatcher","useMessengerThreadURLDispatcherForPage","useMinifiedProductAttribution"],(function(a,b,c,d,e,f,g,h){"use strict";var i;b=i||d("react");var j=b.useCallback,k=b.useState;function a(a,b,e,f,g){e===void 0&&(e=!1);f===void 0&&(f=c("emptyFunction"));g===void 0&&(g=c("emptyFunction"));var i=c("useMinifiedProductAttribution")(),l=c("useCometAlertDialog")(),m=c("useMessengerThreadURLDispatcher")(),n=c("useMessengerThreadURLDispatcherForPage")(),o=k(!1),p=o[0],q=o[1];o=c("useCurrentMarketplaceSurface")();var r=o.referralSurface,s=o.surface,t=d("CometVerificationHubRoutingUtils").useOpenVerificationHub(a,function(){f()},"CONTACT_SELLER","INLINE_MESSAGE_BUTTON");return j(function(j,k){if(p)return;q(!0);j=e&&b!=null&&!c("killswitch")("MARKETPLACE_DISABLE_CONTACT_MERCHANT_PDP_ACTION")?d("CometMarketplaceShopsContactMerchantMessageMutation").commitCometMarketplaceShopsContactMerchantMessageMutation({input:{message_body:j,product_item_id:b}}):d("CometMarketplaceMessageSellerMutation").commitCometMarketplaceMessageSellerMutation({input:{attribution_id_v2:i,listing_id:a,message:j,referral_code:k==null?void 0:k.referralCode,referral_surface:r,surface:s,tracking:k==null?void 0:k.tracking,ui_component:k==null?void 0:k.uiComponent}});c("promiseDone")(j,function(a){a=a.marketplace_message_seller;var b=a==null?void 0:a.thread_id,c=(a==null?void 0:a.page_id)||null;q(!1);b==null||(a==null?void 0:a.success)===!1?(l({body:h._("__JHASH__4gDlyY92lXG__JHASH__"),title:h._("__JHASH__wlVS6z0kYO___JHASH__")}),f()):c!=null?g(b)!==!1&&n(c):g(b)!==!1&&m(b)},function(a){q(!1);var b=!0;a.length>0&&a[0].code===d("CometVerificationHubUtils").VERIFICATION_NEEDED_ERROR_CODE&&(d("CometVerificationHubWWWGating").isRunningOnComet()||d("CometVerificationHubWWWGating").isEligibleForCometOnBlue()?(b=!1,t()):c("FBLogger")("mivh").warn("user needs to do verification but cannot proceed due to browser incompatibility."));b&&l({body:h._("__JHASH__4gDlyY92lXG__JHASH__"),title:h._("__JHASH__wlVS6z0kYO___JHASH__")})})},[i,p,e,a,r,s,l,f,g,m,n,t,b])}g["default"]=a}),226);