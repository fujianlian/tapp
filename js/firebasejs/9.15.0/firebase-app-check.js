import{_getProvider as e,getApp as t,_registerComponent as r,registerVersion as n}from"./firebase-app.js";const o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const o=e[t],i=t+1<e.length,a=i?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,h=o>>2,l=(3&o)<<4|a>>4;let u=(15&a)<<2|c>>6,p=63&c;s||(p=64,i||(u=64)),n.push(r[h],r[l],r[u],r[p])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let o=e.charCodeAt(n);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):55296==(64512&o)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){const o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=((7&o)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(i>>10)),t[n++]=String.fromCharCode(56320+(1023&i))}else{const i=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const o=r[e.charAt(t++)],i=t<e.length?r[e.charAt(t)]:0;++t;const a=t<e.length?r[e.charAt(t)]:64;++t;const s=t<e.length?r[e.charAt(t)]:64;if(++t,null==o||null==i||null==a||null==s)throw Error();const c=o<<2|i>>4;if(n.push(c),64!==a){const e=i<<4&240|a>>2;if(n.push(e),64!==s){const e=a<<6&192|s;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},i=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function a(){try{return"object"==typeof indexedDB}catch(e){return!1}}class s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,r))}}}class c extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,c.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,h.prototype.create)}}class h{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,o=this.errors[e],i=o?function(e,t){return e.replace(l,((e,r)=>{const n=t[r];return null!=n?String(n):`<${r}?>`}))}(o,r):"Error",a=`${this.serviceName}: ${i} (${n}).`;return new c(n,a,r)}}const l=/\{\$([^}]+)}/g;function u(e){return JSON.parse(e)}const p=function(e){const t=function(e){let t={},r={},n={},o="";try{const a=e.split(".");t=u(i(a[0])||""),r=u(i(a[1])||""),o=a[2],n=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:n,signature:o}}(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null};class d{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}var g;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(g||(g={}));const f={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},E=g.INFO,w={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},_=(e,t,...r)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),o=w[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${n}]  ${e.name}:`,...r)};const k=new Map,y={activated:!1,tokenObservers:[]},m={initialized:!1,enabled:!1};function v(e){return k.get(e)||Object.assign({},y)}function b(){return m}const A="https://content-firebaseappcheck.googleapis.com/v1",T=3e4,S=96e4;class C{constructor(e,t,r,n,o){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=n,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=n,n>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch((()=>{}))}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new s,await(t=this.getNextRun(e),new Promise((e=>{setTimeout(e,t)}))),this.pending.resolve(),await this.pending.promise,this.pending=new s,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch((()=>{}))}catch(e){this.retryPolicy(e)?this.process(!1).catch((()=>{})):this.stop()}var t}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}}const R=new h("appCheck","AppCheck",{"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"});function D(e=!1){var t;return e?null===(t=self.grecaptcha)||void 0===t?void 0:t.enterprise:self.grecaptcha}function P(e){if(!v(e).activated)throw R.create("use-before-activation",{appName:e.name})}function x(e){const t=Math.round(e/1e3),r=Math.floor(t/86400),n=Math.floor((t-3600*r*24)/3600),o=Math.floor((t-3600*r*24-3600*n)/60),i=t-3600*r*24-3600*n-60*o;let a="";return r&&(a+=O(r)+"d:"),n&&(a+=O(n)+"h:"),a+=O(o)+"m:"+O(i)+"s",a}function O(e){return 0===e?"00":e>=10?e.toString():"0"+e}async function I({url:e,body:t},r){const n={"Content-Type":"application/json"},o=r.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&(n["X-Firebase-Client"]=e)}const i={method:"POST",body:JSON.stringify(t),headers:n};let a,s;try{a=await fetch(e,i)}catch(e){throw R.create("fetch-network-error",{originalErrorMessage:null==e?void 0:e.message})}if(200!==a.status)throw R.create("fetch-status-error",{httpStatus:a.status});try{s=await a.json()}catch(e){throw R.create("fetch-parse-error",{originalErrorMessage:null==e?void 0:e.message})}const c=s.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw R.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${s.ttl}`});const h=1e3*Number(c[1]),l=Date.now();return{token:s.token,expireTimeMillis:l+h,issuedAtTimeMillis:l}}const N="firebase-app-check-store";let M=null;function B(){return M||(M=new Promise(((e,t)=>{try{const r=indexedDB.open("firebase-app-check-database",1);r.onsuccess=t=>{e(t.target.result)},r.onerror=e=>{var r;t(R.create("storage-open",{originalErrorMessage:null===(r=e.target.error)||void 0===r?void 0:r.message}))},r.onupgradeneeded=e=>{const t=e.target.result;if(0===e.oldVersion)t.createObjectStore(N,{keyPath:"compositeKey"})}}catch(e){t(R.create("storage-open",{originalErrorMessage:null==e?void 0:e.message}))}})),M)}async function L(e,t){const r=(await B()).transaction(N,"readwrite"),n=r.objectStore(N).put({compositeKey:e,value:t});return new Promise(((e,t)=>{n.onsuccess=t=>{e()},r.onerror=e=>{var r;t(R.create("storage-set",{originalErrorMessage:null===(r=e.target.error)||void 0===r?void 0:r.message}))}}))}async function H(e){const t=(await B()).transaction(N,"readonly"),r=t.objectStore(N).get(e);return new Promise(((e,n)=>{r.onsuccess=t=>{const r=t.target.result;e(r?r.value:void 0)},t.onerror=e=>{var t;n(R.create("storage-get",{originalErrorMessage:null===(t=e.target.error)||void 0===t?void 0:t.message}))}}))}function $(e){return`${e.options.appId}-${e.name}`}const j=new class{constructor(e){this.name=e,this._logLevel=E,this._logHandler=_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in g))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?f[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...e),this._logHandler(this,g.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...e),this._logHandler(this,g.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,g.INFO,...e),this._logHandler(this,g.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,g.WARN,...e),this._logHandler(this,g.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...e),this._logHandler(this,g.ERROR,...e)}}("@firebase/app-check");async function W(e){if(a()){let t;try{t=await function(e){return H($(e))}(e)}catch(e){j.warn(`Failed to read token from IndexedDB. Error: ${e}`)}return t}}function F(e,t){return a()?function(e,t){return L($(e),t)}(e,t).catch((e=>{j.warn(`Failed to write token to IndexedDB. Error: ${e}`)})):Promise.resolve()}async function V(){let e;try{e=await H("debug-token")}catch(e){}if(e)return e;{const e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}));return(t=e,L("debug-token",t)).catch((e=>j.warn(`Failed to persist debug token to IndexedDB. Error: ${e}`))),e}var t}function K(){return b().enabled}async function z(){const e=b();if(e.enabled&&e.token)return e.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}function U(){const e=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}(),t=b();if(t.initialized=!0,"string"!=typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN&&!0!==e.FIREBASE_APPCHECK_DEBUG_TOKEN)return;t.enabled=!0;const r=new s;t.token=r,"string"==typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN?r.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):r.resolve(V())}const q={error:"UNKNOWN_ERROR"};async function G(e,t=!1){const r=e.app;P(r);const n=v(r);let o,i=n.token;if(i&&!Q(i)&&(n.token=void 0,i=void 0),!i){const e=await n.cachedTokenPromise;e&&(Q(e)?i=e:await F(r,void 0))}if(!t&&i&&Q(i))return{token:i.token};let a,s=!1;if(K()){n.exchangeTokenPromise||(n.exchangeTokenPromise=I(function(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${A}/projects/${r}/apps/${n}:exchangeDebugToken?key=${o}`,body:{debug_token:t}}}(r,await z()),e.heartbeatServiceProvider).finally((()=>{n.exchangeTokenPromise=void 0})),s=!0);const t=await n.exchangeTokenPromise;return await F(r,t),n.token=t,{token:t.token}}try{n.exchangeTokenPromise||(n.exchangeTokenPromise=n.provider.getToken().finally((()=>{n.exchangeTokenPromise=void 0})),s=!0),i=await v(r).exchangeTokenPromise}catch(e){"appCheck/throttled"===e.code?j.warn(e.message):j.error(e),o=e}return i?o?a=Q(i)?{token:i.token,internalError:o}:ee(o):(a={token:i.token},n.token=i,await F(r,i)):a=ee(o),s&&Z(r,a),a}function X(e,t,r,n){const{app:o}=e,i=v(o),a={next:r,error:n,type:t};if(i.tokenObservers=[...i.tokenObservers,a],i.token&&Q(i.token)){const t=i.token;Promise.resolve().then((()=>{r({token:t.token}),Y(e)})).catch((()=>{}))}i.cachedTokenPromise.then((()=>Y(e)))}function J(e,t){const r=v(e),n=r.tokenObservers.filter((e=>e.next!==t));0===n.length&&r.tokenRefresher&&r.tokenRefresher.isRunning()&&r.tokenRefresher.stop(),r.tokenObservers=n}function Y(e){const{app:t}=e,r=v(t);let n=r.tokenRefresher;n||(n=function(e){const{app:t}=e;return new C((async()=>{let r;if(r=v(t).token?await G(e,!0):await G(e),r.error)throw r.error;if(r.internalError)throw r.internalError}),(()=>!0),(()=>{const e=v(t);if(e.token){let t=e.token.issuedAtTimeMillis+.5*(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)+3e5;const r=e.token.expireTimeMillis-3e5;return t=Math.min(t,r),Math.max(0,t-Date.now())}return 0}),T,S)}(e),r.tokenRefresher=n),!n.isRunning()&&r.isTokenAutoRefreshEnabled&&n.start()}function Z(e,t){const r=v(e).tokenObservers;for(const e of r)try{"EXTERNAL"===e.type&&null!=t.error?e.error(t.error):e.next(t)}catch(e){}}function Q(e){return e.expireTimeMillis-Date.now()>0}function ee(e){return{token:(t=q,o.encodeString(JSON.stringify(t),!1)),error:e};var t}class te{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=v(this.app);for(const t of e)J(this.app,t.next);return Promise.resolve()}}function re(e,t){const r=new s;v(e).reCAPTCHAState={initialized:r};const n=ie(e),o=D(!1);return o?oe(e,t,o,n,r):function(e){const t=document.createElement("script");t.src="https://www.google.com/recaptcha/api.js",t.onload=e,document.head.appendChild(t)}((()=>{const o=D(!1);if(!o)throw new Error("no recaptcha");oe(e,t,o,n,r)})),r.promise}function ne(e,t){const r=new s;v(e).reCAPTCHAState={initialized:r};const n=ie(e),o=D(!0);return o?oe(e,t,o,n,r):function(e){const t=document.createElement("script");t.src="https://www.google.com/recaptcha/enterprise.js",t.onload=e,document.head.appendChild(t)}((()=>{const o=D(!0);if(!o)throw new Error("no recaptcha");oe(e,t,o,n,r)})),r.promise}function oe(e,t,r,n,o){r.ready((()=>{!function(e,t,r,n){const o=r.render(n,{sitekey:t,size:"invisible"}),i=v(e);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:o})}(e,t,r,n),o.resolve(r)}))}function ie(e){const t=`fire_app_check_${e.name}`,r=document.createElement("div");return r.id=t,r.style.display="none",document.body.appendChild(r),t}async function ae(e){P(e);const t=v(e).reCAPTCHAState,r=await t.initialized.promise;return new Promise(((t,n)=>{const o=v(e).reCAPTCHAState;r.ready((()=>{t(r.execute(o.widgetId,{action:"fire_app_check"}))}))}))}class se{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,t;ue(this._throttleData);const r=await ae(this._app).catch((e=>{throw R.create("recaptcha-error")}));let n;try{n=await I(function(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${A}/projects/${r}/apps/${n}:exchangeRecaptchaV3Token?key=${o}`,body:{recaptcha_v3_token:t}}}(this._app,r),this._heartbeatServiceProvider)}catch(r){throw(null===(e=r.code)||void 0===e?void 0:e.includes("fetch-status-error"))?(this._throttleData=le(Number(null===(t=r.customData)||void 0===t?void 0:t.httpStatus),this._throttleData),R.create("throttled",{time:x(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):r}return this._throttleData=null,n}initialize(t){this._app=t,this._heartbeatServiceProvider=e(t,"heartbeat"),re(t,this._siteKey).catch((()=>{}))}isEqual(e){return e instanceof se&&this._siteKey===e._siteKey}}class ce{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,t;ue(this._throttleData);const r=await ae(this._app).catch((e=>{throw R.create("recaptcha-error")}));let n;try{n=await I(function(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${A}/projects/${r}/apps/${n}:exchangeRecaptchaEnterpriseToken?key=${o}`,body:{recaptcha_enterprise_token:t}}}(this._app,r),this._heartbeatServiceProvider)}catch(r){throw(null===(e=r.code)||void 0===e?void 0:e.includes("fetch-status-error"))?(this._throttleData=le(Number(null===(t=r.customData)||void 0===t?void 0:t.httpStatus),this._throttleData),R.create("throttled",{time:x(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):r}return this._throttleData=null,n}initialize(t){this._app=t,this._heartbeatServiceProvider=e(t,"heartbeat"),ne(t,this._siteKey).catch((()=>{}))}isEqual(e){return e instanceof ce&&this._siteKey===e._siteKey}}class he{constructor(e){this._customProviderOptions=e}async getToken(){const e=await this._customProviderOptions.getToken(),t=p(e.token),r=null!==t&&t<Date.now()&&t>0?1e3*t:Date.now();return Object.assign(Object.assign({},e),{issuedAtTimeMillis:r})}initialize(e){this._app=e}isEqual(e){return e instanceof he&&this._customProviderOptions.getToken.toString()===e._customProviderOptions.getToken.toString()}}function le(e,t){if(404===e||403===e)return{backoffCount:1,allowRequestsAfter:Date.now()+864e5,httpStatus:e};{const r=t?t.backoffCount:0,n=function(e,t=1e3,r=2){const n=t*Math.pow(r,e),o=Math.round(.5*n*(Math.random()-.5)*2);return Math.min(144e5,n+o)}(r,1e3,2);return{backoffCount:r+1,allowRequestsAfter:Date.now()+n,httpStatus:e}}}function ue(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw R.create("throttled",{time:x(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}function pe(r=t(),n){var o;r=(o=r)&&o._delegate?o._delegate:o;const i=e(r,"app-check");if(b().initialized||U(),K()&&z().then((e=>console.log(`App Check debug token: ${e}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`))),i.isInitialized()){const e=i.getImmediate(),t=i.getOptions();if(t.isTokenAutoRefreshEnabled===n.isTokenAutoRefreshEnabled&&t.provider.isEqual(n.provider))return e;throw R.create("already-initialized",{appName:r.name})}const a=i.initialize({options:n});return function(e,t,r){const n=function(e,t){return k.set(e,t),k.get(e)}(e,Object.assign({},y));n.activated=!0,n.provider=t,n.cachedTokenPromise=W(e).then((t=>(t&&Q(t)&&(n.token=t,Z(e,{token:t.token})),t))),n.isTokenAutoRefreshEnabled=void 0===r?e.automaticDataCollectionEnabled:r,n.provider.initialize(e)}(r,n.provider,n.isTokenAutoRefreshEnabled),v(r).isTokenAutoRefreshEnabled&&X(a,"INTERNAL",(()=>{})),a}function de(e,t){const r=v(e.app);r.tokenRefresher&&(!0===t?r.tokenRefresher.start():r.tokenRefresher.stop()),r.isTokenAutoRefreshEnabled=t}async function ge(e,t){const r=await G(e,t);if(r.error)throw r.error;return{token:r.token}}function fe(e,t,r,n){let o=()=>{},i=()=>{};return o=null!=t.next?t.next.bind(t):t,null!=t.error?i=t.error.bind(t):r&&(i=r),X(e,"EXTERNAL",o,i),()=>J(e.app,o)}r(new d("app-check",(e=>function(e,t){return new te(e,t)}(e.getProvider("app").getImmediate(),e.getProvider("heartbeat"))),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,r)=>{e.getProvider("app-check-internal").initialize()}))),r(new d("app-check-internal",(e=>function(e){return{getToken:t=>G(e,t),addTokenListener:t=>X(e,"INTERNAL",t),removeTokenListener:t=>J(e.app,t)}}(e.getProvider("app-check").getImmediate())),"PUBLIC").setInstantiationMode("EXPLICIT")),n("@firebase/app-check","0.6.0");export{he as CustomProvider,ce as ReCaptchaEnterpriseProvider,se as ReCaptchaV3Provider,ge as getToken,pe as initializeAppCheck,fe as onTokenChanged,de as setTokenAutoRefreshEnabled};

//# sourceMappingURL=firebase-app-check.js.map