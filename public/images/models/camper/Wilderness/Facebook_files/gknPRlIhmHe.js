;/*FB_PKG_DELIM*/

__d("CometTopChartsCategoryLocationPagesGrid.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTopChartsCategoryLocationPagesGrid",selections:[{alias:null,args:null,concreteType:"CategoryLocationPage",kind:"LinkedField",name:"category_location_pages",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"page_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"topic_name",storageKey:null}],storageKey:null}],type:"GeoHub",abstractKey:null};e.exports=a}),null);
__d("CometTopChartsWrapGrid.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.useState;function a(a){var b=a.items,c=a.itemWidth,d=a.maxColumns;a=k(1);var e=a[0],f=a[1];j(function(){function a(){var a=window.innerWidth;a=Math.floor(a/c);a=Math.max(Math.min(d,a),1);f(a)}a();window.addEventListener("resize",a);return function(){window.removeEventListener("resize",a)}},[c,d]);if(b==null||!b.length)return null;a=b.map(function(a){return a==null?null:i.jsx("div",{className:"x1rg5ohu",style:{width:c+"px"},children:a.element},a.key)}).filter(function(a){return a!=null});if(!a.length)return null;b=[];var g=[],h=0;for(var l=0;l<a.length;l++)h++,!l||l%e>0?g.push(a[l]):(b.push(i.jsx("div",{className:"x78zum5 x1nhvcw1 xh8yej3",children:g},"row-"+h)),g=[a[l]]);g.length&&(h++,b.push(i.jsx("div",{className:"x78zum5 x1nhvcw1 xh8yej3",children:g},"row-"+h)));return i.jsx("div",{children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTopChartsCategoryLocationPagesGrid.react",["fbt","CometColumn.react","CometColumnItem.react","CometTopChartsCategoryLocationPagesGrid.graphql","CometTopChartsWrapGrid.react","FDSContextRowLink.react","RelayHooks","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react"),l=300,m=3;function a(a){a=a.categoryLocationPageGridFragment;a=d("RelayHooks").useFragment(i!==void 0?i:i=b("CometTopChartsCategoryLocationPagesGrid.graphql"),a);a=a==null?void 0:a.category_location_pages;if(!a||!a.length)return k.jsx("div",{className:"x78zum5 x1a02dak x1l1ennw",children:k.jsx(c("TetraText.react"),{type:"bodyLink2",children:h._("__JHASH__6_BwnkB5i7n__JHASH__")})});a=a.map(function(a){var b=a==null?void 0:a.page_url;a=a==null?void 0:a.topic_name;if(b==null||!b.length||a==null)return null;b={url:b};return{element:k.jsx(c("FDSContextRowLink.react"),{linkProps:b,children:k.jsx("span",{className:"x1fey0fg x1rg5ohu x1gslohp xw3qccf x12nagc xsgj6o6",children:a})}),key:a}}).filter(function(a){return a!=null});return!a.length?null:k.jsx(c("CometColumn.react"),{spacing:4,children:k.jsx(c("CometColumnItem.react"),{children:k.jsx(c("CometTopChartsWrapGrid.react"),{itemWidth:l,items:a,maxColumns:m})},"category_location_pages")})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometTopChartsCityPageCategoryLocationPages.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTopChartsCityPageCategoryLocationPages",selections:[{alias:null,args:null,concreteType:"GeoHub",kind:"LinkedField",name:"geo_hub",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTopChartsCategoryLocationPagesGrid"}],storageKey:null}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("CometTopChartsCityPageCategoryLocationPages.react",["CometTopChartsCategoryLocationPagesGrid.react","CometTopChartsCityPageCategoryLocationPages.graphql","RelayHooks","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){a=a.categoryLocationPagesFragment;a=d("RelayHooks").useFragment(h!==void 0?h:h=b("CometTopChartsCityPageCategoryLocationPages.graphql"),a);return j.jsx(c("CometTopChartsCategoryLocationPagesGrid.react"),{categoryLocationPageGridFragment:a==null?void 0:a.geo_hub})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTopChartsCityPageNearbyCities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTopChartsCityPageNearbyCities",selections:[{alias:null,args:null,concreteType:"TopChartsNearbyCity",kind:"LinkedField",name:"nearby_cities",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link_uri",storageKey:null}],storageKey:null}],type:"TopChartsResponse",abstractKey:null};e.exports=a}),null);
__d("CometTopChartsNamesGrid.react",["CometColumn.react","CometColumnItem.react","CometTopChartsWrapGrid.react","FDSContextRowLink.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.items,d=a.itemWidth,e=a.maxColumns;a=a.title;if(!b.length)return null;b=b.map(function(a){var b=a.link_uri;a=a.name;if(b==null||!b.length||a==null)return null;b={url:b};return{element:i.jsx(c("FDSContextRowLink.react"),{linkProps:b,children:i.jsx("span",{className:"x1fey0fg x1rg5ohu x1gslohp xw3qccf x12nagc xsgj6o6",children:a})}),key:a}}).filter(function(a){return a!=null});return!b.length?null:i.jsxs(c("CometColumn.react"),{spacing:4,children:[a!=null&&i.jsx(c("CometColumnItem.react"),{children:i.jsx("div",{className:"x1e56ztr x1i64zmx",children:i.jsx(c("TetraText.react"),{align:"start",color:"primary",isSemanticHeading:!0,numberOfLines:1,type:"headlineEmphasized2",children:a})})},"header"),i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("CometTopChartsWrapGrid.react"),{itemWidth:d,items:b,maxColumns:e})},"countries")]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTopChartsCityPageNearbyCities.react",["CometTopChartsCityPageNearbyCities.graphql","CometTopChartsNamesGrid.react","RelayHooks","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k=300;function a(a){a=a.nearbyCitiesFragment;a=d("RelayHooks").useFragment(h!==void 0?h:h=b("CometTopChartsCityPageNearbyCities.graphql"),a);return j.jsx(c("CometTopChartsNamesGrid.react"),{itemWidth:k,items:a.nearby_cities,maxColumns:3})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTopChartsCityPageEventCardActions.react",["ix","CometRow.react","CometRowItem.react","IconSource","TetraButton.react","TetraIcon.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=a.handleEventJoin;a=a.handleEventSave;return j.jsx("div",{className:"x78zum5 x1l1ennw x1xmf6yo x1y1aw1k x1sxyh0 xwib8y2 xurb0ha",children:j.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingVertical:0,children:[j.jsx(c("CometRowItem.react"),{children:j.jsx(k,{icon:h("1355031"),onPress:b,text:"Join"})}),j.jsx(c("CometRowItem.react"),{children:j.jsx(k,{icon:h("1515114"),onPress:a,text:"Save"})})]})})}a.displayName=a.name+" [from "+f.id+"]";function k(a){var b=a.icon,d=a.onPress;a=a.text;b=new(c("IconSource"))("FB",b,16);return j.jsx(c("TetraButton.react"),{addOnPrimary:j.jsx(c("TetraIcon.react"),{color:"highlight",icon:b,size:16}),label:a,onPress:d,size:"medium",type:"secondary"})}k.displayName=k.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTopChartsCityPageEventCardEventData.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"contextual_name",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTopChartsCityPageEventCardEventData",selections:[{args:null,kind:"FragmentSpread",name:"CometTopChartsCityPageEventCardSocialInfo_socialInfo"},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},a,b,{alias:null,args:null,kind:"ScalarField",name:"start_timestamp",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"event_place",plural:!1,selections:[b,a],storageKey:null},{alias:null,args:null,concreteType:"FocusedPhoto",kind:"LinkedField",name:"cover_photo",plural:!1,selections:[{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"size__height",value:192},{kind:"Literal",name:"size__width",value:268},{kind:"Literal",name:"sizing",value:"cover-fill-cropped"}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:'image(size__height:192,size__width:268,sizing:"cover-fill-cropped")'}],storageKey:null}],storageKey:null}],type:"Event",abstractKey:null}}();e.exports=a}),null);
__d("CometTopChartsCityPageEventCardSocialInfo_socialInfo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTopChartsCityPageEventCardSocialInfo_socialInfo",selections:[{alias:null,args:null,concreteType:"EventConnectedUsersConnection",kind:"LinkedField",name:"event_connected_users",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null}],type:"Event",abstractKey:null};e.exports=a}),null);
__d("CometTopChartsCityPageEventCardSocialInfo.react",["fbt","ix","CometTopChartsCityPageEventCardSocialInfo_socialInfo.graphql","IconSource","RelayHooks","TetraIcon.react","TetraText.react","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||d("react");function a(a){a=a.socialInfoFragment;a=d("RelayHooks").useFragment(j!==void 0?j:j=b("CometTopChartsCityPageEventCardSocialInfo_socialInfo.graphql"),a);a=a==null?void 0:(a=a.event_connected_users)==null?void 0:a.count;return l.jsx("div",{className:"",children:a!=null&&l.jsx(m,{count:a})})}a.displayName=a.name+" [from "+f.id+"]";function m(a){a=a.count;if(a===0)return null;var b=new(c("IconSource"))("FB",i("1568137"),24);return l.jsxs("div",{className:"x6s0dn4 x78zum5 x1nhvcw1",children:[l.jsx("div",{className:"xdj266r x1h5jrl4 xat24cr xmn8rco x2b8uid",children:l.jsx(c("TetraIcon.react"),{icon:b})}),l.jsx(c("TetraText.react"),{type:"body4",children:a===1?h._("__JHASH__x0a668WuSGH__JHASH__"):h._("__JHASH__CLfja9IPjOC__JHASH__",[h._param("guestCount",a)])})]})}m.displayName=m.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometTopChartsCityPageEventCard.react",["fbt","CometBackgroundImage.react","CometLink.react","CometTopChartsCityPageEventCardActions.react","CometTopChartsCityPageEventCardEventData.graphql","CometTopChartsCityPageEventCardSocialInfo.react","DateFormatConfig","RelayHooks","TetraText.react","UNTRANSLATED_STRING_FIXME","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react"),l=[h._("__JHASH__DsKYj1oLo19__JHASH__"),h._("__JHASH__TCuDpRnz2mT__JHASH__"),h._("__JHASH__khl_0IT7mYX__JHASH__"),h._("__JHASH__3Y3hi7sR1cI__JHASH__"),h._("__JHASH__IHrjywEAvHt__JHASH__"),h._("__JHASH__8kF4Ak1BW3a__JHASH__"),h._("__JHASH__KKfFBFLyAgh__JHASH__"),h._("__JHASH__XOJ0ufAxR5d__JHASH__"),h._("__JHASH__ZnuGT3uobCp__JHASH__"),h._("__JHASH__9OpDbaaGtTr__JHASH__"),h._("__JHASH__-J5NrwJB53G__JHASH__"),h._("__JHASH__HtgyaBTmaos__JHASH__")],m=54,n=15,o=1e3,p=function(a,b){return a.length<=b?a:a.substr(0,b)+"..."},q=function(a){a=a.toLocaleTimeString();a=a.split(" ");var b=a[0].split(":");b.pop();a[0]=b.join(":");return a.join(" ")};function a(a){var e,f,g,h=a.enableEventActions,j=a.eventFragment,r=a.handleEventJoin;a=a.handleEventSave;j=d("RelayHooks").useFragment(i!==void 0?i:i=b("CometTopChartsCityPageEventCardEventData.graphql"),j);e=(e=j.cover_photo)==null?void 0:(e=e.photo)==null?void 0:(e=e.image)==null?void 0:e.uri;var s=null;(j==null?void 0:j.start_timestamp)!=null&&(s=new Date((j==null?void 0:j.start_timestamp)*o));f=j==null?void 0:(f=j.event_place)==null?void 0:f.contextual_name;g=j==null?void 0:(g=j.event_place)==null?void 0:g.url;return k.jsxs("div",{className:"x1jx94hy xwib8y2 xthkip5",children:[k.jsx("div",{className:"x1j8gryn",children:e!=null&&k.jsx(c("CometLink.react"),{"aria-label":c("UNTRANSLATED_STRING_FIXME")("Go to event page"),href:j==null?void 0:j.url,children:k.jsx(c("CometBackgroundImage.react"),{src:e},e)})}),s!=null&&k.jsxs("div",{className:"x78zum5 x1qughib x1y1aw1k x4uap5 xwib8y2 xkhd6sd",children:[k.jsxs("div",{className:"x1dnml7z x2b8uid x1hetxy2",children:[k.jsx("div",{className:"xexcdja x6prxxf x12nagc xtvhhri",children:l[s.getMonth()]}),k.jsx("div",{className:"xvarp8k",children:k.jsx(c("TetraText.react"),{type:"headlineEmphasized1",children:s.getDate()})})]}),k.jsxs("div",{className:"x1iorvi4 x4uap5 xjkvuk6 xkhd6sd x19ujwxq",children:[k.jsx(c("CometLink.react"),{href:j==null?void 0:j.url,children:k.jsx("div",{className:"x1s1d1n7 x1yc453h",children:k.jsx(c("TetraText.react"),{type:"body4",children:(j==null?void 0:j.name)!=null?p(j.name,m):""})})}),k.jsx("div",{className:"x78zum5 xhvdbge x6ikm8r x10wlt62 x1yc453h xlyipyv xuxw1ft",children:k.jsxs(c("TetraText.react"),{type:"body4",children:[c("DateFormatConfig").shortDayNames[s.getDay()]+" "+q(s)+(f!=null?" \xb7 ":""),f!=null&&k.jsx(c("CometLink.react"),{href:g,children:p(f,n)})]})})]})]}),k.jsx(c("CometTopChartsCityPageEventCardSocialInfo.react"),{socialInfoFragment:j}),h&&k.jsx(c("CometTopChartsCityPageEventCardActions.react"),{handleEventJoin:r,handleEventSave:a})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometTopChartsCityPageSectionTabs.react",["CometTabs.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useState,k={tab:{paddingBottom:"xx6bls6",paddingEnd:"x1pi30zi",paddingLeft:null,paddingRight:null,paddingStart:"x1swvt13",paddingTop:"x1cnzs8",$$css:!0}};function a(a){var b=a.tabsContent;a=a.tabsData;var d=j(0),e=d[0],f=d[1];d=a.map(function(a,b){a.emptyText;a=babelHelpers.objectWithoutPropertiesLoose(a,["emptyText"]);return babelHelpers["extends"]({},a,{iconLocation:"left",onPress:function(){return f(b)},reduceEmphasis:!0,selected:b===e,xstyle:k.tab})});return i.jsxs("div",{className:"xdj266r xkrivgy x4ii5y1 x1gryazu x1dtb55y xh8yej3",children:[i.jsx(c("CometTabs.react"),{moreTabXStyle:k.tab,tabs:d}),i.jsx("div",{className:"x78zum5 x1a02dak x1l1ennw",children:b[e].length===0?i.jsx("div",{className:"x13zrc24 x4uap5 x1t1ogtf xkhd6sd",children:i.jsx(c("TetraText.react"),{type:"bodyLink2",children:a[e].emptyText})}):b[e]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTopChartsCityPageUpcomingEventsSectionEventsData.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Literal",name:"cut_types",value:["ALL"]},b={kind:"Literal",name:"first",value:1},c=[{alias:null,args:null,concreteType:"SuggestionCutsOfGeoHubEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"EventSuggestionCut",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"first",value:3}],concreteType:"SuggestedEventsConnection",kind:"LinkedField",name:"events",plural:!1,selections:[{alias:null,args:null,concreteType:"SuggestedEventsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTopChartsCityPageEventCardEventData"}],storageKey:null}],storageKey:null}],storageKey:"events(first:3)"}],storageKey:null}],storageKey:null}],d={kind:"Variable",name:"starts_after",variableName:"timestamp_next_day"};return{argumentDefinitions:[{kind:"RootArgument",name:"timestamp_day_after_next_day"},{kind:"RootArgument",name:"timestamp_next_day"},{kind:"RootArgument",name:"timestamp_next_month"},{kind:"RootArgument",name:"timestamp_next_week"}],kind:"Fragment",metadata:null,name:"CometTopChartsCityPageUpcomingEventsSectionEventsData",selections:[{alias:null,args:null,concreteType:"GeoHub",kind:"LinkedField",name:"geo_hub",plural:!1,selections:[{alias:"recommended_events",args:[a,b],concreteType:"SuggestionCutsOfGeoHubConnection",kind:"LinkedField",name:"suggested_city_event_cuts",plural:!1,selections:c,storageKey:'suggested_city_event_cuts(cut_types:["ALL"],first:1)'},{alias:"events_today",args:[a,b,d,{kind:"Variable",name:"starts_before",variableName:"timestamp_day_after_next_day"}],concreteType:"SuggestionCutsOfGeoHubConnection",kind:"LinkedField",name:"suggested_city_event_cuts",plural:!1,selections:c,storageKey:null},{alias:"events_this_week",args:[a,b,d,{kind:"Variable",name:"starts_before",variableName:"timestamp_next_week"}],concreteType:"SuggestionCutsOfGeoHubConnection",kind:"LinkedField",name:"suggested_city_event_cuts",plural:!1,selections:c,storageKey:null},{alias:"events_this_month",args:[a,b,{kind:"Variable",name:"starts_after",variableName:"timestamp_next_week"},{kind:"Variable",name:"starts_before",variableName:"timestamp_next_month"}],concreteType:"SuggestionCutsOfGeoHubConnection",kind:"LinkedField",name:"suggested_city_event_cuts",plural:!1,selections:c,storageKey:null}],storageKey:null}],type:"Page",abstractKey:null}}();e.exports=a}),null);
__d("CometTopChartsCityPageUpcomingEventsSection.react",["fbt","CometTopChartsCityPageEventCard.react","CometTopChartsCityPageSectionTabs.react","CometTopChartsCityPageUpcomingEventsSectionEventsData.graphql","RelayHooks","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react"),l=[{emptyText:h._("__JHASH__4zcHIbpKehc__JHASH__"),label:h._("__JHASH__XO6vqVJQWQX__JHASH__")},{emptyText:h._("__JHASH__hJj_toK353S__JHASH__"),label:h._("__JHASH__q4THatbmSJM__JHASH__")},{emptyText:h._("__JHASH__SQCxa53wtYM__JHASH__"),label:h._("__JHASH__vhzEtN0qtMk__JHASH__")},{emptyText:h._("__JHASH__wnIoMZAdv9l__JHASH__"),label:h._("__JHASH__bNwms1Z1JUk__JHASH__")}];function a(a){var e=a.enableEventActions,f=a.eventsDataFragment,g=a.handleEventJoin,h=a.handleEventSave;a=d("RelayHooks").useFragment(i!==void 0?i:i=b("CometTopChartsCityPageUpcomingEventsSectionEventsData.graphql"),f);a=[(f=a.geo_hub)==null?void 0:f.recommended_events,(f=a.geo_hub)==null?void 0:f.events_today,(f=a.geo_hub)==null?void 0:f.events_this_week,(f=a.geo_hub)==null?void 0:f.events_this_month];f=a.map(function(a){a=a==null?void 0:(a=a.edges[0])==null?void 0:(a=a.node)==null?void 0:(a=a.events)==null?void 0:a.edges;return a==null?[]:a.map(function(a,b){return(a==null?void 0:a.node)==null?null:k.jsx(c("CometTopChartsCityPageEventCard.react"),{enableEventActions:e,eventFragment:a.node,handleEventJoin:g,handleEventSave:h},b)})});return k.jsx(c("CometTopChartsCityPageSectionTabs.react"),{tabsContent:f,tabsData:l})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometTopChartsCityPageWhereToGoSectionHighlights.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{args:null,kind:"FragmentSpread",name:"CometTopChartsCityPageWhereToGoSectionPlaceFields"}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTopChartsCityPageWhereToGoSectionHighlights",selections:[{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"restaurants",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"bars",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"sightseeing",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"hotels",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"shopping",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"nightlife",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"cafe",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"museum",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"outdoor",plural:!0,selections:a,storageKey:null}],type:"TopChartsCityWithAllHighlights",abstractKey:null}}();e.exports=a}),null);
__d("CometTopChartsCityPageWhereToGoSectionPlaceFields.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTopChartsCityPageWhereToGoSectionPlaceFields",selections:[{alias:null,args:null,kind:"ScalarField",name:"place_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"place_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"place_photo_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"place_cover_photo_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"page_categories",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"review_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"rating",storageKey:null}],type:"TopChartsCityHighlight",abstractKey:null};e.exports=a}),null);
__d("CometTopChartsCityPageWhereToGoSection.react",["fbt","CometBackgroundImage.react","CometColumnItem.react","CometLink.react","CometTopChartsCityPageSectionTabs.react","CometTopChartsCityPageWhereToGoSectionHighlights.graphql","CometTopChartsCityPageWhereToGoSectionPlaceFields.graphql","FDSStarRating.react","RelayHooks","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l=k||d("react"),m=[{emptyText:h._("__JHASH__Lp0LdCgE5Bg__JHASH__"),label:h._("__JHASH__pCn03MAe-kK__JHASH__")},{emptyText:h._("__JHASH__54cirrkEHzB__JHASH__"),label:h._("__JHASH__la3aYDucOax__JHASH__")},{emptyText:h._("__JHASH__QYnVUGNGjB8__JHASH__"),label:h._("__JHASH__bvM8UfGHQfq__JHASH__")},{emptyText:h._("__JHASH__mFESgOq-z3a__JHASH__"),label:h._("__JHASH__8lqydyNm4s-__JHASH__")},{emptyText:h._("__JHASH__3sz4GB9OLF4__JHASH__"),label:h._("__JHASH__Ifalmo34zJz__JHASH__")},{emptyText:h._("__JHASH__3NjF0zU2bcd__JHASH__"),label:h._("__JHASH__Cs4APqhsjJ8__JHASH__")},{emptyText:h._("__JHASH__x3vtN6oC4G2__JHASH__"),label:h._("__JHASH__gjp0ORSXKiy__JHASH__")},{emptyText:h._("__JHASH__axk8uHZJhfJ__JHASH__"),label:h._("__JHASH__yp0ek16LuJn__JHASH__")},{emptyText:h._("__JHASH__oWNj78OWFyO__JHASH__"),label:h._("__JHASH__Zz21W83oG_h__JHASH__")}],n={ratingLink:{alignItems:"x6s0dn4",display:"x78zum5",flexWrap:"xozqiw3",justifyContent:"x1nhvcw1",$$css:!0}};function a(a){a=a.cityDataFragment;a=d("RelayHooks").useFragment(i!==void 0?i:i=b("CometTopChartsCityPageWhereToGoSectionHighlights.graphql"),a);if(!a)return null;a=[a.restaurants,a.bars,a.sightseeing,a.hotels,a.shopping,a.nightlife,a.cafe,a.museum,a.outdoor];a=a.map(function(a){return a.map(function(a,b){return l.jsx(o,{placeFragment:a},b)})});return l.jsx(c("CometTopChartsCityPageSectionTabs.react"),{tabsContent:a,tabsData:m})}a.displayName=a.name+" [from "+f.id+"]";function o(a){a=a.placeFragment;a=d("RelayHooks").useFragment(j!==void 0?j:j=b("CometTopChartsCityPageWhereToGoSectionPlaceFields.graphql"),a);var e=a.place_cover_photo_uri!=null?a.place_cover_photo_uri:a.place_photo_uri;return l.jsx("div",{className:"x1u5z0ei xyorhqc x1n2onr6 xpfhh1",children:l.jsxs(c("CometLink.react"),{href:a==null?void 0:a.place_uri,children:[e!=null&&l.jsx(c("CometBackgroundImage.react"),{src:e},e),l.jsxs("div",{className:"x1fvigtp x1ey2m1c xds687c x889kno x1iji9kk x1a8lsjc x1sln4lm x10l6tqk x17qophe",children:[l.jsx(c("CometColumnItem.react"),{paddingVertical:4,children:l.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"bodyLink2",children:a.place_name})}),l.jsxs("div",{className:"x6s0dn4 x78zum5 x889kno",children:[a.page_categories.length&&l.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"body4",children:a.page_categories[0]}),l.jsx("div",{className:"xdj266r x1t4t16n xat24cr x8j4wrb",children:l.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"body4",children:"\xb7"})}),(a==null?void 0:a.rating)!=null&&l.jsxs(c("CometLink.react"),{href:a==null?void 0:a.review_uri,xstyle:n.ratingLink,children:[l.jsx(c("TetraText.react"),{align:"center",color:"primaryOnMedia",type:"body4",children:Number(a==null?void 0:a.rating).toFixed(1)}),l.jsx(c("FDSStarRating.react"),{filledColor:"accent",rating:Number(a==null?void 0:a.rating),size:12})]})]})]})]})})}o.displayName=o.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometTopChartsCityQuery.graphql",["CometTopChartsCityQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"args"},c={defaultValue:null,kind:"LocalArgument",name:"pageId"},d={defaultValue:null,kind:"LocalArgument",name:"timestamp_day_after_next_day"},e={defaultValue:null,kind:"LocalArgument",name:"timestamp_next_day"},f={defaultValue:null,kind:"LocalArgument",name:"timestamp_next_month"},g={defaultValue:null,kind:"LocalArgument",name:"timestamp_next_week"},h=[{kind:"Variable",name:"args",variableName:"args"}],i={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"photo_uri",storageKey:null},k=[{kind:"Variable",name:"id",variableName:"pageId"}],l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},m=[{alias:null,args:null,kind:"ScalarField",name:"place_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"place_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"place_photo_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"place_cover_photo_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"page_categories",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"review_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"rating",storageKey:null}],n={kind:"Literal",name:"cut_types",value:["ALL"]},o={kind:"Literal",name:"first",value:1},p={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"contextual_name",storageKey:null};q=[{alias:null,args:null,concreteType:"SuggestionCutsOfGeoHubEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"EventSuggestionCut",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"first",value:3}],concreteType:"SuggestedEventsConnection",kind:"LinkedField",name:"events",plural:!1,selections:[{alias:null,args:null,concreteType:"SuggestedEventsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"EventConnectedUsersConnection",kind:"LinkedField",name:"event_connected_users",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},i,p,q,{alias:null,args:null,kind:"ScalarField",name:"start_timestamp",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"event_place",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},q,p,{kind:"InlineFragment",selections:[l],type:"Node",abstractKey:"__isNode"}],storageKey:null},{alias:null,args:null,concreteType:"FocusedPhoto",kind:"LinkedField",name:"cover_photo",plural:!1,selections:[{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"size__height",value:192},{kind:"Literal",name:"size__width",value:268},{kind:"Literal",name:"sizing",value:"cover-fill-cropped"}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:'image(size__height:192,size__width:268,sizing:"cover-fill-cropped")'},l],storageKey:null}],storageKey:null},l],storageKey:null}],storageKey:null}],storageKey:"events(first:3)"}],storageKey:null}],storageKey:null}];p={kind:"Variable",name:"starts_after",variableName:"timestamp_next_day"};return{fragment:{argumentDefinitions:[a,c,d,e,f,g],kind:"Fragment",metadata:null,name:"CometTopChartsCityQuery",selections:[{alias:null,args:h,concreteType:"TopChartsResponse",kind:"LinkedField",name:"places_top_charts",plural:!1,selections:[{alias:null,args:null,concreteType:"TopChartsCityWithAllHighlights",kind:"LinkedField",name:"city_data",plural:!1,selections:[i,j,{args:null,kind:"FragmentSpread",name:"CometTopChartsCityPageWhereToGoSectionHighlights"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometTopChartsCityPageNearbyCities"}],storageKey:null},{alias:null,args:k,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[l,i,{args:null,kind:"FragmentSpread",name:"CometTopChartsCityPageUpcomingEventsSectionEventsData"},{args:null,kind:"FragmentSpread",name:"CometTopChartsCityPageCategoryLocationPages"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,c,d,e,g,f],kind:"Operation",name:"CometTopChartsCityQuery",selections:[{alias:null,args:h,concreteType:"TopChartsResponse",kind:"LinkedField",name:"places_top_charts",plural:!1,selections:[{alias:null,args:null,concreteType:"TopChartsCityWithAllHighlights",kind:"LinkedField",name:"city_data",plural:!1,selections:[i,j,{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"restaurants",plural:!0,selections:m,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"bars",plural:!0,selections:m,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"sightseeing",plural:!0,selections:m,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"hotels",plural:!0,selections:m,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"shopping",plural:!0,selections:m,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"nightlife",plural:!0,selections:m,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"cafe",plural:!0,selections:m,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"museum",plural:!0,selections:m,storageKey:null},{alias:null,args:null,concreteType:"TopChartsCityHighlight",kind:"LinkedField",name:"outdoor",plural:!0,selections:m,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TopChartsNearbyCity",kind:"LinkedField",name:"nearby_cities",plural:!0,selections:[i,{alias:null,args:null,kind:"ScalarField",name:"link_uri",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:k,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[l,i,{alias:null,args:null,concreteType:"GeoHub",kind:"LinkedField",name:"geo_hub",plural:!1,selections:[{alias:"recommended_events",args:[n,o],concreteType:"SuggestionCutsOfGeoHubConnection",kind:"LinkedField",name:"suggested_city_event_cuts",plural:!1,selections:q,storageKey:'suggested_city_event_cuts(cut_types:["ALL"],first:1)'},{alias:"events_today",args:[n,o,p,{kind:"Variable",name:"starts_before",variableName:"timestamp_day_after_next_day"}],concreteType:"SuggestionCutsOfGeoHubConnection",kind:"LinkedField",name:"suggested_city_event_cuts",plural:!1,selections:q,storageKey:null},{alias:"events_this_week",args:[n,o,p,{kind:"Variable",name:"starts_before",variableName:"timestamp_next_week"}],concreteType:"SuggestionCutsOfGeoHubConnection",kind:"LinkedField",name:"suggested_city_event_cuts",plural:!1,selections:q,storageKey:null},{alias:"events_this_month",args:[n,o,{kind:"Variable",name:"starts_after",variableName:"timestamp_next_week"},{kind:"Variable",name:"starts_before",variableName:"timestamp_next_month"}],concreteType:"SuggestionCutsOfGeoHubConnection",kind:"LinkedField",name:"suggested_city_event_cuts",plural:!1,selections:q,storageKey:null},l,{alias:null,args:null,concreteType:"CategoryLocationPage",kind:"LinkedField",name:"category_location_pages",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"page_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"topic_name",storageKey:null},l],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("CometTopChartsCityQuery_facebookRelayOperation"),metadata:{},name:"CometTopChartsCityQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometTopChartsHeaderCoverPhoto.react",["CometEntityHeaderCoverMedia.react","CometEntityHeaderCoverMediaFooter.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={background:{backgroundColor:"xjb1437",$$css:!0}};function a(a){var b=a.footer,d=a.height,e=a.uri;a=a.width;if(e==null||d==null||a==null)return null;var f=null;typeof b==="string"&&(f=i.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headlineEmphasized2",children:b}));f=i.jsx(c("CometEntityHeaderCoverMediaFooter.react"),{footer:f||b,footerAlign:"start",xstyle:j.background});return i.jsx(c("CometEntityHeaderCoverMedia.react"),{coverFooter:f,coverMedia:{focusX:.5,focusY:.5,height:d,mediaSource:e,width:a}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTopChartsCity.react",["fbt","ix","CAAWebClientLoggingEventSource","CometLink.react","CometLoggedOutCTAStrings","CometRelay","CometRow.react","CometRowItem.react","CometTopChartsCityPageCategoryLocationPages.react","CometTopChartsCityPageNearbyCities.react","CometTopChartsCityPageUpcomingEventsSection.react","CometTopChartsCityPageWhereToGoSection.react","CometTopChartsCityQuery.graphql","CometTopChartsHeaderCoverPhoto.react","IconSource","TetraButton.react","TetraIcon.react","TetraText.react","XCometEventsExploreControllerRouteBuilder","react","useCAALoggedOutDialogWrapper","useEventActionLoggerParams","useIsLoggedOut"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||(k=d("react"));e=k;var m=e.useEffect,n=e.useMemo,o=e.useState,p=1;function a(a){var e,f,g;a=a.queries.queryRef;var i=o(!1),k=i[0],r=i[1],s=c("useIsLoggedOut")();i=c("useEventActionLoggerParams")({surface:"city_guides"});i[0];var t=i[1];i=n(function(){return JSON.stringify(t)},[t]);a=d("CometRelay").usePreloadedQuery(j!==void 0?j:j=b("CometTopChartsCityQuery.graphql"),a);e=a==null?void 0:(e=a.places_top_charts)==null?void 0:(e=e.city_data)==null?void 0:e.name;e=e!=null?h._("__JHASH__kJixa8Tp2Xz__JHASH__",[h._param("name-of-profile"," "+e)]):c("CometLoggedOutCTAStrings").popupTitle;var u=c("useCAALoggedOutDialogWrapper")({dialogSource:d("CAAWebClientLoggingEventSource").CAAWebClientLoggingDialogSource.PLACES,leftChild:null,onClose:function(){r(!1)},title:e});m(function(){s&&k&&u()},[u,s,k]);e=a==null?void 0:a.places_top_charts;if(!e)return null;f=e==null?void 0:(f=e.city_data)==null?void 0:f.photo_uri;var v=function(){s&&r(!0)},w=function(){s&&r(!0)},x=function(){s&&r(!0)},y=function(){s&&r(!0)};return l.jsxs("div",{className:"xdj266r xkrivgy x4ii5y1 x1gryazu x1dtb55y xh8yej3",children:[l.jsx("div",{className:"x1n2onr6",children:l.jsx(c("CometTopChartsHeaderCoverPhoto.react"),{footer:l.jsx(q,{cityName:e==null?void 0:(g=e.city_data)==null?void 0:g.name,enablePageActions:s,onLikeClick:w,onSaveClick:v}),height:p,uri:f,width:p*2})}),l.jsxs("div",{className:"x11fxgd9 x11i5rnm x4n8cb0 x1mh8g0r",children:[l.jsx("div",{className:"x6s0dn4 x78zum5 x1qughib x1anpbxc x11i5rnm xyorhqc x1mh8g0r",children:l.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized2",children:h._("__JHASH__c6a1CCom3zf__JHASH__")})}),(e==null?void 0:e.city_data)!=null&&l.jsx(c("CometTopChartsCityPageWhereToGoSection.react"),{cityDataFragment:e==null?void 0:e.city_data})]}),l.jsxs("div",{className:"x11fxgd9 x11i5rnm x4n8cb0 x1mh8g0r",children:[l.jsxs("div",{className:"x6s0dn4 x78zum5 x1qughib x1anpbxc x11i5rnm xyorhqc x1mh8g0r",children:[l.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized2",children:h._("__JHASH__7A_C_lCYQa2__JHASH__")}),(a==null?void 0:(g=a.page)==null?void 0:g.id)!=null&&(a==null?void 0:(w=a.page)==null?void 0:w.name)!=null&&l.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"meta2",children:l.jsx(c("CometLink.react"),{href:c("XCometEventsExploreControllerRouteBuilder").buildURL({acontext:i,location_id:a.page.id,location_name:(v=a.page.name)==null?void 0:v.toLowerCase().replace(/[^a-z]+/g,"-")}),children:h._("__JHASH__PYVwk-BbCft__JHASH__")})})]}),(a==null?void 0:a.page)!=null&&l.jsx(c("CometTopChartsCityPageUpcomingEventsSection.react"),{enableEventActions:s,eventsDataFragment:a==null?void 0:a.page,handleEventJoin:y,handleEventSave:x})]}),l.jsx("div",{className:"x6s0dn4 x78zum5 x1qughib x1anpbxc x11i5rnm xyorhqc x1mh8g0r",children:(a==null?void 0:a.page)!=null&&l.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized2",children:h._("__JHASH__2x9YgcYjRhD__JHASH__")})}),l.jsx("div",{className:"x11fxgd9 x11i5rnm x4n8cb0 x1mh8g0r",children:(a==null?void 0:a.page)!=null&&l.jsx(c("CometTopChartsCityPageCategoryLocationPages.react"),{categoryLocationPagesFragment:a==null?void 0:a.page})}),l.jsx("div",{className:"x6s0dn4 x78zum5 x1qughib x1anpbxc x11i5rnm xyorhqc x1mh8g0r",children:l.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized2",children:h._("__JHASH__z0empVrf2A5__JHASH__")})}),l.jsx("div",{className:"x11fxgd9 x11i5rnm x4n8cb0 x1mh8g0r",children:l.jsx(c("CometTopChartsCityPageNearbyCities.react"),{nearbyCitiesFragment:e})})]})}a.displayName=a.name+" [from "+f.id+"]";function q(a){var b=a.cityName,d=a.enablePageActions,e=a.onLikeClick;a=a.onSaveClick;var f=new(c("IconSource"))("FB",i("1515114"),16),g=new(c("IconSource"))("FB",i("1493829"),16);return l.jsxs("div",{className:"x6s0dn4 x78zum5 xlrawln x1qughib",children:[l.jsx(c("TetraText.react"),{color:"primaryOnMedia",isSemanticHeading:!0,type:"headlineEmphasized2",children:b}),d&&l.jsx("div",{className:"x6s0dn4 x78zum5 x1qughib xq1dxzn",children:l.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingVertical:0,children:[l.jsx(c("CometRowItem.react"),{children:l.jsx(c("TetraButton.react"),{addOnPrimary:l.jsx(c("TetraIcon.react"),{color:"highlight",icon:g,size:16}),label:h._("__JHASH__SNdLSsFrQ-3__JHASH__"),onPress:e,size:"medium",type:"secondary"})}),l.jsx(c("CometRowItem.react"),{children:l.jsx(c("TetraButton.react"),{addOnPrimary:l.jsx(c("TetraIcon.react"),{color:"highlight",icon:f,size:16}),label:h._("__JHASH__JeVNppnQRfn__JHASH__"),onPress:a,type:"secondary"})})]})})]})}q.displayName=q.name+" [from "+f.id+"]";g["default"]=a}),226);