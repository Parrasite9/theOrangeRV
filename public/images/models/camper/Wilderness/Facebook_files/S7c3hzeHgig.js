;/*FB_PKG_DELIM*/

__d("LSPlatformErrorChannel",["XPlatReactEventEmitter"],(function(a,b,c,d,e,f,g){"use strict";var h="onLSError",i=new(c("XPlatReactEventEmitter"))(),j;function a(a){j=a,i.emit(h,a)}function b(a){var b=i.addListener(h,a);return function(){return b.remove()}}function d(){return j}function e(){i.removeAllListeners(h),j=null}f={TEST_ONLY_clear:e,emit:a,lastError:d,subscribe:b};g["default"]=f}),98);
__d("LSReStoreQplLogger",["LSTransactionLogger"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return{startTracking:function(b,d){var e=c("LSTransactionLogger")==null?void 0:c("LSTransactionLogger").startTracking(b,a,d);return{addAnnotations:function(b){c("LSTransactionLogger")==null?void 0:c("LSTransactionLogger").addAnnotations(a,e,b)},end:function(){c("LSTransactionLogger")==null?void 0:c("LSTransactionLogger").end(a,e)},fail:function(b){c("LSTransactionLogger")==null?void 0:c("LSTransactionLogger").fail(a,e,b)},mark:function(b){c("LSTransactionLogger")==null?void 0:c("LSTransactionLogger").mark(a,e,b)},recordLogicalWrite:function(){c("LSTransactionLogger")==null?void 0:c("LSTransactionLogger").recordLogicalWrite(e)}}}}}g.createQplLogger=a}),98);
__d("ReStoreDecryptionFailure",[],(function(a,b,c,d,e,f){"use strict";var g="ReStoreDecryptionFailure";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c){var d;b=b+" - Encrypted Restore was unable to decrypt an entity for table "+c;d=a.call(this,b)||this;d.message=b;d.name=g;d.tableName=c;return d}var c=b.prototype;c.getTableName=function(){return this.tableName};return b}(babelHelpers.wrapNativeSuper(Error));f.ERROR_NAME=g;f.ReStoreDecryptionFailure=a}),66);
__d("ReStoreEARSetupFailure",[],(function(a,b,c,d,e,f){"use strict";var g="Encryption keychain could not be setup",h="ReStoreEARSetupFailure";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){var c;b=g+": "+b;c=a.call(this,b)||this;c.message=b;c.name=h;return c}return b}(babelHelpers.wrapNativeSuper(Error));f.ERROR_MESSAGE=g;f.ERROR_NAME=h;f.ReStoreEARSetupFailure=a}),66);
__d("ReStoreEvent",[],(function(a,b,c,d,e,f){"use strict";a=function(){};f["default"]=a}),66);
__d("ReStoreIndexedDbClosedEvent",["ReStoreEvent"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c){var d;d=a.call(this)||this;d.idb=b;d.error=c;return d}var c=b.prototype;c.getError=function(){return this.error};return b}(c("ReStoreEvent"));g["default"]=a}),98);
__d("ReStoreIndexedDbUpgradedEvent",["ReStoreEvent"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(c("ReStoreEvent"));g["default"]=a}),98);
__d("ReStoreUnexpectedlyClosed",[],(function(a,b,c,d,e,f){"use strict";a="ReStoreUnexpectedlyClosed";b=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(babelHelpers.wrapNativeSuper(Error));f.ERROR_NAME=a;f.ReStoreUnexpectedlyClosed=b}),66);
__d("SharedWorkerUtils",["WorkerConfig"],(function(a,b,c,d,e,f,g){"use strict";function b(){return d("WorkerConfig").worker==="shared"&&"SharedWorker"in a&&typeof a.SharedWorker==="function"}g.isSharedWorkerSupported=b}),98);
__d("WAExceededStorageQuota",["Promise","WABridge","WAResultOrError","WATagsLogger"],(function(a,b,c,d,e,f,g){"use strict";var h;function i(){var a=babelHelpers.taggedTemplateLiteralLoose(["",": ",""]);i=function(){return a};return a}function j(){var a=babelHelpers.taggedTemplateLiteralLoose(["successfully deleted data from DB"]);j=function(){return a};return a}function k(){var a=babelHelpers.taggedTemplateLiteralLoose(["successfully wrote to db"]);k=function(){return a};return a}function l(){var a=babelHelpers.taggedTemplateLiteralLoose(["transaction completed"]);l=function(){return a};return a}var m=d("WATagsLogger").TAGS(["MAWExceededStorageQuota"]),n=typeof importScripts==="function",o=!1;function a(){return o}function p(a){o=a,n&&d("WABridge").getBridge().fireAndForget("event","storageQuota",{exceededStorageQuota:o})}function c(a){if(a==null)return;if(a instanceof Error&&u(a)||(a==null?void 0:a.inner)instanceof Error&&u(a.inner)){p(!0);return}}function e(a){a.addEventListener("abort",function(a){a=a.target.error;u(a)&&p(!0)})}var q="storage_quota_check",r="storage_quota_check_store",s="storage_quota_check_key";function f(){return new(h||(h=b("Promise")))(function(a){var b=indexedDB.open(q);b.onerror=function(b){b=t(b.target.error,"Failed to open DB");a(b)};b.onupgradeneeded=function(a){a=a.target.result;a.createObjectStore(r)};b.onsuccess=function(b){b=b.target.result;b=b.transaction([r],"readwrite");b.oncomplete=function(){m.LOG(l()),a(d("WAResultOrError").makeResult("storage-quota-sufficient"))};b.onerror=function(b){b=t(b.target.error,"transaction failed");a(b)};b.onabort=function(b){b=t(b.target.error,"transaction aborted");a(b)};var c=b.objectStore(r);b=new Blob([new Uint8Array(1024)]);b=c.add(b,s);b.onerror=function(b){b=t(b.target.error,"failed to write data");a(b)};b.onsuccess=function(){m.LOG(k());var b=c["delete"](s);b.onerror=function(b){b=t(b.target.error,"failed to delete data");a(b)};b.onsuccess=function(){m.LOG(j())}}}})}function t(a,b){if(u(a)){p(!0);return d("WAResultOrError").makeResult("storage-quota-exceeded")}m.ERROR(i(),b,a);return d("WAResultOrError").makeError("runtime-error")}function u(a){return a==null?!1:Boolean(a instanceof self.DOMException&&(a.code===22||a.code===1014||a.name==="QuotaExceededError"||a.name==="NS_ERROR_DOM_QUOTA_REACHED"))}g.getExceededStorageQuota=a;g.setExceededStorageQuota=p;g.checkQuotaExceededError=c;g.listenToQuotaExceededError=e;g.checkStorageQuota=f}),98);
__d("createLSReStoreEphemeralPersistence",["LSReStoreQplLogger","createReStoreEphemeralPersistence","qpl"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("createReStoreEphemeralPersistence")(d("LSReStoreQplLogger").createQplLogger(c("qpl")._(25303045,"817")))}g.createLSReStoreEphemeralPersistence=a}),98);