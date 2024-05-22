;/*FB_PKG_DELIM*/

__d("BootloadedReact",["Bootloader","react"],(function(a,b,c,d,e,f,g){var h,i=h||(h=d("react")),j=h.useLayoutEffect,k=function(a){c("Bootloader").loadModules(["ReactDOM"],a,"BootloadedReact")};function a(a,b,c){k(function(d){if(c!=null)return d.render(i.jsx(l,{onRender:c,children:a}),b,"BootloadedReact.js");else d.render(a,b,"BootloadedReact.js")})}function b(a){k(function(b){b.unmountComponentAtNode(a,f.id)})}function l(a){var b=a.onRender;j(function(){b()},[b]);return a.children}g.render=a;g.unmountComponentAtNode=b}),98);
__d("getOrCreateDOMID",["uniqueID"],(function(a,b,c,d,e,f,g){function a(a){a.id||(a.id=c("uniqueID")());return a.id}g["default"]=a}),98);
__d("ContextualThing",["CSS","containsNode","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f,g){function a(a,b){a.setAttribute("data-ownerid",c("getOrCreateDOMID")(b))}function b(a,b){b=b;while(b){if(c("containsNode")(a,b))return!0;b=h(b)}return!1}function h(a){a=a;var b;while(a){if(a.getAttribute&&(b=a.getAttribute("data-ownerid")))return c("ge")(b);a=a.parentNode}return null}function e(a,b){a=a;var e;while(a&&!d("CSS").hasClass(a,b))a.getAttribute&&(e=a.getAttribute("data-ownerid"))?a=c("ge")(e):a=a.parentNode;return a}g.register=a;g.containsIncludingLayers=b;g.getContext=h;g.parentByClass=e}),98);
__d("DOMDimensions",["Style","getDocumentScrollElement"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a?a.offsetHeight:0;a=a?a.offsetWidth:0;return{height:b,width:a}}function b(a){a=c("getDocumentScrollElement")(a);var b=a.scrollWidth||0;a=a.scrollHeight||0;return{width:b,height:a}}function d(a,b,d,e,f){var g;switch(b){case"left":case"right":case"top":case"bottom":g=[b];break;case"width":g=["left","right"];break;case"height":g=["top","bottom"];break;default:throw Error("Invalid plane: "+b)}b=function(b,d){var e=0;for(var f=0;f<g.length;f++)e+=parseFloat(c("Style").get(a,b+"-"+g[f]+d))||0;return e};return(d?b("padding",""):0)+(e?b("border","-width"):0)+(f?b("margin",""):0)}g.getElementDimensions=a;g.getDocumentDimensions=b;g.measureElementBox=d}),98);
__d("getElementText",["isElementNode","isTextNode"],(function(a,b,c,d,e,f,g){var h=null;function a(a){if(c("isTextNode")(a))return a.data;else if(c("isElementNode")(a)){if(h===null){var b=document.createElement("div");h=b.textContent!=null?"textContent":"innerText"}return a[h]}else return""}g["default"]=a}),98);
__d("isContentEditable",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a;while(a instanceof HTMLElement){if(a.contentEditable==="true"||a.contentEditable==="plaintext-only")return!0;a=a.parentElement}return!1}f["default"]=a}),66);
__d("isElementInteractive",["isContentEditable"],(function(a,b,c,d,e,f,g){"use strict";var h=new Set(["EMBED","INPUT","OBJECT","SELECT","TEXTAREA"]),i=new Set(["button","checkbox","radio","submit"]);function a(a){if(!a instanceof HTMLElement)return!1;var b=c("isContentEditable")(a),d=h.has(a.nodeName);a=a instanceof HTMLInputElement&&i.has(a.type);return(b||d)&&!a}g["default"]=a}),98);
__d("KeyEventController",["Bootloader","DOMQuery","Event","Run","emptyFunction","getElementText","isContentEditable","isElementInteractive","isEmpty"],(function(a,b,c,d,e,f,g){var h,i=null,j={BACKSPACE:[8],TAB:[9],RETURN:[13],ALT:[18],ESCAPE:[27],LEFT:[37,63234],UP:[38,63232],RIGHT:[39,63235],DOWN:[40,63233],NUMPAD_ADD:[43],NUMPAD_SUBSTRACT:[45],DELETE:[46],COMMA:[188],PERIOD:[190],SLASH:[191],"`":[192],"[":[219],"]":[221],PAGE_UP:[33],PAGE_DOWN:[34],END:[35],HOME:[36],SPACE:[32],KP_DOT:[46,110],"-":[189],"=":[187],FORWARD_SLASH:[191]},k=(a={},a[8]=1,a[9]=1,a[13]=1,a[27]=1,a[32]=1,a[37]=1,a[63234]=1,a[38]=1,a[63232]=1,a[39]=1,a[63235]=1,a[40]=1,a[63233]=1,a[46]=1,a);b=function(){function a(){var a=this;this.handlers={};["keyup","keydown","keypress"].forEach(function(b){return document.addEventListener(b,a.onkeyevent.bind(a,"on"+b))})}var b=a.prototype;b.mapKey=function(a){a=a;if(/^[0-9]$/.test(a+"")){typeof a!=="number"&&(a=a.charCodeAt(0)-48);return[48+a,96+a]}a+="";var b=j[a.toUpperCase()];return b?b:[a.toUpperCase().charCodeAt(0)]};b.onkeyevent=function(a,b){var d=b;d=c("Event").$E(d);b=this.handlers[d.keyCode]||this.handlers[d.which];if(b)for(var e=0;e<b.length;e++){var f=b[e].callback,g=b[e].filter;try{if(!g||g(d,a)){g=function(){var b=f(d,a),e=d.which||d.keyCode;c("Bootloader").loadModules(["KeyEventTypedLogger"],function(a){new a().setAction("key_shortcut").setKey(d.key||"").setKeyChar(String.fromCharCode(e)).setKeyCode(e).addToExtraData("is_trusted",d.isTrusted).log()},"KeyEventController");if(b===!1)return{v:c("Event").kill(d)}}();if(typeof g==="object")return g.v}}catch(a){}}return!0};b.resetHandlers=function(){for(var a in this.handlers)if(Object.prototype.hasOwnProperty.call(this.handlers,a)){var b=this.handlers[a].filter(function(a){return a.preserve()});b.length?this.handlers[a]=b:delete this.handlers[a]}};a.getInstance=function(){return i||(i=new a())};a.defaultFilter=function(b,d){b=c("Event").$E(b);return a.filterEventTypes(b,d)&&a.filterEventTargets(b,d)&&a.filterEventModifiers(b,d)};a.filterEventTypes=function(a,b){return b==="onkeydown"?!0:!1};a.filterEventTargets=function(a,b){b=a.getTarget();return!c("isElementInteractive")(b)||a.keyCode in k&&(d("DOMQuery").isNodeOfType(b,["input","textarea"])&&b.value.length===0||c("isContentEditable")(b)&&c("getElementText")(b).length===0)};a.filterEventModifiers=function(a,b){return a.ctrlKey||a.altKey||a.metaKey||a.repeat?!1:!0};a.registerKeyAcrossTransitions=function(b,d,e,f){e===void 0&&(e=a.defaultFilter);f===void 0&&(f=!1);return a.registerKey(b,d,e,f,c("emptyFunction").thatReturnsTrue)};a.registerKey=function(b,e,f,g,i){f===void 0&&(f=a.defaultFilter);g===void 0&&(g=!1);i===void 0&&(i=c("emptyFunction").thatReturnsFalse);b=b;var j=a.getInstance(),k=b==null?[]:j.mapKey(b);(h||(h=c("isEmpty")))(j.handlers)&&d("Run").onLeave(j.resetHandlers.bind(j));var l={};for(var m=0;m<k.length;m++){b=""+k[m];(!j.handlers[b]||g)&&(j.handlers[b]=[]);var n={callback:e,filter:f,preserve:i};l[b]=n;j.handlers[b].push(n)}return{remove:function(){for(var a in l){if(j.handlers[a]&&j.handlers[a].length){var b=j.handlers[a].indexOf(l[a]);b>=0&&j.handlers[a].splice(b,1)}delete l[a]}}}};a.registerKeyForButtonCallback=function(b,c){return a.registerKey(b,function(){c.click();return!1})};return a}();g["default"]=b}),98);
__d("KeyStatus",["Event","ExecutionEnvironment"],(function(a,b,c,d,e,f,g){var h,i=null,j=null;function k(){j||(j=c("Event").listen(window,"blur",function(){i=null,l()}))}function l(){j&&(j.remove(),j=null)}function a(a){i=c("Event").getKeyCode(a),k()}function b(){i=null,l()}if((h||c("ExecutionEnvironment")).canUseDOM){f=document.documentElement;if(f)if(f.addEventListener)f.addEventListener("keydown",a,!0),f.addEventListener("keyup",b,!0);else if(f.attachEvent){f=f.attachEvent;f("onkeydown",a);f("onkeyup",b)}}function d(){return!!i}function e(){return i}g.isKeyDown=d;g.getKeyDownCode=e}),98);
__d("isValidReactElement",[],(function(a,b,c,d,e,f){var g=typeof Symbol==="function"&&Symbol["for"]&&Symbol["for"]("react.element")||60103;function a(a){return!!(typeof a==="object"&&a!==null&&a.$$typeof===g)}f["default"]=a}),66);
__d("Layer",["invariant","ArbiterMixin","BehaviorsMixin","BootloadedReact","CSS","ContextualThing","DOM","DataStore","Event","FBLogger","HTML","KeyEventController","KeyStatus","Parent","Style","ge","isNode","isValidReactElement","mixin","removeFromArray","setImmediate"],(function(a,b,c,d,e,f,g,h){b("KeyStatus");var i=[],j=function(b){babelHelpers.inheritsLoose(a,b);function a(a,d){var e;e=b.call(this)||this;e._config=a||{};if(d){e._configure(e._config,d);a=e._config.addedBehaviors||[];e.enableBehaviors(e._getDefaultBehaviors().concat(a))}else c("FBLogger")("layer").warn("The markup param wasn't provided to the Layer constructor");return e}var e=a.prototype;e.init=function(a){this._configure(this._config,a);a=this._config.addedBehaviors||[];this.enableBehaviors(this._getDefaultBehaviors().concat(a));this._initialized=!0;return this};e._configure=function(a,b){var e=this;if(b){var f=c("isNode")(b),g=typeof b==="string"||c("HTML").isHTML(b);this.containsReactComponent=c("isValidReactElement")(b);!f&&!g&&!this.containsReactComponent&&c("FBLogger")("layer").warn("Layer must be init with HTML, DOM node or React instance");if(g)b=c("HTML")(b).getRootNode();else if(this.containsReactComponent){f=document.createElement("div");var h=!0;d("BootloadedReact").render(b,f,function(){e.inform("reactshow"),h||e.updatePosition()});h=!1;b=this._reactContainer=f}}this._root=this._buildWrapper(a,b);a.attributes&&c("DOM").setAttributes(this._root,a.attributes);a.classNames&&a.classNames.forEach(d("CSS").addClass.bind(null,this._root));d("CSS").addClass(this._root,"uiLayer");a.causalElement&&(this._causalElement=c("ge")(a.causalElement));a.permanent&&(this._permanent=a.permanent);a.isStrictlyControlled&&(this._isStrictlyControlled=a.isStrictlyControlled);d("DataStore").set(this._root,"layer",this)};e._getDefaultBehaviors=function(){return[]};e.getCausalElement=function(){return this._causalElement};e.setCausalElement=function(a){this._causalElement=a;return this};e.getInsertParent=function(){return this._insertParent||document.body};e.getRoot=function(){this._root||(this._destroyed?c("FBLogger")("layer").warn("No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed."):c("FBLogger")("layer").warn("No root node for this Layer. It has probably not been set."));return this._root};e.getContentRoot=function(){return this.getRoot()};e._buildWrapper=function(a,b){return b};e.setInsertParent=function(a){a&&(this._shown&&a!==this.getInsertParent()&&(c("DOM").appendContent(a,this.getRoot()),this.updatePosition()),this._insertParent=a);return this};e.showAfterDelay=function(a){window.setTimeout(this.show.bind(this),a)};e.show=function(){var b=this;if(this._shown)return this;var e=this.getRoot();e!=null||h(0,5142);this.inform("beforeshow");c("Style").set(e,"visibility","hidden");c("Style").set(e,"overflow","hidden");d("CSS").show(e);c("DOM").appendContent(this.getInsertParent(),e);this.updatePosition()!==!1?(this._shown=!0,this.inform("show"),a.inform("show",this),this._permanent||window.setTimeout(function(){b._shown&&i.push(b)},0)):d("CSS").hide(e);c("Style").set(e,"visibility","");c("Style").set(e,"overflow","");c("Style").set(e,"opacity","1");this.inform("aftershow");return this};e.hide=function(a){if(this._isStrictlyControlled){this._shown&&this.inform("runhide",a);return this}return this._hide()};e._hide=function(){if(this._hiding||!this._shown||this.inform("beforehide")===!1)return this;this._hiding=!0;this.inform("starthide")!==!1&&this.finishHide();return this};e.conditionShow=function(a){return a?this.show():this._hide()};e.finishHide=function(){if(this._shown){this._permanent||c("removeFromArray")(i,this);this._hiding=!1;this._shown=!1;var b=this.getRoot();b!=null||h(0,5143);d("CSS").hide(b);this.inform("hide");a.inform("hide",this)}};e.isShown=function(){return this._shown};e.updatePosition=function(){return!0};e.destroy=function(){this.containsReactComponent&&d("BootloadedReact").unmountComponentAtNode(this._reactContainer);this.finishHide();var b=this.getRoot();c("DOM").remove(b);this.destroyBehaviors();this.inform("destroy");a.inform("destroy",this);d("DataStore").remove(b,"layer");this._root=this._causalElement=null;this._destroyed=!0};a.init=function(a,b){a.init(b)};a.initAndShow=function(a,b){a.init(b).show()};a.show=function(a){a.show()};a.showAfterDelay=function(a,b){a.showAfterDelay(b)};a.getTopmostLayer=function(){return i[i.length-1]};a.informBlur=function(a){k=null;l=null;var b=i.length;if(!b)return;while(b--){var c=i[b],e=c.getContentRoot();e!=null||h(0,5144);if(d("ContextualThing").containsIncludingLayers(e,a))return;if(c.inform("blur",{target:a})===!1||c.isShown())return}};return a}(c("mixin")(c("ArbiterMixin"),c("BehaviorsMixin")));Object.assign(j,c("ArbiterMixin"));Object.assign(j.prototype,{_destroyed:!1,_initialized:!1,_root:null,_shown:!1,_hiding:!1,_causalElement:null,_reactContainer:null});(a=c("Event")).listen(document.documentElement,"keydown",function(a){if(c("KeyEventController").filterEventTargets(a,"keydown"))for(var b=i.length-1;b>=0;b--)if(i[b].inform("key",a)===!1)return!1;return!0},a.Priority.URGENT);var k;a.listen(document.documentElement,"mousedown",function(a){k=a.getTarget()});var l;a.listen(document.documentElement,"mouseup",function(a){l=a.getTarget(),c("setImmediate")(function(){k=null,l=null})});a.listen(document.documentElement,"click",function(a){var b=k,e=l;k=null;l=null;var f=i.length;if(!f)return;f=a.getTarget();if(f!==e||f!==b)return;if(!c("DOM").contains(document.documentElement,f))return;if(f.offsetWidth!=null&&!f.offsetWidth)return;if(d("Parent").byClass(f,"generic_dialog"))return;j.informBlur(f)});g["default"]=j}),98);