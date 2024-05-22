;/*FB_PKG_DELIM*/

__d("GroupsCometMentionsContext.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;c=b.createContext;var j=b.useCallback,k=b.useMemo,l=b.useState,m=c({groupID:"",groupInvitedList:new Set(),onInviteSent:function(a){}});function a(a){var b=a.children,c=a.groupID;a=l(new Set());var d=a[0],e=a[1],f=j(function(a){e(function(b){return b.add(a)})},[]);a=k(function(){return{groupID:c,groupInvitedList:d,onInviteSent:f}},[c,d,f]);return i.jsx(m.Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";g.GroupsCometMentionsContext=m;g.GroupsCometMentionsContextProvider=a}),98);
__d("GroupsCometMentionsCTAButton.react",["CometRelay","GroupsCometMentionsContext.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useContext;function a(a){var b=a.matchPointer;a=a.userID;var c=j(d("GroupsCometMentionsContext.react").GroupsCometMentionsContext);c=c.groupID;return a==null||c==null||b==null?null:i.jsx(d("CometRelay").MatchContainer,{match:b,props:{delay:4e3,groupID:c,source:"invite_from_mention",userID:a}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometMentionsViewItemResolver.react",["FeedComposerCometMentionsViewItem.react","GroupsCometMentionsCTAButton.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.entry;a=babelHelpers.objectWithoutPropertiesLoose(a,["entry"]);var d=b.rawData,e=null,f=null;d.type==="MENTION_SEARCH_RESULT"&&(e=d.canViewerInviteUserAsFriend,f=b.key);return i.jsx(c("FeedComposerCometMentionsViewItem.react"),babelHelpers["extends"]({},a,{addOn:e!=null?i.jsx(c("GroupsCometMentionsCTAButton.react"),{matchPointer:e,userID:f}):null,entry:b}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("UserSignalsClientImpressionEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1968720");b=d("FalcoLoggerInternal").create("user_signals_client_impression_event",a);e=b;g["default"]=e}),98);
__d("cometUFIGroupMentionsLexicalCreateNodeStrategy",["CometLexicalGenericEntityNode","Lexical","cometBaseMentionsLexicalCreateNodeStrategy"],(function(a,b,c,d,e,f,g){"use strict";a=c("cometBaseMentionsLexicalCreateNodeStrategy")(function(a){var b=a.rawData;if(b.resultType==="KnowledgeHubDocumentData")return d("Lexical").$createTextNode(b.docUrl||"");else{return d("CometLexicalGenericEntityNode").$createCometLexicalGenericEntityNode({id:a.key,text:(b=a.handle)!=null?b:a.label,type:"Actor"})}});b=a;g["default"]=b}),98);
__d("createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry"};e.exports=a}),null);
__d("createGroupsCometMentionsDataEntry_mentionsEntry.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"createGroupsCometMentionsDataEntry_mentionsEntry"};e.exports=a}),null);
__d("createGroupsCometMentionsDataEntry",["CometRelay","createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry.graphql","createGroupsCometMentionsDataEntry_mentionsEntry.graphql","filterNulls"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h!==void 0?h:h=b("createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry.graphql"),k=i!==void 0?i:i=b("createGroupsCometMentionsDataEntry_mentionsEntry.graphql");function l(a){return d("CometRelay").readInlineData(k,a)}function m(a){return d("CometRelay").readInlineData(j,a)}function a(a){a=l(a);if((a==null?void 0:a.__typename)==="XFBMentionsSectionEntry"){var b=a.cache_id,d=a.entries,e=a.label;return b==null||e==null?null:{entries:c("filterNulls")((d||[]).map(n)),key:b,label:e,type:"section"}}else if(a.__typename==="CometComposerTypeaheadResultEntry")return n(a);return null}function n(a){var b,c;a=m(a);var d=a.node;if(d==null)return null;var e=d.__typename,f=d.doc_title,g=d.doc_url,h=d.id,i=d.name,j=d.photo;j=j==null?void 0:j.uri;var k;j==null&&(j=d.thumbnail_link,k="roundedRect");if(i==null||h==null||j==null)return null;b=((b=d.reference_type)==null?void 0:b.__typename)==="StrongEntityReference"?"regular":"weak";var l=a.score;if(l==null)return null;c=Boolean(((c=d.work_foreign_entity_info)==null?void 0:c.type)==="FOREIGN");var n=null,o=d.can_be_invited_by_viewer===!0,p=d.gender,q=Boolean(d.is_verified);a=(a=a.subtext)!=null?a:d.mentions_subtext;return{decorType:b,key:h,label:i,rawData:{canBeInvitedByViewer:o,canViewerInviteUserAsFriend:n,docTitle:f,docUrl:g,gender:p,iconShape:k,isExternal:c,isVerified:q,photoURI:j,resultType:e,score:l,subtext:a,type:"MENTION_SEARCH_RESULT"},type:"entry"}}g.getMentionsDataEntryData=l;g.getComposerTypeaheadResultEntryData=m;g.createGroupsCometMentionsDataEntryOrSectionEntry=a}),98);
__d("useGroupCometInviteOnMentionDialogPlugin",["CometLexicalGroupEntityNode","JSResourceForInteraction","Lexical","MLCInstrumentationCommands","react","useCometLazyDialog"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useLayoutEffect,j=b.useRef,k=c("JSResourceForInteraction")("GroupsCometInviteOnMentionDialog.react").__setRef("useGroupCometInviteOnMentionDialogPlugin"),l=function(a){if(a==null)return null;var b=a.getCanBeInvitedByViewer();if(b!==!0)return null;b=a.getID();var c=a.getTextContent(),d=a.getUserGender();a=a.getPhotoURI();return{gender:d,id:b,name:c,photoURI:a}};function a(a,b){var e=j(new Map()),f=c("useCometLazyDialog")(k);f=f[0];i(function(){if(b==null)return;var c=a.registerCommand(d("MLCInstrumentationCommands").COMMIT_COMMAND,function(){return!1},d("Lexical").COMMAND_PRIORITY_NORMAL),f=a.registerMutationListener(d("CometLexicalGroupEntityNode").CometLexicalGroupEntityNode,function(b){var c=e.current;a.getEditorState().read(function(){for(var a=b.entries(),e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=a.length)break;g=a[f++]}else{f=a.next();if(f.done)break;g=f.value}g=g;var h=g[0];g=g[1];if(g==="created"){var i=d("Lexical").$getNodeByKey(h);i=l(i);if(i==null)continue;c.set(h,i)}else g==="destroyed"&&c["delete"](h)}})});return function(){c(),f()}},[a,f,b])}g["default"]=a}),98);
__d("upgradedUFI2GroupMentionsComposerPluginCreatorWithTypeaheadViewForLexical",["CometMentionsForLexical.react","CometMentionsLayoutStrategy.react","GroupsCometMentionsContext.react","GroupsCometMentionsViewItemResolver.react","cometUFIGroupMentionsLexicalCreateNodeStrategy","cr:5343","gkx","react","useCometMentionsViewListStrategy","useGroupCometInviteOnMentionDialogPlugin"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");e=c("gkx")("23229");var j=c("gkx")("25978");f=["USER","EVENT","GROUP","PAGE"];var k=e?[].concat(f,["WORKROOMS_USER"]):f,l=j?[].concat(k,["KNOWLEDGE_HUB_DOCUMENT"]):k;function a(){return function(a){var e=a.config,f=e.groupID;e=e.postID;a=a.pluginProps.editor;e=b("cr:5343")({canUseSections:j,firstDegreeFiltersForBootstrap:k,firstDegreeFiltersForNetwork:l,groupID:f,postID:e,shouldBootstrapOnLayoutEffect:!1});var g=c("useCometMentionsViewListStrategy")({viewItemStrategyRenderer:c("GroupsCometMentionsViewItemResolver.react")});c("useGroupCometInviteOnMentionDialogPlugin")(a,f);return i.jsx(d("GroupsCometMentionsContext.react").GroupsCometMentionsContextProvider,{groupID:f,children:i.jsx(c("CometMentionsForLexical.react"),{createNodeStrategy:c("cometUFIGroupMentionsLexicalCreateNodeStrategy"),dataSourceResolverConfig:e,editor:a,layoutStrategyRenderer:c("CometMentionsLayoutStrategy.react"),viewStrategyRenderer:g})})}}g["default"]=a}),98);
__d("createUpgradedUFI2GroupMentionsComposerPluginForLexical",["upgradedUFI2GroupMentionsComposerPluginCreatorWithTypeaheadViewForLexical"],(function(a,b,c,d,e,f,g){"use strict";a=c("upgradedUFI2GroupMentionsComposerPluginCreatorWithTypeaheadViewForLexical")();g["default"]=a}),98);
__d("useGroupsCometTypeaheadBootloadDataSourceQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6163124660458064"}),null);
__d("useGroupsCometTypeaheadBootloadDataSourceQuery.graphql",["useGroupsCometTypeaheadBootloadDataSourceQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"canUseSections"},c={defaultValue:null,kind:"LocalArgument",name:"canViewerMessage"},d={defaultValue:null,kind:"LocalArgument",name:"firstDegreeFilters"},e={defaultValue:null,kind:"LocalArgument",name:"groupID"},f={defaultValue:null,kind:"LocalArgument",name:"isAdminsOnly"},g={defaultValue:null,kind:"LocalArgument",name:"isPhotoTag"},h={defaultValue:null,kind:"LocalArgument",name:"postID"},i={defaultValue:null,kind:"LocalArgument",name:"scale"},j={kind:"Variable",name:"group_id",variableName:"groupID"},k=[{kind:"Variable",name:"can_viewer_message",variableName:"canViewerMessage"},j,{kind:"Variable",name:"is_admins_only",variableName:"isAdminsOnly"},{kind:"Variable",name:"is_photo_tag",variableName:"isPhotoTag"},{kind:"Variable",name:"post_id",variableName:"postID"},{kind:"Variable",name:"types",variableName:"firstDegreeFilters"},{kind:"Variable",name:"use_sections",variableName:"canUseSections"}],l={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"score",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"subtext",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"mentions_subtext",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},r={kind:"Variable",name:"scale",variableName:"scale"},s={alias:"photo",args:[{kind:"Literal",name:"height",value:40},r,{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null};j=[j];var t={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},u=[o,p,s],v=[o,s];t={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l,{kind:"InlineFragment",selections:[o,{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null},p,q,s,{alias:null,args:j,kind:"ScalarField",name:"can_be_invited_by_viewer",storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[t],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[t,{alias:null,args:null,kind:"ScalarField",name:"is_multi_company_group",storageKey:null}],type:"Group",abstractKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:u,type:"XFBWorkroomsBaseUser",abstractKey:"__isXFBWorkroomsBaseUser"},{kind:"InlineFragment",selections:u,type:"Group",abstractKey:null},{kind:"InlineFragment",selections:u,type:"Event",abstractKey:null},{kind:"InlineFragment",selections:[o,p,q,s],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:v,type:"ContextualProfile",abstractKey:"__isContextualProfile"},{kind:"InlineFragment",selections:u,type:"GroupRule",abstractKey:null},{kind:"InlineFragment",selections:v,type:"GroupRulesTaggingEntry",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:j,concreteType:null,kind:"LinkedField",name:"reference_type",plural:!1,selections:[l],storageKey:null}],type:"ActorWithCustomizableContextualProfile",abstractKey:"__isActorWithCustomizableContextualProfile"},{kind:"InlineFragment",selections:u,type:"BatchMentions",abstractKey:null},{kind:"InlineFragment",selections:[o,p,{alias:"thumbnail_link",args:[r],kind:"ScalarField",name:"icon_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"doc_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"doc_url",storageKey:null}],type:"KnowledgeHubDocumentData",abstractKey:null}],storageKey:null};q=[l,m,n,t];s=[{kind:"RootArgument",name:"groupID"},{kind:"RootArgument",name:"scale"}];v={alias:null,args:null,kind:"ScalarField",name:"cache_id",storageKey:null};j={alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null};u={kind:"InlineFragment",selections:[m,n,t],type:"CometComposerTypeaheadResultEntry",abstractKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f,g,h,i],kind:"Fragment",metadata:null,name:"useGroupsCometTypeaheadBootloadDataSourceQuery",selections:[{alias:null,args:k,concreteType:null,kind:"LinkedField",name:"comet_group_typeahead_bootload",plural:!0,selections:[l,{kind:"InlineDataFragmentSpread",name:"createGroupsCometMentionsDataEntry_mentionsEntry",selections:[l,{kind:"InlineFragment",selections:[{kind:"InlineDataFragmentSpread",name:"createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry",selections:q,args:null,argumentDefinitions:s}],type:"CometComposerTypeaheadResultEntry",abstractKey:null},{kind:"InlineFragment",selections:[v,j,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entries",plural:!0,selections:[{kind:"InlineDataFragmentSpread",name:"createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry",selections:[{kind:"InlineFragment",selections:q,type:"CometComposerTypeaheadResultEntry",abstractKey:null}],args:null,argumentDefinitions:s}],storageKey:null}],type:"XFBMentionsSectionEntry",abstractKey:null}],args:null,argumentDefinitions:[]}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[i,e,c,f,g,h,d,a],kind:"Operation",name:"useGroupsCometTypeaheadBootloadDataSourceQuery",selections:[{alias:null,args:k,concreteType:null,kind:"LinkedField",name:"comet_group_typeahead_bootload",plural:!0,selections:[l,{kind:"TypeDiscriminator",abstractKey:"__isXFBMentionsEntry"},u,{kind:"InlineFragment",selections:[v,j,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entries",plural:!0,selections:[l,u],storageKey:null}],type:"XFBMentionsSectionEntry",abstractKey:null}],storageKey:null}]},params:{id:b("useGroupsCometTypeaheadBootloadDataSourceQuery_facebookRelayOperation"),metadata:{},name:"useGroupsCometTypeaheadBootloadDataSourceQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useGroupsCometTypeaheadBootloadDataSource",["WebPixelRatio","createGroupsCometMentionsDataEntry","filterNulls","useCometTypeaheadCompositeBootstrapDataSource","useGroupsCometTypeaheadBootloadDataSourceQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("useGroupsCometTypeaheadBootloadDataSourceQuery.graphql");function j(a){return c("filterNulls")(((a=a==null?void 0:a.comet_group_typeahead_bootload)!=null?a:[]).map(d("createGroupsCometMentionsDataEntry").createGroupsCometMentionsDataEntryOrSectionEntry))}function a(a){var b=a.canUseSections,e=a.firstDegreeFilters,f=a.groupID,g=a.limit,h=a.matchStrategy;a=a.postID;return c("useCometTypeaheadCompositeBootstrapDataSource")({gqlQuery:i,limit:g,matchStrategy:h,normalize:j,queryVariables:{canUseSections:b,firstDegreeFilters:e,groupID:f,postID:a,scale:d("WebPixelRatio").get()}})}g["default"]=a}),98);
__d("useGroupsCometTypeaheadNetworkDataSourceQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6493643600719877"}),null);
__d("useGroupsCometTypeaheadNetworkDataSourceQuery.graphql",["useGroupsCometTypeaheadNetworkDataSourceQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"canUseSections"},c={defaultValue:null,kind:"LocalArgument",name:"canViewerMessage"},d={defaultValue:null,kind:"LocalArgument",name:"firstDegreeFilters"},e={defaultValue:null,kind:"LocalArgument",name:"groupID"},f={defaultValue:null,kind:"LocalArgument",name:"isPhotoTag"},g={defaultValue:null,kind:"LocalArgument",name:"postID"},h={defaultValue:null,kind:"LocalArgument",name:"query"},i={defaultValue:null,kind:"LocalArgument",name:"scale"},j={kind:"Variable",name:"group_id",variableName:"groupID"},k=[{kind:"Variable",name:"can_viewer_message",variableName:"canViewerMessage"},j,{kind:"Variable",name:"is_photo_tag",variableName:"isPhotoTag"},{kind:"Variable",name:"post_id",variableName:"postID"},{kind:"Variable",name:"query",variableName:"query"},{kind:"Variable",name:"types",variableName:"firstDegreeFilters"},{kind:"Variable",name:"use_sections",variableName:"canUseSections"}],l={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"score",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"subtext",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"mentions_subtext",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},r={kind:"Variable",name:"scale",variableName:"scale"},s={alias:"photo",args:[{kind:"Literal",name:"height",value:40},r,{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null};j=[j];var t={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},u=[o,p,s],v=[o,s];t={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l,{kind:"InlineFragment",selections:[o,{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null},p,q,s,{alias:null,args:j,kind:"ScalarField",name:"can_be_invited_by_viewer",storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[t],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[t,{alias:null,args:null,kind:"ScalarField",name:"is_multi_company_group",storageKey:null}],type:"Group",abstractKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:u,type:"XFBWorkroomsBaseUser",abstractKey:"__isXFBWorkroomsBaseUser"},{kind:"InlineFragment",selections:u,type:"Group",abstractKey:null},{kind:"InlineFragment",selections:u,type:"Event",abstractKey:null},{kind:"InlineFragment",selections:[o,p,q,s],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:v,type:"ContextualProfile",abstractKey:"__isContextualProfile"},{kind:"InlineFragment",selections:u,type:"GroupRule",abstractKey:null},{kind:"InlineFragment",selections:v,type:"GroupRulesTaggingEntry",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:j,concreteType:null,kind:"LinkedField",name:"reference_type",plural:!1,selections:[l],storageKey:null}],type:"ActorWithCustomizableContextualProfile",abstractKey:"__isActorWithCustomizableContextualProfile"},{kind:"InlineFragment",selections:u,type:"BatchMentions",abstractKey:null},{kind:"InlineFragment",selections:[o,p,{alias:"thumbnail_link",args:[r],kind:"ScalarField",name:"icon_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"doc_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"doc_url",storageKey:null}],type:"KnowledgeHubDocumentData",abstractKey:null}],storageKey:null};q=[l,m,n,t];s=[{kind:"RootArgument",name:"groupID"},{kind:"RootArgument",name:"scale"}];v={alias:null,args:null,kind:"ScalarField",name:"cache_id",storageKey:null};j={alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null};u={kind:"InlineFragment",selections:[m,n,t],type:"CometComposerTypeaheadResultEntry",abstractKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f,g,h,i],kind:"Fragment",metadata:null,name:"useGroupsCometTypeaheadNetworkDataSourceQuery",selections:[{alias:null,args:k,concreteType:null,kind:"LinkedField",name:"comet_group_typeahead_search",plural:!0,selections:[{kind:"InlineDataFragmentSpread",name:"createGroupsCometMentionsDataEntry_mentionsEntry",selections:[l,{kind:"InlineFragment",selections:[{kind:"InlineDataFragmentSpread",name:"createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry",selections:q,args:null,argumentDefinitions:s}],type:"CometComposerTypeaheadResultEntry",abstractKey:null},{kind:"InlineFragment",selections:[v,j,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entries",plural:!0,selections:[{kind:"InlineDataFragmentSpread",name:"createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry",selections:[{kind:"InlineFragment",selections:q,type:"CometComposerTypeaheadResultEntry",abstractKey:null}],args:null,argumentDefinitions:s}],storageKey:null}],type:"XFBMentionsSectionEntry",abstractKey:null}],args:null,argumentDefinitions:[]}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[h,i,e,c,f,g,d,a],kind:"Operation",name:"useGroupsCometTypeaheadNetworkDataSourceQuery",selections:[{alias:null,args:k,concreteType:null,kind:"LinkedField",name:"comet_group_typeahead_search",plural:!0,selections:[l,{kind:"TypeDiscriminator",abstractKey:"__isXFBMentionsEntry"},u,{kind:"InlineFragment",selections:[v,j,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entries",plural:!0,selections:[l,u],storageKey:null}],type:"XFBMentionsSectionEntry",abstractKey:null}],storageKey:null}]},params:{id:b("useGroupsCometTypeaheadNetworkDataSourceQuery_facebookRelayOperation"),metadata:{},name:"useGroupsCometTypeaheadNetworkDataSourceQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useGroupsCometTypeaheadNetworkDataSource",["WebPixelRatio","createGroupsCometMentionsDataEntry","filterNulls","useCometTypeaheadGraphQLDataSource","useGroupsCometTypeaheadNetworkDataSourceQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("useGroupsCometTypeaheadNetworkDataSourceQuery.graphql");function j(a){return c("filterNulls")(((a=a==null?void 0:a.comet_group_typeahead_search)!=null?a:[]).map(d("createGroupsCometMentionsDataEntry").createGroupsCometMentionsDataEntryOrSectionEntry))}function a(a){var b=a.canUseSections,e=a.firstDegreeFilters,f=a.groupID,g=a.limit,h=a.postID;return c("useCometTypeaheadGraphQLDataSource")({gqlQuery:i,limit:g,normalize:j,queryVariablesBuilderFunction:function(a){a=a.query;return{canUseSections:b,firstDegreeFilters:e,groupID:f,postID:h,query:a,scale:d("WebPixelRatio").get()}}})}g["default"]=a}),98);
__d("useBaseGroupsMentionsDataSourceResolverConfig",["MentionsCommonWordsBlocklist","createCometAtSignComposerMentionsMatchStrategy","createCometMentionsNameMatchStrategy","gkx","react","useCometMentionsDataSourceResolverConfig","useCometTypeaheadCompositeDataSource","useGroupsCometTypeaheadBootloadDataSource","useGroupsCometTypeaheadNetworkDataSource"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useMemo,j=["USER","WORKROOMS_USER"],k=["USER","WORKROOMS_USER","EVENT","GROUP","PAGE"],l=10,m=5;function a(a){var b=a.firstDegreeFiltersForBootstrap,d=a.firstDegreeFiltersForNetwork;d=d===void 0?k:d;var e=a.groupID,f=a.postID,g=a.shouldBootstrapOnLayoutEffect,h=a.matchStrategy,n=a.nullstateDataSource,o=a.canUseSections,p=a.payloadDecorators;a=a.limit;var q=c("useCometTypeaheadCompositeDataSource")({bootstrapDataSource:c("useGroupsCometTypeaheadBootloadDataSource")({canUseSections:o,firstDegreeFilters:b,groupID:e,limit:a!=null?a:Math.floor(m/2),matchStrategy:h,postID:f}),cacheKey_SEARCH_ONLY:f!=null?{groupID:e,postID:f,type:"groups_post_mentions_intentful_datasource_cache_key"}:{groupID:e,type:"groups_mentions_intentful_datasource_cache_key"},limit:a!=null?a:l,networkDataSource:c("useGroupsCometTypeaheadNetworkDataSource")({canUseSections:o,firstDegreeFilters:d,groupID:e,limit:a!=null?a:l,postID:f}),nullstateDataSource:n,payloadDecorators:p});b=c("useGroupsCometTypeaheadBootloadDataSource")({firstDegreeFilters:j,groupID:e,limit:a!=null?a:Math.floor(m/2),matchStrategy:h,postID:f});var r=c("useCometTypeaheadCompositeDataSource")({bootstrapDataSource:b,cacheKey_SEARCH_ONLY:f!=null?{groupID:e,postID:f,type:"groups_post_mentions_intentful_datasource_cache_key"}:{groupID:e,type:"groups_mentions_intentful_datasource_cache_key"},limit:a!=null?a:m,networkDataSource:c("useGroupsCometTypeaheadNetworkDataSource")({firstDegreeFilters:j,groupID:e,limit:a!=null?a:m,postID:f}),payloadDecorators:p}),s=c("useCometTypeaheadCompositeDataSource")({bootstrapDataSource:b,limit:a!=null?a:m});o=i(function(){var a=[{dataSource:q,matchStrategy:c("createCometAtSignComposerMentionsMatchStrategy")({minMatchLength:n!=null?0:1})}];if(c("gkx")("23231"))return a;a.push({dataSource:r,matchStrategy:c("createCometMentionsNameMatchStrategy")({commonWordsBlocklist:c("MentionsCommonWordsBlocklist").wordList,minMatchLength:3,nameCase:"capitalized"})});a.push({dataSource:s,matchStrategy:c("createCometMentionsNameMatchStrategy")({commonWordsBlocklist:c("MentionsCommonWordsBlocklist").wordList,minMatchLength:4,nameCase:"lower-case"})});return a},[q,r,s,n]);return c("useCometMentionsDataSourceResolverConfig")(o,g)}g["default"]=a}),98);
__d("useGroupsCometComposerMentionsDataSourceResolverConfig",["useBaseGroupsMentionsDataSourceResolverConfig"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.canUseSections,d=a.firstDegreeFiltersForBootstrap,e=a.firstDegreeFiltersForNetwork,f=a.groupID,g=a.postID;a=a.shouldBootstrapOnLayoutEffect;return c("useBaseGroupsMentionsDataSourceResolverConfig")({canUseSections:b,firstDegreeFiltersForBootstrap:d,firstDegreeFiltersForNetwork:e,groupID:f,postID:g,shouldBootstrapOnLayoutEffect:a})}g["default"]=a}),98);