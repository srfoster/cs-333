(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function i(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(l){if(l.ep)return;l.ep=!0;const o=i(l);fetch(l.href,o)}})();function W1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _f={exports:{}},wu={};var lg;function E2(){if(lg)return wu;lg=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(u,l,o){var c=null;if(o!==void 0&&(c=""+o),l.key!==void 0&&(c=""+l.key),"key"in l){o={};for(var h in l)h!=="key"&&(o[h]=l[h])}else o=l;return l=o.ref,{$$typeof:e,type:u,key:c,ref:l!==void 0?l:null,props:o}}return wu.Fragment=t,wu.jsx=i,wu.jsxs=i,wu}var og;function v2(){return og||(og=1,_f.exports=E2()),_f.exports}var O=v2(),Nf={exports:{}},Ce={};var cg;function A2(){if(cg)return Ce;cg=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),v=Symbol.iterator;function E(M){return M===null||typeof M!="object"?null:(M=v&&M[v]||M["@@iterator"],typeof M=="function"?M:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,k={};function N(M,W,S){this.props=M,this.context=W,this.refs=k,this.updater=S||A}N.prototype.isReactComponent={},N.prototype.setState=function(M,W){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,W,"setState")},N.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function L(){}L.prototype=N.prototype;function F(M,W,S){this.props=M,this.context=W,this.refs=k,this.updater=S||A}var ee=F.prototype=new L;ee.constructor=F,_(ee,N.prototype),ee.isPureReactComponent=!0;var ne=Array.isArray;function G(){}var le={H:null,A:null,T:null,S:null},ye=Object.prototype.hasOwnProperty;function de(M,W,S){var he=S.ref;return{$$typeof:e,type:M,key:W,ref:he!==void 0?he:null,props:S}}function Y(M,W){return de(M.type,W,M.props)}function oe(M){return typeof M=="object"&&M!==null&&M.$$typeof===e}function fe(M){var W={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(S){return W[S]})}var me=/\/+/g;function ae(M,W){return typeof M=="object"&&M!==null&&M.key!=null?fe(""+M.key):W.toString(36)}function se(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(G,G):(M.status="pending",M.then(function(W){M.status==="pending"&&(M.status="fulfilled",M.value=W)},function(W){M.status==="pending"&&(M.status="rejected",M.reason=W)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function z(M,W,S,he,xe){var Ee=typeof M;(Ee==="undefined"||Ee==="boolean")&&(M=null);var Be=!1;if(M===null)Be=!0;else switch(Ee){case"bigint":case"string":case"number":Be=!0;break;case"object":switch(M.$$typeof){case e:case t:Be=!0;break;case y:return Be=M._init,z(Be(M._payload),W,S,he,xe)}}if(Be)return xe=xe(M),Be=he===""?"."+ae(M,0):he,ne(xe)?(S="",Be!=null&&(S=Be.replace(me,"$&/")+"/"),z(xe,W,S,"",function(hn){return hn})):xe!=null&&(oe(xe)&&(xe=Y(xe,S+(xe.key==null||M&&M.key===xe.key?"":(""+xe.key).replace(me,"$&/")+"/")+Be)),W.push(xe)),1;Be=0;var rt=he===""?".":he+":";if(ne(M))for(var Qe=0;Qe<M.length;Qe++)he=M[Qe],Ee=rt+ae(he,Qe),Be+=z(he,W,S,Ee,xe);else if(Qe=E(M),typeof Qe=="function")for(M=Qe.call(M),Qe=0;!(he=M.next()).done;)he=he.value,Ee=rt+ae(he,Qe++),Be+=z(he,W,S,Ee,xe);else if(Ee==="object"){if(typeof M.then=="function")return z(se(M),W,S,he,xe);throw W=String(M),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return Be}function ie(M,W,S){if(M==null)return M;var he=[],xe=0;return z(M,he,"","",function(Ee){return W.call(S,Ee,xe++)}),he}function be(M){if(M._status===-1){var W=M._result;W=W(),W.then(function(S){(M._status===0||M._status===-1)&&(M._status=1,M._result=S)},function(S){(M._status===0||M._status===-1)&&(M._status=2,M._result=S)}),M._status===-1&&(M._status=0,M._result=W)}if(M._status===1)return M._result.default;throw M._result}var ke=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},D={map:ie,forEach:function(M,W,S){ie(M,function(){W.apply(this,arguments)},S)},count:function(M){var W=0;return ie(M,function(){W++}),W},toArray:function(M){return ie(M,function(W){return W})||[]},only:function(M){if(!oe(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return Ce.Activity=b,Ce.Children=D,Ce.Component=N,Ce.Fragment=i,Ce.Profiler=l,Ce.PureComponent=F,Ce.StrictMode=u,Ce.Suspense=d,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(M){return le.H.useMemoCache(M)}},Ce.cache=function(M){return function(){return M.apply(null,arguments)}},Ce.cacheSignal=function(){return null},Ce.cloneElement=function(M,W,S){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var he=_({},M.props),xe=M.key;if(W!=null)for(Ee in W.key!==void 0&&(xe=""+W.key),W)!ye.call(W,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&W.ref===void 0||(he[Ee]=W[Ee]);var Ee=arguments.length-2;if(Ee===1)he.children=S;else if(1<Ee){for(var Be=Array(Ee),rt=0;rt<Ee;rt++)Be[rt]=arguments[rt+2];he.children=Be}return de(M.type,xe,he)},Ce.createContext=function(M){return M={$$typeof:c,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:o,_context:M},M},Ce.createElement=function(M,W,S){var he,xe={},Ee=null;if(W!=null)for(he in W.key!==void 0&&(Ee=""+W.key),W)ye.call(W,he)&&he!=="key"&&he!=="__self"&&he!=="__source"&&(xe[he]=W[he]);var Be=arguments.length-2;if(Be===1)xe.children=S;else if(1<Be){for(var rt=Array(Be),Qe=0;Qe<Be;Qe++)rt[Qe]=arguments[Qe+2];xe.children=rt}if(M&&M.defaultProps)for(he in Be=M.defaultProps,Be)xe[he]===void 0&&(xe[he]=Be[he]);return de(M,Ee,xe)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(M){return{$$typeof:h,render:M}},Ce.isValidElement=oe,Ce.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:be}},Ce.memo=function(M,W){return{$$typeof:p,type:M,compare:W===void 0?null:W}},Ce.startTransition=function(M){var W=le.T,S={};le.T=S;try{var he=M(),xe=le.S;xe!==null&&xe(S,he),typeof he=="object"&&he!==null&&typeof he.then=="function"&&he.then(G,ke)}catch(Ee){ke(Ee)}finally{W!==null&&S.types!==null&&(W.types=S.types),le.T=W}},Ce.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},Ce.use=function(M){return le.H.use(M)},Ce.useActionState=function(M,W,S){return le.H.useActionState(M,W,S)},Ce.useCallback=function(M,W){return le.H.useCallback(M,W)},Ce.useContext=function(M){return le.H.useContext(M)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(M,W){return le.H.useDeferredValue(M,W)},Ce.useEffect=function(M,W){return le.H.useEffect(M,W)},Ce.useEffectEvent=function(M){return le.H.useEffectEvent(M)},Ce.useId=function(){return le.H.useId()},Ce.useImperativeHandle=function(M,W,S){return le.H.useImperativeHandle(M,W,S)},Ce.useInsertionEffect=function(M,W){return le.H.useInsertionEffect(M,W)},Ce.useLayoutEffect=function(M,W){return le.H.useLayoutEffect(M,W)},Ce.useMemo=function(M,W){return le.H.useMemo(M,W)},Ce.useOptimistic=function(M,W){return le.H.useOptimistic(M,W)},Ce.useReducer=function(M,W,S){return le.H.useReducer(M,W,S)},Ce.useRef=function(M){return le.H.useRef(M)},Ce.useState=function(M){return le.H.useState(M)},Ce.useSyncExternalStore=function(M,W,S){return le.H.useSyncExternalStore(M,W,S)},Ce.useTransition=function(){return le.H.useTransition()},Ce.version="19.2.3",Ce}var fg;function kh(){return fg||(fg=1,Nf.exports=A2()),Nf.exports}var P=kh(),Of={exports:{}},xu={},kf={exports:{}},Rf={};var hg;function w2(){return hg||(hg=1,(function(e){function t(z,ie){var be=z.length;z.push(ie);e:for(;0<be;){var ke=be-1>>>1,D=z[ke];if(0<l(D,ie))z[ke]=ie,z[be]=D,be=ke;else break e}}function i(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var ie=z[0],be=z.pop();if(be!==ie){z[0]=be;e:for(var ke=0,D=z.length,M=D>>>1;ke<M;){var W=2*(ke+1)-1,S=z[W],he=W+1,xe=z[he];if(0>l(S,be))he<D&&0>l(xe,S)?(z[ke]=xe,z[he]=be,ke=he):(z[ke]=S,z[W]=be,ke=W);else if(he<D&&0>l(xe,be))z[ke]=xe,z[he]=be,ke=he;else break e}}return ie}function l(z,ie){var be=z.sortIndex-ie.sortIndex;return be!==0?be:z.id-ie.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var c=Date,h=c.now();e.unstable_now=function(){return c.now()-h}}var d=[],p=[],y=1,b=null,v=3,E=!1,A=!1,_=!1,k=!1,N=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function ee(z){for(var ie=i(p);ie!==null;){if(ie.callback===null)u(p);else if(ie.startTime<=z)u(p),ie.sortIndex=ie.expirationTime,t(d,ie);else break;ie=i(p)}}function ne(z){if(_=!1,ee(z),!A)if(i(d)!==null)A=!0,G||(G=!0,fe());else{var ie=i(p);ie!==null&&se(ne,ie.startTime-z)}}var G=!1,le=-1,ye=5,de=-1;function Y(){return k?!0:!(e.unstable_now()-de<ye)}function oe(){if(k=!1,G){var z=e.unstable_now();de=z;var ie=!0;try{e:{A=!1,_&&(_=!1,L(le),le=-1),E=!0;var be=v;try{t:{for(ee(z),b=i(d);b!==null&&!(b.expirationTime>z&&Y());){var ke=b.callback;if(typeof ke=="function"){b.callback=null,v=b.priorityLevel;var D=ke(b.expirationTime<=z);if(z=e.unstable_now(),typeof D=="function"){b.callback=D,ee(z),ie=!0;break t}b===i(d)&&u(d),ee(z)}else u(d);b=i(d)}if(b!==null)ie=!0;else{var M=i(p);M!==null&&se(ne,M.startTime-z),ie=!1}}break e}finally{b=null,v=be,E=!1}ie=void 0}}finally{ie?fe():G=!1}}}var fe;if(typeof F=="function")fe=function(){F(oe)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ae=me.port2;me.port1.onmessage=oe,fe=function(){ae.postMessage(null)}}else fe=function(){N(oe,0)};function se(z,ie){le=N(function(){z(e.unstable_now())},ie)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(z){switch(v){case 1:case 2:case 3:var ie=3;break;default:ie=v}var be=v;v=ie;try{return z()}finally{v=be}},e.unstable_requestPaint=function(){k=!0},e.unstable_runWithPriority=function(z,ie){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var be=v;v=z;try{return ie()}finally{v=be}},e.unstable_scheduleCallback=function(z,ie,be){var ke=e.unstable_now();switch(typeof be=="object"&&be!==null?(be=be.delay,be=typeof be=="number"&&0<be?ke+be:ke):be=ke,z){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=be+D,z={id:y++,callback:ie,priorityLevel:z,startTime:be,expirationTime:D,sortIndex:-1},be>ke?(z.sortIndex=be,t(p,z),i(d)===null&&z===i(p)&&(_?(L(le),le=-1):_=!0,se(ne,be-ke))):(z.sortIndex=D,t(d,z),A||E||(A=!0,G||(G=!0,fe()))),z},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(z){var ie=v;return function(){var be=v;v=ie;try{return z.apply(this,arguments)}finally{v=be}}}})(Rf)),Rf}var dg;function x2(){return dg||(dg=1,kf.exports=w2()),kf.exports}var Df={exports:{}},Rt={};var mg;function S2(){if(mg)return Rt;mg=1;var e=kh();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var u={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function o(d,p,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:d,containerInfo:p,implementation:y}}var c=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Rt.createPortal=function(d,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return o(d,p,null,y)},Rt.flushSync=function(d){var p=c.T,y=u.p;try{if(c.T=null,u.p=2,d)return d()}finally{c.T=p,u.p=y,u.d.f()}},Rt.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,u.d.C(d,p))},Rt.prefetchDNS=function(d){typeof d=="string"&&u.d.D(d)},Rt.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var y=p.as,b=h(y,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?u.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:v,fetchPriority:E}):y==="script"&&u.d.X(d,{crossOrigin:b,integrity:v,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rt.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=h(p.as,p.crossOrigin);u.d.M(d,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&u.d.M(d)},Rt.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,b=h(y,p.crossOrigin);u.d.L(d,y,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rt.preloadModule=function(d,p){if(typeof d=="string")if(p){var y=h(p.as,p.crossOrigin);u.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else u.d.m(d)},Rt.requestFormReset=function(d){u.d.r(d)},Rt.unstable_batchedUpdates=function(d,p){return d(p)},Rt.useFormState=function(d,p,y){return c.H.useFormState(d,p,y)},Rt.useFormStatus=function(){return c.H.useHostTransitionStatus()},Rt.version="19.2.3",Rt}var pg;function C2(){if(pg)return Df.exports;pg=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Df.exports=S2(),Df.exports}var gg;function _2(){if(gg)return xu;gg=1;var e=x2(),t=kh(),i=C2();function u(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function o(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function h(n){if(n.tag===31){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function d(n){if(o(n)!==n)throw Error(u(188))}function p(n){var r=n.alternate;if(!r){if(r=o(n),r===null)throw Error(u(188));return r!==n?null:n}for(var a=n,s=r;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(s=f.return,s!==null){a=s;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return d(f),n;if(m===s)return d(f),r;m=m.sibling}throw Error(u(188))}if(a.return!==s.return)a=f,s=m;else{for(var T=!1,w=f.child;w;){if(w===a){T=!0,a=f,s=m;break}if(w===s){T=!0,s=f,a=m;break}w=w.sibling}if(!T){for(w=m.child;w;){if(w===a){T=!0,a=m,s=f;break}if(w===s){T=!0,s=m,a=f;break}w=w.sibling}if(!T)throw Error(u(189))}}if(a.alternate!==s)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?n:r}function y(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=y(n),r!==null)return r;n=n.sibling}return null}var b=Object.assign,v=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),F=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=oe&&n[oe]||n["@@iterator"],typeof n=="function"?n:null)}var me=Symbol.for("react.client.reference");function ae(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===me?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case _:return"Fragment";case N:return"Profiler";case k:return"StrictMode";case ne:return"Suspense";case G:return"SuspenseList";case de:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case A:return"Portal";case F:return n.displayName||"Context";case L:return(n._context.displayName||"Context")+".Consumer";case ee:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case le:return r=n.displayName||null,r!==null?r:ae(n.type)||"Memo";case ye:r=n._payload,n=n._init;try{return ae(n(r))}catch{}}return null}var se=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be={pending:!1,data:null,method:null,action:null},ke=[],D=-1;function M(n){return{current:n}}function W(n){0>D||(n.current=ke[D],ke[D]=null,D--)}function S(n,r){D++,ke[D]=n.current,n.current=r}var he=M(null),xe=M(null),Ee=M(null),Be=M(null);function rt(n,r){switch(S(Ee,r),S(xe,n),S(he,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?R0(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=R0(r),n=D0(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}W(he),S(he,n)}function Qe(){W(he),W(xe),W(Ee)}function hn(n){n.memoizedState!==null&&S(Be,n);var r=he.current,a=D0(r,n.type);r!==a&&(S(xe,n),S(he,a))}function qn(n){xe.current===n&&(W(he),W(xe)),Be.current===n&&(W(Be),Tu._currentValue=be)}var ka,as;function jn(n){if(ka===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);ka=r&&r[1]||"",as=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ka+n+as}var Ai=!1;function wi(n,r){if(!n||Ai)return"";Ai=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(r){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(Q){var V=Q}Reflect.construct(n,[],$)}else{try{$.call()}catch(Q){V=Q}n.call($.prototype)}}else{try{throw Error()}catch(Q){V=Q}($=n())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(Q){if(Q&&V&&typeof Q.stack=="string")return[Q.stack,V.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=s.DetermineComponentFrameRoot(),T=m[0],w=m[1];if(T&&w){var I=T.split(`
`),j=w.split(`
`);for(f=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;f<j.length&&!j[f].includes("DetermineComponentFrameRoot");)f++;if(s===I.length||f===j.length)for(s=I.length-1,f=j.length-1;1<=s&&0<=f&&I[s]!==j[f];)f--;for(;1<=s&&0<=f;s--,f--)if(I[s]!==j[f]){if(s!==1||f!==1)do if(s--,f--,0>f||I[s]!==j[f]){var X=`
`+I[s].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=s&&0<=f);break}}}finally{Ai=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?jn(a):""}function us(n,r){switch(n.tag){case 26:case 27:case 5:return jn(n.type);case 16:return jn("Lazy");case 13:return n.child!==r&&r!==null?jn("Suspense Fallback"):jn("Suspense");case 19:return jn("SuspenseList");case 0:case 15:return wi(n.type,!1);case 11:return wi(n.type.render,!1);case 1:return wi(n.type,!0);case 31:return jn("Activity");default:return""}}function ss(n){try{var r="",a=null;do r+=us(n,a),a=n,n=n.return;while(n);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var xi=Object.prototype.hasOwnProperty,Si=e.unstable_scheduleCallback,Ra=e.unstable_cancelCallback,co=e.unstable_shouldYield,fo=e.unstable_requestPaint,Bt=e.unstable_now,ho=e.unstable_getCurrentPriorityLevel,Z=e.unstable_ImmediatePriority,ce=e.unstable_UserBlockingPriority,Se=e.unstable_NormalPriority,De=e.unstable_LowPriority,Ye=e.unstable_IdlePriority,$t=e.log,Yn=e.unstable_setDisableYieldValue,Ft=null,yt=null;function zt(n){if(typeof $t=="function"&&Yn(n),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Ft,n)}catch{}}var Ze=Math.clz32?Math.clz32:uE,pr=Math.log,Sn=Math.LN2;function uE(n){return n>>>=0,n===0?32:31-(pr(n)/Sn|0)|0}var ls=256,os=262144,cs=4194304;function Kr(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function fs(n,r,a){var s=n.pendingLanes;if(s===0)return 0;var f=0,m=n.suspendedLanes,T=n.pingedLanes;n=n.warmLanes;var w=s&134217727;return w!==0?(s=w&~m,s!==0?f=Kr(s):(T&=w,T!==0?f=Kr(T):a||(a=w&~n,a!==0&&(f=Kr(a))))):(w=s&~m,w!==0?f=Kr(w):T!==0?f=Kr(T):a||(a=s&~n,a!==0&&(f=Kr(a)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,a=r&-r,m>=a||m===32&&(a&4194048)!==0)?r:f}function Da(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function sE(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hd(){var n=cs;return cs<<=1,(cs&62914560)===0&&(cs=4194304),n}function mo(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function La(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function lE(n,r,a,s,f,m){var T=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var w=n.entanglements,I=n.expirationTimes,j=n.hiddenUpdates;for(a=T&~a;0<a;){var X=31-Ze(a),$=1<<X;w[X]=0,I[X]=-1;var V=j[X];if(V!==null)for(j[X]=null,X=0;X<V.length;X++){var Q=V[X];Q!==null&&(Q.lane&=-536870913)}a&=~$}s!==0&&dd(n,s,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(T&~r))}function dd(n,r,a){n.pendingLanes|=r,n.suspendedLanes&=~r;var s=31-Ze(r);n.entangledLanes|=r,n.entanglements[s]=n.entanglements[s]|1073741824|a&261930}function md(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var s=31-Ze(a),f=1<<s;f&r|n[s]&r&&(n[s]|=r),a&=~f}}function pd(n,r){var a=r&-r;return a=(a&42)!==0?1:po(a),(a&(n.suspendedLanes|r))!==0?0:a}function po(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function go(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function gd(){var n=ie.p;return n!==0?n:(n=window.event,n===void 0?32:tg(n.type))}function bd(n,r){var a=ie.p;try{return ie.p=n,r()}finally{ie.p=a}}var gr=Math.random().toString(36).slice(2),St="__reactFiber$"+gr,qt="__reactProps$"+gr,Ci="__reactContainer$"+gr,bo="__reactEvents$"+gr,oE="__reactListeners$"+gr,cE="__reactHandles$"+gr,yd="__reactResources$"+gr,Ia="__reactMarker$"+gr;function yo(n){delete n[St],delete n[qt],delete n[bo],delete n[oE],delete n[cE]}function _i(n){var r=n[St];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Ci]||a[St]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=P0(n);n!==null;){if(a=n[St])return a;n=P0(n)}return r}n=a,a=n.parentNode}return null}function Ni(n){if(n=n[St]||n[Ci]){var r=n.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return n}return null}function Ma(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(u(33))}function Oi(n){var r=n[yd];return r||(r=n[yd]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function vt(n){n[Ia]=!0}var Td=new Set,Ed={};function Xr(n,r){ki(n,r),ki(n+"Capture",r)}function ki(n,r){for(Ed[n]=r,n=0;n<r.length;n++)Td.add(r[n])}var fE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vd={},Ad={};function hE(n){return xi.call(Ad,n)?!0:xi.call(vd,n)?!1:fE.test(n)?Ad[n]=!0:(vd[n]=!0,!1)}function hs(n,r,a){if(hE(r))if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var s=r.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+a)}}function ds(n,r,a){if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+a)}}function Vn(n,r,a,s){if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(r,a,""+s)}}function dn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function wd(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function dE(n,r,a){var s=Object.getOwnPropertyDescriptor(n.constructor.prototype,r);if(!n.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(T){a=""+T,m.call(this,T)}}),Object.defineProperty(n,r,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(T){a=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function To(n){if(!n._valueTracker){var r=wd(n)?"checked":"value";n._valueTracker=dE(n,r,""+n[r])}}function xd(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),s="";return n&&(s=wd(n)?n.checked?"true":"false":n.value),n=s,n!==a?(r.setValue(n),!0):!1}function ms(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var mE=/[\n"\\]/g;function mn(n){return n.replace(mE,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Eo(n,r,a,s,f,m,T,w){n.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.type=T:n.removeAttribute("type"),r!=null?T==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+dn(r)):n.value!==""+dn(r)&&(n.value=""+dn(r)):T!=="submit"&&T!=="reset"||n.removeAttribute("value"),r!=null?vo(n,T,dn(r)):a!=null?vo(n,T,dn(a)):s!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.name=""+dn(w):n.removeAttribute("name")}function Sd(n,r,a,s,f,m,T,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),r!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||r!=null)){To(n);return}a=a!=null?""+dn(a):"",r=r!=null?""+dn(r):a,w||r===n.value||(n.value=r),n.defaultValue=r}s=s??f,s=typeof s!="function"&&typeof s!="symbol"&&!!s,n.checked=w?n.checked:!!s,n.defaultChecked=!!s,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(n.name=T),To(n)}function vo(n,r,a){r==="number"&&ms(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Ri(n,r,a,s){if(n=n.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=r.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&s&&(n[a].defaultSelected=!0)}else{for(a=""+dn(a),r=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,s&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function Cd(n,r,a){if(r!=null&&(r=""+dn(r),r!==n.value&&(n.value=r),a==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=a!=null?""+dn(a):""}function _d(n,r,a,s){if(r==null){if(s!=null){if(a!=null)throw Error(u(92));if(se(s)){if(1<s.length)throw Error(u(93));s=s[0]}a=s}a==null&&(a=""),r=a}a=dn(r),n.defaultValue=a,s=n.textContent,s===a&&s!==""&&s!==null&&(n.value=s),To(n)}function Di(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var pE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nd(n,r,a){var s=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":s?n.setProperty(r,a):typeof a!="number"||a===0||pE.has(r)?r==="float"?n.cssFloat=a:n[r]=(""+a).trim():n[r]=a+"px"}function Od(n,r,a){if(r!=null&&typeof r!="object")throw Error(u(62));if(n=n.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||r!=null&&r.hasOwnProperty(s)||(s.indexOf("--")===0?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="");for(var f in r)s=r[f],r.hasOwnProperty(f)&&a[f]!==s&&Nd(n,f,s)}else for(var m in r)r.hasOwnProperty(m)&&Nd(n,m,r[m])}function Ao(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ps(n){return bE.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Gn(){}var wo=null;function xo(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Li=null,Ii=null;function kd(n){var r=Ni(n);if(r&&(n=r.stateNode)){var a=n[qt]||null;e:switch(n=r.stateNode,r.type){case"input":if(Eo(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var s=a[r];if(s!==n&&s.form===n.form){var f=s[qt]||null;if(!f)throw Error(u(90));Eo(s,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<a.length;r++)s=a[r],s.form===n.form&&xd(s)}break e;case"textarea":Cd(n,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&Ri(n,!!a.multiple,r,!1)}}}var So=!1;function Rd(n,r,a){if(So)return n(r,a);So=!0;try{var s=n(r);return s}finally{if(So=!1,(Li!==null||Ii!==null)&&(nl(),Li&&(r=Li,n=Ii,Ii=Li=null,kd(r),n)))for(r=0;r<n.length;r++)kd(n[r])}}function Ba(n,r){var a=n.stateNode;if(a===null)return null;var s=a[qt]||null;if(s===null)return null;a=s[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(n=n.type,s=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!s;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(u(231,r,typeof a));return a}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Co=!1;if(Qn)try{var Fa={};Object.defineProperty(Fa,"passive",{get:function(){Co=!0}}),window.addEventListener("test",Fa,Fa),window.removeEventListener("test",Fa,Fa)}catch{Co=!1}var br=null,_o=null,gs=null;function Dd(){if(gs)return gs;var n,r=_o,a=r.length,s,f="value"in br?br.value:br.textContent,m=f.length;for(n=0;n<a&&r[n]===f[n];n++);var T=a-n;for(s=1;s<=T&&r[a-s]===f[m-s];s++);return gs=f.slice(n,1<s?1-s:void 0)}function bs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ys(){return!0}function Ld(){return!1}function jt(n){function r(a,s,f,m,T){this._reactName=a,this._targetInst=f,this.type=s,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(a=n[w],this[w]=a?a(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ys:Ld,this.isPropagationStopped=Ld,this}return b(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ys)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ys)},persist:function(){},isPersistent:ys}),r}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ts=jt(Wr),Ua=b({},Wr,{view:0,detail:0}),yE=jt(Ua),No,Oo,Pa,Es=b({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ro,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Pa&&(Pa&&n.type==="mousemove"?(No=n.screenX-Pa.screenX,Oo=n.screenY-Pa.screenY):Oo=No=0,Pa=n),No)},movementY:function(n){return"movementY"in n?n.movementY:Oo}}),Id=jt(Es),TE=b({},Es,{dataTransfer:0}),EE=jt(TE),vE=b({},Ua,{relatedTarget:0}),ko=jt(vE),AE=b({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),wE=jt(AE),xE=b({},Wr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),SE=jt(xE),CE=b({},Wr,{data:0}),Md=jt(CE),_E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},OE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kE(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=OE[n])?!!r[n]:!1}function Ro(){return kE}var RE=b({},Ua,{key:function(n){if(n.key){var r=_E[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=bs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?NE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ro,charCode:function(n){return n.type==="keypress"?bs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),DE=jt(RE),LE=b({},Es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=jt(LE),IE=b({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ro}),ME=jt(IE),BE=b({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),FE=jt(BE),UE=b({},Es,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),PE=jt(UE),HE=b({},Wr,{newState:0,oldState:0}),zE=jt(HE),qE=[9,13,27,32],Do=Qn&&"CompositionEvent"in window,Ha=null;Qn&&"documentMode"in document&&(Ha=document.documentMode);var jE=Qn&&"TextEvent"in window&&!Ha,Fd=Qn&&(!Do||Ha&&8<Ha&&11>=Ha),Ud=" ",Pd=!1;function Hd(n,r){switch(n){case"keyup":return qE.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Mi=!1;function YE(n,r){switch(n){case"compositionend":return zd(r);case"keypress":return r.which!==32?null:(Pd=!0,Ud);case"textInput":return n=r.data,n===Ud&&Pd?null:n;default:return null}}function VE(n,r){if(Mi)return n==="compositionend"||!Do&&Hd(n,r)?(n=Dd(),gs=_o=br=null,Mi=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Fd&&r.locale!=="ko"?null:r.data;default:return null}}var GE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!GE[n.type]:r==="textarea"}function jd(n,r,a,s){Li?Ii?Ii.push(s):Ii=[s]:Li=s,r=ol(r,"onChange"),0<r.length&&(a=new Ts("onChange","change",null,a,s),n.push({event:a,listeners:r}))}var za=null,qa=null;function QE(n){S0(n,0)}function vs(n){var r=Ma(n);if(xd(r))return n}function Yd(n,r){if(n==="change")return r}var Vd=!1;if(Qn){var Lo;if(Qn){var Io="oninput"in document;if(!Io){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),Io=typeof Gd.oninput=="function"}Lo=Io}else Lo=!1;Vd=Lo&&(!document.documentMode||9<document.documentMode)}function Qd(){za&&(za.detachEvent("onpropertychange",Kd),qa=za=null)}function Kd(n){if(n.propertyName==="value"&&vs(qa)){var r=[];jd(r,qa,n,xo(n)),Rd(QE,r)}}function KE(n,r,a){n==="focusin"?(Qd(),za=r,qa=a,za.attachEvent("onpropertychange",Kd)):n==="focusout"&&Qd()}function XE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vs(qa)}function WE(n,r){if(n==="click")return vs(r)}function ZE(n,r){if(n==="input"||n==="change")return vs(r)}function JE(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var en=typeof Object.is=="function"?Object.is:JE;function ja(n,r){if(en(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),s=Object.keys(r);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var f=a[s];if(!xi.call(r,f)||!en(n[f],r[f]))return!1}return!0}function Xd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wd(n,r){var a=Xd(n);n=0;for(var s;a;){if(a.nodeType===3){if(s=n+a.textContent.length,n<=r&&s>=r)return{node:a,offset:r-n};n=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xd(a)}}function Zd(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Zd(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Jd(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=ms(n.document);r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=ms(n.document)}return r}function Mo(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var $E=Qn&&"documentMode"in document&&11>=document.documentMode,Bi=null,Bo=null,Ya=null,Fo=!1;function $d(n,r,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fo||Bi==null||Bi!==ms(s)||(s=Bi,"selectionStart"in s&&Mo(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ya&&ja(Ya,s)||(Ya=s,s=ol(Bo,"onSelect"),0<s.length&&(r=new Ts("onSelect","select",null,r,a),n.push({event:r,listeners:s}),r.target=Bi)))}function Zr(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Fi={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionrun:Zr("Transition","TransitionRun"),transitionstart:Zr("Transition","TransitionStart"),transitioncancel:Zr("Transition","TransitionCancel"),transitionend:Zr("Transition","TransitionEnd")},Uo={},em={};Qn&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete Fi.animationend.animation,delete Fi.animationiteration.animation,delete Fi.animationstart.animation),"TransitionEvent"in window||delete Fi.transitionend.transition);function Jr(n){if(Uo[n])return Uo[n];if(!Fi[n])return n;var r=Fi[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in em)return Uo[n]=r[a];return n}var tm=Jr("animationend"),nm=Jr("animationiteration"),rm=Jr("animationstart"),ev=Jr("transitionrun"),tv=Jr("transitionstart"),nv=Jr("transitioncancel"),im=Jr("transitionend"),am=new Map,Po="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Po.push("scrollEnd");function Cn(n,r){am.set(n,r),Xr(r,[n])}var As=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},pn=[],Ui=0,Ho=0;function ws(){for(var n=Ui,r=Ho=Ui=0;r<n;){var a=pn[r];pn[r++]=null;var s=pn[r];pn[r++]=null;var f=pn[r];pn[r++]=null;var m=pn[r];if(pn[r++]=null,s!==null&&f!==null){var T=s.pending;T===null?f.next=f:(f.next=T.next,T.next=f),s.pending=f}m!==0&&um(a,f,m)}}function xs(n,r,a,s){pn[Ui++]=n,pn[Ui++]=r,pn[Ui++]=a,pn[Ui++]=s,Ho|=s,n.lanes|=s,n=n.alternate,n!==null&&(n.lanes|=s)}function zo(n,r,a,s){return xs(n,r,a,s),Ss(n)}function $r(n,r){return xs(n,null,null,r),Ss(n)}function um(n,r,a){n.lanes|=a;var s=n.alternate;s!==null&&(s.lanes|=a);for(var f=!1,m=n.return;m!==null;)m.childLanes|=a,s=m.alternate,s!==null&&(s.childLanes|=a),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&r!==null&&(f=31-Ze(a),n=m.hiddenUpdates,s=n[f],s===null?n[f]=[r]:s.push(r),r.lane=a|536870912),m):null}function Ss(n){if(50<hu)throw hu=0,Wc=null,Error(u(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var Pi={};function rv(n,r,a,s){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(n,r,a,s){return new rv(n,r,a,s)}function qo(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Kn(n,r){var a=n.alternate;return a===null?(a=tn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function sm(n,r){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,r=a.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Cs(n,r,a,s,f,m){var T=0;if(s=n,typeof n=="function")qo(n)&&(T=1);else if(typeof n=="string")T=l2(n,a,he.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case de:return n=tn(31,a,r,f),n.elementType=de,n.lanes=m,n;case _:return ei(a.children,f,m,r);case k:T=8,f|=24;break;case N:return n=tn(12,a,r,f|2),n.elementType=N,n.lanes=m,n;case ne:return n=tn(13,a,r,f),n.elementType=ne,n.lanes=m,n;case G:return n=tn(19,a,r,f),n.elementType=G,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case F:T=10;break e;case L:T=9;break e;case ee:T=11;break e;case le:T=14;break e;case ye:T=16,s=null;break e}T=29,a=Error(u(130,n===null?"null":typeof n,"")),s=null}return r=tn(T,a,r,f),r.elementType=n,r.type=s,r.lanes=m,r}function ei(n,r,a,s){return n=tn(7,n,s,r),n.lanes=a,n}function jo(n,r,a){return n=tn(6,n,null,r),n.lanes=a,n}function lm(n){var r=tn(18,null,null,0);return r.stateNode=n,r}function Yo(n,r,a){return r=tn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var om=new WeakMap;function gn(n,r){if(typeof n=="object"&&n!==null){var a=om.get(n);return a!==void 0?a:(r={value:n,source:r,stack:ss(r)},om.set(n,r),r)}return{value:n,source:r,stack:ss(r)}}var Hi=[],zi=0,_s=null,Va=0,bn=[],yn=0,yr=null,Ln=1,In="";function Xn(n,r){Hi[zi++]=Va,Hi[zi++]=_s,_s=n,Va=r}function cm(n,r,a){bn[yn++]=Ln,bn[yn++]=In,bn[yn++]=yr,yr=n;var s=Ln;n=In;var f=32-Ze(s)-1;s&=~(1<<f),a+=1;var m=32-Ze(r)+f;if(30<m){var T=f-f%5;m=(s&(1<<T)-1).toString(32),s>>=T,f-=T,Ln=1<<32-Ze(r)+f|a<<f|s,In=m+n}else Ln=1<<m|a<<f|s,In=n}function Vo(n){n.return!==null&&(Xn(n,1),cm(n,1,0))}function Go(n){for(;n===_s;)_s=Hi[--zi],Hi[zi]=null,Va=Hi[--zi],Hi[zi]=null;for(;n===yr;)yr=bn[--yn],bn[yn]=null,In=bn[--yn],bn[yn]=null,Ln=bn[--yn],bn[yn]=null}function fm(n,r){bn[yn++]=Ln,bn[yn++]=In,bn[yn++]=yr,Ln=r.id,In=r.overflow,yr=n}var Ct=null,tt=null,Pe=!1,Tr=null,Tn=!1,Qo=Error(u(519));function Er(n){var r=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ga(gn(r,n)),Qo}function hm(n){var r=n.stateNode,a=n.type,s=n.memoizedProps;switch(r[St]=n,r[qt]=s,a){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(a=0;a<mu.length;a++)Ie(mu[a],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Ie("invalid",r),Sd(r,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ie("invalid",r);break;case"textarea":Ie("invalid",r),_d(r,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||s.suppressHydrationWarning===!0||O0(r.textContent,a)?(s.popover!=null&&(Ie("beforetoggle",r),Ie("toggle",r)),s.onScroll!=null&&Ie("scroll",r),s.onScrollEnd!=null&&Ie("scrollend",r),s.onClick!=null&&(r.onclick=Gn),r=!0):r=!1,r||Er(n,!0)}function dm(n){for(Ct=n.return;Ct;)switch(Ct.tag){case 5:case 31:case 13:Tn=!1;return;case 27:case 3:Tn=!0;return;default:Ct=Ct.return}}function qi(n){if(n!==Ct)return!1;if(!Pe)return dm(n),Pe=!0,!1;var r=n.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||hf(n.type,n.memoizedProps)),a=!a),a&&tt&&Er(n),dm(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));tt=U0(n)}else if(r===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));tt=U0(n)}else r===27?(r=tt,Ir(n.type)?(n=bf,bf=null,tt=n):tt=r):tt=Ct?vn(n.stateNode.nextSibling):null;return!0}function ti(){tt=Ct=null,Pe=!1}function Ko(){var n=Tr;return n!==null&&(Qt===null?Qt=n:Qt.push.apply(Qt,n),Tr=null),n}function Ga(n){Tr===null?Tr=[n]:Tr.push(n)}var Xo=M(null),ni=null,Wn=null;function vr(n,r,a){S(Xo,r._currentValue),r._currentValue=a}function Zn(n){n._currentValue=Xo.current,W(Xo)}function Wo(n,r,a){for(;n!==null;){var s=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,s!==null&&(s.childLanes|=r)):s!==null&&(s.childLanes&r)!==r&&(s.childLanes|=r),n===a)break;n=n.return}}function Zo(n,r,a,s){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var T=f.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=f;for(var I=0;I<r.length;I++)if(w.context===r[I]){m.lanes|=a,w=m.alternate,w!==null&&(w.lanes|=a),Wo(m.return,a,n),s||(T=null);break e}m=w.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(u(341));T.lanes|=a,m=T.alternate,m!==null&&(m.lanes|=a),Wo(T,a,n),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===n){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function ji(n,r,a,s){n=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(u(387));if(T=T.memoizedProps,T!==null){var w=f.type;en(f.pendingProps.value,T.value)||(n!==null?n.push(w):n=[w])}}else if(f===Be.current){if(T=f.alternate,T===null)throw Error(u(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Tu):n=[Tu])}f=f.return}n!==null&&Zo(r,n,a,s),r.flags|=262144}function Ns(n){for(n=n.firstContext;n!==null;){if(!en(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ri(n){ni=n,Wn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function _t(n){return mm(ni,n)}function Os(n,r){return ni===null&&ri(n),mm(n,r)}function mm(n,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},Wn===null){if(n===null)throw Error(u(308));Wn=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Wn=Wn.next=r;return a}var iv=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(a,s){n.push(s)}};this.abort=function(){r.aborted=!0,n.forEach(function(a){return a()})}},av=e.unstable_scheduleCallback,uv=e.unstable_NormalPriority,ht={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jo(){return{controller:new iv,data:new Map,refCount:0}}function Qa(n){n.refCount--,n.refCount===0&&av(uv,function(){n.controller.abort()})}var Ka=null,$o=0,Yi=0,Vi=null;function sv(n,r){if(Ka===null){var a=Ka=[];$o=0,Yi=nf(),Vi={status:"pending",value:void 0,then:function(s){a.push(s)}}}return $o++,r.then(pm,pm),r}function pm(){if(--$o===0&&Ka!==null){Vi!==null&&(Vi.status="fulfilled");var n=Ka;Ka=null,Yi=0,Vi=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function lv(n,r){var a=[],s={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){s.status="fulfilled",s.value=r;for(var f=0;f<a.length;f++)(0,a[f])(r)},function(f){for(s.status="rejected",s.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),s}var gm=z.S;z.S=function(n,r){$p=Bt(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&sv(n,r),gm!==null&&gm(n,r)};var ii=M(null);function ec(){var n=ii.current;return n!==null?n:Je.pooledCache}function ks(n,r){r===null?S(ii,ii.current):S(ii,r.pool)}function bm(){var n=ec();return n===null?null:{parent:ht._currentValue,pool:n}}var Gi=Error(u(460)),tc=Error(u(474)),Rs=Error(u(542)),Ds={then:function(){}};function ym(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Tm(n,r,a){switch(a=n[a],a===void 0?n.push(r):a!==r&&(r.then(Gn,Gn),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,vm(n),n;default:if(typeof r.status=="string")r.then(Gn,Gn);else{if(n=Je,n!==null&&100<n.shellSuspendCounter)throw Error(u(482));n=r,n.status="pending",n.then(function(s){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=s}},function(s){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=s}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,vm(n),n}throw ui=r,Gi}}function ai(n){try{var r=n._init;return r(n._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ui=a,Gi):a}}var ui=null;function Em(){if(ui===null)throw Error(u(459));var n=ui;return ui=null,n}function vm(n){if(n===Gi||n===Rs)throw Error(u(483))}var Qi=null,Xa=0;function Ls(n){var r=Xa;return Xa+=1,Qi===null&&(Qi=[]),Tm(Qi,n,r)}function Wa(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Is(n,r){throw r.$$typeof===v?Error(u(525)):(n=Object.prototype.toString.call(r),Error(u(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function Am(n){function r(U,B){if(n){var q=U.deletions;q===null?(U.deletions=[B],U.flags|=16):q.push(B)}}function a(U,B){if(!n)return null;for(;B!==null;)r(U,B),B=B.sibling;return null}function s(U){for(var B=new Map;U!==null;)U.key!==null?B.set(U.key,U):B.set(U.index,U),U=U.sibling;return B}function f(U,B){return U=Kn(U,B),U.index=0,U.sibling=null,U}function m(U,B,q){return U.index=q,n?(q=U.alternate,q!==null?(q=q.index,q<B?(U.flags|=67108866,B):q):(U.flags|=67108866,B)):(U.flags|=1048576,B)}function T(U){return n&&U.alternate===null&&(U.flags|=67108866),U}function w(U,B,q,J){return B===null||B.tag!==6?(B=jo(q,U.mode,J),B.return=U,B):(B=f(B,q),B.return=U,B)}function I(U,B,q,J){var ve=q.type;return ve===_?X(U,B,q.props.children,J,q.key):B!==null&&(B.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===ye&&ai(ve)===B.type)?(B=f(B,q.props),Wa(B,q),B.return=U,B):(B=Cs(q.type,q.key,q.props,null,U.mode,J),Wa(B,q),B.return=U,B)}function j(U,B,q,J){return B===null||B.tag!==4||B.stateNode.containerInfo!==q.containerInfo||B.stateNode.implementation!==q.implementation?(B=Yo(q,U.mode,J),B.return=U,B):(B=f(B,q.children||[]),B.return=U,B)}function X(U,B,q,J,ve){return B===null||B.tag!==7?(B=ei(q,U.mode,J,ve),B.return=U,B):(B=f(B,q),B.return=U,B)}function $(U,B,q){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=jo(""+B,U.mode,q),B.return=U,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case E:return q=Cs(B.type,B.key,B.props,null,U.mode,q),Wa(q,B),q.return=U,q;case A:return B=Yo(B,U.mode,q),B.return=U,B;case ye:return B=ai(B),$(U,B,q)}if(se(B)||fe(B))return B=ei(B,U.mode,q,null),B.return=U,B;if(typeof B.then=="function")return $(U,Ls(B),q);if(B.$$typeof===F)return $(U,Os(U,B),q);Is(U,B)}return null}function V(U,B,q,J){var ve=B!==null?B.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return ve!==null?null:w(U,B,""+q,J);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case E:return q.key===ve?I(U,B,q,J):null;case A:return q.key===ve?j(U,B,q,J):null;case ye:return q=ai(q),V(U,B,q,J)}if(se(q)||fe(q))return ve!==null?null:X(U,B,q,J,null);if(typeof q.then=="function")return V(U,B,Ls(q),J);if(q.$$typeof===F)return V(U,B,Os(U,q),J);Is(U,q)}return null}function Q(U,B,q,J,ve){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return U=U.get(q)||null,w(B,U,""+J,ve);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case E:return U=U.get(J.key===null?q:J.key)||null,I(B,U,J,ve);case A:return U=U.get(J.key===null?q:J.key)||null,j(B,U,J,ve);case ye:return J=ai(J),Q(U,B,q,J,ve)}if(se(J)||fe(J))return U=U.get(q)||null,X(B,U,J,ve,null);if(typeof J.then=="function")return Q(U,B,q,Ls(J),ve);if(J.$$typeof===F)return Q(U,B,q,Os(B,J),ve);Is(B,J)}return null}function pe(U,B,q,J){for(var ve=null,ze=null,ge=B,Ne=B=0,Ue=null;ge!==null&&Ne<q.length;Ne++){ge.index>Ne?(Ue=ge,ge=null):Ue=ge.sibling;var qe=V(U,ge,q[Ne],J);if(qe===null){ge===null&&(ge=Ue);break}n&&ge&&qe.alternate===null&&r(U,ge),B=m(qe,B,Ne),ze===null?ve=qe:ze.sibling=qe,ze=qe,ge=Ue}if(Ne===q.length)return a(U,ge),Pe&&Xn(U,Ne),ve;if(ge===null){for(;Ne<q.length;Ne++)ge=$(U,q[Ne],J),ge!==null&&(B=m(ge,B,Ne),ze===null?ve=ge:ze.sibling=ge,ze=ge);return Pe&&Xn(U,Ne),ve}for(ge=s(ge);Ne<q.length;Ne++)Ue=Q(ge,U,Ne,q[Ne],J),Ue!==null&&(n&&Ue.alternate!==null&&ge.delete(Ue.key===null?Ne:Ue.key),B=m(Ue,B,Ne),ze===null?ve=Ue:ze.sibling=Ue,ze=Ue);return n&&ge.forEach(function(Pr){return r(U,Pr)}),Pe&&Xn(U,Ne),ve}function we(U,B,q,J){if(q==null)throw Error(u(151));for(var ve=null,ze=null,ge=B,Ne=B=0,Ue=null,qe=q.next();ge!==null&&!qe.done;Ne++,qe=q.next()){ge.index>Ne?(Ue=ge,ge=null):Ue=ge.sibling;var Pr=V(U,ge,qe.value,J);if(Pr===null){ge===null&&(ge=Ue);break}n&&ge&&Pr.alternate===null&&r(U,ge),B=m(Pr,B,Ne),ze===null?ve=Pr:ze.sibling=Pr,ze=Pr,ge=Ue}if(qe.done)return a(U,ge),Pe&&Xn(U,Ne),ve;if(ge===null){for(;!qe.done;Ne++,qe=q.next())qe=$(U,qe.value,J),qe!==null&&(B=m(qe,B,Ne),ze===null?ve=qe:ze.sibling=qe,ze=qe);return Pe&&Xn(U,Ne),ve}for(ge=s(ge);!qe.done;Ne++,qe=q.next())qe=Q(ge,U,Ne,qe.value,J),qe!==null&&(n&&qe.alternate!==null&&ge.delete(qe.key===null?Ne:qe.key),B=m(qe,B,Ne),ze===null?ve=qe:ze.sibling=qe,ze=qe);return n&&ge.forEach(function(T2){return r(U,T2)}),Pe&&Xn(U,Ne),ve}function We(U,B,q,J){if(typeof q=="object"&&q!==null&&q.type===_&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case E:e:{for(var ve=q.key;B!==null;){if(B.key===ve){if(ve=q.type,ve===_){if(B.tag===7){a(U,B.sibling),J=f(B,q.props.children),J.return=U,U=J;break e}}else if(B.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===ye&&ai(ve)===B.type){a(U,B.sibling),J=f(B,q.props),Wa(J,q),J.return=U,U=J;break e}a(U,B);break}else r(U,B);B=B.sibling}q.type===_?(J=ei(q.props.children,U.mode,J,q.key),J.return=U,U=J):(J=Cs(q.type,q.key,q.props,null,U.mode,J),Wa(J,q),J.return=U,U=J)}return T(U);case A:e:{for(ve=q.key;B!==null;){if(B.key===ve)if(B.tag===4&&B.stateNode.containerInfo===q.containerInfo&&B.stateNode.implementation===q.implementation){a(U,B.sibling),J=f(B,q.children||[]),J.return=U,U=J;break e}else{a(U,B);break}else r(U,B);B=B.sibling}J=Yo(q,U.mode,J),J.return=U,U=J}return T(U);case ye:return q=ai(q),We(U,B,q,J)}if(se(q))return pe(U,B,q,J);if(fe(q)){if(ve=fe(q),typeof ve!="function")throw Error(u(150));return q=ve.call(q),we(U,B,q,J)}if(typeof q.then=="function")return We(U,B,Ls(q),J);if(q.$$typeof===F)return We(U,B,Os(U,q),J);Is(U,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,B!==null&&B.tag===6?(a(U,B.sibling),J=f(B,q),J.return=U,U=J):(a(U,B),J=jo(q,U.mode,J),J.return=U,U=J),T(U)):a(U,B)}return function(U,B,q,J){try{Xa=0;var ve=We(U,B,q,J);return Qi=null,ve}catch(ge){if(ge===Gi||ge===Rs)throw ge;var ze=tn(29,ge,null,U.mode);return ze.lanes=J,ze.return=U,ze}}}var si=Am(!0),wm=Am(!1),Ar=!1;function nc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rc(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function wr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function xr(n,r,a){var s=n.updateQueue;if(s===null)return null;if(s=s.shared,(je&2)!==0){var f=s.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),s.pending=r,r=Ss(n),um(n,null,a),r}return xs(n,s,r,a),Ss(n)}function Za(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var s=r.lanes;s&=n.pendingLanes,a|=s,r.lanes=a,md(n,a)}}function ic(n,r){var a=n.updateQueue,s=n.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?f=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?f=m=r:m=m.next=r}else f=m=r;a={baseState:s.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:s.shared,callbacks:s.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}var ac=!1;function Ja(){if(ac){var n=Vi;if(n!==null)throw n}}function $a(n,r,a,s){ac=!1;var f=n.updateQueue;Ar=!1;var m=f.firstBaseUpdate,T=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var I=w,j=I.next;I.next=null,T===null?m=j:T.next=j,T=I;var X=n.alternate;X!==null&&(X=X.updateQueue,w=X.lastBaseUpdate,w!==T&&(w===null?X.firstBaseUpdate=j:w.next=j,X.lastBaseUpdate=I))}if(m!==null){var $=f.baseState;T=0,X=j=I=null,w=m;do{var V=w.lane&-536870913,Q=V!==w.lane;if(Q?(Fe&V)===V:(s&V)===V){V!==0&&V===Yi&&(ac=!0),X!==null&&(X=X.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var pe=n,we=w;V=r;var We=a;switch(we.tag){case 1:if(pe=we.payload,typeof pe=="function"){$=pe.call(We,$,V);break e}$=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=we.payload,V=typeof pe=="function"?pe.call(We,$,V):pe,V==null)break e;$=b({},$,V);break e;case 2:Ar=!0}}V=w.callback,V!==null&&(n.flags|=64,Q&&(n.flags|=8192),Q=f.callbacks,Q===null?f.callbacks=[V]:Q.push(V))}else Q={lane:V,tag:w.tag,payload:w.payload,callback:w.callback,next:null},X===null?(j=X=Q,I=$):X=X.next=Q,T|=V;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;Q=w,w=Q.next,Q.next=null,f.lastBaseUpdate=Q,f.shared.pending=null}}while(!0);X===null&&(I=$),f.baseState=I,f.firstBaseUpdate=j,f.lastBaseUpdate=X,m===null&&(f.shared.lanes=0),Or|=T,n.lanes=T,n.memoizedState=$}}function xm(n,r){if(typeof n!="function")throw Error(u(191,n));n.call(r)}function Sm(n,r){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)xm(a[n],r)}var Ki=M(null),Ms=M(0);function Cm(n,r){n=ur,S(Ms,n),S(Ki,r),ur=n|r.baseLanes}function uc(){S(Ms,ur),S(Ki,Ki.current)}function sc(){ur=Ms.current,W(Ki),W(Ms)}var nn=M(null),En=null;function Sr(n){var r=n.alternate;S(ot,ot.current&1),S(nn,n),En===null&&(r===null||Ki.current!==null||r.memoizedState!==null)&&(En=n)}function lc(n){S(ot,ot.current),S(nn,n),En===null&&(En=n)}function _m(n){n.tag===22?(S(ot,ot.current),S(nn,n),En===null&&(En=n)):Cr()}function Cr(){S(ot,ot.current),S(nn,nn.current)}function rn(n){W(nn),En===n&&(En=null),W(ot)}var ot=M(0);function Bs(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||pf(a)||gf(a)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Jn=0,_e=null,Ke=null,dt=null,Fs=!1,Xi=!1,li=!1,Us=0,eu=0,Wi=null,ov=0;function st(){throw Error(u(321))}function oc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!en(n[a],r[a]))return!1;return!0}function cc(n,r,a,s,f,m){return Jn=m,_e=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,z.H=n===null||n.memoizedState===null?cp:Sc,li=!1,m=a(s,f),li=!1,Xi&&(m=Om(r,a,s,f)),Nm(n),m}function Nm(n){z.H=ru;var r=Ke!==null&&Ke.next!==null;if(Jn=0,dt=Ke=_e=null,Fs=!1,eu=0,Wi=null,r)throw Error(u(300));n===null||mt||(n=n.dependencies,n!==null&&Ns(n)&&(mt=!0))}function Om(n,r,a,s){_e=n;var f=0;do{if(Xi&&(Wi=null),eu=0,Xi=!1,25<=f)throw Error(u(301));if(f+=1,dt=Ke=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=fp,m=r(a,s)}while(Xi);return m}function cv(){var n=z.H,r=n.useState()[0];return r=typeof r.then=="function"?tu(r):r,n=n.useState()[0],(Ke!==null?Ke.memoizedState:null)!==n&&(_e.flags|=1024),r}function fc(){var n=Us!==0;return Us=0,n}function hc(n,r,a){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~a}function dc(n){if(Fs){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Fs=!1}Jn=0,dt=Ke=_e=null,Xi=!1,eu=Us=0,Wi=null}function Ut(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?_e.memoizedState=dt=n:dt=dt.next=n,dt}function ct(){if(Ke===null){var n=_e.alternate;n=n!==null?n.memoizedState:null}else n=Ke.next;var r=dt===null?_e.memoizedState:dt.next;if(r!==null)dt=r,Ke=n;else{if(n===null)throw _e.alternate===null?Error(u(467)):Error(u(310));Ke=n,n={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},dt===null?_e.memoizedState=dt=n:dt=dt.next=n}return dt}function Ps(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tu(n){var r=eu;return eu+=1,Wi===null&&(Wi=[]),n=Tm(Wi,n,r),r=_e,(dt===null?r.memoizedState:dt.next)===null&&(r=r.alternate,z.H=r===null||r.memoizedState===null?cp:Sc),n}function Hs(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return tu(n);if(n.$$typeof===F)return _t(n)}throw Error(u(438,String(n)))}function mc(n){var r=null,a=_e.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(r={data:s.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=Ps(),_e.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(n),s=0;s<n;s++)a[s]=Y;return r.index++,a}function $n(n,r){return typeof r=="function"?r(n):r}function zs(n){var r=ct();return pc(r,Ke,n)}function pc(n,r,a){var s=n.queue;if(s===null)throw Error(u(311));s.lastRenderedReducer=a;var f=n.baseQueue,m=s.pending;if(m!==null){if(f!==null){var T=f.next;f.next=m.next,m.next=T}r.baseQueue=f=m,s.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{r=f.next;var w=T=null,I=null,j=r,X=!1;do{var $=j.lane&-536870913;if($!==j.lane?(Fe&$)===$:(Jn&$)===$){var V=j.revertLane;if(V===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),$===Yi&&(X=!0);else if((Jn&V)===V){j=j.next,V===Yi&&(X=!0);continue}else $={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(w=I=$,T=m):I=I.next=$,_e.lanes|=V,Or|=V;$=j.action,li&&a(m,$),m=j.hasEagerState?j.eagerState:a(m,$)}else V={lane:$,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(w=I=V,T=m):I=I.next=V,_e.lanes|=$,Or|=$;j=j.next}while(j!==null&&j!==r);if(I===null?T=m:I.next=w,!en(m,n.memoizedState)&&(mt=!0,X&&(a=Vi,a!==null)))throw a;n.memoizedState=m,n.baseState=T,n.baseQueue=I,s.lastRenderedState=m}return f===null&&(s.lanes=0),[n.memoizedState,s.dispatch]}function gc(n){var r=ct(),a=r.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var s=a.dispatch,f=a.pending,m=r.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do m=n(m,T.action),T=T.next;while(T!==f);en(m,r.memoizedState)||(mt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),a.lastRenderedState=m}return[m,s]}function km(n,r,a){var s=_e,f=ct(),m=Pe;if(m){if(a===void 0)throw Error(u(407));a=a()}else a=r();var T=!en((Ke||f).memoizedState,a);if(T&&(f.memoizedState=a,mt=!0),f=f.queue,Tc(Lm.bind(null,s,f,n),[n]),f.getSnapshot!==r||T||dt!==null&&dt.memoizedState.tag&1){if(s.flags|=2048,Zi(9,{destroy:void 0},Dm.bind(null,s,f,a,r),null),Je===null)throw Error(u(349));m||(Jn&127)!==0||Rm(s,r,a)}return a}function Rm(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=_e.updateQueue,r===null?(r=Ps(),_e.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Dm(n,r,a,s){r.value=a,r.getSnapshot=s,Im(r)&&Mm(n)}function Lm(n,r,a){return a(function(){Im(r)&&Mm(n)})}function Im(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!en(n,a)}catch{return!0}}function Mm(n){var r=$r(n,2);r!==null&&Kt(r,n,2)}function bc(n){var r=Ut();if(typeof n=="function"){var a=n;if(n=a(),li){zt(!0);try{a()}finally{zt(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:n},r}function Bm(n,r,a,s){return n.baseState=a,pc(n,Ke,typeof s=="function"?s:$n)}function fv(n,r,a,s,f){if(Ys(n))throw Error(u(485));if(n=r.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};z.T!==null?a(!0):m.isTransition=!1,s(m),a=r.pending,a===null?(m.next=r.pending=m,Fm(r,m)):(m.next=a.next,r.pending=a.next=m)}}function Fm(n,r){var a=r.action,s=r.payload,f=n.state;if(r.isTransition){var m=z.T,T={};z.T=T;try{var w=a(f,s),I=z.S;I!==null&&I(T,w),Um(n,r,w)}catch(j){yc(n,r,j)}finally{m!==null&&T.types!==null&&(m.types=T.types),z.T=m}}else try{m=a(f,s),Um(n,r,m)}catch(j){yc(n,r,j)}}function Um(n,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Pm(n,r,s)},function(s){return yc(n,r,s)}):Pm(n,r,a)}function Pm(n,r,a){r.status="fulfilled",r.value=a,Hm(r),n.state=a,r=n.pending,r!==null&&(a=r.next,a===r?n.pending=null:(a=a.next,r.next=a,Fm(n,a)))}function yc(n,r,a){var s=n.pending;if(n.pending=null,s!==null){s=s.next;do r.status="rejected",r.reason=a,Hm(r),r=r.next;while(r!==s)}n.action=null}function Hm(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function zm(n,r){return r}function qm(n,r){if(Pe){var a=Je.formState;if(a!==null){e:{var s=_e;if(Pe){if(tt){t:{for(var f=tt,m=Tn;f.nodeType!==8;){if(!m){f=null;break t}if(f=vn(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){tt=vn(f.nextSibling),s=f.data==="F!";break e}}Er(s)}s=!1}s&&(r=a[0])}}return a=Ut(),a.memoizedState=a.baseState=r,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zm,lastRenderedState:r},a.queue=s,a=sp.bind(null,_e,s),s.dispatch=a,s=bc(!1),m=xc.bind(null,_e,!1,s.queue),s=Ut(),f={state:r,dispatch:null,action:n,pending:null},s.queue=f,a=fv.bind(null,_e,f,m,a),f.dispatch=a,s.memoizedState=n,[r,a,!1]}function jm(n){var r=ct();return Ym(r,Ke,n)}function Ym(n,r,a){if(r=pc(n,r,zm)[0],n=zs($n)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var s=tu(r)}catch(T){throw T===Gi?Rs:T}else s=r;r=ct();var f=r.queue,m=f.dispatch;return a!==r.memoizedState&&(_e.flags|=2048,Zi(9,{destroy:void 0},hv.bind(null,f,a),null)),[s,m,n]}function hv(n,r){n.action=r}function Vm(n){var r=ct(),a=Ke;if(a!==null)return Ym(r,a,n);ct(),r=r.memoizedState,a=ct();var s=a.queue.dispatch;return a.memoizedState=n,[r,s,!1]}function Zi(n,r,a,s){return n={tag:n,create:a,deps:s,inst:r,next:null},r=_e.updateQueue,r===null&&(r=Ps(),_e.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=n.next=n:(s=a.next,a.next=n,n.next=s,r.lastEffect=n),n}function Gm(){return ct().memoizedState}function qs(n,r,a,s){var f=Ut();_e.flags|=n,f.memoizedState=Zi(1|r,{destroy:void 0},a,s===void 0?null:s)}function js(n,r,a,s){var f=ct();s=s===void 0?null:s;var m=f.memoizedState.inst;Ke!==null&&s!==null&&oc(s,Ke.memoizedState.deps)?f.memoizedState=Zi(r,m,a,s):(_e.flags|=n,f.memoizedState=Zi(1|r,m,a,s))}function Qm(n,r){qs(8390656,8,n,r)}function Tc(n,r){js(2048,8,n,r)}function dv(n){_e.flags|=4;var r=_e.updateQueue;if(r===null)r=Ps(),_e.updateQueue=r,r.events=[n];else{var a=r.events;a===null?r.events=[n]:a.push(n)}}function Km(n){var r=ct().memoizedState;return dv({ref:r,nextImpl:n}),function(){if((je&2)!==0)throw Error(u(440));return r.impl.apply(void 0,arguments)}}function Xm(n,r){return js(4,2,n,r)}function Wm(n,r){return js(4,4,n,r)}function Zm(n,r){if(typeof r=="function"){n=n();var a=r(n);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Jm(n,r,a){a=a!=null?a.concat([n]):null,js(4,4,Zm.bind(null,r,n),a)}function Ec(){}function $m(n,r){var a=ct();r=r===void 0?null:r;var s=a.memoizedState;return r!==null&&oc(r,s[1])?s[0]:(a.memoizedState=[n,r],n)}function ep(n,r){var a=ct();r=r===void 0?null:r;var s=a.memoizedState;if(r!==null&&oc(r,s[1]))return s[0];if(s=n(),li){zt(!0);try{n()}finally{zt(!1)}}return a.memoizedState=[s,r],s}function vc(n,r,a){return a===void 0||(Jn&1073741824)!==0&&(Fe&261930)===0?n.memoizedState=r:(n.memoizedState=a,n=t0(),_e.lanes|=n,Or|=n,a)}function tp(n,r,a,s){return en(a,r)?a:Ki.current!==null?(n=vc(n,a,s),en(n,r)||(mt=!0),n):(Jn&42)===0||(Jn&1073741824)!==0&&(Fe&261930)===0?(mt=!0,n.memoizedState=a):(n=t0(),_e.lanes|=n,Or|=n,r)}function np(n,r,a,s,f){var m=ie.p;ie.p=m!==0&&8>m?m:8;var T=z.T,w={};z.T=w,xc(n,!1,r,a);try{var I=f(),j=z.S;if(j!==null&&j(w,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var X=lv(I,s);nu(n,r,X,sn(n))}else nu(n,r,s,sn(n))}catch($){nu(n,r,{then:function(){},status:"rejected",reason:$},sn())}finally{ie.p=m,T!==null&&w.types!==null&&(T.types=w.types),z.T=T}}function mv(){}function Ac(n,r,a,s){if(n.tag!==5)throw Error(u(476));var f=rp(n).queue;np(n,f,r,be,a===null?mv:function(){return ip(n),a(s)})}function rp(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:be,baseState:be,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:be},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:a},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function ip(n){var r=rp(n);r.next===null&&(r=n.alternate.memoizedState),nu(n,r.next.queue,{},sn())}function wc(){return _t(Tu)}function ap(){return ct().memoizedState}function up(){return ct().memoizedState}function pv(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var a=sn();n=wr(a);var s=xr(r,n,a);s!==null&&(Kt(s,r,a),Za(s,r,a)),r={cache:Jo()},n.payload=r;return}r=r.return}}function gv(n,r,a){var s=sn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ys(n)?lp(r,a):(a=zo(n,r,a,s),a!==null&&(Kt(a,n,s),op(a,r,s)))}function sp(n,r,a){var s=sn();nu(n,r,a,s)}function nu(n,r,a,s){var f={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ys(n))lp(r,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var T=r.lastRenderedState,w=m(T,a);if(f.hasEagerState=!0,f.eagerState=w,en(w,T))return xs(n,r,f,0),Je===null&&ws(),!1}catch{}if(a=zo(n,r,f,s),a!==null)return Kt(a,n,s),op(a,r,s),!0}return!1}function xc(n,r,a,s){if(s={lane:2,revertLane:nf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Ys(n)){if(r)throw Error(u(479))}else r=zo(n,a,s,2),r!==null&&Kt(r,n,2)}function Ys(n){var r=n.alternate;return n===_e||r!==null&&r===_e}function lp(n,r){Xi=Fs=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function op(n,r,a){if((a&4194048)!==0){var s=r.lanes;s&=n.pendingLanes,a|=s,r.lanes=a,md(n,a)}}var ru={readContext:_t,use:Hs,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st};ru.useEffectEvent=st;var cp={readContext:_t,use:Hs,useCallback:function(n,r){return Ut().memoizedState=[n,r===void 0?null:r],n},useContext:_t,useEffect:Qm,useImperativeHandle:function(n,r,a){a=a!=null?a.concat([n]):null,qs(4194308,4,Zm.bind(null,r,n),a)},useLayoutEffect:function(n,r){return qs(4194308,4,n,r)},useInsertionEffect:function(n,r){qs(4,2,n,r)},useMemo:function(n,r){var a=Ut();r=r===void 0?null:r;var s=n();if(li){zt(!0);try{n()}finally{zt(!1)}}return a.memoizedState=[s,r],s},useReducer:function(n,r,a){var s=Ut();if(a!==void 0){var f=a(r);if(li){zt(!0);try{a(r)}finally{zt(!1)}}}else f=r;return s.memoizedState=s.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},s.queue=n,n=n.dispatch=gv.bind(null,_e,n),[s.memoizedState,n]},useRef:function(n){var r=Ut();return n={current:n},r.memoizedState=n},useState:function(n){n=bc(n);var r=n.queue,a=sp.bind(null,_e,r);return r.dispatch=a,[n.memoizedState,a]},useDebugValue:Ec,useDeferredValue:function(n,r){var a=Ut();return vc(a,n,r)},useTransition:function(){var n=bc(!1);return n=np.bind(null,_e,n.queue,!0,!1),Ut().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,a){var s=_e,f=Ut();if(Pe){if(a===void 0)throw Error(u(407));a=a()}else{if(a=r(),Je===null)throw Error(u(349));(Fe&127)!==0||Rm(s,r,a)}f.memoizedState=a;var m={value:a,getSnapshot:r};return f.queue=m,Qm(Lm.bind(null,s,m,n),[n]),s.flags|=2048,Zi(9,{destroy:void 0},Dm.bind(null,s,m,a,r),null),a},useId:function(){var n=Ut(),r=Je.identifierPrefix;if(Pe){var a=In,s=Ln;a=(s&~(1<<32-Ze(s)-1)).toString(32)+a,r="_"+r+"R_"+a,a=Us++,0<a&&(r+="H"+a.toString(32)),r+="_"}else a=ov++,r="_"+r+"r_"+a.toString(32)+"_";return n.memoizedState=r},useHostTransitionStatus:wc,useFormState:qm,useActionState:qm,useOptimistic:function(n){var r=Ut();r.memoizedState=r.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=xc.bind(null,_e,!0,a),a.dispatch=r,[n,r]},useMemoCache:mc,useCacheRefresh:function(){return Ut().memoizedState=pv.bind(null,_e)},useEffectEvent:function(n){var r=Ut(),a={impl:n};return r.memoizedState=a,function(){if((je&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Sc={readContext:_t,use:Hs,useCallback:$m,useContext:_t,useEffect:Tc,useImperativeHandle:Jm,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:ep,useReducer:zs,useRef:Gm,useState:function(){return zs($n)},useDebugValue:Ec,useDeferredValue:function(n,r){var a=ct();return tp(a,Ke.memoizedState,n,r)},useTransition:function(){var n=zs($n)[0],r=ct().memoizedState;return[typeof n=="boolean"?n:tu(n),r]},useSyncExternalStore:km,useId:ap,useHostTransitionStatus:wc,useFormState:jm,useActionState:jm,useOptimistic:function(n,r){var a=ct();return Bm(a,Ke,n,r)},useMemoCache:mc,useCacheRefresh:up};Sc.useEffectEvent=Km;var fp={readContext:_t,use:Hs,useCallback:$m,useContext:_t,useEffect:Tc,useImperativeHandle:Jm,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:ep,useReducer:gc,useRef:Gm,useState:function(){return gc($n)},useDebugValue:Ec,useDeferredValue:function(n,r){var a=ct();return Ke===null?vc(a,n,r):tp(a,Ke.memoizedState,n,r)},useTransition:function(){var n=gc($n)[0],r=ct().memoizedState;return[typeof n=="boolean"?n:tu(n),r]},useSyncExternalStore:km,useId:ap,useHostTransitionStatus:wc,useFormState:Vm,useActionState:Vm,useOptimistic:function(n,r){var a=ct();return Ke!==null?Bm(a,Ke,n,r):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:mc,useCacheRefresh:up};fp.useEffectEvent=Km;function Cc(n,r,a,s){r=n.memoizedState,a=a(s,r),a=a==null?r:b({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var _c={enqueueSetState:function(n,r,a){n=n._reactInternals;var s=sn(),f=wr(s);f.payload=r,a!=null&&(f.callback=a),r=xr(n,f,s),r!==null&&(Kt(r,n,s),Za(r,n,s))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var s=sn(),f=wr(s);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=xr(n,f,s),r!==null&&(Kt(r,n,s),Za(r,n,s))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=sn(),s=wr(a);s.tag=2,r!=null&&(s.callback=r),r=xr(n,s,a),r!==null&&(Kt(r,n,a),Za(r,n,a))}};function hp(n,r,a,s,f,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(s,m,T):r.prototype&&r.prototype.isPureReactComponent?!ja(a,s)||!ja(f,m):!0}function dp(n,r,a,s){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,s),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,s),r.state!==n&&_c.enqueueReplaceState(r,r.state,null)}function oi(n,r){var a=r;if("ref"in r){a={};for(var s in r)s!=="ref"&&(a[s]=r[s])}if(n=n.defaultProps){a===r&&(a=b({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}function mp(n){As(n)}function pp(n){console.error(n)}function gp(n){As(n)}function Vs(n,r){try{var a=n.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(s){setTimeout(function(){throw s})}}function bp(n,r,a){try{var s=n.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Nc(n,r,a){return a=wr(a),a.tag=3,a.payload={element:null},a.callback=function(){Vs(n,r)},a}function yp(n){return n=wr(n),n.tag=3,n}function Tp(n,r,a,s){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;n.payload=function(){return f(m)},n.callback=function(){bp(r,a,s)}}var T=a.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){bp(r,a,s),typeof f!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})})}function bv(n,r,a,s,f){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(r=a.alternate,r!==null&&ji(r,a,f,!0),a=nn.current,a!==null){switch(a.tag){case 31:case 13:return En===null?rl():a.alternate===null&&lt===0&&(lt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,s===Ds?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([s]):r.add(s),$c(n,s,f)),!1;case 22:return a.flags|=65536,s===Ds?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([s]):a.add(s)),$c(n,s,f)),!1}throw Error(u(435,a.tag))}return $c(n,s,f),rl(),!1}if(Pe)return r=nn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,s!==Qo&&(n=Error(u(422),{cause:s}),Ga(gn(n,a)))):(s!==Qo&&(r=Error(u(423),{cause:s}),Ga(gn(r,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,s=gn(s,a),f=Nc(n.stateNode,s,f),ic(n,f),lt!==4&&(lt=2)),!1;var m=Error(u(520),{cause:s});if(m=gn(m,a),fu===null?fu=[m]:fu.push(m),lt!==4&&(lt=2),r===null)return!0;s=gn(s,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=Nc(a.stateNode,s,n),ic(a,n),!1;case 1:if(r=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(kr===null||!kr.has(m))))return a.flags|=65536,f&=-f,a.lanes|=f,f=yp(f),Tp(f,n,a,s),ic(a,f),!1}a=a.return}while(a!==null);return!1}var Oc=Error(u(461)),mt=!1;function Nt(n,r,a,s){r.child=n===null?wm(r,null,a,s):si(r,n.child,a,s)}function Ep(n,r,a,s,f){a=a.render;var m=r.ref;if("ref"in s){var T={};for(var w in s)w!=="ref"&&(T[w]=s[w])}else T=s;return ri(r),s=cc(n,r,a,T,m,f),w=fc(),n!==null&&!mt?(hc(n,r,f),er(n,r,f)):(Pe&&w&&Vo(r),r.flags|=1,Nt(n,r,s,f),r.child)}function vp(n,r,a,s,f){if(n===null){var m=a.type;return typeof m=="function"&&!qo(m)&&m.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=m,Ap(n,r,m,s,f)):(n=Cs(a.type,null,s,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,!Fc(n,f)){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:ja,a(T,s)&&n.ref===r.ref)return er(n,r,f)}return r.flags|=1,n=Kn(m,s),n.ref=r.ref,n.return=r,r.child=n}function Ap(n,r,a,s,f){if(n!==null){var m=n.memoizedProps;if(ja(m,s)&&n.ref===r.ref)if(mt=!1,r.pendingProps=s=m,Fc(n,f))(n.flags&131072)!==0&&(mt=!0);else return r.lanes=n.lanes,er(n,r,f)}return kc(n,r,a,s,f)}function wp(n,r,a,s){var f=s.children,m=n!==null?n.memoizedState:null;if(n===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((r.flags&128)!==0){if(m=m!==null?m.baseLanes|a:a,n!==null){for(s=r.child=n.child,f=0;s!==null;)f=f|s.lanes|s.childLanes,s=s.sibling;s=f&~m}else s=0,r.child=null;return xp(n,r,m,a,s)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&ks(r,m!==null?m.cachePool:null),m!==null?Cm(r,m):uc(),_m(r);else return s=r.lanes=536870912,xp(n,r,m!==null?m.baseLanes|a:a,a,s)}else m!==null?(ks(r,m.cachePool),Cm(r,m),Cr(),r.memoizedState=null):(n!==null&&ks(r,null),uc(),Cr());return Nt(n,r,f,a),r.child}function iu(n,r){return n!==null&&n.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function xp(n,r,a,s,f){var m=ec();return m=m===null?null:{parent:ht._currentValue,pool:m},r.memoizedState={baseLanes:a,cachePool:m},n!==null&&ks(r,null),uc(),_m(r),n!==null&&ji(n,r,s,!0),r.childLanes=f,null}function Gs(n,r){return r=Ks({mode:r.mode,children:r.children},n.mode),r.ref=n.ref,n.child=r,r.return=n,r}function Sp(n,r,a){return si(r,n.child,null,a),n=Gs(r,r.pendingProps),n.flags|=2,rn(r),r.memoizedState=null,n}function yv(n,r,a){var s=r.pendingProps,f=(r.flags&128)!==0;if(r.flags&=-129,n===null){if(Pe){if(s.mode==="hidden")return n=Gs(r,s),r.lanes=536870912,iu(null,n);if(lc(r),(n=tt)?(n=F0(n,Tn),n=n!==null&&n.data==="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:yr!==null?{id:Ln,overflow:In}:null,retryLane:536870912,hydrationErrors:null},a=lm(n),a.return=r,r.child=a,Ct=r,tt=null)):n=null,n===null)throw Er(r);return r.lanes=536870912,null}return Gs(r,s)}var m=n.memoizedState;if(m!==null){var T=m.dehydrated;if(lc(r),f)if(r.flags&256)r.flags&=-257,r=Sp(n,r,a);else if(r.memoizedState!==null)r.child=n.child,r.flags|=128,r=null;else throw Error(u(558));else if(mt||ji(n,r,a,!1),f=(a&n.childLanes)!==0,mt||f){if(s=Je,s!==null&&(T=pd(s,a),T!==0&&T!==m.retryLane))throw m.retryLane=T,$r(n,T),Kt(s,n,T),Oc;rl(),r=Sp(n,r,a)}else n=m.treeContext,tt=vn(T.nextSibling),Ct=r,Pe=!0,Tr=null,Tn=!1,n!==null&&fm(r,n),r=Gs(r,s),r.flags|=4096;return r}return n=Kn(n.child,{mode:s.mode,children:s.children}),n.ref=r.ref,r.child=n,n.return=r,n}function Qs(n,r){var a=r.ref;if(a===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(n===null||n.ref!==a)&&(r.flags|=4194816)}}function kc(n,r,a,s,f){return ri(r),a=cc(n,r,a,s,void 0,f),s=fc(),n!==null&&!mt?(hc(n,r,f),er(n,r,f)):(Pe&&s&&Vo(r),r.flags|=1,Nt(n,r,a,f),r.child)}function Cp(n,r,a,s,f,m){return ri(r),r.updateQueue=null,a=Om(r,s,a,f),Nm(n),s=fc(),n!==null&&!mt?(hc(n,r,m),er(n,r,m)):(Pe&&s&&Vo(r),r.flags|=1,Nt(n,r,a,m),r.child)}function _p(n,r,a,s,f){if(ri(r),r.stateNode===null){var m=Pi,T=a.contextType;typeof T=="object"&&T!==null&&(m=_t(T)),m=new a(s,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=_c,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=s,m.state=r.memoizedState,m.refs={},nc(r),T=a.contextType,m.context=typeof T=="object"&&T!==null?_t(T):Pi,m.state=r.memoizedState,T=a.getDerivedStateFromProps,typeof T=="function"&&(Cc(r,a,T,s),m.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&_c.enqueueReplaceState(m,m.state,null),$a(r,s,m,f),Ja(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),s=!0}else if(n===null){m=r.stateNode;var w=r.memoizedProps,I=oi(a,w);m.props=I;var j=m.context,X=a.contextType;T=Pi,typeof X=="object"&&X!==null&&(T=_t(X));var $=a.getDerivedStateFromProps;X=typeof $=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=r.pendingProps!==w,X||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||j!==T)&&dp(r,m,s,T),Ar=!1;var V=r.memoizedState;m.state=V,$a(r,s,m,f),Ja(),j=r.memoizedState,w||V!==j||Ar?(typeof $=="function"&&(Cc(r,a,$,s),j=r.memoizedState),(I=Ar||hp(r,a,I,s,V,j,T))?(X||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=s,r.memoizedState=j),m.props=s,m.state=j,m.context=T,s=I):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),s=!1)}else{m=r.stateNode,rc(n,r),T=r.memoizedProps,X=oi(a,T),m.props=X,$=r.pendingProps,V=m.context,j=a.contextType,I=Pi,typeof j=="object"&&j!==null&&(I=_t(j)),w=a.getDerivedStateFromProps,(j=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==$||V!==I)&&dp(r,m,s,I),Ar=!1,V=r.memoizedState,m.state=V,$a(r,s,m,f),Ja();var Q=r.memoizedState;T!==$||V!==Q||Ar||n!==null&&n.dependencies!==null&&Ns(n.dependencies)?(typeof w=="function"&&(Cc(r,a,w,s),Q=r.memoizedState),(X=Ar||hp(r,a,X,s,V,Q,I)||n!==null&&n.dependencies!==null&&Ns(n.dependencies))?(j||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(s,Q,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(s,Q,I)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===n.memoizedProps&&V===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&V===n.memoizedState||(r.flags|=1024),r.memoizedProps=s,r.memoizedState=Q),m.props=s,m.state=Q,m.context=I,s=X):(typeof m.componentDidUpdate!="function"||T===n.memoizedProps&&V===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&V===n.memoizedState||(r.flags|=1024),s=!1)}return m=s,Qs(n,r),s=(r.flags&128)!==0,m||s?(m=r.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,n!==null&&s?(r.child=si(r,n.child,null,f),r.child=si(r,null,a,f)):Nt(n,r,a,f),r.memoizedState=m.state,n=r.child):n=er(n,r,f),n}function Np(n,r,a,s){return ti(),r.flags|=256,Nt(n,r,a,s),r.child}var Rc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dc(n){return{baseLanes:n,cachePool:bm()}}function Lc(n,r,a){return n=n!==null?n.childLanes&~a:0,r&&(n|=un),n}function Op(n,r,a){var s=r.pendingProps,f=!1,m=(r.flags&128)!==0,T;if((T=m)||(T=n!==null&&n.memoizedState===null?!1:(ot.current&2)!==0),T&&(f=!0,r.flags&=-129),T=(r.flags&32)!==0,r.flags&=-33,n===null){if(Pe){if(f?Sr(r):Cr(),(n=tt)?(n=F0(n,Tn),n=n!==null&&n.data!=="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:yr!==null?{id:Ln,overflow:In}:null,retryLane:536870912,hydrationErrors:null},a=lm(n),a.return=r,r.child=a,Ct=r,tt=null)):n=null,n===null)throw Er(r);return gf(n)?r.lanes=32:r.lanes=536870912,null}var w=s.children;return s=s.fallback,f?(Cr(),f=r.mode,w=Ks({mode:"hidden",children:w},f),s=ei(s,f,a,null),w.return=r,s.return=r,w.sibling=s,r.child=w,s=r.child,s.memoizedState=Dc(a),s.childLanes=Lc(n,T,a),r.memoizedState=Rc,iu(null,s)):(Sr(r),Ic(r,w))}var I=n.memoizedState;if(I!==null&&(w=I.dehydrated,w!==null)){if(m)r.flags&256?(Sr(r),r.flags&=-257,r=Mc(n,r,a)):r.memoizedState!==null?(Cr(),r.child=n.child,r.flags|=128,r=null):(Cr(),w=s.fallback,f=r.mode,s=Ks({mode:"visible",children:s.children},f),w=ei(w,f,a,null),w.flags|=2,s.return=r,w.return=r,s.sibling=w,r.child=s,si(r,n.child,null,a),s=r.child,s.memoizedState=Dc(a),s.childLanes=Lc(n,T,a),r.memoizedState=Rc,r=iu(null,s));else if(Sr(r),gf(w)){if(T=w.nextSibling&&w.nextSibling.dataset,T)var j=T.dgst;T=j,s=Error(u(419)),s.stack="",s.digest=T,Ga({value:s,source:null,stack:null}),r=Mc(n,r,a)}else if(mt||ji(n,r,a,!1),T=(a&n.childLanes)!==0,mt||T){if(T=Je,T!==null&&(s=pd(T,a),s!==0&&s!==I.retryLane))throw I.retryLane=s,$r(n,s),Kt(T,n,s),Oc;pf(w)||rl(),r=Mc(n,r,a)}else pf(w)?(r.flags|=192,r.child=n.child,r=null):(n=I.treeContext,tt=vn(w.nextSibling),Ct=r,Pe=!0,Tr=null,Tn=!1,n!==null&&fm(r,n),r=Ic(r,s.children),r.flags|=4096);return r}return f?(Cr(),w=s.fallback,f=r.mode,I=n.child,j=I.sibling,s=Kn(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,j!==null?w=Kn(j,w):(w=ei(w,f,a,null),w.flags|=2),w.return=r,s.return=r,s.sibling=w,r.child=s,iu(null,s),s=r.child,w=n.child.memoizedState,w===null?w=Dc(a):(f=w.cachePool,f!==null?(I=ht._currentValue,f=f.parent!==I?{parent:I,pool:I}:f):f=bm(),w={baseLanes:w.baseLanes|a,cachePool:f}),s.memoizedState=w,s.childLanes=Lc(n,T,a),r.memoizedState=Rc,iu(n.child,s)):(Sr(r),a=n.child,n=a.sibling,a=Kn(a,{mode:"visible",children:s.children}),a.return=r,a.sibling=null,n!==null&&(T=r.deletions,T===null?(r.deletions=[n],r.flags|=16):T.push(n)),r.child=a,r.memoizedState=null,a)}function Ic(n,r){return r=Ks({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Ks(n,r){return n=tn(22,n,null,r),n.lanes=0,n}function Mc(n,r,a){return si(r,n.child,null,a),n=Ic(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function kp(n,r,a){n.lanes|=r;var s=n.alternate;s!==null&&(s.lanes|=r),Wo(n.return,r,a)}function Bc(n,r,a,s,f,m){var T=n.memoizedState;T===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:f,treeForkCount:m}:(T.isBackwards=r,T.rendering=null,T.renderingStartTime=0,T.last=s,T.tail=a,T.tailMode=f,T.treeForkCount=m)}function Rp(n,r,a){var s=r.pendingProps,f=s.revealOrder,m=s.tail;s=s.children;var T=ot.current,w=(T&2)!==0;if(w?(T=T&1|2,r.flags|=128):T&=1,S(ot,T),Nt(n,r,s,a),s=Pe?Va:0,!w&&n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&kp(n,a,r);else if(n.tag===19)kp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(f){case"forwards":for(a=r.child,f=null;a!==null;)n=a.alternate,n!==null&&Bs(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),Bc(r,!1,f,a,m,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&Bs(n)===null){r.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Bc(r,!0,a,null,m,s);break;case"together":Bc(r,!1,null,null,void 0,s);break;default:r.memoizedState=null}return r.child}function er(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Or|=r.lanes,(a&r.childLanes)===0)if(n!==null){if(ji(n,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(u(153));if(r.child!==null){for(n=r.child,a=Kn(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Kn(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Fc(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Ns(n)))}function Tv(n,r,a){switch(r.tag){case 3:rt(r,r.stateNode.containerInfo),vr(r,ht,n.memoizedState.cache),ti();break;case 27:case 5:hn(r);break;case 4:rt(r,r.stateNode.containerInfo);break;case 10:vr(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,lc(r),null;break;case 13:var s=r.memoizedState;if(s!==null)return s.dehydrated!==null?(Sr(r),r.flags|=128,null):(a&r.child.childLanes)!==0?Op(n,r,a):(Sr(r),n=er(n,r,a),n!==null?n.sibling:null);Sr(r);break;case 19:var f=(n.flags&128)!==0;if(s=(a&r.childLanes)!==0,s||(ji(n,r,a,!1),s=(a&r.childLanes)!==0),f){if(s)return Rp(n,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),S(ot,ot.current),s)break;return null;case 22:return r.lanes=0,wp(n,r,a,r.pendingProps);case 24:vr(r,ht,n.memoizedState.cache)}return er(n,r,a)}function Dp(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps)mt=!0;else{if(!Fc(n,a)&&(r.flags&128)===0)return mt=!1,Tv(n,r,a);mt=(n.flags&131072)!==0}else mt=!1,Pe&&(r.flags&1048576)!==0&&cm(r,Va,r.index);switch(r.lanes=0,r.tag){case 16:e:{var s=r.pendingProps;if(n=ai(r.elementType),r.type=n,typeof n=="function")qo(n)?(s=oi(n,s),r.tag=1,r=_p(null,r,n,s,a)):(r.tag=0,r=kc(null,r,n,s,a));else{if(n!=null){var f=n.$$typeof;if(f===ee){r.tag=11,r=Ep(null,r,n,s,a);break e}else if(f===le){r.tag=14,r=vp(null,r,n,s,a);break e}}throw r=ae(n)||n,Error(u(306,r,""))}}return r;case 0:return kc(n,r,r.type,r.pendingProps,a);case 1:return s=r.type,f=oi(s,r.pendingProps),_p(n,r,s,f,a);case 3:e:{if(rt(r,r.stateNode.containerInfo),n===null)throw Error(u(387));s=r.pendingProps;var m=r.memoizedState;f=m.element,rc(n,r),$a(r,s,null,a);var T=r.memoizedState;if(s=T.cache,vr(r,ht,s),s!==m.cache&&Zo(r,[ht],a,!0),Ja(),s=T.element,m.isDehydrated)if(m={element:s,isDehydrated:!1,cache:T.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=Np(n,r,s,a);break e}else if(s!==f){f=gn(Error(u(424)),r),Ga(f),r=Np(n,r,s,a);break e}else for(n=r.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,tt=vn(n.firstChild),Ct=r,Pe=!0,Tr=null,Tn=!0,a=wm(r,null,s,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ti(),s===f){r=er(n,r,a);break e}Nt(n,r,s,a)}r=r.child}return r;case 26:return Qs(n,r),n===null?(a=j0(r.type,null,r.pendingProps,null))?r.memoizedState=a:Pe||(a=r.type,n=r.pendingProps,s=cl(Ee.current).createElement(a),s[St]=r,s[qt]=n,Ot(s,a,n),vt(s),r.stateNode=s):r.memoizedState=j0(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return hn(r),n===null&&Pe&&(s=r.stateNode=H0(r.type,r.pendingProps,Ee.current),Ct=r,Tn=!0,f=tt,Ir(r.type)?(bf=f,tt=vn(s.firstChild)):tt=f),Nt(n,r,r.pendingProps.children,a),Qs(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Pe&&((f=s=tt)&&(s=Xv(s,r.type,r.pendingProps,Tn),s!==null?(r.stateNode=s,Ct=r,tt=vn(s.firstChild),Tn=!1,f=!0):f=!1),f||Er(r)),hn(r),f=r.type,m=r.pendingProps,T=n!==null?n.memoizedProps:null,s=m.children,hf(f,m)?s=null:T!==null&&hf(f,T)&&(r.flags|=32),r.memoizedState!==null&&(f=cc(n,r,cv,null,null,a),Tu._currentValue=f),Qs(n,r),Nt(n,r,s,a),r.child;case 6:return n===null&&Pe&&((n=a=tt)&&(a=Wv(a,r.pendingProps,Tn),a!==null?(r.stateNode=a,Ct=r,tt=null,n=!0):n=!1),n||Er(r)),null;case 13:return Op(n,r,a);case 4:return rt(r,r.stateNode.containerInfo),s=r.pendingProps,n===null?r.child=si(r,null,s,a):Nt(n,r,s,a),r.child;case 11:return Ep(n,r,r.type,r.pendingProps,a);case 7:return Nt(n,r,r.pendingProps,a),r.child;case 8:return Nt(n,r,r.pendingProps.children,a),r.child;case 12:return Nt(n,r,r.pendingProps.children,a),r.child;case 10:return s=r.pendingProps,vr(r,r.type,s.value),Nt(n,r,s.children,a),r.child;case 9:return f=r.type._context,s=r.pendingProps.children,ri(r),f=_t(f),s=s(f),r.flags|=1,Nt(n,r,s,a),r.child;case 14:return vp(n,r,r.type,r.pendingProps,a);case 15:return Ap(n,r,r.type,r.pendingProps,a);case 19:return Rp(n,r,a);case 31:return yv(n,r,a);case 22:return wp(n,r,a,r.pendingProps);case 24:return ri(r),s=_t(ht),n===null?(f=ec(),f===null&&(f=Je,m=Jo(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=a),f=m),r.memoizedState={parent:s,cache:f},nc(r),vr(r,ht,f)):((n.lanes&a)!==0&&(rc(n,r),$a(r,null,null,a),Ja()),f=n.memoizedState,m=r.memoizedState,f.parent!==s?(f={parent:s,cache:s},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),vr(r,ht,s)):(s=m.cache,vr(r,ht,s),s!==f.cache&&Zo(r,[ht],a,!0))),Nt(n,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(u(156,r.tag))}function tr(n){n.flags|=4}function Uc(n,r,a,s,f){if((r=(n.mode&32)!==0)&&(r=!1),r){if(n.flags|=16777216,(f&335544128)===f)if(n.stateNode.complete)n.flags|=8192;else if(a0())n.flags|=8192;else throw ui=Ds,tc}else n.flags&=-16777217}function Lp(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!K0(r))if(a0())n.flags|=8192;else throw ui=Ds,tc}function Xs(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?hd():536870912,n.lanes|=r,ta|=r)}function au(n,r){if(!Pe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:s.sibling=null}}function nt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,s=0;if(r)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,s|=f.subtreeFlags&65011712,s|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,s|=f.subtreeFlags,s|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=s,n.childLanes=a,r}function Ev(n,r,a){var s=r.pendingProps;switch(Go(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(r),null;case 1:return nt(r),null;case 3:return a=r.stateNode,s=null,n!==null&&(s=n.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Zn(ht),Qe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(qi(r)?tr(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ko())),nt(r),null;case 26:var f=r.type,m=r.memoizedState;return n===null?(tr(r),m!==null?(nt(r),Lp(r,m)):(nt(r),Uc(r,f,null,s,a))):m?m!==n.memoizedState?(tr(r),nt(r),Lp(r,m)):(nt(r),r.flags&=-16777217):(n=n.memoizedProps,n!==s&&tr(r),nt(r),Uc(r,f,n,s,a)),null;case 27:if(qn(r),a=Ee.current,f=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==s&&tr(r);else{if(!s){if(r.stateNode===null)throw Error(u(166));return nt(r),null}n=he.current,qi(r)?hm(r):(n=H0(f,s,a),r.stateNode=n,tr(r))}return nt(r),null;case 5:if(qn(r),f=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==s&&tr(r);else{if(!s){if(r.stateNode===null)throw Error(u(166));return nt(r),null}if(m=he.current,qi(r))hm(r);else{var T=cl(Ee.current);switch(m){case 1:m=T.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=T.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=T.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=T.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=T.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof s.is=="string"?T.createElement("select",{is:s.is}):T.createElement("select"),s.multiple?m.multiple=!0:s.size&&(m.size=s.size);break;default:m=typeof s.is=="string"?T.createElement(f,{is:s.is}):T.createElement(f)}}m[St]=r,m[qt]=s;e:for(T=r.child;T!==null;){if(T.tag===5||T.tag===6)m.appendChild(T.stateNode);else if(T.tag!==4&&T.tag!==27&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===r)break e;for(;T.sibling===null;){if(T.return===null||T.return===r)break e;T=T.return}T.sibling.return=T.return,T=T.sibling}r.stateNode=m;e:switch(Ot(m,f,s),f){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&tr(r)}}return nt(r),Uc(r,r.type,n===null?null:n.memoizedProps,r.pendingProps,a),null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==s&&tr(r);else{if(typeof s!="string"&&r.stateNode===null)throw Error(u(166));if(n=Ee.current,qi(r)){if(n=r.stateNode,a=r.memoizedProps,s=null,f=Ct,f!==null)switch(f.tag){case 27:case 5:s=f.memoizedProps}n[St]=r,n=!!(n.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||O0(n.nodeValue,a)),n||Er(r,!0)}else n=cl(n).createTextNode(s),n[St]=r,r.stateNode=n}return nt(r),null;case 31:if(a=r.memoizedState,n===null||n.memoizedState!==null){if(s=qi(r),a!==null){if(n===null){if(!s)throw Error(u(318));if(n=r.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(557));n[St]=r}else ti(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;nt(r),n=!1}else a=Ko(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),n=!0;if(!n)return r.flags&256?(rn(r),r):(rn(r),null);if((r.flags&128)!==0)throw Error(u(558))}return nt(r),null;case 13:if(s=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=qi(r),s!==null&&s.dehydrated!==null){if(n===null){if(!f)throw Error(u(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(u(317));f[St]=r}else ti(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;nt(r),f=!1}else f=Ko(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(rn(r),r):(rn(r),null)}return rn(r),(r.flags&128)!==0?(r.lanes=a,r):(a=s!==null,n=n!==null&&n.memoizedState!==null,a&&(s=r.child,f=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(f=s.alternate.memoizedState.cachePool.pool),m=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(m=s.memoizedState.cachePool.pool),m!==f&&(s.flags|=2048)),a!==n&&a&&(r.child.flags|=8192),Xs(r,r.updateQueue),nt(r),null);case 4:return Qe(),n===null&&sf(r.stateNode.containerInfo),nt(r),null;case 10:return Zn(r.type),nt(r),null;case 19:if(W(ot),s=r.memoizedState,s===null)return nt(r),null;if(f=(r.flags&128)!==0,m=s.rendering,m===null)if(f)au(s,!1);else{if(lt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(m=Bs(n),m!==null){for(r.flags|=128,au(s,!1),n=m.updateQueue,r.updateQueue=n,Xs(r,n),r.subtreeFlags=0,n=a,a=r.child;a!==null;)sm(a,n),a=a.sibling;return S(ot,ot.current&1|2),Pe&&Xn(r,s.treeForkCount),r.child}n=n.sibling}s.tail!==null&&Bt()>el&&(r.flags|=128,f=!0,au(s,!1),r.lanes=4194304)}else{if(!f)if(n=Bs(m),n!==null){if(r.flags|=128,f=!0,n=n.updateQueue,r.updateQueue=n,Xs(r,n),au(s,!0),s.tail===null&&s.tailMode==="hidden"&&!m.alternate&&!Pe)return nt(r),null}else 2*Bt()-s.renderingStartTime>el&&a!==536870912&&(r.flags|=128,f=!0,au(s,!1),r.lanes=4194304);s.isBackwards?(m.sibling=r.child,r.child=m):(n=s.last,n!==null?n.sibling=m:r.child=m,s.last=m)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=Bt(),n.sibling=null,a=ot.current,S(ot,f?a&1|2:a&1),Pe&&Xn(r,s.treeForkCount),n):(nt(r),null);case 22:case 23:return rn(r),sc(),s=r.memoizedState!==null,n!==null?n.memoizedState!==null!==s&&(r.flags|=8192):s&&(r.flags|=8192),s?(a&536870912)!==0&&(r.flags&128)===0&&(nt(r),r.subtreeFlags&6&&(r.flags|=8192)):nt(r),a=r.updateQueue,a!==null&&Xs(r,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),s=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==a&&(r.flags|=2048),n!==null&&W(ii),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),Zn(ht),nt(r),null;case 25:return null;case 30:return null}throw Error(u(156,r.tag))}function vv(n,r){switch(Go(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Zn(ht),Qe(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return qn(r),null;case 31:if(r.memoizedState!==null){if(rn(r),r.alternate===null)throw Error(u(340));ti()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 13:if(rn(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(u(340));ti()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return W(ot),null;case 4:return Qe(),null;case 10:return Zn(r.type),null;case 22:case 23:return rn(r),sc(),n!==null&&W(ii),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Zn(ht),null;case 25:return null;default:return null}}function Ip(n,r){switch(Go(r),r.tag){case 3:Zn(ht),Qe();break;case 26:case 27:case 5:qn(r);break;case 4:Qe();break;case 31:r.memoizedState!==null&&rn(r);break;case 13:rn(r);break;case 19:W(ot);break;case 10:Zn(r.type);break;case 22:case 23:rn(r),sc(),n!==null&&W(ii);break;case 24:Zn(ht)}}function uu(n,r){try{var a=r.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var f=s.next;a=f;do{if((a.tag&n)===n){s=void 0;var m=a.create,T=a.inst;s=m(),T.destroy=s}a=a.next}while(a!==f)}}catch(w){Ge(r,r.return,w)}}function _r(n,r,a){try{var s=r.updateQueue,f=s!==null?s.lastEffect:null;if(f!==null){var m=f.next;s=m;do{if((s.tag&n)===n){var T=s.inst,w=T.destroy;if(w!==void 0){T.destroy=void 0,f=r;var I=a,j=w;try{j()}catch(X){Ge(f,I,X)}}}s=s.next}while(s!==m)}}catch(X){Ge(r,r.return,X)}}function Mp(n){var r=n.updateQueue;if(r!==null){var a=n.stateNode;try{Sm(r,a)}catch(s){Ge(n,n.return,s)}}}function Bp(n,r,a){a.props=oi(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(s){Ge(n,r,s)}}function su(n,r){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var s=n.stateNode;break;case 30:s=n.stateNode;break;default:s=n.stateNode}typeof a=="function"?n.refCleanup=a(s):a.current=s}}catch(f){Ge(n,r,f)}}function Mn(n,r){var a=n.ref,s=n.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(f){Ge(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){Ge(n,r,f)}else a.current=null}function Fp(n){var r=n.type,a=n.memoizedProps,s=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(f){Ge(n,n.return,f)}}function Pc(n,r,a){try{var s=n.stateNode;jv(s,n.type,a,r),s[qt]=r}catch(f){Ge(n,n.return,f)}}function Up(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ir(n.type)||n.tag===4}function Hc(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Up(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ir(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function zc(n,r,a){var s=n.tag;if(s===5||s===6)n=n.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(n),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Gn));else if(s!==4&&(s===27&&Ir(n.type)&&(a=n.stateNode,r=null),n=n.child,n!==null))for(zc(n,r,a),n=n.sibling;n!==null;)zc(n,r,a),n=n.sibling}function Ws(n,r,a){var s=n.tag;if(s===5||s===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(s!==4&&(s===27&&Ir(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(Ws(n,r,a),n=n.sibling;n!==null;)Ws(n,r,a),n=n.sibling}function Pp(n){var r=n.stateNode,a=n.memoizedProps;try{for(var s=n.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);Ot(r,s,a),r[St]=n,r[qt]=a}catch(m){Ge(n,n.return,m)}}var nr=!1,pt=!1,qc=!1,Hp=typeof WeakSet=="function"?WeakSet:Set,At=null;function Av(n,r){if(n=n.containerInfo,cf=bl,n=Jd(n),Mo(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var f=s.anchorOffset,m=s.focusNode;s=s.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,w=-1,I=-1,j=0,X=0,$=n,V=null;t:for(;;){for(var Q;$!==a||f!==0&&$.nodeType!==3||(w=T+f),$!==m||s!==0&&$.nodeType!==3||(I=T+s),$.nodeType===3&&(T+=$.nodeValue.length),(Q=$.firstChild)!==null;)V=$,$=Q;for(;;){if($===n)break t;if(V===a&&++j===f&&(w=T),V===m&&++X===s&&(I=T),(Q=$.nextSibling)!==null)break;$=V,V=$.parentNode}$=Q}a=w===-1||I===-1?null:{start:w,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(ff={focusedElem:n,selectionRange:a},bl=!1,At=r;At!==null;)if(r=At,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,At=n;else for(;At!==null;){switch(r=At,m=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(n=r.updateQueue,n=n!==null?n.events:null,n!==null))for(a=0;a<n.length;a++)f=n[a],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,a=r,f=m.memoizedProps,m=m.memoizedState,s=a.stateNode;try{var pe=oi(a.type,f);n=s.getSnapshotBeforeUpdate(pe,m),s.__reactInternalSnapshotBeforeUpdate=n}catch(we){Ge(a,a.return,we)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,a=n.nodeType,a===9)mf(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":mf(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(u(163))}if(n=r.sibling,n!==null){n.return=r.return,At=n;break}At=r.return}}function zp(n,r,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ir(n,a),s&4&&uu(5,a);break;case 1:if(ir(n,a),s&4)if(n=a.stateNode,r===null)try{n.componentDidMount()}catch(T){Ge(a,a.return,T)}else{var f=oi(a.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(T){Ge(a,a.return,T)}}s&64&&Mp(a),s&512&&su(a,a.return);break;case 3:if(ir(n,a),s&64&&(n=a.updateQueue,n!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{Sm(n,r)}catch(T){Ge(a,a.return,T)}}break;case 27:r===null&&s&4&&Pp(a);case 26:case 5:ir(n,a),r===null&&s&4&&Fp(a),s&512&&su(a,a.return);break;case 12:ir(n,a);break;case 31:ir(n,a),s&4&&Yp(n,a);break;case 13:ir(n,a),s&4&&Vp(n,a),s&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=Rv.bind(null,a),Zv(n,a))));break;case 22:if(s=a.memoizedState!==null||nr,!s){r=r!==null&&r.memoizedState!==null||pt,f=nr;var m=pt;nr=s,(pt=r)&&!m?ar(n,a,(a.subtreeFlags&8772)!==0):ir(n,a),nr=f,pt=m}break;case 30:break;default:ir(n,a)}}function qp(n){var r=n.alternate;r!==null&&(n.alternate=null,qp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&yo(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var it=null,Yt=!1;function rr(n,r,a){for(a=a.child;a!==null;)jp(n,r,a),a=a.sibling}function jp(n,r,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Ft,a)}catch{}switch(a.tag){case 26:pt||Mn(a,r),rr(n,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pt||Mn(a,r);var s=it,f=Yt;Ir(a.type)&&(it=a.stateNode,Yt=!1),rr(n,r,a),gu(a.stateNode),it=s,Yt=f;break;case 5:pt||Mn(a,r);case 6:if(s=it,f=Yt,it=null,rr(n,r,a),it=s,Yt=f,it!==null)if(Yt)try{(it.nodeType===9?it.body:it.nodeName==="HTML"?it.ownerDocument.body:it).removeChild(a.stateNode)}catch(m){Ge(a,r,m)}else try{it.removeChild(a.stateNode)}catch(m){Ge(a,r,m)}break;case 18:it!==null&&(Yt?(n=it,M0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),oa(n)):M0(it,a.stateNode));break;case 4:s=it,f=Yt,it=a.stateNode.containerInfo,Yt=!0,rr(n,r,a),it=s,Yt=f;break;case 0:case 11:case 14:case 15:_r(2,a,r),pt||_r(4,a,r),rr(n,r,a);break;case 1:pt||(Mn(a,r),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Bp(a,r,s)),rr(n,r,a);break;case 21:rr(n,r,a);break;case 22:pt=(s=pt)||a.memoizedState!==null,rr(n,r,a),pt=s;break;default:rr(n,r,a)}}function Yp(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{oa(n)}catch(a){Ge(r,r.return,a)}}}function Vp(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{oa(n)}catch(a){Ge(r,r.return,a)}}function wv(n){switch(n.tag){case 31:case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Hp),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Hp),r;default:throw Error(u(435,n.tag))}}function Zs(n,r){var a=wv(n);r.forEach(function(s){if(!a.has(s)){a.add(s);var f=Dv.bind(null,n,s);s.then(f,f)}})}function Vt(n,r){var a=r.deletions;if(a!==null)for(var s=0;s<a.length;s++){var f=a[s],m=n,T=r,w=T;e:for(;w!==null;){switch(w.tag){case 27:if(Ir(w.type)){it=w.stateNode,Yt=!1;break e}break;case 5:it=w.stateNode,Yt=!1;break e;case 3:case 4:it=w.stateNode.containerInfo,Yt=!0;break e}w=w.return}if(it===null)throw Error(u(160));jp(m,T,f),it=null,Yt=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)Gp(r,n),r=r.sibling}var _n=null;function Gp(n,r){var a=n.alternate,s=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Vt(r,n),Gt(n),s&4&&(_r(3,n,n.return),uu(3,n),_r(5,n,n.return));break;case 1:Vt(r,n),Gt(n),s&512&&(pt||a===null||Mn(a,a.return)),s&64&&nr&&(n=n.updateQueue,n!==null&&(s=n.callbacks,s!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var f=_n;if(Vt(r,n),Gt(n),s&512&&(pt||a===null||Mn(a,a.return)),s&4){var m=a!==null?a.memoizedState:null;if(s=n.memoizedState,a===null)if(s===null)if(n.stateNode===null){e:{s=n.type,a=n.memoizedProps,f=f.ownerDocument||f;t:switch(s){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ia]||m[St]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(s),f.head.insertBefore(m,f.querySelector("head > title"))),Ot(m,s,a),m[St]=n,vt(m),s=m;break e;case"link":var T=G0("link","href",f).get(s+(a.href||""));if(T){for(var w=0;w<T.length;w++)if(m=T[w],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){T.splice(w,1);break t}}m=f.createElement(s),Ot(m,s,a),f.head.appendChild(m);break;case"meta":if(T=G0("meta","content",f).get(s+(a.content||""))){for(w=0;w<T.length;w++)if(m=T[w],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){T.splice(w,1);break t}}m=f.createElement(s),Ot(m,s,a),f.head.appendChild(m);break;default:throw Error(u(468,s))}m[St]=n,vt(m),s=m}n.stateNode=s}else Q0(f,n.type,n.stateNode);else n.stateNode=V0(f,s,n.memoizedProps);else m!==s?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,s===null?Q0(f,n.type,n.stateNode):V0(f,s,n.memoizedProps)):s===null&&n.stateNode!==null&&Pc(n,n.memoizedProps,a.memoizedProps)}break;case 27:Vt(r,n),Gt(n),s&512&&(pt||a===null||Mn(a,a.return)),a!==null&&s&4&&Pc(n,n.memoizedProps,a.memoizedProps);break;case 5:if(Vt(r,n),Gt(n),s&512&&(pt||a===null||Mn(a,a.return)),n.flags&32){f=n.stateNode;try{Di(f,"")}catch(pe){Ge(n,n.return,pe)}}s&4&&n.stateNode!=null&&(f=n.memoizedProps,Pc(n,f,a!==null?a.memoizedProps:f)),s&1024&&(qc=!0);break;case 6:if(Vt(r,n),Gt(n),s&4){if(n.stateNode===null)throw Error(u(162));s=n.memoizedProps,a=n.stateNode;try{a.nodeValue=s}catch(pe){Ge(n,n.return,pe)}}break;case 3:if(dl=null,f=_n,_n=fl(r.containerInfo),Vt(r,n),_n=f,Gt(n),s&4&&a!==null&&a.memoizedState.isDehydrated)try{oa(r.containerInfo)}catch(pe){Ge(n,n.return,pe)}qc&&(qc=!1,Qp(n));break;case 4:s=_n,_n=fl(n.stateNode.containerInfo),Vt(r,n),Gt(n),_n=s;break;case 12:Vt(r,n),Gt(n);break;case 31:Vt(r,n),Gt(n),s&4&&(s=n.updateQueue,s!==null&&(n.updateQueue=null,Zs(n,s)));break;case 13:Vt(r,n),Gt(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($s=Bt()),s&4&&(s=n.updateQueue,s!==null&&(n.updateQueue=null,Zs(n,s)));break;case 22:f=n.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,j=nr,X=pt;if(nr=j||f,pt=X||I,Vt(r,n),pt=X,nr=j,Gt(n),s&8192)e:for(r=n.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(a===null||I||nr||pt||ci(n)),a=null,r=n;;){if(r.tag===5||r.tag===26){if(a===null){I=a=r;try{if(m=I.stateNode,f)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{w=I.stateNode;var $=I.memoizedProps.style,V=$!=null&&$.hasOwnProperty("display")?$.display:null;w.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(pe){Ge(I,I.return,pe)}}}else if(r.tag===6){if(a===null){I=r;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(pe){Ge(I,I.return,pe)}}}else if(r.tag===18){if(a===null){I=r;try{var Q=I.stateNode;f?B0(Q,!0):B0(I.stateNode,!1)}catch(pe){Ge(I,I.return,pe)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}s&4&&(s=n.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Zs(n,a))));break;case 19:Vt(r,n),Gt(n),s&4&&(s=n.updateQueue,s!==null&&(n.updateQueue=null,Zs(n,s)));break;case 30:break;case 21:break;default:Vt(r,n),Gt(n)}}function Gt(n){var r=n.flags;if(r&2){try{for(var a,s=n.return;s!==null;){if(Up(s)){a=s;break}s=s.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var f=a.stateNode,m=Hc(n);Ws(n,m,f);break;case 5:var T=a.stateNode;a.flags&32&&(Di(T,""),a.flags&=-33);var w=Hc(n);Ws(n,w,T);break;case 3:case 4:var I=a.stateNode.containerInfo,j=Hc(n);zc(n,j,I);break;default:throw Error(u(161))}}catch(X){Ge(n,n.return,X)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Qp(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Qp(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function ir(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)zp(n,r.alternate,r),r=r.sibling}function ci(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:_r(4,r,r.return),ci(r);break;case 1:Mn(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&Bp(r,r.return,a),ci(r);break;case 27:gu(r.stateNode);case 26:case 5:Mn(r,r.return),ci(r);break;case 22:r.memoizedState===null&&ci(r);break;case 30:ci(r);break;default:ci(r)}n=n.sibling}}function ar(n,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var s=r.alternate,f=n,m=r,T=m.flags;switch(m.tag){case 0:case 11:case 15:ar(f,m,a),uu(4,m);break;case 1:if(ar(f,m,a),s=m,f=s.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(j){Ge(s,s.return,j)}if(s=m,f=s.updateQueue,f!==null){var w=s.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)xm(I[f],w)}catch(j){Ge(s,s.return,j)}}a&&T&64&&Mp(m),su(m,m.return);break;case 27:Pp(m);case 26:case 5:ar(f,m,a),a&&s===null&&T&4&&Fp(m),su(m,m.return);break;case 12:ar(f,m,a);break;case 31:ar(f,m,a),a&&T&4&&Yp(f,m);break;case 13:ar(f,m,a),a&&T&4&&Vp(f,m);break;case 22:m.memoizedState===null&&ar(f,m,a),su(m,m.return);break;case 30:break;default:ar(f,m,a)}r=r.sibling}}function jc(n,r){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Qa(a))}function Yc(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Qa(n))}function Nn(n,r,a,s){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Kp(n,r,a,s),r=r.sibling}function Kp(n,r,a,s){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Nn(n,r,a,s),f&2048&&uu(9,r);break;case 1:Nn(n,r,a,s);break;case 3:Nn(n,r,a,s),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Qa(n)));break;case 12:if(f&2048){Nn(n,r,a,s),n=r.stateNode;try{var m=r.memoizedProps,T=m.id,w=m.onPostCommit;typeof w=="function"&&w(T,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){Ge(r,r.return,I)}}else Nn(n,r,a,s);break;case 31:Nn(n,r,a,s);break;case 13:Nn(n,r,a,s);break;case 23:break;case 22:m=r.stateNode,T=r.alternate,r.memoizedState!==null?m._visibility&2?Nn(n,r,a,s):lu(n,r):m._visibility&2?Nn(n,r,a,s):(m._visibility|=2,Ji(n,r,a,s,(r.subtreeFlags&10256)!==0||!1)),f&2048&&jc(T,r);break;case 24:Nn(n,r,a,s),f&2048&&Yc(r.alternate,r);break;default:Nn(n,r,a,s)}}function Ji(n,r,a,s,f){for(f=f&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var m=n,T=r,w=a,I=s,j=T.flags;switch(T.tag){case 0:case 11:case 15:Ji(m,T,w,I,f),uu(8,T);break;case 23:break;case 22:var X=T.stateNode;T.memoizedState!==null?X._visibility&2?Ji(m,T,w,I,f):lu(m,T):(X._visibility|=2,Ji(m,T,w,I,f)),f&&j&2048&&jc(T.alternate,T);break;case 24:Ji(m,T,w,I,f),f&&j&2048&&Yc(T.alternate,T);break;default:Ji(m,T,w,I,f)}r=r.sibling}}function lu(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=n,s=r,f=s.flags;switch(s.tag){case 22:lu(a,s),f&2048&&jc(s.alternate,s);break;case 24:lu(a,s),f&2048&&Yc(s.alternate,s);break;default:lu(a,s)}r=r.sibling}}var ou=8192;function $i(n,r,a){if(n.subtreeFlags&ou)for(n=n.child;n!==null;)Xp(n,r,a),n=n.sibling}function Xp(n,r,a){switch(n.tag){case 26:$i(n,r,a),n.flags&ou&&n.memoizedState!==null&&o2(a,_n,n.memoizedState,n.memoizedProps);break;case 5:$i(n,r,a);break;case 3:case 4:var s=_n;_n=fl(n.stateNode.containerInfo),$i(n,r,a),_n=s;break;case 22:n.memoizedState===null&&(s=n.alternate,s!==null&&s.memoizedState!==null?(s=ou,ou=16777216,$i(n,r,a),ou=s):$i(n,r,a));break;default:$i(n,r,a)}}function Wp(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function cu(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var s=r[a];At=s,Jp(s,n)}Wp(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zp(n),n=n.sibling}function Zp(n){switch(n.tag){case 0:case 11:case 15:cu(n),n.flags&2048&&_r(9,n,n.return);break;case 3:cu(n);break;case 12:cu(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Js(n)):cu(n);break;default:cu(n)}}function Js(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var s=r[a];At=s,Jp(s,n)}Wp(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:_r(8,r,r.return),Js(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,Js(r));break;default:Js(r)}n=n.sibling}}function Jp(n,r){for(;At!==null;){var a=At;switch(a.tag){case 0:case 11:case 15:_r(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qa(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,At=s;else e:for(a=n;At!==null;){s=At;var f=s.sibling,m=s.return;if(qp(s),s===a){At=null;break e}if(f!==null){f.return=m,At=f;break e}At=m}}}var xv={getCacheForType:function(n){var r=_t(ht),a=r.data.get(n);return a===void 0&&(a=n(),r.data.set(n,a)),a},cacheSignal:function(){return _t(ht).controller.signal}},Sv=typeof WeakMap=="function"?WeakMap:Map,je=0,Je=null,Le=null,Fe=0,Ve=0,an=null,Nr=!1,ea=!1,Vc=!1,ur=0,lt=0,Or=0,fi=0,Gc=0,un=0,ta=0,fu=null,Qt=null,Qc=!1,$s=0,$p=0,el=1/0,tl=null,kr=null,Tt=0,Rr=null,na=null,sr=0,Kc=0,Xc=null,e0=null,hu=0,Wc=null;function sn(){return(je&2)!==0&&Fe!==0?Fe&-Fe:z.T!==null?nf():gd()}function t0(){if(un===0)if((Fe&536870912)===0||Pe){var n=os;os<<=1,(os&3932160)===0&&(os=262144),un=n}else un=536870912;return n=nn.current,n!==null&&(n.flags|=32),un}function Kt(n,r,a){(n===Je&&(Ve===2||Ve===9)||n.cancelPendingCommit!==null)&&(ra(n,0),Dr(n,Fe,un,!1)),La(n,a),((je&2)===0||n!==Je)&&(n===Je&&((je&2)===0&&(fi|=a),lt===4&&Dr(n,Fe,un,!1)),Bn(n))}function n0(n,r,a){if((je&6)!==0)throw Error(u(327));var s=!a&&(r&127)===0&&(r&n.expiredLanes)===0||Da(n,r),f=s?Nv(n,r):Jc(n,r,!0),m=s;do{if(f===0){ea&&!s&&Dr(n,r,0,!1);break}else{if(a=n.current.alternate,m&&!Cv(a)){f=Jc(n,r,!1),m=!1;continue}if(f===2){if(m=r,n.errorRecoveryDisabledLanes&m)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){r=T;e:{var w=n;f=fu;var I=w.current.memoizedState.isDehydrated;if(I&&(ra(w,T).flags|=256),T=Jc(w,T,!1),T!==2){if(Vc&&!I){w.errorRecoveryDisabledLanes|=m,fi|=m,f=4;break e}m=Qt,Qt=f,m!==null&&(Qt===null?Qt=m:Qt.push.apply(Qt,m))}f=T}if(m=!1,f!==2)continue}}if(f===1){ra(n,0),Dr(n,r,0,!0);break}e:{switch(s=n,m=f,m){case 0:case 1:throw Error(u(345));case 4:if((r&4194048)!==r)break;case 6:Dr(s,r,un,!Nr);break e;case 2:Qt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((r&62914560)===r&&(f=$s+300-Bt(),10<f)){if(Dr(s,r,un,!Nr),fs(s,0,!0)!==0)break e;sr=r,s.timeoutHandle=L0(r0.bind(null,s,a,Qt,tl,Qc,r,un,fi,ta,Nr,m,"Throttled",-0,0),f);break e}r0(s,a,Qt,tl,Qc,r,un,fi,ta,Nr,m,null,-0,0)}}break}while(!0);Bn(n)}function r0(n,r,a,s,f,m,T,w,I,j,X,$,V,Q){if(n.timeoutHandle=-1,$=r.subtreeFlags,$&8192||($&16785408)===16785408){$={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gn},Xp(r,m,$);var pe=(m&62914560)===m?$s-Bt():(m&4194048)===m?$p-Bt():0;if(pe=c2($,pe),pe!==null){sr=m,n.cancelPendingCommit=pe(f0.bind(null,n,r,m,a,s,f,T,w,I,X,$,null,V,Q)),Dr(n,m,T,!j);return}}f0(n,r,m,a,s,f,T,w,I)}function Cv(n){for(var r=n;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var f=a[s],m=f.getSnapshot;f=f.value;try{if(!en(m(),f))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Dr(n,r,a,s){r&=~Gc,r&=~fi,n.suspendedLanes|=r,n.pingedLanes&=~r,s&&(n.warmLanes|=r),s=n.expirationTimes;for(var f=r;0<f;){var m=31-Ze(f),T=1<<m;s[m]=-1,f&=~T}a!==0&&dd(n,a,r)}function nl(){return(je&6)===0?(du(0),!1):!0}function Zc(){if(Le!==null){if(Ve===0)var n=Le.return;else n=Le,Wn=ni=null,dc(n),Qi=null,Xa=0,n=Le;for(;n!==null;)Ip(n.alternate,n),n=n.return;Le=null}}function ra(n,r){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,Gv(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),sr=0,Zc(),Je=n,Le=a=Kn(n.current,null),Fe=r,Ve=0,an=null,Nr=!1,ea=Da(n,r),Vc=!1,ta=un=Gc=fi=Or=lt=0,Qt=fu=null,Qc=!1,(r&8)!==0&&(r|=r&32);var s=n.entangledLanes;if(s!==0)for(n=n.entanglements,s&=r;0<s;){var f=31-Ze(s),m=1<<f;r|=n[f],s&=~m}return ur=r,ws(),a}function i0(n,r){_e=null,z.H=ru,r===Gi||r===Rs?(r=Em(),Ve=3):r===tc?(r=Em(),Ve=4):Ve=r===Oc?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,an=r,Le===null&&(lt=1,Vs(n,gn(r,n.current)))}function a0(){var n=nn.current;return n===null?!0:(Fe&4194048)===Fe?En===null:(Fe&62914560)===Fe||(Fe&536870912)!==0?n===En:!1}function u0(){var n=z.H;return z.H=ru,n===null?ru:n}function s0(){var n=z.A;return z.A=xv,n}function rl(){lt=4,Nr||(Fe&4194048)!==Fe&&nn.current!==null||(ea=!0),(Or&134217727)===0&&(fi&134217727)===0||Je===null||Dr(Je,Fe,un,!1)}function Jc(n,r,a){var s=je;je|=2;var f=u0(),m=s0();(Je!==n||Fe!==r)&&(tl=null,ra(n,r)),r=!1;var T=lt;e:do try{if(Ve!==0&&Le!==null){var w=Le,I=an;switch(Ve){case 8:Zc(),T=6;break e;case 3:case 2:case 9:case 6:nn.current===null&&(r=!0);var j=Ve;if(Ve=0,an=null,ia(n,w,I,j),a&&ea){T=0;break e}break;default:j=Ve,Ve=0,an=null,ia(n,w,I,j)}}_v(),T=lt;break}catch(X){i0(n,X)}while(!0);return r&&n.shellSuspendCounter++,Wn=ni=null,je=s,z.H=f,z.A=m,Le===null&&(Je=null,Fe=0,ws()),T}function _v(){for(;Le!==null;)l0(Le)}function Nv(n,r){var a=je;je|=2;var s=u0(),f=s0();Je!==n||Fe!==r?(tl=null,el=Bt()+500,ra(n,r)):ea=Da(n,r);e:do try{if(Ve!==0&&Le!==null){r=Le;var m=an;t:switch(Ve){case 1:Ve=0,an=null,ia(n,r,m,1);break;case 2:case 9:if(ym(m)){Ve=0,an=null,o0(r);break}r=function(){Ve!==2&&Ve!==9||Je!==n||(Ve=7),Bn(n)},m.then(r,r);break e;case 3:Ve=7;break e;case 4:Ve=5;break e;case 7:ym(m)?(Ve=0,an=null,o0(r)):(Ve=0,an=null,ia(n,r,m,7));break;case 5:var T=null;switch(Le.tag){case 26:T=Le.memoizedState;case 5:case 27:var w=Le;if(T?K0(T):w.stateNode.complete){Ve=0,an=null;var I=w.sibling;if(I!==null)Le=I;else{var j=w.return;j!==null?(Le=j,il(j)):Le=null}break t}}Ve=0,an=null,ia(n,r,m,5);break;case 6:Ve=0,an=null,ia(n,r,m,6);break;case 8:Zc(),lt=6;break e;default:throw Error(u(462))}}Ov();break}catch(X){i0(n,X)}while(!0);return Wn=ni=null,z.H=s,z.A=f,je=a,Le!==null?0:(Je=null,Fe=0,ws(),lt)}function Ov(){for(;Le!==null&&!co();)l0(Le)}function l0(n){var r=Dp(n.alternate,n,ur);n.memoizedProps=n.pendingProps,r===null?il(n):Le=r}function o0(n){var r=n,a=r.alternate;switch(r.tag){case 15:case 0:r=Cp(a,r,r.pendingProps,r.type,void 0,Fe);break;case 11:r=Cp(a,r,r.pendingProps,r.type.render,r.ref,Fe);break;case 5:dc(r);default:Ip(a,r),r=Le=sm(r,ur),r=Dp(a,r,ur)}n.memoizedProps=n.pendingProps,r===null?il(n):Le=r}function ia(n,r,a,s){Wn=ni=null,dc(r),Qi=null,Xa=0;var f=r.return;try{if(bv(n,f,r,a,Fe)){lt=1,Vs(n,gn(a,n.current)),Le=null;return}}catch(m){if(f!==null)throw Le=f,m;lt=1,Vs(n,gn(a,n.current)),Le=null;return}r.flags&32768?(Pe||s===1?n=!0:ea||(Fe&536870912)!==0?n=!1:(Nr=n=!0,(s===2||s===9||s===3||s===6)&&(s=nn.current,s!==null&&s.tag===13&&(s.flags|=16384))),c0(r,n)):il(r)}function il(n){var r=n;do{if((r.flags&32768)!==0){c0(r,Nr);return}n=r.return;var a=Ev(r.alternate,r,ur);if(a!==null){Le=a;return}if(r=r.sibling,r!==null){Le=r;return}Le=r=n}while(r!==null);lt===0&&(lt=5)}function c0(n,r){do{var a=vv(n.alternate,n);if(a!==null){a.flags&=32767,Le=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(n=n.sibling,n!==null)){Le=n;return}Le=n=a}while(n!==null);lt=6,Le=null}function f0(n,r,a,s,f,m,T,w,I){n.cancelPendingCommit=null;do al();while(Tt!==0);if((je&6)!==0)throw Error(u(327));if(r!==null){if(r===n.current)throw Error(u(177));if(m=r.lanes|r.childLanes,m|=Ho,lE(n,a,m,T,w,I),n===Je&&(Le=Je=null,Fe=0),na=r,Rr=n,sr=a,Kc=m,Xc=f,e0=s,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Lv(Se,function(){return g0(),null})):(n.callbackNode=null,n.callbackPriority=0),s=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,f=ie.p,ie.p=2,T=je,je|=4;try{Av(n,r,a)}finally{je=T,ie.p=f,z.T=s}}Tt=1,h0(),d0(),m0()}}function h0(){if(Tt===1){Tt=0;var n=Rr,r=na,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=ie.p;ie.p=2;var f=je;je|=4;try{Gp(r,n);var m=ff,T=Jd(n.containerInfo),w=m.focusedElem,I=m.selectionRange;if(T!==w&&w&&w.ownerDocument&&Zd(w.ownerDocument.documentElement,w)){if(I!==null&&Mo(w)){var j=I.start,X=I.end;if(X===void 0&&(X=j),"selectionStart"in w)w.selectionStart=j,w.selectionEnd=Math.min(X,w.value.length);else{var $=w.ownerDocument||document,V=$&&$.defaultView||window;if(V.getSelection){var Q=V.getSelection(),pe=w.textContent.length,we=Math.min(I.start,pe),We=I.end===void 0?we:Math.min(I.end,pe);!Q.extend&&we>We&&(T=We,We=we,we=T);var U=Wd(w,we),B=Wd(w,We);if(U&&B&&(Q.rangeCount!==1||Q.anchorNode!==U.node||Q.anchorOffset!==U.offset||Q.focusNode!==B.node||Q.focusOffset!==B.offset)){var q=$.createRange();q.setStart(U.node,U.offset),Q.removeAllRanges(),we>We?(Q.addRange(q),Q.extend(B.node,B.offset)):(q.setEnd(B.node,B.offset),Q.addRange(q))}}}}for($=[],Q=w;Q=Q.parentNode;)Q.nodeType===1&&$.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<$.length;w++){var J=$[w];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}bl=!!cf,ff=cf=null}finally{je=f,ie.p=s,z.T=a}}n.current=r,Tt=2}}function d0(){if(Tt===2){Tt=0;var n=Rr,r=na,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=ie.p;ie.p=2;var f=je;je|=4;try{zp(n,r.alternate,r)}finally{je=f,ie.p=s,z.T=a}}Tt=3}}function m0(){if(Tt===4||Tt===3){Tt=0,fo();var n=Rr,r=na,a=sr,s=e0;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Tt=5:(Tt=0,na=Rr=null,p0(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(kr=null),go(a),r=r.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Ft,r,void 0,(r.current.flags&128)===128)}catch{}if(s!==null){r=z.T,f=ie.p,ie.p=2,z.T=null;try{for(var m=n.onRecoverableError,T=0;T<s.length;T++){var w=s[T];m(w.value,{componentStack:w.stack})}}finally{z.T=r,ie.p=f}}(sr&3)!==0&&al(),Bn(n),f=n.pendingLanes,(a&261930)!==0&&(f&42)!==0?n===Wc?hu++:(hu=0,Wc=n):hu=0,du(0)}}function p0(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Qa(r)))}function al(){return h0(),d0(),m0(),g0()}function g0(){if(Tt!==5)return!1;var n=Rr,r=Kc;Kc=0;var a=go(sr),s=z.T,f=ie.p;try{ie.p=32>a?32:a,z.T=null,a=Xc,Xc=null;var m=Rr,T=sr;if(Tt=0,na=Rr=null,sr=0,(je&6)!==0)throw Error(u(331));var w=je;if(je|=4,Zp(m.current),Kp(m,m.current,T,a),je=w,du(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Ft,m)}catch{}return!0}finally{ie.p=f,z.T=s,p0(n,r)}}function b0(n,r,a){r=gn(a,r),r=Nc(n.stateNode,r,2),n=xr(n,r,2),n!==null&&(La(n,2),Bn(n))}function Ge(n,r,a){if(n.tag===3)b0(n,n,a);else for(;r!==null;){if(r.tag===3){b0(r,n,a);break}else if(r.tag===1){var s=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(kr===null||!kr.has(s))){n=gn(a,n),a=yp(2),s=xr(r,a,2),s!==null&&(Tp(a,s,r,n),La(s,2),Bn(s));break}}r=r.return}}function $c(n,r,a){var s=n.pingCache;if(s===null){s=n.pingCache=new Sv;var f=new Set;s.set(r,f)}else f=s.get(r),f===void 0&&(f=new Set,s.set(r,f));f.has(a)||(Vc=!0,f.add(a),n=kv.bind(null,n,r,a),r.then(n,n))}function kv(n,r,a){var s=n.pingCache;s!==null&&s.delete(r),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,Je===n&&(Fe&a)===a&&(lt===4||lt===3&&(Fe&62914560)===Fe&&300>Bt()-$s?(je&2)===0&&ra(n,0):Gc|=a,ta===Fe&&(ta=0)),Bn(n)}function y0(n,r){r===0&&(r=hd()),n=$r(n,r),n!==null&&(La(n,r),Bn(n))}function Rv(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),y0(n,a)}function Dv(n,r){var a=0;switch(n.tag){case 31:case 13:var s=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:s=n.stateNode;break;case 22:s=n.stateNode._retryCache;break;default:throw Error(u(314))}s!==null&&s.delete(r),y0(n,a)}function Lv(n,r){return Si(n,r)}var ul=null,aa=null,ef=!1,sl=!1,tf=!1,Lr=0;function Bn(n){n!==aa&&n.next===null&&(aa===null?ul=aa=n:aa=aa.next=n),sl=!0,ef||(ef=!0,Mv())}function du(n,r){if(!tf&&sl){tf=!0;do for(var a=!1,s=ul;s!==null;){if(n!==0){var f=s.pendingLanes;if(f===0)var m=0;else{var T=s.suspendedLanes,w=s.pingedLanes;m=(1<<31-Ze(42|n)+1)-1,m&=f&~(T&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,A0(s,m))}else m=Fe,m=fs(s,s===Je?m:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(m&3)===0||Da(s,m)||(a=!0,A0(s,m));s=s.next}while(a);tf=!1}}function Iv(){T0()}function T0(){sl=ef=!1;var n=0;Lr!==0&&Vv()&&(n=Lr);for(var r=Bt(),a=null,s=ul;s!==null;){var f=s.next,m=E0(s,r);m===0?(s.next=null,a===null?ul=f:a.next=f,f===null&&(aa=a)):(a=s,(n!==0||(m&3)!==0)&&(sl=!0)),s=f}Tt!==0&&Tt!==5||du(n),Lr!==0&&(Lr=0)}function E0(n,r){for(var a=n.suspendedLanes,s=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var T=31-Ze(m),w=1<<T,I=f[T];I===-1?((w&a)===0||(w&s)!==0)&&(f[T]=sE(w,r)):I<=r&&(n.expiredLanes|=w),m&=~w}if(r=Je,a=Fe,a=fs(n,n===r?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),s=n.callbackNode,a===0||n===r&&(Ve===2||Ve===9)||n.cancelPendingCommit!==null)return s!==null&&s!==null&&Ra(s),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||Da(n,a)){if(r=a&-a,r===n.callbackPriority)return r;switch(s!==null&&Ra(s),go(a)){case 2:case 8:a=ce;break;case 32:a=Se;break;case 268435456:a=Ye;break;default:a=Se}return s=v0.bind(null,n),a=Si(a,s),n.callbackPriority=r,n.callbackNode=a,r}return s!==null&&s!==null&&Ra(s),n.callbackPriority=2,n.callbackNode=null,2}function v0(n,r){if(Tt!==0&&Tt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(al()&&n.callbackNode!==a)return null;var s=Fe;return s=fs(n,n===Je?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),s===0?null:(n0(n,s,r),E0(n,Bt()),n.callbackNode!=null&&n.callbackNode===a?v0.bind(null,n):null)}function A0(n,r){if(al())return null;n0(n,r,!0)}function Mv(){Qv(function(){(je&6)!==0?Si(Z,Iv):T0()})}function nf(){if(Lr===0){var n=Yi;n===0&&(n=ls,ls<<=1,(ls&261888)===0&&(ls=256)),Lr=n}return Lr}function w0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:ps(""+n)}function x0(n,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,n.id&&a.setAttribute("form",n.id),r.parentNode.insertBefore(a,r),n=new FormData(n),a.parentNode.removeChild(a),n}function Bv(n,r,a,s,f){if(r==="submit"&&a&&a.stateNode===f){var m=w0((f[qt]||null).action),T=s.submitter;T&&(r=(r=T[qt]||null)?w0(r.formAction):T.getAttribute("formAction"),r!==null&&(m=r,T=null));var w=new Ts("action","action",null,s,f);n.push({event:w,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Lr!==0){var I=T?x0(f,T):new FormData(f);Ac(a,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(w.preventDefault(),I=T?x0(f,T):new FormData(f),Ac(a,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var rf=0;rf<Po.length;rf++){var af=Po[rf],Fv=af.toLowerCase(),Uv=af[0].toUpperCase()+af.slice(1);Cn(Fv,"on"+Uv)}Cn(tm,"onAnimationEnd"),Cn(nm,"onAnimationIteration"),Cn(rm,"onAnimationStart"),Cn("dblclick","onDoubleClick"),Cn("focusin","onFocus"),Cn("focusout","onBlur"),Cn(ev,"onTransitionRun"),Cn(tv,"onTransitionStart"),Cn(nv,"onTransitionCancel"),Cn(im,"onTransitionEnd"),ki("onMouseEnter",["mouseout","mouseover"]),ki("onMouseLeave",["mouseout","mouseover"]),ki("onPointerEnter",["pointerout","pointerover"]),ki("onPointerLeave",["pointerout","pointerover"]),Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mu));function S0(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var s=n[a],f=s.event;s=s.listeners;e:{var m=void 0;if(r)for(var T=s.length-1;0<=T;T--){var w=s[T],I=w.instance,j=w.currentTarget;if(w=w.listener,I!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=j;try{m(f)}catch(X){As(X)}f.currentTarget=null,m=I}else for(T=0;T<s.length;T++){if(w=s[T],I=w.instance,j=w.currentTarget,w=w.listener,I!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=j;try{m(f)}catch(X){As(X)}f.currentTarget=null,m=I}}}}function Ie(n,r){var a=r[bo];a===void 0&&(a=r[bo]=new Set);var s=n+"__bubble";a.has(s)||(C0(r,n,2,!1),a.add(s))}function uf(n,r,a){var s=0;r&&(s|=4),C0(a,n,s,r)}var ll="_reactListening"+Math.random().toString(36).slice(2);function sf(n){if(!n[ll]){n[ll]=!0,Td.forEach(function(a){a!=="selectionchange"&&(Pv.has(a)||uf(a,!1,n),uf(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ll]||(r[ll]=!0,uf("selectionchange",!1,r))}}function C0(n,r,a,s){switch(tg(r)){case 2:var f=d2;break;case 8:f=m2;break;default:f=Af}a=f.bind(null,r,a,n),f=void 0,!Co||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),s?f!==void 0?n.addEventListener(r,a,{capture:!0,passive:f}):n.addEventListener(r,a,!0):f!==void 0?n.addEventListener(r,a,{passive:f}):n.addEventListener(r,a,!1)}function lf(n,r,a,s,f){var m=s;if((r&1)===0&&(r&2)===0&&s!==null)e:for(;;){if(s===null)return;var T=s.tag;if(T===3||T===4){var w=s.stateNode.containerInfo;if(w===f)break;if(T===4)for(T=s.return;T!==null;){var I=T.tag;if((I===3||I===4)&&T.stateNode.containerInfo===f)return;T=T.return}for(;w!==null;){if(T=_i(w),T===null)return;if(I=T.tag,I===5||I===6||I===26||I===27){s=m=T;continue e}w=w.parentNode}}s=s.return}Rd(function(){var j=m,X=xo(a),$=[];e:{var V=am.get(n);if(V!==void 0){var Q=Ts,pe=n;switch(n){case"keypress":if(bs(a)===0)break e;case"keydown":case"keyup":Q=DE;break;case"focusin":pe="focus",Q=ko;break;case"focusout":pe="blur",Q=ko;break;case"beforeblur":case"afterblur":Q=ko;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=EE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=ME;break;case tm:case nm:case rm:Q=wE;break;case im:Q=FE;break;case"scroll":case"scrollend":Q=yE;break;case"wheel":Q=PE;break;case"copy":case"cut":case"paste":Q=SE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Bd;break;case"toggle":case"beforetoggle":Q=zE}var we=(r&4)!==0,We=!we&&(n==="scroll"||n==="scrollend"),U=we?V!==null?V+"Capture":null:V;we=[];for(var B=j,q;B!==null;){var J=B;if(q=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||q===null||U===null||(J=Ba(B,U),J!=null&&we.push(pu(B,J,q))),We)break;B=B.return}0<we.length&&(V=new Q(V,pe,null,a,X),$.push({event:V,listeners:we}))}}if((r&7)===0){e:{if(V=n==="mouseover"||n==="pointerover",Q=n==="mouseout"||n==="pointerout",V&&a!==wo&&(pe=a.relatedTarget||a.fromElement)&&(_i(pe)||pe[Ci]))break e;if((Q||V)&&(V=X.window===X?X:(V=X.ownerDocument)?V.defaultView||V.parentWindow:window,Q?(pe=a.relatedTarget||a.toElement,Q=j,pe=pe?_i(pe):null,pe!==null&&(We=o(pe),we=pe.tag,pe!==We||we!==5&&we!==27&&we!==6)&&(pe=null)):(Q=null,pe=j),Q!==pe)){if(we=Id,J="onMouseLeave",U="onMouseEnter",B="mouse",(n==="pointerout"||n==="pointerover")&&(we=Bd,J="onPointerLeave",U="onPointerEnter",B="pointer"),We=Q==null?V:Ma(Q),q=pe==null?V:Ma(pe),V=new we(J,B+"leave",Q,a,X),V.target=We,V.relatedTarget=q,J=null,_i(X)===j&&(we=new we(U,B+"enter",pe,a,X),we.target=q,we.relatedTarget=We,J=we),We=J,Q&&pe)t:{for(we=Hv,U=Q,B=pe,q=0,J=U;J;J=we(J))q++;J=0;for(var ve=B;ve;ve=we(ve))J++;for(;0<q-J;)U=we(U),q--;for(;0<J-q;)B=we(B),J--;for(;q--;){if(U===B||B!==null&&U===B.alternate){we=U;break t}U=we(U),B=we(B)}we=null}else we=null;Q!==null&&_0($,V,Q,we,!1),pe!==null&&We!==null&&_0($,We,pe,we,!0)}}e:{if(V=j?Ma(j):window,Q=V.nodeName&&V.nodeName.toLowerCase(),Q==="select"||Q==="input"&&V.type==="file")var ze=Yd;else if(qd(V))if(Vd)ze=ZE;else{ze=XE;var ge=KE}else Q=V.nodeName,!Q||Q.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?j&&Ao(j.elementType)&&(ze=Yd):ze=WE;if(ze&&(ze=ze(n,j))){jd($,ze,a,X);break e}ge&&ge(n,V,j),n==="focusout"&&j&&V.type==="number"&&j.memoizedProps.value!=null&&vo(V,"number",V.value)}switch(ge=j?Ma(j):window,n){case"focusin":(qd(ge)||ge.contentEditable==="true")&&(Bi=ge,Bo=j,Ya=null);break;case"focusout":Ya=Bo=Bi=null;break;case"mousedown":Fo=!0;break;case"contextmenu":case"mouseup":case"dragend":Fo=!1,$d($,a,X);break;case"selectionchange":if($E)break;case"keydown":case"keyup":$d($,a,X)}var Ne;if(Do)e:{switch(n){case"compositionstart":var Ue="onCompositionStart";break e;case"compositionend":Ue="onCompositionEnd";break e;case"compositionupdate":Ue="onCompositionUpdate";break e}Ue=void 0}else Mi?Hd(n,a)&&(Ue="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ue="onCompositionStart");Ue&&(Fd&&a.locale!=="ko"&&(Mi||Ue!=="onCompositionStart"?Ue==="onCompositionEnd"&&Mi&&(Ne=Dd()):(br=X,_o="value"in br?br.value:br.textContent,Mi=!0)),ge=ol(j,Ue),0<ge.length&&(Ue=new Md(Ue,n,null,a,X),$.push({event:Ue,listeners:ge}),Ne?Ue.data=Ne:(Ne=zd(a),Ne!==null&&(Ue.data=Ne)))),(Ne=jE?YE(n,a):VE(n,a))&&(Ue=ol(j,"onBeforeInput"),0<Ue.length&&(ge=new Md("onBeforeInput","beforeinput",null,a,X),$.push({event:ge,listeners:Ue}),ge.data=Ne)),Bv($,n,j,a,X)}S0($,r)})}function pu(n,r,a){return{instance:n,listener:r,currentTarget:a}}function ol(n,r){for(var a=r+"Capture",s=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Ba(n,a),f!=null&&s.unshift(pu(n,f,m)),f=Ba(n,r),f!=null&&s.push(pu(n,f,m))),n.tag===3)return s;n=n.return}return[]}function Hv(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function _0(n,r,a,s,f){for(var m=r._reactName,T=[];a!==null&&a!==s;){var w=a,I=w.alternate,j=w.stateNode;if(w=w.tag,I!==null&&I===s)break;w!==5&&w!==26&&w!==27||j===null||(I=j,f?(j=Ba(a,m),j!=null&&T.unshift(pu(a,j,I))):f||(j=Ba(a,m),j!=null&&T.push(pu(a,j,I)))),a=a.return}T.length!==0&&n.push({event:r,listeners:T})}var zv=/\r\n?/g,qv=/\u0000|\uFFFD/g;function N0(n){return(typeof n=="string"?n:""+n).replace(zv,`
`).replace(qv,"")}function O0(n,r){return r=N0(r),N0(n)===r}function Xe(n,r,a,s,f,m){switch(a){case"children":typeof s=="string"?r==="body"||r==="textarea"&&s===""||Di(n,s):(typeof s=="number"||typeof s=="bigint")&&r!=="body"&&Di(n,""+s);break;case"className":ds(n,"class",s);break;case"tabIndex":ds(n,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ds(n,a,s);break;case"style":Od(n,s,m);break;case"data":if(r!=="object"){ds(n,"data",s);break}case"src":case"href":if(s===""&&(r!=="a"||a!=="href")){n.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){n.removeAttribute(a);break}s=ps(""+s),n.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(r!=="input"&&Xe(n,r,"name",f.name,f,null),Xe(n,r,"formEncType",f.formEncType,f,null),Xe(n,r,"formMethod",f.formMethod,f,null),Xe(n,r,"formTarget",f.formTarget,f,null)):(Xe(n,r,"encType",f.encType,f,null),Xe(n,r,"method",f.method,f,null),Xe(n,r,"target",f.target,f,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){n.removeAttribute(a);break}s=ps(""+s),n.setAttribute(a,s);break;case"onClick":s!=null&&(n.onclick=Gn);break;case"onScroll":s!=null&&Ie("scroll",n);break;case"onScrollEnd":s!=null&&Ie("scrollend",n);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(u(61));if(a=s.__html,a!=null){if(f.children!=null)throw Error(u(60));n.innerHTML=a}}break;case"multiple":n.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":n.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){n.removeAttribute("xlink:href");break}a=ps(""+s),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?n.setAttribute(a,""+s):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":s===!0?n.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?n.setAttribute(a,s):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?n.setAttribute(a,s):n.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?n.removeAttribute(a):n.setAttribute(a,s);break;case"popover":Ie("beforetoggle",n),Ie("toggle",n),hs(n,"popover",s);break;case"xlinkActuate":Vn(n,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Vn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Vn(n,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Vn(n,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Vn(n,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Vn(n,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Vn(n,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Vn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Vn(n,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":hs(n,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gE.get(a)||a,hs(n,a,s))}}function of(n,r,a,s,f,m){switch(a){case"style":Od(n,s,m);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(u(61));if(a=s.__html,a!=null){if(f.children!=null)throw Error(u(60));n.innerHTML=a}}break;case"children":typeof s=="string"?Di(n,s):(typeof s=="number"||typeof s=="bigint")&&Di(n,""+s);break;case"onScroll":s!=null&&Ie("scroll",n);break;case"onScrollEnd":s!=null&&Ie("scrollend",n);break;case"onClick":s!=null&&(n.onclick=Gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ed.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),r=a.slice(2,f?a.length-7:void 0),m=n[qt]||null,m=m!=null?m[a]:null,typeof m=="function"&&n.removeEventListener(r,m,f),typeof s=="function")){typeof m!="function"&&m!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(r,s,f);break e}a in n?n[a]=s:s===!0?n.setAttribute(a,""):hs(n,a,s)}}}function Ot(n,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",n),Ie("load",n);var s=!1,f=!1,m;for(m in a)if(a.hasOwnProperty(m)){var T=a[m];if(T!=null)switch(m){case"src":s=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,r));default:Xe(n,r,m,T,a,null)}}f&&Xe(n,r,"srcSet",a.srcSet,a,null),s&&Xe(n,r,"src",a.src,a,null);return;case"input":Ie("invalid",n);var w=m=T=f=null,I=null,j=null;for(s in a)if(a.hasOwnProperty(s)){var X=a[s];if(X!=null)switch(s){case"name":f=X;break;case"type":T=X;break;case"checked":I=X;break;case"defaultChecked":j=X;break;case"value":m=X;break;case"defaultValue":w=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(u(137,r));break;default:Xe(n,r,s,X,a,null)}}Sd(n,m,w,I,j,T,f,!1);return;case"select":Ie("invalid",n),s=T=m=null;for(f in a)if(a.hasOwnProperty(f)&&(w=a[f],w!=null))switch(f){case"value":m=w;break;case"defaultValue":T=w;break;case"multiple":s=w;default:Xe(n,r,f,w,a,null)}r=m,a=T,n.multiple=!!s,r!=null?Ri(n,!!s,r,!1):a!=null&&Ri(n,!!s,a,!0);return;case"textarea":Ie("invalid",n),m=f=s=null;for(T in a)if(a.hasOwnProperty(T)&&(w=a[T],w!=null))switch(T){case"value":s=w;break;case"defaultValue":f=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(91));break;default:Xe(n,r,T,w,a,null)}_d(n,s,f,m);return;case"option":for(I in a)a.hasOwnProperty(I)&&(s=a[I],s!=null)&&(I==="selected"?n.selected=s&&typeof s!="function"&&typeof s!="symbol":Xe(n,r,I,s,a,null));return;case"dialog":Ie("beforetoggle",n),Ie("toggle",n),Ie("cancel",n),Ie("close",n);break;case"iframe":case"object":Ie("load",n);break;case"video":case"audio":for(s=0;s<mu.length;s++)Ie(mu[s],n);break;case"image":Ie("error",n),Ie("load",n);break;case"details":Ie("toggle",n);break;case"embed":case"source":case"link":Ie("error",n),Ie("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(s=a[j],s!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,r));default:Xe(n,r,j,s,a,null)}return;default:if(Ao(r)){for(X in a)a.hasOwnProperty(X)&&(s=a[X],s!==void 0&&of(n,r,X,s,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(s=a[w],s!=null&&Xe(n,r,w,s,a,null))}function jv(n,r,a,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,T=null,w=null,I=null,j=null,X=null;for(Q in a){var $=a[Q];if(a.hasOwnProperty(Q)&&$!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":I=$;default:s.hasOwnProperty(Q)||Xe(n,r,Q,null,s,$)}}for(var V in s){var Q=s[V];if($=a[V],s.hasOwnProperty(V)&&(Q!=null||$!=null))switch(V){case"type":m=Q;break;case"name":f=Q;break;case"checked":j=Q;break;case"defaultChecked":X=Q;break;case"value":T=Q;break;case"defaultValue":w=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(u(137,r));break;default:Q!==$&&Xe(n,r,V,Q,s,$)}}Eo(n,T,w,I,j,X,m,f);return;case"select":Q=T=w=V=null;for(m in a)if(I=a[m],a.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":Q=I;default:s.hasOwnProperty(m)||Xe(n,r,m,null,s,I)}for(f in s)if(m=s[f],I=a[f],s.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":V=m;break;case"defaultValue":w=m;break;case"multiple":T=m;default:m!==I&&Xe(n,r,f,m,s,I)}r=w,a=T,s=Q,V!=null?Ri(n,!!a,V,!1):!!s!=!!a&&(r!=null?Ri(n,!!a,r,!0):Ri(n,!!a,a?[]:"",!1));return;case"textarea":Q=V=null;for(w in a)if(f=a[w],a.hasOwnProperty(w)&&f!=null&&!s.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Xe(n,r,w,null,s,f)}for(T in s)if(f=s[T],m=a[T],s.hasOwnProperty(T)&&(f!=null||m!=null))switch(T){case"value":V=f;break;case"defaultValue":Q=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(u(91));break;default:f!==m&&Xe(n,r,T,f,s,m)}Cd(n,V,Q);return;case"option":for(var pe in a)V=a[pe],a.hasOwnProperty(pe)&&V!=null&&!s.hasOwnProperty(pe)&&(pe==="selected"?n.selected=!1:Xe(n,r,pe,null,s,V));for(I in s)V=s[I],Q=a[I],s.hasOwnProperty(I)&&V!==Q&&(V!=null||Q!=null)&&(I==="selected"?n.selected=V&&typeof V!="function"&&typeof V!="symbol":Xe(n,r,I,V,s,Q));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in a)V=a[we],a.hasOwnProperty(we)&&V!=null&&!s.hasOwnProperty(we)&&Xe(n,r,we,null,s,V);for(j in s)if(V=s[j],Q=a[j],s.hasOwnProperty(j)&&V!==Q&&(V!=null||Q!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(u(137,r));break;default:Xe(n,r,j,V,s,Q)}return;default:if(Ao(r)){for(var We in a)V=a[We],a.hasOwnProperty(We)&&V!==void 0&&!s.hasOwnProperty(We)&&of(n,r,We,void 0,s,V);for(X in s)V=s[X],Q=a[X],!s.hasOwnProperty(X)||V===Q||V===void 0&&Q===void 0||of(n,r,X,V,s,Q);return}}for(var U in a)V=a[U],a.hasOwnProperty(U)&&V!=null&&!s.hasOwnProperty(U)&&Xe(n,r,U,null,s,V);for($ in s)V=s[$],Q=a[$],!s.hasOwnProperty($)||V===Q||V==null&&Q==null||Xe(n,r,$,V,s,Q)}function k0(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yv(){if(typeof performance.getEntriesByType=="function"){for(var n=0,r=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var f=a[s],m=f.transferSize,T=f.initiatorType,w=f.duration;if(m&&w&&k0(T)){for(T=0,w=f.responseEnd,s+=1;s<a.length;s++){var I=a[s],j=I.startTime;if(j>w)break;var X=I.transferSize,$=I.initiatorType;X&&k0($)&&(I=I.responseEnd,T+=X*(I<w?1:(w-j)/(I-j)))}if(--s,r+=8*(m+T)/(f.duration/1e3),n++,10<n)break}}if(0<n)return r/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var cf=null,ff=null;function cl(n){return n.nodeType===9?n:n.ownerDocument}function R0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function D0(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function hf(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var df=null;function Vv(){var n=window.event;return n&&n.type==="popstate"?n===df?!1:(df=n,!0):(df=null,!1)}var L0=typeof setTimeout=="function"?setTimeout:void 0,Gv=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,Qv=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(n){return I0.resolve(null).then(n).catch(Kv)}:L0;function Kv(n){setTimeout(function(){throw n})}function Ir(n){return n==="head"}function M0(n,r){var a=r,s=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"||a==="/&"){if(s===0){n.removeChild(f),oa(r);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")gu(n.ownerDocument.documentElement);else if(a==="head"){a=n.ownerDocument.head,gu(a);for(var m=a.firstChild;m;){var T=m.nextSibling,w=m.nodeName;m[Ia]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||a.removeChild(m),m=T}}else a==="body"&&gu(n.ownerDocument.body);a=f}while(a);oa(r)}function B0(n,r){var a=n;n=0;do{var s=a.nextSibling;if(a.nodeType===1?r?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(r?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(n===0)break;n--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||n++;a=s}while(a)}function mf(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mf(a),yo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function Xv(n,r,a,s){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!s&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(s){if(!n[Ia])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=vn(n.nextSibling),n===null)break}return null}function Wv(n,r,a){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=vn(n.nextSibling),n===null))return null;return n}function F0(n,r){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=vn(n.nextSibling),n===null))return null;return n}function pf(n){return n.data==="$?"||n.data==="$~"}function gf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function Zv(n,r){var a=n.ownerDocument;if(n.data==="$~")n._reactRetry=r;else if(n.data!=="$?"||a.readyState!=="loading")r();else{var s=function(){r(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),n._reactRetry=s}}function vn(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return n}var bf=null;function U0(n){n=n.nextSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"||a==="/&"){if(r===0)return vn(n.nextSibling);r--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||r++}n=n.nextSibling}return null}function P0(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(r===0)return n;r--}else a!=="/$"&&a!=="/&"||r++}n=n.previousSibling}return null}function H0(n,r,a){switch(r=cl(a),n){case"html":if(n=r.documentElement,!n)throw Error(u(452));return n;case"head":if(n=r.head,!n)throw Error(u(453));return n;case"body":if(n=r.body,!n)throw Error(u(454));return n;default:throw Error(u(451))}}function gu(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);yo(n)}var An=new Map,z0=new Set;function fl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var lr=ie.d;ie.d={f:Jv,r:$v,D:e2,C:t2,L:n2,m:r2,X:a2,S:i2,M:u2};function Jv(){var n=lr.f(),r=nl();return n||r}function $v(n){var r=Ni(n);r!==null&&r.tag===5&&r.type==="form"?ip(r):lr.r(n)}var ua=typeof document>"u"?null:document;function q0(n,r,a){var s=ua;if(s&&typeof r=="string"&&r){var f=mn(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),z0.has(f)||(z0.add(f),n={rel:n,crossOrigin:a,href:r},s.querySelector(f)===null&&(r=s.createElement("link"),Ot(r,"link",n),vt(r),s.head.appendChild(r)))}}function e2(n){lr.D(n),q0("dns-prefetch",n,null)}function t2(n,r){lr.C(n,r),q0("preconnect",n,r)}function n2(n,r,a){lr.L(n,r,a);var s=ua;if(s&&n&&r){var f='link[rel="preload"][as="'+mn(r)+'"]';r==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+mn(a.imageSizes)+'"]')):f+='[href="'+mn(n)+'"]';var m=f;switch(r){case"style":m=sa(n);break;case"script":m=la(n)}An.has(m)||(n=b({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:n,as:r},a),An.set(m,n),s.querySelector(f)!==null||r==="style"&&s.querySelector(bu(m))||r==="script"&&s.querySelector(yu(m))||(r=s.createElement("link"),Ot(r,"link",n),vt(r),s.head.appendChild(r)))}}function r2(n,r){lr.m(n,r);var a=ua;if(a&&n){var s=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+mn(s)+'"][href="'+mn(n)+'"]',m=f;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=la(n)}if(!An.has(m)&&(n=b({rel:"modulepreload",href:n},r),An.set(m,n),a.querySelector(f)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yu(m)))return}s=a.createElement("link"),Ot(s,"link",n),vt(s),a.head.appendChild(s)}}}function i2(n,r,a){lr.S(n,r,a);var s=ua;if(s&&n){var f=Oi(s).hoistableStyles,m=sa(n);r=r||"default";var T=f.get(m);if(!T){var w={loading:0,preload:null};if(T=s.querySelector(bu(m)))w.loading=5;else{n=b({rel:"stylesheet",href:n,"data-precedence":r},a),(a=An.get(m))&&yf(n,a);var I=T=s.createElement("link");vt(I),Ot(I,"link",n),I._p=new Promise(function(j,X){I.onload=j,I.onerror=X}),I.addEventListener("load",function(){w.loading|=1}),I.addEventListener("error",function(){w.loading|=2}),w.loading|=4,hl(T,r,s)}T={type:"stylesheet",instance:T,count:1,state:w},f.set(m,T)}}}function a2(n,r){lr.X(n,r);var a=ua;if(a&&n){var s=Oi(a).hoistableScripts,f=la(n),m=s.get(f);m||(m=a.querySelector(yu(f)),m||(n=b({src:n,async:!0},r),(r=An.get(f))&&Tf(n,r),m=a.createElement("script"),vt(m),Ot(m,"link",n),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},s.set(f,m))}}function u2(n,r){lr.M(n,r);var a=ua;if(a&&n){var s=Oi(a).hoistableScripts,f=la(n),m=s.get(f);m||(m=a.querySelector(yu(f)),m||(n=b({src:n,async:!0,type:"module"},r),(r=An.get(f))&&Tf(n,r),m=a.createElement("script"),vt(m),Ot(m,"link",n),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},s.set(f,m))}}function j0(n,r,a,s){var f=(f=Ee.current)?fl(f):null;if(!f)throw Error(u(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=sa(a.href),a=Oi(f).hoistableStyles,s=a.get(r),s||(s={type:"style",instance:null,count:0,state:null},a.set(r,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=sa(a.href);var m=Oi(f).hoistableStyles,T=m.get(n);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,T),(m=f.querySelector(bu(n)))&&!m._p&&(T.instance=m,T.state.loading=5),An.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},An.set(n,a),m||s2(f,n,a,T.state))),r&&s===null)throw Error(u(528,""));return T}if(r&&s!==null)throw Error(u(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=la(a),a=Oi(f).hoistableScripts,s=a.get(r),s||(s={type:"script",instance:null,count:0,state:null},a.set(r,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,n))}}function sa(n){return'href="'+mn(n)+'"'}function bu(n){return'link[rel="stylesheet"]['+n+"]"}function Y0(n){return b({},n,{"data-precedence":n.precedence,precedence:null})}function s2(n,r,a,s){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?s.loading=1:(r=n.createElement("link"),s.preload=r,r.addEventListener("load",function(){return s.loading|=1}),r.addEventListener("error",function(){return s.loading|=2}),Ot(r,"link",a),vt(r),n.head.appendChild(r))}function la(n){return'[src="'+mn(n)+'"]'}function yu(n){return"script[async]"+n}function V0(n,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var s=n.querySelector('style[data-href~="'+mn(a.href)+'"]');if(s)return r.instance=s,vt(s),s;var f=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(n.ownerDocument||n).createElement("style"),vt(s),Ot(s,"style",f),hl(s,a.precedence,n),r.instance=s;case"stylesheet":f=sa(a.href);var m=n.querySelector(bu(f));if(m)return r.state.loading|=4,r.instance=m,vt(m),m;s=Y0(a),(f=An.get(f))&&yf(s,f),m=(n.ownerDocument||n).createElement("link"),vt(m);var T=m;return T._p=new Promise(function(w,I){T.onload=w,T.onerror=I}),Ot(m,"link",s),r.state.loading|=4,hl(m,a.precedence,n),r.instance=m;case"script":return m=la(a.src),(f=n.querySelector(yu(m)))?(r.instance=f,vt(f),f):(s=a,(f=An.get(m))&&(s=b({},a),Tf(s,f)),n=n.ownerDocument||n,f=n.createElement("script"),vt(f),Ot(f,"link",s),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(u(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(s=r.instance,r.state.loading|=4,hl(s,a.precedence,n));return r.instance}function hl(n,r,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=s.length?s[s.length-1]:null,m=f,T=0;T<s.length;T++){var w=s[T];if(w.dataset.precedence===r)m=w;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(n,r.firstChild))}function yf(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function Tf(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var dl=null;function G0(n,r,a){if(dl===null){var s=new Map,f=dl=new Map;f.set(a,s)}else f=dl,s=f.get(a),s||(s=new Map,f.set(a,s));if(s.has(n))return s;for(s.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var m=a[f];if(!(m[Ia]||m[St]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(r)||"";T=n+T;var w=s.get(T);w?w.push(m):s.set(T,[m])}}return s}function Q0(n,r,a){n=n.ownerDocument||n,n.head.insertBefore(a,r==="title"?n.querySelector("head > title"):null)}function l2(n,r,a){if(a===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;return r.rel==="stylesheet"?(n=r.disabled,typeof r.precedence=="string"&&n==null):!0;case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function K0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function o2(n,r,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=sa(s.href),m=r.querySelector(bu(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(n.count++,n=ml.bind(n),r.then(n,n)),a.state.loading|=4,a.instance=m,vt(m);return}m=r.ownerDocument||r,s=Y0(s),(f=An.get(f))&&yf(s,f),m=m.createElement("link"),vt(m);var T=m;T._p=new Promise(function(w,I){T.onload=w,T.onerror=I}),Ot(m,"link",s),a.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(a,r),(r=a.state.preload)&&(a.state.loading&3)===0&&(n.count++,a=ml.bind(n),r.addEventListener("load",a),r.addEventListener("error",a))}}var Ef=0;function c2(n,r){return n.stylesheets&&n.count===0&&gl(n,n.stylesheets),0<n.count||0<n.imgCount?function(a){var s=setTimeout(function(){if(n.stylesheets&&gl(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+r);0<n.imgBytes&&Ef===0&&(Ef=62500*Yv());var f=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&gl(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>Ef?50:800)+r);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(s),clearTimeout(f)}}:null}function ml(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gl(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var pl=null;function gl(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,pl=new Map,r.forEach(f2,n),pl=null,ml.call(n))}function f2(n,r){if(!(r.state.loading&4)){var a=pl.get(n);if(a)var s=a.get(null);else{a=new Map,pl.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var T=f[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(a.set(T.dataset.precedence,T),s=T)}s&&a.set(null,s)}f=r.instance,T=f.getAttribute("data-precedence"),m=a.get(T)||s,m===s&&a.set(null,f),a.set(T,f),this.count++,s=ml.bind(this),f.addEventListener("load",s),f.addEventListener("error",s),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var Tu={$$typeof:F,Provider:null,Consumer:null,_currentValue:be,_currentValue2:be,_threadCount:0};function h2(n,r,a,s,f,m,T,w,I){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mo(0),this.hiddenUpdates=mo(null),this.identifierPrefix=s,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function X0(n,r,a,s,f,m,T,w,I,j,X,$){return n=new h2(n,r,a,T,I,j,X,$,w),r=1,m===!0&&(r|=24),m=tn(3,null,null,r),n.current=m,m.stateNode=n,r=Jo(),r.refCount++,n.pooledCache=r,r.refCount++,m.memoizedState={element:s,isDehydrated:a,cache:r},nc(m),n}function W0(n){return n?(n=Pi,n):Pi}function Z0(n,r,a,s,f,m){f=W0(f),s.context===null?s.context=f:s.pendingContext=f,s=wr(r),s.payload={element:a},m=m===void 0?null:m,m!==null&&(s.callback=m),a=xr(n,s,r),a!==null&&(Kt(a,n,r),Za(a,n,r))}function J0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function vf(n,r){J0(n,r),(n=n.alternate)&&J0(n,r)}function $0(n){if(n.tag===13||n.tag===31){var r=$r(n,67108864);r!==null&&Kt(r,n,67108864),vf(n,67108864)}}function eg(n){if(n.tag===13||n.tag===31){var r=sn();r=po(r);var a=$r(n,r);a!==null&&Kt(a,n,r),vf(n,r)}}var bl=!0;function d2(n,r,a,s){var f=z.T;z.T=null;var m=ie.p;try{ie.p=2,Af(n,r,a,s)}finally{ie.p=m,z.T=f}}function m2(n,r,a,s){var f=z.T;z.T=null;var m=ie.p;try{ie.p=8,Af(n,r,a,s)}finally{ie.p=m,z.T=f}}function Af(n,r,a,s){if(bl){var f=wf(s);if(f===null)lf(n,r,s,yl,a),ng(n,s);else if(g2(f,n,r,a,s))s.stopPropagation();else if(ng(n,s),r&4&&-1<p2.indexOf(n)){for(;f!==null;){var m=Ni(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=Kr(m.pendingLanes);if(T!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;T;){var I=1<<31-Ze(T);w.entanglements[1]|=I,T&=~I}Bn(m),(je&6)===0&&(el=Bt()+500,du(0))}}break;case 31:case 13:w=$r(m,2),w!==null&&Kt(w,m,2),nl(),vf(m,2)}if(m=wf(s),m===null&&lf(n,r,s,yl,a),m===f)break;f=m}f!==null&&s.stopPropagation()}else lf(n,r,s,null,a)}}function wf(n){return n=xo(n),xf(n)}var yl=null;function xf(n){if(yl=null,n=_i(n),n!==null){var r=o(n);if(r===null)n=null;else{var a=r.tag;if(a===13){if(n=c(r),n!==null)return n;n=null}else if(a===31){if(n=h(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return yl=n,null}function tg(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ho()){case Z:return 2;case ce:return 8;case Se:case De:return 32;case Ye:return 268435456;default:return 32}default:return 32}}var Sf=!1,Mr=null,Br=null,Fr=null,Eu=new Map,vu=new Map,Ur=[],p2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ng(n,r){switch(n){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Eu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":vu.delete(r.pointerId)}}function Au(n,r,a,s,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:a,eventSystemFlags:s,nativeEvent:m,targetContainers:[f]},r!==null&&(r=Ni(r),r!==null&&$0(r)),n):(n.eventSystemFlags|=s,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function g2(n,r,a,s,f){switch(r){case"focusin":return Mr=Au(Mr,n,r,a,s,f),!0;case"dragenter":return Br=Au(Br,n,r,a,s,f),!0;case"mouseover":return Fr=Au(Fr,n,r,a,s,f),!0;case"pointerover":var m=f.pointerId;return Eu.set(m,Au(Eu.get(m)||null,n,r,a,s,f)),!0;case"gotpointercapture":return m=f.pointerId,vu.set(m,Au(vu.get(m)||null,n,r,a,s,f)),!0}return!1}function rg(n){var r=_i(n.target);if(r!==null){var a=o(r);if(a!==null){if(r=a.tag,r===13){if(r=c(a),r!==null){n.blockedOn=r,bd(n.priority,function(){eg(a)});return}}else if(r===31){if(r=h(a),r!==null){n.blockedOn=r,bd(n.priority,function(){eg(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Tl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=wf(n.nativeEvent);if(a===null){a=n.nativeEvent;var s=new a.constructor(a.type,a);wo=s,a.target.dispatchEvent(s),wo=null}else return r=Ni(a),r!==null&&$0(r),n.blockedOn=a,!1;r.shift()}return!0}function ig(n,r,a){Tl(n)&&a.delete(r)}function b2(){Sf=!1,Mr!==null&&Tl(Mr)&&(Mr=null),Br!==null&&Tl(Br)&&(Br=null),Fr!==null&&Tl(Fr)&&(Fr=null),Eu.forEach(ig),vu.forEach(ig)}function El(n,r){n.blockedOn===r&&(n.blockedOn=null,Sf||(Sf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,b2)))}var vl=null;function ag(n){vl!==n&&(vl=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){vl===n&&(vl=null);for(var r=0;r<n.length;r+=3){var a=n[r],s=n[r+1],f=n[r+2];if(typeof s!="function"){if(xf(s||a)===null)continue;break}var m=Ni(a);m!==null&&(n.splice(r,3),r-=3,Ac(m,{pending:!0,data:f,method:a.method,action:s},s,f))}}))}function oa(n){function r(I){return El(I,n)}Mr!==null&&El(Mr,n),Br!==null&&El(Br,n),Fr!==null&&El(Fr,n),Eu.forEach(r),vu.forEach(r);for(var a=0;a<Ur.length;a++){var s=Ur[a];s.blockedOn===n&&(s.blockedOn=null)}for(;0<Ur.length&&(a=Ur[0],a.blockedOn===null);)rg(a),a.blockedOn===null&&Ur.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var f=a[s],m=a[s+1],T=f[qt]||null;if(typeof m=="function")T||ag(a);else if(T){var w=null;if(m&&m.hasAttribute("formAction")){if(f=m,T=m[qt]||null)w=T.formAction;else if(xf(f)!==null)continue}else w=T.action;typeof w=="function"?a[s+1]=w:(a.splice(s,3),s-=3),ag(a)}}}function ug(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(T){return f=T})},focusReset:"manual",scroll:"manual"})}function r(){f!==null&&(f(),f=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,f=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),f!==null&&(f(),f=null)}}}function Cf(n){this._internalRoot=n}Al.prototype.render=Cf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(u(409));var a=r.current,s=sn();Z0(a,s,n,r,null,null)},Al.prototype.unmount=Cf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Z0(n.current,2,null,n,null,null),nl(),r[Ci]=null}};function Al(n){this._internalRoot=n}Al.prototype.unstable_scheduleHydration=function(n){if(n){var r=gd();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Ur.length&&r!==0&&r<Ur[a].priority;a++);Ur.splice(a,0,n),a===0&&rg(n)}};var sg=t.version;if(sg!=="19.2.3")throw Error(u(527,sg,"19.2.3"));ie.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(u(188)):(n=Object.keys(n).join(","),Error(u(268,n)));return n=p(r),n=n!==null?y(n):null,n=n===null?null:n.stateNode,n};var y2={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{Ft=wl.inject(y2),yt=wl}catch{}}return xu.createRoot=function(n,r){if(!l(n))throw Error(u(299));var a=!1,s="",f=mp,m=pp,T=gp;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError)),r=X0(n,1,!1,null,null,a,s,null,f,m,T,ug),n[Ci]=r.current,sf(n),new Cf(r)},xu.hydrateRoot=function(n,r,a){if(!l(n))throw Error(u(299));var s=!1,f="",m=mp,T=pp,w=gp,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(T=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),r=X0(n,1,!0,r,a??null,s,f,I,m,T,w,ug),r.context=W0(null),a=r.current,s=sn(),s=po(s),f=wr(s),f.callback=null,xr(a,f,s),a=s,r.current.lanes=a,La(r,a),Bn(r),n[Ci]=r.current,sf(n),new Al(r)},xu.version="19.2.3",xu}var bg;function N2(){if(bg)return Of.exports;bg=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Of.exports=_2(),Of.exports}var O2=N2();var yg="popstate";function k2(e={}){function t(l,o){let{pathname:c="/",search:h="",hash:d=""}=Ti(l.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),lh("",{pathname:c,search:h,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(l,o){let c=l.document.querySelector("base"),h="";if(c&&c.getAttribute("href")){let d=l.location.href,p=d.indexOf("#");h=p===-1?d:d.slice(0,p)}return h+"#"+(typeof o=="string"?o:qu(o))}function u(l,o){cn(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(o)})`)}return D2(t,i,u,e)}function ut(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function R2(){return Math.random().toString(36).substring(2,10)}function Tg(e,t){return{usr:e.state,key:e.key,idx:t}}function lh(e,t,i=null,u){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ti(t):t,state:i,key:t&&t.key||u||R2()}}function qu({pathname:e="/",search:t="",hash:i=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ti(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substring(i),e=e.substring(0,i));let u=e.indexOf("?");u>=0&&(t.search=e.substring(u),e=e.substring(0,u)),e&&(t.pathname=e)}return t}function D2(e,t,i,u={}){let{window:l=document.defaultView,v5Compat:o=!1}=u,c=l.history,h="POP",d=null,p=y();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function y(){return(c.state||{idx:null}).idx}function b(){h="POP";let k=y(),N=k==null?null:k-p;p=k,d&&d({action:h,location:_.location,delta:N})}function v(k,N){h="PUSH";let L=lh(_.location,k,N);i&&i(L,k),p=y()+1;let F=Tg(L,p),ee=_.createHref(L);try{c.pushState(F,"",ee)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;l.location.assign(ee)}o&&d&&d({action:h,location:_.location,delta:1})}function E(k,N){h="REPLACE";let L=lh(_.location,k,N);i&&i(L,k),p=y();let F=Tg(L,p),ee=_.createHref(L);c.replaceState(F,"",ee),o&&d&&d({action:h,location:_.location,delta:0})}function A(k){return L2(k)}let _={get action(){return h},get location(){return e(l,c)},listen(k){if(d)throw new Error("A history only accepts one active listener");return l.addEventListener(yg,b),d=k,()=>{l.removeEventListener(yg,b),d=null}},createHref(k){return t(l,k)},createURL:A,encodeLocation(k){let N=A(k);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:v,replace:E,go(k){return c.go(k)}};return _}function L2(e,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),ut(i,"No window.location.(origin|href) available to create URL");let u=typeof e=="string"?e:qu(e);return u=u.replace(/ $/,"%20"),!t&&u.startsWith("//")&&(u=i+u),new URL(u,i)}function Z1(e,t,i="/"){return I2(e,t,i,!1)}function I2(e,t,i,u){let l=typeof t=="string"?Ti(t):t,o=fr(l.pathname||"/",i);if(o==null)return null;let c=J1(e);M2(c);let h=null;for(let d=0;h==null&&d<c.length;++d){let p=G2(o);h=Y2(c[d],p,u)}return h}function J1(e,t=[],i=[],u="",l=!1){let o=(c,h,d=l,p)=>{let y={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(u)&&d)return;ut(y.relativePath.startsWith(u),`Absolute route path "${y.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(u.length)}let b=cr([u,y.relativePath]),v=i.concat(y);c.children&&c.children.length>0&&(ut(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),J1(c.children,t,v,b,d)),!(c.path==null&&!c.index)&&t.push({path:b,score:q2(b,c.index),routesMeta:v})};return e.forEach((c,h)=>{if(c.path===""||!c.path?.includes("?"))o(c,h);else for(let d of $1(c.path))o(c,h,!0,d)}),t}function $1(e){let t=e.split("/");if(t.length===0)return[];let[i,...u]=t,l=i.endsWith("?"),o=i.replace(/\?$/,"");if(u.length===0)return l?[o,""]:[o];let c=$1(u.join("/")),h=[];return h.push(...c.map(d=>d===""?o:[o,d].join("/"))),l&&h.push(...c),h.map(d=>e.startsWith("/")&&d===""?"/":d)}function M2(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:j2(t.routesMeta.map(u=>u.childrenIndex),i.routesMeta.map(u=>u.childrenIndex)))}var B2=/^:[\w-]+$/,F2=3,U2=2,P2=1,H2=10,z2=-2,Eg=e=>e==="*";function q2(e,t){let i=e.split("/"),u=i.length;return i.some(Eg)&&(u+=z2),t&&(u+=U2),i.filter(l=>!Eg(l)).reduce((l,o)=>l+(B2.test(o)?F2:o===""?P2:H2),u)}function j2(e,t){return e.length===t.length&&e.slice(0,-1).every((u,l)=>u===t[l])?e[e.length-1]-t[t.length-1]:0}function Y2(e,t,i=!1){let{routesMeta:u}=e,l={},o="/",c=[];for(let h=0;h<u.length;++h){let d=u[h],p=h===u.length-1,y=o==="/"?t:t.slice(o.length)||"/",b=Bl({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},y),v=d.route;if(!b&&p&&i&&!u[u.length-1].route.index&&(b=Bl({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},y)),!b)return null;Object.assign(l,b.params),c.push({params:l,pathname:cr([o,b.pathname]),pathnameBase:W2(cr([o,b.pathnameBase])),route:v}),b.pathnameBase!=="/"&&(o=cr([o,b.pathnameBase]))}return c}function Bl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,u]=V2(e.path,e.caseSensitive,e.end),l=t.match(i);if(!l)return null;let o=l[0],c=o.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:u.reduce((p,{paramName:y,isOptional:b},v)=>{if(y==="*"){let A=h[v]||"";c=o.slice(0,o.length-A.length).replace(/(.)\/+$/,"$1")}const E=h[v];return b&&!E?p[y]=void 0:p[y]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:c,pattern:e}}function V2(e,t=!1,i=!0){cn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let u=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,d)=>(u.push({paramName:h,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(u.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),u]}function G2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return cn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function fr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,u=e.charAt(i);return u&&u!=="/"?null:e.slice(i)||"/"}var eb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q2=e=>eb.test(e);function K2(e,t="/"){let{pathname:i,search:u="",hash:l=""}=typeof e=="string"?Ti(e):e,o;if(i)if(Q2(i))o=i;else{if(i.includes("//")){let c=i;i=i.replace(/\/\/+/g,"/"),cn(!1,`Pathnames cannot have embedded double slashes - normalizing ${c} -> ${i}`)}i.startsWith("/")?o=vg(i.substring(1),"/"):o=vg(i,t)}else o=t;return{pathname:o,search:Z2(u),hash:J2(l)}}function vg(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Lf(e,t,i,u){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function X2(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Rh(e){let t=X2(e);return t.map((i,u)=>u===t.length-1?i.pathname:i.pathnameBase)}function Dh(e,t,i,u=!1){let l;typeof e=="string"?l=Ti(e):(l={...e},ut(!l.pathname||!l.pathname.includes("?"),Lf("?","pathname","search",l)),ut(!l.pathname||!l.pathname.includes("#"),Lf("#","pathname","hash",l)),ut(!l.search||!l.search.includes("#"),Lf("#","search","hash",l)));let o=e===""||l.pathname==="",c=o?"/":l.pathname,h;if(c==null)h=i;else{let b=t.length-1;if(!u&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),b-=1;l.pathname=v.join("/")}h=b>=0?t[b]:"/"}let d=K2(l,h),p=c&&c!=="/"&&c.endsWith("/"),y=(o||c===".")&&i.endsWith("/");return!d.pathname.endsWith("/")&&(p||y)&&(d.pathname+="/"),d}var cr=e=>e.join("/").replace(/\/\/+/g,"/"),W2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Z2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,J2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,$2=class{constructor(e,t,i,u=!1){this.status=e,this.statusText=t||"",this.internal=u,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function eA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function tA(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var tb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function nb(e,t){let i=e;if(typeof i!="string"||!eb.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let u=i,l=!1;if(tb)try{let o=new URL(window.location.href),c=i.startsWith("//")?new URL(o.protocol+i):new URL(i),h=fr(c.pathname,t);c.origin===o.origin&&h!=null?i=h+c.search+c.hash:l=!0}catch{cn(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var rb=["POST","PUT","PATCH","DELETE"];new Set(rb);var nA=["GET",...rb];new Set(nA);var wa=P.createContext(null);wa.displayName="DataRouter";var Xl=P.createContext(null);Xl.displayName="DataRouterState";var rA=P.createContext(!1),ib=P.createContext({isTransitioning:!1});ib.displayName="ViewTransition";var iA=P.createContext(new Map);iA.displayName="Fetchers";var aA=P.createContext(null);aA.displayName="Await";var fn=P.createContext(null);fn.displayName="Navigation";var Zu=P.createContext(null);Zu.displayName="Location";var Rn=P.createContext({outlet:null,matches:[],isDataRoute:!1});Rn.displayName="Route";var Lh=P.createContext(null);Lh.displayName="RouteError";var ab="REACT_ROUTER_ERROR",uA="REDIRECT",sA="ROUTE_ERROR_RESPONSE";function lA(e){if(e.startsWith(`${ab}:${uA}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function oA(e){if(e.startsWith(`${ab}:${sA}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new $2(t.status,t.statusText,t.data)}catch{}}function cA(e,{relative:t}={}){ut(xa(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:u}=P.useContext(fn),{hash:l,pathname:o,search:c}=Ju(e,{relative:t}),h=o;return i!=="/"&&(h=o==="/"?i:cr([i,o])),u.createHref({pathname:h,search:c,hash:l})}function xa(){return P.useContext(Zu)!=null}function dr(){return ut(xa(),"useLocation() may be used only in the context of a <Router> component."),P.useContext(Zu).location}var ub="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sb(e){P.useContext(fn).static||P.useLayoutEffect(e)}function Ih(){let{isDataRoute:e}=P.useContext(Rn);return e?xA():fA()}function fA(){ut(xa(),"useNavigate() may be used only in the context of a <Router> component.");let e=P.useContext(wa),{basename:t,navigator:i}=P.useContext(fn),{matches:u}=P.useContext(Rn),{pathname:l}=dr(),o=JSON.stringify(Rh(u)),c=P.useRef(!1);return sb(()=>{c.current=!0}),P.useCallback((d,p={})=>{if(cn(c.current,ub),!c.current)return;if(typeof d=="number"){i.go(d);return}let y=Dh(d,JSON.parse(o),l,p.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:cr([t,y.pathname])),(p.replace?i.replace:i.push)(y,p.state,p)},[t,i,o,l,e])}P.createContext(null);function hA(){let{matches:e}=P.useContext(Rn),t=e[e.length-1];return t?t.params:{}}function Ju(e,{relative:t}={}){let{matches:i}=P.useContext(Rn),{pathname:u}=dr(),l=JSON.stringify(Rh(i));return P.useMemo(()=>Dh(e,JSON.parse(l),u,t==="path"),[e,l,u,t])}function dA(e,t){return lb(e,t)}function lb(e,t,i,u,l){ut(xa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=P.useContext(fn),{matches:c}=P.useContext(Rn),h=c[c.length-1],d=h?h.params:{},p=h?h.pathname:"/",y=h?h.pathnameBase:"/",b=h&&h.route;{let L=b&&b.path||"";cb(p,!b||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let v=dr(),E;if(t){let L=typeof t=="string"?Ti(t):t;ut(y==="/"||L.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${L.pathname}" was given in the \`location\` prop.`),E=L}else E=v;let A=E.pathname||"/",_=A;if(y!=="/"){let L=y.replace(/^\//,"").split("/");_="/"+A.replace(/^\//,"").split("/").slice(L.length).join("/")}let k=Z1(e,{pathname:_});cn(b||k!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),cn(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=yA(k&&k.map(L=>Object.assign({},L,{params:Object.assign({},d,L.params),pathname:cr([y,o.encodeLocation?o.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?y:cr([y,o.encodeLocation?o.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),c,i,u,l);return t&&N?P.createElement(Zu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},N):N}function mA(){let e=wA(),t=eA(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,u="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:u},o={padding:"2px 4px",backgroundColor:u},c=null;return console.error("Error handled by React Router default ErrorBoundary:",e),c=P.createElement(P.Fragment,null,P.createElement("p",null,"💿 Hey developer 👋"),P.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",P.createElement("code",{style:o},"ErrorBoundary")," or"," ",P.createElement("code",{style:o},"errorElement")," prop on your route.")),P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),i?P.createElement("pre",{style:l},i):null,c)}var pA=P.createElement(mA,null),ob=class extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const i=oA(e.digest);i&&(e=i)}let t=e!==void 0?P.createElement(Rn.Provider,{value:this.props.routeContext},P.createElement(Lh.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?P.createElement(gA,{error:e},t):t}};ob.contextType=rA;var If=new WeakMap;function gA({children:e,error:t}){let{basename:i}=P.useContext(fn);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let u=lA(t.digest);if(u){let l=If.get(t);if(l)throw l;let o=nb(u.location,i);if(tb&&!If.get(t))if(o.isExternal||u.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:u.replace}));throw If.set(t,c),c}return P.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return e}function bA({routeContext:e,match:t,children:i}){let u=P.useContext(wa);return u&&u.static&&u.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=t.route.id),P.createElement(Rn.Provider,{value:e},i)}function yA(e,t=[],i=null,u=null,l=null){if(e==null){if(!i)return null;if(i.errors)e=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let o=e,c=i?.errors;if(c!=null){let y=o.findIndex(b=>b.route.id&&c?.[b.route.id]!==void 0);ut(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,y+1))}let h=!1,d=-1;if(i)for(let y=0;y<o.length;y++){let b=o[y];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(d=y),b.route.id){let{loaderData:v,errors:E}=i,A=b.route.loader&&!v.hasOwnProperty(b.route.id)&&(!E||E[b.route.id]===void 0);if(b.route.lazy||A){h=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}let p=i&&u?(y,b)=>{u(y,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:tA(i.matches),errorInfo:b})}:void 0;return o.reduceRight((y,b,v)=>{let E,A=!1,_=null,k=null;i&&(E=c&&b.route.id?c[b.route.id]:void 0,_=b.route.errorElement||pA,h&&(d<0&&v===0?(cb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,k=null):d===v&&(A=!0,k=b.route.hydrateFallbackElement||null)));let N=t.concat(o.slice(0,v+1)),L=()=>{let F;return E?F=_:A?F=k:b.route.Component?F=P.createElement(b.route.Component,null):b.route.element?F=b.route.element:F=y,P.createElement(bA,{match:b,routeContext:{outlet:y,matches:N,isDataRoute:i!=null},children:F})};return i&&(b.route.ErrorBoundary||b.route.errorElement||v===0)?P.createElement(ob,{location:i.location,revalidation:i.revalidation,component:_,error:E,children:L(),routeContext:{outlet:null,matches:N,isDataRoute:!0},onError:p}):L()},null)}function Mh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function TA(e){let t=P.useContext(wa);return ut(t,Mh(e)),t}function EA(e){let t=P.useContext(Xl);return ut(t,Mh(e)),t}function vA(e){let t=P.useContext(Rn);return ut(t,Mh(e)),t}function Bh(e){let t=vA(e),i=t.matches[t.matches.length-1];return ut(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function AA(){return Bh("useRouteId")}function wA(){let e=P.useContext(Lh),t=EA("useRouteError"),i=Bh("useRouteError");return e!==void 0?e:t.errors?.[i]}function xA(){let{router:e}=TA("useNavigate"),t=Bh("useNavigate"),i=P.useRef(!1);return sb(()=>{i.current=!0}),P.useCallback(async(l,o={})=>{cn(i.current,ub),i.current&&(typeof l=="number"?await e.navigate(l):await e.navigate(l,{fromRouteId:t,...o}))},[e,t])}var Ag={};function cb(e,t,i){!t&&!Ag[e]&&(Ag[e]=!0,cn(!1,i))}P.memo(SA);function SA({routes:e,future:t,state:i,onError:u}){return lb(e,void 0,i,u,t)}function CA({to:e,replace:t,state:i,relative:u}){ut(xa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=P.useContext(fn);cn(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=P.useContext(Rn),{pathname:c}=dr(),h=Ih(),d=Dh(e,Rh(o),c,u==="path"),p=JSON.stringify(d);return P.useEffect(()=>{h(JSON.parse(p),{replace:t,state:i,relative:u})},[h,p,u,t,i]),null}function kl(e){ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _A({basename:e="/",children:t=null,location:i,navigationType:u="POP",navigator:l,static:o=!1,unstable_useTransitions:c}){ut(!xa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=e.replace(/^\/*/,"/"),d=P.useMemo(()=>({basename:h,navigator:l,static:o,unstable_useTransitions:c,future:{}}),[h,l,o,c]);typeof i=="string"&&(i=Ti(i));let{pathname:p="/",search:y="",hash:b="",state:v=null,key:E="default"}=i,A=P.useMemo(()=>{let _=fr(p,h);return _==null?null:{location:{pathname:_,search:y,hash:b,state:v,key:E},navigationType:u}},[h,p,y,b,v,E,u]);return cn(A!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:P.createElement(fn.Provider,{value:d},P.createElement(Zu.Provider,{children:t,value:A}))}function NA({children:e,location:t}){return dA(oh(e),t)}function oh(e,t=[]){let i=[];return P.Children.forEach(e,(u,l)=>{if(!P.isValidElement(u))return;let o=[...t,l];if(u.type===P.Fragment){i.push.apply(i,oh(u.props.children,o));return}ut(u.type===kl,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ut(!u.props.index||!u.props.children,"An index route cannot have child routes.");let c={id:u.props.id||o.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(c.children=oh(u.props.children,o)),i.push(c)}),i}var Rl="get",Dl="application/x-www-form-urlencoded";function Wl(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function OA(e){return Wl(e)&&e.tagName.toLowerCase()==="button"}function kA(e){return Wl(e)&&e.tagName.toLowerCase()==="form"}function RA(e){return Wl(e)&&e.tagName.toLowerCase()==="input"}function DA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function LA(e,t){return e.button===0&&(!t||t==="_self")&&!DA(e)}var xl=null;function IA(){if(xl===null)try{new FormData(document.createElement("form"),0),xl=!1}catch{xl=!0}return xl}var MA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mf(e){return e!=null&&!MA.has(e)?(cn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Dl}"`),null):e}function BA(e,t){let i,u,l,o,c;if(kA(e)){let h=e.getAttribute("action");u=h?fr(h,t):null,i=e.getAttribute("method")||Rl,l=Mf(e.getAttribute("enctype"))||Dl,o=new FormData(e)}else if(OA(e)||RA(e)&&(e.type==="submit"||e.type==="image")){let h=e.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=e.getAttribute("formaction")||h.getAttribute("action");if(u=d?fr(d,t):null,i=e.getAttribute("formmethod")||h.getAttribute("method")||Rl,l=Mf(e.getAttribute("formenctype"))||Mf(h.getAttribute("enctype"))||Dl,o=new FormData(h,e),!IA()){let{name:p,type:y,value:b}=e;if(y==="image"){let v=p?`${p}.`:"";o.append(`${v}x`,"0"),o.append(`${v}y`,"0")}else p&&o.append(p,b)}}else{if(Wl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Rl,u=null,l=Dl,c=e}return o&&l==="text/plain"&&(c=o,o=void 0),{action:u,method:i.toLowerCase(),encType:l,formData:o,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Fh(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function FA(e,t,i){let u=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return u.pathname==="/"?u.pathname=`_root.${i}`:t&&fr(u.pathname,t)==="/"?u.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${i}`,u}async function UA(e,t){if(e.id in t)return t[e.id];try{let i=await import(e.module);return t[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function PA(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function HA(e,t,i){let u=await Promise.all(e.map(async l=>{let o=t.routes[l.route.id];if(o){let c=await UA(o,i);return c.links?c.links():[]}return[]}));return YA(u.flat(1).filter(PA).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function wg(e,t,i,u,l,o){let c=(d,p)=>i[p]?d.route.id!==i[p].route.id:!0,h=(d,p)=>i[p].pathname!==d.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==d.params["*"];return o==="assets"?t.filter((d,p)=>c(d,p)||h(d,p)):o==="data"?t.filter((d,p)=>{let y=u.routes[d.route.id];if(!y||!y.hasLoader)return!1;if(c(d,p)||h(d,p))return!0;if(d.route.shouldRevalidate){let b=d.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function zA(e,t,{includeHydrateFallback:i}={}){return qA(e.map(u=>{let l=t.routes[u.route.id];if(!l)return[];let o=[l.module];return l.clientActionModule&&(o=o.concat(l.clientActionModule)),l.clientLoaderModule&&(o=o.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(o=o.concat(l.hydrateFallbackModule)),l.imports&&(o=o.concat(l.imports)),o}).flat(1))}function qA(e){return[...new Set(e)]}function jA(e){let t={},i=Object.keys(e).sort();for(let u of i)t[u]=e[u];return t}function YA(e,t){let i=new Set;return new Set(t),e.reduce((u,l)=>{let o=JSON.stringify(jA(l));return i.has(o)||(i.add(o),u.push({key:o,link:l})),u},[])}function fb(){let e=P.useContext(wa);return Fh(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function VA(){let e=P.useContext(Xl);return Fh(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Uh=P.createContext(void 0);Uh.displayName="FrameworkContext";function hb(){let e=P.useContext(Uh);return Fh(e,"You must render this element inside a <HydratedRouter> element"),e}function GA(e,t){let i=P.useContext(Uh),[u,l]=P.useState(!1),[o,c]=P.useState(!1),{onFocus:h,onBlur:d,onMouseEnter:p,onMouseLeave:y,onTouchStart:b}=t,v=P.useRef(null);P.useEffect(()=>{if(e==="render"&&c(!0),e==="viewport"){let _=N=>{N.forEach(L=>{c(L.isIntersecting)})},k=new IntersectionObserver(_,{threshold:.5});return v.current&&k.observe(v.current),()=>{k.disconnect()}}},[e]),P.useEffect(()=>{if(u){let _=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(_)}}},[u]);let E=()=>{l(!0)},A=()=>{l(!1),c(!1)};return i?e!=="intent"?[o,v,{}]:[o,v,{onFocus:Su(h,E),onBlur:Su(d,A),onMouseEnter:Su(p,E),onMouseLeave:Su(y,A),onTouchStart:Su(b,E)}]:[!1,v,{}]}function Su(e,t){return i=>{e&&e(i),i.defaultPrevented||t(i)}}function QA({page:e,...t}){let{router:i}=fb(),u=P.useMemo(()=>Z1(i.routes,e,i.basename),[i.routes,e,i.basename]);return u?P.createElement(XA,{page:e,matches:u,...t}):null}function KA(e){let{manifest:t,routeModules:i}=hb(),[u,l]=P.useState([]);return P.useEffect(()=>{let o=!1;return HA(e,t,i).then(c=>{o||l(c)}),()=>{o=!0}},[e,t,i]),u}function XA({page:e,matches:t,...i}){let u=dr(),{manifest:l,routeModules:o}=hb(),{basename:c}=fb(),{loaderData:h,matches:d}=VA(),p=P.useMemo(()=>wg(e,t,d,l,u,"data"),[e,t,d,l,u]),y=P.useMemo(()=>wg(e,t,d,l,u,"assets"),[e,t,d,l,u]),b=P.useMemo(()=>{if(e===u.pathname+u.search+u.hash)return[];let A=new Set,_=!1;if(t.forEach(N=>{let L=l.routes[N.route.id];!L||!L.hasLoader||(!p.some(F=>F.route.id===N.route.id)&&N.route.id in h&&o[N.route.id]?.shouldRevalidate||L.hasClientLoader?_=!0:A.add(N.route.id))}),A.size===0)return[];let k=FA(e,c,"data");return _&&A.size>0&&k.searchParams.set("_routes",t.filter(N=>A.has(N.route.id)).map(N=>N.route.id).join(",")),[k.pathname+k.search]},[c,h,u,l,p,t,e,o]),v=P.useMemo(()=>zA(y,l),[y,l]),E=KA(y);return P.createElement(P.Fragment,null,b.map(A=>P.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...i})),v.map(A=>P.createElement("link",{key:A,rel:"modulepreload",href:A,...i})),E.map(({key:A,link:_})=>P.createElement("link",{key:A,nonce:i.nonce,..._})))}function WA(...e){return t=>{e.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var ZA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ZA&&(window.__reactRouterVersion="7.11.0")}catch{}function JA({basename:e,children:t,unstable_useTransitions:i,window:u}){let l=P.useRef();l.current==null&&(l.current=k2({window:u,v5Compat:!0}));let o=l.current,[c,h]=P.useState({action:o.action,location:o.location}),d=P.useCallback(p=>{i===!1?h(p):P.startTransition(()=>h(p))},[i]);return P.useLayoutEffect(()=>o.listen(d),[o,d]),P.createElement(_A,{basename:e,children:t,location:c.location,navigationType:c.action,navigator:o,unstable_useTransitions:i})}var db=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fl=P.forwardRef(function({onClick:t,discover:i="render",prefetch:u="none",relative:l,reloadDocument:o,replace:c,state:h,target:d,to:p,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:v,...E},A){let{basename:_,unstable_useTransitions:k}=P.useContext(fn),N=typeof p=="string"&&db.test(p),L=nb(p,_);p=L.to;let F=cA(p,{relative:l}),[ee,ne,G]=GA(u,E),le=nw(p,{replace:c,state:h,target:d,preventScrollReset:y,relative:l,viewTransition:b,unstable_defaultShouldRevalidate:v,unstable_useTransitions:k});function ye(Y){t&&t(Y),Y.defaultPrevented||le(Y)}let de=P.createElement("a",{...E,...G,href:L.absoluteURL||F,onClick:L.isExternal||o?t:ye,ref:WA(A,ne),target:d,"data-discover":!N&&i==="render"?"true":void 0});return ee&&!N?P.createElement(P.Fragment,null,de,P.createElement(QA,{page:F})):de});Fl.displayName="Link";var $A=P.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:u="",end:l=!1,style:o,to:c,viewTransition:h,children:d,...p},y){let b=Ju(c,{relative:p.relative}),v=dr(),E=P.useContext(Xl),{navigator:A,basename:_}=P.useContext(fn),k=E!=null&&sw(b)&&h===!0,N=A.encodeLocation?A.encodeLocation(b).pathname:b.pathname,L=v.pathname,F=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(L=L.toLowerCase(),F=F?F.toLowerCase():null,N=N.toLowerCase()),F&&_&&(F=fr(F,_)||F);const ee=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let ne=L===N||!l&&L.startsWith(N)&&L.charAt(ee)==="/",G=F!=null&&(F===N||!l&&F.startsWith(N)&&F.charAt(N.length)==="/"),le={isActive:ne,isPending:G,isTransitioning:k},ye=ne?t:void 0,de;typeof u=="function"?de=u(le):de=[u,ne?"active":null,G?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let Y=typeof o=="function"?o(le):o;return P.createElement(Fl,{...p,"aria-current":ye,className:de,ref:y,style:Y,to:c,viewTransition:h},typeof d=="function"?d(le):d)});$A.displayName="NavLink";var ew=P.forwardRef(({discover:e="render",fetcherKey:t,navigate:i,reloadDocument:u,replace:l,state:o,method:c=Rl,action:h,onSubmit:d,relative:p,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:v,...E},A)=>{let{unstable_useTransitions:_}=P.useContext(fn),k=aw(),N=uw(h,{relative:p}),L=c.toLowerCase()==="get"?"get":"post",F=typeof h=="string"&&db.test(h),ee=ne=>{if(d&&d(ne),ne.defaultPrevented)return;ne.preventDefault();let G=ne.nativeEvent.submitter,le=G?.getAttribute("formmethod")||c,ye=()=>k(G||ne.currentTarget,{fetcherKey:t,method:le,navigate:i,replace:l,state:o,relative:p,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:v});_&&i!==!1?P.startTransition(()=>ye()):ye()};return P.createElement("form",{ref:A,method:L,action:N,onSubmit:u?d:ee,...E,"data-discover":!F&&e==="render"?"true":void 0})});ew.displayName="Form";function tw(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mb(e){let t=P.useContext(wa);return ut(t,tw(e)),t}function nw(e,{target:t,replace:i,state:u,preventScrollReset:l,relative:o,viewTransition:c,unstable_defaultShouldRevalidate:h,unstable_useTransitions:d}={}){let p=Ih(),y=dr(),b=Ju(e,{relative:o});return P.useCallback(v=>{if(LA(v,t)){v.preventDefault();let E=i!==void 0?i:qu(y)===qu(b),A=()=>p(e,{replace:E,state:u,preventScrollReset:l,relative:o,viewTransition:c,unstable_defaultShouldRevalidate:h});d?P.startTransition(()=>A()):A()}},[y,p,b,i,u,t,e,l,o,c,h,d])}var rw=0,iw=()=>`__${String(++rw)}__`;function aw(){let{router:e}=mb("useSubmit"),{basename:t}=P.useContext(fn),i=AA(),u=e.fetch,l=e.navigate;return P.useCallback(async(o,c={})=>{let{action:h,method:d,encType:p,formData:y,body:b}=BA(o,t);if(c.navigate===!1){let v=c.fetcherKey||iw();await u(v,i,c.action||h,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:y,body:b,formMethod:c.method||d,formEncType:c.encType||p,flushSync:c.flushSync})}else await l(c.action||h,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:y,body:b,formMethod:c.method||d,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:i,flushSync:c.flushSync,viewTransition:c.viewTransition})},[u,l,t,i])}function uw(e,{relative:t}={}){let{basename:i}=P.useContext(fn),u=P.useContext(Rn);ut(u,"useFormAction must be used inside a RouteContext");let[l]=u.matches.slice(-1),o={...Ju(e||".",{relative:t})},c=dr();if(e==null){o.search=c.search;let h=new URLSearchParams(o.search),d=h.getAll("index");if(d.some(y=>y==="")){h.delete("index"),d.filter(b=>b).forEach(b=>h.append("index",b));let y=h.toString();o.search=y?`?${y}`:""}}return(!e||e===".")&&l.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(o.pathname=o.pathname==="/"?i:cr([i,o.pathname])),qu(o)}function sw(e,{relative:t}={}){let i=P.useContext(ib);ut(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=mb("useViewTransitionState"),l=Ju(e,{relative:t});if(!i.isTransitioning)return!1;let o=fr(i.currentLocation.pathname,u)||i.currentLocation.pathname,c=fr(i.nextLocation.pathname,u)||i.nextLocation.pathname;return Bl(l.pathname,c)!=null||Bl(l.pathname,o)!=null}function xg(e,t){const i=String(e);if(typeof t!="string")throw new TypeError("Expected character");let u=0,l=i.indexOf(t);for(;l!==-1;)u++,l=i.indexOf(t,l+t.length);return u}const Pt=Gr(/[A-Za-z]/),Dt=Gr(/[\dA-Za-z]/),lw=Gr(/[#-'*+\--9=?A-Z^-~]/);function Ul(e){return e!==null&&(e<32||e===127)}const ch=Gr(/\d/),ow=Gr(/[\dA-Fa-f]/),cw=Gr(/[!-/:-@[-`{-~]/);function Ae(e){return e!==null&&e<-2}function $e(e){return e!==null&&(e<0||e===32)}function Me(e){return e===-2||e===-1||e===32}const Zl=Gr(new RegExp("\\p{P}|\\p{S}","u")),yi=Gr(/\s/);function Gr(e){return t;function t(i){return i!==null&&i>-1&&e.test(String.fromCharCode(i))}}function fw(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}const Jl=(function(e){if(e==null)return pw;if(typeof e=="function")return $l(e);if(typeof e=="object")return Array.isArray(e)?hw(e):dw(e);if(typeof e=="string")return mw(e);throw new Error("Expected function, string, or object as test")});function hw(e){const t=[];let i=-1;for(;++i<e.length;)t[i]=Jl(e[i]);return $l(u);function u(...l){let o=-1;for(;++o<t.length;)if(t[o].apply(this,l))return!0;return!1}}function dw(e){const t=e;return $l(i);function i(u){const l=u;let o;for(o in e)if(l[o]!==t[o])return!1;return!0}}function mw(e){return $l(t);function t(i){return i&&i.type===e}}function $l(e){return t;function t(i,u,l){return!!(gw(i)&&e.call(this,i,typeof u=="number"?u:void 0,l||void 0))}}function pw(){return!0}function gw(e){return e!==null&&typeof e=="object"&&"type"in e}const pb=[],bw=!0,fh=!1,yw="skip";function gb(e,t,i,u){let l;typeof t=="function"&&typeof i!="function"?(u=i,i=t):l=t;const o=Jl(l),c=u?-1:1;h(e,void 0,[])();function h(d,p,y){const b=d&&typeof d=="object"?d:{};if(typeof b.type=="string"){const E=typeof b.tagName=="string"?b.tagName:typeof b.name=="string"?b.name:void 0;Object.defineProperty(v,"name",{value:"node ("+(d.type+(E?"<"+E+">":""))+")"})}return v;function v(){let E=pb,A,_,k;if((!t||o(d,p,y[y.length-1]||void 0))&&(E=Tw(i(d,y)),E[0]===fh))return E;if("children"in d&&d.children){const N=d;if(N.children&&E[0]!==yw)for(_=(u?N.children.length:-1)+c,k=y.concat(N);_>-1&&_<N.children.length;){const L=N.children[_];if(A=h(L,_,k)(),A[0]===fh)return A;_=typeof A[1]=="number"?A[1]:_+c}}return E}}}function Tw(e){return Array.isArray(e)?e:typeof e=="number"?[bw,e]:e==null?pb:[e]}function Ew(e,t,i){const l=Jl((i||{}).ignore||[]),o=vw(t);let c=-1;for(;++c<o.length;)gb(e,"text",h);function h(p,y){let b=-1,v;for(;++b<y.length;){const E=y[b],A=v?v.children:void 0;if(l(E,A?A.indexOf(E):void 0,v))return;v=E}if(v)return d(p,y)}function d(p,y){const b=y[y.length-1],v=o[c][0],E=o[c][1];let A=0;const k=b.children.indexOf(p);let N=!1,L=[];v.lastIndex=0;let F=v.exec(p.value);for(;F;){const ee=F.index,ne={index:F.index,input:F.input,stack:[...y,p]};let G=E(...F,ne);if(typeof G=="string"&&(G=G.length>0?{type:"text",value:G}:void 0),G===!1?v.lastIndex=ee+1:(A!==ee&&L.push({type:"text",value:p.value.slice(A,ee)}),Array.isArray(G)?L.push(...G):G&&L.push(G),A=ee+F[0].length,N=!0),!v.global)break;F=v.exec(p.value)}return N?(A<p.value.length&&L.push({type:"text",value:p.value.slice(A)}),b.children.splice(k,1,...L)):L=[p],k+L.length}}function vw(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const i=!e[0]||Array.isArray(e[0])?e:[e];let u=-1;for(;++u<i.length;){const l=i[u];t.push([Aw(l[0]),ww(l[1])])}return t}function Aw(e){return typeof e=="string"?new RegExp(fw(e),"g"):e}function ww(e){return typeof e=="function"?e:function(){return e}}const Bf="phrasing",Ff=["autolink","link","image","label"];function xw(){return{transforms:[Rw],enter:{literalAutolink:Cw,literalAutolinkEmail:Uf,literalAutolinkHttp:Uf,literalAutolinkWww:Uf},exit:{literalAutolink:kw,literalAutolinkEmail:Ow,literalAutolinkHttp:_w,literalAutolinkWww:Nw}}}function Sw(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Bf,notInConstruct:Ff},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Bf,notInConstruct:Ff},{character:":",before:"[ps]",after:"\\/",inConstruct:Bf,notInConstruct:Ff}]}}function Cw(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Uf(e){this.config.enter.autolinkProtocol.call(this,e)}function _w(e){this.config.exit.autolinkProtocol.call(this,e)}function Nw(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function Ow(e){this.config.exit.autolinkEmail.call(this,e)}function kw(e){this.exit(e)}function Rw(e){Ew(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Dw],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Lw]],{ignore:["link","linkReference"]})}function Dw(e,t,i,u,l){let o="";if(!bb(l)||(/^w/i.test(t)&&(i=t+i,t="",o="http://"),!Iw(i)))return!1;const c=Mw(i+u);if(!c[0])return!1;const h={type:"link",title:null,url:o+t+c[0],children:[{type:"text",value:t+c[0]}]};return c[1]?[h,{type:"text",value:c[1]}]:h}function Lw(e,t,i,u){return!bb(u,!0)||/[-\d_]$/.test(i)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+i,children:[{type:"text",value:t+"@"+i}]}}function Iw(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Mw(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let i=t[0],u=i.indexOf(")");const l=xg(e,"(");let o=xg(e,")");for(;u!==-1&&l>o;)e+=i.slice(0,u+1),i=i.slice(u+1),u=i.indexOf(")"),o++;return[e,i]}function bb(e,t){const i=e.input.charCodeAt(e.index-1);return(e.index===0||yi(i)||Zl(i))&&(!t||i!==47)}function On(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}yb.peek=Yw;function Bw(){this.buffer()}function Fw(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function Uw(){this.buffer()}function Pw(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function Hw(e){const t=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=On(this.sliceSerialize(e)).toLowerCase(),i.label=t}function zw(e){this.exit(e)}function qw(e){const t=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=On(this.sliceSerialize(e)).toLowerCase(),i.label=t}function jw(e){this.exit(e)}function Yw(){return"["}function yb(e,t,i,u){const l=i.createTracker(u);let o=l.move("[^");const c=i.enter("footnoteReference"),h=i.enter("reference");return o+=l.move(i.safe(i.associationId(e),{after:"]",before:o})),h(),c(),o+=l.move("]"),o}function Vw(){return{enter:{gfmFootnoteCallString:Bw,gfmFootnoteCall:Fw,gfmFootnoteDefinitionLabelString:Uw,gfmFootnoteDefinition:Pw},exit:{gfmFootnoteCallString:Hw,gfmFootnoteCall:zw,gfmFootnoteDefinitionLabelString:qw,gfmFootnoteDefinition:jw}}}function Gw(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:i,footnoteReference:yb},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function i(u,l,o,c){const h=o.createTracker(c);let d=h.move("[^");const p=o.enter("footnoteDefinition"),y=o.enter("label");return d+=h.move(o.safe(o.associationId(u),{before:d,after:"]"})),y(),d+=h.move("]:"),u.children&&u.children.length>0&&(h.shift(4),d+=h.move((t?`
`:" ")+o.indentLines(o.containerFlow(u,h.current()),t?Tb:Qw))),p(),d}}function Qw(e,t,i){return t===0?e:Tb(e,t,i)}function Tb(e,t,i){return(i?"":"    ")+e}const Kw=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Eb.peek=$w;function Xw(){return{canContainEols:["delete"],enter:{strikethrough:Zw},exit:{strikethrough:Jw}}}function Ww(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Kw}],handlers:{delete:Eb}}}function Zw(e){this.enter({type:"delete",children:[]},e)}function Jw(e){this.exit(e)}function Eb(e,t,i,u){const l=i.createTracker(u),o=i.enter("strikethrough");let c=l.move("~~");return c+=i.containerPhrasing(e,{...l.current(),before:c,after:"~"}),c+=l.move("~~"),o(),c}function $w(){return"~"}function ex(e){return e.length}function tx(e,t){const i=t||{},u=(i.align||[]).concat(),l=i.stringLength||ex,o=[],c=[],h=[],d=[];let p=0,y=-1;for(;++y<e.length;){const _=[],k=[];let N=-1;for(e[y].length>p&&(p=e[y].length);++N<e[y].length;){const L=nx(e[y][N]);if(i.alignDelimiters!==!1){const F=l(L);k[N]=F,(d[N]===void 0||F>d[N])&&(d[N]=F)}_.push(L)}c[y]=_,h[y]=k}let b=-1;if(typeof u=="object"&&"length"in u)for(;++b<p;)o[b]=Sg(u[b]);else{const _=Sg(u);for(;++b<p;)o[b]=_}b=-1;const v=[],E=[];for(;++b<p;){const _=o[b];let k="",N="";_===99?(k=":",N=":"):_===108?k=":":_===114&&(N=":");let L=i.alignDelimiters===!1?1:Math.max(1,d[b]-k.length-N.length);const F=k+"-".repeat(L)+N;i.alignDelimiters!==!1&&(L=k.length+L+N.length,L>d[b]&&(d[b]=L),E[b]=L),v[b]=F}c.splice(1,0,v),h.splice(1,0,E),y=-1;const A=[];for(;++y<c.length;){const _=c[y],k=h[y];b=-1;const N=[];for(;++b<p;){const L=_[b]||"";let F="",ee="";if(i.alignDelimiters!==!1){const ne=d[b]-(k[b]||0),G=o[b];G===114?F=" ".repeat(ne):G===99?ne%2?(F=" ".repeat(ne/2+.5),ee=" ".repeat(ne/2-.5)):(F=" ".repeat(ne/2),ee=F):ee=" ".repeat(ne)}i.delimiterStart!==!1&&!b&&N.push("|"),i.padding!==!1&&!(i.alignDelimiters===!1&&L==="")&&(i.delimiterStart!==!1||b)&&N.push(" "),i.alignDelimiters!==!1&&N.push(F),N.push(L),i.alignDelimiters!==!1&&N.push(ee),i.padding!==!1&&N.push(" "),(i.delimiterEnd!==!1||b!==p-1)&&N.push("|")}A.push(i.delimiterEnd===!1?N.join("").replace(/ +$/,""):N.join(""))}return A.join(`
`)}function nx(e){return e==null?"":String(e)}function Sg(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}const Cg={}.hasOwnProperty;function vb(e,t){const i=t||{};function u(l,...o){let c=u.invalid;const h=u.handlers;if(l&&Cg.call(l,e)){const d=String(l[e]);c=Cg.call(h,d)?h[d]:u.unknown}if(c)return c.call(this,l,...o)}return u.handlers=i.handlers||{},u.invalid=i.invalid,u.unknown=i.unknown,u}function rx(e,t,i,u){const l=i.enter("blockquote"),o=i.createTracker(u);o.move("> "),o.shift(2);const c=i.indentLines(i.containerFlow(e,o.current()),ix);return l(),c}function ix(e,t,i){return">"+(i?"":" ")+e}function ax(e,t){return _g(e,t.inConstruct,!0)&&!_g(e,t.notInConstruct,!1)}function _g(e,t,i){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return i;let u=-1;for(;++u<t.length;)if(e.includes(t[u]))return!0;return!1}function Ng(e,t,i,u){let l=-1;for(;++l<i.unsafe.length;)if(i.unsafe[l].character===`
`&&ax(i.stack,i.unsafe[l]))return/[ \t]/.test(u.before)?"":" ";return`\\
`}function ux(e,t){const i=String(e);let u=i.indexOf(t),l=u,o=0,c=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;u!==-1;)u===l?++o>c&&(c=o):o=1,l=u+t.length,u=i.indexOf(t,l);return c}function sx(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function lx(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function ox(e,t,i,u){const l=lx(i),o=e.value||"",c=l==="`"?"GraveAccent":"Tilde";if(sx(e,i)){const b=i.enter("codeIndented"),v=i.indentLines(o,cx);return b(),v}const h=i.createTracker(u),d=l.repeat(Math.max(ux(o,l)+1,3)),p=i.enter("codeFenced");let y=h.move(d);if(e.lang){const b=i.enter(`codeFencedLang${c}`);y+=h.move(i.safe(e.lang,{before:y,after:" ",encode:["`"],...h.current()})),b()}if(e.lang&&e.meta){const b=i.enter(`codeFencedMeta${c}`);y+=h.move(" "),y+=h.move(i.safe(e.meta,{before:y,after:`
`,encode:["`"],...h.current()})),b()}return y+=h.move(`
`),o&&(y+=h.move(o+`
`)),y+=h.move(d),p(),y}function cx(e,t,i){return(i?"":"    ")+e}function Ph(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function fx(e,t,i,u){const l=Ph(i),o=l==='"'?"Quote":"Apostrophe",c=i.enter("definition");let h=i.enter("label");const d=i.createTracker(u);let p=d.move("[");return p+=d.move(i.safe(i.associationId(e),{before:p,after:"]",...d.current()})),p+=d.move("]: "),h(),!e.url||/[\0- \u007F]/.test(e.url)?(h=i.enter("destinationLiteral"),p+=d.move("<"),p+=d.move(i.safe(e.url,{before:p,after:">",...d.current()})),p+=d.move(">")):(h=i.enter("destinationRaw"),p+=d.move(i.safe(e.url,{before:p,after:e.title?" ":`
`,...d.current()}))),h(),e.title&&(h=i.enter(`title${o}`),p+=d.move(" "+l),p+=d.move(i.safe(e.title,{before:p,after:l,...d.current()})),p+=d.move(l),h()),c(),p}function hx(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function ju(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Ta(e){if(e===null||$e(e)||yi(e))return 1;if(Zl(e))return 2}function Pl(e,t,i){const u=Ta(e),l=Ta(t);return u===void 0?l===void 0?i==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:l===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:u===1?l===void 0?{inside:!1,outside:!1}:l===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:l===void 0?{inside:!1,outside:!1}:l===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Ab.peek=dx;function Ab(e,t,i,u){const l=hx(i),o=i.enter("emphasis"),c=i.createTracker(u),h=c.move(l);let d=c.move(i.containerPhrasing(e,{after:l,before:h,...c.current()}));const p=d.charCodeAt(0),y=Pl(u.before.charCodeAt(u.before.length-1),p,l);y.inside&&(d=ju(p)+d.slice(1));const b=d.charCodeAt(d.length-1),v=Pl(u.after.charCodeAt(0),b,l);v.inside&&(d=d.slice(0,-1)+ju(b));const E=c.move(l);return o(),i.attentionEncodeSurroundingInfo={after:v.outside,before:y.outside},h+d+E}function dx(e,t,i){return i.options.emphasis||"*"}function eo(e,t,i,u){let l,o,c;typeof t=="function"&&typeof i!="function"?(o=void 0,c=t,l=i):(o=t,c=i,l=u),gb(e,o,h,l);function h(d,p){const y=p[p.length-1],b=y?y.children.indexOf(d):void 0;return c(d,b,y)}}const mx={};function Hh(e,t){const i=mx,u=typeof i.includeImageAlt=="boolean"?i.includeImageAlt:!0,l=typeof i.includeHtml=="boolean"?i.includeHtml:!0;return wb(e,u,l)}function wb(e,t,i){if(px(e)){if("value"in e)return e.type==="html"&&!i?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Og(e.children,t,i)}return Array.isArray(e)?Og(e,t,i):""}function Og(e,t,i){const u=[];let l=-1;for(;++l<e.length;)u[l]=wb(e[l],t,i);return u.join("")}function px(e){return!!(e&&typeof e=="object")}function gx(e,t){let i=!1;return eo(e,function(u){if("value"in u&&/\r?\n|\r/.test(u.value)||u.type==="break")return i=!0,fh}),!!((!e.depth||e.depth<3)&&Hh(e)&&(t.options.setext||i))}function bx(e,t,i,u){const l=Math.max(Math.min(6,e.depth||1),1),o=i.createTracker(u);if(gx(e,i)){const y=i.enter("headingSetext"),b=i.enter("phrasing"),v=i.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return b(),y(),v+`
`+(l===1?"=":"-").repeat(v.length-(Math.max(v.lastIndexOf("\r"),v.lastIndexOf(`
`))+1))}const c="#".repeat(l),h=i.enter("headingAtx"),d=i.enter("phrasing");o.move(c+" ");let p=i.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(p)&&(p=ju(p.charCodeAt(0))+p.slice(1)),p=p?c+" "+p:c,i.options.closeAtx&&(p+=" "+c),d(),h(),p}xb.peek=yx;function xb(e){return e.value||""}function yx(){return"<"}Sb.peek=Tx;function Sb(e,t,i,u){const l=Ph(i),o=l==='"'?"Quote":"Apostrophe",c=i.enter("image");let h=i.enter("label");const d=i.createTracker(u);let p=d.move("![");return p+=d.move(i.safe(e.alt,{before:p,after:"]",...d.current()})),p+=d.move("]("),h(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(h=i.enter("destinationLiteral"),p+=d.move("<"),p+=d.move(i.safe(e.url,{before:p,after:">",...d.current()})),p+=d.move(">")):(h=i.enter("destinationRaw"),p+=d.move(i.safe(e.url,{before:p,after:e.title?" ":")",...d.current()}))),h(),e.title&&(h=i.enter(`title${o}`),p+=d.move(" "+l),p+=d.move(i.safe(e.title,{before:p,after:l,...d.current()})),p+=d.move(l),h()),p+=d.move(")"),c(),p}function Tx(){return"!"}Cb.peek=Ex;function Cb(e,t,i,u){const l=e.referenceType,o=i.enter("imageReference");let c=i.enter("label");const h=i.createTracker(u);let d=h.move("![");const p=i.safe(e.alt,{before:d,after:"]",...h.current()});d+=h.move(p+"]["),c();const y=i.stack;i.stack=[],c=i.enter("reference");const b=i.safe(i.associationId(e),{before:d,after:"]",...h.current()});return c(),i.stack=y,o(),l==="full"||!p||p!==b?d+=h.move(b+"]"):l==="shortcut"?d=d.slice(0,-1):d+=h.move("]"),d}function Ex(){return"!"}_b.peek=vx;function _b(e,t,i){let u=e.value||"",l="`",o=-1;for(;new RegExp("(^|[^`])"+l+"([^`]|$)").test(u);)l+="`";for(/[^ \r\n]/.test(u)&&(/^[ \r\n]/.test(u)&&/[ \r\n]$/.test(u)||/^`|`$/.test(u))&&(u=" "+u+" ");++o<i.unsafe.length;){const c=i.unsafe[o],h=i.compilePattern(c);let d;if(c.atBreak)for(;d=h.exec(u);){let p=d.index;u.charCodeAt(p)===10&&u.charCodeAt(p-1)===13&&p--,u=u.slice(0,p)+" "+u.slice(d.index+1)}}return l+u+l}function vx(){return"`"}function Nb(e,t){const i=Hh(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(i===e.url||"mailto:"+i===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Ob.peek=Ax;function Ob(e,t,i,u){const l=Ph(i),o=l==='"'?"Quote":"Apostrophe",c=i.createTracker(u);let h,d;if(Nb(e,i)){const y=i.stack;i.stack=[],h=i.enter("autolink");let b=c.move("<");return b+=c.move(i.containerPhrasing(e,{before:b,after:">",...c.current()})),b+=c.move(">"),h(),i.stack=y,b}h=i.enter("link"),d=i.enter("label");let p=c.move("[");return p+=c.move(i.containerPhrasing(e,{before:p,after:"](",...c.current()})),p+=c.move("]("),d(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(d=i.enter("destinationLiteral"),p+=c.move("<"),p+=c.move(i.safe(e.url,{before:p,after:">",...c.current()})),p+=c.move(">")):(d=i.enter("destinationRaw"),p+=c.move(i.safe(e.url,{before:p,after:e.title?" ":")",...c.current()}))),d(),e.title&&(d=i.enter(`title${o}`),p+=c.move(" "+l),p+=c.move(i.safe(e.title,{before:p,after:l,...c.current()})),p+=c.move(l),d()),p+=c.move(")"),h(),p}function Ax(e,t,i){return Nb(e,i)?"<":"["}kb.peek=wx;function kb(e,t,i,u){const l=e.referenceType,o=i.enter("linkReference");let c=i.enter("label");const h=i.createTracker(u);let d=h.move("[");const p=i.containerPhrasing(e,{before:d,after:"]",...h.current()});d+=h.move(p+"]["),c();const y=i.stack;i.stack=[],c=i.enter("reference");const b=i.safe(i.associationId(e),{before:d,after:"]",...h.current()});return c(),i.stack=y,o(),l==="full"||!p||p!==b?d+=h.move(b+"]"):l==="shortcut"?d=d.slice(0,-1):d+=h.move("]"),d}function wx(){return"["}function zh(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function xx(e){const t=zh(e),i=e.options.bulletOther;if(!i)return t==="*"?"-":"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(i===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+i+"`) to be different");return i}function Sx(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Rb(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Cx(e,t,i,u){const l=i.enter("list"),o=i.bulletCurrent;let c=e.ordered?Sx(i):zh(i);const h=e.ordered?c==="."?")":".":xx(i);let d=t&&i.bulletLastUsed?c===i.bulletLastUsed:!1;if(!e.ordered){const y=e.children?e.children[0]:void 0;if((c==="*"||c==="-")&&y&&(!y.children||!y.children[0])&&i.stack[i.stack.length-1]==="list"&&i.stack[i.stack.length-2]==="listItem"&&i.stack[i.stack.length-3]==="list"&&i.stack[i.stack.length-4]==="listItem"&&i.indexStack[i.indexStack.length-1]===0&&i.indexStack[i.indexStack.length-2]===0&&i.indexStack[i.indexStack.length-3]===0&&(d=!0),Rb(i)===c&&y){let b=-1;for(;++b<e.children.length;){const v=e.children[b];if(v&&v.type==="listItem"&&v.children&&v.children[0]&&v.children[0].type==="thematicBreak"){d=!0;break}}}}d&&(c=h),i.bulletCurrent=c;const p=i.containerFlow(e,u);return i.bulletLastUsed=c,i.bulletCurrent=o,l(),p}function _x(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Nx(e,t,i,u){const l=_x(i);let o=i.bulletCurrent||zh(i);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(i.options.incrementListMarker===!1?0:t.children.indexOf(e))+o);let c=o.length+1;(l==="tab"||l==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(c=Math.ceil(c/4)*4);const h=i.createTracker(u);h.move(o+" ".repeat(c-o.length)),h.shift(c);const d=i.enter("listItem"),p=i.indentLines(i.containerFlow(e,h.current()),y);return d(),p;function y(b,v,E){return v?(E?"":" ".repeat(c))+b:(E?o:o+" ".repeat(c-o.length))+b}}function Ox(e,t,i,u){const l=i.enter("paragraph"),o=i.enter("phrasing"),c=i.containerPhrasing(e,u);return o(),l(),c}const kx=Jl(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Rx(e,t,i,u){return(e.children.some(function(c){return kx(c)})?i.containerPhrasing:i.containerFlow).call(i,e,u)}function Dx(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Db.peek=Lx;function Db(e,t,i,u){const l=Dx(i),o=i.enter("strong"),c=i.createTracker(u),h=c.move(l+l);let d=c.move(i.containerPhrasing(e,{after:l,before:h,...c.current()}));const p=d.charCodeAt(0),y=Pl(u.before.charCodeAt(u.before.length-1),p,l);y.inside&&(d=ju(p)+d.slice(1));const b=d.charCodeAt(d.length-1),v=Pl(u.after.charCodeAt(0),b,l);v.inside&&(d=d.slice(0,-1)+ju(b));const E=c.move(l+l);return o(),i.attentionEncodeSurroundingInfo={after:v.outside,before:y.outside},h+d+E}function Lx(e,t,i){return i.options.strong||"*"}function Ix(e,t,i,u){return i.safe(e.value,u)}function Mx(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Bx(e,t,i){const u=(Rb(i)+(i.options.ruleSpaces?" ":"")).repeat(Mx(i));return i.options.ruleSpaces?u.slice(0,-1):u}const Lb={blockquote:rx,break:Ng,code:ox,definition:fx,emphasis:Ab,hardBreak:Ng,heading:bx,html:xb,image:Sb,imageReference:Cb,inlineCode:_b,link:Ob,linkReference:kb,list:Cx,listItem:Nx,paragraph:Ox,root:Rx,strong:Db,text:Ix,thematicBreak:Bx},kg=document.createElement("i");function qh(e){const t="&"+e+";";kg.innerHTML=t;const i=kg.textContent;return i.charCodeAt(i.length-1)===59&&e!=="semi"||i===t?!1:i}function Ib(e,t){const i=Number.parseInt(e,t);return i<9||i===11||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||(i&65535)===65535||(i&65535)===65534||i>1114111?"�":String.fromCodePoint(i)}const Fx=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Ux(e){return e.replace(Fx,Px)}function Px(e,t,i){if(t)return t;if(i.charCodeAt(0)===35){const l=i.charCodeAt(1),o=l===120||l===88;return Ib(i.slice(o?2:1),o?16:10)}return qh(i)||e}function Hx(){return{enter:{table:zx,tableData:Rg,tableHeader:Rg,tableRow:jx},exit:{codeText:Yx,table:qx,tableData:Pf,tableHeader:Pf,tableRow:Pf}}}function zx(e){const t=e._align;this.enter({type:"table",align:t.map(function(i){return i==="none"?null:i}),children:[]},e),this.data.inTable=!0}function qx(e){this.exit(e),this.data.inTable=void 0}function jx(e){this.enter({type:"tableRow",children:[]},e)}function Pf(e){this.exit(e)}function Rg(e){this.enter({type:"tableCell",children:[]},e)}function Yx(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Vx));const i=this.stack[this.stack.length-1];i.type,i.value=t,this.exit(e)}function Vx(e,t){return t==="|"?t:e}function Gx(e){const t=e||{},i=t.tableCellPadding,u=t.tablePipeAlign,l=t.stringLength,o=i?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:v,table:c,tableCell:d,tableRow:h}};function c(E,A,_,k){return p(y(E,_,k),E.align)}function h(E,A,_,k){const N=b(E,_,k),L=p([N]);return L.slice(0,L.indexOf(`
`))}function d(E,A,_,k){const N=_.enter("tableCell"),L=_.enter("phrasing"),F=_.containerPhrasing(E,{...k,before:o,after:o});return L(),N(),F}function p(E,A){return tx(E,{align:A,alignDelimiters:u,padding:i,stringLength:l})}function y(E,A,_){const k=E.children;let N=-1;const L=[],F=A.enter("table");for(;++N<k.length;)L[N]=b(k[N],A,_);return F(),L}function b(E,A,_){const k=E.children;let N=-1;const L=[],F=A.enter("tableRow");for(;++N<k.length;)L[N]=d(k[N],E,A,_);return F(),L}function v(E,A,_){let k=Lb.inlineCode(E,A,_);return _.stack.includes("tableCell")&&(k=k.replace(/\|/g,"\\$&")),k}}function Qx(){return{exit:{taskListCheckValueChecked:Dg,taskListCheckValueUnchecked:Dg,paragraph:Xx}}}function Kx(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:Wx}}}function Dg(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function Xx(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const i=this.stack[this.stack.length-1];i.type;const u=i.children[0];if(u&&u.type==="text"){const l=t.children;let o=-1,c;for(;++o<l.length;){const h=l[o];if(h.type==="paragraph"){c=h;break}}c===i&&(u.value=u.value.slice(1),u.value.length===0?i.children.shift():i.position&&u.position&&typeof u.position.start.offset=="number"&&(u.position.start.column++,u.position.start.offset++,i.position.start=Object.assign({},u.position.start)))}}this.exit(e)}function Wx(e,t,i,u){const l=e.children[0],o=typeof e.checked=="boolean"&&l&&l.type==="paragraph",c="["+(e.checked?"x":" ")+"] ",h=i.createTracker(u);o&&h.move(c);let d=Lb.listItem(e,t,i,{...u,...h.current()});return o&&(d=d.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,p)),d;function p(y){return y+c}}function Zx(){return[xw(),Vw(),Xw(),Hx(),Qx()]}function Jx(e){return{extensions:[Sw(),Gw(e),Ww(),Gx(e),Kx()]}}function on(e,t,i,u){const l=e.length;let o=0,c;if(t<0?t=-t>l?0:l+t:t=t>l?l:t,i=i>0?i:0,u.length<1e4)c=Array.from(u),c.unshift(t,i),e.splice(...c);else for(i&&e.splice(t,i);o<u.length;)c=u.slice(o,o+1e4),c.unshift(t,0),e.splice(...c),o+=1e4,t+=1e4}function wn(e,t){return e.length>0?(on(e,e.length,0,t),e):t}const Lg={}.hasOwnProperty;function Mb(e){const t={};let i=-1;for(;++i<e.length;)$x(t,e[i]);return t}function $x(e,t){let i;for(i in t){const l=(Lg.call(e,i)?e[i]:void 0)||(e[i]={}),o=t[i];let c;if(o)for(c in o){Lg.call(l,c)||(l[c]=[]);const h=o[c];eS(l[c],Array.isArray(h)?h:h?[h]:[])}}}function eS(e,t){let i=-1;const u=[];for(;++i<t.length;)(t[i].add==="after"?e:u).push(t[i]);on(e,0,0,u)}const tS={tokenize:sS,partial:!0},Bb={tokenize:lS,partial:!0},Fb={tokenize:oS,partial:!0},Ub={tokenize:cS,partial:!0},nS={tokenize:fS,partial:!0},Pb={name:"wwwAutolink",tokenize:aS,previous:zb},Hb={name:"protocolAutolink",tokenize:uS,previous:qb},mr={name:"emailAutolink",tokenize:iS,previous:jb},Hn={};function rS(){return{text:Hn}}let hi=48;for(;hi<123;)Hn[hi]=mr,hi++,hi===58?hi=65:hi===91&&(hi=97);Hn[43]=mr;Hn[45]=mr;Hn[46]=mr;Hn[95]=mr;Hn[72]=[mr,Hb];Hn[104]=[mr,Hb];Hn[87]=[mr,Pb];Hn[119]=[mr,Pb];function iS(e,t,i){const u=this;let l,o;return c;function c(b){return!hh(b)||!jb.call(u,u.previous)||jh(u.events)?i(b):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),h(b))}function h(b){return hh(b)?(e.consume(b),h):b===64?(e.consume(b),d):i(b)}function d(b){return b===46?e.check(nS,y,p)(b):b===45||b===95||Dt(b)?(o=!0,e.consume(b),d):y(b)}function p(b){return e.consume(b),l=!0,d}function y(b){return o&&l&&Pt(u.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(b)):i(b)}}function aS(e,t,i){const u=this;return l;function l(c){return c!==87&&c!==119||!zb.call(u,u.previous)||jh(u.events)?i(c):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(tS,e.attempt(Bb,e.attempt(Fb,o),i),i)(c))}function o(c){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(c)}}function uS(e,t,i){const u=this;let l="",o=!1;return c;function c(b){return(b===72||b===104)&&qb.call(u,u.previous)&&!jh(u.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),l+=String.fromCodePoint(b),e.consume(b),h):i(b)}function h(b){if(Pt(b)&&l.length<5)return l+=String.fromCodePoint(b),e.consume(b),h;if(b===58){const v=l.toLowerCase();if(v==="http"||v==="https")return e.consume(b),d}return i(b)}function d(b){return b===47?(e.consume(b),o?p:(o=!0,d)):i(b)}function p(b){return b===null||Ul(b)||$e(b)||yi(b)||Zl(b)?i(b):e.attempt(Bb,e.attempt(Fb,y),i)(b)}function y(b){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(b)}}function sS(e,t,i){let u=0;return l;function l(c){return(c===87||c===119)&&u<3?(u++,e.consume(c),l):c===46&&u===3?(e.consume(c),o):i(c)}function o(c){return c===null?i(c):t(c)}}function lS(e,t,i){let u,l,o;return c;function c(p){return p===46||p===95?e.check(Ub,d,h)(p):p===null||$e(p)||yi(p)||p!==45&&Zl(p)?d(p):(o=!0,e.consume(p),c)}function h(p){return p===95?u=!0:(l=u,u=void 0),e.consume(p),c}function d(p){return l||u||!o?i(p):t(p)}}function oS(e,t){let i=0,u=0;return l;function l(c){return c===40?(i++,e.consume(c),l):c===41&&u<i?o(c):c===33||c===34||c===38||c===39||c===41||c===42||c===44||c===46||c===58||c===59||c===60||c===63||c===93||c===95||c===126?e.check(Ub,t,o)(c):c===null||$e(c)||yi(c)?t(c):(e.consume(c),l)}function o(c){return c===41&&u++,e.consume(c),l}}function cS(e,t,i){return u;function u(h){return h===33||h===34||h===39||h===41||h===42||h===44||h===46||h===58||h===59||h===63||h===95||h===126?(e.consume(h),u):h===38?(e.consume(h),o):h===93?(e.consume(h),l):h===60||h===null||$e(h)||yi(h)?t(h):i(h)}function l(h){return h===null||h===40||h===91||$e(h)||yi(h)?t(h):u(h)}function o(h){return Pt(h)?c(h):i(h)}function c(h){return h===59?(e.consume(h),u):Pt(h)?(e.consume(h),c):i(h)}}function fS(e,t,i){return u;function u(o){return e.consume(o),l}function l(o){return Dt(o)?i(o):t(o)}}function zb(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||$e(e)}function qb(e){return!Pt(e)}function jb(e){return!(e===47||hh(e))}function hh(e){return e===43||e===45||e===46||e===95||Dt(e)}function jh(e){let t=e.length,i=!1;for(;t--;){const u=e[t][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){i=!0;break}if(u._gfmAutolinkLiteralWalkedInto){i=!1;break}}return e.length>0&&!i&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),i}function Sa(e){const t=[];let i=-1,u=0,l=0;for(;++i<e.length;){const o=e.charCodeAt(i);let c="";if(o===37&&Dt(e.charCodeAt(i+1))&&Dt(e.charCodeAt(i+2)))l=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(c=String.fromCharCode(o));else if(o>55295&&o<57344){const h=e.charCodeAt(i+1);o<56320&&h>56319&&h<57344?(c=String.fromCharCode(o,h),l=1):c="�"}else c=String.fromCharCode(o);c&&(t.push(e.slice(u,i),encodeURIComponent(c)),u=i+l+1,c=""),l&&(i+=l,l=0)}return t.join("")+e.slice(u)}function to(e,t,i){const u=[];let l=-1;for(;++l<e.length;){const o=e[l].resolveAll;o&&!u.includes(o)&&(t=o(t,i),u.push(o))}return t}const dh={name:"attention",resolveAll:hS,tokenize:dS};function hS(e,t){let i=-1,u,l,o,c,h,d,p,y;for(;++i<e.length;)if(e[i][0]==="enter"&&e[i][1].type==="attentionSequence"&&e[i][1]._close){for(u=i;u--;)if(e[u][0]==="exit"&&e[u][1].type==="attentionSequence"&&e[u][1]._open&&t.sliceSerialize(e[u][1]).charCodeAt(0)===t.sliceSerialize(e[i][1]).charCodeAt(0)){if((e[u][1]._close||e[i][1]._open)&&(e[i][1].end.offset-e[i][1].start.offset)%3&&!((e[u][1].end.offset-e[u][1].start.offset+e[i][1].end.offset-e[i][1].start.offset)%3))continue;d=e[u][1].end.offset-e[u][1].start.offset>1&&e[i][1].end.offset-e[i][1].start.offset>1?2:1;const b={...e[u][1].end},v={...e[i][1].start};Ig(b,-d),Ig(v,d),c={type:d>1?"strongSequence":"emphasisSequence",start:b,end:{...e[u][1].end}},h={type:d>1?"strongSequence":"emphasisSequence",start:{...e[i][1].start},end:v},o={type:d>1?"strongText":"emphasisText",start:{...e[u][1].end},end:{...e[i][1].start}},l={type:d>1?"strong":"emphasis",start:{...c.start},end:{...h.end}},e[u][1].end={...c.start},e[i][1].start={...h.end},p=[],e[u][1].end.offset-e[u][1].start.offset&&(p=wn(p,[["enter",e[u][1],t],["exit",e[u][1],t]])),p=wn(p,[["enter",l,t],["enter",c,t],["exit",c,t],["enter",o,t]]),p=wn(p,to(t.parser.constructs.insideSpan.null,e.slice(u+1,i),t)),p=wn(p,[["exit",o,t],["enter",h,t],["exit",h,t],["exit",l,t]]),e[i][1].end.offset-e[i][1].start.offset?(y=2,p=wn(p,[["enter",e[i][1],t],["exit",e[i][1],t]])):y=0,on(e,u-1,i-u+3,p),i=u+p.length-y-2;break}}for(i=-1;++i<e.length;)e[i][1].type==="attentionSequence"&&(e[i][1].type="data");return e}function dS(e,t){const i=this.parser.constructs.attentionMarkers.null,u=this.previous,l=Ta(u);let o;return c;function c(d){return o=d,e.enter("attentionSequence"),h(d)}function h(d){if(d===o)return e.consume(d),h;const p=e.exit("attentionSequence"),y=Ta(d),b=!y||y===2&&l||i.includes(d),v=!l||l===2&&y||i.includes(u);return p._open=!!(o===42?b:b&&(l||!v)),p._close=!!(o===42?v:v&&(y||!b)),t(d)}}function Ig(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const mS={name:"autolink",tokenize:pS};function pS(e,t,i){let u=0;return l;function l(E){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(E),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(E){return Pt(E)?(e.consume(E),c):E===64?i(E):p(E)}function c(E){return E===43||E===45||E===46||Dt(E)?(u=1,h(E)):p(E)}function h(E){return E===58?(e.consume(E),u=0,d):(E===43||E===45||E===46||Dt(E))&&u++<32?(e.consume(E),h):(u=0,p(E))}function d(E){return E===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(E),e.exit("autolinkMarker"),e.exit("autolink"),t):E===null||E===32||E===60||Ul(E)?i(E):(e.consume(E),d)}function p(E){return E===64?(e.consume(E),y):lw(E)?(e.consume(E),p):i(E)}function y(E){return Dt(E)?b(E):i(E)}function b(E){return E===46?(e.consume(E),u=0,y):E===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(E),e.exit("autolinkMarker"),e.exit("autolink"),t):v(E)}function v(E){if((E===45||Dt(E))&&u++<63){const A=E===45?v:b;return e.consume(E),A}return i(E)}}function He(e,t,i,u){const l=u?u-1:Number.POSITIVE_INFINITY;let o=0;return c;function c(d){return Me(d)?(e.enter(i),h(d)):t(d)}function h(d){return Me(d)&&o++<l?(e.consume(d),h):(e.exit(i),t(d))}}const $u={partial:!0,tokenize:gS};function gS(e,t,i){return u;function u(o){return Me(o)?He(e,l,"linePrefix")(o):l(o)}function l(o){return o===null||Ae(o)?t(o):i(o)}}const Yb={continuation:{tokenize:yS},exit:TS,name:"blockQuote",tokenize:bS};function bS(e,t,i){const u=this;return l;function l(c){if(c===62){const h=u.containerState;return h.open||(e.enter("blockQuote",{_container:!0}),h.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(c),e.exit("blockQuoteMarker"),o}return i(c)}function o(c){return Me(c)?(e.enter("blockQuotePrefixWhitespace"),e.consume(c),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(c))}}function yS(e,t,i){const u=this;return l;function l(c){return Me(c)?He(e,o,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c):o(c)}function o(c){return e.attempt(Yb,t,i)(c)}}function TS(e){e.exit("blockQuote")}const Vb={name:"characterEscape",tokenize:ES};function ES(e,t,i){return u;function u(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),l}function l(o){return cw(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):i(o)}}const Gb={name:"characterReference",tokenize:vS};function vS(e,t,i){const u=this;let l=0,o,c;return h;function h(b){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(b),e.exit("characterReferenceMarker"),d}function d(b){return b===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(b),e.exit("characterReferenceMarkerNumeric"),p):(e.enter("characterReferenceValue"),o=31,c=Dt,y(b))}function p(b){return b===88||b===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(b),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,c=ow,y):(e.enter("characterReferenceValue"),o=7,c=ch,y(b))}function y(b){if(b===59&&l){const v=e.exit("characterReferenceValue");return c===Dt&&!qh(u.sliceSerialize(v))?i(b):(e.enter("characterReferenceMarker"),e.consume(b),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return c(b)&&l++<o?(e.consume(b),y):i(b)}}const Mg={partial:!0,tokenize:wS},Bg={concrete:!0,name:"codeFenced",tokenize:AS};function AS(e,t,i){const u=this,l={partial:!0,tokenize:ne};let o=0,c=0,h;return d;function d(G){return p(G)}function p(G){const le=u.events[u.events.length-1];return o=le&&le[1].type==="linePrefix"?le[2].sliceSerialize(le[1],!0).length:0,h=G,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),y(G)}function y(G){return G===h?(c++,e.consume(G),y):c<3?i(G):(e.exit("codeFencedFenceSequence"),Me(G)?He(e,b,"whitespace")(G):b(G))}function b(G){return G===null||Ae(G)?(e.exit("codeFencedFence"),u.interrupt?t(G):e.check(Mg,_,ee)(G)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),v(G))}function v(G){return G===null||Ae(G)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),b(G)):Me(G)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),He(e,E,"whitespace")(G)):G===96&&G===h?i(G):(e.consume(G),v)}function E(G){return G===null||Ae(G)?b(G):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),A(G))}function A(G){return G===null||Ae(G)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),b(G)):G===96&&G===h?i(G):(e.consume(G),A)}function _(G){return e.attempt(l,ee,k)(G)}function k(G){return e.enter("lineEnding"),e.consume(G),e.exit("lineEnding"),N}function N(G){return o>0&&Me(G)?He(e,L,"linePrefix",o+1)(G):L(G)}function L(G){return G===null||Ae(G)?e.check(Mg,_,ee)(G):(e.enter("codeFlowValue"),F(G))}function F(G){return G===null||Ae(G)?(e.exit("codeFlowValue"),L(G)):(e.consume(G),F)}function ee(G){return e.exit("codeFenced"),t(G)}function ne(G,le,ye){let de=0;return Y;function Y(se){return G.enter("lineEnding"),G.consume(se),G.exit("lineEnding"),oe}function oe(se){return G.enter("codeFencedFence"),Me(se)?He(G,fe,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(se):fe(se)}function fe(se){return se===h?(G.enter("codeFencedFenceSequence"),me(se)):ye(se)}function me(se){return se===h?(de++,G.consume(se),me):de>=c?(G.exit("codeFencedFenceSequence"),Me(se)?He(G,ae,"whitespace")(se):ae(se)):ye(se)}function ae(se){return se===null||Ae(se)?(G.exit("codeFencedFence"),le(se)):ye(se)}}}function wS(e,t,i){const u=this;return l;function l(c){return c===null?i(c):(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),o)}function o(c){return u.parser.lazy[u.now().line]?i(c):t(c)}}const Hf={name:"codeIndented",tokenize:SS},xS={partial:!0,tokenize:CS};function SS(e,t,i){const u=this;return l;function l(p){return e.enter("codeIndented"),He(e,o,"linePrefix",5)(p)}function o(p){const y=u.events[u.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?c(p):i(p)}function c(p){return p===null?d(p):Ae(p)?e.attempt(xS,c,d)(p):(e.enter("codeFlowValue"),h(p))}function h(p){return p===null||Ae(p)?(e.exit("codeFlowValue"),c(p)):(e.consume(p),h)}function d(p){return e.exit("codeIndented"),t(p)}}function CS(e,t,i){const u=this;return l;function l(c){return u.parser.lazy[u.now().line]?i(c):Ae(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),l):He(e,o,"linePrefix",5)(c)}function o(c){const h=u.events[u.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?t(c):Ae(c)?l(c):i(c)}}const _S={name:"codeText",previous:OS,resolve:NS,tokenize:kS};function NS(e){let t=e.length-4,i=3,u,l;if((e[i][1].type==="lineEnding"||e[i][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(u=i;++u<t;)if(e[u][1].type==="codeTextData"){e[i][1].type="codeTextPadding",e[t][1].type="codeTextPadding",i+=2,t-=2;break}}for(u=i-1,t++;++u<=t;)l===void 0?u!==t&&e[u][1].type!=="lineEnding"&&(l=u):(u===t||e[u][1].type==="lineEnding")&&(e[l][1].type="codeTextData",u!==l+2&&(e[l][1].end=e[u-1][1].end,e.splice(l+2,u-l-2),t-=u-l-2,u=l+2),l=void 0);return e}function OS(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function kS(e,t,i){let u=0,l,o;return c;function c(b){return e.enter("codeText"),e.enter("codeTextSequence"),h(b)}function h(b){return b===96?(e.consume(b),u++,h):(e.exit("codeTextSequence"),d(b))}function d(b){return b===null?i(b):b===32?(e.enter("space"),e.consume(b),e.exit("space"),d):b===96?(o=e.enter("codeTextSequence"),l=0,y(b)):Ae(b)?(e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),d):(e.enter("codeTextData"),p(b))}function p(b){return b===null||b===32||b===96||Ae(b)?(e.exit("codeTextData"),d(b)):(e.consume(b),p)}function y(b){return b===96?(e.consume(b),l++,y):l===u?(e.exit("codeTextSequence"),e.exit("codeText"),t(b)):(o.type="codeTextData",p(b))}}class RS{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,i){const u=i??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(t,u):t>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(t,i,u){const l=i||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-l,Number.POSITIVE_INFINITY);return u&&Cu(this.left,u),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Cu(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Cu(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const i=this.left.splice(t,Number.POSITIVE_INFINITY);Cu(this.right,i.reverse())}else{const i=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Cu(this.left,i.reverse())}}}function Cu(e,t){let i=0;if(t.length<1e4)e.push(...t);else for(;i<t.length;)e.push(...t.slice(i,i+1e4)),i+=1e4}function Qb(e){const t={};let i=-1,u,l,o,c,h,d,p;const y=new RS(e);for(;++i<y.length;){for(;i in t;)i=t[i];if(u=y.get(i),i&&u[1].type==="chunkFlow"&&y.get(i-1)[1].type==="listItemPrefix"&&(d=u[1]._tokenizer.events,o=0,o<d.length&&d[o][1].type==="lineEndingBlank"&&(o+=2),o<d.length&&d[o][1].type==="content"))for(;++o<d.length&&d[o][1].type!=="content";)d[o][1].type==="chunkText"&&(d[o][1]._isInFirstContentOfListItem=!0,o++);if(u[0]==="enter")u[1].contentType&&(Object.assign(t,DS(y,i)),i=t[i],p=!0);else if(u[1]._container){for(o=i,l=void 0;o--;)if(c=y.get(o),c[1].type==="lineEnding"||c[1].type==="lineEndingBlank")c[0]==="enter"&&(l&&(y.get(l)[1].type="lineEndingBlank"),c[1].type="lineEnding",l=o);else if(!(c[1].type==="linePrefix"||c[1].type==="listItemIndent"))break;l&&(u[1].end={...y.get(l)[1].start},h=y.slice(l,i),h.unshift(u),y.splice(l,i-l+1,h))}}return on(e,0,Number.POSITIVE_INFINITY,y.slice(0)),!p}function DS(e,t){const i=e.get(t)[1],u=e.get(t)[2];let l=t-1;const o=[];let c=i._tokenizer;c||(c=u.parser[i.contentType](i.start),i._contentTypeTextTrailing&&(c._contentTypeTextTrailing=!0));const h=c.events,d=[],p={};let y,b,v=-1,E=i,A=0,_=0;const k=[_];for(;E;){for(;e.get(++l)[1]!==E;);o.push(l),E._tokenizer||(y=u.sliceStream(E),E.next||y.push(null),b&&c.defineSkip(E.start),E._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=!0),c.write(y),E._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=void 0)),b=E,E=E.next}for(E=i;++v<h.length;)h[v][0]==="exit"&&h[v-1][0]==="enter"&&h[v][1].type===h[v-1][1].type&&h[v][1].start.line!==h[v][1].end.line&&(_=v+1,k.push(_),E._tokenizer=void 0,E.previous=void 0,E=E.next);for(c.events=[],E?(E._tokenizer=void 0,E.previous=void 0):k.pop(),v=k.length;v--;){const N=h.slice(k[v],k[v+1]),L=o.pop();d.push([L,L+N.length-1]),e.splice(L,2,N)}for(d.reverse(),v=-1;++v<d.length;)p[A+d[v][0]]=A+d[v][1],A+=d[v][1]-d[v][0]-1;return p}const LS={resolve:MS,tokenize:BS},IS={partial:!0,tokenize:FS};function MS(e){return Qb(e),e}function BS(e,t){let i;return u;function u(h){return e.enter("content"),i=e.enter("chunkContent",{contentType:"content"}),l(h)}function l(h){return h===null?o(h):Ae(h)?e.check(IS,c,o)(h):(e.consume(h),l)}function o(h){return e.exit("chunkContent"),e.exit("content"),t(h)}function c(h){return e.consume(h),e.exit("chunkContent"),i.next=e.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,l}}function FS(e,t,i){const u=this;return l;function l(c){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),He(e,o,"linePrefix")}function o(c){if(c===null||Ae(c))return i(c);const h=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?t(c):e.interrupt(u.parser.constructs.flow,i,t)(c)}}function Kb(e,t,i,u,l,o,c,h,d){const p=d||Number.POSITIVE_INFINITY;let y=0;return b;function b(N){return N===60?(e.enter(u),e.enter(l),e.enter(o),e.consume(N),e.exit(o),v):N===null||N===32||N===41||Ul(N)?i(N):(e.enter(u),e.enter(c),e.enter(h),e.enter("chunkString",{contentType:"string"}),_(N))}function v(N){return N===62?(e.enter(o),e.consume(N),e.exit(o),e.exit(l),e.exit(u),t):(e.enter(h),e.enter("chunkString",{contentType:"string"}),E(N))}function E(N){return N===62?(e.exit("chunkString"),e.exit(h),v(N)):N===null||N===60||Ae(N)?i(N):(e.consume(N),N===92?A:E)}function A(N){return N===60||N===62||N===92?(e.consume(N),E):E(N)}function _(N){return!y&&(N===null||N===41||$e(N))?(e.exit("chunkString"),e.exit(h),e.exit(c),e.exit(u),t(N)):y<p&&N===40?(e.consume(N),y++,_):N===41?(e.consume(N),y--,_):N===null||N===32||N===40||Ul(N)?i(N):(e.consume(N),N===92?k:_)}function k(N){return N===40||N===41||N===92?(e.consume(N),_):_(N)}}function Xb(e,t,i,u,l,o){const c=this;let h=0,d;return p;function p(E){return e.enter(u),e.enter(l),e.consume(E),e.exit(l),e.enter(o),y}function y(E){return h>999||E===null||E===91||E===93&&!d||E===94&&!h&&"_hiddenFootnoteSupport"in c.parser.constructs?i(E):E===93?(e.exit(o),e.enter(l),e.consume(E),e.exit(l),e.exit(u),t):Ae(E)?(e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),y):(e.enter("chunkString",{contentType:"string"}),b(E))}function b(E){return E===null||E===91||E===93||Ae(E)||h++>999?(e.exit("chunkString"),y(E)):(e.consume(E),d||(d=!Me(E)),E===92?v:b)}function v(E){return E===91||E===92||E===93?(e.consume(E),h++,b):b(E)}}function Wb(e,t,i,u,l,o){let c;return h;function h(v){return v===34||v===39||v===40?(e.enter(u),e.enter(l),e.consume(v),e.exit(l),c=v===40?41:v,d):i(v)}function d(v){return v===c?(e.enter(l),e.consume(v),e.exit(l),e.exit(u),t):(e.enter(o),p(v))}function p(v){return v===c?(e.exit(o),d(c)):v===null?i(v):Ae(v)?(e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),He(e,p,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),y(v))}function y(v){return v===c||v===null||Ae(v)?(e.exit("chunkString"),p(v)):(e.consume(v),v===92?b:y)}function b(v){return v===c||v===92?(e.consume(v),y):y(v)}}function Iu(e,t){let i;return u;function u(l){return Ae(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i=!0,u):Me(l)?He(e,u,i?"linePrefix":"lineSuffix")(l):t(l)}}const US={name:"definition",tokenize:HS},PS={partial:!0,tokenize:zS};function HS(e,t,i){const u=this;let l;return o;function o(E){return e.enter("definition"),c(E)}function c(E){return Xb.call(u,e,h,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(E)}function h(E){return l=On(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),E===58?(e.enter("definitionMarker"),e.consume(E),e.exit("definitionMarker"),d):i(E)}function d(E){return $e(E)?Iu(e,p)(E):p(E)}function p(E){return Kb(e,y,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(E)}function y(E){return e.attempt(PS,b,b)(E)}function b(E){return Me(E)?He(e,v,"whitespace")(E):v(E)}function v(E){return E===null||Ae(E)?(e.exit("definition"),u.parser.defined.push(l),t(E)):i(E)}}function zS(e,t,i){return u;function u(h){return $e(h)?Iu(e,l)(h):i(h)}function l(h){return Wb(e,o,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(h)}function o(h){return Me(h)?He(e,c,"whitespace")(h):c(h)}function c(h){return h===null||Ae(h)?t(h):i(h)}}const qS={name:"hardBreakEscape",tokenize:jS};function jS(e,t,i){return u;function u(o){return e.enter("hardBreakEscape"),e.consume(o),l}function l(o){return Ae(o)?(e.exit("hardBreakEscape"),t(o)):i(o)}}const YS={name:"headingAtx",resolve:VS,tokenize:GS};function VS(e,t){let i=e.length-2,u=3,l,o;return e[u][1].type==="whitespace"&&(u+=2),i-2>u&&e[i][1].type==="whitespace"&&(i-=2),e[i][1].type==="atxHeadingSequence"&&(u===i-1||i-4>u&&e[i-2][1].type==="whitespace")&&(i-=u+1===i?2:4),i>u&&(l={type:"atxHeadingText",start:e[u][1].start,end:e[i][1].end},o={type:"chunkText",start:e[u][1].start,end:e[i][1].end,contentType:"text"},on(e,u,i-u+1,[["enter",l,t],["enter",o,t],["exit",o,t],["exit",l,t]])),e}function GS(e,t,i){let u=0;return l;function l(y){return e.enter("atxHeading"),o(y)}function o(y){return e.enter("atxHeadingSequence"),c(y)}function c(y){return y===35&&u++<6?(e.consume(y),c):y===null||$e(y)?(e.exit("atxHeadingSequence"),h(y)):i(y)}function h(y){return y===35?(e.enter("atxHeadingSequence"),d(y)):y===null||Ae(y)?(e.exit("atxHeading"),t(y)):Me(y)?He(e,h,"whitespace")(y):(e.enter("atxHeadingText"),p(y))}function d(y){return y===35?(e.consume(y),d):(e.exit("atxHeadingSequence"),h(y))}function p(y){return y===null||y===35||$e(y)?(e.exit("atxHeadingText"),h(y)):(e.consume(y),p)}}const QS=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Fg=["pre","script","style","textarea"],KS={concrete:!0,name:"htmlFlow",resolveTo:ZS,tokenize:JS},XS={partial:!0,tokenize:eC},WS={partial:!0,tokenize:$S};function ZS(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function JS(e,t,i){const u=this;let l,o,c,h,d;return p;function p(S){return y(S)}function y(S){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(S),b}function b(S){return S===33?(e.consume(S),v):S===47?(e.consume(S),o=!0,_):S===63?(e.consume(S),l=3,u.interrupt?t:D):Pt(S)?(e.consume(S),c=String.fromCharCode(S),k):i(S)}function v(S){return S===45?(e.consume(S),l=2,E):S===91?(e.consume(S),l=5,h=0,A):Pt(S)?(e.consume(S),l=4,u.interrupt?t:D):i(S)}function E(S){return S===45?(e.consume(S),u.interrupt?t:D):i(S)}function A(S){const he="CDATA[";return S===he.charCodeAt(h++)?(e.consume(S),h===he.length?u.interrupt?t:fe:A):i(S)}function _(S){return Pt(S)?(e.consume(S),c=String.fromCharCode(S),k):i(S)}function k(S){if(S===null||S===47||S===62||$e(S)){const he=S===47,xe=c.toLowerCase();return!he&&!o&&Fg.includes(xe)?(l=1,u.interrupt?t(S):fe(S)):QS.includes(c.toLowerCase())?(l=6,he?(e.consume(S),N):u.interrupt?t(S):fe(S)):(l=7,u.interrupt&&!u.parser.lazy[u.now().line]?i(S):o?L(S):F(S))}return S===45||Dt(S)?(e.consume(S),c+=String.fromCharCode(S),k):i(S)}function N(S){return S===62?(e.consume(S),u.interrupt?t:fe):i(S)}function L(S){return Me(S)?(e.consume(S),L):Y(S)}function F(S){return S===47?(e.consume(S),Y):S===58||S===95||Pt(S)?(e.consume(S),ee):Me(S)?(e.consume(S),F):Y(S)}function ee(S){return S===45||S===46||S===58||S===95||Dt(S)?(e.consume(S),ee):ne(S)}function ne(S){return S===61?(e.consume(S),G):Me(S)?(e.consume(S),ne):F(S)}function G(S){return S===null||S===60||S===61||S===62||S===96?i(S):S===34||S===39?(e.consume(S),d=S,le):Me(S)?(e.consume(S),G):ye(S)}function le(S){return S===d?(e.consume(S),d=null,de):S===null||Ae(S)?i(S):(e.consume(S),le)}function ye(S){return S===null||S===34||S===39||S===47||S===60||S===61||S===62||S===96||$e(S)?ne(S):(e.consume(S),ye)}function de(S){return S===47||S===62||Me(S)?F(S):i(S)}function Y(S){return S===62?(e.consume(S),oe):i(S)}function oe(S){return S===null||Ae(S)?fe(S):Me(S)?(e.consume(S),oe):i(S)}function fe(S){return S===45&&l===2?(e.consume(S),z):S===60&&l===1?(e.consume(S),ie):S===62&&l===4?(e.consume(S),M):S===63&&l===3?(e.consume(S),D):S===93&&l===5?(e.consume(S),ke):Ae(S)&&(l===6||l===7)?(e.exit("htmlFlowData"),e.check(XS,W,me)(S)):S===null||Ae(S)?(e.exit("htmlFlowData"),me(S)):(e.consume(S),fe)}function me(S){return e.check(WS,ae,W)(S)}function ae(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),se}function se(S){return S===null||Ae(S)?me(S):(e.enter("htmlFlowData"),fe(S))}function z(S){return S===45?(e.consume(S),D):fe(S)}function ie(S){return S===47?(e.consume(S),c="",be):fe(S)}function be(S){if(S===62){const he=c.toLowerCase();return Fg.includes(he)?(e.consume(S),M):fe(S)}return Pt(S)&&c.length<8?(e.consume(S),c+=String.fromCharCode(S),be):fe(S)}function ke(S){return S===93?(e.consume(S),D):fe(S)}function D(S){return S===62?(e.consume(S),M):S===45&&l===2?(e.consume(S),D):fe(S)}function M(S){return S===null||Ae(S)?(e.exit("htmlFlowData"),W(S)):(e.consume(S),M)}function W(S){return e.exit("htmlFlow"),t(S)}}function $S(e,t,i){const u=this;return l;function l(c){return Ae(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),o):i(c)}function o(c){return u.parser.lazy[u.now().line]?i(c):t(c)}}function eC(e,t,i){return u;function u(l){return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),e.attempt($u,t,i)}}const tC={name:"htmlText",tokenize:nC};function nC(e,t,i){const u=this;let l,o,c;return h;function h(D){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(D),d}function d(D){return D===33?(e.consume(D),p):D===47?(e.consume(D),ne):D===63?(e.consume(D),F):Pt(D)?(e.consume(D),ye):i(D)}function p(D){return D===45?(e.consume(D),y):D===91?(e.consume(D),o=0,A):Pt(D)?(e.consume(D),L):i(D)}function y(D){return D===45?(e.consume(D),E):i(D)}function b(D){return D===null?i(D):D===45?(e.consume(D),v):Ae(D)?(c=b,ie(D)):(e.consume(D),b)}function v(D){return D===45?(e.consume(D),E):b(D)}function E(D){return D===62?z(D):D===45?v(D):b(D)}function A(D){const M="CDATA[";return D===M.charCodeAt(o++)?(e.consume(D),o===M.length?_:A):i(D)}function _(D){return D===null?i(D):D===93?(e.consume(D),k):Ae(D)?(c=_,ie(D)):(e.consume(D),_)}function k(D){return D===93?(e.consume(D),N):_(D)}function N(D){return D===62?z(D):D===93?(e.consume(D),N):_(D)}function L(D){return D===null||D===62?z(D):Ae(D)?(c=L,ie(D)):(e.consume(D),L)}function F(D){return D===null?i(D):D===63?(e.consume(D),ee):Ae(D)?(c=F,ie(D)):(e.consume(D),F)}function ee(D){return D===62?z(D):F(D)}function ne(D){return Pt(D)?(e.consume(D),G):i(D)}function G(D){return D===45||Dt(D)?(e.consume(D),G):le(D)}function le(D){return Ae(D)?(c=le,ie(D)):Me(D)?(e.consume(D),le):z(D)}function ye(D){return D===45||Dt(D)?(e.consume(D),ye):D===47||D===62||$e(D)?de(D):i(D)}function de(D){return D===47?(e.consume(D),z):D===58||D===95||Pt(D)?(e.consume(D),Y):Ae(D)?(c=de,ie(D)):Me(D)?(e.consume(D),de):z(D)}function Y(D){return D===45||D===46||D===58||D===95||Dt(D)?(e.consume(D),Y):oe(D)}function oe(D){return D===61?(e.consume(D),fe):Ae(D)?(c=oe,ie(D)):Me(D)?(e.consume(D),oe):de(D)}function fe(D){return D===null||D===60||D===61||D===62||D===96?i(D):D===34||D===39?(e.consume(D),l=D,me):Ae(D)?(c=fe,ie(D)):Me(D)?(e.consume(D),fe):(e.consume(D),ae)}function me(D){return D===l?(e.consume(D),l=void 0,se):D===null?i(D):Ae(D)?(c=me,ie(D)):(e.consume(D),me)}function ae(D){return D===null||D===34||D===39||D===60||D===61||D===96?i(D):D===47||D===62||$e(D)?de(D):(e.consume(D),ae)}function se(D){return D===47||D===62||$e(D)?de(D):i(D)}function z(D){return D===62?(e.consume(D),e.exit("htmlTextData"),e.exit("htmlText"),t):i(D)}function ie(D){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(D),e.exit("lineEnding"),be}function be(D){return Me(D)?He(e,ke,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(D):ke(D)}function ke(D){return e.enter("htmlTextData"),c(D)}}const Yh={name:"labelEnd",resolveAll:uC,resolveTo:sC,tokenize:lC},rC={tokenize:oC},iC={tokenize:cC},aC={tokenize:fC};function uC(e){let t=-1;const i=[];for(;++t<e.length;){const u=e[t][1];if(i.push(e[t]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const l=u.type==="labelImage"?4:2;u.type="data",t+=l}}return e.length!==i.length&&on(e,0,e.length,i),e}function sC(e,t){let i=e.length,u=0,l,o,c,h;for(;i--;)if(l=e[i][1],o){if(l.type==="link"||l.type==="labelLink"&&l._inactive)break;e[i][0]==="enter"&&l.type==="labelLink"&&(l._inactive=!0)}else if(c){if(e[i][0]==="enter"&&(l.type==="labelImage"||l.type==="labelLink")&&!l._balanced&&(o=i,l.type!=="labelLink")){u=2;break}}else l.type==="labelEnd"&&(c=i);const d={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},p={type:"label",start:{...e[o][1].start},end:{...e[c][1].end}},y={type:"labelText",start:{...e[o+u+2][1].end},end:{...e[c-2][1].start}};return h=[["enter",d,t],["enter",p,t]],h=wn(h,e.slice(o+1,o+u+3)),h=wn(h,[["enter",y,t]]),h=wn(h,to(t.parser.constructs.insideSpan.null,e.slice(o+u+4,c-3),t)),h=wn(h,[["exit",y,t],e[c-2],e[c-1],["exit",p,t]]),h=wn(h,e.slice(c+1)),h=wn(h,[["exit",d,t]]),on(e,o,e.length,h),e}function lC(e,t,i){const u=this;let l=u.events.length,o,c;for(;l--;)if((u.events[l][1].type==="labelImage"||u.events[l][1].type==="labelLink")&&!u.events[l][1]._balanced){o=u.events[l][1];break}return h;function h(v){return o?o._inactive?b(v):(c=u.parser.defined.includes(On(u.sliceSerialize({start:o.end,end:u.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(v),e.exit("labelMarker"),e.exit("labelEnd"),d):i(v)}function d(v){return v===40?e.attempt(rC,y,c?y:b)(v):v===91?e.attempt(iC,y,c?p:b)(v):c?y(v):b(v)}function p(v){return e.attempt(aC,y,b)(v)}function y(v){return t(v)}function b(v){return o._balanced=!0,i(v)}}function oC(e,t,i){return u;function u(b){return e.enter("resource"),e.enter("resourceMarker"),e.consume(b),e.exit("resourceMarker"),l}function l(b){return $e(b)?Iu(e,o)(b):o(b)}function o(b){return b===41?y(b):Kb(e,c,h,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(b)}function c(b){return $e(b)?Iu(e,d)(b):y(b)}function h(b){return i(b)}function d(b){return b===34||b===39||b===40?Wb(e,p,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(b):y(b)}function p(b){return $e(b)?Iu(e,y)(b):y(b)}function y(b){return b===41?(e.enter("resourceMarker"),e.consume(b),e.exit("resourceMarker"),e.exit("resource"),t):i(b)}}function cC(e,t,i){const u=this;return l;function l(h){return Xb.call(u,e,o,c,"reference","referenceMarker","referenceString")(h)}function o(h){return u.parser.defined.includes(On(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?t(h):i(h)}function c(h){return i(h)}}function fC(e,t,i){return u;function u(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),l}function l(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):i(o)}}const hC={name:"labelStartImage",resolveAll:Yh.resolveAll,tokenize:dC};function dC(e,t,i){const u=this;return l;function l(h){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(h),e.exit("labelImageMarker"),o}function o(h){return h===91?(e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelImage"),c):i(h)}function c(h){return h===94&&"_hiddenFootnoteSupport"in u.parser.constructs?i(h):t(h)}}const mC={name:"labelStartLink",resolveAll:Yh.resolveAll,tokenize:pC};function pC(e,t,i){const u=this;return l;function l(c){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(c),e.exit("labelMarker"),e.exit("labelLink"),o}function o(c){return c===94&&"_hiddenFootnoteSupport"in u.parser.constructs?i(c):t(c)}}const zf={name:"lineEnding",tokenize:gC};function gC(e,t){return i;function i(u){return e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),He(e,t,"linePrefix")}}const Ll={name:"thematicBreak",tokenize:bC};function bC(e,t,i){let u=0,l;return o;function o(p){return e.enter("thematicBreak"),c(p)}function c(p){return l=p,h(p)}function h(p){return p===l?(e.enter("thematicBreakSequence"),d(p)):u>=3&&(p===null||Ae(p))?(e.exit("thematicBreak"),t(p)):i(p)}function d(p){return p===l?(e.consume(p),u++,d):(e.exit("thematicBreakSequence"),Me(p)?He(e,h,"whitespace")(p):h(p))}}const Wt={continuation:{tokenize:vC},exit:wC,name:"list",tokenize:EC},yC={partial:!0,tokenize:xC},TC={partial:!0,tokenize:AC};function EC(e,t,i){const u=this,l=u.events[u.events.length-1];let o=l&&l[1].type==="linePrefix"?l[2].sliceSerialize(l[1],!0).length:0,c=0;return h;function h(E){const A=u.containerState.type||(E===42||E===43||E===45?"listUnordered":"listOrdered");if(A==="listUnordered"?!u.containerState.marker||E===u.containerState.marker:ch(E)){if(u.containerState.type||(u.containerState.type=A,e.enter(A,{_container:!0})),A==="listUnordered")return e.enter("listItemPrefix"),E===42||E===45?e.check(Ll,i,p)(E):p(E);if(!u.interrupt||E===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),d(E)}return i(E)}function d(E){return ch(E)&&++c<10?(e.consume(E),d):(!u.interrupt||c<2)&&(u.containerState.marker?E===u.containerState.marker:E===41||E===46)?(e.exit("listItemValue"),p(E)):i(E)}function p(E){return e.enter("listItemMarker"),e.consume(E),e.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||E,e.check($u,u.interrupt?i:y,e.attempt(yC,v,b))}function y(E){return u.containerState.initialBlankLine=!0,o++,v(E)}function b(E){return Me(E)?(e.enter("listItemPrefixWhitespace"),e.consume(E),e.exit("listItemPrefixWhitespace"),v):i(E)}function v(E){return u.containerState.size=o+u.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(E)}}function vC(e,t,i){const u=this;return u.containerState._closeFlow=void 0,e.check($u,l,o);function l(h){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,He(e,t,"listItemIndent",u.containerState.size+1)(h)}function o(h){return u.containerState.furtherBlankLines||!Me(h)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,c(h)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,e.attempt(TC,t,c)(h))}function c(h){return u.containerState._closeFlow=!0,u.interrupt=void 0,He(e,e.attempt(Wt,t,i),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h)}}function AC(e,t,i){const u=this;return He(e,l,"listItemIndent",u.containerState.size+1);function l(o){const c=u.events[u.events.length-1];return c&&c[1].type==="listItemIndent"&&c[2].sliceSerialize(c[1],!0).length===u.containerState.size?t(o):i(o)}}function wC(e){e.exit(this.containerState.type)}function xC(e,t,i){const u=this;return He(e,l,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function l(o){const c=u.events[u.events.length-1];return!Me(o)&&c&&c[1].type==="listItemPrefixWhitespace"?t(o):i(o)}}const Ug={name:"setextUnderline",resolveTo:SC,tokenize:CC};function SC(e,t){let i=e.length,u,l,o;for(;i--;)if(e[i][0]==="enter"){if(e[i][1].type==="content"){u=i;break}e[i][1].type==="paragraph"&&(l=i)}else e[i][1].type==="content"&&e.splice(i,1),!o&&e[i][1].type==="definition"&&(o=i);const c={type:"setextHeading",start:{...e[u][1].start},end:{...e[e.length-1][1].end}};return e[l][1].type="setextHeadingText",o?(e.splice(l,0,["enter",c,t]),e.splice(o+1,0,["exit",e[u][1],t]),e[u][1].end={...e[o][1].end}):e[u][1]=c,e.push(["exit",c,t]),e}function CC(e,t,i){const u=this;let l;return o;function o(p){let y=u.events.length,b;for(;y--;)if(u.events[y][1].type!=="lineEnding"&&u.events[y][1].type!=="linePrefix"&&u.events[y][1].type!=="content"){b=u.events[y][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||b)?(e.enter("setextHeadingLine"),l=p,c(p)):i(p)}function c(p){return e.enter("setextHeadingLineSequence"),h(p)}function h(p){return p===l?(e.consume(p),h):(e.exit("setextHeadingLineSequence"),Me(p)?He(e,d,"lineSuffix")(p):d(p))}function d(p){return p===null||Ae(p)?(e.exit("setextHeadingLine"),t(p)):i(p)}}const _C={tokenize:MC,partial:!0};function NC(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:DC,continuation:{tokenize:LC},exit:IC}},text:{91:{name:"gfmFootnoteCall",tokenize:RC},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:OC,resolveTo:kC}}}}function OC(e,t,i){const u=this;let l=u.events.length;const o=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let c;for(;l--;){const d=u.events[l][1];if(d.type==="labelImage"){c=d;break}if(d.type==="gfmFootnoteCall"||d.type==="labelLink"||d.type==="label"||d.type==="image"||d.type==="link")break}return h;function h(d){if(!c||!c._balanced)return i(d);const p=On(u.sliceSerialize({start:c.end,end:u.now()}));return p.codePointAt(0)!==94||!o.includes(p.slice(1))?i(d):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),t(d))}}function kC(e,t){let i=e.length;for(;i--;)if(e[i][1].type==="labelImage"&&e[i][0]==="enter"){e[i][1];break}e[i+1][1].type="data",e[i+3][1].type="gfmFootnoteCallLabelMarker";const u={type:"gfmFootnoteCall",start:Object.assign({},e[i+3][1].start),end:Object.assign({},e[e.length-1][1].end)},l={type:"gfmFootnoteCallMarker",start:Object.assign({},e[i+3][1].end),end:Object.assign({},e[i+3][1].end)};l.end.column++,l.end.offset++,l.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},l.end),end:Object.assign({},e[e.length-1][1].start)},c={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},h=[e[i+1],e[i+2],["enter",u,t],e[i+3],e[i+4],["enter",l,t],["exit",l,t],["enter",o,t],["enter",c,t],["exit",c,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",u,t]];return e.splice(i,e.length-i+1,...h),e}function RC(e,t,i){const u=this,l=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let o=0,c;return h;function h(b){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(b),e.exit("gfmFootnoteCallLabelMarker"),d}function d(b){return b!==94?i(b):(e.enter("gfmFootnoteCallMarker"),e.consume(b),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",p)}function p(b){if(o>999||b===93&&!c||b===null||b===91||$e(b))return i(b);if(b===93){e.exit("chunkString");const v=e.exit("gfmFootnoteCallString");return l.includes(On(u.sliceSerialize(v)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(b),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):i(b)}return $e(b)||(c=!0),o++,e.consume(b),b===92?y:p}function y(b){return b===91||b===92||b===93?(e.consume(b),o++,p):p(b)}}function DC(e,t,i){const u=this,l=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let o,c=0,h;return d;function d(A){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(A),e.exit("gfmFootnoteDefinitionLabelMarker"),p}function p(A){return A===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(A),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",y):i(A)}function y(A){if(c>999||A===93&&!h||A===null||A===91||$e(A))return i(A);if(A===93){e.exit("chunkString");const _=e.exit("gfmFootnoteDefinitionLabelString");return o=On(u.sliceSerialize(_)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(A),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),v}return $e(A)||(h=!0),c++,e.consume(A),A===92?b:y}function b(A){return A===91||A===92||A===93?(e.consume(A),c++,y):y(A)}function v(A){return A===58?(e.enter("definitionMarker"),e.consume(A),e.exit("definitionMarker"),l.includes(o)||l.push(o),He(e,E,"gfmFootnoteDefinitionWhitespace")):i(A)}function E(A){return t(A)}}function LC(e,t,i){return e.check($u,t,e.attempt(_C,t,i))}function IC(e){e.exit("gfmFootnoteDefinition")}function MC(e,t,i){const u=this;return He(e,l,"gfmFootnoteDefinitionIndent",5);function l(o){const c=u.events[u.events.length-1];return c&&c[1].type==="gfmFootnoteDefinitionIndent"&&c[2].sliceSerialize(c[1],!0).length===4?t(o):i(o)}}function BC(e){let i=(e||{}).singleTilde;const u={name:"strikethrough",tokenize:o,resolveAll:l};return i==null&&(i=!0),{text:{126:u},insideSpan:{null:[u]},attentionMarkers:{null:[126]}};function l(c,h){let d=-1;for(;++d<c.length;)if(c[d][0]==="enter"&&c[d][1].type==="strikethroughSequenceTemporary"&&c[d][1]._close){let p=d;for(;p--;)if(c[p][0]==="exit"&&c[p][1].type==="strikethroughSequenceTemporary"&&c[p][1]._open&&c[d][1].end.offset-c[d][1].start.offset===c[p][1].end.offset-c[p][1].start.offset){c[d][1].type="strikethroughSequence",c[p][1].type="strikethroughSequence";const y={type:"strikethrough",start:Object.assign({},c[p][1].start),end:Object.assign({},c[d][1].end)},b={type:"strikethroughText",start:Object.assign({},c[p][1].end),end:Object.assign({},c[d][1].start)},v=[["enter",y,h],["enter",c[p][1],h],["exit",c[p][1],h],["enter",b,h]],E=h.parser.constructs.insideSpan.null;E&&on(v,v.length,0,to(E,c.slice(p+1,d),h)),on(v,v.length,0,[["exit",b,h],["enter",c[d][1],h],["exit",c[d][1],h],["exit",y,h]]),on(c,p-1,d-p+3,v),d=p+v.length-2;break}}for(d=-1;++d<c.length;)c[d][1].type==="strikethroughSequenceTemporary"&&(c[d][1].type="data");return c}function o(c,h,d){const p=this.previous,y=this.events;let b=0;return v;function v(A){return p===126&&y[y.length-1][1].type!=="characterEscape"?d(A):(c.enter("strikethroughSequenceTemporary"),E(A))}function E(A){const _=Ta(p);if(A===126)return b>1?d(A):(c.consume(A),b++,E);if(b<2&&!i)return d(A);const k=c.exit("strikethroughSequenceTemporary"),N=Ta(A);return k._open=!N||N===2&&!!_,k._close=!_||_===2&&!!N,h(A)}}}class FC{constructor(){this.map=[]}add(t,i,u){UC(this,t,i,u)}consume(t){if(this.map.sort(function(o,c){return o[0]-c[0]}),this.map.length===0)return;let i=this.map.length;const u=[];for(;i>0;)i-=1,u.push(t.slice(this.map[i][0]+this.map[i][1]),this.map[i][2]),t.length=this.map[i][0];u.push(t.slice()),t.length=0;let l=u.pop();for(;l;){for(const o of l)t.push(o);l=u.pop()}this.map.length=0}}function UC(e,t,i,u){let l=0;if(!(i===0&&u.length===0)){for(;l<e.map.length;){if(e.map[l][0]===t){e.map[l][1]+=i,e.map[l][2].push(...u);return}l+=1}e.map.push([t,i,u])}}function PC(e,t){let i=!1;const u=[];for(;t<e.length;){const l=e[t];if(i){if(l[0]==="enter")l[1].type==="tableContent"&&u.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(l[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const o=u.length-1;u[o]=u[o]==="left"?"center":"right"}}else if(l[1].type==="tableDelimiterRow")break}else l[0]==="enter"&&l[1].type==="tableDelimiterRow"&&(i=!0);t+=1}return u}function HC(){return{flow:{null:{name:"table",tokenize:zC,resolveAll:qC}}}}function zC(e,t,i){const u=this;let l=0,o=0,c;return h;function h(Y){let oe=u.events.length-1;for(;oe>-1;){const ae=u.events[oe][1].type;if(ae==="lineEnding"||ae==="linePrefix")oe--;else break}const fe=oe>-1?u.events[oe][1].type:null,me=fe==="tableHead"||fe==="tableRow"?G:d;return me===G&&u.parser.lazy[u.now().line]?i(Y):me(Y)}function d(Y){return e.enter("tableHead"),e.enter("tableRow"),p(Y)}function p(Y){return Y===124||(c=!0,o+=1),y(Y)}function y(Y){return Y===null?i(Y):Ae(Y)?o>1?(o=0,u.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(Y),e.exit("lineEnding"),E):i(Y):Me(Y)?He(e,y,"whitespace")(Y):(o+=1,c&&(c=!1,l+=1),Y===124?(e.enter("tableCellDivider"),e.consume(Y),e.exit("tableCellDivider"),c=!0,y):(e.enter("data"),b(Y)))}function b(Y){return Y===null||Y===124||$e(Y)?(e.exit("data"),y(Y)):(e.consume(Y),Y===92?v:b)}function v(Y){return Y===92||Y===124?(e.consume(Y),b):b(Y)}function E(Y){return u.interrupt=!1,u.parser.lazy[u.now().line]?i(Y):(e.enter("tableDelimiterRow"),c=!1,Me(Y)?He(e,A,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Y):A(Y))}function A(Y){return Y===45||Y===58?k(Y):Y===124?(c=!0,e.enter("tableCellDivider"),e.consume(Y),e.exit("tableCellDivider"),_):ne(Y)}function _(Y){return Me(Y)?He(e,k,"whitespace")(Y):k(Y)}function k(Y){return Y===58?(o+=1,c=!0,e.enter("tableDelimiterMarker"),e.consume(Y),e.exit("tableDelimiterMarker"),N):Y===45?(o+=1,N(Y)):Y===null||Ae(Y)?ee(Y):ne(Y)}function N(Y){return Y===45?(e.enter("tableDelimiterFiller"),L(Y)):ne(Y)}function L(Y){return Y===45?(e.consume(Y),L):Y===58?(c=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(Y),e.exit("tableDelimiterMarker"),F):(e.exit("tableDelimiterFiller"),F(Y))}function F(Y){return Me(Y)?He(e,ee,"whitespace")(Y):ee(Y)}function ee(Y){return Y===124?A(Y):Y===null||Ae(Y)?!c||l!==o?ne(Y):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(Y)):ne(Y)}function ne(Y){return i(Y)}function G(Y){return e.enter("tableRow"),le(Y)}function le(Y){return Y===124?(e.enter("tableCellDivider"),e.consume(Y),e.exit("tableCellDivider"),le):Y===null||Ae(Y)?(e.exit("tableRow"),t(Y)):Me(Y)?He(e,le,"whitespace")(Y):(e.enter("data"),ye(Y))}function ye(Y){return Y===null||Y===124||$e(Y)?(e.exit("data"),le(Y)):(e.consume(Y),Y===92?de:ye)}function de(Y){return Y===92||Y===124?(e.consume(Y),ye):ye(Y)}}function qC(e,t){let i=-1,u=!0,l=0,o=[0,0,0,0],c=[0,0,0,0],h=!1,d=0,p,y,b;const v=new FC;for(;++i<e.length;){const E=e[i],A=E[1];E[0]==="enter"?A.type==="tableHead"?(h=!1,d!==0&&(Pg(v,t,d,p,y),y=void 0,d=0),p={type:"table",start:Object.assign({},A.start),end:Object.assign({},A.end)},v.add(i,0,[["enter",p,t]])):A.type==="tableRow"||A.type==="tableDelimiterRow"?(u=!0,b=void 0,o=[0,0,0,0],c=[0,i+1,0,0],h&&(h=!1,y={type:"tableBody",start:Object.assign({},A.start),end:Object.assign({},A.end)},v.add(i,0,[["enter",y,t]])),l=A.type==="tableDelimiterRow"?2:y?3:1):l&&(A.type==="data"||A.type==="tableDelimiterMarker"||A.type==="tableDelimiterFiller")?(u=!1,c[2]===0&&(o[1]!==0&&(c[0]=c[1],b=Sl(v,t,o,l,void 0,b),o=[0,0,0,0]),c[2]=i)):A.type==="tableCellDivider"&&(u?u=!1:(o[1]!==0&&(c[0]=c[1],b=Sl(v,t,o,l,void 0,b)),o=c,c=[o[1],i,0,0])):A.type==="tableHead"?(h=!0,d=i):A.type==="tableRow"||A.type==="tableDelimiterRow"?(d=i,o[1]!==0?(c[0]=c[1],b=Sl(v,t,o,l,i,b)):c[1]!==0&&(b=Sl(v,t,c,l,i,b)),l=0):l&&(A.type==="data"||A.type==="tableDelimiterMarker"||A.type==="tableDelimiterFiller")&&(c[3]=i)}for(d!==0&&Pg(v,t,d,p,y),v.consume(t.events),i=-1;++i<t.events.length;){const E=t.events[i];E[0]==="enter"&&E[1].type==="table"&&(E[1]._align=PC(t.events,i))}return e}function Sl(e,t,i,u,l,o){const c=u===1?"tableHeader":u===2?"tableDelimiter":"tableData",h="tableContent";i[0]!==0&&(o.end=Object.assign({},da(t.events,i[0])),e.add(i[0],0,[["exit",o,t]]));const d=da(t.events,i[1]);if(o={type:c,start:Object.assign({},d),end:Object.assign({},d)},e.add(i[1],0,[["enter",o,t]]),i[2]!==0){const p=da(t.events,i[2]),y=da(t.events,i[3]),b={type:h,start:Object.assign({},p),end:Object.assign({},y)};if(e.add(i[2],0,[["enter",b,t]]),u!==2){const v=t.events[i[2]],E=t.events[i[3]];if(v[1].end=Object.assign({},E[1].end),v[1].type="chunkText",v[1].contentType="text",i[3]>i[2]+1){const A=i[2]+1,_=i[3]-i[2]-1;e.add(A,_,[])}}e.add(i[3]+1,0,[["exit",b,t]])}return l!==void 0&&(o.end=Object.assign({},da(t.events,l)),e.add(l,0,[["exit",o,t]]),o=void 0),o}function Pg(e,t,i,u,l){const o=[],c=da(t.events,i);l&&(l.end=Object.assign({},c),o.push(["exit",l,t])),u.end=Object.assign({},c),o.push(["exit",u,t]),e.add(i+1,0,o)}function da(e,t){const i=e[t],u=i[0]==="enter"?"start":"end";return i[1][u]}const jC={name:"tasklistCheck",tokenize:VC};function YC(){return{text:{91:jC}}}function VC(e,t,i){const u=this;return l;function l(d){return u.previous!==null||!u._gfmTasklistFirstContentOfListItem?i(d):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(d),e.exit("taskListCheckMarker"),o)}function o(d){return $e(d)?(e.enter("taskListCheckValueUnchecked"),e.consume(d),e.exit("taskListCheckValueUnchecked"),c):d===88||d===120?(e.enter("taskListCheckValueChecked"),e.consume(d),e.exit("taskListCheckValueChecked"),c):i(d)}function c(d){return d===93?(e.enter("taskListCheckMarker"),e.consume(d),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),h):i(d)}function h(d){return Ae(d)?t(d):Me(d)?e.check({tokenize:GC},t,i)(d):i(d)}}function GC(e,t,i){return He(e,u,"whitespace");function u(l){return l===null?i(l):t(l)}}function QC(e){return Mb([rS(),NC(),BC(e),HC(),YC()])}const KC={};function di(e){const t=this,i=e||KC,u=t.data(),l=u.micromarkExtensions||(u.micromarkExtensions=[]),o=u.fromMarkdownExtensions||(u.fromMarkdownExtensions=[]),c=u.toMarkdownExtensions||(u.toMarkdownExtensions=[]);l.push(QC(i)),o.push(Zx()),c.push(Jx(i))}function Hg(e){const t=[],i=String(e||"");let u=i.indexOf(","),l=0,o=!1;for(;!o;){u===-1&&(u=i.length,o=!0);const c=i.slice(l,u).trim();(c||!o)&&t.push(c),l=u+1,u=i.indexOf(",",l)}return t}function Zb(e,t){const i={};return(e[e.length-1]===""?[...e,""]:e).join((i.padRight?" ":"")+","+(i.padLeft===!1?"":" ")).trim()}const XC=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,WC=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ZC={};function zg(e,t){return(ZC.jsx?WC:XC).test(e)}const JC=/[ \t\n\f\r]/g;function $C(e){return typeof e=="object"?e.type==="text"?qg(e.value):!1:qg(e)}function qg(e){return e.replace(JC,"")===""}let es=class{constructor(t,i,u){this.normal=i,this.property=t,u&&(this.space=u)}};es.prototype.normal={};es.prototype.property={};es.prototype.space=void 0;function Jb(e,t){const i={},u={};for(const l of e)Object.assign(i,l.property),Object.assign(u,l.normal);return new es(i,u,t)}function Yu(e){return e.toLowerCase()}class Jt{constructor(t,i){this.attribute=i,this.property=t}}Jt.prototype.attribute="";Jt.prototype.booleanish=!1;Jt.prototype.boolean=!1;Jt.prototype.commaOrSpaceSeparated=!1;Jt.prototype.commaSeparated=!1;Jt.prototype.defined=!1;Jt.prototype.mustUseProperty=!1;Jt.prototype.number=!1;Jt.prototype.overloadedBoolean=!1;Jt.prototype.property="";Jt.prototype.spaceSeparated=!1;Jt.prototype.space=void 0;let e3=0;const Oe=Ei(),gt=Ei(),mh=Ei(),ue=Ei(),et=Ei(),ya=Ei(),ln=Ei();function Ei(){return 2**++e3}const ph=Object.freeze(Object.defineProperty({__proto__:null,boolean:Oe,booleanish:gt,commaOrSpaceSeparated:ln,commaSeparated:ya,number:ue,overloadedBoolean:mh,spaceSeparated:et},Symbol.toStringTag,{value:"Module"})),qf=Object.keys(ph);class Vh extends Jt{constructor(t,i,u,l){let o=-1;if(super(t,i),jg(this,"space",l),typeof u=="number")for(;++o<qf.length;){const c=qf[o];jg(this,qf[o],(u&ph[c])===ph[c])}}}Vh.prototype.defined=!0;function jg(e,t,i){i&&(e[t]=i)}function Ca(e){const t={},i={};for(const[u,l]of Object.entries(e.properties)){const o=new Vh(u,e.transform(e.attributes||{},u),l,e.space);e.mustUseProperty&&e.mustUseProperty.includes(u)&&(o.mustUseProperty=!0),t[u]=o,i[Yu(u)]=u,i[Yu(o.attribute)]=u}return new es(t,i,e.space)}const $b=Ca({properties:{ariaActiveDescendant:null,ariaAtomic:gt,ariaAutoComplete:null,ariaBusy:gt,ariaChecked:gt,ariaColCount:ue,ariaColIndex:ue,ariaColSpan:ue,ariaControls:et,ariaCurrent:null,ariaDescribedBy:et,ariaDetails:null,ariaDisabled:gt,ariaDropEffect:et,ariaErrorMessage:null,ariaExpanded:gt,ariaFlowTo:et,ariaGrabbed:gt,ariaHasPopup:null,ariaHidden:gt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:et,ariaLevel:ue,ariaLive:null,ariaModal:gt,ariaMultiLine:gt,ariaMultiSelectable:gt,ariaOrientation:null,ariaOwns:et,ariaPlaceholder:null,ariaPosInSet:ue,ariaPressed:gt,ariaReadOnly:gt,ariaRelevant:null,ariaRequired:gt,ariaRoleDescription:et,ariaRowCount:ue,ariaRowIndex:ue,ariaRowSpan:ue,ariaSelected:gt,ariaSetSize:ue,ariaSort:null,ariaValueMax:ue,ariaValueMin:ue,ariaValueNow:ue,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function ey(e,t){return t in e?e[t]:t}function ty(e,t){return ey(e,t.toLowerCase())}const t3=Ca({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ya,acceptCharset:et,accessKey:et,action:null,allow:null,allowFullScreen:Oe,allowPaymentRequest:Oe,allowUserMedia:Oe,alt:null,as:null,async:Oe,autoCapitalize:null,autoComplete:et,autoFocus:Oe,autoPlay:Oe,blocking:et,capture:null,charSet:null,checked:Oe,cite:null,className:et,cols:ue,colSpan:null,content:null,contentEditable:gt,controls:Oe,controlsList:et,coords:ue|ya,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Oe,defer:Oe,dir:null,dirName:null,disabled:Oe,download:mh,draggable:gt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Oe,formTarget:null,headers:et,height:ue,hidden:mh,high:ue,href:null,hrefLang:null,htmlFor:et,httpEquiv:et,id:null,imageSizes:null,imageSrcSet:null,inert:Oe,inputMode:null,integrity:null,is:null,isMap:Oe,itemId:null,itemProp:et,itemRef:et,itemScope:Oe,itemType:et,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Oe,low:ue,manifest:null,max:null,maxLength:ue,media:null,method:null,min:null,minLength:ue,multiple:Oe,muted:Oe,name:null,nonce:null,noModule:Oe,noValidate:Oe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Oe,optimum:ue,pattern:null,ping:et,placeholder:null,playsInline:Oe,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Oe,referrerPolicy:null,rel:et,required:Oe,reversed:Oe,rows:ue,rowSpan:ue,sandbox:et,scope:null,scoped:Oe,seamless:Oe,selected:Oe,shadowRootClonable:Oe,shadowRootDelegatesFocus:Oe,shadowRootMode:null,shape:null,size:ue,sizes:null,slot:null,span:ue,spellCheck:gt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ue,step:null,style:null,tabIndex:ue,target:null,title:null,translate:null,type:null,typeMustMatch:Oe,useMap:null,value:gt,width:ue,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:et,axis:null,background:null,bgColor:null,border:ue,borderColor:null,bottomMargin:ue,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Oe,declare:Oe,event:null,face:null,frame:null,frameBorder:null,hSpace:ue,leftMargin:ue,link:null,longDesc:null,lowSrc:null,marginHeight:ue,marginWidth:ue,noResize:Oe,noHref:Oe,noShade:Oe,noWrap:Oe,object:null,profile:null,prompt:null,rev:null,rightMargin:ue,rules:null,scheme:null,scrolling:gt,standby:null,summary:null,text:null,topMargin:ue,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ue,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Oe,disableRemotePlayback:Oe,prefix:null,property:null,results:ue,security:null,unselectable:null},space:"html",transform:ty}),n3=Ca({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ln,accentHeight:ue,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ue,amplitude:ue,arabicForm:null,ascent:ue,attributeName:null,attributeType:null,azimuth:ue,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ue,by:null,calcMode:null,capHeight:ue,className:et,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ue,diffuseConstant:ue,direction:null,display:null,dur:null,divisor:ue,dominantBaseline:null,download:Oe,dx:null,dy:null,edgeMode:null,editable:null,elevation:ue,enableBackground:null,end:null,event:null,exponent:ue,externalResourcesRequired:null,fill:null,fillOpacity:ue,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ya,g2:ya,glyphName:ya,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ue,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ue,horizOriginX:ue,horizOriginY:ue,id:null,ideographic:ue,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ue,k:ue,k1:ue,k2:ue,k3:ue,k4:ue,kernelMatrix:ln,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ue,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ue,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ue,overlineThickness:ue,paintOrder:null,panose1:null,path:null,pathLength:ue,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:et,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ue,pointsAtY:ue,pointsAtZ:ue,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ln,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ln,rev:ln,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ln,requiredFeatures:ln,requiredFonts:ln,requiredFormats:ln,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ue,specularExponent:ue,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ue,strikethroughThickness:ue,string:null,stroke:null,strokeDashArray:ln,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ue,strokeOpacity:ue,strokeWidth:null,style:null,surfaceScale:ue,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ln,tabIndex:ue,tableValues:null,target:null,targetX:ue,targetY:ue,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ln,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ue,underlineThickness:ue,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ue,values:null,vAlphabetic:ue,vMathematical:ue,vectorEffect:null,vHanging:ue,vIdeographic:ue,version:null,vertAdvY:ue,vertOriginX:ue,vertOriginY:ue,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ue,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ey}),ny=Ca({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),ry=Ca({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ty}),iy=Ca({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),r3={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},i3=/[A-Z]/g,Yg=/-[a-z]/g,a3=/^data[-\w.:]+$/i;function no(e,t){const i=Yu(t);let u=t,l=Jt;if(i in e.normal)return e.property[e.normal[i]];if(i.length>4&&i.slice(0,4)==="data"&&a3.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Yg,s3);u="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Yg.test(o)){let c=o.replace(i3,u3);c.charAt(0)!=="-"&&(c="-"+c),t="data"+c}}l=Vh}return new l(u,t)}function u3(e){return"-"+e.toLowerCase()}function s3(e){return e.charAt(1).toUpperCase()}const ts=Jb([$b,t3,ny,ry,iy],"html"),Qr=Jb([$b,n3,ny,ry,iy],"svg");function Vg(e){const t=String(e||"").trim();return t?t.split(/[ \t\n\r\f]+/g):[]}function ay(e){return e.join(" ").trim()}var ca={},jf,Gg;function l3(){if(Gg)return jf;Gg=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,i=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,l=/^:\s*/,o=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,h=/^\s+|\s+$/g,d=`
`,p="/",y="*",b="",v="comment",E="declaration";function A(k,N){if(typeof k!="string")throw new TypeError("First argument must be a string");if(!k)return[];N=N||{};var L=1,F=1;function ee(ae){var se=ae.match(t);se&&(L+=se.length);var z=ae.lastIndexOf(d);F=~z?ae.length-z:F+ae.length}function ne(){var ae={line:L,column:F};return function(se){return se.position=new G(ae),de(),se}}function G(ae){this.start=ae,this.end={line:L,column:F},this.source=N.source}G.prototype.content=k;function le(ae){var se=new Error(N.source+":"+L+":"+F+": "+ae);if(se.reason=ae,se.filename=N.source,se.line=L,se.column=F,se.source=k,!N.silent)throw se}function ye(ae){var se=ae.exec(k);if(se){var z=se[0];return ee(z),k=k.slice(z.length),se}}function de(){ye(i)}function Y(ae){var se;for(ae=ae||[];se=oe();)se!==!1&&ae.push(se);return ae}function oe(){var ae=ne();if(!(p!=k.charAt(0)||y!=k.charAt(1))){for(var se=2;b!=k.charAt(se)&&(y!=k.charAt(se)||p!=k.charAt(se+1));)++se;if(se+=2,b===k.charAt(se-1))return le("End of comment missing");var z=k.slice(2,se-2);return F+=2,ee(z),k=k.slice(se),F+=2,ae({type:v,comment:z})}}function fe(){var ae=ne(),se=ye(u);if(se){if(oe(),!ye(l))return le("property missing ':'");var z=ye(o),ie=ae({type:E,property:_(se[0].replace(e,b)),value:z?_(z[0].replace(e,b)):b});return ye(c),ie}}function me(){var ae=[];Y(ae);for(var se;se=fe();)se!==!1&&(ae.push(se),Y(ae));return ae}return de(),me()}function _(k){return k?k.replace(h,b):b}return jf=A,jf}var Qg;function o3(){if(Qg)return ca;Qg=1;var e=ca&&ca.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(ca,"__esModule",{value:!0}),ca.default=i;const t=e(l3());function i(u,l){let o=null;if(!u||typeof u!="string")return o;const c=(0,t.default)(u),h=typeof l=="function";return c.forEach(d=>{if(d.type!=="declaration")return;const{property:p,value:y}=d;h?l(p,y,d):y&&(o=o||{},o[p]=y)}),o}return ca}var _u={},Kg;function c3(){if(Kg)return _u;Kg=1,Object.defineProperty(_u,"__esModule",{value:!0}),_u.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,t=/-([a-z])/g,i=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,l=/^-(ms)-/,o=function(p){return!p||i.test(p)||e.test(p)},c=function(p,y){return y.toUpperCase()},h=function(p,y){return"".concat(y,"-")},d=function(p,y){return y===void 0&&(y={}),o(p)?p:(p=p.toLowerCase(),y.reactCompat?p=p.replace(l,h):p=p.replace(u,h),p.replace(t,c))};return _u.camelCase=d,_u}var Nu,Xg;function f3(){if(Xg)return Nu;Xg=1;var e=Nu&&Nu.__importDefault||function(l){return l&&l.__esModule?l:{default:l}},t=e(o3()),i=c3();function u(l,o){var c={};return!l||typeof l!="string"||(0,t.default)(l,function(h,d){h&&d&&(c[(0,i.camelCase)(h,o)]=d)}),c}return u.default=u,Nu=u,Nu}var h3=f3();const d3=W1(h3),ro=uy("end"),zn=uy("start");function uy(e){return t;function t(i){const u=i&&i.position&&i.position[e]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function m3(e){const t=zn(e),i=ro(e);if(t&&i)return{start:t,end:i}}function Mu(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Wg(e.position):"start"in e||"end"in e?Wg(e):"line"in e||"column"in e?gh(e):""}function gh(e){return Zg(e&&e.line)+":"+Zg(e&&e.column)}function Wg(e){return gh(e&&e.start)+"-"+gh(e&&e.end)}function Zg(e){return e&&typeof e=="number"?e:1}class Lt extends Error{constructor(t,i,u){super(),typeof i=="string"&&(u=i,i=void 0);let l="",o={},c=!1;if(i&&("line"in i&&"column"in i?o={place:i}:"start"in i&&"end"in i?o={place:i}:"type"in i?o={ancestors:[i],place:i.position}:o={...i}),typeof t=="string"?l=t:!o.cause&&t&&(c=!0,l=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof u=="string"){const d=u.indexOf(":");d===-1?o.ruleId=u:(o.source=u.slice(0,d),o.ruleId=u.slice(d+1))}if(!o.place&&o.ancestors&&o.ancestors){const d=o.ancestors[o.ancestors.length-1];d&&(o.place=d.position)}const h=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=h?h.column:void 0,this.fatal=void 0,this.file="",this.message=l,this.line=h?h.line:void 0,this.name=Mu(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=c&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Lt.prototype.file="";Lt.prototype.name="";Lt.prototype.reason="";Lt.prototype.message="";Lt.prototype.stack="";Lt.prototype.column=void 0;Lt.prototype.line=void 0;Lt.prototype.ancestors=void 0;Lt.prototype.cause=void 0;Lt.prototype.fatal=void 0;Lt.prototype.place=void 0;Lt.prototype.ruleId=void 0;Lt.prototype.source=void 0;const Gh={}.hasOwnProperty,p3=new Map,g3=/[A-Z]/g,b3=new Set(["table","tbody","thead","tfoot","tr"]),y3=new Set(["td","th"]),sy="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function T3(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const i=t.filePath||void 0;let u;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=_3(i,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=C3(i,t.jsx,t.jsxs)}const l={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:u,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:i,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Qr:ts,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=ly(l,e,void 0);return o&&typeof o!="string"?o:l.create(e,l.Fragment,{children:o||void 0},void 0)}function ly(e,t,i){if(t.type==="element")return E3(e,t,i);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return v3(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return w3(e,t,i);if(t.type==="mdxjsEsm")return A3(e,t);if(t.type==="root")return x3(e,t,i);if(t.type==="text")return S3(e,t)}function E3(e,t,i){const u=e.schema;let l=u;t.tagName.toLowerCase()==="svg"&&u.space==="html"&&(l=Qr,e.schema=l),e.ancestors.push(t);const o=cy(e,t.tagName,!1),c=N3(e,t);let h=Kh(e,t);return b3.has(t.tagName)&&(h=h.filter(function(d){return typeof d=="string"?!$C(d):!0})),oy(e,c,o,t),Qh(c,h),e.ancestors.pop(),e.schema=u,e.create(t,o,c,i)}function v3(e,t){if(t.data&&t.data.estree&&e.evaluater){const u=t.data.estree.body[0];return u.type,e.evaluater.evaluateExpression(u.expression)}Vu(e,t.position)}function A3(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Vu(e,t.position)}function w3(e,t,i){const u=e.schema;let l=u;t.name==="svg"&&u.space==="html"&&(l=Qr,e.schema=l),e.ancestors.push(t);const o=t.name===null?e.Fragment:cy(e,t.name,!0),c=O3(e,t),h=Kh(e,t);return oy(e,c,o,t),Qh(c,h),e.ancestors.pop(),e.schema=u,e.create(t,o,c,i)}function x3(e,t,i){const u={};return Qh(u,Kh(e,t)),e.create(t,e.Fragment,u,i)}function S3(e,t){return t.value}function oy(e,t,i,u){typeof i!="string"&&i!==e.Fragment&&e.passNode&&(t.node=u)}function Qh(e,t){if(t.length>0){const i=t.length>1?t:t[0];i&&(e.children=i)}}function C3(e,t,i){return u;function u(l,o,c,h){const p=Array.isArray(c.children)?i:t;return h?p(o,c,h):p(o,c)}}function _3(e,t){return i;function i(u,l,o,c){const h=Array.isArray(o.children),d=zn(u);return t(l,o,c,h,{columnNumber:d?d.column-1:void 0,fileName:e,lineNumber:d?d.line:void 0},void 0)}}function N3(e,t){const i={};let u,l;for(l in t.properties)if(l!=="children"&&Gh.call(t.properties,l)){const o=k3(e,l,t.properties[l]);if(o){const[c,h]=o;e.tableCellAlignToStyle&&c==="align"&&typeof h=="string"&&y3.has(t.tagName)?u=h:i[c]=h}}if(u){const o=i.style||(i.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return i}function O3(e,t){const i={};for(const u of t.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&e.evaluater){const o=u.data.estree.body[0];o.type;const c=o.expression;c.type;const h=c.properties[0];h.type,Object.assign(i,e.evaluater.evaluateExpression(h.argument))}else Vu(e,t.position);else{const l=u.name;let o;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&e.evaluater){const h=u.value.data.estree.body[0];h.type,o=e.evaluater.evaluateExpression(h.expression)}else Vu(e,t.position);else o=u.value===null?!0:u.value;i[l]=o}return i}function Kh(e,t){const i=[];let u=-1;const l=e.passKeys?new Map:p3;for(;++u<t.children.length;){const o=t.children[u];let c;if(e.passKeys){const d=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(d){const p=l.get(d)||0;c=d+"-"+p,l.set(d,p+1)}}const h=ly(e,o,c);h!==void 0&&i.push(h)}return i}function k3(e,t,i){const u=no(e.schema,t);if(!(i==null||typeof i=="number"&&Number.isNaN(i))){if(Array.isArray(i)&&(i=u.commaSeparated?Zb(i):ay(i)),u.property==="style"){let l=typeof i=="object"?i:R3(e,String(i));return e.stylePropertyNameCase==="css"&&(l=D3(l)),["style",l]}return[e.elementAttributeNameCase==="react"&&u.space?r3[u.property]||u.property:u.attribute,i]}}function R3(e,t){try{return d3(t,{reactCompat:!0})}catch(i){if(e.ignoreInvalidStyle)return{};const u=i,l=new Lt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=e.filePath||void 0,l.url=sy+"#cannot-parse-style-attribute",l}}function cy(e,t,i){let u;if(!i)u={type:"Literal",value:t};else if(t.includes(".")){const l=t.split(".");let o=-1,c;for(;++o<l.length;){const h=zg(l[o])?{type:"Identifier",name:l[o]}:{type:"Literal",value:l[o]};c=c?{type:"MemberExpression",object:c,property:h,computed:!!(o&&h.type==="Literal"),optional:!1}:h}u=c}else u=zg(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(u.type==="Literal"){const l=u.value;return Gh.call(e.components,l)?e.components[l]:l}if(e.evaluater)return e.evaluater.evaluateExpression(u);Vu(e)}function Vu(e,t){const i=new Lt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=sy+"#cannot-handle-mdx-estrees-without-createevaluater",i}function D3(e){const t={};let i;for(i in e)Gh.call(e,i)&&(t[L3(i)]=e[i]);return t}function L3(e){let t=e.replace(g3,I3);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function I3(e){return"-"+e.toLowerCase()}const Yf={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},M3={tokenize:B3};function B3(e){const t=e.attempt(this.parser.constructs.contentInitial,u,l);let i;return t;function u(h){if(h===null){e.consume(h);return}return e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),He(e,t,"linePrefix")}function l(h){return e.enter("paragraph"),o(h)}function o(h){const d=e.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=d),i=d,c(h)}function c(h){if(h===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(h);return}return Ae(h)?(e.consume(h),e.exit("chunkText"),o):(e.consume(h),c)}}const F3={tokenize:U3},Jg={tokenize:P3};function U3(e){const t=this,i=[];let u=0,l,o,c;return h;function h(F){if(u<i.length){const ee=i[u];return t.containerState=ee[1],e.attempt(ee[0].continuation,d,p)(F)}return p(F)}function d(F){if(u++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,l&&L();const ee=t.events.length;let ne=ee,G;for(;ne--;)if(t.events[ne][0]==="exit"&&t.events[ne][1].type==="chunkFlow"){G=t.events[ne][1].end;break}N(u);let le=ee;for(;le<t.events.length;)t.events[le][1].end={...G},le++;return on(t.events,ne+1,0,t.events.slice(ee)),t.events.length=le,p(F)}return h(F)}function p(F){if(u===i.length){if(!l)return v(F);if(l.currentConstruct&&l.currentConstruct.concrete)return A(F);t.interrupt=!!(l.currentConstruct&&!l._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Jg,y,b)(F)}function y(F){return l&&L(),N(u),v(F)}function b(F){return t.parser.lazy[t.now().line]=u!==i.length,c=t.now().offset,A(F)}function v(F){return t.containerState={},e.attempt(Jg,E,A)(F)}function E(F){return u++,i.push([t.currentConstruct,t.containerState]),v(F)}function A(F){if(F===null){l&&L(),N(0),e.consume(F);return}return l=l||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:l,contentType:"flow",previous:o}),_(F)}function _(F){if(F===null){k(e.exit("chunkFlow"),!0),N(0),e.consume(F);return}return Ae(F)?(e.consume(F),k(e.exit("chunkFlow")),u=0,t.interrupt=void 0,h):(e.consume(F),_)}function k(F,ee){const ne=t.sliceStream(F);if(ee&&ne.push(null),F.previous=o,o&&(o.next=F),o=F,l.defineSkip(F.start),l.write(ne),t.parser.lazy[F.start.line]){let G=l.events.length;for(;G--;)if(l.events[G][1].start.offset<c&&(!l.events[G][1].end||l.events[G][1].end.offset>c))return;const le=t.events.length;let ye=le,de,Y;for(;ye--;)if(t.events[ye][0]==="exit"&&t.events[ye][1].type==="chunkFlow"){if(de){Y=t.events[ye][1].end;break}de=!0}for(N(u),G=le;G<t.events.length;)t.events[G][1].end={...Y},G++;on(t.events,ye+1,0,t.events.slice(le)),t.events.length=G}}function N(F){let ee=i.length;for(;ee-- >F;){const ne=i[ee];t.containerState=ne[1],ne[0].exit.call(t,e)}i.length=F}function L(){l.write([null]),o=void 0,l=void 0,t.containerState._closeFlow=void 0}}function P3(e,t,i){return He(e,e.attempt(this.parser.constructs.document,t,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}const H3={tokenize:z3};function z3(e){const t=this,i=e.attempt($u,u,e.attempt(this.parser.constructs.flowInitial,l,He(e,e.attempt(this.parser.constructs.flow,l,e.attempt(LS,l)),"linePrefix")));return i;function u(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,i}function l(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,i}}const q3={resolveAll:hy()},j3=fy("string"),Y3=fy("text");function fy(e){return{resolveAll:hy(e==="text"?V3:void 0),tokenize:t};function t(i){const u=this,l=this.parser.constructs[e],o=i.attempt(l,c,h);return c;function c(y){return p(y)?o(y):h(y)}function h(y){if(y===null){i.consume(y);return}return i.enter("data"),i.consume(y),d}function d(y){return p(y)?(i.exit("data"),o(y)):(i.consume(y),d)}function p(y){if(y===null)return!0;const b=l[y];let v=-1;if(b)for(;++v<b.length;){const E=b[v];if(!E.previous||E.previous.call(u,u.previous))return!0}return!1}}}function hy(e){return t;function t(i,u){let l=-1,o;for(;++l<=i.length;)o===void 0?i[l]&&i[l][1].type==="data"&&(o=l,l++):(!i[l]||i[l][1].type!=="data")&&(l!==o+2&&(i[o][1].end=i[l-1][1].end,i.splice(o+2,l-o-2),l=o+2),o=void 0);return e?e(i,u):i}}function V3(e,t){let i=0;for(;++i<=e.length;)if((i===e.length||e[i][1].type==="lineEnding")&&e[i-1][1].type==="data"){const u=e[i-1][1],l=t.sliceStream(u);let o=l.length,c=-1,h=0,d;for(;o--;){const p=l[o];if(typeof p=="string"){for(c=p.length;p.charCodeAt(c-1)===32;)h++,c--;if(c)break;c=-1}else if(p===-2)d=!0,h++;else if(p!==-1){o++;break}}if(t._contentTypeTextTrailing&&i===e.length&&(h=0),h){const p={type:i===e.length||d||h<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?c:u.start._bufferIndex+c,_index:u.start._index+o,line:u.end.line,column:u.end.column-h,offset:u.end.offset-h},end:{...u.end}};u.end={...p.start},u.start.offset===u.end.offset?Object.assign(u,p):(e.splice(i,0,["enter",p,t],["exit",p,t]),i+=2)}i++}return e}const G3={42:Wt,43:Wt,45:Wt,48:Wt,49:Wt,50:Wt,51:Wt,52:Wt,53:Wt,54:Wt,55:Wt,56:Wt,57:Wt,62:Yb},Q3={91:US},K3={[-2]:Hf,[-1]:Hf,32:Hf},X3={35:YS,42:Ll,45:[Ug,Ll],60:KS,61:Ug,95:Ll,96:Bg,126:Bg},W3={38:Gb,92:Vb},Z3={[-5]:zf,[-4]:zf,[-3]:zf,33:hC,38:Gb,42:dh,60:[mS,tC],91:mC,92:[qS,Vb],93:Yh,95:dh,96:_S},J3={null:[dh,q3]},$3={null:[42,95]},e_={null:[]},t_=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:$3,contentInitial:Q3,disable:e_,document:G3,flow:X3,flowInitial:K3,insideSpan:J3,string:W3,text:Z3},Symbol.toStringTag,{value:"Module"}));function n_(e,t,i){let u={_bufferIndex:-1,_index:0,line:i&&i.line||1,column:i&&i.column||1,offset:i&&i.offset||0};const l={},o=[];let c=[],h=[];const d={attempt:le(ne),check:le(G),consume:L,enter:F,exit:ee,interrupt:le(G,{interrupt:!0})},p={code:null,containerState:{},defineSkip:_,events:[],now:A,parser:e,previous:null,sliceSerialize:v,sliceStream:E,write:b};let y=t.tokenize.call(p,d);return t.resolveAll&&o.push(t),p;function b(oe){return c=wn(c,oe),k(),c[c.length-1]!==null?[]:(ye(t,0),p.events=to(o,p.events,p),p.events)}function v(oe,fe){return i_(E(oe),fe)}function E(oe){return r_(c,oe)}function A(){const{_bufferIndex:oe,_index:fe,line:me,column:ae,offset:se}=u;return{_bufferIndex:oe,_index:fe,line:me,column:ae,offset:se}}function _(oe){l[oe.line]=oe.column,Y()}function k(){let oe;for(;u._index<c.length;){const fe=c[u._index];if(typeof fe=="string")for(oe=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===oe&&u._bufferIndex<fe.length;)N(fe.charCodeAt(u._bufferIndex));else N(fe)}}function N(oe){y=y(oe)}function L(oe){Ae(oe)?(u.line++,u.column=1,u.offset+=oe===-3?2:1,Y()):oe!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===c[u._index].length&&(u._bufferIndex=-1,u._index++)),p.previous=oe}function F(oe,fe){const me=fe||{};return me.type=oe,me.start=A(),p.events.push(["enter",me,p]),h.push(me),me}function ee(oe){const fe=h.pop();return fe.end=A(),p.events.push(["exit",fe,p]),fe}function ne(oe,fe){ye(oe,fe.from)}function G(oe,fe){fe.restore()}function le(oe,fe){return me;function me(ae,se,z){let ie,be,ke,D;return Array.isArray(ae)?W(ae):"tokenize"in ae?W([ae]):M(ae);function M(Ee){return Be;function Be(rt){const Qe=rt!==null&&Ee[rt],hn=rt!==null&&Ee.null,qn=[...Array.isArray(Qe)?Qe:Qe?[Qe]:[],...Array.isArray(hn)?hn:hn?[hn]:[]];return W(qn)(rt)}}function W(Ee){return ie=Ee,be=0,Ee.length===0?z:S(Ee[be])}function S(Ee){return Be;function Be(rt){return D=de(),ke=Ee,Ee.partial||(p.currentConstruct=Ee),Ee.name&&p.parser.constructs.disable.null.includes(Ee.name)?xe():Ee.tokenize.call(fe?Object.assign(Object.create(p),fe):p,d,he,xe)(rt)}}function he(Ee){return oe(ke,D),se}function xe(Ee){return D.restore(),++be<ie.length?S(ie[be]):z}}}function ye(oe,fe){oe.resolveAll&&!o.includes(oe)&&o.push(oe),oe.resolve&&on(p.events,fe,p.events.length-fe,oe.resolve(p.events.slice(fe),p)),oe.resolveTo&&(p.events=oe.resolveTo(p.events,p))}function de(){const oe=A(),fe=p.previous,me=p.currentConstruct,ae=p.events.length,se=Array.from(h);return{from:ae,restore:z};function z(){u=oe,p.previous=fe,p.currentConstruct=me,p.events.length=ae,h=se,Y()}}function Y(){u.line in l&&u.column<2&&(u.column=l[u.line],u.offset+=l[u.line]-1)}}function r_(e,t){const i=t.start._index,u=t.start._bufferIndex,l=t.end._index,o=t.end._bufferIndex;let c;if(i===l)c=[e[i].slice(u,o)];else{if(c=e.slice(i,l),u>-1){const h=c[0];typeof h=="string"?c[0]=h.slice(u):c.shift()}o>0&&c.push(e[l].slice(0,o))}return c}function i_(e,t){let i=-1;const u=[];let l;for(;++i<e.length;){const o=e[i];let c;if(typeof o=="string")c=o;else switch(o){case-5:{c="\r";break}case-4:{c=`
`;break}case-3:{c=`\r
`;break}case-2:{c=t?" ":"	";break}case-1:{if(!t&&l)continue;c=" ";break}default:c=String.fromCharCode(o)}l=o===-2,u.push(c)}return u.join("")}function a_(e){const u={constructs:Mb([t_,...(e||{}).extensions||[]]),content:l(M3),defined:[],document:l(F3),flow:l(H3),lazy:{},string:l(j3),text:l(Y3)};return u;function l(o){return c;function c(h){return n_(u,o,h)}}}function u_(e){for(;!Qb(e););return e}const $g=/[\0\t\n\r]/g;function s_(){let e=1,t="",i=!0,u;return l;function l(o,c,h){const d=[];let p,y,b,v,E;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(c||void 0).decode(o)),b=0,t="",i&&(o.charCodeAt(0)===65279&&b++,i=void 0);b<o.length;){if($g.lastIndex=b,p=$g.exec(o),v=p&&p.index!==void 0?p.index:o.length,E=o.charCodeAt(v),!p){t=o.slice(b);break}if(E===10&&b===v&&u)d.push(-3),u=void 0;else switch(u&&(d.push(-5),u=void 0),b<v&&(d.push(o.slice(b,v)),e+=v-b),E){case 0:{d.push(65533),e++;break}case 9:{for(y=Math.ceil(e/4)*4,d.push(-2);e++<y;)d.push(-1);break}case 10:{d.push(-4),e=1;break}default:u=!0,e=1}b=v+1}return h&&(u&&d.push(-5),t&&d.push(t),d.push(null)),d}}const dy={}.hasOwnProperty;function l_(e,t,i){return typeof t!="string"&&(i=t,t=void 0),o_(i)(u_(a_(i).document().write(s_()(e,t,!0))))}function o_(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(xi),autolinkProtocol:de,autolinkEmail:de,atxHeading:o(Ai),blockQuote:o(hn),characterEscape:de,characterReference:de,codeFenced:o(qn),codeFencedFenceInfo:c,codeFencedFenceMeta:c,codeIndented:o(qn,c),codeText:o(ka,c),codeTextData:de,data:de,codeFlowValue:de,definition:o(as),definitionDestinationString:c,definitionLabelString:c,definitionTitleString:c,emphasis:o(jn),hardBreakEscape:o(wi),hardBreakTrailing:o(wi),htmlFlow:o(us,c),htmlFlowData:de,htmlText:o(us,c),htmlTextData:de,image:o(ss),label:c,link:o(xi),listItem:o(Ra),listItemValue:v,listOrdered:o(Si,b),listUnordered:o(Si),paragraph:o(co),reference:S,referenceString:c,resourceDestinationString:c,resourceTitleString:c,setextHeading:o(Ai),strong:o(fo),thematicBreak:o(ho)},exit:{atxHeading:d(),atxHeadingSequence:ne,autolink:d(),autolinkEmail:Qe,autolinkProtocol:rt,blockQuote:d(),characterEscapeValue:Y,characterReferenceMarkerHexadecimal:xe,characterReferenceMarkerNumeric:xe,characterReferenceValue:Ee,characterReference:Be,codeFenced:d(k),codeFencedFence:_,codeFencedFenceInfo:E,codeFencedFenceMeta:A,codeFlowValue:Y,codeIndented:d(N),codeText:d(se),codeTextData:Y,data:Y,definition:d(),definitionDestinationString:ee,definitionLabelString:L,definitionTitleString:F,emphasis:d(),hardBreakEscape:d(fe),hardBreakTrailing:d(fe),htmlFlow:d(me),htmlFlowData:Y,htmlText:d(ae),htmlTextData:Y,image:d(ie),label:ke,labelText:be,lineEnding:oe,link:d(z),listItem:d(),listOrdered:d(),listUnordered:d(),paragraph:d(),referenceString:he,resourceDestinationString:D,resourceTitleString:M,resource:W,setextHeading:d(ye),setextHeadingLineSequence:le,setextHeadingText:G,strong:d(),thematicBreak:d()}};my(t,(e||{}).mdastExtensions||[]);const i={};return u;function u(Z){let ce={type:"root",children:[]};const Se={stack:[ce],tokenStack:[],config:t,enter:h,exit:p,buffer:c,resume:y,data:i},De=[];let Ye=-1;for(;++Ye<Z.length;)if(Z[Ye][1].type==="listOrdered"||Z[Ye][1].type==="listUnordered")if(Z[Ye][0]==="enter")De.push(Ye);else{const $t=De.pop();Ye=l(Z,$t,Ye)}for(Ye=-1;++Ye<Z.length;){const $t=t[Z[Ye][0]];dy.call($t,Z[Ye][1].type)&&$t[Z[Ye][1].type].call(Object.assign({sliceSerialize:Z[Ye][2].sliceSerialize},Se),Z[Ye][1])}if(Se.tokenStack.length>0){const $t=Se.tokenStack[Se.tokenStack.length-1];($t[1]||e1).call(Se,void 0,$t[0])}for(ce.position={start:Hr(Z.length>0?Z[0][1].start:{line:1,column:1,offset:0}),end:Hr(Z.length>0?Z[Z.length-2][1].end:{line:1,column:1,offset:0})},Ye=-1;++Ye<t.transforms.length;)ce=t.transforms[Ye](ce)||ce;return ce}function l(Z,ce,Se){let De=ce-1,Ye=-1,$t=!1,Yn,Ft,yt,zt;for(;++De<=Se;){const Ze=Z[De];switch(Ze[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ze[0]==="enter"?Ye++:Ye--,zt=void 0;break}case"lineEndingBlank":{Ze[0]==="enter"&&(Yn&&!zt&&!Ye&&!yt&&(yt=De),zt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:zt=void 0}if(!Ye&&Ze[0]==="enter"&&Ze[1].type==="listItemPrefix"||Ye===-1&&Ze[0]==="exit"&&(Ze[1].type==="listUnordered"||Ze[1].type==="listOrdered")){if(Yn){let pr=De;for(Ft=void 0;pr--;){const Sn=Z[pr];if(Sn[1].type==="lineEnding"||Sn[1].type==="lineEndingBlank"){if(Sn[0]==="exit")continue;Ft&&(Z[Ft][1].type="lineEndingBlank",$t=!0),Sn[1].type="lineEnding",Ft=pr}else if(!(Sn[1].type==="linePrefix"||Sn[1].type==="blockQuotePrefix"||Sn[1].type==="blockQuotePrefixWhitespace"||Sn[1].type==="blockQuoteMarker"||Sn[1].type==="listItemIndent"))break}yt&&(!Ft||yt<Ft)&&(Yn._spread=!0),Yn.end=Object.assign({},Ft?Z[Ft][1].start:Ze[1].end),Z.splice(Ft||De,0,["exit",Yn,Ze[2]]),De++,Se++}if(Ze[1].type==="listItemPrefix"){const pr={type:"listItem",_spread:!1,start:Object.assign({},Ze[1].start),end:void 0};Yn=pr,Z.splice(De,0,["enter",pr,Ze[2]]),De++,Se++,yt=void 0,zt=!0}}}return Z[ce][1]._spread=$t,Se}function o(Z,ce){return Se;function Se(De){h.call(this,Z(De),De),ce&&ce.call(this,De)}}function c(){this.stack.push({type:"fragment",children:[]})}function h(Z,ce,Se){this.stack[this.stack.length-1].children.push(Z),this.stack.push(Z),this.tokenStack.push([ce,Se||void 0]),Z.position={start:Hr(ce.start),end:void 0}}function d(Z){return ce;function ce(Se){Z&&Z.call(this,Se),p.call(this,Se)}}function p(Z,ce){const Se=this.stack.pop(),De=this.tokenStack.pop();if(De)De[0].type!==Z.type&&(ce?ce.call(this,Z,De[0]):(De[1]||e1).call(this,Z,De[0]));else throw new Error("Cannot close `"+Z.type+"` ("+Mu({start:Z.start,end:Z.end})+"): it’s not open");Se.position.end=Hr(Z.end)}function y(){return Hh(this.stack.pop())}function b(){this.data.expectingFirstListItemValue=!0}function v(Z){if(this.data.expectingFirstListItemValue){const ce=this.stack[this.stack.length-2];ce.start=Number.parseInt(this.sliceSerialize(Z),10),this.data.expectingFirstListItemValue=void 0}}function E(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.lang=Z}function A(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.meta=Z}function _(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function k(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.value=Z.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function N(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.value=Z.replace(/(\r?\n|\r)$/g,"")}function L(Z){const ce=this.resume(),Se=this.stack[this.stack.length-1];Se.label=ce,Se.identifier=On(this.sliceSerialize(Z)).toLowerCase()}function F(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.title=Z}function ee(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.url=Z}function ne(Z){const ce=this.stack[this.stack.length-1];if(!ce.depth){const Se=this.sliceSerialize(Z).length;ce.depth=Se}}function G(){this.data.setextHeadingSlurpLineEnding=!0}function le(Z){const ce=this.stack[this.stack.length-1];ce.depth=this.sliceSerialize(Z).codePointAt(0)===61?1:2}function ye(){this.data.setextHeadingSlurpLineEnding=void 0}function de(Z){const Se=this.stack[this.stack.length-1].children;let De=Se[Se.length-1];(!De||De.type!=="text")&&(De=Bt(),De.position={start:Hr(Z.start),end:void 0},Se.push(De)),this.stack.push(De)}function Y(Z){const ce=this.stack.pop();ce.value+=this.sliceSerialize(Z),ce.position.end=Hr(Z.end)}function oe(Z){const ce=this.stack[this.stack.length-1];if(this.data.atHardBreak){const Se=ce.children[ce.children.length-1];Se.position.end=Hr(Z.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(ce.type)&&(de.call(this,Z),Y.call(this,Z))}function fe(){this.data.atHardBreak=!0}function me(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.value=Z}function ae(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.value=Z}function se(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.value=Z}function z(){const Z=this.stack[this.stack.length-1];if(this.data.inReference){const ce=this.data.referenceType||"shortcut";Z.type+="Reference",Z.referenceType=ce,delete Z.url,delete Z.title}else delete Z.identifier,delete Z.label;this.data.referenceType=void 0}function ie(){const Z=this.stack[this.stack.length-1];if(this.data.inReference){const ce=this.data.referenceType||"shortcut";Z.type+="Reference",Z.referenceType=ce,delete Z.url,delete Z.title}else delete Z.identifier,delete Z.label;this.data.referenceType=void 0}function be(Z){const ce=this.sliceSerialize(Z),Se=this.stack[this.stack.length-2];Se.label=Ux(ce),Se.identifier=On(ce).toLowerCase()}function ke(){const Z=this.stack[this.stack.length-1],ce=this.resume(),Se=this.stack[this.stack.length-1];if(this.data.inReference=!0,Se.type==="link"){const De=Z.children;Se.children=De}else Se.alt=ce}function D(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.url=Z}function M(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.title=Z}function W(){this.data.inReference=void 0}function S(){this.data.referenceType="collapsed"}function he(Z){const ce=this.resume(),Se=this.stack[this.stack.length-1];Se.label=ce,Se.identifier=On(this.sliceSerialize(Z)).toLowerCase(),this.data.referenceType="full"}function xe(Z){this.data.characterReferenceType=Z.type}function Ee(Z){const ce=this.sliceSerialize(Z),Se=this.data.characterReferenceType;let De;Se?(De=Ib(ce,Se==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):De=qh(ce);const Ye=this.stack[this.stack.length-1];Ye.value+=De}function Be(Z){const ce=this.stack.pop();ce.position.end=Hr(Z.end)}function rt(Z){Y.call(this,Z);const ce=this.stack[this.stack.length-1];ce.url=this.sliceSerialize(Z)}function Qe(Z){Y.call(this,Z);const ce=this.stack[this.stack.length-1];ce.url="mailto:"+this.sliceSerialize(Z)}function hn(){return{type:"blockquote",children:[]}}function qn(){return{type:"code",lang:null,meta:null,value:""}}function ka(){return{type:"inlineCode",value:""}}function as(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function jn(){return{type:"emphasis",children:[]}}function Ai(){return{type:"heading",depth:0,children:[]}}function wi(){return{type:"break"}}function us(){return{type:"html",value:""}}function ss(){return{type:"image",title:null,url:"",alt:null}}function xi(){return{type:"link",title:null,url:"",children:[]}}function Si(Z){return{type:"list",ordered:Z.type==="listOrdered",start:null,spread:Z._spread,children:[]}}function Ra(Z){return{type:"listItem",spread:Z._spread,checked:null,children:[]}}function co(){return{type:"paragraph",children:[]}}function fo(){return{type:"strong",children:[]}}function Bt(){return{type:"text",value:""}}function ho(){return{type:"thematicBreak"}}}function Hr(e){return{line:e.line,column:e.column,offset:e.offset}}function my(e,t){let i=-1;for(;++i<t.length;){const u=t[i];Array.isArray(u)?my(e,u):c_(e,u)}}function c_(e,t){let i;for(i in t)if(dy.call(t,i))switch(i){case"canContainEols":{const u=t[i];u&&e[i].push(...u);break}case"transforms":{const u=t[i];u&&e[i].push(...u);break}case"enter":case"exit":{const u=t[i];u&&Object.assign(e[i],u);break}}}function e1(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Mu({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Mu({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Mu({start:t.start,end:t.end})+") is still open")}function f_(e){const t=this;t.parser=i;function i(u){return l_(u,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function h_(e,t){const i={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,i),e.applyData(t,i)}function d_(e,t){const i={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,i),[e.applyData(t,i),{type:"text",value:`
`}]}function m_(e,t){const i=t.value?t.value+`
`:"",u={},l=t.lang?t.lang.split(/\s+/):[];l.length>0&&(u.className=["language-"+l[0]]);let o={type:"element",tagName:"code",properties:u,children:[{type:"text",value:i}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function p_(e,t){const i={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function g_(e,t){const i={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function b_(e,t){const i=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",u=String(t.identifier).toUpperCase(),l=Sa(u.toLowerCase()),o=e.footnoteOrder.indexOf(u);let c,h=e.footnoteCounts.get(u);h===void 0?(h=0,e.footnoteOrder.push(u),c=e.footnoteOrder.length):c=o+1,h+=1,e.footnoteCounts.set(u,h);const d={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+l,id:i+"fnref-"+l+(h>1?"-"+h:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(c)}]};e.patch(t,d);const p={type:"element",tagName:"sup",properties:{},children:[d]};return e.patch(t,p),e.applyData(t,p)}function y_(e,t){const i={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function T_(e,t){if(e.options.allowDangerousHtml){const i={type:"raw",value:t.value};return e.patch(t,i),e.applyData(t,i)}}function py(e,t){const i=t.referenceType;let u="]";if(i==="collapsed"?u+="[]":i==="full"&&(u+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+u}];const l=e.all(t),o=l[0];o&&o.type==="text"?o.value="["+o.value:l.unshift({type:"text",value:"["});const c=l[l.length-1];return c&&c.type==="text"?c.value+=u:l.push({type:"text",value:u}),l}function E_(e,t){const i=String(t.identifier).toUpperCase(),u=e.definitionById.get(i);if(!u)return py(e,t);const l={src:Sa(u.url||""),alt:t.alt};u.title!==null&&u.title!==void 0&&(l.title=u.title);const o={type:"element",tagName:"img",properties:l,children:[]};return e.patch(t,o),e.applyData(t,o)}function v_(e,t){const i={src:Sa(t.url)};t.alt!==null&&t.alt!==void 0&&(i.alt=t.alt),t.title!==null&&t.title!==void 0&&(i.title=t.title);const u={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,u),e.applyData(t,u)}function A_(e,t){const i={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,i);const u={type:"element",tagName:"code",properties:{},children:[i]};return e.patch(t,u),e.applyData(t,u)}function w_(e,t){const i=String(t.identifier).toUpperCase(),u=e.definitionById.get(i);if(!u)return py(e,t);const l={href:Sa(u.url||"")};u.title!==null&&u.title!==void 0&&(l.title=u.title);const o={type:"element",tagName:"a",properties:l,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function x_(e,t){const i={href:Sa(t.url)};t.title!==null&&t.title!==void 0&&(i.title=t.title);const u={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,u),e.applyData(t,u)}function S_(e,t,i){const u=e.all(t),l=i?C_(i):gy(t),o={},c=[];if(typeof t.checked=="boolean"){const y=u[0];let b;y&&y.type==="element"&&y.tagName==="p"?b=y:(b={type:"element",tagName:"p",properties:{},children:[]},u.unshift(b)),b.children.length>0&&b.children.unshift({type:"text",value:" "}),b.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let h=-1;for(;++h<u.length;){const y=u[h];(l||h!==0||y.type!=="element"||y.tagName!=="p")&&c.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!l?c.push(...y.children):c.push(y)}const d=u[u.length-1];d&&(l||d.type!=="element"||d.tagName!=="p")&&c.push({type:"text",value:`
`});const p={type:"element",tagName:"li",properties:o,children:c};return e.patch(t,p),e.applyData(t,p)}function C_(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const i=e.children;let u=-1;for(;!t&&++u<i.length;)t=gy(i[u])}return t}function gy(e){const t=e.spread;return t??e.children.length>1}function __(e,t){const i={},u=e.all(t);let l=-1;for(typeof t.start=="number"&&t.start!==1&&(i.start=t.start);++l<u.length;){const c=u[l];if(c.type==="element"&&c.tagName==="li"&&c.properties&&Array.isArray(c.properties.className)&&c.properties.className.includes("task-list-item")){i.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:i,children:e.wrap(u,!0)};return e.patch(t,o),e.applyData(t,o)}function N_(e,t){const i={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function O_(e,t){const i={type:"root",children:e.wrap(e.all(t))};return e.patch(t,i),e.applyData(t,i)}function k_(e,t){const i={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function R_(e,t){const i=e.all(t),u=i.shift(),l=[];if(u){const c={type:"element",tagName:"thead",properties:{},children:e.wrap([u],!0)};e.patch(t.children[0],c),l.push(c)}if(i.length>0){const c={type:"element",tagName:"tbody",properties:{},children:e.wrap(i,!0)},h=zn(t.children[1]),d=ro(t.children[t.children.length-1]);h&&d&&(c.position={start:h,end:d}),l.push(c)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(l,!0)};return e.patch(t,o),e.applyData(t,o)}function D_(e,t,i){const u=i?i.children:void 0,o=(u?u.indexOf(t):1)===0?"th":"td",c=i&&i.type==="table"?i.align:void 0,h=c?c.length:t.children.length;let d=-1;const p=[];for(;++d<h;){const b=t.children[d],v={},E=c?c[d]:void 0;E&&(v.align=E);let A={type:"element",tagName:o,properties:v,children:[]};b&&(A.children=e.all(b),e.patch(b,A),A=e.applyData(b,A)),p.push(A)}const y={type:"element",tagName:"tr",properties:{},children:e.wrap(p,!0)};return e.patch(t,y),e.applyData(t,y)}function L_(e,t){const i={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}const t1=9,n1=32;function I_(e){const t=String(e),i=/\r?\n|\r/g;let u=i.exec(t),l=0;const o=[];for(;u;)o.push(r1(t.slice(l,u.index),l>0,!0),u[0]),l=u.index+u[0].length,u=i.exec(t);return o.push(r1(t.slice(l),l>0,!1)),o.join("")}function r1(e,t,i){let u=0,l=e.length;if(t){let o=e.codePointAt(u);for(;o===t1||o===n1;)u++,o=e.codePointAt(u)}if(i){let o=e.codePointAt(l-1);for(;o===t1||o===n1;)l--,o=e.codePointAt(l-1)}return l>u?e.slice(u,l):""}function M_(e,t){const i={type:"text",value:I_(String(t.value))};return e.patch(t,i),e.applyData(t,i)}function B_(e,t){const i={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,i),e.applyData(t,i)}const F_={blockquote:h_,break:d_,code:m_,delete:p_,emphasis:g_,footnoteReference:b_,heading:y_,html:T_,imageReference:E_,image:v_,inlineCode:A_,linkReference:w_,link:x_,listItem:S_,list:__,paragraph:N_,root:O_,strong:k_,table:R_,tableCell:L_,tableRow:D_,text:M_,thematicBreak:B_,toml:Cl,yaml:Cl,definition:Cl,footnoteDefinition:Cl};function Cl(){}const by=-1,io=0,Bu=1,Hl=2,Xh=3,Wh=4,Zh=5,Jh=6,yy=7,Ty=8,i1=typeof self=="object"?self:globalThis,U_=(e,t)=>{const i=(l,o)=>(e.set(o,l),l),u=l=>{if(e.has(l))return e.get(l);const[o,c]=t[l];switch(o){case io:case by:return i(c,l);case Bu:{const h=i([],l);for(const d of c)h.push(u(d));return h}case Hl:{const h=i({},l);for(const[d,p]of c)h[u(d)]=u(p);return h}case Xh:return i(new Date(c),l);case Wh:{const{source:h,flags:d}=c;return i(new RegExp(h,d),l)}case Zh:{const h=i(new Map,l);for(const[d,p]of c)h.set(u(d),u(p));return h}case Jh:{const h=i(new Set,l);for(const d of c)h.add(u(d));return h}case yy:{const{name:h,message:d}=c;return i(new i1[h](d),l)}case Ty:return i(BigInt(c),l);case"BigInt":return i(Object(BigInt(c)),l);case"ArrayBuffer":return i(new Uint8Array(c).buffer,c);case"DataView":{const{buffer:h}=new Uint8Array(c);return i(new DataView(h),c)}}return i(new i1[o](c),l)};return u},a1=e=>U_(new Map,e)(0),fa="",{toString:P_}={},{keys:H_}=Object,Ou=e=>{const t=typeof e;if(t!=="object"||!e)return[io,t];const i=P_.call(e).slice(8,-1);switch(i){case"Array":return[Bu,fa];case"Object":return[Hl,fa];case"Date":return[Xh,fa];case"RegExp":return[Wh,fa];case"Map":return[Zh,fa];case"Set":return[Jh,fa];case"DataView":return[Bu,i]}return i.includes("Array")?[Bu,i]:i.includes("Error")?[yy,i]:[Hl,i]},_l=([e,t])=>e===io&&(t==="function"||t==="symbol"),z_=(e,t,i,u)=>{const l=(c,h)=>{const d=u.push(c)-1;return i.set(h,d),d},o=c=>{if(i.has(c))return i.get(c);let[h,d]=Ou(c);switch(h){case io:{let y=c;switch(d){case"bigint":h=Ty,y=c.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+d);y=null;break;case"undefined":return l([by],c)}return l([h,y],c)}case Bu:{if(d){let v=c;return d==="DataView"?v=new Uint8Array(c.buffer):d==="ArrayBuffer"&&(v=new Uint8Array(c)),l([d,[...v]],c)}const y=[],b=l([h,y],c);for(const v of c)y.push(o(v));return b}case Hl:{if(d)switch(d){case"BigInt":return l([d,c.toString()],c);case"Boolean":case"Number":case"String":return l([d,c.valueOf()],c)}if(t&&"toJSON"in c)return o(c.toJSON());const y=[],b=l([h,y],c);for(const v of H_(c))(e||!_l(Ou(c[v])))&&y.push([o(v),o(c[v])]);return b}case Xh:return l([h,c.toISOString()],c);case Wh:{const{source:y,flags:b}=c;return l([h,{source:y,flags:b}],c)}case Zh:{const y=[],b=l([h,y],c);for(const[v,E]of c)(e||!(_l(Ou(v))||_l(Ou(E))))&&y.push([o(v),o(E)]);return b}case Jh:{const y=[],b=l([h,y],c);for(const v of c)(e||!_l(Ou(v)))&&y.push(o(v));return b}}const{message:p}=c;return l([h,{name:d,message:p}],c)};return o},u1=(e,{json:t,lossy:i}={})=>{const u=[];return z_(!(t||i),!!t,new Map,u)(e),u},Ea=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?a1(u1(e,t)):structuredClone(e):(e,t)=>a1(u1(e,t));function q_(e,t){const i=[{type:"text",value:"↩"}];return t>1&&i.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),i}function j_(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function Y_(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=e.options.footnoteBackContent||q_,u=e.options.footnoteBackLabel||j_,l=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",c=e.options.footnoteLabelProperties||{className:["sr-only"]},h=[];let d=-1;for(;++d<e.footnoteOrder.length;){const p=e.footnoteById.get(e.footnoteOrder[d]);if(!p)continue;const y=e.all(p),b=String(p.identifier).toUpperCase(),v=Sa(b.toLowerCase());let E=0;const A=[],_=e.footnoteCounts.get(b);for(;_!==void 0&&++E<=_;){A.length>0&&A.push({type:"text",value:" "});let L=typeof i=="string"?i:i(d,E);typeof L=="string"&&(L={type:"text",value:L}),A.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+v+(E>1?"-"+E:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(d,E),className:["data-footnote-backref"]},children:Array.isArray(L)?L:[L]})}const k=y[y.length-1];if(k&&k.type==="element"&&k.tagName==="p"){const L=k.children[k.children.length-1];L&&L.type==="text"?L.value+=" ":k.children.push({type:"text",value:" "}),k.children.push(...A)}else y.push(...A);const N={type:"element",tagName:"li",properties:{id:t+"fn-"+v},children:e.wrap(y,!0)};e.patch(p,N),h.push(N)}if(h.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Ea(c),id:"footnote-label"},children:[{type:"text",value:l}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(h,!0)},{type:"text",value:`
`}]}}const bh={}.hasOwnProperty,V_={};function G_(e,t){const i=t||V_,u=new Map,l=new Map,o=new Map,c={...F_,...i.handlers},h={all:p,applyData:K_,definitionById:u,footnoteById:l,footnoteCounts:o,footnoteOrder:[],handlers:c,one:d,options:i,patch:Q_,wrap:W_};return eo(e,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const b=y.type==="definition"?u:l,v=String(y.identifier).toUpperCase();b.has(v)||b.set(v,y)}}),h;function d(y,b){const v=y.type,E=h.handlers[v];if(bh.call(h.handlers,v)&&E)return E(h,y,b);if(h.options.passThrough&&h.options.passThrough.includes(v)){if("children"in y){const{children:_,...k}=y,N=Ea(k);return N.children=h.all(y),N}return Ea(y)}return(h.options.unknownHandler||X_)(h,y,b)}function p(y){const b=[];if("children"in y){const v=y.children;let E=-1;for(;++E<v.length;){const A=h.one(v[E],y);if(A){if(E&&v[E-1].type==="break"&&(!Array.isArray(A)&&A.type==="text"&&(A.value=s1(A.value)),!Array.isArray(A)&&A.type==="element")){const _=A.children[0];_&&_.type==="text"&&(_.value=s1(_.value))}Array.isArray(A)?b.push(...A):b.push(A)}}}return b}}function Q_(e,t){e.position&&(t.position=m3(e))}function K_(e,t){let i=t;if(e&&e.data){const u=e.data.hName,l=e.data.hChildren,o=e.data.hProperties;if(typeof u=="string")if(i.type==="element")i.tagName=u;else{const c="children"in i?i.children:[i];i={type:"element",tagName:u,properties:{},children:c}}i.type==="element"&&o&&Object.assign(i.properties,Ea(o)),"children"in i&&i.children&&l!==null&&l!==void 0&&(i.children=l)}return i}function X_(e,t){const i=t.data||{},u="value"in t&&!(bh.call(i,"hProperties")||bh.call(i,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,u),e.applyData(t,u)}function W_(e,t){const i=[];let u=-1;for(t&&i.push({type:"text",value:`
`});++u<e.length;)u&&i.push({type:"text",value:`
`}),i.push(e[u]);return t&&e.length>0&&i.push({type:"text",value:`
`}),i}function s1(e){let t=0,i=e.charCodeAt(t);for(;i===9||i===32;)t++,i=e.charCodeAt(t);return e.slice(t)}function l1(e,t){const i=G_(e,t),u=i.one(e,void 0),l=Y_(i),o=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return l&&o.children.push({type:"text",value:`
`},l),o}function Z_(e,t){return e&&"run"in e?async function(i,u){const l=l1(i,{file:u,...t});await e.run(l,u)}:function(i,u){return l1(i,{file:u,...e||t})}}function o1(e){if(e)throw e}var Vf,c1;function J_(){if(c1)return Vf;c1=1;var e=Object.prototype.hasOwnProperty,t=Object.prototype.toString,i=Object.defineProperty,u=Object.getOwnPropertyDescriptor,l=function(p){return typeof Array.isArray=="function"?Array.isArray(p):t.call(p)==="[object Array]"},o=function(p){if(!p||t.call(p)!=="[object Object]")return!1;var y=e.call(p,"constructor"),b=p.constructor&&p.constructor.prototype&&e.call(p.constructor.prototype,"isPrototypeOf");if(p.constructor&&!y&&!b)return!1;var v;for(v in p);return typeof v>"u"||e.call(p,v)},c=function(p,y){i&&y.name==="__proto__"?i(p,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):p[y.name]=y.newValue},h=function(p,y){if(y==="__proto__")if(e.call(p,y)){if(u)return u(p,y).value}else return;return p[y]};return Vf=function d(){var p,y,b,v,E,A,_=arguments[0],k=1,N=arguments.length,L=!1;for(typeof _=="boolean"&&(L=_,_=arguments[1]||{},k=2),(_==null||typeof _!="object"&&typeof _!="function")&&(_={});k<N;++k)if(p=arguments[k],p!=null)for(y in p)b=h(_,y),v=h(p,y),_!==v&&(L&&v&&(o(v)||(E=l(v)))?(E?(E=!1,A=b&&l(b)?b:[]):A=b&&o(b)?b:{},c(_,{name:y,newValue:d(L,A,v)})):typeof v<"u"&&c(_,{name:y,newValue:v}));return _},Vf}var $_=J_();const Gf=W1($_);function yh(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function eN(){const e=[],t={run:i,use:u};return t;function i(...l){let o=-1;const c=l.pop();if(typeof c!="function")throw new TypeError("Expected function as last argument, not "+c);h(null,...l);function h(d,...p){const y=e[++o];let b=-1;if(d){c(d);return}for(;++b<l.length;)(p[b]===null||p[b]===void 0)&&(p[b]=l[b]);l=p,y?tN(y,h)(...p):c(null,...p)}}function u(l){if(typeof l!="function")throw new TypeError("Expected `middelware` to be a function, not "+l);return e.push(l),t}}function tN(e,t){let i;return u;function u(...c){const h=e.length>c.length;let d;h&&c.push(l);try{d=e.apply(this,c)}catch(p){const y=p;if(h&&i)throw y;return l(y)}h||(d&&d.then&&typeof d.then=="function"?d.then(o,l):d instanceof Error?l(d):o(d))}function l(c,...h){i||(i=!0,t(c,...h))}function o(c){l(null,c)}}const Fn={basename:nN,dirname:rN,extname:iN,join:aN,sep:"/"};function nN(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ns(e);let i=0,u=-1,l=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;l--;)if(e.codePointAt(l)===47){if(o){i=l+1;break}}else u<0&&(o=!0,u=l+1);return u<0?"":e.slice(i,u)}if(t===e)return"";let c=-1,h=t.length-1;for(;l--;)if(e.codePointAt(l)===47){if(o){i=l+1;break}}else c<0&&(o=!0,c=l+1),h>-1&&(e.codePointAt(l)===t.codePointAt(h--)?h<0&&(u=l):(h=-1,u=c));return i===u?u=c:u<0&&(u=e.length),e.slice(i,u)}function rN(e){if(ns(e),e.length===0)return".";let t=-1,i=e.length,u;for(;--i;)if(e.codePointAt(i)===47){if(u){t=i;break}}else u||(u=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function iN(e){ns(e);let t=e.length,i=-1,u=0,l=-1,o=0,c;for(;t--;){const h=e.codePointAt(t);if(h===47){if(c){u=t+1;break}continue}i<0&&(c=!0,i=t+1),h===46?l<0?l=t:o!==1&&(o=1):l>-1&&(o=-1)}return l<0||i<0||o===0||o===1&&l===i-1&&l===u+1?"":e.slice(l,i)}function aN(...e){let t=-1,i;for(;++t<e.length;)ns(e[t]),e[t]&&(i=i===void 0?e[t]:i+"/"+e[t]);return i===void 0?".":uN(i)}function uN(e){ns(e);const t=e.codePointAt(0)===47;let i=sN(e,!t);return i.length===0&&!t&&(i="."),i.length>0&&e.codePointAt(e.length-1)===47&&(i+="/"),t?"/"+i:i}function sN(e,t){let i="",u=0,l=-1,o=0,c=-1,h,d;for(;++c<=e.length;){if(c<e.length)h=e.codePointAt(c);else{if(h===47)break;h=47}if(h===47){if(!(l===c-1||o===1))if(l!==c-1&&o===2){if(i.length<2||u!==2||i.codePointAt(i.length-1)!==46||i.codePointAt(i.length-2)!==46){if(i.length>2){if(d=i.lastIndexOf("/"),d!==i.length-1){d<0?(i="",u=0):(i=i.slice(0,d),u=i.length-1-i.lastIndexOf("/")),l=c,o=0;continue}}else if(i.length>0){i="",u=0,l=c,o=0;continue}}t&&(i=i.length>0?i+"/..":"..",u=2)}else i.length>0?i+="/"+e.slice(l+1,c):i=e.slice(l+1,c),u=c-l-1;l=c,o=0}else h===46&&o>-1?o++:o=-1}return i}function ns(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const lN={cwd:oN};function oN(){return"/"}function Th(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function cN(e){if(typeof e=="string")e=new URL(e);else if(!Th(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return fN(e)}function fN(e){if(e.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const t=e.pathname;let i=-1;for(;++i<t.length;)if(t.codePointAt(i)===37&&t.codePointAt(i+1)===50){const u=t.codePointAt(i+2);if(u===70||u===102){const l=new TypeError("File URL path must not include encoded / characters");throw l.code="ERR_INVALID_FILE_URL_PATH",l}}return decodeURIComponent(t)}const Qf=["history","path","basename","stem","extname","dirname"];class Ey{constructor(t){let i;t?Th(t)?i={path:t}:typeof t=="string"||hN(t)?i={value:t}:i=t:i={},this.cwd="cwd"in i?"":lN.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<Qf.length;){const o=Qf[u];o in i&&i[o]!==void 0&&i[o]!==null&&(this[o]=o==="history"?[...i[o]]:i[o])}let l;for(l in i)Qf.includes(l)||(this[l]=i[l])}get basename(){return typeof this.path=="string"?Fn.basename(this.path):void 0}set basename(t){Xf(t,"basename"),Kf(t,"basename"),this.path=Fn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Fn.dirname(this.path):void 0}set dirname(t){f1(this.basename,"dirname"),this.path=Fn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Fn.extname(this.path):void 0}set extname(t){if(Kf(t,"extname"),f1(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Fn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Th(t)&&(t=cN(t)),Xf(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Fn.basename(this.path,this.extname):void 0}set stem(t){Xf(t,"stem"),Kf(t,"stem"),this.path=Fn.join(this.dirname||"",t+(this.extname||""))}fail(t,i,u){const l=this.message(t,i,u);throw l.fatal=!0,l}info(t,i,u){const l=this.message(t,i,u);return l.fatal=void 0,l}message(t,i,u){const l=new Lt(t,i,u);return this.path&&(l.name=this.path+":"+l.name,l.file=this.path),l.fatal=!1,this.messages.push(l),l}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Kf(e,t){if(e&&e.includes(Fn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Fn.sep+"`")}function Xf(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function f1(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function hN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const dN=(function(e){const u=this.constructor.prototype,l=u[e],o=function(){return l.apply(o,arguments)};return Object.setPrototypeOf(o,u),o}),mN={}.hasOwnProperty;class $h extends dN{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=eN()}copy(){const t=new $h;let i=-1;for(;++i<this.attachers.length;){const u=this.attachers[i];t.use(...u)}return t.data(Gf(!0,{},this.namespace)),t}data(t,i){return typeof t=="string"?arguments.length===2?(Jf("data",this.frozen),this.namespace[t]=i,this):mN.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Jf("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[i,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const l=i.call(t,...u);typeof l=="function"&&this.transformers.use(l)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const i=Nl(t),u=this.parser||this.Parser;return Wf("parse",u),u(String(i),i)}process(t,i){const u=this;return this.freeze(),Wf("process",this.parser||this.Parser),Zf("process",this.compiler||this.Compiler),i?l(void 0,i):new Promise(l);function l(o,c){const h=Nl(t),d=u.parse(h);u.run(d,h,function(y,b,v){if(y||!b||!v)return p(y);const E=b,A=u.stringify(E,v);bN(A)?v.value=A:v.result=A,p(y,v)});function p(y,b){y||!b?c(y):o?o(b):i(void 0,b)}}}processSync(t){let i=!1,u;return this.freeze(),Wf("processSync",this.parser||this.Parser),Zf("processSync",this.compiler||this.Compiler),this.process(t,l),d1("processSync","process",i),u;function l(o,c){i=!0,o1(o),u=c}}run(t,i,u){h1(t),this.freeze();const l=this.transformers;return!u&&typeof i=="function"&&(u=i,i=void 0),u?o(void 0,u):new Promise(o);function o(c,h){const d=Nl(i);l.run(t,d,p);function p(y,b,v){const E=b||t;y?h(y):c?c(E):u(void 0,E,v)}}}runSync(t,i){let u=!1,l;return this.run(t,i,o),d1("runSync","run",u),l;function o(c,h){o1(c),l=h,u=!0}}stringify(t,i){this.freeze();const u=Nl(i),l=this.compiler||this.Compiler;return Zf("stringify",l),h1(t),l(t,u)}use(t,...i){const u=this.attachers,l=this.namespace;if(Jf("use",this.frozen),t!=null)if(typeof t=="function")d(t,i);else if(typeof t=="object")Array.isArray(t)?h(t):c(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(p){if(typeof p=="function")d(p,[]);else if(typeof p=="object")if(Array.isArray(p)){const[y,...b]=p;d(y,b)}else c(p);else throw new TypeError("Expected usable value, not `"+p+"`")}function c(p){if(!("plugins"in p)&&!("settings"in p))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");h(p.plugins),p.settings&&(l.settings=Gf(!0,l.settings,p.settings))}function h(p){let y=-1;if(p!=null)if(Array.isArray(p))for(;++y<p.length;){const b=p[y];o(b)}else throw new TypeError("Expected a list of plugins, not `"+p+"`")}function d(p,y){let b=-1,v=-1;for(;++b<u.length;)if(u[b][0]===p){v=b;break}if(v===-1)u.push([p,...y]);else if(y.length>0){let[E,...A]=y;const _=u[v][1];yh(_)&&yh(E)&&(E=Gf(!0,_,E)),u[v]=[p,E,...A]}}}}const pN=new $h().freeze();function Wf(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Zf(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Jf(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function h1(e){if(!yh(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function d1(e,t,i){if(!i)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Nl(e){return gN(e)?e:new Ey(e)}function gN(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function bN(e){return typeof e=="string"||yN(e)}function yN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const TN="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",m1=[],p1={allowDangerousHtml:!0},EN=/^(https?|ircs?|mailto|xmpp)$/i,vN=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function mi(e){const t=AN(e),i=wN(e);return xN(t.runSync(t.parse(i),i),e)}function AN(e){const t=e.rehypePlugins||m1,i=e.remarkPlugins||m1,u=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...p1}:p1;return pN().use(f_).use(i).use(Z_,u).use(t)}function wN(e){const t=e.children||"",i=new Ey;return typeof t=="string"&&(i.value=t),i}function xN(e,t){const i=t.allowedElements,u=t.allowElement,l=t.components,o=t.disallowedElements,c=t.skipHtml,h=t.unwrapDisallowed,d=t.urlTransform||SN;for(const y of vN)Object.hasOwn(t,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+TN+y.id,void 0);return eo(e,p),T3(e,{Fragment:O.Fragment,components:l,ignoreInvalidStyle:!0,jsx:O.jsx,jsxs:O.jsxs,passKeys:!0,passNode:!0});function p(y,b,v){if(y.type==="raw"&&v&&typeof b=="number")return c?v.children.splice(b,1):v.children[b]={type:"text",value:y.value},b;if(y.type==="element"){let E;for(E in Yf)if(Object.hasOwn(Yf,E)&&Object.hasOwn(y.properties,E)){const A=y.properties[E],_=Yf[E];(_===null||_.includes(y.tagName))&&(y.properties[E]=d(String(A||""),E,y))}}if(y.type==="element"){let E=i?!i.includes(y.tagName):o?o.includes(y.tagName):!1;if(!E&&u&&typeof b=="number"&&(E=!u(y,b,v)),E&&v&&typeof b=="number")return h&&y.children?v.children.splice(b,1,...y.children):v.children.splice(b,1),b}}}function SN(e){const t=e.indexOf(":"),i=e.indexOf("?"),u=e.indexOf("#"),l=e.indexOf("/");return t===-1||l!==-1&&t>l||i!==-1&&t>i||u!==-1&&t>u||EN.test(e.slice(0,t))?e:""}const g1=/[#.]/g;function CN(e,t){const i=e||"",u={};let l=0,o,c;for(;l<i.length;){g1.lastIndex=l;const h=g1.exec(i),d=i.slice(l,h?h.index:i.length);d&&(o?o==="#"?u.id=d:Array.isArray(u.className)?u.className.push(d):u.className=[d]:c=d,l+=d.length),h&&(o=h[0],l++)}return{type:"element",tagName:c||t||"div",properties:u,children:[]}}function vy(e,t,i){const u=i?kN(i):void 0;function l(o,c,...h){let d;if(o==null){d={type:"root",children:[]};const p=c;h.unshift(p)}else{d=CN(o,t);const p=d.tagName.toLowerCase(),y=u?u.get(p):void 0;if(d.tagName=y||p,_N(c))h.unshift(c);else for(const[b,v]of Object.entries(c))NN(e,d.properties,b,v)}for(const p of h)Eh(d.children,p);return d.type==="element"&&d.tagName==="template"&&(d.content={type:"root",children:d.children},d.children=[]),d}return l}function _N(e){if(e===null||typeof e!="object"||Array.isArray(e))return!0;if(typeof e.type!="string")return!1;const t=e,i=Object.keys(e);for(const u of i){const l=t[u];if(l&&typeof l=="object"){if(!Array.isArray(l))return!0;const o=l;for(const c of o)if(typeof c!="number"&&typeof c!="string")return!0}}return!!("children"in e&&Array.isArray(e.children))}function NN(e,t,i,u){const l=no(e,i);let o;if(u!=null){if(typeof u=="number"){if(Number.isNaN(u))return;o=u}else typeof u=="boolean"?o=u:typeof u=="string"?l.spaceSeparated?o=Vg(u):l.commaSeparated?o=Hg(u):l.commaOrSpaceSeparated?o=Vg(Hg(u).join(" ")):o=b1(l,l.property,u):Array.isArray(u)?o=[...u]:o=l.property==="style"?ON(u):String(u);if(Array.isArray(o)){const c=[];for(const h of o)c.push(b1(l,l.property,h));o=c}l.property==="className"&&Array.isArray(t.className)&&(o=t.className.concat(o)),t[l.property]=o}}function Eh(e,t){if(t!=null)if(typeof t=="number"||typeof t=="string")e.push({type:"text",value:String(t)});else if(Array.isArray(t))for(const i of t)Eh(e,i);else if(typeof t=="object"&&"type"in t)t.type==="root"?Eh(e,t.children):e.push(t);else throw new Error("Expected node, nodes, or string, got `"+t+"`")}function b1(e,t,i){if(typeof i=="string"){if(e.number&&i&&!Number.isNaN(Number(i)))return Number(i);if((e.boolean||e.overloadedBoolean)&&(i===""||Yu(i)===Yu(t)))return!0}return i}function ON(e){const t=[];for(const[i,u]of Object.entries(e))t.push([i,u].join(": "));return t.join("; ")}function kN(e){const t=new Map;for(const i of e)t.set(i.toLowerCase(),i);return t}const RN=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],DN=vy(ts,"div"),LN=vy(Qr,"g",RN);function IN(e){const t=String(e),i=[];return{toOffset:l,toPoint:u};function u(o){if(typeof o=="number"&&o>-1&&o<=t.length){let c=0;for(;;){let h=i[c];if(h===void 0){const d=y1(t,i[c-1]);h=d===-1?t.length+1:d+1,i[c]=h}if(h>o)return{line:c+1,column:o-(c>0?i[c-1]:0)+1,offset:o};c++}}}function l(o){if(o&&typeof o.line=="number"&&typeof o.column=="number"&&!Number.isNaN(o.line)&&!Number.isNaN(o.column)){for(;i.length<o.line;){const h=i[i.length-1],d=y1(t,h),p=d===-1?t.length+1:d+1;if(h===p)break;i.push(p)}const c=(o.line>1?i[o.line-2]:0)+o.column-1;if(c<i[o.line-1])return c}}}function y1(e,t){const i=e.indexOf("\r",t),u=e.indexOf(`
`,t);return u===-1?i:i===-1||i+1===u?u:i<u?i:u}const pi={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},Ay={}.hasOwnProperty,MN=Object.prototype;function BN(e,t){const i=t||{};return ed({file:i.file||void 0,location:!1,schema:i.space==="svg"?Qr:ts,verbose:i.verbose||!1},e)}function ed(e,t){let i;switch(t.nodeName){case"#comment":{const u=t;return i={type:"comment",value:u.data},Il(e,u,i),i}case"#document":case"#document-fragment":{const u=t,l="mode"in u?u.mode==="quirks"||u.mode==="limited-quirks":!1;if(i={type:"root",children:wy(e,t.childNodes),data:{quirksMode:l}},e.file&&e.location){const o=String(e.file),c=IN(o),h=c.toPoint(0),d=c.toPoint(o.length);i.position={start:h,end:d}}return i}case"#documentType":{const u=t;return i={type:"doctype"},Il(e,u,i),i}case"#text":{const u=t;return i={type:"text",value:u.value},Il(e,u,i),i}default:return i=FN(e,t),i}}function wy(e,t){let i=-1;const u=[];for(;++i<t.length;){const l=ed(e,t[i]);u.push(l)}return u}function FN(e,t){const i=e.schema;e.schema=t.namespaceURI===pi.svg?Qr:ts;let u=-1;const l={};for(;++u<t.attrs.length;){const h=t.attrs[u],d=(h.prefix?h.prefix+":":"")+h.name;Ay.call(MN,d)||(l[d]=h.value)}const c=(e.schema.space==="svg"?LN:DN)(t.tagName,l,wy(e,t.childNodes));if(Il(e,t,c),c.tagName==="template"){const h=t,d=h.sourceCodeLocation,p=d&&d.startTag&&pa(d.startTag),y=d&&d.endTag&&pa(d.endTag),b=ed(e,h.content);p&&y&&e.file&&(b.position={start:p.end,end:y.start}),c.content=b}return e.schema=i,c}function Il(e,t,i){if("sourceCodeLocation"in t&&t.sourceCodeLocation&&e.file){const u=UN(e,i,t.sourceCodeLocation);u&&(e.location=!0,i.position=u)}}function UN(e,t,i){const u=pa(i);if(t.type==="element"){const l=t.children[t.children.length-1];if(u&&!i.endTag&&l&&l.position&&l.position.end&&(u.end=Object.assign({},l.position.end)),e.verbose){const o={};let c;if(i.attrs)for(c in i.attrs)Ay.call(i.attrs,c)&&(o[no(e.schema,c).property]=pa(i.attrs[c]));i.startTag;const h=pa(i.startTag),d=i.endTag?pa(i.endTag):void 0,p={opening:h};d&&(p.closing=d),p.properties=o,t.data={position:p}}}return u}function pa(e){const t=T1({line:e.startLine,column:e.startCol,offset:e.startOffset}),i=T1({line:e.endLine,column:e.endCol,offset:e.endOffset});return t||i?{start:t,end:i}:void 0}function T1(e){return e.line&&e.column?e:void 0}const PN={},HN={}.hasOwnProperty,xy=vb("type",{handlers:{root:qN,element:QN,text:VN,comment:GN,doctype:YN}});function zN(e,t){const u=(t||PN).space;return xy(e,u==="svg"?Qr:ts)}function qN(e,t){const i={nodeName:"#document",mode:(e.data||{}).quirksMode?"quirks":"no-quirks",childNodes:[]};return i.childNodes=td(e.children,i,t),_a(e,i),i}function jN(e,t){const i={nodeName:"#document-fragment",childNodes:[]};return i.childNodes=td(e.children,i,t),_a(e,i),i}function YN(e){const t={nodeName:"#documentType",name:"html",publicId:"",systemId:"",parentNode:null};return _a(e,t),t}function VN(e){const t={nodeName:"#text",value:e.value,parentNode:null};return _a(e,t),t}function GN(e){const t={nodeName:"#comment",data:e.value,parentNode:null};return _a(e,t),t}function QN(e,t){const i=t;let u=i;e.type==="element"&&e.tagName.toLowerCase()==="svg"&&i.space==="html"&&(u=Qr);const l=[];let o;if(e.properties){for(o in e.properties)if(o!=="children"&&HN.call(e.properties,o)){const d=KN(u,o,e.properties[o]);d&&l.push(d)}}const c=u.space,h={nodeName:e.tagName,tagName:e.tagName,attrs:l,namespaceURI:pi[c],childNodes:[],parentNode:null};return h.childNodes=td(e.children,h,u),_a(e,h),e.tagName==="template"&&e.content&&(h.content=jN(e.content,u)),h}function KN(e,t,i){const u=no(e,t);if(i===!1||i===null||i===void 0||typeof i=="number"&&Number.isNaN(i)||!i&&u.boolean)return;Array.isArray(i)&&(i=u.commaSeparated?Zb(i):ay(i));const l={name:u.attribute,value:i===!0?"":String(i)};if(u.space&&u.space!=="html"&&u.space!=="svg"){const o=l.name.indexOf(":");o<0?l.prefix="":(l.name=l.name.slice(o+1),l.prefix=u.attribute.slice(0,o)),l.namespace=pi[u.space]}return l}function td(e,t,i){let u=-1;const l=[];if(e)for(;++u<e.length;){const o=xy(e[u],i);o.parentNode=t,l.push(o)}return l}function _a(e,t){const i=e.position;i&&i.start&&i.end&&(i.start.offset,i.end.offset,t.sourceCodeLocation={startLine:i.start.line,startCol:i.start.column,startOffset:i.start.offset,endLine:i.end.line,endCol:i.end.column,endOffset:i.end.offset})}const XN=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"],WN=new Set([65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),at="�";var x;(function(e){e[e.EOF=-1]="EOF",e[e.NULL=0]="NULL",e[e.TABULATION=9]="TABULATION",e[e.CARRIAGE_RETURN=13]="CARRIAGE_RETURN",e[e.LINE_FEED=10]="LINE_FEED",e[e.FORM_FEED=12]="FORM_FEED",e[e.SPACE=32]="SPACE",e[e.EXCLAMATION_MARK=33]="EXCLAMATION_MARK",e[e.QUOTATION_MARK=34]="QUOTATION_MARK",e[e.AMPERSAND=38]="AMPERSAND",e[e.APOSTROPHE=39]="APOSTROPHE",e[e.HYPHEN_MINUS=45]="HYPHEN_MINUS",e[e.SOLIDUS=47]="SOLIDUS",e[e.DIGIT_0=48]="DIGIT_0",e[e.DIGIT_9=57]="DIGIT_9",e[e.SEMICOLON=59]="SEMICOLON",e[e.LESS_THAN_SIGN=60]="LESS_THAN_SIGN",e[e.EQUALS_SIGN=61]="EQUALS_SIGN",e[e.GREATER_THAN_SIGN=62]="GREATER_THAN_SIGN",e[e.QUESTION_MARK=63]="QUESTION_MARK",e[e.LATIN_CAPITAL_A=65]="LATIN_CAPITAL_A",e[e.LATIN_CAPITAL_Z=90]="LATIN_CAPITAL_Z",e[e.RIGHT_SQUARE_BRACKET=93]="RIGHT_SQUARE_BRACKET",e[e.GRAVE_ACCENT=96]="GRAVE_ACCENT",e[e.LATIN_SMALL_A=97]="LATIN_SMALL_A",e[e.LATIN_SMALL_Z=122]="LATIN_SMALL_Z"})(x||(x={}));const Xt={DASH_DASH:"--",CDATA_START:"[CDATA[",DOCTYPE:"doctype",SCRIPT:"script",PUBLIC:"public",SYSTEM:"system"};function Sy(e){return e>=55296&&e<=57343}function ZN(e){return e>=56320&&e<=57343}function JN(e,t){return(e-55296)*1024+9216+t}function Cy(e){return e!==32&&e!==10&&e!==13&&e!==9&&e!==12&&e>=1&&e<=31||e>=127&&e<=159}function _y(e){return e>=64976&&e<=65007||WN.has(e)}var K;(function(e){e.controlCharacterInInputStream="control-character-in-input-stream",e.noncharacterInInputStream="noncharacter-in-input-stream",e.surrogateInInputStream="surrogate-in-input-stream",e.nonVoidHtmlElementStartTagWithTrailingSolidus="non-void-html-element-start-tag-with-trailing-solidus",e.endTagWithAttributes="end-tag-with-attributes",e.endTagWithTrailingSolidus="end-tag-with-trailing-solidus",e.unexpectedSolidusInTag="unexpected-solidus-in-tag",e.unexpectedNullCharacter="unexpected-null-character",e.unexpectedQuestionMarkInsteadOfTagName="unexpected-question-mark-instead-of-tag-name",e.invalidFirstCharacterOfTagName="invalid-first-character-of-tag-name",e.unexpectedEqualsSignBeforeAttributeName="unexpected-equals-sign-before-attribute-name",e.missingEndTagName="missing-end-tag-name",e.unexpectedCharacterInAttributeName="unexpected-character-in-attribute-name",e.unknownNamedCharacterReference="unknown-named-character-reference",e.missingSemicolonAfterCharacterReference="missing-semicolon-after-character-reference",e.unexpectedCharacterAfterDoctypeSystemIdentifier="unexpected-character-after-doctype-system-identifier",e.unexpectedCharacterInUnquotedAttributeValue="unexpected-character-in-unquoted-attribute-value",e.eofBeforeTagName="eof-before-tag-name",e.eofInTag="eof-in-tag",e.missingAttributeValue="missing-attribute-value",e.missingWhitespaceBetweenAttributes="missing-whitespace-between-attributes",e.missingWhitespaceAfterDoctypePublicKeyword="missing-whitespace-after-doctype-public-keyword",e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers="missing-whitespace-between-doctype-public-and-system-identifiers",e.missingWhitespaceAfterDoctypeSystemKeyword="missing-whitespace-after-doctype-system-keyword",e.missingQuoteBeforeDoctypePublicIdentifier="missing-quote-before-doctype-public-identifier",e.missingQuoteBeforeDoctypeSystemIdentifier="missing-quote-before-doctype-system-identifier",e.missingDoctypePublicIdentifier="missing-doctype-public-identifier",e.missingDoctypeSystemIdentifier="missing-doctype-system-identifier",e.abruptDoctypePublicIdentifier="abrupt-doctype-public-identifier",e.abruptDoctypeSystemIdentifier="abrupt-doctype-system-identifier",e.cdataInHtmlContent="cdata-in-html-content",e.incorrectlyOpenedComment="incorrectly-opened-comment",e.eofInScriptHtmlCommentLikeText="eof-in-script-html-comment-like-text",e.eofInDoctype="eof-in-doctype",e.nestedComment="nested-comment",e.abruptClosingOfEmptyComment="abrupt-closing-of-empty-comment",e.eofInComment="eof-in-comment",e.incorrectlyClosedComment="incorrectly-closed-comment",e.eofInCdata="eof-in-cdata",e.absenceOfDigitsInNumericCharacterReference="absence-of-digits-in-numeric-character-reference",e.nullCharacterReference="null-character-reference",e.surrogateCharacterReference="surrogate-character-reference",e.characterReferenceOutsideUnicodeRange="character-reference-outside-unicode-range",e.controlCharacterReference="control-character-reference",e.noncharacterCharacterReference="noncharacter-character-reference",e.missingWhitespaceBeforeDoctypeName="missing-whitespace-before-doctype-name",e.missingDoctypeName="missing-doctype-name",e.invalidCharacterSequenceAfterDoctypeName="invalid-character-sequence-after-doctype-name",e.duplicateAttribute="duplicate-attribute",e.nonConformingDoctype="non-conforming-doctype",e.missingDoctype="missing-doctype",e.misplacedDoctype="misplaced-doctype",e.endTagWithoutMatchingOpenElement="end-tag-without-matching-open-element",e.closingOfElementWithOpenChildElements="closing-of-element-with-open-child-elements",e.disallowedContentInNoscriptInHead="disallowed-content-in-noscript-in-head",e.openElementsLeftAfterEof="open-elements-left-after-eof",e.abandonedHeadElementChild="abandoned-head-element-child",e.misplacedStartTagForHeadElement="misplaced-start-tag-for-head-element",e.nestedNoscriptInHead="nested-noscript-in-head",e.eofInElementThatCanContainOnlyText="eof-in-element-that-can-contain-only-text"})(K||(K={}));const $N=65536;class eO{constructor(t){this.handler=t,this.html="",this.pos=-1,this.lastGapPos=-2,this.gapStack=[],this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,this.bufferWaterline=$N,this.isEol=!1,this.lineStartPos=0,this.droppedBufferSize=0,this.line=1,this.lastErrOffset=-1}get col(){return this.pos-this.lineStartPos+ +(this.lastGapPos!==this.pos)}get offset(){return this.droppedBufferSize+this.pos}getError(t,i){const{line:u,col:l,offset:o}=this,c=l+i,h=o+i;return{code:t,startLine:u,endLine:u,startCol:c,endCol:c,startOffset:h,endOffset:h}}_err(t){this.handler.onParseError&&this.lastErrOffset!==this.offset&&(this.lastErrOffset=this.offset,this.handler.onParseError(this.getError(t,0)))}_addGap(){this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos}_processSurrogate(t){if(this.pos!==this.html.length-1){const i=this.html.charCodeAt(this.pos+1);if(ZN(i))return this.pos++,this._addGap(),JN(t,i)}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,x.EOF;return this._err(K.surrogateInInputStream),t}willDropParsedChunk(){return this.pos>this.bufferWaterline}dropParsedChunk(){this.willDropParsedChunk()&&(this.html=this.html.substring(this.pos),this.lineStartPos-=this.pos,this.droppedBufferSize+=this.pos,this.pos=0,this.lastGapPos=-2,this.gapStack.length=0)}write(t,i){this.html.length>0?this.html+=t:this.html=t,this.endOfChunkHit=!1,this.lastChunkWritten=i}insertHtmlAtCurrentPos(t){this.html=this.html.substring(0,this.pos+1)+t+this.html.substring(this.pos+1),this.endOfChunkHit=!1}startsWith(t,i){if(this.pos+t.length>this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,!1;if(i)return this.html.startsWith(t,this.pos);for(let u=0;u<t.length;u++)if((this.html.charCodeAt(this.pos+u)|32)!==t.charCodeAt(u))return!1;return!0}peek(t){const i=this.pos+t;if(i>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,x.EOF;const u=this.html.charCodeAt(i);return u===x.CARRIAGE_RETURN?x.LINE_FEED:u}advance(){if(this.pos++,this.isEol&&(this.isEol=!1,this.line++,this.lineStartPos=this.pos),this.pos>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,x.EOF;let t=this.html.charCodeAt(this.pos);return t===x.CARRIAGE_RETURN?(this.isEol=!0,this.skipNextNewLine=!0,x.LINE_FEED):t===x.LINE_FEED&&(this.isEol=!0,this.skipNextNewLine)?(this.line--,this.skipNextNewLine=!1,this._addGap(),this.advance()):(this.skipNextNewLine=!1,Sy(t)&&(t=this._processSurrogate(t)),this.handler.onParseError===null||t>31&&t<127||t===x.LINE_FEED||t===x.CARRIAGE_RETURN||t>159&&t<64976||this._checkForProblematicCharacters(t),t)}_checkForProblematicCharacters(t){Cy(t)?this._err(K.controlCharacterInInputStream):_y(t)&&this._err(K.noncharacterInInputStream)}retreat(t){for(this.pos-=t;this.pos<this.lastGapPos;)this.lastGapPos=this.gapStack.pop(),this.pos--;this.isEol=!1}}var Re;(function(e){e[e.CHARACTER=0]="CHARACTER",e[e.NULL_CHARACTER=1]="NULL_CHARACTER",e[e.WHITESPACE_CHARACTER=2]="WHITESPACE_CHARACTER",e[e.START_TAG=3]="START_TAG",e[e.END_TAG=4]="END_TAG",e[e.COMMENT=5]="COMMENT",e[e.DOCTYPE=6]="DOCTYPE",e[e.EOF=7]="EOF",e[e.HIBERNATION=8]="HIBERNATION"})(Re||(Re={}));function Ny(e,t){for(let i=e.attrs.length-1;i>=0;i--)if(e.attrs[i].name===t)return e.attrs[i].value;return null}const tO=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),nO=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function rO(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=nO.get(e))!==null&&t!==void 0?t:e}var xt;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(xt||(xt={}));const iO=32;var jr;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(jr||(jr={}));function vh(e){return e>=xt.ZERO&&e<=xt.NINE}function aO(e){return e>=xt.UPPER_A&&e<=xt.UPPER_F||e>=xt.LOWER_A&&e<=xt.LOWER_F}function uO(e){return e>=xt.UPPER_A&&e<=xt.UPPER_Z||e>=xt.LOWER_A&&e<=xt.LOWER_Z||vh(e)}function sO(e){return e===xt.EQUALS||uO(e)}var wt;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(wt||(wt={}));var or;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(or||(or={}));class lO{constructor(t,i,u){this.decodeTree=t,this.emitCodePoint=i,this.errors=u,this.state=wt.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=or.Strict}startEntity(t){this.decodeMode=t,this.state=wt.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,i){switch(this.state){case wt.EntityStart:return t.charCodeAt(i)===xt.NUM?(this.state=wt.NumericStart,this.consumed+=1,this.stateNumericStart(t,i+1)):(this.state=wt.NamedEntity,this.stateNamedEntity(t,i));case wt.NumericStart:return this.stateNumericStart(t,i);case wt.NumericDecimal:return this.stateNumericDecimal(t,i);case wt.NumericHex:return this.stateNumericHex(t,i);case wt.NamedEntity:return this.stateNamedEntity(t,i)}}stateNumericStart(t,i){return i>=t.length?-1:(t.charCodeAt(i)|iO)===xt.LOWER_X?(this.state=wt.NumericHex,this.consumed+=1,this.stateNumericHex(t,i+1)):(this.state=wt.NumericDecimal,this.stateNumericDecimal(t,i))}addToNumericResult(t,i,u,l){if(i!==u){const o=u-i;this.result=this.result*Math.pow(l,o)+Number.parseInt(t.substr(i,o),l),this.consumed+=o}}stateNumericHex(t,i){const u=i;for(;i<t.length;){const l=t.charCodeAt(i);if(vh(l)||aO(l))i+=1;else return this.addToNumericResult(t,u,i,16),this.emitNumericEntity(l,3)}return this.addToNumericResult(t,u,i,16),-1}stateNumericDecimal(t,i){const u=i;for(;i<t.length;){const l=t.charCodeAt(i);if(vh(l))i+=1;else return this.addToNumericResult(t,u,i,10),this.emitNumericEntity(l,2)}return this.addToNumericResult(t,u,i,10),-1}emitNumericEntity(t,i){var u;if(this.consumed<=i)return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===xt.SEMI)this.consumed+=1;else if(this.decodeMode===or.Strict)return 0;return this.emitCodePoint(rO(this.result),this.consumed),this.errors&&(t!==xt.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,i){const{decodeTree:u}=this;let l=u[this.treeIndex],o=(l&jr.VALUE_LENGTH)>>14;for(;i<t.length;i++,this.excess++){const c=t.charCodeAt(i);if(this.treeIndex=oO(u,l,this.treeIndex+Math.max(1,o),c),this.treeIndex<0)return this.result===0||this.decodeMode===or.Attribute&&(o===0||sO(c))?0:this.emitNotTerminatedNamedEntity();if(l=u[this.treeIndex],o=(l&jr.VALUE_LENGTH)>>14,o!==0){if(c===xt.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==or.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:i,decodeTree:u}=this,l=(u[i]&jr.VALUE_LENGTH)>>14;return this.emitNamedEntityData(i,l,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,i,u){const{decodeTree:l}=this;return this.emitCodePoint(i===1?l[t]&~jr.VALUE_LENGTH:l[t+1],u),i===3&&this.emitCodePoint(l[t+2],u),u}end(){var t;switch(this.state){case wt.NamedEntity:return this.result!==0&&(this.decodeMode!==or.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case wt.NumericDecimal:return this.emitNumericEntity(0,2);case wt.NumericHex:return this.emitNumericEntity(0,3);case wt.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case wt.EntityStart:return 0}}}function oO(e,t,i,u){const l=(t&jr.BRANCH_LENGTH)>>7,o=t&jr.JUMP_TABLE;if(l===0)return o!==0&&u===o?i:-1;if(o){const d=u-o;return d<0||d>=l?-1:e[i+d]-1}let c=i,h=c+l-1;for(;c<=h;){const d=c+h>>>1,p=e[d];if(p<u)c=d+1;else if(p>u)h=d-1;else return e[d+l]}return-1}var te;(function(e){e.HTML="http://www.w3.org/1999/xhtml",e.MATHML="http://www.w3.org/1998/Math/MathML",e.SVG="http://www.w3.org/2000/svg",e.XLINK="http://www.w3.org/1999/xlink",e.XML="http://www.w3.org/XML/1998/namespace",e.XMLNS="http://www.w3.org/2000/xmlns/"})(te||(te={}));var gi;(function(e){e.TYPE="type",e.ACTION="action",e.ENCODING="encoding",e.PROMPT="prompt",e.NAME="name",e.COLOR="color",e.FACE="face",e.SIZE="size"})(gi||(gi={}));var xn;(function(e){e.NO_QUIRKS="no-quirks",e.QUIRKS="quirks",e.LIMITED_QUIRKS="limited-quirks"})(xn||(xn={}));var H;(function(e){e.A="a",e.ADDRESS="address",e.ANNOTATION_XML="annotation-xml",e.APPLET="applet",e.AREA="area",e.ARTICLE="article",e.ASIDE="aside",e.B="b",e.BASE="base",e.BASEFONT="basefont",e.BGSOUND="bgsound",e.BIG="big",e.BLOCKQUOTE="blockquote",e.BODY="body",e.BR="br",e.BUTTON="button",e.CAPTION="caption",e.CENTER="center",e.CODE="code",e.COL="col",e.COLGROUP="colgroup",e.DD="dd",e.DESC="desc",e.DETAILS="details",e.DIALOG="dialog",e.DIR="dir",e.DIV="div",e.DL="dl",e.DT="dt",e.EM="em",e.EMBED="embed",e.FIELDSET="fieldset",e.FIGCAPTION="figcaption",e.FIGURE="figure",e.FONT="font",e.FOOTER="footer",e.FOREIGN_OBJECT="foreignObject",e.FORM="form",e.FRAME="frame",e.FRAMESET="frameset",e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e.H6="h6",e.HEAD="head",e.HEADER="header",e.HGROUP="hgroup",e.HR="hr",e.HTML="html",e.I="i",e.IMG="img",e.IMAGE="image",e.INPUT="input",e.IFRAME="iframe",e.KEYGEN="keygen",e.LABEL="label",e.LI="li",e.LINK="link",e.LISTING="listing",e.MAIN="main",e.MALIGNMARK="malignmark",e.MARQUEE="marquee",e.MATH="math",e.MENU="menu",e.META="meta",e.MGLYPH="mglyph",e.MI="mi",e.MO="mo",e.MN="mn",e.MS="ms",e.MTEXT="mtext",e.NAV="nav",e.NOBR="nobr",e.NOFRAMES="noframes",e.NOEMBED="noembed",e.NOSCRIPT="noscript",e.OBJECT="object",e.OL="ol",e.OPTGROUP="optgroup",e.OPTION="option",e.P="p",e.PARAM="param",e.PLAINTEXT="plaintext",e.PRE="pre",e.RB="rb",e.RP="rp",e.RT="rt",e.RTC="rtc",e.RUBY="ruby",e.S="s",e.SCRIPT="script",e.SEARCH="search",e.SECTION="section",e.SELECT="select",e.SOURCE="source",e.SMALL="small",e.SPAN="span",e.STRIKE="strike",e.STRONG="strong",e.STYLE="style",e.SUB="sub",e.SUMMARY="summary",e.SUP="sup",e.TABLE="table",e.TBODY="tbody",e.TEMPLATE="template",e.TEXTAREA="textarea",e.TFOOT="tfoot",e.TD="td",e.TH="th",e.THEAD="thead",e.TITLE="title",e.TR="tr",e.TRACK="track",e.TT="tt",e.U="u",e.UL="ul",e.SVG="svg",e.VAR="var",e.WBR="wbr",e.XMP="xmp"})(H||(H={}));var g;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.A=1]="A",e[e.ADDRESS=2]="ADDRESS",e[e.ANNOTATION_XML=3]="ANNOTATION_XML",e[e.APPLET=4]="APPLET",e[e.AREA=5]="AREA",e[e.ARTICLE=6]="ARTICLE",e[e.ASIDE=7]="ASIDE",e[e.B=8]="B",e[e.BASE=9]="BASE",e[e.BASEFONT=10]="BASEFONT",e[e.BGSOUND=11]="BGSOUND",e[e.BIG=12]="BIG",e[e.BLOCKQUOTE=13]="BLOCKQUOTE",e[e.BODY=14]="BODY",e[e.BR=15]="BR",e[e.BUTTON=16]="BUTTON",e[e.CAPTION=17]="CAPTION",e[e.CENTER=18]="CENTER",e[e.CODE=19]="CODE",e[e.COL=20]="COL",e[e.COLGROUP=21]="COLGROUP",e[e.DD=22]="DD",e[e.DESC=23]="DESC",e[e.DETAILS=24]="DETAILS",e[e.DIALOG=25]="DIALOG",e[e.DIR=26]="DIR",e[e.DIV=27]="DIV",e[e.DL=28]="DL",e[e.DT=29]="DT",e[e.EM=30]="EM",e[e.EMBED=31]="EMBED",e[e.FIELDSET=32]="FIELDSET",e[e.FIGCAPTION=33]="FIGCAPTION",e[e.FIGURE=34]="FIGURE",e[e.FONT=35]="FONT",e[e.FOOTER=36]="FOOTER",e[e.FOREIGN_OBJECT=37]="FOREIGN_OBJECT",e[e.FORM=38]="FORM",e[e.FRAME=39]="FRAME",e[e.FRAMESET=40]="FRAMESET",e[e.H1=41]="H1",e[e.H2=42]="H2",e[e.H3=43]="H3",e[e.H4=44]="H4",e[e.H5=45]="H5",e[e.H6=46]="H6",e[e.HEAD=47]="HEAD",e[e.HEADER=48]="HEADER",e[e.HGROUP=49]="HGROUP",e[e.HR=50]="HR",e[e.HTML=51]="HTML",e[e.I=52]="I",e[e.IMG=53]="IMG",e[e.IMAGE=54]="IMAGE",e[e.INPUT=55]="INPUT",e[e.IFRAME=56]="IFRAME",e[e.KEYGEN=57]="KEYGEN",e[e.LABEL=58]="LABEL",e[e.LI=59]="LI",e[e.LINK=60]="LINK",e[e.LISTING=61]="LISTING",e[e.MAIN=62]="MAIN",e[e.MALIGNMARK=63]="MALIGNMARK",e[e.MARQUEE=64]="MARQUEE",e[e.MATH=65]="MATH",e[e.MENU=66]="MENU",e[e.META=67]="META",e[e.MGLYPH=68]="MGLYPH",e[e.MI=69]="MI",e[e.MO=70]="MO",e[e.MN=71]="MN",e[e.MS=72]="MS",e[e.MTEXT=73]="MTEXT",e[e.NAV=74]="NAV",e[e.NOBR=75]="NOBR",e[e.NOFRAMES=76]="NOFRAMES",e[e.NOEMBED=77]="NOEMBED",e[e.NOSCRIPT=78]="NOSCRIPT",e[e.OBJECT=79]="OBJECT",e[e.OL=80]="OL",e[e.OPTGROUP=81]="OPTGROUP",e[e.OPTION=82]="OPTION",e[e.P=83]="P",e[e.PARAM=84]="PARAM",e[e.PLAINTEXT=85]="PLAINTEXT",e[e.PRE=86]="PRE",e[e.RB=87]="RB",e[e.RP=88]="RP",e[e.RT=89]="RT",e[e.RTC=90]="RTC",e[e.RUBY=91]="RUBY",e[e.S=92]="S",e[e.SCRIPT=93]="SCRIPT",e[e.SEARCH=94]="SEARCH",e[e.SECTION=95]="SECTION",e[e.SELECT=96]="SELECT",e[e.SOURCE=97]="SOURCE",e[e.SMALL=98]="SMALL",e[e.SPAN=99]="SPAN",e[e.STRIKE=100]="STRIKE",e[e.STRONG=101]="STRONG",e[e.STYLE=102]="STYLE",e[e.SUB=103]="SUB",e[e.SUMMARY=104]="SUMMARY",e[e.SUP=105]="SUP",e[e.TABLE=106]="TABLE",e[e.TBODY=107]="TBODY",e[e.TEMPLATE=108]="TEMPLATE",e[e.TEXTAREA=109]="TEXTAREA",e[e.TFOOT=110]="TFOOT",e[e.TD=111]="TD",e[e.TH=112]="TH",e[e.THEAD=113]="THEAD",e[e.TITLE=114]="TITLE",e[e.TR=115]="TR",e[e.TRACK=116]="TRACK",e[e.TT=117]="TT",e[e.U=118]="U",e[e.UL=119]="UL",e[e.SVG=120]="SVG",e[e.VAR=121]="VAR",e[e.WBR=122]="WBR",e[e.XMP=123]="XMP"})(g||(g={}));const cO=new Map([[H.A,g.A],[H.ADDRESS,g.ADDRESS],[H.ANNOTATION_XML,g.ANNOTATION_XML],[H.APPLET,g.APPLET],[H.AREA,g.AREA],[H.ARTICLE,g.ARTICLE],[H.ASIDE,g.ASIDE],[H.B,g.B],[H.BASE,g.BASE],[H.BASEFONT,g.BASEFONT],[H.BGSOUND,g.BGSOUND],[H.BIG,g.BIG],[H.BLOCKQUOTE,g.BLOCKQUOTE],[H.BODY,g.BODY],[H.BR,g.BR],[H.BUTTON,g.BUTTON],[H.CAPTION,g.CAPTION],[H.CENTER,g.CENTER],[H.CODE,g.CODE],[H.COL,g.COL],[H.COLGROUP,g.COLGROUP],[H.DD,g.DD],[H.DESC,g.DESC],[H.DETAILS,g.DETAILS],[H.DIALOG,g.DIALOG],[H.DIR,g.DIR],[H.DIV,g.DIV],[H.DL,g.DL],[H.DT,g.DT],[H.EM,g.EM],[H.EMBED,g.EMBED],[H.FIELDSET,g.FIELDSET],[H.FIGCAPTION,g.FIGCAPTION],[H.FIGURE,g.FIGURE],[H.FONT,g.FONT],[H.FOOTER,g.FOOTER],[H.FOREIGN_OBJECT,g.FOREIGN_OBJECT],[H.FORM,g.FORM],[H.FRAME,g.FRAME],[H.FRAMESET,g.FRAMESET],[H.H1,g.H1],[H.H2,g.H2],[H.H3,g.H3],[H.H4,g.H4],[H.H5,g.H5],[H.H6,g.H6],[H.HEAD,g.HEAD],[H.HEADER,g.HEADER],[H.HGROUP,g.HGROUP],[H.HR,g.HR],[H.HTML,g.HTML],[H.I,g.I],[H.IMG,g.IMG],[H.IMAGE,g.IMAGE],[H.INPUT,g.INPUT],[H.IFRAME,g.IFRAME],[H.KEYGEN,g.KEYGEN],[H.LABEL,g.LABEL],[H.LI,g.LI],[H.LINK,g.LINK],[H.LISTING,g.LISTING],[H.MAIN,g.MAIN],[H.MALIGNMARK,g.MALIGNMARK],[H.MARQUEE,g.MARQUEE],[H.MATH,g.MATH],[H.MENU,g.MENU],[H.META,g.META],[H.MGLYPH,g.MGLYPH],[H.MI,g.MI],[H.MO,g.MO],[H.MN,g.MN],[H.MS,g.MS],[H.MTEXT,g.MTEXT],[H.NAV,g.NAV],[H.NOBR,g.NOBR],[H.NOFRAMES,g.NOFRAMES],[H.NOEMBED,g.NOEMBED],[H.NOSCRIPT,g.NOSCRIPT],[H.OBJECT,g.OBJECT],[H.OL,g.OL],[H.OPTGROUP,g.OPTGROUP],[H.OPTION,g.OPTION],[H.P,g.P],[H.PARAM,g.PARAM],[H.PLAINTEXT,g.PLAINTEXT],[H.PRE,g.PRE],[H.RB,g.RB],[H.RP,g.RP],[H.RT,g.RT],[H.RTC,g.RTC],[H.RUBY,g.RUBY],[H.S,g.S],[H.SCRIPT,g.SCRIPT],[H.SEARCH,g.SEARCH],[H.SECTION,g.SECTION],[H.SELECT,g.SELECT],[H.SOURCE,g.SOURCE],[H.SMALL,g.SMALL],[H.SPAN,g.SPAN],[H.STRIKE,g.STRIKE],[H.STRONG,g.STRONG],[H.STYLE,g.STYLE],[H.SUB,g.SUB],[H.SUMMARY,g.SUMMARY],[H.SUP,g.SUP],[H.TABLE,g.TABLE],[H.TBODY,g.TBODY],[H.TEMPLATE,g.TEMPLATE],[H.TEXTAREA,g.TEXTAREA],[H.TFOOT,g.TFOOT],[H.TD,g.TD],[H.TH,g.TH],[H.THEAD,g.THEAD],[H.TITLE,g.TITLE],[H.TR,g.TR],[H.TRACK,g.TRACK],[H.TT,g.TT],[H.U,g.U],[H.UL,g.UL],[H.SVG,g.SVG],[H.VAR,g.VAR],[H.WBR,g.WBR],[H.XMP,g.XMP]]);function Na(e){var t;return(t=cO.get(e))!==null&&t!==void 0?t:g.UNKNOWN}const re=g,fO={[te.HTML]:new Set([re.ADDRESS,re.APPLET,re.AREA,re.ARTICLE,re.ASIDE,re.BASE,re.BASEFONT,re.BGSOUND,re.BLOCKQUOTE,re.BODY,re.BR,re.BUTTON,re.CAPTION,re.CENTER,re.COL,re.COLGROUP,re.DD,re.DETAILS,re.DIR,re.DIV,re.DL,re.DT,re.EMBED,re.FIELDSET,re.FIGCAPTION,re.FIGURE,re.FOOTER,re.FORM,re.FRAME,re.FRAMESET,re.H1,re.H2,re.H3,re.H4,re.H5,re.H6,re.HEAD,re.HEADER,re.HGROUP,re.HR,re.HTML,re.IFRAME,re.IMG,re.INPUT,re.LI,re.LINK,re.LISTING,re.MAIN,re.MARQUEE,re.MENU,re.META,re.NAV,re.NOEMBED,re.NOFRAMES,re.NOSCRIPT,re.OBJECT,re.OL,re.P,re.PARAM,re.PLAINTEXT,re.PRE,re.SCRIPT,re.SECTION,re.SELECT,re.SOURCE,re.STYLE,re.SUMMARY,re.TABLE,re.TBODY,re.TD,re.TEMPLATE,re.TEXTAREA,re.TFOOT,re.TH,re.THEAD,re.TITLE,re.TR,re.TRACK,re.UL,re.WBR,re.XMP]),[te.MATHML]:new Set([re.MI,re.MO,re.MN,re.MS,re.MTEXT,re.ANNOTATION_XML]),[te.SVG]:new Set([re.TITLE,re.FOREIGN_OBJECT,re.DESC]),[te.XLINK]:new Set,[te.XML]:new Set,[te.XMLNS]:new Set},Ah=new Set([re.H1,re.H2,re.H3,re.H4,re.H5,re.H6]);H.STYLE,H.SCRIPT,H.XMP,H.IFRAME,H.NOEMBED,H.NOFRAMES,H.PLAINTEXT;var C;(function(e){e[e.DATA=0]="DATA",e[e.RCDATA=1]="RCDATA",e[e.RAWTEXT=2]="RAWTEXT",e[e.SCRIPT_DATA=3]="SCRIPT_DATA",e[e.PLAINTEXT=4]="PLAINTEXT",e[e.TAG_OPEN=5]="TAG_OPEN",e[e.END_TAG_OPEN=6]="END_TAG_OPEN",e[e.TAG_NAME=7]="TAG_NAME",e[e.RCDATA_LESS_THAN_SIGN=8]="RCDATA_LESS_THAN_SIGN",e[e.RCDATA_END_TAG_OPEN=9]="RCDATA_END_TAG_OPEN",e[e.RCDATA_END_TAG_NAME=10]="RCDATA_END_TAG_NAME",e[e.RAWTEXT_LESS_THAN_SIGN=11]="RAWTEXT_LESS_THAN_SIGN",e[e.RAWTEXT_END_TAG_OPEN=12]="RAWTEXT_END_TAG_OPEN",e[e.RAWTEXT_END_TAG_NAME=13]="RAWTEXT_END_TAG_NAME",e[e.SCRIPT_DATA_LESS_THAN_SIGN=14]="SCRIPT_DATA_LESS_THAN_SIGN",e[e.SCRIPT_DATA_END_TAG_OPEN=15]="SCRIPT_DATA_END_TAG_OPEN",e[e.SCRIPT_DATA_END_TAG_NAME=16]="SCRIPT_DATA_END_TAG_NAME",e[e.SCRIPT_DATA_ESCAPE_START=17]="SCRIPT_DATA_ESCAPE_START",e[e.SCRIPT_DATA_ESCAPE_START_DASH=18]="SCRIPT_DATA_ESCAPE_START_DASH",e[e.SCRIPT_DATA_ESCAPED=19]="SCRIPT_DATA_ESCAPED",e[e.SCRIPT_DATA_ESCAPED_DASH=20]="SCRIPT_DATA_ESCAPED_DASH",e[e.SCRIPT_DATA_ESCAPED_DASH_DASH=21]="SCRIPT_DATA_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN=22]="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN=23]="SCRIPT_DATA_ESCAPED_END_TAG_OPEN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME=24]="SCRIPT_DATA_ESCAPED_END_TAG_NAME",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START=25]="SCRIPT_DATA_DOUBLE_ESCAPE_START",e[e.SCRIPT_DATA_DOUBLE_ESCAPED=26]="SCRIPT_DATA_DOUBLE_ESCAPED",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH=27]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH=28]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN=29]="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END=30]="SCRIPT_DATA_DOUBLE_ESCAPE_END",e[e.BEFORE_ATTRIBUTE_NAME=31]="BEFORE_ATTRIBUTE_NAME",e[e.ATTRIBUTE_NAME=32]="ATTRIBUTE_NAME",e[e.AFTER_ATTRIBUTE_NAME=33]="AFTER_ATTRIBUTE_NAME",e[e.BEFORE_ATTRIBUTE_VALUE=34]="BEFORE_ATTRIBUTE_VALUE",e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED=35]="ATTRIBUTE_VALUE_DOUBLE_QUOTED",e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED=36]="ATTRIBUTE_VALUE_SINGLE_QUOTED",e[e.ATTRIBUTE_VALUE_UNQUOTED=37]="ATTRIBUTE_VALUE_UNQUOTED",e[e.AFTER_ATTRIBUTE_VALUE_QUOTED=38]="AFTER_ATTRIBUTE_VALUE_QUOTED",e[e.SELF_CLOSING_START_TAG=39]="SELF_CLOSING_START_TAG",e[e.BOGUS_COMMENT=40]="BOGUS_COMMENT",e[e.MARKUP_DECLARATION_OPEN=41]="MARKUP_DECLARATION_OPEN",e[e.COMMENT_START=42]="COMMENT_START",e[e.COMMENT_START_DASH=43]="COMMENT_START_DASH",e[e.COMMENT=44]="COMMENT",e[e.COMMENT_LESS_THAN_SIGN=45]="COMMENT_LESS_THAN_SIGN",e[e.COMMENT_LESS_THAN_SIGN_BANG=46]="COMMENT_LESS_THAN_SIGN_BANG",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH=47]="COMMENT_LESS_THAN_SIGN_BANG_DASH",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH=48]="COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH",e[e.COMMENT_END_DASH=49]="COMMENT_END_DASH",e[e.COMMENT_END=50]="COMMENT_END",e[e.COMMENT_END_BANG=51]="COMMENT_END_BANG",e[e.DOCTYPE=52]="DOCTYPE",e[e.BEFORE_DOCTYPE_NAME=53]="BEFORE_DOCTYPE_NAME",e[e.DOCTYPE_NAME=54]="DOCTYPE_NAME",e[e.AFTER_DOCTYPE_NAME=55]="AFTER_DOCTYPE_NAME",e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD=56]="AFTER_DOCTYPE_PUBLIC_KEYWORD",e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER=57]="BEFORE_DOCTYPE_PUBLIC_IDENTIFIER",e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED=58]="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED=59]="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER=60]="AFTER_DOCTYPE_PUBLIC_IDENTIFIER",e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS=61]="BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS",e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD=62]="AFTER_DOCTYPE_SYSTEM_KEYWORD",e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER=63]="BEFORE_DOCTYPE_SYSTEM_IDENTIFIER",e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED=64]="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED=65]="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER=66]="AFTER_DOCTYPE_SYSTEM_IDENTIFIER",e[e.BOGUS_DOCTYPE=67]="BOGUS_DOCTYPE",e[e.CDATA_SECTION=68]="CDATA_SECTION",e[e.CDATA_SECTION_BRACKET=69]="CDATA_SECTION_BRACKET",e[e.CDATA_SECTION_END=70]="CDATA_SECTION_END",e[e.CHARACTER_REFERENCE=71]="CHARACTER_REFERENCE",e[e.AMBIGUOUS_AMPERSAND=72]="AMBIGUOUS_AMPERSAND"})(C||(C={}));const ft={DATA:C.DATA,RCDATA:C.RCDATA,RAWTEXT:C.RAWTEXT,SCRIPT_DATA:C.SCRIPT_DATA,PLAINTEXT:C.PLAINTEXT,CDATA_SECTION:C.CDATA_SECTION};function hO(e){return e>=x.DIGIT_0&&e<=x.DIGIT_9}function Du(e){return e>=x.LATIN_CAPITAL_A&&e<=x.LATIN_CAPITAL_Z}function dO(e){return e>=x.LATIN_SMALL_A&&e<=x.LATIN_SMALL_Z}function zr(e){return dO(e)||Du(e)}function E1(e){return zr(e)||hO(e)}function Ol(e){return e+32}function Oy(e){return e===x.SPACE||e===x.LINE_FEED||e===x.TABULATION||e===x.FORM_FEED}function v1(e){return Oy(e)||e===x.SOLIDUS||e===x.GREATER_THAN_SIGN}function mO(e){return e===x.NULL?K.nullCharacterReference:e>1114111?K.characterReferenceOutsideUnicodeRange:Sy(e)?K.surrogateCharacterReference:_y(e)?K.noncharacterCharacterReference:Cy(e)||e===x.CARRIAGE_RETURN?K.controlCharacterReference:null}class pO{constructor(t,i){this.options=t,this.handler=i,this.paused=!1,this.inLoop=!1,this.inForeignNode=!1,this.lastStartTagName="",this.active=!1,this.state=C.DATA,this.returnState=C.DATA,this.entityStartPos=0,this.consumedAfterSnapshot=-1,this.currentCharacterToken=null,this.currentToken=null,this.currentAttr={name:"",value:""},this.preprocessor=new eO(i),this.currentLocation=this.getCurrentLocation(-1),this.entityDecoder=new lO(tO,(u,l)=>{this.preprocessor.pos=this.entityStartPos+l-1,this._flushCodePointConsumedAsCharacterReference(u)},i.onParseError?{missingSemicolonAfterCharacterReference:()=>{this._err(K.missingSemicolonAfterCharacterReference,1)},absenceOfDigitsInNumericCharacterReference:u=>{this._err(K.absenceOfDigitsInNumericCharacterReference,this.entityStartPos-this.preprocessor.pos+u)},validateNumericCharacterReference:u=>{const l=mO(u);l&&this._err(l,1)}}:void 0)}_err(t,i=0){var u,l;(l=(u=this.handler).onParseError)===null||l===void 0||l.call(u,this.preprocessor.getError(t,i))}getCurrentLocation(t){return this.options.sourceCodeLocationInfo?{startLine:this.preprocessor.line,startCol:this.preprocessor.col-t,startOffset:this.preprocessor.offset-t,endLine:-1,endCol:-1,endOffset:-1}:null}_runParsingLoop(){if(!this.inLoop){for(this.inLoop=!0;this.active&&!this.paused;){this.consumedAfterSnapshot=0;const t=this._consume();this._ensureHibernation()||this._callState(t)}this.inLoop=!1}}pause(){this.paused=!0}resume(t){if(!this.paused)throw new Error("Parser was already resumed");this.paused=!1,!this.inLoop&&(this._runParsingLoop(),this.paused||t?.())}write(t,i,u){this.active=!0,this.preprocessor.write(t,i),this._runParsingLoop(),this.paused||u?.()}insertHtmlAtCurrentPos(t){this.active=!0,this.preprocessor.insertHtmlAtCurrentPos(t),this._runParsingLoop()}_ensureHibernation(){return this.preprocessor.endOfChunkHit?(this.preprocessor.retreat(this.consumedAfterSnapshot),this.consumedAfterSnapshot=0,this.active=!1,!0):!1}_consume(){return this.consumedAfterSnapshot++,this.preprocessor.advance()}_advanceBy(t){this.consumedAfterSnapshot+=t;for(let i=0;i<t;i++)this.preprocessor.advance()}_consumeSequenceIfMatch(t,i){return this.preprocessor.startsWith(t,i)?(this._advanceBy(t.length-1),!0):!1}_createStartTagToken(){this.currentToken={type:Re.START_TAG,tagName:"",tagID:g.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(1)}}_createEndTagToken(){this.currentToken={type:Re.END_TAG,tagName:"",tagID:g.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(2)}}_createCommentToken(t){this.currentToken={type:Re.COMMENT,data:"",location:this.getCurrentLocation(t)}}_createDoctypeToken(t){this.currentToken={type:Re.DOCTYPE,name:t,forceQuirks:!1,publicId:null,systemId:null,location:this.currentLocation}}_createCharacterToken(t,i){this.currentCharacterToken={type:t,chars:i,location:this.currentLocation}}_createAttr(t){this.currentAttr={name:t,value:""},this.currentLocation=this.getCurrentLocation(0)}_leaveAttrName(){var t,i;const u=this.currentToken;if(Ny(u,this.currentAttr.name)===null){if(u.attrs.push(this.currentAttr),u.location&&this.currentLocation){const l=(t=(i=u.location).attrs)!==null&&t!==void 0?t:i.attrs=Object.create(null);l[this.currentAttr.name]=this.currentLocation,this._leaveAttrValue()}}else this._err(K.duplicateAttribute)}_leaveAttrValue(){this.currentLocation&&(this.currentLocation.endLine=this.preprocessor.line,this.currentLocation.endCol=this.preprocessor.col,this.currentLocation.endOffset=this.preprocessor.offset)}prepareToken(t){this._emitCurrentCharacterToken(t.location),this.currentToken=null,t.location&&(t.location.endLine=this.preprocessor.line,t.location.endCol=this.preprocessor.col+1,t.location.endOffset=this.preprocessor.offset+1),this.currentLocation=this.getCurrentLocation(-1)}emitCurrentTagToken(){const t=this.currentToken;this.prepareToken(t),t.tagID=Na(t.tagName),t.type===Re.START_TAG?(this.lastStartTagName=t.tagName,this.handler.onStartTag(t)):(t.attrs.length>0&&this._err(K.endTagWithAttributes),t.selfClosing&&this._err(K.endTagWithTrailingSolidus),this.handler.onEndTag(t)),this.preprocessor.dropParsedChunk()}emitCurrentComment(t){this.prepareToken(t),this.handler.onComment(t),this.preprocessor.dropParsedChunk()}emitCurrentDoctype(t){this.prepareToken(t),this.handler.onDoctype(t),this.preprocessor.dropParsedChunk()}_emitCurrentCharacterToken(t){if(this.currentCharacterToken){switch(t&&this.currentCharacterToken.location&&(this.currentCharacterToken.location.endLine=t.startLine,this.currentCharacterToken.location.endCol=t.startCol,this.currentCharacterToken.location.endOffset=t.startOffset),this.currentCharacterToken.type){case Re.CHARACTER:{this.handler.onCharacter(this.currentCharacterToken);break}case Re.NULL_CHARACTER:{this.handler.onNullCharacter(this.currentCharacterToken);break}case Re.WHITESPACE_CHARACTER:{this.handler.onWhitespaceCharacter(this.currentCharacterToken);break}}this.currentCharacterToken=null}}_emitEOFToken(){const t=this.getCurrentLocation(0);t&&(t.endLine=t.startLine,t.endCol=t.startCol,t.endOffset=t.startOffset),this._emitCurrentCharacterToken(t),this.handler.onEof({type:Re.EOF,location:t}),this.active=!1}_appendCharToCurrentCharacterToken(t,i){if(this.currentCharacterToken)if(this.currentCharacterToken.type===t){this.currentCharacterToken.chars+=i;return}else this.currentLocation=this.getCurrentLocation(0),this._emitCurrentCharacterToken(this.currentLocation),this.preprocessor.dropParsedChunk();this._createCharacterToken(t,i)}_emitCodePoint(t){const i=Oy(t)?Re.WHITESPACE_CHARACTER:t===x.NULL?Re.NULL_CHARACTER:Re.CHARACTER;this._appendCharToCurrentCharacterToken(i,String.fromCodePoint(t))}_emitChars(t){this._appendCharToCurrentCharacterToken(Re.CHARACTER,t)}_startCharacterReference(){this.returnState=this.state,this.state=C.CHARACTER_REFERENCE,this.entityStartPos=this.preprocessor.pos,this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute()?or.Attribute:or.Legacy)}_isCharacterReferenceInAttribute(){return this.returnState===C.ATTRIBUTE_VALUE_DOUBLE_QUOTED||this.returnState===C.ATTRIBUTE_VALUE_SINGLE_QUOTED||this.returnState===C.ATTRIBUTE_VALUE_UNQUOTED}_flushCodePointConsumedAsCharacterReference(t){this._isCharacterReferenceInAttribute()?this.currentAttr.value+=String.fromCodePoint(t):this._emitCodePoint(t)}_callState(t){switch(this.state){case C.DATA:{this._stateData(t);break}case C.RCDATA:{this._stateRcdata(t);break}case C.RAWTEXT:{this._stateRawtext(t);break}case C.SCRIPT_DATA:{this._stateScriptData(t);break}case C.PLAINTEXT:{this._statePlaintext(t);break}case C.TAG_OPEN:{this._stateTagOpen(t);break}case C.END_TAG_OPEN:{this._stateEndTagOpen(t);break}case C.TAG_NAME:{this._stateTagName(t);break}case C.RCDATA_LESS_THAN_SIGN:{this._stateRcdataLessThanSign(t);break}case C.RCDATA_END_TAG_OPEN:{this._stateRcdataEndTagOpen(t);break}case C.RCDATA_END_TAG_NAME:{this._stateRcdataEndTagName(t);break}case C.RAWTEXT_LESS_THAN_SIGN:{this._stateRawtextLessThanSign(t);break}case C.RAWTEXT_END_TAG_OPEN:{this._stateRawtextEndTagOpen(t);break}case C.RAWTEXT_END_TAG_NAME:{this._stateRawtextEndTagName(t);break}case C.SCRIPT_DATA_LESS_THAN_SIGN:{this._stateScriptDataLessThanSign(t);break}case C.SCRIPT_DATA_END_TAG_OPEN:{this._stateScriptDataEndTagOpen(t);break}case C.SCRIPT_DATA_END_TAG_NAME:{this._stateScriptDataEndTagName(t);break}case C.SCRIPT_DATA_ESCAPE_START:{this._stateScriptDataEscapeStart(t);break}case C.SCRIPT_DATA_ESCAPE_START_DASH:{this._stateScriptDataEscapeStartDash(t);break}case C.SCRIPT_DATA_ESCAPED:{this._stateScriptDataEscaped(t);break}case C.SCRIPT_DATA_ESCAPED_DASH:{this._stateScriptDataEscapedDash(t);break}case C.SCRIPT_DATA_ESCAPED_DASH_DASH:{this._stateScriptDataEscapedDashDash(t);break}case C.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataEscapedLessThanSign(t);break}case C.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:{this._stateScriptDataEscapedEndTagOpen(t);break}case C.SCRIPT_DATA_ESCAPED_END_TAG_NAME:{this._stateScriptDataEscapedEndTagName(t);break}case C.SCRIPT_DATA_DOUBLE_ESCAPE_START:{this._stateScriptDataDoubleEscapeStart(t);break}case C.SCRIPT_DATA_DOUBLE_ESCAPED:{this._stateScriptDataDoubleEscaped(t);break}case C.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:{this._stateScriptDataDoubleEscapedDash(t);break}case C.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:{this._stateScriptDataDoubleEscapedDashDash(t);break}case C.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataDoubleEscapedLessThanSign(t);break}case C.SCRIPT_DATA_DOUBLE_ESCAPE_END:{this._stateScriptDataDoubleEscapeEnd(t);break}case C.BEFORE_ATTRIBUTE_NAME:{this._stateBeforeAttributeName(t);break}case C.ATTRIBUTE_NAME:{this._stateAttributeName(t);break}case C.AFTER_ATTRIBUTE_NAME:{this._stateAfterAttributeName(t);break}case C.BEFORE_ATTRIBUTE_VALUE:{this._stateBeforeAttributeValue(t);break}case C.ATTRIBUTE_VALUE_DOUBLE_QUOTED:{this._stateAttributeValueDoubleQuoted(t);break}case C.ATTRIBUTE_VALUE_SINGLE_QUOTED:{this._stateAttributeValueSingleQuoted(t);break}case C.ATTRIBUTE_VALUE_UNQUOTED:{this._stateAttributeValueUnquoted(t);break}case C.AFTER_ATTRIBUTE_VALUE_QUOTED:{this._stateAfterAttributeValueQuoted(t);break}case C.SELF_CLOSING_START_TAG:{this._stateSelfClosingStartTag(t);break}case C.BOGUS_COMMENT:{this._stateBogusComment(t);break}case C.MARKUP_DECLARATION_OPEN:{this._stateMarkupDeclarationOpen(t);break}case C.COMMENT_START:{this._stateCommentStart(t);break}case C.COMMENT_START_DASH:{this._stateCommentStartDash(t);break}case C.COMMENT:{this._stateComment(t);break}case C.COMMENT_LESS_THAN_SIGN:{this._stateCommentLessThanSign(t);break}case C.COMMENT_LESS_THAN_SIGN_BANG:{this._stateCommentLessThanSignBang(t);break}case C.COMMENT_LESS_THAN_SIGN_BANG_DASH:{this._stateCommentLessThanSignBangDash(t);break}case C.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:{this._stateCommentLessThanSignBangDashDash(t);break}case C.COMMENT_END_DASH:{this._stateCommentEndDash(t);break}case C.COMMENT_END:{this._stateCommentEnd(t);break}case C.COMMENT_END_BANG:{this._stateCommentEndBang(t);break}case C.DOCTYPE:{this._stateDoctype(t);break}case C.BEFORE_DOCTYPE_NAME:{this._stateBeforeDoctypeName(t);break}case C.DOCTYPE_NAME:{this._stateDoctypeName(t);break}case C.AFTER_DOCTYPE_NAME:{this._stateAfterDoctypeName(t);break}case C.AFTER_DOCTYPE_PUBLIC_KEYWORD:{this._stateAfterDoctypePublicKeyword(t);break}case C.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateBeforeDoctypePublicIdentifier(t);break}case C.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypePublicIdentifierDoubleQuoted(t);break}case C.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypePublicIdentifierSingleQuoted(t);break}case C.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateAfterDoctypePublicIdentifier(t);break}case C.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:{this._stateBetweenDoctypePublicAndSystemIdentifiers(t);break}case C.AFTER_DOCTYPE_SYSTEM_KEYWORD:{this._stateAfterDoctypeSystemKeyword(t);break}case C.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateBeforeDoctypeSystemIdentifier(t);break}case C.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypeSystemIdentifierDoubleQuoted(t);break}case C.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypeSystemIdentifierSingleQuoted(t);break}case C.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateAfterDoctypeSystemIdentifier(t);break}case C.BOGUS_DOCTYPE:{this._stateBogusDoctype(t);break}case C.CDATA_SECTION:{this._stateCdataSection(t);break}case C.CDATA_SECTION_BRACKET:{this._stateCdataSectionBracket(t);break}case C.CDATA_SECTION_END:{this._stateCdataSectionEnd(t);break}case C.CHARACTER_REFERENCE:{this._stateCharacterReference();break}case C.AMBIGUOUS_AMPERSAND:{this._stateAmbiguousAmpersand(t);break}default:throw new Error("Unknown state")}}_stateData(t){switch(t){case x.LESS_THAN_SIGN:{this.state=C.TAG_OPEN;break}case x.AMPERSAND:{this._startCharacterReference();break}case x.NULL:{this._err(K.unexpectedNullCharacter),this._emitCodePoint(t);break}case x.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRcdata(t){switch(t){case x.AMPERSAND:{this._startCharacterReference();break}case x.LESS_THAN_SIGN:{this.state=C.RCDATA_LESS_THAN_SIGN;break}case x.NULL:{this._err(K.unexpectedNullCharacter),this._emitChars(at);break}case x.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRawtext(t){switch(t){case x.LESS_THAN_SIGN:{this.state=C.RAWTEXT_LESS_THAN_SIGN;break}case x.NULL:{this._err(K.unexpectedNullCharacter),this._emitChars(at);break}case x.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptData(t){switch(t){case x.LESS_THAN_SIGN:{this.state=C.SCRIPT_DATA_LESS_THAN_SIGN;break}case x.NULL:{this._err(K.unexpectedNullCharacter),this._emitChars(at);break}case x.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_statePlaintext(t){switch(t){case x.NULL:{this._err(K.unexpectedNullCharacter),this._emitChars(at);break}case x.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateTagOpen(t){if(zr(t))this._createStartTagToken(),this.state=C.TAG_NAME,this._stateTagName(t);else switch(t){case x.EXCLAMATION_MARK:{this.state=C.MARKUP_DECLARATION_OPEN;break}case x.SOLIDUS:{this.state=C.END_TAG_OPEN;break}case x.QUESTION_MARK:{this._err(K.unexpectedQuestionMarkInsteadOfTagName),this._createCommentToken(1),this.state=C.BOGUS_COMMENT,this._stateBogusComment(t);break}case x.EOF:{this._err(K.eofBeforeTagName),this._emitChars("<"),this._emitEOFToken();break}default:this._err(K.invalidFirstCharacterOfTagName),this._emitChars("<"),this.state=C.DATA,this._stateData(t)}}_stateEndTagOpen(t){if(zr(t))this._createEndTagToken(),this.state=C.TAG_NAME,this._stateTagName(t);else switch(t){case x.GREATER_THAN_SIGN:{this._err(K.missingEndTagName),this.state=C.DATA;break}case x.EOF:{this._err(K.eofBeforeTagName),this._emitChars("</"),this._emitEOFToken();break}default:this._err(K.invalidFirstCharacterOfTagName),this._createCommentToken(2),this.state=C.BOGUS_COMMENT,this._stateBogusComment(t)}}_stateTagName(t){const i=this.currentToken;switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:{this.state=C.BEFORE_ATTRIBUTE_NAME;break}case x.SOLIDUS:{this.state=C.SELF_CLOSING_START_TAG;break}case x.GREATER_THAN_SIGN:{this.state=C.DATA,this.emitCurrentTagToken();break}case x.NULL:{this._err(K.unexpectedNullCharacter),i.tagName+=at;break}case x.EOF:{this._err(K.eofInTag),this._emitEOFToken();break}default:i.tagName+=String.fromCodePoint(Du(t)?Ol(t):t)}}_stateRcdataLessThanSign(t){t===x.SOLIDUS?this.state=C.RCDATA_END_TAG_OPEN:(this._emitChars("<"),this.state=C.RCDATA,this._stateRcdata(t))}_stateRcdataEndTagOpen(t){zr(t)?(this.state=C.RCDATA_END_TAG_NAME,this._stateRcdataEndTagName(t)):(this._emitChars("</"),this.state=C.RCDATA,this._stateRcdata(t))}handleSpecialEndTag(t){if(!this.preprocessor.startsWith(this.lastStartTagName,!1))return!this._ensureHibernation();this._createEndTagToken();const i=this.currentToken;switch(i.tagName=this.lastStartTagName,this.preprocessor.peek(this.lastStartTagName.length)){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:return this._advanceBy(this.lastStartTagName.length),this.state=C.BEFORE_ATTRIBUTE_NAME,!1;case x.SOLIDUS:return this._advanceBy(this.lastStartTagName.length),this.state=C.SELF_CLOSING_START_TAG,!1;case x.GREATER_THAN_SIGN:return this._advanceBy(this.lastStartTagName.length),this.emitCurrentTagToken(),this.state=C.DATA,!1;default:return!this._ensureHibernation()}}_stateRcdataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=C.RCDATA,this._stateRcdata(t))}_stateRawtextLessThanSign(t){t===x.SOLIDUS?this.state=C.RAWTEXT_END_TAG_OPEN:(this._emitChars("<"),this.state=C.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagOpen(t){zr(t)?(this.state=C.RAWTEXT_END_TAG_NAME,this._stateRawtextEndTagName(t)):(this._emitChars("</"),this.state=C.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=C.RAWTEXT,this._stateRawtext(t))}_stateScriptDataLessThanSign(t){switch(t){case x.SOLIDUS:{this.state=C.SCRIPT_DATA_END_TAG_OPEN;break}case x.EXCLAMATION_MARK:{this.state=C.SCRIPT_DATA_ESCAPE_START,this._emitChars("<!");break}default:this._emitChars("<"),this.state=C.SCRIPT_DATA,this._stateScriptData(t)}}_stateScriptDataEndTagOpen(t){zr(t)?(this.state=C.SCRIPT_DATA_END_TAG_NAME,this._stateScriptDataEndTagName(t)):(this._emitChars("</"),this.state=C.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=C.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStart(t){t===x.HYPHEN_MINUS?(this.state=C.SCRIPT_DATA_ESCAPE_START_DASH,this._emitChars("-")):(this.state=C.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStartDash(t){t===x.HYPHEN_MINUS?(this.state=C.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-")):(this.state=C.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscaped(t){switch(t){case x.HYPHEN_MINUS:{this.state=C.SCRIPT_DATA_ESCAPED_DASH,this._emitChars("-");break}case x.LESS_THAN_SIGN:{this.state=C.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case x.NULL:{this._err(K.unexpectedNullCharacter),this._emitChars(at);break}case x.EOF:{this._err(K.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataEscapedDash(t){switch(t){case x.HYPHEN_MINUS:{this.state=C.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-");break}case x.LESS_THAN_SIGN:{this.state=C.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case x.NULL:{this._err(K.unexpectedNullCharacter),this.state=C.SCRIPT_DATA_ESCAPED,this._emitChars(at);break}case x.EOF:{this._err(K.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=C.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedDashDash(t){switch(t){case x.HYPHEN_MINUS:{this._emitChars("-");break}case x.LESS_THAN_SIGN:{this.state=C.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case x.GREATER_THAN_SIGN:{this.state=C.SCRIPT_DATA,this._emitChars(">");break}case x.NULL:{this._err(K.unexpectedNullCharacter),this.state=C.SCRIPT_DATA_ESCAPED,this._emitChars(at);break}case x.EOF:{this._err(K.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=C.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedLessThanSign(t){t===x.SOLIDUS?this.state=C.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:zr(t)?(this._emitChars("<"),this.state=C.SCRIPT_DATA_DOUBLE_ESCAPE_START,this._stateScriptDataDoubleEscapeStart(t)):(this._emitChars("<"),this.state=C.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagOpen(t){zr(t)?(this.state=C.SCRIPT_DATA_ESCAPED_END_TAG_NAME,this._stateScriptDataEscapedEndTagName(t)):(this._emitChars("</"),this.state=C.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=C.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscapeStart(t){if(this.preprocessor.startsWith(Xt.SCRIPT,!1)&&v1(this.preprocessor.peek(Xt.SCRIPT.length))){this._emitCodePoint(t);for(let i=0;i<Xt.SCRIPT.length;i++)this._emitCodePoint(this._consume());this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED}else this._ensureHibernation()||(this.state=C.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscaped(t){switch(t){case x.HYPHEN_MINUS:{this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED_DASH,this._emitChars("-");break}case x.LESS_THAN_SIGN:{this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case x.NULL:{this._err(K.unexpectedNullCharacter),this._emitChars(at);break}case x.EOF:{this._err(K.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDash(t){switch(t){case x.HYPHEN_MINUS:{this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH,this._emitChars("-");break}case x.LESS_THAN_SIGN:{this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case x.NULL:{this._err(K.unexpectedNullCharacter),this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(at);break}case x.EOF:{this._err(K.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDashDash(t){switch(t){case x.HYPHEN_MINUS:{this._emitChars("-");break}case x.LESS_THAN_SIGN:{this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case x.GREATER_THAN_SIGN:{this.state=C.SCRIPT_DATA,this._emitChars(">");break}case x.NULL:{this._err(K.unexpectedNullCharacter),this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(at);break}case x.EOF:{this._err(K.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedLessThanSign(t){t===x.SOLIDUS?(this.state=C.SCRIPT_DATA_DOUBLE_ESCAPE_END,this._emitChars("/")):(this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateScriptDataDoubleEscapeEnd(t){if(this.preprocessor.startsWith(Xt.SCRIPT,!1)&&v1(this.preprocessor.peek(Xt.SCRIPT.length))){this._emitCodePoint(t);for(let i=0;i<Xt.SCRIPT.length;i++)this._emitCodePoint(this._consume());this.state=C.SCRIPT_DATA_ESCAPED}else this._ensureHibernation()||(this.state=C.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateBeforeAttributeName(t){switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:break;case x.SOLIDUS:case x.GREATER_THAN_SIGN:case x.EOF:{this.state=C.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case x.EQUALS_SIGN:{this._err(K.unexpectedEqualsSignBeforeAttributeName),this._createAttr("="),this.state=C.ATTRIBUTE_NAME;break}default:this._createAttr(""),this.state=C.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateAttributeName(t){switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:case x.SOLIDUS:case x.GREATER_THAN_SIGN:case x.EOF:{this._leaveAttrName(),this.state=C.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case x.EQUALS_SIGN:{this._leaveAttrName(),this.state=C.BEFORE_ATTRIBUTE_VALUE;break}case x.QUOTATION_MARK:case x.APOSTROPHE:case x.LESS_THAN_SIGN:{this._err(K.unexpectedCharacterInAttributeName),this.currentAttr.name+=String.fromCodePoint(t);break}case x.NULL:{this._err(K.unexpectedNullCharacter),this.currentAttr.name+=at;break}default:this.currentAttr.name+=String.fromCodePoint(Du(t)?Ol(t):t)}}_stateAfterAttributeName(t){switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:break;case x.SOLIDUS:{this.state=C.SELF_CLOSING_START_TAG;break}case x.EQUALS_SIGN:{this.state=C.BEFORE_ATTRIBUTE_VALUE;break}case x.GREATER_THAN_SIGN:{this.state=C.DATA,this.emitCurrentTagToken();break}case x.EOF:{this._err(K.eofInTag),this._emitEOFToken();break}default:this._createAttr(""),this.state=C.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateBeforeAttributeValue(t){switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:break;case x.QUOTATION_MARK:{this.state=C.ATTRIBUTE_VALUE_DOUBLE_QUOTED;break}case x.APOSTROPHE:{this.state=C.ATTRIBUTE_VALUE_SINGLE_QUOTED;break}case x.GREATER_THAN_SIGN:{this._err(K.missingAttributeValue),this.state=C.DATA,this.emitCurrentTagToken();break}default:this.state=C.ATTRIBUTE_VALUE_UNQUOTED,this._stateAttributeValueUnquoted(t)}}_stateAttributeValueDoubleQuoted(t){switch(t){case x.QUOTATION_MARK:{this.state=C.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case x.AMPERSAND:{this._startCharacterReference();break}case x.NULL:{this._err(K.unexpectedNullCharacter),this.currentAttr.value+=at;break}case x.EOF:{this._err(K.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueSingleQuoted(t){switch(t){case x.APOSTROPHE:{this.state=C.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case x.AMPERSAND:{this._startCharacterReference();break}case x.NULL:{this._err(K.unexpectedNullCharacter),this.currentAttr.value+=at;break}case x.EOF:{this._err(K.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueUnquoted(t){switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:{this._leaveAttrValue(),this.state=C.BEFORE_ATTRIBUTE_NAME;break}case x.AMPERSAND:{this._startCharacterReference();break}case x.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=C.DATA,this.emitCurrentTagToken();break}case x.NULL:{this._err(K.unexpectedNullCharacter),this.currentAttr.value+=at;break}case x.QUOTATION_MARK:case x.APOSTROPHE:case x.LESS_THAN_SIGN:case x.EQUALS_SIGN:case x.GRAVE_ACCENT:{this._err(K.unexpectedCharacterInUnquotedAttributeValue),this.currentAttr.value+=String.fromCodePoint(t);break}case x.EOF:{this._err(K.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAfterAttributeValueQuoted(t){switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:{this._leaveAttrValue(),this.state=C.BEFORE_ATTRIBUTE_NAME;break}case x.SOLIDUS:{this._leaveAttrValue(),this.state=C.SELF_CLOSING_START_TAG;break}case x.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=C.DATA,this.emitCurrentTagToken();break}case x.EOF:{this._err(K.eofInTag),this._emitEOFToken();break}default:this._err(K.missingWhitespaceBetweenAttributes),this.state=C.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateSelfClosingStartTag(t){switch(t){case x.GREATER_THAN_SIGN:{const i=this.currentToken;i.selfClosing=!0,this.state=C.DATA,this.emitCurrentTagToken();break}case x.EOF:{this._err(K.eofInTag),this._emitEOFToken();break}default:this._err(K.unexpectedSolidusInTag),this.state=C.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateBogusComment(t){const i=this.currentToken;switch(t){case x.GREATER_THAN_SIGN:{this.state=C.DATA,this.emitCurrentComment(i);break}case x.EOF:{this.emitCurrentComment(i),this._emitEOFToken();break}case x.NULL:{this._err(K.unexpectedNullCharacter),i.data+=at;break}default:i.data+=String.fromCodePoint(t)}}_stateMarkupDeclarationOpen(t){this._consumeSequenceIfMatch(Xt.DASH_DASH,!0)?(this._createCommentToken(Xt.DASH_DASH.length+1),this.state=C.COMMENT_START):this._consumeSequenceIfMatch(Xt.DOCTYPE,!1)?(this.currentLocation=this.getCurrentLocation(Xt.DOCTYPE.length+1),this.state=C.DOCTYPE):this._consumeSequenceIfMatch(Xt.CDATA_START,!0)?this.inForeignNode?this.state=C.CDATA_SECTION:(this._err(K.cdataInHtmlContent),this._createCommentToken(Xt.CDATA_START.length+1),this.currentToken.data="[CDATA[",this.state=C.BOGUS_COMMENT):this._ensureHibernation()||(this._err(K.incorrectlyOpenedComment),this._createCommentToken(2),this.state=C.BOGUS_COMMENT,this._stateBogusComment(t))}_stateCommentStart(t){switch(t){case x.HYPHEN_MINUS:{this.state=C.COMMENT_START_DASH;break}case x.GREATER_THAN_SIGN:{this._err(K.abruptClosingOfEmptyComment),this.state=C.DATA;const i=this.currentToken;this.emitCurrentComment(i);break}default:this.state=C.COMMENT,this._stateComment(t)}}_stateCommentStartDash(t){const i=this.currentToken;switch(t){case x.HYPHEN_MINUS:{this.state=C.COMMENT_END;break}case x.GREATER_THAN_SIGN:{this._err(K.abruptClosingOfEmptyComment),this.state=C.DATA,this.emitCurrentComment(i);break}case x.EOF:{this._err(K.eofInComment),this.emitCurrentComment(i),this._emitEOFToken();break}default:i.data+="-",this.state=C.COMMENT,this._stateComment(t)}}_stateComment(t){const i=this.currentToken;switch(t){case x.HYPHEN_MINUS:{this.state=C.COMMENT_END_DASH;break}case x.LESS_THAN_SIGN:{i.data+="<",this.state=C.COMMENT_LESS_THAN_SIGN;break}case x.NULL:{this._err(K.unexpectedNullCharacter),i.data+=at;break}case x.EOF:{this._err(K.eofInComment),this.emitCurrentComment(i),this._emitEOFToken();break}default:i.data+=String.fromCodePoint(t)}}_stateCommentLessThanSign(t){const i=this.currentToken;switch(t){case x.EXCLAMATION_MARK:{i.data+="!",this.state=C.COMMENT_LESS_THAN_SIGN_BANG;break}case x.LESS_THAN_SIGN:{i.data+="<";break}default:this.state=C.COMMENT,this._stateComment(t)}}_stateCommentLessThanSignBang(t){t===x.HYPHEN_MINUS?this.state=C.COMMENT_LESS_THAN_SIGN_BANG_DASH:(this.state=C.COMMENT,this._stateComment(t))}_stateCommentLessThanSignBangDash(t){t===x.HYPHEN_MINUS?this.state=C.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:(this.state=C.COMMENT_END_DASH,this._stateCommentEndDash(t))}_stateCommentLessThanSignBangDashDash(t){t!==x.GREATER_THAN_SIGN&&t!==x.EOF&&this._err(K.nestedComment),this.state=C.COMMENT_END,this._stateCommentEnd(t)}_stateCommentEndDash(t){const i=this.currentToken;switch(t){case x.HYPHEN_MINUS:{this.state=C.COMMENT_END;break}case x.EOF:{this._err(K.eofInComment),this.emitCurrentComment(i),this._emitEOFToken();break}default:i.data+="-",this.state=C.COMMENT,this._stateComment(t)}}_stateCommentEnd(t){const i=this.currentToken;switch(t){case x.GREATER_THAN_SIGN:{this.state=C.DATA,this.emitCurrentComment(i);break}case x.EXCLAMATION_MARK:{this.state=C.COMMENT_END_BANG;break}case x.HYPHEN_MINUS:{i.data+="-";break}case x.EOF:{this._err(K.eofInComment),this.emitCurrentComment(i),this._emitEOFToken();break}default:i.data+="--",this.state=C.COMMENT,this._stateComment(t)}}_stateCommentEndBang(t){const i=this.currentToken;switch(t){case x.HYPHEN_MINUS:{i.data+="--!",this.state=C.COMMENT_END_DASH;break}case x.GREATER_THAN_SIGN:{this._err(K.incorrectlyClosedComment),this.state=C.DATA,this.emitCurrentComment(i);break}case x.EOF:{this._err(K.eofInComment),this.emitCurrentComment(i),this._emitEOFToken();break}default:i.data+="--!",this.state=C.COMMENT,this._stateComment(t)}}_stateDoctype(t){switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:{this.state=C.BEFORE_DOCTYPE_NAME;break}case x.GREATER_THAN_SIGN:{this.state=C.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t);break}case x.EOF:{this._err(K.eofInDoctype),this._createDoctypeToken(null);const i=this.currentToken;i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(K.missingWhitespaceBeforeDoctypeName),this.state=C.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t)}}_stateBeforeDoctypeName(t){if(Du(t))this._createDoctypeToken(String.fromCharCode(Ol(t))),this.state=C.DOCTYPE_NAME;else switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:break;case x.NULL:{this._err(K.unexpectedNullCharacter),this._createDoctypeToken(at),this.state=C.DOCTYPE_NAME;break}case x.GREATER_THAN_SIGN:{this._err(K.missingDoctypeName),this._createDoctypeToken(null);const i=this.currentToken;i.forceQuirks=!0,this.emitCurrentDoctype(i),this.state=C.DATA;break}case x.EOF:{this._err(K.eofInDoctype),this._createDoctypeToken(null);const i=this.currentToken;i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._createDoctypeToken(String.fromCodePoint(t)),this.state=C.DOCTYPE_NAME}}_stateDoctypeName(t){const i=this.currentToken;switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:{this.state=C.AFTER_DOCTYPE_NAME;break}case x.GREATER_THAN_SIGN:{this.state=C.DATA,this.emitCurrentDoctype(i);break}case x.NULL:{this._err(K.unexpectedNullCharacter),i.name+=at;break}case x.EOF:{this._err(K.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:i.name+=String.fromCodePoint(Du(t)?Ol(t):t)}}_stateAfterDoctypeName(t){const i=this.currentToken;switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:break;case x.GREATER_THAN_SIGN:{this.state=C.DATA,this.emitCurrentDoctype(i);break}case x.EOF:{this._err(K.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._consumeSequenceIfMatch(Xt.PUBLIC,!1)?this.state=C.AFTER_DOCTYPE_PUBLIC_KEYWORD:this._consumeSequenceIfMatch(Xt.SYSTEM,!1)?this.state=C.AFTER_DOCTYPE_SYSTEM_KEYWORD:this._ensureHibernation()||(this._err(K.invalidCharacterSequenceAfterDoctypeName),i.forceQuirks=!0,this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t))}}_stateAfterDoctypePublicKeyword(t){const i=this.currentToken;switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:{this.state=C.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;break}case x.QUOTATION_MARK:{this._err(K.missingWhitespaceAfterDoctypePublicKeyword),i.publicId="",this.state=C.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case x.APOSTROPHE:{this._err(K.missingWhitespaceAfterDoctypePublicKeyword),i.publicId="",this.state=C.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case x.GREATER_THAN_SIGN:{this._err(K.missingDoctypePublicIdentifier),i.forceQuirks=!0,this.state=C.DATA,this.emitCurrentDoctype(i);break}case x.EOF:{this._err(K.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(K.missingQuoteBeforeDoctypePublicIdentifier),i.forceQuirks=!0,this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypePublicIdentifier(t){const i=this.currentToken;switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:break;case x.QUOTATION_MARK:{i.publicId="",this.state=C.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case x.APOSTROPHE:{i.publicId="",this.state=C.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case x.GREATER_THAN_SIGN:{this._err(K.missingDoctypePublicIdentifier),i.forceQuirks=!0,this.state=C.DATA,this.emitCurrentDoctype(i);break}case x.EOF:{this._err(K.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(K.missingQuoteBeforeDoctypePublicIdentifier),i.forceQuirks=!0,this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypePublicIdentifierDoubleQuoted(t){const i=this.currentToken;switch(t){case x.QUOTATION_MARK:{this.state=C.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case x.NULL:{this._err(K.unexpectedNullCharacter),i.publicId+=at;break}case x.GREATER_THAN_SIGN:{this._err(K.abruptDoctypePublicIdentifier),i.forceQuirks=!0,this.emitCurrentDoctype(i),this.state=C.DATA;break}case x.EOF:{this._err(K.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:i.publicId+=String.fromCodePoint(t)}}_stateDoctypePublicIdentifierSingleQuoted(t){const i=this.currentToken;switch(t){case x.APOSTROPHE:{this.state=C.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case x.NULL:{this._err(K.unexpectedNullCharacter),i.publicId+=at;break}case x.GREATER_THAN_SIGN:{this._err(K.abruptDoctypePublicIdentifier),i.forceQuirks=!0,this.emitCurrentDoctype(i),this.state=C.DATA;break}case x.EOF:{this._err(K.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:i.publicId+=String.fromCodePoint(t)}}_stateAfterDoctypePublicIdentifier(t){const i=this.currentToken;switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:{this.state=C.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;break}case x.GREATER_THAN_SIGN:{this.state=C.DATA,this.emitCurrentDoctype(i);break}case x.QUOTATION_MARK:{this._err(K.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),i.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case x.APOSTROPHE:{this._err(K.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),i.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case x.EOF:{this._err(K.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(K.missingQuoteBeforeDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBetweenDoctypePublicAndSystemIdentifiers(t){const i=this.currentToken;switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:break;case x.GREATER_THAN_SIGN:{this.emitCurrentDoctype(i),this.state=C.DATA;break}case x.QUOTATION_MARK:{i.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case x.APOSTROPHE:{i.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case x.EOF:{this._err(K.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(K.missingQuoteBeforeDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateAfterDoctypeSystemKeyword(t){const i=this.currentToken;switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:{this.state=C.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;break}case x.QUOTATION_MARK:{this._err(K.missingWhitespaceAfterDoctypeSystemKeyword),i.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case x.APOSTROPHE:{this._err(K.missingWhitespaceAfterDoctypeSystemKeyword),i.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case x.GREATER_THAN_SIGN:{this._err(K.missingDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=C.DATA,this.emitCurrentDoctype(i);break}case x.EOF:{this._err(K.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(K.missingQuoteBeforeDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypeSystemIdentifier(t){const i=this.currentToken;switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:break;case x.QUOTATION_MARK:{i.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case x.APOSTROPHE:{i.systemId="",this.state=C.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case x.GREATER_THAN_SIGN:{this._err(K.missingDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=C.DATA,this.emitCurrentDoctype(i);break}case x.EOF:{this._err(K.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(K.missingQuoteBeforeDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypeSystemIdentifierDoubleQuoted(t){const i=this.currentToken;switch(t){case x.QUOTATION_MARK:{this.state=C.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case x.NULL:{this._err(K.unexpectedNullCharacter),i.systemId+=at;break}case x.GREATER_THAN_SIGN:{this._err(K.abruptDoctypeSystemIdentifier),i.forceQuirks=!0,this.emitCurrentDoctype(i),this.state=C.DATA;break}case x.EOF:{this._err(K.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:i.systemId+=String.fromCodePoint(t)}}_stateDoctypeSystemIdentifierSingleQuoted(t){const i=this.currentToken;switch(t){case x.APOSTROPHE:{this.state=C.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case x.NULL:{this._err(K.unexpectedNullCharacter),i.systemId+=at;break}case x.GREATER_THAN_SIGN:{this._err(K.abruptDoctypeSystemIdentifier),i.forceQuirks=!0,this.emitCurrentDoctype(i),this.state=C.DATA;break}case x.EOF:{this._err(K.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:i.systemId+=String.fromCodePoint(t)}}_stateAfterDoctypeSystemIdentifier(t){const i=this.currentToken;switch(t){case x.SPACE:case x.LINE_FEED:case x.TABULATION:case x.FORM_FEED:break;case x.GREATER_THAN_SIGN:{this.emitCurrentDoctype(i),this.state=C.DATA;break}case x.EOF:{this._err(K.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(K.unexpectedCharacterAfterDoctypeSystemIdentifier),this.state=C.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBogusDoctype(t){const i=this.currentToken;switch(t){case x.GREATER_THAN_SIGN:{this.emitCurrentDoctype(i),this.state=C.DATA;break}case x.NULL:{this._err(K.unexpectedNullCharacter);break}case x.EOF:{this.emitCurrentDoctype(i),this._emitEOFToken();break}}}_stateCdataSection(t){switch(t){case x.RIGHT_SQUARE_BRACKET:{this.state=C.CDATA_SECTION_BRACKET;break}case x.EOF:{this._err(K.eofInCdata),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateCdataSectionBracket(t){t===x.RIGHT_SQUARE_BRACKET?this.state=C.CDATA_SECTION_END:(this._emitChars("]"),this.state=C.CDATA_SECTION,this._stateCdataSection(t))}_stateCdataSectionEnd(t){switch(t){case x.GREATER_THAN_SIGN:{this.state=C.DATA;break}case x.RIGHT_SQUARE_BRACKET:{this._emitChars("]");break}default:this._emitChars("]]"),this.state=C.CDATA_SECTION,this._stateCdataSection(t)}}_stateCharacterReference(){let t=this.entityDecoder.write(this.preprocessor.html,this.preprocessor.pos);if(t<0)if(this.preprocessor.lastChunkWritten)t=this.entityDecoder.end();else{this.active=!1,this.preprocessor.pos=this.preprocessor.html.length-1,this.consumedAfterSnapshot=0,this.preprocessor.endOfChunkHit=!0;return}t===0?(this.preprocessor.pos=this.entityStartPos,this._flushCodePointConsumedAsCharacterReference(x.AMPERSAND),this.state=!this._isCharacterReferenceInAttribute()&&E1(this.preprocessor.peek(1))?C.AMBIGUOUS_AMPERSAND:this.returnState):this.state=this.returnState}_stateAmbiguousAmpersand(t){E1(t)?this._flushCodePointConsumedAsCharacterReference(t):(t===x.SEMICOLON&&this._err(K.unknownNamedCharacterReference),this.state=this.returnState,this._callState(t))}}const ky=new Set([g.DD,g.DT,g.LI,g.OPTGROUP,g.OPTION,g.P,g.RB,g.RP,g.RT,g.RTC]),A1=new Set([...ky,g.CAPTION,g.COLGROUP,g.TBODY,g.TD,g.TFOOT,g.TH,g.THEAD,g.TR]),zl=new Set([g.APPLET,g.CAPTION,g.HTML,g.MARQUEE,g.OBJECT,g.TABLE,g.TD,g.TEMPLATE,g.TH]),gO=new Set([...zl,g.OL,g.UL]),bO=new Set([...zl,g.BUTTON]),w1=new Set([g.ANNOTATION_XML,g.MI,g.MN,g.MO,g.MS,g.MTEXT]),x1=new Set([g.DESC,g.FOREIGN_OBJECT,g.TITLE]),yO=new Set([g.TR,g.TEMPLATE,g.HTML]),TO=new Set([g.TBODY,g.TFOOT,g.THEAD,g.TEMPLATE,g.HTML]),EO=new Set([g.TABLE,g.TEMPLATE,g.HTML]),vO=new Set([g.TD,g.TH]);class AO{get currentTmplContentOrNode(){return this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):this.current}constructor(t,i,u){this.treeAdapter=i,this.handler=u,this.items=[],this.tagIDs=[],this.stackTop=-1,this.tmplCount=0,this.currentTagId=g.UNKNOWN,this.current=t}_indexOf(t){return this.items.lastIndexOf(t,this.stackTop)}_isInTemplate(){return this.currentTagId===g.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===te.HTML}_updateCurrentElement(){this.current=this.items[this.stackTop],this.currentTagId=this.tagIDs[this.stackTop]}push(t,i){this.stackTop++,this.items[this.stackTop]=t,this.current=t,this.tagIDs[this.stackTop]=i,this.currentTagId=i,this._isInTemplate()&&this.tmplCount++,this.handler.onItemPush(t,i,!0)}pop(){const t=this.current;this.tmplCount>0&&this._isInTemplate()&&this.tmplCount--,this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!0)}replace(t,i){const u=this._indexOf(t);this.items[u]=i,u===this.stackTop&&(this.current=i)}insertAfter(t,i,u){const l=this._indexOf(t)+1;this.items.splice(l,0,i),this.tagIDs.splice(l,0,u),this.stackTop++,l===this.stackTop&&this._updateCurrentElement(),this.current&&this.currentTagId!==void 0&&this.handler.onItemPush(this.current,this.currentTagId,l===this.stackTop)}popUntilTagNamePopped(t){let i=this.stackTop+1;do i=this.tagIDs.lastIndexOf(t,i-1);while(i>0&&this.treeAdapter.getNamespaceURI(this.items[i])!==te.HTML);this.shortenToLength(Math.max(i,0))}shortenToLength(t){for(;this.stackTop>=t;){const i=this.current;this.tmplCount>0&&this._isInTemplate()&&(this.tmplCount-=1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(i,this.stackTop<t)}}popUntilElementPopped(t){const i=this._indexOf(t);this.shortenToLength(Math.max(i,0))}popUntilPopped(t,i){const u=this._indexOfTagNames(t,i);this.shortenToLength(Math.max(u,0))}popUntilNumberedHeaderPopped(){this.popUntilPopped(Ah,te.HTML)}popUntilTableCellPopped(){this.popUntilPopped(vO,te.HTML)}popAllUpToHtmlElement(){this.tmplCount=0,this.shortenToLength(1)}_indexOfTagNames(t,i){for(let u=this.stackTop;u>=0;u--)if(t.has(this.tagIDs[u])&&this.treeAdapter.getNamespaceURI(this.items[u])===i)return u;return-1}clearBackTo(t,i){const u=this._indexOfTagNames(t,i);this.shortenToLength(u+1)}clearBackToTableContext(){this.clearBackTo(EO,te.HTML)}clearBackToTableBodyContext(){this.clearBackTo(TO,te.HTML)}clearBackToTableRowContext(){this.clearBackTo(yO,te.HTML)}remove(t){const i=this._indexOf(t);i>=0&&(i===this.stackTop?this.pop():(this.items.splice(i,1),this.tagIDs.splice(i,1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!1)))}tryPeekProperlyNestedBodyElement(){return this.stackTop>=1&&this.tagIDs[1]===g.BODY?this.items[1]:null}contains(t){return this._indexOf(t)>-1}getCommonAncestor(t){const i=this._indexOf(t)-1;return i>=0?this.items[i]:null}isRootHtmlElementCurrent(){return this.stackTop===0&&this.tagIDs[0]===g.HTML}hasInDynamicScope(t,i){for(let u=this.stackTop;u>=0;u--){const l=this.tagIDs[u];switch(this.treeAdapter.getNamespaceURI(this.items[u])){case te.HTML:{if(l===t)return!0;if(i.has(l))return!1;break}case te.SVG:{if(x1.has(l))return!1;break}case te.MATHML:{if(w1.has(l))return!1;break}}}return!0}hasInScope(t){return this.hasInDynamicScope(t,zl)}hasInListItemScope(t){return this.hasInDynamicScope(t,gO)}hasInButtonScope(t){return this.hasInDynamicScope(t,bO)}hasNumberedHeaderInScope(){for(let t=this.stackTop;t>=0;t--){const i=this.tagIDs[t];switch(this.treeAdapter.getNamespaceURI(this.items[t])){case te.HTML:{if(Ah.has(i))return!0;if(zl.has(i))return!1;break}case te.SVG:{if(x1.has(i))return!1;break}case te.MATHML:{if(w1.has(i))return!1;break}}}return!0}hasInTableScope(t){for(let i=this.stackTop;i>=0;i--)if(this.treeAdapter.getNamespaceURI(this.items[i])===te.HTML)switch(this.tagIDs[i]){case t:return!0;case g.TABLE:case g.HTML:return!1}return!0}hasTableBodyContextInTableScope(){for(let t=this.stackTop;t>=0;t--)if(this.treeAdapter.getNamespaceURI(this.items[t])===te.HTML)switch(this.tagIDs[t]){case g.TBODY:case g.THEAD:case g.TFOOT:return!0;case g.TABLE:case g.HTML:return!1}return!0}hasInSelectScope(t){for(let i=this.stackTop;i>=0;i--)if(this.treeAdapter.getNamespaceURI(this.items[i])===te.HTML)switch(this.tagIDs[i]){case t:return!0;case g.OPTION:case g.OPTGROUP:break;default:return!1}return!0}generateImpliedEndTags(){for(;this.currentTagId!==void 0&&ky.has(this.currentTagId);)this.pop()}generateImpliedEndTagsThoroughly(){for(;this.currentTagId!==void 0&&A1.has(this.currentTagId);)this.pop()}generateImpliedEndTagsWithExclusion(t){for(;this.currentTagId!==void 0&&this.currentTagId!==t&&A1.has(this.currentTagId);)this.pop()}}const $f=3;var Un;(function(e){e[e.Marker=0]="Marker",e[e.Element=1]="Element"})(Un||(Un={}));const S1={type:Un.Marker};class wO{constructor(t){this.treeAdapter=t,this.entries=[],this.bookmark=null}_getNoahArkConditionCandidates(t,i){const u=[],l=i.length,o=this.treeAdapter.getTagName(t),c=this.treeAdapter.getNamespaceURI(t);for(let h=0;h<this.entries.length;h++){const d=this.entries[h];if(d.type===Un.Marker)break;const{element:p}=d;if(this.treeAdapter.getTagName(p)===o&&this.treeAdapter.getNamespaceURI(p)===c){const y=this.treeAdapter.getAttrList(p);y.length===l&&u.push({idx:h,attrs:y})}}return u}_ensureNoahArkCondition(t){if(this.entries.length<$f)return;const i=this.treeAdapter.getAttrList(t),u=this._getNoahArkConditionCandidates(t,i);if(u.length<$f)return;const l=new Map(i.map(c=>[c.name,c.value]));let o=0;for(let c=0;c<u.length;c++){const h=u[c];h.attrs.every(d=>l.get(d.name)===d.value)&&(o+=1,o>=$f&&this.entries.splice(h.idx,1))}}insertMarker(){this.entries.unshift(S1)}pushElement(t,i){this._ensureNoahArkCondition(t),this.entries.unshift({type:Un.Element,element:t,token:i})}insertElementAfterBookmark(t,i){const u=this.entries.indexOf(this.bookmark);this.entries.splice(u,0,{type:Un.Element,element:t,token:i})}removeEntry(t){const i=this.entries.indexOf(t);i!==-1&&this.entries.splice(i,1)}clearToLastMarker(){const t=this.entries.indexOf(S1);t===-1?this.entries.length=0:this.entries.splice(0,t+1)}getElementEntryInScopeWithTagName(t){const i=this.entries.find(u=>u.type===Un.Marker||this.treeAdapter.getTagName(u.element)===t);return i&&i.type===Un.Element?i:null}getElementEntry(t){return this.entries.find(i=>i.type===Un.Element&&i.element===t)}}const qr={createDocument(){return{nodeName:"#document",mode:xn.NO_QUIRKS,childNodes:[]}},createDocumentFragment(){return{nodeName:"#document-fragment",childNodes:[]}},createElement(e,t,i){return{nodeName:e,tagName:e,attrs:i,namespaceURI:t,childNodes:[],parentNode:null}},createCommentNode(e){return{nodeName:"#comment",data:e,parentNode:null}},createTextNode(e){return{nodeName:"#text",value:e,parentNode:null}},appendChild(e,t){e.childNodes.push(t),t.parentNode=e},insertBefore(e,t,i){const u=e.childNodes.indexOf(i);e.childNodes.splice(u,0,t),t.parentNode=e},setTemplateContent(e,t){e.content=t},getTemplateContent(e){return e.content},setDocumentType(e,t,i,u){const l=e.childNodes.find(o=>o.nodeName==="#documentType");if(l)l.name=t,l.publicId=i,l.systemId=u;else{const o={nodeName:"#documentType",name:t,publicId:i,systemId:u,parentNode:null};qr.appendChild(e,o)}},setDocumentMode(e,t){e.mode=t},getDocumentMode(e){return e.mode},detachNode(e){if(e.parentNode){const t=e.parentNode.childNodes.indexOf(e);e.parentNode.childNodes.splice(t,1),e.parentNode=null}},insertText(e,t){if(e.childNodes.length>0){const i=e.childNodes[e.childNodes.length-1];if(qr.isTextNode(i)){i.value+=t;return}}qr.appendChild(e,qr.createTextNode(t))},insertTextBefore(e,t,i){const u=e.childNodes[e.childNodes.indexOf(i)-1];u&&qr.isTextNode(u)?u.value+=t:qr.insertBefore(e,qr.createTextNode(t),i)},adoptAttributes(e,t){const i=new Set(e.attrs.map(u=>u.name));for(let u=0;u<t.length;u++)i.has(t[u].name)||e.attrs.push(t[u])},getFirstChild(e){return e.childNodes[0]},getChildNodes(e){return e.childNodes},getParentNode(e){return e.parentNode},getAttrList(e){return e.attrs},getTagName(e){return e.tagName},getNamespaceURI(e){return e.namespaceURI},getTextNodeContent(e){return e.value},getCommentNodeContent(e){return e.data},getDocumentTypeNodeName(e){return e.name},getDocumentTypeNodePublicId(e){return e.publicId},getDocumentTypeNodeSystemId(e){return e.systemId},isTextNode(e){return e.nodeName==="#text"},isCommentNode(e){return e.nodeName==="#comment"},isDocumentTypeNode(e){return e.nodeName==="#documentType"},isElementNode(e){return Object.prototype.hasOwnProperty.call(e,"tagName")},setNodeSourceCodeLocation(e,t){e.sourceCodeLocation=t},getNodeSourceCodeLocation(e){return e.sourceCodeLocation},updateNodeSourceCodeLocation(e,t){e.sourceCodeLocation={...e.sourceCodeLocation,...t}}},Ry="html",xO="about:legacy-compat",SO="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",Dy=["+//silmaril//dtd html pro v0r11 19970101//","-//as//dtd html 3.0 aswedit + extensions//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//sq//dtd html 2.0 hotmetal + extensions//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"],CO=[...Dy,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"],_O=new Set(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),Ly=["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"],NO=[...Ly,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"];function C1(e,t){return t.some(i=>e.startsWith(i))}function OO(e){return e.name===Ry&&e.publicId===null&&(e.systemId===null||e.systemId===xO)}function kO(e){if(e.name!==Ry)return xn.QUIRKS;const{systemId:t}=e;if(t&&t.toLowerCase()===SO)return xn.QUIRKS;let{publicId:i}=e;if(i!==null){if(i=i.toLowerCase(),_O.has(i))return xn.QUIRKS;let u=t===null?CO:Dy;if(C1(i,u))return xn.QUIRKS;if(u=t===null?Ly:NO,C1(i,u))return xn.LIMITED_QUIRKS}return xn.NO_QUIRKS}const _1={TEXT_HTML:"text/html",APPLICATION_XML:"application/xhtml+xml"},RO="definitionurl",DO="definitionURL",LO=new Map(["attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(e=>[e.toLowerCase(),e])),IO=new Map([["xlink:actuate",{prefix:"xlink",name:"actuate",namespace:te.XLINK}],["xlink:arcrole",{prefix:"xlink",name:"arcrole",namespace:te.XLINK}],["xlink:href",{prefix:"xlink",name:"href",namespace:te.XLINK}],["xlink:role",{prefix:"xlink",name:"role",namespace:te.XLINK}],["xlink:show",{prefix:"xlink",name:"show",namespace:te.XLINK}],["xlink:title",{prefix:"xlink",name:"title",namespace:te.XLINK}],["xlink:type",{prefix:"xlink",name:"type",namespace:te.XLINK}],["xml:lang",{prefix:"xml",name:"lang",namespace:te.XML}],["xml:space",{prefix:"xml",name:"space",namespace:te.XML}],["xmlns",{prefix:"",name:"xmlns",namespace:te.XMLNS}],["xmlns:xlink",{prefix:"xmlns",name:"xlink",namespace:te.XMLNS}]]),MO=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(e=>[e.toLowerCase(),e])),BO=new Set([g.B,g.BIG,g.BLOCKQUOTE,g.BODY,g.BR,g.CENTER,g.CODE,g.DD,g.DIV,g.DL,g.DT,g.EM,g.EMBED,g.H1,g.H2,g.H3,g.H4,g.H5,g.H6,g.HEAD,g.HR,g.I,g.IMG,g.LI,g.LISTING,g.MENU,g.META,g.NOBR,g.OL,g.P,g.PRE,g.RUBY,g.S,g.SMALL,g.SPAN,g.STRONG,g.STRIKE,g.SUB,g.SUP,g.TABLE,g.TT,g.U,g.UL,g.VAR]);function FO(e){const t=e.tagID;return t===g.FONT&&e.attrs.some(({name:u})=>u===gi.COLOR||u===gi.SIZE||u===gi.FACE)||BO.has(t)}function Iy(e){for(let t=0;t<e.attrs.length;t++)if(e.attrs[t].name===RO){e.attrs[t].name=DO;break}}function My(e){for(let t=0;t<e.attrs.length;t++){const i=LO.get(e.attrs[t].name);i!=null&&(e.attrs[t].name=i)}}function nd(e){for(let t=0;t<e.attrs.length;t++){const i=IO.get(e.attrs[t].name);i&&(e.attrs[t].prefix=i.prefix,e.attrs[t].name=i.name,e.attrs[t].namespace=i.namespace)}}function UO(e){const t=MO.get(e.tagName);t!=null&&(e.tagName=t,e.tagID=Na(e.tagName))}function PO(e,t){return t===te.MATHML&&(e===g.MI||e===g.MO||e===g.MN||e===g.MS||e===g.MTEXT)}function HO(e,t,i){if(t===te.MATHML&&e===g.ANNOTATION_XML){for(let u=0;u<i.length;u++)if(i[u].name===gi.ENCODING){const l=i[u].value.toLowerCase();return l===_1.TEXT_HTML||l===_1.APPLICATION_XML}}return t===te.SVG&&(e===g.FOREIGN_OBJECT||e===g.DESC||e===g.TITLE)}function zO(e,t,i,u){return(!u||u===te.HTML)&&HO(e,t,i)||(!u||u===te.MATHML)&&PO(e,t)}const qO="hidden",jO=8,YO=3;var R;(function(e){e[e.INITIAL=0]="INITIAL",e[e.BEFORE_HTML=1]="BEFORE_HTML",e[e.BEFORE_HEAD=2]="BEFORE_HEAD",e[e.IN_HEAD=3]="IN_HEAD",e[e.IN_HEAD_NO_SCRIPT=4]="IN_HEAD_NO_SCRIPT",e[e.AFTER_HEAD=5]="AFTER_HEAD",e[e.IN_BODY=6]="IN_BODY",e[e.TEXT=7]="TEXT",e[e.IN_TABLE=8]="IN_TABLE",e[e.IN_TABLE_TEXT=9]="IN_TABLE_TEXT",e[e.IN_CAPTION=10]="IN_CAPTION",e[e.IN_COLUMN_GROUP=11]="IN_COLUMN_GROUP",e[e.IN_TABLE_BODY=12]="IN_TABLE_BODY",e[e.IN_ROW=13]="IN_ROW",e[e.IN_CELL=14]="IN_CELL",e[e.IN_SELECT=15]="IN_SELECT",e[e.IN_SELECT_IN_TABLE=16]="IN_SELECT_IN_TABLE",e[e.IN_TEMPLATE=17]="IN_TEMPLATE",e[e.AFTER_BODY=18]="AFTER_BODY",e[e.IN_FRAMESET=19]="IN_FRAMESET",e[e.AFTER_FRAMESET=20]="AFTER_FRAMESET",e[e.AFTER_AFTER_BODY=21]="AFTER_AFTER_BODY",e[e.AFTER_AFTER_FRAMESET=22]="AFTER_AFTER_FRAMESET"})(R||(R={}));const VO={startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1},By=new Set([g.TABLE,g.TBODY,g.TFOOT,g.THEAD,g.TR]),N1={scriptingEnabled:!0,sourceCodeLocationInfo:!1,treeAdapter:qr,onParseError:null};class O1{constructor(t,i,u=null,l=null){this.fragmentContext=u,this.scriptHandler=l,this.currentToken=null,this.stopped=!1,this.insertionMode=R.INITIAL,this.originalInsertionMode=R.INITIAL,this.headElement=null,this.formElement=null,this.currentNotInHTML=!1,this.tmplInsertionModeStack=[],this.pendingCharacterTokens=[],this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,this.skipNextNewLine=!1,this.fosterParentingEnabled=!1,this.options={...N1,...t},this.treeAdapter=this.options.treeAdapter,this.onParseError=this.options.onParseError,this.onParseError&&(this.options.sourceCodeLocationInfo=!0),this.document=i??this.treeAdapter.createDocument(),this.tokenizer=new pO(this.options,this),this.activeFormattingElements=new wO(this.treeAdapter),this.fragmentContextID=u?Na(this.treeAdapter.getTagName(u)):g.UNKNOWN,this._setContextModes(u??this.document,this.fragmentContextID),this.openElements=new AO(this.document,this.treeAdapter,this)}static parse(t,i){const u=new this(i);return u.tokenizer.write(t,!0),u.document}static getFragmentParser(t,i){const u={...N1,...i};t??(t=u.treeAdapter.createElement(H.TEMPLATE,te.HTML,[]));const l=u.treeAdapter.createElement("documentmock",te.HTML,[]),o=new this(u,l,t);return o.fragmentContextID===g.TEMPLATE&&o.tmplInsertionModeStack.unshift(R.IN_TEMPLATE),o._initTokenizerForFragmentParsing(),o._insertFakeRootElement(),o._resetInsertionMode(),o._findFormInFragmentContext(),o}getFragment(){const t=this.treeAdapter.getFirstChild(this.document),i=this.treeAdapter.createDocumentFragment();return this._adoptNodes(t,i),i}_err(t,i,u){var l;if(!this.onParseError)return;const o=(l=t.location)!==null&&l!==void 0?l:VO,c={code:i,startLine:o.startLine,startCol:o.startCol,startOffset:o.startOffset,endLine:u?o.startLine:o.endLine,endCol:u?o.startCol:o.endCol,endOffset:u?o.startOffset:o.endOffset};this.onParseError(c)}onItemPush(t,i,u){var l,o;(o=(l=this.treeAdapter).onItemPush)===null||o===void 0||o.call(l,t),u&&this.openElements.stackTop>0&&this._setContextModes(t,i)}onItemPop(t,i){var u,l;if(this.options.sourceCodeLocationInfo&&this._setEndLocation(t,this.currentToken),(l=(u=this.treeAdapter).onItemPop)===null||l===void 0||l.call(u,t,this.openElements.current),i){let o,c;this.openElements.stackTop===0&&this.fragmentContext?(o=this.fragmentContext,c=this.fragmentContextID):{current:o,currentTagId:c}=this.openElements,this._setContextModes(o,c)}}_setContextModes(t,i){const u=t===this.document||t&&this.treeAdapter.getNamespaceURI(t)===te.HTML;this.currentNotInHTML=!u,this.tokenizer.inForeignNode=!u&&t!==void 0&&i!==void 0&&!this._isIntegrationPoint(i,t)}_switchToTextParsing(t,i){this._insertElement(t,te.HTML),this.tokenizer.state=i,this.originalInsertionMode=this.insertionMode,this.insertionMode=R.TEXT}switchToPlaintextParsing(){this.insertionMode=R.TEXT,this.originalInsertionMode=R.IN_BODY,this.tokenizer.state=ft.PLAINTEXT}_getAdjustedCurrentElement(){return this.openElements.stackTop===0&&this.fragmentContext?this.fragmentContext:this.openElements.current}_findFormInFragmentContext(){let t=this.fragmentContext;for(;t;){if(this.treeAdapter.getTagName(t)===H.FORM){this.formElement=t;break}t=this.treeAdapter.getParentNode(t)}}_initTokenizerForFragmentParsing(){if(!(!this.fragmentContext||this.treeAdapter.getNamespaceURI(this.fragmentContext)!==te.HTML))switch(this.fragmentContextID){case g.TITLE:case g.TEXTAREA:{this.tokenizer.state=ft.RCDATA;break}case g.STYLE:case g.XMP:case g.IFRAME:case g.NOEMBED:case g.NOFRAMES:case g.NOSCRIPT:{this.tokenizer.state=ft.RAWTEXT;break}case g.SCRIPT:{this.tokenizer.state=ft.SCRIPT_DATA;break}case g.PLAINTEXT:{this.tokenizer.state=ft.PLAINTEXT;break}}}_setDocumentType(t){const i=t.name||"",u=t.publicId||"",l=t.systemId||"";if(this.treeAdapter.setDocumentType(this.document,i,u,l),t.location){const c=this.treeAdapter.getChildNodes(this.document).find(h=>this.treeAdapter.isDocumentTypeNode(h));c&&this.treeAdapter.setNodeSourceCodeLocation(c,t.location)}}_attachElementToTree(t,i){if(this.options.sourceCodeLocationInfo){const u=i&&{...i,startTag:i};this.treeAdapter.setNodeSourceCodeLocation(t,u)}if(this._shouldFosterParentOnInsertion())this._fosterParentElement(t);else{const u=this.openElements.currentTmplContentOrNode;this.treeAdapter.appendChild(u??this.document,t)}}_appendElement(t,i){const u=this.treeAdapter.createElement(t.tagName,i,t.attrs);this._attachElementToTree(u,t.location)}_insertElement(t,i){const u=this.treeAdapter.createElement(t.tagName,i,t.attrs);this._attachElementToTree(u,t.location),this.openElements.push(u,t.tagID)}_insertFakeElement(t,i){const u=this.treeAdapter.createElement(t,te.HTML,[]);this._attachElementToTree(u,null),this.openElements.push(u,i)}_insertTemplate(t){const i=this.treeAdapter.createElement(t.tagName,te.HTML,t.attrs),u=this.treeAdapter.createDocumentFragment();this.treeAdapter.setTemplateContent(i,u),this._attachElementToTree(i,t.location),this.openElements.push(i,t.tagID),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(u,null)}_insertFakeRootElement(){const t=this.treeAdapter.createElement(H.HTML,te.HTML,[]);this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(t,null),this.treeAdapter.appendChild(this.openElements.current,t),this.openElements.push(t,g.HTML)}_appendCommentNode(t,i){const u=this.treeAdapter.createCommentNode(t.data);this.treeAdapter.appendChild(i,u),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(u,t.location)}_insertCharacters(t){let i,u;if(this._shouldFosterParentOnInsertion()?({parent:i,beforeElement:u}=this._findFosterParentingLocation(),u?this.treeAdapter.insertTextBefore(i,t.chars,u):this.treeAdapter.insertText(i,t.chars)):(i=this.openElements.currentTmplContentOrNode,this.treeAdapter.insertText(i,t.chars)),!t.location)return;const l=this.treeAdapter.getChildNodes(i),o=u?l.lastIndexOf(u):l.length,c=l[o-1];if(this.treeAdapter.getNodeSourceCodeLocation(c)){const{endLine:d,endCol:p,endOffset:y}=t.location;this.treeAdapter.updateNodeSourceCodeLocation(c,{endLine:d,endCol:p,endOffset:y})}else this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(c,t.location)}_adoptNodes(t,i){for(let u=this.treeAdapter.getFirstChild(t);u;u=this.treeAdapter.getFirstChild(t))this.treeAdapter.detachNode(u),this.treeAdapter.appendChild(i,u)}_setEndLocation(t,i){if(this.treeAdapter.getNodeSourceCodeLocation(t)&&i.location){const u=i.location,l=this.treeAdapter.getTagName(t),o=i.type===Re.END_TAG&&l===i.tagName?{endTag:{...u},endLine:u.endLine,endCol:u.endCol,endOffset:u.endOffset}:{endLine:u.startLine,endCol:u.startCol,endOffset:u.startOffset};this.treeAdapter.updateNodeSourceCodeLocation(t,o)}}shouldProcessStartTagTokenInForeignContent(t){if(!this.currentNotInHTML)return!1;let i,u;return this.openElements.stackTop===0&&this.fragmentContext?(i=this.fragmentContext,u=this.fragmentContextID):{current:i,currentTagId:u}=this.openElements,t.tagID===g.SVG&&this.treeAdapter.getTagName(i)===H.ANNOTATION_XML&&this.treeAdapter.getNamespaceURI(i)===te.MATHML?!1:this.tokenizer.inForeignNode||(t.tagID===g.MGLYPH||t.tagID===g.MALIGNMARK)&&u!==void 0&&!this._isIntegrationPoint(u,i,te.HTML)}_processToken(t){switch(t.type){case Re.CHARACTER:{this.onCharacter(t);break}case Re.NULL_CHARACTER:{this.onNullCharacter(t);break}case Re.COMMENT:{this.onComment(t);break}case Re.DOCTYPE:{this.onDoctype(t);break}case Re.START_TAG:{this._processStartTag(t);break}case Re.END_TAG:{this.onEndTag(t);break}case Re.EOF:{this.onEof(t);break}case Re.WHITESPACE_CHARACTER:{this.onWhitespaceCharacter(t);break}}}_isIntegrationPoint(t,i,u){const l=this.treeAdapter.getNamespaceURI(i),o=this.treeAdapter.getAttrList(i);return zO(t,l,o,u)}_reconstructActiveFormattingElements(){const t=this.activeFormattingElements.entries.length;if(t){const i=this.activeFormattingElements.entries.findIndex(l=>l.type===Un.Marker||this.openElements.contains(l.element)),u=i===-1?t-1:i-1;for(let l=u;l>=0;l--){const o=this.activeFormattingElements.entries[l];this._insertElement(o.token,this.treeAdapter.getNamespaceURI(o.element)),o.element=this.openElements.current}}}_closeTableCell(){this.openElements.generateImpliedEndTags(),this.openElements.popUntilTableCellPopped(),this.activeFormattingElements.clearToLastMarker(),this.insertionMode=R.IN_ROW}_closePElement(){this.openElements.generateImpliedEndTagsWithExclusion(g.P),this.openElements.popUntilTagNamePopped(g.P)}_resetInsertionMode(){for(let t=this.openElements.stackTop;t>=0;t--)switch(t===0&&this.fragmentContext?this.fragmentContextID:this.openElements.tagIDs[t]){case g.TR:{this.insertionMode=R.IN_ROW;return}case g.TBODY:case g.THEAD:case g.TFOOT:{this.insertionMode=R.IN_TABLE_BODY;return}case g.CAPTION:{this.insertionMode=R.IN_CAPTION;return}case g.COLGROUP:{this.insertionMode=R.IN_COLUMN_GROUP;return}case g.TABLE:{this.insertionMode=R.IN_TABLE;return}case g.BODY:{this.insertionMode=R.IN_BODY;return}case g.FRAMESET:{this.insertionMode=R.IN_FRAMESET;return}case g.SELECT:{this._resetInsertionModeForSelect(t);return}case g.TEMPLATE:{this.insertionMode=this.tmplInsertionModeStack[0];return}case g.HTML:{this.insertionMode=this.headElement?R.AFTER_HEAD:R.BEFORE_HEAD;return}case g.TD:case g.TH:{if(t>0){this.insertionMode=R.IN_CELL;return}break}case g.HEAD:{if(t>0){this.insertionMode=R.IN_HEAD;return}break}}this.insertionMode=R.IN_BODY}_resetInsertionModeForSelect(t){if(t>0)for(let i=t-1;i>0;i--){const u=this.openElements.tagIDs[i];if(u===g.TEMPLATE)break;if(u===g.TABLE){this.insertionMode=R.IN_SELECT_IN_TABLE;return}}this.insertionMode=R.IN_SELECT}_isElementCausesFosterParenting(t){return By.has(t)}_shouldFosterParentOnInsertion(){return this.fosterParentingEnabled&&this.openElements.currentTagId!==void 0&&this._isElementCausesFosterParenting(this.openElements.currentTagId)}_findFosterParentingLocation(){for(let t=this.openElements.stackTop;t>=0;t--){const i=this.openElements.items[t];switch(this.openElements.tagIDs[t]){case g.TEMPLATE:{if(this.treeAdapter.getNamespaceURI(i)===te.HTML)return{parent:this.treeAdapter.getTemplateContent(i),beforeElement:null};break}case g.TABLE:{const u=this.treeAdapter.getParentNode(i);return u?{parent:u,beforeElement:i}:{parent:this.openElements.items[t-1],beforeElement:null}}}}return{parent:this.openElements.items[0],beforeElement:null}}_fosterParentElement(t){const i=this._findFosterParentingLocation();i.beforeElement?this.treeAdapter.insertBefore(i.parent,t,i.beforeElement):this.treeAdapter.appendChild(i.parent,t)}_isSpecialElement(t,i){const u=this.treeAdapter.getNamespaceURI(t);return fO[u].has(i)}onCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){vR(this,t);return}switch(this.insertionMode){case R.INITIAL:{ku(this,t);break}case R.BEFORE_HTML:{Fu(this,t);break}case R.BEFORE_HEAD:{Uu(this,t);break}case R.IN_HEAD:{Pu(this,t);break}case R.IN_HEAD_NO_SCRIPT:{Hu(this,t);break}case R.AFTER_HEAD:{zu(this,t);break}case R.IN_BODY:case R.IN_CAPTION:case R.IN_CELL:case R.IN_TEMPLATE:{Uy(this,t);break}case R.TEXT:case R.IN_SELECT:case R.IN_SELECT_IN_TABLE:{this._insertCharacters(t);break}case R.IN_TABLE:case R.IN_TABLE_BODY:case R.IN_ROW:{eh(this,t);break}case R.IN_TABLE_TEXT:{Yy(this,t);break}case R.IN_COLUMN_GROUP:{ql(this,t);break}case R.AFTER_BODY:{jl(this,t);break}case R.AFTER_AFTER_BODY:{Ml(this,t);break}}}onNullCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){ER(this,t);return}switch(this.insertionMode){case R.INITIAL:{ku(this,t);break}case R.BEFORE_HTML:{Fu(this,t);break}case R.BEFORE_HEAD:{Uu(this,t);break}case R.IN_HEAD:{Pu(this,t);break}case R.IN_HEAD_NO_SCRIPT:{Hu(this,t);break}case R.AFTER_HEAD:{zu(this,t);break}case R.TEXT:{this._insertCharacters(t);break}case R.IN_TABLE:case R.IN_TABLE_BODY:case R.IN_ROW:{eh(this,t);break}case R.IN_COLUMN_GROUP:{ql(this,t);break}case R.AFTER_BODY:{jl(this,t);break}case R.AFTER_AFTER_BODY:{Ml(this,t);break}}}onComment(t){if(this.skipNextNewLine=!1,this.currentNotInHTML){wh(this,t);return}switch(this.insertionMode){case R.INITIAL:case R.BEFORE_HTML:case R.BEFORE_HEAD:case R.IN_HEAD:case R.IN_HEAD_NO_SCRIPT:case R.AFTER_HEAD:case R.IN_BODY:case R.IN_TABLE:case R.IN_CAPTION:case R.IN_COLUMN_GROUP:case R.IN_TABLE_BODY:case R.IN_ROW:case R.IN_CELL:case R.IN_SELECT:case R.IN_SELECT_IN_TABLE:case R.IN_TEMPLATE:case R.IN_FRAMESET:case R.AFTER_FRAMESET:{wh(this,t);break}case R.IN_TABLE_TEXT:{Ru(this,t);break}case R.AFTER_BODY:{JO(this,t);break}case R.AFTER_AFTER_BODY:case R.AFTER_AFTER_FRAMESET:{$O(this,t);break}}}onDoctype(t){switch(this.skipNextNewLine=!1,this.insertionMode){case R.INITIAL:{ek(this,t);break}case R.BEFORE_HEAD:case R.IN_HEAD:case R.IN_HEAD_NO_SCRIPT:case R.AFTER_HEAD:{this._err(t,K.misplacedDoctype);break}case R.IN_TABLE_TEXT:{Ru(this,t);break}}}onStartTag(t){this.skipNextNewLine=!1,this.currentToken=t,this._processStartTag(t),t.selfClosing&&!t.ackSelfClosing&&this._err(t,K.nonVoidHtmlElementStartTagWithTrailingSolidus)}_processStartTag(t){this.shouldProcessStartTagTokenInForeignContent(t)?AR(this,t):this._startTagOutsideForeignContent(t)}_startTagOutsideForeignContent(t){switch(this.insertionMode){case R.INITIAL:{ku(this,t);break}case R.BEFORE_HTML:{tk(this,t);break}case R.BEFORE_HEAD:{rk(this,t);break}case R.IN_HEAD:{Dn(this,t);break}case R.IN_HEAD_NO_SCRIPT:{uk(this,t);break}case R.AFTER_HEAD:{lk(this,t);break}case R.IN_BODY:{It(this,t);break}case R.IN_TABLE:{va(this,t);break}case R.IN_TABLE_TEXT:{Ru(this,t);break}case R.IN_CAPTION:{iR(this,t);break}case R.IN_COLUMN_GROUP:{ad(this,t);break}case R.IN_TABLE_BODY:{so(this,t);break}case R.IN_ROW:{lo(this,t);break}case R.IN_CELL:{sR(this,t);break}case R.IN_SELECT:{Qy(this,t);break}case R.IN_SELECT_IN_TABLE:{oR(this,t);break}case R.IN_TEMPLATE:{fR(this,t);break}case R.AFTER_BODY:{dR(this,t);break}case R.IN_FRAMESET:{mR(this,t);break}case R.AFTER_FRAMESET:{gR(this,t);break}case R.AFTER_AFTER_BODY:{yR(this,t);break}case R.AFTER_AFTER_FRAMESET:{TR(this,t);break}}}onEndTag(t){this.skipNextNewLine=!1,this.currentToken=t,this.currentNotInHTML?wR(this,t):this._endTagOutsideForeignContent(t)}_endTagOutsideForeignContent(t){switch(this.insertionMode){case R.INITIAL:{ku(this,t);break}case R.BEFORE_HTML:{nk(this,t);break}case R.BEFORE_HEAD:{ik(this,t);break}case R.IN_HEAD:{ak(this,t);break}case R.IN_HEAD_NO_SCRIPT:{sk(this,t);break}case R.AFTER_HEAD:{ok(this,t);break}case R.IN_BODY:{uo(this,t);break}case R.TEXT:{Kk(this,t);break}case R.IN_TABLE:{Gu(this,t);break}case R.IN_TABLE_TEXT:{Ru(this,t);break}case R.IN_CAPTION:{aR(this,t);break}case R.IN_COLUMN_GROUP:{uR(this,t);break}case R.IN_TABLE_BODY:{xh(this,t);break}case R.IN_ROW:{Gy(this,t);break}case R.IN_CELL:{lR(this,t);break}case R.IN_SELECT:{Ky(this,t);break}case R.IN_SELECT_IN_TABLE:{cR(this,t);break}case R.IN_TEMPLATE:{hR(this,t);break}case R.AFTER_BODY:{Wy(this,t);break}case R.IN_FRAMESET:{pR(this,t);break}case R.AFTER_FRAMESET:{bR(this,t);break}case R.AFTER_AFTER_BODY:{Ml(this,t);break}}}onEof(t){switch(this.insertionMode){case R.INITIAL:{ku(this,t);break}case R.BEFORE_HTML:{Fu(this,t);break}case R.BEFORE_HEAD:{Uu(this,t);break}case R.IN_HEAD:{Pu(this,t);break}case R.IN_HEAD_NO_SCRIPT:{Hu(this,t);break}case R.AFTER_HEAD:{zu(this,t);break}case R.IN_BODY:case R.IN_TABLE:case R.IN_CAPTION:case R.IN_COLUMN_GROUP:case R.IN_TABLE_BODY:case R.IN_ROW:case R.IN_CELL:case R.IN_SELECT:case R.IN_SELECT_IN_TABLE:{qy(this,t);break}case R.TEXT:{Xk(this,t);break}case R.IN_TABLE_TEXT:{Ru(this,t);break}case R.IN_TEMPLATE:{Xy(this,t);break}case R.AFTER_BODY:case R.IN_FRAMESET:case R.AFTER_FRAMESET:case R.AFTER_AFTER_BODY:case R.AFTER_AFTER_FRAMESET:{id(this,t);break}}}onWhitespaceCharacter(t){if(this.skipNextNewLine&&(this.skipNextNewLine=!1,t.chars.charCodeAt(0)===x.LINE_FEED)){if(t.chars.length===1)return;t.chars=t.chars.substr(1)}if(this.tokenizer.inForeignNode){this._insertCharacters(t);return}switch(this.insertionMode){case R.IN_HEAD:case R.IN_HEAD_NO_SCRIPT:case R.AFTER_HEAD:case R.TEXT:case R.IN_COLUMN_GROUP:case R.IN_SELECT:case R.IN_SELECT_IN_TABLE:case R.IN_FRAMESET:case R.AFTER_FRAMESET:{this._insertCharacters(t);break}case R.IN_BODY:case R.IN_CAPTION:case R.IN_CELL:case R.IN_TEMPLATE:case R.AFTER_BODY:case R.AFTER_AFTER_BODY:case R.AFTER_AFTER_FRAMESET:{Fy(this,t);break}case R.IN_TABLE:case R.IN_TABLE_BODY:case R.IN_ROW:{eh(this,t);break}case R.IN_TABLE_TEXT:{jy(this,t);break}}}}function GO(e,t){let i=e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);return i?e.openElements.contains(i.element)?e.openElements.hasInScope(t.tagID)||(i=null):(e.activeFormattingElements.removeEntry(i),i=null):zy(e,t),i}function QO(e,t){let i=null,u=e.openElements.stackTop;for(;u>=0;u--){const l=e.openElements.items[u];if(l===t.element)break;e._isSpecialElement(l,e.openElements.tagIDs[u])&&(i=l)}return i||(e.openElements.shortenToLength(Math.max(u,0)),e.activeFormattingElements.removeEntry(t)),i}function KO(e,t,i){let u=t,l=e.openElements.getCommonAncestor(t);for(let o=0,c=l;c!==i;o++,c=l){l=e.openElements.getCommonAncestor(c);const h=e.activeFormattingElements.getElementEntry(c),d=h&&o>=YO;!h||d?(d&&e.activeFormattingElements.removeEntry(h),e.openElements.remove(c)):(c=XO(e,h),u===t&&(e.activeFormattingElements.bookmark=h),e.treeAdapter.detachNode(u),e.treeAdapter.appendChild(c,u),u=c)}return u}function XO(e,t){const i=e.treeAdapter.getNamespaceURI(t.element),u=e.treeAdapter.createElement(t.token.tagName,i,t.token.attrs);return e.openElements.replace(t.element,u),t.element=u,u}function WO(e,t,i){const u=e.treeAdapter.getTagName(t),l=Na(u);if(e._isElementCausesFosterParenting(l))e._fosterParentElement(i);else{const o=e.treeAdapter.getNamespaceURI(t);l===g.TEMPLATE&&o===te.HTML&&(t=e.treeAdapter.getTemplateContent(t)),e.treeAdapter.appendChild(t,i)}}function ZO(e,t,i){const u=e.treeAdapter.getNamespaceURI(i.element),{token:l}=i,o=e.treeAdapter.createElement(l.tagName,u,l.attrs);e._adoptNodes(t,o),e.treeAdapter.appendChild(t,o),e.activeFormattingElements.insertElementAfterBookmark(o,l),e.activeFormattingElements.removeEntry(i),e.openElements.remove(i.element),e.openElements.insertAfter(t,o,l.tagID)}function rd(e,t){for(let i=0;i<jO;i++){const u=GO(e,t);if(!u)break;const l=QO(e,u);if(!l)break;e.activeFormattingElements.bookmark=u;const o=KO(e,l,u.element),c=e.openElements.getCommonAncestor(u.element);e.treeAdapter.detachNode(o),c&&WO(e,c,o),ZO(e,l,u)}}function wh(e,t){e._appendCommentNode(t,e.openElements.currentTmplContentOrNode)}function JO(e,t){e._appendCommentNode(t,e.openElements.items[0])}function $O(e,t){e._appendCommentNode(t,e.document)}function id(e,t){if(e.stopped=!0,t.location){const i=e.fragmentContext?0:2;for(let u=e.openElements.stackTop;u>=i;u--)e._setEndLocation(e.openElements.items[u],t);if(!e.fragmentContext&&e.openElements.stackTop>=0){const u=e.openElements.items[0],l=e.treeAdapter.getNodeSourceCodeLocation(u);if(l&&!l.endTag&&(e._setEndLocation(u,t),e.openElements.stackTop>=1)){const o=e.openElements.items[1],c=e.treeAdapter.getNodeSourceCodeLocation(o);c&&!c.endTag&&e._setEndLocation(o,t)}}}}function ek(e,t){e._setDocumentType(t);const i=t.forceQuirks?xn.QUIRKS:kO(t);OO(t)||e._err(t,K.nonConformingDoctype),e.treeAdapter.setDocumentMode(e.document,i),e.insertionMode=R.BEFORE_HTML}function ku(e,t){e._err(t,K.missingDoctype,!0),e.treeAdapter.setDocumentMode(e.document,xn.QUIRKS),e.insertionMode=R.BEFORE_HTML,e._processToken(t)}function tk(e,t){t.tagID===g.HTML?(e._insertElement(t,te.HTML),e.insertionMode=R.BEFORE_HEAD):Fu(e,t)}function nk(e,t){const i=t.tagID;(i===g.HTML||i===g.HEAD||i===g.BODY||i===g.BR)&&Fu(e,t)}function Fu(e,t){e._insertFakeRootElement(),e.insertionMode=R.BEFORE_HEAD,e._processToken(t)}function rk(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.HEAD:{e._insertElement(t,te.HTML),e.headElement=e.openElements.current,e.insertionMode=R.IN_HEAD;break}default:Uu(e,t)}}function ik(e,t){const i=t.tagID;i===g.HEAD||i===g.BODY||i===g.HTML||i===g.BR?Uu(e,t):e._err(t,K.endTagWithoutMatchingOpenElement)}function Uu(e,t){e._insertFakeElement(H.HEAD,g.HEAD),e.headElement=e.openElements.current,e.insertionMode=R.IN_HEAD,e._processToken(t)}function Dn(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.BASE:case g.BASEFONT:case g.BGSOUND:case g.LINK:case g.META:{e._appendElement(t,te.HTML),t.ackSelfClosing=!0;break}case g.TITLE:{e._switchToTextParsing(t,ft.RCDATA);break}case g.NOSCRIPT:{e.options.scriptingEnabled?e._switchToTextParsing(t,ft.RAWTEXT):(e._insertElement(t,te.HTML),e.insertionMode=R.IN_HEAD_NO_SCRIPT);break}case g.NOFRAMES:case g.STYLE:{e._switchToTextParsing(t,ft.RAWTEXT);break}case g.SCRIPT:{e._switchToTextParsing(t,ft.SCRIPT_DATA);break}case g.TEMPLATE:{e._insertTemplate(t),e.activeFormattingElements.insertMarker(),e.framesetOk=!1,e.insertionMode=R.IN_TEMPLATE,e.tmplInsertionModeStack.unshift(R.IN_TEMPLATE);break}case g.HEAD:{e._err(t,K.misplacedStartTagForHeadElement);break}default:Pu(e,t)}}function ak(e,t){switch(t.tagID){case g.HEAD:{e.openElements.pop(),e.insertionMode=R.AFTER_HEAD;break}case g.BODY:case g.BR:case g.HTML:{Pu(e,t);break}case g.TEMPLATE:{vi(e,t);break}default:e._err(t,K.endTagWithoutMatchingOpenElement)}}function vi(e,t){e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),e.openElements.currentTagId!==g.TEMPLATE&&e._err(t,K.closingOfElementWithOpenChildElements),e.openElements.popUntilTagNamePopped(g.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode()):e._err(t,K.endTagWithoutMatchingOpenElement)}function Pu(e,t){e.openElements.pop(),e.insertionMode=R.AFTER_HEAD,e._processToken(t)}function uk(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.BASEFONT:case g.BGSOUND:case g.HEAD:case g.LINK:case g.META:case g.NOFRAMES:case g.STYLE:{Dn(e,t);break}case g.NOSCRIPT:{e._err(t,K.nestedNoscriptInHead);break}default:Hu(e,t)}}function sk(e,t){switch(t.tagID){case g.NOSCRIPT:{e.openElements.pop(),e.insertionMode=R.IN_HEAD;break}case g.BR:{Hu(e,t);break}default:e._err(t,K.endTagWithoutMatchingOpenElement)}}function Hu(e,t){const i=t.type===Re.EOF?K.openElementsLeftAfterEof:K.disallowedContentInNoscriptInHead;e._err(t,i),e.openElements.pop(),e.insertionMode=R.IN_HEAD,e._processToken(t)}function lk(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.BODY:{e._insertElement(t,te.HTML),e.framesetOk=!1,e.insertionMode=R.IN_BODY;break}case g.FRAMESET:{e._insertElement(t,te.HTML),e.insertionMode=R.IN_FRAMESET;break}case g.BASE:case g.BASEFONT:case g.BGSOUND:case g.LINK:case g.META:case g.NOFRAMES:case g.SCRIPT:case g.STYLE:case g.TEMPLATE:case g.TITLE:{e._err(t,K.abandonedHeadElementChild),e.openElements.push(e.headElement,g.HEAD),Dn(e,t),e.openElements.remove(e.headElement);break}case g.HEAD:{e._err(t,K.misplacedStartTagForHeadElement);break}default:zu(e,t)}}function ok(e,t){switch(t.tagID){case g.BODY:case g.HTML:case g.BR:{zu(e,t);break}case g.TEMPLATE:{vi(e,t);break}default:e._err(t,K.endTagWithoutMatchingOpenElement)}}function zu(e,t){e._insertFakeElement(H.BODY,g.BODY),e.insertionMode=R.IN_BODY,ao(e,t)}function ao(e,t){switch(t.type){case Re.CHARACTER:{Uy(e,t);break}case Re.WHITESPACE_CHARACTER:{Fy(e,t);break}case Re.COMMENT:{wh(e,t);break}case Re.START_TAG:{It(e,t);break}case Re.END_TAG:{uo(e,t);break}case Re.EOF:{qy(e,t);break}}}function Fy(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t)}function Uy(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t),e.framesetOk=!1}function ck(e,t){e.openElements.tmplCount===0&&e.treeAdapter.adoptAttributes(e.openElements.items[0],t.attrs)}function fk(e,t){const i=e.openElements.tryPeekProperlyNestedBodyElement();i&&e.openElements.tmplCount===0&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(i,t.attrs))}function hk(e,t){const i=e.openElements.tryPeekProperlyNestedBodyElement();e.framesetOk&&i&&(e.treeAdapter.detachNode(i),e.openElements.popAllUpToHtmlElement(),e._insertElement(t,te.HTML),e.insertionMode=R.IN_FRAMESET)}function dk(e,t){e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._insertElement(t,te.HTML)}function mk(e,t){e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e.openElements.currentTagId!==void 0&&Ah.has(e.openElements.currentTagId)&&e.openElements.pop(),e._insertElement(t,te.HTML)}function pk(e,t){e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._insertElement(t,te.HTML),e.skipNextNewLine=!0,e.framesetOk=!1}function gk(e,t){const i=e.openElements.tmplCount>0;(!e.formElement||i)&&(e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._insertElement(t,te.HTML),i||(e.formElement=e.openElements.current))}function bk(e,t){e.framesetOk=!1;const i=t.tagID;for(let u=e.openElements.stackTop;u>=0;u--){const l=e.openElements.tagIDs[u];if(i===g.LI&&l===g.LI||(i===g.DD||i===g.DT)&&(l===g.DD||l===g.DT)){e.openElements.generateImpliedEndTagsWithExclusion(l),e.openElements.popUntilTagNamePopped(l);break}if(l!==g.ADDRESS&&l!==g.DIV&&l!==g.P&&e._isSpecialElement(e.openElements.items[u],l))break}e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._insertElement(t,te.HTML)}function yk(e,t){e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._insertElement(t,te.HTML),e.tokenizer.state=ft.PLAINTEXT}function Tk(e,t){e.openElements.hasInScope(g.BUTTON)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(g.BUTTON)),e._reconstructActiveFormattingElements(),e._insertElement(t,te.HTML),e.framesetOk=!1}function Ek(e,t){const i=e.activeFormattingElements.getElementEntryInScopeWithTagName(H.A);i&&(rd(e,t),e.openElements.remove(i.element),e.activeFormattingElements.removeEntry(i)),e._reconstructActiveFormattingElements(),e._insertElement(t,te.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function vk(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,te.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function Ak(e,t){e._reconstructActiveFormattingElements(),e.openElements.hasInScope(g.NOBR)&&(rd(e,t),e._reconstructActiveFormattingElements()),e._insertElement(t,te.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function wk(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,te.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1}function xk(e,t){e.treeAdapter.getDocumentMode(e.document)!==xn.QUIRKS&&e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._insertElement(t,te.HTML),e.framesetOk=!1,e.insertionMode=R.IN_TABLE}function Py(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,te.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function Hy(e){const t=Ny(e,gi.TYPE);return t!=null&&t.toLowerCase()===qO}function Sk(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,te.HTML),Hy(t)||(e.framesetOk=!1),t.ackSelfClosing=!0}function Ck(e,t){e._appendElement(t,te.HTML),t.ackSelfClosing=!0}function _k(e,t){e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._appendElement(t,te.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function Nk(e,t){t.tagName=H.IMG,t.tagID=g.IMG,Py(e,t)}function Ok(e,t){e._insertElement(t,te.HTML),e.skipNextNewLine=!0,e.tokenizer.state=ft.RCDATA,e.originalInsertionMode=e.insertionMode,e.framesetOk=!1,e.insertionMode=R.TEXT}function kk(e,t){e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._reconstructActiveFormattingElements(),e.framesetOk=!1,e._switchToTextParsing(t,ft.RAWTEXT)}function Rk(e,t){e.framesetOk=!1,e._switchToTextParsing(t,ft.RAWTEXT)}function k1(e,t){e._switchToTextParsing(t,ft.RAWTEXT)}function Dk(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,te.HTML),e.framesetOk=!1,e.insertionMode=e.insertionMode===R.IN_TABLE||e.insertionMode===R.IN_CAPTION||e.insertionMode===R.IN_TABLE_BODY||e.insertionMode===R.IN_ROW||e.insertionMode===R.IN_CELL?R.IN_SELECT_IN_TABLE:R.IN_SELECT}function Lk(e,t){e.openElements.currentTagId===g.OPTION&&e.openElements.pop(),e._reconstructActiveFormattingElements(),e._insertElement(t,te.HTML)}function Ik(e,t){e.openElements.hasInScope(g.RUBY)&&e.openElements.generateImpliedEndTags(),e._insertElement(t,te.HTML)}function Mk(e,t){e.openElements.hasInScope(g.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(g.RTC),e._insertElement(t,te.HTML)}function Bk(e,t){e._reconstructActiveFormattingElements(),Iy(t),nd(t),t.selfClosing?e._appendElement(t,te.MATHML):e._insertElement(t,te.MATHML),t.ackSelfClosing=!0}function Fk(e,t){e._reconstructActiveFormattingElements(),My(t),nd(t),t.selfClosing?e._appendElement(t,te.SVG):e._insertElement(t,te.SVG),t.ackSelfClosing=!0}function R1(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,te.HTML)}function It(e,t){switch(t.tagID){case g.I:case g.S:case g.B:case g.U:case g.EM:case g.TT:case g.BIG:case g.CODE:case g.FONT:case g.SMALL:case g.STRIKE:case g.STRONG:{vk(e,t);break}case g.A:{Ek(e,t);break}case g.H1:case g.H2:case g.H3:case g.H4:case g.H5:case g.H6:{mk(e,t);break}case g.P:case g.DL:case g.OL:case g.UL:case g.DIV:case g.DIR:case g.NAV:case g.MAIN:case g.MENU:case g.ASIDE:case g.CENTER:case g.FIGURE:case g.FOOTER:case g.HEADER:case g.HGROUP:case g.DIALOG:case g.DETAILS:case g.ADDRESS:case g.ARTICLE:case g.SEARCH:case g.SECTION:case g.SUMMARY:case g.FIELDSET:case g.BLOCKQUOTE:case g.FIGCAPTION:{dk(e,t);break}case g.LI:case g.DD:case g.DT:{bk(e,t);break}case g.BR:case g.IMG:case g.WBR:case g.AREA:case g.EMBED:case g.KEYGEN:{Py(e,t);break}case g.HR:{_k(e,t);break}case g.RB:case g.RTC:{Ik(e,t);break}case g.RT:case g.RP:{Mk(e,t);break}case g.PRE:case g.LISTING:{pk(e,t);break}case g.XMP:{kk(e,t);break}case g.SVG:{Fk(e,t);break}case g.HTML:{ck(e,t);break}case g.BASE:case g.LINK:case g.META:case g.STYLE:case g.TITLE:case g.SCRIPT:case g.BGSOUND:case g.BASEFONT:case g.TEMPLATE:{Dn(e,t);break}case g.BODY:{fk(e,t);break}case g.FORM:{gk(e,t);break}case g.NOBR:{Ak(e,t);break}case g.MATH:{Bk(e,t);break}case g.TABLE:{xk(e,t);break}case g.INPUT:{Sk(e,t);break}case g.PARAM:case g.TRACK:case g.SOURCE:{Ck(e,t);break}case g.IMAGE:{Nk(e,t);break}case g.BUTTON:{Tk(e,t);break}case g.APPLET:case g.OBJECT:case g.MARQUEE:{wk(e,t);break}case g.IFRAME:{Rk(e,t);break}case g.SELECT:{Dk(e,t);break}case g.OPTION:case g.OPTGROUP:{Lk(e,t);break}case g.NOEMBED:case g.NOFRAMES:{k1(e,t);break}case g.FRAMESET:{hk(e,t);break}case g.TEXTAREA:{Ok(e,t);break}case g.NOSCRIPT:{e.options.scriptingEnabled?k1(e,t):R1(e,t);break}case g.PLAINTEXT:{yk(e,t);break}case g.COL:case g.TH:case g.TD:case g.TR:case g.HEAD:case g.FRAME:case g.TBODY:case g.TFOOT:case g.THEAD:case g.CAPTION:case g.COLGROUP:break;default:R1(e,t)}}function Uk(e,t){if(e.openElements.hasInScope(g.BODY)&&(e.insertionMode=R.AFTER_BODY,e.options.sourceCodeLocationInfo)){const i=e.openElements.tryPeekProperlyNestedBodyElement();i&&e._setEndLocation(i,t)}}function Pk(e,t){e.openElements.hasInScope(g.BODY)&&(e.insertionMode=R.AFTER_BODY,Wy(e,t))}function Hk(e,t){const i=t.tagID;e.openElements.hasInScope(i)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(i))}function zk(e){const t=e.openElements.tmplCount>0,{formElement:i}=e;t||(e.formElement=null),(i||t)&&e.openElements.hasInScope(g.FORM)&&(e.openElements.generateImpliedEndTags(),t?e.openElements.popUntilTagNamePopped(g.FORM):i&&e.openElements.remove(i))}function qk(e){e.openElements.hasInButtonScope(g.P)||e._insertFakeElement(H.P,g.P),e._closePElement()}function jk(e){e.openElements.hasInListItemScope(g.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(g.LI),e.openElements.popUntilTagNamePopped(g.LI))}function Yk(e,t){const i=t.tagID;e.openElements.hasInScope(i)&&(e.openElements.generateImpliedEndTagsWithExclusion(i),e.openElements.popUntilTagNamePopped(i))}function Vk(e){e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilNumberedHeaderPopped())}function Gk(e,t){const i=t.tagID;e.openElements.hasInScope(i)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(i),e.activeFormattingElements.clearToLastMarker())}function Qk(e){e._reconstructActiveFormattingElements(),e._insertFakeElement(H.BR,g.BR),e.openElements.pop(),e.framesetOk=!1}function zy(e,t){const i=t.tagName,u=t.tagID;for(let l=e.openElements.stackTop;l>0;l--){const o=e.openElements.items[l],c=e.openElements.tagIDs[l];if(u===c&&(u!==g.UNKNOWN||e.treeAdapter.getTagName(o)===i)){e.openElements.generateImpliedEndTagsWithExclusion(u),e.openElements.stackTop>=l&&e.openElements.shortenToLength(l);break}if(e._isSpecialElement(o,c))break}}function uo(e,t){switch(t.tagID){case g.A:case g.B:case g.I:case g.S:case g.U:case g.EM:case g.TT:case g.BIG:case g.CODE:case g.FONT:case g.NOBR:case g.SMALL:case g.STRIKE:case g.STRONG:{rd(e,t);break}case g.P:{qk(e);break}case g.DL:case g.UL:case g.OL:case g.DIR:case g.DIV:case g.NAV:case g.PRE:case g.MAIN:case g.MENU:case g.ASIDE:case g.BUTTON:case g.CENTER:case g.FIGURE:case g.FOOTER:case g.HEADER:case g.HGROUP:case g.DIALOG:case g.ADDRESS:case g.ARTICLE:case g.DETAILS:case g.SEARCH:case g.SECTION:case g.SUMMARY:case g.LISTING:case g.FIELDSET:case g.BLOCKQUOTE:case g.FIGCAPTION:{Hk(e,t);break}case g.LI:{jk(e);break}case g.DD:case g.DT:{Yk(e,t);break}case g.H1:case g.H2:case g.H3:case g.H4:case g.H5:case g.H6:{Vk(e);break}case g.BR:{Qk(e);break}case g.BODY:{Uk(e,t);break}case g.HTML:{Pk(e,t);break}case g.FORM:{zk(e);break}case g.APPLET:case g.OBJECT:case g.MARQUEE:{Gk(e,t);break}case g.TEMPLATE:{vi(e,t);break}default:zy(e,t)}}function qy(e,t){e.tmplInsertionModeStack.length>0?Xy(e,t):id(e,t)}function Kk(e,t){var i;t.tagID===g.SCRIPT&&((i=e.scriptHandler)===null||i===void 0||i.call(e,e.openElements.current)),e.openElements.pop(),e.insertionMode=e.originalInsertionMode}function Xk(e,t){e._err(t,K.eofInElementThatCanContainOnlyText),e.openElements.pop(),e.insertionMode=e.originalInsertionMode,e.onEof(t)}function eh(e,t){if(e.openElements.currentTagId!==void 0&&By.has(e.openElements.currentTagId))switch(e.pendingCharacterTokens.length=0,e.hasNonWhitespacePendingCharacterToken=!1,e.originalInsertionMode=e.insertionMode,e.insertionMode=R.IN_TABLE_TEXT,t.type){case Re.CHARACTER:{Yy(e,t);break}case Re.WHITESPACE_CHARACTER:{jy(e,t);break}}else rs(e,t)}function Wk(e,t){e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),e._insertElement(t,te.HTML),e.insertionMode=R.IN_CAPTION}function Zk(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,te.HTML),e.insertionMode=R.IN_COLUMN_GROUP}function Jk(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(H.COLGROUP,g.COLGROUP),e.insertionMode=R.IN_COLUMN_GROUP,ad(e,t)}function $k(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,te.HTML),e.insertionMode=R.IN_TABLE_BODY}function eR(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(H.TBODY,g.TBODY),e.insertionMode=R.IN_TABLE_BODY,so(e,t)}function tR(e,t){e.openElements.hasInTableScope(g.TABLE)&&(e.openElements.popUntilTagNamePopped(g.TABLE),e._resetInsertionMode(),e._processStartTag(t))}function nR(e,t){Hy(t)?e._appendElement(t,te.HTML):rs(e,t),t.ackSelfClosing=!0}function rR(e,t){!e.formElement&&e.openElements.tmplCount===0&&(e._insertElement(t,te.HTML),e.formElement=e.openElements.current,e.openElements.pop())}function va(e,t){switch(t.tagID){case g.TD:case g.TH:case g.TR:{eR(e,t);break}case g.STYLE:case g.SCRIPT:case g.TEMPLATE:{Dn(e,t);break}case g.COL:{Jk(e,t);break}case g.FORM:{rR(e,t);break}case g.TABLE:{tR(e,t);break}case g.TBODY:case g.TFOOT:case g.THEAD:{$k(e,t);break}case g.INPUT:{nR(e,t);break}case g.CAPTION:{Wk(e,t);break}case g.COLGROUP:{Zk(e,t);break}default:rs(e,t)}}function Gu(e,t){switch(t.tagID){case g.TABLE:{e.openElements.hasInTableScope(g.TABLE)&&(e.openElements.popUntilTagNamePopped(g.TABLE),e._resetInsertionMode());break}case g.TEMPLATE:{vi(e,t);break}case g.BODY:case g.CAPTION:case g.COL:case g.COLGROUP:case g.HTML:case g.TBODY:case g.TD:case g.TFOOT:case g.TH:case g.THEAD:case g.TR:break;default:rs(e,t)}}function rs(e,t){const i=e.fosterParentingEnabled;e.fosterParentingEnabled=!0,ao(e,t),e.fosterParentingEnabled=i}function jy(e,t){e.pendingCharacterTokens.push(t)}function Yy(e,t){e.pendingCharacterTokens.push(t),e.hasNonWhitespacePendingCharacterToken=!0}function Ru(e,t){let i=0;if(e.hasNonWhitespacePendingCharacterToken)for(;i<e.pendingCharacterTokens.length;i++)rs(e,e.pendingCharacterTokens[i]);else for(;i<e.pendingCharacterTokens.length;i++)e._insertCharacters(e.pendingCharacterTokens[i]);e.insertionMode=e.originalInsertionMode,e._processToken(t)}const Vy=new Set([g.CAPTION,g.COL,g.COLGROUP,g.TBODY,g.TD,g.TFOOT,g.TH,g.THEAD,g.TR]);function iR(e,t){const i=t.tagID;Vy.has(i)?e.openElements.hasInTableScope(g.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(g.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=R.IN_TABLE,va(e,t)):It(e,t)}function aR(e,t){const i=t.tagID;switch(i){case g.CAPTION:case g.TABLE:{e.openElements.hasInTableScope(g.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(g.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=R.IN_TABLE,i===g.TABLE&&Gu(e,t));break}case g.BODY:case g.COL:case g.COLGROUP:case g.HTML:case g.TBODY:case g.TD:case g.TFOOT:case g.TH:case g.THEAD:case g.TR:break;default:uo(e,t)}}function ad(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.COL:{e._appendElement(t,te.HTML),t.ackSelfClosing=!0;break}case g.TEMPLATE:{Dn(e,t);break}default:ql(e,t)}}function uR(e,t){switch(t.tagID){case g.COLGROUP:{e.openElements.currentTagId===g.COLGROUP&&(e.openElements.pop(),e.insertionMode=R.IN_TABLE);break}case g.TEMPLATE:{vi(e,t);break}case g.COL:break;default:ql(e,t)}}function ql(e,t){e.openElements.currentTagId===g.COLGROUP&&(e.openElements.pop(),e.insertionMode=R.IN_TABLE,e._processToken(t))}function so(e,t){switch(t.tagID){case g.TR:{e.openElements.clearBackToTableBodyContext(),e._insertElement(t,te.HTML),e.insertionMode=R.IN_ROW;break}case g.TH:case g.TD:{e.openElements.clearBackToTableBodyContext(),e._insertFakeElement(H.TR,g.TR),e.insertionMode=R.IN_ROW,lo(e,t);break}case g.CAPTION:case g.COL:case g.COLGROUP:case g.TBODY:case g.TFOOT:case g.THEAD:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=R.IN_TABLE,va(e,t));break}default:va(e,t)}}function xh(e,t){const i=t.tagID;switch(t.tagID){case g.TBODY:case g.TFOOT:case g.THEAD:{e.openElements.hasInTableScope(i)&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=R.IN_TABLE);break}case g.TABLE:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=R.IN_TABLE,Gu(e,t));break}case g.BODY:case g.CAPTION:case g.COL:case g.COLGROUP:case g.HTML:case g.TD:case g.TH:case g.TR:break;default:Gu(e,t)}}function lo(e,t){switch(t.tagID){case g.TH:case g.TD:{e.openElements.clearBackToTableRowContext(),e._insertElement(t,te.HTML),e.insertionMode=R.IN_CELL,e.activeFormattingElements.insertMarker();break}case g.CAPTION:case g.COL:case g.COLGROUP:case g.TBODY:case g.TFOOT:case g.THEAD:case g.TR:{e.openElements.hasInTableScope(g.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=R.IN_TABLE_BODY,so(e,t));break}default:va(e,t)}}function Gy(e,t){switch(t.tagID){case g.TR:{e.openElements.hasInTableScope(g.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=R.IN_TABLE_BODY);break}case g.TABLE:{e.openElements.hasInTableScope(g.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=R.IN_TABLE_BODY,xh(e,t));break}case g.TBODY:case g.TFOOT:case g.THEAD:{(e.openElements.hasInTableScope(t.tagID)||e.openElements.hasInTableScope(g.TR))&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=R.IN_TABLE_BODY,xh(e,t));break}case g.BODY:case g.CAPTION:case g.COL:case g.COLGROUP:case g.HTML:case g.TD:case g.TH:break;default:Gu(e,t)}}function sR(e,t){const i=t.tagID;Vy.has(i)?(e.openElements.hasInTableScope(g.TD)||e.openElements.hasInTableScope(g.TH))&&(e._closeTableCell(),lo(e,t)):It(e,t)}function lR(e,t){const i=t.tagID;switch(i){case g.TD:case g.TH:{e.openElements.hasInTableScope(i)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(i),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=R.IN_ROW);break}case g.TABLE:case g.TBODY:case g.TFOOT:case g.THEAD:case g.TR:{e.openElements.hasInTableScope(i)&&(e._closeTableCell(),Gy(e,t));break}case g.BODY:case g.CAPTION:case g.COL:case g.COLGROUP:case g.HTML:break;default:uo(e,t)}}function Qy(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.OPTION:{e.openElements.currentTagId===g.OPTION&&e.openElements.pop(),e._insertElement(t,te.HTML);break}case g.OPTGROUP:{e.openElements.currentTagId===g.OPTION&&e.openElements.pop(),e.openElements.currentTagId===g.OPTGROUP&&e.openElements.pop(),e._insertElement(t,te.HTML);break}case g.HR:{e.openElements.currentTagId===g.OPTION&&e.openElements.pop(),e.openElements.currentTagId===g.OPTGROUP&&e.openElements.pop(),e._appendElement(t,te.HTML),t.ackSelfClosing=!0;break}case g.INPUT:case g.KEYGEN:case g.TEXTAREA:case g.SELECT:{e.openElements.hasInSelectScope(g.SELECT)&&(e.openElements.popUntilTagNamePopped(g.SELECT),e._resetInsertionMode(),t.tagID!==g.SELECT&&e._processStartTag(t));break}case g.SCRIPT:case g.TEMPLATE:{Dn(e,t);break}}}function Ky(e,t){switch(t.tagID){case g.OPTGROUP:{e.openElements.stackTop>0&&e.openElements.currentTagId===g.OPTION&&e.openElements.tagIDs[e.openElements.stackTop-1]===g.OPTGROUP&&e.openElements.pop(),e.openElements.currentTagId===g.OPTGROUP&&e.openElements.pop();break}case g.OPTION:{e.openElements.currentTagId===g.OPTION&&e.openElements.pop();break}case g.SELECT:{e.openElements.hasInSelectScope(g.SELECT)&&(e.openElements.popUntilTagNamePopped(g.SELECT),e._resetInsertionMode());break}case g.TEMPLATE:{vi(e,t);break}}}function oR(e,t){const i=t.tagID;i===g.CAPTION||i===g.TABLE||i===g.TBODY||i===g.TFOOT||i===g.THEAD||i===g.TR||i===g.TD||i===g.TH?(e.openElements.popUntilTagNamePopped(g.SELECT),e._resetInsertionMode(),e._processStartTag(t)):Qy(e,t)}function cR(e,t){const i=t.tagID;i===g.CAPTION||i===g.TABLE||i===g.TBODY||i===g.TFOOT||i===g.THEAD||i===g.TR||i===g.TD||i===g.TH?e.openElements.hasInTableScope(i)&&(e.openElements.popUntilTagNamePopped(g.SELECT),e._resetInsertionMode(),e.onEndTag(t)):Ky(e,t)}function fR(e,t){switch(t.tagID){case g.BASE:case g.BASEFONT:case g.BGSOUND:case g.LINK:case g.META:case g.NOFRAMES:case g.SCRIPT:case g.STYLE:case g.TEMPLATE:case g.TITLE:{Dn(e,t);break}case g.CAPTION:case g.COLGROUP:case g.TBODY:case g.TFOOT:case g.THEAD:{e.tmplInsertionModeStack[0]=R.IN_TABLE,e.insertionMode=R.IN_TABLE,va(e,t);break}case g.COL:{e.tmplInsertionModeStack[0]=R.IN_COLUMN_GROUP,e.insertionMode=R.IN_COLUMN_GROUP,ad(e,t);break}case g.TR:{e.tmplInsertionModeStack[0]=R.IN_TABLE_BODY,e.insertionMode=R.IN_TABLE_BODY,so(e,t);break}case g.TD:case g.TH:{e.tmplInsertionModeStack[0]=R.IN_ROW,e.insertionMode=R.IN_ROW,lo(e,t);break}default:e.tmplInsertionModeStack[0]=R.IN_BODY,e.insertionMode=R.IN_BODY,It(e,t)}}function hR(e,t){t.tagID===g.TEMPLATE&&vi(e,t)}function Xy(e,t){e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(g.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode(),e.onEof(t)):id(e,t)}function dR(e,t){t.tagID===g.HTML?It(e,t):jl(e,t)}function Wy(e,t){var i;if(t.tagID===g.HTML){if(e.fragmentContext||(e.insertionMode=R.AFTER_AFTER_BODY),e.options.sourceCodeLocationInfo&&e.openElements.tagIDs[0]===g.HTML){e._setEndLocation(e.openElements.items[0],t);const u=e.openElements.items[1];u&&!(!((i=e.treeAdapter.getNodeSourceCodeLocation(u))===null||i===void 0)&&i.endTag)&&e._setEndLocation(u,t)}}else jl(e,t)}function jl(e,t){e.insertionMode=R.IN_BODY,ao(e,t)}function mR(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.FRAMESET:{e._insertElement(t,te.HTML);break}case g.FRAME:{e._appendElement(t,te.HTML),t.ackSelfClosing=!0;break}case g.NOFRAMES:{Dn(e,t);break}}}function pR(e,t){t.tagID===g.FRAMESET&&!e.openElements.isRootHtmlElementCurrent()&&(e.openElements.pop(),!e.fragmentContext&&e.openElements.currentTagId!==g.FRAMESET&&(e.insertionMode=R.AFTER_FRAMESET))}function gR(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.NOFRAMES:{Dn(e,t);break}}}function bR(e,t){t.tagID===g.HTML&&(e.insertionMode=R.AFTER_AFTER_FRAMESET)}function yR(e,t){t.tagID===g.HTML?It(e,t):Ml(e,t)}function Ml(e,t){e.insertionMode=R.IN_BODY,ao(e,t)}function TR(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.NOFRAMES:{Dn(e,t);break}}}function ER(e,t){t.chars=at,e._insertCharacters(t)}function vR(e,t){e._insertCharacters(t),e.framesetOk=!1}function Zy(e){for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==te.HTML&&e.openElements.currentTagId!==void 0&&!e._isIntegrationPoint(e.openElements.currentTagId,e.openElements.current);)e.openElements.pop()}function AR(e,t){if(FO(t))Zy(e),e._startTagOutsideForeignContent(t);else{const i=e._getAdjustedCurrentElement(),u=e.treeAdapter.getNamespaceURI(i);u===te.MATHML?Iy(t):u===te.SVG&&(UO(t),My(t)),nd(t),t.selfClosing?e._appendElement(t,u):e._insertElement(t,u),t.ackSelfClosing=!0}}function wR(e,t){if(t.tagID===g.P||t.tagID===g.BR){Zy(e),e._endTagOutsideForeignContent(t);return}for(let i=e.openElements.stackTop;i>0;i--){const u=e.openElements.items[i];if(e.treeAdapter.getNamespaceURI(u)===te.HTML){e._endTagOutsideForeignContent(t);break}const l=e.treeAdapter.getTagName(u);if(l.toLowerCase()===t.tagName){t.tagName=l,e.openElements.shortenToLength(i);break}}}H.AREA,H.BASE,H.BASEFONT,H.BGSOUND,H.BR,H.COL,H.EMBED,H.FRAME,H.HR,H.IMG,H.INPUT,H.KEYGEN,H.LINK,H.META,H.PARAM,H.SOURCE,H.TRACK,H.WBR;const xR=/<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi,SR=new Set(["mdxFlowExpression","mdxJsxFlowElement","mdxJsxTextElement","mdxTextExpression","mdxjsEsm"]),D1={sourceCodeLocationInfo:!0,scriptingEnabled:!1};function Jy(e,t){const i=MR(e),u=vb("type",{handlers:{root:CR,element:_R,text:NR,comment:eT,doctype:OR,raw:RR},unknown:DR}),l={parser:i?new O1(D1):O1.getFragmentParser(void 0,D1),handle(h){u(h,l)},stitches:!1,options:t||{}};u(e,l),Oa(l,zn());const o=i?l.parser.document:l.parser.getFragment(),c=BN(o,{file:l.options.file});return l.stitches&&eo(c,"comment",function(h,d,p){const y=h;if(y.value.stitch&&p&&d!==void 0){const b=p.children;return b[d]=y.value.stitch,d}}),c.type==="root"&&c.children.length===1&&c.children[0].type===e.type?c.children[0]:c}function $y(e,t){let i=-1;if(e)for(;++i<e.length;)t.handle(e[i])}function CR(e,t){$y(e.children,t)}function _R(e,t){LR(e,t),$y(e.children,t),IR(e,t)}function NR(e,t){t.parser.tokenizer.state>4&&(t.parser.tokenizer.state=0);const i={type:Re.CHARACTER,chars:e.value,location:is(e)};Oa(t,zn(e)),t.parser.currentToken=i,t.parser._processToken(t.parser.currentToken)}function OR(e,t){const i={type:Re.DOCTYPE,name:"html",forceQuirks:!1,publicId:"",systemId:"",location:is(e)};Oa(t,zn(e)),t.parser.currentToken=i,t.parser._processToken(t.parser.currentToken)}function kR(e,t){t.stitches=!0;const i=BR(e);if("children"in e&&"children"in i){const u=Jy({type:"root",children:e.children},t.options);i.children=u.children}eT({type:"comment",value:{stitch:i}},t)}function eT(e,t){const i=e.value,u={type:Re.COMMENT,data:i,location:is(e)};Oa(t,zn(e)),t.parser.currentToken=u,t.parser._processToken(t.parser.currentToken)}function RR(e,t){if(t.parser.tokenizer.preprocessor.html="",t.parser.tokenizer.preprocessor.pos=-1,t.parser.tokenizer.preprocessor.lastGapPos=-2,t.parser.tokenizer.preprocessor.gapStack=[],t.parser.tokenizer.preprocessor.skipNextNewLine=!1,t.parser.tokenizer.preprocessor.lastChunkWritten=!1,t.parser.tokenizer.preprocessor.endOfChunkHit=!1,t.parser.tokenizer.preprocessor.isEol=!1,tT(t,zn(e)),t.parser.tokenizer.write(t.options.tagfilter?e.value.replace(xR,"&lt;$1$2"):e.value,!1),t.parser.tokenizer._runParsingLoop(),t.parser.tokenizer.state===72||t.parser.tokenizer.state===78){t.parser.tokenizer.preprocessor.lastChunkWritten=!0;const i=t.parser.tokenizer._consume();t.parser.tokenizer._callState(i)}}function DR(e,t){const i=e;if(t.options.passThrough&&t.options.passThrough.includes(i.type))kR(i,t);else{let u="";throw SR.has(i.type)&&(u=". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"),new Error("Cannot compile `"+i.type+"` node"+u)}}function Oa(e,t){tT(e,t);const i=e.parser.tokenizer.currentCharacterToken;i&&i.location&&(i.location.endLine=e.parser.tokenizer.preprocessor.line,i.location.endCol=e.parser.tokenizer.preprocessor.col+1,i.location.endOffset=e.parser.tokenizer.preprocessor.offset+1,e.parser.currentToken=i,e.parser._processToken(e.parser.currentToken)),e.parser.tokenizer.paused=!1,e.parser.tokenizer.inLoop=!1,e.parser.tokenizer.active=!1,e.parser.tokenizer.returnState=ft.DATA,e.parser.tokenizer.charRefCode=-1,e.parser.tokenizer.consumedAfterSnapshot=-1,e.parser.tokenizer.currentLocation=null,e.parser.tokenizer.currentCharacterToken=null,e.parser.tokenizer.currentToken=null,e.parser.tokenizer.currentAttr={name:"",value:""}}function tT(e,t){if(t&&t.offset!==void 0){const i={startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:-1,endCol:-1,endOffset:-1};e.parser.tokenizer.preprocessor.lineStartPos=-t.column+1,e.parser.tokenizer.preprocessor.droppedBufferSize=t.offset,e.parser.tokenizer.preprocessor.line=t.line,e.parser.tokenizer.currentLocation=i}}function LR(e,t){const i=e.tagName.toLowerCase();if(t.parser.tokenizer.state===ft.PLAINTEXT)return;Oa(t,zn(e));const u=t.parser.openElements.current;let l="namespaceURI"in u?u.namespaceURI:pi.html;l===pi.html&&i==="svg"&&(l=pi.svg);const o=zN({...e,children:[]},{space:l===pi.svg?"svg":"html"}),c={type:Re.START_TAG,tagName:i,tagID:Na(i),selfClosing:!1,ackSelfClosing:!1,attrs:"attrs"in o?o.attrs:[],location:is(e)};t.parser.currentToken=c,t.parser._processToken(t.parser.currentToken),t.parser.tokenizer.lastStartTagName=i}function IR(e,t){const i=e.tagName.toLowerCase();if(!t.parser.tokenizer.inForeignNode&&XN.includes(i)||t.parser.tokenizer.state===ft.PLAINTEXT)return;Oa(t,ro(e));const u={type:Re.END_TAG,tagName:i,tagID:Na(i),selfClosing:!1,ackSelfClosing:!1,attrs:[],location:is(e)};t.parser.currentToken=u,t.parser._processToken(t.parser.currentToken),i===t.parser.tokenizer.lastStartTagName&&(t.parser.tokenizer.state===ft.RCDATA||t.parser.tokenizer.state===ft.RAWTEXT||t.parser.tokenizer.state===ft.SCRIPT_DATA)&&(t.parser.tokenizer.state=ft.DATA)}function MR(e){const t=e.type==="root"?e.children[0]:e;return!!(t&&(t.type==="doctype"||t.type==="element"&&t.tagName.toLowerCase()==="html"))}function is(e){const t=zn(e)||{line:void 0,column:void 0,offset:void 0},i=ro(e)||{line:void 0,column:void 0,offset:void 0};return{startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:i.line,endCol:i.column,endOffset:i.offset}}function BR(e){return"children"in e?Ea({...e,children:[]}):Ea(e)}function th(e){return function(t,i){return Jy(t,{...e,file:i})}}function nT(e){return typeof e>"u"||e===null}function FR(e){return typeof e=="object"&&e!==null}function UR(e){return Array.isArray(e)?e:nT(e)?[]:[e]}function PR(e,t){var i,u,l,o;if(t)for(o=Object.keys(t),i=0,u=o.length;i<u;i+=1)l=o[i],e[l]=t[l];return e}function HR(e,t){var i="",u;for(u=0;u<t;u+=1)i+=e;return i}function zR(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var qR=nT,jR=FR,YR=UR,VR=HR,GR=zR,QR=PR,Et={isNothing:qR,isObject:jR,toArray:YR,repeat:VR,isNegativeZero:GR,extend:QR};function rT(e,t){var i="",u=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(i+='in "'+e.mark.name+'" '),i+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(i+=`

`+e.mark.snippet),u+" "+i):u}function Qu(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=rT(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Qu.prototype=Object.create(Error.prototype);Qu.prototype.constructor=Qu;Qu.prototype.toString=function(t){return this.name+": "+rT(this,t)};var Ht=Qu;function nh(e,t,i,u,l){var o="",c="",h=Math.floor(l/2)-1;return u-t>h&&(o=" ... ",t=u-h+o.length),i-u>h&&(c=" ...",i=u+h-c.length),{str:o+e.slice(t,i).replace(/\t/g,"→")+c,pos:u-t+o.length}}function rh(e,t){return Et.repeat(" ",t-e.length)+e}function KR(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),typeof t.indent!="number"&&(t.indent=1),typeof t.linesBefore!="number"&&(t.linesBefore=3),typeof t.linesAfter!="number"&&(t.linesAfter=2);for(var i=/\r?\n|\r|\0/g,u=[0],l=[],o,c=-1;o=i.exec(e.buffer);)l.push(o.index),u.push(o.index+o[0].length),e.position<=o.index&&c<0&&(c=u.length-2);c<0&&(c=u.length-1);var h="",d,p,y=Math.min(e.line+t.linesAfter,l.length).toString().length,b=t.maxLength-(t.indent+y+3);for(d=1;d<=t.linesBefore&&!(c-d<0);d++)p=nh(e.buffer,u[c-d],l[c-d],e.position-(u[c]-u[c-d]),b),h=Et.repeat(" ",t.indent)+rh((e.line-d+1).toString(),y)+" | "+p.str+`
`+h;for(p=nh(e.buffer,u[c],l[c],e.position,b),h+=Et.repeat(" ",t.indent)+rh((e.line+1).toString(),y)+" | "+p.str+`
`,h+=Et.repeat("-",t.indent+y+3+p.pos)+`^
`,d=1;d<=t.linesAfter&&!(c+d>=l.length);d++)p=nh(e.buffer,u[c+d],l[c+d],e.position-(u[c]-u[c+d]),b),h+=Et.repeat(" ",t.indent)+rh((e.line+d+1).toString(),y)+" | "+p.str+`
`;return h.replace(/\n$/,"")}var XR=KR,WR=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ZR=["scalar","sequence","mapping"];function JR(e){var t={};return e!==null&&Object.keys(e).forEach(function(i){e[i].forEach(function(u){t[String(u)]=i})}),t}function $R(e,t){if(t=t||{},Object.keys(t).forEach(function(i){if(WR.indexOf(i)===-1)throw new Ht('Unknown option "'+i+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(i){return i},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=JR(t.styleAliases||null),ZR.indexOf(this.kind)===-1)throw new Ht('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var kt=$R;function L1(e,t){var i=[];return e[t].forEach(function(u){var l=i.length;i.forEach(function(o,c){o.tag===u.tag&&o.kind===u.kind&&o.multi===u.multi&&(l=c)}),i[l]=u}),i}function eD(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,i;function u(l){l.multi?(e.multi[l.kind].push(l),e.multi.fallback.push(l)):e[l.kind][l.tag]=e.fallback[l.tag]=l}for(t=0,i=arguments.length;t<i;t+=1)arguments[t].forEach(u);return e}function Sh(e){return this.extend(e)}Sh.prototype.extend=function(t){var i=[],u=[];if(t instanceof kt)u.push(t);else if(Array.isArray(t))u=u.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(i=i.concat(t.implicit)),t.explicit&&(u=u.concat(t.explicit));else throw new Ht("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");i.forEach(function(o){if(!(o instanceof kt))throw new Ht("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new Ht("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new Ht("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),u.forEach(function(o){if(!(o instanceof kt))throw new Ht("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(Sh.prototype);return l.implicit=(this.implicit||[]).concat(i),l.explicit=(this.explicit||[]).concat(u),l.compiledImplicit=L1(l,"implicit"),l.compiledExplicit=L1(l,"explicit"),l.compiledTypeMap=eD(l.compiledImplicit,l.compiledExplicit),l};var iT=Sh,aT=new kt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),uT=new kt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),sT=new kt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),lT=new iT({explicit:[aT,uT,sT]});function tD(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function nD(){return null}function rD(e){return e===null}var oT=new kt("tag:yaml.org,2002:null",{kind:"scalar",resolve:tD,construct:nD,predicate:rD,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function iD(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function aD(e){return e==="true"||e==="True"||e==="TRUE"}function uD(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var cT=new kt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:iD,construct:aD,predicate:uD,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function sD(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function lD(e){return 48<=e&&e<=55}function oD(e){return 48<=e&&e<=57}function cD(e){if(e===null)return!1;var t=e.length,i=0,u=!1,l;if(!t)return!1;if(l=e[i],(l==="-"||l==="+")&&(l=e[++i]),l==="0"){if(i+1===t)return!0;if(l=e[++i],l==="b"){for(i++;i<t;i++)if(l=e[i],l!=="_"){if(l!=="0"&&l!=="1")return!1;u=!0}return u&&l!=="_"}if(l==="x"){for(i++;i<t;i++)if(l=e[i],l!=="_"){if(!sD(e.charCodeAt(i)))return!1;u=!0}return u&&l!=="_"}if(l==="o"){for(i++;i<t;i++)if(l=e[i],l!=="_"){if(!lD(e.charCodeAt(i)))return!1;u=!0}return u&&l!=="_"}}if(l==="_")return!1;for(;i<t;i++)if(l=e[i],l!=="_"){if(!oD(e.charCodeAt(i)))return!1;u=!0}return!(!u||l==="_")}function fD(e){var t=e,i=1,u;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),u=t[0],(u==="-"||u==="+")&&(u==="-"&&(i=-1),t=t.slice(1),u=t[0]),t==="0")return 0;if(u==="0"){if(t[1]==="b")return i*parseInt(t.slice(2),2);if(t[1]==="x")return i*parseInt(t.slice(2),16);if(t[1]==="o")return i*parseInt(t.slice(2),8)}return i*parseInt(t,10)}function hD(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Et.isNegativeZero(e)}var fT=new kt("tag:yaml.org,2002:int",{kind:"scalar",resolve:cD,construct:fD,predicate:hD,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),dD=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function mD(e){return!(e===null||!dD.test(e)||e[e.length-1]==="_")}function pD(e){var t,i;return t=e.replace(/_/g,"").toLowerCase(),i=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:i*parseFloat(t,10)}var gD=/^[-+]?[0-9]+e/;function bD(e,t){var i;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Et.isNegativeZero(e))return"-0.0";return i=e.toString(10),gD.test(i)?i.replace("e",".e"):i}function yD(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Et.isNegativeZero(e))}var hT=new kt("tag:yaml.org,2002:float",{kind:"scalar",resolve:mD,construct:pD,predicate:yD,represent:bD,defaultStyle:"lowercase"}),dT=lT.extend({implicit:[oT,cT,fT,hT]}),mT=dT,pT=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),gT=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function TD(e){return e===null?!1:pT.exec(e)!==null||gT.exec(e)!==null}function ED(e){var t,i,u,l,o,c,h,d=0,p=null,y,b,v;if(t=pT.exec(e),t===null&&(t=gT.exec(e)),t===null)throw new Error("Date resolve error");if(i=+t[1],u=+t[2]-1,l=+t[3],!t[4])return new Date(Date.UTC(i,u,l));if(o=+t[4],c=+t[5],h=+t[6],t[7]){for(d=t[7].slice(0,3);d.length<3;)d+="0";d=+d}return t[9]&&(y=+t[10],b=+(t[11]||0),p=(y*60+b)*6e4,t[9]==="-"&&(p=-p)),v=new Date(Date.UTC(i,u,l,o,c,h,d)),p&&v.setTime(v.getTime()-p),v}function vD(e){return e.toISOString()}var bT=new kt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:TD,construct:ED,instanceOf:Date,represent:vD});function AD(e){return e==="<<"||e===null}var yT=new kt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:AD}),ud=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function wD(e){if(e===null)return!1;var t,i,u=0,l=e.length,o=ud;for(i=0;i<l;i++)if(t=o.indexOf(e.charAt(i)),!(t>64)){if(t<0)return!1;u+=6}return u%8===0}function xD(e){var t,i,u=e.replace(/[\r\n=]/g,""),l=u.length,o=ud,c=0,h=[];for(t=0;t<l;t++)t%4===0&&t&&(h.push(c>>16&255),h.push(c>>8&255),h.push(c&255)),c=c<<6|o.indexOf(u.charAt(t));return i=l%4*6,i===0?(h.push(c>>16&255),h.push(c>>8&255),h.push(c&255)):i===18?(h.push(c>>10&255),h.push(c>>2&255)):i===12&&h.push(c>>4&255),new Uint8Array(h)}function SD(e){var t="",i=0,u,l,o=e.length,c=ud;for(u=0;u<o;u++)u%3===0&&u&&(t+=c[i>>18&63],t+=c[i>>12&63],t+=c[i>>6&63],t+=c[i&63]),i=(i<<8)+e[u];return l=o%3,l===0?(t+=c[i>>18&63],t+=c[i>>12&63],t+=c[i>>6&63],t+=c[i&63]):l===2?(t+=c[i>>10&63],t+=c[i>>4&63],t+=c[i<<2&63],t+=c[64]):l===1&&(t+=c[i>>2&63],t+=c[i<<4&63],t+=c[64],t+=c[64]),t}function CD(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var TT=new kt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:wD,construct:xD,predicate:CD,represent:SD}),_D=Object.prototype.hasOwnProperty,ND=Object.prototype.toString;function OD(e){if(e===null)return!0;var t=[],i,u,l,o,c,h=e;for(i=0,u=h.length;i<u;i+=1){if(l=h[i],c=!1,ND.call(l)!=="[object Object]")return!1;for(o in l)if(_D.call(l,o))if(!c)c=!0;else return!1;if(!c)return!1;if(t.indexOf(o)===-1)t.push(o);else return!1}return!0}function kD(e){return e!==null?e:[]}var ET=new kt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:OD,construct:kD}),RD=Object.prototype.toString;function DD(e){if(e===null)return!0;var t,i,u,l,o,c=e;for(o=new Array(c.length),t=0,i=c.length;t<i;t+=1){if(u=c[t],RD.call(u)!=="[object Object]"||(l=Object.keys(u),l.length!==1))return!1;o[t]=[l[0],u[l[0]]]}return!0}function LD(e){if(e===null)return[];var t,i,u,l,o,c=e;for(o=new Array(c.length),t=0,i=c.length;t<i;t+=1)u=c[t],l=Object.keys(u),o[t]=[l[0],u[l[0]]];return o}var vT=new kt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:DD,construct:LD}),ID=Object.prototype.hasOwnProperty;function MD(e){if(e===null)return!0;var t,i=e;for(t in i)if(ID.call(i,t)&&i[t]!==null)return!1;return!0}function BD(e){return e!==null?e:{}}var AT=new kt("tag:yaml.org,2002:set",{kind:"mapping",resolve:MD,construct:BD}),sd=mT.extend({implicit:[bT,yT],explicit:[TT,ET,vT,AT]}),Vr=Object.prototype.hasOwnProperty,Yl=1,wT=2,xT=3,Vl=4,ih=1,FD=2,I1=3,UD=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,PD=/[\x85\u2028\u2029]/,HD=/[,\[\]\{\}]/,ST=/^(?:!|!!|![a-z\-]+!)$/i,CT=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function M1(e){return Object.prototype.toString.call(e)}function Pn(e){return e===10||e===13}function bi(e){return e===9||e===32}function Zt(e){return e===9||e===32||e===10||e===13}function ga(e){return e===44||e===91||e===93||e===123||e===125}function zD(e){var t;return 48<=e&&e<=57?e-48:(t=e|32,97<=t&&t<=102?t-97+10:-1)}function qD(e){return e===120?2:e===117?4:e===85?8:0}function jD(e){return 48<=e&&e<=57?e-48:-1}function B1(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function YD(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function _T(e,t,i){t==="__proto__"?Object.defineProperty(e,t,{configurable:!0,enumerable:!0,writable:!0,value:i}):e[t]=i}var NT=new Array(256),OT=new Array(256);for(var ha=0;ha<256;ha++)NT[ha]=B1(ha)?1:0,OT[ha]=B1(ha);function VD(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||sd,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function kT(e,t){var i={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return i.snippet=XR(i),new Ht(t,i)}function Te(e,t){throw kT(e,t)}function Gl(e,t){e.onWarning&&e.onWarning.call(null,kT(e,t))}var F1={YAML:function(t,i,u){var l,o,c;t.version!==null&&Te(t,"duplication of %YAML directive"),u.length!==1&&Te(t,"YAML directive accepts exactly one argument"),l=/^([0-9]+)\.([0-9]+)$/.exec(u[0]),l===null&&Te(t,"ill-formed argument of the YAML directive"),o=parseInt(l[1],10),c=parseInt(l[2],10),o!==1&&Te(t,"unacceptable YAML version of the document"),t.version=u[0],t.checkLineBreaks=c<2,c!==1&&c!==2&&Gl(t,"unsupported YAML version of the document")},TAG:function(t,i,u){var l,o;u.length!==2&&Te(t,"TAG directive accepts exactly two arguments"),l=u[0],o=u[1],ST.test(l)||Te(t,"ill-formed tag handle (first argument) of the TAG directive"),Vr.call(t.tagMap,l)&&Te(t,'there is a previously declared suffix for "'+l+'" tag handle'),CT.test(o)||Te(t,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch{Te(t,"tag prefix is malformed: "+o)}t.tagMap[l]=o}};function Yr(e,t,i,u){var l,o,c,h;if(t<i){if(h=e.input.slice(t,i),u)for(l=0,o=h.length;l<o;l+=1)c=h.charCodeAt(l),c===9||32<=c&&c<=1114111||Te(e,"expected valid JSON character");else UD.test(h)&&Te(e,"the stream contains non-printable characters");e.result+=h}}function U1(e,t,i,u){var l,o,c,h;for(Et.isObject(i)||Te(e,"cannot merge mappings; the provided source object is unacceptable"),l=Object.keys(i),c=0,h=l.length;c<h;c+=1)o=l[c],Vr.call(t,o)||(_T(t,o,i[o]),u[o]=!0)}function ba(e,t,i,u,l,o,c,h,d){var p,y;if(Array.isArray(l))for(l=Array.prototype.slice.call(l),p=0,y=l.length;p<y;p+=1)Array.isArray(l[p])&&Te(e,"nested arrays are not supported inside keys"),typeof l=="object"&&M1(l[p])==="[object Object]"&&(l[p]="[object Object]");if(typeof l=="object"&&M1(l)==="[object Object]"&&(l="[object Object]"),l=String(l),t===null&&(t={}),u==="tag:yaml.org,2002:merge")if(Array.isArray(o))for(p=0,y=o.length;p<y;p+=1)U1(e,t,o[p],i);else U1(e,t,o,i);else!e.json&&!Vr.call(i,l)&&Vr.call(t,l)&&(e.line=c||e.line,e.lineStart=h||e.lineStart,e.position=d||e.position,Te(e,"duplicated mapping key")),_T(t,l,o),delete i[l];return t}function ld(e){var t;t=e.input.charCodeAt(e.position),t===10?e.position++:t===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):Te(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function bt(e,t,i){for(var u=0,l=e.input.charCodeAt(e.position);l!==0;){for(;bi(l);)l===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),l=e.input.charCodeAt(++e.position);if(t&&l===35)do l=e.input.charCodeAt(++e.position);while(l!==10&&l!==13&&l!==0);if(Pn(l))for(ld(e),l=e.input.charCodeAt(e.position),u++,e.lineIndent=0;l===32;)e.lineIndent++,l=e.input.charCodeAt(++e.position);else break}return i!==-1&&u!==0&&e.lineIndent<i&&Gl(e,"deficient indentation"),u}function oo(e){var t=e.position,i;return i=e.input.charCodeAt(t),!!((i===45||i===46)&&i===e.input.charCodeAt(t+1)&&i===e.input.charCodeAt(t+2)&&(t+=3,i=e.input.charCodeAt(t),i===0||Zt(i)))}function od(e,t){t===1?e.result+=" ":t>1&&(e.result+=Et.repeat(`
`,t-1))}function GD(e,t,i){var u,l,o,c,h,d,p,y,b=e.kind,v=e.result,E;if(E=e.input.charCodeAt(e.position),Zt(E)||ga(E)||E===35||E===38||E===42||E===33||E===124||E===62||E===39||E===34||E===37||E===64||E===96||(E===63||E===45)&&(l=e.input.charCodeAt(e.position+1),Zt(l)||i&&ga(l)))return!1;for(e.kind="scalar",e.result="",o=c=e.position,h=!1;E!==0;){if(E===58){if(l=e.input.charCodeAt(e.position+1),Zt(l)||i&&ga(l))break}else if(E===35){if(u=e.input.charCodeAt(e.position-1),Zt(u))break}else{if(e.position===e.lineStart&&oo(e)||i&&ga(E))break;if(Pn(E))if(d=e.line,p=e.lineStart,y=e.lineIndent,bt(e,!1,-1),e.lineIndent>=t){h=!0,E=e.input.charCodeAt(e.position);continue}else{e.position=c,e.line=d,e.lineStart=p,e.lineIndent=y;break}}h&&(Yr(e,o,c,!1),od(e,e.line-d),o=c=e.position,h=!1),bi(E)||(c=e.position+1),E=e.input.charCodeAt(++e.position)}return Yr(e,o,c,!1),e.result?!0:(e.kind=b,e.result=v,!1)}function QD(e,t){var i,u,l;if(i=e.input.charCodeAt(e.position),i!==39)return!1;for(e.kind="scalar",e.result="",e.position++,u=l=e.position;(i=e.input.charCodeAt(e.position))!==0;)if(i===39)if(Yr(e,u,e.position,!0),i=e.input.charCodeAt(++e.position),i===39)u=e.position,e.position++,l=e.position;else return!0;else Pn(i)?(Yr(e,u,l,!0),od(e,bt(e,!1,t)),u=l=e.position):e.position===e.lineStart&&oo(e)?Te(e,"unexpected end of the document within a single quoted scalar"):(e.position++,l=e.position);Te(e,"unexpected end of the stream within a single quoted scalar")}function KD(e,t){var i,u,l,o,c,h;if(h=e.input.charCodeAt(e.position),h!==34)return!1;for(e.kind="scalar",e.result="",e.position++,i=u=e.position;(h=e.input.charCodeAt(e.position))!==0;){if(h===34)return Yr(e,i,e.position,!0),e.position++,!0;if(h===92){if(Yr(e,i,e.position,!0),h=e.input.charCodeAt(++e.position),Pn(h))bt(e,!1,t);else if(h<256&&NT[h])e.result+=OT[h],e.position++;else if((c=qD(h))>0){for(l=c,o=0;l>0;l--)h=e.input.charCodeAt(++e.position),(c=zD(h))>=0?o=(o<<4)+c:Te(e,"expected hexadecimal character");e.result+=YD(o),e.position++}else Te(e,"unknown escape sequence");i=u=e.position}else Pn(h)?(Yr(e,i,u,!0),od(e,bt(e,!1,t)),i=u=e.position):e.position===e.lineStart&&oo(e)?Te(e,"unexpected end of the document within a double quoted scalar"):(e.position++,u=e.position)}Te(e,"unexpected end of the stream within a double quoted scalar")}function XD(e,t){var i=!0,u,l,o,c=e.tag,h,d=e.anchor,p,y,b,v,E,A=Object.create(null),_,k,N,L;if(L=e.input.charCodeAt(e.position),L===91)y=93,E=!1,h=[];else if(L===123)y=125,E=!0,h={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=h),L=e.input.charCodeAt(++e.position);L!==0;){if(bt(e,!0,t),L=e.input.charCodeAt(e.position),L===y)return e.position++,e.tag=c,e.anchor=d,e.kind=E?"mapping":"sequence",e.result=h,!0;i?L===44&&Te(e,"expected the node content, but found ','"):Te(e,"missed comma between flow collection entries"),k=_=N=null,b=v=!1,L===63&&(p=e.input.charCodeAt(e.position+1),Zt(p)&&(b=v=!0,e.position++,bt(e,!0,t))),u=e.line,l=e.lineStart,o=e.position,Aa(e,t,Yl,!1,!0),k=e.tag,_=e.result,bt(e,!0,t),L=e.input.charCodeAt(e.position),(v||e.line===u)&&L===58&&(b=!0,L=e.input.charCodeAt(++e.position),bt(e,!0,t),Aa(e,t,Yl,!1,!0),N=e.result),E?ba(e,h,A,k,_,N,u,l,o):b?h.push(ba(e,null,A,k,_,N,u,l,o)):h.push(_),bt(e,!0,t),L=e.input.charCodeAt(e.position),L===44?(i=!0,L=e.input.charCodeAt(++e.position)):i=!1}Te(e,"unexpected end of the stream within a flow collection")}function WD(e,t){var i,u,l=ih,o=!1,c=!1,h=t,d=0,p=!1,y,b;if(b=e.input.charCodeAt(e.position),b===124)u=!1;else if(b===62)u=!0;else return!1;for(e.kind="scalar",e.result="";b!==0;)if(b=e.input.charCodeAt(++e.position),b===43||b===45)ih===l?l=b===43?I1:FD:Te(e,"repeat of a chomping mode identifier");else if((y=jD(b))>=0)y===0?Te(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):c?Te(e,"repeat of an indentation width identifier"):(h=t+y-1,c=!0);else break;if(bi(b)){do b=e.input.charCodeAt(++e.position);while(bi(b));if(b===35)do b=e.input.charCodeAt(++e.position);while(!Pn(b)&&b!==0)}for(;b!==0;){for(ld(e),e.lineIndent=0,b=e.input.charCodeAt(e.position);(!c||e.lineIndent<h)&&b===32;)e.lineIndent++,b=e.input.charCodeAt(++e.position);if(!c&&e.lineIndent>h&&(h=e.lineIndent),Pn(b)){d++;continue}if(e.lineIndent<h){l===I1?e.result+=Et.repeat(`
`,o?1+d:d):l===ih&&o&&(e.result+=`
`);break}for(u?bi(b)?(p=!0,e.result+=Et.repeat(`
`,o?1+d:d)):p?(p=!1,e.result+=Et.repeat(`
`,d+1)):d===0?o&&(e.result+=" "):e.result+=Et.repeat(`
`,d):e.result+=Et.repeat(`
`,o?1+d:d),o=!0,c=!0,d=0,i=e.position;!Pn(b)&&b!==0;)b=e.input.charCodeAt(++e.position);Yr(e,i,e.position,!1)}return!0}function P1(e,t){var i,u=e.tag,l=e.anchor,o=[],c,h=!1,d;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=o),d=e.input.charCodeAt(e.position);d!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,Te(e,"tab characters must not be used in indentation")),!(d!==45||(c=e.input.charCodeAt(e.position+1),!Zt(c))));){if(h=!0,e.position++,bt(e,!0,-1)&&e.lineIndent<=t){o.push(null),d=e.input.charCodeAt(e.position);continue}if(i=e.line,Aa(e,t,xT,!1,!0),o.push(e.result),bt(e,!0,-1),d=e.input.charCodeAt(e.position),(e.line===i||e.lineIndent>t)&&d!==0)Te(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break}return h?(e.tag=u,e.anchor=l,e.kind="sequence",e.result=o,!0):!1}function ZD(e,t,i){var u,l,o,c,h,d,p=e.tag,y=e.anchor,b={},v=Object.create(null),E=null,A=null,_=null,k=!1,N=!1,L;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=b),L=e.input.charCodeAt(e.position);L!==0;){if(!k&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,Te(e,"tab characters must not be used in indentation")),u=e.input.charCodeAt(e.position+1),o=e.line,(L===63||L===58)&&Zt(u))L===63?(k&&(ba(e,b,v,E,A,null,c,h,d),E=A=_=null),N=!0,k=!0,l=!0):k?(k=!1,l=!0):Te(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,L=u;else{if(c=e.line,h=e.lineStart,d=e.position,!Aa(e,i,wT,!1,!0))break;if(e.line===o){for(L=e.input.charCodeAt(e.position);bi(L);)L=e.input.charCodeAt(++e.position);if(L===58)L=e.input.charCodeAt(++e.position),Zt(L)||Te(e,"a whitespace character is expected after the key-value separator within a block mapping"),k&&(ba(e,b,v,E,A,null,c,h,d),E=A=_=null),N=!0,k=!1,l=!1,E=e.tag,A=e.result;else if(N)Te(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=p,e.anchor=y,!0}else if(N)Te(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=p,e.anchor=y,!0}if((e.line===o||e.lineIndent>t)&&(k&&(c=e.line,h=e.lineStart,d=e.position),Aa(e,t,Vl,!0,l)&&(k?A=e.result:_=e.result),k||(ba(e,b,v,E,A,_,c,h,d),E=A=_=null),bt(e,!0,-1),L=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>t)&&L!==0)Te(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return k&&ba(e,b,v,E,A,null,c,h,d),N&&(e.tag=p,e.anchor=y,e.kind="mapping",e.result=b),N}function JD(e){var t,i=!1,u=!1,l,o,c;if(c=e.input.charCodeAt(e.position),c!==33)return!1;if(e.tag!==null&&Te(e,"duplication of a tag property"),c=e.input.charCodeAt(++e.position),c===60?(i=!0,c=e.input.charCodeAt(++e.position)):c===33?(u=!0,l="!!",c=e.input.charCodeAt(++e.position)):l="!",t=e.position,i){do c=e.input.charCodeAt(++e.position);while(c!==0&&c!==62);e.position<e.length?(o=e.input.slice(t,e.position),c=e.input.charCodeAt(++e.position)):Te(e,"unexpected end of the stream within a verbatim tag")}else{for(;c!==0&&!Zt(c);)c===33&&(u?Te(e,"tag suffix cannot contain exclamation marks"):(l=e.input.slice(t-1,e.position+1),ST.test(l)||Te(e,"named tag handle cannot contain such characters"),u=!0,t=e.position+1)),c=e.input.charCodeAt(++e.position);o=e.input.slice(t,e.position),HD.test(o)&&Te(e,"tag suffix cannot contain flow indicator characters")}o&&!CT.test(o)&&Te(e,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch{Te(e,"tag name is malformed: "+o)}return i?e.tag=o:Vr.call(e.tagMap,l)?e.tag=e.tagMap[l]+o:l==="!"?e.tag="!"+o:l==="!!"?e.tag="tag:yaml.org,2002:"+o:Te(e,'undeclared tag handle "'+l+'"'),!0}function $D(e){var t,i;if(i=e.input.charCodeAt(e.position),i!==38)return!1;for(e.anchor!==null&&Te(e,"duplication of an anchor property"),i=e.input.charCodeAt(++e.position),t=e.position;i!==0&&!Zt(i)&&!ga(i);)i=e.input.charCodeAt(++e.position);return e.position===t&&Te(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function e6(e){var t,i,u;if(u=e.input.charCodeAt(e.position),u!==42)return!1;for(u=e.input.charCodeAt(++e.position),t=e.position;u!==0&&!Zt(u)&&!ga(u);)u=e.input.charCodeAt(++e.position);return e.position===t&&Te(e,"name of an alias node must contain at least one character"),i=e.input.slice(t,e.position),Vr.call(e.anchorMap,i)||Te(e,'unidentified alias "'+i+'"'),e.result=e.anchorMap[i],bt(e,!0,-1),!0}function Aa(e,t,i,u,l){var o,c,h,d=1,p=!1,y=!1,b,v,E,A,_,k;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=c=h=Vl===i||xT===i,u&&bt(e,!0,-1)&&(p=!0,e.lineIndent>t?d=1:e.lineIndent===t?d=0:e.lineIndent<t&&(d=-1)),d===1)for(;JD(e)||$D(e);)bt(e,!0,-1)?(p=!0,h=o,e.lineIndent>t?d=1:e.lineIndent===t?d=0:e.lineIndent<t&&(d=-1)):h=!1;if(h&&(h=p||l),(d===1||Vl===i)&&(Yl===i||wT===i?_=t:_=t+1,k=e.position-e.lineStart,d===1?h&&(P1(e,k)||ZD(e,k,_))||XD(e,_)?y=!0:(c&&WD(e,_)||QD(e,_)||KD(e,_)?y=!0:e6(e)?(y=!0,(e.tag!==null||e.anchor!==null)&&Te(e,"alias node should not have any properties")):GD(e,_,Yl===i)&&(y=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):d===0&&(y=h&&P1(e,k))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&Te(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),b=0,v=e.implicitTypes.length;b<v;b+=1)if(A=e.implicitTypes[b],A.resolve(e.result)){e.result=A.construct(e.result),e.tag=A.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(Vr.call(e.typeMap[e.kind||"fallback"],e.tag))A=e.typeMap[e.kind||"fallback"][e.tag];else for(A=null,E=e.typeMap.multi[e.kind||"fallback"],b=0,v=E.length;b<v;b+=1)if(e.tag.slice(0,E[b].tag.length)===E[b].tag){A=E[b];break}A||Te(e,"unknown tag !<"+e.tag+">"),e.result!==null&&A.kind!==e.kind&&Te(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+A.kind+'", not "'+e.kind+'"'),A.resolve(e.result,e.tag)?(e.result=A.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):Te(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||y}function t6(e){var t=e.position,i,u,l,o=!1,c;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(c=e.input.charCodeAt(e.position))!==0&&(bt(e,!0,-1),c=e.input.charCodeAt(e.position),!(e.lineIndent>0||c!==37));){for(o=!0,c=e.input.charCodeAt(++e.position),i=e.position;c!==0&&!Zt(c);)c=e.input.charCodeAt(++e.position);for(u=e.input.slice(i,e.position),l=[],u.length<1&&Te(e,"directive name must not be less than one character in length");c!==0;){for(;bi(c);)c=e.input.charCodeAt(++e.position);if(c===35){do c=e.input.charCodeAt(++e.position);while(c!==0&&!Pn(c));break}if(Pn(c))break;for(i=e.position;c!==0&&!Zt(c);)c=e.input.charCodeAt(++e.position);l.push(e.input.slice(i,e.position))}c!==0&&ld(e),Vr.call(F1,u)?F1[u](e,u,l):Gl(e,'unknown document directive "'+u+'"')}if(bt(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,bt(e,!0,-1)):o&&Te(e,"directives end mark is expected"),Aa(e,e.lineIndent-1,Vl,!1,!0),bt(e,!0,-1),e.checkLineBreaks&&PD.test(e.input.slice(t,e.position))&&Gl(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&oo(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,bt(e,!0,-1));return}if(e.position<e.length-1)Te(e,"end of the stream or a document separator is expected");else return}function RT(e,t){e=String(e),t=t||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var i=new VD(e,t),u=e.indexOf("\0");for(u!==-1&&(i.position=u,Te(i,"null byte is not allowed in input")),i.input+="\0";i.input.charCodeAt(i.position)===32;)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)t6(i);return i.documents}function n6(e,t,i){t!==null&&typeof t=="object"&&typeof i>"u"&&(i=t,t=null);var u=RT(e,i);if(typeof t!="function")return u;for(var l=0,o=u.length;l<o;l+=1)t(u[l])}function r6(e,t){var i=RT(e,t);if(i.length!==0){if(i.length===1)return i[0];throw new Ht("expected a single document in the stream, but found more")}}var i6=n6,a6=r6,DT={loadAll:i6,load:a6},LT=Object.prototype.toString,IT=Object.prototype.hasOwnProperty,cd=65279,u6=9,Ku=10,s6=13,l6=32,o6=33,c6=34,Ch=35,f6=37,h6=38,d6=39,m6=42,MT=44,p6=45,Ql=58,g6=61,b6=62,y6=63,T6=64,BT=91,FT=93,E6=96,UT=123,v6=124,PT=125,Mt={};Mt[0]="\\0";Mt[7]="\\a";Mt[8]="\\b";Mt[9]="\\t";Mt[10]="\\n";Mt[11]="\\v";Mt[12]="\\f";Mt[13]="\\r";Mt[27]="\\e";Mt[34]='\\"';Mt[92]="\\\\";Mt[133]="\\N";Mt[160]="\\_";Mt[8232]="\\L";Mt[8233]="\\P";var A6=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],w6=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function x6(e,t){var i,u,l,o,c,h,d;if(t===null)return{};for(i={},u=Object.keys(t),l=0,o=u.length;l<o;l+=1)c=u[l],h=String(t[c]),c.slice(0,2)==="!!"&&(c="tag:yaml.org,2002:"+c.slice(2)),d=e.compiledTypeMap.fallback[c],d&&IT.call(d.styleAliases,h)&&(h=d.styleAliases[h]),i[c]=h;return i}function S6(e){var t,i,u;if(t=e.toString(16).toUpperCase(),e<=255)i="x",u=2;else if(e<=65535)i="u",u=4;else if(e<=4294967295)i="U",u=8;else throw new Ht("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+i+Et.repeat("0",u-t.length)+t}var C6=1,Xu=2;function _6(e){this.schema=e.schema||sd,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Et.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=x6(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?Xu:C6,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function H1(e,t){for(var i=Et.repeat(" ",t),u=0,l=-1,o="",c,h=e.length;u<h;)l=e.indexOf(`
`,u),l===-1?(c=e.slice(u),u=h):(c=e.slice(u,l+1),u=l+1),c.length&&c!==`
`&&(o+=i),o+=c;return o}function _h(e,t){return`
`+Et.repeat(" ",e.indent*t)}function N6(e,t){var i,u,l;for(i=0,u=e.implicitTypes.length;i<u;i+=1)if(l=e.implicitTypes[i],l.resolve(t))return!0;return!1}function Kl(e){return e===l6||e===u6}function Wu(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==cd||65536<=e&&e<=1114111}function z1(e){return Wu(e)&&e!==cd&&e!==s6&&e!==Ku}function q1(e,t,i){var u=z1(e),l=u&&!Kl(e);return(i?u:u&&e!==MT&&e!==BT&&e!==FT&&e!==UT&&e!==PT)&&e!==Ch&&!(t===Ql&&!l)||z1(t)&&!Kl(t)&&e===Ch||t===Ql&&l}function O6(e){return Wu(e)&&e!==cd&&!Kl(e)&&e!==p6&&e!==y6&&e!==Ql&&e!==MT&&e!==BT&&e!==FT&&e!==UT&&e!==PT&&e!==Ch&&e!==h6&&e!==m6&&e!==o6&&e!==v6&&e!==g6&&e!==b6&&e!==d6&&e!==c6&&e!==f6&&e!==T6&&e!==E6}function k6(e){return!Kl(e)&&e!==Ql}function Lu(e,t){var i=e.charCodeAt(t),u;return i>=55296&&i<=56319&&t+1<e.length&&(u=e.charCodeAt(t+1),u>=56320&&u<=57343)?(i-55296)*1024+u-56320+65536:i}function HT(e){var t=/^\n* /;return t.test(e)}var zT=1,Nh=2,qT=3,jT=4,ma=5;function R6(e,t,i,u,l,o,c,h){var d,p=0,y=null,b=!1,v=!1,E=u!==-1,A=-1,_=O6(Lu(e,0))&&k6(Lu(e,e.length-1));if(t||c)for(d=0;d<e.length;p>=65536?d+=2:d++){if(p=Lu(e,d),!Wu(p))return ma;_=_&&q1(p,y,h),y=p}else{for(d=0;d<e.length;p>=65536?d+=2:d++){if(p=Lu(e,d),p===Ku)b=!0,E&&(v=v||d-A-1>u&&e[A+1]!==" ",A=d);else if(!Wu(p))return ma;_=_&&q1(p,y,h),y=p}v=v||E&&d-A-1>u&&e[A+1]!==" "}return!b&&!v?_&&!c&&!l(e)?zT:o===Xu?ma:Nh:i>9&&HT(e)?ma:c?o===Xu?ma:Nh:v?jT:qT}function D6(e,t,i,u,l){e.dump=(function(){if(t.length===0)return e.quotingType===Xu?'""':"''";if(!e.noCompatMode&&(A6.indexOf(t)!==-1||w6.test(t)))return e.quotingType===Xu?'"'+t+'"':"'"+t+"'";var o=e.indent*Math.max(1,i),c=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),h=u||e.flowLevel>-1&&i>=e.flowLevel;function d(p){return N6(e,p)}switch(R6(t,h,e.indent,c,d,e.quotingType,e.forceQuotes&&!u,l)){case zT:return t;case Nh:return"'"+t.replace(/'/g,"''")+"'";case qT:return"|"+j1(t,e.indent)+Y1(H1(t,o));case jT:return">"+j1(t,e.indent)+Y1(H1(L6(t,c),o));case ma:return'"'+I6(t)+'"';default:throw new Ht("impossible error: invalid scalar style")}})()}function j1(e,t){var i=HT(e)?String(t):"",u=e[e.length-1]===`
`,l=u&&(e[e.length-2]===`
`||e===`
`),o=l?"+":u?"":"-";return i+o+`
`}function Y1(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function L6(e,t){for(var i=/(\n+)([^\n]*)/g,u=(function(){var p=e.indexOf(`
`);return p=p!==-1?p:e.length,i.lastIndex=p,V1(e.slice(0,p),t)})(),l=e[0]===`
`||e[0]===" ",o,c;c=i.exec(e);){var h=c[1],d=c[2];o=d[0]===" ",u+=h+(!l&&!o&&d!==""?`
`:"")+V1(d,t),l=o}return u}function V1(e,t){if(e===""||e[0]===" ")return e;for(var i=/ [^ ]/g,u,l=0,o,c=0,h=0,d="";u=i.exec(e);)h=u.index,h-l>t&&(o=c>l?c:h,d+=`
`+e.slice(l,o),l=o+1),c=h;return d+=`
`,e.length-l>t&&c>l?d+=e.slice(l,c)+`
`+e.slice(c+1):d+=e.slice(l),d.slice(1)}function I6(e){for(var t="",i=0,u,l=0;l<e.length;i>=65536?l+=2:l++)i=Lu(e,l),u=Mt[i],!u&&Wu(i)?(t+=e[l],i>=65536&&(t+=e[l+1])):t+=u||S6(i);return t}function M6(e,t,i){var u="",l=e.tag,o,c,h;for(o=0,c=i.length;o<c;o+=1)h=i[o],e.replacer&&(h=e.replacer.call(i,String(o),h)),(hr(e,t,h,!1,!1)||typeof h>"u"&&hr(e,t,null,!1,!1))&&(u!==""&&(u+=","+(e.condenseFlow?"":" ")),u+=e.dump);e.tag=l,e.dump="["+u+"]"}function G1(e,t,i,u){var l="",o=e.tag,c,h,d;for(c=0,h=i.length;c<h;c+=1)d=i[c],e.replacer&&(d=e.replacer.call(i,String(c),d)),(hr(e,t+1,d,!0,!0,!1,!0)||typeof d>"u"&&hr(e,t+1,null,!0,!0,!1,!0))&&((!u||l!=="")&&(l+=_h(e,t)),e.dump&&Ku===e.dump.charCodeAt(0)?l+="-":l+="- ",l+=e.dump);e.tag=o,e.dump=l||"[]"}function B6(e,t,i){var u="",l=e.tag,o=Object.keys(i),c,h,d,p,y;for(c=0,h=o.length;c<h;c+=1)y="",u!==""&&(y+=", "),e.condenseFlow&&(y+='"'),d=o[c],p=i[d],e.replacer&&(p=e.replacer.call(i,d,p)),hr(e,t,d,!1,!1)&&(e.dump.length>1024&&(y+="? "),y+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),hr(e,t,p,!1,!1)&&(y+=e.dump,u+=y));e.tag=l,e.dump="{"+u+"}"}function F6(e,t,i,u){var l="",o=e.tag,c=Object.keys(i),h,d,p,y,b,v;if(e.sortKeys===!0)c.sort();else if(typeof e.sortKeys=="function")c.sort(e.sortKeys);else if(e.sortKeys)throw new Ht("sortKeys must be a boolean or a function");for(h=0,d=c.length;h<d;h+=1)v="",(!u||l!=="")&&(v+=_h(e,t)),p=c[h],y=i[p],e.replacer&&(y=e.replacer.call(i,p,y)),hr(e,t+1,p,!0,!0,!0)&&(b=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,b&&(e.dump&&Ku===e.dump.charCodeAt(0)?v+="?":v+="? "),v+=e.dump,b&&(v+=_h(e,t)),hr(e,t+1,y,!0,b)&&(e.dump&&Ku===e.dump.charCodeAt(0)?v+=":":v+=": ",v+=e.dump,l+=v));e.tag=o,e.dump=l||"{}"}function Q1(e,t,i){var u,l,o,c,h,d;for(l=i?e.explicitTypes:e.implicitTypes,o=0,c=l.length;o<c;o+=1)if(h=l[o],(h.instanceOf||h.predicate)&&(!h.instanceOf||typeof t=="object"&&t instanceof h.instanceOf)&&(!h.predicate||h.predicate(t))){if(i?h.multi&&h.representName?e.tag=h.representName(t):e.tag=h.tag:e.tag="?",h.represent){if(d=e.styleMap[h.tag]||h.defaultStyle,LT.call(h.represent)==="[object Function]")u=h.represent(t,d);else if(IT.call(h.represent,d))u=h.represent[d](t,d);else throw new Ht("!<"+h.tag+'> tag resolver accepts not "'+d+'" style');e.dump=u}return!0}return!1}function hr(e,t,i,u,l,o,c){e.tag=null,e.dump=i,Q1(e,i,!1)||Q1(e,i,!0);var h=LT.call(e.dump),d=u,p;u&&(u=e.flowLevel<0||e.flowLevel>t);var y=h==="[object Object]"||h==="[object Array]",b,v;if(y&&(b=e.duplicates.indexOf(i),v=b!==-1),(e.tag!==null&&e.tag!=="?"||v||e.indent!==2&&t>0)&&(l=!1),v&&e.usedDuplicates[b])e.dump="*ref_"+b;else{if(y&&v&&!e.usedDuplicates[b]&&(e.usedDuplicates[b]=!0),h==="[object Object]")u&&Object.keys(e.dump).length!==0?(F6(e,t,e.dump,l),v&&(e.dump="&ref_"+b+e.dump)):(B6(e,t,e.dump),v&&(e.dump="&ref_"+b+" "+e.dump));else if(h==="[object Array]")u&&e.dump.length!==0?(e.noArrayIndent&&!c&&t>0?G1(e,t-1,e.dump,l):G1(e,t,e.dump,l),v&&(e.dump="&ref_"+b+e.dump)):(M6(e,t,e.dump),v&&(e.dump="&ref_"+b+" "+e.dump));else if(h==="[object String]")e.tag!=="?"&&D6(e,e.dump,t,o,d);else{if(h==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new Ht("unacceptable kind of an object to dump "+h)}e.tag!==null&&e.tag!=="?"&&(p=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?p="!"+p:p.slice(0,18)==="tag:yaml.org,2002:"?p="!!"+p.slice(18):p="!<"+p+">",e.dump=p+" "+e.dump)}return!0}function U6(e,t){var i=[],u=[],l,o;for(Oh(e,i,u),l=0,o=u.length;l<o;l+=1)t.duplicates.push(i[u[l]]);t.usedDuplicates=new Array(o)}function Oh(e,t,i){var u,l,o;if(e!==null&&typeof e=="object")if(l=t.indexOf(e),l!==-1)i.indexOf(l)===-1&&i.push(l);else if(t.push(e),Array.isArray(e))for(l=0,o=e.length;l<o;l+=1)Oh(e[l],t,i);else for(u=Object.keys(e),l=0,o=u.length;l<o;l+=1)Oh(e[u[l]],t,i)}function P6(e,t){t=t||{};var i=new _6(t);i.noRefs||U6(e,i);var u=e;return i.replacer&&(u=i.replacer.call({"":u},"",u)),hr(i,0,u,!0,!0)?i.dump+`
`:""}var H6=P6,z6={dump:H6};function fd(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var YT=kt,VT=iT,GT=lT,QT=dT,KT=mT,XT=sd,WT=DT.load,ZT=DT.loadAll,JT=z6.dump,$T=Ht,eE={binary:TT,float:hT,map:sT,null:oT,pairs:vT,set:AT,timestamp:bT,bool:cT,int:fT,merge:yT,omap:ET,seq:uT,str:aT},tE=fd("safeLoad","load"),nE=fd("safeLoadAll","loadAll"),rE=fd("safeDump","dump"),q6={Type:YT,Schema:VT,FAILSAFE_SCHEMA:GT,JSON_SCHEMA:QT,CORE_SCHEMA:KT,DEFAULT_SCHEMA:XT,load:WT,loadAll:ZT,dump:JT,YAMLException:$T,types:eE,safeLoad:tE,safeLoadAll:nE,safeDump:rE};const ah=Object.freeze(Object.defineProperty({__proto__:null,CORE_SCHEMA:KT,DEFAULT_SCHEMA:XT,FAILSAFE_SCHEMA:GT,JSON_SCHEMA:QT,Schema:VT,Type:YT,YAMLException:$T,default:q6,dump:JT,load:WT,loadAll:ZT,safeDump:rE,safeLoad:tE,safeLoadAll:nE,types:eE},Symbol.toStringTag,{value:"Module"})),j6="modulepreload",Y6=function(e){return"/cs-333/"+e},K1={},uh=function(t,i,u){let l=Promise.resolve();if(i&&i.length>0){let p=function(y){return Promise.all(y.map(b=>Promise.resolve(b).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};var c=p;document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),d=h?.nonce||h?.getAttribute("nonce");l=p(i.map(y=>{if(y=Y6(y),y in K1)return;K1[y]=!0;const b=y.endsWith(".css"),v=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${v}`))return;const E=document.createElement("link");if(E.rel=b?"stylesheet":j6,b||(E.as="script"),E.crossOrigin="",E.href=y,d&&E.setAttribute("nonce",d),document.head.appendChild(E),b)return new Promise((A,_)=>{E.addEventListener("load",A),E.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${y}`)))})}))}function o(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return l.then(h=>{for(const d of h||[])d.status==="rejected"&&o(d.reason);return t().catch(o)})};class V6{constructor(){this.isDevelopment=!1,this.compiledFiles=null,this.stats=null}initialize(t){if(!t||!t.compiledFiles){console.warn("⚠️ CompiledContentService: No compiled content provided, will use dynamic fetching only");return}this.compiledFiles=t.compiledFiles,this.stats=t.stats,console.log("📚 CompiledContentService initialized with:",this.stats),console.log("🔧 Development mode:",this.isDevelopment)}async getText(t){try{return this.isDevelopment?await this.fetchDynamically(t):await this.getCompiledText(t)}catch(i){console.error(`CompiledContentService: Error getting text for ${t}:`,i);try{return this.isDevelopment?(console.log("Development fetch failed, trying compiled content..."),await this.getCompiledText(t)):(console.log("Compiled content failed, trying dynamic fetch..."),await this.fetchDynamically(t))}catch(u){throw console.error(`CompiledContentService: Both methods failed for ${t}:`,u),new Error(`File not found: ${t}`)}}}async getCompiledText(t){if(!this.compiledFiles)throw new Error("CompiledContentService not initialized. Call initialize() with compiled content first.");const i=this.cleanPath(t);console.log(`CompiledContentService: Getting compiled text for path: ${i}`);const u=this.pathToKey(i),l=this.compiledFiles[u];if(!l)throw new Error(`File not found in compiled content: ${i}`);const o=l.module;return typeof o=="string"?o:JSON.stringify(o,null,2)}async fetchDynamically(t){const i=this.cleanPath(t);console.log(`CompiledContentService: Fetching dynamically: ${i}`);const u=`/textbook/${i}`,l=await fetch(u);if(!l.ok)throw new Error(`HTTP ${l.status}: Failed to fetch ${u}`);return await l.text()}async getYaml(t){try{if(this.isDevelopment){const h=await this.fetchDynamically(t);return(await uh(()=>Promise.resolve().then(()=>ah),[])).load(h)}if(!this.compiledFiles)throw new Error("CompiledContentService not initialized. Call initialize() with compiled content first.");const i=this.cleanPath(t);console.log(`CompiledContentService: Getting compiled YAML for path: ${i}`);const u=this.pathToKey(i),l=this.compiledFiles[u];if(!l)throw new Error(`File not found in compiled content: ${i}`);const o=l.module;return typeof o=="object"?o:(await uh(()=>Promise.resolve().then(()=>ah),void 0)).load(o)}catch(i){console.error(`CompiledContentService: Error getting YAML for ${t}:`,i);try{if(this.isDevelopment){console.log("Development YAML fetch failed, trying compiled content...");const u=this.cleanPath(t),l=this.pathToKey(u),o=this.compiledFiles?this.compiledFiles[l]:null;if(o&&typeof o.module=="object")return o.module}else{console.log("Compiled YAML failed, trying dynamic fetch...");const u=await this.fetchDynamically(t);return(await uh(()=>Promise.resolve().then(()=>ah),void 0)).load(u)}}catch(u){console.error(`CompiledContentService: Both YAML methods failed for ${t}:`,u)}throw new Error(`YAML file not found: ${t}`)}}async getTextFromMultiplePaths(t){for(const u of t)try{console.log(`CompiledContentService: Trying path: ${u}`);const l=await this.getText(u);if(l.trim().startsWith("<!doctype html>")||l.trim().startsWith("<html")){console.log(`CompiledContentService: Got HTML response for ${u}, trying next...`);continue}return console.log(`CompiledContentService: Successfully found content at: ${u}`),{text:l,path:u}}catch(l){console.log(`CompiledContentService: Path ${u} not found:`,l.message);continue}const i=`Failed to find compiled content at any of ${t.length} paths: ${t.join(", ")}`;throw console.error(i),new Error(i)}listFiles(t=null){if(!this.compiledFiles)return console.warn("CompiledContentService not initialized"),[];const i=Object.keys(this.compiledFiles);return t?i.filter(u=>{const l=this.compiledFiles[u];return l&&l.type===t}):i}getStats(){return this.stats||{yamlCount:0,markdownCount:0,totalCount:0}}cleanPath(t){let i=t.replace(/^.*\/textbook\//,"");return i=i.replace(/[?&]_cb=[^&]*/,"").replace(/[?&]v=[^&]*/,""),i=i.split("?")[0],i}pathToKey(t){return t}hasFile(t){try{const i=this.cleanPath(t),u=this.pathToKey(i);return this.compiledFiles&&this.compiledFiles.hasOwnProperty(u)}catch{return!1}}}const kn=new V6,G6=[{key:"answer_kindergarten",label:"🧸 Tell Me Like I'm 5"},{key:"answer_3rd_grade",label:"📚 A little bit harder please..."},{key:"answer_7th_grade",label:"🤔 Even harder!"},{key:"answer_high_school",label:"🎓 I want to impress people"},{key:"answer_undergraduate",label:"🧠 I want to go to grad school"}],X1=(e,t)=>{if(!e||!t||t.length===0)return e;const i=t.map(h=>({word:h.word,definition:h.definition,regex:new RegExp(`\\b${h.word.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}\\b`,"gi")}));i.sort((h,d)=>d.word.length-h.word.length);let u=e;const l=[];let o=0;return i.forEach(({word:h,definition:d,regex:p})=>{let y;for(;(y=p.exec(u))!==null;){const b=`__VOCAB_${o}__`;l.push({placeholder:b,word:y[0],definition:d,index:o}),u=u.substring(0,y.index)+b+u.substring(y.index+y[0].length),p.lastIndex=0,o++;break}p.lastIndex=0}),l.length===0?e:u.split(/(__VOCAB_\d+__)/).map((h,d)=>{const p=l.find(y=>y.placeholder===h);return p?O.jsx("span",{className:"vocab-word",title:p.definition,children:p.word},`vocab-${p.index}-${d}`):h})};function Q6({yamlPath:e,currentPath:t,concept_filter:i}){const[u,l]=P.useState([]),[o,c]=P.useState(!0),[h,d]=P.useState(null),[p,y]=P.useState({});if(P.useEffect(()=>{e&&(async()=>{try{c(!0),console.log("ExamQuestions: yamlPath =",e),console.log("ExamQuestions: currentPath =",t),console.log("ExamQuestions: concept_filter =",i);let A;if(e.startsWith("content/"))A=e,console.log("ExamQuestions: Using absolute path:",A);else{const F=t&&t.includes(".")?t.split("/").slice(0,-1).join("/"):t;A=F?`${F}/${e}`:e,console.log("ExamQuestions: Using relative path. directoryPath:",F,"fullPath:",A)}console.log("ExamQuestions: Loading concept map from path:",A);const _=await kn.getYaml(A),k=[];if(_?.concept_map)_.concept_map.forEach(F=>{F.concepts&&F.concepts.forEach(ee=>{if(console.log("ExamQuestions: Checking concept:",ee.name,"against filter:",i),i&&ee.name!==i){console.log("ExamQuestions: Skipping concept due to filter mismatch");return}console.log("ExamQuestions: Including concept:",ee.name),ee.exam_questions&&ee.exam_questions.forEach(ne=>{k.includes(ne)||k.push(ne)})})});else if(_?.questions&&_.questions[0]?.file)_.questions.forEach(F=>{k.includes(F.file)||k.push(F.file)});else if(_?.questions){l(_.questions);return}if(console.log("ExamQuestions: Total question files found:",k.length,k),k.length===0){l([]);return}const N=k.map(async F=>{let ee;if(e.startsWith("content/"))ee=`${e.substring(0,e.lastIndexOf("/"))}/${F}`;else{const G=t&&t.includes(".")?t.split("/").slice(0,-1).join("/"):t;ee=G?`${G}/${F}`:F}return console.log("ExamQuestions: Loading question file from path:",ee),await kn.getYaml(ee)}),L=await Promise.all(N);l(L)}catch(A){d(A.message)}finally{c(!1)}})()},[e,t]),o)return O.jsx("div",{children:"Loading questions..."});if(h)return O.jsxs("div",{children:["Error loading questions: ",h]});const b=(E,A)=>{const _=`${E}-${A}`;y(k=>({...k,[_]:!k[_]}))},v=E=>{const A=`${E}-videos`;y(_=>({..._,[A]:!_[A]}))};return O.jsx("div",{className:"exam-questions",children:u.map((E,A)=>O.jsxs("div",{className:"question-item",children:[O.jsx("h3",{children:E.question}),E.answer&&O.jsx("div",{className:"answer main-answer",children:O.jsx("p",{children:X1(E.answer,E.vocab_answer)})}),E.example_videos&&E.example_videos.length>0&&O.jsxs("div",{className:"example-videos-section",children:[O.jsxs("button",{className:"accordion-header videos-toggle",onClick:()=>v(E.id||A),"aria-expanded":p[`${E.id||A}-videos`]||!1,children:[O.jsxs("span",{className:"accordion-title",children:["📺 Example Videos",O.jsx("span",{className:"video-count-badge",children:E.example_videos.length})]}),O.jsx("span",{className:`accordion-icon ${p[`${E.id||A}-videos`]?"expanded":""}`,children:"▼"})]}),p[`${E.id||A}-videos`]&&O.jsx("div",{className:"accordion-content videos-content",children:E.example_videos.map((_,k)=>{const N=_.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)?.[1];return N?O.jsx("div",{className:"video-container",children:O.jsx("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${N}`,title:`Example video ${k+1}`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},k):null})})]}),O.jsx("div",{className:"answer-levels",children:G6.map(({key:_,label:k})=>{if(!E[_])return null;const N=E.id||A,L=`${N}-${_}`,F=p[L]||!1,ee=_.replace("answer_","vocab_"),ne=E[ee]||[];return O.jsxs("div",{className:"answer-accordion",children:[O.jsxs("button",{className:"accordion-header",onClick:()=>b(N,_),"aria-expanded":F,children:[O.jsx("span",{className:"accordion-title",children:k}),O.jsx("span",{className:`accordion-icon ${F?"expanded":""}`,children:"▼"})]}),F&&O.jsx("div",{className:"accordion-content",children:O.jsx("div",{className:"answer",children:O.jsx("p",{children:X1(E[_],ne)})})})]},_)})}),E.topics&&E.topics.length>0&&O.jsxs("div",{className:"topics",children:[O.jsx("strong",{children:"Topics:"})," ",E.topics.join(", ")]})]},E.id||A))})}function K6({yamlPath:e,currentPath:t}){console.log("VocabList component mounted with:",{yamlPath:e,currentPath:t});const[i,u]=P.useState({}),[l,o]=P.useState(!0),[c,h]=P.useState(null),[d,p]=P.useState({});P.useEffect(()=>{e&&(async()=>{try{o(!0);const A=t?t.split("/").slice(0,-1).join("/"):"",_=A?`${A}/${e}`:e,k=await kn.getYaml(_);if(k?.questions&&k.questions[0]?.file){const N=k.questions.map(async ee=>{const ne=A?`${A}/${ee.file}`:ee.file;return await kn.getYaml(ne)}),L=await Promise.all(N),F=y(L);u(F)}else{const N=k?.questions||[],L=y(N);u(L)}}catch(A){h(A.message)}finally{o(!1)}})()},[e,t]);const y=E=>{const A={},_=["vocab_answer","vocab_kindergarten","vocab_3rd_grade","vocab_7th_grade","vocab_high_school","vocab_undergraduate"],k={vocab_answer:"General",vocab_kindergarten:"Kindergarten",vocab_3rd_grade:"7th Grade",vocab_7th_grade:"High School",vocab_high_school:"Undergraduate",vocab_undergraduate:"Postgraduate"};return E.forEach((N,L)=>{_.forEach(F=>{const ee=N[F];ee&&Array.isArray(ee)&&(ee.length>0&&typeof ee[0]=="object"&&ee[0].word?ee.forEach(ne=>{ne.word&&ne.definition&&(A[ne.word]||(A[ne.word]=[]),A[ne.word].push({definition:ne.definition,level:k[F],questionId:N.id||L+1,context:F}))}):ee.forEach(ne=>{A[ne]||(A[ne]=[]),A[ne].push({definition:`[Definition needed for ${ne}]`,level:k[F],questionId:N.id||L+1,context:F})}))})}),A},b=E=>{p(A=>({...A,[E]:!A[E]}))};if(l)return O.jsx("div",{className:"vocab-list loading",children:"Loading vocabulary..."});if(c)return O.jsxs("div",{className:"vocab-list error",children:["Error loading vocabulary: ",c]});const v=Object.keys(i).sort((E,A)=>E.toLowerCase().localeCompare(A.toLowerCase()));return O.jsxs("div",{className:"vocab-list",children:[O.jsx("h2",{children:"Vocabulary"}),O.jsxs("div",{className:"vocab-count",children:[v.length," terms found"]}),O.jsx("div",{className:"vocab-items",children:v.map(E=>{const A=i[E],_=d[E]||!1,k=A.length>1;return O.jsxs("div",{className:"vocab-item",children:[O.jsxs("button",{className:"vocab-header",onClick:()=>b(E),"aria-expanded":_,children:[O.jsx("span",{className:"vocab-word",children:E}),k&&O.jsxs("span",{className:"definition-count",children:["(",A.length," definitions)"]}),O.jsx("span",{className:`vocab-icon ${_?"expanded":""}`,children:"▼"})]}),_&&O.jsx("div",{className:"vocab-content",children:A.map((N,L)=>O.jsxs("div",{className:"vocab-definition",children:[O.jsx("div",{className:"definition-text",children:N.definition}),O.jsxs("div",{className:"definition-meta",children:[O.jsx("span",{className:"definition-level",children:N.level}),O.jsxs("span",{className:"definition-question",children:["Question ",N.questionId]})]})]},L))})]},E)})})]})}function X6({yamlPath:e,currentPath:t}){console.log("ConceptMap: Component mounted with:",{yamlPath:e,currentPath:t});const[i,u]=P.useState([]),[l,o]=P.useState({}),[c,h]=P.useState(!0),[d,p]=P.useState(null),[y,b]=P.useState({}),[v,E]=P.useState({});P.useEffect(()=>{console.log("ConceptMap: useEffect triggered with yamlPath:",e),(async()=>{try{console.log("ConceptMap: Starting fetchConceptMap..."),h(!0);let L;if(e.startsWith("content/"))L=e,console.log("ConceptMap: Using absolute path:",L);else{const de=t&&t.includes(".")?t.split("/").slice(0,-1).join("/"):t;L=de?`${de}/${e}`:e,console.log("ConceptMap: Using relative path. directoryPath:",de,"fullPath:",L)}console.log("ConceptMap: Loading from path:",L);const F=await kn.getYaml(L);if(console.log("ConceptMap: Loaded concept map data:",F),console.log("ConceptMap: Type of conceptMapData:",typeof F),console.log("ConceptMap: Keys in conceptMapData:",Object.keys(F||{})),console.log("ConceptMap: Has concept_map property:",!!F?.concept_map),!F?.concept_map)throw console.error("ConceptMap: Missing concept_map array. Full data:",F),new Error("Invalid concept map format: missing concept_map array");u(F.concept_map);const ee={};F.concept_map.forEach((de,Y)=>{ee[Y]=!0}),b(ee);const ne=new Set;F.concept_map.forEach(de=>{de.concepts?.forEach(Y=>{Y.exam_questions?.forEach(oe=>{ne.add(oe)})})});const G=Array.from(ne).map(async de=>{let Y;if(e.startsWith("content/"))Y=`${e.substring(0,e.lastIndexOf("/"))}/${de}`;else{const oe=t&&t.includes(".")?t.split("/").slice(0,-1).join("/"):t;Y=oe?`${oe}/${de}`:de}try{console.log("ConceptMap: Loading question file from path:",Y);const oe=await kn.getYaml(Y);return console.log("ConceptMap: Loaded question data for:",de,oe),[de,oe]}catch(oe){return console.warn(`ConceptMap: Error loading question file ${de}:`,oe),[de,null]}}),le=await Promise.all(G),ye=Object.fromEntries(le);console.log("Loaded question details:",ye),o(ye)}catch(L){console.error("Error fetching concept map:",L),p(L.message)}finally{h(!1)}})()},[e,t]);const A=N=>{b(L=>({...L,[N]:!L[N]}))},_=(N,L)=>{const F=`${N}-${L}`;E(ee=>({...ee,[F]:!ee[F]}))},k=N=>{const L=l[N];return L&&L.question||N};return c?O.jsx("div",{className:"concept-map-loading",children:"Loading concept map..."}):d?O.jsxs("div",{className:"concept-map-error",children:["Error loading concept map: ",d]}):i.length?O.jsx("div",{className:"concept-map",children:O.jsx("div",{className:"concept-categories",children:i.map((N,L)=>O.jsxs("div",{className:"concept-category",children:[O.jsxs("button",{className:`category-header ${y[L]?"expanded":""}`,onClick:()=>A(L),children:[O.jsx("span",{className:"category-title",children:N.category}),O.jsx("span",{className:"expand-icon",children:y[L]?"−":"+"})]}),y[L]&&O.jsx("div",{className:"category-content",children:N.concepts?.map((F,ee)=>O.jsx("div",{className:"concept-item",children:O.jsxs("div",{className:"concept-content",children:[O.jsxs("div",{className:"concept-header",children:[O.jsx("span",{className:"concept-name",children:F.name}),F.description&&O.jsxs("span",{className:"concept-description",children:["(",F.description,")"]})]}),F.exam_questions?.length>0&&O.jsxs("div",{className:"concept-questions",children:[O.jsxs("button",{className:`questions-header ${v[`${L}-${ee}`]?"expanded":""}`,onClick:()=>_(L,ee),children:[O.jsxs("span",{children:[F.exam_questions.length," question",F.exam_questions.length!==1?"s":""]}),O.jsx("span",{className:"expand-icon",children:v[`${L}-${ee}`]?"−":"+"})]}),v[`${L}-${ee}`]&&O.jsx("ul",{className:"questions-list",children:F.exam_questions.map((ne,G)=>O.jsx("li",{className:"question-item",children:O.jsx("div",{className:"question-header",children:O.jsx("span",{className:"question-title",children:k(ne)})})},G))})]})]})},ee))})]},L))})}):O.jsx("div",{className:"concept-map-empty",children:"No concept map data available."})}function iE({url:e,title:t,width:i=560,height:u=315,timestamps:l=[]}){const o=P.useRef(null),[c,h]=P.useState(!1),p=(E=>{const A=/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/,_=E.match(A);return _?_[1]:null})(e);if(!p)return O.jsx("div",{className:"youtube-error",children:O.jsxs("p",{children:["Invalid YouTube URL: ",e]})});const y=E=>{const A=E.split(":").map(_=>parseInt(_,10));return A.length===2?A[0]*60+A[1]:A.length===3?A[0]*3600+A[1]*60+A[2]:0},b=E=>{if(!c){console.warn("YouTube player not ready yet");return}const A=y(E);if(o.current&&o.current.contentWindow){const _={event:"command",func:"seekTo",args:[A,!0]};o.current.contentWindow.postMessage(JSON.stringify(_),"https://www.youtube.com")}};P.useEffect(()=>{const E=o.current;if(E){const A=()=>{E.contentWindow.postMessage('{"event":"listening","id":"ytplayer"}',"https://www.youtube.com"),h(!0)};return E.addEventListener("load",A),()=>E.removeEventListener("load",A)}},[]);const v=`https://www.youtube.com/embed/${p}?enablejsapi=1&origin=${window.location.origin}`;return O.jsxs("div",{className:"youtube-container",children:[O.jsx("iframe",{ref:o,width:i,height:u,src:v,title:t||"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0}),t&&O.jsx("p",{className:"youtube-caption",children:t}),l&&l.length>0&&Array.isArray(l)&&O.jsxs("div",{className:"youtube-timestamps",children:[O.jsx("h4",{children:"Jump to:"}),O.jsx("div",{className:"timestamp-list",children:l.map((E,A)=>O.jsx("button",{className:"timestamp-button",onClick:()=>b(E),title:`Jump to ${E}`,children:O.jsx("span",{className:"timestamp-time",children:E})},A))})]})]})}function sh({href:e,children:t,currentPath:i,...u}){const l=Ih();if(!e)return O.jsx("a",{...u,children:t});if(e.startsWith("http")||e.startsWith("mailto")||e.startsWith("#"))return O.jsx("a",{href:e,...u,target:"_blank",rel:"noopener noreferrer",children:t});const o=e.startsWith("/textbook")||e.startsWith("/wiki"),c=!e.startsWith("/")&&!e.includes("://");if(o||c){let h;if(o)h=e.startsWith("/wiki")?e.replace("/wiki","/textbook"):e;else if(c){const d=i==="index"?"":i;h=`${d?`/textbook/${d}`:"/textbook"}/${e}`}return O.jsx("a",{...u,href:h,onClick:d=>{d.preventDefault(),l(h)},style:{cursor:"pointer"},children:t})}return O.jsx("a",{href:e,...u,target:"_blank",rel:"noopener noreferrer",children:t})}function W6(e,t){console.log("renderContentWithComponents called with content:",e.substring(0,200)+"..."),console.log("textbookPath:",t);const i=/\{\{(ExamQuestions|VocabList|ConceptMap|YouTube):([^}\s]+)([^}]*)\}\}/g,u=[];let l=0,o;for(;(o=i.exec(e))!==null;){const c=o[1],h=o[2],d=o[3]?o[3].trim():"";console.log(`Found ${c} marker:`,o[0],"File:",h,"Props:",d);const y=(b=>{const v={};if(!b)return v;const E=/(\w+):\s*(\[[^\]]*\]|"[^"]*"|'[^']*'|\S+)/g;let A;for(;(A=E.exec(b))!==null;){const _=A[1];let k=A[2];if(k.startsWith("[")&&k.endsWith("]"))try{v[_]=JSON.parse(k)}catch(N){console.error(`Failed to parse array for ${_}:`,k,N),v[_]=k}else if(k.startsWith('"')&&k.endsWith('"')||k.startsWith("'")&&k.endsWith("'"))v[_]=k.slice(1,-1);else try{v[_]=JSON.parse(k)}catch{v[_]=k}}return v})(d);if(o.index>l){const b=e.slice(l,o.index);u.push(O.jsx(mi,{remarkPlugins:[di],rehypePlugins:[th],components:{a:v=>O.jsx(sh,{...v,currentPath:t})},children:b},`md-${u.length}`))}c==="ExamQuestions"?u.push(O.jsx(Q6,{yamlPath:h,currentPath:t,...y},`eq-${u.length}`)):c==="VocabList"?u.push(O.jsx(K6,{yamlPath:h,currentPath:t,...y},`vl-${u.length}`)):c==="ConceptMap"?(console.log("Creating ConceptMap component with props:",{yamlPath:h,currentPath:t,...y}),u.push(O.jsx(X6,{yamlPath:h,currentPath:t,...y},`cm-${u.length}`))):c==="YouTube"&&u.push(O.jsx(iE,{url:h,...y},`yt-${u.length}`)),l=o.index+o[0].length}if(l<e.length){const c=e.slice(l);u.push(O.jsx(mi,{remarkPlugins:[di],rehypePlugins:[th],components:{a:h=>O.jsx(sh,{...h,currentPath:t})},children:c},`md-${u.length}`))}return console.log("renderContentWithComponents: parts.length =",u.length),u.length>0?u:[O.jsx(mi,{remarkPlugins:[di],rehypePlugins:[th],components:{a:c=>O.jsx(sh,{...c,currentPath:t})},children:e},"default")]}function Z6(){const{"*":e}=hA(),[t,i]=P.useState(""),[u,l]=P.useState(!0),[o,c]=P.useState(null),h=e||"index";return P.useEffect(()=>{(async()=>{l(!0),c(null);try{let p;if(h==="index")p=await kn.getText("index.md");else{const y=[`${h}.md`,`${h}/index.md`];p=(await kn.getTextFromMultiplePaths(y)).text}i(p)}catch(p){c(p.message)}finally{l(!1)}})()},[h]),u?O.jsx("div",{className:"textbook-page loading",children:O.jsx("div",{className:"textbook-header",children:O.jsx("h1",{children:"Loading..."})})}):o?O.jsxs("div",{className:"textbook-page error",children:[O.jsx("div",{className:"textbook-header",children:O.jsx("h1",{children:"Page Not Found"})}),O.jsxs("div",{className:"textbook-content",children:[O.jsx("p",{children:"The requested textbook page could not be found."}),O.jsxs("p",{children:[O.jsx("strong",{children:"Path:"})," ",h]}),O.jsxs("p",{children:[O.jsx("strong",{children:"Error:"})," ",o]})]})]}):O.jsxs("div",{className:"textbook-page",children:[O.jsx("div",{className:"textbook-header",children:O.jsxs("div",{className:"textbook-breadcrumb",children:[O.jsx("span",{children:"Textbook"}),h!=="index"&&O.jsxs("span",{children:[" / ",h.replace(/\//g," / ")]})]})}),O.jsx("div",{className:"textbook-content",children:W6(t,h)})]})}function J6({questions:e,onStartExam:t,courseTitle:i="Course Exam"}){const[u,l]=P.useState(100),[o,c]=P.useState(!0),[h,d]=P.useState(!0),p=[...new Set(e.map(E=>E.chapter))].sort((E,A)=>E-A),y=()=>{const E=[];p.forEach(_=>{const k=e.filter(F=>F.chapter===_),N=Math.ceil(k.length*(u/100)),L=o?k.slice(0,N):[...k].sort(()=>Math.random()-.5).slice(0,N);E.push(...L)});const A=o?E.sort((_,k)=>_.chapter-k.chapter||_.order-k.order):E.sort(()=>Math.random()-.5);t({questions:A,settings:{showAnswerToggle:h}})},b=E=>e.filter(A=>A.chapter===E).length,v=p.reduce((E,A)=>{const _=b(A);return E+Math.ceil(_*(u/100))},0);return O.jsx("div",{className:"exam-dashboard-simple",children:O.jsxs("div",{className:"exam-overview",children:[O.jsx("h2",{children:i}),O.jsxs("div",{className:"exam-controls",children:[O.jsxs("div",{className:"control-group",children:[O.jsxs("label",{htmlFor:"percentage-slider",children:["Questions per Chapter: ",O.jsxs("strong",{children:[u,"%"]})]}),O.jsx("input",{id:"percentage-slider",type:"range",min:"10",max:"100",step:"10",value:u,onChange:E=>l(parseInt(E.target.value)),className:"percentage-slider"}),O.jsxs("div",{className:"slider-labels",children:[O.jsx("span",{children:"10%"}),O.jsx("span",{children:"50%"}),O.jsx("span",{children:"100%"})]})]}),O.jsx("div",{className:"control-group",children:O.jsxs("label",{className:"toggle-container",children:[O.jsx("input",{type:"checkbox",checked:o,onChange:E=>c(E.target.checked)}),O.jsx("span",{className:"toggle-text",children:"Sorted by Chapter"}),O.jsx("div",{className:"switch"})]})}),O.jsx("div",{className:"control-group",children:O.jsxs("label",{className:"toggle-container",children:[O.jsx("input",{type:"checkbox",checked:h,onChange:E=>d(E.target.checked)}),O.jsx("span",{className:"toggle-text",children:"Show Answer Button"}),O.jsx("div",{className:"switch"})]})})]}),O.jsxs("div",{className:"exam-details",children:[O.jsxs("div",{className:"detail-item",children:[O.jsx("strong",{children:v}),O.jsx("span",{children:"Questions"})]}),O.jsxs("div",{className:"detail-item",children:[O.jsx("strong",{children:p.length}),O.jsx("span",{children:"Chapters"})]}),O.jsxs("div",{className:"detail-item",children:[O.jsxs("strong",{children:[u,"%"]}),O.jsx("span",{children:"From Each"})]})]}),O.jsxs("div",{className:"chapter-preview",children:[O.jsx("h3",{children:"Chapter Breakdown"}),O.jsx("div",{className:"chapter-grid",children:p.map(E=>{const A=b(E),_=Math.ceil(A*(u/100));return O.jsxs("div",{className:"chapter-preview-item",children:[O.jsxs("span",{className:"chapter-number",children:["Ch. ",E]}),O.jsxs("span",{className:"question-count",children:[_," / ",A]})]},E)})})]}),O.jsx("button",{className:"generate-exam-btn",onClick:y,disabled:e.length===0,children:"Generate Exam"})]})})}const aE=P.forwardRef(({onChange:e,initialData:t,width:i=800,height:u=400},l)=>{const o=P.useRef(null),[c,h]=P.useState(!1),[d,p]=P.useState(null);P.useEffect(()=>{const A=o.current;if(!A)return;const _=A.getContext("2d");if(_.lineWidth=3,_.lineCap="round",_.lineJoin="round",_.strokeStyle="#000000",p(_),_.clearRect(0,0,A.width,A.height),t){const k=new Image;k.onload=()=>{_.drawImage(k,0,0)},k.src=t}},[t]);const y=A=>{if(!d)return;const _=o.current.getBoundingClientRect(),k=A.clientX-_.left,N=A.clientY-_.top;d.beginPath(),d.moveTo(k,N),h(!0)},b=A=>{if(!c||!d)return;const _=o.current.getBoundingClientRect(),k=A.clientX-_.left,N=A.clientY-_.top;d.lineTo(k,N),d.stroke()},v=()=>{if(c){h(!1),d.closePath();const A=o.current.toDataURL();e&&e(A)}},E=()=>{if(d&&o.current){d.clearRect(0,0,o.current.width,o.current.height);const A=o.current.toDataURL();e&&e(A)}};return P.useImperativeHandle(l,()=>({clear:E,getDataURL:()=>o.current?.toDataURL()||""})),O.jsx("canvas",{ref:o,width:i,height:u,onMouseDown:y,onMouseMove:b,onMouseUp:v,onMouseLeave:v,style:{border:"1px solid #ddd",borderRadius:"4px",cursor:"crosshair",touchAction:"none",backgroundColor:"#ffffff"}})});aE.displayName="DrawingCanvas";function $6({questions:e,settings:t,onEndExam:i}){const[u,l]=P.useState(0),[o,c]=P.useState({}),[h,d]=P.useState(!1),[p,y]=P.useState(!1),[b,v]=P.useState(0),[E,A]=P.useState(Date.now()),[_,k]=P.useState("canvas"),N=P.useRef(null);P.useEffect(()=>{const me=setInterval(()=>{v(ae=>ae+1)},1e3);return()=>clearInterval(me)},[]),P.useEffect(()=>{A(Date.now())},[u]),P.useEffect(()=>{const me=ae=>{ae.target.tagName==="TEXTAREA"||ae.target.tagName==="INPUT"||(ae.key==="ArrowRight"?(ae.preventDefault(),ye()):ae.key==="ArrowLeft"&&(ae.preventDefault(),de()))};return window.addEventListener("keydown",me),()=>window.removeEventListener("keydown",me)},[u,e.length]);const L=e[u],F=u===e.length-1,ee=o.hasOwnProperty(L.id),ne=(me,ae=null)=>{c(se=>({...se,[L.id]:{answer:me,canvasData:ae,timeSpent:Date.now()-E}}))},G=me=>{const ae=o[L.id]?.answer||"";ne(ae,me)},le=()=>{N.current&&N.current.clear()},ye=()=>{F||l(me=>me+1)},de=()=>{u>0&&l(me=>me-1)},Y=()=>{d(!0)},oe=()=>{const me=Object.keys(o).length,ae=e.length;return{answered:me,total:ae,percentage:Math.round(me/ae*100)}},fe=me=>{const ae=Math.floor(me/60),se=me%60;return`${ae}:${se.toString().padStart(2,"0")}`};if(h){const me=oe();return O.jsxs("div",{className:"exam-results",children:[O.jsx("h2",{children:"Exam Complete!"}),O.jsxs("div",{className:"score-summary",children:[O.jsxs("div",{className:"score-circle",children:[O.jsxs("span",{className:"score-percentage",children:[me.percentage,"%"]}),O.jsx("span",{className:"score-label",children:"Completed"})]}),O.jsxs("div",{className:"score-details",children:[O.jsxs("p",{children:["Questions Answered: ",me.answered," / ",me.total]}),O.jsxs("p",{children:["Time Spent: ",fe(b)]}),O.jsxs("p",{children:["Average per Question: ",fe(Math.round(b/e.length))]})]})]}),O.jsxs("div",{className:"question-review",children:[O.jsx("h3",{children:"Your Responses"}),e.map((ae,se)=>{const z=o[ae.id];return O.jsxs("div",{className:"question-result",children:[O.jsx("div",{className:"question-header",children:O.jsxs("h4",{children:["Question ",se+1," (Chapter ",ae.chapter,")"]})}),O.jsx("div",{className:"question-text",children:O.jsx(mi,{remarkPlugins:[di],children:ae.question})}),O.jsxs("div",{className:"answer-comparison",children:[O.jsxs("div",{className:"user-answer",children:[O.jsx("strong",{children:"Your Answer:"}),z?.canvasData&&O.jsx("div",{className:"canvas-preview",children:O.jsx("img",{src:z.canvasData,alt:"Canvas drawing",style:{maxWidth:"100%",border:"1px solid #ddd",borderRadius:"4px"}})}),O.jsx("p",{children:z?z.answer||(z.canvasData?"(Canvas drawing above)":""):"Not answered"})]}),O.jsxs("div",{className:"correct-answer",children:[O.jsx("strong",{children:"Model Answer:"}),O.jsx(mi,{remarkPlugins:[di],children:ae.answer})]})]}),z&&O.jsxs("p",{className:"time-spent",children:["Time spent: ",fe(Math.round(z.timeSpent/1e3))]})]},ae.id)})]}),O.jsx("button",{className:"return-dashboard-btn",onClick:i,children:"Return to Dashboard"})]})}return O.jsxs("div",{className:"exam-interface",children:[O.jsxs("div",{className:"exam-header",children:[O.jsxs("div",{className:"progress-info",children:[O.jsxs("span",{children:["Question ",u+1," of ",e.length]}),O.jsx("div",{className:"progress-bar",children:O.jsx("div",{className:"progress-fill",style:{width:`${(u+1)/e.length*100}%`}})})]}),O.jsx("div",{className:"time-info",children:O.jsxs("span",{children:["Time: ",fe(b)]})})]}),O.jsxs("div",{className:"question-section",children:[O.jsxs("div",{className:"question-meta",children:[O.jsxs("span",{className:"chapter-tag",children:["Chapter ",L.chapter]}),t?.showAnswerToggle&&O.jsx("button",{onClick:()=>y(!p),className:`show-answer-toggle ${p?"active":""}`,children:p?"Hide Answer":"Show Answer"})]}),O.jsx("div",{className:"question-text",children:O.jsx(mi,{remarkPlugins:[di],children:L.question})}),t?.showAnswerToggle&&p&&O.jsxs("div",{className:"answer-reveal",children:[O.jsx("strong",{children:"Answer:"}),O.jsx(mi,{remarkPlugins:[di],children:L.answer}),L.example_videos&&L.example_videos.length>0&&O.jsxs("div",{className:"answer-videos",children:[O.jsx("strong",{children:"Example Videos:"}),L.example_videos.map((me,ae)=>O.jsx(iE,{url:me},ae))]})]}),O.jsxs("div",{className:"answer-section",children:[O.jsxs("div",{className:"input-mode-toggle",children:[O.jsx("button",{className:`mode-btn ${_==="canvas"?"active":""}`,onClick:()=>k("canvas"),children:"Canvas"}),O.jsx("button",{className:`mode-btn ${_==="text"?"active":""}`,onClick:()=>k("text"),children:"Text"})]}),_==="canvas"?O.jsxs("div",{className:"canvas-container",children:[O.jsx("div",{className:"canvas-controls",children:O.jsx("button",{onClick:le,className:"canvas-btn",children:"✕ Clear"})}),O.jsx(aE,{ref:N,onChange:G,initialData:o[L.id]?.canvasData,width:800,height:400})]}):O.jsx("textarea",{placeholder:"Your notes can go here...",value:o[L.id]?.answer||"",onChange:me=>ne(me.target.value,o[L.id]?.canvasData),rows:"6",className:"answer-input"})]})]}),O.jsxs("div",{className:"navigation-section",children:[O.jsxs("div",{className:"nav-buttons",children:[O.jsx("button",{onClick:de,disabled:u===0,className:"nav-btn prev-btn",children:"← Previous"}),F?O.jsx("button",{onClick:Y,className:"submit-btn",disabled:Object.keys(o).length===0,children:"Submit Exam"}):O.jsx("button",{onClick:ye,className:"nav-btn next-btn",children:"Next →"})]}),O.jsx("div",{className:"question-status",children:O.jsxs("p",{children:[ee?"✓ Answered":"○ Not answered",ee&&` (${o[L.id].answer.length} characters)`]})})]}),O.jsxs("div",{className:"exam-overview",children:[O.jsx("h3",{children:"Question Overview"}),O.jsx("div",{className:"question-grid",children:e.map((me,ae)=>O.jsx("button",{className:`question-nav-item ${ae===u?"current":""} ${o[e[ae].id]?"answered":"unanswered"}`,onClick:()=>l(ae),children:ae+1},ae))})]})]})}const e4=["content/overviews/00-zero-computers/concept-map.yml","content/overviews/01-one-computer/concept-map.yml","content/overviews/02-a-few-computers/concept-map.yml","content/overviews/03-a-lot-of-computers/concept-map.yml"],t4=e=>{let t=e.match(/chapter-(\d+)/);return t?parseInt(t[1]):(t=e.match(/(\d+)-/),t?parseInt(t[1]):0)},n4=e=>{let t=e.match(/chapter-(\d+)/);return t?`Chapter ${parseInt(t[1])}`:(t=e.match(/\d+-(.*?)\/concept-map\.yml$/),t?t[1].replace(/-/g," ").replace(/\b\w/g,i=>i.toUpperCase()):"Unknown Chapter")},r4=async(e=e4)=>{const t=[];for(const i of e)try{console.log("Loading concept map:",i);const u=await kn.getYaml(i);if(!u?.concept_map){console.warn(`Invalid concept map format: ${i}`);continue}const l=[];let o=0;u.concept_map.forEach(p=>{p.concepts&&p.concepts.forEach(y=>{y.exam_questions&&y.exam_questions.forEach(b=>{l.find(v=>v.file===b)||l.push({file:b,order:o++})})})});const c=i.substring(0,i.lastIndexOf("/")),h=t4(i),d=n4(i);for(const{file:p,order:y}of l)try{const b=`${c}/${p}`,E={...await kn.getYaml(b),chapter:h,chapterTitle:d,id:`ch${h}-${p.replace(".yml","")}`,conceptMapPath:i,questionFile:p,order:y};t.push(E)}catch(b){console.error(`Error loading question file ${p}:`,b)}}catch(u){console.error(`Error loading concept map ${i}:`,u)}return t.sort((i,u)=>i.chapter!==u.chapter?i.chapter-u.chapter:i.order-u.order),console.log(`Loaded ${t.length} questions from ${e.length} concept maps`),t},i4={"content/chapter-01/concept-map.yml":{type:"yaml",module:{concept_map:[{category:"Arrays, Lists, and a Taste of Complexity Theory",concepts:[{name:"Big picture",description:"Two questions to help organize the content of this book/course.",exam_questions:["questions/data-structure-inventory-datums-to-graphs.yml","questions/algorithm-inventory-search-to-np.yml"]},{name:"Array/List",description:"Arrays vs Lists and the algorithms that operate on them.",exam_questions:["questions/difference-between-array-and-list.yml","questions/implement-list.yml","questions/search-array-vs-list.yml","questions/insertion-deletion-update-array-vs-list.yml","questions/swapping-array-vs-list.yml","questions/accumulator-pattern.yml"]},{name:"Basic Sorting Algorithms",description:"Insertion Sort and Selection Sort algorithms, their implementations, and analyses.",exam_questions:["questions/insertion-sort-implementation-and-analysis.yml","questions/selection-sort-implementation-and-analysis.yml","questions/array-or-list-for-insertion-vs-selection-sort.yml","questions/are-selection-and-insertion-sort-good.yml"]}]}]}},"content/chapter-01/questions/accumulator-pattern.yml":{type:"yaml",module:{id:"ch1-accumulator-transformation-patterns",type:"short-answer",chapter:1,question:`Explain the following common iteration patterns with Python examples:

(a) The Accumulator Pattern

(b) The Transformation (Map) Pattern

(c) Explain the key difference between these two patterns.
`,answer:`(a) **Accumulator Pattern**: Builds up a single result by iterating through a collection. Example:
\`\`\`python
# Sum all numbers in a list
def sum_list(numbers):
    total = 0  # accumulator
    for num in numbers:
        total += num
    return total
\`\`\`
The accumulator (total) starts with an initial value and is updated in each iteration, finally returning a single aggregated result.

(b) **Transformation (Map) Pattern**: Creates a new collection by applying a transformation to each element. Example:
\`\`\`python
# Square all numbers in a list
def square_list(numbers):
    result = []  # new collection
    for num in numbers:
        result.append(num ** 2)
    return result
\`\`\`
Each element is transformed and added to a new collection, maintaining a one-to-one correspondence between input and output.

(c) **Key Difference**: The accumulator pattern reduces a collection to a single value (e.g., sum, product, max), while the transformation pattern produces a new collection of the same size with each element transformed. Accumulator combines elements; transformation applies a function to each element independently.
`,topics:["Iteration Patterns","Accumulator","Map/Transform","Algorithm Design"]}},"content/chapter-01/questions/algorithm-inventory-search-to-np.yml":{type:"yaml",module:{id:2,question:"List the major algorithms covered in this course, from search to NP-complete problems.",answer:"TODO: Add answer",topics:["algorithms","inventory"],type:"conceptual",points:3,difficulty:"medium",learning_objectives:[]}},"content/chapter-01/questions/are-selection-and-insertion-sort-good.yml":{type:"yaml",module:{id:15,question:"Are selection sort and insertion sort good sorting algorithms? Why or why not?",answer:"TODO: Add answer",topics:["sorting","algorithm evaluation"],type:"conceptual",points:3,difficulty:"medium",learning_objectives:[]}},"content/chapter-01/questions/array-or-list-for-insertion-vs-selection-sort.yml":{type:"yaml",module:{id:14,question:"Should you use an array or linked list for insertion sort vs selection sort? Explain why.",answer:"TODO: Add answer",topics:["sorting","data structures","efficiency"],type:"conceptual",points:3,difficulty:"medium",learning_objectives:[]}},"content/chapter-01/questions/data-structure-inventory-datums-to-graphs.yml":{type:"yaml",module:{id:1,question:"List the major data structures covered in this course, from simplest (datums) to most complex (graphs).",answer:"TODO: Add answer",topics:["data structures","inventory"],type:"conceptual",points:3,difficulty:"medium",learning_objectives:[]}},"content/chapter-01/questions/difference-between-array-and-list.yml":{type:"yaml",module:{id:3,question:"What are the key differences between arrays and linked lists?",answer:"TODO: Add answer",topics:["arrays","linked lists"],type:"conceptual",points:3,difficulty:"medium",learning_objectives:[]}},"content/chapter-01/questions/implement-list.yml":{type:"yaml",module:{id:6,question:"Implement a linked list with basic operations.",answer:"TODO: Add answer",topics:["linked lists","implementation"],type:"problem_solving",points:5,difficulty:"medium",learning_objectives:[]}},"content/chapter-01/questions/insertion-deletion-update-array-vs-list.yml":{type:"yaml",module:{id:5,question:"Compare insertion, deletion, and update operations in arrays vs linked lists.",answer:"TODO: Add answer",topics:["arrays","linked lists","operations"],type:"conceptual",points:3,difficulty:"medium",learning_objectives:[]}},"content/chapter-01/questions/insertion-sort-implementation-and-analysis.yml":{type:"yaml",module:{id:11,question:"Implement insertion sort and analyze its time complexity.",answer:"TODO: Add answer",topics:["sorting","insertion sort","analysis"],type:"problem_solving",points:5,difficulty:"medium",learning_objectives:[]}},"content/chapter-01/questions/search-array-vs-list.yml":{type:"yaml",module:{id:4,question:"Compare searching in arrays vs linked lists.",answer:"TODO: Add answer",topics:["arrays","linked lists","search"],type:"conceptual",points:3,difficulty:"medium",learning_objectives:[]}},"content/chapter-01/questions/selection-sort-implementation-and-analysis.yml":{type:"yaml",module:{id:12,question:"Implement selection sort and analyze its time complexity.",answer:"TODO: Add answer",topics:["sorting","selection sort","analysis"],type:"problem_solving",points:5,difficulty:"medium",learning_objectives:[]}},"content/chapter-01/questions/swapping-array-vs-list.yml":{type:"yaml",module:{id:7,question:"Compare swapping elements in arrays vs linked lists.",answer:"TODO: Add answer",topics:["arrays","linked lists","swapping"],type:"conceptual",points:3,difficulty:"medium",learning_objectives:[]}},"content/chapter-02/concept-map.yml":{type:"yaml",module:{concept_map:[{category:"Mathematics of Algorithm Complexity",concepts:[{name:"Big-O Notation",description:"Mathematics of algorithm analysis",exam_questions:["questions/asymptotic-upper-bounds.yml","questions/big-o-definition.yml","questions/function-classes-upper-bounds.yml","questions/big-o-omega-theta.yml","questions/nested-loop-analysis.yml","questions/rank-algorithms.yml"]}]}]}},"content/chapter-02/questions/asymptotic-upper-bounds.yml":{type:"yaml",module:{id:16,question:"Define asymptotic upper bounds and provide examples.",answer:"TODO: Add answer",topics:["big-o","asymptotic analysis"],type:"conceptual",points:3,difficulty:"medium",learning_objectives:[]}},"content/chapter-02/questions/big-o-definition.yml":{type:"yaml",module:{id:"ch1-big-o-definition",type:"short-answer",chapter:1,question:"What is Big-O notation and why is it important in algorithm analysis?",answer:"Big-O notation is a mathematical notation used to describe the upper bound of an algorithm's time or space complexity in terms of input size. It's important because it allows us to compare algorithm efficiency independent of hardware, predict scalability, and make informed decisions about which algorithms to use for different problem sizes.",answer_kindergarten:"Big-O is like counting how many steps it takes to do something. If you have more toys to sort, it takes more time. Big-O helps us figure out how much longer things take when we have more stuff to work with.",answer_3rd_grade:"Big-O notation is a way to measure how fast or slow a computer program runs. It tells us if a program will still work well when we give it lots of data to handle. For example, some programs get really slow with more data, while others stay pretty fast.",answer_7th_grade:"Big-O notation describes how the running time or memory usage of an algorithm grows as the input size increases. It helps programmers choose the best algorithm by showing which ones will be efficient for large amounts of data. Common complexities include O(1) for constant time, O(n) for linear time, and O(n²) for quadratic time.",answer_high_school:"Big-O notation provides an asymptotic upper bound on algorithm complexity, describing worst-case performance as input size approaches infinity. It abstracts away constant factors and lower-order terms, focusing on the dominant growth rate. This mathematical framework enables objective comparison of algorithms and helps predict scalability issues before implementation.",answer_undergraduate:"Big-O notation is a formal mathematical construct from asymptotic analysis that characterizes functions according to their growth rates. In computational complexity theory, it provides a tight upper bound on resource consumption (time or space) as a function of input size n. The notation facilitates complexity class categorization (P, NP, etc.) and enables rigorous algorithm analysis through recurrence relations and amortized analysis techniques.",topics:["Algorithm Analysis","Computational Complexity","Performance"],vocab_answer:[{word:"algorithm",definition:"A step-by-step procedure for solving a problem or accomplishing a task"},{word:"complexity",definition:"A measure of the resources (time or space) required by an algorithm"},{word:"scalability",definition:"The ability of a system to handle growing amounts of work efficiently"}],vocab_kindergarten:[{word:"steps",definition:"The individual actions you take to complete a task"},{word:"sort",definition:"To arrange things in a specific order"}],vocab_3rd_grade:[{word:"data",definition:"Information that a computer program works with"},{word:"efficient",definition:"Doing something quickly without wasting time or resources"}],vocab_7th_grade:[{word:"linear",definition:"Growing at a constant rate - if input doubles, time doubles"},{word:"quadratic",definition:"Growing as the square of the input - if input doubles, time increases by 4x"}],vocab_high_school:[{word:"asymptotic",definition:"Describing behavior as a value approaches infinity"},{word:"constant factors",definition:"Fixed multipliers that don't depend on input size"}],vocab_undergraduate:[{word:"recurrence relations",definition:"Mathematical equations that define a function in terms of its value at smaller inputs"},{word:"amortized analysis",definition:"Analyzing average time per operation over a sequence of operations"}]}},"content/chapter-02/questions/big-o-omega-theta.yml":{type:"yaml",module:{id:"ch1-big-o-omega-theta",type:"short-answer",chapter:1,question:`Consider the function f(n) = 3n² + 5n + 10.

(a) Is f(n) = O(n³)? Justify your answer.

(b) Is f(n) = Ω(n)? Justify your answer.

(c) Is f(n) = Θ(n²)? Justify your answer.

(d) Explain the difference between Big-O, Big-Omega, and Big-Theta notations.
`,answer:`(a) Yes, f(n) = O(n³). Big-O provides an upper bound. Since 3n² + 5n + 10 ≤ 18n³ for all n ≥ 1 (choosing c = 18, n₀ = 1), f(n) grows no faster than n³.

(b) Yes, f(n) = Ω(n). Big-Omega provides a lower bound. Since 3n² + 5n + 10 ≥ 3n for all n ≥ 1 (choosing c = 3, n₀ = 1), f(n) grows at least as fast as n.

(c) Yes, f(n) = Θ(n²). Big-Theta provides a tight bound (both upper and lower). We can show: c₁n² ≤ 3n² + 5n + 10 ≤ c₂n² for sufficiently large n. For example, with c₁ = 3, c₂ = 18, and n₀ = 1, both inequalities hold.

(d) Big-O (O) describes an upper bound (worst-case growth rate). Big-Omega (Ω) describes a lower bound (best-case growth rate). Big-Theta (Θ) describes a tight bound, meaning the function grows at exactly that rate (both upper and lower bounds with the same growth rate).
`,topics:["Algorithm Analysis","Asymptotic Notation","Big-O","Big-Omega","Big-Theta"]}},"content/chapter-02/questions/function-classes-upper-bounds.yml":{type:"yaml",module:{id:"ch2-function-classes-upper-bounds",type:"short-answer",chapter:2,question:`Determine tight upper bounds (Big-O) for the following functions and justify your answers:

(a) f(n) = 5n³ + 2n² + 100n + 50

(b) g(n) = 3 log₂(n) + 7 log₂(n²) + 4

(c) h(n) = 2ⁿ + n³ + 100n²

For each, identify the dominant term and explain why lower-order terms can be dropped.
`,answer:`(a) f(n) = O(n³)
- Dominant term: 5n³ (highest degree polynomial term)
- As n grows large, n³ grows much faster than n², n, or constants
- For n ≥ 1, we can show 5n³ + 2n² + 100n + 50 ≤ 157n³, so Big-O is n³

(b) g(n) = O(log n)
- First simplify: 3 log₂(n) + 7 log₂(n²) + 4 = 3 log₂(n) + 14 log₂(n) + 4 = 17 log₂(n) + 4
- Dominant term: 17 log₂(n)
- Constants and lower-order terms (like the constant 4) are dropped in Big-O
- For n ≥ 2, we have 17 log₂(n) + 4 ≤ 21 log₂(n), so Big-O is log n

(c) h(n) = O(2ⁿ)
- Dominant term: 2ⁿ (exponential growth)
- Exponential functions grow faster than any polynomial
- As n → ∞, 2ⁿ eventually dominates n³ and n²
- For n ≥ 10, we have 2ⁿ + n³ + 100n² ≤ 3·2ⁿ, so Big-O is 2ⁿ

**Key principle**: In Big-O analysis, we keep only the fastest-growing term because it dominates the runtime for large n. The hierarchy is: constants < logarithmic < polynomial < exponential.
`,topics:["Big-O","Polynomials","Logarithms","Exponentials","Function Growth Rates"]}},"content/chapter-02/questions/nested-loop-analysis.yml":{type:"yaml",module:{id:"ch1-nested-loop-analysis",type:"short-answer",chapter:1,question:`Consider the following code:

\`\`\`python
i = 1
while i < n:
    j = 0
    while j < i:
        print(j)
        j += 1
    i *= 2
\`\`\`

(a) Count how many times the inner loop executes as a function of n.

(b) Give a tight Θ bound and justify your answer.
`,answer:"(a) The outer loop runs log₂(n) times since i doubles each iteration. In iteration k, i = 2^k and the inner loop runs 2^k times. Total executions: Σ(k=0 to log₂(n)-1) 2^k = 2^(log₂(n)) - 1 = n - 1. (b) Θ(n). The sum of the geometric series 1 + 2 + 4 + ... + n/2 equals n-1, which is Θ(n).",topics:["Algorithm Analysis","Loop Analysis","Time Complexity"]}},"content/chapter-02/questions/rank-algorithms.yml":{type:"yaml",module:{id:"ch1-rank-algorithms",type:"short-answer",chapter:1,question:"Four algorithms have runtimes O(n log n), O(n²), O(n³), and O(2ⁿ). For n = 1000, rank them from fastest to slowest and briefly justify your ordering.",answer:"From fastest to slowest: (1) O(n log n) ≈ 1000 × 10 = 10,000 operations. (2) O(n²) = 1,000,000 operations. (3) O(n³) = 1,000,000,000 operations. (4) O(2ⁿ) = 2^1000 ≈ 10^301 operations (infeasible). The ranking follows the hierarchy of growth rates: logarithmic terms grow slowly, polynomial terms grow faster (higher degree = faster growth), and exponential terms grow fastest.",topics:["Algorithm Analysis","Growth Rates","Computational Complexity"]}},"content/chapter-03/concept-map.yml":{type:"yaml",module:{concept_map:[{category:"Recursion, Trees, and Graphs",concepts:[{name:"Recursion",description:"Recursive algorithms and data structures",exam_questions:["questions/iterative-vs-recursive.yml","questions/fibonacci-call-tree-optimizations-and-analysis.yml","questions/tree-comparison.yml"]}]},{category:"Graphs",concepts:[{name:"Graph Fundamentals",description:"Graph representation and basic traversal algorithms",exam_questions:["questions/graph-representation.yml","questions/graph-traversal-and-connectivity.yml"]},{name:"Shortest Paths",description:"Finding shortest paths in weighted and unweighted graphs",exam_questions:["questions/bfs-shortest-path.yml","questions/dijkstra-algorithm.yml"]},{name:"Minimum Spanning Trees",description:"Constructing minimum spanning trees with greedy algorithms",exam_questions:["questions/minimum-spanning-trees.yml"]}]}]}},"content/chapter-03/questions/avl-insertions.yml":{type:"yaml",module:{id:"ch2-avl-insertions",type:"short-answer",chapter:2,question:"Insert the keys 30, 20, 10, 25, and 28 into an empty AVL tree. Show the tree after each insertion and clearly indicate all rotations performed.",answer:"Insert 30: Tree is just [30]. Insert 20: [30, 20] (left child). Insert 10: [30, 20, 10] violates AVL (left-left case). Perform right rotation at 30: root becomes 20 with children 10 and 30. Insert 25: [20, 10, 30, 25] (25 is right child of 20, left child of 30). Insert 28: [20, 10, 30, 25, 28] violates AVL at 30 (left-right case). Perform left rotation at 25, then right rotation at 30. Final tree has 20 at root, 10 and 28 as children, with 25 and 30 as children of 28.",topics:["AVL Trees","Tree Rotations","Self-Balancing Trees"]}},"content/chapter-03/questions/bfs-shortest-path.yml":{type:"yaml",module:{id:"ch3-bfs-shortest-path",type:"short-answer",chapter:3,question:"Given an unweighted graph, use BFS to find the shortest path from vertex S to T. Show the predecessor array and reconstruct the path.",answer:"BFS finds shortest paths in unweighted graphs because it explores vertices in order of distance. Algorithm: (1) Run BFS from S, maintaining predecessor array pred[]. (2) When visiting vertex u from v, set pred[u] = v. (3) After BFS completes, if T was reached, reconstruct path by following predecessors backward from T to S, then reverse. Example: If pred[T]=C, pred[C]=B, pred[B]=S, then path is S→B→C→T. If T wasn't reached, no path exists. Path length equals distance[T] from BFS.",topics:["Shortest Paths","Breadth-First Search","Path Reconstruction"]}},"content/chapter-03/questions/bfs-traversal.yml":{type:"yaml",module:{id:"ch3-bfs-traversal",type:"short-answer",chapter:3,question:"Perform BFS on a given graph starting from vertex A. Show the contents of the queue at each step and label each vertex with its distance from A.",answer:"BFS Algorithm: (1) Initialize: Mark A as distance 0, enqueue A. (2) While queue not empty: dequeue vertex v, for each unvisited neighbor u of v, mark u as visited, set distance[u] = distance[v] + 1, enqueue u. Example execution: Queue initially [A]. Process A, enqueue neighbors [B, C]. Process B (distance 1), enqueue D, E. Process C (distance 1), enqueue F. Continue until queue empty. Final distances show shortest path lengths from A to all reachable vertices.",topics:["Breadth-First Search","Graph Traversal","Shortest Paths"]}},"content/chapter-03/questions/bst-ordering-properties.yml":{type:"yaml",module:{id:"ch2-bst-ordering",type:"short-answer",chapter:2,question:"Given a binary tree, determine whether it satisfies the Binary Search Tree property. If it does not, identify the violating node and explain why.",answer:"A valid BST must satisfy: for every node, all values in its left subtree are less than the node's value, and all values in its right subtree are greater. Check each node against this property. Common violations include: a node in the left subtree being greater than an ancestor, or a node in the right subtree being less than an ancestor. The BST property must hold for the entire subtree, not just immediate children.",topics:["Binary Search Trees","Tree Properties","Data Structure Invariants"]}},"content/chapter-03/questions/btree-construction.yml":{type:"yaml",module:{id:"ch2-btree-construction",type:"short-answer",chapter:2,question:"Given a B-Tree of minimum degree t = 2, insert the keys 8, 1, 3, 7, 10, 14, and 13. Show all node splits and key promotions.",answer:"With t=2, nodes hold 1-3 keys. Insert 8, 1, 3: root is [1, 3, 8]. Insert 7: [1, 3, 7, 8] - node full, split at median 3. Root becomes [3] with children [1] and [7, 8]. Insert 10: [7, 8, 10]. Insert 14: [7, 8, 10, 14] - split at 10. Promote 10 to root: [3, 10] with children [1], [7, 8], [14]. Insert 13: goes to [14] becoming [13, 14]. Final tree has root [3, 10] with three children: [1], [7, 8], and [13, 14].",topics:["B-Trees","Multi-way Trees","Node Splitting"]}},"content/chapter-03/questions/connected-components.yml":{type:"yaml",module:{id:"ch3-connected-components",type:"short-answer",chapter:3,question:"Using BFS or DFS, determine the number of connected components in a graph and list the vertices in each component.",answer:"Algorithm: (1) Mark all vertices as unvisited. (2) For each unvisited vertex v: start BFS/DFS from v, mark all reachable vertices (forming one component). (3) Count how many times step 2 executes - this is the number of components. Example: If graph has vertices {A,B,C,D,E,F} with edges A-B, B-C, D-E. Start BFS at A, reach {A,B,C} - component 1. Next unvisited is D, BFS reaches {D,E} - component 2. F remains unvisited - component 3: {F}. Total: 3 components.",topics:["Connected Components","Graph Traversal","Graph Connectivity"]}},"content/chapter-03/questions/dfs-traversal.yml":{type:"yaml",module:{id:"ch3-dfs-traversal",type:"short-answer",chapter:3,question:"Perform DFS on a given undirected graph starting at vertex A. Show the order of visitation and draw the resulting DFS tree.",answer:"DFS Algorithm: (1) Mark A as visited, add to DFS tree. (2) For each unvisited neighbor of A (in order), recursively perform DFS, adding edges to DFS tree. (3) Backtrack when no unvisited neighbors. Example: Start at A, visit first neighbor B, then B's first unvisited neighbor C, etc. Edges in DFS tree are 'tree edges' (forward progress). Edges to already-visited vertices are 'back edges' (create cycles). Order depends on adjacency list ordering. DFS tree shows parent-child relationships from the traversal.",topics:["Depth-First Search","Graph Traversal","Tree Edges"]}},"content/chapter-03/questions/dijkstra-algorithm.yml":{type:"yaml",module:{id:"ch3-dijkstra-algorithm",type:"short-answer",chapter:3,question:`Consider a weighted directed graph with vertices {S, A, B, C, D} and edges: S→A (4), S→B (2), A→C (3), A→D (1), B→A (1), B→D (5), C→D (2).

(a) Run Dijkstra's algorithm starting from vertex S. Show the priority queue contents and the distance table after each iteration until all vertices are processed.

(b) Using the predecessor array from your execution, reconstruct the shortest path from S to D. Show the step-by-step reconstruction process.

(c) Explain why Dijkstra's algorithm requires non-negative edge weights. Provide a small counterexample graph with a negative edge that demonstrates how Dijkstra's algorithm would produce an incorrect result.

(d) What is the time complexity of Dijkstra's algorithm using a binary heap priority queue? How does this compare to using a simple array?
`,answer:`(a) Dijkstra's execution from S:
   - Initialize: dist[S]=0, dist[all others]=∞. PQ = [(S, 0)]
   - Extract (S, 0): Update dist[A]=4, dist[B]=2. PQ = [(B, 2), (A, 4)]
   - Extract (B, 2): Check B→A: dist[B]+1=3 < dist[A]=4, update dist[A]=3. Check B→D: dist[D]=7. PQ = [(A, 3), (A, 4), (D, 7)]
   - Extract (A, 3): Check A→C: dist[C]=6. Check A→D: 3+1=4 < 7, update dist[D]=4. PQ = [(A, 4), (D, 4), (C, 6)]
   - Extract (A, 4): Already processed with better distance, skip.
   - Extract (D, 4): Check D's neighbors (none shown). PQ = [(C, 6)]
   - Extract (C, 6): Check C→D: 6+2=8 > 4, no update. PQ = []
   
   Final distances: S=0, A=3, B=2, C=6, D=4
   Predecessors: pred[A]=B, pred[B]=S, pred[C]=A, pred[D]=A

(b) Path reconstruction from S to D:
   - Start at D: pred[D] = A
   - Move to A: pred[A] = B  
   - Move to B: pred[B] = S
   - Move to S: source reached
   - Backward path: D ← A ← B ← S
   - Reversed (actual path): S → B → A → D
   - Path cost: dist[D] = 4 (verify: 2 + 1 + 1 = 4)

(c) Dijkstra's requires non-negative edges because it assumes once a vertex is extracted from the priority queue (finalized), its shortest distance is determined and won't improve.
   
   Counterexample with negative edge:
   - Vertices: {S, A, B}
   - Edges: S→A (1), S→B (3), A→B (-5)
   
   Dijkstra's execution:
   - Extract (S, 0): dist[A]=1, dist[B]=3
   - Extract (A, 1): dist[B] = min(3, 1+(-5)) = -4, update dist[B]=-4
   - But if B was already extracted at distance 3 before this update, Dijkstra would miss the better path S→A→B with cost -4
   
   The negative edge allows a later path to improve an "already finalized" vertex, breaking Dijkstra's greedy assumption. Need Bellman-Ford for negative edges.

(d) Time complexity:
   - Binary heap: O((V + E) log V)
     * Each vertex extracted once: V × log V
     * Each edge relaxed once: E × log V (for decrease-key)
     * Total: O((V + E) log V)
   
   - Simple array (unsorted): O(V²)
     * Finding minimum: V times at O(V) each = O(V²)
     * Edge relaxation: O(E)
     * Total: O(V²)
   
   Binary heap is better for sparse graphs (E << V²), while simple array can be competitive for dense graphs where E ≈ V².
`,topics:["Dijkstra's Algorithm","Shortest Paths","Priority Queue","Algorithm Limitations","Negative Edges","Path Reconstruction","Predecessor Array"]}},"content/chapter-03/questions/dijkstra-constraints.yml":{type:"yaml",module:{id:"ch3-dijkstra-constraints",type:"short-answer",chapter:3,question:"Explain why Dijkstra's algorithm fails when negative-weight edges exist. Provide a small counterexample graph and demonstrate the failure.",answer:"Dijkstra's assumes once a vertex is finalized (extracted from priority queue), its shortest distance is determined. Negative edges violate this. Counterexample: Vertices {S, A, B} with edges S→A (weight 1), S→B (weight 2), A→B (weight -5). Dijkstra: Extract (S,0), update dist[A]=1, dist[B]=2, add both to queue. Extract (A,1) next. Update dist[B]=1+(-5)=-4 via A. But B with distance 2 was already in queue! Dijkstra might have already processed B at distance 2, missing the better path. Need Bellman-Ford for negative edges.",topics:["Dijkstra's Algorithm","Algorithm Limitations","Negative Edges"]}},"content/chapter-03/questions/dijkstra-execution.yml":{type:"yaml",module:{id:"ch3-dijkstra-execution",type:"short-answer",chapter:3,question:"Run Dijkstra's algorithm on a weighted graph starting from vertex S. Show the priority queue and distance table after each iteration.",answer:"Dijkstra's Algorithm: (1) Initialize: dist[S]=0, dist[all others]=∞. Priority queue contains (S, 0). (2) Extract min vertex u from queue. (3) For each neighbor v of u: if dist[u] + weight(u,v) < dist[v], update dist[v] and add/update v in queue. (4) Repeat until queue empty. Example iteration: Extract (A, 5), check neighbors B and C. If dist[B] = 10 and edge weight A→B = 2, update dist[B] = 7, add (B, 7) to queue. Final dist[] array contains shortest distances from S to all vertices.",topics:["Dijkstra's Algorithm","Shortest Paths","Priority Queue"]}},"content/chapter-03/questions/fibonacci-call-tree-optimizations-and-analysis.yml":{type:"yaml",module:{id:21,question:`Consider the recursive Fibonacci implementation:

\`\`\`python
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)
\`\`\`

(a) Draw the call tree for \`fib(5)\` and identify repeated computations.

(b) Write the recurrence relation T(n) for the number of function calls and explain why this leads to exponential time complexity.

(c) Describe memoization as an optimization technique and explain how it improves the time complexity to O(n).
`,answer:`(a) The call tree shows fib(5) calls fib(4) and fib(3), fib(4) calls fib(3) and fib(2), etc. Many values like fib(3), fib(2), fib(1) are computed multiple times - for example, fib(3) is computed twice, fib(2) is computed three times.

(b) T(n) = T(n-1) + T(n-2) + O(1). This recurrence doesn't fit the Master Theorem form, but solving it shows T(n) ≈ φ^n where φ ≈ 1.618 (golden ratio), making it exponential. Each call branches into two recursive calls, creating an exponentially growing call tree.

(c) Memoization stores previously computed results in a lookup table (dictionary/array). Before computing fib(n), check if it's already cached; if so, return the cached value. This eliminates redundant computation, ensuring each fib(i) is computed only once, reducing time complexity from O(2^n) to O(n) with O(n) space.
`,topics:["recursion","optimization","call trees","recurrence relations"],type:"short-answer",points:10,difficulty:"medium",learning_objectives:["Understand recursive call trees","Analyze recursive algorithms using recurrence relations","Apply optimization techniques to recursive solutions"]}},"content/chapter-03/questions/graph-representation.yml":{type:"yaml",module:{id:"ch3-graph-representation",type:"short-answer",chapter:3,question:"An undirected graph has 1,000 vertices and 1,200 edges. Would an adjacency list or adjacency matrix be more appropriate? Justify your answer in terms of time and space complexity.",answer:"Adjacency list is more appropriate. Space: Matrix requires O(V²) = O(1,000,000) space, while list requires O(V + E) = O(1,000 + 1,200) = O(2,200) space - much more efficient for this sparse graph (only 1,200 edges vs. 499,500 possible). Time: For operations like 'find all neighbors', list is O(degree) vs matrix O(V). Edge existence check is O(1) for matrix vs O(degree) for list, but with average degree ≈ 2.4, this difference is negligible. The massive space savings make adjacency list the clear choice.",topics:["Graph Representation","Sparse Graphs","Space Complexity"]}},"content/chapter-03/questions/graph-traversal-and-connectivity.yml":{type:"yaml",module:{id:"ch3-graph-traversal-connectivity",type:"short-answer",chapter:3,question:`Consider the following graph with vertices {A, B, C, D, E, F, G} and edges: A-B, A-C, B-D, C-D, E-F, E-G.

(a) Perform BFS starting from vertex A. Show the order vertices are visited, the contents of the queue at each step, and label each vertex with its distance from A.

(b) Perform DFS starting from vertex A. Show the order vertices are visited and identify which edges are tree edges vs. back edges.

(c) Use either BFS or DFS to determine the number of connected components in this graph. List the vertices in each component and explain your algorithm.

(d) Compare BFS and DFS: What are the key differences in their implementation (data structures), properties (what they find), and typical use cases?
`,answer:`(a) BFS from A:
   - Step 1: Queue = [A]. Dequeue A (distance 0), enqueue neighbors B, C. Queue = [B, C]
   - Step 2: Dequeue B (distance 1), enqueue D. Queue = [C, D]
   - Step 3: Dequeue C (distance 1), D already visited. Queue = [D]
   - Step 4: Dequeue D (distance 2), no new neighbors. Queue = []
   - Order: A, B, C, D. Distances: A=0, B=1, C=1, D=2. Cannot reach E, F, G from A.

(b) DFS from A (assuming alphabetical neighbor order):
   - Start at A, visit B (edge A-B is tree edge)
   - From B, visit D (edge B-D is tree edge)
   - From D, can reach C (edge D-C is tree edge)
   - From C, can reach A (edge C-A is back edge - A already visited)
   - Backtrack to D, B, A. No more unvisited neighbors.
   - Order: A, B, D, C
   - Tree edges: A-B, B-D, D-C. Back edge: C-A (completes cycle A-B-D-C-A)

(c) Connected components algorithm:
   1. Mark all vertices unvisited
   2. For each unvisited vertex, start BFS/DFS and mark all reachable vertices
   3. Count how many times step 2 executes
   
   Execution:
   - Start BFS at A → reaches {A, B, C, D} → Component 1
   - Next unvisited is E → BFS reaches {E, F, G} → Component 2
   - All vertices visited → 2 components total
   
   Components: {A, B, C, D} and {E, F, G}

(d) BFS vs DFS comparison:
   - Implementation: BFS uses a queue (FIFO), DFS uses a stack (LIFO) or recursion
   - Properties: BFS finds shortest paths in unweighted graphs, visits by distance layers. DFS explores deeply first, useful for detecting cycles and topological sorting
   - Use cases: BFS for shortest paths, level-order traversal, social networks ("degrees of separation"). DFS for cycle detection, maze solving, topological sort, connected components
   - Space: BFS can use O(width) space, DFS uses O(depth) space
`,topics:["Breadth-First Search","Depth-First Search","Graph Traversal","Connected Components","Graph Connectivity","Shortest Paths"]}},"content/chapter-03/questions/greedy-correctness.yml":{type:"yaml",module:{id:"ch3-greedy-correctness",type:"short-answer",chapter:3,question:"Explain why Kruskal's greedy selection of the next smallest edge does not lead to cycles and still produces a minimum spanning tree.",answer:"Cycle Prevention: Kruskal's only adds edge (u,v) if find(u) ≠ find(v), meaning u and v are in different components. Adding such an edge cannot create a cycle (would need a path u→v already, but they're in different components). Optimality: Proven by cut property - for any cut, the minimum-weight crossing edge is in some MST. Each Kruskal edge is minimum-weight for the cut between its component and all others. By adding edges in sorted order and avoiding cycles, we build an MST incrementally. The greedy choice (smallest available edge) is always safe by the cut property.",topics:["Greedy Algorithms","Algorithm Correctness","MST Theory"]}},"content/chapter-03/questions/iterative-vs-recursive.yml":{type:"yaml",module:{id:"ch1-iterative-vs-recursive",type:"short-answer",chapter:1,question:`Two implementations of factorial are shown below (one recursive, one iterative). Analyze and compare their time complexity and auxiliary space usage, and explain why they differ.

\`\`\`python
def factorial_recursive(n):
    if n <= 1:
        return 1
    return n * factorial_recursive(n - 1)
\`\`\`

\`\`\`python
def factorial_iterative(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result
\`\`\`
`,answer:"Both have O(n) time complexity as they perform n multiplications. However, the recursive version requires O(n) auxiliary space for the call stack (one frame per recursive call), while the iterative version uses O(1) space (only local variables). The difference arises because recursion implicitly uses the call stack to store intermediate states, whereas iteration explicitly manages state with variables.",topics:["Algorithm Analysis","Recursion","Space Complexity"]}},"content/chapter-03/questions/kruskal-algorithm.yml":{type:"yaml",module:{id:"ch3-kruskal-algorithm",type:"short-answer",chapter:3,question:"Apply Kruskal's algorithm to a graph. Show the sorted edge list and each union-find operation.",answer:"Kruskal's Algorithm: (1) Sort all edges by weight. (2) Initialize union-find with each vertex in its own set. (3) For each edge (u,v) in sorted order: if find(u) ≠ find(v) (u and v in different components), add edge to MST and union(u,v). (4) Stop when MST has |V|-1 edges. Example: Sorted edges: (A-C,1), (B-D,2), (C-D,3), (A-B,4), (B-C,5). Process (A-C,1): union({A},{C})→{A,C}. Process (B-D,2): union({B},{D})→{B,D}. Process (C-D,3): union({A,C},{B,D})→{A,B,C,D}. Skip (A-B,4) - creates cycle. Continue until done.",topics:["Kruskal's Algorithm","Minimum Spanning Tree","Union-Find"]}},"content/chapter-03/questions/minimum-spanning-trees.yml":{type:"yaml",module:{id:"ch3-minimum-spanning-trees",type:"short-answer",chapter:3,question:`Consider an undirected weighted graph with vertices {A, B, C, D, E} and edges: A-B (4), A-C (3), B-C (2), B-D (5), C-D (4), C-E (6), D-E (1).

(a) Define a minimum spanning tree (MST) and explain its properties. Why does removing any edge from an MST disconnect the graph?

(b) Apply Prim's algorithm starting from vertex A. Show the edge selected at each step, the growing tree, and the final MST with its total weight.

(c) Apply Kruskal's algorithm to the same graph. Show the sorted edge list and indicate which edges are added to the MST or rejected (and why). Track the union-find operations.

(d) Compare Prim's and Kruskal's algorithms: What are the key differences in their approach, data structures used, and time complexity? Why does Kruskal's greedy selection guarantee correctness (use the cut property)?
`,answer:`(a) MST definition and properties:
   A Minimum Spanning Tree is a subset of edges that:
   - Connects all vertices (spanning)
   - Forms a tree (acyclic, exactly |V|-1 edges)
   - Has minimum total edge weight among all spanning trees
   
   Why removing any edge disconnects: A tree has exactly one path between any pair of vertices. Removing edge (u,v) breaks the unique path between u and v, creating two separate components. Since trees have no cycles, there's no alternate path. An MST achieves minimal connectivity - it connects all vertices with minimum cost and zero redundancy.

(b) Prim's algorithm from A:
   - Initialize: Tree = {A}, Available edges = {A-B(4), A-C(3)}
   - Step 1: Select A-C (3) - minimum crossing edge. Tree = {A,C}, Edges added = [A-C]
   - Step 2: Available = {A-B(4), C-B(2), C-D(4), C-E(6)}. Select C-B (2). Tree = {A,B,C}, Edges = [A-C, C-B]
   - Step 3: Available = {A-B(4), B-D(5), C-D(4), C-E(6)}. Select C-D (4). Tree = {A,B,C,D}, Edges = [A-C, C-B, C-D]
   - Step 4: Available = {B-D(5), C-E(6), D-E(1)}. Select D-E (1). Tree = {A,B,C,D,E}, Edges = [A-C, C-B, C-D, D-E]
   
   Final MST: A-C, C-B, C-D, D-E with total weight = 3+2+4+1 = 10

(c) Kruskal's algorithm:
   - Sort edges: D-E(1), B-C(2), A-C(3), A-B(4), C-D(4), B-D(5), C-E(6)
   - Initialize union-find: {A}, {B}, {C}, {D}, {E}
   
   - Process D-E(1): find(D)≠find(E), add to MST. Union: {A}, {B}, {C}, {D,E}. MST = [D-E]
   - Process B-C(2): find(B)≠find(C), add to MST. Union: {A}, {B,C}, {D,E}. MST = [D-E, B-C]
   - Process A-C(3): find(A)≠find(C), add to MST. Union: {A,B,C}, {D,E}. MST = [D-E, B-C, A-C]
   - Process A-B(4): find(A)=find(B) (both in {A,B,C}), REJECT - would create cycle
   - Process C-D(4): find(C)≠find(D), add to MST. Union: {A,B,C,D,E}. MST = [D-E, B-C, A-C, C-D]
   - Stop: Have 4 edges (|V|-1), MST complete
   
   Final MST: same edges as Prim's, total weight = 10

(d) Comparison and correctness:
   
   **Approach differences:**
   - Prim's: Grows a single tree from a starting vertex, always selecting minimum edge crossing the cut between tree and non-tree vertices
   - Kruskal's: Builds a forest of trees, selecting globally minimum edges that don't create cycles, merging components
   
   **Data structures:**
   - Prim's: Priority queue for crossing edges, O((V+E) log V) with binary heap
   - Kruskal's: Sort edges O(E log E), union-find for cycle detection O(E α(V)), total O(E log E)
   
   **Kruskal's correctness (Cut Property):**
   The cut property states: For any cut (partition of vertices into two sets), the minimum-weight edge crossing the cut is in some MST. 
   
   When Kruskal's selects edge (u,v), u and v are in different components (different sides of a cut). This edge is the minimum-weight edge not yet considered, so it's the minimum crossing this cut. By the cut property, it's safe to include. By processing edges in sorted order and using union-find to avoid cycles, Kruskal's builds an MST incrementally, with each greedy choice guaranteed correct.
`,topics:["Minimum Spanning Tree","Prim's Algorithm","Kruskal's Algorithm","Greedy Algorithms","Union-Find","Algorithm Correctness","Cut Property"]}},"content/chapter-03/questions/mst-properties.yml":{type:"yaml",module:{id:"ch3-mst-properties",type:"short-answer",chapter:3,question:"Define a minimum spanning tree. Explain why removing any edge from an MST disconnects the graph.",answer:"A Minimum Spanning Tree (MST) is a subset of edges that: (1) Connects all vertices (spanning), (2) Forms a tree (acyclic), (3) Has minimum total edge weight. An MST has exactly |V|-1 edges. Why removing any edge disconnects: In a tree, there exists exactly one path between any two vertices. If we remove edge (u,v) from the MST, the unique path between u and v is broken, creating two separate components. Trees have no cycles, so there's no alternate path. This minimal connectivity is why MSTs are useful - they connect the graph with minimum cost and no redundancy.",topics:["Minimum Spanning Tree","Graph Theory","Tree Properties"]}},"content/chapter-03/questions/prim-algorithm.yml":{type:"yaml",module:{id:"ch3-prim-algorithm",type:"short-answer",chapter:3,question:"Apply Prim's algorithm to a graph starting from vertex A. Show the edge selected at each step and the growing tree.",answer:"Prim's Algorithm: (1) Start with vertex A in tree, all others outside. (2) Find minimum-weight edge crossing the cut (one endpoint in tree, one outside). (3) Add this edge and new vertex to tree. (4) Repeat until all vertices included. Example: Start at A. Edges from A: A-B (5), A-C (3). Select A-C (3). Tree: {A,C}. New edges: A-B (5), C-B (2), C-D (4). Select C-B (2). Tree: {A,B,C}. Continue selecting minimum crossing edge until MST complete with |V|-1 edges. Use priority queue for efficiency: O((V+E) log V).",topics:["Prim's Algorithm","Minimum Spanning Tree","Greedy Algorithms"]}},"content/chapter-03/questions/red-black-balancing.yml":{type:"yaml",module:{id:"ch2-red-black-balancing",type:"short-answer",chapter:2,question:"Insert the keys 10, 18, 7, 15, and 16 into an empty Red-Black tree. Show the tree after each insertion, including node colors, and explain each recoloring and rotation.",answer:"Insert 10 (Black root). Insert 18 (Red, right of 10). Insert 7 (Red, left of 10). Insert 15 (Red, left of 18) - violates RB property (red parent 18, red uncle 7). Recolor: 7 and 18 become Black, 10 becomes Red (but root, so Black). Insert 16 (Red, right of 15) - red-red violation with no red uncle. Perform left rotation at 15, then right rotation at 18, with appropriate recoloring. Final: balanced tree with Black nodes at 10, 15 as root of right subtree, maintaining Red-Black properties.",topics:["Red-Black Trees","Tree Recoloring","Balanced Tree Insertion"]}},"content/chapter-03/questions/shortest-path-reconstruction.yml":{type:"yaml",module:{id:"ch3-shortest-path-reconstruction",type:"short-answer",chapter:3,question:"Given the final distance and predecessor arrays from Dijkstra's algorithm, reconstruct the shortest path from vertex A to vertex F.",answer:"Path Reconstruction: (1) Start at destination F. (2) Follow predecessor chain: pred[F]→pred[pred[F]]→... until reaching source A. (3) Reverse the sequence. Example: If pred[F]=E, pred[E]=C, pred[C]=A, then backward path is F←E←C←A. Reversed: A→C→E→F. Path cost is dist[F]. If no predecessor exists for F (pred[F]=null), then F is unreachable from A. This works because Dijkstra's predecessor array forms a shortest-path tree rooted at the source.",topics:["Shortest Paths","Path Reconstruction","Predecessor Array"]}},"content/chapter-03/questions/tree-comparison.yml":{type:"yaml",module:{id:"ch3-tree-comparison",type:"short-answer",chapter:3,question:`Compare and contrast Binary Search Trees (BSTs), AVL Trees, Red-Black Trees, and B-Trees by addressing the following:

(a) Describe the defining property or invariant that each tree type maintains.

(b) Explain the balancing mechanism (if any) for each tree type.

(c) Compare their height guarantees and how this affects lookup performance.

(d) Discuss the insertion/deletion cost trade-offs between these tree types.

(e) Identify real-world use cases where each tree type is most appropriate.
`,answer:`(a) Defining properties:
   - BST: For every node, all values in left subtree < node < all values in right subtree. No balancing guarantee.
   - AVL: BST + balance factor constraint: |height(left) - height(right)| ≤ 1 for every node.
   - Red-Black: BST + color properties: nodes are red/black, root is black, red nodes have black children, all paths from root to leaves have same number of black nodes.
   - B-Tree: Multi-way search tree where each node can hold multiple keys (minimum degree t means 1 to 2t-1 keys per node). All leaves at same level.

(b) Balancing mechanisms:
   - BST: None - can degrade to linked list (O(n) height) in worst case.
   - AVL: Tree rotations (single and double) triggered when balance factor exceeds ±1 during insertion/deletion.
   - Red-Black: Combination of recoloring and rotations (fewer rotations than AVL due to looser constraints).
   - B-Tree: Node splits and merges during insertion/deletion, promoting/demoting keys between levels.

(c) Height guarantees:
   - BST: O(n) worst case, O(log n) average case (unbalanced)
   - AVL: Height ≤ 1.44 log n (strictest balance → fastest lookups)
   - Red-Black: Height ≤ 2 log n (looser balance but still O(log n) guaranteed)
   - B-Tree: Height = O(log_b n) where b is branching factor (can be very shallow with large b)

(d) Insertion/deletion trade-offs:
   - BST: O(h) where h can be O(n), simple but unreliable
   - AVL: More rotations required (up to O(log n) rotations per operation) but maintains strict balance
   - Red-Black: Fewer rotations (at most 3 for insertion, constant amortized for deletion), better for write-heavy workloads
   - B-Tree: Node splits/merges minimize disk I/O but require shifting keys within nodes

(e) Real-world use cases:
   - BST: Educational purposes, or when data is known to be randomly distributed
   - AVL: Read-heavy applications where lookup speed is critical (e.g., in-memory databases, dictionaries)
   - Red-Black: Language standard libraries (C++ std::map, Java TreeMap) where balance between reads and writes is needed
   - B-Trees: Databases and file systems (e.g., MySQL indexes, NTFS) where minimizing disk I/O is paramount - storing multiple keys per node reduces height and number of disk accesses
`,topics:["Binary Search Trees","AVL Trees","Red-Black Trees","B-Trees","Balanced Trees","Data Structure Selection","Performance Trade-offs"]}},"content/chapter-03/questions/tree-tradeoffs.yml":{type:"yaml",module:{id:"ch2-tree-tradeoffs",type:"short-answer",chapter:2,question:"Compare AVL trees, Red-Black trees, and B-Trees in terms of height guarantees, rotation cost, and common real-world use cases.",answer:"AVL trees: Strictest balance (height ≤ 1.44 log n), faster lookups but more rotations on insertion/deletion. Used when read-heavy. Red-Black trees: Looser balance (height ≤ 2 log n), fewer rotations, better for frequent insertions. Used in language libraries (C++ std::map, Java TreeMap). B-Trees: Height = O(log_b n) where b is branching factor, minimizes disk I/O by storing multiple keys per node. Used in databases and file systems where disk access dominates. Trade-off: stricter balance → faster searches but slower updates.",topics:["Balanced Trees","Data Structure Selection","Performance Trade-offs"]}},"content/chapter-04/concept-map.yml":{type:"yaml",module:{concept_map:[{category:"Algorithm Paradigms and Intractability",concepts:[{name:"Greedy",description:"Greedy algorithms and when they produce optimal solutions",exam_questions:["questions/activity-selection.yml","questions/fractional-knapsack.yml","questions/huffman-encoding.yml"]},{name:"Divide and Conquer",description:"Recursive problem decomposition and merging solutions",exam_questions:["questions/merge-sort-analysis.yml","questions/quick-sort-analysis.yml"]},{name:"Dynamic Programming",description:"Optimal substructure and overlapping subproblems",exam_questions:["questions/knapsack-dp.yml","questions/lcs-problem.yml","questions/matrix-chain.yml"]},{name:"Network Flow",description:"Maximum flow and minimum cut in networks",exam_questions:["questions/ford-fulkerson.yml","questions/max-flow-min-cut.yml"]},{name:"Intractability",description:"NP-completeness and computational complexity theory",exam_questions:["questions/sat-to-3sat-reduction.yml","questions/3sat-np-completeness.yml"]}]}]}},"content/chapter-04/questions/3sat-np-completeness.yml":{type:"yaml",module:{id:"ch4-3sat-np-completeness",type:"short-answer",chapter:4,question:`Consider the reduction from SAT to 3-SAT where we transform clauses using auxiliary variables.

(a) Prove that this reduction preserves satisfiability in both directions:
   - If the original SAT instance is satisfiable, the 3-SAT instance is satisfiable
   - If the 3-SAT instance is satisfiable, the original SAT instance is satisfiable

(b) Explain why this reduction runs in polynomial time. What is the relationship between the size of the input (SAT instance) and the size of the output (3-SAT instance)?

(c) Given that SAT is NP-complete (Cook-Levin theorem), explain how this polynomial-time reduction proves that 3-SAT is NP-complete. What are the two requirements you must show for any problem to be NP-complete?

(d) Why is showing 3-SAT ∈ NP easier than showing it's NP-hard? Describe the polynomial-time verifier for 3-SAT.
`,answer:`(a) Bidirectional satisfiability proof:

**Forward direction (SAT satisfiable → 3-SAT satisfiable):**
If the original SAT has a satisfying assignment, we construct a 3-SAT assignment:
- Keep all original variable assignments
- For dummy variables in 1- and 2-literal expansions: assign any value (original literals already satisfy the clause)
- For auxiliary variables in long clause splits: if (a ∨ b ∨ c ∨ d) is satisfied, at least one of a,b or c,d is true. Set auxiliary z appropriately so both 3-SAT clauses are satisfied

**Backward direction (3-SAT satisfiable → SAT satisfiable):**
If 3-SAT has a satisfying assignment, use only the original variable assignments. Each 3-SAT clause group came from an original SAT clause. If the 3-SAT clauses are satisfied, the construction ensures the original clause is satisfied (auxiliary variables were introduced specifically to preserve this property).

(b) Polynomial time analysis:

The reduction runs in O(n·k) where n is the number of clauses and k is the maximum clause size:
- 1-literal clauses: O(1) work - add 2 dummy literals
- 2-literal clauses: O(1) work - add 1 dummy literal  
- k-literal clauses (k≥4): Create k-3 auxiliary variables and k-2 new clauses in O(k) time

**Size relationship:** If original SAT has n clauses with max size k, the 3-SAT has at most O(n·k) clauses. Each original clause produces at most k-2 clauses. This is polynomial in the input size.

(c) NP-completeness proof structure:

To prove 3-SAT is NP-complete, we must show:
1. **3-SAT ∈ NP:** Easy - given an assignment, verify each clause has ≥1 true literal in O(n) time
2. **3-SAT is NP-hard:** Reduce a known NP-complete problem to 3-SAT

Since SAT is NP-complete (Cook-Levin), and we have a polynomial-time reduction SAT ≤ₚ 3-SAT:
- Any problem in NP can be reduced to SAT (by definition of NP-complete)
- SAT can be reduced to 3-SAT (we just showed this)
- By transitivity: any NP problem ≤ₚ SAT ≤ₚ 3-SAT
- Therefore 3-SAT is NP-hard
- Combined with 3-SAT ∈ NP, we get 3-SAT is NP-complete

(d) NP membership vs. NP-hardness:

**Why NP membership is easier:**
To show 3-SAT ∈ NP, we only need a polynomial-time verifier:
- Input: 3-SAT formula φ and proposed assignment A
- Verification: For each clause, check if at least one literal is true under A
- Time: O(number of clauses) = polynomial
- If verifier outputs "yes", we have a certificate proving the instance is satisfiable

**3-SAT polynomial-time verifier:**
\`\`\`
Verify(φ, A):
  for each clause (l₁ ∨ l₂ ∨ l₃) in φ:
    if eval(l₁, A) = false AND eval(l₂, A) = false AND eval(l₃, A) = false:
      return false
  return true
\`\`\`

**Why NP-hardness is harder:**
To show NP-hardness, we must prove that EVERY problem in NP can be reduced to 3-SAT. This requires showing a reduction from at least one known NP-complete problem, which involves constructing a non-trivial polynomial-time transformation that preserves solutions.
`,topics:["NP-completeness","Reductions","SAT","3-SAT","Complexity theory","P vs NP","Polynomial-time verification"]}},"content/chapter-04/questions/activity-selection.yml":{type:"yaml",module:{id:"ch4-activity-selection",type:"short-answer",chapter:4,question:"Given activities with start and finish times, use a greedy algorithm to select the maximum number of non-overlapping activities. Explain why sorting by finish time works.",answer:"Greedy Activity Selection: (1) Sort activities by finish time. (2) Select first activity. (3) For each remaining activity: if its start time ≥ previous finish time, select it. Example: Activities (start, finish): A(1,4), B(3,5), C(0,6), D(5,7), E(8,9). Sort by finish: A(1,4), B(3,5), C(0,6), D(5,7), E(8,9). Select A. B overlaps (starts at 3 < 4). C overlaps. D compatible (5≥4), select. E compatible (8≥7), select. Result: {A,D,E}. Why finish time? Earliest finish leaves maximum room for future activities - greedy choice is safe.",topics:["Greedy Algorithms","Activity Selection","Interval Scheduling"]}},"content/chapter-04/questions/divide-conquer-strategy.yml":{type:"yaml",module:{id:25,question:`(a) Explain the divide and conquer strategy and describe its three phases (divide, conquer, combine).

(b) Give two examples of problems well-suited for divide and conquer and explain why.

(c) Consider a divide and conquer algorithm with recurrence T(n) = 4T(n/2) + O(n). Use the Master Theorem to determine its time complexity and state which case applies.
`,answer:`(a) Divide and conquer breaks a problem into smaller subproblems of the same type, solves them recursively, then combines their solutions:
   - Divide: Split the problem into smaller subproblems
   - Conquer: Recursively solve each subproblem
   - Combine: Merge subproblem solutions into the overall solution

(b) Examples:
   - Merge sort: Naturally splits array in half, sorts independently, merges efficiently
   - Binary search: Halves search space each step by comparing to middle element
   - Both have clear subproblem independence and efficient combine steps

(c) With a=4, b=2, f(n)=n:
   - n^(log_b(a)) = n^(log_2(4)) = n^2
   - f(n) = n = O(n^(2-ε)) for ε=1
   - This is Case 1: T(n) = Θ(n^(log_b(a))) = Θ(n^2)
   
   The recursive work dominates the combining work, resulting in quadratic time complexity.
`,topics:["divide and conquer","algorithm design","recurrence relations","master theorem"],type:"short-answer",points:10,difficulty:"medium",learning_objectives:["Understand divide and conquer paradigm","Identify problems suitable for divide and conquer","Analyze divide and conquer recurrences using Master Theorem"]}},"content/chapter-04/questions/dp-application.yml":{type:"yaml",module:{id:"ch5-dp-application",type:"short-answer",chapter:5,question:"Identify when dynamic programming is applicable. Given a problem, describe the overlapping subproblems and optimal substructure that justify a DP approach.",answer:"DP Applicability: (1) Optimal Substructure: Optimal solution contains optimal solutions to subproblems. Example: Shortest path A→C through B requires shortest path A→B. (2) Overlapping Subproblems: Same subproblems solved repeatedly. Example: Fibonacci F(5) needs F(4) and F(3), but F(4) also needs F(3) - overlap! (3) DP Strategy: Define subproblems, establish recurrence relation, build table bottom-up (or memoize top-down), reconstruct solution. Contrast with Greedy: DP considers all choices; Greedy makes irrevocable local decisions. Contrast with Divide-and-Conquer: DP has overlapping subproblems; D&C has independent subproblems.",topics:["Dynamic Programming","Algorithm Design","Problem Solving"]}},"content/chapter-04/questions/flow-applications.yml":{type:"yaml",module:{id:28,question:"Describe real-world applications of network flow algorithms",answer:"Answer pending",topics:["network flow","applications","problem modeling"],type:"short-answer",points:10,difficulty:"medium",learning_objectives:["Model real problems as flow networks","Apply flow algorithms to practical scenarios","Understand bipartite matching and other applications"]}},"content/chapter-04/questions/ford-fulkerson.yml":{type:"yaml",module:{id:26,question:"Explain and execute the Ford-Fulkerson algorithm for maximum flow",answer:"Answer pending",topics:["network flow","Ford-Fulkerson","graph algorithms"],type:"short-answer",points:10,difficulty:"hard",learning_objectives:["Understand augmenting paths","Execute Ford-Fulkerson algorithm","Analyze flow network properties"]}},"content/chapter-04/questions/fractional-knapsack.yml":{type:"yaml",module:{id:"ch4-fractional-knapsack",type:"short-answer",chapter:4,question:"Solve the fractional knapsack problem with given weights, values, and capacity. Show the greedy selection of items by value-to-weight ratio.",answer:"Fractional Knapsack Greedy: (1) Calculate value/weight ratio for each item. (2) Sort items by ratio (descending). (3) Greedily take items (whole or fraction) until capacity full. Example: Capacity 50. Items: A(w=10,v=60,r=6), B(w=20,v=100,r=5), C(w=30,v=120,r=4). Sort by ratio: A(6), B(5), C(4). Take all of A (10kg, value 60). Take all of B (20kg, value 100). Remaining capacity: 20kg. Take 20/30 of C (20kg, value 80). Total: 60+100+80=240. Greedy works because we can take fractions - always maximize value per unit weight.",topics:["Greedy Algorithms","Fractional Knapsack","Optimization"]}},"content/chapter-04/questions/greedy-strategy.yml":{type:"yaml",module:{id:22,question:"Explain the greedy strategy and identify when greedy algorithms produce optimal solutions",answer:"Answer pending",topics:["greedy algorithms","optimization","algorithm design"],type:"short-answer",points:10,difficulty:"medium",learning_objectives:["Understand the greedy choice property","Identify when greedy algorithms are optimal","Apply greedy strategy to problem solving"]}},"content/chapter-04/questions/huffman-encoding.yml":{type:"yaml",module:{id:"ch4-huffman-encoding",type:"short-answer",chapter:4,question:"Construct a Huffman encoding tree for a given set of character frequencies. Show the binary codes and explain why this greedy algorithm produces an optimal prefix code.",answer:"Huffman Algorithm: (1) Create leaf node for each character with its frequency. (2) Repeat until one tree: Find two nodes with smallest frequencies, create parent with sum of frequencies, remove two nodes, add parent. (3) Assign 0/1 to left/right edges. Example: {A:5, B:9, C:12, D:13, E:16, F:45}. Combine A+B (14), then 14+C (26), etc. Final codes: shorter codes for frequent characters. Why optimal? Greedy choice (combine lowest frequencies) ensures frequent characters stay near root (short codes), minimizing total encoding length. Proof by exchange argument shows no better prefix code exists.",topics:["Huffman Encoding","Greedy Algorithms","Data Compression"]}},"content/chapter-04/questions/intractable-problems.yml":{type:"yaml",module:{id:32,question:"Identify common intractable problems and discuss approaches for dealing with them",answer:"Answer pending",topics:["intractability","NP-hard problems","approximation algorithms"],type:"short-answer",points:10,difficulty:"medium",learning_objectives:["Identify classic NP-complete problems","Understand approaches for intractable problems","Apply heuristics and approximation algorithms"]}},"content/chapter-04/questions/knapsack-comparison.yml":{type:"yaml",module:{id:"ch4-knapsack-comparison",type:"short-answer",chapter:4,question:"Explain why a greedy approach works for the fractional knapsack but fails for the 0/1 knapsack. Provide a counterexample.",answer:"Fractional allows taking portions, so greedy (maximize value/weight ratio) is optimal - we can always fill remaining capacity with the best available item. 0/1 requires all-or-nothing choices. Counterexample: Capacity 10. Items: A(w=6,v=30,r=5), B(w=5,v=20,r=4), C(w=5,v=20,r=4). Greedy takes A (weight 6, value 30), then can't fit B or C together (need 10kg). Total: 30. Optimal takes B+C (weight 10, value 40). Greedy fails because early commitment to item with best ratio prevents better combination. 0/1 needs dynamic programming to explore all combinations.",topics:["Greedy Algorithms","0/1 Knapsack","Algorithm Limitations"]}},"content/chapter-04/questions/knapsack-dp.yml":{type:"yaml",module:{id:"ch5-knapsack-dp",type:"short-answer",chapter:5,question:"Solve the 0/1 knapsack problem using dynamic programming. Build the DP table and show the backtracking to find selected items.",answer:"0/1 Knapsack DP: (1) Create table dp[i][w] = max value using first i items with capacity w. (2) Recurrence: dp[i][w] = max(dp[i-1][w], value[i] + dp[i-1][w-weight[i]]) if weight[i]≤w, else dp[i-1][w]. (3) Base: dp[0][w]=0. Example: Capacity 10, Items (w,v): A(6,30), B(5,20), C(5,20). Fill table row by row. dp[3][10]=40 (B+C). Backtrack: At dp[3][10], value changed from dp[2][10], so C selected. Recurse to dp[2][5], B selected. Result: {B,C}. Time: O(nW), Space: O(nW).",topics:["Dynamic Programming","0/1 Knapsack","DP Table"]}},"content/chapter-04/questions/lcs-problem.yml":{type:"yaml",module:{id:"ch5-lcs-problem",type:"short-answer",chapter:5,question:"Given two sequences, find the longest common subsequence using dynamic programming. Show the DP table and reconstruct the LCS.",answer:"LCS DP: (1) Create table lcs[i][j] = length of LCS of first i chars of X and first j chars of Y. (2) Recurrence: If X[i]=Y[j], lcs[i][j] = 1 + lcs[i-1][j-1]. Else lcs[i][j] = max(lcs[i-1][j], lcs[i][j-1]). (3) Base: lcs[i][0]=lcs[0][j]=0. Example: X='ABCBDAB', Y='BDCABA'. Fill table. lcs[7][6]=4. Reconstruct: Follow arrows from lcs[7][6]. When X[i]=Y[j], include that character and move diagonally. Else move to max neighbor. Result: 'BCBA' or 'BDAB' (multiple LCS possible). Time: O(mn).",topics:["Dynamic Programming","Longest Common Subsequence","String Algorithms"]}},"content/chapter-04/questions/matrix-chain.yml":{type:"yaml",module:{id:"ch5-matrix-chain",type:"short-answer",chapter:5,question:"Determine the optimal order to multiply a chain of matrices to minimize the number of scalar multiplications. Show the DP table for the cost.",answer:"Matrix Chain Multiplication DP: (1) Given matrices A1...An with dimensions p0×p1, p1×p2, ..., pn-1×pn. (2) Create table m[i][j] = min cost to multiply Ai...Aj. (3) Recurrence: m[i][j] = min(m[i][k] + m[k+1][j] + pi-1×pk×pj) for i≤k<j. (4) Base: m[i][i]=0. Example: Matrices 10×20, 20×30, 30×40, 40×30. Fill table diagonally by chain length. m[1][4] gives min cost. Use separate table to track split points for reconstruction. Optimal: ((A1×A2)×A3)×A4 vs others. Time: O(n³).",topics:["Dynamic Programming","Matrix Chain Multiplication","Optimization"]}},"content/chapter-04/questions/max-flow-min-cut.yml":{type:"yaml",module:{id:27,question:"Explain the max-flow min-cut theorem and its applications",answer:"Answer pending",topics:["network flow","max-flow min-cut","graph theory"],type:"short-answer",points:10,difficulty:"hard",learning_objectives:["Understand max-flow min-cut theorem","Identify minimum cuts in flow networks","Apply duality in network flow problems"]}},"content/chapter-04/questions/merge-sort-analysis.yml":{type:"yaml",module:{id:23,question:`Analyze merge sort using the divide and conquer strategy:

(a) Describe how merge sort divides the problem and merges solutions.

(b) Write the recurrence relation T(n) for merge sort's time complexity.

(c) Apply the Master Theorem to solve this recurrence. State which case applies and explain why.
`,answer:`(a) Merge sort divides the array into two equal halves, recursively sorts each half, then merges the two sorted halves in linear time. The base case is an array of size 1 (already sorted).

(b) T(n) = 2T(n/2) + O(n)
   - 2T(n/2): Two recursive calls on half-sized problems
   - O(n): Linear time to merge two sorted halves

(c) Using Master Theorem with a=2, b=2, f(n)=n:
   - n^(log_b(a)) = n^(log_2(2)) = n^1 = n
   - f(n) = n = Θ(n^(log_b(a)))
   - This is Case 2: T(n) = Θ(n^(log_b(a)) log n) = Θ(n log n)
   
   Merge sort has Θ(n log n) time complexity in all cases (best, average, worst).
`,topics:["divide and conquer","merge sort","algorithm analysis","master theorem"],type:"short-answer",points:10,difficulty:"medium",learning_objectives:["Understand divide and conquer recurrence relations","Analyze merge sort time complexity","Apply Master Theorem"]}},"content/chapter-04/questions/np-completeness-proof.yml":{type:"yaml",module:{id:30,question:"Prove that a given problem is NP-complete using reduction",answer:"Answer pending",topics:["NP-completeness","proofs","reductions"],type:"short-answer",points:15,difficulty:"hard",learning_objectives:["Understand NP-completeness proofs","Apply reduction techniques","Verify problem membership in NP"]}},"content/chapter-04/questions/p-vs-np.yml":{type:"yaml",module:{id:29,question:"Explain the relationship between P and NP complexity classes",answer:"Answer pending",topics:["complexity theory","P vs NP","computational complexity"],type:"short-answer",points:10,difficulty:"hard",learning_objectives:["Understand P and NP complexity classes","Explain the P vs NP problem","Identify problems in P and NP"]}},"content/chapter-04/questions/quick-sort-analysis.yml":{type:"yaml",module:{id:24,question:"Analyze quick sort and discuss its best, average, and worst-case performance",answer:"Answer pending",topics:["divide and conquer","quick sort","algorithm analysis"],type:"short-answer",points:10,difficulty:"medium",learning_objectives:["Understand quicksort partitioning","Analyze quicksort complexity in different cases","Compare pivot selection strategies"]}},"content/chapter-04/questions/reduction-strategy.yml":{type:"yaml",module:{id:31,question:"Explain polynomial-time reductions and their role in complexity theory",answer:"Answer pending",topics:["reductions","complexity theory","problem transformations"],type:"short-answer",points:10,difficulty:"hard",learning_objectives:["Understand polynomial-time reductions","Apply reduction strategy to prove hardness","Construct reductions between problems"]}},"content/chapter-04/questions/sat-to-3sat-reduction.yml":{type:"yaml",module:{id:"ch4-sat-to-3sat-reduction",type:"short-answer",chapter:4,question:`Given the following SAT formula with mixed clause sizes:
- (x₁ ∨ x₂)
- (¬x₁ ∨ x₃ ∨ x₄ ∨ ¬x₅)
- (x₂ ∨ ¬x₃)
- (x₁)

(a) Transform this into an equivalent 3-SAT instance by applying the standard reduction rules:
   - 1-literal clauses: Add dummy literals (e.g., (x₁) becomes (x₁ ∨ y ∨ ¬y))
   - 2-literal clauses: Add dummy literal (e.g., (x₁ ∨ x₂) becomes (x₁ ∨ x₂ ∨ z))
   - 4+ literal clauses: Introduce auxiliary variables (e.g., (a ∨ b ∨ c ∨ d) becomes (a ∨ b ∨ z₁) ∧ (¬z₁ ∨ c ∨ d))

Show all auxiliary variables introduced and the resulting 3-SAT clauses.

(b) Given the satisfying assignment x₁=T, x₂=F, x₃=T, x₄=F, x₅=T for the original SAT instance, demonstrate that your 3-SAT instance is also satisfiable by providing appropriate values for all auxiliary and dummy variables.
`,answer:`(a) Applying the reduction rules:

Original clause 1: (x₁ ∨ x₂) - 2 literals
→ Add dummy variable y₁: (x₁ ∨ x₂ ∨ y₁)

Original clause 2: (¬x₁ ∨ x₃ ∨ x₄ ∨ ¬x₅) - 4 literals
→ Introduce auxiliary z₁: 
   (¬x₁ ∨ x₃ ∨ z₁) ∧ (¬z₁ ∨ x₄ ∨ ¬x₅)

Original clause 3: (x₂ ∨ ¬x₃) - 2 literals
→ Add dummy variable y₂: (x₂ ∨ ¬x₃ ∨ y₂)

Original clause 4: (x₁) - 1 literal
→ Add dummy variables y₃, y₄: (x₁ ∨ y₃ ∨ ¬y₃) or (x₁ ∨ y₃ ∨ y₄)

**Final 3-SAT formula:**
- (x₁ ∨ x₂ ∨ y₁)
- (¬x₁ ∨ x₃ ∨ z₁)
- (¬z₁ ∨ x₄ ∨ ¬x₅)
- (x₂ ∨ ¬x₃ ∨ y₂)
- (x₁ ∨ y₃ ∨ y₄)

(b) Verification with x₁=T, x₂=F, x₃=T, x₄=F, x₅=T:

- Clause 1: (T ∨ F ∨ y₁) = T (satisfied regardless of y₁)
- Clause 2: (F ∨ T ∨ z₁) = T (satisfied regardless of z₁)
- Clause 3: Set z₁=T to evaluate: (F ∨ F ∨ F) requires z₁=F for clause 2 to work
  Actually: (¬T ∨ T ∨ z₁) = (F ∨ T ∨ z₁) = T, so clause 2 satisfied with any z₁
  Clause 3: (¬z₁ ∨ F ∨ F) requires z₁=F. Set z₁=F.
- Clause 4: (F ∨ F ∨ y₂) = y₂, so set y₂=T
- Clause 5: (T ∨ y₃ ∨ y₄) = T (satisfied regardless)

**Assignment:** x₁=T, x₂=F, x₃=T, x₄=F, x₅=T, z₁=F, y₁=any, y₂=T, y₃=any, y₄=any

All clauses satisfied, proving the 3-SAT instance is satisfiable when the original SAT instance is satisfiable.
`,topics:["NP-completeness","Reductions","SAT","3-SAT","Polynomial-time transformations"]}},"content/chapter-05/bubble-sort-implementation-and-analysis.yml":{type:"yaml",module:{id:13,question:"Implement bubble sort and analyze its time complexity.",answer:"TODO: Add answer",topics:["sorting","bubble sort","analysis"],type:"problem_solving",points:5,difficulty:"medium",learning_objectives:[]}},"content/chapter-05/concept-map.yml":{type:"yaml",module:{concept_map:[{category:"Bonus Questions",concepts:[{name:"Advanced Topics",description:"Challenge problems beyond exam scope",exam_questions:["bubble-sort-implementation-and-analysis.yml","structural-recursion-on-lists-vs-arrays.yml"]}]}]}},"content/chapter-05/structural-recursion-on-lists-vs-arrays.yml":{type:"yaml",module:{id:10,question:"Compare structural recursion on lists vs arrays.",answer:"TODO: Add answer",topics:["recursion","arrays","linked lists"],type:"conceptual",points:3,difficulty:"medium",learning_objectives:[]}},"content/chapter-01/index.md":{type:"markdown",module:`# Chapter 1: Arrays, Lists, and a Taste of Complexity Theory\r
\r
This chapter introduces fundamental data structures and gives you a first look at how we analyze algorithm efficiency.\r
\r
## Big Picture\r
\r
Before diving into specifics, we'll explore how data structures relate to each other—from primitive data types all the way to complex graphs. We'll also survey the landscape of algorithms, from basic search techniques to the frontiers of computational complexity.\r
\r
## Arrays and Lists\r
\r
We'll examine two fundamental ways of organizing sequential data:\r
\r
* **Arrays**: Fixed-size, contiguous memory with O(1) random access\r
* **Linked Lists**: Dynamic structures with O(1) insertion/deletion at known positions\r
\r
You'll learn when to choose each structure based on your application's needs.\r
\r
## Basic Sorting Algorithms\r
\r
We'll implement and analyze two simple sorting algorithms:\r
\r
* **Insertion Sort**: Builds sorted array one element at a time\r
* **Selection Sort**: Repeatedly finds minimum element and places it\r
\r
These algorithms demonstrate fundamental algorithmic patterns and introduce Big-O notation for analyzing time complexity.\r
\r
## Key Learning Goals\r
\r
By the end of this chapter, you should be able to:\r
\r
* Implement basic linked list operations\r
* Analyze the time complexity of array vs. list operations\r
* Choose appropriate data structures for different scenarios\r
* Implement and analyze insertion sort and selection sort\r
* Understand when O(n²) sorting algorithms are appropriate\r
\r
## Code\r
\r
### Understanding Linked Lists\r
\r
The linked list is one of the most fundamental data structures in computer science, yet it represents a profound shift in how we think about organizing data in memory. Unlike arrays, which demand contiguous blocks of memory, linked lists embrace the fragmented nature of memory allocation, connecting scattered pieces through the elegant mechanism of pointers.\r
\r
At its heart, a linked list is a chain of nodes, where each node contains two essential components: the data it stores and a reference (or pointer) to the next node in the sequence. This simple structure gives rise to remarkable properties. Consider insertion at the beginning of the list—in an array, this operation requires shifting every element one position to the right, a linear-time operation. But in a linked list? We simply create a new node, point it to the current head, and update our head reference. Three pointer assignments, constant time, regardless of list size.\r
\r
However, this flexibility comes at a cost. Random access, the ability to jump directly to the 50th element, requires traversing all preceding nodes. What takes O(1) time in an array becomes O(n) in a linked list. This trade-off—constant-time insertion and deletion versus linear-time access—is fundamental to understanding when to choose each structure.\r
\r
The implementation below demonstrates a generic linked list in Java. Notice how the Node class is declared as a static inner class—this is a common pattern that keeps the node implementation encapsulated while avoiding unnecessary references to the outer class. The generic type parameter \`<T>\` makes our list reusable for any reference type, embodying the principle of code reusability that's central to modern software engineering.\r
\r
**Pseudocode:**\r
\`\`\`\r
CLASS LinkedList:\r
    head ← null\r
    size ← 0\r
    \r
    FUNCTION addFirst(data):\r
        newNode ← CREATE Node(data)\r
        newNode.next ← head\r
        head ← newNode\r
        size ← size + 1\r
    \r
    FUNCTION addLast(data):\r
        newNode ← CREATE Node(data)\r
        IF head = null THEN\r
            head ← newNode\r
        ELSE\r
            current ← head\r
            WHILE current.next ≠ null DO\r
                current ← current.next\r
            current.next ← newNode\r
        size ← size + 1\r
    \r
    FUNCTION removeFirst():\r
        IF head = null THEN\r
            ERROR "List is empty"\r
        data ← head.data\r
        head ← head.next\r
        size ← size - 1\r
        RETURN data\r
    \r
    FUNCTION contains(data):\r
        current ← head\r
        WHILE current ≠ null DO\r
            IF current.data = data THEN\r
                RETURN true\r
            current ← current.next\r
        RETURN false\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
public class LinkedList<T> {\r
    private Node<T> head;\r
    private int size;\r
    \r
    private static class Node<T> {\r
        T data;\r
        Node<T> next;\r
        \r
        Node(T data) {\r
            this.data = data;\r
            this.next = null;\r
        }\r
    }\r
    \r
    public LinkedList() {\r
        this.head = null;\r
        this.size = 0;\r
    }\r
    \r
    // O(1) - Insert at beginning\r
    public void addFirst(T data) {\r
        Node<T> newNode = new Node<>(data);\r
        newNode.next = head;\r
        head = newNode;\r
        size++;\r
    }\r
    \r
    // O(n) - Insert at end\r
    public void addLast(T data) {\r
        Node<T> newNode = new Node<>(data);\r
        if (head == null) {\r
            head = newNode;\r
        } else {\r
            Node<T> current = head;\r
            while (current.next != null) {\r
                current = current.next;\r
            }\r
            current.next = newNode;\r
        }\r
        size++;\r
    }\r
    \r
    // O(1) - Remove first element\r
    public T removeFirst() {\r
        if (head == null) {\r
            throw new IllegalStateException("List is empty");\r
        }\r
        T data = head.data;\r
        head = head.next;\r
        size--;\r
        return data;\r
    }\r
    \r
    // O(n) - Search for element\r
    public boolean contains(T data) {\r
        Node<T> current = head;\r
        while (current != null) {\r
            if (current.data.equals(data)) {\r
                return true;\r
            }\r
            current = current.next;\r
        }\r
        return false;\r
    }\r
    \r
    // O(n) - Get element at index\r
    public T get(int index) {\r
        if (index < 0 || index >= size) {\r
            throw new IndexOutOfBoundsException();\r
        }\r
        Node<T> current = head;\r
        for (int i = 0; i < index; i++) {\r
            current = current.next;\r
        }\r
        return current.data;\r
    }\r
    \r
    public int size() {\r
        return size;\r
    }\r
    \r
    public boolean isEmpty() {\r
        return size == 0;\r
    }\r
}\r
\`\`\`\r
\r
**Key Insights on Linked Lists:**\r
\r
The beauty of linked lists lies in their dynamic nature. Memory allocation happens on-demand, node by node, making them ideal for situations where the size of your collection is unknown or frequently changing. The \`addFirst\` operation showcases this perfectly—it's always O(1), whether your list has 10 elements or 10 million.\r
\r
However, notice the \`get(int index)\` method. It must traverse the list from the beginning, visiting each node until it reaches the target index. This sequential access pattern is the Achilles' heel of linked lists. If your algorithm requires frequent random access, a linked list will become a performance bottleneck.\r
\r
The \`contains\` method illustrates another important consideration: searching in an unsorted linked list is inherently linear. Without the ability to jump to arbitrary positions, we must check each element in sequence. This is why sorted arrays, despite their insertion costs, often outperform linked lists for search-heavy workloads—they enable binary search.\r
\r
### The Power of Dynamic Arrays\r
\r
If linked lists represent freedom from contiguous memory, dynamic arrays represent the best of both worlds—the random access speed of arrays with the growth flexibility of linked lists. The key insight is amortized analysis: while occasionally we must pay the cost of resizing, these expensive operations happen so infrequently that the average cost per insertion remains constant.\r
\r
Consider what happens when an ArrayList fills up. We can't simply extend the array in place—memory fragmentation might have allocated the adjacent space to another process. Instead, we allocate a new, larger array (typically double the size), copy all existing elements, and redirect our reference. This copying operation is O(n), seemingly destroying our insertion performance.\r
\r
But here's the beautiful mathematics of amortization: if we double the capacity each time, we resize on inserts number 1, 2, 4, 8, 16, 32, and so on. The total cost of copying after n insertions is 1 + 2 + 4 + 8 + ... ≈ 2n operations. Distributed across n insertions, that's an average of 2 operations per insertion—constant time!\r
\r
This doubling strategy creates an elegant balance. Double too aggressively (say, multiply by 10), and you waste memory. Double too conservatively (add a fixed amount), and you resize too frequently, degrading performance. The factor of 2 sits in the sweet spot, proving that sometimes the right constant matters as much as the asymptotic complexity.\r
\r
**Pseudocode:**\r
\`\`\`\r
CLASS DynamicArray:\r
    array ← new Array[10]\r
    size ← 0\r
    capacity ← 10\r
    \r
    FUNCTION add(element):\r
        IF size = capacity THEN\r
            resize()\r
        array[size] ← element\r
        size ← size + 1\r
    \r
    FUNCTION get(index):\r
        IF index < 0 OR index ≥ size THEN\r
            ERROR "Index out of bounds"\r
        RETURN array[index]\r
    \r
    FUNCTION remove(index):\r
        IF index < 0 OR index ≥ size THEN\r
            ERROR "Index out of bounds"\r
        element ← array[index]\r
        FOR i ← index TO size - 2 DO\r
            array[i] ← array[i + 1]\r
        array[size - 1] ← null\r
        size ← size - 1\r
        RETURN element\r
    \r
    FUNCTION resize():\r
        capacity ← capacity × 2\r
        newArray ← new Array[capacity]\r
        COPY array TO newArray\r
        array ← newArray\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
public class DynamicArray<T> {\r
    private Object[] array;\r
    private int size;\r
    private int capacity;\r
    \r
    public DynamicArray() {\r
        this.capacity = 10;\r
        this.array = new Object[capacity];\r
        this.size = 0;\r
    }\r
    \r
    // O(1) amortized - Add element\r
    public void add(T element) {\r
        if (size == capacity) {\r
            resize();\r
        }\r
        array[size++] = element;\r
    }\r
    \r
    // O(1) - Get element at index\r
    @SuppressWarnings("unchecked")\r
    public T get(int index) {\r
        if (index < 0 || index >= size) {\r
            throw new IndexOutOfBoundsException();\r
        }\r
        return (T) array[index];\r
    }\r
    \r
    // O(1) - Set element at index\r
    public void set(int index, T element) {\r
        if (index < 0 || index >= size) {\r
            throw new IndexOutOfBoundsException();\r
        }\r
        array[index] = element;\r
    }\r
    \r
    // O(n) - Remove element at index\r
    @SuppressWarnings("unchecked")\r
    public T remove(int index) {\r
        if (index < 0 || index >= size) {\r
            throw new IndexOutOfBoundsException();\r
        }\r
        T element = (T) array[index];\r
        for (int i = index; i < size - 1; i++) {\r
            array[i] = array[i + 1];\r
        }\r
        array[--size] = null;\r
        return element;\r
    }\r
    \r
    // O(n) - Resize array when capacity is reached\r
    private void resize() {\r
        capacity *= 2;\r
        Object[] newArray = new Object[capacity];\r
        System.arraycopy(array, 0, newArray, 0, size);\r
        array = newArray;\r
    }\r
    \r
    public int size() {\r
        return size;\r
    }\r
}\r
\`\`\`\r
\r
**Understanding Dynamic Arrays:**\r
\r
The implementation above reveals several crucial design decisions. First, notice the use of \`Object[]\` rather than a generic array. Java's type erasure prevents direct creation of generic arrays (\`new T[capacity]\` won't compile), forcing us to use \`Object[]\` and cast when retrieving elements. This is a technical limitation, but one that doesn't affect the algorithmic properties we care about.\r
\r
The \`remove\` method exposes the cost of maintaining contiguous storage. Removing an element from the middle requires shifting all subsequent elements left by one position—an O(n) operation. This stands in stark contrast to linked lists, where removal at a known position is O(1). Yet ArrayList remains the default choice for most applications because random access is simply more common than mid-list deletion in practice.\r
\r
The \`resize\` method uses \`System.arraycopy\`, a native method optimized at the JVM level for fast array copying. While we could use a loop, \`arraycopy\` often leverages processor-specific instructions for block memory moves, demonstrating how theoretical complexity analysis meets practical performance optimization.\r
\r
### Insertion Sort: The Intuitive Algorithm\r
\r
Insertion sort embodies one of the most natural approaches to sorting: the way humans organize a hand of playing cards. Pick up cards one at a time, and insert each into its correct position among the already-sorted cards. This intuitive process translates directly into an algorithm of remarkable simplicity and surprising utility.\r
\r
The algorithm maintains a simple invariant: at the start of iteration i, the first i elements are sorted among themselves. We then insert element i into its correct position within this sorted prefix, maintaining the invariant. When i reaches the end, the entire array is sorted—a textbook example of loop invariant reasoning.\r
\r
Why study an O(n²) algorithm when we have O(n log n) alternatives? Because insertion sort has properties that sophisticated algorithms lack. It's **adaptive**—if the input is nearly sorted, insertion sort approaches O(n) time, as elements need minimal shifting. It's **online**—you can sort elements as they arrive, without knowing the full dataset upfront. And it's **stable**—equal elements maintain their relative order, crucial for multi-key sorting scenarios.\r
\r
For small arrays (typically under 10-20 elements), insertion sort often outperforms merge sort and quicksort due to lower constant factors and better cache locality. This is why many optimized sorting implementations, including Java's \`Arrays.sort\`, switch to insertion sort for small subarrays. Understanding when a "slow" algorithm outperforms a "fast" one teaches us that big-O notation tells only part of the story.\r
\r
**Pseudocode:**\r
\`\`\`\r
FUNCTION insertionSort(arr):\r
    FOR i ← 1 TO length(arr) - 1 DO\r
        key ← arr[i]\r
        j ← i - 1\r
        \r
        // Move elements greater than key one position ahead\r
        WHILE j ≥ 0 AND arr[j] > key DO\r
            arr[j + 1] ← arr[j]\r
            j ← j - 1\r
        \r
        arr[j + 1] ← key\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
public class InsertionSort {\r
    // O(n²) worst case, O(n) best case (already sorted)\r
    // Stable sort, in-place\r
    public static void insertionSort(int[] arr) {\r
        for (int i = 1; i < arr.length; i++) {\r
            int key = arr[i];\r
            int j = i - 1;\r
            \r
            // Move elements greater than key one position ahead\r
            while (j >= 0 && arr[j] > key) {\r
                arr[j + 1] = arr[j];\r
                j--;\r
            }\r
            arr[j + 1] = key;\r
        }\r
    }\r
    \r
    // Generic version\r
    public static <T extends Comparable<T>> void insertionSort(T[] arr) {\r
        for (int i = 1; i < arr.length; i++) {\r
            T key = arr[i];\r
            int j = i - 1;\r
            \r
            while (j >= 0 && arr[j].compareTo(key) > 0) {\r
                arr[j + 1] = arr[j];\r
                j--;\r
            }\r
            arr[j + 1] = key;\r
        }\r
    }\r
}\r
\`\`\`\r
\r
**The Mechanics of Insertion Sort:**\r
\r
The inner while loop performs the critical work of insertion sort. It shifts elements rightward, creating a "hole" into which we can insert the key element. This shifting happens in reverse order—starting from position i-1 and working backward—because we're inserting into an already-sorted region.\r
\r
Notice the generic version uses \`Comparable<T>\`, Java's interface for defining natural ordering. This allows our sort to work with any type that defines a comparison operation. The \`extends Comparable<T>\` bound ensures type safety—we can't accidentally try to sort objects that don't know how to compare themselves.\r
\r
The best case scenario occurs when the array is already sorted. Each element is already in the correct position, so the inner while loop never executes. We simply scan through the array once—O(n) time. Contrast this with many O(n log n) algorithms that take the same time regardless of input order. This adaptiveness makes insertion sort ideal for maintaining a sorted list as new elements arrive.\r
\r
### Selection Sort: Systematic Minimums\r
\r
Selection sort takes a different philosophical approach to sorting: rather than inserting elements into a growing sorted region, it repeatedly selects the minimum element from the unsorted region and appends it to the sorted region. This mechanical simplicity comes with interesting trade-offs.\r
\r
The algorithm divides the array into two logical regions: a sorted prefix and an unsorted suffix. In each iteration, it finds the minimum element in the unsorted suffix and swaps it with the first unsorted element, effectively growing the sorted prefix by one element. After n-1 iterations, only one element remains in the unsorted region, which must be the maximum—the array is sorted.\r
\r
What makes selection sort distinctive is its **consistency**. Unlike insertion sort, which varies from O(n) to O(n²) based on input order, selection sort always performs exactly the same number of comparisons: (n-1) + (n-2) + ... + 1 = n(n-1)/2. The inner loop always searches the entire unsorted region, regardless of the data's arrangement. This predictability can be valuable in real-time systems where worst-case guarantees matter more than average-case performance.\r
\r
However, this consistency comes at a cost: selection sort isn't stable. When we swap the minimum element to the front, we might move it past equal elements, disrupting their original order. Consider sorting [4a, 3, 4b, 2] by value. Selection sort might produce [2, 3, 4b, 4a], reversing the 4's order. For multi-key sorting (e.g., sorting students by grade, then by name), this instability can be problematic.\r
\r
The algorithm's saving grace is its minimal number of swaps: at most n-1. If swaps are expensive—perhaps you're sorting large objects or writing to slow storage—selection sort's O(n) swaps can outweigh its O(n²) comparisons. This is a perfect example of how real-world constraints can make a theoretically inferior algorithm practically superior.\r
\r
**Pseudocode:**\r
\`\`\`\r
FUNCTION selectionSort(arr):\r
    FOR i ← 0 TO length(arr) - 2 DO\r
        minIndex ← i\r
        \r
        // Find the minimum element in unsorted portion\r
        FOR j ← i + 1 TO length(arr) - 1 DO\r
            IF arr[j] < arr[minIndex] THEN\r
                minIndex ← j\r
        \r
        // Swap minimum element with first unsorted element\r
        IF minIndex ≠ i THEN\r
            SWAP arr[i] AND arr[minIndex]\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
public class SelectionSort {\r
    // O(n²) in all cases\r
    // Not stable, in-place\r
    public static void selectionSort(int[] arr) {\r
        for (int i = 0; i < arr.length - 1; i++) {\r
            int minIndex = i;\r
            \r
            // Find the minimum element in unsorted portion\r
            for (int j = i + 1; j < arr.length; j++) {\r
                if (arr[j] < arr[minIndex]) {\r
                    minIndex = j;\r
                }\r
            }\r
            \r
            // Swap minimum element with first unsorted element\r
            if (minIndex != i) {\r
                int temp = arr[i];\r
                arr[i] = arr[minIndex];\r
                arr[minIndex] = temp;\r
            }\r
        }\r
    }\r
    \r
    // Generic version\r
    public static <T extends Comparable<T>> void selectionSort(T[] arr) {\r
        for (int i = 0; i < arr.length - 1; i++) {\r
            int minIndex = i;\r
            \r
            for (int j = i + 1; j < arr.length; j++) {\r
                if (arr[j].compareTo(arr[minIndex]) < 0) {\r
                    minIndex = j;\r
                }\r
            }\r
            \r
            if (minIndex != i) {\r
                T temp = arr[i];\r
                arr[i] = arr[minIndex];\r
                arr[minIndex] = temp;\r
            }\r
        }\r
    }\r
}\r
\`\`\`\r
\r
**Comparing the Quadratic Sorts:**\r
\r
Both insertion sort and selection sort live in the O(n²) complexity class, yet they occupy different niches in the algorithmic ecosystem. Insertion sort shines with nearly-sorted data and as an online algorithm, while selection sort offers predictable performance and minimal swaps. Neither will win performance competitions on large datasets, yet both remain relevant in modern computing.\r
\r
The choice between them reveals a deeper truth about algorithm design: context matters more than complexity class. In a system that sorts thousands of small arrays, insertion sort's cache-friendly access pattern and adaptive behavior likely make it the winner. In an embedded system writing to flash memory with limited write cycles, selection sort's few swaps become invaluable. And for teaching? Both illuminate fundamental concepts—loop invariants, stability, adaptiveness—that apply to all sorting algorithms.\r
\r
As we progress through this course, we'll encounter faster sorting algorithms: merge sort's guaranteed O(n log n) performance, quicksort's practical speed, and heapsort's optimal worst-case behavior. Yet these simple O(n²) sorts remain our foundation. They prove that elegant code need not be complex, that slow algorithms can outperform fast ones in the right context, and that understanding trade-offs is more valuable than memorizing complexities.\r
\r
## Bonus Videos\r
\r
Lists vs Arrays:\r
\r
{{YouTube:https://www.youtube.com/watch?v=xFMXIgvlgcY}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=lC-yYCOnN8Q}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=dMy2hq9OUMc}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=34ky600VTN0}}\r
\r
Insertion Sort:\r
\r
{{YouTube:https://www.youtube.com/watch?v=TZRWRjq2CAg}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=JU767SDMDvA}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=8mJ-OhcfpYg}}\r
\r
Selection Sort:\r
\r
* https://www.youtube.com/watch?v=g-PGLbMth_g\r
* https://www.youtube.com/watch?v=EwjnF7rFLns\r
* https://www.youtube.com/watch?v=Iccmrk2ZWoc\r
* https://www.youtube.com/watch?v=dsqsnngsoD8\r
`},"content/chapter-02/index.md":{type:"markdown",module:`# Chapter 2: Mathematics of Algorithm Complexity\r
\r
This chapter develops the mathematical foundations for analyzing algorithm efficiency using asymptotic notation.\r
\r
## Big-O Notation\r
\r
Big-O notation provides a formal language for describing how algorithms scale with input size. You'll learn:\r
\r
* The mathematical definition of O, Ω, and Θ\r
* How to prove asymptotic bounds rigorously\r
* Common pitfalls and misconceptions\r
\r
## Function Classes\r
\r
Different algorithms exhibit different growth rates. We'll explore:\r
\r
* **Constant**: O(1)\r
* **Logarithmic**: O(log n)\r
* **Linear**: O(n)\r
* **Linearithmic**: O(n log n)\r
* **Quadratic**: O(n²)\r
* **Exponential**: O(2ⁿ)\r
\r
## Analysis Techniques\r
\r
You'll develop skills for analyzing code complexity:\r
\r
* Counting operations in loops\r
* Analyzing nested loops\r
* Handling conditional statements\r
* Amortized analysis basics\r
\r
## Comparing Algorithms\r
\r
Learn to rank algorithms by efficiency and understand the practical implications of different complexity classes.\r
\r
## Key Learning Goals\r
\r
By the end of this chapter, you should be able to:\r
\r
* Use Big-O, Big-Omega, and Big-Theta notation correctly\r
* Determine tight asymptotic bounds for functions\r
* Analyze the time complexity of code with loops and conditionals\r
* Compare algorithms and predict their relative performance\r
* Understand when constant factors matter vs. when they don't\r
\r
## Code\r
\r
### The Hierarchy of Growth Rates\r
\r
In the landscape of algorithm analysis, we encounter a hierarchy of growth rates that fundamentally shapes how we think about scalability. Some algorithms remain blazingly fast no matter how large the input grows. Others slow down gracefully, maintaining practical performance even at scale. Still others collapse under their own computational weight, becoming unusable beyond modest input sizes.\r
\r
This hierarchy isn't arbitrary—it emerges from the mathematical structure of computation itself. Each complexity class represents a different relationship between input size and running time, and understanding these relationships is essential for building systems that scale.\r
\r
Let's begin with constant time: O(1). These operations are the bedrock of efficient computation. They complete in a fixed number of steps, regardless of whether you're processing 10 items or 10 billion. Accessing an array element by index, checking if a number is even or odd, pushing onto a stack—these operations define the baseline from which we measure all other algorithms.\r
\r
Then comes logarithmic time: O(log n). These algorithms exhibit one of the most beautiful properties in computer science—they conquer problems by repeatedly cutting them in half. When you double your input size, a logarithmic algorithm performs just one additional operation. This is the mathematics of binary search, balanced trees, and divide-and-conquer strategies. Logarithmic algorithms are nearly as good as constant-time ones, remaining practical even with astronomical datasets.\r
\r
Linear time: O(n). These algorithms must examine each input element at least once. Reading a file, summing an array, finding a maximum—linear algorithms represent the minimum time needed when every element matters. They scale proportionally: double the input, double the time. Linear algorithms are the standard of reasonable efficiency.\r
\r
Linearithmic time: O(n log n) marks a crucial threshold. This is the best we can do for comparison-based sorting in the general case—a mathematical fact, not an engineering limitation. Algorithms in this class, like merge sort and heapsort, combine linear work with logarithmic depth. They remain practical at scale, sorting millions of elements in seconds.\r
\r
Beyond this, we enter the realm of diminishing practicality. Quadratic algorithms O(n²) struggle with thousands of elements. Cubic algorithms O(n³) collapse under hundreds. Exponential algorithms O(2ⁿ) are intractable beyond the tiniest inputs. These aren't slow algorithms—they're fundamentally limited by the mathematical structure of their approach.\r
\r
**Pseudocode:**\r
\`\`\`\r
// O(1) - Constant Time\r
FUNCTION getFirstElement(arr):\r
    RETURN arr[0]\r
\r
// O(log n) - Logarithmic Time\r
FUNCTION binarySearch(arr, target):\r
    left ← 0\r
    right ← length(arr) - 1\r
    WHILE left ≤ right DO\r
        mid ← (left + right) / 2\r
        IF arr[mid] = target THEN\r
            RETURN mid\r
        ELSE IF arr[mid] < target THEN\r
            left ← mid + 1\r
        ELSE\r
            right ← mid - 1\r
    RETURN -1\r
\r
// O(n) - Linear Time\r
FUNCTION findMax(arr):\r
    max ← arr[0]\r
    FOR i ← 1 TO length(arr) - 1 DO\r
        IF arr[i] > max THEN\r
            max ← arr[i]\r
    RETURN max\r
\r
// O(n²) - Quadratic Time\r
FUNCTION hasDuplicate(arr):\r
    FOR i ← 0 TO length(arr) - 1 DO\r
        FOR j ← i + 1 TO length(arr) - 1 DO\r
            IF arr[i] = arr[j] THEN\r
                RETURN true\r
    RETURN false\r
\r
// O(2ⁿ) - Exponential Time\r
FUNCTION fibonacciNaive(n):\r
    IF n ≤ 1 THEN\r
        RETURN n\r
    RETURN fibonacciNaive(n - 1) + fibonacciNaive(n - 2)\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
public class ComplexityExamples {\r
    \r
    // O(1) - Constant Time\r
    // Operation time doesn't depend on input size\r
    public static int getFirstElement(int[] arr) {\r
        if (arr.length == 0) {\r
            throw new IllegalArgumentException("Array is empty");\r
        }\r
        return arr[0];\r
    }\r
    \r
    // O(log n) - Logarithmic Time\r
    // Binary search in sorted array\r
    public static int binarySearch(int[] arr, int target) {\r
        int left = 0;\r
        int right = arr.length - 1;\r
        \r
        while (left <= right) {\r
            int mid = left + (right - left) / 2;\r
            \r
            if (arr[mid] == target) {\r
                return mid;\r
            } else if (arr[mid] < target) {\r
                left = mid + 1;\r
            } else {\r
                right = mid - 1;\r
            }\r
        }\r
        return -1; // Not found\r
    }\r
    \r
    // O(n) - Linear Time\r
    // Single pass through array\r
    public static int findMax(int[] arr) {\r
        if (arr.length == 0) {\r
            throw new IllegalArgumentException("Array is empty");\r
        }\r
        \r
        int max = arr[0];\r
        for (int i = 1; i < arr.length; i++) {\r
            if (arr[i] > max) {\r
                max = arr[i];\r
            }\r
        }\r
        return max;\r
    }\r
    \r
    // O(n log n) - Linearithmic Time\r
    // Efficient sorting (merge sort shown later in Chapter 4)\r
    public static void efficientSort(int[] arr) {\r
        java.util.Arrays.sort(arr); // Uses dual-pivot quicksort: O(n log n)\r
    }\r
    \r
    // O(n²) - Quadratic Time\r
    // Nested loops over the array\r
    public static boolean hasDuplicate(int[] arr) {\r
        for (int i = 0; i < arr.length; i++) {\r
            for (int j = i + 1; j < arr.length; j++) {\r
                if (arr[i] == arr[j]) {\r
                    return true;\r
                }\r
            }\r
        }\r
        return false;\r
    }\r
    \r
    // O(n³) - Cubic Time\r
    // Three nested loops\r
    public static int countTriples(int[] arr, int sum) {\r
        int count = 0;\r
        for (int i = 0; i < arr.length; i++) {\r
            for (int j = i + 1; j < arr.length; j++) {\r
                for (int k = j + 1; k < arr.length; k++) {\r
                    if (arr[i] + arr[j] + arr[k] == sum) {\r
                        count++;\r
                    }\r
                }\r
            }\r
        }\r
        return count;\r
    }\r
    \r
    // O(2ⁿ) - Exponential Time\r
    // Naive recursive Fibonacci\r
    public static int fibonacciNaive(int n) {\r
        if (n <= 1) {\r
            return n;\r
        }\r
        return fibonacciNaive(n - 1) + fibonacciNaive(n - 2);\r
    }\r
    \r
    // O(n!) - Factorial Time\r
    // Generate all permutations\r
    public static void generatePermutations(int[] arr, int start) {\r
        if (start == arr.length - 1) {\r
            // Process permutation\r
            return;\r
        }\r
        \r
        for (int i = start; i < arr.length; i++) {\r
            swap(arr, start, i);\r
            generatePermutations(arr, start + 1);\r
            swap(arr, start, i); // Backtrack\r
        }\r
    }\r
    \r
    private static void swap(int[] arr, int i, int j) {\r
        int temp = arr[i];\r
        arr[i] = arr[j];\r
        arr[j] = temp;\r
    }\r
}\r
\`\`\`\r
\r
**Understanding Each Complexity Class:**\r
\r
The constant-time operation \`getFirstElement\` embodies computational determinism—it performs exactly the same work whether the array contains one element or one billion. This is array indexing's superpower: the address calculation is arithmetic, independent of array size.\r
\r
Binary search reveals logarithmic growth's elegance. Each comparison eliminates half the remaining search space. After one comparison, 50% remains. After two, 25%. After three, 12.5%. With 30 comparisons, you can search a billion-element array. This is why log n ≈ constant in practice—log₂(1,000,000,000) ≈ 30.\r
\r
The linear \`findMax\` demonstrates irreducible complexity—when every element might be the maximum, you must check them all. No clever trick can avoid examining each element at least once. This is a fundamental lower bound, not an implementation detail.\r
\r
The quadratic \`hasDuplicate\` shows how nested loops multiply complexities. The outer loop runs n times, and for each iteration, the inner loop runs approximately n times, giving n × n = n² operations. This quadratic explosion is why algorithms with nested loops struggle at scale.\r
\r
The cubic \`countTriples\` extends this pattern—three nested loops mean three factors of n multiplied together. The gap between O(n²) and O(n³) may seem small in notation, but it's enormous in practice: sorting 1000 elements takes roughly 1,000,000 operations in O(n²), but 1,000,000,000 in O(n³).\r
\r
Exponential time, exemplified by naive Fibonacci, represents a catastrophic failure of efficiency. Each call spawns two more calls, creating a tree of computation that doubles at each level. Computing fibonacci(40) requires over a billion recursive calls. This isn't slow—it's intractable.\r
\r
Factorial time is even worse. Generating all permutations of n items requires n! operations—for just 10 items, that's 3,628,800 operations. For 20 items? 2,432,902,008,176,640,000. Factorial algorithms are useful only for tiny inputs or when no better approach exists.\r
\r
### Decoding Loops: Patterns of Complexity\r
\r
The ability to analyze loop structures is fundamental to understanding algorithm efficiency. Loops are the primary mechanism by which we repeat operations, and the structure of these loops directly determines an algorithm's complexity class. Let's explore the patterns that emerge.\r
\r
Single loops are straightforward: if the loop variable increments by a constant and touches each element once, the complexity is linear in the loop's range. But loops can be more subtle. A loop that increments by 2 still visits half the elements—but half of n is still O(n). Constants vanish in asymptotic analysis because they become negligible as n grows large.\r
\r
Multiplicative loops tell a different story. When your loop variable multiplies or divides by a constant factor (like i *= 2 or i /= 2), you're dealing with logarithmic growth. Why? Because you can only double or halve log n times before reaching n or 1. This is the mathematical foundation of binary search's efficiency.\r
\r
Nested loops demand careful analysis. If both loops iterate over n elements, the complexity is clearly O(n²)—n iterations of n operations each. But if the inner loop's bound depends on the outer loop's variable (like j < i), we're counting a triangular number: 1 + 2 + 3 + ... + n = n(n+1)/2. The n² term dominates, so it's still O(n²), but the constant factor is roughly half.\r
\r
Sequential loops don't nest—they follow each other. Three consecutive O(n) loops give O(n) + O(n) + O(n) = O(3n) = O(n). The fastest-growing term dominates in sum, just as the largest term dominates in products.\r
\r
**Pseudocode:**\r
\`\`\`\r
// Single Loop - O(n)\r
FUNCTION sumArray(arr):\r
    sum ← 0\r
    FOR i ← 0 TO length(arr) - 1 DO\r
        sum ← sum + arr[i]\r
    RETURN sum\r
\r
// Logarithmic Loop - O(log n)\r
FUNCTION powerOfTwo(n):\r
    result ← 1\r
    power ← 1\r
    WHILE power < n DO\r
        result ← result * 2\r
        power ← power * 2\r
    RETURN result\r
\r
// Standard Nested Loops - O(n²)\r
FUNCTION printPairs(arr):\r
    FOR i ← 0 TO length(arr) - 1 DO\r
        FOR j ← 0 TO length(arr) - 1 DO\r
            PRINT arr[i], arr[j]\r
\r
// Triangular Nested Loops - O(n²)\r
FUNCTION printUniquePairs(arr):\r
    FOR i ← 0 TO length(arr) - 1 DO\r
        FOR j ← i + 1 TO length(arr) - 1 DO\r
            PRINT arr[i], arr[j]\r
\r
// Logarithmic Inner Loop - O(n log n)\r
FUNCTION nestedLogarithmic(n):\r
    FOR i ← 0 TO n - 1 DO\r
        j ← 1\r
        WHILE j < n DO\r
            PRINT i, j\r
            j ← j * 2\r
\r
// Sequential Loops - O(n)\r
FUNCTION sequentialLoops(arr):\r
    sum1 ← 0\r
    FOR i ← 0 TO length(arr) - 1 DO\r
        sum1 ← sum1 + arr[i]\r
    \r
    sum2 ← 0\r
    FOR j ← 0 TO length(arr) - 1 DO\r
        sum2 ← sum2 + arr[j]\r
    \r
    sum3 ← 0\r
    FOR k ← 0 TO length(arr) - 1 DO\r
        sum3 ← sum3 + arr[k]\r
    \r
    RETURN sum1 + sum2 + sum3\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
public class LoopAnalysis {\r
    \r
    // O(n) - Single loop\r
    public static int sumArray(int[] arr) {\r
        int sum = 0;\r
        for (int i = 0; i < arr.length; i++) {\r
            sum += arr[i];\r
        }\r
        return sum;\r
    }\r
    \r
    // O(n) - Loop increments by more than 1\r
    public static int sumEveryOther(int[] arr) {\r
        int sum = 0;\r
        for (int i = 0; i < arr.length; i += 2) {\r
            sum += arr[i];\r
        }\r
        return sum;\r
    }\r
    \r
    // O(log n) - Loop variable multiplies/divides\r
    public static int powerOfTwo(int n) {\r
        int result = 1;\r
        for (int i = 1; i <= n; i *= 2) {\r
            result++;\r
        }\r
        return result;\r
    }\r
    \r
    // O(n²) - Nested loops, both dependent on n\r
    public static void printPairs(int n) {\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 0; j < n; j++) {\r
                System.out.println("(" + i + ", " + j + ")");\r
            }\r
        }\r
    }\r
    \r
    // O(n²) - Nested loops with triangular pattern\r
    public static void printTriangular(int n) {\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 0; j <= i; j++) {\r
                System.out.print("* ");\r
            }\r
            System.out.println();\r
        }\r
        // Total iterations: 1 + 2 + 3 + ... + n = n(n+1)/2 = O(n²)\r
    }\r
    \r
    // O(n log n) - Outer loop is n, inner loop is log n\r
    public static void nestedLogLoop(int n) {\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 1; j < n; j *= 2) {\r
                // Some O(1) operation\r
            }\r
        }\r
    }\r
    \r
    // O(n) - Sequential loops (not nested)\r
    public static void sequentialLoops(int[] arr) {\r
        // First loop: O(n)\r
        for (int i = 0; i < arr.length; i++) {\r
            System.out.println(arr[i]);\r
        }\r
        \r
        // Second loop: O(n)\r
        for (int i = 0; i < arr.length; i++) {\r
            System.out.println(arr[i] * 2);\r
        }\r
        \r
        // Total: O(n) + O(n) = O(n)\r
    }\r
}\r
\`\`\`\r
\r
**Loop Analysis Insights:**\r
\r
The \`sumEveryOther\` method reveals an important principle: skipping elements doesn't change the growth rate. Whether you visit every element or every other element, you still make a linear number of visits. The constant factor changes (from 1 to 0.5), but constants disappear in Big-O notation. This is why O(n/2) = O(n) = O(2n).\r
\r
The \`powerOfTwo\` method demonstrates logarithmic loops in action. The variable i starts at 1 and doubles each iteration: 1, 2, 4, 8, 16, ... It takes log₂ n doublings to reach n, making the loop O(log n). This pattern appears whenever you're halving or doubling your way through a problem space.\r
\r
The triangular pattern in \`printTriangular\` is deceptive. The inner loop runs 1 time, then 2 times, then 3 times, up to n times. The sum 1 + 2 + 3 + ... + n = n(n+1)/2 looks linear, but that n² term makes it quadratic. The comment makes this explicit—good complexity analysis should justify, not just assert.\r
\r
The \`nestedLogLoop\` combines linear and logarithmic complexity multiplicatively: n iterations of log n work each = O(n log n). This is the complexity class of efficient sorting algorithms, sitting between linear and quadratic. It's a sweet spot—fast enough for huge datasets, yet slower than linear.\r
\r
The sequential loops example reinforces that addition of complexities is dominated by the largest term. If one loop were O(n) and another O(n²), the total would be O(n) + O(n²) = O(n²). The quadratic term dominates as n grows, rendering the linear term negligible by comparison.\r
\r
### Space Complexity: The Hidden Cost\r
\r
Time complexity dominates discussions of algorithm efficiency, but space complexity—the memory an algorithm requires—is equally crucial. In resource-constrained environments (embedded systems, mobile devices, large-scale cloud computing), memory can be the limiting factor. Moreover, space and time often trade off: faster algorithms frequently consume more memory.\r
\r
**Pseudocode:**\r
\`\`\`\r
// O(1) Space - Constant extra space\r
FUNCTION sumIterative(n):\r
    sum ← 0\r
    FOR i ← 1 TO n DO\r
        sum ← sum + i\r
    RETURN sum\r
\r
// O(n) Space - Linear extra space (recursion stack)\r
FUNCTION sumRecursive(n):\r
    IF n ≤ 0 THEN\r
        RETURN 0\r
    RETURN n + sumRecursive(n - 1)\r
\r
// O(n) Space - Explicit array storage\r
FUNCTION createArray(n):\r
    arr ← NEW ARRAY of size n\r
    FOR i ← 0 TO n - 1 DO\r
        arr[i] ← i * i\r
    RETURN arr\r
\r
// O(n²) Space - Two-dimensional array\r
FUNCTION createMatrix(n):\r
    matrix ← NEW 2D ARRAY of size n × n\r
    FOR i ← 0 TO n - 1 DO\r
        FOR j ← 0 TO n - 1 DO\r
            matrix[i][j] ← i * j\r
    RETURN matrix\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
public class SpaceComplexity {\r
    \r
    // O(1) space - Only uses fixed amount of extra space\r
    public static int sumIterative(int n) {\r
        int sum = 0;\r
        for (int i = 1; i <= n; i++) {\r
            sum += i;\r
        }\r
        return sum;\r
    }\r
    \r
    // O(n) space - Creates array of size n\r
    public static int[] createArray(int n) {\r
        int[] arr = new int[n];\r
        for (int i = 0; i < n; i++) {\r
            arr[i] = i * i;\r
        }\r
        return arr;\r
    }\r
    \r
    // O(n) space - Recursive call stack depth\r
    public static int sumRecursive(int n) {\r
        if (n <= 0) {\r
            return 0;\r
        }\r
        return n + sumRecursive(n - 1);\r
    }\r
    \r
    // O(n²) space - Creates 2D array\r
    public static int[][] createMatrix(int n) {\r
        int[][] matrix = new int[n][n];\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 0; j < n; j++) {\r
                matrix[i][j] = i + j;\r
            }\r
        }\r
        return matrix;\r
    }\r
}\r
\`\`\`\r
\r
**The Space-Time Tradeoff:**\r
\r
The iterative \`sumIterative\` uses O(1) space—just a single variable for the accumulator, plus a loop counter. No matter how large n grows, the memory footprint remains constant. This is the gold standard of space efficiency.\r
\r
The \`createArray\` method uses O(n) space—it allocates an array proportional to the input size. This is unavoidable when the output itself is size n, but it's worth distinguishing between space used for the output (often excluded from complexity analysis) and auxiliary space used during computation.\r
\r
The recursive \`sumRecursive\` reveals a hidden cost: call stack space. Each recursive call adds a frame to the call stack, and those frames accumulate until the base case is reached. For n = 1000, you're using 1000 stack frames—each holding local variables and return addresses. This is why deep recursion can cause stack overflow errors, and why iterative solutions often have better space complexity.\r
\r
The \`createMatrix\` method demonstrates quadratic space: an n×n matrix contains n² elements. Two-dimensional arrays, adjacency matrices for graphs, and dynamic programming tables often require quadratic space. When n reaches thousands, quadratic space becomes impractical—a 10,000 × 10,000 integer matrix requires roughly 400MB.\r
\r
The fundamental lesson: every algorithm exists in a multidimensional space of trade-offs. Sometimes we can optimize time without affecting space (using a better algorithm). Sometimes we trade space for time (memoization). Sometimes we must accept one cost to reduce another. Understanding these trade-offs is as important as knowing the complexities themselves.\r
\r
## Bonus Videos\r
\r
Big O\r
\r
{{YouTube:https://www.youtube.com/watch?v=XMUe3zFhM5c}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=BgLTDT03QtU}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=__vX2sjlpXU}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=Q_1M2JaijjQ}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=MyeV2_tGqvw}} `},"content/chapter-03/index.md":{type:"markdown",module:`# Chapter 3: Recursion, Trees, and Graphs\r
\r
This chapter explores recursive algorithms and the hierarchical and networked data structures that naturally support them.\r
\r
## Recursion\r
\r
Recursion is a powerful problem-solving technique where functions call themselves. You'll learn:\r
\r
* How recursion relates to iteration\r
* Writing and solving recurrence relations\r
* Analyzing recursive algorithms (including the Fibonacci sequence)\r
* Optimization techniques like memoization\r
\r
## Tree Data Structures\r
\r
Trees provide hierarchical organization with efficient search and modification. We'll compare:\r
\r
* **Binary Search Trees (BSTs)**: Simple but potentially unbalanced\r
* **AVL Trees**: Strict balance guarantees faster lookups\r
* **Red-Black Trees**: Looser balance, fewer rotations\r
* **B-Trees**: Multi-way trees optimized for disk access\r
\r
## Graph Algorithms\r
\r
Graphs model relationships and networks. You'll master:\r
\r
* **Representation**: Adjacency matrices vs. adjacency lists\r
* **Traversal**: BFS and DFS for exploring graphs\r
* **Shortest Paths**: BFS for unweighted graphs, Dijkstra for weighted\r
* **Minimum Spanning Trees**: Prim's and Kruskal's algorithms\r
\r
## Key Learning Goals\r
\r
By the end of this chapter, you should be able to:\r
\r
* Write and analyze recursive algorithms\r
* Solve recurrence relations using multiple techniques\r
* Choose appropriate tree structures for different applications\r
* Implement BFS and DFS traversal algorithms\r
* Apply Dijkstra's algorithm to find shortest paths\r
* Use Prim's or Kruskal's to find minimum spanning trees\r
* Prove correctness of greedy graph algorithms\r
\r
## Code\r
\r
### The Power and Peril of Recursion\r
\r
Recursion is perhaps the most elegant and the most dangerous tool in a programmer's arsenal. At its essence, recursion is a function calling itself—a seemingly circular definition that, through the magic of base cases, produces correct results. Recursion transforms complex problems into simpler versions of themselves, building solutions from the ground up through the call stack.\r
\r
The beauty of recursion lies in its correspondence to mathematical induction. To prove a property holds for all natural numbers, we prove it for 0 (base case) and show that if it holds for n, it holds for n+1 (inductive step). Recursive functions follow the same pattern: handle the base case, then reduce the problem toward the base case. This mathematical foundation gives recursive solutions an almost proof-like quality.\r
\r
But recursion's elegance masks danger. Each recursive call consumes stack space, and the call stack is finite. Deeply recursive algorithms can exhaust stack memory, causing runtime errors. Moreover, naive recursion can perform redundant computation—calculating the same values repeatedly without remembering previous results.\r
\r
The Fibonacci sequence perfectly illustrates both recursion's beauty and its pitfalls. The mathematical definition is inherently recursive: F(n) = F(n-1) + F(n-2). A direct translation into code seems natural, even obvious. Yet this naive implementation is catastrophically inefficient, recomputing the same values exponentially many times.\r
\r
Enter memoization: the technique of caching results to avoid redundant computation. By storing each Fibonacci number when we first compute it, we transform an exponential algorithm into a linear one. This isn't just an optimization—it's a fundamental transformation of the algorithm's complexity class. Memoization exemplifies a crucial principle: sometimes the right data structure (here, a cache) turns an impractical algorithm into a practical one.\r
\r
**Pseudocode:**\r
\`\`\`\r
// Factorial - O(n) time, O(n) space\r
FUNCTION factorial(n):\r
    IF n ≤ 1 THEN\r
        RETURN 1\r
    RETURN n * factorial(n - 1)\r
\r
// Naive Fibonacci - O(2ⁿ) time, O(n) space\r
FUNCTION fibonacciNaive(n):\r
    IF n ≤ 1 THEN\r
        RETURN n\r
    RETURN fibonacciNaive(n - 1) + fibonacciNaive(n - 2)\r
\r
// Memoized Fibonacci - O(n) time, O(n) space\r
memo ← EMPTY MAP\r
FUNCTION fibonacciMemo(n):\r
    IF n ≤ 1 THEN\r
        RETURN n\r
    IF memo CONTAINS n THEN\r
        RETURN memo[n]\r
    result ← fibonacciMemo(n - 1) + fibonacciMemo(n - 2)\r
    memo[n] ← result\r
    RETURN result\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
public class RecursionExamples {\r
    \r
    // Factorial: O(n) time, O(n) space (call stack)\r
    public static int factorial(int n) {\r
        if (n <= 1) {\r
            return 1;\r
        }\r
        return n * factorial(n - 1);\r
    }\r
    \r
    // Fibonacci - Naive: O(2ⁿ) time, O(n) space\r
    public static int fibonacciNaive(int n) {\r
        if (n <= 1) {\r
            return n;\r
        }\r
        return fibonacciNaive(n - 1) + fibonacciNaive(n - 2);\r
    }\r
    \r
    // Fibonacci - Memoized: O(n) time, O(n) space\r
    public static int fibonacciMemo(int n) {\r
        return fibonacciMemo(n, new int[n + 1]);\r
    }\r
    \r
    private static int fibonacciMemo(int n, int[] memo) {\r
        if (n <= 1) {\r
            return n;\r
        }\r
        if (memo[n] != 0) {\r
            return memo[n];\r
        }\r
        memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);\r
        return memo[n];\r
    }\r
}\r
\`\`\`\r
\r
**Recursion in Practice:**\r
\r
The factorial function demonstrates recursion at its simplest: a single recursive call that makes the problem smaller. Each call to \`factorial(n)\` becomes \`n * factorial(n-1)\`, reducing n by 1 until reaching the base case. The call stack grows to depth n, then unwinds, multiplying values as it collapses.\r
\r
The naive Fibonacci implementation reveals recursion's dark side. To compute fibonacci(5), we compute fibonacci(4) and fibonacci(3). But fibonacci(4) recomputes fibonacci(3), and both recompute fibonacci(2) multiple times. The recursion tree has exponential nodes, even though there are only n unique values to compute. This explosion of redundant work makes the algorithm impractical beyond tiny inputs.\r
\r
The memoized version changes everything. The memo array acts as a cache—before computing fibonacci(n), we check if we've already computed it. If so, return the cached value. If not, compute it, cache it, then return it. This simple addition means each Fibonacci number is computed exactly once. The call tree's redundant branches are pruned away, leaving a linear chain of unique computations. We've transformed O(2ⁿ) into O(n) by adding O(n) space—a classic space-time tradeoff.\r
\r
### Binary Search Trees: Elegant but Fragile\r
\r
The binary search tree (BST) is one of computer science's foundational data structures. It combines the fast search of sorted arrays with the efficient insertion of linked lists—at least in theory. The BST property is elegantly simple: for every node, all values in its left subtree are smaller, and all values in its right subtree are larger. This recursive structure enables recursive algorithms of corresponding elegance.\r
\r
With a balanced BST, search, insertion, and deletion all take O(log n) time. The tree's height is logarithmic, and each operation descends one level per comparison, giving logarithmic performance. This is the promise that makes BSTs attractive: logarithmic operations without the complexity of array-based structures.\r
\r
But there's a catch—a potentially devastating one. BSTs only achieve O(log n) performance when balanced. Insert sorted data into a BST, and you get a linked list masquerading as a tree: every node has only a right child, creating a degenerate tree of height n. Now every operation is O(n), worse than a simple array.\r
\r
This fragility is why we need self-balancing trees: AVL trees, Red-Black trees, B-trees. These structures guarantee balance through strategic rotations and recoloring, ensuring that even adversarial insertion patterns maintain logarithmic height. The simple BST is beautiful and instructive, but production systems demand the guarantees that self-balancing trees provide.\r
\r
**Pseudocode:**\r
\`\`\`\r
// BST Insert - O(log n) average, O(n) worst case\r
FUNCTION insert(root, value):\r
    IF root = NULL THEN\r
        RETURN NEW NODE(value)\r
    IF value < root.data THEN\r
        root.left ← insert(root.left, value)\r
    ELSE IF value > root.data THEN\r
        root.right ← insert(root.right, value)\r
    RETURN root\r
\r
// BST Search - O(log n) average, O(n) worst case\r
FUNCTION search(root, value):\r
    IF root = NULL THEN\r
        RETURN false\r
    IF root.data = value THEN\r
        RETURN true\r
    IF value < root.data THEN\r
        RETURN search(root.left, value)\r
    RETURN search(root.right, value)\r
\r
// Inorder Traversal - O(n) time\r
FUNCTION inorder(root):\r
    IF root ≠ NULL THEN\r
        inorder(root.left)\r
        PRINT root.data\r
        inorder(root.right)\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
public class BinarySearchTree {\r
    private Node root;\r
    \r
    private static class Node {\r
        int data;\r
        Node left, right;\r
        \r
        Node(int data) {\r
            this.data = data;\r
            this.left = null;\r
            this.right = null;\r
        }\r
    }\r
    \r
    // O(log n) average, O(n) worst case\r
    public void insert(int data) {\r
        root = insertRec(root, data);\r
    }\r
    \r
    private Node insertRec(Node node, int data) {\r
        if (node == null) {\r
            return new Node(data);\r
        }\r
        \r
        if (data < node.data) {\r
            node.left = insertRec(node.left, data);\r
        } else if (data > node.data) {\r
            node.right = insertRec(node.right, data);\r
        }\r
        \r
        return node;\r
    }\r
    \r
    // O(log n) average, O(n) worst case\r
    public boolean search(int data) {\r
        return searchRec(root, data);\r
    }\r
    \r
    private boolean searchRec(Node node, int data) {\r
        if (node == null) {\r
            return false;\r
        }\r
        \r
        if (data == node.data) {\r
            return true;\r
        }\r
        \r
        return data < node.data \r
            ? searchRec(node.left, data)\r
            : searchRec(node.right, data);\r
    }\r
    \r
    // In-order traversal: O(n)\r
    public void inorder() {\r
        inorderRec(root);\r
    }\r
    \r
    private void inorderRec(Node node) {\r
        if (node != null) {\r
            inorderRec(node.left);\r
            System.out.print(node.data + " ");\r
            inorderRec(node.right);\r
        }\r
    }\r
}\r
\`\`\`\r
\r
**BST Operations:**\r
\r
The insertion operation showcases recursion's elegance in tree algorithms. We recursively descend, comparing values at each node. When we find a null child (the proper location), we create and return a new node. As the recursion unwinds, these returned nodes are assigned to parent.left or parent.right, correctly linking the new node into the tree.\r
\r
The search operation exhibits the BST's fundamental property: at each node, we decide whether to search left or right based on comparison. In a balanced tree, each comparison eliminates roughly half the remaining nodes. This binary choice, repeated logarithmically many times, finds the target or determines its absence.\r
\r
In-order traversal (left-root-right) visits nodes in sorted order—a remarkable property. This is no coincidence: the BST property guarantees that left-subtree values precede the root, which precedes right-subtree values. This makes BSTs ideal for maintaining sorted data with efficient insertion, though the balance problem still looms.\r
\r
### AVL Trees: The Mathematics of Perfect Balance\r
\r
AVL trees, named for inventors Adelson-Velsky and Landis, enforce a strict balance invariant: for every node, the heights of its left and right subtrees differ by at most 1. This constraint seems simple, but it has profound implications. It guarantees that the tree's height is always O(log n), regardless of insertion order. This mathematical guarantee transforms the BST's average-case promise into a worst-case guarantee.\r
\r
The key mechanism is tree rotations. When an insertion violates the balance property, we perform one or two rotations to restore it. A rotation restructures three nodes and four subtrees, changing the tree's shape while preserving the BST property. The beauty of rotations is that they're local operations—O(1) time—yet they can rebalance the entire tree.\r
\r
AVL trees recognize four imbalance cases: left-left, left-right, right-right, and right-left. Each case has a corresponding fix: single or double rotations. The implementation tracks each node's height and balance factor (left height minus right height). After insertion, we check balance factors climbing back up the tree, rotating when necessary.\r
\r
The cost of this perfect balance is complexity. AVL tree implementation is intricate, requiring careful attention to height updates and rotation logic. Moreover, AVL trees can be overly aggressive in maintaining balance, performing rotations even when slight imbalance would be acceptable. This leads to our next structure: Red-Black trees.\r
\r
**Pseudocode:**\r
\`\`\`\r
// AVL Insert with Balancing - O(log n)\r
FUNCTION insert(root, value):\r
    // Standard BST insertion\r
    IF root = NULL THEN\r
        RETURN NEW NODE(value, height=1)\r
    \r
    IF value < root.data THEN\r
        root.left ← insert(root.left, value)\r
    ELSE IF value > root.data THEN\r
        root.right ← insert(root.right, value)\r
    ELSE\r
        RETURN root  // Duplicates not allowed\r
    \r
    // Update height\r
    root.height ← 1 + MAX(height(root.left), height(root.right))\r
    \r
    // Get balance factor\r
    balance ← getBalance(root)\r
    \r
    // Left-Left Case\r
    IF balance > 1 AND value < root.left.data THEN\r
        RETURN rotateRight(root)\r
    \r
    // Right-Right Case\r
    IF balance < -1 AND value > root.right.data THEN\r
        RETURN rotateLeft(root)\r
    \r
    // Left-Right Case\r
    IF balance > 1 AND value > root.left.data THEN\r
        root.left ← rotateLeft(root.left)\r
        RETURN rotateRight(root)\r
    \r
    // Right-Left Case\r
    IF balance < -1 AND value < root.right.data THEN\r
        root.right ← rotateRight(root.right)\r
        RETURN rotateLeft(root)\r
    \r
    RETURN root\r
\r
FUNCTION rotateRight(y):\r
    x ← y.left\r
    T2 ← x.right\r
    \r
    x.right ← y\r
    y.left ← T2\r
    \r
    y.height ← 1 + MAX(height(y.left), height(y.right))\r
    x.height ← 1 + MAX(height(x.left), height(x.right))\r
    \r
    RETURN x\r
\r
FUNCTION rotateLeft(x):\r
    y ← x.right\r
    T2 ← y.left\r
    \r
    y.left ← x\r
    x.right ← T2\r
    \r
    x.height ← 1 + MAX(height(x.left), height(x.right))\r
    y.height ← 1 + MAX(height(y.left), height(y.right))\r
    \r
    RETURN y\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
public class AVLTree {\r
    private Node root;\r
    \r
    private static class Node {\r
        int data, height;\r
        Node left, right;\r
        \r
        Node(int data) {\r
            this.data = data;\r
            this.height = 1;\r
        }\r
    }\r
    \r
    // Get height of node\r
    private int height(Node node) {\r
        return node == null ? 0 : node.height;\r
    }\r
    \r
    // Get balance factor\r
    private int getBalance(Node node) {\r
        return node == null ? 0 : height(node.left) - height(node.right);\r
    }\r
    \r
    // Update height of node\r
    private void updateHeight(Node node) {\r
        node.height = 1 + Math.max(height(node.left), height(node.right));\r
    }\r
    \r
    // Right rotation\r
    private Node rotateRight(Node y) {\r
        Node x = y.left;\r
        Node T2 = x.right;\r
        \r
        // Perform rotation\r
        x.right = y;\r
        y.left = T2;\r
        \r
        // Update heights\r
        updateHeight(y);\r
        updateHeight(x);\r
        \r
        return x;\r
    }\r
    \r
    // Left rotation\r
    private Node rotateLeft(Node x) {\r
        Node y = x.right;\r
        Node T2 = y.left;\r
        \r
        // Perform rotation\r
        y.left = x;\r
        x.right = T2;\r
        \r
        // Update heights\r
        updateHeight(x);\r
        updateHeight(y);\r
        \r
        return y;\r
    }\r
    \r
    // Insert: O(log n) guaranteed\r
    public void insert(int data) {\r
        root = insertRec(root, data);\r
    }\r
    \r
    private Node insertRec(Node node, int data) {\r
        // Standard BST insertion\r
        if (node == null) {\r
            return new Node(data);\r
        }\r
        \r
        if (data < node.data) {\r
            node.left = insertRec(node.left, data);\r
        } else if (data > node.data) {\r
            node.right = insertRec(node.right, data);\r
        } else {\r
            return node; // Duplicate keys not allowed\r
        }\r
        \r
        // Update height\r
        updateHeight(node);\r
        \r
        // Get balance factor\r
        int balance = getBalance(node);\r
        \r
        // Left Left Case\r
        if (balance > 1 && data < node.left.data) {\r
            return rotateRight(node);\r
        }\r
        \r
        // Right Right Case\r
        if (balance < -1 && data > node.right.data) {\r
            return rotateLeft(node);\r
        }\r
        \r
        // Left Right Case\r
        if (balance > 1 && data > node.left.data) {\r
            node.left = rotateLeft(node.left);\r
            return rotateRight(node);\r
        }\r
        \r
        // Right Left Case\r
        if (balance < -1 && data < node.right.data) {\r
            node.right = rotateRight(node.right);\r
            return rotateLeft(node);\r
        }\r
        \r
        return node;\r
    }\r
    \r
    // Delete: O(log n) guaranteed\r
    public void delete(int data) {\r
        root = deleteRec(root, data);\r
    }\r
    \r
    private Node deleteRec(Node node, int data) {\r
        // Standard BST deletion\r
        if (node == null) {\r
            return node;\r
        }\r
        \r
        if (data < node.data) {\r
            node.left = deleteRec(node.left, data);\r
        } else if (data > node.data) {\r
            node.right = deleteRec(node.right, data);\r
        } else {\r
            // Node with one child or no child\r
            if (node.left == null || node.right == null) {\r
                node = (node.left != null) ? node.left : node.right;\r
            } else {\r
                // Node with two children: get inorder successor\r
                Node temp = minValueNode(node.right);\r
                node.data = temp.data;\r
                node.right = deleteRec(node.right, temp.data);\r
            }\r
        }\r
        \r
        if (node == null) {\r
            return node;\r
        }\r
        \r
        // Update height\r
        updateHeight(node);\r
        \r
        // Get balance factor\r
        int balance = getBalance(node);\r
        \r
        // Left Left Case\r
        if (balance > 1 && getBalance(node.left) >= 0) {\r
            return rotateRight(node);\r
        }\r
        \r
        // Left Right Case\r
        if (balance > 1 && getBalance(node.left) < 0) {\r
            node.left = rotateLeft(node.left);\r
            return rotateRight(node);\r
        }\r
        \r
        // Right Right Case\r
        if (balance < -1 && getBalance(node.right) <= 0) {\r
            return rotateLeft(node);\r
        }\r
        \r
        // Right Left Case\r
        if (balance < -1 && getBalance(node.right) > 0) {\r
            node.right = rotateRight(node.right);\r
            return rotateLeft(node);\r
        }\r
        \r
        return node;\r
    }\r
    \r
    private Node minValueNode(Node node) {\r
        Node current = node;\r
        while (current.left != null) {\r
            current = current.left;\r
        }\r
        return current;\r
    }\r
    \r
    // Search: O(log n) guaranteed\r
    public boolean search(int data) {\r
        return searchRec(root, data);\r
    }\r
    \r
    private boolean searchRec(Node node, int data) {\r
        if (node == null) {\r
            return false;\r
        }\r
        if (data == node.data) {\r
            return true;\r
        }\r
        return data < node.data \r
            ? searchRec(node.left, data)\r
            : searchRec(node.right, data);\r
    }\r
    \r
    // In-order traversal\r
    public void inorder() {\r
        inorderRec(root);\r
        System.out.println();\r
    }\r
    \r
    private void inorderRec(Node node) {\r
        if (node != null) {\r
            inorderRec(node.left);\r
            System.out.print(node.data + " ");\r
            inorderRec(node.right);\r
        }\r
    }\r
}\r
\`\`\`\r
\r
**AVL Tree Balance:**\r
\r
The AVL implementation's heart lies in the four cases of imbalance. Left-Left occurs when we insert into the left subtree of a left child—fixed with a single right rotation. Right-Right is symmetric: insert right-right, rotate left. Left-Right and Right-Left require double rotations: first rotate the child, then rotate the parent.\r
\r
Each rotation takes O(1) time, and we perform at most two rotations per insertion. The height updates are equally crucial—after any structural change, we recalculate heights bottom-up. The balance factor (left height minus right height) tells us if rotation is needed: |balance| ≤ 1 means balanced, |balance| > 1 means rebalancing required.\r
\r
Deletion is more complex than insertion, potentially requiring multiple rotations as imbalance propagates up the tree. Yet even with these complexities, AVL trees guarantee O(log n) operations. This guarantee is their superpower: no matter what sequence of operations you perform, worst-case performance is assured.\r
\r
The trade-off is rotations. AVL trees perform more rotations than Red-Black trees, making them better for search-heavy workloads (where strict balance helps) but potentially worse for insertion-heavy ones. This is why understanding both structures matters—one size doesn't fit all problems.\r
\r
### Red-Black Trees: Practical Balance\r
\r
Red-Black trees take a different approach to balance. Instead of strictly limiting height differences, they use node colors (red and black) to maintain looser balance constraints. These constraints still guarantee O(log n) height, but with fewer rotations required. The result is a structure that's slightly less balanced than AVL trees but requires less rebalancing work.\r
\r
The Red-Black properties are:\r
1. Every node is either red or black\r
2. The root is black\r
3. All null leaves are black\r
4. Red nodes have black children (no consecutive red nodes)\r
5. All paths from root to null have the same number of black nodes\r
\r
These properties ensure that the longest path (alternating black-red) is at most twice the shortest path (all black). This factor-of-two difference means height is at most 2 log n—still O(log n), but slightly less balanced than AVL's guarantee.\r
\r
The genius of Red-Black trees lies in their rebalancing strategy. Many insertions can be fixed by recoloring alone, without structural changes. When rotations are necessary, they're often simpler than AVL's cases. This makes Red-Black trees the choice for many production systems, including Java's TreeMap and C++'s std::map.\r
\r
Understanding Red-Black trees requires thinking about color as a form of metadata that encodes balance information. Black height (black nodes on any root-to-leaf path) acts as a balance measure. Violations get fixed by strategically rotating and recoloring, propagating fixes up the tree until the root.\r
\r
**Pseudocode:**\r
\`\`\`\r
// Red-Black Tree Insert - O(log n)\r
FUNCTION insert(tree, value):\r
    // Standard BST insertion\r
    newNode ← NEW NODE(value, color=RED)\r
    IF tree.root = NULL THEN\r
        newNode.color ← BLACK\r
        tree.root ← newNode\r
        RETURN\r
    \r
    parent ← NULL\r
    current ← tree.root\r
    WHILE current ≠ NULL DO\r
        parent ← current\r
        IF value < current.data THEN\r
            current ← current.left\r
        ELSE IF value > current.data THEN\r
            current ← current.right\r
        ELSE\r
            RETURN  // Duplicate\r
    \r
    newNode.parent ← parent\r
    IF value < parent.data THEN\r
        parent.left ← newNode\r
    ELSE\r
        parent.right ← newNode\r
    \r
    fixViolation(tree, newNode)\r
\r
FUNCTION fixViolation(tree, node):\r
    WHILE node ≠ tree.root AND node.parent.color = RED DO\r
        parent ← node.parent\r
        grandparent ← parent.parent\r
        \r
        IF parent = grandparent.left THEN\r
            uncle ← grandparent.right\r
            \r
            // Case 1: Uncle is red (recolor)\r
            IF uncle ≠ NULL AND uncle.color = RED THEN\r
                parent.color ← BLACK\r
                uncle.color ← BLACK\r
                grandparent.color ← RED\r
                node ← grandparent\r
            ELSE\r
                // Case 2: Node is right child (left rotation)\r
                IF node = parent.right THEN\r
                    node ← parent\r
                    rotateLeft(tree, node)\r
                    parent ← node.parent\r
                \r
                // Case 3: Node is left child (right rotation + recolor)\r
                parent.color ← BLACK\r
                grandparent.color ← RED\r
                rotateRight(tree, grandparent)\r
        ELSE\r
            // Mirror cases for right side\r
            uncle ← grandparent.left\r
            IF uncle ≠ NULL AND uncle.color = RED THEN\r
                parent.color ← BLACK\r
                uncle.color ← BLACK\r
                grandparent.color ← RED\r
                node ← grandparent\r
            ELSE\r
                IF node = parent.left THEN\r
                    node ← parent\r
                    rotateRight(tree, node)\r
                    parent ← node.parent\r
                parent.color ← BLACK\r
                grandparent.color ← RED\r
                rotateLeft(tree, grandparent)\r
    \r
    tree.root.color ← BLACK\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
public class RedBlackTree {\r
    private Node root;\r
    private static final boolean RED = true;\r
    private static final boolean BLACK = false;\r
    \r
    private static class Node {\r
        int data;\r
        Node left, right, parent;\r
        boolean color;\r
        \r
        Node(int data) {\r
            this.data = data;\r
            this.color = RED; // New nodes are always red\r
        }\r
    }\r
    \r
    // Insert: O(log n) guaranteed\r
    public void insert(int data) {\r
        Node newNode = new Node(data);\r
        \r
        if (root == null) {\r
            root = newNode;\r
            root.color = BLACK;\r
            return;\r
        }\r
        \r
        // Standard BST insertion\r
        Node parent = null;\r
        Node current = root;\r
        \r
        while (current != null) {\r
            parent = current;\r
            if (data < current.data) {\r
                current = current.left;\r
            } else if (data > current.data) {\r
                current = current.right;\r
            } else {\r
                return; // Duplicate keys not allowed\r
            }\r
        }\r
        \r
        newNode.parent = parent;\r
        if (data < parent.data) {\r
            parent.left = newNode;\r
        } else {\r
            parent.right = newNode;\r
        }\r
        \r
        // Fix Red-Black Tree properties\r
        fixInsert(newNode);\r
    }\r
    \r
    private void fixInsert(Node node) {\r
        Node parent, grandparent;\r
        \r
        while (node != root && node.color == RED && node.parent.color == RED) {\r
            parent = node.parent;\r
            grandparent = parent.parent;\r
            \r
            // Case A: Parent is left child of grandparent\r
            if (parent == grandparent.left) {\r
                Node uncle = grandparent.right;\r
                \r
                // Case 1: Uncle is red - recolor\r
                if (uncle != null && uncle.color == RED) {\r
                    grandparent.color = RED;\r
                    parent.color = BLACK;\r
                    uncle.color = BLACK;\r
                    node = grandparent;\r
                } else {\r
                    // Case 2: Node is right child - left rotation\r
                    if (node == parent.right) {\r
                        rotateLeft(parent);\r
                        node = parent;\r
                        parent = node.parent;\r
                    }\r
                    \r
                    // Case 3: Node is left child - right rotation\r
                    rotateRight(grandparent);\r
                    boolean temp = parent.color;\r
                    parent.color = grandparent.color;\r
                    grandparent.color = temp;\r
                    node = parent;\r
                }\r
            } \r
            // Case B: Parent is right child of grandparent\r
            else {\r
                Node uncle = grandparent.left;\r
                \r
                // Case 1: Uncle is red - recolor\r
                if (uncle != null && uncle.color == RED) {\r
                    grandparent.color = RED;\r
                    parent.color = BLACK;\r
                    uncle.color = BLACK;\r
                    node = grandparent;\r
                } else {\r
                    // Case 2: Node is left child - right rotation\r
                    if (node == parent.left) {\r
                        rotateRight(parent);\r
                        node = parent;\r
                        parent = node.parent;\r
                    }\r
                    \r
                    // Case 3: Node is right child - left rotation\r
                    rotateLeft(grandparent);\r
                    boolean temp = parent.color;\r
                    parent.color = grandparent.color;\r
                    grandparent.color = temp;\r
                    node = parent;\r
                }\r
            }\r
        }\r
        \r
        root.color = BLACK;\r
    }\r
    \r
    private void rotateLeft(Node node) {\r
        Node rightChild = node.right;\r
        node.right = rightChild.left;\r
        \r
        if (node.right != null) {\r
            node.right.parent = node;\r
        }\r
        \r
        rightChild.parent = node.parent;\r
        \r
        if (node.parent == null) {\r
            root = rightChild;\r
        } else if (node == node.parent.left) {\r
            node.parent.left = rightChild;\r
        } else {\r
            node.parent.right = rightChild;\r
        }\r
        \r
        rightChild.left = node;\r
        node.parent = rightChild;\r
    }\r
    \r
    private void rotateRight(Node node) {\r
        Node leftChild = node.left;\r
        node.left = leftChild.right;\r
        \r
        if (node.left != null) {\r
            node.left.parent = node;\r
        }\r
        \r
        leftChild.parent = node.parent;\r
        \r
        if (node.parent == null) {\r
            root = leftChild;\r
        } else if (node == node.parent.left) {\r
            node.parent.left = leftChild;\r
        } else {\r
            node.parent.right = leftChild;\r
        }\r
        \r
        leftChild.right = node;\r
        node.parent = leftChild;\r
    }\r
    \r
    // Search: O(log n) guaranteed\r
    public boolean search(int data) {\r
        Node current = root;\r
        \r
        while (current != null) {\r
            if (data == current.data) {\r
                return true;\r
            } else if (data < current.data) {\r
                current = current.left;\r
            } else {\r
                current = current.right;\r
            }\r
        }\r
        \r
        return false;\r
    }\r
    \r
    // Delete: O(log n) guaranteed\r
    public void delete(int data) {\r
        Node node = findNode(root, data);\r
        if (node == null) return;\r
        \r
        deleteNode(node);\r
    }\r
    \r
    private Node findNode(Node node, int data) {\r
        while (node != null) {\r
            if (data == node.data) {\r
                return node;\r
            } else if (data < node.data) {\r
                node = node.left;\r
            } else {\r
                node = node.right;\r
            }\r
        }\r
        return null;\r
    }\r
    \r
    private void deleteNode(Node node) {\r
        Node replacement;\r
        Node child;\r
        \r
        // Node has two children\r
        if (node.left != null && node.right != null) {\r
            Node successor = minimum(node.right);\r
            node.data = successor.data;\r
            node = successor;\r
        }\r
        \r
        // Node has at most one child\r
        child = (node.left != null) ? node.left : node.right;\r
        \r
        if (node.color == BLACK) {\r
            node.color = (child != null) ? child.color : BLACK;\r
            fixDelete(node);\r
        }\r
        \r
        replaceNode(node, child);\r
    }\r
    \r
    private void fixDelete(Node node) {\r
        while (node != root && node.color == BLACK) {\r
            if (node == node.parent.left) {\r
                Node sibling = node.parent.right;\r
                \r
                // Case 1: Sibling is red\r
                if (sibling.color == RED) {\r
                    sibling.color = BLACK;\r
                    node.parent.color = RED;\r
                    rotateLeft(node.parent);\r
                    sibling = node.parent.right;\r
                }\r
                \r
                // Case 2: Sibling's children are black\r
                if ((sibling.left == null || sibling.left.color == BLACK) &&\r
                    (sibling.right == null || sibling.right.color == BLACK)) {\r
                    sibling.color = RED;\r
                    node = node.parent;\r
                } else {\r
                    // Case 3: Sibling's right child is black\r
                    if (sibling.right == null || sibling.right.color == BLACK) {\r
                        if (sibling.left != null) {\r
                            sibling.left.color = BLACK;\r
                        }\r
                        sibling.color = RED;\r
                        rotateRight(sibling);\r
                        sibling = node.parent.right;\r
                    }\r
                    \r
                    // Case 4: Sibling's right child is red\r
                    sibling.color = node.parent.color;\r
                    node.parent.color = BLACK;\r
                    if (sibling.right != null) {\r
                        sibling.right.color = BLACK;\r
                    }\r
                    rotateLeft(node.parent);\r
                    node = root;\r
                }\r
            } else {\r
                // Symmetric cases for right child\r
                Node sibling = node.parent.left;\r
                \r
                if (sibling.color == RED) {\r
                    sibling.color = BLACK;\r
                    node.parent.color = RED;\r
                    rotateRight(node.parent);\r
                    sibling = node.parent.left;\r
                }\r
                \r
                if ((sibling.right == null || sibling.right.color == BLACK) &&\r
                    (sibling.left == null || sibling.left.color == BLACK)) {\r
                    sibling.color = RED;\r
                    node = node.parent;\r
                } else {\r
                    if (sibling.left == null || sibling.left.color == BLACK) {\r
                        if (sibling.right != null) {\r
                            sibling.right.color = BLACK;\r
                        }\r
                        sibling.color = RED;\r
                        rotateLeft(sibling);\r
                        sibling = node.parent.left;\r
                    }\r
                    \r
                    sibling.color = node.parent.color;\r
                    node.parent.color = BLACK;\r
                    if (sibling.left != null) {\r
                        sibling.left.color = BLACK;\r
                    }\r
                    rotateRight(node.parent);\r
                    node = root;\r
                }\r
            }\r
        }\r
        \r
        node.color = BLACK;\r
    }\r
    \r
    private void replaceNode(Node node, Node child) {\r
        if (node.parent == null) {\r
            root = child;\r
        } else if (node == node.parent.left) {\r
            node.parent.left = child;\r
        } else {\r
            node.parent.right = child;\r
        }\r
        \r
        if (child != null) {\r
            child.parent = node.parent;\r
        }\r
    }\r
    \r
    private Node minimum(Node node) {\r
        while (node.left != null) {\r
            node = node.left;\r
        }\r
        return node;\r
    }\r
    \r
    // In-order traversal\r
    public void inorder() {\r
        inorderRec(root);\r
        System.out.println();\r
    }\r
    \r
    private void inorderRec(Node node) {\r
        if (node != null) {\r
            inorderRec(node.left);\r
            System.out.print(node.data + "(" + (node.color ? "R" : "B") + ") ");\r
            inorderRec(node.right);\r
        }\r
    }\r
}\r
\`\`\`\r
\r
**Red-Black Tree Implementation:**\r
\r
The \`fixInsert\` method handles the complex cases of rebalancing after insertion. New nodes start red (to avoid increasing black height). If the parent is also red, we have a violation. The uncle's color determines our fix: if the uncle is red, recolor grandparent, parent, and uncle; if black, perform rotations.\r
\r
The symmetry in the code reflects the symmetry of the tree structure: cases for left children mirror cases for right children. This duplication is unavoidable—left and right rotations are mirror operations, and balance violations on opposite sides require opposite fixes.\r
\r
Deletion is notoriously complex in Red-Black trees. Removing a black node can violate the black-height property, requiring cascading fixes up the tree. The \`fixDelete\` method handles four cases per side, combining rotations and recoloring to restore properties. This complexity is why many textbooks skim deletion—but understanding it reveals the full depth of the data structure.\r
\r
The in-order traversal prints colors (R or B) alongside values, making tree structure visible. This is invaluable for debugging and understanding how operations affect balance. In production code, you wouldn't print colors, but during development, this visibility is essential.\r
\r
### Graphs: Modeling Relationships\r
\r
Graphs are perhaps the most versatile data structure in computer science. They model networks, relationships, dependencies, maps, social connections, web links—any scenario where entities have pairwise connections. Unlike trees, graphs embrace cycles and multiple paths, making them both more powerful and more complex.\r
\r
A graph consists of vertices (nodes) connected by edges. Edges can be directed (one-way) or undirected (bidirectional), weighted (with associated costs) or unweighted (binary connections). This flexibility makes graphs applicable to countless domains, from GPS navigation to social network analysis to compiler optimization.\r
\r
Graph representation matters. Adjacency matrices use O(V²) space but provide O(1) edge lookup. Adjacency lists use O(V + E) space (where E is edge count) and iterate over neighbors in O(degree) time. For sparse graphs (E << V²), adjacency lists win. For dense graphs (E ≈ V²), matrices are competitive. The implementation below uses adjacency lists—the more common choice.\r
\r
Graph traversal algorithms explore the graph systematically. Breadth-First Search (BFS) explores by layers: visit all neighbors before visiting neighbors' neighbors. Depth-First Search (DFS) explores by diving deep: follow a path until it ends, then backtrack. These simple strategies solve surprisingly complex problems: connected components, shortest paths in unweighted graphs, topological sorting, cycle detection.\r
\r
**Pseudocode:**\r
\`\`\`\r
// BFS - O(V + E) time\r
FUNCTION BFS(graph, start):\r
    visited ← NEW BOOLEAN ARRAY of size V (all false)\r
    queue ← NEW QUEUE\r
    \r
    visited[start] ← true\r
    queue.ENQUEUE(start)\r
    \r
    WHILE queue is not empty DO\r
        vertex ← queue.DEQUEUE()\r
        PRINT vertex\r
        \r
        FOR each neighbor IN graph.adjacencyList[vertex] DO\r
            IF NOT visited[neighbor] THEN\r
                visited[neighbor] ← true\r
                queue.ENQUEUE(neighbor)\r
\r
// DFS - O(V + E) time\r
FUNCTION DFS(graph, start):\r
    visited ← NEW BOOLEAN ARRAY of size V (all false)\r
    DFSUtil(graph, start, visited)\r
\r
FUNCTION DFSUtil(graph, vertex, visited):\r
    visited[vertex] ← true\r
    PRINT vertex\r
    \r
    FOR each neighbor IN graph.adjacencyList[vertex] DO\r
        IF NOT visited[neighbor] THEN\r
            DFSUtil(graph, neighbor, visited)\r
\r
// Check Connectivity - O(V + E) time\r
FUNCTION isConnected(graph):\r
    visited ← NEW BOOLEAN ARRAY of size V (all false)\r
    DFSUtil(graph, 0, visited)\r
    \r
    FOR i ← 0 TO V - 1 DO\r
        IF NOT visited[i] THEN\r
            RETURN false\r
    RETURN true\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
import java.util.*;\r
\r
public class Graph {\r
    private int vertices;\r
    private List<List<Integer>> adjacencyList;\r
    \r
    public Graph(int vertices) {\r
        this.vertices = vertices;\r
        adjacencyList = new ArrayList<>(vertices);\r
        for (int i = 0; i < vertices; i++) {\r
            adjacencyList.add(new ArrayList<>());\r
        }\r
    }\r
    \r
    public void addEdge(int source, int dest) {\r
        adjacencyList.get(source).add(dest);\r
        adjacencyList.get(dest).add(source); // For undirected graph\r
    }\r
    \r
    // Breadth-First Search: O(V + E)\r
    public void bfs(int start) {\r
        boolean[] visited = new boolean[vertices];\r
        Queue<Integer> queue = new LinkedList<>();\r
        \r
        visited[start] = true;\r
        queue.offer(start);\r
        \r
        while (!queue.isEmpty()) {\r
            int vertex = queue.poll();\r
            System.out.print(vertex + " ");\r
            \r
            for (int neighbor : adjacencyList.get(vertex)) {\r
                if (!visited[neighbor]) {\r
                    visited[neighbor] = true;\r
                    queue.offer(neighbor);\r
                }\r
            }\r
        }\r
    }\r
    \r
    // Depth-First Search: O(V + E)\r
    public void dfs(int start) {\r
        boolean[] visited = new boolean[vertices];\r
        dfsRec(start, visited);\r
    }\r
    \r
    private void dfsRec(int vertex, boolean[] visited) {\r
        visited[vertex] = true;\r
        System.out.print(vertex + " ");\r
        \r
        for (int neighbor : adjacencyList.get(vertex)) {\r
            if (!visited[neighbor]) {\r
                dfsRec(neighbor, visited);\r
            }\r
        }\r
    }\r
    \r
    // Check if graph is connected: O(V + E)\r
    public boolean isConnected() {\r
        boolean[] visited = new boolean[vertices];\r
        dfsRec(0, visited);\r
        \r
        for (boolean v : visited) {\r
            if (!v) return false;\r
        }\r
        return true;\r
    }\r
}\r
\`\`\`\r
\r
**Graph Traversal Insights:**\r
\r
BFS uses a queue (FIFO) to process vertices in order of discovery. This ensures we visit vertices layer by layer: first the start vertex, then all vertices one edge away, then all vertices two edges away, and so on. This layered exploration makes BFS ideal for finding shortest paths in unweighted graphs—the first time we reach a vertex is necessarily via the shortest path.\r
\r
DFS uses recursion (or explicitly, a stack) to explore deeply before backtracking. Each recursive call follows one edge, exploring that branch completely before trying alternatives. This depth-first strategy makes DFS natural for problems requiring exhaustive exploration: finding all paths, detecting cycles, or computing topological orderings.\r
\r
The \`isConnected\` method demonstrates how simple graph traversals solve complex questions. Connectivity—whether all vertices are reachable from a given start—is answered by a single DFS. If we mark n vertices as visited, the graph is connected. If fewer, it's disconnected. This is the power of graph algorithms: complex questions often have surprisingly simple algorithmic answers.\r
\r
Both BFS and DFS run in O(V + E) time—linear in the graph's size. We visit each vertex once and examine each edge once (or twice for undirected graphs). This linearity makes them fundamental building blocks for more complex graph algorithms.\r
\r
### Dijkstra's Algorithm: Shortest Paths with Weights\r
\r
Dijkstra's algorithm solves the single-source shortest path problem for graphs with non-negative edge weights. From a starting vertex, it computes the shortest path to every other vertex. The algorithm is greedy: repeatedly select the unvisited vertex with minimum distance, then update distances to its neighbors.\r
\r
The key insight is that once we've selected a vertex as having minimum distance, that distance is final—we've found the shortest path to it. Why? Because all edges have non-negative weights. Any path through unvisited vertices would have at least the same distance (since we chose the minimum), plus additional positive weight. This greedy choice property makes Dijkstra's algorithm correct.\r
\r
The priority queue is crucial for efficiency. Selecting the minimum-distance vertex naively takes O(V) time; with V iterations, that's O(V²). But a min-heap priority queue reduces vertex selection to O(log V), and we perform E distance updates, each taking O(log V) to update the heap. Total complexity: O((V + E) log V), often simplified to O(E log V) for connected graphs.\r
\r
**Pseudocode:**\r
\`\`\`\r
// Dijkstra's Algorithm - O((V + E) log V)\r
FUNCTION dijkstra(graph, source):\r
    dist ← NEW ARRAY of size V (all ∞)\r
    dist[source] ← 0\r
    \r
    pq ← NEW MIN PRIORITY QUEUE\r
    pq.INSERT(source, 0)\r
    \r
    WHILE pq is not empty DO\r
        u ← pq.EXTRACT_MIN()\r
        \r
        FOR each edge (u, v, weight) IN graph.adjacencyList[u] DO\r
            // Relaxation step\r
            IF dist[u] + weight < dist[v] THEN\r
                dist[v] ← dist[u] + weight\r
                pq.INSERT(v, dist[v])\r
    \r
    RETURN dist\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
import java.util.*;\r
\r
public class DijkstraAlgorithm {\r
    \r
    private static class Edge {\r
        int target;\r
        int weight;\r
        \r
        Edge(int target, int weight) {\r
            this.target = target;\r
            this.weight = weight;\r
        }\r
    }\r
    \r
    private static class Node implements Comparable<Node> {\r
        int vertex;\r
        int distance;\r
        \r
        Node(int vertex, int distance) {\r
            this.vertex = vertex;\r
            this.distance = distance;\r
        }\r
        \r
        @Override\r
        public int compareTo(Node other) {\r
            return Integer.compare(this.distance, other.distance);\r
        }\r
    }\r
    \r
    // Dijkstra's Algorithm: O((V + E) log V) with priority queue\r
    public static int[] dijkstra(List<List<Edge>> graph, int source) {\r
        int n = graph.size();\r
        int[] distances = new int[n];\r
        Arrays.fill(distances, Integer.MAX_VALUE);\r
        distances[source] = 0;\r
        \r
        PriorityQueue<Node> pq = new PriorityQueue<>();\r
        pq.offer(new Node(source, 0));\r
        \r
        boolean[] visited = new boolean[n];\r
        \r
        while (!pq.isEmpty()) {\r
            Node current = pq.poll();\r
            int u = current.vertex;\r
            \r
            if (visited[u]) continue;\r
            visited[u] = true;\r
            \r
            for (Edge edge : graph.get(u)) {\r
                int v = edge.target;\r
                int weight = edge.weight;\r
                \r
                if (distances[u] + weight < distances[v]) {\r
                    distances[v] = distances[u] + weight;\r
                    pq.offer(new Node(v, distances[v]));\r
                }\r
            }\r
        }\r
        \r
        return distances;\r
    }\r
    \r
    // Reconstruct shortest path\r
    public static List<Integer> reconstructPath(int[] parent, int target) {\r
        List<Integer> path = new ArrayList<>();\r
        for (int v = target; v != -1; v = parent[v]) {\r
            path.add(v);\r
        }\r
        Collections.reverse(path);\r
        return path;\r
    }\r
}\r
\`\`\`\r
\r
**Dijkstra in Practice:**\r
\r
The algorithm maintains a distance array initialized to infinity (represented by \`Integer.MAX_VALUE\`), except the source which starts at 0. The priority queue orders vertices by distance, ensuring we always process the minimum-distance unvisited vertex next.\r
\r
The relaxation step is key: for each edge (u, v) with weight w, if distance[u] + w < distance[v], we've found a shorter path to v. Update distance[v] and add v to the priority queue with its new distance. The priority queue naturally handles vertices being added multiple times with different distances—we ignore outdated entries using the visited array.\r
\r
Path reconstruction requires augmenting the algorithm with a parent array. When we relax an edge, we also store parent[v] = u. After the algorithm completes, we can trace back from any vertex to the source, reconstructing the shortest path tree.\r
\r
Dijkstra's algorithm fails with negative edge weights. A shorter path might appear after we've marked a vertex as final, violating the algorithm's invariant. For graphs with negative weights (but no negative cycles), the Bellman-Ford algorithm handles this at the cost of O(VE) time.\r
\r
### Minimum Spanning Trees: Connecting Everything Efficiently\r
\r
A spanning tree of a graph connects all vertices with the minimum number of edges (V-1 edges for V vertices) while avoiding cycles. A minimum spanning tree (MST) does this with minimum total edge weight. MSTs solve problems like network design: connecting cities with minimum cable length, or connecting computers with minimum cost.\r
\r
Two classical algorithms solve the MST problem: Prim's and Kruskal's. Both are greedy, repeatedly making locally optimal choices that lead to a globally optimal solution. Both produce the same total weight (the MST is unique if all edge weights are distinct), though the actual trees might differ.\r
\r
Prim's algorithm grows a single tree from an arbitrary starting vertex, always adding the minimum-weight edge that connects a tree vertex to a non-tree vertex. It's similar to Dijkstra's but selects edges by weight rather than cumulative distance. The priority queue contains edges from the growing tree to unexplored vertices.\r
\r
Kruskal's algorithm considers edges in order of increasing weight, adding each edge unless it would create a cycle. This requires a data structure to detect cycles efficiently—enter the Union-Find (disjoint set) structure. Union-Find maintains connected components, allowing O(α(n)) (effectively constant) time to check if two vertices are connected and to merge components.\r
\r
**Pseudocode:**\r
\`\`\`\r
// Prim's MST Algorithm - O(E log V)\r
FUNCTION primMST(graph, vertices):\r
    visited ← NEW BOOLEAN ARRAY of size V (all false)\r
    mstWeight ← 0\r
    pq ← NEW MIN PRIORITY QUEUE\r
    \r
    // Start from vertex 0\r
    visited[0] ← true\r
    FOR each edge IN graph.adjacencyList[0] DO\r
        pq.INSERT(edge)\r
    \r
    WHILE pq is not empty DO\r
        edge ← pq.EXTRACT_MIN()\r
        target ← edge.target\r
        \r
        IF visited[target] THEN\r
            CONTINUE  // Skip edges to already-visited vertices\r
        \r
        visited[target] ← true\r
        mstWeight ← mstWeight + edge.weight\r
        \r
        FOR each nextEdge IN graph.adjacencyList[target] DO\r
            IF NOT visited[nextEdge.target] THEN\r
                pq.INSERT(nextEdge)\r
    \r
    RETURN mstWeight\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
import java.util.*;\r
\r
public class PrimsAlgorithm {\r
    \r
    private static class Edge implements Comparable<Edge> {\r
        int target;\r
        int weight;\r
        \r
        Edge(int target, int weight) {\r
            this.target = target;\r
            this.weight = weight;\r
        }\r
        \r
        @Override\r
        public int compareTo(Edge other) {\r
            return Integer.compare(this.weight, other.weight);\r
        }\r
    }\r
    \r
    // Prim's Algorithm: O(E log V)\r
    public static List<int[]> primMST(List<List<Edge>> graph) {\r
        int n = graph.size();\r
        List<int[]> mst = new ArrayList<>();\r
        boolean[] inMST = new boolean[n];\r
        PriorityQueue<Edge> pq = new PriorityQueue<>();\r
        \r
        // Start from vertex 0\r
        inMST[0] = true;\r
        for (Edge edge : graph.get(0)) {\r
            pq.offer(edge);\r
        }\r
        \r
        while (!pq.isEmpty() && mst.size() < n - 1) {\r
            Edge edge = pq.poll();\r
            int v = edge.target;\r
            \r
            if (inMST[v]) continue;\r
            \r
            inMST[v] = true;\r
            mst.add(new int[]{v, edge.weight});\r
            \r
            for (Edge nextEdge : graph.get(v)) {\r
                if (!inMST[nextEdge.target]) {\r
                    pq.offer(nextEdge);\r
                }\r
            }\r
        }\r
        \r
        return mst;\r
    }\r
}\r
\`\`\`\r
\r
**Prim's Algorithm Insights:**\r
\r
Prim's maintains a clear invariant: at each step, we have a connected tree, and we add the minimum-weight edge that extends it. The priority queue holds edges from tree vertices to non-tree vertices. When we extract the minimum-weight edge and its target isn't yet in the tree, we add both to the MST.\r
\r
The \`inMST\` array tracks which vertices are already in the tree—crucial for avoiding cycles. When we add vertex v, we explore all its edges. For each edge to a non-tree vertex, we add it to the priority queue. The queue naturally sorts these edges, ensuring we always select the minimum-weight extension.\r
\r
The algorithm completes after adding V-1 edges (a tree on V vertices always has exactly V-1 edges). The complexity O(E log V) comes from E edge insertions into the priority queue, each taking O(log V) time. For dense graphs where E ≈ V², this matches the Fibonacci heap-optimized version's O(E + V log V).\r
\r
Prim's works well for dense graphs represented as adjacency matrices. Starting from any vertex guarantees we find an MST—unlike Kruskal's, which processes edges globally. This local growth property also makes Prim's easier to visualize and understand.\r
\r
### Kruskal's Algorithm and Union-Find\r
\r
Kruskal's takes a global view: sort all edges by weight, then add edges greedily if they don't create cycles. This edge-centric approach contrasts with Prim's vertex-centric growth. The challenge is cycle detection—naively checking for cycles after each edge addition would be expensive.\r
\r
The Union-Find data structure solves this elegantly. It maintains a partition of vertices into disjoint sets (connected components). Two operations suffice: \`find(x)\` returns x's component representative, and \`union(x, y)\` merges their components. Initially, each vertex is its own component. Adding an edge (u, v) is valid only if find(u) ≠ find(v)—they're in different components, so no cycle forms.\r
\r
Union-Find achieves nearly constant time per operation through two optimizations. Path compression flattens trees during find operations: after finding the root, make all visited nodes point directly to it. Union by rank keeps trees shallow by always attaching the shorter tree to the taller one. Together, these give O(α(n)) time per operation, where α is the inverse Ackermann function—effectively constant.\r
\r
**Pseudocode:**\r
\`\`\`\r
// Kruskal's MST Algorithm - O(E log E)\r
FUNCTION kruskalMST(edges, vertices):\r
    // Sort edges by weight\r
    SORT edges by weight (ascending)\r
    \r
    // Initialize Union-Find\r
    parent ← NEW ARRAY of size V\r
    rank ← NEW ARRAY of size V\r
    FOR i ← 0 TO V - 1 DO\r
        parent[i] ← i\r
        rank[i] ← 0\r
    \r
    mstWeight ← 0\r
    edgesAdded ← 0\r
    \r
    FOR each edge IN edges DO\r
        IF edgesAdded = V - 1 THEN\r
            BREAK  // MST complete\r
        \r
        rootU ← find(edge.source, parent)\r
        rootV ← find(edge.target, parent)\r
        \r
        // If in different components, add edge\r
        IF rootU ≠ rootV THEN\r
            mstWeight ← mstWeight + edge.weight\r
            edgesAdded ← edgesAdded + 1\r
            union(rootU, rootV, parent, rank)\r
    \r
    RETURN mstWeight\r
\r
// Union-Find with Path Compression\r
FUNCTION find(x, parent):\r
    IF parent[x] ≠ x THEN\r
        parent[x] ← find(parent[x], parent)  // Path compression\r
    RETURN parent[x]\r
\r
// Union-Find with Union by Rank\r
FUNCTION union(x, y, parent, rank):\r
    IF rank[x] < rank[y] THEN\r
        parent[x] ← y\r
    ELSE IF rank[x] > rank[y] THEN\r
        parent[y] ← x\r
    ELSE\r
        parent[y] ← x\r
        rank[x] ← rank[x] + 1\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
import java.util.*;\r
\r
public class KruskalsAlgorithm {\r
    \r
    private static class Edge implements Comparable<Edge> {\r
        int source, target, weight;\r
        \r
        Edge(int source, int target, int weight) {\r
            this.source = source;\r
            this.target = target;\r
            this.weight = weight;\r
        }\r
        \r
        @Override\r
        public int compareTo(Edge other) {\r
            return Integer.compare(this.weight, other.weight);\r
        }\r
    }\r
    \r
    // Union-Find data structure\r
    private static class UnionFind {\r
        int[] parent, rank;\r
        \r
        UnionFind(int n) {\r
            parent = new int[n];\r
            rank = new int[n];\r
            for (int i = 0; i < n; i++) {\r
                parent[i] = i;\r
            }\r
        }\r
        \r
        int find(int x) {\r
            if (parent[x] != x) {\r
                parent[x] = find(parent[x]); // Path compression\r
            }\r
            return parent[x];\r
        }\r
        \r
        boolean union(int x, int y) {\r
            int rootX = find(x);\r
            int rootY = find(y);\r
            \r
            if (rootX == rootY) return false;\r
            \r
            // Union by rank\r
            if (rank[rootX] < rank[rootY]) {\r
                parent[rootX] = rootY;\r
            } else if (rank[rootX] > rank[rootY]) {\r
                parent[rootY] = rootX;\r
            } else {\r
                parent[rootY] = rootX;\r
                rank[rootX]++;\r
            }\r
            return true;\r
        }\r
    }\r
    \r
    // Kruskal's Algorithm: O(E log E)\r
    public static List<Edge> kruskalMST(int vertices, List<Edge> edges) {\r
        Collections.sort(edges);\r
        UnionFind uf = new UnionFind(vertices);\r
        List<Edge> mst = new ArrayList<>();\r
        \r
        for (Edge edge : edges) {\r
            if (uf.union(edge.source, edge.target)) {\r
                mst.add(edge);\r
                if (mst.size() == vertices - 1) break;\r
            }\r
        }\r
        \r
        return mst;\r
    }\r
}\r
\`\`\`\r
\r
**Kruskal's Algorithm in Practice:**\r
\r
The sorting step dominates Kruskal's complexity: O(E log E). Processing edges with Union-Find adds O(E α(V)), effectively O(E). Since log E ≈ log V² = 2 log V for connected graphs, Kruskal's is O(E log V)—the same as Prim's asymptotically.\r
\r
Kruskal's shines for sparse graphs: fewer edges mean faster sorting. It's also conceptually simpler than Prim's and naturally parallelizes (independent edges can be processed concurrently). The Union-Find structure is a general-purpose tool useful far beyond MST algorithms—it solves connectivity problems across computer science.\r
\r
The greedy choice in both algorithms—always select the minimum-weight edge that's safe—is remarkable. Not all optimization problems admit greedy solutions. That MST does is a deep mathematical property: the matroid structure of forests. This greedy correctness is why we can solve MST efficiently, while many other graph optimization problems are NP-hard.\r
\r
**Chapter 3 Synthesis:**\r
\r
Recursion, trees, and graphs form a hierarchy of complexity. Recursion is the foundation—a way of thinking that makes complex problems tractable. Trees add structure, organizing data hierarchically. Balanced trees like AVL and Red-Black guarantee efficiency through clever invariants. Graphs generalize trees, allowing cycles and multiple paths, modeling the complex relationships in real systems.\r
\r
The algorithms we've explored—DFS, BFS, Dijkstra's, Prim's, Kruskal's—are foundational to computer science. They appear in operating systems (file system traversal), networks (routing protocols), compilers (dependency resolution), and databases (query optimization). Mastering them means understanding not just code, but the mathematical principles that make them correct and efficient.\r
\r
## Bonus Videos\r
\r
Search Trees (BST / AVL / Red-Black / B-Trees)\r
\r
{{YouTube:https://www.youtube.com/watch?v=hmSFuM2Tglw}}\r
\r
AVL Trees:\r
\r
{{YouTube:https://www.youtube.com/watch?v=jDM6_TnYIqE}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=zP2xbKerIds}}\r
Red/Black Trees:\r
\r
{{YouTube:https://www.youtube.com/watch?v=qvZGUFHWChY}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=95s3ndZRGbk}}\r
B-Trees:\r
\r
{{YouTube:https://www.youtube.com/watch?v=K1a2Bk8NrYQ}}\r
\r
Graph representations:\r
\r
{{YouTube:https://www.youtube.com/watch?v=-VgHk7UMPP4}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=DBRW8nwZV-g}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=ze-poffnS1E}}\r
\r
Graph traversal:\r
\r
{{YouTube:https://www.youtube.com/watch?v=cS-198wtfj0}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=HZ5YTanv5QE}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=TIbUeeksXcI}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=pcKY4hjDrxk}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=0u78hx-66Xk}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=Y40bRyPQQr0}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=xlVX7dXLS64}}\r
\r
Dijkstras:\r
\r
{{YouTube:https://www.youtube.com/watch?v=EFg3u_E6eHU}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=_lHSawdgXpI}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=GazC3A4OQTE}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=K_1urzWrzLs}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=bZkzH5x0SKU}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=71Z-Jpnm3D4}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=j0OUwduDOS0}}\r
\r
MST / Prim and Kruskal\r
\r
{{YouTube:https://www.youtube.com/watch?v=Yldkh0aOEcg}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=qOv8K-AJ7o0}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=6LikZhGLRgU}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=4ZlRH0eK-qQ}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=cplfcGZmX7I}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=71UQH7Pr9kU}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=vmWSnkBVvQ0}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=EHRqQBlZAtU}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=jsmMtJpPnhU}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=eB61LXLZVqs}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=3fU0w9XZjAA}}`},"content/chapter-04/index.md":{type:"markdown",module:`# Chapter 4: Algorithm Paradigms and Intractability\r
\r
This chapter introduces powerful algorithm design strategies and explores the fundamental limits of computation.\r
\r
## Greedy Algorithms\r
\r
Greedy algorithms make locally optimal choices hoping to find global optima. You'll study:\r
\r
* **Activity Selection**: Scheduling non-overlapping intervals\r
* **Fractional Knapsack**: Maximizing value with divisible items\r
* **Huffman Encoding**: Optimal prefix-free codes for compression\r
\r
## Divide and Conquer\r
\r
Break problems into smaller subproblems, solve recursively, and combine results:\r
\r
* **Merge Sort**: O(n log n) sorting via recursive splitting\r
* **Quick Sort**: Randomized partitioning with excellent average case\r
* **Master Theorem**: Analyzing divide-and-conquer recurrences\r
\r
## Dynamic Programming\r
\r
Optimize overlapping subproblems by storing intermediate results:\r
\r
* **0/1 Knapsack**: Making optimal choices with indivisible items\r
* **Longest Common Subsequence (LCS)**: Finding shared patterns\r
* **Matrix Chain Multiplication**: Optimal parenthesization\r
\r
## Network Flow\r
\r
Model flow through networks with capacity constraints:\r
\r
* **Ford-Fulkerson Algorithm**: Finding maximum flow\r
* **Max-Flow Min-Cut Theorem**: Fundamental duality result\r
\r
## Computational Complexity\r
\r
Some problems may be fundamentally intractable. You'll explore:\r
\r
* **P vs NP**: The most important open problem in computer science\r
* **NP-Completeness**: Problems as hard as any in NP\r
* **Reductions**: SAT to 3-SAT transformation\r
* **Practical Implications**: When to seek approximations or heuristics\r
\r
## Key Learning Goals\r
\r
By the end of this chapter, you should be able to:\r
\r
* Recognize when greedy algorithms are appropriate\r
* Apply divide-and-conquer with Master Theorem analysis\r
* Solve optimization problems using dynamic programming\r
* Compute maximum flow in networks\r
* Understand the significance of P vs NP\r
* Perform polynomial-time reductions between problems\r
* Recognize NP-complete problems and their implications\r
\r
## Code\r
\r
### Greedy Algorithms: Local Choices, Global Optimality\r
\r
Greedy algorithms embody algorithmic optimism: make the locally best choice at each step, and trust that these choices lead to a globally optimal solution. This strategy is remarkably effective for certain problems—and catastrophically wrong for others. Understanding when greedy works requires mathematical insight into problem structure.\r
\r
The greedy approach is appealingly simple: no need to explore all possibilities, no need to remember past decisions. Just scan through options and pick the best available. This simplicity translates to efficiency—greedy algorithms often run in polynomial time, while exhaustive search would be exponential.\r
\r
But greedy algorithms require proof. Unlike dynamic programming, where optimal solutions clearly compose from optimal sub-solutions, greedy algorithms rely on the "greedy choice property": the locally optimal choice is part of a globally optimal solution. This property must be proved, not assumed.\r
\r
Activity selection illustrates greedy algorithms at their finest. Given activities with start and finish times, select the maximum number of non-overlapping activities. The greedy strategy: always choose the activity that finishes earliest. Why? Because finishing early leaves maximum room for future activities. This intuition can be formalized into a correctness proof via exchange arguments.\r
\r
Fractional knapsack extends this idea: given items with weights and values, fill a knapsack to maximize value. If items are divisible (fractional knapsack), greedy works: always take the highest value-per-weight item. But if items are indivisible (0/1 knapsack), greedy fails—this becomes an NP-hard problem requiring dynamic programming.\r
\r
Huffman coding solves optimal prefix-free encoding: given character frequencies, construct a binary tree where common characters have shorter codes. The greedy strategy: repeatedly merge the two lowest-frequency nodes. This builds an optimal code tree from the bottom up, a beautiful application of greedy principles to information theory.\r
\r
**Pseudocode:**\r
\`\`\`\r
// Activity Selection - O(n log n)\r
FUNCTION activitySelection(activities):\r
    SORT activities by finish time (ascending)\r
    \r
    selected ← NEW LIST\r
    selected.ADD(activities[0])\r
    lastFinish ← activities[0].finish\r
    \r
    FOR i ← 1 TO length(activities) - 1 DO\r
        IF activities[i].start ≥ lastFinish THEN\r
            selected.ADD(activities[i])\r
            lastFinish ← activities[i].finish\r
    \r
    RETURN selected\r
\r
// Fractional Knapsack - O(n log n)\r
FUNCTION fractionalKnapsack(items, capacity):\r
    // Calculate value per weight and sort\r
    FOR each item IN items DO\r
        item.ratio ← item.value / item.weight\r
    SORT items by ratio (descending)\r
    \r
    totalValue ← 0.0\r
    remaining ← capacity\r
    \r
    FOR each item IN items DO\r
        IF item.weight ≤ remaining THEN\r
            totalValue ← totalValue + item.value\r
            remaining ← remaining - item.weight\r
        ELSE\r
            // Take fraction of item\r
            totalValue ← totalValue + (item.ratio * remaining)\r
            BREAK\r
    \r
    RETURN totalValue\r
\r
// Huffman Coding - O(n log n)\r
FUNCTION huffmanCoding(frequencies):\r
    pq ← NEW MIN PRIORITY QUEUE\r
    \r
    FOR each (char, freq) IN frequencies DO\r
        node ← NEW NODE(char, freq)\r
        pq.INSERT(node)\r
    \r
    WHILE pq.size() > 1 DO\r
        left ← pq.EXTRACT_MIN()\r
        right ← pq.EXTRACT_MIN()\r
        \r
        parent ← NEW NODE(NULL, left.freq + right.freq)\r
        parent.left ← left\r
        parent.right ← right\r
        \r
        pq.INSERT(parent)\r
    \r
    RETURN pq.EXTRACT_MIN()  // Root of Huffman tree\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
import java.util.*;\r
\r
public class GreedyAlgorithms {\r
    \r
    // Activity Selection: O(n log n)\r
    static class Activity implements Comparable<Activity> {\r
        int start, finish;\r
        \r
        Activity(int start, int finish) {\r
            this.start = start;\r
            this.finish = finish;\r
        }\r
        \r
        @Override\r
        public int compareTo(Activity other) {\r
            return Integer.compare(this.finish, other.finish);\r
        }\r
    }\r
    \r
    public static List<Activity> activitySelection(List<Activity> activities) {\r
        Collections.sort(activities);\r
        List<Activity> selected = new ArrayList<>();\r
        \r
        selected.add(activities.get(0));\r
        int lastFinish = activities.get(0).finish;\r
        \r
        for (int i = 1; i < activities.size(); i++) {\r
            if (activities.get(i).start >= lastFinish) {\r
                selected.add(activities.get(i));\r
                lastFinish = activities.get(i).finish;\r
            }\r
        }\r
        \r
        return selected;\r
    }\r
    \r
    // Fractional Knapsack: O(n log n)\r
    static class Item implements Comparable<Item> {\r
        int weight, value;\r
        double valuePerWeight;\r
        \r
        Item(int weight, int value) {\r
            this.weight = weight;\r
            this.value = value;\r
            this.valuePerWeight = (double) value / weight;\r
        }\r
        \r
        @Override\r
        public int compareTo(Item other) {\r
            return Double.compare(other.valuePerWeight, this.valuePerWeight);\r
        }\r
    }\r
    \r
    public static double fractionalKnapsack(List<Item> items, int capacity) {\r
        Collections.sort(items);\r
        double totalValue = 0;\r
        \r
        for (Item item : items) {\r
            if (capacity >= item.weight) {\r
                totalValue += item.value;\r
                capacity -= item.weight;\r
            } else {\r
                totalValue += item.valuePerWeight * capacity;\r
                break;\r
            }\r
        }\r
        \r
        return totalValue;\r
    }\r
    \r
    // Huffman Coding: O(n log n)\r
    static class HuffmanNode implements Comparable<HuffmanNode> {\r
        char character;\r
        int frequency;\r
        HuffmanNode left, right;\r
        \r
        HuffmanNode(char character, int frequency) {\r
            this.character = character;\r
            this.frequency = frequency;\r
        }\r
        \r
        @Override\r
        public int compareTo(HuffmanNode other) {\r
            return Integer.compare(this.frequency, other.frequency);\r
        }\r
    }\r
    \r
    public static HuffmanNode buildHuffmanTree(Map<Character, Integer> frequencies) {\r
        PriorityQueue<HuffmanNode> pq = new PriorityQueue<>();\r
        \r
        for (Map.Entry<Character, Integer> entry : frequencies.entrySet()) {\r
            pq.offer(new HuffmanNode(entry.getKey(), entry.getValue()));\r
        }\r
        \r
        while (pq.size() > 1) {\r
            HuffmanNode left = pq.poll();\r
            HuffmanNode right = pq.poll();\r
            \r
            HuffmanNode parent = new HuffmanNode('\\0', left.frequency + right.frequency);\r
            parent.left = left;\r
            parent.right = right;\r
            \r
            pq.offer(parent);\r
        }\r
        \r
        return pq.poll();\r
    }\r
}\r
\`\`\`\r
\r
**Greedy Algorithm Insights:**\r
\r
Activity selection sorts by finish time—O(n log n)—then scans linearly, greedily selecting non-overlapping activities. The correctness relies on a key insight: if an activity A finishes before B, choosing A never makes the solution worse than choosing B, because A leaves at least as much room for future activities.\r
\r
Fractional knapsack sorts items by value-per-weight ratio—the "bang for buck." Then greedily pack items in order, taking whole items until one doesn't fit, then taking a fraction of the next. The greedy choice is obviously optimal: why take something with lower value-per-weight when higher value-per-weight is available?\r
\r
Huffman coding builds a tree bottom-up. The priority queue ensures we always merge the two least-frequent nodes. The resulting tree is optimal because frequent characters end up closer to the root (shorter codes), while rare characters are deeper (longer codes). This is information theory made concrete—the expected code length is minimized.\r
\r
The pattern across these problems: greedy works when the problem has optimal substructure (optimal solutions contain optimal sub-solutions) and the greedy choice property (locally optimal choices lead to global optimality). Not all problems have these properties, which is why greedy algorithms require careful analysis and proof.\r
\r
### Divide and Conquer: Breaking Problems Apart\r
\r
Divide and conquer embodies a powerful problem-solving paradigm: break a problem into smaller instances, solve them recursively, then combine results. This recursive decomposition often leads to efficient algorithms with elegant structure. The classic examples—merge sort, quick sort, binary search—demonstrate the paradigm's power.\r
\r
The three-step pattern is universal: **divide** the problem into subproblems, **conquer** the subproblems recursively, and **combine** sub-solutions into a complete solution. The art lies in choosing how to divide (to ensure balanced subproblems) and how to combine (to do so efficiently).\r
\r
Merge sort epitomizes elegant divide-and-conquer. Divide: split the array in half. Conquer: recursively sort each half. Combine: merge the two sorted halves. The merging step is linear, and the division is balanced, giving O(n log n) time. The algorithm's stability and predictable performance make it a workhorse for production systems.\r
\r
Quick sort takes a different approach: choose a pivot, partition around it (elements smaller than pivot go left, larger go right), then recursively sort each partition. Unlike merge sort, quicksort's work happens during division (partitioning), not combination. Average case: O(n log n). Worst case (bad pivots): O(n²). Randomized pivot selection makes worst case vanishingly unlikely.\r
\r
The Master Theorem provides a cookbook for analyzing divide-and-conquer recurrences. For T(n) = aT(n/b) + f(n), compare f(n) to n^(log_b a). If f(n) is polynomially smaller, time is Θ(n^(log_b a)). If equal, it's Θ(n^(log_b a) log n). If larger, it's Θ(f(n)). This theorem handles most divide-and-conquer algorithms, turning complex recurrence analysis into pattern matching.\r
\r
**Pseudocode:**\r
\`\`\`\r
// Merge Sort - O(n log n)\r
FUNCTION mergeSort(arr, left, right):\r
    IF left < right THEN\r
        mid ← (left + right) / 2\r
        mergeSort(arr, left, mid)\r
        mergeSort(arr, mid + 1, right)\r
        merge(arr, left, mid, right)\r
\r
FUNCTION merge(arr, left, mid, right):\r
    leftSize ← mid - left + 1\r
    rightSize ← right - mid\r
    \r
    L ← NEW ARRAY of size leftSize\r
    R ← NEW ARRAY of size rightSize\r
    \r
    COPY arr[left...mid] to L\r
    COPY arr[mid+1...right] to R\r
    \r
    i ← 0, j ← 0, k ← left\r
    WHILE i < leftSize AND j < rightSize DO\r
        IF L[i] ≤ R[j] THEN\r
            arr[k] ← L[i]\r
            i ← i + 1\r
        ELSE\r
            arr[k] ← R[j]\r
            j ← j + 1\r
        k ← k + 1\r
    \r
    COPY remaining L elements (if any)\r
    COPY remaining R elements (if any)\r
\r
// Quick Sort - O(n log n) average, O(n²) worst\r
FUNCTION quickSort(arr, low, high):\r
    IF low < high THEN\r
        pivotIndex ← partition(arr, low, high)\r
        quickSort(arr, low, pivotIndex - 1)\r
        quickSort(arr, pivotIndex + 1, high)\r
\r
FUNCTION partition(arr, low, high):\r
    pivot ← arr[high]\r
    i ← low - 1\r
    \r
    FOR j ← low TO high - 1 DO\r
        IF arr[j] < pivot THEN\r
            i ← i + 1\r
            SWAP arr[i] and arr[j]\r
    \r
    SWAP arr[i + 1] and arr[high]\r
    RETURN i + 1\r
\r
// Binary Search - O(log n)\r
FUNCTION binarySearch(arr, target):\r
    left ← 0\r
    right ← length(arr) - 1\r
    \r
    WHILE left ≤ right DO\r
        mid ← (left + right) / 2\r
        IF arr[mid] = target THEN\r
            RETURN mid\r
        ELSE IF arr[mid] < target THEN\r
            left ← mid + 1\r
        ELSE\r
            right ← mid - 1\r
    \r
    RETURN -1\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
public class DivideAndConquer {\r
    \r
    // Merge Sort: O(n log n)\r
    public static void mergeSort(int[] arr) {\r
        if (arr.length <= 1) return;\r
        mergeSortHelper(arr, 0, arr.length - 1);\r
    }\r
    \r
    private static void mergeSortHelper(int[] arr, int left, int right) {\r
        if (left < right) {\r
            int mid = left + (right - left) / 2;\r
            \r
            mergeSortHelper(arr, left, mid);\r
            mergeSortHelper(arr, mid + 1, right);\r
            merge(arr, left, mid, right);\r
        }\r
    }\r
    \r
    private static void merge(int[] arr, int left, int mid, int right) {\r
        int n1 = mid - left + 1;\r
        int n2 = right - mid;\r
        \r
        int[] L = new int[n1];\r
        int[] R = new int[n2];\r
        \r
        System.arraycopy(arr, left, L, 0, n1);\r
        System.arraycopy(arr, mid + 1, R, 0, n2);\r
        \r
        int i = 0, j = 0, k = left;\r
        \r
        while (i < n1 && j < n2) {\r
            if (L[i] <= R[j]) {\r
                arr[k++] = L[i++];\r
            } else {\r
                arr[k++] = R[j++];\r
            }\r
        }\r
        \r
        while (i < n1) arr[k++] = L[i++];\r
        while (j < n2) arr[k++] = R[j++];\r
    }\r
    \r
    // Quick Sort: O(n log n) average, O(n²) worst\r
    public static void quickSort(int[] arr) {\r
        quickSortHelper(arr, 0, arr.length - 1);\r
    }\r
    \r
    private static void quickSortHelper(int[] arr, int low, int high) {\r
        if (low < high) {\r
            int pivotIndex = partition(arr, low, high);\r
            quickSortHelper(arr, low, pivotIndex - 1);\r
            quickSortHelper(arr, pivotIndex + 1, high);\r
        }\r
    }\r
    \r
    private static int partition(int[] arr, int low, int high) {\r
        int pivot = arr[high];\r
        int i = low - 1;\r
        \r
        for (int j = low; j < high; j++) {\r
            if (arr[j] < pivot) {\r
                i++;\r
                swap(arr, i, j);\r
            }\r
        }\r
        \r
        swap(arr, i + 1, high);\r
        return i + 1;\r
    }\r
    \r
    private static void swap(int[] arr, int i, int j) {\r
        int temp = arr[i];\r
        arr[i] = arr[j];\r
        arr[j] = temp;\r
    }\r
    \r
    // Binary Search: O(log n)\r
    public static int binarySearch(int[] arr, int target) {\r
        return binarySearchHelper(arr, target, 0, arr.length - 1);\r
    }\r
    \r
    private static int binarySearchHelper(int[] arr, int target, int left, int right) {\r
        if (left > right) return -1;\r
        \r
        int mid = left + (right - left) / 2;\r
        \r
        if (arr[mid] == target) {\r
            return mid;\r
        } else if (arr[mid] > target) {\r
            return binarySearchHelper(arr, target, left, mid - 1);\r
        } else {\r
            return binarySearchHelper(arr, target, mid + 1, right);\r
        }\r
    }\r
}\r
\`\`\`\r
\r
**Divide and Conquer in Practice:**\r
\r
Merge sort's merge operation is the key to its efficiency. Two sorted arrays can be merged in linear time by maintaining pointers into each and always taking the smaller element. The two while loops at the end handle remaining elements after one array is exhausted. This linear merge, combined with logarithmic recursion depth, gives O(n log n) time.\r
\r
Quick sort's partition operation rearranges the array so elements less than the pivot precede it, and elements greater follow. The two-pointer technique swaps elements to achieve this in a single pass—O(n) time. The pivot's final position becomes the division point for recursive calls. Choosing a good pivot (ideally the median) ensures balanced partitions.\r
\r
Binary search, though simple, demonstrates divide-and-conquer elegance. Each comparison halves the search space. The midpoint calculation \`mid = left + (right - left) / 2\` avoids overflow that \`(left + right) / 2\` might cause—a subtle but important detail showing how theory meets practice.\r
\r
The Master Theorem analysis: Merge sort has a=2 (two subproblems), b=2 (half size each), f(n)=O(n) (merge time). So n^(log_2 2) = n, equal to f(n), giving case 2: Θ(n log n). Quick sort's average case analysis is similar, though worst-case analysis requires more sophisticated techniques.\r
\r
### Dynamic Programming: Optimal Substructure and Overlapping Subproblems\r
\r
Dynamic programming (DP) is perhaps the most powerful algorithmic technique for optimization problems. Like divide-and-conquer, DP breaks problems into subproblems. But DP applies when subproblems overlap—when the same sub-problem is solved repeatedly. By storing (memoizing) solutions to subproblems, DP avoids redundant computation, often transforming exponential algorithms into polynomial ones.\r
\r
The two key properties for DP are optimal substructure (optimal solutions contain optimal sub-solutions) and overlapping subproblems (subproblems recur multiple times). Optimal substructure suggests a recursive solution; overlapping subproblems suggest caching. Together, they define DP's domain.\r
\r
Two approaches exist: top-down (memoization) and bottom-up (tabulation). Memoization adds caching to natural recursive code. Tabulation builds a table iteratively, solving smaller subproblems first. Both achieve the same complexity, but tabulation often has better constants (no recursion overhead) while memoization can be easier to code and skips unnecessary subproblems.\r
\r
The 0/1 knapsack problem exemplifies DP's power. Given items with weights and values, maximize value without exceeding capacity. For each item, we choose: take it (if it fits) or leave it. The recurrence: \`dp[i][w] = max(dp[i-1][w], value[i] + dp[i-1][w-weight[i]])\`. The 2D table stores solutions to all subproblems, enabling polynomial-time solution to what seems like an exponential problem.\r
\r
LCS (Longest Common Subsequence) finds the longest sequence appearing in two strings in the same relative order. Applications include diff tools and bioinformatics. The recurrence: if characters match, include them and continue; if not, try skipping in each string and take the better result. The 2D DP table encodes all possible subsequences implicitly.\r
\r
Matrix chain multiplication optimizes the order of multiplying matrices. Multiplying A×B×C can be done as (A×B)×C or A×(B×C), with different costs. The DP solution tries all possible split points, taking the minimum cost. This illustrates DP's flexibility—the recurrence considers all possibilities, but memoization ensures each is computed once.\r
\r
**Pseudocode:**\r
\`\`\`\r
// 0/1 Knapsack - O(n × capacity)\r
FUNCTION knapsack01(weights, values, capacity):\r
    n ← length(weights)\r
    dp ← NEW 2D ARRAY of size (n+1) × (capacity+1)\r
    \r
    FOR i ← 0 TO n DO\r
        FOR w ← 0 TO capacity DO\r
            IF i = 0 OR w = 0 THEN\r
                dp[i][w] ← 0\r
            ELSE IF weights[i-1] ≤ w THEN\r
                dp[i][w] ← MAX(values[i-1] + dp[i-1][w-weights[i-1]], \r
                               dp[i-1][w])\r
            ELSE\r
                dp[i][w] ← dp[i-1][w]\r
    \r
    RETURN dp[n][capacity]\r
\r
// Longest Common Subsequence - O(m × n)\r
FUNCTION LCS(s1, s2):\r
    m ← length(s1)\r
    n ← length(s2)\r
    dp ← NEW 2D ARRAY of size (m+1) × (n+1)\r
    \r
    FOR i ← 1 TO m DO\r
        FOR j ← 1 TO n DO\r
            IF s1[i-1] = s2[j-1] THEN\r
                dp[i][j] ← dp[i-1][j-1] + 1\r
            ELSE\r
                dp[i][j] ← MAX(dp[i-1][j], dp[i][j-1])\r
    \r
    RETURN dp[m][n]\r
\r
// Matrix Chain Multiplication - O(n³)\r
FUNCTION matrixChainOrder(dims):\r
    n ← length(dims) - 1\r
    dp ← NEW 2D ARRAY of size n × n (all 0)\r
    \r
    FOR len ← 2 TO n DO\r
        FOR i ← 0 TO n - len DO\r
            j ← i + len - 1\r
            dp[i][j] ← ∞\r
            \r
            FOR k ← i TO j - 1 DO\r
                cost ← dp[i][k] + dp[k+1][j] + \r
                       dims[i] × dims[k+1] × dims[j+1]\r
                dp[i][j] ← MIN(dp[i][j], cost)\r
    \r
    RETURN dp[0][n-1]\r
\r
// Coin Change - O(n × amount)\r
FUNCTION coinChange(coins, amount):\r
    dp ← NEW ARRAY of size (amount+1) filled with ∞\r
    dp[0] ← 0\r
    \r
    FOR i ← 1 TO amount DO\r
        FOR each coin IN coins DO\r
            IF coin ≤ i THEN\r
                dp[i] ← MIN(dp[i], dp[i - coin] + 1)\r
    \r
    RETURN (dp[amount] = ∞) ? -1 : dp[amount]\r
\r
// Edit Distance - O(m × n)\r
FUNCTION editDistance(s1, s2):\r
    m ← length(s1)\r
    n ← length(s2)\r
    dp ← NEW 2D ARRAY of size (m+1) × (n+1)\r
    \r
    FOR i ← 0 TO m DO\r
        dp[i][0] ← i\r
    FOR j ← 0 TO n DO\r
        dp[0][j] ← j\r
    \r
    FOR i ← 1 TO m DO\r
        FOR j ← 1 TO n DO\r
            IF s1[i-1] = s2[j-1] THEN\r
                dp[i][j] ← dp[i-1][j-1]\r
            ELSE\r
                dp[i][j] ← 1 + MIN(dp[i-1][j],    // delete\r
                                    dp[i][j-1],    // insert\r
                                    dp[i-1][j-1])  // replace\r
    \r
    RETURN dp[m][n]\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
import java.util.*;\r
\r
public class DynamicProgramming {\r
    \r
    // 0/1 Knapsack: O(n * capacity)\r
    public static int knapsack01(int[] weights, int[] values, int capacity) {\r
        int n = weights.length;\r
        int[][] dp = new int[n + 1][capacity + 1];\r
        \r
        for (int i = 1; i <= n; i++) {\r
            for (int w = 1; w <= capacity; w++) {\r
                if (weights[i - 1] <= w) {\r
                    dp[i][w] = Math.max(\r
                        values[i - 1] + dp[i - 1][w - weights[i - 1]],\r
                        dp[i - 1][w]\r
                    );\r
                } else {\r
                    dp[i][w] = dp[i - 1][w];\r
                }\r
            }\r
        }\r
        \r
        return dp[n][capacity];\r
    }\r
    \r
    // Longest Common Subsequence: O(m * n)\r
    public static int longestCommonSubsequence(String text1, String text2) {\r
        int m = text1.length();\r
        int n = text2.length();\r
        int[][] dp = new int[m + 1][n + 1];\r
        \r
        for (int i = 1; i <= m; i++) {\r
            for (int j = 1; j <= n; j++) {\r
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {\r
                    dp[i][j] = dp[i - 1][j - 1] + 1;\r
                } else {\r
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\r
                }\r
            }\r
        }\r
        \r
        return dp[m][n];\r
    }\r
    \r
    // Matrix Chain Multiplication: O(n³)\r
    public static int matrixChainMultiplication(int[] dims) {\r
        int n = dims.length - 1;\r
        int[][] dp = new int[n][n];\r
        \r
        for (int len = 2; len <= n; len++) {\r
            for (int i = 0; i < n - len + 1; i++) {\r
                int j = i + len - 1;\r
                dp[i][j] = Integer.MAX_VALUE;\r
                \r
                for (int k = i; k < j; k++) {\r
                    int cost = dp[i][k] + dp[k + 1][j] + \r
                              dims[i] * dims[k + 1] * dims[j + 1];\r
                    dp[i][j] = Math.min(dp[i][j], cost);\r
                }\r
            }\r
        }\r
        \r
        return dp[0][n - 1];\r
    }\r
    \r
    // Coin Change: O(n * amount)\r
    public static int coinChange(int[] coins, int amount) {\r
        int[] dp = new int[amount + 1];\r
        Arrays.fill(dp, amount + 1);\r
        dp[0] = 0;\r
        \r
        for (int i = 1; i <= amount; i++) {\r
            for (int coin : coins) {\r
                if (coin <= i) {\r
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);\r
                }\r
            }\r
        }\r
        \r
        return dp[amount] > amount ? -1 : dp[amount];\r
    }\r
    \r
    // Edit Distance (Levenshtein): O(m * n)\r
    public static int editDistance(String word1, String word2) {\r
        int m = word1.length();\r
        int n = word2.length();\r
        int[][] dp = new int[m + 1][n + 1];\r
        \r
        for (int i = 0; i <= m; i++) dp[i][0] = i;\r
        for (int j = 0; j <= n; j++) dp[0][j] = j;\r
        \r
        for (int i = 1; i <= m; i++) {\r
            for (int j = 1; j <= n; j++) {\r
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {\r
                    dp[i][j] = dp[i - 1][j - 1];\r
                } else {\r
                    dp[i][j] = 1 + Math.min(\r
                        dp[i - 1][j],      // Delete\r
                        Math.min(\r
                            dp[i][j - 1],  // Insert\r
                            dp[i - 1][j - 1] // Replace\r
                        )\r
                    );\r
                }\r
            }\r
        }\r
        \r
        return dp[m][n];\r
    }\r
}\r
\`\`\`\r
\r
### Network Flow - Ford-Fulkerson\r
\r
**Pseudocode:**\r
\`\`\`\r
// Ford-Fulkerson (Edmonds-Karp with BFS) - O(V × E²)\r
FUNCTION maxFlow(capacity, source, sink):\r
    n ← size of capacity matrix\r
    residual ← COPY of capacity matrix\r
    maxFlow ← 0\r
    parent ← NEW ARRAY of size n\r
    \r
    // While augmenting path exists\r
    WHILE BFS(residual, source, sink, parent) DO\r
        // Find minimum capacity along path\r
        pathFlow ← ∞\r
        v ← sink\r
        WHILE v ≠ source DO\r
            u ← parent[v]\r
            pathFlow ← MIN(pathFlow, residual[u][v])\r
            v ← u\r
        \r
        // Update residual capacities\r
        v ← sink\r
        WHILE v ≠ source DO\r
            u ← parent[v]\r
            residual[u][v] ← residual[u][v] - pathFlow\r
            residual[v][u] ← residual[v][u] + pathFlow\r
            v ← u\r
        \r
        maxFlow ← maxFlow + pathFlow\r
    \r
    RETURN maxFlow\r
\r
FUNCTION BFS(residual, source, sink, parent):\r
    visited ← NEW BOOLEAN ARRAY of size n (all false)\r
    queue ← NEW QUEUE\r
    \r
    visited[source] ← true\r
    queue.ENQUEUE(source)\r
    \r
    WHILE queue is not empty DO\r
        u ← queue.DEQUEUE()\r
        \r
        FOR v ← 0 TO n - 1 DO\r
            IF NOT visited[v] AND residual[u][v] > 0 THEN\r
                visited[v] ← true\r
                parent[v] ← u\r
                queue.ENQUEUE(v)\r
                \r
                IF v = sink THEN\r
                    RETURN true\r
    \r
    RETURN false\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
import java.util.*;\r
\r
public class NetworkFlow {\r
    \r
    // Ford-Fulkerson with BFS (Edmonds-Karp): O(V * E²)\r
    public static int maxFlow(int[][] capacity, int source, int sink) {\r
        int n = capacity.length;\r
        int[][] residual = new int[n][n];\r
        \r
        // Initialize residual graph\r
        for (int i = 0; i < n; i++) {\r
            System.arraycopy(capacity[i], 0, residual[i], 0, n);\r
        }\r
        \r
        int maxFlow = 0;\r
        int[] parent = new int[n];\r
        \r
        // While there exists an augmenting path\r
        while (bfs(residual, source, sink, parent)) {\r
            // Find minimum capacity along the path\r
            int pathFlow = Integer.MAX_VALUE;\r
            for (int v = sink; v != source; v = parent[v]) {\r
                int u = parent[v];\r
                pathFlow = Math.min(pathFlow, residual[u][v]);\r
            }\r
            \r
            // Update residual capacities\r
            for (int v = sink; v != source; v = parent[v]) {\r
                int u = parent[v];\r
                residual[u][v] -= pathFlow;\r
                residual[v][u] += pathFlow;\r
            }\r
            \r
            maxFlow += pathFlow;\r
        }\r
        \r
        return maxFlow;\r
    }\r
    \r
    private static boolean bfs(int[][] residual, int source, int sink, int[] parent) {\r
        int n = residual.length;\r
        boolean[] visited = new boolean[n];\r
        Queue<Integer> queue = new LinkedList<>();\r
        \r
        queue.offer(source);\r
        visited[source] = true;\r
        parent[source] = -1;\r
        \r
        while (!queue.isEmpty()) {\r
            int u = queue.poll();\r
            \r
            for (int v = 0; v < n; v++) {\r
                if (!visited[v] && residual[u][v] > 0) {\r
                    visited[v] = true;\r
                    parent[v] = u;\r
                    queue.offer(v);\r
                    \r
                    if (v == sink) {\r
                        return true;\r
                    }\r
                }\r
            }\r
        }\r
        \r
        return false;\r
    }\r
}\r
\`\`\`\r
\r
**Dynamic Programming in Practice:**\r
\r
The knapsack implementation fills a 2D table where \`dp[i][w]\` represents the maximum value using items 0..i-1 with capacity w. The inner condition checks if the current item fits; if so, we choose the better of taking it or leaving it. The final answer is \`dp[n][capacity]\`—the maximum value using all items.\r
\r
LCS fills a 2D table where \`dp[i][j]\` is the LCS length of text1[0..i-1] and text2[0..j-1]. Matching characters extend the LCS from position [i-1][j-1]. Mismatches take the better of skipping in each string. The table implicitly encodes which characters match, enabling path reconstruction.\r
\r
Matrix chain multiplication uses a 1D array of dimensions (for n matrices, n+1 dimensions) and fills a 2D table. \`dp[i][j]\` is the minimum cost to multiply matrices i through j. The inner loop tries all split points k, computing cost as left-chain-cost + right-chain-cost + splitting-cost. The O(n³) complexity is far better than the exponential number of parenthesizations.\r
\r
Coin change demonstrates 1D DP: \`dp[i]\` is the minimum coins to make amount i. For each amount, we try using each coin, taking the minimum. The recurrence \`dp[i] = min(dp[i], dp[i-coin] + 1)\` captures the optimal substructure: the best way to make amount i uses the best way to make i-coin, plus one more coin.\r
\r
Edit distance measures how many single-character edits transform one string into another. Applications include spell-checking and DNA sequence alignment. The DP recurrence considers three operations: insert, delete, or replace. Matching characters cost nothing; mismatches take the cheapest operation. This formulation makes a complex problem tractable.\r
\r
### Network Flow: Modeling Capacity Constraints\r
\r
Network flow problems model scenarios where resources flow through a network with capacity constraints. Water through pipes, traffic through roads, data through networks—all fit the flow framework. The maximum flow problem asks: given a network with edge capacities, what's the maximum flow from source to sink?\r
\r
The Ford-Fulkerson method is conceptually simple: while an augmenting path exists (a path from source to sink with remaining capacity), push more flow through it. The flow amount is limited by the path's minimum capacity edge—the bottleneck. Repeat until no augmenting path exists. At termination, the flow is maximum.\r
\r
The implementation uses a residual graph: for each edge with flow f and capacity c, the residual capacity is c-f forward and f backward. The backward edges enable "undoing" flow, crucial for finding optimal solutions. BFS finds augmenting paths (making this the Edmonds-Karp algorithm), guaranteeing O(VE²) time.\r
\r
The max-flow min-cut theorem is fundamental: the maximum flow equals the minimum cut capacity. A cut partitions vertices into two sets; its capacity is the sum of forward edge capacities crossing the cut. This duality connects flow optimization to graph partitioning, with applications from scheduling to network resilience.\r
\r
**Pseudocode:**\r
\`\`\`\r
// SAT Brute Force Solver - O(2ⁿ)\r
FUNCTION solveSAT(formula, numVars):\r
    // Try all 2ⁿ possible assignments\r
    FOR assignment ← 0 TO 2^numVars - 1 DO\r
        values ← NEW BOOLEAN ARRAY of size numVars\r
        \r
        // Convert assignment number to boolean array\r
        FOR i ← 0 TO numVars - 1 DO\r
            values[i] ← (assignment & (1 << i)) ≠ 0\r
        \r
        // Check if this assignment satisfies all clauses\r
        IF evaluateFormula(formula, values) THEN\r
            RETURN values  // Found satisfying assignment\r
    \r
    RETURN NULL  // No satisfying assignment exists\r
\r
FUNCTION evaluateFormula(formula, assignment):\r
    FOR each clause IN formula DO\r
        satisfied ← false\r
        FOR each literal IN clause DO\r
            value ← assignment[literal.variable]\r
            IF literal.negated THEN\r
                value ← NOT value\r
            IF value = true THEN\r
                satisfied ← true\r
                BREAK\r
        \r
        IF NOT satisfied THEN\r
            RETURN false  // Clause not satisfied\r
    \r
    RETURN true  // All clauses satisfied\r
\r
// Convert to 3-SAT - Polynomial time reduction\r
FUNCTION convertTo3SAT(clause):\r
    IF length(clause) ≤ 3 THEN\r
        RETURN clause\r
    \r
    // Split long clause into multiple 3-literal clauses\r
    // using auxiliary variables\r
    newClauses ← EMPTY LIST\r
    current ← clause[0], clause[1], aux₀\r
    newClauses.ADD(current)\r
    \r
    FOR i ← 2 TO length(clause) - 3 DO\r
        current ← NOT auxᵢ₋₁, clause[i], auxᵢ\r
        newClauses.ADD(current)\r
    \r
    final ← NOT auxₙ₋₂, clause[n-2], clause[n-1]\r
    newClauses.ADD(final)\r
    \r
    RETURN newClauses\r
\`\`\`\r
\r
**Java Implementation:**\r
\`\`\`java\r
import java.util.*;\r
\r
public class SATProblems {\r
    \r
    // Boolean Satisfiability representation\r
    static class Clause {\r
        List<Literal> literals;\r
        \r
        Clause() {\r
            this.literals = new ArrayList<>();\r
        }\r
        \r
        void addLiteral(int variable, boolean negated) {\r
            literals.add(new Literal(variable, negated));\r
        }\r
        \r
        boolean evaluate(boolean[] assignment) {\r
            for (Literal lit : literals) {\r
                boolean value = assignment[lit.variable];\r
                if (lit.negated) value = !value;\r
                if (value) return true;\r
            }\r
            return false;\r
        }\r
    }\r
    \r
    static class Literal {\r
        int variable;\r
        boolean negated;\r
        \r
        Literal(int variable, boolean negated) {\r
            this.variable = variable;\r
            this.negated = negated;\r
        }\r
    }\r
    \r
    static class SATFormula {\r
        List<Clause> clauses;\r
        int numVariables;\r
        \r
        SATFormula(int numVariables) {\r
            this.numVariables = numVariables;\r
            this.clauses = new ArrayList<>();\r
        }\r
        \r
        void addClause(Clause clause) {\r
            clauses.add(clause);\r
        }\r
        \r
        boolean evaluate(boolean[] assignment) {\r
            for (Clause clause : clauses) {\r
                if (!clause.evaluate(assignment)) {\r
                    return false;\r
                }\r
            }\r
            return true;\r
        }\r
        \r
        // Brute force SAT solver: O(2ⁿ * m) where n = variables, m = clauses\r
        // This is exponential - illustrating why SAT is NP-complete\r
        boolean solveBruteForce() {\r
            return tryAssignment(new boolean[numVariables], 0);\r
        }\r
        \r
        private boolean tryAssignment(boolean[] assignment, int varIndex) {\r
            if (varIndex == numVariables) {\r
                return evaluate(assignment);\r
            }\r
            \r
            // Try false\r
            assignment[varIndex] = false;\r
            if (tryAssignment(assignment, varIndex + 1)) {\r
                return true;\r
            }\r
            \r
            // Try true\r
            assignment[varIndex] = true;\r
            return tryAssignment(assignment, varIndex + 1);\r
        }\r
    }\r
    \r
    // Convert arbitrary CNF to 3-CNF (polynomial-time reduction)\r
    // This demonstrates that 3-SAT is NP-complete\r
    public static SATFormula convertTo3SAT(SATFormula original) {\r
        SATFormula threeSAT = new SATFormula(original.numVariables * 2);\r
        int nextVar = original.numVariables;\r
        \r
        for (Clause clause : original.clauses) {\r
            if (clause.literals.size() <= 3) {\r
                threeSAT.addClause(clause);\r
            } else {\r
                // Split large clauses using auxiliary variables\r
                // (x1 v x2 v x3 v x4) becomes:\r
                // (x1 v x2 v y) ^ (~y v x3 v x4)\r
                // This is the polynomial reduction\r
                int auxVar = nextVar++;\r
                \r
                Clause first = new Clause();\r
                first.addLiteral(clause.literals.get(0).variable, \r
                               clause.literals.get(0).negated);\r
                first.addLiteral(clause.literals.get(1).variable, \r
                               clause.literals.get(1).negated);\r
                first.addLiteral(auxVar, false);\r
                threeSAT.addClause(first);\r
                \r
                Clause second = new Clause();\r
                second.addLiteral(auxVar, true);\r
                for (int i = 2; i < clause.literals.size(); i++) {\r
                    second.addLiteral(clause.literals.get(i).variable,\r
                                    clause.literals.get(i).negated);\r
                }\r
                threeSAT.addClause(second);\r
            }\r
        }\r
        \r
        return threeSAT;\r
    }\r
}\r
\`\`\`\r
\r
**SAT and Computational Complexity:**\r
\r
The Boolean Satisfiability Problem (SAT) asks: given a Boolean formula in CNF (conjunctive normal form—ANDs of ORs), does an assignment of variables exist that makes it true? SAT was the first problem proven NP-complete, establishing it as the hardest problem in NP.\r
\r
The implementation demonstrates SAT's structure: clauses contain literals (variables or their negations), and the formula is satisfied if all clauses are satisfied. The \`evaluate\` method checks if a given assignment satisfies the formula. The brute-force solver tries all 2ⁿ possible assignments—exponential time.\r
\r
3-SAT restricts clauses to exactly 3 literals. The \`convertTo3SAT\` method shows a polynomial-time reduction from arbitrary CNF to 3-CNF. This reduction proves 3-SAT is NP-complete: if we could solve 3-SAT in polynomial time, we could solve all CNF-SAT problems in polynomial time. This is the essence of NP-completeness: hardness flows through polynomial reductions.\r
\r
The significance of NP-completeness is profound. If any NP-complete problem has a polynomial algorithm, then P = NP—all efficiently verifiable problems are efficiently solvable. Most computer scientists believe P ≠ NP, meaning these problems are inherently intractable. Recognizing NP-complete problems tells us when to abandon exact algorithms and seek approximations or heuristics.\r
\r
Thousands of practical problems are NP-complete: traveling salesman, graph coloring, scheduling, circuit design. When you encounter one, you face a choice: use exponential exact algorithms for small inputs, develop approximation algorithms with provable guarantees, or use heuristics without guarantees. Understanding NP-completeness guides these decisions.\r
\r
**Chapter 4 Synthesis:**\r
\r
This chapter explored algorithmic paradigms—strategies for designing algorithms. Greedy algorithms make locally optimal choices, working when problems have the greedy choice property. Divide-and-conquer breaks problems recursively, effective when division is balanced and combination is efficient. Dynamic programming solves optimization through optimal substructure and overlapping subproblems, caching solutions to avoid redundant work.\r
\r
Network flow models capacity-constrained optimization, connecting to graph cuts through fundamental duality. And NP-completeness theory reveals computational limits—problems that probably lack efficient algorithms, guiding us toward approximation and heuristics.\r
\r
These paradigms aren't mere techniques—they're ways of thinking about problems. Recognizing a problem's structure tells you which paradigm applies. Seeing optimal substructure suggests DP. Noticing safe greedy choices suggests greedy algorithms. Observing recursive decomposition suggests divide-and-conquer. This pattern recognition, honed through practice, is the essence of algorithmic thinking.\r
\r
## Bonus Videos\r
\r
Greedy\r
\r
{{YouTube:https://www.youtube.com/watch?v=HzeK7g8cD0Y}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=ARvQcqJ_-NY}}\r
\r
Activity selection:\r
\r
{{YouTube:https://www.youtube.com/watch?v=V0ZrLuIVzaY}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=Qz6D7mrxaJM}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=32uOuOPXBhc}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=tEfVXgrP6WU}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=tvwipsztQr4}}\r
\r
Fractional Knapsack:\r
\r
{{YouTube:https://www.youtube.com/watch?v=ujHQlfR3qfo}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=m1p-eWxrt6g}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=xZfmHVi7FMg}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=DGOwuk55xa0}}\r
\r
Huffman:\r
\r
{{YouTube:https://www.youtube.com/watch?v=JsTptu56GM8}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=co4_ahEDCho}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=iEm1NRyEe5c}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=EzADYr8b5jA}}\r
\r
Divide and Conquer\r
\r
Merge Sort:\r
\r
{{YouTube:https://www.youtube.com/watch?v=4VqmGXwpLqc}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=KF2j-9iSf4Q}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=-3u1C1URNZY}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=es2T6KY45cA}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=3j0SWDX4AtU}}\r
\r
Quick Sort:\r
\r
{{YouTube:https://www.youtube.com/watch?v=XE4VP_8Y0BU}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=Vtckgz38QHs}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=Hoixgm4-P4M}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=MZaf_9IZCrc}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=aXXWXz5rF64}}\r
\r
Master Theorem:\r
\r
{{YouTube:https://www.youtube.com/watch?v=2H0GKdrIowU}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=LlFBRDO5gNQ}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=SLsHKh_OUEM}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=d-gIGFxewW4}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=2y0HQGd1-nA}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=OynWkEj0S-s}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=T68vN1FNY4o}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=09vU-wVwW3U}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=g87rea4FDv4}}\r
\r
Network Flow\r
\r
{{YouTube:https://www.youtube.com/watch?v=Tl90tNtKvxs}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=VbeTl1gG4l4}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=LdOnanfc5TM}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=oHy3ddI9X3o}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=3LG-My_MoWc}}\r
\r
\r
Dynamic Programming\r
\r
{{YouTube:https://www.youtube.com/watch?v=oifN-YVlrq8}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=Hdr64lKQ3e4}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=rE5h11FwiVw}}\r
\r
Knapsack:\r
\r
{{YouTube:https://www.youtube.com/watch?v=cJ21moQpofY}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=qxWu-SeAqe4}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=xOlhR_2QCXY}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=nLmhmB6NzcM}}\r
\r
LCS:\r
\r
{{YouTube:https://www.youtube.com/watch?v=Ua0GhsJSlWM}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=sSno9rV8Rhg}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=Qf5R-uYQRPk}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=KnWorqyDSLA}}\r
\r
Matrix Chain Multiplication:\r
\r
{{YouTube:https://www.youtube.com/watch?v=O_G2hVZvNBg}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=prx1psByp7U}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=JOJK7-fM2JQ}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=GMzVeWpyTN0}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=vgLJZMUfnsU}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=_WncuhSJZyA}}\r
\r
\r
Other DP problems:\r
\r
Coinage:\r
\r
{{YouTube:https://www.youtube.com/watch?v=KnWorqyDSLA}}\r
\r
NP-Complete / SAT / 3-SAT\r
\r
{{YouTube:https://www.youtube.com/watch?v=YX40hbAHx3s}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=6OPsH8PK7xM}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=pQsdygaYcE4}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=GCw07nZckps}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=ylItc6O3A4Y}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=BTC3JsV_cqE}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=DY5oF7I_yz4}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=-wlUDJZb6-Q}}\r
\r
SAT and proof of NP-Completeness:\r
\r
{{YouTube:https://www.youtube.com/watch?v=uAdVzz1hKYY}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=KeLE0lar-WA}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=Mu5HUvIojJA}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=tDDHjrd3FBg}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=1_fbpp7CLmY}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=WDgkkVq5IB0}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=nKNd9iExRO8}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=WDgkkVq5IB0}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=nKNd9iExRO8}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=QwGHBX2k8Xc}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=sJC5mBFPKcg}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=g8XTGcGfxTY}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=2G4BeSbHEyg}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=a-h3HTmv214}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=s7MY2c8bF3M}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=EIFZth8NS_Q}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=eZIhrrYgibc}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=tYsQax1JXIk}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=9hqpVp6zGl4}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=7I15IN7zEsM}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=C2tWSssGMBs}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=eU_zPPBjQPk}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=xAQQc1_RjD8}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=DcgPn2FtMlo}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=MYorPavtyqo}}\r
\r
{{YouTube:https://www.youtube.com/watch?v=rSCtkJohumA}}\r
\r
\r
`},"index.md":{type:"markdown",module:`# CS333: Data Structures and Algorithms I\r
\r
Welcome to CS333! This course explores fundamental data structures and algorithms that are essential for efficient problem-solving in computer science.\r
\r
## Course Overview\r
\r
This course provides a comprehensive study of algorithm design and analysis, covering essential data structures, algorithmic paradigms, and computational complexity theory. Through ~40 core exam questions across four chapters, students will master the mathematical foundations of algorithm analysis, develop proficiency with fundamental data structures, and learn to apply key algorithmic strategies to solve complex computational problems.\r
\r
The curriculum progresses from foundational data structures (arrays, lists, basic sorting) through mathematical analysis techniques (Big-O notation, recurrence relations) to advanced topics including graph algorithms, dynamic programming, and NP-completeness theory. Students will learn both the theoretical frameworks for analyzing algorithmic efficiency and the practical skills needed to implement and optimize real-world algorithms.\r
\r
## Topics\r
\r
### [Chapter 1: Arrays, Lists, and a Taste of Complexity Theory](content/chapter-01/)\r
\r
**Big Picture:**\r
\r
* Organizing data structures from primitive datums to complex graphs\r
* Categorizing algorithms from basic search to NP-complete problems\r
\r
**Arrays and Lists:**\r
\r
* Fundamental differences between arrays and linked lists\r
* Implementation details of linked list structures\r
* Performance comparison: search, insertion, deletion, updates, and swapping\r
* Accumulator and transformation patterns\r
\r
**Basic Sorting Algorithms:**\r
\r
* Insertion Sort: implementation and O(n²) analysis\r
* Selection Sort: implementation and O(n²) analysis  \r
* Choosing between arrays and lists for different sorting algorithms\r
* When simple sorting algorithms are appropriate\r
\r
---\r
\r
### [Chapter 2: Mathematics of Algorithm Complexity](content/chapter-02/)\r
\r
**Big-O Notation and Asymptotic Analysis:**\r
\r
* Mathematical definition of Big-O notation\r
* Determining asymptotic upper bounds for functions\r
* Distinguishing Big-O (O), Big-Omega (Ω), and Big-Theta (Θ)\r
* Comparing function classes: polynomials, logarithms, exponentials\r
* Analyzing nested loops and complex code structures\r
* Ranking algorithms by time complexity\r
\r
---\r
\r
### [Chapter 3: Recursion, Trees, and Graphs](content/chapter-03/) \r
\r
**Recursion:**\r
\r
* Comparing iterative vs. recursive implementations (factorial example)\r
* Fibonacci: call trees, recurrence relations, memoization optimization\r
* Writing and solving recurrence relations\r
\r
**Tree Data Structures:**\r
\r
* Comparing BSTs, AVL Trees, Red-Black Trees, and B-Trees\r
* Balancing mechanisms and height guarantees\r
* Real-world use cases and performance trade-offs\r
\r
**Graph Algorithms:**\r
\r
* Graph representation (adjacency matrix vs. adjacency list)\r
* BFS and DFS traversal with connected components\r
* Shortest paths: BFS for unweighted graphs\r
* Dijkstra's algorithm: execution, path reconstruction, negative edge constraints\r
* Minimum spanning trees: Prim's and Kruskal's algorithms with correctness proofs\r
\r
---\r
\r
### [Chapter 4: Algorithm Paradigms and Intractability](content/chapter-04/)\r
\r
**Greedy Algorithms:**\r
\r
* Activity selection (interval scheduling)\r
* Fractional knapsack problem\r
* Huffman encoding for data compression\r
\r
**Divide and Conquer:**\r
\r
* Merge sort analysis with Master Theorem application\r
* Quick sort: best, average, and worst-case analysis\r
* Recurrence relations: T(n) = 2T(n/2) + O(n) patterns\r
\r
**Dynamic Programming:**\r
\r
* 0/1 Knapsack problem\r
* Longest Common Subsequence (LCS)\r
* Matrix chain multiplication\r
\r
**Network Flow:**\r
\r
* Ford-Fulkerson algorithm for maximum flow\r
* Max-flow min-cut theorem and applications\r
\r
**Computational Complexity:**\r
\r
* SAT to 3-SAT reduction: executing the transformation algorithm\r
* NP-completeness proofs: polynomial-time reductions, P vs NP, verifiers\r
\r
\r
## Further Reading\r
\r
* [Algorithm Design](https://theswissbay.ch/pdf/Gentoomen%20Library/Algorithms/Algorithm%20Design%20-%20John%20Kleinberg%20-%20%C3%89va%20Tardos.pdf)\r
* [Algorithms in a Nutshell](https://theswissbay.ch/pdf/Gentoomen%20Library/Algorithms/Algorithms_Nutshell%20.pdf)\r
`}},a4={yamlCount:69,markdownCount:5,totalCount:74},u4=["content/chapter-01/concept-map.yml","content/chapter-02/concept-map.yml","content/chapter-03/concept-map.yml","content/chapter-04/concept-map.yml"];function s4(){const e=dr(),[t,i]=P.useState([]),[u,l]=P.useState(null),[o,c]=P.useState(!0);if(P.useEffect(()=>{kn.initialize({compiledFiles:i4,stats:a4}),(async()=>{try{const b=await r4(u4);i(b)}catch(b){console.error("Failed to load questions:",b)}finally{c(!1)}})()},[]),o)return O.jsx("div",{className:"app loading",children:O.jsx("h2",{children:"Loading CS333 Textbook..."})});const h=y=>{l(y)},d=()=>{l(null)},p=e.pathname==="/exam"||e.pathname==="/#/exam";return O.jsxs("div",{className:"app",children:[O.jsx("header",{children:O.jsxs("div",{className:"header-content",children:[O.jsxs("div",{className:"header-title",children:[O.jsx("h1",{children:"CS333: Data Structures and Algorithms"}),O.jsx("p",{children:"Understanding computational complexity and efficient problem solving"})]}),O.jsxs("nav",{className:"main-nav",children:[O.jsx(Fl,{to:"/textbook",className:`nav-link ${e.pathname.startsWith("/textbook")?"active":""}`,children:"Textbook"}),O.jsx(Fl,{to:"/exam",className:`nav-link ${p?"active":""}`,children:"Practice Exam"})]})]})}),O.jsx("main",{children:O.jsxs(NA,{children:[O.jsx(kl,{path:"/",element:O.jsx(CA,{to:"/textbook",replace:!0})}),O.jsx(kl,{path:"/textbook/*",element:O.jsx(Z6,{})}),O.jsx(kl,{path:"/exam",element:u?O.jsx($6,{questions:u.questions,settings:u.settings,onEndExam:d}):O.jsx(J6,{questions:t,onStartExam:h,courseTitle:"CS333: Data Structures and Algorithms"})})]})})]})}function l4(){return O.jsx(JA,{children:O.jsx(s4,{})})}O2.createRoot(document.getElementById("root")).render(O.jsx(P.StrictMode,{children:O.jsx(l4,{})}));
