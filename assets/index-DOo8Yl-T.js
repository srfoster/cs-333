(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();function W1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cf={exports:{}},xu={};var sg;function T2(){if(sg)return xu;sg=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(u,s,o){var c=null;if(o!==void 0&&(c=""+o),s.key!==void 0&&(c=""+s.key),"key"in s){o={};for(var h in s)h!=="key"&&(o[h]=s[h])}else o=s;return s=o.ref,{$$typeof:e,type:u,key:c,ref:s!==void 0?s:null,props:o}}return xu.Fragment=t,xu.jsx=i,xu.jsxs=i,xu}var og;function v2(){return og||(og=1,Cf.exports=T2()),Cf.exports}var O=v2(),Nf={exports:{}},_e={};var cg;function A2(){if(cg)return _e;cg=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),v=Symbol.iterator;function T(M){return M===null||typeof M!="object"?null:(M=v&&M[v]||M["@@iterator"],typeof M=="function"?M:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,R={};function N(M,W,S){this.props=M,this.context=W,this.refs=R,this.updater=S||A}N.prototype.isReactComponent={},N.prototype.setState=function(M,W){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,W,"setState")},N.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function D(){}D.prototype=N.prototype;function F(M,W,S){this.props=M,this.context=W,this.refs=R,this.updater=S||A}var ee=F.prototype=new D;ee.constructor=F,C(ee,N.prototype),ee.isPureReactComponent=!0;var ne=Array.isArray;function G(){}var se={H:null,A:null,T:null,S:null},ye=Object.prototype.hasOwnProperty;function de(M,W,S){var he=S.ref;return{$$typeof:e,type:M,key:W,ref:he!==void 0?he:null,props:S}}function Y(M,W){return de(M.type,W,M.props)}function oe(M){return typeof M=="object"&&M!==null&&M.$$typeof===e}function fe(M){var W={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(S){return W[S]})}var me=/\/+/g;function ae(M,W){return typeof M=="object"&&M!==null&&M.key!=null?fe(""+M.key):W.toString(36)}function le(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(G,G):(M.status="pending",M.then(function(W){M.status==="pending"&&(M.status="fulfilled",M.value=W)},function(W){M.status==="pending"&&(M.status="rejected",M.reason=W)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function z(M,W,S,he,we){var Te=typeof M;(Te==="undefined"||Te==="boolean")&&(M=null);var Be=!1;if(M===null)Be=!0;else switch(Te){case"bigint":case"string":case"number":Be=!0;break;case"object":switch(M.$$typeof){case e:case t:Be=!0;break;case y:return Be=M._init,z(Be(M._payload),W,S,he,we)}}if(Be)return we=we(M),Be=he===""?"."+ae(M,0):he,ne(we)?(S="",Be!=null&&(S=Be.replace(me,"$&/")+"/"),z(we,W,S,"",function(hn){return hn})):we!=null&&(oe(we)&&(we=Y(we,S+(we.key==null||M&&M.key===we.key?"":(""+we.key).replace(me,"$&/")+"/")+Be)),W.push(we)),1;Be=0;var rt=he===""?".":he+":";if(ne(M))for(var Qe=0;Qe<M.length;Qe++)he=M[Qe],Te=rt+ae(he,Qe),Be+=z(he,W,S,Te,we);else if(Qe=T(M),typeof Qe=="function")for(M=Qe.call(M),Qe=0;!(he=M.next()).done;)he=he.value,Te=rt+ae(he,Qe++),Be+=z(he,W,S,Te,we);else if(Te==="object"){if(typeof M.then=="function")return z(le(M),W,S,he,we);throw W=String(M),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return Be}function ie(M,W,S){if(M==null)return M;var he=[],we=0;return z(M,he,"","",function(Te){return W.call(S,Te,we++)}),he}function be(M){if(M._status===-1){var W=M._result;W=W(),W.then(function(S){(M._status===0||M._status===-1)&&(M._status=1,M._result=S)},function(S){(M._status===0||M._status===-1)&&(M._status=2,M._result=S)}),M._status===-1&&(M._status=0,M._result=W)}if(M._status===1)return M._result.default;throw M._result}var Re=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},L={map:ie,forEach:function(M,W,S){ie(M,function(){W.apply(this,arguments)},S)},count:function(M){var W=0;return ie(M,function(){W++}),W},toArray:function(M){return ie(M,function(W){return W})||[]},only:function(M){if(!oe(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return _e.Activity=b,_e.Children=L,_e.Component=N,_e.Fragment=i,_e.Profiler=s,_e.PureComponent=F,_e.StrictMode=u,_e.Suspense=d,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=se,_e.__COMPILER_RUNTIME={__proto__:null,c:function(M){return se.H.useMemoCache(M)}},_e.cache=function(M){return function(){return M.apply(null,arguments)}},_e.cacheSignal=function(){return null},_e.cloneElement=function(M,W,S){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var he=C({},M.props),we=M.key;if(W!=null)for(Te in W.key!==void 0&&(we=""+W.key),W)!ye.call(W,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&W.ref===void 0||(he[Te]=W[Te]);var Te=arguments.length-2;if(Te===1)he.children=S;else if(1<Te){for(var Be=Array(Te),rt=0;rt<Te;rt++)Be[rt]=arguments[rt+2];he.children=Be}return de(M.type,we,he)},_e.createContext=function(M){return M={$$typeof:c,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:o,_context:M},M},_e.createElement=function(M,W,S){var he,we={},Te=null;if(W!=null)for(he in W.key!==void 0&&(Te=""+W.key),W)ye.call(W,he)&&he!=="key"&&he!=="__self"&&he!=="__source"&&(we[he]=W[he]);var Be=arguments.length-2;if(Be===1)we.children=S;else if(1<Be){for(var rt=Array(Be),Qe=0;Qe<Be;Qe++)rt[Qe]=arguments[Qe+2];we.children=rt}if(M&&M.defaultProps)for(he in Be=M.defaultProps,Be)we[he]===void 0&&(we[he]=Be[he]);return de(M,Te,we)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(M){return{$$typeof:h,render:M}},_e.isValidElement=oe,_e.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:be}},_e.memo=function(M,W){return{$$typeof:p,type:M,compare:W===void 0?null:W}},_e.startTransition=function(M){var W=se.T,S={};se.T=S;try{var he=M(),we=se.S;we!==null&&we(S,he),typeof he=="object"&&he!==null&&typeof he.then=="function"&&he.then(G,Re)}catch(Te){Re(Te)}finally{W!==null&&S.types!==null&&(W.types=S.types),se.T=W}},_e.unstable_useCacheRefresh=function(){return se.H.useCacheRefresh()},_e.use=function(M){return se.H.use(M)},_e.useActionState=function(M,W,S){return se.H.useActionState(M,W,S)},_e.useCallback=function(M,W){return se.H.useCallback(M,W)},_e.useContext=function(M){return se.H.useContext(M)},_e.useDebugValue=function(){},_e.useDeferredValue=function(M,W){return se.H.useDeferredValue(M,W)},_e.useEffect=function(M,W){return se.H.useEffect(M,W)},_e.useEffectEvent=function(M){return se.H.useEffectEvent(M)},_e.useId=function(){return se.H.useId()},_e.useImperativeHandle=function(M,W,S){return se.H.useImperativeHandle(M,W,S)},_e.useInsertionEffect=function(M,W){return se.H.useInsertionEffect(M,W)},_e.useLayoutEffect=function(M,W){return se.H.useLayoutEffect(M,W)},_e.useMemo=function(M,W){return se.H.useMemo(M,W)},_e.useOptimistic=function(M,W){return se.H.useOptimistic(M,W)},_e.useReducer=function(M,W,S){return se.H.useReducer(M,W,S)},_e.useRef=function(M){return se.H.useRef(M)},_e.useState=function(M){return se.H.useState(M)},_e.useSyncExternalStore=function(M,W,S){return se.H.useSyncExternalStore(M,W,S)},_e.useTransition=function(){return se.H.useTransition()},_e.version="19.2.3",_e}var fg;function Rh(){return fg||(fg=1,Nf.exports=A2()),Nf.exports}var H=Rh(),Of={exports:{}},wu={},Rf={exports:{}},kf={};var hg;function x2(){return hg||(hg=1,(function(e){function t(z,ie){var be=z.length;z.push(ie);e:for(;0<be;){var Re=be-1>>>1,L=z[Re];if(0<s(L,ie))z[Re]=ie,z[be]=L,be=Re;else break e}}function i(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var ie=z[0],be=z.pop();if(be!==ie){z[0]=be;e:for(var Re=0,L=z.length,M=L>>>1;Re<M;){var W=2*(Re+1)-1,S=z[W],he=W+1,we=z[he];if(0>s(S,be))he<L&&0>s(we,S)?(z[Re]=we,z[he]=be,Re=he):(z[Re]=S,z[W]=be,Re=W);else if(he<L&&0>s(we,be))z[Re]=we,z[he]=be,Re=he;else break e}}return ie}function s(z,ie){var be=z.sortIndex-ie.sortIndex;return be!==0?be:z.id-ie.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var c=Date,h=c.now();e.unstable_now=function(){return c.now()-h}}var d=[],p=[],y=1,b=null,v=3,T=!1,A=!1,C=!1,R=!1,N=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function ee(z){for(var ie=i(p);ie!==null;){if(ie.callback===null)u(p);else if(ie.startTime<=z)u(p),ie.sortIndex=ie.expirationTime,t(d,ie);else break;ie=i(p)}}function ne(z){if(C=!1,ee(z),!A)if(i(d)!==null)A=!0,G||(G=!0,fe());else{var ie=i(p);ie!==null&&le(ne,ie.startTime-z)}}var G=!1,se=-1,ye=5,de=-1;function Y(){return R?!0:!(e.unstable_now()-de<ye)}function oe(){if(R=!1,G){var z=e.unstable_now();de=z;var ie=!0;try{e:{A=!1,C&&(C=!1,D(se),se=-1),T=!0;var be=v;try{t:{for(ee(z),b=i(d);b!==null&&!(b.expirationTime>z&&Y());){var Re=b.callback;if(typeof Re=="function"){b.callback=null,v=b.priorityLevel;var L=Re(b.expirationTime<=z);if(z=e.unstable_now(),typeof L=="function"){b.callback=L,ee(z),ie=!0;break t}b===i(d)&&u(d),ee(z)}else u(d);b=i(d)}if(b!==null)ie=!0;else{var M=i(p);M!==null&&le(ne,M.startTime-z),ie=!1}}break e}finally{b=null,v=be,T=!1}ie=void 0}}finally{ie?fe():G=!1}}}var fe;if(typeof F=="function")fe=function(){F(oe)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ae=me.port2;me.port1.onmessage=oe,fe=function(){ae.postMessage(null)}}else fe=function(){N(oe,0)};function le(z,ie){se=N(function(){z(e.unstable_now())},ie)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(z){switch(v){case 1:case 2:case 3:var ie=3;break;default:ie=v}var be=v;v=ie;try{return z()}finally{v=be}},e.unstable_requestPaint=function(){R=!0},e.unstable_runWithPriority=function(z,ie){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var be=v;v=z;try{return ie()}finally{v=be}},e.unstable_scheduleCallback=function(z,ie,be){var Re=e.unstable_now();switch(typeof be=="object"&&be!==null?(be=be.delay,be=typeof be=="number"&&0<be?Re+be:Re):be=Re,z){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=be+L,z={id:y++,callback:ie,priorityLevel:z,startTime:be,expirationTime:L,sortIndex:-1},be>Re?(z.sortIndex=be,t(p,z),i(d)===null&&z===i(p)&&(C?(D(se),se=-1):C=!0,le(ne,be-Re))):(z.sortIndex=L,t(d,z),A||T||(A=!0,G||(G=!0,fe()))),z},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(z){var ie=v;return function(){var be=v;v=ie;try{return z.apply(this,arguments)}finally{v=be}}}})(kf)),kf}var dg;function w2(){return dg||(dg=1,Rf.exports=x2()),Rf.exports}var Lf={exports:{}},kt={};var mg;function S2(){if(mg)return kt;mg=1;var e=Rh();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var u={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");function o(d,p,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:b==null?null:""+b,children:d,containerInfo:p,implementation:y}}var c=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,kt.createPortal=function(d,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return o(d,p,null,y)},kt.flushSync=function(d){var p=c.T,y=u.p;try{if(c.T=null,u.p=2,d)return d()}finally{c.T=p,u.p=y,u.d.f()}},kt.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,u.d.C(d,p))},kt.prefetchDNS=function(d){typeof d=="string"&&u.d.D(d)},kt.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var y=p.as,b=h(y,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,T=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?u.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:v,fetchPriority:T}):y==="script"&&u.d.X(d,{crossOrigin:b,integrity:v,fetchPriority:T,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},kt.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=h(p.as,p.crossOrigin);u.d.M(d,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&u.d.M(d)},kt.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,b=h(y,p.crossOrigin);u.d.L(d,y,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},kt.preloadModule=function(d,p){if(typeof d=="string")if(p){var y=h(p.as,p.crossOrigin);u.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else u.d.m(d)},kt.requestFormReset=function(d){u.d.r(d)},kt.unstable_batchedUpdates=function(d,p){return d(p)},kt.useFormState=function(d,p,y){return c.H.useFormState(d,p,y)},kt.useFormStatus=function(){return c.H.useHostTransitionStatus()},kt.version="19.2.3",kt}var pg;function _2(){if(pg)return Lf.exports;pg=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Lf.exports=S2(),Lf.exports}var gg;function C2(){if(gg)return wu;gg=1;var e=w2(),t=Rh(),i=_2();function u(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function o(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function h(n){if(n.tag===31){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function d(n){if(o(n)!==n)throw Error(u(188))}function p(n){var r=n.alternate;if(!r){if(r=o(n),r===null)throw Error(u(188));return r!==n?null:n}for(var a=n,l=r;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return d(f),n;if(m===l)return d(f),r;m=m.sibling}throw Error(u(188))}if(a.return!==l.return)a=f,l=m;else{for(var E=!1,x=f.child;x;){if(x===a){E=!0,a=f,l=m;break}if(x===l){E=!0,l=f,a=m;break}x=x.sibling}if(!E){for(x=m.child;x;){if(x===a){E=!0,a=m,l=f;break}if(x===l){E=!0,l=m,a=f;break}x=x.sibling}if(!E)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?n:r}function y(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=y(n),r!==null)return r;n=n.sibling}return null}var b=Object.assign,v=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),F=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=oe&&n[oe]||n["@@iterator"],typeof n=="function"?n:null)}var me=Symbol.for("react.client.reference");function ae(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===me?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case C:return"Fragment";case N:return"Profiler";case R:return"StrictMode";case ne:return"Suspense";case G:return"SuspenseList";case de:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case A:return"Portal";case F:return n.displayName||"Context";case D:return(n._context.displayName||"Context")+".Consumer";case ee:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case se:return r=n.displayName||null,r!==null?r:ae(n.type)||"Memo";case ye:r=n._payload,n=n._init;try{return ae(n(r))}catch{}}return null}var le=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be={pending:!1,data:null,method:null,action:null},Re=[],L=-1;function M(n){return{current:n}}function W(n){0>L||(n.current=Re[L],Re[L]=null,L--)}function S(n,r){L++,Re[L]=n.current,n.current=r}var he=M(null),we=M(null),Te=M(null),Be=M(null);function rt(n,r){switch(S(Te,r),S(we,n),S(he,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?k0(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=k0(r),n=L0(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}W(he),S(he,n)}function Qe(){W(he),W(we),W(Te)}function hn(n){n.memoizedState!==null&&S(Be,n);var r=he.current,a=L0(r,n.type);r!==a&&(S(we,n),S(he,a))}function jn(n){we.current===n&&(W(he),W(we)),Be.current===n&&(W(Be),Eu._currentValue=be)}var Ra,al;function qn(n){if(Ra===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);Ra=r&&r[1]||"",al=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ra+n+al}var Ai=!1;function xi(n,r){if(!n||Ai)return"";Ai=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(Q){var V=Q}Reflect.construct(n,[],$)}else{try{$.call()}catch(Q){V=Q}n.call($.prototype)}}else{try{throw Error()}catch(Q){V=Q}($=n())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(Q){if(Q&&V&&typeof Q.stack=="string")return[Q.stack,V.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],x=m[1];if(E&&x){var I=E.split(`
`),q=x.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===q.length)for(l=I.length-1,f=q.length-1;1<=l&&0<=f&&I[l]!==q[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==q[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==q[f]){var K=`
`+I[l].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=l&&0<=f);break}}}finally{Ai=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?qn(a):""}function ul(n,r){switch(n.tag){case 26:case 27:case 5:return qn(n.type);case 16:return qn("Lazy");case 13:return n.child!==r&&r!==null?qn("Suspense Fallback"):qn("Suspense");case 19:return qn("SuspenseList");case 0:case 15:return xi(n.type,!1);case 11:return xi(n.type.render,!1);case 1:return xi(n.type,!0);case 31:return qn("Activity");default:return""}}function ll(n){try{var r="",a=null;do r+=ul(n,a),a=n,n=n.return;while(n);return r}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var wi=Object.prototype.hasOwnProperty,Si=e.unstable_scheduleCallback,ka=e.unstable_cancelCallback,co=e.unstable_shouldYield,fo=e.unstable_requestPaint,Bt=e.unstable_now,ho=e.unstable_getCurrentPriorityLevel,Z=e.unstable_ImmediatePriority,ce=e.unstable_UserBlockingPriority,Se=e.unstable_NormalPriority,Le=e.unstable_LowPriority,Ye=e.unstable_IdlePriority,$t=e.log,Yn=e.unstable_setDisableYieldValue,Ft=null,yt=null;function zt(n){if(typeof $t=="function"&&Yn(n),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Ft,n)}catch{}}var Ze=Math.clz32?Math.clz32:uT,pr=Math.log,Sn=Math.LN2;function uT(n){return n>>>=0,n===0?32:31-(pr(n)/Sn|0)|0}var sl=256,ol=262144,cl=4194304;function Xr(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function fl(n,r,a){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var x=l&134217727;return x!==0?(l=x&~m,l!==0?f=Xr(l):(E&=x,E!==0?f=Xr(E):a||(a=x&~n,a!==0&&(f=Xr(a))))):(x=l&~m,x!==0?f=Xr(x):E!==0?f=Xr(E):a||(a=l&~n,a!==0&&(f=Xr(a)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,a=r&-r,m>=a||m===32&&(a&4194048)!==0)?r:f}function La(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function lT(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hd(){var n=cl;return cl<<=1,(cl&62914560)===0&&(cl=4194304),n}function mo(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Da(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function sT(n,r,a,l,f,m){var E=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var x=n.entanglements,I=n.expirationTimes,q=n.hiddenUpdates;for(a=E&~a;0<a;){var K=31-Ze(a),$=1<<K;x[K]=0,I[K]=-1;var V=q[K];if(V!==null)for(q[K]=null,K=0;K<V.length;K++){var Q=V[K];Q!==null&&(Q.lane&=-536870913)}a&=~$}l!==0&&dd(n,l,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(E&~r))}function dd(n,r,a){n.pendingLanes|=r,n.suspendedLanes&=~r;var l=31-Ze(r);n.entangledLanes|=r,n.entanglements[l]=n.entanglements[l]|1073741824|a&261930}function md(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var l=31-Ze(a),f=1<<l;f&r|n[l]&r&&(n[l]|=r),a&=~f}}function pd(n,r){var a=r&-r;return a=(a&42)!==0?1:po(a),(a&(n.suspendedLanes|r))!==0?0:a}function po(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function go(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function gd(){var n=ie.p;return n!==0?n:(n=window.event,n===void 0?32:tg(n.type))}function bd(n,r){var a=ie.p;try{return ie.p=n,r()}finally{ie.p=a}}var gr=Math.random().toString(36).slice(2),St="__reactFiber$"+gr,jt="__reactProps$"+gr,_i="__reactContainer$"+gr,bo="__reactEvents$"+gr,oT="__reactListeners$"+gr,cT="__reactHandles$"+gr,yd="__reactResources$"+gr,Ia="__reactMarker$"+gr;function yo(n){delete n[St],delete n[jt],delete n[bo],delete n[oT],delete n[cT]}function Ci(n){var r=n[St];if(r)return r;for(var a=n.parentNode;a;){if(r=a[_i]||a[St]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=H0(n);n!==null;){if(a=n[St])return a;n=H0(n)}return r}n=a,a=n.parentNode}return null}function Ni(n){if(n=n[St]||n[_i]){var r=n.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return n}return null}function Ma(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(u(33))}function Oi(n){var r=n[yd];return r||(r=n[yd]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function vt(n){n[Ia]=!0}var Ed=new Set,Td={};function Kr(n,r){Ri(n,r),Ri(n+"Capture",r)}function Ri(n,r){for(Td[n]=r,n=0;n<r.length;n++)Ed.add(r[n])}var fT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vd={},Ad={};function hT(n){return wi.call(Ad,n)?!0:wi.call(vd,n)?!1:fT.test(n)?Ad[n]=!0:(vd[n]=!0,!1)}function hl(n,r,a){if(hT(r))if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+a)}}function dl(n,r,a){if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+a)}}function Vn(n,r,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(r,a,""+l)}}function dn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function xd(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function dT(n,r,a){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r);if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){a=""+E,m.call(this,E)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(E){a=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Eo(n){if(!n._valueTracker){var r=xd(n)?"checked":"value";n._valueTracker=dT(n,r,""+n[r])}}function wd(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return n&&(l=xd(n)?n.checked?"true":"false":n.value),n=l,n!==a?(r.setValue(n),!0):!1}function ml(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var mT=/[\n"\\]/g;function mn(n){return n.replace(mT,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function To(n,r,a,l,f,m,E,x){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),r!=null?E==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+dn(r)):n.value!==""+dn(r)&&(n.value=""+dn(r)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),r!=null?vo(n,E,dn(r)):a!=null?vo(n,E,dn(a)):l!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?n.name=""+dn(x):n.removeAttribute("name")}function Sd(n,r,a,l,f,m,E,x){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),r!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||r!=null)){Eo(n);return}a=a!=null?""+dn(a):"",r=r!=null?""+dn(r):a,x||r===n.value||(n.value=r),n.defaultValue=r}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=x?n.checked:!!l,n.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E),Eo(n)}function vo(n,r,a){r==="number"&&ml(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function ki(n,r,a,l){if(n=n.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=r.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+dn(a),r=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function _d(n,r,a){if(r!=null&&(r=""+dn(r),r!==n.value&&(n.value=r),a==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=a!=null?""+dn(a):""}function Cd(n,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(u(92));if(le(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=dn(r),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l),Eo(n)}function Li(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var pT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nd(n,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":l?n.setProperty(r,a):typeof a!="number"||a===0||pT.has(r)?r==="float"?n.cssFloat=a:n[r]=(""+a).trim():n[r]=a+"px"}function Od(n,r,a){if(r!=null&&typeof r!="object")throw Error(u(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in r)l=r[f],r.hasOwnProperty(f)&&a[f]!==l&&Nd(n,f,l)}else for(var m in r)r.hasOwnProperty(m)&&Nd(n,m,r[m])}function Ao(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(n){return bT.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Gn(){}var xo=null;function wo(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Di=null,Ii=null;function Rd(n){var r=Ni(n);if(r&&(n=r.stateNode)){var a=n[jt]||null;e:switch(n=r.stateNode,r.type){case"input":if(To(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==n&&l.form===n.form){var f=l[jt]||null;if(!f)throw Error(u(90));To(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===n.form&&wd(l)}break e;case"textarea":_d(n,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&ki(n,!!a.multiple,r,!1)}}}var So=!1;function kd(n,r,a){if(So)return n(r,a);So=!0;try{var l=n(r);return l}finally{if(So=!1,(Di!==null||Ii!==null)&&(ns(),Di&&(r=Di,n=Ii,Ii=Di=null,Rd(r),n)))for(r=0;r<n.length;r++)Rd(n[r])}}function Ba(n,r){var a=n.stateNode;if(a===null)return null;var l=a[jt]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(u(231,r,typeof a));return a}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_o=!1;if(Qn)try{var Fa={};Object.defineProperty(Fa,"passive",{get:function(){_o=!0}}),window.addEventListener("test",Fa,Fa),window.removeEventListener("test",Fa,Fa)}catch{_o=!1}var br=null,Co=null,gl=null;function Ld(){if(gl)return gl;var n,r=Co,a=r.length,l,f="value"in br?br.value:br.textContent,m=f.length;for(n=0;n<a&&r[n]===f[n];n++);var E=a-n;for(l=1;l<=E&&r[a-l]===f[m-l];l++);return gl=f.slice(n,1<l?1-l:void 0)}function bl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function yl(){return!0}function Dd(){return!1}function qt(n){function r(a,l,f,m,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var x in n)n.hasOwnProperty(x)&&(a=n[x],this[x]=a?a(m):m[x]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?yl:Dd,this.isPropagationStopped=Dd,this}return b(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),r}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=qt(Wr),Ua=b({},Wr,{view:0,detail:0}),yT=qt(Ua),No,Oo,Ha,Tl=b({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ko,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ha&&(Ha&&n.type==="mousemove"?(No=n.screenX-Ha.screenX,Oo=n.screenY-Ha.screenY):Oo=No=0,Ha=n),No)},movementY:function(n){return"movementY"in n?n.movementY:Oo}}),Id=qt(Tl),ET=b({},Tl,{dataTransfer:0}),TT=qt(ET),vT=b({},Ua,{relatedTarget:0}),Ro=qt(vT),AT=b({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),xT=qt(AT),wT=b({},Wr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ST=qt(wT),_T=b({},Wr,{data:0}),Md=qt(_T),CT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},OT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RT(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=OT[n])?!!r[n]:!1}function ko(){return RT}var kT=b({},Ua,{key:function(n){if(n.key){var r=CT[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=bl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?NT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ko,charCode:function(n){return n.type==="keypress"?bl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),LT=qt(kT),DT=b({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=qt(DT),IT=b({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ko}),MT=qt(IT),BT=b({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),FT=qt(BT),UT=b({},Tl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),HT=qt(UT),PT=b({},Wr,{newState:0,oldState:0}),zT=qt(PT),jT=[9,13,27,32],Lo=Qn&&"CompositionEvent"in window,Pa=null;Qn&&"documentMode"in document&&(Pa=document.documentMode);var qT=Qn&&"TextEvent"in window&&!Pa,Fd=Qn&&(!Lo||Pa&&8<Pa&&11>=Pa),Ud=" ",Hd=!1;function Pd(n,r){switch(n){case"keyup":return jT.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Mi=!1;function YT(n,r){switch(n){case"compositionend":return zd(r);case"keypress":return r.which!==32?null:(Hd=!0,Ud);case"textInput":return n=r.data,n===Ud&&Hd?null:n;default:return null}}function VT(n,r){if(Mi)return n==="compositionend"||!Lo&&Pd(n,r)?(n=Ld(),gl=Co=br=null,Mi=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Fd&&r.locale!=="ko"?null:r.data;default:return null}}var GT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!GT[n.type]:r==="textarea"}function qd(n,r,a,l){Di?Ii?Ii.push(l):Ii=[l]:Di=l,r=os(r,"onChange"),0<r.length&&(a=new El("onChange","change",null,a,l),n.push({event:a,listeners:r}))}var za=null,ja=null;function QT(n){S0(n,0)}function vl(n){var r=Ma(n);if(wd(r))return n}function Yd(n,r){if(n==="change")return r}var Vd=!1;if(Qn){var Do;if(Qn){var Io="oninput"in document;if(!Io){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),Io=typeof Gd.oninput=="function"}Do=Io}else Do=!1;Vd=Do&&(!document.documentMode||9<document.documentMode)}function Qd(){za&&(za.detachEvent("onpropertychange",Xd),ja=za=null)}function Xd(n){if(n.propertyName==="value"&&vl(ja)){var r=[];qd(r,ja,n,wo(n)),kd(QT,r)}}function XT(n,r,a){n==="focusin"?(Qd(),za=r,ja=a,za.attachEvent("onpropertychange",Xd)):n==="focusout"&&Qd()}function KT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vl(ja)}function WT(n,r){if(n==="click")return vl(r)}function ZT(n,r){if(n==="input"||n==="change")return vl(r)}function JT(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var en=typeof Object.is=="function"?Object.is:JT;function qa(n,r){if(en(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!wi.call(r,f)||!en(n[f],r[f]))return!1}return!0}function Kd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wd(n,r){var a=Kd(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=r&&l>=r)return{node:a,offset:r-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Kd(a)}}function Zd(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Zd(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Jd(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=ml(n.document);r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=ml(n.document)}return r}function Mo(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var $T=Qn&&"documentMode"in document&&11>=document.documentMode,Bi=null,Bo=null,Ya=null,Fo=!1;function $d(n,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fo||Bi==null||Bi!==ml(l)||(l=Bi,"selectionStart"in l&&Mo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ya&&qa(Ya,l)||(Ya=l,l=os(Bo,"onSelect"),0<l.length&&(r=new El("onSelect","select",null,r,a),n.push({event:r,listeners:l}),r.target=Bi)))}function Zr(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Fi={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionrun:Zr("Transition","TransitionRun"),transitionstart:Zr("Transition","TransitionStart"),transitioncancel:Zr("Transition","TransitionCancel"),transitionend:Zr("Transition","TransitionEnd")},Uo={},em={};Qn&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete Fi.animationend.animation,delete Fi.animationiteration.animation,delete Fi.animationstart.animation),"TransitionEvent"in window||delete Fi.transitionend.transition);function Jr(n){if(Uo[n])return Uo[n];if(!Fi[n])return n;var r=Fi[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in em)return Uo[n]=r[a];return n}var tm=Jr("animationend"),nm=Jr("animationiteration"),rm=Jr("animationstart"),ev=Jr("transitionrun"),tv=Jr("transitionstart"),nv=Jr("transitioncancel"),im=Jr("transitionend"),am=new Map,Ho="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ho.push("scrollEnd");function _n(n,r){am.set(n,r),Kr(r,[n])}var Al=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},pn=[],Ui=0,Po=0;function xl(){for(var n=Ui,r=Po=Ui=0;r<n;){var a=pn[r];pn[r++]=null;var l=pn[r];pn[r++]=null;var f=pn[r];pn[r++]=null;var m=pn[r];if(pn[r++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}m!==0&&um(a,f,m)}}function wl(n,r,a,l){pn[Ui++]=n,pn[Ui++]=r,pn[Ui++]=a,pn[Ui++]=l,Po|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function zo(n,r,a,l){return wl(n,r,a,l),Sl(n)}function $r(n,r){return wl(n,null,null,r),Sl(n)}function um(n,r,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var f=!1,m=n.return;m!==null;)m.childLanes|=a,l=m.alternate,l!==null&&(l.childLanes|=a),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&r!==null&&(f=31-Ze(a),n=m.hiddenUpdates,l=n[f],l===null?n[f]=[r]:l.push(r),r.lane=a|536870912),m):null}function Sl(n){if(50<hu)throw hu=0,Wc=null,Error(u(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var Hi={};function rv(n,r,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(n,r,a,l){return new rv(n,r,a,l)}function jo(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Xn(n,r){var a=n.alternate;return a===null?(a=tn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function lm(n,r){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,r=a.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function _l(n,r,a,l,f,m){var E=0;if(l=n,typeof n=="function")jo(n)&&(E=1);else if(typeof n=="string")E=s2(n,a,he.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case de:return n=tn(31,a,r,f),n.elementType=de,n.lanes=m,n;case C:return ei(a.children,f,m,r);case R:E=8,f|=24;break;case N:return n=tn(12,a,r,f|2),n.elementType=N,n.lanes=m,n;case ne:return n=tn(13,a,r,f),n.elementType=ne,n.lanes=m,n;case G:return n=tn(19,a,r,f),n.elementType=G,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case F:E=10;break e;case D:E=9;break e;case ee:E=11;break e;case se:E=14;break e;case ye:E=16,l=null;break e}E=29,a=Error(u(130,n===null?"null":typeof n,"")),l=null}return r=tn(E,a,r,f),r.elementType=n,r.type=l,r.lanes=m,r}function ei(n,r,a,l){return n=tn(7,n,l,r),n.lanes=a,n}function qo(n,r,a){return n=tn(6,n,null,r),n.lanes=a,n}function sm(n){var r=tn(18,null,null,0);return r.stateNode=n,r}function Yo(n,r,a){return r=tn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var om=new WeakMap;function gn(n,r){if(typeof n=="object"&&n!==null){var a=om.get(n);return a!==void 0?a:(r={value:n,source:r,stack:ll(r)},om.set(n,r),r)}return{value:n,source:r,stack:ll(r)}}var Pi=[],zi=0,Cl=null,Va=0,bn=[],yn=0,yr=null,Dn=1,In="";function Kn(n,r){Pi[zi++]=Va,Pi[zi++]=Cl,Cl=n,Va=r}function cm(n,r,a){bn[yn++]=Dn,bn[yn++]=In,bn[yn++]=yr,yr=n;var l=Dn;n=In;var f=32-Ze(l)-1;l&=~(1<<f),a+=1;var m=32-Ze(r)+f;if(30<m){var E=f-f%5;m=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Dn=1<<32-Ze(r)+f|a<<f|l,In=m+n}else Dn=1<<m|a<<f|l,In=n}function Vo(n){n.return!==null&&(Kn(n,1),cm(n,1,0))}function Go(n){for(;n===Cl;)Cl=Pi[--zi],Pi[zi]=null,Va=Pi[--zi],Pi[zi]=null;for(;n===yr;)yr=bn[--yn],bn[yn]=null,In=bn[--yn],bn[yn]=null,Dn=bn[--yn],bn[yn]=null}function fm(n,r){bn[yn++]=Dn,bn[yn++]=In,bn[yn++]=yr,Dn=r.id,In=r.overflow,yr=n}var _t=null,tt=null,He=!1,Er=null,En=!1,Qo=Error(u(519));function Tr(n){var r=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ga(gn(r,n)),Qo}function hm(n){var r=n.stateNode,a=n.type,l=n.memoizedProps;switch(r[St]=n,r[jt]=l,a){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(a=0;a<mu.length;a++)Ie(mu[a],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Ie("invalid",r),Sd(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ie("invalid",r);break;case"textarea":Ie("invalid",r),Cd(r,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||O0(r.textContent,a)?(l.popover!=null&&(Ie("beforetoggle",r),Ie("toggle",r)),l.onScroll!=null&&Ie("scroll",r),l.onScrollEnd!=null&&Ie("scrollend",r),l.onClick!=null&&(r.onclick=Gn),r=!0):r=!1,r||Tr(n,!0)}function dm(n){for(_t=n.return;_t;)switch(_t.tag){case 5:case 31:case 13:En=!1;return;case 27:case 3:En=!0;return;default:_t=_t.return}}function ji(n){if(n!==_t)return!1;if(!He)return dm(n),He=!0,!1;var r=n.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||hf(n.type,n.memoizedProps)),a=!a),a&&tt&&Tr(n),dm(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));tt=U0(n)}else if(r===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));tt=U0(n)}else r===27?(r=tt,Ir(n.type)?(n=bf,bf=null,tt=n):tt=r):tt=_t?vn(n.stateNode.nextSibling):null;return!0}function ti(){tt=_t=null,He=!1}function Xo(){var n=Er;return n!==null&&(Qt===null?Qt=n:Qt.push.apply(Qt,n),Er=null),n}function Ga(n){Er===null?Er=[n]:Er.push(n)}var Ko=M(null),ni=null,Wn=null;function vr(n,r,a){S(Ko,r._currentValue),r._currentValue=a}function Zn(n){n._currentValue=Ko.current,W(Ko)}function Wo(n,r,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),n===a)break;n=n.return}}function Zo(n,r,a,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var x=m;m=f;for(var I=0;I<r.length;I++)if(x.context===r[I]){m.lanes|=a,x=m.alternate,x!==null&&(x.lanes|=a),Wo(m.return,a,n),l||(E=null);break e}m=x.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(u(341));E.lanes|=a,m=E.alternate,m!==null&&(m.lanes|=a),Wo(E,a,n),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===n){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function qi(n,r,a,l){n=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(u(387));if(E=E.memoizedProps,E!==null){var x=f.type;en(f.pendingProps.value,E.value)||(n!==null?n.push(x):n=[x])}}else if(f===Be.current){if(E=f.alternate,E===null)throw Error(u(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Eu):n=[Eu])}f=f.return}n!==null&&Zo(r,n,a,l),r.flags|=262144}function Nl(n){for(n=n.firstContext;n!==null;){if(!en(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ri(n){ni=n,Wn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Ct(n){return mm(ni,n)}function Ol(n,r){return ni===null&&ri(n),mm(n,r)}function mm(n,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},Wn===null){if(n===null)throw Error(u(308));Wn=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Wn=Wn.next=r;return a}var iv=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){r.aborted=!0,n.forEach(function(a){return a()})}},av=e.unstable_scheduleCallback,uv=e.unstable_NormalPriority,ht={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jo(){return{controller:new iv,data:new Map,refCount:0}}function Qa(n){n.refCount--,n.refCount===0&&av(uv,function(){n.controller.abort()})}var Xa=null,$o=0,Yi=0,Vi=null;function lv(n,r){if(Xa===null){var a=Xa=[];$o=0,Yi=nf(),Vi={status:"pending",value:void 0,then:function(l){a.push(l)}}}return $o++,r.then(pm,pm),r}function pm(){if(--$o===0&&Xa!==null){Vi!==null&&(Vi.status="fulfilled");var n=Xa;Xa=null,Yi=0,Vi=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function sv(n,r){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){l.status="fulfilled",l.value=r;for(var f=0;f<a.length;f++)(0,a[f])(r)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var gm=z.S;z.S=function(n,r){$p=Bt(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&lv(n,r),gm!==null&&gm(n,r)};var ii=M(null);function ec(){var n=ii.current;return n!==null?n:Je.pooledCache}function Rl(n,r){r===null?S(ii,ii.current):S(ii,r.pool)}function bm(){var n=ec();return n===null?null:{parent:ht._currentValue,pool:n}}var Gi=Error(u(460)),tc=Error(u(474)),kl=Error(u(542)),Ll={then:function(){}};function ym(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Em(n,r,a){switch(a=n[a],a===void 0?n.push(r):a!==r&&(r.then(Gn,Gn),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,vm(n),n;default:if(typeof r.status=="string")r.then(Gn,Gn);else{if(n=Je,n!==null&&100<n.shellSuspendCounter)throw Error(u(482));n=r,n.status="pending",n.then(function(l){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=l}},function(l){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,vm(n),n}throw ui=r,Gi}}function ai(n){try{var r=n._init;return r(n._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ui=a,Gi):a}}var ui=null;function Tm(){if(ui===null)throw Error(u(459));var n=ui;return ui=null,n}function vm(n){if(n===Gi||n===kl)throw Error(u(483))}var Qi=null,Ka=0;function Dl(n){var r=Ka;return Ka+=1,Qi===null&&(Qi=[]),Em(Qi,n,r)}function Wa(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Il(n,r){throw r.$$typeof===v?Error(u(525)):(n=Object.prototype.toString.call(r),Error(u(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function Am(n){function r(U,B){if(n){var j=U.deletions;j===null?(U.deletions=[B],U.flags|=16):j.push(B)}}function a(U,B){if(!n)return null;for(;B!==null;)r(U,B),B=B.sibling;return null}function l(U){for(var B=new Map;U!==null;)U.key!==null?B.set(U.key,U):B.set(U.index,U),U=U.sibling;return B}function f(U,B){return U=Xn(U,B),U.index=0,U.sibling=null,U}function m(U,B,j){return U.index=j,n?(j=U.alternate,j!==null?(j=j.index,j<B?(U.flags|=67108866,B):j):(U.flags|=67108866,B)):(U.flags|=1048576,B)}function E(U){return n&&U.alternate===null&&(U.flags|=67108866),U}function x(U,B,j,J){return B===null||B.tag!==6?(B=qo(j,U.mode,J),B.return=U,B):(B=f(B,j),B.return=U,B)}function I(U,B,j,J){var ve=j.type;return ve===C?K(U,B,j.props.children,J,j.key):B!==null&&(B.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===ye&&ai(ve)===B.type)?(B=f(B,j.props),Wa(B,j),B.return=U,B):(B=_l(j.type,j.key,j.props,null,U.mode,J),Wa(B,j),B.return=U,B)}function q(U,B,j,J){return B===null||B.tag!==4||B.stateNode.containerInfo!==j.containerInfo||B.stateNode.implementation!==j.implementation?(B=Yo(j,U.mode,J),B.return=U,B):(B=f(B,j.children||[]),B.return=U,B)}function K(U,B,j,J,ve){return B===null||B.tag!==7?(B=ei(j,U.mode,J,ve),B.return=U,B):(B=f(B,j),B.return=U,B)}function $(U,B,j){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=qo(""+B,U.mode,j),B.return=U,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case T:return j=_l(B.type,B.key,B.props,null,U.mode,j),Wa(j,B),j.return=U,j;case A:return B=Yo(B,U.mode,j),B.return=U,B;case ye:return B=ai(B),$(U,B,j)}if(le(B)||fe(B))return B=ei(B,U.mode,j,null),B.return=U,B;if(typeof B.then=="function")return $(U,Dl(B),j);if(B.$$typeof===F)return $(U,Ol(U,B),j);Il(U,B)}return null}function V(U,B,j,J){var ve=B!==null?B.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return ve!==null?null:x(U,B,""+j,J);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case T:return j.key===ve?I(U,B,j,J):null;case A:return j.key===ve?q(U,B,j,J):null;case ye:return j=ai(j),V(U,B,j,J)}if(le(j)||fe(j))return ve!==null?null:K(U,B,j,J,null);if(typeof j.then=="function")return V(U,B,Dl(j),J);if(j.$$typeof===F)return V(U,B,Ol(U,j),J);Il(U,j)}return null}function Q(U,B,j,J,ve){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return U=U.get(j)||null,x(B,U,""+J,ve);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case T:return U=U.get(J.key===null?j:J.key)||null,I(B,U,J,ve);case A:return U=U.get(J.key===null?j:J.key)||null,q(B,U,J,ve);case ye:return J=ai(J),Q(U,B,j,J,ve)}if(le(J)||fe(J))return U=U.get(j)||null,K(B,U,J,ve,null);if(typeof J.then=="function")return Q(U,B,j,Dl(J),ve);if(J.$$typeof===F)return Q(U,B,j,Ol(B,J),ve);Il(B,J)}return null}function pe(U,B,j,J){for(var ve=null,ze=null,ge=B,Ne=B=0,Ue=null;ge!==null&&Ne<j.length;Ne++){ge.index>Ne?(Ue=ge,ge=null):Ue=ge.sibling;var je=V(U,ge,j[Ne],J);if(je===null){ge===null&&(ge=Ue);break}n&&ge&&je.alternate===null&&r(U,ge),B=m(je,B,Ne),ze===null?ve=je:ze.sibling=je,ze=je,ge=Ue}if(Ne===j.length)return a(U,ge),He&&Kn(U,Ne),ve;if(ge===null){for(;Ne<j.length;Ne++)ge=$(U,j[Ne],J),ge!==null&&(B=m(ge,B,Ne),ze===null?ve=ge:ze.sibling=ge,ze=ge);return He&&Kn(U,Ne),ve}for(ge=l(ge);Ne<j.length;Ne++)Ue=Q(ge,U,Ne,j[Ne],J),Ue!==null&&(n&&Ue.alternate!==null&&ge.delete(Ue.key===null?Ne:Ue.key),B=m(Ue,B,Ne),ze===null?ve=Ue:ze.sibling=Ue,ze=Ue);return n&&ge.forEach(function(Hr){return r(U,Hr)}),He&&Kn(U,Ne),ve}function xe(U,B,j,J){if(j==null)throw Error(u(151));for(var ve=null,ze=null,ge=B,Ne=B=0,Ue=null,je=j.next();ge!==null&&!je.done;Ne++,je=j.next()){ge.index>Ne?(Ue=ge,ge=null):Ue=ge.sibling;var Hr=V(U,ge,je.value,J);if(Hr===null){ge===null&&(ge=Ue);break}n&&ge&&Hr.alternate===null&&r(U,ge),B=m(Hr,B,Ne),ze===null?ve=Hr:ze.sibling=Hr,ze=Hr,ge=Ue}if(je.done)return a(U,ge),He&&Kn(U,Ne),ve;if(ge===null){for(;!je.done;Ne++,je=j.next())je=$(U,je.value,J),je!==null&&(B=m(je,B,Ne),ze===null?ve=je:ze.sibling=je,ze=je);return He&&Kn(U,Ne),ve}for(ge=l(ge);!je.done;Ne++,je=j.next())je=Q(ge,U,Ne,je.value,J),je!==null&&(n&&je.alternate!==null&&ge.delete(je.key===null?Ne:je.key),B=m(je,B,Ne),ze===null?ve=je:ze.sibling=je,ze=je);return n&&ge.forEach(function(E2){return r(U,E2)}),He&&Kn(U,Ne),ve}function We(U,B,j,J){if(typeof j=="object"&&j!==null&&j.type===C&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case T:e:{for(var ve=j.key;B!==null;){if(B.key===ve){if(ve=j.type,ve===C){if(B.tag===7){a(U,B.sibling),J=f(B,j.props.children),J.return=U,U=J;break e}}else if(B.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===ye&&ai(ve)===B.type){a(U,B.sibling),J=f(B,j.props),Wa(J,j),J.return=U,U=J;break e}a(U,B);break}else r(U,B);B=B.sibling}j.type===C?(J=ei(j.props.children,U.mode,J,j.key),J.return=U,U=J):(J=_l(j.type,j.key,j.props,null,U.mode,J),Wa(J,j),J.return=U,U=J)}return E(U);case A:e:{for(ve=j.key;B!==null;){if(B.key===ve)if(B.tag===4&&B.stateNode.containerInfo===j.containerInfo&&B.stateNode.implementation===j.implementation){a(U,B.sibling),J=f(B,j.children||[]),J.return=U,U=J;break e}else{a(U,B);break}else r(U,B);B=B.sibling}J=Yo(j,U.mode,J),J.return=U,U=J}return E(U);case ye:return j=ai(j),We(U,B,j,J)}if(le(j))return pe(U,B,j,J);if(fe(j)){if(ve=fe(j),typeof ve!="function")throw Error(u(150));return j=ve.call(j),xe(U,B,j,J)}if(typeof j.then=="function")return We(U,B,Dl(j),J);if(j.$$typeof===F)return We(U,B,Ol(U,j),J);Il(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,B!==null&&B.tag===6?(a(U,B.sibling),J=f(B,j),J.return=U,U=J):(a(U,B),J=qo(j,U.mode,J),J.return=U,U=J),E(U)):a(U,B)}return function(U,B,j,J){try{Ka=0;var ve=We(U,B,j,J);return Qi=null,ve}catch(ge){if(ge===Gi||ge===kl)throw ge;var ze=tn(29,ge,null,U.mode);return ze.lanes=J,ze.return=U,ze}}}var li=Am(!0),xm=Am(!1),Ar=!1;function nc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rc(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function xr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function wr(n,r,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(qe&2)!==0){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,r=Sl(n),um(n,null,a),r}return wl(n,l,r,a),Sl(n)}function Za(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,md(n,a)}}function ic(n,r){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?f=m=r:m=m.next=r}else f=m=r;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}var ac=!1;function Ja(){if(ac){var n=Vi;if(n!==null)throw n}}function $a(n,r,a,l){ac=!1;var f=n.updateQueue;Ar=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,x=f.shared.pending;if(x!==null){f.shared.pending=null;var I=x,q=I.next;I.next=null,E===null?m=q:E.next=q,E=I;var K=n.alternate;K!==null&&(K=K.updateQueue,x=K.lastBaseUpdate,x!==E&&(x===null?K.firstBaseUpdate=q:x.next=q,K.lastBaseUpdate=I))}if(m!==null){var $=f.baseState;E=0,K=q=I=null,x=m;do{var V=x.lane&-536870913,Q=V!==x.lane;if(Q?(Fe&V)===V:(l&V)===V){V!==0&&V===Yi&&(ac=!0),K!==null&&(K=K.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var pe=n,xe=x;V=r;var We=a;switch(xe.tag){case 1:if(pe=xe.payload,typeof pe=="function"){$=pe.call(We,$,V);break e}$=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=xe.payload,V=typeof pe=="function"?pe.call(We,$,V):pe,V==null)break e;$=b({},$,V);break e;case 2:Ar=!0}}V=x.callback,V!==null&&(n.flags|=64,Q&&(n.flags|=8192),Q=f.callbacks,Q===null?f.callbacks=[V]:Q.push(V))}else Q={lane:V,tag:x.tag,payload:x.payload,callback:x.callback,next:null},K===null?(q=K=Q,I=$):K=K.next=Q,E|=V;if(x=x.next,x===null){if(x=f.shared.pending,x===null)break;Q=x,x=Q.next,Q.next=null,f.lastBaseUpdate=Q,f.shared.pending=null}}while(!0);K===null&&(I=$),f.baseState=I,f.firstBaseUpdate=q,f.lastBaseUpdate=K,m===null&&(f.shared.lanes=0),Or|=E,n.lanes=E,n.memoizedState=$}}function wm(n,r){if(typeof n!="function")throw Error(u(191,n));n.call(r)}function Sm(n,r){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)wm(a[n],r)}var Xi=M(null),Ml=M(0);function _m(n,r){n=ur,S(Ml,n),S(Xi,r),ur=n|r.baseLanes}function uc(){S(Ml,ur),S(Xi,Xi.current)}function lc(){ur=Ml.current,W(Xi),W(Ml)}var nn=M(null),Tn=null;function Sr(n){var r=n.alternate;S(ot,ot.current&1),S(nn,n),Tn===null&&(r===null||Xi.current!==null||r.memoizedState!==null)&&(Tn=n)}function sc(n){S(ot,ot.current),S(nn,n),Tn===null&&(Tn=n)}function Cm(n){n.tag===22?(S(ot,ot.current),S(nn,n),Tn===null&&(Tn=n)):_r()}function _r(){S(ot,ot.current),S(nn,nn.current)}function rn(n){W(nn),Tn===n&&(Tn=null),W(ot)}var ot=M(0);function Bl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||pf(a)||gf(a)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Jn=0,Ce=null,Xe=null,dt=null,Fl=!1,Ki=!1,si=!1,Ul=0,eu=0,Wi=null,ov=0;function lt(){throw Error(u(321))}function oc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!en(n[a],r[a]))return!1;return!0}function cc(n,r,a,l,f,m){return Jn=m,Ce=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,z.H=n===null||n.memoizedState===null?cp:Sc,si=!1,m=a(l,f),si=!1,Ki&&(m=Om(r,a,l,f)),Nm(n),m}function Nm(n){z.H=ru;var r=Xe!==null&&Xe.next!==null;if(Jn=0,dt=Xe=Ce=null,Fl=!1,eu=0,Wi=null,r)throw Error(u(300));n===null||mt||(n=n.dependencies,n!==null&&Nl(n)&&(mt=!0))}function Om(n,r,a,l){Ce=n;var f=0;do{if(Ki&&(Wi=null),eu=0,Ki=!1,25<=f)throw Error(u(301));if(f+=1,dt=Xe=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=fp,m=r(a,l)}while(Ki);return m}function cv(){var n=z.H,r=n.useState()[0];return r=typeof r.then=="function"?tu(r):r,n=n.useState()[0],(Xe!==null?Xe.memoizedState:null)!==n&&(Ce.flags|=1024),r}function fc(){var n=Ul!==0;return Ul=0,n}function hc(n,r,a){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~a}function dc(n){if(Fl){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Fl=!1}Jn=0,dt=Xe=Ce=null,Ki=!1,eu=Ul=0,Wi=null}function Ut(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Ce.memoizedState=dt=n:dt=dt.next=n,dt}function ct(){if(Xe===null){var n=Ce.alternate;n=n!==null?n.memoizedState:null}else n=Xe.next;var r=dt===null?Ce.memoizedState:dt.next;if(r!==null)dt=r,Xe=n;else{if(n===null)throw Ce.alternate===null?Error(u(467)):Error(u(310));Xe=n,n={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},dt===null?Ce.memoizedState=dt=n:dt=dt.next=n}return dt}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tu(n){var r=eu;return eu+=1,Wi===null&&(Wi=[]),n=Em(Wi,n,r),r=Ce,(dt===null?r.memoizedState:dt.next)===null&&(r=r.alternate,z.H=r===null||r.memoizedState===null?cp:Sc),n}function Pl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return tu(n);if(n.$$typeof===F)return Ct(n)}throw Error(u(438,String(n)))}function mc(n){var r=null,a=Ce.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=Ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=Hl(),Ce.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(n),l=0;l<n;l++)a[l]=Y;return r.index++,a}function $n(n,r){return typeof r=="function"?r(n):r}function zl(n){var r=ct();return pc(r,Xe,n)}function pc(n,r,a){var l=n.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var f=n.baseQueue,m=l.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,l.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{r=f.next;var x=E=null,I=null,q=r,K=!1;do{var $=q.lane&-536870913;if($!==q.lane?(Fe&$)===$:(Jn&$)===$){var V=q.revertLane;if(V===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),$===Yi&&(K=!0);else if((Jn&V)===V){q=q.next,V===Yi&&(K=!0);continue}else $={lane:0,revertLane:q.revertLane,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(x=I=$,E=m):I=I.next=$,Ce.lanes|=V,Or|=V;$=q.action,si&&a(m,$),m=q.hasEagerState?q.eagerState:a(m,$)}else V={lane:$,revertLane:q.revertLane,gesture:q.gesture,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(x=I=V,E=m):I=I.next=V,Ce.lanes|=$,Or|=$;q=q.next}while(q!==null&&q!==r);if(I===null?E=m:I.next=x,!en(m,n.memoizedState)&&(mt=!0,K&&(a=Vi,a!==null)))throw a;n.memoizedState=m,n.baseState=E,n.baseQueue=I,l.lastRenderedState=m}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function gc(n){var r=ct(),a=r.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,m=r.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do m=n(m,E.action),E=E.next;while(E!==f);en(m,r.memoizedState)||(mt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),a.lastRenderedState=m}return[m,l]}function Rm(n,r,a){var l=Ce,f=ct(),m=He;if(m){if(a===void 0)throw Error(u(407));a=a()}else a=r();var E=!en((Xe||f).memoizedState,a);if(E&&(f.memoizedState=a,mt=!0),f=f.queue,Ec(Dm.bind(null,l,f,n),[n]),f.getSnapshot!==r||E||dt!==null&&dt.memoizedState.tag&1){if(l.flags|=2048,Zi(9,{destroy:void 0},Lm.bind(null,l,f,a,r),null),Je===null)throw Error(u(349));m||(Jn&127)!==0||km(l,r,a)}return a}function km(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ce.updateQueue,r===null?(r=Hl(),Ce.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Lm(n,r,a,l){r.value=a,r.getSnapshot=l,Im(r)&&Mm(n)}function Dm(n,r,a){return a(function(){Im(r)&&Mm(n)})}function Im(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!en(n,a)}catch{return!0}}function Mm(n){var r=$r(n,2);r!==null&&Xt(r,n,2)}function bc(n){var r=Ut();if(typeof n=="function"){var a=n;if(n=a(),si){zt(!0);try{a()}finally{zt(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:n},r}function Bm(n,r,a,l){return n.baseState=a,pc(n,Xe,typeof l=="function"?l:$n)}function fv(n,r,a,l,f){if(Yl(n))throw Error(u(485));if(n=r.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};z.T!==null?a(!0):m.isTransition=!1,l(m),a=r.pending,a===null?(m.next=r.pending=m,Fm(r,m)):(m.next=a.next,r.pending=a.next=m)}}function Fm(n,r){var a=r.action,l=r.payload,f=n.state;if(r.isTransition){var m=z.T,E={};z.T=E;try{var x=a(f,l),I=z.S;I!==null&&I(E,x),Um(n,r,x)}catch(q){yc(n,r,q)}finally{m!==null&&E.types!==null&&(m.types=E.types),z.T=m}}else try{m=a(f,l),Um(n,r,m)}catch(q){yc(n,r,q)}}function Um(n,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Hm(n,r,l)},function(l){return yc(n,r,l)}):Hm(n,r,a)}function Hm(n,r,a){r.status="fulfilled",r.value=a,Pm(r),n.state=a,r=n.pending,r!==null&&(a=r.next,a===r?n.pending=null:(a=a.next,r.next=a,Fm(n,a)))}function yc(n,r,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,Pm(r),r=r.next;while(r!==l)}n.action=null}function Pm(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function zm(n,r){return r}function jm(n,r){if(He){var a=Je.formState;if(a!==null){e:{var l=Ce;if(He){if(tt){t:{for(var f=tt,m=En;f.nodeType!==8;){if(!m){f=null;break t}if(f=vn(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){tt=vn(f.nextSibling),l=f.data==="F!";break e}}Tr(l)}l=!1}l&&(r=a[0])}}return a=Ut(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zm,lastRenderedState:r},a.queue=l,a=lp.bind(null,Ce,l),l.dispatch=a,l=bc(!1),m=wc.bind(null,Ce,!1,l.queue),l=Ut(),f={state:r,dispatch:null,action:n,pending:null},l.queue=f,a=fv.bind(null,Ce,f,m,a),f.dispatch=a,l.memoizedState=n,[r,a,!1]}function qm(n){var r=ct();return Ym(r,Xe,n)}function Ym(n,r,a){if(r=pc(n,r,zm)[0],n=zl($n)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=tu(r)}catch(E){throw E===Gi?kl:E}else l=r;r=ct();var f=r.queue,m=f.dispatch;return a!==r.memoizedState&&(Ce.flags|=2048,Zi(9,{destroy:void 0},hv.bind(null,f,a),null)),[l,m,n]}function hv(n,r){n.action=r}function Vm(n){var r=ct(),a=Xe;if(a!==null)return Ym(r,a,n);ct(),r=r.memoizedState,a=ct();var l=a.queue.dispatch;return a.memoizedState=n,[r,l,!1]}function Zi(n,r,a,l){return n={tag:n,create:a,deps:l,inst:r,next:null},r=Ce.updateQueue,r===null&&(r=Hl(),Ce.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,r.lastEffect=n),n}function Gm(){return ct().memoizedState}function jl(n,r,a,l){var f=Ut();Ce.flags|=n,f.memoizedState=Zi(1|r,{destroy:void 0},a,l===void 0?null:l)}function ql(n,r,a,l){var f=ct();l=l===void 0?null:l;var m=f.memoizedState.inst;Xe!==null&&l!==null&&oc(l,Xe.memoizedState.deps)?f.memoizedState=Zi(r,m,a,l):(Ce.flags|=n,f.memoizedState=Zi(1|r,m,a,l))}function Qm(n,r){jl(8390656,8,n,r)}function Ec(n,r){ql(2048,8,n,r)}function dv(n){Ce.flags|=4;var r=Ce.updateQueue;if(r===null)r=Hl(),Ce.updateQueue=r,r.events=[n];else{var a=r.events;a===null?r.events=[n]:a.push(n)}}function Xm(n){var r=ct().memoizedState;return dv({ref:r,nextImpl:n}),function(){if((qe&2)!==0)throw Error(u(440));return r.impl.apply(void 0,arguments)}}function Km(n,r){return ql(4,2,n,r)}function Wm(n,r){return ql(4,4,n,r)}function Zm(n,r){if(typeof r=="function"){n=n();var a=r(n);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Jm(n,r,a){a=a!=null?a.concat([n]):null,ql(4,4,Zm.bind(null,r,n),a)}function Tc(){}function $m(n,r){var a=ct();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&oc(r,l[1])?l[0]:(a.memoizedState=[n,r],n)}function ep(n,r){var a=ct();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&oc(r,l[1]))return l[0];if(l=n(),si){zt(!0);try{n()}finally{zt(!1)}}return a.memoizedState=[l,r],l}function vc(n,r,a){return a===void 0||(Jn&1073741824)!==0&&(Fe&261930)===0?n.memoizedState=r:(n.memoizedState=a,n=t0(),Ce.lanes|=n,Or|=n,a)}function tp(n,r,a,l){return en(a,r)?a:Xi.current!==null?(n=vc(n,a,l),en(n,r)||(mt=!0),n):(Jn&42)===0||(Jn&1073741824)!==0&&(Fe&261930)===0?(mt=!0,n.memoizedState=a):(n=t0(),Ce.lanes|=n,Or|=n,r)}function np(n,r,a,l,f){var m=ie.p;ie.p=m!==0&&8>m?m:8;var E=z.T,x={};z.T=x,wc(n,!1,r,a);try{var I=f(),q=z.S;if(q!==null&&q(x,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var K=sv(I,l);nu(n,r,K,ln(n))}else nu(n,r,l,ln(n))}catch($){nu(n,r,{then:function(){},status:"rejected",reason:$},ln())}finally{ie.p=m,E!==null&&x.types!==null&&(E.types=x.types),z.T=E}}function mv(){}function Ac(n,r,a,l){if(n.tag!==5)throw Error(u(476));var f=rp(n).queue;np(n,f,r,be,a===null?mv:function(){return ip(n),a(l)})}function rp(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:be,baseState:be,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:be},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:a},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function ip(n){var r=rp(n);r.next===null&&(r=n.alternate.memoizedState),nu(n,r.next.queue,{},ln())}function xc(){return Ct(Eu)}function ap(){return ct().memoizedState}function up(){return ct().memoizedState}function pv(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var a=ln();n=xr(a);var l=wr(r,n,a);l!==null&&(Xt(l,r,a),Za(l,r,a)),r={cache:Jo()},n.payload=r;return}r=r.return}}function gv(n,r,a){var l=ln();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Yl(n)?sp(r,a):(a=zo(n,r,a,l),a!==null&&(Xt(a,n,l),op(a,r,l)))}function lp(n,r,a){var l=ln();nu(n,r,a,l)}function nu(n,r,a,l){var f={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yl(n))sp(r,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,x=m(E,a);if(f.hasEagerState=!0,f.eagerState=x,en(x,E))return wl(n,r,f,0),Je===null&&xl(),!1}catch{}if(a=zo(n,r,f,l),a!==null)return Xt(a,n,l),op(a,r,l),!0}return!1}function wc(n,r,a,l){if(l={lane:2,revertLane:nf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Yl(n)){if(r)throw Error(u(479))}else r=zo(n,a,l,2),r!==null&&Xt(r,n,2)}function Yl(n){var r=n.alternate;return n===Ce||r!==null&&r===Ce}function sp(n,r){Ki=Fl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function op(n,r,a){if((a&4194048)!==0){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,md(n,a)}}var ru={readContext:Ct,use:Pl,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt};ru.useEffectEvent=lt;var cp={readContext:Ct,use:Pl,useCallback:function(n,r){return Ut().memoizedState=[n,r===void 0?null:r],n},useContext:Ct,useEffect:Qm,useImperativeHandle:function(n,r,a){a=a!=null?a.concat([n]):null,jl(4194308,4,Zm.bind(null,r,n),a)},useLayoutEffect:function(n,r){return jl(4194308,4,n,r)},useInsertionEffect:function(n,r){jl(4,2,n,r)},useMemo:function(n,r){var a=Ut();r=r===void 0?null:r;var l=n();if(si){zt(!0);try{n()}finally{zt(!1)}}return a.memoizedState=[l,r],l},useReducer:function(n,r,a){var l=Ut();if(a!==void 0){var f=a(r);if(si){zt(!0);try{a(r)}finally{zt(!1)}}}else f=r;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=gv.bind(null,Ce,n),[l.memoizedState,n]},useRef:function(n){var r=Ut();return n={current:n},r.memoizedState=n},useState:function(n){n=bc(n);var r=n.queue,a=lp.bind(null,Ce,r);return r.dispatch=a,[n.memoizedState,a]},useDebugValue:Tc,useDeferredValue:function(n,r){var a=Ut();return vc(a,n,r)},useTransition:function(){var n=bc(!1);return n=np.bind(null,Ce,n.queue,!0,!1),Ut().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,a){var l=Ce,f=Ut();if(He){if(a===void 0)throw Error(u(407));a=a()}else{if(a=r(),Je===null)throw Error(u(349));(Fe&127)!==0||km(l,r,a)}f.memoizedState=a;var m={value:a,getSnapshot:r};return f.queue=m,Qm(Dm.bind(null,l,m,n),[n]),l.flags|=2048,Zi(9,{destroy:void 0},Lm.bind(null,l,m,a,r),null),a},useId:function(){var n=Ut(),r=Je.identifierPrefix;if(He){var a=In,l=Dn;a=(l&~(1<<32-Ze(l)-1)).toString(32)+a,r="_"+r+"R_"+a,a=Ul++,0<a&&(r+="H"+a.toString(32)),r+="_"}else a=ov++,r="_"+r+"r_"+a.toString(32)+"_";return n.memoizedState=r},useHostTransitionStatus:xc,useFormState:jm,useActionState:jm,useOptimistic:function(n){var r=Ut();r.memoizedState=r.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=wc.bind(null,Ce,!0,a),a.dispatch=r,[n,r]},useMemoCache:mc,useCacheRefresh:function(){return Ut().memoizedState=pv.bind(null,Ce)},useEffectEvent:function(n){var r=Ut(),a={impl:n};return r.memoizedState=a,function(){if((qe&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Sc={readContext:Ct,use:Pl,useCallback:$m,useContext:Ct,useEffect:Ec,useImperativeHandle:Jm,useInsertionEffect:Km,useLayoutEffect:Wm,useMemo:ep,useReducer:zl,useRef:Gm,useState:function(){return zl($n)},useDebugValue:Tc,useDeferredValue:function(n,r){var a=ct();return tp(a,Xe.memoizedState,n,r)},useTransition:function(){var n=zl($n)[0],r=ct().memoizedState;return[typeof n=="boolean"?n:tu(n),r]},useSyncExternalStore:Rm,useId:ap,useHostTransitionStatus:xc,useFormState:qm,useActionState:qm,useOptimistic:function(n,r){var a=ct();return Bm(a,Xe,n,r)},useMemoCache:mc,useCacheRefresh:up};Sc.useEffectEvent=Xm;var fp={readContext:Ct,use:Pl,useCallback:$m,useContext:Ct,useEffect:Ec,useImperativeHandle:Jm,useInsertionEffect:Km,useLayoutEffect:Wm,useMemo:ep,useReducer:gc,useRef:Gm,useState:function(){return gc($n)},useDebugValue:Tc,useDeferredValue:function(n,r){var a=ct();return Xe===null?vc(a,n,r):tp(a,Xe.memoizedState,n,r)},useTransition:function(){var n=gc($n)[0],r=ct().memoizedState;return[typeof n=="boolean"?n:tu(n),r]},useSyncExternalStore:Rm,useId:ap,useHostTransitionStatus:xc,useFormState:Vm,useActionState:Vm,useOptimistic:function(n,r){var a=ct();return Xe!==null?Bm(a,Xe,n,r):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:mc,useCacheRefresh:up};fp.useEffectEvent=Xm;function _c(n,r,a,l){r=n.memoizedState,a=a(l,r),a=a==null?r:b({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Cc={enqueueSetState:function(n,r,a){n=n._reactInternals;var l=ln(),f=xr(l);f.payload=r,a!=null&&(f.callback=a),r=wr(n,f,l),r!==null&&(Xt(r,n,l),Za(r,n,l))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var l=ln(),f=xr(l);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=wr(n,f,l),r!==null&&(Xt(r,n,l),Za(r,n,l))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=ln(),l=xr(a);l.tag=2,r!=null&&(l.callback=r),r=wr(n,l,a),r!==null&&(Xt(r,n,a),Za(r,n,a))}};function hp(n,r,a,l,f,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,m,E):r.prototype&&r.prototype.isPureReactComponent?!qa(a,l)||!qa(f,m):!0}function dp(n,r,a,l){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==n&&Cc.enqueueReplaceState(r,r.state,null)}function oi(n,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(n=n.defaultProps){a===r&&(a=b({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}function mp(n){Al(n)}function pp(n){console.error(n)}function gp(n){Al(n)}function Vl(n,r){try{var a=n.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function bp(n,r,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Nc(n,r,a){return a=xr(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(n,r)},a}function yp(n){return n=xr(n),n.tag=3,n}function Ep(n,r,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;n.payload=function(){return f(m)},n.callback=function(){bp(r,a,l)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){bp(r,a,l),typeof f!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var x=l.stack;this.componentDidCatch(l.value,{componentStack:x!==null?x:""})})}function bv(n,r,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&qi(r,a,f,!0),a=nn.current,a!==null){switch(a.tag){case 31:case 13:return Tn===null?rs():a.alternate===null&&st===0&&(st=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===Ll?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),$c(n,l,f)),!1;case 22:return a.flags|=65536,l===Ll?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),$c(n,l,f)),!1}throw Error(u(435,a.tag))}return $c(n,l,f),rs(),!1}if(He)return r=nn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,l!==Qo&&(n=Error(u(422),{cause:l}),Ga(gn(n,a)))):(l!==Qo&&(r=Error(u(423),{cause:l}),Ga(gn(r,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=gn(l,a),f=Nc(n.stateNode,l,f),ic(n,f),st!==4&&(st=2)),!1;var m=Error(u(520),{cause:l});if(m=gn(m,a),fu===null?fu=[m]:fu.push(m),st!==4&&(st=2),r===null)return!0;l=gn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=Nc(a.stateNode,l,n),ic(a,n),!1;case 1:if(r=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Rr===null||!Rr.has(m))))return a.flags|=65536,f&=-f,a.lanes|=f,f=yp(f),Ep(f,n,a,l),ic(a,f),!1}a=a.return}while(a!==null);return!1}var Oc=Error(u(461)),mt=!1;function Nt(n,r,a,l){r.child=n===null?xm(r,null,a,l):li(r,n.child,a,l)}function Tp(n,r,a,l,f){a=a.render;var m=r.ref;if("ref"in l){var E={};for(var x in l)x!=="ref"&&(E[x]=l[x])}else E=l;return ri(r),l=cc(n,r,a,E,m,f),x=fc(),n!==null&&!mt?(hc(n,r,f),er(n,r,f)):(He&&x&&Vo(r),r.flags|=1,Nt(n,r,l,f),r.child)}function vp(n,r,a,l,f){if(n===null){var m=a.type;return typeof m=="function"&&!jo(m)&&m.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=m,Ap(n,r,m,l,f)):(n=_l(a.type,null,l,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,!Fc(n,f)){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:qa,a(E,l)&&n.ref===r.ref)return er(n,r,f)}return r.flags|=1,n=Xn(m,l),n.ref=r.ref,n.return=r,r.child=n}function Ap(n,r,a,l,f){if(n!==null){var m=n.memoizedProps;if(qa(m,l)&&n.ref===r.ref)if(mt=!1,r.pendingProps=l=m,Fc(n,f))(n.flags&131072)!==0&&(mt=!0);else return r.lanes=n.lanes,er(n,r,f)}return Rc(n,r,a,l,f)}function xp(n,r,a,l){var f=l.children,m=n!==null?n.memoizedState:null;if(n===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((r.flags&128)!==0){if(m=m!==null?m.baseLanes|a:a,n!==null){for(l=r.child=n.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,r.child=null;return wp(n,r,m,a,l)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Rl(r,m!==null?m.cachePool:null),m!==null?_m(r,m):uc(),Cm(r);else return l=r.lanes=536870912,wp(n,r,m!==null?m.baseLanes|a:a,a,l)}else m!==null?(Rl(r,m.cachePool),_m(r,m),_r(),r.memoizedState=null):(n!==null&&Rl(r,null),uc(),_r());return Nt(n,r,f,a),r.child}function iu(n,r){return n!==null&&n.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function wp(n,r,a,l,f){var m=ec();return m=m===null?null:{parent:ht._currentValue,pool:m},r.memoizedState={baseLanes:a,cachePool:m},n!==null&&Rl(r,null),uc(),Cm(r),n!==null&&qi(n,r,l,!0),r.childLanes=f,null}function Gl(n,r){return r=Xl({mode:r.mode,children:r.children},n.mode),r.ref=n.ref,n.child=r,r.return=n,r}function Sp(n,r,a){return li(r,n.child,null,a),n=Gl(r,r.pendingProps),n.flags|=2,rn(r),r.memoizedState=null,n}function yv(n,r,a){var l=r.pendingProps,f=(r.flags&128)!==0;if(r.flags&=-129,n===null){if(He){if(l.mode==="hidden")return n=Gl(r,l),r.lanes=536870912,iu(null,n);if(sc(r),(n=tt)?(n=F0(n,En),n=n!==null&&n.data==="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:yr!==null?{id:Dn,overflow:In}:null,retryLane:536870912,hydrationErrors:null},a=sm(n),a.return=r,r.child=a,_t=r,tt=null)):n=null,n===null)throw Tr(r);return r.lanes=536870912,null}return Gl(r,l)}var m=n.memoizedState;if(m!==null){var E=m.dehydrated;if(sc(r),f)if(r.flags&256)r.flags&=-257,r=Sp(n,r,a);else if(r.memoizedState!==null)r.child=n.child,r.flags|=128,r=null;else throw Error(u(558));else if(mt||qi(n,r,a,!1),f=(a&n.childLanes)!==0,mt||f){if(l=Je,l!==null&&(E=pd(l,a),E!==0&&E!==m.retryLane))throw m.retryLane=E,$r(n,E),Xt(l,n,E),Oc;rs(),r=Sp(n,r,a)}else n=m.treeContext,tt=vn(E.nextSibling),_t=r,He=!0,Er=null,En=!1,n!==null&&fm(r,n),r=Gl(r,l),r.flags|=4096;return r}return n=Xn(n.child,{mode:l.mode,children:l.children}),n.ref=r.ref,r.child=n,n.return=r,n}function Ql(n,r){var a=r.ref;if(a===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(n===null||n.ref!==a)&&(r.flags|=4194816)}}function Rc(n,r,a,l,f){return ri(r),a=cc(n,r,a,l,void 0,f),l=fc(),n!==null&&!mt?(hc(n,r,f),er(n,r,f)):(He&&l&&Vo(r),r.flags|=1,Nt(n,r,a,f),r.child)}function _p(n,r,a,l,f,m){return ri(r),r.updateQueue=null,a=Om(r,l,a,f),Nm(n),l=fc(),n!==null&&!mt?(hc(n,r,m),er(n,r,m)):(He&&l&&Vo(r),r.flags|=1,Nt(n,r,a,m),r.child)}function Cp(n,r,a,l,f){if(ri(r),r.stateNode===null){var m=Hi,E=a.contextType;typeof E=="object"&&E!==null&&(m=Ct(E)),m=new a(l,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Cc,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=l,m.state=r.memoizedState,m.refs={},nc(r),E=a.contextType,m.context=typeof E=="object"&&E!==null?Ct(E):Hi,m.state=r.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(_c(r,a,E,l),m.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Cc.enqueueReplaceState(m,m.state,null),$a(r,l,m,f),Ja(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(n===null){m=r.stateNode;var x=r.memoizedProps,I=oi(a,x);m.props=I;var q=m.context,K=a.contextType;E=Hi,typeof K=="object"&&K!==null&&(E=Ct(K));var $=a.getDerivedStateFromProps;K=typeof $=="function"||typeof m.getSnapshotBeforeUpdate=="function",x=r.pendingProps!==x,K||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x||q!==E)&&dp(r,m,l,E),Ar=!1;var V=r.memoizedState;m.state=V,$a(r,l,m,f),Ja(),q=r.memoizedState,x||V!==q||Ar?(typeof $=="function"&&(_c(r,a,$,l),q=r.memoizedState),(I=Ar||hp(r,a,I,l,V,q,E))?(K||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=q),m.props=l,m.state=q,m.context=E,l=I):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{m=r.stateNode,rc(n,r),E=r.memoizedProps,K=oi(a,E),m.props=K,$=r.pendingProps,V=m.context,q=a.contextType,I=Hi,typeof q=="object"&&q!==null&&(I=Ct(q)),x=a.getDerivedStateFromProps,(q=typeof x=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==$||V!==I)&&dp(r,m,l,I),Ar=!1,V=r.memoizedState,m.state=V,$a(r,l,m,f),Ja();var Q=r.memoizedState;E!==$||V!==Q||Ar||n!==null&&n.dependencies!==null&&Nl(n.dependencies)?(typeof x=="function"&&(_c(r,a,x,l),Q=r.memoizedState),(K=Ar||hp(r,a,K,l,V,Q,I)||n!==null&&n.dependencies!==null&&Nl(n.dependencies))?(q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,Q,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,Q,I)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&V===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&V===n.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=Q),m.props=l,m.state=Q,m.context=I,l=K):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&V===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&V===n.memoizedState||(r.flags|=1024),l=!1)}return m=l,Ql(n,r),l=(r.flags&128)!==0,m||l?(m=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,n!==null&&l?(r.child=li(r,n.child,null,f),r.child=li(r,null,a,f)):Nt(n,r,a,f),r.memoizedState=m.state,n=r.child):n=er(n,r,f),n}function Np(n,r,a,l){return ti(),r.flags|=256,Nt(n,r,a,l),r.child}var kc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lc(n){return{baseLanes:n,cachePool:bm()}}function Dc(n,r,a){return n=n!==null?n.childLanes&~a:0,r&&(n|=un),n}function Op(n,r,a){var l=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=n!==null&&n.memoizedState===null?!1:(ot.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,n===null){if(He){if(f?Sr(r):_r(),(n=tt)?(n=F0(n,En),n=n!==null&&n.data!=="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:yr!==null?{id:Dn,overflow:In}:null,retryLane:536870912,hydrationErrors:null},a=sm(n),a.return=r,r.child=a,_t=r,tt=null)):n=null,n===null)throw Tr(r);return gf(n)?r.lanes=32:r.lanes=536870912,null}var x=l.children;return l=l.fallback,f?(_r(),f=r.mode,x=Xl({mode:"hidden",children:x},f),l=ei(l,f,a,null),x.return=r,l.return=r,x.sibling=l,r.child=x,l=r.child,l.memoizedState=Lc(a),l.childLanes=Dc(n,E,a),r.memoizedState=kc,iu(null,l)):(Sr(r),Ic(r,x))}var I=n.memoizedState;if(I!==null&&(x=I.dehydrated,x!==null)){if(m)r.flags&256?(Sr(r),r.flags&=-257,r=Mc(n,r,a)):r.memoizedState!==null?(_r(),r.child=n.child,r.flags|=128,r=null):(_r(),x=l.fallback,f=r.mode,l=Xl({mode:"visible",children:l.children},f),x=ei(x,f,a,null),x.flags|=2,l.return=r,x.return=r,l.sibling=x,r.child=l,li(r,n.child,null,a),l=r.child,l.memoizedState=Lc(a),l.childLanes=Dc(n,E,a),r.memoizedState=kc,r=iu(null,l));else if(Sr(r),gf(x)){if(E=x.nextSibling&&x.nextSibling.dataset,E)var q=E.dgst;E=q,l=Error(u(419)),l.stack="",l.digest=E,Ga({value:l,source:null,stack:null}),r=Mc(n,r,a)}else if(mt||qi(n,r,a,!1),E=(a&n.childLanes)!==0,mt||E){if(E=Je,E!==null&&(l=pd(E,a),l!==0&&l!==I.retryLane))throw I.retryLane=l,$r(n,l),Xt(E,n,l),Oc;pf(x)||rs(),r=Mc(n,r,a)}else pf(x)?(r.flags|=192,r.child=n.child,r=null):(n=I.treeContext,tt=vn(x.nextSibling),_t=r,He=!0,Er=null,En=!1,n!==null&&fm(r,n),r=Ic(r,l.children),r.flags|=4096);return r}return f?(_r(),x=l.fallback,f=r.mode,I=n.child,q=I.sibling,l=Xn(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,q!==null?x=Xn(q,x):(x=ei(x,f,a,null),x.flags|=2),x.return=r,l.return=r,l.sibling=x,r.child=l,iu(null,l),l=r.child,x=n.child.memoizedState,x===null?x=Lc(a):(f=x.cachePool,f!==null?(I=ht._currentValue,f=f.parent!==I?{parent:I,pool:I}:f):f=bm(),x={baseLanes:x.baseLanes|a,cachePool:f}),l.memoizedState=x,l.childLanes=Dc(n,E,a),r.memoizedState=kc,iu(n.child,l)):(Sr(r),a=n.child,n=a.sibling,a=Xn(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,n!==null&&(E=r.deletions,E===null?(r.deletions=[n],r.flags|=16):E.push(n)),r.child=a,r.memoizedState=null,a)}function Ic(n,r){return r=Xl({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Xl(n,r){return n=tn(22,n,null,r),n.lanes=0,n}function Mc(n,r,a){return li(r,n.child,null,a),n=Ic(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Rp(n,r,a){n.lanes|=r;var l=n.alternate;l!==null&&(l.lanes|=r),Wo(n.return,r,a)}function Bc(n,r,a,l,f,m){var E=n.memoizedState;E===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f,treeForkCount:m}:(E.isBackwards=r,E.rendering=null,E.renderingStartTime=0,E.last=l,E.tail=a,E.tailMode=f,E.treeForkCount=m)}function kp(n,r,a){var l=r.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var E=ot.current,x=(E&2)!==0;if(x?(E=E&1|2,r.flags|=128):E&=1,S(ot,E),Nt(n,r,l,a),l=He?Va:0,!x&&n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Rp(n,a,r);else if(n.tag===19)Rp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(f){case"forwards":for(a=r.child,f=null;a!==null;)n=a.alternate,n!==null&&Bl(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),Bc(r,!1,f,a,m,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&Bl(n)===null){r.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Bc(r,!0,a,null,m,l);break;case"together":Bc(r,!1,null,null,void 0,l);break;default:r.memoizedState=null}return r.child}function er(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Or|=r.lanes,(a&r.childLanes)===0)if(n!==null){if(qi(n,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(u(153));if(r.child!==null){for(n=r.child,a=Xn(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Xn(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Fc(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Nl(n)))}function Ev(n,r,a){switch(r.tag){case 3:rt(r,r.stateNode.containerInfo),vr(r,ht,n.memoizedState.cache),ti();break;case 27:case 5:hn(r);break;case 4:rt(r,r.stateNode.containerInfo);break;case 10:vr(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,sc(r),null;break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Sr(r),r.flags|=128,null):(a&r.child.childLanes)!==0?Op(n,r,a):(Sr(r),n=er(n,r,a),n!==null?n.sibling:null);Sr(r);break;case 19:var f=(n.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(qi(n,r,a,!1),l=(a&r.childLanes)!==0),f){if(l)return kp(n,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),S(ot,ot.current),l)break;return null;case 22:return r.lanes=0,xp(n,r,a,r.pendingProps);case 24:vr(r,ht,n.memoizedState.cache)}return er(n,r,a)}function Lp(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps)mt=!0;else{if(!Fc(n,a)&&(r.flags&128)===0)return mt=!1,Ev(n,r,a);mt=(n.flags&131072)!==0}else mt=!1,He&&(r.flags&1048576)!==0&&cm(r,Va,r.index);switch(r.lanes=0,r.tag){case 16:e:{var l=r.pendingProps;if(n=ai(r.elementType),r.type=n,typeof n=="function")jo(n)?(l=oi(n,l),r.tag=1,r=Cp(null,r,n,l,a)):(r.tag=0,r=Rc(null,r,n,l,a));else{if(n!=null){var f=n.$$typeof;if(f===ee){r.tag=11,r=Tp(null,r,n,l,a);break e}else if(f===se){r.tag=14,r=vp(null,r,n,l,a);break e}}throw r=ae(n)||n,Error(u(306,r,""))}}return r;case 0:return Rc(n,r,r.type,r.pendingProps,a);case 1:return l=r.type,f=oi(l,r.pendingProps),Cp(n,r,l,f,a);case 3:e:{if(rt(r,r.stateNode.containerInfo),n===null)throw Error(u(387));l=r.pendingProps;var m=r.memoizedState;f=m.element,rc(n,r),$a(r,l,null,a);var E=r.memoizedState;if(l=E.cache,vr(r,ht,l),l!==m.cache&&Zo(r,[ht],a,!0),Ja(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=Np(n,r,l,a);break e}else if(l!==f){f=gn(Error(u(424)),r),Ga(f),r=Np(n,r,l,a);break e}else for(n=r.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,tt=vn(n.firstChild),_t=r,He=!0,Er=null,En=!0,a=xm(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ti(),l===f){r=er(n,r,a);break e}Nt(n,r,l,a)}r=r.child}return r;case 26:return Ql(n,r),n===null?(a=q0(r.type,null,r.pendingProps,null))?r.memoizedState=a:He||(a=r.type,n=r.pendingProps,l=cs(Te.current).createElement(a),l[St]=r,l[jt]=n,Ot(l,a,n),vt(l),r.stateNode=l):r.memoizedState=q0(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return hn(r),n===null&&He&&(l=r.stateNode=P0(r.type,r.pendingProps,Te.current),_t=r,En=!0,f=tt,Ir(r.type)?(bf=f,tt=vn(l.firstChild)):tt=f),Nt(n,r,r.pendingProps.children,a),Ql(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&He&&((f=l=tt)&&(l=Kv(l,r.type,r.pendingProps,En),l!==null?(r.stateNode=l,_t=r,tt=vn(l.firstChild),En=!1,f=!0):f=!1),f||Tr(r)),hn(r),f=r.type,m=r.pendingProps,E=n!==null?n.memoizedProps:null,l=m.children,hf(f,m)?l=null:E!==null&&hf(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=cc(n,r,cv,null,null,a),Eu._currentValue=f),Ql(n,r),Nt(n,r,l,a),r.child;case 6:return n===null&&He&&((n=a=tt)&&(a=Wv(a,r.pendingProps,En),a!==null?(r.stateNode=a,_t=r,tt=null,n=!0):n=!1),n||Tr(r)),null;case 13:return Op(n,r,a);case 4:return rt(r,r.stateNode.containerInfo),l=r.pendingProps,n===null?r.child=li(r,null,l,a):Nt(n,r,l,a),r.child;case 11:return Tp(n,r,r.type,r.pendingProps,a);case 7:return Nt(n,r,r.pendingProps,a),r.child;case 8:return Nt(n,r,r.pendingProps.children,a),r.child;case 12:return Nt(n,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,vr(r,r.type,l.value),Nt(n,r,l.children,a),r.child;case 9:return f=r.type._context,l=r.pendingProps.children,ri(r),f=Ct(f),l=l(f),r.flags|=1,Nt(n,r,l,a),r.child;case 14:return vp(n,r,r.type,r.pendingProps,a);case 15:return Ap(n,r,r.type,r.pendingProps,a);case 19:return kp(n,r,a);case 31:return yv(n,r,a);case 22:return xp(n,r,a,r.pendingProps);case 24:return ri(r),l=Ct(ht),n===null?(f=ec(),f===null&&(f=Je,m=Jo(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=a),f=m),r.memoizedState={parent:l,cache:f},nc(r),vr(r,ht,f)):((n.lanes&a)!==0&&(rc(n,r),$a(r,null,null,a),Ja()),f=n.memoizedState,m=r.memoizedState,f.parent!==l?(f={parent:l,cache:l},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),vr(r,ht,l)):(l=m.cache,vr(r,ht,l),l!==f.cache&&Zo(r,[ht],a,!0))),Nt(n,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(u(156,r.tag))}function tr(n){n.flags|=4}function Uc(n,r,a,l,f){if((r=(n.mode&32)!==0)&&(r=!1),r){if(n.flags|=16777216,(f&335544128)===f)if(n.stateNode.complete)n.flags|=8192;else if(a0())n.flags|=8192;else throw ui=Ll,tc}else n.flags&=-16777217}function Dp(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!X0(r))if(a0())n.flags|=8192;else throw ui=Ll,tc}function Kl(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?hd():536870912,n.lanes|=r,ta|=r)}function au(n,r){if(!He)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function nt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(r)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,r}function Tv(n,r,a){var l=r.pendingProps;switch(Go(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(r),null;case 1:return nt(r),null;case 3:return a=r.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Zn(ht),Qe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(ji(r)?tr(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Xo())),nt(r),null;case 26:var f=r.type,m=r.memoizedState;return n===null?(tr(r),m!==null?(nt(r),Dp(r,m)):(nt(r),Uc(r,f,null,l,a))):m?m!==n.memoizedState?(tr(r),nt(r),Dp(r,m)):(nt(r),r.flags&=-16777217):(n=n.memoizedProps,n!==l&&tr(r),nt(r),Uc(r,f,n,l,a)),null;case 27:if(jn(r),a=Te.current,f=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&tr(r);else{if(!l){if(r.stateNode===null)throw Error(u(166));return nt(r),null}n=he.current,ji(r)?hm(r):(n=P0(f,l,a),r.stateNode=n,tr(r))}return nt(r),null;case 5:if(jn(r),f=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&tr(r);else{if(!l){if(r.stateNode===null)throw Error(u(166));return nt(r),null}if(m=he.current,ji(r))hm(r);else{var E=cs(Te.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?E.createElement("select",{is:l.is}):E.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?E.createElement(f,{is:l.is}):E.createElement(f)}}m[St]=r,m[jt]=l;e:for(E=r.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===r)break e;for(;E.sibling===null;){if(E.return===null||E.return===r)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}r.stateNode=m;e:switch(Ot(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&tr(r)}}return nt(r),Uc(r,r.type,n===null?null:n.memoizedProps,r.pendingProps,a),null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==l&&tr(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(u(166));if(n=Te.current,ji(r)){if(n=r.stateNode,a=r.memoizedProps,l=null,f=_t,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[St]=r,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||O0(n.nodeValue,a)),n||Tr(r,!0)}else n=cs(n).createTextNode(l),n[St]=r,r.stateNode=n}return nt(r),null;case 31:if(a=r.memoizedState,n===null||n.memoizedState!==null){if(l=ji(r),a!==null){if(n===null){if(!l)throw Error(u(318));if(n=r.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(557));n[St]=r}else ti(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;nt(r),n=!1}else a=Xo(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),n=!0;if(!n)return r.flags&256?(rn(r),r):(rn(r),null);if((r.flags&128)!==0)throw Error(u(558))}return nt(r),null;case 13:if(l=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=ji(r),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(u(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(u(317));f[St]=r}else ti(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;nt(r),f=!1}else f=Xo(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(rn(r),r):(rn(r),null)}return rn(r),(r.flags&128)!==0?(r.lanes=a,r):(a=l!==null,n=n!==null&&n.memoizedState!==null,a&&(l=r.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),a!==n&&a&&(r.child.flags|=8192),Kl(r,r.updateQueue),nt(r),null);case 4:return Qe(),n===null&&lf(r.stateNode.containerInfo),nt(r),null;case 10:return Zn(r.type),nt(r),null;case 19:if(W(ot),l=r.memoizedState,l===null)return nt(r),null;if(f=(r.flags&128)!==0,m=l.rendering,m===null)if(f)au(l,!1);else{if(st!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(m=Bl(n),m!==null){for(r.flags|=128,au(l,!1),n=m.updateQueue,r.updateQueue=n,Kl(r,n),r.subtreeFlags=0,n=a,a=r.child;a!==null;)lm(a,n),a=a.sibling;return S(ot,ot.current&1|2),He&&Kn(r,l.treeForkCount),r.child}n=n.sibling}l.tail!==null&&Bt()>es&&(r.flags|=128,f=!0,au(l,!1),r.lanes=4194304)}else{if(!f)if(n=Bl(m),n!==null){if(r.flags|=128,f=!0,n=n.updateQueue,r.updateQueue=n,Kl(r,n),au(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!He)return nt(r),null}else 2*Bt()-l.renderingStartTime>es&&a!==536870912&&(r.flags|=128,f=!0,au(l,!1),r.lanes=4194304);l.isBackwards?(m.sibling=r.child,r.child=m):(n=l.last,n!==null?n.sibling=m:r.child=m,l.last=m)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Bt(),n.sibling=null,a=ot.current,S(ot,f?a&1|2:a&1),He&&Kn(r,l.treeForkCount),n):(nt(r),null);case 22:case 23:return rn(r),lc(),l=r.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(nt(r),r.subtreeFlags&6&&(r.flags|=8192)):nt(r),a=r.updateQueue,a!==null&&Kl(r,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),n!==null&&W(ii),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),Zn(ht),nt(r),null;case 25:return null;case 30:return null}throw Error(u(156,r.tag))}function vv(n,r){switch(Go(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Zn(ht),Qe(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return jn(r),null;case 31:if(r.memoizedState!==null){if(rn(r),r.alternate===null)throw Error(u(340));ti()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 13:if(rn(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(u(340));ti()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return W(ot),null;case 4:return Qe(),null;case 10:return Zn(r.type),null;case 22:case 23:return rn(r),lc(),n!==null&&W(ii),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Zn(ht),null;case 25:return null;default:return null}}function Ip(n,r){switch(Go(r),r.tag){case 3:Zn(ht),Qe();break;case 26:case 27:case 5:jn(r);break;case 4:Qe();break;case 31:r.memoizedState!==null&&rn(r);break;case 13:rn(r);break;case 19:W(ot);break;case 10:Zn(r.type);break;case 22:case 23:rn(r),lc(),n!==null&&W(ii);break;case 24:Zn(ht)}}function uu(n,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&n)===n){l=void 0;var m=a.create,E=a.inst;l=m(),E.destroy=l}a=a.next}while(a!==f)}}catch(x){Ge(r,r.return,x)}}function Cr(n,r,a){try{var l=r.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&n)===n){var E=l.inst,x=E.destroy;if(x!==void 0){E.destroy=void 0,f=r;var I=a,q=x;try{q()}catch(K){Ge(f,I,K)}}}l=l.next}while(l!==m)}}catch(K){Ge(r,r.return,K)}}function Mp(n){var r=n.updateQueue;if(r!==null){var a=n.stateNode;try{Sm(r,a)}catch(l){Ge(n,n.return,l)}}}function Bp(n,r,a){a.props=oi(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){Ge(n,r,l)}}function lu(n,r){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(f){Ge(n,r,f)}}function Mn(n,r){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){Ge(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){Ge(n,r,f)}else a.current=null}function Fp(n){var r=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){Ge(n,n.return,f)}}function Hc(n,r,a){try{var l=n.stateNode;qv(l,n.type,a,r),l[jt]=r}catch(f){Ge(n,n.return,f)}}function Up(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ir(n.type)||n.tag===4}function Pc(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Up(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ir(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function zc(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(n),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Gn));else if(l!==4&&(l===27&&Ir(n.type)&&(a=n.stateNode,r=null),n=n.child,n!==null))for(zc(n,r,a),n=n.sibling;n!==null;)zc(n,r,a),n=n.sibling}function Wl(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(l!==4&&(l===27&&Ir(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(Wl(n,r,a),n=n.sibling;n!==null;)Wl(n,r,a),n=n.sibling}function Hp(n){var r=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);Ot(r,l,a),r[St]=n,r[jt]=a}catch(m){Ge(n,n.return,m)}}var nr=!1,pt=!1,jc=!1,Pp=typeof WeakSet=="function"?WeakSet:Set,At=null;function Av(n,r){if(n=n.containerInfo,cf=bs,n=Jd(n),Mo(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,x=-1,I=-1,q=0,K=0,$=n,V=null;t:for(;;){for(var Q;$!==a||f!==0&&$.nodeType!==3||(x=E+f),$!==m||l!==0&&$.nodeType!==3||(I=E+l),$.nodeType===3&&(E+=$.nodeValue.length),(Q=$.firstChild)!==null;)V=$,$=Q;for(;;){if($===n)break t;if(V===a&&++q===f&&(x=E),V===m&&++K===l&&(I=E),(Q=$.nextSibling)!==null)break;$=V,V=$.parentNode}$=Q}a=x===-1||I===-1?null:{start:x,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(ff={focusedElem:n,selectionRange:a},bs=!1,At=r;At!==null;)if(r=At,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,At=n;else for(;At!==null;){switch(r=At,m=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(n=r.updateQueue,n=n!==null?n.events:null,n!==null))for(a=0;a<n.length;a++)f=n[a],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,a=r,f=m.memoizedProps,m=m.memoizedState,l=a.stateNode;try{var pe=oi(a.type,f);n=l.getSnapshotBeforeUpdate(pe,m),l.__reactInternalSnapshotBeforeUpdate=n}catch(xe){Ge(a,a.return,xe)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,a=n.nodeType,a===9)mf(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":mf(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(u(163))}if(n=r.sibling,n!==null){n.return=r.return,At=n;break}At=r.return}}function zp(n,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ir(n,a),l&4&&uu(5,a);break;case 1:if(ir(n,a),l&4)if(n=a.stateNode,r===null)try{n.componentDidMount()}catch(E){Ge(a,a.return,E)}else{var f=oi(a.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(E){Ge(a,a.return,E)}}l&64&&Mp(a),l&512&&lu(a,a.return);break;case 3:if(ir(n,a),l&64&&(n=a.updateQueue,n!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{Sm(n,r)}catch(E){Ge(a,a.return,E)}}break;case 27:r===null&&l&4&&Hp(a);case 26:case 5:ir(n,a),r===null&&l&4&&Fp(a),l&512&&lu(a,a.return);break;case 12:ir(n,a);break;case 31:ir(n,a),l&4&&Yp(n,a);break;case 13:ir(n,a),l&4&&Vp(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=kv.bind(null,a),Zv(n,a))));break;case 22:if(l=a.memoizedState!==null||nr,!l){r=r!==null&&r.memoizedState!==null||pt,f=nr;var m=pt;nr=l,(pt=r)&&!m?ar(n,a,(a.subtreeFlags&8772)!==0):ir(n,a),nr=f,pt=m}break;case 30:break;default:ir(n,a)}}function jp(n){var r=n.alternate;r!==null&&(n.alternate=null,jp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&yo(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var it=null,Yt=!1;function rr(n,r,a){for(a=a.child;a!==null;)qp(n,r,a),a=a.sibling}function qp(n,r,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Ft,a)}catch{}switch(a.tag){case 26:pt||Mn(a,r),rr(n,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pt||Mn(a,r);var l=it,f=Yt;Ir(a.type)&&(it=a.stateNode,Yt=!1),rr(n,r,a),gu(a.stateNode),it=l,Yt=f;break;case 5:pt||Mn(a,r);case 6:if(l=it,f=Yt,it=null,rr(n,r,a),it=l,Yt=f,it!==null)if(Yt)try{(it.nodeType===9?it.body:it.nodeName==="HTML"?it.ownerDocument.body:it).removeChild(a.stateNode)}catch(m){Ge(a,r,m)}else try{it.removeChild(a.stateNode)}catch(m){Ge(a,r,m)}break;case 18:it!==null&&(Yt?(n=it,M0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),oa(n)):M0(it,a.stateNode));break;case 4:l=it,f=Yt,it=a.stateNode.containerInfo,Yt=!0,rr(n,r,a),it=l,Yt=f;break;case 0:case 11:case 14:case 15:Cr(2,a,r),pt||Cr(4,a,r),rr(n,r,a);break;case 1:pt||(Mn(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Bp(a,r,l)),rr(n,r,a);break;case 21:rr(n,r,a);break;case 22:pt=(l=pt)||a.memoizedState!==null,rr(n,r,a),pt=l;break;default:rr(n,r,a)}}function Yp(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{oa(n)}catch(a){Ge(r,r.return,a)}}}function Vp(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{oa(n)}catch(a){Ge(r,r.return,a)}}function xv(n){switch(n.tag){case 31:case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Pp),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Pp),r;default:throw Error(u(435,n.tag))}}function Zl(n,r){var a=xv(n);r.forEach(function(l){if(!a.has(l)){a.add(l);var f=Lv.bind(null,n,l);l.then(f,f)}})}function Vt(n,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],m=n,E=r,x=E;e:for(;x!==null;){switch(x.tag){case 27:if(Ir(x.type)){it=x.stateNode,Yt=!1;break e}break;case 5:it=x.stateNode,Yt=!1;break e;case 3:case 4:it=x.stateNode.containerInfo,Yt=!0;break e}x=x.return}if(it===null)throw Error(u(160));qp(m,E,f),it=null,Yt=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)Gp(r,n),r=r.sibling}var Cn=null;function Gp(n,r){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Vt(r,n),Gt(n),l&4&&(Cr(3,n,n.return),uu(3,n),Cr(5,n,n.return));break;case 1:Vt(r,n),Gt(n),l&512&&(pt||a===null||Mn(a,a.return)),l&64&&nr&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=Cn;if(Vt(r,n),Gt(n),l&512&&(pt||a===null||Mn(a,a.return)),l&4){var m=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ia]||m[St]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Ot(m,l,a),m[St]=n,vt(m),l=m;break e;case"link":var E=G0("link","href",f).get(l+(a.href||""));if(E){for(var x=0;x<E.length;x++)if(m=E[x],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(x,1);break t}}m=f.createElement(l),Ot(m,l,a),f.head.appendChild(m);break;case"meta":if(E=G0("meta","content",f).get(l+(a.content||""))){for(x=0;x<E.length;x++)if(m=E[x],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(x,1);break t}}m=f.createElement(l),Ot(m,l,a),f.head.appendChild(m);break;default:throw Error(u(468,l))}m[St]=n,vt(m),l=m}n.stateNode=l}else Q0(f,n.type,n.stateNode);else n.stateNode=V0(f,l,n.memoizedProps);else m!==l?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,l===null?Q0(f,n.type,n.stateNode):V0(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Hc(n,n.memoizedProps,a.memoizedProps)}break;case 27:Vt(r,n),Gt(n),l&512&&(pt||a===null||Mn(a,a.return)),a!==null&&l&4&&Hc(n,n.memoizedProps,a.memoizedProps);break;case 5:if(Vt(r,n),Gt(n),l&512&&(pt||a===null||Mn(a,a.return)),n.flags&32){f=n.stateNode;try{Li(f,"")}catch(pe){Ge(n,n.return,pe)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,Hc(n,f,a!==null?a.memoizedProps:f)),l&1024&&(jc=!0);break;case 6:if(Vt(r,n),Gt(n),l&4){if(n.stateNode===null)throw Error(u(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(pe){Ge(n,n.return,pe)}}break;case 3:if(ds=null,f=Cn,Cn=fs(r.containerInfo),Vt(r,n),Cn=f,Gt(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{oa(r.containerInfo)}catch(pe){Ge(n,n.return,pe)}jc&&(jc=!1,Qp(n));break;case 4:l=Cn,Cn=fs(n.stateNode.containerInfo),Vt(r,n),Gt(n),Cn=l;break;case 12:Vt(r,n),Gt(n);break;case 31:Vt(r,n),Gt(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Zl(n,l)));break;case 13:Vt(r,n),Gt(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($l=Bt()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Zl(n,l)));break;case 22:f=n.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,q=nr,K=pt;if(nr=q||f,pt=K||I,Vt(r,n),pt=K,nr=q,Gt(n),l&8192)e:for(r=n.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(a===null||I||nr||pt||ci(n)),a=null,r=n;;){if(r.tag===5||r.tag===26){if(a===null){I=a=r;try{if(m=I.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{x=I.stateNode;var $=I.memoizedProps.style,V=$!=null&&$.hasOwnProperty("display")?$.display:null;x.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(pe){Ge(I,I.return,pe)}}}else if(r.tag===6){if(a===null){I=r;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(pe){Ge(I,I.return,pe)}}}else if(r.tag===18){if(a===null){I=r;try{var Q=I.stateNode;f?B0(Q,!0):B0(I.stateNode,!1)}catch(pe){Ge(I,I.return,pe)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Zl(n,a))));break;case 19:Vt(r,n),Gt(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Zl(n,l)));break;case 30:break;case 21:break;default:Vt(r,n),Gt(n)}}function Gt(n){var r=n.flags;if(r&2){try{for(var a,l=n.return;l!==null;){if(Up(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var f=a.stateNode,m=Pc(n);Wl(n,m,f);break;case 5:var E=a.stateNode;a.flags&32&&(Li(E,""),a.flags&=-33);var x=Pc(n);Wl(n,x,E);break;case 3:case 4:var I=a.stateNode.containerInfo,q=Pc(n);zc(n,q,I);break;default:throw Error(u(161))}}catch(K){Ge(n,n.return,K)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Qp(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Qp(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function ir(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)zp(n,r.alternate,r),r=r.sibling}function ci(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Cr(4,r,r.return),ci(r);break;case 1:Mn(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&Bp(r,r.return,a),ci(r);break;case 27:gu(r.stateNode);case 26:case 5:Mn(r,r.return),ci(r);break;case 22:r.memoizedState===null&&ci(r);break;case 30:ci(r);break;default:ci(r)}n=n.sibling}}function ar(n,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,f=n,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:ar(f,m,a),uu(4,m);break;case 1:if(ar(f,m,a),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){Ge(l,l.return,q)}if(l=m,f=l.updateQueue,f!==null){var x=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)wm(I[f],x)}catch(q){Ge(l,l.return,q)}}a&&E&64&&Mp(m),lu(m,m.return);break;case 27:Hp(m);case 26:case 5:ar(f,m,a),a&&l===null&&E&4&&Fp(m),lu(m,m.return);break;case 12:ar(f,m,a);break;case 31:ar(f,m,a),a&&E&4&&Yp(f,m);break;case 13:ar(f,m,a),a&&E&4&&Vp(f,m);break;case 22:m.memoizedState===null&&ar(f,m,a),lu(m,m.return);break;case 30:break;default:ar(f,m,a)}r=r.sibling}}function qc(n,r){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Qa(a))}function Yc(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Qa(n))}function Nn(n,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Xp(n,r,a,l),r=r.sibling}function Xp(n,r,a,l){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Nn(n,r,a,l),f&2048&&uu(9,r);break;case 1:Nn(n,r,a,l);break;case 3:Nn(n,r,a,l),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Qa(n)));break;case 12:if(f&2048){Nn(n,r,a,l),n=r.stateNode;try{var m=r.memoizedProps,E=m.id,x=m.onPostCommit;typeof x=="function"&&x(E,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){Ge(r,r.return,I)}}else Nn(n,r,a,l);break;case 31:Nn(n,r,a,l);break;case 13:Nn(n,r,a,l);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Nn(n,r,a,l):su(n,r):m._visibility&2?Nn(n,r,a,l):(m._visibility|=2,Ji(n,r,a,l,(r.subtreeFlags&10256)!==0||!1)),f&2048&&qc(E,r);break;case 24:Nn(n,r,a,l),f&2048&&Yc(r.alternate,r);break;default:Nn(n,r,a,l)}}function Ji(n,r,a,l,f){for(f=f&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var m=n,E=r,x=a,I=l,q=E.flags;switch(E.tag){case 0:case 11:case 15:Ji(m,E,x,I,f),uu(8,E);break;case 23:break;case 22:var K=E.stateNode;E.memoizedState!==null?K._visibility&2?Ji(m,E,x,I,f):su(m,E):(K._visibility|=2,Ji(m,E,x,I,f)),f&&q&2048&&qc(E.alternate,E);break;case 24:Ji(m,E,x,I,f),f&&q&2048&&Yc(E.alternate,E);break;default:Ji(m,E,x,I,f)}r=r.sibling}}function su(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=n,l=r,f=l.flags;switch(l.tag){case 22:su(a,l),f&2048&&qc(l.alternate,l);break;case 24:su(a,l),f&2048&&Yc(l.alternate,l);break;default:su(a,l)}r=r.sibling}}var ou=8192;function $i(n,r,a){if(n.subtreeFlags&ou)for(n=n.child;n!==null;)Kp(n,r,a),n=n.sibling}function Kp(n,r,a){switch(n.tag){case 26:$i(n,r,a),n.flags&ou&&n.memoizedState!==null&&o2(a,Cn,n.memoizedState,n.memoizedProps);break;case 5:$i(n,r,a);break;case 3:case 4:var l=Cn;Cn=fs(n.stateNode.containerInfo),$i(n,r,a),Cn=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=ou,ou=16777216,$i(n,r,a),ou=l):$i(n,r,a));break;default:$i(n,r,a)}}function Wp(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function cu(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];At=l,Jp(l,n)}Wp(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zp(n),n=n.sibling}function Zp(n){switch(n.tag){case 0:case 11:case 15:cu(n),n.flags&2048&&Cr(9,n,n.return);break;case 3:cu(n);break;case 12:cu(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Jl(n)):cu(n);break;default:cu(n)}}function Jl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];At=l,Jp(l,n)}Wp(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Cr(8,r,r.return),Jl(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(r));break;default:Jl(r)}n=n.sibling}}function Jp(n,r){for(;At!==null;){var a=At;switch(a.tag){case 0:case 11:case 15:Cr(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Qa(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,At=l;else e:for(a=n;At!==null;){l=At;var f=l.sibling,m=l.return;if(jp(l),l===a){At=null;break e}if(f!==null){f.return=m,At=f;break e}At=m}}}var wv={getCacheForType:function(n){var r=Ct(ht),a=r.data.get(n);return a===void 0&&(a=n(),r.data.set(n,a)),a},cacheSignal:function(){return Ct(ht).controller.signal}},Sv=typeof WeakMap=="function"?WeakMap:Map,qe=0,Je=null,De=null,Fe=0,Ve=0,an=null,Nr=!1,ea=!1,Vc=!1,ur=0,st=0,Or=0,fi=0,Gc=0,un=0,ta=0,fu=null,Qt=null,Qc=!1,$l=0,$p=0,es=1/0,ts=null,Rr=null,Et=0,kr=null,na=null,lr=0,Xc=0,Kc=null,e0=null,hu=0,Wc=null;function ln(){return(qe&2)!==0&&Fe!==0?Fe&-Fe:z.T!==null?nf():gd()}function t0(){if(un===0)if((Fe&536870912)===0||He){var n=ol;ol<<=1,(ol&3932160)===0&&(ol=262144),un=n}else un=536870912;return n=nn.current,n!==null&&(n.flags|=32),un}function Xt(n,r,a){(n===Je&&(Ve===2||Ve===9)||n.cancelPendingCommit!==null)&&(ra(n,0),Lr(n,Fe,un,!1)),Da(n,a),((qe&2)===0||n!==Je)&&(n===Je&&((qe&2)===0&&(fi|=a),st===4&&Lr(n,Fe,un,!1)),Bn(n))}function n0(n,r,a){if((qe&6)!==0)throw Error(u(327));var l=!a&&(r&127)===0&&(r&n.expiredLanes)===0||La(n,r),f=l?Nv(n,r):Jc(n,r,!0),m=l;do{if(f===0){ea&&!l&&Lr(n,r,0,!1);break}else{if(a=n.current.alternate,m&&!_v(a)){f=Jc(n,r,!1),m=!1;continue}if(f===2){if(m=r,n.errorRecoveryDisabledLanes&m)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var x=n;f=fu;var I=x.current.memoizedState.isDehydrated;if(I&&(ra(x,E).flags|=256),E=Jc(x,E,!1),E!==2){if(Vc&&!I){x.errorRecoveryDisabledLanes|=m,fi|=m,f=4;break e}m=Qt,Qt=f,m!==null&&(Qt===null?Qt=m:Qt.push.apply(Qt,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){ra(n,0),Lr(n,r,0,!0);break}e:{switch(l=n,m=f,m){case 0:case 1:throw Error(u(345));case 4:if((r&4194048)!==r)break;case 6:Lr(l,r,un,!Nr);break e;case 2:Qt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((r&62914560)===r&&(f=$l+300-Bt(),10<f)){if(Lr(l,r,un,!Nr),fl(l,0,!0)!==0)break e;lr=r,l.timeoutHandle=D0(r0.bind(null,l,a,Qt,ts,Qc,r,un,fi,ta,Nr,m,"Throttled",-0,0),f);break e}r0(l,a,Qt,ts,Qc,r,un,fi,ta,Nr,m,null,-0,0)}}break}while(!0);Bn(n)}function r0(n,r,a,l,f,m,E,x,I,q,K,$,V,Q){if(n.timeoutHandle=-1,$=r.subtreeFlags,$&8192||($&16785408)===16785408){$={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gn},Kp(r,m,$);var pe=(m&62914560)===m?$l-Bt():(m&4194048)===m?$p-Bt():0;if(pe=c2($,pe),pe!==null){lr=m,n.cancelPendingCommit=pe(f0.bind(null,n,r,m,a,l,f,E,x,I,K,$,null,V,Q)),Lr(n,m,E,!q);return}}f0(n,r,m,a,l,f,E,x,I)}function _v(n){for(var r=n;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],m=f.getSnapshot;f=f.value;try{if(!en(m(),f))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Lr(n,r,a,l){r&=~Gc,r&=~fi,n.suspendedLanes|=r,n.pingedLanes&=~r,l&&(n.warmLanes|=r),l=n.expirationTimes;for(var f=r;0<f;){var m=31-Ze(f),E=1<<m;l[m]=-1,f&=~E}a!==0&&dd(n,a,r)}function ns(){return(qe&6)===0?(du(0),!1):!0}function Zc(){if(De!==null){if(Ve===0)var n=De.return;else n=De,Wn=ni=null,dc(n),Qi=null,Ka=0,n=De;for(;n!==null;)Ip(n.alternate,n),n=n.return;De=null}}function ra(n,r){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,Gv(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),lr=0,Zc(),Je=n,De=a=Xn(n.current,null),Fe=r,Ve=0,an=null,Nr=!1,ea=La(n,r),Vc=!1,ta=un=Gc=fi=Or=st=0,Qt=fu=null,Qc=!1,(r&8)!==0&&(r|=r&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=r;0<l;){var f=31-Ze(l),m=1<<f;r|=n[f],l&=~m}return ur=r,xl(),a}function i0(n,r){Ce=null,z.H=ru,r===Gi||r===kl?(r=Tm(),Ve=3):r===tc?(r=Tm(),Ve=4):Ve=r===Oc?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,an=r,De===null&&(st=1,Vl(n,gn(r,n.current)))}function a0(){var n=nn.current;return n===null?!0:(Fe&4194048)===Fe?Tn===null:(Fe&62914560)===Fe||(Fe&536870912)!==0?n===Tn:!1}function u0(){var n=z.H;return z.H=ru,n===null?ru:n}function l0(){var n=z.A;return z.A=wv,n}function rs(){st=4,Nr||(Fe&4194048)!==Fe&&nn.current!==null||(ea=!0),(Or&134217727)===0&&(fi&134217727)===0||Je===null||Lr(Je,Fe,un,!1)}function Jc(n,r,a){var l=qe;qe|=2;var f=u0(),m=l0();(Je!==n||Fe!==r)&&(ts=null,ra(n,r)),r=!1;var E=st;e:do try{if(Ve!==0&&De!==null){var x=De,I=an;switch(Ve){case 8:Zc(),E=6;break e;case 3:case 2:case 9:case 6:nn.current===null&&(r=!0);var q=Ve;if(Ve=0,an=null,ia(n,x,I,q),a&&ea){E=0;break e}break;default:q=Ve,Ve=0,an=null,ia(n,x,I,q)}}Cv(),E=st;break}catch(K){i0(n,K)}while(!0);return r&&n.shellSuspendCounter++,Wn=ni=null,qe=l,z.H=f,z.A=m,De===null&&(Je=null,Fe=0,xl()),E}function Cv(){for(;De!==null;)s0(De)}function Nv(n,r){var a=qe;qe|=2;var l=u0(),f=l0();Je!==n||Fe!==r?(ts=null,es=Bt()+500,ra(n,r)):ea=La(n,r);e:do try{if(Ve!==0&&De!==null){r=De;var m=an;t:switch(Ve){case 1:Ve=0,an=null,ia(n,r,m,1);break;case 2:case 9:if(ym(m)){Ve=0,an=null,o0(r);break}r=function(){Ve!==2&&Ve!==9||Je!==n||(Ve=7),Bn(n)},m.then(r,r);break e;case 3:Ve=7;break e;case 4:Ve=5;break e;case 7:ym(m)?(Ve=0,an=null,o0(r)):(Ve=0,an=null,ia(n,r,m,7));break;case 5:var E=null;switch(De.tag){case 26:E=De.memoizedState;case 5:case 27:var x=De;if(E?X0(E):x.stateNode.complete){Ve=0,an=null;var I=x.sibling;if(I!==null)De=I;else{var q=x.return;q!==null?(De=q,is(q)):De=null}break t}}Ve=0,an=null,ia(n,r,m,5);break;case 6:Ve=0,an=null,ia(n,r,m,6);break;case 8:Zc(),st=6;break e;default:throw Error(u(462))}}Ov();break}catch(K){i0(n,K)}while(!0);return Wn=ni=null,z.H=l,z.A=f,qe=a,De!==null?0:(Je=null,Fe=0,xl(),st)}function Ov(){for(;De!==null&&!co();)s0(De)}function s0(n){var r=Lp(n.alternate,n,ur);n.memoizedProps=n.pendingProps,r===null?is(n):De=r}function o0(n){var r=n,a=r.alternate;switch(r.tag){case 15:case 0:r=_p(a,r,r.pendingProps,r.type,void 0,Fe);break;case 11:r=_p(a,r,r.pendingProps,r.type.render,r.ref,Fe);break;case 5:dc(r);default:Ip(a,r),r=De=lm(r,ur),r=Lp(a,r,ur)}n.memoizedProps=n.pendingProps,r===null?is(n):De=r}function ia(n,r,a,l){Wn=ni=null,dc(r),Qi=null,Ka=0;var f=r.return;try{if(bv(n,f,r,a,Fe)){st=1,Vl(n,gn(a,n.current)),De=null;return}}catch(m){if(f!==null)throw De=f,m;st=1,Vl(n,gn(a,n.current)),De=null;return}r.flags&32768?(He||l===1?n=!0:ea||(Fe&536870912)!==0?n=!1:(Nr=n=!0,(l===2||l===9||l===3||l===6)&&(l=nn.current,l!==null&&l.tag===13&&(l.flags|=16384))),c0(r,n)):is(r)}function is(n){var r=n;do{if((r.flags&32768)!==0){c0(r,Nr);return}n=r.return;var a=Tv(r.alternate,r,ur);if(a!==null){De=a;return}if(r=r.sibling,r!==null){De=r;return}De=r=n}while(r!==null);st===0&&(st=5)}function c0(n,r){do{var a=vv(n.alternate,n);if(a!==null){a.flags&=32767,De=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(n=n.sibling,n!==null)){De=n;return}De=n=a}while(n!==null);st=6,De=null}function f0(n,r,a,l,f,m,E,x,I){n.cancelPendingCommit=null;do as();while(Et!==0);if((qe&6)!==0)throw Error(u(327));if(r!==null){if(r===n.current)throw Error(u(177));if(m=r.lanes|r.childLanes,m|=Po,sT(n,a,m,E,x,I),n===Je&&(De=Je=null,Fe=0),na=r,kr=n,lr=a,Xc=m,Kc=f,e0=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Dv(Se,function(){return g0(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=ie.p,ie.p=2,E=qe,qe|=4;try{Av(n,r,a)}finally{qe=E,ie.p=f,z.T=l}}Et=1,h0(),d0(),m0()}}function h0(){if(Et===1){Et=0;var n=kr,r=na,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var l=ie.p;ie.p=2;var f=qe;qe|=4;try{Gp(r,n);var m=ff,E=Jd(n.containerInfo),x=m.focusedElem,I=m.selectionRange;if(E!==x&&x&&x.ownerDocument&&Zd(x.ownerDocument.documentElement,x)){if(I!==null&&Mo(x)){var q=I.start,K=I.end;if(K===void 0&&(K=q),"selectionStart"in x)x.selectionStart=q,x.selectionEnd=Math.min(K,x.value.length);else{var $=x.ownerDocument||document,V=$&&$.defaultView||window;if(V.getSelection){var Q=V.getSelection(),pe=x.textContent.length,xe=Math.min(I.start,pe),We=I.end===void 0?xe:Math.min(I.end,pe);!Q.extend&&xe>We&&(E=We,We=xe,xe=E);var U=Wd(x,xe),B=Wd(x,We);if(U&&B&&(Q.rangeCount!==1||Q.anchorNode!==U.node||Q.anchorOffset!==U.offset||Q.focusNode!==B.node||Q.focusOffset!==B.offset)){var j=$.createRange();j.setStart(U.node,U.offset),Q.removeAllRanges(),xe>We?(Q.addRange(j),Q.extend(B.node,B.offset)):(j.setEnd(B.node,B.offset),Q.addRange(j))}}}}for($=[],Q=x;Q=Q.parentNode;)Q.nodeType===1&&$.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<$.length;x++){var J=$[x];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}bs=!!cf,ff=cf=null}finally{qe=f,ie.p=l,z.T=a}}n.current=r,Et=2}}function d0(){if(Et===2){Et=0;var n=kr,r=na,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var l=ie.p;ie.p=2;var f=qe;qe|=4;try{zp(n,r.alternate,r)}finally{qe=f,ie.p=l,z.T=a}}Et=3}}function m0(){if(Et===4||Et===3){Et=0,fo();var n=kr,r=na,a=lr,l=e0;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Et=5:(Et=0,na=kr=null,p0(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Rr=null),go(a),r=r.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Ft,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=z.T,f=ie.p,ie.p=2,z.T=null;try{for(var m=n.onRecoverableError,E=0;E<l.length;E++){var x=l[E];m(x.value,{componentStack:x.stack})}}finally{z.T=r,ie.p=f}}(lr&3)!==0&&as(),Bn(n),f=n.pendingLanes,(a&261930)!==0&&(f&42)!==0?n===Wc?hu++:(hu=0,Wc=n):hu=0,du(0)}}function p0(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Qa(r)))}function as(){return h0(),d0(),m0(),g0()}function g0(){if(Et!==5)return!1;var n=kr,r=Xc;Xc=0;var a=go(lr),l=z.T,f=ie.p;try{ie.p=32>a?32:a,z.T=null,a=Kc,Kc=null;var m=kr,E=lr;if(Et=0,na=kr=null,lr=0,(qe&6)!==0)throw Error(u(331));var x=qe;if(qe|=4,Zp(m.current),Xp(m,m.current,E,a),qe=x,du(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Ft,m)}catch{}return!0}finally{ie.p=f,z.T=l,p0(n,r)}}function b0(n,r,a){r=gn(a,r),r=Nc(n.stateNode,r,2),n=wr(n,r,2),n!==null&&(Da(n,2),Bn(n))}function Ge(n,r,a){if(n.tag===3)b0(n,n,a);else for(;r!==null;){if(r.tag===3){b0(r,n,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Rr===null||!Rr.has(l))){n=gn(a,n),a=yp(2),l=wr(r,a,2),l!==null&&(Ep(a,l,r,n),Da(l,2),Bn(l));break}}r=r.return}}function $c(n,r,a){var l=n.pingCache;if(l===null){l=n.pingCache=new Sv;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(a)||(Vc=!0,f.add(a),n=Rv.bind(null,n,r,a),r.then(n,n))}function Rv(n,r,a){var l=n.pingCache;l!==null&&l.delete(r),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,Je===n&&(Fe&a)===a&&(st===4||st===3&&(Fe&62914560)===Fe&&300>Bt()-$l?(qe&2)===0&&ra(n,0):Gc|=a,ta===Fe&&(ta=0)),Bn(n)}function y0(n,r){r===0&&(r=hd()),n=$r(n,r),n!==null&&(Da(n,r),Bn(n))}function kv(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),y0(n,a)}function Lv(n,r){var a=0;switch(n.tag){case 31:case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(r),y0(n,a)}function Dv(n,r){return Si(n,r)}var us=null,aa=null,ef=!1,ls=!1,tf=!1,Dr=0;function Bn(n){n!==aa&&n.next===null&&(aa===null?us=aa=n:aa=aa.next=n),ls=!0,ef||(ef=!0,Mv())}function du(n,r){if(!tf&&ls){tf=!0;do for(var a=!1,l=us;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var E=l.suspendedLanes,x=l.pingedLanes;m=(1<<31-Ze(42|n)+1)-1,m&=f&~(E&~x),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,A0(l,m))}else m=Fe,m=fl(l,l===Je?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||La(l,m)||(a=!0,A0(l,m));l=l.next}while(a);tf=!1}}function Iv(){E0()}function E0(){ls=ef=!1;var n=0;Dr!==0&&Vv()&&(n=Dr);for(var r=Bt(),a=null,l=us;l!==null;){var f=l.next,m=T0(l,r);m===0?(l.next=null,a===null?us=f:a.next=f,f===null&&(aa=a)):(a=l,(n!==0||(m&3)!==0)&&(ls=!0)),l=f}Et!==0&&Et!==5||du(n),Dr!==0&&(Dr=0)}function T0(n,r){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var E=31-Ze(m),x=1<<E,I=f[E];I===-1?((x&a)===0||(x&l)!==0)&&(f[E]=lT(x,r)):I<=r&&(n.expiredLanes|=x),m&=~x}if(r=Je,a=Fe,a=fl(n,n===r?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===r&&(Ve===2||Ve===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&ka(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||La(n,a)){if(r=a&-a,r===n.callbackPriority)return r;switch(l!==null&&ka(l),go(a)){case 2:case 8:a=ce;break;case 32:a=Se;break;case 268435456:a=Ye;break;default:a=Se}return l=v0.bind(null,n),a=Si(a,l),n.callbackPriority=r,n.callbackNode=a,r}return l!==null&&l!==null&&ka(l),n.callbackPriority=2,n.callbackNode=null,2}function v0(n,r){if(Et!==0&&Et!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(as()&&n.callbackNode!==a)return null;var l=Fe;return l=fl(n,n===Je?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(n0(n,l,r),T0(n,Bt()),n.callbackNode!=null&&n.callbackNode===a?v0.bind(null,n):null)}function A0(n,r){if(as())return null;n0(n,r,!0)}function Mv(){Qv(function(){(qe&6)!==0?Si(Z,Iv):E0()})}function nf(){if(Dr===0){var n=Yi;n===0&&(n=sl,sl<<=1,(sl&261888)===0&&(sl=256)),Dr=n}return Dr}function x0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:pl(""+n)}function w0(n,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,n.id&&a.setAttribute("form",n.id),r.parentNode.insertBefore(a,r),n=new FormData(n),a.parentNode.removeChild(a),n}function Bv(n,r,a,l,f){if(r==="submit"&&a&&a.stateNode===f){var m=x0((f[jt]||null).action),E=l.submitter;E&&(r=(r=E[jt]||null)?x0(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var x=new El("action","action",null,l,f);n.push({event:x,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Dr!==0){var I=E?w0(f,E):new FormData(f);Ac(a,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(x.preventDefault(),I=E?w0(f,E):new FormData(f),Ac(a,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var rf=0;rf<Ho.length;rf++){var af=Ho[rf],Fv=af.toLowerCase(),Uv=af[0].toUpperCase()+af.slice(1);_n(Fv,"on"+Uv)}_n(tm,"onAnimationEnd"),_n(nm,"onAnimationIteration"),_n(rm,"onAnimationStart"),_n("dblclick","onDoubleClick"),_n("focusin","onFocus"),_n("focusout","onBlur"),_n(ev,"onTransitionRun"),_n(tv,"onTransitionStart"),_n(nv,"onTransitionCancel"),_n(im,"onTransitionEnd"),Ri("onMouseEnter",["mouseout","mouseover"]),Ri("onMouseLeave",["mouseout","mouseover"]),Ri("onPointerEnter",["pointerout","pointerover"]),Ri("onPointerLeave",["pointerout","pointerover"]),Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]),Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mu));function S0(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var m=void 0;if(r)for(var E=l.length-1;0<=E;E--){var x=l[E],I=x.instance,q=x.currentTarget;if(x=x.listener,I!==m&&f.isPropagationStopped())break e;m=x,f.currentTarget=q;try{m(f)}catch(K){Al(K)}f.currentTarget=null,m=I}else for(E=0;E<l.length;E++){if(x=l[E],I=x.instance,q=x.currentTarget,x=x.listener,I!==m&&f.isPropagationStopped())break e;m=x,f.currentTarget=q;try{m(f)}catch(K){Al(K)}f.currentTarget=null,m=I}}}}function Ie(n,r){var a=r[bo];a===void 0&&(a=r[bo]=new Set);var l=n+"__bubble";a.has(l)||(_0(r,n,2,!1),a.add(l))}function uf(n,r,a){var l=0;r&&(l|=4),_0(a,n,l,r)}var ss="_reactListening"+Math.random().toString(36).slice(2);function lf(n){if(!n[ss]){n[ss]=!0,Ed.forEach(function(a){a!=="selectionchange"&&(Hv.has(a)||uf(a,!1,n),uf(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ss]||(r[ss]=!0,uf("selectionchange",!1,r))}}function _0(n,r,a,l){switch(tg(r)){case 2:var f=d2;break;case 8:f=m2;break;default:f=Af}a=f.bind(null,r,a,n),f=void 0,!_o||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(r,a,{capture:!0,passive:f}):n.addEventListener(r,a,!0):f!==void 0?n.addEventListener(r,a,{passive:f}):n.addEventListener(r,a,!1)}function sf(n,r,a,l,f){var m=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var x=l.stateNode.containerInfo;if(x===f)break;if(E===4)for(E=l.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;x!==null;){if(E=Ci(x),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){l=m=E;continue e}x=x.parentNode}}l=l.return}kd(function(){var q=m,K=wo(a),$=[];e:{var V=am.get(n);if(V!==void 0){var Q=El,pe=n;switch(n){case"keypress":if(bl(a)===0)break e;case"keydown":case"keyup":Q=LT;break;case"focusin":pe="focus",Q=Ro;break;case"focusout":pe="blur",Q=Ro;break;case"beforeblur":case"afterblur":Q=Ro;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=TT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=MT;break;case tm:case nm:case rm:Q=xT;break;case im:Q=FT;break;case"scroll":case"scrollend":Q=yT;break;case"wheel":Q=HT;break;case"copy":case"cut":case"paste":Q=ST;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Bd;break;case"toggle":case"beforetoggle":Q=zT}var xe=(r&4)!==0,We=!xe&&(n==="scroll"||n==="scrollend"),U=xe?V!==null?V+"Capture":null:V;xe=[];for(var B=q,j;B!==null;){var J=B;if(j=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||j===null||U===null||(J=Ba(B,U),J!=null&&xe.push(pu(B,J,j))),We)break;B=B.return}0<xe.length&&(V=new Q(V,pe,null,a,K),$.push({event:V,listeners:xe}))}}if((r&7)===0){e:{if(V=n==="mouseover"||n==="pointerover",Q=n==="mouseout"||n==="pointerout",V&&a!==xo&&(pe=a.relatedTarget||a.fromElement)&&(Ci(pe)||pe[_i]))break e;if((Q||V)&&(V=K.window===K?K:(V=K.ownerDocument)?V.defaultView||V.parentWindow:window,Q?(pe=a.relatedTarget||a.toElement,Q=q,pe=pe?Ci(pe):null,pe!==null&&(We=o(pe),xe=pe.tag,pe!==We||xe!==5&&xe!==27&&xe!==6)&&(pe=null)):(Q=null,pe=q),Q!==pe)){if(xe=Id,J="onMouseLeave",U="onMouseEnter",B="mouse",(n==="pointerout"||n==="pointerover")&&(xe=Bd,J="onPointerLeave",U="onPointerEnter",B="pointer"),We=Q==null?V:Ma(Q),j=pe==null?V:Ma(pe),V=new xe(J,B+"leave",Q,a,K),V.target=We,V.relatedTarget=j,J=null,Ci(K)===q&&(xe=new xe(U,B+"enter",pe,a,K),xe.target=j,xe.relatedTarget=We,J=xe),We=J,Q&&pe)t:{for(xe=Pv,U=Q,B=pe,j=0,J=U;J;J=xe(J))j++;J=0;for(var ve=B;ve;ve=xe(ve))J++;for(;0<j-J;)U=xe(U),j--;for(;0<J-j;)B=xe(B),J--;for(;j--;){if(U===B||B!==null&&U===B.alternate){xe=U;break t}U=xe(U),B=xe(B)}xe=null}else xe=null;Q!==null&&C0($,V,Q,xe,!1),pe!==null&&We!==null&&C0($,We,pe,xe,!0)}}e:{if(V=q?Ma(q):window,Q=V.nodeName&&V.nodeName.toLowerCase(),Q==="select"||Q==="input"&&V.type==="file")var ze=Yd;else if(jd(V))if(Vd)ze=ZT;else{ze=KT;var ge=XT}else Q=V.nodeName,!Q||Q.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?q&&Ao(q.elementType)&&(ze=Yd):ze=WT;if(ze&&(ze=ze(n,q))){qd($,ze,a,K);break e}ge&&ge(n,V,q),n==="focusout"&&q&&V.type==="number"&&q.memoizedProps.value!=null&&vo(V,"number",V.value)}switch(ge=q?Ma(q):window,n){case"focusin":(jd(ge)||ge.contentEditable==="true")&&(Bi=ge,Bo=q,Ya=null);break;case"focusout":Ya=Bo=Bi=null;break;case"mousedown":Fo=!0;break;case"contextmenu":case"mouseup":case"dragend":Fo=!1,$d($,a,K);break;case"selectionchange":if($T)break;case"keydown":case"keyup":$d($,a,K)}var Ne;if(Lo)e:{switch(n){case"compositionstart":var Ue="onCompositionStart";break e;case"compositionend":Ue="onCompositionEnd";break e;case"compositionupdate":Ue="onCompositionUpdate";break e}Ue=void 0}else Mi?Pd(n,a)&&(Ue="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ue="onCompositionStart");Ue&&(Fd&&a.locale!=="ko"&&(Mi||Ue!=="onCompositionStart"?Ue==="onCompositionEnd"&&Mi&&(Ne=Ld()):(br=K,Co="value"in br?br.value:br.textContent,Mi=!0)),ge=os(q,Ue),0<ge.length&&(Ue=new Md(Ue,n,null,a,K),$.push({event:Ue,listeners:ge}),Ne?Ue.data=Ne:(Ne=zd(a),Ne!==null&&(Ue.data=Ne)))),(Ne=qT?YT(n,a):VT(n,a))&&(Ue=os(q,"onBeforeInput"),0<Ue.length&&(ge=new Md("onBeforeInput","beforeinput",null,a,K),$.push({event:ge,listeners:Ue}),ge.data=Ne)),Bv($,n,q,a,K)}S0($,r)})}function pu(n,r,a){return{instance:n,listener:r,currentTarget:a}}function os(n,r){for(var a=r+"Capture",l=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Ba(n,a),f!=null&&l.unshift(pu(n,f,m)),f=Ba(n,r),f!=null&&l.push(pu(n,f,m))),n.tag===3)return l;n=n.return}return[]}function Pv(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function C0(n,r,a,l,f){for(var m=r._reactName,E=[];a!==null&&a!==l;){var x=a,I=x.alternate,q=x.stateNode;if(x=x.tag,I!==null&&I===l)break;x!==5&&x!==26&&x!==27||q===null||(I=q,f?(q=Ba(a,m),q!=null&&E.unshift(pu(a,q,I))):f||(q=Ba(a,m),q!=null&&E.push(pu(a,q,I)))),a=a.return}E.length!==0&&n.push({event:r,listeners:E})}var zv=/\r\n?/g,jv=/\u0000|\uFFFD/g;function N0(n){return(typeof n=="string"?n:""+n).replace(zv,`
`).replace(jv,"")}function O0(n,r){return r=N0(r),N0(n)===r}function Ke(n,r,a,l,f,m){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||Li(n,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&Li(n,""+l);break;case"className":dl(n,"class",l);break;case"tabIndex":dl(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":dl(n,a,l);break;case"style":Od(n,l,m);break;case"data":if(r!=="object"){dl(n,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=pl(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(r!=="input"&&Ke(n,r,"name",f.name,f,null),Ke(n,r,"formEncType",f.formEncType,f,null),Ke(n,r,"formMethod",f.formMethod,f,null),Ke(n,r,"formTarget",f.formTarget,f,null)):(Ke(n,r,"encType",f.encType,f,null),Ke(n,r,"method",f.method,f,null),Ke(n,r,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=pl(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=Gn);break;case"onScroll":l!=null&&Ie("scroll",n);break;case"onScrollEnd":l!=null&&Ie("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(u(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=pl(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":Ie("beforetoggle",n),Ie("toggle",n),hl(n,"popover",l);break;case"xlinkActuate":Vn(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Vn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Vn(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Vn(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Vn(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Vn(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Vn(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Vn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Vn(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":hl(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gT.get(a)||a,hl(n,a,l))}}function of(n,r,a,l,f,m){switch(a){case"style":Od(n,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(u(60));n.innerHTML=a}}break;case"children":typeof l=="string"?Li(n,l):(typeof l=="number"||typeof l=="bigint")&&Li(n,""+l);break;case"onScroll":l!=null&&Ie("scroll",n);break;case"onScrollEnd":l!=null&&Ie("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Td.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),r=a.slice(2,f?a.length-7:void 0),m=n[jt]||null,m=m!=null?m[a]:null,typeof m=="function"&&n.removeEventListener(r,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(r,l,f);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):hl(n,a,l)}}}function Ot(n,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",n),Ie("load",n);var l=!1,f=!1,m;for(m in a)if(a.hasOwnProperty(m)){var E=a[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,r));default:Ke(n,r,m,E,a,null)}}f&&Ke(n,r,"srcSet",a.srcSet,a,null),l&&Ke(n,r,"src",a.src,a,null);return;case"input":Ie("invalid",n);var x=m=E=f=null,I=null,q=null;for(l in a)if(a.hasOwnProperty(l)){var K=a[l];if(K!=null)switch(l){case"name":f=K;break;case"type":E=K;break;case"checked":I=K;break;case"defaultChecked":q=K;break;case"value":m=K;break;case"defaultValue":x=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(u(137,r));break;default:Ke(n,r,l,K,a,null)}}Sd(n,m,x,I,q,E,f,!1);return;case"select":Ie("invalid",n),l=E=m=null;for(f in a)if(a.hasOwnProperty(f)&&(x=a[f],x!=null))switch(f){case"value":m=x;break;case"defaultValue":E=x;break;case"multiple":l=x;default:Ke(n,r,f,x,a,null)}r=m,a=E,n.multiple=!!l,r!=null?ki(n,!!l,r,!1):a!=null&&ki(n,!!l,a,!0);return;case"textarea":Ie("invalid",n),m=f=l=null;for(E in a)if(a.hasOwnProperty(E)&&(x=a[E],x!=null))switch(E){case"value":l=x;break;case"defaultValue":f=x;break;case"children":m=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(u(91));break;default:Ke(n,r,E,x,a,null)}Cd(n,l,f,m);return;case"option":for(I in a)a.hasOwnProperty(I)&&(l=a[I],l!=null)&&(I==="selected"?n.selected=l&&typeof l!="function"&&typeof l!="symbol":Ke(n,r,I,l,a,null));return;case"dialog":Ie("beforetoggle",n),Ie("toggle",n),Ie("cancel",n),Ie("close",n);break;case"iframe":case"object":Ie("load",n);break;case"video":case"audio":for(l=0;l<mu.length;l++)Ie(mu[l],n);break;case"image":Ie("error",n),Ie("load",n);break;case"details":Ie("toggle",n);break;case"embed":case"source":case"link":Ie("error",n),Ie("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in a)if(a.hasOwnProperty(q)&&(l=a[q],l!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,r));default:Ke(n,r,q,l,a,null)}return;default:if(Ao(r)){for(K in a)a.hasOwnProperty(K)&&(l=a[K],l!==void 0&&of(n,r,K,l,a,void 0));return}}for(x in a)a.hasOwnProperty(x)&&(l=a[x],l!=null&&Ke(n,r,x,l,a,null))}function qv(n,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,x=null,I=null,q=null,K=null;for(Q in a){var $=a[Q];if(a.hasOwnProperty(Q)&&$!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":I=$;default:l.hasOwnProperty(Q)||Ke(n,r,Q,null,l,$)}}for(var V in l){var Q=l[V];if($=a[V],l.hasOwnProperty(V)&&(Q!=null||$!=null))switch(V){case"type":m=Q;break;case"name":f=Q;break;case"checked":q=Q;break;case"defaultChecked":K=Q;break;case"value":E=Q;break;case"defaultValue":x=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(u(137,r));break;default:Q!==$&&Ke(n,r,V,Q,l,$)}}To(n,E,x,I,q,K,m,f);return;case"select":Q=E=x=V=null;for(m in a)if(I=a[m],a.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":Q=I;default:l.hasOwnProperty(m)||Ke(n,r,m,null,l,I)}for(f in l)if(m=l[f],I=a[f],l.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":V=m;break;case"defaultValue":x=m;break;case"multiple":E=m;default:m!==I&&Ke(n,r,f,m,l,I)}r=x,a=E,l=Q,V!=null?ki(n,!!a,V,!1):!!l!=!!a&&(r!=null?ki(n,!!a,r,!0):ki(n,!!a,a?[]:"",!1));return;case"textarea":Q=V=null;for(x in a)if(f=a[x],a.hasOwnProperty(x)&&f!=null&&!l.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Ke(n,r,x,null,l,f)}for(E in l)if(f=l[E],m=a[E],l.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":V=f;break;case"defaultValue":Q=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(u(91));break;default:f!==m&&Ke(n,r,E,f,l,m)}_d(n,V,Q);return;case"option":for(var pe in a)V=a[pe],a.hasOwnProperty(pe)&&V!=null&&!l.hasOwnProperty(pe)&&(pe==="selected"?n.selected=!1:Ke(n,r,pe,null,l,V));for(I in l)V=l[I],Q=a[I],l.hasOwnProperty(I)&&V!==Q&&(V!=null||Q!=null)&&(I==="selected"?n.selected=V&&typeof V!="function"&&typeof V!="symbol":Ke(n,r,I,V,l,Q));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var xe in a)V=a[xe],a.hasOwnProperty(xe)&&V!=null&&!l.hasOwnProperty(xe)&&Ke(n,r,xe,null,l,V);for(q in l)if(V=l[q],Q=a[q],l.hasOwnProperty(q)&&V!==Q&&(V!=null||Q!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(u(137,r));break;default:Ke(n,r,q,V,l,Q)}return;default:if(Ao(r)){for(var We in a)V=a[We],a.hasOwnProperty(We)&&V!==void 0&&!l.hasOwnProperty(We)&&of(n,r,We,void 0,l,V);for(K in l)V=l[K],Q=a[K],!l.hasOwnProperty(K)||V===Q||V===void 0&&Q===void 0||of(n,r,K,V,l,Q);return}}for(var U in a)V=a[U],a.hasOwnProperty(U)&&V!=null&&!l.hasOwnProperty(U)&&Ke(n,r,U,null,l,V);for($ in l)V=l[$],Q=a[$],!l.hasOwnProperty($)||V===Q||V==null&&Q==null||Ke(n,r,$,V,l,Q)}function R0(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yv(){if(typeof performance.getEntriesByType=="function"){for(var n=0,r=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var f=a[l],m=f.transferSize,E=f.initiatorType,x=f.duration;if(m&&x&&R0(E)){for(E=0,x=f.responseEnd,l+=1;l<a.length;l++){var I=a[l],q=I.startTime;if(q>x)break;var K=I.transferSize,$=I.initiatorType;K&&R0($)&&(I=I.responseEnd,E+=K*(I<x?1:(x-q)/(I-q)))}if(--l,r+=8*(m+E)/(f.duration/1e3),n++,10<n)break}}if(0<n)return r/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var cf=null,ff=null;function cs(n){return n.nodeType===9?n:n.ownerDocument}function k0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function L0(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function hf(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var df=null;function Vv(){var n=window.event;return n&&n.type==="popstate"?n===df?!1:(df=n,!0):(df=null,!1)}var D0=typeof setTimeout=="function"?setTimeout:void 0,Gv=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,Qv=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(n){return I0.resolve(null).then(n).catch(Xv)}:D0;function Xv(n){setTimeout(function(){throw n})}function Ir(n){return n==="head"}function M0(n,r){var a=r,l=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"||a==="/&"){if(l===0){n.removeChild(f),oa(r);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")gu(n.ownerDocument.documentElement);else if(a==="head"){a=n.ownerDocument.head,gu(a);for(var m=a.firstChild;m;){var E=m.nextSibling,x=m.nodeName;m[Ia]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&m.rel.toLowerCase()==="stylesheet"||a.removeChild(m),m=E}}else a==="body"&&gu(n.ownerDocument.body);a=f}while(a);oa(r)}function B0(n,r){var a=n;n=0;do{var l=a.nextSibling;if(a.nodeType===1?r?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(r?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(n===0)break;n--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||n++;a=l}while(a)}function mf(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mf(a),yo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function Kv(n,r,a,l){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Ia])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=vn(n.nextSibling),n===null)break}return null}function Wv(n,r,a){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=vn(n.nextSibling),n===null))return null;return n}function F0(n,r){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=vn(n.nextSibling),n===null))return null;return n}function pf(n){return n.data==="$?"||n.data==="$~"}function gf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function Zv(n,r){var a=n.ownerDocument;if(n.data==="$~")n._reactRetry=r;else if(n.data!=="$?"||a.readyState!=="loading")r();else{var l=function(){r(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function vn(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return n}var bf=null;function U0(n){n=n.nextSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"||a==="/&"){if(r===0)return vn(n.nextSibling);r--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||r++}n=n.nextSibling}return null}function H0(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(r===0)return n;r--}else a!=="/$"&&a!=="/&"||r++}n=n.previousSibling}return null}function P0(n,r,a){switch(r=cs(a),n){case"html":if(n=r.documentElement,!n)throw Error(u(452));return n;case"head":if(n=r.head,!n)throw Error(u(453));return n;case"body":if(n=r.body,!n)throw Error(u(454));return n;default:throw Error(u(451))}}function gu(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);yo(n)}var An=new Map,z0=new Set;function fs(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var sr=ie.d;ie.d={f:Jv,r:$v,D:e2,C:t2,L:n2,m:r2,X:a2,S:i2,M:u2};function Jv(){var n=sr.f(),r=ns();return n||r}function $v(n){var r=Ni(n);r!==null&&r.tag===5&&r.type==="form"?ip(r):sr.r(n)}var ua=typeof document>"u"?null:document;function j0(n,r,a){var l=ua;if(l&&typeof r=="string"&&r){var f=mn(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),z0.has(f)||(z0.add(f),n={rel:n,crossOrigin:a,href:r},l.querySelector(f)===null&&(r=l.createElement("link"),Ot(r,"link",n),vt(r),l.head.appendChild(r)))}}function e2(n){sr.D(n),j0("dns-prefetch",n,null)}function t2(n,r){sr.C(n,r),j0("preconnect",n,r)}function n2(n,r,a){sr.L(n,r,a);var l=ua;if(l&&n&&r){var f='link[rel="preload"][as="'+mn(r)+'"]';r==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+mn(a.imageSizes)+'"]')):f+='[href="'+mn(n)+'"]';var m=f;switch(r){case"style":m=la(n);break;case"script":m=sa(n)}An.has(m)||(n=b({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:n,as:r},a),An.set(m,n),l.querySelector(f)!==null||r==="style"&&l.querySelector(bu(m))||r==="script"&&l.querySelector(yu(m))||(r=l.createElement("link"),Ot(r,"link",n),vt(r),l.head.appendChild(r)))}}function r2(n,r){sr.m(n,r);var a=ua;if(a&&n){var l=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+mn(l)+'"][href="'+mn(n)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=sa(n)}if(!An.has(m)&&(n=b({rel:"modulepreload",href:n},r),An.set(m,n),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yu(m)))return}l=a.createElement("link"),Ot(l,"link",n),vt(l),a.head.appendChild(l)}}}function i2(n,r,a){sr.S(n,r,a);var l=ua;if(l&&n){var f=Oi(l).hoistableStyles,m=la(n);r=r||"default";var E=f.get(m);if(!E){var x={loading:0,preload:null};if(E=l.querySelector(bu(m)))x.loading=5;else{n=b({rel:"stylesheet",href:n,"data-precedence":r},a),(a=An.get(m))&&yf(n,a);var I=E=l.createElement("link");vt(I),Ot(I,"link",n),I._p=new Promise(function(q,K){I.onload=q,I.onerror=K}),I.addEventListener("load",function(){x.loading|=1}),I.addEventListener("error",function(){x.loading|=2}),x.loading|=4,hs(E,r,l)}E={type:"stylesheet",instance:E,count:1,state:x},f.set(m,E)}}}function a2(n,r){sr.X(n,r);var a=ua;if(a&&n){var l=Oi(a).hoistableScripts,f=sa(n),m=l.get(f);m||(m=a.querySelector(yu(f)),m||(n=b({src:n,async:!0},r),(r=An.get(f))&&Ef(n,r),m=a.createElement("script"),vt(m),Ot(m,"link",n),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function u2(n,r){sr.M(n,r);var a=ua;if(a&&n){var l=Oi(a).hoistableScripts,f=sa(n),m=l.get(f);m||(m=a.querySelector(yu(f)),m||(n=b({src:n,async:!0,type:"module"},r),(r=An.get(f))&&Ef(n,r),m=a.createElement("script"),vt(m),Ot(m,"link",n),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function q0(n,r,a,l){var f=(f=Te.current)?fs(f):null;if(!f)throw Error(u(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=la(a.href),a=Oi(f).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=la(a.href);var m=Oi(f).hoistableStyles,E=m.get(n);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,E),(m=f.querySelector(bu(n)))&&!m._p&&(E.instance=m,E.state.loading=5),An.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},An.set(n,a),m||l2(f,n,a,E.state))),r&&l===null)throw Error(u(528,""));return E}if(r&&l!==null)throw Error(u(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=sa(a),a=Oi(f).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,n))}}function la(n){return'href="'+mn(n)+'"'}function bu(n){return'link[rel="stylesheet"]['+n+"]"}function Y0(n){return b({},n,{"data-precedence":n.precedence,precedence:null})}function l2(n,r,a,l){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=n.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Ot(r,"link",a),vt(r),n.head.appendChild(r))}function sa(n){return'[src="'+mn(n)+'"]'}function yu(n){return"script[async]"+n}function V0(n,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=n.querySelector('style[data-href~="'+mn(a.href)+'"]');if(l)return r.instance=l,vt(l),l;var f=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),vt(l),Ot(l,"style",f),hs(l,a.precedence,n),r.instance=l;case"stylesheet":f=la(a.href);var m=n.querySelector(bu(f));if(m)return r.state.loading|=4,r.instance=m,vt(m),m;l=Y0(a),(f=An.get(f))&&yf(l,f),m=(n.ownerDocument||n).createElement("link"),vt(m);var E=m;return E._p=new Promise(function(x,I){E.onload=x,E.onerror=I}),Ot(m,"link",l),r.state.loading|=4,hs(m,a.precedence,n),r.instance=m;case"script":return m=sa(a.src),(f=n.querySelector(yu(m)))?(r.instance=f,vt(f),f):(l=a,(f=An.get(m))&&(l=b({},a),Ef(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),vt(f),Ot(f,"link",l),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(u(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,hs(l,a.precedence,n));return r.instance}function hs(n,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,E=0;E<l.length;E++){var x=l[E];if(x.dataset.precedence===r)m=x;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(n,r.firstChild))}function yf(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function Ef(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var ds=null;function G0(n,r,a){if(ds===null){var l=new Map,f=ds=new Map;f.set(a,l)}else f=ds,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var m=a[f];if(!(m[Ia]||m[St]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=n+E;var x=l.get(E);x?x.push(m):l.set(E,[m])}}return l}function Q0(n,r,a){n=n.ownerDocument||n,n.head.insertBefore(a,r==="title"?n.querySelector("head > title"):null)}function s2(n,r,a){if(a===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;return r.rel==="stylesheet"?(n=r.disabled,typeof r.precedence=="string"&&n==null):!0;case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function X0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function o2(n,r,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=la(l.href),m=r.querySelector(bu(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(n.count++,n=ms.bind(n),r.then(n,n)),a.state.loading|=4,a.instance=m,vt(m);return}m=r.ownerDocument||r,l=Y0(l),(f=An.get(f))&&yf(l,f),m=m.createElement("link"),vt(m);var E=m;E._p=new Promise(function(x,I){E.onload=x,E.onerror=I}),Ot(m,"link",l),a.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(a,r),(r=a.state.preload)&&(a.state.loading&3)===0&&(n.count++,a=ms.bind(n),r.addEventListener("load",a),r.addEventListener("error",a))}}var Tf=0;function c2(n,r){return n.stylesheets&&n.count===0&&gs(n,n.stylesheets),0<n.count||0<n.imgCount?function(a){var l=setTimeout(function(){if(n.stylesheets&&gs(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+r);0<n.imgBytes&&Tf===0&&(Tf=62500*Yv());var f=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&gs(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>Tf?50:800)+r);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function ms(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gs(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var ps=null;function gs(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,ps=new Map,r.forEach(f2,n),ps=null,ms.call(n))}function f2(n,r){if(!(r.state.loading&4)){var a=ps.get(n);if(a)var l=a.get(null);else{a=new Map,ps.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),l=E)}l&&a.set(null,l)}f=r.instance,E=f.getAttribute("data-precedence"),m=a.get(E)||l,m===l&&a.set(null,f),a.set(E,f),this.count++,l=ms.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var Eu={$$typeof:F,Provider:null,Consumer:null,_currentValue:be,_currentValue2:be,_threadCount:0};function h2(n,r,a,l,f,m,E,x,I){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mo(0),this.hiddenUpdates=mo(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function K0(n,r,a,l,f,m,E,x,I,q,K,$){return n=new h2(n,r,a,E,I,q,K,$,x),r=1,m===!0&&(r|=24),m=tn(3,null,null,r),n.current=m,m.stateNode=n,r=Jo(),r.refCount++,n.pooledCache=r,r.refCount++,m.memoizedState={element:l,isDehydrated:a,cache:r},nc(m),n}function W0(n){return n?(n=Hi,n):Hi}function Z0(n,r,a,l,f,m){f=W0(f),l.context===null?l.context=f:l.pendingContext=f,l=xr(r),l.payload={element:a},m=m===void 0?null:m,m!==null&&(l.callback=m),a=wr(n,l,r),a!==null&&(Xt(a,n,r),Za(a,n,r))}function J0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function vf(n,r){J0(n,r),(n=n.alternate)&&J0(n,r)}function $0(n){if(n.tag===13||n.tag===31){var r=$r(n,67108864);r!==null&&Xt(r,n,67108864),vf(n,67108864)}}function eg(n){if(n.tag===13||n.tag===31){var r=ln();r=po(r);var a=$r(n,r);a!==null&&Xt(a,n,r),vf(n,r)}}var bs=!0;function d2(n,r,a,l){var f=z.T;z.T=null;var m=ie.p;try{ie.p=2,Af(n,r,a,l)}finally{ie.p=m,z.T=f}}function m2(n,r,a,l){var f=z.T;z.T=null;var m=ie.p;try{ie.p=8,Af(n,r,a,l)}finally{ie.p=m,z.T=f}}function Af(n,r,a,l){if(bs){var f=xf(l);if(f===null)sf(n,r,l,ys,a),ng(n,l);else if(g2(f,n,r,a,l))l.stopPropagation();else if(ng(n,l),r&4&&-1<p2.indexOf(n)){for(;f!==null;){var m=Ni(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Xr(m.pendingLanes);if(E!==0){var x=m;for(x.pendingLanes|=2,x.entangledLanes|=2;E;){var I=1<<31-Ze(E);x.entanglements[1]|=I,E&=~I}Bn(m),(qe&6)===0&&(es=Bt()+500,du(0))}}break;case 31:case 13:x=$r(m,2),x!==null&&Xt(x,m,2),ns(),vf(m,2)}if(m=xf(l),m===null&&sf(n,r,l,ys,a),m===f)break;f=m}f!==null&&l.stopPropagation()}else sf(n,r,l,null,a)}}function xf(n){return n=wo(n),wf(n)}var ys=null;function wf(n){if(ys=null,n=Ci(n),n!==null){var r=o(n);if(r===null)n=null;else{var a=r.tag;if(a===13){if(n=c(r),n!==null)return n;n=null}else if(a===31){if(n=h(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return ys=n,null}function tg(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ho()){case Z:return 2;case ce:return 8;case Se:case Le:return 32;case Ye:return 268435456;default:return 32}default:return 32}}var Sf=!1,Mr=null,Br=null,Fr=null,Tu=new Map,vu=new Map,Ur=[],p2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ng(n,r){switch(n){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Tu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":vu.delete(r.pointerId)}}function Au(n,r,a,l,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},r!==null&&(r=Ni(r),r!==null&&$0(r)),n):(n.eventSystemFlags|=l,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function g2(n,r,a,l,f){switch(r){case"focusin":return Mr=Au(Mr,n,r,a,l,f),!0;case"dragenter":return Br=Au(Br,n,r,a,l,f),!0;case"mouseover":return Fr=Au(Fr,n,r,a,l,f),!0;case"pointerover":var m=f.pointerId;return Tu.set(m,Au(Tu.get(m)||null,n,r,a,l,f)),!0;case"gotpointercapture":return m=f.pointerId,vu.set(m,Au(vu.get(m)||null,n,r,a,l,f)),!0}return!1}function rg(n){var r=Ci(n.target);if(r!==null){var a=o(r);if(a!==null){if(r=a.tag,r===13){if(r=c(a),r!==null){n.blockedOn=r,bd(n.priority,function(){eg(a)});return}}else if(r===31){if(r=h(a),r!==null){n.blockedOn=r,bd(n.priority,function(){eg(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Es(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=xf(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);xo=l,a.target.dispatchEvent(l),xo=null}else return r=Ni(a),r!==null&&$0(r),n.blockedOn=a,!1;r.shift()}return!0}function ig(n,r,a){Es(n)&&a.delete(r)}function b2(){Sf=!1,Mr!==null&&Es(Mr)&&(Mr=null),Br!==null&&Es(Br)&&(Br=null),Fr!==null&&Es(Fr)&&(Fr=null),Tu.forEach(ig),vu.forEach(ig)}function Ts(n,r){n.blockedOn===r&&(n.blockedOn=null,Sf||(Sf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,b2)))}var vs=null;function ag(n){vs!==n&&(vs=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){vs===n&&(vs=null);for(var r=0;r<n.length;r+=3){var a=n[r],l=n[r+1],f=n[r+2];if(typeof l!="function"){if(wf(l||a)===null)continue;break}var m=Ni(a);m!==null&&(n.splice(r,3),r-=3,Ac(m,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function oa(n){function r(I){return Ts(I,n)}Mr!==null&&Ts(Mr,n),Br!==null&&Ts(Br,n),Fr!==null&&Ts(Fr,n),Tu.forEach(r),vu.forEach(r);for(var a=0;a<Ur.length;a++){var l=Ur[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Ur.length&&(a=Ur[0],a.blockedOn===null);)rg(a),a.blockedOn===null&&Ur.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],m=a[l+1],E=f[jt]||null;if(typeof m=="function")E||ag(a);else if(E){var x=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[jt]||null)x=E.formAction;else if(wf(f)!==null)continue}else x=E.action;typeof x=="function"?a[l+1]=x:(a.splice(l,3),l-=3),ag(a)}}}function ug(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return f=E})},focusReset:"manual",scroll:"manual"})}function r(){f!==null&&(f(),f=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),f!==null&&(f(),f=null)}}}function _f(n){this._internalRoot=n}As.prototype.render=_f.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(u(409));var a=r.current,l=ln();Z0(a,l,n,r,null,null)},As.prototype.unmount=_f.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Z0(n.current,2,null,n,null,null),ns(),r[_i]=null}};function As(n){this._internalRoot=n}As.prototype.unstable_scheduleHydration=function(n){if(n){var r=gd();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Ur.length&&r!==0&&r<Ur[a].priority;a++);Ur.splice(a,0,n),a===0&&rg(n)}};var lg=t.version;if(lg!=="19.2.3")throw Error(u(527,lg,"19.2.3"));ie.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(u(188)):(n=Object.keys(n).join(","),Error(u(268,n)));return n=p(r),n=n!==null?y(n):null,n=n===null?null:n.stateNode,n};var y2={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xs.isDisabled&&xs.supportsFiber)try{Ft=xs.inject(y2),yt=xs}catch{}}return wu.createRoot=function(n,r){if(!s(n))throw Error(u(299));var a=!1,l="",f=mp,m=pp,E=gp;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError)),r=K0(n,1,!1,null,null,a,l,null,f,m,E,ug),n[_i]=r.current,lf(n),new _f(r)},wu.hydrateRoot=function(n,r,a){if(!s(n))throw Error(u(299));var l=!1,f="",m=mp,E=pp,x=gp,I=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),r=K0(n,1,!0,r,a??null,l,f,I,m,E,x,ug),r.context=W0(null),a=r.current,l=ln(),l=po(l),f=xr(l),f.callback=null,wr(a,f,l),a=l,r.current.lanes=a,Da(r,a),Bn(r),n[_i]=r.current,lf(n),new As(r)},wu.version="19.2.3",wu}var bg;function N2(){if(bg)return Of.exports;bg=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Of.exports=C2(),Of.exports}var O2=N2();var yg="popstate";function R2(e={}){function t(s,o){let{pathname:c="/",search:h="",hash:d=""}=Ei(s.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),sh("",{pathname:c,search:h,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(s,o){let c=s.document.querySelector("base"),h="";if(c&&c.getAttribute("href")){let d=s.location.href,p=d.indexOf("#");h=p===-1?d:d.slice(0,p)}return h+"#"+(typeof o=="string"?o:ju(o))}function u(s,o){cn(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(o)})`)}return L2(t,i,u,e)}function ut(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function k2(){return Math.random().toString(36).substring(2,10)}function Eg(e,t){return{usr:e.state,key:e.key,idx:t}}function sh(e,t,i=null,u){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ei(t):t,state:i,key:t&&t.key||u||k2()}}function ju({pathname:e="/",search:t="",hash:i=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ei(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substring(i),e=e.substring(0,i));let u=e.indexOf("?");u>=0&&(t.search=e.substring(u),e=e.substring(0,u)),e&&(t.pathname=e)}return t}function L2(e,t,i,u={}){let{window:s=document.defaultView,v5Compat:o=!1}=u,c=s.history,h="POP",d=null,p=y();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function y(){return(c.state||{idx:null}).idx}function b(){h="POP";let R=y(),N=R==null?null:R-p;p=R,d&&d({action:h,location:C.location,delta:N})}function v(R,N){h="PUSH";let D=sh(C.location,R,N);i&&i(D,R),p=y()+1;let F=Eg(D,p),ee=C.createHref(D);try{c.pushState(F,"",ee)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;s.location.assign(ee)}o&&d&&d({action:h,location:C.location,delta:1})}function T(R,N){h="REPLACE";let D=sh(C.location,R,N);i&&i(D,R),p=y();let F=Eg(D,p),ee=C.createHref(D);c.replaceState(F,"",ee),o&&d&&d({action:h,location:C.location,delta:0})}function A(R){return D2(R)}let C={get action(){return h},get location(){return e(s,c)},listen(R){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(yg,b),d=R,()=>{s.removeEventListener(yg,b),d=null}},createHref(R){return t(s,R)},createURL:A,encodeLocation(R){let N=A(R);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:v,replace:T,go(R){return c.go(R)}};return C}function D2(e,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),ut(i,"No window.location.(origin|href) available to create URL");let u=typeof e=="string"?e:ju(e);return u=u.replace(/ $/,"%20"),!t&&u.startsWith("//")&&(u=i+u),new URL(u,i)}function Z1(e,t,i="/"){return I2(e,t,i,!1)}function I2(e,t,i,u){let s=typeof t=="string"?Ei(t):t,o=fr(s.pathname||"/",i);if(o==null)return null;let c=J1(e);M2(c);let h=null;for(let d=0;h==null&&d<c.length;++d){let p=G2(o);h=Y2(c[d],p,u)}return h}function J1(e,t=[],i=[],u="",s=!1){let o=(c,h,d=s,p)=>{let y={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(u)&&d)return;ut(y.relativePath.startsWith(u),`Absolute route path "${y.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(u.length)}let b=cr([u,y.relativePath]),v=i.concat(y);c.children&&c.children.length>0&&(ut(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),J1(c.children,t,v,b,d)),!(c.path==null&&!c.index)&&t.push({path:b,score:j2(b,c.index),routesMeta:v})};return e.forEach((c,h)=>{if(c.path===""||!c.path?.includes("?"))o(c,h);else for(let d of $1(c.path))o(c,h,!0,d)}),t}function $1(e){let t=e.split("/");if(t.length===0)return[];let[i,...u]=t,s=i.endsWith("?"),o=i.replace(/\?$/,"");if(u.length===0)return s?[o,""]:[o];let c=$1(u.join("/")),h=[];return h.push(...c.map(d=>d===""?o:[o,d].join("/"))),s&&h.push(...c),h.map(d=>e.startsWith("/")&&d===""?"/":d)}function M2(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:q2(t.routesMeta.map(u=>u.childrenIndex),i.routesMeta.map(u=>u.childrenIndex)))}var B2=/^:[\w-]+$/,F2=3,U2=2,H2=1,P2=10,z2=-2,Tg=e=>e==="*";function j2(e,t){let i=e.split("/"),u=i.length;return i.some(Tg)&&(u+=z2),t&&(u+=U2),i.filter(s=>!Tg(s)).reduce((s,o)=>s+(B2.test(o)?F2:o===""?H2:P2),u)}function q2(e,t){return e.length===t.length&&e.slice(0,-1).every((u,s)=>u===t[s])?e[e.length-1]-t[t.length-1]:0}function Y2(e,t,i=!1){let{routesMeta:u}=e,s={},o="/",c=[];for(let h=0;h<u.length;++h){let d=u[h],p=h===u.length-1,y=o==="/"?t:t.slice(o.length)||"/",b=Bs({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},y),v=d.route;if(!b&&p&&i&&!u[u.length-1].route.index&&(b=Bs({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},y)),!b)return null;Object.assign(s,b.params),c.push({params:s,pathname:cr([o,b.pathname]),pathnameBase:W2(cr([o,b.pathnameBase])),route:v}),b.pathnameBase!=="/"&&(o=cr([o,b.pathnameBase]))}return c}function Bs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,u]=V2(e.path,e.caseSensitive,e.end),s=t.match(i);if(!s)return null;let o=s[0],c=o.replace(/(.)\/+$/,"$1"),h=s.slice(1);return{params:u.reduce((p,{paramName:y,isOptional:b},v)=>{if(y==="*"){let A=h[v]||"";c=o.slice(0,o.length-A.length).replace(/(.)\/+$/,"$1")}const T=h[v];return b&&!T?p[y]=void 0:p[y]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:c,pattern:e}}function V2(e,t=!1,i=!0){cn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let u=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,d)=>(u.push({paramName:h,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(u.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),u]}function G2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return cn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function fr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,u=e.charAt(i);return u&&u!=="/"?null:e.slice(i)||"/"}var eb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q2=e=>eb.test(e);function X2(e,t="/"){let{pathname:i,search:u="",hash:s=""}=typeof e=="string"?Ei(e):e,o;if(i)if(Q2(i))o=i;else{if(i.includes("//")){let c=i;i=i.replace(/\/\/+/g,"/"),cn(!1,`Pathnames cannot have embedded double slashes - normalizing ${c} -> ${i}`)}i.startsWith("/")?o=vg(i.substring(1),"/"):o=vg(i,t)}else o=t;return{pathname:o,search:Z2(u),hash:J2(s)}}function vg(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function Df(e,t,i,u){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function K2(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function kh(e){let t=K2(e);return t.map((i,u)=>u===t.length-1?i.pathname:i.pathnameBase)}function Lh(e,t,i,u=!1){let s;typeof e=="string"?s=Ei(e):(s={...e},ut(!s.pathname||!s.pathname.includes("?"),Df("?","pathname","search",s)),ut(!s.pathname||!s.pathname.includes("#"),Df("#","pathname","hash",s)),ut(!s.search||!s.search.includes("#"),Df("#","search","hash",s)));let o=e===""||s.pathname==="",c=o?"/":s.pathname,h;if(c==null)h=i;else{let b=t.length-1;if(!u&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),b-=1;s.pathname=v.join("/")}h=b>=0?t[b]:"/"}let d=X2(s,h),p=c&&c!=="/"&&c.endsWith("/"),y=(o||c===".")&&i.endsWith("/");return!d.pathname.endsWith("/")&&(p||y)&&(d.pathname+="/"),d}var cr=e=>e.join("/").replace(/\/\/+/g,"/"),W2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Z2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,J2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,$2=class{constructor(e,t,i,u=!1){this.status=e,this.statusText=t||"",this.internal=u,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function eA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function tA(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var tb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function nb(e,t){let i=e;if(typeof i!="string"||!eb.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let u=i,s=!1;if(tb)try{let o=new URL(window.location.href),c=i.startsWith("//")?new URL(o.protocol+i):new URL(i),h=fr(c.pathname,t);c.origin===o.origin&&h!=null?i=h+c.search+c.hash:s=!0}catch{cn(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:s,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var rb=["POST","PUT","PATCH","DELETE"];new Set(rb);var nA=["GET",...rb];new Set(nA);var xa=H.createContext(null);xa.displayName="DataRouter";var Ks=H.createContext(null);Ks.displayName="DataRouterState";var rA=H.createContext(!1),ib=H.createContext({isTransitioning:!1});ib.displayName="ViewTransition";var iA=H.createContext(new Map);iA.displayName="Fetchers";var aA=H.createContext(null);aA.displayName="Await";var fn=H.createContext(null);fn.displayName="Navigation";var Zu=H.createContext(null);Zu.displayName="Location";var kn=H.createContext({outlet:null,matches:[],isDataRoute:!1});kn.displayName="Route";var Dh=H.createContext(null);Dh.displayName="RouteError";var ab="REACT_ROUTER_ERROR",uA="REDIRECT",lA="ROUTE_ERROR_RESPONSE";function sA(e){if(e.startsWith(`${ab}:${uA}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function oA(e){if(e.startsWith(`${ab}:${lA}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new $2(t.status,t.statusText,t.data)}catch{}}function cA(e,{relative:t}={}){ut(wa(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:u}=H.useContext(fn),{hash:s,pathname:o,search:c}=Ju(e,{relative:t}),h=o;return i!=="/"&&(h=o==="/"?i:cr([i,o])),u.createHref({pathname:h,search:c,hash:s})}function wa(){return H.useContext(Zu)!=null}function dr(){return ut(wa(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(Zu).location}var ub="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function lb(e){H.useContext(fn).static||H.useLayoutEffect(e)}function Ih(){let{isDataRoute:e}=H.useContext(kn);return e?wA():fA()}function fA(){ut(wa(),"useNavigate() may be used only in the context of a <Router> component.");let e=H.useContext(xa),{basename:t,navigator:i}=H.useContext(fn),{matches:u}=H.useContext(kn),{pathname:s}=dr(),o=JSON.stringify(kh(u)),c=H.useRef(!1);return lb(()=>{c.current=!0}),H.useCallback((d,p={})=>{if(cn(c.current,ub),!c.current)return;if(typeof d=="number"){i.go(d);return}let y=Lh(d,JSON.parse(o),s,p.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:cr([t,y.pathname])),(p.replace?i.replace:i.push)(y,p.state,p)},[t,i,o,s,e])}H.createContext(null);function hA(){let{matches:e}=H.useContext(kn),t=e[e.length-1];return t?t.params:{}}function Ju(e,{relative:t}={}){let{matches:i}=H.useContext(kn),{pathname:u}=dr(),s=JSON.stringify(kh(i));return H.useMemo(()=>Lh(e,JSON.parse(s),u,t==="path"),[e,s,u,t])}function dA(e,t){return sb(e,t)}function sb(e,t,i,u,s){ut(wa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=H.useContext(fn),{matches:c}=H.useContext(kn),h=c[c.length-1],d=h?h.params:{},p=h?h.pathname:"/",y=h?h.pathnameBase:"/",b=h&&h.route;{let D=b&&b.path||"";cb(p,!b||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let v=dr(),T;if(t){let D=typeof t=="string"?Ei(t):t;ut(y==="/"||D.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${D.pathname}" was given in the \`location\` prop.`),T=D}else T=v;let A=T.pathname||"/",C=A;if(y!=="/"){let D=y.replace(/^\//,"").split("/");C="/"+A.replace(/^\//,"").split("/").slice(D.length).join("/")}let R=Z1(e,{pathname:C});cn(b||R!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),cn(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=yA(R&&R.map(D=>Object.assign({},D,{params:Object.assign({},d,D.params),pathname:cr([y,o.encodeLocation?o.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?y:cr([y,o.encodeLocation?o.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),c,i,u,s);return t&&N?H.createElement(Zu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},N):N}function mA(){let e=xA(),t=eA(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,u="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:u},o={padding:"2px 4px",backgroundColor:u},c=null;return console.error("Error handled by React Router default ErrorBoundary:",e),c=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:o},"ErrorBoundary")," or"," ",H.createElement("code",{style:o},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},t),i?H.createElement("pre",{style:s},i):null,c)}var pA=H.createElement(mA,null),ob=class extends H.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const i=oA(e.digest);i&&(e=i)}let t=e!==void 0?H.createElement(kn.Provider,{value:this.props.routeContext},H.createElement(Dh.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?H.createElement(gA,{error:e},t):t}};ob.contextType=rA;var If=new WeakMap;function gA({children:e,error:t}){let{basename:i}=H.useContext(fn);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let u=sA(t.digest);if(u){let s=If.get(t);if(s)throw s;let o=nb(u.location,i);if(tb&&!If.get(t))if(o.isExternal||u.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:u.replace}));throw If.set(t,c),c}return H.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return e}function bA({routeContext:e,match:t,children:i}){let u=H.useContext(xa);return u&&u.static&&u.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=t.route.id),H.createElement(kn.Provider,{value:e},i)}function yA(e,t=[],i=null,u=null,s=null){if(e==null){if(!i)return null;if(i.errors)e=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let o=e,c=i?.errors;if(c!=null){let y=o.findIndex(b=>b.route.id&&c?.[b.route.id]!==void 0);ut(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,y+1))}let h=!1,d=-1;if(i)for(let y=0;y<o.length;y++){let b=o[y];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(d=y),b.route.id){let{loaderData:v,errors:T}=i,A=b.route.loader&&!v.hasOwnProperty(b.route.id)&&(!T||T[b.route.id]===void 0);if(b.route.lazy||A){h=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}let p=i&&u?(y,b)=>{u(y,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:tA(i.matches),errorInfo:b})}:void 0;return o.reduceRight((y,b,v)=>{let T,A=!1,C=null,R=null;i&&(T=c&&b.route.id?c[b.route.id]:void 0,C=b.route.errorElement||pA,h&&(d<0&&v===0?(cb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,R=null):d===v&&(A=!0,R=b.route.hydrateFallbackElement||null)));let N=t.concat(o.slice(0,v+1)),D=()=>{let F;return T?F=C:A?F=R:b.route.Component?F=H.createElement(b.route.Component,null):b.route.element?F=b.route.element:F=y,H.createElement(bA,{match:b,routeContext:{outlet:y,matches:N,isDataRoute:i!=null},children:F})};return i&&(b.route.ErrorBoundary||b.route.errorElement||v===0)?H.createElement(ob,{location:i.location,revalidation:i.revalidation,component:C,error:T,children:D(),routeContext:{outlet:null,matches:N,isDataRoute:!0},onError:p}):D()},null)}function Mh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function EA(e){let t=H.useContext(xa);return ut(t,Mh(e)),t}function TA(e){let t=H.useContext(Ks);return ut(t,Mh(e)),t}function vA(e){let t=H.useContext(kn);return ut(t,Mh(e)),t}function Bh(e){let t=vA(e),i=t.matches[t.matches.length-1];return ut(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function AA(){return Bh("useRouteId")}function xA(){let e=H.useContext(Dh),t=TA("useRouteError"),i=Bh("useRouteError");return e!==void 0?e:t.errors?.[i]}function wA(){let{router:e}=EA("useNavigate"),t=Bh("useNavigate"),i=H.useRef(!1);return lb(()=>{i.current=!0}),H.useCallback(async(s,o={})=>{cn(i.current,ub),i.current&&(typeof s=="number"?await e.navigate(s):await e.navigate(s,{fromRouteId:t,...o}))},[e,t])}var Ag={};function cb(e,t,i){!t&&!Ag[e]&&(Ag[e]=!0,cn(!1,i))}H.memo(SA);function SA({routes:e,future:t,state:i,onError:u}){return sb(e,void 0,i,u,t)}function _A({to:e,replace:t,state:i,relative:u}){ut(wa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=H.useContext(fn);cn(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=H.useContext(kn),{pathname:c}=dr(),h=Ih(),d=Lh(e,kh(o),c,u==="path"),p=JSON.stringify(d);return H.useEffect(()=>{h(JSON.parse(p),{replace:t,state:i,relative:u})},[h,p,u,t,i]),null}function Rs(e){ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function CA({basename:e="/",children:t=null,location:i,navigationType:u="POP",navigator:s,static:o=!1,unstable_useTransitions:c}){ut(!wa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=e.replace(/^\/*/,"/"),d=H.useMemo(()=>({basename:h,navigator:s,static:o,unstable_useTransitions:c,future:{}}),[h,s,o,c]);typeof i=="string"&&(i=Ei(i));let{pathname:p="/",search:y="",hash:b="",state:v=null,key:T="default"}=i,A=H.useMemo(()=>{let C=fr(p,h);return C==null?null:{location:{pathname:C,search:y,hash:b,state:v,key:T},navigationType:u}},[h,p,y,b,v,T,u]);return cn(A!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:H.createElement(fn.Provider,{value:d},H.createElement(Zu.Provider,{children:t,value:A}))}function NA({children:e,location:t}){return dA(oh(e),t)}function oh(e,t=[]){let i=[];return H.Children.forEach(e,(u,s)=>{if(!H.isValidElement(u))return;let o=[...t,s];if(u.type===H.Fragment){i.push.apply(i,oh(u.props.children,o));return}ut(u.type===Rs,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ut(!u.props.index||!u.props.children,"An index route cannot have child routes.");let c={id:u.props.id||o.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(c.children=oh(u.props.children,o)),i.push(c)}),i}var ks="get",Ls="application/x-www-form-urlencoded";function Ws(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function OA(e){return Ws(e)&&e.tagName.toLowerCase()==="button"}function RA(e){return Ws(e)&&e.tagName.toLowerCase()==="form"}function kA(e){return Ws(e)&&e.tagName.toLowerCase()==="input"}function LA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function DA(e,t){return e.button===0&&(!t||t==="_self")&&!LA(e)}var ws=null;function IA(){if(ws===null)try{new FormData(document.createElement("form"),0),ws=!1}catch{ws=!0}return ws}var MA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mf(e){return e!=null&&!MA.has(e)?(cn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ls}"`),null):e}function BA(e,t){let i,u,s,o,c;if(RA(e)){let h=e.getAttribute("action");u=h?fr(h,t):null,i=e.getAttribute("method")||ks,s=Mf(e.getAttribute("enctype"))||Ls,o=new FormData(e)}else if(OA(e)||kA(e)&&(e.type==="submit"||e.type==="image")){let h=e.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=e.getAttribute("formaction")||h.getAttribute("action");if(u=d?fr(d,t):null,i=e.getAttribute("formmethod")||h.getAttribute("method")||ks,s=Mf(e.getAttribute("formenctype"))||Mf(h.getAttribute("enctype"))||Ls,o=new FormData(h,e),!IA()){let{name:p,type:y,value:b}=e;if(y==="image"){let v=p?`${p}.`:"";o.append(`${v}x`,"0"),o.append(`${v}y`,"0")}else p&&o.append(p,b)}}else{if(Ws(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=ks,u=null,s=Ls,c=e}return o&&s==="text/plain"&&(c=o,o=void 0),{action:u,method:i.toLowerCase(),encType:s,formData:o,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Fh(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function FA(e,t,i){let u=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return u.pathname==="/"?u.pathname=`_root.${i}`:t&&fr(u.pathname,t)==="/"?u.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${i}`,u}async function UA(e,t){if(e.id in t)return t[e.id];try{let i=await import(e.module);return t[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function HA(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function PA(e,t,i){let u=await Promise.all(e.map(async s=>{let o=t.routes[s.route.id];if(o){let c=await UA(o,i);return c.links?c.links():[]}return[]}));return YA(u.flat(1).filter(HA).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function xg(e,t,i,u,s,o){let c=(d,p)=>i[p]?d.route.id!==i[p].route.id:!0,h=(d,p)=>i[p].pathname!==d.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==d.params["*"];return o==="assets"?t.filter((d,p)=>c(d,p)||h(d,p)):o==="data"?t.filter((d,p)=>{let y=u.routes[d.route.id];if(!y||!y.hasLoader)return!1;if(c(d,p)||h(d,p))return!0;if(d.route.shouldRevalidate){let b=d.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function zA(e,t,{includeHydrateFallback:i}={}){return jA(e.map(u=>{let s=t.routes[u.route.id];if(!s)return[];let o=[s.module];return s.clientActionModule&&(o=o.concat(s.clientActionModule)),s.clientLoaderModule&&(o=o.concat(s.clientLoaderModule)),i&&s.hydrateFallbackModule&&(o=o.concat(s.hydrateFallbackModule)),s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function jA(e){return[...new Set(e)]}function qA(e){let t={},i=Object.keys(e).sort();for(let u of i)t[u]=e[u];return t}function YA(e,t){let i=new Set;return new Set(t),e.reduce((u,s)=>{let o=JSON.stringify(qA(s));return i.has(o)||(i.add(o),u.push({key:o,link:s})),u},[])}function fb(){let e=H.useContext(xa);return Fh(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function VA(){let e=H.useContext(Ks);return Fh(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Uh=H.createContext(void 0);Uh.displayName="FrameworkContext";function hb(){let e=H.useContext(Uh);return Fh(e,"You must render this element inside a <HydratedRouter> element"),e}function GA(e,t){let i=H.useContext(Uh),[u,s]=H.useState(!1),[o,c]=H.useState(!1),{onFocus:h,onBlur:d,onMouseEnter:p,onMouseLeave:y,onTouchStart:b}=t,v=H.useRef(null);H.useEffect(()=>{if(e==="render"&&c(!0),e==="viewport"){let C=N=>{N.forEach(D=>{c(D.isIntersecting)})},R=new IntersectionObserver(C,{threshold:.5});return v.current&&R.observe(v.current),()=>{R.disconnect()}}},[e]),H.useEffect(()=>{if(u){let C=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(C)}}},[u]);let T=()=>{s(!0)},A=()=>{s(!1),c(!1)};return i?e!=="intent"?[o,v,{}]:[o,v,{onFocus:Su(h,T),onBlur:Su(d,A),onMouseEnter:Su(p,T),onMouseLeave:Su(y,A),onTouchStart:Su(b,T)}]:[!1,v,{}]}function Su(e,t){return i=>{e&&e(i),i.defaultPrevented||t(i)}}function QA({page:e,...t}){let{router:i}=fb(),u=H.useMemo(()=>Z1(i.routes,e,i.basename),[i.routes,e,i.basename]);return u?H.createElement(KA,{page:e,matches:u,...t}):null}function XA(e){let{manifest:t,routeModules:i}=hb(),[u,s]=H.useState([]);return H.useEffect(()=>{let o=!1;return PA(e,t,i).then(c=>{o||s(c)}),()=>{o=!0}},[e,t,i]),u}function KA({page:e,matches:t,...i}){let u=dr(),{manifest:s,routeModules:o}=hb(),{basename:c}=fb(),{loaderData:h,matches:d}=VA(),p=H.useMemo(()=>xg(e,t,d,s,u,"data"),[e,t,d,s,u]),y=H.useMemo(()=>xg(e,t,d,s,u,"assets"),[e,t,d,s,u]),b=H.useMemo(()=>{if(e===u.pathname+u.search+u.hash)return[];let A=new Set,C=!1;if(t.forEach(N=>{let D=s.routes[N.route.id];!D||!D.hasLoader||(!p.some(F=>F.route.id===N.route.id)&&N.route.id in h&&o[N.route.id]?.shouldRevalidate||D.hasClientLoader?C=!0:A.add(N.route.id))}),A.size===0)return[];let R=FA(e,c,"data");return C&&A.size>0&&R.searchParams.set("_routes",t.filter(N=>A.has(N.route.id)).map(N=>N.route.id).join(",")),[R.pathname+R.search]},[c,h,u,s,p,t,e,o]),v=H.useMemo(()=>zA(y,s),[y,s]),T=XA(y);return H.createElement(H.Fragment,null,b.map(A=>H.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...i})),v.map(A=>H.createElement("link",{key:A,rel:"modulepreload",href:A,...i})),T.map(({key:A,link:C})=>H.createElement("link",{key:A,nonce:i.nonce,...C})))}function WA(...e){return t=>{e.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var ZA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ZA&&(window.__reactRouterVersion="7.11.0")}catch{}function JA({basename:e,children:t,unstable_useTransitions:i,window:u}){let s=H.useRef();s.current==null&&(s.current=R2({window:u,v5Compat:!0}));let o=s.current,[c,h]=H.useState({action:o.action,location:o.location}),d=H.useCallback(p=>{i===!1?h(p):H.startTransition(()=>h(p))},[i]);return H.useLayoutEffect(()=>o.listen(d),[o,d]),H.createElement(CA,{basename:e,children:t,location:c.location,navigationType:c.action,navigator:o,unstable_useTransitions:i})}var db=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fs=H.forwardRef(function({onClick:t,discover:i="render",prefetch:u="none",relative:s,reloadDocument:o,replace:c,state:h,target:d,to:p,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:v,...T},A){let{basename:C,unstable_useTransitions:R}=H.useContext(fn),N=typeof p=="string"&&db.test(p),D=nb(p,C);p=D.to;let F=cA(p,{relative:s}),[ee,ne,G]=GA(u,T),se=nx(p,{replace:c,state:h,target:d,preventScrollReset:y,relative:s,viewTransition:b,unstable_defaultShouldRevalidate:v,unstable_useTransitions:R});function ye(Y){t&&t(Y),Y.defaultPrevented||se(Y)}let de=H.createElement("a",{...T,...G,href:D.absoluteURL||F,onClick:D.isExternal||o?t:ye,ref:WA(A,ne),target:d,"data-discover":!N&&i==="render"?"true":void 0});return ee&&!N?H.createElement(H.Fragment,null,de,H.createElement(QA,{page:F})):de});Fs.displayName="Link";var $A=H.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:u="",end:s=!1,style:o,to:c,viewTransition:h,children:d,...p},y){let b=Ju(c,{relative:p.relative}),v=dr(),T=H.useContext(Ks),{navigator:A,basename:C}=H.useContext(fn),R=T!=null&&lx(b)&&h===!0,N=A.encodeLocation?A.encodeLocation(b).pathname:b.pathname,D=v.pathname,F=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;i||(D=D.toLowerCase(),F=F?F.toLowerCase():null,N=N.toLowerCase()),F&&C&&(F=fr(F,C)||F);const ee=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let ne=D===N||!s&&D.startsWith(N)&&D.charAt(ee)==="/",G=F!=null&&(F===N||!s&&F.startsWith(N)&&F.charAt(N.length)==="/"),se={isActive:ne,isPending:G,isTransitioning:R},ye=ne?t:void 0,de;typeof u=="function"?de=u(se):de=[u,ne?"active":null,G?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let Y=typeof o=="function"?o(se):o;return H.createElement(Fs,{...p,"aria-current":ye,className:de,ref:y,style:Y,to:c,viewTransition:h},typeof d=="function"?d(se):d)});$A.displayName="NavLink";var ex=H.forwardRef(({discover:e="render",fetcherKey:t,navigate:i,reloadDocument:u,replace:s,state:o,method:c=ks,action:h,onSubmit:d,relative:p,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:v,...T},A)=>{let{unstable_useTransitions:C}=H.useContext(fn),R=ax(),N=ux(h,{relative:p}),D=c.toLowerCase()==="get"?"get":"post",F=typeof h=="string"&&db.test(h),ee=ne=>{if(d&&d(ne),ne.defaultPrevented)return;ne.preventDefault();let G=ne.nativeEvent.submitter,se=G?.getAttribute("formmethod")||c,ye=()=>R(G||ne.currentTarget,{fetcherKey:t,method:se,navigate:i,replace:s,state:o,relative:p,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:v});C&&i!==!1?H.startTransition(()=>ye()):ye()};return H.createElement("form",{ref:A,method:D,action:N,onSubmit:u?d:ee,...T,"data-discover":!F&&e==="render"?"true":void 0})});ex.displayName="Form";function tx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mb(e){let t=H.useContext(xa);return ut(t,tx(e)),t}function nx(e,{target:t,replace:i,state:u,preventScrollReset:s,relative:o,viewTransition:c,unstable_defaultShouldRevalidate:h,unstable_useTransitions:d}={}){let p=Ih(),y=dr(),b=Ju(e,{relative:o});return H.useCallback(v=>{if(DA(v,t)){v.preventDefault();let T=i!==void 0?i:ju(y)===ju(b),A=()=>p(e,{replace:T,state:u,preventScrollReset:s,relative:o,viewTransition:c,unstable_defaultShouldRevalidate:h});d?H.startTransition(()=>A()):A()}},[y,p,b,i,u,t,e,s,o,c,h,d])}var rx=0,ix=()=>`__${String(++rx)}__`;function ax(){let{router:e}=mb("useSubmit"),{basename:t}=H.useContext(fn),i=AA(),u=e.fetch,s=e.navigate;return H.useCallback(async(o,c={})=>{let{action:h,method:d,encType:p,formData:y,body:b}=BA(o,t);if(c.navigate===!1){let v=c.fetcherKey||ix();await u(v,i,c.action||h,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:y,body:b,formMethod:c.method||d,formEncType:c.encType||p,flushSync:c.flushSync})}else await s(c.action||h,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:y,body:b,formMethod:c.method||d,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:i,flushSync:c.flushSync,viewTransition:c.viewTransition})},[u,s,t,i])}function ux(e,{relative:t}={}){let{basename:i}=H.useContext(fn),u=H.useContext(kn);ut(u,"useFormAction must be used inside a RouteContext");let[s]=u.matches.slice(-1),o={...Ju(e||".",{relative:t})},c=dr();if(e==null){o.search=c.search;let h=new URLSearchParams(o.search),d=h.getAll("index");if(d.some(y=>y==="")){h.delete("index"),d.filter(b=>b).forEach(b=>h.append("index",b));let y=h.toString();o.search=y?`?${y}`:""}}return(!e||e===".")&&s.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(o.pathname=o.pathname==="/"?i:cr([i,o.pathname])),ju(o)}function lx(e,{relative:t}={}){let i=H.useContext(ib);ut(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=mb("useViewTransitionState"),s=Ju(e,{relative:t});if(!i.isTransitioning)return!1;let o=fr(i.currentLocation.pathname,u)||i.currentLocation.pathname,c=fr(i.nextLocation.pathname,u)||i.nextLocation.pathname;return Bs(s.pathname,c)!=null||Bs(s.pathname,o)!=null}function wg(e,t){const i=String(e);if(typeof t!="string")throw new TypeError("Expected character");let u=0,s=i.indexOf(t);for(;s!==-1;)u++,s=i.indexOf(t,s+t.length);return u}const Ht=Gr(/[A-Za-z]/),Lt=Gr(/[\dA-Za-z]/),sx=Gr(/[#-'*+\--9=?A-Z^-~]/);function Us(e){return e!==null&&(e<32||e===127)}const ch=Gr(/\d/),ox=Gr(/[\dA-Fa-f]/),cx=Gr(/[!-/:-@[-`{-~]/);function Ae(e){return e!==null&&e<-2}function $e(e){return e!==null&&(e<0||e===32)}function Me(e){return e===-2||e===-1||e===32}const Zs=Gr(new RegExp("\\p{P}|\\p{S}","u")),yi=Gr(/\s/);function Gr(e){return t;function t(i){return i!==null&&i>-1&&e.test(String.fromCharCode(i))}}function fx(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}const Js=(function(e){if(e==null)return px;if(typeof e=="function")return $s(e);if(typeof e=="object")return Array.isArray(e)?hx(e):dx(e);if(typeof e=="string")return mx(e);throw new Error("Expected function, string, or object as test")});function hx(e){const t=[];let i=-1;for(;++i<e.length;)t[i]=Js(e[i]);return $s(u);function u(...s){let o=-1;for(;++o<t.length;)if(t[o].apply(this,s))return!0;return!1}}function dx(e){const t=e;return $s(i);function i(u){const s=u;let o;for(o in e)if(s[o]!==t[o])return!1;return!0}}function mx(e){return $s(t);function t(i){return i&&i.type===e}}function $s(e){return t;function t(i,u,s){return!!(gx(i)&&e.call(this,i,typeof u=="number"?u:void 0,s||void 0))}}function px(){return!0}function gx(e){return e!==null&&typeof e=="object"&&"type"in e}const pb=[],bx=!0,fh=!1,yx="skip";function gb(e,t,i,u){let s;typeof t=="function"&&typeof i!="function"?(u=i,i=t):s=t;const o=Js(s),c=u?-1:1;h(e,void 0,[])();function h(d,p,y){const b=d&&typeof d=="object"?d:{};if(typeof b.type=="string"){const T=typeof b.tagName=="string"?b.tagName:typeof b.name=="string"?b.name:void 0;Object.defineProperty(v,"name",{value:"node ("+(d.type+(T?"<"+T+">":""))+")"})}return v;function v(){let T=pb,A,C,R;if((!t||o(d,p,y[y.length-1]||void 0))&&(T=Ex(i(d,y)),T[0]===fh))return T;if("children"in d&&d.children){const N=d;if(N.children&&T[0]!==yx)for(C=(u?N.children.length:-1)+c,R=y.concat(N);C>-1&&C<N.children.length;){const D=N.children[C];if(A=h(D,C,R)(),A[0]===fh)return A;C=typeof A[1]=="number"?A[1]:C+c}}return T}}}function Ex(e){return Array.isArray(e)?e:typeof e=="number"?[bx,e]:e==null?pb:[e]}function Tx(e,t,i){const s=Js((i||{}).ignore||[]),o=vx(t);let c=-1;for(;++c<o.length;)gb(e,"text",h);function h(p,y){let b=-1,v;for(;++b<y.length;){const T=y[b],A=v?v.children:void 0;if(s(T,A?A.indexOf(T):void 0,v))return;v=T}if(v)return d(p,y)}function d(p,y){const b=y[y.length-1],v=o[c][0],T=o[c][1];let A=0;const R=b.children.indexOf(p);let N=!1,D=[];v.lastIndex=0;let F=v.exec(p.value);for(;F;){const ee=F.index,ne={index:F.index,input:F.input,stack:[...y,p]};let G=T(...F,ne);if(typeof G=="string"&&(G=G.length>0?{type:"text",value:G}:void 0),G===!1?v.lastIndex=ee+1:(A!==ee&&D.push({type:"text",value:p.value.slice(A,ee)}),Array.isArray(G)?D.push(...G):G&&D.push(G),A=ee+F[0].length,N=!0),!v.global)break;F=v.exec(p.value)}return N?(A<p.value.length&&D.push({type:"text",value:p.value.slice(A)}),b.children.splice(R,1,...D)):D=[p],R+D.length}}function vx(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const i=!e[0]||Array.isArray(e[0])?e:[e];let u=-1;for(;++u<i.length;){const s=i[u];t.push([Ax(s[0]),xx(s[1])])}return t}function Ax(e){return typeof e=="string"?new RegExp(fx(e),"g"):e}function xx(e){return typeof e=="function"?e:function(){return e}}const Bf="phrasing",Ff=["autolink","link","image","label"];function wx(){return{transforms:[kx],enter:{literalAutolink:_x,literalAutolinkEmail:Uf,literalAutolinkHttp:Uf,literalAutolinkWww:Uf},exit:{literalAutolink:Rx,literalAutolinkEmail:Ox,literalAutolinkHttp:Cx,literalAutolinkWww:Nx}}}function Sx(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Bf,notInConstruct:Ff},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Bf,notInConstruct:Ff},{character:":",before:"[ps]",after:"\\/",inConstruct:Bf,notInConstruct:Ff}]}}function _x(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Uf(e){this.config.enter.autolinkProtocol.call(this,e)}function Cx(e){this.config.exit.autolinkProtocol.call(this,e)}function Nx(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function Ox(e){this.config.exit.autolinkEmail.call(this,e)}function Rx(e){this.exit(e)}function kx(e){Tx(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Lx],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Dx]],{ignore:["link","linkReference"]})}function Lx(e,t,i,u,s){let o="";if(!bb(s)||(/^w/i.test(t)&&(i=t+i,t="",o="http://"),!Ix(i)))return!1;const c=Mx(i+u);if(!c[0])return!1;const h={type:"link",title:null,url:o+t+c[0],children:[{type:"text",value:t+c[0]}]};return c[1]?[h,{type:"text",value:c[1]}]:h}function Dx(e,t,i,u){return!bb(u,!0)||/[-\d_]$/.test(i)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+i,children:[{type:"text",value:t+"@"+i}]}}function Ix(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Mx(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let i=t[0],u=i.indexOf(")");const s=wg(e,"(");let o=wg(e,")");for(;u!==-1&&s>o;)e+=i.slice(0,u+1),i=i.slice(u+1),u=i.indexOf(")"),o++;return[e,i]}function bb(e,t){const i=e.input.charCodeAt(e.index-1);return(e.index===0||yi(i)||Zs(i))&&(!t||i!==47)}function On(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}yb.peek=Yx;function Bx(){this.buffer()}function Fx(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function Ux(){this.buffer()}function Hx(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function Px(e){const t=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=On(this.sliceSerialize(e)).toLowerCase(),i.label=t}function zx(e){this.exit(e)}function jx(e){const t=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=On(this.sliceSerialize(e)).toLowerCase(),i.label=t}function qx(e){this.exit(e)}function Yx(){return"["}function yb(e,t,i,u){const s=i.createTracker(u);let o=s.move("[^");const c=i.enter("footnoteReference"),h=i.enter("reference");return o+=s.move(i.safe(i.associationId(e),{after:"]",before:o})),h(),c(),o+=s.move("]"),o}function Vx(){return{enter:{gfmFootnoteCallString:Bx,gfmFootnoteCall:Fx,gfmFootnoteDefinitionLabelString:Ux,gfmFootnoteDefinition:Hx},exit:{gfmFootnoteCallString:Px,gfmFootnoteCall:zx,gfmFootnoteDefinitionLabelString:jx,gfmFootnoteDefinition:qx}}}function Gx(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:i,footnoteReference:yb},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function i(u,s,o,c){const h=o.createTracker(c);let d=h.move("[^");const p=o.enter("footnoteDefinition"),y=o.enter("label");return d+=h.move(o.safe(o.associationId(u),{before:d,after:"]"})),y(),d+=h.move("]:"),u.children&&u.children.length>0&&(h.shift(4),d+=h.move((t?`
`:" ")+o.indentLines(o.containerFlow(u,h.current()),t?Eb:Qx))),p(),d}}function Qx(e,t,i){return t===0?e:Eb(e,t,i)}function Eb(e,t,i){return(i?"":"    ")+e}const Xx=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Tb.peek=$x;function Kx(){return{canContainEols:["delete"],enter:{strikethrough:Zx},exit:{strikethrough:Jx}}}function Wx(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Xx}],handlers:{delete:Tb}}}function Zx(e){this.enter({type:"delete",children:[]},e)}function Jx(e){this.exit(e)}function Tb(e,t,i,u){const s=i.createTracker(u),o=i.enter("strikethrough");let c=s.move("~~");return c+=i.containerPhrasing(e,{...s.current(),before:c,after:"~"}),c+=s.move("~~"),o(),c}function $x(){return"~"}function ew(e){return e.length}function tw(e,t){const i=t||{},u=(i.align||[]).concat(),s=i.stringLength||ew,o=[],c=[],h=[],d=[];let p=0,y=-1;for(;++y<e.length;){const C=[],R=[];let N=-1;for(e[y].length>p&&(p=e[y].length);++N<e[y].length;){const D=nw(e[y][N]);if(i.alignDelimiters!==!1){const F=s(D);R[N]=F,(d[N]===void 0||F>d[N])&&(d[N]=F)}C.push(D)}c[y]=C,h[y]=R}let b=-1;if(typeof u=="object"&&"length"in u)for(;++b<p;)o[b]=Sg(u[b]);else{const C=Sg(u);for(;++b<p;)o[b]=C}b=-1;const v=[],T=[];for(;++b<p;){const C=o[b];let R="",N="";C===99?(R=":",N=":"):C===108?R=":":C===114&&(N=":");let D=i.alignDelimiters===!1?1:Math.max(1,d[b]-R.length-N.length);const F=R+"-".repeat(D)+N;i.alignDelimiters!==!1&&(D=R.length+D+N.length,D>d[b]&&(d[b]=D),T[b]=D),v[b]=F}c.splice(1,0,v),h.splice(1,0,T),y=-1;const A=[];for(;++y<c.length;){const C=c[y],R=h[y];b=-1;const N=[];for(;++b<p;){const D=C[b]||"";let F="",ee="";if(i.alignDelimiters!==!1){const ne=d[b]-(R[b]||0),G=o[b];G===114?F=" ".repeat(ne):G===99?ne%2?(F=" ".repeat(ne/2+.5),ee=" ".repeat(ne/2-.5)):(F=" ".repeat(ne/2),ee=F):ee=" ".repeat(ne)}i.delimiterStart!==!1&&!b&&N.push("|"),i.padding!==!1&&!(i.alignDelimiters===!1&&D==="")&&(i.delimiterStart!==!1||b)&&N.push(" "),i.alignDelimiters!==!1&&N.push(F),N.push(D),i.alignDelimiters!==!1&&N.push(ee),i.padding!==!1&&N.push(" "),(i.delimiterEnd!==!1||b!==p-1)&&N.push("|")}A.push(i.delimiterEnd===!1?N.join("").replace(/ +$/,""):N.join(""))}return A.join(`
`)}function nw(e){return e==null?"":String(e)}function Sg(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}const _g={}.hasOwnProperty;function vb(e,t){const i=t||{};function u(s,...o){let c=u.invalid;const h=u.handlers;if(s&&_g.call(s,e)){const d=String(s[e]);c=_g.call(h,d)?h[d]:u.unknown}if(c)return c.call(this,s,...o)}return u.handlers=i.handlers||{},u.invalid=i.invalid,u.unknown=i.unknown,u}function rw(e,t,i,u){const s=i.enter("blockquote"),o=i.createTracker(u);o.move("> "),o.shift(2);const c=i.indentLines(i.containerFlow(e,o.current()),iw);return s(),c}function iw(e,t,i){return">"+(i?"":" ")+e}function aw(e,t){return Cg(e,t.inConstruct,!0)&&!Cg(e,t.notInConstruct,!1)}function Cg(e,t,i){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return i;let u=-1;for(;++u<t.length;)if(e.includes(t[u]))return!0;return!1}function Ng(e,t,i,u){let s=-1;for(;++s<i.unsafe.length;)if(i.unsafe[s].character===`
`&&aw(i.stack,i.unsafe[s]))return/[ \t]/.test(u.before)?"":" ";return`\\
`}function uw(e,t){const i=String(e);let u=i.indexOf(t),s=u,o=0,c=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;u!==-1;)u===s?++o>c&&(c=o):o=1,s=u+t.length,u=i.indexOf(t,s);return c}function lw(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function sw(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function ow(e,t,i,u){const s=sw(i),o=e.value||"",c=s==="`"?"GraveAccent":"Tilde";if(lw(e,i)){const b=i.enter("codeIndented"),v=i.indentLines(o,cw);return b(),v}const h=i.createTracker(u),d=s.repeat(Math.max(uw(o,s)+1,3)),p=i.enter("codeFenced");let y=h.move(d);if(e.lang){const b=i.enter(`codeFencedLang${c}`);y+=h.move(i.safe(e.lang,{before:y,after:" ",encode:["`"],...h.current()})),b()}if(e.lang&&e.meta){const b=i.enter(`codeFencedMeta${c}`);y+=h.move(" "),y+=h.move(i.safe(e.meta,{before:y,after:`
`,encode:["`"],...h.current()})),b()}return y+=h.move(`
`),o&&(y+=h.move(o+`
`)),y+=h.move(d),p(),y}function cw(e,t,i){return(i?"":"    ")+e}function Hh(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function fw(e,t,i,u){const s=Hh(i),o=s==='"'?"Quote":"Apostrophe",c=i.enter("definition");let h=i.enter("label");const d=i.createTracker(u);let p=d.move("[");return p+=d.move(i.safe(i.associationId(e),{before:p,after:"]",...d.current()})),p+=d.move("]: "),h(),!e.url||/[\0- \u007F]/.test(e.url)?(h=i.enter("destinationLiteral"),p+=d.move("<"),p+=d.move(i.safe(e.url,{before:p,after:">",...d.current()})),p+=d.move(">")):(h=i.enter("destinationRaw"),p+=d.move(i.safe(e.url,{before:p,after:e.title?" ":`
`,...d.current()}))),h(),e.title&&(h=i.enter(`title${o}`),p+=d.move(" "+s),p+=d.move(i.safe(e.title,{before:p,after:s,...d.current()})),p+=d.move(s),h()),c(),p}function hw(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function qu(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Ea(e){if(e===null||$e(e)||yi(e))return 1;if(Zs(e))return 2}function Hs(e,t,i){const u=Ea(e),s=Ea(t);return u===void 0?s===void 0?i==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:u===1?s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Ab.peek=dw;function Ab(e,t,i,u){const s=hw(i),o=i.enter("emphasis"),c=i.createTracker(u),h=c.move(s);let d=c.move(i.containerPhrasing(e,{after:s,before:h,...c.current()}));const p=d.charCodeAt(0),y=Hs(u.before.charCodeAt(u.before.length-1),p,s);y.inside&&(d=qu(p)+d.slice(1));const b=d.charCodeAt(d.length-1),v=Hs(u.after.charCodeAt(0),b,s);v.inside&&(d=d.slice(0,-1)+qu(b));const T=c.move(s);return o(),i.attentionEncodeSurroundingInfo={after:v.outside,before:y.outside},h+d+T}function dw(e,t,i){return i.options.emphasis||"*"}function eo(e,t,i,u){let s,o,c;typeof t=="function"&&typeof i!="function"?(o=void 0,c=t,s=i):(o=t,c=i,s=u),gb(e,o,h,s);function h(d,p){const y=p[p.length-1],b=y?y.children.indexOf(d):void 0;return c(d,b,y)}}const mw={};function Ph(e,t){const i=mw,u=typeof i.includeImageAlt=="boolean"?i.includeImageAlt:!0,s=typeof i.includeHtml=="boolean"?i.includeHtml:!0;return xb(e,u,s)}function xb(e,t,i){if(pw(e)){if("value"in e)return e.type==="html"&&!i?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Og(e.children,t,i)}return Array.isArray(e)?Og(e,t,i):""}function Og(e,t,i){const u=[];let s=-1;for(;++s<e.length;)u[s]=xb(e[s],t,i);return u.join("")}function pw(e){return!!(e&&typeof e=="object")}function gw(e,t){let i=!1;return eo(e,function(u){if("value"in u&&/\r?\n|\r/.test(u.value)||u.type==="break")return i=!0,fh}),!!((!e.depth||e.depth<3)&&Ph(e)&&(t.options.setext||i))}function bw(e,t,i,u){const s=Math.max(Math.min(6,e.depth||1),1),o=i.createTracker(u);if(gw(e,i)){const y=i.enter("headingSetext"),b=i.enter("phrasing"),v=i.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return b(),y(),v+`
`+(s===1?"=":"-").repeat(v.length-(Math.max(v.lastIndexOf("\r"),v.lastIndexOf(`
`))+1))}const c="#".repeat(s),h=i.enter("headingAtx"),d=i.enter("phrasing");o.move(c+" ");let p=i.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(p)&&(p=qu(p.charCodeAt(0))+p.slice(1)),p=p?c+" "+p:c,i.options.closeAtx&&(p+=" "+c),d(),h(),p}wb.peek=yw;function wb(e){return e.value||""}function yw(){return"<"}Sb.peek=Ew;function Sb(e,t,i,u){const s=Hh(i),o=s==='"'?"Quote":"Apostrophe",c=i.enter("image");let h=i.enter("label");const d=i.createTracker(u);let p=d.move("![");return p+=d.move(i.safe(e.alt,{before:p,after:"]",...d.current()})),p+=d.move("]("),h(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(h=i.enter("destinationLiteral"),p+=d.move("<"),p+=d.move(i.safe(e.url,{before:p,after:">",...d.current()})),p+=d.move(">")):(h=i.enter("destinationRaw"),p+=d.move(i.safe(e.url,{before:p,after:e.title?" ":")",...d.current()}))),h(),e.title&&(h=i.enter(`title${o}`),p+=d.move(" "+s),p+=d.move(i.safe(e.title,{before:p,after:s,...d.current()})),p+=d.move(s),h()),p+=d.move(")"),c(),p}function Ew(){return"!"}_b.peek=Tw;function _b(e,t,i,u){const s=e.referenceType,o=i.enter("imageReference");let c=i.enter("label");const h=i.createTracker(u);let d=h.move("![");const p=i.safe(e.alt,{before:d,after:"]",...h.current()});d+=h.move(p+"]["),c();const y=i.stack;i.stack=[],c=i.enter("reference");const b=i.safe(i.associationId(e),{before:d,after:"]",...h.current()});return c(),i.stack=y,o(),s==="full"||!p||p!==b?d+=h.move(b+"]"):s==="shortcut"?d=d.slice(0,-1):d+=h.move("]"),d}function Tw(){return"!"}Cb.peek=vw;function Cb(e,t,i){let u=e.value||"",s="`",o=-1;for(;new RegExp("(^|[^`])"+s+"([^`]|$)").test(u);)s+="`";for(/[^ \r\n]/.test(u)&&(/^[ \r\n]/.test(u)&&/[ \r\n]$/.test(u)||/^`|`$/.test(u))&&(u=" "+u+" ");++o<i.unsafe.length;){const c=i.unsafe[o],h=i.compilePattern(c);let d;if(c.atBreak)for(;d=h.exec(u);){let p=d.index;u.charCodeAt(p)===10&&u.charCodeAt(p-1)===13&&p--,u=u.slice(0,p)+" "+u.slice(d.index+1)}}return s+u+s}function vw(){return"`"}function Nb(e,t){const i=Ph(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(i===e.url||"mailto:"+i===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Ob.peek=Aw;function Ob(e,t,i,u){const s=Hh(i),o=s==='"'?"Quote":"Apostrophe",c=i.createTracker(u);let h,d;if(Nb(e,i)){const y=i.stack;i.stack=[],h=i.enter("autolink");let b=c.move("<");return b+=c.move(i.containerPhrasing(e,{before:b,after:">",...c.current()})),b+=c.move(">"),h(),i.stack=y,b}h=i.enter("link"),d=i.enter("label");let p=c.move("[");return p+=c.move(i.containerPhrasing(e,{before:p,after:"](",...c.current()})),p+=c.move("]("),d(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(d=i.enter("destinationLiteral"),p+=c.move("<"),p+=c.move(i.safe(e.url,{before:p,after:">",...c.current()})),p+=c.move(">")):(d=i.enter("destinationRaw"),p+=c.move(i.safe(e.url,{before:p,after:e.title?" ":")",...c.current()}))),d(),e.title&&(d=i.enter(`title${o}`),p+=c.move(" "+s),p+=c.move(i.safe(e.title,{before:p,after:s,...c.current()})),p+=c.move(s),d()),p+=c.move(")"),h(),p}function Aw(e,t,i){return Nb(e,i)?"<":"["}Rb.peek=xw;function Rb(e,t,i,u){const s=e.referenceType,o=i.enter("linkReference");let c=i.enter("label");const h=i.createTracker(u);let d=h.move("[");const p=i.containerPhrasing(e,{before:d,after:"]",...h.current()});d+=h.move(p+"]["),c();const y=i.stack;i.stack=[],c=i.enter("reference");const b=i.safe(i.associationId(e),{before:d,after:"]",...h.current()});return c(),i.stack=y,o(),s==="full"||!p||p!==b?d+=h.move(b+"]"):s==="shortcut"?d=d.slice(0,-1):d+=h.move("]"),d}function xw(){return"["}function zh(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function ww(e){const t=zh(e),i=e.options.bulletOther;if(!i)return t==="*"?"-":"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(i===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+i+"`) to be different");return i}function Sw(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function kb(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function _w(e,t,i,u){const s=i.enter("list"),o=i.bulletCurrent;let c=e.ordered?Sw(i):zh(i);const h=e.ordered?c==="."?")":".":ww(i);let d=t&&i.bulletLastUsed?c===i.bulletLastUsed:!1;if(!e.ordered){const y=e.children?e.children[0]:void 0;if((c==="*"||c==="-")&&y&&(!y.children||!y.children[0])&&i.stack[i.stack.length-1]==="list"&&i.stack[i.stack.length-2]==="listItem"&&i.stack[i.stack.length-3]==="list"&&i.stack[i.stack.length-4]==="listItem"&&i.indexStack[i.indexStack.length-1]===0&&i.indexStack[i.indexStack.length-2]===0&&i.indexStack[i.indexStack.length-3]===0&&(d=!0),kb(i)===c&&y){let b=-1;for(;++b<e.children.length;){const v=e.children[b];if(v&&v.type==="listItem"&&v.children&&v.children[0]&&v.children[0].type==="thematicBreak"){d=!0;break}}}}d&&(c=h),i.bulletCurrent=c;const p=i.containerFlow(e,u);return i.bulletLastUsed=c,i.bulletCurrent=o,s(),p}function Cw(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Nw(e,t,i,u){const s=Cw(i);let o=i.bulletCurrent||zh(i);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(i.options.incrementListMarker===!1?0:t.children.indexOf(e))+o);let c=o.length+1;(s==="tab"||s==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(c=Math.ceil(c/4)*4);const h=i.createTracker(u);h.move(o+" ".repeat(c-o.length)),h.shift(c);const d=i.enter("listItem"),p=i.indentLines(i.containerFlow(e,h.current()),y);return d(),p;function y(b,v,T){return v?(T?"":" ".repeat(c))+b:(T?o:o+" ".repeat(c-o.length))+b}}function Ow(e,t,i,u){const s=i.enter("paragraph"),o=i.enter("phrasing"),c=i.containerPhrasing(e,u);return o(),s(),c}const Rw=Js(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function kw(e,t,i,u){return(e.children.some(function(c){return Rw(c)})?i.containerPhrasing:i.containerFlow).call(i,e,u)}function Lw(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Lb.peek=Dw;function Lb(e,t,i,u){const s=Lw(i),o=i.enter("strong"),c=i.createTracker(u),h=c.move(s+s);let d=c.move(i.containerPhrasing(e,{after:s,before:h,...c.current()}));const p=d.charCodeAt(0),y=Hs(u.before.charCodeAt(u.before.length-1),p,s);y.inside&&(d=qu(p)+d.slice(1));const b=d.charCodeAt(d.length-1),v=Hs(u.after.charCodeAt(0),b,s);v.inside&&(d=d.slice(0,-1)+qu(b));const T=c.move(s+s);return o(),i.attentionEncodeSurroundingInfo={after:v.outside,before:y.outside},h+d+T}function Dw(e,t,i){return i.options.strong||"*"}function Iw(e,t,i,u){return i.safe(e.value,u)}function Mw(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Bw(e,t,i){const u=(kb(i)+(i.options.ruleSpaces?" ":"")).repeat(Mw(i));return i.options.ruleSpaces?u.slice(0,-1):u}const Db={blockquote:rw,break:Ng,code:ow,definition:fw,emphasis:Ab,hardBreak:Ng,heading:bw,html:wb,image:Sb,imageReference:_b,inlineCode:Cb,link:Ob,linkReference:Rb,list:_w,listItem:Nw,paragraph:Ow,root:kw,strong:Lb,text:Iw,thematicBreak:Bw},Rg=document.createElement("i");function jh(e){const t="&"+e+";";Rg.innerHTML=t;const i=Rg.textContent;return i.charCodeAt(i.length-1)===59&&e!=="semi"||i===t?!1:i}function Ib(e,t){const i=Number.parseInt(e,t);return i<9||i===11||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||(i&65535)===65535||(i&65535)===65534||i>1114111?"�":String.fromCodePoint(i)}const Fw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Uw(e){return e.replace(Fw,Hw)}function Hw(e,t,i){if(t)return t;if(i.charCodeAt(0)===35){const s=i.charCodeAt(1),o=s===120||s===88;return Ib(i.slice(o?2:1),o?16:10)}return jh(i)||e}function Pw(){return{enter:{table:zw,tableData:kg,tableHeader:kg,tableRow:qw},exit:{codeText:Yw,table:jw,tableData:Hf,tableHeader:Hf,tableRow:Hf}}}function zw(e){const t=e._align;this.enter({type:"table",align:t.map(function(i){return i==="none"?null:i}),children:[]},e),this.data.inTable=!0}function jw(e){this.exit(e),this.data.inTable=void 0}function qw(e){this.enter({type:"tableRow",children:[]},e)}function Hf(e){this.exit(e)}function kg(e){this.enter({type:"tableCell",children:[]},e)}function Yw(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Vw));const i=this.stack[this.stack.length-1];i.type,i.value=t,this.exit(e)}function Vw(e,t){return t==="|"?t:e}function Gw(e){const t=e||{},i=t.tableCellPadding,u=t.tablePipeAlign,s=t.stringLength,o=i?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:v,table:c,tableCell:d,tableRow:h}};function c(T,A,C,R){return p(y(T,C,R),T.align)}function h(T,A,C,R){const N=b(T,C,R),D=p([N]);return D.slice(0,D.indexOf(`
`))}function d(T,A,C,R){const N=C.enter("tableCell"),D=C.enter("phrasing"),F=C.containerPhrasing(T,{...R,before:o,after:o});return D(),N(),F}function p(T,A){return tw(T,{align:A,alignDelimiters:u,padding:i,stringLength:s})}function y(T,A,C){const R=T.children;let N=-1;const D=[],F=A.enter("table");for(;++N<R.length;)D[N]=b(R[N],A,C);return F(),D}function b(T,A,C){const R=T.children;let N=-1;const D=[],F=A.enter("tableRow");for(;++N<R.length;)D[N]=d(R[N],T,A,C);return F(),D}function v(T,A,C){let R=Db.inlineCode(T,A,C);return C.stack.includes("tableCell")&&(R=R.replace(/\|/g,"\\$&")),R}}function Qw(){return{exit:{taskListCheckValueChecked:Lg,taskListCheckValueUnchecked:Lg,paragraph:Kw}}}function Xw(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:Ww}}}function Lg(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function Kw(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const i=this.stack[this.stack.length-1];i.type;const u=i.children[0];if(u&&u.type==="text"){const s=t.children;let o=-1,c;for(;++o<s.length;){const h=s[o];if(h.type==="paragraph"){c=h;break}}c===i&&(u.value=u.value.slice(1),u.value.length===0?i.children.shift():i.position&&u.position&&typeof u.position.start.offset=="number"&&(u.position.start.column++,u.position.start.offset++,i.position.start=Object.assign({},u.position.start)))}}this.exit(e)}function Ww(e,t,i,u){const s=e.children[0],o=typeof e.checked=="boolean"&&s&&s.type==="paragraph",c="["+(e.checked?"x":" ")+"] ",h=i.createTracker(u);o&&h.move(c);let d=Db.listItem(e,t,i,{...u,...h.current()});return o&&(d=d.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,p)),d;function p(y){return y+c}}function Zw(){return[wx(),Vx(),Kx(),Pw(),Qw()]}function Jw(e){return{extensions:[Sx(),Gx(e),Wx(),Gw(e),Xw()]}}function on(e,t,i,u){const s=e.length;let o=0,c;if(t<0?t=-t>s?0:s+t:t=t>s?s:t,i=i>0?i:0,u.length<1e4)c=Array.from(u),c.unshift(t,i),e.splice(...c);else for(i&&e.splice(t,i);o<u.length;)c=u.slice(o,o+1e4),c.unshift(t,0),e.splice(...c),o+=1e4,t+=1e4}function xn(e,t){return e.length>0?(on(e,e.length,0,t),e):t}const Dg={}.hasOwnProperty;function Mb(e){const t={};let i=-1;for(;++i<e.length;)$w(t,e[i]);return t}function $w(e,t){let i;for(i in t){const s=(Dg.call(e,i)?e[i]:void 0)||(e[i]={}),o=t[i];let c;if(o)for(c in o){Dg.call(s,c)||(s[c]=[]);const h=o[c];eS(s[c],Array.isArray(h)?h:h?[h]:[])}}}function eS(e,t){let i=-1;const u=[];for(;++i<t.length;)(t[i].add==="after"?e:u).push(t[i]);on(e,0,0,u)}const tS={tokenize:lS,partial:!0},Bb={tokenize:sS,partial:!0},Fb={tokenize:oS,partial:!0},Ub={tokenize:cS,partial:!0},nS={tokenize:fS,partial:!0},Hb={name:"wwwAutolink",tokenize:aS,previous:zb},Pb={name:"protocolAutolink",tokenize:uS,previous:jb},mr={name:"emailAutolink",tokenize:iS,previous:qb},Pn={};function rS(){return{text:Pn}}let hi=48;for(;hi<123;)Pn[hi]=mr,hi++,hi===58?hi=65:hi===91&&(hi=97);Pn[43]=mr;Pn[45]=mr;Pn[46]=mr;Pn[95]=mr;Pn[72]=[mr,Pb];Pn[104]=[mr,Pb];Pn[87]=[mr,Hb];Pn[119]=[mr,Hb];function iS(e,t,i){const u=this;let s,o;return c;function c(b){return!hh(b)||!qb.call(u,u.previous)||qh(u.events)?i(b):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),h(b))}function h(b){return hh(b)?(e.consume(b),h):b===64?(e.consume(b),d):i(b)}function d(b){return b===46?e.check(nS,y,p)(b):b===45||b===95||Lt(b)?(o=!0,e.consume(b),d):y(b)}function p(b){return e.consume(b),s=!0,d}function y(b){return o&&s&&Ht(u.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(b)):i(b)}}function aS(e,t,i){const u=this;return s;function s(c){return c!==87&&c!==119||!zb.call(u,u.previous)||qh(u.events)?i(c):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(tS,e.attempt(Bb,e.attempt(Fb,o),i),i)(c))}function o(c){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(c)}}function uS(e,t,i){const u=this;let s="",o=!1;return c;function c(b){return(b===72||b===104)&&jb.call(u,u.previous)&&!qh(u.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),s+=String.fromCodePoint(b),e.consume(b),h):i(b)}function h(b){if(Ht(b)&&s.length<5)return s+=String.fromCodePoint(b),e.consume(b),h;if(b===58){const v=s.toLowerCase();if(v==="http"||v==="https")return e.consume(b),d}return i(b)}function d(b){return b===47?(e.consume(b),o?p:(o=!0,d)):i(b)}function p(b){return b===null||Us(b)||$e(b)||yi(b)||Zs(b)?i(b):e.attempt(Bb,e.attempt(Fb,y),i)(b)}function y(b){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(b)}}function lS(e,t,i){let u=0;return s;function s(c){return(c===87||c===119)&&u<3?(u++,e.consume(c),s):c===46&&u===3?(e.consume(c),o):i(c)}function o(c){return c===null?i(c):t(c)}}function sS(e,t,i){let u,s,o;return c;function c(p){return p===46||p===95?e.check(Ub,d,h)(p):p===null||$e(p)||yi(p)||p!==45&&Zs(p)?d(p):(o=!0,e.consume(p),c)}function h(p){return p===95?u=!0:(s=u,u=void 0),e.consume(p),c}function d(p){return s||u||!o?i(p):t(p)}}function oS(e,t){let i=0,u=0;return s;function s(c){return c===40?(i++,e.consume(c),s):c===41&&u<i?o(c):c===33||c===34||c===38||c===39||c===41||c===42||c===44||c===46||c===58||c===59||c===60||c===63||c===93||c===95||c===126?e.check(Ub,t,o)(c):c===null||$e(c)||yi(c)?t(c):(e.consume(c),s)}function o(c){return c===41&&u++,e.consume(c),s}}function cS(e,t,i){return u;function u(h){return h===33||h===34||h===39||h===41||h===42||h===44||h===46||h===58||h===59||h===63||h===95||h===126?(e.consume(h),u):h===38?(e.consume(h),o):h===93?(e.consume(h),s):h===60||h===null||$e(h)||yi(h)?t(h):i(h)}function s(h){return h===null||h===40||h===91||$e(h)||yi(h)?t(h):u(h)}function o(h){return Ht(h)?c(h):i(h)}function c(h){return h===59?(e.consume(h),u):Ht(h)?(e.consume(h),c):i(h)}}function fS(e,t,i){return u;function u(o){return e.consume(o),s}function s(o){return Lt(o)?i(o):t(o)}}function zb(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||$e(e)}function jb(e){return!Ht(e)}function qb(e){return!(e===47||hh(e))}function hh(e){return e===43||e===45||e===46||e===95||Lt(e)}function qh(e){let t=e.length,i=!1;for(;t--;){const u=e[t][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){i=!0;break}if(u._gfmAutolinkLiteralWalkedInto){i=!1;break}}return e.length>0&&!i&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),i}function Sa(e){const t=[];let i=-1,u=0,s=0;for(;++i<e.length;){const o=e.charCodeAt(i);let c="";if(o===37&&Lt(e.charCodeAt(i+1))&&Lt(e.charCodeAt(i+2)))s=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(c=String.fromCharCode(o));else if(o>55295&&o<57344){const h=e.charCodeAt(i+1);o<56320&&h>56319&&h<57344?(c=String.fromCharCode(o,h),s=1):c="�"}else c=String.fromCharCode(o);c&&(t.push(e.slice(u,i),encodeURIComponent(c)),u=i+s+1,c=""),s&&(i+=s,s=0)}return t.join("")+e.slice(u)}function to(e,t,i){const u=[];let s=-1;for(;++s<e.length;){const o=e[s].resolveAll;o&&!u.includes(o)&&(t=o(t,i),u.push(o))}return t}const dh={name:"attention",resolveAll:hS,tokenize:dS};function hS(e,t){let i=-1,u,s,o,c,h,d,p,y;for(;++i<e.length;)if(e[i][0]==="enter"&&e[i][1].type==="attentionSequence"&&e[i][1]._close){for(u=i;u--;)if(e[u][0]==="exit"&&e[u][1].type==="attentionSequence"&&e[u][1]._open&&t.sliceSerialize(e[u][1]).charCodeAt(0)===t.sliceSerialize(e[i][1]).charCodeAt(0)){if((e[u][1]._close||e[i][1]._open)&&(e[i][1].end.offset-e[i][1].start.offset)%3&&!((e[u][1].end.offset-e[u][1].start.offset+e[i][1].end.offset-e[i][1].start.offset)%3))continue;d=e[u][1].end.offset-e[u][1].start.offset>1&&e[i][1].end.offset-e[i][1].start.offset>1?2:1;const b={...e[u][1].end},v={...e[i][1].start};Ig(b,-d),Ig(v,d),c={type:d>1?"strongSequence":"emphasisSequence",start:b,end:{...e[u][1].end}},h={type:d>1?"strongSequence":"emphasisSequence",start:{...e[i][1].start},end:v},o={type:d>1?"strongText":"emphasisText",start:{...e[u][1].end},end:{...e[i][1].start}},s={type:d>1?"strong":"emphasis",start:{...c.start},end:{...h.end}},e[u][1].end={...c.start},e[i][1].start={...h.end},p=[],e[u][1].end.offset-e[u][1].start.offset&&(p=xn(p,[["enter",e[u][1],t],["exit",e[u][1],t]])),p=xn(p,[["enter",s,t],["enter",c,t],["exit",c,t],["enter",o,t]]),p=xn(p,to(t.parser.constructs.insideSpan.null,e.slice(u+1,i),t)),p=xn(p,[["exit",o,t],["enter",h,t],["exit",h,t],["exit",s,t]]),e[i][1].end.offset-e[i][1].start.offset?(y=2,p=xn(p,[["enter",e[i][1],t],["exit",e[i][1],t]])):y=0,on(e,u-1,i-u+3,p),i=u+p.length-y-2;break}}for(i=-1;++i<e.length;)e[i][1].type==="attentionSequence"&&(e[i][1].type="data");return e}function dS(e,t){const i=this.parser.constructs.attentionMarkers.null,u=this.previous,s=Ea(u);let o;return c;function c(d){return o=d,e.enter("attentionSequence"),h(d)}function h(d){if(d===o)return e.consume(d),h;const p=e.exit("attentionSequence"),y=Ea(d),b=!y||y===2&&s||i.includes(d),v=!s||s===2&&y||i.includes(u);return p._open=!!(o===42?b:b&&(s||!v)),p._close=!!(o===42?v:v&&(y||!b)),t(d)}}function Ig(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const mS={name:"autolink",tokenize:pS};function pS(e,t,i){let u=0;return s;function s(T){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(T),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(T){return Ht(T)?(e.consume(T),c):T===64?i(T):p(T)}function c(T){return T===43||T===45||T===46||Lt(T)?(u=1,h(T)):p(T)}function h(T){return T===58?(e.consume(T),u=0,d):(T===43||T===45||T===46||Lt(T))&&u++<32?(e.consume(T),h):(u=0,p(T))}function d(T){return T===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(T),e.exit("autolinkMarker"),e.exit("autolink"),t):T===null||T===32||T===60||Us(T)?i(T):(e.consume(T),d)}function p(T){return T===64?(e.consume(T),y):sx(T)?(e.consume(T),p):i(T)}function y(T){return Lt(T)?b(T):i(T)}function b(T){return T===46?(e.consume(T),u=0,y):T===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(T),e.exit("autolinkMarker"),e.exit("autolink"),t):v(T)}function v(T){if((T===45||Lt(T))&&u++<63){const A=T===45?v:b;return e.consume(T),A}return i(T)}}function Pe(e,t,i,u){const s=u?u-1:Number.POSITIVE_INFINITY;let o=0;return c;function c(d){return Me(d)?(e.enter(i),h(d)):t(d)}function h(d){return Me(d)&&o++<s?(e.consume(d),h):(e.exit(i),t(d))}}const $u={partial:!0,tokenize:gS};function gS(e,t,i){return u;function u(o){return Me(o)?Pe(e,s,"linePrefix")(o):s(o)}function s(o){return o===null||Ae(o)?t(o):i(o)}}const Yb={continuation:{tokenize:yS},exit:ES,name:"blockQuote",tokenize:bS};function bS(e,t,i){const u=this;return s;function s(c){if(c===62){const h=u.containerState;return h.open||(e.enter("blockQuote",{_container:!0}),h.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(c),e.exit("blockQuoteMarker"),o}return i(c)}function o(c){return Me(c)?(e.enter("blockQuotePrefixWhitespace"),e.consume(c),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(c))}}function yS(e,t,i){const u=this;return s;function s(c){return Me(c)?Pe(e,o,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c):o(c)}function o(c){return e.attempt(Yb,t,i)(c)}}function ES(e){e.exit("blockQuote")}const Vb={name:"characterEscape",tokenize:TS};function TS(e,t,i){return u;function u(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),s}function s(o){return cx(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):i(o)}}const Gb={name:"characterReference",tokenize:vS};function vS(e,t,i){const u=this;let s=0,o,c;return h;function h(b){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(b),e.exit("characterReferenceMarker"),d}function d(b){return b===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(b),e.exit("characterReferenceMarkerNumeric"),p):(e.enter("characterReferenceValue"),o=31,c=Lt,y(b))}function p(b){return b===88||b===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(b),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,c=ox,y):(e.enter("characterReferenceValue"),o=7,c=ch,y(b))}function y(b){if(b===59&&s){const v=e.exit("characterReferenceValue");return c===Lt&&!jh(u.sliceSerialize(v))?i(b):(e.enter("characterReferenceMarker"),e.consume(b),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return c(b)&&s++<o?(e.consume(b),y):i(b)}}const Mg={partial:!0,tokenize:xS},Bg={concrete:!0,name:"codeFenced",tokenize:AS};function AS(e,t,i){const u=this,s={partial:!0,tokenize:ne};let o=0,c=0,h;return d;function d(G){return p(G)}function p(G){const se=u.events[u.events.length-1];return o=se&&se[1].type==="linePrefix"?se[2].sliceSerialize(se[1],!0).length:0,h=G,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),y(G)}function y(G){return G===h?(c++,e.consume(G),y):c<3?i(G):(e.exit("codeFencedFenceSequence"),Me(G)?Pe(e,b,"whitespace")(G):b(G))}function b(G){return G===null||Ae(G)?(e.exit("codeFencedFence"),u.interrupt?t(G):e.check(Mg,C,ee)(G)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),v(G))}function v(G){return G===null||Ae(G)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),b(G)):Me(G)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Pe(e,T,"whitespace")(G)):G===96&&G===h?i(G):(e.consume(G),v)}function T(G){return G===null||Ae(G)?b(G):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),A(G))}function A(G){return G===null||Ae(G)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),b(G)):G===96&&G===h?i(G):(e.consume(G),A)}function C(G){return e.attempt(s,ee,R)(G)}function R(G){return e.enter("lineEnding"),e.consume(G),e.exit("lineEnding"),N}function N(G){return o>0&&Me(G)?Pe(e,D,"linePrefix",o+1)(G):D(G)}function D(G){return G===null||Ae(G)?e.check(Mg,C,ee)(G):(e.enter("codeFlowValue"),F(G))}function F(G){return G===null||Ae(G)?(e.exit("codeFlowValue"),D(G)):(e.consume(G),F)}function ee(G){return e.exit("codeFenced"),t(G)}function ne(G,se,ye){let de=0;return Y;function Y(le){return G.enter("lineEnding"),G.consume(le),G.exit("lineEnding"),oe}function oe(le){return G.enter("codeFencedFence"),Me(le)?Pe(G,fe,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(le):fe(le)}function fe(le){return le===h?(G.enter("codeFencedFenceSequence"),me(le)):ye(le)}function me(le){return le===h?(de++,G.consume(le),me):de>=c?(G.exit("codeFencedFenceSequence"),Me(le)?Pe(G,ae,"whitespace")(le):ae(le)):ye(le)}function ae(le){return le===null||Ae(le)?(G.exit("codeFencedFence"),se(le)):ye(le)}}}function xS(e,t,i){const u=this;return s;function s(c){return c===null?i(c):(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),o)}function o(c){return u.parser.lazy[u.now().line]?i(c):t(c)}}const Pf={name:"codeIndented",tokenize:SS},wS={partial:!0,tokenize:_S};function SS(e,t,i){const u=this;return s;function s(p){return e.enter("codeIndented"),Pe(e,o,"linePrefix",5)(p)}function o(p){const y=u.events[u.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?c(p):i(p)}function c(p){return p===null?d(p):Ae(p)?e.attempt(wS,c,d)(p):(e.enter("codeFlowValue"),h(p))}function h(p){return p===null||Ae(p)?(e.exit("codeFlowValue"),c(p)):(e.consume(p),h)}function d(p){return e.exit("codeIndented"),t(p)}}function _S(e,t,i){const u=this;return s;function s(c){return u.parser.lazy[u.now().line]?i(c):Ae(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),s):Pe(e,o,"linePrefix",5)(c)}function o(c){const h=u.events[u.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?t(c):Ae(c)?s(c):i(c)}}const CS={name:"codeText",previous:OS,resolve:NS,tokenize:RS};function NS(e){let t=e.length-4,i=3,u,s;if((e[i][1].type==="lineEnding"||e[i][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(u=i;++u<t;)if(e[u][1].type==="codeTextData"){e[i][1].type="codeTextPadding",e[t][1].type="codeTextPadding",i+=2,t-=2;break}}for(u=i-1,t++;++u<=t;)s===void 0?u!==t&&e[u][1].type!=="lineEnding"&&(s=u):(u===t||e[u][1].type==="lineEnding")&&(e[s][1].type="codeTextData",u!==s+2&&(e[s][1].end=e[u-1][1].end,e.splice(s+2,u-s-2),t-=u-s-2,u=s+2),s=void 0);return e}function OS(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function RS(e,t,i){let u=0,s,o;return c;function c(b){return e.enter("codeText"),e.enter("codeTextSequence"),h(b)}function h(b){return b===96?(e.consume(b),u++,h):(e.exit("codeTextSequence"),d(b))}function d(b){return b===null?i(b):b===32?(e.enter("space"),e.consume(b),e.exit("space"),d):b===96?(o=e.enter("codeTextSequence"),s=0,y(b)):Ae(b)?(e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),d):(e.enter("codeTextData"),p(b))}function p(b){return b===null||b===32||b===96||Ae(b)?(e.exit("codeTextData"),d(b)):(e.consume(b),p)}function y(b){return b===96?(e.consume(b),s++,y):s===u?(e.exit("codeTextSequence"),e.exit("codeText"),t(b)):(o.type="codeTextData",p(b))}}class kS{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,i){const u=i??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(t,u):t>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(t,i,u){const s=i||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return u&&_u(this.left,u),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),_u(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),_u(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const i=this.left.splice(t,Number.POSITIVE_INFINITY);_u(this.right,i.reverse())}else{const i=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);_u(this.left,i.reverse())}}}function _u(e,t){let i=0;if(t.length<1e4)e.push(...t);else for(;i<t.length;)e.push(...t.slice(i,i+1e4)),i+=1e4}function Qb(e){const t={};let i=-1,u,s,o,c,h,d,p;const y=new kS(e);for(;++i<y.length;){for(;i in t;)i=t[i];if(u=y.get(i),i&&u[1].type==="chunkFlow"&&y.get(i-1)[1].type==="listItemPrefix"&&(d=u[1]._tokenizer.events,o=0,o<d.length&&d[o][1].type==="lineEndingBlank"&&(o+=2),o<d.length&&d[o][1].type==="content"))for(;++o<d.length&&d[o][1].type!=="content";)d[o][1].type==="chunkText"&&(d[o][1]._isInFirstContentOfListItem=!0,o++);if(u[0]==="enter")u[1].contentType&&(Object.assign(t,LS(y,i)),i=t[i],p=!0);else if(u[1]._container){for(o=i,s=void 0;o--;)if(c=y.get(o),c[1].type==="lineEnding"||c[1].type==="lineEndingBlank")c[0]==="enter"&&(s&&(y.get(s)[1].type="lineEndingBlank"),c[1].type="lineEnding",s=o);else if(!(c[1].type==="linePrefix"||c[1].type==="listItemIndent"))break;s&&(u[1].end={...y.get(s)[1].start},h=y.slice(s,i),h.unshift(u),y.splice(s,i-s+1,h))}}return on(e,0,Number.POSITIVE_INFINITY,y.slice(0)),!p}function LS(e,t){const i=e.get(t)[1],u=e.get(t)[2];let s=t-1;const o=[];let c=i._tokenizer;c||(c=u.parser[i.contentType](i.start),i._contentTypeTextTrailing&&(c._contentTypeTextTrailing=!0));const h=c.events,d=[],p={};let y,b,v=-1,T=i,A=0,C=0;const R=[C];for(;T;){for(;e.get(++s)[1]!==T;);o.push(s),T._tokenizer||(y=u.sliceStream(T),T.next||y.push(null),b&&c.defineSkip(T.start),T._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=!0),c.write(y),T._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=void 0)),b=T,T=T.next}for(T=i;++v<h.length;)h[v][0]==="exit"&&h[v-1][0]==="enter"&&h[v][1].type===h[v-1][1].type&&h[v][1].start.line!==h[v][1].end.line&&(C=v+1,R.push(C),T._tokenizer=void 0,T.previous=void 0,T=T.next);for(c.events=[],T?(T._tokenizer=void 0,T.previous=void 0):R.pop(),v=R.length;v--;){const N=h.slice(R[v],R[v+1]),D=o.pop();d.push([D,D+N.length-1]),e.splice(D,2,N)}for(d.reverse(),v=-1;++v<d.length;)p[A+d[v][0]]=A+d[v][1],A+=d[v][1]-d[v][0]-1;return p}const DS={resolve:MS,tokenize:BS},IS={partial:!0,tokenize:FS};function MS(e){return Qb(e),e}function BS(e,t){let i;return u;function u(h){return e.enter("content"),i=e.enter("chunkContent",{contentType:"content"}),s(h)}function s(h){return h===null?o(h):Ae(h)?e.check(IS,c,o)(h):(e.consume(h),s)}function o(h){return e.exit("chunkContent"),e.exit("content"),t(h)}function c(h){return e.consume(h),e.exit("chunkContent"),i.next=e.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,s}}function FS(e,t,i){const u=this;return s;function s(c){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),Pe(e,o,"linePrefix")}function o(c){if(c===null||Ae(c))return i(c);const h=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?t(c):e.interrupt(u.parser.constructs.flow,i,t)(c)}}function Xb(e,t,i,u,s,o,c,h,d){const p=d||Number.POSITIVE_INFINITY;let y=0;return b;function b(N){return N===60?(e.enter(u),e.enter(s),e.enter(o),e.consume(N),e.exit(o),v):N===null||N===32||N===41||Us(N)?i(N):(e.enter(u),e.enter(c),e.enter(h),e.enter("chunkString",{contentType:"string"}),C(N))}function v(N){return N===62?(e.enter(o),e.consume(N),e.exit(o),e.exit(s),e.exit(u),t):(e.enter(h),e.enter("chunkString",{contentType:"string"}),T(N))}function T(N){return N===62?(e.exit("chunkString"),e.exit(h),v(N)):N===null||N===60||Ae(N)?i(N):(e.consume(N),N===92?A:T)}function A(N){return N===60||N===62||N===92?(e.consume(N),T):T(N)}function C(N){return!y&&(N===null||N===41||$e(N))?(e.exit("chunkString"),e.exit(h),e.exit(c),e.exit(u),t(N)):y<p&&N===40?(e.consume(N),y++,C):N===41?(e.consume(N),y--,C):N===null||N===32||N===40||Us(N)?i(N):(e.consume(N),N===92?R:C)}function R(N){return N===40||N===41||N===92?(e.consume(N),C):C(N)}}function Kb(e,t,i,u,s,o){const c=this;let h=0,d;return p;function p(T){return e.enter(u),e.enter(s),e.consume(T),e.exit(s),e.enter(o),y}function y(T){return h>999||T===null||T===91||T===93&&!d||T===94&&!h&&"_hiddenFootnoteSupport"in c.parser.constructs?i(T):T===93?(e.exit(o),e.enter(s),e.consume(T),e.exit(s),e.exit(u),t):Ae(T)?(e.enter("lineEnding"),e.consume(T),e.exit("lineEnding"),y):(e.enter("chunkString",{contentType:"string"}),b(T))}function b(T){return T===null||T===91||T===93||Ae(T)||h++>999?(e.exit("chunkString"),y(T)):(e.consume(T),d||(d=!Me(T)),T===92?v:b)}function v(T){return T===91||T===92||T===93?(e.consume(T),h++,b):b(T)}}function Wb(e,t,i,u,s,o){let c;return h;function h(v){return v===34||v===39||v===40?(e.enter(u),e.enter(s),e.consume(v),e.exit(s),c=v===40?41:v,d):i(v)}function d(v){return v===c?(e.enter(s),e.consume(v),e.exit(s),e.exit(u),t):(e.enter(o),p(v))}function p(v){return v===c?(e.exit(o),d(c)):v===null?i(v):Ae(v)?(e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),Pe(e,p,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),y(v))}function y(v){return v===c||v===null||Ae(v)?(e.exit("chunkString"),p(v)):(e.consume(v),v===92?b:y)}function b(v){return v===c||v===92?(e.consume(v),y):y(v)}}function Iu(e,t){let i;return u;function u(s){return Ae(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i=!0,u):Me(s)?Pe(e,u,i?"linePrefix":"lineSuffix")(s):t(s)}}const US={name:"definition",tokenize:PS},HS={partial:!0,tokenize:zS};function PS(e,t,i){const u=this;let s;return o;function o(T){return e.enter("definition"),c(T)}function c(T){return Kb.call(u,e,h,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(T)}function h(T){return s=On(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),T===58?(e.enter("definitionMarker"),e.consume(T),e.exit("definitionMarker"),d):i(T)}function d(T){return $e(T)?Iu(e,p)(T):p(T)}function p(T){return Xb(e,y,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(T)}function y(T){return e.attempt(HS,b,b)(T)}function b(T){return Me(T)?Pe(e,v,"whitespace")(T):v(T)}function v(T){return T===null||Ae(T)?(e.exit("definition"),u.parser.defined.push(s),t(T)):i(T)}}function zS(e,t,i){return u;function u(h){return $e(h)?Iu(e,s)(h):i(h)}function s(h){return Wb(e,o,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(h)}function o(h){return Me(h)?Pe(e,c,"whitespace")(h):c(h)}function c(h){return h===null||Ae(h)?t(h):i(h)}}const jS={name:"hardBreakEscape",tokenize:qS};function qS(e,t,i){return u;function u(o){return e.enter("hardBreakEscape"),e.consume(o),s}function s(o){return Ae(o)?(e.exit("hardBreakEscape"),t(o)):i(o)}}const YS={name:"headingAtx",resolve:VS,tokenize:GS};function VS(e,t){let i=e.length-2,u=3,s,o;return e[u][1].type==="whitespace"&&(u+=2),i-2>u&&e[i][1].type==="whitespace"&&(i-=2),e[i][1].type==="atxHeadingSequence"&&(u===i-1||i-4>u&&e[i-2][1].type==="whitespace")&&(i-=u+1===i?2:4),i>u&&(s={type:"atxHeadingText",start:e[u][1].start,end:e[i][1].end},o={type:"chunkText",start:e[u][1].start,end:e[i][1].end,contentType:"text"},on(e,u,i-u+1,[["enter",s,t],["enter",o,t],["exit",o,t],["exit",s,t]])),e}function GS(e,t,i){let u=0;return s;function s(y){return e.enter("atxHeading"),o(y)}function o(y){return e.enter("atxHeadingSequence"),c(y)}function c(y){return y===35&&u++<6?(e.consume(y),c):y===null||$e(y)?(e.exit("atxHeadingSequence"),h(y)):i(y)}function h(y){return y===35?(e.enter("atxHeadingSequence"),d(y)):y===null||Ae(y)?(e.exit("atxHeading"),t(y)):Me(y)?Pe(e,h,"whitespace")(y):(e.enter("atxHeadingText"),p(y))}function d(y){return y===35?(e.consume(y),d):(e.exit("atxHeadingSequence"),h(y))}function p(y){return y===null||y===35||$e(y)?(e.exit("atxHeadingText"),h(y)):(e.consume(y),p)}}const QS=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Fg=["pre","script","style","textarea"],XS={concrete:!0,name:"htmlFlow",resolveTo:ZS,tokenize:JS},KS={partial:!0,tokenize:e_},WS={partial:!0,tokenize:$S};function ZS(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function JS(e,t,i){const u=this;let s,o,c,h,d;return p;function p(S){return y(S)}function y(S){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(S),b}function b(S){return S===33?(e.consume(S),v):S===47?(e.consume(S),o=!0,C):S===63?(e.consume(S),s=3,u.interrupt?t:L):Ht(S)?(e.consume(S),c=String.fromCharCode(S),R):i(S)}function v(S){return S===45?(e.consume(S),s=2,T):S===91?(e.consume(S),s=5,h=0,A):Ht(S)?(e.consume(S),s=4,u.interrupt?t:L):i(S)}function T(S){return S===45?(e.consume(S),u.interrupt?t:L):i(S)}function A(S){const he="CDATA[";return S===he.charCodeAt(h++)?(e.consume(S),h===he.length?u.interrupt?t:fe:A):i(S)}function C(S){return Ht(S)?(e.consume(S),c=String.fromCharCode(S),R):i(S)}function R(S){if(S===null||S===47||S===62||$e(S)){const he=S===47,we=c.toLowerCase();return!he&&!o&&Fg.includes(we)?(s=1,u.interrupt?t(S):fe(S)):QS.includes(c.toLowerCase())?(s=6,he?(e.consume(S),N):u.interrupt?t(S):fe(S)):(s=7,u.interrupt&&!u.parser.lazy[u.now().line]?i(S):o?D(S):F(S))}return S===45||Lt(S)?(e.consume(S),c+=String.fromCharCode(S),R):i(S)}function N(S){return S===62?(e.consume(S),u.interrupt?t:fe):i(S)}function D(S){return Me(S)?(e.consume(S),D):Y(S)}function F(S){return S===47?(e.consume(S),Y):S===58||S===95||Ht(S)?(e.consume(S),ee):Me(S)?(e.consume(S),F):Y(S)}function ee(S){return S===45||S===46||S===58||S===95||Lt(S)?(e.consume(S),ee):ne(S)}function ne(S){return S===61?(e.consume(S),G):Me(S)?(e.consume(S),ne):F(S)}function G(S){return S===null||S===60||S===61||S===62||S===96?i(S):S===34||S===39?(e.consume(S),d=S,se):Me(S)?(e.consume(S),G):ye(S)}function se(S){return S===d?(e.consume(S),d=null,de):S===null||Ae(S)?i(S):(e.consume(S),se)}function ye(S){return S===null||S===34||S===39||S===47||S===60||S===61||S===62||S===96||$e(S)?ne(S):(e.consume(S),ye)}function de(S){return S===47||S===62||Me(S)?F(S):i(S)}function Y(S){return S===62?(e.consume(S),oe):i(S)}function oe(S){return S===null||Ae(S)?fe(S):Me(S)?(e.consume(S),oe):i(S)}function fe(S){return S===45&&s===2?(e.consume(S),z):S===60&&s===1?(e.consume(S),ie):S===62&&s===4?(e.consume(S),M):S===63&&s===3?(e.consume(S),L):S===93&&s===5?(e.consume(S),Re):Ae(S)&&(s===6||s===7)?(e.exit("htmlFlowData"),e.check(KS,W,me)(S)):S===null||Ae(S)?(e.exit("htmlFlowData"),me(S)):(e.consume(S),fe)}function me(S){return e.check(WS,ae,W)(S)}function ae(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),le}function le(S){return S===null||Ae(S)?me(S):(e.enter("htmlFlowData"),fe(S))}function z(S){return S===45?(e.consume(S),L):fe(S)}function ie(S){return S===47?(e.consume(S),c="",be):fe(S)}function be(S){if(S===62){const he=c.toLowerCase();return Fg.includes(he)?(e.consume(S),M):fe(S)}return Ht(S)&&c.length<8?(e.consume(S),c+=String.fromCharCode(S),be):fe(S)}function Re(S){return S===93?(e.consume(S),L):fe(S)}function L(S){return S===62?(e.consume(S),M):S===45&&s===2?(e.consume(S),L):fe(S)}function M(S){return S===null||Ae(S)?(e.exit("htmlFlowData"),W(S)):(e.consume(S),M)}function W(S){return e.exit("htmlFlow"),t(S)}}function $S(e,t,i){const u=this;return s;function s(c){return Ae(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),o):i(c)}function o(c){return u.parser.lazy[u.now().line]?i(c):t(c)}}function e_(e,t,i){return u;function u(s){return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),e.attempt($u,t,i)}}const t_={name:"htmlText",tokenize:n_};function n_(e,t,i){const u=this;let s,o,c;return h;function h(L){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(L),d}function d(L){return L===33?(e.consume(L),p):L===47?(e.consume(L),ne):L===63?(e.consume(L),F):Ht(L)?(e.consume(L),ye):i(L)}function p(L){return L===45?(e.consume(L),y):L===91?(e.consume(L),o=0,A):Ht(L)?(e.consume(L),D):i(L)}function y(L){return L===45?(e.consume(L),T):i(L)}function b(L){return L===null?i(L):L===45?(e.consume(L),v):Ae(L)?(c=b,ie(L)):(e.consume(L),b)}function v(L){return L===45?(e.consume(L),T):b(L)}function T(L){return L===62?z(L):L===45?v(L):b(L)}function A(L){const M="CDATA[";return L===M.charCodeAt(o++)?(e.consume(L),o===M.length?C:A):i(L)}function C(L){return L===null?i(L):L===93?(e.consume(L),R):Ae(L)?(c=C,ie(L)):(e.consume(L),C)}function R(L){return L===93?(e.consume(L),N):C(L)}function N(L){return L===62?z(L):L===93?(e.consume(L),N):C(L)}function D(L){return L===null||L===62?z(L):Ae(L)?(c=D,ie(L)):(e.consume(L),D)}function F(L){return L===null?i(L):L===63?(e.consume(L),ee):Ae(L)?(c=F,ie(L)):(e.consume(L),F)}function ee(L){return L===62?z(L):F(L)}function ne(L){return Ht(L)?(e.consume(L),G):i(L)}function G(L){return L===45||Lt(L)?(e.consume(L),G):se(L)}function se(L){return Ae(L)?(c=se,ie(L)):Me(L)?(e.consume(L),se):z(L)}function ye(L){return L===45||Lt(L)?(e.consume(L),ye):L===47||L===62||$e(L)?de(L):i(L)}function de(L){return L===47?(e.consume(L),z):L===58||L===95||Ht(L)?(e.consume(L),Y):Ae(L)?(c=de,ie(L)):Me(L)?(e.consume(L),de):z(L)}function Y(L){return L===45||L===46||L===58||L===95||Lt(L)?(e.consume(L),Y):oe(L)}function oe(L){return L===61?(e.consume(L),fe):Ae(L)?(c=oe,ie(L)):Me(L)?(e.consume(L),oe):de(L)}function fe(L){return L===null||L===60||L===61||L===62||L===96?i(L):L===34||L===39?(e.consume(L),s=L,me):Ae(L)?(c=fe,ie(L)):Me(L)?(e.consume(L),fe):(e.consume(L),ae)}function me(L){return L===s?(e.consume(L),s=void 0,le):L===null?i(L):Ae(L)?(c=me,ie(L)):(e.consume(L),me)}function ae(L){return L===null||L===34||L===39||L===60||L===61||L===96?i(L):L===47||L===62||$e(L)?de(L):(e.consume(L),ae)}function le(L){return L===47||L===62||$e(L)?de(L):i(L)}function z(L){return L===62?(e.consume(L),e.exit("htmlTextData"),e.exit("htmlText"),t):i(L)}function ie(L){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(L),e.exit("lineEnding"),be}function be(L){return Me(L)?Pe(e,Re,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(L):Re(L)}function Re(L){return e.enter("htmlTextData"),c(L)}}const Yh={name:"labelEnd",resolveAll:u_,resolveTo:l_,tokenize:s_},r_={tokenize:o_},i_={tokenize:c_},a_={tokenize:f_};function u_(e){let t=-1;const i=[];for(;++t<e.length;){const u=e[t][1];if(i.push(e[t]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const s=u.type==="labelImage"?4:2;u.type="data",t+=s}}return e.length!==i.length&&on(e,0,e.length,i),e}function l_(e,t){let i=e.length,u=0,s,o,c,h;for(;i--;)if(s=e[i][1],o){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;e[i][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(c){if(e[i][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(o=i,s.type!=="labelLink")){u=2;break}}else s.type==="labelEnd"&&(c=i);const d={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},p={type:"label",start:{...e[o][1].start},end:{...e[c][1].end}},y={type:"labelText",start:{...e[o+u+2][1].end},end:{...e[c-2][1].start}};return h=[["enter",d,t],["enter",p,t]],h=xn(h,e.slice(o+1,o+u+3)),h=xn(h,[["enter",y,t]]),h=xn(h,to(t.parser.constructs.insideSpan.null,e.slice(o+u+4,c-3),t)),h=xn(h,[["exit",y,t],e[c-2],e[c-1],["exit",p,t]]),h=xn(h,e.slice(c+1)),h=xn(h,[["exit",d,t]]),on(e,o,e.length,h),e}function s_(e,t,i){const u=this;let s=u.events.length,o,c;for(;s--;)if((u.events[s][1].type==="labelImage"||u.events[s][1].type==="labelLink")&&!u.events[s][1]._balanced){o=u.events[s][1];break}return h;function h(v){return o?o._inactive?b(v):(c=u.parser.defined.includes(On(u.sliceSerialize({start:o.end,end:u.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(v),e.exit("labelMarker"),e.exit("labelEnd"),d):i(v)}function d(v){return v===40?e.attempt(r_,y,c?y:b)(v):v===91?e.attempt(i_,y,c?p:b)(v):c?y(v):b(v)}function p(v){return e.attempt(a_,y,b)(v)}function y(v){return t(v)}function b(v){return o._balanced=!0,i(v)}}function o_(e,t,i){return u;function u(b){return e.enter("resource"),e.enter("resourceMarker"),e.consume(b),e.exit("resourceMarker"),s}function s(b){return $e(b)?Iu(e,o)(b):o(b)}function o(b){return b===41?y(b):Xb(e,c,h,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(b)}function c(b){return $e(b)?Iu(e,d)(b):y(b)}function h(b){return i(b)}function d(b){return b===34||b===39||b===40?Wb(e,p,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(b):y(b)}function p(b){return $e(b)?Iu(e,y)(b):y(b)}function y(b){return b===41?(e.enter("resourceMarker"),e.consume(b),e.exit("resourceMarker"),e.exit("resource"),t):i(b)}}function c_(e,t,i){const u=this;return s;function s(h){return Kb.call(u,e,o,c,"reference","referenceMarker","referenceString")(h)}function o(h){return u.parser.defined.includes(On(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?t(h):i(h)}function c(h){return i(h)}}function f_(e,t,i){return u;function u(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),s}function s(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):i(o)}}const h_={name:"labelStartImage",resolveAll:Yh.resolveAll,tokenize:d_};function d_(e,t,i){const u=this;return s;function s(h){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(h),e.exit("labelImageMarker"),o}function o(h){return h===91?(e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelImage"),c):i(h)}function c(h){return h===94&&"_hiddenFootnoteSupport"in u.parser.constructs?i(h):t(h)}}const m_={name:"labelStartLink",resolveAll:Yh.resolveAll,tokenize:p_};function p_(e,t,i){const u=this;return s;function s(c){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(c),e.exit("labelMarker"),e.exit("labelLink"),o}function o(c){return c===94&&"_hiddenFootnoteSupport"in u.parser.constructs?i(c):t(c)}}const zf={name:"lineEnding",tokenize:g_};function g_(e,t){return i;function i(u){return e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),Pe(e,t,"linePrefix")}}const Ds={name:"thematicBreak",tokenize:b_};function b_(e,t,i){let u=0,s;return o;function o(p){return e.enter("thematicBreak"),c(p)}function c(p){return s=p,h(p)}function h(p){return p===s?(e.enter("thematicBreakSequence"),d(p)):u>=3&&(p===null||Ae(p))?(e.exit("thematicBreak"),t(p)):i(p)}function d(p){return p===s?(e.consume(p),u++,d):(e.exit("thematicBreakSequence"),Me(p)?Pe(e,h,"whitespace")(p):h(p))}}const Wt={continuation:{tokenize:v_},exit:x_,name:"list",tokenize:T_},y_={partial:!0,tokenize:w_},E_={partial:!0,tokenize:A_};function T_(e,t,i){const u=this,s=u.events[u.events.length-1];let o=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,c=0;return h;function h(T){const A=u.containerState.type||(T===42||T===43||T===45?"listUnordered":"listOrdered");if(A==="listUnordered"?!u.containerState.marker||T===u.containerState.marker:ch(T)){if(u.containerState.type||(u.containerState.type=A,e.enter(A,{_container:!0})),A==="listUnordered")return e.enter("listItemPrefix"),T===42||T===45?e.check(Ds,i,p)(T):p(T);if(!u.interrupt||T===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),d(T)}return i(T)}function d(T){return ch(T)&&++c<10?(e.consume(T),d):(!u.interrupt||c<2)&&(u.containerState.marker?T===u.containerState.marker:T===41||T===46)?(e.exit("listItemValue"),p(T)):i(T)}function p(T){return e.enter("listItemMarker"),e.consume(T),e.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||T,e.check($u,u.interrupt?i:y,e.attempt(y_,v,b))}function y(T){return u.containerState.initialBlankLine=!0,o++,v(T)}function b(T){return Me(T)?(e.enter("listItemPrefixWhitespace"),e.consume(T),e.exit("listItemPrefixWhitespace"),v):i(T)}function v(T){return u.containerState.size=o+u.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(T)}}function v_(e,t,i){const u=this;return u.containerState._closeFlow=void 0,e.check($u,s,o);function s(h){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,Pe(e,t,"listItemIndent",u.containerState.size+1)(h)}function o(h){return u.containerState.furtherBlankLines||!Me(h)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,c(h)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,e.attempt(E_,t,c)(h))}function c(h){return u.containerState._closeFlow=!0,u.interrupt=void 0,Pe(e,e.attempt(Wt,t,i),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h)}}function A_(e,t,i){const u=this;return Pe(e,s,"listItemIndent",u.containerState.size+1);function s(o){const c=u.events[u.events.length-1];return c&&c[1].type==="listItemIndent"&&c[2].sliceSerialize(c[1],!0).length===u.containerState.size?t(o):i(o)}}function x_(e){e.exit(this.containerState.type)}function w_(e,t,i){const u=this;return Pe(e,s,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(o){const c=u.events[u.events.length-1];return!Me(o)&&c&&c[1].type==="listItemPrefixWhitespace"?t(o):i(o)}}const Ug={name:"setextUnderline",resolveTo:S_,tokenize:__};function S_(e,t){let i=e.length,u,s,o;for(;i--;)if(e[i][0]==="enter"){if(e[i][1].type==="content"){u=i;break}e[i][1].type==="paragraph"&&(s=i)}else e[i][1].type==="content"&&e.splice(i,1),!o&&e[i][1].type==="definition"&&(o=i);const c={type:"setextHeading",start:{...e[u][1].start},end:{...e[e.length-1][1].end}};return e[s][1].type="setextHeadingText",o?(e.splice(s,0,["enter",c,t]),e.splice(o+1,0,["exit",e[u][1],t]),e[u][1].end={...e[o][1].end}):e[u][1]=c,e.push(["exit",c,t]),e}function __(e,t,i){const u=this;let s;return o;function o(p){let y=u.events.length,b;for(;y--;)if(u.events[y][1].type!=="lineEnding"&&u.events[y][1].type!=="linePrefix"&&u.events[y][1].type!=="content"){b=u.events[y][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||b)?(e.enter("setextHeadingLine"),s=p,c(p)):i(p)}function c(p){return e.enter("setextHeadingLineSequence"),h(p)}function h(p){return p===s?(e.consume(p),h):(e.exit("setextHeadingLineSequence"),Me(p)?Pe(e,d,"lineSuffix")(p):d(p))}function d(p){return p===null||Ae(p)?(e.exit("setextHeadingLine"),t(p)):i(p)}}const C_={tokenize:M_,partial:!0};function N_(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:L_,continuation:{tokenize:D_},exit:I_}},text:{91:{name:"gfmFootnoteCall",tokenize:k_},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:O_,resolveTo:R_}}}}function O_(e,t,i){const u=this;let s=u.events.length;const o=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let c;for(;s--;){const d=u.events[s][1];if(d.type==="labelImage"){c=d;break}if(d.type==="gfmFootnoteCall"||d.type==="labelLink"||d.type==="label"||d.type==="image"||d.type==="link")break}return h;function h(d){if(!c||!c._balanced)return i(d);const p=On(u.sliceSerialize({start:c.end,end:u.now()}));return p.codePointAt(0)!==94||!o.includes(p.slice(1))?i(d):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),t(d))}}function R_(e,t){let i=e.length;for(;i--;)if(e[i][1].type==="labelImage"&&e[i][0]==="enter"){e[i][1];break}e[i+1][1].type="data",e[i+3][1].type="gfmFootnoteCallLabelMarker";const u={type:"gfmFootnoteCall",start:Object.assign({},e[i+3][1].start),end:Object.assign({},e[e.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},e[i+3][1].end),end:Object.assign({},e[i+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},e[e.length-1][1].start)},c={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},h=[e[i+1],e[i+2],["enter",u,t],e[i+3],e[i+4],["enter",s,t],["exit",s,t],["enter",o,t],["enter",c,t],["exit",c,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",u,t]];return e.splice(i,e.length-i+1,...h),e}function k_(e,t,i){const u=this,s=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let o=0,c;return h;function h(b){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(b),e.exit("gfmFootnoteCallLabelMarker"),d}function d(b){return b!==94?i(b):(e.enter("gfmFootnoteCallMarker"),e.consume(b),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",p)}function p(b){if(o>999||b===93&&!c||b===null||b===91||$e(b))return i(b);if(b===93){e.exit("chunkString");const v=e.exit("gfmFootnoteCallString");return s.includes(On(u.sliceSerialize(v)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(b),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):i(b)}return $e(b)||(c=!0),o++,e.consume(b),b===92?y:p}function y(b){return b===91||b===92||b===93?(e.consume(b),o++,p):p(b)}}function L_(e,t,i){const u=this,s=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let o,c=0,h;return d;function d(A){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(A),e.exit("gfmFootnoteDefinitionLabelMarker"),p}function p(A){return A===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(A),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",y):i(A)}function y(A){if(c>999||A===93&&!h||A===null||A===91||$e(A))return i(A);if(A===93){e.exit("chunkString");const C=e.exit("gfmFootnoteDefinitionLabelString");return o=On(u.sliceSerialize(C)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(A),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),v}return $e(A)||(h=!0),c++,e.consume(A),A===92?b:y}function b(A){return A===91||A===92||A===93?(e.consume(A),c++,y):y(A)}function v(A){return A===58?(e.enter("definitionMarker"),e.consume(A),e.exit("definitionMarker"),s.includes(o)||s.push(o),Pe(e,T,"gfmFootnoteDefinitionWhitespace")):i(A)}function T(A){return t(A)}}function D_(e,t,i){return e.check($u,t,e.attempt(C_,t,i))}function I_(e){e.exit("gfmFootnoteDefinition")}function M_(e,t,i){const u=this;return Pe(e,s,"gfmFootnoteDefinitionIndent",5);function s(o){const c=u.events[u.events.length-1];return c&&c[1].type==="gfmFootnoteDefinitionIndent"&&c[2].sliceSerialize(c[1],!0).length===4?t(o):i(o)}}function B_(e){let i=(e||{}).singleTilde;const u={name:"strikethrough",tokenize:o,resolveAll:s};return i==null&&(i=!0),{text:{126:u},insideSpan:{null:[u]},attentionMarkers:{null:[126]}};function s(c,h){let d=-1;for(;++d<c.length;)if(c[d][0]==="enter"&&c[d][1].type==="strikethroughSequenceTemporary"&&c[d][1]._close){let p=d;for(;p--;)if(c[p][0]==="exit"&&c[p][1].type==="strikethroughSequenceTemporary"&&c[p][1]._open&&c[d][1].end.offset-c[d][1].start.offset===c[p][1].end.offset-c[p][1].start.offset){c[d][1].type="strikethroughSequence",c[p][1].type="strikethroughSequence";const y={type:"strikethrough",start:Object.assign({},c[p][1].start),end:Object.assign({},c[d][1].end)},b={type:"strikethroughText",start:Object.assign({},c[p][1].end),end:Object.assign({},c[d][1].start)},v=[["enter",y,h],["enter",c[p][1],h],["exit",c[p][1],h],["enter",b,h]],T=h.parser.constructs.insideSpan.null;T&&on(v,v.length,0,to(T,c.slice(p+1,d),h)),on(v,v.length,0,[["exit",b,h],["enter",c[d][1],h],["exit",c[d][1],h],["exit",y,h]]),on(c,p-1,d-p+3,v),d=p+v.length-2;break}}for(d=-1;++d<c.length;)c[d][1].type==="strikethroughSequenceTemporary"&&(c[d][1].type="data");return c}function o(c,h,d){const p=this.previous,y=this.events;let b=0;return v;function v(A){return p===126&&y[y.length-1][1].type!=="characterEscape"?d(A):(c.enter("strikethroughSequenceTemporary"),T(A))}function T(A){const C=Ea(p);if(A===126)return b>1?d(A):(c.consume(A),b++,T);if(b<2&&!i)return d(A);const R=c.exit("strikethroughSequenceTemporary"),N=Ea(A);return R._open=!N||N===2&&!!C,R._close=!C||C===2&&!!N,h(A)}}}class F_{constructor(){this.map=[]}add(t,i,u){U_(this,t,i,u)}consume(t){if(this.map.sort(function(o,c){return o[0]-c[0]}),this.map.length===0)return;let i=this.map.length;const u=[];for(;i>0;)i-=1,u.push(t.slice(this.map[i][0]+this.map[i][1]),this.map[i][2]),t.length=this.map[i][0];u.push(t.slice()),t.length=0;let s=u.pop();for(;s;){for(const o of s)t.push(o);s=u.pop()}this.map.length=0}}function U_(e,t,i,u){let s=0;if(!(i===0&&u.length===0)){for(;s<e.map.length;){if(e.map[s][0]===t){e.map[s][1]+=i,e.map[s][2].push(...u);return}s+=1}e.map.push([t,i,u])}}function H_(e,t){let i=!1;const u=[];for(;t<e.length;){const s=e[t];if(i){if(s[0]==="enter")s[1].type==="tableContent"&&u.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(s[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const o=u.length-1;u[o]=u[o]==="left"?"center":"right"}}else if(s[1].type==="tableDelimiterRow")break}else s[0]==="enter"&&s[1].type==="tableDelimiterRow"&&(i=!0);t+=1}return u}function P_(){return{flow:{null:{name:"table",tokenize:z_,resolveAll:j_}}}}function z_(e,t,i){const u=this;let s=0,o=0,c;return h;function h(Y){let oe=u.events.length-1;for(;oe>-1;){const ae=u.events[oe][1].type;if(ae==="lineEnding"||ae==="linePrefix")oe--;else break}const fe=oe>-1?u.events[oe][1].type:null,me=fe==="tableHead"||fe==="tableRow"?G:d;return me===G&&u.parser.lazy[u.now().line]?i(Y):me(Y)}function d(Y){return e.enter("tableHead"),e.enter("tableRow"),p(Y)}function p(Y){return Y===124||(c=!0,o+=1),y(Y)}function y(Y){return Y===null?i(Y):Ae(Y)?o>1?(o=0,u.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(Y),e.exit("lineEnding"),T):i(Y):Me(Y)?Pe(e,y,"whitespace")(Y):(o+=1,c&&(c=!1,s+=1),Y===124?(e.enter("tableCellDivider"),e.consume(Y),e.exit("tableCellDivider"),c=!0,y):(e.enter("data"),b(Y)))}function b(Y){return Y===null||Y===124||$e(Y)?(e.exit("data"),y(Y)):(e.consume(Y),Y===92?v:b)}function v(Y){return Y===92||Y===124?(e.consume(Y),b):b(Y)}function T(Y){return u.interrupt=!1,u.parser.lazy[u.now().line]?i(Y):(e.enter("tableDelimiterRow"),c=!1,Me(Y)?Pe(e,A,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Y):A(Y))}function A(Y){return Y===45||Y===58?R(Y):Y===124?(c=!0,e.enter("tableCellDivider"),e.consume(Y),e.exit("tableCellDivider"),C):ne(Y)}function C(Y){return Me(Y)?Pe(e,R,"whitespace")(Y):R(Y)}function R(Y){return Y===58?(o+=1,c=!0,e.enter("tableDelimiterMarker"),e.consume(Y),e.exit("tableDelimiterMarker"),N):Y===45?(o+=1,N(Y)):Y===null||Ae(Y)?ee(Y):ne(Y)}function N(Y){return Y===45?(e.enter("tableDelimiterFiller"),D(Y)):ne(Y)}function D(Y){return Y===45?(e.consume(Y),D):Y===58?(c=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(Y),e.exit("tableDelimiterMarker"),F):(e.exit("tableDelimiterFiller"),F(Y))}function F(Y){return Me(Y)?Pe(e,ee,"whitespace")(Y):ee(Y)}function ee(Y){return Y===124?A(Y):Y===null||Ae(Y)?!c||s!==o?ne(Y):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(Y)):ne(Y)}function ne(Y){return i(Y)}function G(Y){return e.enter("tableRow"),se(Y)}function se(Y){return Y===124?(e.enter("tableCellDivider"),e.consume(Y),e.exit("tableCellDivider"),se):Y===null||Ae(Y)?(e.exit("tableRow"),t(Y)):Me(Y)?Pe(e,se,"whitespace")(Y):(e.enter("data"),ye(Y))}function ye(Y){return Y===null||Y===124||$e(Y)?(e.exit("data"),se(Y)):(e.consume(Y),Y===92?de:ye)}function de(Y){return Y===92||Y===124?(e.consume(Y),ye):ye(Y)}}function j_(e,t){let i=-1,u=!0,s=0,o=[0,0,0,0],c=[0,0,0,0],h=!1,d=0,p,y,b;const v=new F_;for(;++i<e.length;){const T=e[i],A=T[1];T[0]==="enter"?A.type==="tableHead"?(h=!1,d!==0&&(Hg(v,t,d,p,y),y=void 0,d=0),p={type:"table",start:Object.assign({},A.start),end:Object.assign({},A.end)},v.add(i,0,[["enter",p,t]])):A.type==="tableRow"||A.type==="tableDelimiterRow"?(u=!0,b=void 0,o=[0,0,0,0],c=[0,i+1,0,0],h&&(h=!1,y={type:"tableBody",start:Object.assign({},A.start),end:Object.assign({},A.end)},v.add(i,0,[["enter",y,t]])),s=A.type==="tableDelimiterRow"?2:y?3:1):s&&(A.type==="data"||A.type==="tableDelimiterMarker"||A.type==="tableDelimiterFiller")?(u=!1,c[2]===0&&(o[1]!==0&&(c[0]=c[1],b=Ss(v,t,o,s,void 0,b),o=[0,0,0,0]),c[2]=i)):A.type==="tableCellDivider"&&(u?u=!1:(o[1]!==0&&(c[0]=c[1],b=Ss(v,t,o,s,void 0,b)),o=c,c=[o[1],i,0,0])):A.type==="tableHead"?(h=!0,d=i):A.type==="tableRow"||A.type==="tableDelimiterRow"?(d=i,o[1]!==0?(c[0]=c[1],b=Ss(v,t,o,s,i,b)):c[1]!==0&&(b=Ss(v,t,c,s,i,b)),s=0):s&&(A.type==="data"||A.type==="tableDelimiterMarker"||A.type==="tableDelimiterFiller")&&(c[3]=i)}for(d!==0&&Hg(v,t,d,p,y),v.consume(t.events),i=-1;++i<t.events.length;){const T=t.events[i];T[0]==="enter"&&T[1].type==="table"&&(T[1]._align=H_(t.events,i))}return e}function Ss(e,t,i,u,s,o){const c=u===1?"tableHeader":u===2?"tableDelimiter":"tableData",h="tableContent";i[0]!==0&&(o.end=Object.assign({},da(t.events,i[0])),e.add(i[0],0,[["exit",o,t]]));const d=da(t.events,i[1]);if(o={type:c,start:Object.assign({},d),end:Object.assign({},d)},e.add(i[1],0,[["enter",o,t]]),i[2]!==0){const p=da(t.events,i[2]),y=da(t.events,i[3]),b={type:h,start:Object.assign({},p),end:Object.assign({},y)};if(e.add(i[2],0,[["enter",b,t]]),u!==2){const v=t.events[i[2]],T=t.events[i[3]];if(v[1].end=Object.assign({},T[1].end),v[1].type="chunkText",v[1].contentType="text",i[3]>i[2]+1){const A=i[2]+1,C=i[3]-i[2]-1;e.add(A,C,[])}}e.add(i[3]+1,0,[["exit",b,t]])}return s!==void 0&&(o.end=Object.assign({},da(t.events,s)),e.add(s,0,[["exit",o,t]]),o=void 0),o}function Hg(e,t,i,u,s){const o=[],c=da(t.events,i);s&&(s.end=Object.assign({},c),o.push(["exit",s,t])),u.end=Object.assign({},c),o.push(["exit",u,t]),e.add(i+1,0,o)}function da(e,t){const i=e[t],u=i[0]==="enter"?"start":"end";return i[1][u]}const q_={name:"tasklistCheck",tokenize:V_};function Y_(){return{text:{91:q_}}}function V_(e,t,i){const u=this;return s;function s(d){return u.previous!==null||!u._gfmTasklistFirstContentOfListItem?i(d):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(d),e.exit("taskListCheckMarker"),o)}function o(d){return $e(d)?(e.enter("taskListCheckValueUnchecked"),e.consume(d),e.exit("taskListCheckValueUnchecked"),c):d===88||d===120?(e.enter("taskListCheckValueChecked"),e.consume(d),e.exit("taskListCheckValueChecked"),c):i(d)}function c(d){return d===93?(e.enter("taskListCheckMarker"),e.consume(d),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),h):i(d)}function h(d){return Ae(d)?t(d):Me(d)?e.check({tokenize:G_},t,i)(d):i(d)}}function G_(e,t,i){return Pe(e,u,"whitespace");function u(s){return s===null?i(s):t(s)}}function Q_(e){return Mb([rS(),N_(),B_(e),P_(),Y_()])}const X_={};function di(e){const t=this,i=e||X_,u=t.data(),s=u.micromarkExtensions||(u.micromarkExtensions=[]),o=u.fromMarkdownExtensions||(u.fromMarkdownExtensions=[]),c=u.toMarkdownExtensions||(u.toMarkdownExtensions=[]);s.push(Q_(i)),o.push(Zw()),c.push(Jw(i))}function Pg(e){const t=[],i=String(e||"");let u=i.indexOf(","),s=0,o=!1;for(;!o;){u===-1&&(u=i.length,o=!0);const c=i.slice(s,u).trim();(c||!o)&&t.push(c),s=u+1,u=i.indexOf(",",s)}return t}function Zb(e,t){const i={};return(e[e.length-1]===""?[...e,""]:e).join((i.padRight?" ":"")+","+(i.padLeft===!1?"":" ")).trim()}const K_=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,W_=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Z_={};function zg(e,t){return(Z_.jsx?W_:K_).test(e)}const J_=/[ \t\n\f\r]/g;function $_(e){return typeof e=="object"?e.type==="text"?jg(e.value):!1:jg(e)}function jg(e){return e.replace(J_,"")===""}let el=class{constructor(t,i,u){this.normal=i,this.property=t,u&&(this.space=u)}};el.prototype.normal={};el.prototype.property={};el.prototype.space=void 0;function Jb(e,t){const i={},u={};for(const s of e)Object.assign(i,s.property),Object.assign(u,s.normal);return new el(i,u,t)}function Yu(e){return e.toLowerCase()}class Jt{constructor(t,i){this.attribute=i,this.property=t}}Jt.prototype.attribute="";Jt.prototype.booleanish=!1;Jt.prototype.boolean=!1;Jt.prototype.commaOrSpaceSeparated=!1;Jt.prototype.commaSeparated=!1;Jt.prototype.defined=!1;Jt.prototype.mustUseProperty=!1;Jt.prototype.number=!1;Jt.prototype.overloadedBoolean=!1;Jt.prototype.property="";Jt.prototype.spaceSeparated=!1;Jt.prototype.space=void 0;let eC=0;const Oe=Ti(),gt=Ti(),mh=Ti(),ue=Ti(),et=Ti(),ya=Ti(),sn=Ti();function Ti(){return 2**++eC}const ph=Object.freeze(Object.defineProperty({__proto__:null,boolean:Oe,booleanish:gt,commaOrSpaceSeparated:sn,commaSeparated:ya,number:ue,overloadedBoolean:mh,spaceSeparated:et},Symbol.toStringTag,{value:"Module"})),jf=Object.keys(ph);class Vh extends Jt{constructor(t,i,u,s){let o=-1;if(super(t,i),qg(this,"space",s),typeof u=="number")for(;++o<jf.length;){const c=jf[o];qg(this,jf[o],(u&ph[c])===ph[c])}}}Vh.prototype.defined=!0;function qg(e,t,i){i&&(e[t]=i)}function _a(e){const t={},i={};for(const[u,s]of Object.entries(e.properties)){const o=new Vh(u,e.transform(e.attributes||{},u),s,e.space);e.mustUseProperty&&e.mustUseProperty.includes(u)&&(o.mustUseProperty=!0),t[u]=o,i[Yu(u)]=u,i[Yu(o.attribute)]=u}return new el(t,i,e.space)}const $b=_a({properties:{ariaActiveDescendant:null,ariaAtomic:gt,ariaAutoComplete:null,ariaBusy:gt,ariaChecked:gt,ariaColCount:ue,ariaColIndex:ue,ariaColSpan:ue,ariaControls:et,ariaCurrent:null,ariaDescribedBy:et,ariaDetails:null,ariaDisabled:gt,ariaDropEffect:et,ariaErrorMessage:null,ariaExpanded:gt,ariaFlowTo:et,ariaGrabbed:gt,ariaHasPopup:null,ariaHidden:gt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:et,ariaLevel:ue,ariaLive:null,ariaModal:gt,ariaMultiLine:gt,ariaMultiSelectable:gt,ariaOrientation:null,ariaOwns:et,ariaPlaceholder:null,ariaPosInSet:ue,ariaPressed:gt,ariaReadOnly:gt,ariaRelevant:null,ariaRequired:gt,ariaRoleDescription:et,ariaRowCount:ue,ariaRowIndex:ue,ariaRowSpan:ue,ariaSelected:gt,ariaSetSize:ue,ariaSort:null,ariaValueMax:ue,ariaValueMin:ue,ariaValueNow:ue,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function ey(e,t){return t in e?e[t]:t}function ty(e,t){return ey(e,t.toLowerCase())}const tC=_a({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ya,acceptCharset:et,accessKey:et,action:null,allow:null,allowFullScreen:Oe,allowPaymentRequest:Oe,allowUserMedia:Oe,alt:null,as:null,async:Oe,autoCapitalize:null,autoComplete:et,autoFocus:Oe,autoPlay:Oe,blocking:et,capture:null,charSet:null,checked:Oe,cite:null,className:et,cols:ue,colSpan:null,content:null,contentEditable:gt,controls:Oe,controlsList:et,coords:ue|ya,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Oe,defer:Oe,dir:null,dirName:null,disabled:Oe,download:mh,draggable:gt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Oe,formTarget:null,headers:et,height:ue,hidden:mh,high:ue,href:null,hrefLang:null,htmlFor:et,httpEquiv:et,id:null,imageSizes:null,imageSrcSet:null,inert:Oe,inputMode:null,integrity:null,is:null,isMap:Oe,itemId:null,itemProp:et,itemRef:et,itemScope:Oe,itemType:et,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Oe,low:ue,manifest:null,max:null,maxLength:ue,media:null,method:null,min:null,minLength:ue,multiple:Oe,muted:Oe,name:null,nonce:null,noModule:Oe,noValidate:Oe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Oe,optimum:ue,pattern:null,ping:et,placeholder:null,playsInline:Oe,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Oe,referrerPolicy:null,rel:et,required:Oe,reversed:Oe,rows:ue,rowSpan:ue,sandbox:et,scope:null,scoped:Oe,seamless:Oe,selected:Oe,shadowRootClonable:Oe,shadowRootDelegatesFocus:Oe,shadowRootMode:null,shape:null,size:ue,sizes:null,slot:null,span:ue,spellCheck:gt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ue,step:null,style:null,tabIndex:ue,target:null,title:null,translate:null,type:null,typeMustMatch:Oe,useMap:null,value:gt,width:ue,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:et,axis:null,background:null,bgColor:null,border:ue,borderColor:null,bottomMargin:ue,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Oe,declare:Oe,event:null,face:null,frame:null,frameBorder:null,hSpace:ue,leftMargin:ue,link:null,longDesc:null,lowSrc:null,marginHeight:ue,marginWidth:ue,noResize:Oe,noHref:Oe,noShade:Oe,noWrap:Oe,object:null,profile:null,prompt:null,rev:null,rightMargin:ue,rules:null,scheme:null,scrolling:gt,standby:null,summary:null,text:null,topMargin:ue,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ue,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Oe,disableRemotePlayback:Oe,prefix:null,property:null,results:ue,security:null,unselectable:null},space:"html",transform:ty}),nC=_a({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:sn,accentHeight:ue,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ue,amplitude:ue,arabicForm:null,ascent:ue,attributeName:null,attributeType:null,azimuth:ue,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ue,by:null,calcMode:null,capHeight:ue,className:et,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ue,diffuseConstant:ue,direction:null,display:null,dur:null,divisor:ue,dominantBaseline:null,download:Oe,dx:null,dy:null,edgeMode:null,editable:null,elevation:ue,enableBackground:null,end:null,event:null,exponent:ue,externalResourcesRequired:null,fill:null,fillOpacity:ue,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ya,g2:ya,glyphName:ya,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ue,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ue,horizOriginX:ue,horizOriginY:ue,id:null,ideographic:ue,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ue,k:ue,k1:ue,k2:ue,k3:ue,k4:ue,kernelMatrix:sn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ue,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ue,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ue,overlineThickness:ue,paintOrder:null,panose1:null,path:null,pathLength:ue,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:et,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ue,pointsAtY:ue,pointsAtZ:ue,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:sn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:sn,rev:sn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:sn,requiredFeatures:sn,requiredFonts:sn,requiredFormats:sn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ue,specularExponent:ue,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ue,strikethroughThickness:ue,string:null,stroke:null,strokeDashArray:sn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ue,strokeOpacity:ue,strokeWidth:null,style:null,surfaceScale:ue,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:sn,tabIndex:ue,tableValues:null,target:null,targetX:ue,targetY:ue,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:sn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ue,underlineThickness:ue,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ue,values:null,vAlphabetic:ue,vMathematical:ue,vectorEffect:null,vHanging:ue,vIdeographic:ue,version:null,vertAdvY:ue,vertOriginX:ue,vertOriginY:ue,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ue,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ey}),ny=_a({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),ry=_a({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ty}),iy=_a({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),rC={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},iC=/[A-Z]/g,Yg=/-[a-z]/g,aC=/^data[-\w.:]+$/i;function no(e,t){const i=Yu(t);let u=t,s=Jt;if(i in e.normal)return e.property[e.normal[i]];if(i.length>4&&i.slice(0,4)==="data"&&aC.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Yg,lC);u="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Yg.test(o)){let c=o.replace(iC,uC);c.charAt(0)!=="-"&&(c="-"+c),t="data"+c}}s=Vh}return new s(u,t)}function uC(e){return"-"+e.toLowerCase()}function lC(e){return e.charAt(1).toUpperCase()}const tl=Jb([$b,tC,ny,ry,iy],"html"),Qr=Jb([$b,nC,ny,ry,iy],"svg");function Vg(e){const t=String(e||"").trim();return t?t.split(/[ \t\n\r\f]+/g):[]}function ay(e){return e.join(" ").trim()}var ca={},qf,Gg;function sC(){if(Gg)return qf;Gg=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,i=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,o=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,h=/^\s+|\s+$/g,d=`
`,p="/",y="*",b="",v="comment",T="declaration";function A(R,N){if(typeof R!="string")throw new TypeError("First argument must be a string");if(!R)return[];N=N||{};var D=1,F=1;function ee(ae){var le=ae.match(t);le&&(D+=le.length);var z=ae.lastIndexOf(d);F=~z?ae.length-z:F+ae.length}function ne(){var ae={line:D,column:F};return function(le){return le.position=new G(ae),de(),le}}function G(ae){this.start=ae,this.end={line:D,column:F},this.source=N.source}G.prototype.content=R;function se(ae){var le=new Error(N.source+":"+D+":"+F+": "+ae);if(le.reason=ae,le.filename=N.source,le.line=D,le.column=F,le.source=R,!N.silent)throw le}function ye(ae){var le=ae.exec(R);if(le){var z=le[0];return ee(z),R=R.slice(z.length),le}}function de(){ye(i)}function Y(ae){var le;for(ae=ae||[];le=oe();)le!==!1&&ae.push(le);return ae}function oe(){var ae=ne();if(!(p!=R.charAt(0)||y!=R.charAt(1))){for(var le=2;b!=R.charAt(le)&&(y!=R.charAt(le)||p!=R.charAt(le+1));)++le;if(le+=2,b===R.charAt(le-1))return se("End of comment missing");var z=R.slice(2,le-2);return F+=2,ee(z),R=R.slice(le),F+=2,ae({type:v,comment:z})}}function fe(){var ae=ne(),le=ye(u);if(le){if(oe(),!ye(s))return se("property missing ':'");var z=ye(o),ie=ae({type:T,property:C(le[0].replace(e,b)),value:z?C(z[0].replace(e,b)):b});return ye(c),ie}}function me(){var ae=[];Y(ae);for(var le;le=fe();)le!==!1&&(ae.push(le),Y(ae));return ae}return de(),me()}function C(R){return R?R.replace(h,b):b}return qf=A,qf}var Qg;function oC(){if(Qg)return ca;Qg=1;var e=ca&&ca.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(ca,"__esModule",{value:!0}),ca.default=i;const t=e(sC());function i(u,s){let o=null;if(!u||typeof u!="string")return o;const c=(0,t.default)(u),h=typeof s=="function";return c.forEach(d=>{if(d.type!=="declaration")return;const{property:p,value:y}=d;h?s(p,y,d):y&&(o=o||{},o[p]=y)}),o}return ca}var Cu={},Xg;function cC(){if(Xg)return Cu;Xg=1,Object.defineProperty(Cu,"__esModule",{value:!0}),Cu.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,t=/-([a-z])/g,i=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,o=function(p){return!p||i.test(p)||e.test(p)},c=function(p,y){return y.toUpperCase()},h=function(p,y){return"".concat(y,"-")},d=function(p,y){return y===void 0&&(y={}),o(p)?p:(p=p.toLowerCase(),y.reactCompat?p=p.replace(s,h):p=p.replace(u,h),p.replace(t,c))};return Cu.camelCase=d,Cu}var Nu,Kg;function fC(){if(Kg)return Nu;Kg=1;var e=Nu&&Nu.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},t=e(oC()),i=cC();function u(s,o){var c={};return!s||typeof s!="string"||(0,t.default)(s,function(h,d){h&&d&&(c[(0,i.camelCase)(h,o)]=d)}),c}return u.default=u,Nu=u,Nu}var hC=fC();const dC=W1(hC),ro=uy("end"),zn=uy("start");function uy(e){return t;function t(i){const u=i&&i.position&&i.position[e]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function mC(e){const t=zn(e),i=ro(e);if(t&&i)return{start:t,end:i}}function Mu(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Wg(e.position):"start"in e||"end"in e?Wg(e):"line"in e||"column"in e?gh(e):""}function gh(e){return Zg(e&&e.line)+":"+Zg(e&&e.column)}function Wg(e){return gh(e&&e.start)+"-"+gh(e&&e.end)}function Zg(e){return e&&typeof e=="number"?e:1}class Dt extends Error{constructor(t,i,u){super(),typeof i=="string"&&(u=i,i=void 0);let s="",o={},c=!1;if(i&&("line"in i&&"column"in i?o={place:i}:"start"in i&&"end"in i?o={place:i}:"type"in i?o={ancestors:[i],place:i.position}:o={...i}),typeof t=="string"?s=t:!o.cause&&t&&(c=!0,s=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof u=="string"){const d=u.indexOf(":");d===-1?o.ruleId=u:(o.source=u.slice(0,d),o.ruleId=u.slice(d+1))}if(!o.place&&o.ancestors&&o.ancestors){const d=o.ancestors[o.ancestors.length-1];d&&(o.place=d.position)}const h=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=h?h.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=h?h.line:void 0,this.name=Mu(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=c&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Dt.prototype.file="";Dt.prototype.name="";Dt.prototype.reason="";Dt.prototype.message="";Dt.prototype.stack="";Dt.prototype.column=void 0;Dt.prototype.line=void 0;Dt.prototype.ancestors=void 0;Dt.prototype.cause=void 0;Dt.prototype.fatal=void 0;Dt.prototype.place=void 0;Dt.prototype.ruleId=void 0;Dt.prototype.source=void 0;const Gh={}.hasOwnProperty,pC=new Map,gC=/[A-Z]/g,bC=new Set(["table","tbody","thead","tfoot","tr"]),yC=new Set(["td","th"]),ly="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function EC(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const i=t.filePath||void 0;let u;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=CC(i,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=_C(i,t.jsx,t.jsxs)}const s={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:u,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:i,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Qr:tl,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=sy(s,e,void 0);return o&&typeof o!="string"?o:s.create(e,s.Fragment,{children:o||void 0},void 0)}function sy(e,t,i){if(t.type==="element")return TC(e,t,i);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return vC(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return xC(e,t,i);if(t.type==="mdxjsEsm")return AC(e,t);if(t.type==="root")return wC(e,t,i);if(t.type==="text")return SC(e,t)}function TC(e,t,i){const u=e.schema;let s=u;t.tagName.toLowerCase()==="svg"&&u.space==="html"&&(s=Qr,e.schema=s),e.ancestors.push(t);const o=cy(e,t.tagName,!1),c=NC(e,t);let h=Xh(e,t);return bC.has(t.tagName)&&(h=h.filter(function(d){return typeof d=="string"?!$_(d):!0})),oy(e,c,o,t),Qh(c,h),e.ancestors.pop(),e.schema=u,e.create(t,o,c,i)}function vC(e,t){if(t.data&&t.data.estree&&e.evaluater){const u=t.data.estree.body[0];return u.type,e.evaluater.evaluateExpression(u.expression)}Vu(e,t.position)}function AC(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Vu(e,t.position)}function xC(e,t,i){const u=e.schema;let s=u;t.name==="svg"&&u.space==="html"&&(s=Qr,e.schema=s),e.ancestors.push(t);const o=t.name===null?e.Fragment:cy(e,t.name,!0),c=OC(e,t),h=Xh(e,t);return oy(e,c,o,t),Qh(c,h),e.ancestors.pop(),e.schema=u,e.create(t,o,c,i)}function wC(e,t,i){const u={};return Qh(u,Xh(e,t)),e.create(t,e.Fragment,u,i)}function SC(e,t){return t.value}function oy(e,t,i,u){typeof i!="string"&&i!==e.Fragment&&e.passNode&&(t.node=u)}function Qh(e,t){if(t.length>0){const i=t.length>1?t:t[0];i&&(e.children=i)}}function _C(e,t,i){return u;function u(s,o,c,h){const p=Array.isArray(c.children)?i:t;return h?p(o,c,h):p(o,c)}}function CC(e,t){return i;function i(u,s,o,c){const h=Array.isArray(o.children),d=zn(u);return t(s,o,c,h,{columnNumber:d?d.column-1:void 0,fileName:e,lineNumber:d?d.line:void 0},void 0)}}function NC(e,t){const i={};let u,s;for(s in t.properties)if(s!=="children"&&Gh.call(t.properties,s)){const o=RC(e,s,t.properties[s]);if(o){const[c,h]=o;e.tableCellAlignToStyle&&c==="align"&&typeof h=="string"&&yC.has(t.tagName)?u=h:i[c]=h}}if(u){const o=i.style||(i.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return i}function OC(e,t){const i={};for(const u of t.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&e.evaluater){const o=u.data.estree.body[0];o.type;const c=o.expression;c.type;const h=c.properties[0];h.type,Object.assign(i,e.evaluater.evaluateExpression(h.argument))}else Vu(e,t.position);else{const s=u.name;let o;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&e.evaluater){const h=u.value.data.estree.body[0];h.type,o=e.evaluater.evaluateExpression(h.expression)}else Vu(e,t.position);else o=u.value===null?!0:u.value;i[s]=o}return i}function Xh(e,t){const i=[];let u=-1;const s=e.passKeys?new Map:pC;for(;++u<t.children.length;){const o=t.children[u];let c;if(e.passKeys){const d=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(d){const p=s.get(d)||0;c=d+"-"+p,s.set(d,p+1)}}const h=sy(e,o,c);h!==void 0&&i.push(h)}return i}function RC(e,t,i){const u=no(e.schema,t);if(!(i==null||typeof i=="number"&&Number.isNaN(i))){if(Array.isArray(i)&&(i=u.commaSeparated?Zb(i):ay(i)),u.property==="style"){let s=typeof i=="object"?i:kC(e,String(i));return e.stylePropertyNameCase==="css"&&(s=LC(s)),["style",s]}return[e.elementAttributeNameCase==="react"&&u.space?rC[u.property]||u.property:u.attribute,i]}}function kC(e,t){try{return dC(t,{reactCompat:!0})}catch(i){if(e.ignoreInvalidStyle)return{};const u=i,s=new Dt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=e.filePath||void 0,s.url=ly+"#cannot-parse-style-attribute",s}}function cy(e,t,i){let u;if(!i)u={type:"Literal",value:t};else if(t.includes(".")){const s=t.split(".");let o=-1,c;for(;++o<s.length;){const h=zg(s[o])?{type:"Identifier",name:s[o]}:{type:"Literal",value:s[o]};c=c?{type:"MemberExpression",object:c,property:h,computed:!!(o&&h.type==="Literal"),optional:!1}:h}u=c}else u=zg(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(u.type==="Literal"){const s=u.value;return Gh.call(e.components,s)?e.components[s]:s}if(e.evaluater)return e.evaluater.evaluateExpression(u);Vu(e)}function Vu(e,t){const i=new Dt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=ly+"#cannot-handle-mdx-estrees-without-createevaluater",i}function LC(e){const t={};let i;for(i in e)Gh.call(e,i)&&(t[DC(i)]=e[i]);return t}function DC(e){let t=e.replace(gC,IC);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function IC(e){return"-"+e.toLowerCase()}const Yf={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},MC={tokenize:BC};function BC(e){const t=e.attempt(this.parser.constructs.contentInitial,u,s);let i;return t;function u(h){if(h===null){e.consume(h);return}return e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),Pe(e,t,"linePrefix")}function s(h){return e.enter("paragraph"),o(h)}function o(h){const d=e.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=d),i=d,c(h)}function c(h){if(h===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(h);return}return Ae(h)?(e.consume(h),e.exit("chunkText"),o):(e.consume(h),c)}}const FC={tokenize:UC},Jg={tokenize:HC};function UC(e){const t=this,i=[];let u=0,s,o,c;return h;function h(F){if(u<i.length){const ee=i[u];return t.containerState=ee[1],e.attempt(ee[0].continuation,d,p)(F)}return p(F)}function d(F){if(u++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,s&&D();const ee=t.events.length;let ne=ee,G;for(;ne--;)if(t.events[ne][0]==="exit"&&t.events[ne][1].type==="chunkFlow"){G=t.events[ne][1].end;break}N(u);let se=ee;for(;se<t.events.length;)t.events[se][1].end={...G},se++;return on(t.events,ne+1,0,t.events.slice(ee)),t.events.length=se,p(F)}return h(F)}function p(F){if(u===i.length){if(!s)return v(F);if(s.currentConstruct&&s.currentConstruct.concrete)return A(F);t.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Jg,y,b)(F)}function y(F){return s&&D(),N(u),v(F)}function b(F){return t.parser.lazy[t.now().line]=u!==i.length,c=t.now().offset,A(F)}function v(F){return t.containerState={},e.attempt(Jg,T,A)(F)}function T(F){return u++,i.push([t.currentConstruct,t.containerState]),v(F)}function A(F){if(F===null){s&&D(),N(0),e.consume(F);return}return s=s||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:o}),C(F)}function C(F){if(F===null){R(e.exit("chunkFlow"),!0),N(0),e.consume(F);return}return Ae(F)?(e.consume(F),R(e.exit("chunkFlow")),u=0,t.interrupt=void 0,h):(e.consume(F),C)}function R(F,ee){const ne=t.sliceStream(F);if(ee&&ne.push(null),F.previous=o,o&&(o.next=F),o=F,s.defineSkip(F.start),s.write(ne),t.parser.lazy[F.start.line]){let G=s.events.length;for(;G--;)if(s.events[G][1].start.offset<c&&(!s.events[G][1].end||s.events[G][1].end.offset>c))return;const se=t.events.length;let ye=se,de,Y;for(;ye--;)if(t.events[ye][0]==="exit"&&t.events[ye][1].type==="chunkFlow"){if(de){Y=t.events[ye][1].end;break}de=!0}for(N(u),G=se;G<t.events.length;)t.events[G][1].end={...Y},G++;on(t.events,ye+1,0,t.events.slice(se)),t.events.length=G}}function N(F){let ee=i.length;for(;ee-- >F;){const ne=i[ee];t.containerState=ne[1],ne[0].exit.call(t,e)}i.length=F}function D(){s.write([null]),o=void 0,s=void 0,t.containerState._closeFlow=void 0}}function HC(e,t,i){return Pe(e,e.attempt(this.parser.constructs.document,t,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}const PC={tokenize:zC};function zC(e){const t=this,i=e.attempt($u,u,e.attempt(this.parser.constructs.flowInitial,s,Pe(e,e.attempt(this.parser.constructs.flow,s,e.attempt(DS,s)),"linePrefix")));return i;function u(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,i}function s(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,i}}const jC={resolveAll:hy()},qC=fy("string"),YC=fy("text");function fy(e){return{resolveAll:hy(e==="text"?VC:void 0),tokenize:t};function t(i){const u=this,s=this.parser.constructs[e],o=i.attempt(s,c,h);return c;function c(y){return p(y)?o(y):h(y)}function h(y){if(y===null){i.consume(y);return}return i.enter("data"),i.consume(y),d}function d(y){return p(y)?(i.exit("data"),o(y)):(i.consume(y),d)}function p(y){if(y===null)return!0;const b=s[y];let v=-1;if(b)for(;++v<b.length;){const T=b[v];if(!T.previous||T.previous.call(u,u.previous))return!0}return!1}}}function hy(e){return t;function t(i,u){let s=-1,o;for(;++s<=i.length;)o===void 0?i[s]&&i[s][1].type==="data"&&(o=s,s++):(!i[s]||i[s][1].type!=="data")&&(s!==o+2&&(i[o][1].end=i[s-1][1].end,i.splice(o+2,s-o-2),s=o+2),o=void 0);return e?e(i,u):i}}function VC(e,t){let i=0;for(;++i<=e.length;)if((i===e.length||e[i][1].type==="lineEnding")&&e[i-1][1].type==="data"){const u=e[i-1][1],s=t.sliceStream(u);let o=s.length,c=-1,h=0,d;for(;o--;){const p=s[o];if(typeof p=="string"){for(c=p.length;p.charCodeAt(c-1)===32;)h++,c--;if(c)break;c=-1}else if(p===-2)d=!0,h++;else if(p!==-1){o++;break}}if(t._contentTypeTextTrailing&&i===e.length&&(h=0),h){const p={type:i===e.length||d||h<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?c:u.start._bufferIndex+c,_index:u.start._index+o,line:u.end.line,column:u.end.column-h,offset:u.end.offset-h},end:{...u.end}};u.end={...p.start},u.start.offset===u.end.offset?Object.assign(u,p):(e.splice(i,0,["enter",p,t],["exit",p,t]),i+=2)}i++}return e}const GC={42:Wt,43:Wt,45:Wt,48:Wt,49:Wt,50:Wt,51:Wt,52:Wt,53:Wt,54:Wt,55:Wt,56:Wt,57:Wt,62:Yb},QC={91:US},XC={[-2]:Pf,[-1]:Pf,32:Pf},KC={35:YS,42:Ds,45:[Ug,Ds],60:XS,61:Ug,95:Ds,96:Bg,126:Bg},WC={38:Gb,92:Vb},ZC={[-5]:zf,[-4]:zf,[-3]:zf,33:h_,38:Gb,42:dh,60:[mS,t_],91:m_,92:[jS,Vb],93:Yh,95:dh,96:CS},JC={null:[dh,jC]},$C={null:[42,95]},e3={null:[]},t3=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:$C,contentInitial:QC,disable:e3,document:GC,flow:KC,flowInitial:XC,insideSpan:JC,string:WC,text:ZC},Symbol.toStringTag,{value:"Module"}));function n3(e,t,i){let u={_bufferIndex:-1,_index:0,line:i&&i.line||1,column:i&&i.column||1,offset:i&&i.offset||0};const s={},o=[];let c=[],h=[];const d={attempt:se(ne),check:se(G),consume:D,enter:F,exit:ee,interrupt:se(G,{interrupt:!0})},p={code:null,containerState:{},defineSkip:C,events:[],now:A,parser:e,previous:null,sliceSerialize:v,sliceStream:T,write:b};let y=t.tokenize.call(p,d);return t.resolveAll&&o.push(t),p;function b(oe){return c=xn(c,oe),R(),c[c.length-1]!==null?[]:(ye(t,0),p.events=to(o,p.events,p),p.events)}function v(oe,fe){return i3(T(oe),fe)}function T(oe){return r3(c,oe)}function A(){const{_bufferIndex:oe,_index:fe,line:me,column:ae,offset:le}=u;return{_bufferIndex:oe,_index:fe,line:me,column:ae,offset:le}}function C(oe){s[oe.line]=oe.column,Y()}function R(){let oe;for(;u._index<c.length;){const fe=c[u._index];if(typeof fe=="string")for(oe=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===oe&&u._bufferIndex<fe.length;)N(fe.charCodeAt(u._bufferIndex));else N(fe)}}function N(oe){y=y(oe)}function D(oe){Ae(oe)?(u.line++,u.column=1,u.offset+=oe===-3?2:1,Y()):oe!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===c[u._index].length&&(u._bufferIndex=-1,u._index++)),p.previous=oe}function F(oe,fe){const me=fe||{};return me.type=oe,me.start=A(),p.events.push(["enter",me,p]),h.push(me),me}function ee(oe){const fe=h.pop();return fe.end=A(),p.events.push(["exit",fe,p]),fe}function ne(oe,fe){ye(oe,fe.from)}function G(oe,fe){fe.restore()}function se(oe,fe){return me;function me(ae,le,z){let ie,be,Re,L;return Array.isArray(ae)?W(ae):"tokenize"in ae?W([ae]):M(ae);function M(Te){return Be;function Be(rt){const Qe=rt!==null&&Te[rt],hn=rt!==null&&Te.null,jn=[...Array.isArray(Qe)?Qe:Qe?[Qe]:[],...Array.isArray(hn)?hn:hn?[hn]:[]];return W(jn)(rt)}}function W(Te){return ie=Te,be=0,Te.length===0?z:S(Te[be])}function S(Te){return Be;function Be(rt){return L=de(),Re=Te,Te.partial||(p.currentConstruct=Te),Te.name&&p.parser.constructs.disable.null.includes(Te.name)?we():Te.tokenize.call(fe?Object.assign(Object.create(p),fe):p,d,he,we)(rt)}}function he(Te){return oe(Re,L),le}function we(Te){return L.restore(),++be<ie.length?S(ie[be]):z}}}function ye(oe,fe){oe.resolveAll&&!o.includes(oe)&&o.push(oe),oe.resolve&&on(p.events,fe,p.events.length-fe,oe.resolve(p.events.slice(fe),p)),oe.resolveTo&&(p.events=oe.resolveTo(p.events,p))}function de(){const oe=A(),fe=p.previous,me=p.currentConstruct,ae=p.events.length,le=Array.from(h);return{from:ae,restore:z};function z(){u=oe,p.previous=fe,p.currentConstruct=me,p.events.length=ae,h=le,Y()}}function Y(){u.line in s&&u.column<2&&(u.column=s[u.line],u.offset+=s[u.line]-1)}}function r3(e,t){const i=t.start._index,u=t.start._bufferIndex,s=t.end._index,o=t.end._bufferIndex;let c;if(i===s)c=[e[i].slice(u,o)];else{if(c=e.slice(i,s),u>-1){const h=c[0];typeof h=="string"?c[0]=h.slice(u):c.shift()}o>0&&c.push(e[s].slice(0,o))}return c}function i3(e,t){let i=-1;const u=[];let s;for(;++i<e.length;){const o=e[i];let c;if(typeof o=="string")c=o;else switch(o){case-5:{c="\r";break}case-4:{c=`
`;break}case-3:{c=`\r
`;break}case-2:{c=t?" ":"	";break}case-1:{if(!t&&s)continue;c=" ";break}default:c=String.fromCharCode(o)}s=o===-2,u.push(c)}return u.join("")}function a3(e){const u={constructs:Mb([t3,...(e||{}).extensions||[]]),content:s(MC),defined:[],document:s(FC),flow:s(PC),lazy:{},string:s(qC),text:s(YC)};return u;function s(o){return c;function c(h){return n3(u,o,h)}}}function u3(e){for(;!Qb(e););return e}const $g=/[\0\t\n\r]/g;function l3(){let e=1,t="",i=!0,u;return s;function s(o,c,h){const d=[];let p,y,b,v,T;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(c||void 0).decode(o)),b=0,t="",i&&(o.charCodeAt(0)===65279&&b++,i=void 0);b<o.length;){if($g.lastIndex=b,p=$g.exec(o),v=p&&p.index!==void 0?p.index:o.length,T=o.charCodeAt(v),!p){t=o.slice(b);break}if(T===10&&b===v&&u)d.push(-3),u=void 0;else switch(u&&(d.push(-5),u=void 0),b<v&&(d.push(o.slice(b,v)),e+=v-b),T){case 0:{d.push(65533),e++;break}case 9:{for(y=Math.ceil(e/4)*4,d.push(-2);e++<y;)d.push(-1);break}case 10:{d.push(-4),e=1;break}default:u=!0,e=1}b=v+1}return h&&(u&&d.push(-5),t&&d.push(t),d.push(null)),d}}const dy={}.hasOwnProperty;function s3(e,t,i){return typeof t!="string"&&(i=t,t=void 0),o3(i)(u3(a3(i).document().write(l3()(e,t,!0))))}function o3(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(wi),autolinkProtocol:de,autolinkEmail:de,atxHeading:o(Ai),blockQuote:o(hn),characterEscape:de,characterReference:de,codeFenced:o(jn),codeFencedFenceInfo:c,codeFencedFenceMeta:c,codeIndented:o(jn,c),codeText:o(Ra,c),codeTextData:de,data:de,codeFlowValue:de,definition:o(al),definitionDestinationString:c,definitionLabelString:c,definitionTitleString:c,emphasis:o(qn),hardBreakEscape:o(xi),hardBreakTrailing:o(xi),htmlFlow:o(ul,c),htmlFlowData:de,htmlText:o(ul,c),htmlTextData:de,image:o(ll),label:c,link:o(wi),listItem:o(ka),listItemValue:v,listOrdered:o(Si,b),listUnordered:o(Si),paragraph:o(co),reference:S,referenceString:c,resourceDestinationString:c,resourceTitleString:c,setextHeading:o(Ai),strong:o(fo),thematicBreak:o(ho)},exit:{atxHeading:d(),atxHeadingSequence:ne,autolink:d(),autolinkEmail:Qe,autolinkProtocol:rt,blockQuote:d(),characterEscapeValue:Y,characterReferenceMarkerHexadecimal:we,characterReferenceMarkerNumeric:we,characterReferenceValue:Te,characterReference:Be,codeFenced:d(R),codeFencedFence:C,codeFencedFenceInfo:T,codeFencedFenceMeta:A,codeFlowValue:Y,codeIndented:d(N),codeText:d(le),codeTextData:Y,data:Y,definition:d(),definitionDestinationString:ee,definitionLabelString:D,definitionTitleString:F,emphasis:d(),hardBreakEscape:d(fe),hardBreakTrailing:d(fe),htmlFlow:d(me),htmlFlowData:Y,htmlText:d(ae),htmlTextData:Y,image:d(ie),label:Re,labelText:be,lineEnding:oe,link:d(z),listItem:d(),listOrdered:d(),listUnordered:d(),paragraph:d(),referenceString:he,resourceDestinationString:L,resourceTitleString:M,resource:W,setextHeading:d(ye),setextHeadingLineSequence:se,setextHeadingText:G,strong:d(),thematicBreak:d()}};my(t,(e||{}).mdastExtensions||[]);const i={};return u;function u(Z){let ce={type:"root",children:[]};const Se={stack:[ce],tokenStack:[],config:t,enter:h,exit:p,buffer:c,resume:y,data:i},Le=[];let Ye=-1;for(;++Ye<Z.length;)if(Z[Ye][1].type==="listOrdered"||Z[Ye][1].type==="listUnordered")if(Z[Ye][0]==="enter")Le.push(Ye);else{const $t=Le.pop();Ye=s(Z,$t,Ye)}for(Ye=-1;++Ye<Z.length;){const $t=t[Z[Ye][0]];dy.call($t,Z[Ye][1].type)&&$t[Z[Ye][1].type].call(Object.assign({sliceSerialize:Z[Ye][2].sliceSerialize},Se),Z[Ye][1])}if(Se.tokenStack.length>0){const $t=Se.tokenStack[Se.tokenStack.length-1];($t[1]||e1).call(Se,void 0,$t[0])}for(ce.position={start:Pr(Z.length>0?Z[0][1].start:{line:1,column:1,offset:0}),end:Pr(Z.length>0?Z[Z.length-2][1].end:{line:1,column:1,offset:0})},Ye=-1;++Ye<t.transforms.length;)ce=t.transforms[Ye](ce)||ce;return ce}function s(Z,ce,Se){let Le=ce-1,Ye=-1,$t=!1,Yn,Ft,yt,zt;for(;++Le<=Se;){const Ze=Z[Le];switch(Ze[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ze[0]==="enter"?Ye++:Ye--,zt=void 0;break}case"lineEndingBlank":{Ze[0]==="enter"&&(Yn&&!zt&&!Ye&&!yt&&(yt=Le),zt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:zt=void 0}if(!Ye&&Ze[0]==="enter"&&Ze[1].type==="listItemPrefix"||Ye===-1&&Ze[0]==="exit"&&(Ze[1].type==="listUnordered"||Ze[1].type==="listOrdered")){if(Yn){let pr=Le;for(Ft=void 0;pr--;){const Sn=Z[pr];if(Sn[1].type==="lineEnding"||Sn[1].type==="lineEndingBlank"){if(Sn[0]==="exit")continue;Ft&&(Z[Ft][1].type="lineEndingBlank",$t=!0),Sn[1].type="lineEnding",Ft=pr}else if(!(Sn[1].type==="linePrefix"||Sn[1].type==="blockQuotePrefix"||Sn[1].type==="blockQuotePrefixWhitespace"||Sn[1].type==="blockQuoteMarker"||Sn[1].type==="listItemIndent"))break}yt&&(!Ft||yt<Ft)&&(Yn._spread=!0),Yn.end=Object.assign({},Ft?Z[Ft][1].start:Ze[1].end),Z.splice(Ft||Le,0,["exit",Yn,Ze[2]]),Le++,Se++}if(Ze[1].type==="listItemPrefix"){const pr={type:"listItem",_spread:!1,start:Object.assign({},Ze[1].start),end:void 0};Yn=pr,Z.splice(Le,0,["enter",pr,Ze[2]]),Le++,Se++,yt=void 0,zt=!0}}}return Z[ce][1]._spread=$t,Se}function o(Z,ce){return Se;function Se(Le){h.call(this,Z(Le),Le),ce&&ce.call(this,Le)}}function c(){this.stack.push({type:"fragment",children:[]})}function h(Z,ce,Se){this.stack[this.stack.length-1].children.push(Z),this.stack.push(Z),this.tokenStack.push([ce,Se||void 0]),Z.position={start:Pr(ce.start),end:void 0}}function d(Z){return ce;function ce(Se){Z&&Z.call(this,Se),p.call(this,Se)}}function p(Z,ce){const Se=this.stack.pop(),Le=this.tokenStack.pop();if(Le)Le[0].type!==Z.type&&(ce?ce.call(this,Z,Le[0]):(Le[1]||e1).call(this,Z,Le[0]));else throw new Error("Cannot close `"+Z.type+"` ("+Mu({start:Z.start,end:Z.end})+"): it’s not open");Se.position.end=Pr(Z.end)}function y(){return Ph(this.stack.pop())}function b(){this.data.expectingFirstListItemValue=!0}function v(Z){if(this.data.expectingFirstListItemValue){const ce=this.stack[this.stack.length-2];ce.start=Number.parseInt(this.sliceSerialize(Z),10),this.data.expectingFirstListItemValue=void 0}}function T(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.lang=Z}function A(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.meta=Z}function C(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function R(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.value=Z.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function N(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.value=Z.replace(/(\r?\n|\r)$/g,"")}function D(Z){const ce=this.resume(),Se=this.stack[this.stack.length-1];Se.label=ce,Se.identifier=On(this.sliceSerialize(Z)).toLowerCase()}function F(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.title=Z}function ee(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.url=Z}function ne(Z){const ce=this.stack[this.stack.length-1];if(!ce.depth){const Se=this.sliceSerialize(Z).length;ce.depth=Se}}function G(){this.data.setextHeadingSlurpLineEnding=!0}function se(Z){const ce=this.stack[this.stack.length-1];ce.depth=this.sliceSerialize(Z).codePointAt(0)===61?1:2}function ye(){this.data.setextHeadingSlurpLineEnding=void 0}function de(Z){const Se=this.stack[this.stack.length-1].children;let Le=Se[Se.length-1];(!Le||Le.type!=="text")&&(Le=Bt(),Le.position={start:Pr(Z.start),end:void 0},Se.push(Le)),this.stack.push(Le)}function Y(Z){const ce=this.stack.pop();ce.value+=this.sliceSerialize(Z),ce.position.end=Pr(Z.end)}function oe(Z){const ce=this.stack[this.stack.length-1];if(this.data.atHardBreak){const Se=ce.children[ce.children.length-1];Se.position.end=Pr(Z.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(ce.type)&&(de.call(this,Z),Y.call(this,Z))}function fe(){this.data.atHardBreak=!0}function me(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.value=Z}function ae(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.value=Z}function le(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.value=Z}function z(){const Z=this.stack[this.stack.length-1];if(this.data.inReference){const ce=this.data.referenceType||"shortcut";Z.type+="Reference",Z.referenceType=ce,delete Z.url,delete Z.title}else delete Z.identifier,delete Z.label;this.data.referenceType=void 0}function ie(){const Z=this.stack[this.stack.length-1];if(this.data.inReference){const ce=this.data.referenceType||"shortcut";Z.type+="Reference",Z.referenceType=ce,delete Z.url,delete Z.title}else delete Z.identifier,delete Z.label;this.data.referenceType=void 0}function be(Z){const ce=this.sliceSerialize(Z),Se=this.stack[this.stack.length-2];Se.label=Uw(ce),Se.identifier=On(ce).toLowerCase()}function Re(){const Z=this.stack[this.stack.length-1],ce=this.resume(),Se=this.stack[this.stack.length-1];if(this.data.inReference=!0,Se.type==="link"){const Le=Z.children;Se.children=Le}else Se.alt=ce}function L(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.url=Z}function M(){const Z=this.resume(),ce=this.stack[this.stack.length-1];ce.title=Z}function W(){this.data.inReference=void 0}function S(){this.data.referenceType="collapsed"}function he(Z){const ce=this.resume(),Se=this.stack[this.stack.length-1];Se.label=ce,Se.identifier=On(this.sliceSerialize(Z)).toLowerCase(),this.data.referenceType="full"}function we(Z){this.data.characterReferenceType=Z.type}function Te(Z){const ce=this.sliceSerialize(Z),Se=this.data.characterReferenceType;let Le;Se?(Le=Ib(ce,Se==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Le=jh(ce);const Ye=this.stack[this.stack.length-1];Ye.value+=Le}function Be(Z){const ce=this.stack.pop();ce.position.end=Pr(Z.end)}function rt(Z){Y.call(this,Z);const ce=this.stack[this.stack.length-1];ce.url=this.sliceSerialize(Z)}function Qe(Z){Y.call(this,Z);const ce=this.stack[this.stack.length-1];ce.url="mailto:"+this.sliceSerialize(Z)}function hn(){return{type:"blockquote",children:[]}}function jn(){return{type:"code",lang:null,meta:null,value:""}}function Ra(){return{type:"inlineCode",value:""}}function al(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function qn(){return{type:"emphasis",children:[]}}function Ai(){return{type:"heading",depth:0,children:[]}}function xi(){return{type:"break"}}function ul(){return{type:"html",value:""}}function ll(){return{type:"image",title:null,url:"",alt:null}}function wi(){return{type:"link",title:null,url:"",children:[]}}function Si(Z){return{type:"list",ordered:Z.type==="listOrdered",start:null,spread:Z._spread,children:[]}}function ka(Z){return{type:"listItem",spread:Z._spread,checked:null,children:[]}}function co(){return{type:"paragraph",children:[]}}function fo(){return{type:"strong",children:[]}}function Bt(){return{type:"text",value:""}}function ho(){return{type:"thematicBreak"}}}function Pr(e){return{line:e.line,column:e.column,offset:e.offset}}function my(e,t){let i=-1;for(;++i<t.length;){const u=t[i];Array.isArray(u)?my(e,u):c3(e,u)}}function c3(e,t){let i;for(i in t)if(dy.call(t,i))switch(i){case"canContainEols":{const u=t[i];u&&e[i].push(...u);break}case"transforms":{const u=t[i];u&&e[i].push(...u);break}case"enter":case"exit":{const u=t[i];u&&Object.assign(e[i],u);break}}}function e1(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Mu({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Mu({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Mu({start:t.start,end:t.end})+") is still open")}function f3(e){const t=this;t.parser=i;function i(u){return s3(u,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function h3(e,t){const i={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,i),e.applyData(t,i)}function d3(e,t){const i={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,i),[e.applyData(t,i),{type:"text",value:`
`}]}function m3(e,t){const i=t.value?t.value+`
`:"",u={},s=t.lang?t.lang.split(/\s+/):[];s.length>0&&(u.className=["language-"+s[0]]);let o={type:"element",tagName:"code",properties:u,children:[{type:"text",value:i}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function p3(e,t){const i={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function g3(e,t){const i={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function b3(e,t){const i=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",u=String(t.identifier).toUpperCase(),s=Sa(u.toLowerCase()),o=e.footnoteOrder.indexOf(u);let c,h=e.footnoteCounts.get(u);h===void 0?(h=0,e.footnoteOrder.push(u),c=e.footnoteOrder.length):c=o+1,h+=1,e.footnoteCounts.set(u,h);const d={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+s,id:i+"fnref-"+s+(h>1?"-"+h:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(c)}]};e.patch(t,d);const p={type:"element",tagName:"sup",properties:{},children:[d]};return e.patch(t,p),e.applyData(t,p)}function y3(e,t){const i={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function E3(e,t){if(e.options.allowDangerousHtml){const i={type:"raw",value:t.value};return e.patch(t,i),e.applyData(t,i)}}function py(e,t){const i=t.referenceType;let u="]";if(i==="collapsed"?u+="[]":i==="full"&&(u+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+u}];const s=e.all(t),o=s[0];o&&o.type==="text"?o.value="["+o.value:s.unshift({type:"text",value:"["});const c=s[s.length-1];return c&&c.type==="text"?c.value+=u:s.push({type:"text",value:u}),s}function T3(e,t){const i=String(t.identifier).toUpperCase(),u=e.definitionById.get(i);if(!u)return py(e,t);const s={src:Sa(u.url||""),alt:t.alt};u.title!==null&&u.title!==void 0&&(s.title=u.title);const o={type:"element",tagName:"img",properties:s,children:[]};return e.patch(t,o),e.applyData(t,o)}function v3(e,t){const i={src:Sa(t.url)};t.alt!==null&&t.alt!==void 0&&(i.alt=t.alt),t.title!==null&&t.title!==void 0&&(i.title=t.title);const u={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,u),e.applyData(t,u)}function A3(e,t){const i={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,i);const u={type:"element",tagName:"code",properties:{},children:[i]};return e.patch(t,u),e.applyData(t,u)}function x3(e,t){const i=String(t.identifier).toUpperCase(),u=e.definitionById.get(i);if(!u)return py(e,t);const s={href:Sa(u.url||"")};u.title!==null&&u.title!==void 0&&(s.title=u.title);const o={type:"element",tagName:"a",properties:s,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function w3(e,t){const i={href:Sa(t.url)};t.title!==null&&t.title!==void 0&&(i.title=t.title);const u={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,u),e.applyData(t,u)}function S3(e,t,i){const u=e.all(t),s=i?_3(i):gy(t),o={},c=[];if(typeof t.checked=="boolean"){const y=u[0];let b;y&&y.type==="element"&&y.tagName==="p"?b=y:(b={type:"element",tagName:"p",properties:{},children:[]},u.unshift(b)),b.children.length>0&&b.children.unshift({type:"text",value:" "}),b.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let h=-1;for(;++h<u.length;){const y=u[h];(s||h!==0||y.type!=="element"||y.tagName!=="p")&&c.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!s?c.push(...y.children):c.push(y)}const d=u[u.length-1];d&&(s||d.type!=="element"||d.tagName!=="p")&&c.push({type:"text",value:`
`});const p={type:"element",tagName:"li",properties:o,children:c};return e.patch(t,p),e.applyData(t,p)}function _3(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const i=e.children;let u=-1;for(;!t&&++u<i.length;)t=gy(i[u])}return t}function gy(e){const t=e.spread;return t??e.children.length>1}function C3(e,t){const i={},u=e.all(t);let s=-1;for(typeof t.start=="number"&&t.start!==1&&(i.start=t.start);++s<u.length;){const c=u[s];if(c.type==="element"&&c.tagName==="li"&&c.properties&&Array.isArray(c.properties.className)&&c.properties.className.includes("task-list-item")){i.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:i,children:e.wrap(u,!0)};return e.patch(t,o),e.applyData(t,o)}function N3(e,t){const i={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function O3(e,t){const i={type:"root",children:e.wrap(e.all(t))};return e.patch(t,i),e.applyData(t,i)}function R3(e,t){const i={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function k3(e,t){const i=e.all(t),u=i.shift(),s=[];if(u){const c={type:"element",tagName:"thead",properties:{},children:e.wrap([u],!0)};e.patch(t.children[0],c),s.push(c)}if(i.length>0){const c={type:"element",tagName:"tbody",properties:{},children:e.wrap(i,!0)},h=zn(t.children[1]),d=ro(t.children[t.children.length-1]);h&&d&&(c.position={start:h,end:d}),s.push(c)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(s,!0)};return e.patch(t,o),e.applyData(t,o)}function L3(e,t,i){const u=i?i.children:void 0,o=(u?u.indexOf(t):1)===0?"th":"td",c=i&&i.type==="table"?i.align:void 0,h=c?c.length:t.children.length;let d=-1;const p=[];for(;++d<h;){const b=t.children[d],v={},T=c?c[d]:void 0;T&&(v.align=T);let A={type:"element",tagName:o,properties:v,children:[]};b&&(A.children=e.all(b),e.patch(b,A),A=e.applyData(b,A)),p.push(A)}const y={type:"element",tagName:"tr",properties:{},children:e.wrap(p,!0)};return e.patch(t,y),e.applyData(t,y)}function D3(e,t){const i={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}const t1=9,n1=32;function I3(e){const t=String(e),i=/\r?\n|\r/g;let u=i.exec(t),s=0;const o=[];for(;u;)o.push(r1(t.slice(s,u.index),s>0,!0),u[0]),s=u.index+u[0].length,u=i.exec(t);return o.push(r1(t.slice(s),s>0,!1)),o.join("")}function r1(e,t,i){let u=0,s=e.length;if(t){let o=e.codePointAt(u);for(;o===t1||o===n1;)u++,o=e.codePointAt(u)}if(i){let o=e.codePointAt(s-1);for(;o===t1||o===n1;)s--,o=e.codePointAt(s-1)}return s>u?e.slice(u,s):""}function M3(e,t){const i={type:"text",value:I3(String(t.value))};return e.patch(t,i),e.applyData(t,i)}function B3(e,t){const i={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,i),e.applyData(t,i)}const F3={blockquote:h3,break:d3,code:m3,delete:p3,emphasis:g3,footnoteReference:b3,heading:y3,html:E3,imageReference:T3,image:v3,inlineCode:A3,linkReference:x3,link:w3,listItem:S3,list:C3,paragraph:N3,root:O3,strong:R3,table:k3,tableCell:D3,tableRow:L3,text:M3,thematicBreak:B3,toml:_s,yaml:_s,definition:_s,footnoteDefinition:_s};function _s(){}const by=-1,io=0,Bu=1,Ps=2,Kh=3,Wh=4,Zh=5,Jh=6,yy=7,Ey=8,i1=typeof self=="object"?self:globalThis,U3=(e,t)=>{const i=(s,o)=>(e.set(o,s),s),u=s=>{if(e.has(s))return e.get(s);const[o,c]=t[s];switch(o){case io:case by:return i(c,s);case Bu:{const h=i([],s);for(const d of c)h.push(u(d));return h}case Ps:{const h=i({},s);for(const[d,p]of c)h[u(d)]=u(p);return h}case Kh:return i(new Date(c),s);case Wh:{const{source:h,flags:d}=c;return i(new RegExp(h,d),s)}case Zh:{const h=i(new Map,s);for(const[d,p]of c)h.set(u(d),u(p));return h}case Jh:{const h=i(new Set,s);for(const d of c)h.add(u(d));return h}case yy:{const{name:h,message:d}=c;return i(new i1[h](d),s)}case Ey:return i(BigInt(c),s);case"BigInt":return i(Object(BigInt(c)),s);case"ArrayBuffer":return i(new Uint8Array(c).buffer,c);case"DataView":{const{buffer:h}=new Uint8Array(c);return i(new DataView(h),c)}}return i(new i1[o](c),s)};return u},a1=e=>U3(new Map,e)(0),fa="",{toString:H3}={},{keys:P3}=Object,Ou=e=>{const t=typeof e;if(t!=="object"||!e)return[io,t];const i=H3.call(e).slice(8,-1);switch(i){case"Array":return[Bu,fa];case"Object":return[Ps,fa];case"Date":return[Kh,fa];case"RegExp":return[Wh,fa];case"Map":return[Zh,fa];case"Set":return[Jh,fa];case"DataView":return[Bu,i]}return i.includes("Array")?[Bu,i]:i.includes("Error")?[yy,i]:[Ps,i]},Cs=([e,t])=>e===io&&(t==="function"||t==="symbol"),z3=(e,t,i,u)=>{const s=(c,h)=>{const d=u.push(c)-1;return i.set(h,d),d},o=c=>{if(i.has(c))return i.get(c);let[h,d]=Ou(c);switch(h){case io:{let y=c;switch(d){case"bigint":h=Ey,y=c.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+d);y=null;break;case"undefined":return s([by],c)}return s([h,y],c)}case Bu:{if(d){let v=c;return d==="DataView"?v=new Uint8Array(c.buffer):d==="ArrayBuffer"&&(v=new Uint8Array(c)),s([d,[...v]],c)}const y=[],b=s([h,y],c);for(const v of c)y.push(o(v));return b}case Ps:{if(d)switch(d){case"BigInt":return s([d,c.toString()],c);case"Boolean":case"Number":case"String":return s([d,c.valueOf()],c)}if(t&&"toJSON"in c)return o(c.toJSON());const y=[],b=s([h,y],c);for(const v of P3(c))(e||!Cs(Ou(c[v])))&&y.push([o(v),o(c[v])]);return b}case Kh:return s([h,c.toISOString()],c);case Wh:{const{source:y,flags:b}=c;return s([h,{source:y,flags:b}],c)}case Zh:{const y=[],b=s([h,y],c);for(const[v,T]of c)(e||!(Cs(Ou(v))||Cs(Ou(T))))&&y.push([o(v),o(T)]);return b}case Jh:{const y=[],b=s([h,y],c);for(const v of c)(e||!Cs(Ou(v)))&&y.push(o(v));return b}}const{message:p}=c;return s([h,{name:d,message:p}],c)};return o},u1=(e,{json:t,lossy:i}={})=>{const u=[];return z3(!(t||i),!!t,new Map,u)(e),u},Ta=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?a1(u1(e,t)):structuredClone(e):(e,t)=>a1(u1(e,t));function j3(e,t){const i=[{type:"text",value:"↩"}];return t>1&&i.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),i}function q3(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function Y3(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=e.options.footnoteBackContent||j3,u=e.options.footnoteBackLabel||q3,s=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",c=e.options.footnoteLabelProperties||{className:["sr-only"]},h=[];let d=-1;for(;++d<e.footnoteOrder.length;){const p=e.footnoteById.get(e.footnoteOrder[d]);if(!p)continue;const y=e.all(p),b=String(p.identifier).toUpperCase(),v=Sa(b.toLowerCase());let T=0;const A=[],C=e.footnoteCounts.get(b);for(;C!==void 0&&++T<=C;){A.length>0&&A.push({type:"text",value:" "});let D=typeof i=="string"?i:i(d,T);typeof D=="string"&&(D={type:"text",value:D}),A.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+v+(T>1?"-"+T:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(d,T),className:["data-footnote-backref"]},children:Array.isArray(D)?D:[D]})}const R=y[y.length-1];if(R&&R.type==="element"&&R.tagName==="p"){const D=R.children[R.children.length-1];D&&D.type==="text"?D.value+=" ":R.children.push({type:"text",value:" "}),R.children.push(...A)}else y.push(...A);const N={type:"element",tagName:"li",properties:{id:t+"fn-"+v},children:e.wrap(y,!0)};e.patch(p,N),h.push(N)}if(h.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Ta(c),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(h,!0)},{type:"text",value:`
`}]}}const bh={}.hasOwnProperty,V3={};function G3(e,t){const i=t||V3,u=new Map,s=new Map,o=new Map,c={...F3,...i.handlers},h={all:p,applyData:X3,definitionById:u,footnoteById:s,footnoteCounts:o,footnoteOrder:[],handlers:c,one:d,options:i,patch:Q3,wrap:W3};return eo(e,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const b=y.type==="definition"?u:s,v=String(y.identifier).toUpperCase();b.has(v)||b.set(v,y)}}),h;function d(y,b){const v=y.type,T=h.handlers[v];if(bh.call(h.handlers,v)&&T)return T(h,y,b);if(h.options.passThrough&&h.options.passThrough.includes(v)){if("children"in y){const{children:C,...R}=y,N=Ta(R);return N.children=h.all(y),N}return Ta(y)}return(h.options.unknownHandler||K3)(h,y,b)}function p(y){const b=[];if("children"in y){const v=y.children;let T=-1;for(;++T<v.length;){const A=h.one(v[T],y);if(A){if(T&&v[T-1].type==="break"&&(!Array.isArray(A)&&A.type==="text"&&(A.value=l1(A.value)),!Array.isArray(A)&&A.type==="element")){const C=A.children[0];C&&C.type==="text"&&(C.value=l1(C.value))}Array.isArray(A)?b.push(...A):b.push(A)}}}return b}}function Q3(e,t){e.position&&(t.position=mC(e))}function X3(e,t){let i=t;if(e&&e.data){const u=e.data.hName,s=e.data.hChildren,o=e.data.hProperties;if(typeof u=="string")if(i.type==="element")i.tagName=u;else{const c="children"in i?i.children:[i];i={type:"element",tagName:u,properties:{},children:c}}i.type==="element"&&o&&Object.assign(i.properties,Ta(o)),"children"in i&&i.children&&s!==null&&s!==void 0&&(i.children=s)}return i}function K3(e,t){const i=t.data||{},u="value"in t&&!(bh.call(i,"hProperties")||bh.call(i,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,u),e.applyData(t,u)}function W3(e,t){const i=[];let u=-1;for(t&&i.push({type:"text",value:`
`});++u<e.length;)u&&i.push({type:"text",value:`
`}),i.push(e[u]);return t&&e.length>0&&i.push({type:"text",value:`
`}),i}function l1(e){let t=0,i=e.charCodeAt(t);for(;i===9||i===32;)t++,i=e.charCodeAt(t);return e.slice(t)}function s1(e,t){const i=G3(e,t),u=i.one(e,void 0),s=Y3(i),o=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return s&&o.children.push({type:"text",value:`
`},s),o}function Z3(e,t){return e&&"run"in e?async function(i,u){const s=s1(i,{file:u,...t});await e.run(s,u)}:function(i,u){return s1(i,{file:u,...e||t})}}function o1(e){if(e)throw e}var Vf,c1;function J3(){if(c1)return Vf;c1=1;var e=Object.prototype.hasOwnProperty,t=Object.prototype.toString,i=Object.defineProperty,u=Object.getOwnPropertyDescriptor,s=function(p){return typeof Array.isArray=="function"?Array.isArray(p):t.call(p)==="[object Array]"},o=function(p){if(!p||t.call(p)!=="[object Object]")return!1;var y=e.call(p,"constructor"),b=p.constructor&&p.constructor.prototype&&e.call(p.constructor.prototype,"isPrototypeOf");if(p.constructor&&!y&&!b)return!1;var v;for(v in p);return typeof v>"u"||e.call(p,v)},c=function(p,y){i&&y.name==="__proto__"?i(p,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):p[y.name]=y.newValue},h=function(p,y){if(y==="__proto__")if(e.call(p,y)){if(u)return u(p,y).value}else return;return p[y]};return Vf=function d(){var p,y,b,v,T,A,C=arguments[0],R=1,N=arguments.length,D=!1;for(typeof C=="boolean"&&(D=C,C=arguments[1]||{},R=2),(C==null||typeof C!="object"&&typeof C!="function")&&(C={});R<N;++R)if(p=arguments[R],p!=null)for(y in p)b=h(C,y),v=h(p,y),C!==v&&(D&&v&&(o(v)||(T=s(v)))?(T?(T=!1,A=b&&s(b)?b:[]):A=b&&o(b)?b:{},c(C,{name:y,newValue:d(D,A,v)})):typeof v<"u"&&c(C,{name:y,newValue:v}));return C},Vf}var $3=J3();const Gf=W1($3);function yh(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function eN(){const e=[],t={run:i,use:u};return t;function i(...s){let o=-1;const c=s.pop();if(typeof c!="function")throw new TypeError("Expected function as last argument, not "+c);h(null,...s);function h(d,...p){const y=e[++o];let b=-1;if(d){c(d);return}for(;++b<s.length;)(p[b]===null||p[b]===void 0)&&(p[b]=s[b]);s=p,y?tN(y,h)(...p):c(null,...p)}}function u(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return e.push(s),t}}function tN(e,t){let i;return u;function u(...c){const h=e.length>c.length;let d;h&&c.push(s);try{d=e.apply(this,c)}catch(p){const y=p;if(h&&i)throw y;return s(y)}h||(d&&d.then&&typeof d.then=="function"?d.then(o,s):d instanceof Error?s(d):o(d))}function s(c,...h){i||(i=!0,t(c,...h))}function o(c){s(null,c)}}const Fn={basename:nN,dirname:rN,extname:iN,join:aN,sep:"/"};function nN(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');nl(e);let i=0,u=-1,s=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;s--;)if(e.codePointAt(s)===47){if(o){i=s+1;break}}else u<0&&(o=!0,u=s+1);return u<0?"":e.slice(i,u)}if(t===e)return"";let c=-1,h=t.length-1;for(;s--;)if(e.codePointAt(s)===47){if(o){i=s+1;break}}else c<0&&(o=!0,c=s+1),h>-1&&(e.codePointAt(s)===t.codePointAt(h--)?h<0&&(u=s):(h=-1,u=c));return i===u?u=c:u<0&&(u=e.length),e.slice(i,u)}function rN(e){if(nl(e),e.length===0)return".";let t=-1,i=e.length,u;for(;--i;)if(e.codePointAt(i)===47){if(u){t=i;break}}else u||(u=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function iN(e){nl(e);let t=e.length,i=-1,u=0,s=-1,o=0,c;for(;t--;){const h=e.codePointAt(t);if(h===47){if(c){u=t+1;break}continue}i<0&&(c=!0,i=t+1),h===46?s<0?s=t:o!==1&&(o=1):s>-1&&(o=-1)}return s<0||i<0||o===0||o===1&&s===i-1&&s===u+1?"":e.slice(s,i)}function aN(...e){let t=-1,i;for(;++t<e.length;)nl(e[t]),e[t]&&(i=i===void 0?e[t]:i+"/"+e[t]);return i===void 0?".":uN(i)}function uN(e){nl(e);const t=e.codePointAt(0)===47;let i=lN(e,!t);return i.length===0&&!t&&(i="."),i.length>0&&e.codePointAt(e.length-1)===47&&(i+="/"),t?"/"+i:i}function lN(e,t){let i="",u=0,s=-1,o=0,c=-1,h,d;for(;++c<=e.length;){if(c<e.length)h=e.codePointAt(c);else{if(h===47)break;h=47}if(h===47){if(!(s===c-1||o===1))if(s!==c-1&&o===2){if(i.length<2||u!==2||i.codePointAt(i.length-1)!==46||i.codePointAt(i.length-2)!==46){if(i.length>2){if(d=i.lastIndexOf("/"),d!==i.length-1){d<0?(i="",u=0):(i=i.slice(0,d),u=i.length-1-i.lastIndexOf("/")),s=c,o=0;continue}}else if(i.length>0){i="",u=0,s=c,o=0;continue}}t&&(i=i.length>0?i+"/..":"..",u=2)}else i.length>0?i+="/"+e.slice(s+1,c):i=e.slice(s+1,c),u=c-s-1;s=c,o=0}else h===46&&o>-1?o++:o=-1}return i}function nl(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const sN={cwd:oN};function oN(){return"/"}function Eh(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function cN(e){if(typeof e=="string")e=new URL(e);else if(!Eh(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return fN(e)}function fN(e){if(e.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const t=e.pathname;let i=-1;for(;++i<t.length;)if(t.codePointAt(i)===37&&t.codePointAt(i+1)===50){const u=t.codePointAt(i+2);if(u===70||u===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(t)}const Qf=["history","path","basename","stem","extname","dirname"];class Ty{constructor(t){let i;t?Eh(t)?i={path:t}:typeof t=="string"||hN(t)?i={value:t}:i=t:i={},this.cwd="cwd"in i?"":sN.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<Qf.length;){const o=Qf[u];o in i&&i[o]!==void 0&&i[o]!==null&&(this[o]=o==="history"?[...i[o]]:i[o])}let s;for(s in i)Qf.includes(s)||(this[s]=i[s])}get basename(){return typeof this.path=="string"?Fn.basename(this.path):void 0}set basename(t){Kf(t,"basename"),Xf(t,"basename"),this.path=Fn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Fn.dirname(this.path):void 0}set dirname(t){f1(this.basename,"dirname"),this.path=Fn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Fn.extname(this.path):void 0}set extname(t){if(Xf(t,"extname"),f1(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Fn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Eh(t)&&(t=cN(t)),Kf(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Fn.basename(this.path,this.extname):void 0}set stem(t){Kf(t,"stem"),Xf(t,"stem"),this.path=Fn.join(this.dirname||"",t+(this.extname||""))}fail(t,i,u){const s=this.message(t,i,u);throw s.fatal=!0,s}info(t,i,u){const s=this.message(t,i,u);return s.fatal=void 0,s}message(t,i,u){const s=new Dt(t,i,u);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Xf(e,t){if(e&&e.includes(Fn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Fn.sep+"`")}function Kf(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function f1(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function hN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const dN=(function(e){const u=this.constructor.prototype,s=u[e],o=function(){return s.apply(o,arguments)};return Object.setPrototypeOf(o,u),o}),mN={}.hasOwnProperty;class $h extends dN{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=eN()}copy(){const t=new $h;let i=-1;for(;++i<this.attachers.length;){const u=this.attachers[i];t.use(...u)}return t.data(Gf(!0,{},this.namespace)),t}data(t,i){return typeof t=="string"?arguments.length===2?(Jf("data",this.frozen),this.namespace[t]=i,this):mN.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Jf("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[i,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const s=i.call(t,...u);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const i=Ns(t),u=this.parser||this.Parser;return Wf("parse",u),u(String(i),i)}process(t,i){const u=this;return this.freeze(),Wf("process",this.parser||this.Parser),Zf("process",this.compiler||this.Compiler),i?s(void 0,i):new Promise(s);function s(o,c){const h=Ns(t),d=u.parse(h);u.run(d,h,function(y,b,v){if(y||!b||!v)return p(y);const T=b,A=u.stringify(T,v);bN(A)?v.value=A:v.result=A,p(y,v)});function p(y,b){y||!b?c(y):o?o(b):i(void 0,b)}}}processSync(t){let i=!1,u;return this.freeze(),Wf("processSync",this.parser||this.Parser),Zf("processSync",this.compiler||this.Compiler),this.process(t,s),d1("processSync","process",i),u;function s(o,c){i=!0,o1(o),u=c}}run(t,i,u){h1(t),this.freeze();const s=this.transformers;return!u&&typeof i=="function"&&(u=i,i=void 0),u?o(void 0,u):new Promise(o);function o(c,h){const d=Ns(i);s.run(t,d,p);function p(y,b,v){const T=b||t;y?h(y):c?c(T):u(void 0,T,v)}}}runSync(t,i){let u=!1,s;return this.run(t,i,o),d1("runSync","run",u),s;function o(c,h){o1(c),s=h,u=!0}}stringify(t,i){this.freeze();const u=Ns(i),s=this.compiler||this.Compiler;return Zf("stringify",s),h1(t),s(t,u)}use(t,...i){const u=this.attachers,s=this.namespace;if(Jf("use",this.frozen),t!=null)if(typeof t=="function")d(t,i);else if(typeof t=="object")Array.isArray(t)?h(t):c(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(p){if(typeof p=="function")d(p,[]);else if(typeof p=="object")if(Array.isArray(p)){const[y,...b]=p;d(y,b)}else c(p);else throw new TypeError("Expected usable value, not `"+p+"`")}function c(p){if(!("plugins"in p)&&!("settings"in p))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");h(p.plugins),p.settings&&(s.settings=Gf(!0,s.settings,p.settings))}function h(p){let y=-1;if(p!=null)if(Array.isArray(p))for(;++y<p.length;){const b=p[y];o(b)}else throw new TypeError("Expected a list of plugins, not `"+p+"`")}function d(p,y){let b=-1,v=-1;for(;++b<u.length;)if(u[b][0]===p){v=b;break}if(v===-1)u.push([p,...y]);else if(y.length>0){let[T,...A]=y;const C=u[v][1];yh(C)&&yh(T)&&(T=Gf(!0,C,T)),u[v]=[p,T,...A]}}}}const pN=new $h().freeze();function Wf(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Zf(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Jf(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function h1(e){if(!yh(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function d1(e,t,i){if(!i)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ns(e){return gN(e)?e:new Ty(e)}function gN(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function bN(e){return typeof e=="string"||yN(e)}function yN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const EN="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",m1=[],p1={allowDangerousHtml:!0},TN=/^(https?|ircs?|mailto|xmpp)$/i,vN=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function mi(e){const t=AN(e),i=xN(e);return wN(t.runSync(t.parse(i),i),e)}function AN(e){const t=e.rehypePlugins||m1,i=e.remarkPlugins||m1,u=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...p1}:p1;return pN().use(f3).use(i).use(Z3,u).use(t)}function xN(e){const t=e.children||"",i=new Ty;return typeof t=="string"&&(i.value=t),i}function wN(e,t){const i=t.allowedElements,u=t.allowElement,s=t.components,o=t.disallowedElements,c=t.skipHtml,h=t.unwrapDisallowed,d=t.urlTransform||SN;for(const y of vN)Object.hasOwn(t,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+EN+y.id,void 0);return eo(e,p),EC(e,{Fragment:O.Fragment,components:s,ignoreInvalidStyle:!0,jsx:O.jsx,jsxs:O.jsxs,passKeys:!0,passNode:!0});function p(y,b,v){if(y.type==="raw"&&v&&typeof b=="number")return c?v.children.splice(b,1):v.children[b]={type:"text",value:y.value},b;if(y.type==="element"){let T;for(T in Yf)if(Object.hasOwn(Yf,T)&&Object.hasOwn(y.properties,T)){const A=y.properties[T],C=Yf[T];(C===null||C.includes(y.tagName))&&(y.properties[T]=d(String(A||""),T,y))}}if(y.type==="element"){let T=i?!i.includes(y.tagName):o?o.includes(y.tagName):!1;if(!T&&u&&typeof b=="number"&&(T=!u(y,b,v)),T&&v&&typeof b=="number")return h&&y.children?v.children.splice(b,1,...y.children):v.children.splice(b,1),b}}}function SN(e){const t=e.indexOf(":"),i=e.indexOf("?"),u=e.indexOf("#"),s=e.indexOf("/");return t===-1||s!==-1&&t>s||i!==-1&&t>i||u!==-1&&t>u||TN.test(e.slice(0,t))?e:""}const g1=/[#.]/g;function _N(e,t){const i=e||"",u={};let s=0,o,c;for(;s<i.length;){g1.lastIndex=s;const h=g1.exec(i),d=i.slice(s,h?h.index:i.length);d&&(o?o==="#"?u.id=d:Array.isArray(u.className)?u.className.push(d):u.className=[d]:c=d,s+=d.length),h&&(o=h[0],s++)}return{type:"element",tagName:c||t||"div",properties:u,children:[]}}function vy(e,t,i){const u=i?RN(i):void 0;function s(o,c,...h){let d;if(o==null){d={type:"root",children:[]};const p=c;h.unshift(p)}else{d=_N(o,t);const p=d.tagName.toLowerCase(),y=u?u.get(p):void 0;if(d.tagName=y||p,CN(c))h.unshift(c);else for(const[b,v]of Object.entries(c))NN(e,d.properties,b,v)}for(const p of h)Th(d.children,p);return d.type==="element"&&d.tagName==="template"&&(d.content={type:"root",children:d.children},d.children=[]),d}return s}function CN(e){if(e===null||typeof e!="object"||Array.isArray(e))return!0;if(typeof e.type!="string")return!1;const t=e,i=Object.keys(e);for(const u of i){const s=t[u];if(s&&typeof s=="object"){if(!Array.isArray(s))return!0;const o=s;for(const c of o)if(typeof c!="number"&&typeof c!="string")return!0}}return!!("children"in e&&Array.isArray(e.children))}function NN(e,t,i,u){const s=no(e,i);let o;if(u!=null){if(typeof u=="number"){if(Number.isNaN(u))return;o=u}else typeof u=="boolean"?o=u:typeof u=="string"?s.spaceSeparated?o=Vg(u):s.commaSeparated?o=Pg(u):s.commaOrSpaceSeparated?o=Vg(Pg(u).join(" ")):o=b1(s,s.property,u):Array.isArray(u)?o=[...u]:o=s.property==="style"?ON(u):String(u);if(Array.isArray(o)){const c=[];for(const h of o)c.push(b1(s,s.property,h));o=c}s.property==="className"&&Array.isArray(t.className)&&(o=t.className.concat(o)),t[s.property]=o}}function Th(e,t){if(t!=null)if(typeof t=="number"||typeof t=="string")e.push({type:"text",value:String(t)});else if(Array.isArray(t))for(const i of t)Th(e,i);else if(typeof t=="object"&&"type"in t)t.type==="root"?Th(e,t.children):e.push(t);else throw new Error("Expected node, nodes, or string, got `"+t+"`")}function b1(e,t,i){if(typeof i=="string"){if(e.number&&i&&!Number.isNaN(Number(i)))return Number(i);if((e.boolean||e.overloadedBoolean)&&(i===""||Yu(i)===Yu(t)))return!0}return i}function ON(e){const t=[];for(const[i,u]of Object.entries(e))t.push([i,u].join(": "));return t.join("; ")}function RN(e){const t=new Map;for(const i of e)t.set(i.toLowerCase(),i);return t}const kN=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],LN=vy(tl,"div"),DN=vy(Qr,"g",kN);function IN(e){const t=String(e),i=[];return{toOffset:s,toPoint:u};function u(o){if(typeof o=="number"&&o>-1&&o<=t.length){let c=0;for(;;){let h=i[c];if(h===void 0){const d=y1(t,i[c-1]);h=d===-1?t.length+1:d+1,i[c]=h}if(h>o)return{line:c+1,column:o-(c>0?i[c-1]:0)+1,offset:o};c++}}}function s(o){if(o&&typeof o.line=="number"&&typeof o.column=="number"&&!Number.isNaN(o.line)&&!Number.isNaN(o.column)){for(;i.length<o.line;){const h=i[i.length-1],d=y1(t,h),p=d===-1?t.length+1:d+1;if(h===p)break;i.push(p)}const c=(o.line>1?i[o.line-2]:0)+o.column-1;if(c<i[o.line-1])return c}}}function y1(e,t){const i=e.indexOf("\r",t),u=e.indexOf(`
`,t);return u===-1?i:i===-1||i+1===u?u:i<u?i:u}const pi={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},Ay={}.hasOwnProperty,MN=Object.prototype;function BN(e,t){const i=t||{};return ed({file:i.file||void 0,location:!1,schema:i.space==="svg"?Qr:tl,verbose:i.verbose||!1},e)}function ed(e,t){let i;switch(t.nodeName){case"#comment":{const u=t;return i={type:"comment",value:u.data},Is(e,u,i),i}case"#document":case"#document-fragment":{const u=t,s="mode"in u?u.mode==="quirks"||u.mode==="limited-quirks":!1;if(i={type:"root",children:xy(e,t.childNodes),data:{quirksMode:s}},e.file&&e.location){const o=String(e.file),c=IN(o),h=c.toPoint(0),d=c.toPoint(o.length);i.position={start:h,end:d}}return i}case"#documentType":{const u=t;return i={type:"doctype"},Is(e,u,i),i}case"#text":{const u=t;return i={type:"text",value:u.value},Is(e,u,i),i}default:return i=FN(e,t),i}}function xy(e,t){let i=-1;const u=[];for(;++i<t.length;){const s=ed(e,t[i]);u.push(s)}return u}function FN(e,t){const i=e.schema;e.schema=t.namespaceURI===pi.svg?Qr:tl;let u=-1;const s={};for(;++u<t.attrs.length;){const h=t.attrs[u],d=(h.prefix?h.prefix+":":"")+h.name;Ay.call(MN,d)||(s[d]=h.value)}const c=(e.schema.space==="svg"?DN:LN)(t.tagName,s,xy(e,t.childNodes));if(Is(e,t,c),c.tagName==="template"){const h=t,d=h.sourceCodeLocation,p=d&&d.startTag&&pa(d.startTag),y=d&&d.endTag&&pa(d.endTag),b=ed(e,h.content);p&&y&&e.file&&(b.position={start:p.end,end:y.start}),c.content=b}return e.schema=i,c}function Is(e,t,i){if("sourceCodeLocation"in t&&t.sourceCodeLocation&&e.file){const u=UN(e,i,t.sourceCodeLocation);u&&(e.location=!0,i.position=u)}}function UN(e,t,i){const u=pa(i);if(t.type==="element"){const s=t.children[t.children.length-1];if(u&&!i.endTag&&s&&s.position&&s.position.end&&(u.end=Object.assign({},s.position.end)),e.verbose){const o={};let c;if(i.attrs)for(c in i.attrs)Ay.call(i.attrs,c)&&(o[no(e.schema,c).property]=pa(i.attrs[c]));i.startTag;const h=pa(i.startTag),d=i.endTag?pa(i.endTag):void 0,p={opening:h};d&&(p.closing=d),p.properties=o,t.data={position:p}}}return u}function pa(e){const t=E1({line:e.startLine,column:e.startCol,offset:e.startOffset}),i=E1({line:e.endLine,column:e.endCol,offset:e.endOffset});return t||i?{start:t,end:i}:void 0}function E1(e){return e.line&&e.column?e:void 0}const HN={},PN={}.hasOwnProperty,wy=vb("type",{handlers:{root:jN,element:QN,text:VN,comment:GN,doctype:YN}});function zN(e,t){const u=(t||HN).space;return wy(e,u==="svg"?Qr:tl)}function jN(e,t){const i={nodeName:"#document",mode:(e.data||{}).quirksMode?"quirks":"no-quirks",childNodes:[]};return i.childNodes=td(e.children,i,t),Ca(e,i),i}function qN(e,t){const i={nodeName:"#document-fragment",childNodes:[]};return i.childNodes=td(e.children,i,t),Ca(e,i),i}function YN(e){const t={nodeName:"#documentType",name:"html",publicId:"",systemId:"",parentNode:null};return Ca(e,t),t}function VN(e){const t={nodeName:"#text",value:e.value,parentNode:null};return Ca(e,t),t}function GN(e){const t={nodeName:"#comment",data:e.value,parentNode:null};return Ca(e,t),t}function QN(e,t){const i=t;let u=i;e.type==="element"&&e.tagName.toLowerCase()==="svg"&&i.space==="html"&&(u=Qr);const s=[];let o;if(e.properties){for(o in e.properties)if(o!=="children"&&PN.call(e.properties,o)){const d=XN(u,o,e.properties[o]);d&&s.push(d)}}const c=u.space,h={nodeName:e.tagName,tagName:e.tagName,attrs:s,namespaceURI:pi[c],childNodes:[],parentNode:null};return h.childNodes=td(e.children,h,u),Ca(e,h),e.tagName==="template"&&e.content&&(h.content=qN(e.content,u)),h}function XN(e,t,i){const u=no(e,t);if(i===!1||i===null||i===void 0||typeof i=="number"&&Number.isNaN(i)||!i&&u.boolean)return;Array.isArray(i)&&(i=u.commaSeparated?Zb(i):ay(i));const s={name:u.attribute,value:i===!0?"":String(i)};if(u.space&&u.space!=="html"&&u.space!=="svg"){const o=s.name.indexOf(":");o<0?s.prefix="":(s.name=s.name.slice(o+1),s.prefix=u.attribute.slice(0,o)),s.namespace=pi[u.space]}return s}function td(e,t,i){let u=-1;const s=[];if(e)for(;++u<e.length;){const o=wy(e[u],i);o.parentNode=t,s.push(o)}return s}function Ca(e,t){const i=e.position;i&&i.start&&i.end&&(i.start.offset,i.end.offset,t.sourceCodeLocation={startLine:i.start.line,startCol:i.start.column,startOffset:i.start.offset,endLine:i.end.line,endCol:i.end.column,endOffset:i.end.offset})}const KN=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"],WN=new Set([65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),at="�";var w;(function(e){e[e.EOF=-1]="EOF",e[e.NULL=0]="NULL",e[e.TABULATION=9]="TABULATION",e[e.CARRIAGE_RETURN=13]="CARRIAGE_RETURN",e[e.LINE_FEED=10]="LINE_FEED",e[e.FORM_FEED=12]="FORM_FEED",e[e.SPACE=32]="SPACE",e[e.EXCLAMATION_MARK=33]="EXCLAMATION_MARK",e[e.QUOTATION_MARK=34]="QUOTATION_MARK",e[e.AMPERSAND=38]="AMPERSAND",e[e.APOSTROPHE=39]="APOSTROPHE",e[e.HYPHEN_MINUS=45]="HYPHEN_MINUS",e[e.SOLIDUS=47]="SOLIDUS",e[e.DIGIT_0=48]="DIGIT_0",e[e.DIGIT_9=57]="DIGIT_9",e[e.SEMICOLON=59]="SEMICOLON",e[e.LESS_THAN_SIGN=60]="LESS_THAN_SIGN",e[e.EQUALS_SIGN=61]="EQUALS_SIGN",e[e.GREATER_THAN_SIGN=62]="GREATER_THAN_SIGN",e[e.QUESTION_MARK=63]="QUESTION_MARK",e[e.LATIN_CAPITAL_A=65]="LATIN_CAPITAL_A",e[e.LATIN_CAPITAL_Z=90]="LATIN_CAPITAL_Z",e[e.RIGHT_SQUARE_BRACKET=93]="RIGHT_SQUARE_BRACKET",e[e.GRAVE_ACCENT=96]="GRAVE_ACCENT",e[e.LATIN_SMALL_A=97]="LATIN_SMALL_A",e[e.LATIN_SMALL_Z=122]="LATIN_SMALL_Z"})(w||(w={}));const Kt={DASH_DASH:"--",CDATA_START:"[CDATA[",DOCTYPE:"doctype",SCRIPT:"script",PUBLIC:"public",SYSTEM:"system"};function Sy(e){return e>=55296&&e<=57343}function ZN(e){return e>=56320&&e<=57343}function JN(e,t){return(e-55296)*1024+9216+t}function _y(e){return e!==32&&e!==10&&e!==13&&e!==9&&e!==12&&e>=1&&e<=31||e>=127&&e<=159}function Cy(e){return e>=64976&&e<=65007||WN.has(e)}var X;(function(e){e.controlCharacterInInputStream="control-character-in-input-stream",e.noncharacterInInputStream="noncharacter-in-input-stream",e.surrogateInInputStream="surrogate-in-input-stream",e.nonVoidHtmlElementStartTagWithTrailingSolidus="non-void-html-element-start-tag-with-trailing-solidus",e.endTagWithAttributes="end-tag-with-attributes",e.endTagWithTrailingSolidus="end-tag-with-trailing-solidus",e.unexpectedSolidusInTag="unexpected-solidus-in-tag",e.unexpectedNullCharacter="unexpected-null-character",e.unexpectedQuestionMarkInsteadOfTagName="unexpected-question-mark-instead-of-tag-name",e.invalidFirstCharacterOfTagName="invalid-first-character-of-tag-name",e.unexpectedEqualsSignBeforeAttributeName="unexpected-equals-sign-before-attribute-name",e.missingEndTagName="missing-end-tag-name",e.unexpectedCharacterInAttributeName="unexpected-character-in-attribute-name",e.unknownNamedCharacterReference="unknown-named-character-reference",e.missingSemicolonAfterCharacterReference="missing-semicolon-after-character-reference",e.unexpectedCharacterAfterDoctypeSystemIdentifier="unexpected-character-after-doctype-system-identifier",e.unexpectedCharacterInUnquotedAttributeValue="unexpected-character-in-unquoted-attribute-value",e.eofBeforeTagName="eof-before-tag-name",e.eofInTag="eof-in-tag",e.missingAttributeValue="missing-attribute-value",e.missingWhitespaceBetweenAttributes="missing-whitespace-between-attributes",e.missingWhitespaceAfterDoctypePublicKeyword="missing-whitespace-after-doctype-public-keyword",e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers="missing-whitespace-between-doctype-public-and-system-identifiers",e.missingWhitespaceAfterDoctypeSystemKeyword="missing-whitespace-after-doctype-system-keyword",e.missingQuoteBeforeDoctypePublicIdentifier="missing-quote-before-doctype-public-identifier",e.missingQuoteBeforeDoctypeSystemIdentifier="missing-quote-before-doctype-system-identifier",e.missingDoctypePublicIdentifier="missing-doctype-public-identifier",e.missingDoctypeSystemIdentifier="missing-doctype-system-identifier",e.abruptDoctypePublicIdentifier="abrupt-doctype-public-identifier",e.abruptDoctypeSystemIdentifier="abrupt-doctype-system-identifier",e.cdataInHtmlContent="cdata-in-html-content",e.incorrectlyOpenedComment="incorrectly-opened-comment",e.eofInScriptHtmlCommentLikeText="eof-in-script-html-comment-like-text",e.eofInDoctype="eof-in-doctype",e.nestedComment="nested-comment",e.abruptClosingOfEmptyComment="abrupt-closing-of-empty-comment",e.eofInComment="eof-in-comment",e.incorrectlyClosedComment="incorrectly-closed-comment",e.eofInCdata="eof-in-cdata",e.absenceOfDigitsInNumericCharacterReference="absence-of-digits-in-numeric-character-reference",e.nullCharacterReference="null-character-reference",e.surrogateCharacterReference="surrogate-character-reference",e.characterReferenceOutsideUnicodeRange="character-reference-outside-unicode-range",e.controlCharacterReference="control-character-reference",e.noncharacterCharacterReference="noncharacter-character-reference",e.missingWhitespaceBeforeDoctypeName="missing-whitespace-before-doctype-name",e.missingDoctypeName="missing-doctype-name",e.invalidCharacterSequenceAfterDoctypeName="invalid-character-sequence-after-doctype-name",e.duplicateAttribute="duplicate-attribute",e.nonConformingDoctype="non-conforming-doctype",e.missingDoctype="missing-doctype",e.misplacedDoctype="misplaced-doctype",e.endTagWithoutMatchingOpenElement="end-tag-without-matching-open-element",e.closingOfElementWithOpenChildElements="closing-of-element-with-open-child-elements",e.disallowedContentInNoscriptInHead="disallowed-content-in-noscript-in-head",e.openElementsLeftAfterEof="open-elements-left-after-eof",e.abandonedHeadElementChild="abandoned-head-element-child",e.misplacedStartTagForHeadElement="misplaced-start-tag-for-head-element",e.nestedNoscriptInHead="nested-noscript-in-head",e.eofInElementThatCanContainOnlyText="eof-in-element-that-can-contain-only-text"})(X||(X={}));const $N=65536;class eO{constructor(t){this.handler=t,this.html="",this.pos=-1,this.lastGapPos=-2,this.gapStack=[],this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,this.bufferWaterline=$N,this.isEol=!1,this.lineStartPos=0,this.droppedBufferSize=0,this.line=1,this.lastErrOffset=-1}get col(){return this.pos-this.lineStartPos+ +(this.lastGapPos!==this.pos)}get offset(){return this.droppedBufferSize+this.pos}getError(t,i){const{line:u,col:s,offset:o}=this,c=s+i,h=o+i;return{code:t,startLine:u,endLine:u,startCol:c,endCol:c,startOffset:h,endOffset:h}}_err(t){this.handler.onParseError&&this.lastErrOffset!==this.offset&&(this.lastErrOffset=this.offset,this.handler.onParseError(this.getError(t,0)))}_addGap(){this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos}_processSurrogate(t){if(this.pos!==this.html.length-1){const i=this.html.charCodeAt(this.pos+1);if(ZN(i))return this.pos++,this._addGap(),JN(t,i)}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,w.EOF;return this._err(X.surrogateInInputStream),t}willDropParsedChunk(){return this.pos>this.bufferWaterline}dropParsedChunk(){this.willDropParsedChunk()&&(this.html=this.html.substring(this.pos),this.lineStartPos-=this.pos,this.droppedBufferSize+=this.pos,this.pos=0,this.lastGapPos=-2,this.gapStack.length=0)}write(t,i){this.html.length>0?this.html+=t:this.html=t,this.endOfChunkHit=!1,this.lastChunkWritten=i}insertHtmlAtCurrentPos(t){this.html=this.html.substring(0,this.pos+1)+t+this.html.substring(this.pos+1),this.endOfChunkHit=!1}startsWith(t,i){if(this.pos+t.length>this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,!1;if(i)return this.html.startsWith(t,this.pos);for(let u=0;u<t.length;u++)if((this.html.charCodeAt(this.pos+u)|32)!==t.charCodeAt(u))return!1;return!0}peek(t){const i=this.pos+t;if(i>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,w.EOF;const u=this.html.charCodeAt(i);return u===w.CARRIAGE_RETURN?w.LINE_FEED:u}advance(){if(this.pos++,this.isEol&&(this.isEol=!1,this.line++,this.lineStartPos=this.pos),this.pos>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,w.EOF;let t=this.html.charCodeAt(this.pos);return t===w.CARRIAGE_RETURN?(this.isEol=!0,this.skipNextNewLine=!0,w.LINE_FEED):t===w.LINE_FEED&&(this.isEol=!0,this.skipNextNewLine)?(this.line--,this.skipNextNewLine=!1,this._addGap(),this.advance()):(this.skipNextNewLine=!1,Sy(t)&&(t=this._processSurrogate(t)),this.handler.onParseError===null||t>31&&t<127||t===w.LINE_FEED||t===w.CARRIAGE_RETURN||t>159&&t<64976||this._checkForProblematicCharacters(t),t)}_checkForProblematicCharacters(t){_y(t)?this._err(X.controlCharacterInInputStream):Cy(t)&&this._err(X.noncharacterInInputStream)}retreat(t){for(this.pos-=t;this.pos<this.lastGapPos;)this.lastGapPos=this.gapStack.pop(),this.pos--;this.isEol=!1}}var ke;(function(e){e[e.CHARACTER=0]="CHARACTER",e[e.NULL_CHARACTER=1]="NULL_CHARACTER",e[e.WHITESPACE_CHARACTER=2]="WHITESPACE_CHARACTER",e[e.START_TAG=3]="START_TAG",e[e.END_TAG=4]="END_TAG",e[e.COMMENT=5]="COMMENT",e[e.DOCTYPE=6]="DOCTYPE",e[e.EOF=7]="EOF",e[e.HIBERNATION=8]="HIBERNATION"})(ke||(ke={}));function Ny(e,t){for(let i=e.attrs.length-1;i>=0;i--)if(e.attrs[i].name===t)return e.attrs[i].value;return null}const tO=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),nO=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function rO(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=nO.get(e))!==null&&t!==void 0?t:e}var wt;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(wt||(wt={}));const iO=32;var qr;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(qr||(qr={}));function vh(e){return e>=wt.ZERO&&e<=wt.NINE}function aO(e){return e>=wt.UPPER_A&&e<=wt.UPPER_F||e>=wt.LOWER_A&&e<=wt.LOWER_F}function uO(e){return e>=wt.UPPER_A&&e<=wt.UPPER_Z||e>=wt.LOWER_A&&e<=wt.LOWER_Z||vh(e)}function lO(e){return e===wt.EQUALS||uO(e)}var xt;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(xt||(xt={}));var or;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(or||(or={}));class sO{constructor(t,i,u){this.decodeTree=t,this.emitCodePoint=i,this.errors=u,this.state=xt.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=or.Strict}startEntity(t){this.decodeMode=t,this.state=xt.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,i){switch(this.state){case xt.EntityStart:return t.charCodeAt(i)===wt.NUM?(this.state=xt.NumericStart,this.consumed+=1,this.stateNumericStart(t,i+1)):(this.state=xt.NamedEntity,this.stateNamedEntity(t,i));case xt.NumericStart:return this.stateNumericStart(t,i);case xt.NumericDecimal:return this.stateNumericDecimal(t,i);case xt.NumericHex:return this.stateNumericHex(t,i);case xt.NamedEntity:return this.stateNamedEntity(t,i)}}stateNumericStart(t,i){return i>=t.length?-1:(t.charCodeAt(i)|iO)===wt.LOWER_X?(this.state=xt.NumericHex,this.consumed+=1,this.stateNumericHex(t,i+1)):(this.state=xt.NumericDecimal,this.stateNumericDecimal(t,i))}addToNumericResult(t,i,u,s){if(i!==u){const o=u-i;this.result=this.result*Math.pow(s,o)+Number.parseInt(t.substr(i,o),s),this.consumed+=o}}stateNumericHex(t,i){const u=i;for(;i<t.length;){const s=t.charCodeAt(i);if(vh(s)||aO(s))i+=1;else return this.addToNumericResult(t,u,i,16),this.emitNumericEntity(s,3)}return this.addToNumericResult(t,u,i,16),-1}stateNumericDecimal(t,i){const u=i;for(;i<t.length;){const s=t.charCodeAt(i);if(vh(s))i+=1;else return this.addToNumericResult(t,u,i,10),this.emitNumericEntity(s,2)}return this.addToNumericResult(t,u,i,10),-1}emitNumericEntity(t,i){var u;if(this.consumed<=i)return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===wt.SEMI)this.consumed+=1;else if(this.decodeMode===or.Strict)return 0;return this.emitCodePoint(rO(this.result),this.consumed),this.errors&&(t!==wt.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,i){const{decodeTree:u}=this;let s=u[this.treeIndex],o=(s&qr.VALUE_LENGTH)>>14;for(;i<t.length;i++,this.excess++){const c=t.charCodeAt(i);if(this.treeIndex=oO(u,s,this.treeIndex+Math.max(1,o),c),this.treeIndex<0)return this.result===0||this.decodeMode===or.Attribute&&(o===0||lO(c))?0:this.emitNotTerminatedNamedEntity();if(s=u[this.treeIndex],o=(s&qr.VALUE_LENGTH)>>14,o!==0){if(c===wt.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==or.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:i,decodeTree:u}=this,s=(u[i]&qr.VALUE_LENGTH)>>14;return this.emitNamedEntityData(i,s,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,i,u){const{decodeTree:s}=this;return this.emitCodePoint(i===1?s[t]&~qr.VALUE_LENGTH:s[t+1],u),i===3&&this.emitCodePoint(s[t+2],u),u}end(){var t;switch(this.state){case xt.NamedEntity:return this.result!==0&&(this.decodeMode!==or.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case xt.NumericDecimal:return this.emitNumericEntity(0,2);case xt.NumericHex:return this.emitNumericEntity(0,3);case xt.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case xt.EntityStart:return 0}}}function oO(e,t,i,u){const s=(t&qr.BRANCH_LENGTH)>>7,o=t&qr.JUMP_TABLE;if(s===0)return o!==0&&u===o?i:-1;if(o){const d=u-o;return d<0||d>=s?-1:e[i+d]-1}let c=i,h=c+s-1;for(;c<=h;){const d=c+h>>>1,p=e[d];if(p<u)c=d+1;else if(p>u)h=d-1;else return e[d+s]}return-1}var te;(function(e){e.HTML="http://www.w3.org/1999/xhtml",e.MATHML="http://www.w3.org/1998/Math/MathML",e.SVG="http://www.w3.org/2000/svg",e.XLINK="http://www.w3.org/1999/xlink",e.XML="http://www.w3.org/XML/1998/namespace",e.XMLNS="http://www.w3.org/2000/xmlns/"})(te||(te={}));var gi;(function(e){e.TYPE="type",e.ACTION="action",e.ENCODING="encoding",e.PROMPT="prompt",e.NAME="name",e.COLOR="color",e.FACE="face",e.SIZE="size"})(gi||(gi={}));var wn;(function(e){e.NO_QUIRKS="no-quirks",e.QUIRKS="quirks",e.LIMITED_QUIRKS="limited-quirks"})(wn||(wn={}));var P;(function(e){e.A="a",e.ADDRESS="address",e.ANNOTATION_XML="annotation-xml",e.APPLET="applet",e.AREA="area",e.ARTICLE="article",e.ASIDE="aside",e.B="b",e.BASE="base",e.BASEFONT="basefont",e.BGSOUND="bgsound",e.BIG="big",e.BLOCKQUOTE="blockquote",e.BODY="body",e.BR="br",e.BUTTON="button",e.CAPTION="caption",e.CENTER="center",e.CODE="code",e.COL="col",e.COLGROUP="colgroup",e.DD="dd",e.DESC="desc",e.DETAILS="details",e.DIALOG="dialog",e.DIR="dir",e.DIV="div",e.DL="dl",e.DT="dt",e.EM="em",e.EMBED="embed",e.FIELDSET="fieldset",e.FIGCAPTION="figcaption",e.FIGURE="figure",e.FONT="font",e.FOOTER="footer",e.FOREIGN_OBJECT="foreignObject",e.FORM="form",e.FRAME="frame",e.FRAMESET="frameset",e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e.H6="h6",e.HEAD="head",e.HEADER="header",e.HGROUP="hgroup",e.HR="hr",e.HTML="html",e.I="i",e.IMG="img",e.IMAGE="image",e.INPUT="input",e.IFRAME="iframe",e.KEYGEN="keygen",e.LABEL="label",e.LI="li",e.LINK="link",e.LISTING="listing",e.MAIN="main",e.MALIGNMARK="malignmark",e.MARQUEE="marquee",e.MATH="math",e.MENU="menu",e.META="meta",e.MGLYPH="mglyph",e.MI="mi",e.MO="mo",e.MN="mn",e.MS="ms",e.MTEXT="mtext",e.NAV="nav",e.NOBR="nobr",e.NOFRAMES="noframes",e.NOEMBED="noembed",e.NOSCRIPT="noscript",e.OBJECT="object",e.OL="ol",e.OPTGROUP="optgroup",e.OPTION="option",e.P="p",e.PARAM="param",e.PLAINTEXT="plaintext",e.PRE="pre",e.RB="rb",e.RP="rp",e.RT="rt",e.RTC="rtc",e.RUBY="ruby",e.S="s",e.SCRIPT="script",e.SEARCH="search",e.SECTION="section",e.SELECT="select",e.SOURCE="source",e.SMALL="small",e.SPAN="span",e.STRIKE="strike",e.STRONG="strong",e.STYLE="style",e.SUB="sub",e.SUMMARY="summary",e.SUP="sup",e.TABLE="table",e.TBODY="tbody",e.TEMPLATE="template",e.TEXTAREA="textarea",e.TFOOT="tfoot",e.TD="td",e.TH="th",e.THEAD="thead",e.TITLE="title",e.TR="tr",e.TRACK="track",e.TT="tt",e.U="u",e.UL="ul",e.SVG="svg",e.VAR="var",e.WBR="wbr",e.XMP="xmp"})(P||(P={}));var g;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.A=1]="A",e[e.ADDRESS=2]="ADDRESS",e[e.ANNOTATION_XML=3]="ANNOTATION_XML",e[e.APPLET=4]="APPLET",e[e.AREA=5]="AREA",e[e.ARTICLE=6]="ARTICLE",e[e.ASIDE=7]="ASIDE",e[e.B=8]="B",e[e.BASE=9]="BASE",e[e.BASEFONT=10]="BASEFONT",e[e.BGSOUND=11]="BGSOUND",e[e.BIG=12]="BIG",e[e.BLOCKQUOTE=13]="BLOCKQUOTE",e[e.BODY=14]="BODY",e[e.BR=15]="BR",e[e.BUTTON=16]="BUTTON",e[e.CAPTION=17]="CAPTION",e[e.CENTER=18]="CENTER",e[e.CODE=19]="CODE",e[e.COL=20]="COL",e[e.COLGROUP=21]="COLGROUP",e[e.DD=22]="DD",e[e.DESC=23]="DESC",e[e.DETAILS=24]="DETAILS",e[e.DIALOG=25]="DIALOG",e[e.DIR=26]="DIR",e[e.DIV=27]="DIV",e[e.DL=28]="DL",e[e.DT=29]="DT",e[e.EM=30]="EM",e[e.EMBED=31]="EMBED",e[e.FIELDSET=32]="FIELDSET",e[e.FIGCAPTION=33]="FIGCAPTION",e[e.FIGURE=34]="FIGURE",e[e.FONT=35]="FONT",e[e.FOOTER=36]="FOOTER",e[e.FOREIGN_OBJECT=37]="FOREIGN_OBJECT",e[e.FORM=38]="FORM",e[e.FRAME=39]="FRAME",e[e.FRAMESET=40]="FRAMESET",e[e.H1=41]="H1",e[e.H2=42]="H2",e[e.H3=43]="H3",e[e.H4=44]="H4",e[e.H5=45]="H5",e[e.H6=46]="H6",e[e.HEAD=47]="HEAD",e[e.HEADER=48]="HEADER",e[e.HGROUP=49]="HGROUP",e[e.HR=50]="HR",e[e.HTML=51]="HTML",e[e.I=52]="I",e[e.IMG=53]="IMG",e[e.IMAGE=54]="IMAGE",e[e.INPUT=55]="INPUT",e[e.IFRAME=56]="IFRAME",e[e.KEYGEN=57]="KEYGEN",e[e.LABEL=58]="LABEL",e[e.LI=59]="LI",e[e.LINK=60]="LINK",e[e.LISTING=61]="LISTING",e[e.MAIN=62]="MAIN",e[e.MALIGNMARK=63]="MALIGNMARK",e[e.MARQUEE=64]="MARQUEE",e[e.MATH=65]="MATH",e[e.MENU=66]="MENU",e[e.META=67]="META",e[e.MGLYPH=68]="MGLYPH",e[e.MI=69]="MI",e[e.MO=70]="MO",e[e.MN=71]="MN",e[e.MS=72]="MS",e[e.MTEXT=73]="MTEXT",e[e.NAV=74]="NAV",e[e.NOBR=75]="NOBR",e[e.NOFRAMES=76]="NOFRAMES",e[e.NOEMBED=77]="NOEMBED",e[e.NOSCRIPT=78]="NOSCRIPT",e[e.OBJECT=79]="OBJECT",e[e.OL=80]="OL",e[e.OPTGROUP=81]="OPTGROUP",e[e.OPTION=82]="OPTION",e[e.P=83]="P",e[e.PARAM=84]="PARAM",e[e.PLAINTEXT=85]="PLAINTEXT",e[e.PRE=86]="PRE",e[e.RB=87]="RB",e[e.RP=88]="RP",e[e.RT=89]="RT",e[e.RTC=90]="RTC",e[e.RUBY=91]="RUBY",e[e.S=92]="S",e[e.SCRIPT=93]="SCRIPT",e[e.SEARCH=94]="SEARCH",e[e.SECTION=95]="SECTION",e[e.SELECT=96]="SELECT",e[e.SOURCE=97]="SOURCE",e[e.SMALL=98]="SMALL",e[e.SPAN=99]="SPAN",e[e.STRIKE=100]="STRIKE",e[e.STRONG=101]="STRONG",e[e.STYLE=102]="STYLE",e[e.SUB=103]="SUB",e[e.SUMMARY=104]="SUMMARY",e[e.SUP=105]="SUP",e[e.TABLE=106]="TABLE",e[e.TBODY=107]="TBODY",e[e.TEMPLATE=108]="TEMPLATE",e[e.TEXTAREA=109]="TEXTAREA",e[e.TFOOT=110]="TFOOT",e[e.TD=111]="TD",e[e.TH=112]="TH",e[e.THEAD=113]="THEAD",e[e.TITLE=114]="TITLE",e[e.TR=115]="TR",e[e.TRACK=116]="TRACK",e[e.TT=117]="TT",e[e.U=118]="U",e[e.UL=119]="UL",e[e.SVG=120]="SVG",e[e.VAR=121]="VAR",e[e.WBR=122]="WBR",e[e.XMP=123]="XMP"})(g||(g={}));const cO=new Map([[P.A,g.A],[P.ADDRESS,g.ADDRESS],[P.ANNOTATION_XML,g.ANNOTATION_XML],[P.APPLET,g.APPLET],[P.AREA,g.AREA],[P.ARTICLE,g.ARTICLE],[P.ASIDE,g.ASIDE],[P.B,g.B],[P.BASE,g.BASE],[P.BASEFONT,g.BASEFONT],[P.BGSOUND,g.BGSOUND],[P.BIG,g.BIG],[P.BLOCKQUOTE,g.BLOCKQUOTE],[P.BODY,g.BODY],[P.BR,g.BR],[P.BUTTON,g.BUTTON],[P.CAPTION,g.CAPTION],[P.CENTER,g.CENTER],[P.CODE,g.CODE],[P.COL,g.COL],[P.COLGROUP,g.COLGROUP],[P.DD,g.DD],[P.DESC,g.DESC],[P.DETAILS,g.DETAILS],[P.DIALOG,g.DIALOG],[P.DIR,g.DIR],[P.DIV,g.DIV],[P.DL,g.DL],[P.DT,g.DT],[P.EM,g.EM],[P.EMBED,g.EMBED],[P.FIELDSET,g.FIELDSET],[P.FIGCAPTION,g.FIGCAPTION],[P.FIGURE,g.FIGURE],[P.FONT,g.FONT],[P.FOOTER,g.FOOTER],[P.FOREIGN_OBJECT,g.FOREIGN_OBJECT],[P.FORM,g.FORM],[P.FRAME,g.FRAME],[P.FRAMESET,g.FRAMESET],[P.H1,g.H1],[P.H2,g.H2],[P.H3,g.H3],[P.H4,g.H4],[P.H5,g.H5],[P.H6,g.H6],[P.HEAD,g.HEAD],[P.HEADER,g.HEADER],[P.HGROUP,g.HGROUP],[P.HR,g.HR],[P.HTML,g.HTML],[P.I,g.I],[P.IMG,g.IMG],[P.IMAGE,g.IMAGE],[P.INPUT,g.INPUT],[P.IFRAME,g.IFRAME],[P.KEYGEN,g.KEYGEN],[P.LABEL,g.LABEL],[P.LI,g.LI],[P.LINK,g.LINK],[P.LISTING,g.LISTING],[P.MAIN,g.MAIN],[P.MALIGNMARK,g.MALIGNMARK],[P.MARQUEE,g.MARQUEE],[P.MATH,g.MATH],[P.MENU,g.MENU],[P.META,g.META],[P.MGLYPH,g.MGLYPH],[P.MI,g.MI],[P.MO,g.MO],[P.MN,g.MN],[P.MS,g.MS],[P.MTEXT,g.MTEXT],[P.NAV,g.NAV],[P.NOBR,g.NOBR],[P.NOFRAMES,g.NOFRAMES],[P.NOEMBED,g.NOEMBED],[P.NOSCRIPT,g.NOSCRIPT],[P.OBJECT,g.OBJECT],[P.OL,g.OL],[P.OPTGROUP,g.OPTGROUP],[P.OPTION,g.OPTION],[P.P,g.P],[P.PARAM,g.PARAM],[P.PLAINTEXT,g.PLAINTEXT],[P.PRE,g.PRE],[P.RB,g.RB],[P.RP,g.RP],[P.RT,g.RT],[P.RTC,g.RTC],[P.RUBY,g.RUBY],[P.S,g.S],[P.SCRIPT,g.SCRIPT],[P.SEARCH,g.SEARCH],[P.SECTION,g.SECTION],[P.SELECT,g.SELECT],[P.SOURCE,g.SOURCE],[P.SMALL,g.SMALL],[P.SPAN,g.SPAN],[P.STRIKE,g.STRIKE],[P.STRONG,g.STRONG],[P.STYLE,g.STYLE],[P.SUB,g.SUB],[P.SUMMARY,g.SUMMARY],[P.SUP,g.SUP],[P.TABLE,g.TABLE],[P.TBODY,g.TBODY],[P.TEMPLATE,g.TEMPLATE],[P.TEXTAREA,g.TEXTAREA],[P.TFOOT,g.TFOOT],[P.TD,g.TD],[P.TH,g.TH],[P.THEAD,g.THEAD],[P.TITLE,g.TITLE],[P.TR,g.TR],[P.TRACK,g.TRACK],[P.TT,g.TT],[P.U,g.U],[P.UL,g.UL],[P.SVG,g.SVG],[P.VAR,g.VAR],[P.WBR,g.WBR],[P.XMP,g.XMP]]);function Na(e){var t;return(t=cO.get(e))!==null&&t!==void 0?t:g.UNKNOWN}const re=g,fO={[te.HTML]:new Set([re.ADDRESS,re.APPLET,re.AREA,re.ARTICLE,re.ASIDE,re.BASE,re.BASEFONT,re.BGSOUND,re.BLOCKQUOTE,re.BODY,re.BR,re.BUTTON,re.CAPTION,re.CENTER,re.COL,re.COLGROUP,re.DD,re.DETAILS,re.DIR,re.DIV,re.DL,re.DT,re.EMBED,re.FIELDSET,re.FIGCAPTION,re.FIGURE,re.FOOTER,re.FORM,re.FRAME,re.FRAMESET,re.H1,re.H2,re.H3,re.H4,re.H5,re.H6,re.HEAD,re.HEADER,re.HGROUP,re.HR,re.HTML,re.IFRAME,re.IMG,re.INPUT,re.LI,re.LINK,re.LISTING,re.MAIN,re.MARQUEE,re.MENU,re.META,re.NAV,re.NOEMBED,re.NOFRAMES,re.NOSCRIPT,re.OBJECT,re.OL,re.P,re.PARAM,re.PLAINTEXT,re.PRE,re.SCRIPT,re.SECTION,re.SELECT,re.SOURCE,re.STYLE,re.SUMMARY,re.TABLE,re.TBODY,re.TD,re.TEMPLATE,re.TEXTAREA,re.TFOOT,re.TH,re.THEAD,re.TITLE,re.TR,re.TRACK,re.UL,re.WBR,re.XMP]),[te.MATHML]:new Set([re.MI,re.MO,re.MN,re.MS,re.MTEXT,re.ANNOTATION_XML]),[te.SVG]:new Set([re.TITLE,re.FOREIGN_OBJECT,re.DESC]),[te.XLINK]:new Set,[te.XML]:new Set,[te.XMLNS]:new Set},Ah=new Set([re.H1,re.H2,re.H3,re.H4,re.H5,re.H6]);P.STYLE,P.SCRIPT,P.XMP,P.IFRAME,P.NOEMBED,P.NOFRAMES,P.PLAINTEXT;var _;(function(e){e[e.DATA=0]="DATA",e[e.RCDATA=1]="RCDATA",e[e.RAWTEXT=2]="RAWTEXT",e[e.SCRIPT_DATA=3]="SCRIPT_DATA",e[e.PLAINTEXT=4]="PLAINTEXT",e[e.TAG_OPEN=5]="TAG_OPEN",e[e.END_TAG_OPEN=6]="END_TAG_OPEN",e[e.TAG_NAME=7]="TAG_NAME",e[e.RCDATA_LESS_THAN_SIGN=8]="RCDATA_LESS_THAN_SIGN",e[e.RCDATA_END_TAG_OPEN=9]="RCDATA_END_TAG_OPEN",e[e.RCDATA_END_TAG_NAME=10]="RCDATA_END_TAG_NAME",e[e.RAWTEXT_LESS_THAN_SIGN=11]="RAWTEXT_LESS_THAN_SIGN",e[e.RAWTEXT_END_TAG_OPEN=12]="RAWTEXT_END_TAG_OPEN",e[e.RAWTEXT_END_TAG_NAME=13]="RAWTEXT_END_TAG_NAME",e[e.SCRIPT_DATA_LESS_THAN_SIGN=14]="SCRIPT_DATA_LESS_THAN_SIGN",e[e.SCRIPT_DATA_END_TAG_OPEN=15]="SCRIPT_DATA_END_TAG_OPEN",e[e.SCRIPT_DATA_END_TAG_NAME=16]="SCRIPT_DATA_END_TAG_NAME",e[e.SCRIPT_DATA_ESCAPE_START=17]="SCRIPT_DATA_ESCAPE_START",e[e.SCRIPT_DATA_ESCAPE_START_DASH=18]="SCRIPT_DATA_ESCAPE_START_DASH",e[e.SCRIPT_DATA_ESCAPED=19]="SCRIPT_DATA_ESCAPED",e[e.SCRIPT_DATA_ESCAPED_DASH=20]="SCRIPT_DATA_ESCAPED_DASH",e[e.SCRIPT_DATA_ESCAPED_DASH_DASH=21]="SCRIPT_DATA_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN=22]="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN=23]="SCRIPT_DATA_ESCAPED_END_TAG_OPEN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME=24]="SCRIPT_DATA_ESCAPED_END_TAG_NAME",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START=25]="SCRIPT_DATA_DOUBLE_ESCAPE_START",e[e.SCRIPT_DATA_DOUBLE_ESCAPED=26]="SCRIPT_DATA_DOUBLE_ESCAPED",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH=27]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH=28]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN=29]="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END=30]="SCRIPT_DATA_DOUBLE_ESCAPE_END",e[e.BEFORE_ATTRIBUTE_NAME=31]="BEFORE_ATTRIBUTE_NAME",e[e.ATTRIBUTE_NAME=32]="ATTRIBUTE_NAME",e[e.AFTER_ATTRIBUTE_NAME=33]="AFTER_ATTRIBUTE_NAME",e[e.BEFORE_ATTRIBUTE_VALUE=34]="BEFORE_ATTRIBUTE_VALUE",e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED=35]="ATTRIBUTE_VALUE_DOUBLE_QUOTED",e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED=36]="ATTRIBUTE_VALUE_SINGLE_QUOTED",e[e.ATTRIBUTE_VALUE_UNQUOTED=37]="ATTRIBUTE_VALUE_UNQUOTED",e[e.AFTER_ATTRIBUTE_VALUE_QUOTED=38]="AFTER_ATTRIBUTE_VALUE_QUOTED",e[e.SELF_CLOSING_START_TAG=39]="SELF_CLOSING_START_TAG",e[e.BOGUS_COMMENT=40]="BOGUS_COMMENT",e[e.MARKUP_DECLARATION_OPEN=41]="MARKUP_DECLARATION_OPEN",e[e.COMMENT_START=42]="COMMENT_START",e[e.COMMENT_START_DASH=43]="COMMENT_START_DASH",e[e.COMMENT=44]="COMMENT",e[e.COMMENT_LESS_THAN_SIGN=45]="COMMENT_LESS_THAN_SIGN",e[e.COMMENT_LESS_THAN_SIGN_BANG=46]="COMMENT_LESS_THAN_SIGN_BANG",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH=47]="COMMENT_LESS_THAN_SIGN_BANG_DASH",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH=48]="COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH",e[e.COMMENT_END_DASH=49]="COMMENT_END_DASH",e[e.COMMENT_END=50]="COMMENT_END",e[e.COMMENT_END_BANG=51]="COMMENT_END_BANG",e[e.DOCTYPE=52]="DOCTYPE",e[e.BEFORE_DOCTYPE_NAME=53]="BEFORE_DOCTYPE_NAME",e[e.DOCTYPE_NAME=54]="DOCTYPE_NAME",e[e.AFTER_DOCTYPE_NAME=55]="AFTER_DOCTYPE_NAME",e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD=56]="AFTER_DOCTYPE_PUBLIC_KEYWORD",e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER=57]="BEFORE_DOCTYPE_PUBLIC_IDENTIFIER",e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED=58]="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED=59]="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER=60]="AFTER_DOCTYPE_PUBLIC_IDENTIFIER",e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS=61]="BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS",e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD=62]="AFTER_DOCTYPE_SYSTEM_KEYWORD",e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER=63]="BEFORE_DOCTYPE_SYSTEM_IDENTIFIER",e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED=64]="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED=65]="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER=66]="AFTER_DOCTYPE_SYSTEM_IDENTIFIER",e[e.BOGUS_DOCTYPE=67]="BOGUS_DOCTYPE",e[e.CDATA_SECTION=68]="CDATA_SECTION",e[e.CDATA_SECTION_BRACKET=69]="CDATA_SECTION_BRACKET",e[e.CDATA_SECTION_END=70]="CDATA_SECTION_END",e[e.CHARACTER_REFERENCE=71]="CHARACTER_REFERENCE",e[e.AMBIGUOUS_AMPERSAND=72]="AMBIGUOUS_AMPERSAND"})(_||(_={}));const ft={DATA:_.DATA,RCDATA:_.RCDATA,RAWTEXT:_.RAWTEXT,SCRIPT_DATA:_.SCRIPT_DATA,PLAINTEXT:_.PLAINTEXT,CDATA_SECTION:_.CDATA_SECTION};function hO(e){return e>=w.DIGIT_0&&e<=w.DIGIT_9}function Lu(e){return e>=w.LATIN_CAPITAL_A&&e<=w.LATIN_CAPITAL_Z}function dO(e){return e>=w.LATIN_SMALL_A&&e<=w.LATIN_SMALL_Z}function zr(e){return dO(e)||Lu(e)}function T1(e){return zr(e)||hO(e)}function Os(e){return e+32}function Oy(e){return e===w.SPACE||e===w.LINE_FEED||e===w.TABULATION||e===w.FORM_FEED}function v1(e){return Oy(e)||e===w.SOLIDUS||e===w.GREATER_THAN_SIGN}function mO(e){return e===w.NULL?X.nullCharacterReference:e>1114111?X.characterReferenceOutsideUnicodeRange:Sy(e)?X.surrogateCharacterReference:Cy(e)?X.noncharacterCharacterReference:_y(e)||e===w.CARRIAGE_RETURN?X.controlCharacterReference:null}class pO{constructor(t,i){this.options=t,this.handler=i,this.paused=!1,this.inLoop=!1,this.inForeignNode=!1,this.lastStartTagName="",this.active=!1,this.state=_.DATA,this.returnState=_.DATA,this.entityStartPos=0,this.consumedAfterSnapshot=-1,this.currentCharacterToken=null,this.currentToken=null,this.currentAttr={name:"",value:""},this.preprocessor=new eO(i),this.currentLocation=this.getCurrentLocation(-1),this.entityDecoder=new sO(tO,(u,s)=>{this.preprocessor.pos=this.entityStartPos+s-1,this._flushCodePointConsumedAsCharacterReference(u)},i.onParseError?{missingSemicolonAfterCharacterReference:()=>{this._err(X.missingSemicolonAfterCharacterReference,1)},absenceOfDigitsInNumericCharacterReference:u=>{this._err(X.absenceOfDigitsInNumericCharacterReference,this.entityStartPos-this.preprocessor.pos+u)},validateNumericCharacterReference:u=>{const s=mO(u);s&&this._err(s,1)}}:void 0)}_err(t,i=0){var u,s;(s=(u=this.handler).onParseError)===null||s===void 0||s.call(u,this.preprocessor.getError(t,i))}getCurrentLocation(t){return this.options.sourceCodeLocationInfo?{startLine:this.preprocessor.line,startCol:this.preprocessor.col-t,startOffset:this.preprocessor.offset-t,endLine:-1,endCol:-1,endOffset:-1}:null}_runParsingLoop(){if(!this.inLoop){for(this.inLoop=!0;this.active&&!this.paused;){this.consumedAfterSnapshot=0;const t=this._consume();this._ensureHibernation()||this._callState(t)}this.inLoop=!1}}pause(){this.paused=!0}resume(t){if(!this.paused)throw new Error("Parser was already resumed");this.paused=!1,!this.inLoop&&(this._runParsingLoop(),this.paused||t?.())}write(t,i,u){this.active=!0,this.preprocessor.write(t,i),this._runParsingLoop(),this.paused||u?.()}insertHtmlAtCurrentPos(t){this.active=!0,this.preprocessor.insertHtmlAtCurrentPos(t),this._runParsingLoop()}_ensureHibernation(){return this.preprocessor.endOfChunkHit?(this.preprocessor.retreat(this.consumedAfterSnapshot),this.consumedAfterSnapshot=0,this.active=!1,!0):!1}_consume(){return this.consumedAfterSnapshot++,this.preprocessor.advance()}_advanceBy(t){this.consumedAfterSnapshot+=t;for(let i=0;i<t;i++)this.preprocessor.advance()}_consumeSequenceIfMatch(t,i){return this.preprocessor.startsWith(t,i)?(this._advanceBy(t.length-1),!0):!1}_createStartTagToken(){this.currentToken={type:ke.START_TAG,tagName:"",tagID:g.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(1)}}_createEndTagToken(){this.currentToken={type:ke.END_TAG,tagName:"",tagID:g.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(2)}}_createCommentToken(t){this.currentToken={type:ke.COMMENT,data:"",location:this.getCurrentLocation(t)}}_createDoctypeToken(t){this.currentToken={type:ke.DOCTYPE,name:t,forceQuirks:!1,publicId:null,systemId:null,location:this.currentLocation}}_createCharacterToken(t,i){this.currentCharacterToken={type:t,chars:i,location:this.currentLocation}}_createAttr(t){this.currentAttr={name:t,value:""},this.currentLocation=this.getCurrentLocation(0)}_leaveAttrName(){var t,i;const u=this.currentToken;if(Ny(u,this.currentAttr.name)===null){if(u.attrs.push(this.currentAttr),u.location&&this.currentLocation){const s=(t=(i=u.location).attrs)!==null&&t!==void 0?t:i.attrs=Object.create(null);s[this.currentAttr.name]=this.currentLocation,this._leaveAttrValue()}}else this._err(X.duplicateAttribute)}_leaveAttrValue(){this.currentLocation&&(this.currentLocation.endLine=this.preprocessor.line,this.currentLocation.endCol=this.preprocessor.col,this.currentLocation.endOffset=this.preprocessor.offset)}prepareToken(t){this._emitCurrentCharacterToken(t.location),this.currentToken=null,t.location&&(t.location.endLine=this.preprocessor.line,t.location.endCol=this.preprocessor.col+1,t.location.endOffset=this.preprocessor.offset+1),this.currentLocation=this.getCurrentLocation(-1)}emitCurrentTagToken(){const t=this.currentToken;this.prepareToken(t),t.tagID=Na(t.tagName),t.type===ke.START_TAG?(this.lastStartTagName=t.tagName,this.handler.onStartTag(t)):(t.attrs.length>0&&this._err(X.endTagWithAttributes),t.selfClosing&&this._err(X.endTagWithTrailingSolidus),this.handler.onEndTag(t)),this.preprocessor.dropParsedChunk()}emitCurrentComment(t){this.prepareToken(t),this.handler.onComment(t),this.preprocessor.dropParsedChunk()}emitCurrentDoctype(t){this.prepareToken(t),this.handler.onDoctype(t),this.preprocessor.dropParsedChunk()}_emitCurrentCharacterToken(t){if(this.currentCharacterToken){switch(t&&this.currentCharacterToken.location&&(this.currentCharacterToken.location.endLine=t.startLine,this.currentCharacterToken.location.endCol=t.startCol,this.currentCharacterToken.location.endOffset=t.startOffset),this.currentCharacterToken.type){case ke.CHARACTER:{this.handler.onCharacter(this.currentCharacterToken);break}case ke.NULL_CHARACTER:{this.handler.onNullCharacter(this.currentCharacterToken);break}case ke.WHITESPACE_CHARACTER:{this.handler.onWhitespaceCharacter(this.currentCharacterToken);break}}this.currentCharacterToken=null}}_emitEOFToken(){const t=this.getCurrentLocation(0);t&&(t.endLine=t.startLine,t.endCol=t.startCol,t.endOffset=t.startOffset),this._emitCurrentCharacterToken(t),this.handler.onEof({type:ke.EOF,location:t}),this.active=!1}_appendCharToCurrentCharacterToken(t,i){if(this.currentCharacterToken)if(this.currentCharacterToken.type===t){this.currentCharacterToken.chars+=i;return}else this.currentLocation=this.getCurrentLocation(0),this._emitCurrentCharacterToken(this.currentLocation),this.preprocessor.dropParsedChunk();this._createCharacterToken(t,i)}_emitCodePoint(t){const i=Oy(t)?ke.WHITESPACE_CHARACTER:t===w.NULL?ke.NULL_CHARACTER:ke.CHARACTER;this._appendCharToCurrentCharacterToken(i,String.fromCodePoint(t))}_emitChars(t){this._appendCharToCurrentCharacterToken(ke.CHARACTER,t)}_startCharacterReference(){this.returnState=this.state,this.state=_.CHARACTER_REFERENCE,this.entityStartPos=this.preprocessor.pos,this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute()?or.Attribute:or.Legacy)}_isCharacterReferenceInAttribute(){return this.returnState===_.ATTRIBUTE_VALUE_DOUBLE_QUOTED||this.returnState===_.ATTRIBUTE_VALUE_SINGLE_QUOTED||this.returnState===_.ATTRIBUTE_VALUE_UNQUOTED}_flushCodePointConsumedAsCharacterReference(t){this._isCharacterReferenceInAttribute()?this.currentAttr.value+=String.fromCodePoint(t):this._emitCodePoint(t)}_callState(t){switch(this.state){case _.DATA:{this._stateData(t);break}case _.RCDATA:{this._stateRcdata(t);break}case _.RAWTEXT:{this._stateRawtext(t);break}case _.SCRIPT_DATA:{this._stateScriptData(t);break}case _.PLAINTEXT:{this._statePlaintext(t);break}case _.TAG_OPEN:{this._stateTagOpen(t);break}case _.END_TAG_OPEN:{this._stateEndTagOpen(t);break}case _.TAG_NAME:{this._stateTagName(t);break}case _.RCDATA_LESS_THAN_SIGN:{this._stateRcdataLessThanSign(t);break}case _.RCDATA_END_TAG_OPEN:{this._stateRcdataEndTagOpen(t);break}case _.RCDATA_END_TAG_NAME:{this._stateRcdataEndTagName(t);break}case _.RAWTEXT_LESS_THAN_SIGN:{this._stateRawtextLessThanSign(t);break}case _.RAWTEXT_END_TAG_OPEN:{this._stateRawtextEndTagOpen(t);break}case _.RAWTEXT_END_TAG_NAME:{this._stateRawtextEndTagName(t);break}case _.SCRIPT_DATA_LESS_THAN_SIGN:{this._stateScriptDataLessThanSign(t);break}case _.SCRIPT_DATA_END_TAG_OPEN:{this._stateScriptDataEndTagOpen(t);break}case _.SCRIPT_DATA_END_TAG_NAME:{this._stateScriptDataEndTagName(t);break}case _.SCRIPT_DATA_ESCAPE_START:{this._stateScriptDataEscapeStart(t);break}case _.SCRIPT_DATA_ESCAPE_START_DASH:{this._stateScriptDataEscapeStartDash(t);break}case _.SCRIPT_DATA_ESCAPED:{this._stateScriptDataEscaped(t);break}case _.SCRIPT_DATA_ESCAPED_DASH:{this._stateScriptDataEscapedDash(t);break}case _.SCRIPT_DATA_ESCAPED_DASH_DASH:{this._stateScriptDataEscapedDashDash(t);break}case _.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataEscapedLessThanSign(t);break}case _.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:{this._stateScriptDataEscapedEndTagOpen(t);break}case _.SCRIPT_DATA_ESCAPED_END_TAG_NAME:{this._stateScriptDataEscapedEndTagName(t);break}case _.SCRIPT_DATA_DOUBLE_ESCAPE_START:{this._stateScriptDataDoubleEscapeStart(t);break}case _.SCRIPT_DATA_DOUBLE_ESCAPED:{this._stateScriptDataDoubleEscaped(t);break}case _.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:{this._stateScriptDataDoubleEscapedDash(t);break}case _.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:{this._stateScriptDataDoubleEscapedDashDash(t);break}case _.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataDoubleEscapedLessThanSign(t);break}case _.SCRIPT_DATA_DOUBLE_ESCAPE_END:{this._stateScriptDataDoubleEscapeEnd(t);break}case _.BEFORE_ATTRIBUTE_NAME:{this._stateBeforeAttributeName(t);break}case _.ATTRIBUTE_NAME:{this._stateAttributeName(t);break}case _.AFTER_ATTRIBUTE_NAME:{this._stateAfterAttributeName(t);break}case _.BEFORE_ATTRIBUTE_VALUE:{this._stateBeforeAttributeValue(t);break}case _.ATTRIBUTE_VALUE_DOUBLE_QUOTED:{this._stateAttributeValueDoubleQuoted(t);break}case _.ATTRIBUTE_VALUE_SINGLE_QUOTED:{this._stateAttributeValueSingleQuoted(t);break}case _.ATTRIBUTE_VALUE_UNQUOTED:{this._stateAttributeValueUnquoted(t);break}case _.AFTER_ATTRIBUTE_VALUE_QUOTED:{this._stateAfterAttributeValueQuoted(t);break}case _.SELF_CLOSING_START_TAG:{this._stateSelfClosingStartTag(t);break}case _.BOGUS_COMMENT:{this._stateBogusComment(t);break}case _.MARKUP_DECLARATION_OPEN:{this._stateMarkupDeclarationOpen(t);break}case _.COMMENT_START:{this._stateCommentStart(t);break}case _.COMMENT_START_DASH:{this._stateCommentStartDash(t);break}case _.COMMENT:{this._stateComment(t);break}case _.COMMENT_LESS_THAN_SIGN:{this._stateCommentLessThanSign(t);break}case _.COMMENT_LESS_THAN_SIGN_BANG:{this._stateCommentLessThanSignBang(t);break}case _.COMMENT_LESS_THAN_SIGN_BANG_DASH:{this._stateCommentLessThanSignBangDash(t);break}case _.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:{this._stateCommentLessThanSignBangDashDash(t);break}case _.COMMENT_END_DASH:{this._stateCommentEndDash(t);break}case _.COMMENT_END:{this._stateCommentEnd(t);break}case _.COMMENT_END_BANG:{this._stateCommentEndBang(t);break}case _.DOCTYPE:{this._stateDoctype(t);break}case _.BEFORE_DOCTYPE_NAME:{this._stateBeforeDoctypeName(t);break}case _.DOCTYPE_NAME:{this._stateDoctypeName(t);break}case _.AFTER_DOCTYPE_NAME:{this._stateAfterDoctypeName(t);break}case _.AFTER_DOCTYPE_PUBLIC_KEYWORD:{this._stateAfterDoctypePublicKeyword(t);break}case _.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateBeforeDoctypePublicIdentifier(t);break}case _.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypePublicIdentifierDoubleQuoted(t);break}case _.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypePublicIdentifierSingleQuoted(t);break}case _.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateAfterDoctypePublicIdentifier(t);break}case _.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:{this._stateBetweenDoctypePublicAndSystemIdentifiers(t);break}case _.AFTER_DOCTYPE_SYSTEM_KEYWORD:{this._stateAfterDoctypeSystemKeyword(t);break}case _.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateBeforeDoctypeSystemIdentifier(t);break}case _.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypeSystemIdentifierDoubleQuoted(t);break}case _.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypeSystemIdentifierSingleQuoted(t);break}case _.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateAfterDoctypeSystemIdentifier(t);break}case _.BOGUS_DOCTYPE:{this._stateBogusDoctype(t);break}case _.CDATA_SECTION:{this._stateCdataSection(t);break}case _.CDATA_SECTION_BRACKET:{this._stateCdataSectionBracket(t);break}case _.CDATA_SECTION_END:{this._stateCdataSectionEnd(t);break}case _.CHARACTER_REFERENCE:{this._stateCharacterReference();break}case _.AMBIGUOUS_AMPERSAND:{this._stateAmbiguousAmpersand(t);break}default:throw new Error("Unknown state")}}_stateData(t){switch(t){case w.LESS_THAN_SIGN:{this.state=_.TAG_OPEN;break}case w.AMPERSAND:{this._startCharacterReference();break}case w.NULL:{this._err(X.unexpectedNullCharacter),this._emitCodePoint(t);break}case w.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRcdata(t){switch(t){case w.AMPERSAND:{this._startCharacterReference();break}case w.LESS_THAN_SIGN:{this.state=_.RCDATA_LESS_THAN_SIGN;break}case w.NULL:{this._err(X.unexpectedNullCharacter),this._emitChars(at);break}case w.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRawtext(t){switch(t){case w.LESS_THAN_SIGN:{this.state=_.RAWTEXT_LESS_THAN_SIGN;break}case w.NULL:{this._err(X.unexpectedNullCharacter),this._emitChars(at);break}case w.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptData(t){switch(t){case w.LESS_THAN_SIGN:{this.state=_.SCRIPT_DATA_LESS_THAN_SIGN;break}case w.NULL:{this._err(X.unexpectedNullCharacter),this._emitChars(at);break}case w.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_statePlaintext(t){switch(t){case w.NULL:{this._err(X.unexpectedNullCharacter),this._emitChars(at);break}case w.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateTagOpen(t){if(zr(t))this._createStartTagToken(),this.state=_.TAG_NAME,this._stateTagName(t);else switch(t){case w.EXCLAMATION_MARK:{this.state=_.MARKUP_DECLARATION_OPEN;break}case w.SOLIDUS:{this.state=_.END_TAG_OPEN;break}case w.QUESTION_MARK:{this._err(X.unexpectedQuestionMarkInsteadOfTagName),this._createCommentToken(1),this.state=_.BOGUS_COMMENT,this._stateBogusComment(t);break}case w.EOF:{this._err(X.eofBeforeTagName),this._emitChars("<"),this._emitEOFToken();break}default:this._err(X.invalidFirstCharacterOfTagName),this._emitChars("<"),this.state=_.DATA,this._stateData(t)}}_stateEndTagOpen(t){if(zr(t))this._createEndTagToken(),this.state=_.TAG_NAME,this._stateTagName(t);else switch(t){case w.GREATER_THAN_SIGN:{this._err(X.missingEndTagName),this.state=_.DATA;break}case w.EOF:{this._err(X.eofBeforeTagName),this._emitChars("</"),this._emitEOFToken();break}default:this._err(X.invalidFirstCharacterOfTagName),this._createCommentToken(2),this.state=_.BOGUS_COMMENT,this._stateBogusComment(t)}}_stateTagName(t){const i=this.currentToken;switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:{this.state=_.BEFORE_ATTRIBUTE_NAME;break}case w.SOLIDUS:{this.state=_.SELF_CLOSING_START_TAG;break}case w.GREATER_THAN_SIGN:{this.state=_.DATA,this.emitCurrentTagToken();break}case w.NULL:{this._err(X.unexpectedNullCharacter),i.tagName+=at;break}case w.EOF:{this._err(X.eofInTag),this._emitEOFToken();break}default:i.tagName+=String.fromCodePoint(Lu(t)?Os(t):t)}}_stateRcdataLessThanSign(t){t===w.SOLIDUS?this.state=_.RCDATA_END_TAG_OPEN:(this._emitChars("<"),this.state=_.RCDATA,this._stateRcdata(t))}_stateRcdataEndTagOpen(t){zr(t)?(this.state=_.RCDATA_END_TAG_NAME,this._stateRcdataEndTagName(t)):(this._emitChars("</"),this.state=_.RCDATA,this._stateRcdata(t))}handleSpecialEndTag(t){if(!this.preprocessor.startsWith(this.lastStartTagName,!1))return!this._ensureHibernation();this._createEndTagToken();const i=this.currentToken;switch(i.tagName=this.lastStartTagName,this.preprocessor.peek(this.lastStartTagName.length)){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:return this._advanceBy(this.lastStartTagName.length),this.state=_.BEFORE_ATTRIBUTE_NAME,!1;case w.SOLIDUS:return this._advanceBy(this.lastStartTagName.length),this.state=_.SELF_CLOSING_START_TAG,!1;case w.GREATER_THAN_SIGN:return this._advanceBy(this.lastStartTagName.length),this.emitCurrentTagToken(),this.state=_.DATA,!1;default:return!this._ensureHibernation()}}_stateRcdataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=_.RCDATA,this._stateRcdata(t))}_stateRawtextLessThanSign(t){t===w.SOLIDUS?this.state=_.RAWTEXT_END_TAG_OPEN:(this._emitChars("<"),this.state=_.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagOpen(t){zr(t)?(this.state=_.RAWTEXT_END_TAG_NAME,this._stateRawtextEndTagName(t)):(this._emitChars("</"),this.state=_.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=_.RAWTEXT,this._stateRawtext(t))}_stateScriptDataLessThanSign(t){switch(t){case w.SOLIDUS:{this.state=_.SCRIPT_DATA_END_TAG_OPEN;break}case w.EXCLAMATION_MARK:{this.state=_.SCRIPT_DATA_ESCAPE_START,this._emitChars("<!");break}default:this._emitChars("<"),this.state=_.SCRIPT_DATA,this._stateScriptData(t)}}_stateScriptDataEndTagOpen(t){zr(t)?(this.state=_.SCRIPT_DATA_END_TAG_NAME,this._stateScriptDataEndTagName(t)):(this._emitChars("</"),this.state=_.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=_.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStart(t){t===w.HYPHEN_MINUS?(this.state=_.SCRIPT_DATA_ESCAPE_START_DASH,this._emitChars("-")):(this.state=_.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStartDash(t){t===w.HYPHEN_MINUS?(this.state=_.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-")):(this.state=_.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscaped(t){switch(t){case w.HYPHEN_MINUS:{this.state=_.SCRIPT_DATA_ESCAPED_DASH,this._emitChars("-");break}case w.LESS_THAN_SIGN:{this.state=_.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case w.NULL:{this._err(X.unexpectedNullCharacter),this._emitChars(at);break}case w.EOF:{this._err(X.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataEscapedDash(t){switch(t){case w.HYPHEN_MINUS:{this.state=_.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-");break}case w.LESS_THAN_SIGN:{this.state=_.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case w.NULL:{this._err(X.unexpectedNullCharacter),this.state=_.SCRIPT_DATA_ESCAPED,this._emitChars(at);break}case w.EOF:{this._err(X.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=_.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedDashDash(t){switch(t){case w.HYPHEN_MINUS:{this._emitChars("-");break}case w.LESS_THAN_SIGN:{this.state=_.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case w.GREATER_THAN_SIGN:{this.state=_.SCRIPT_DATA,this._emitChars(">");break}case w.NULL:{this._err(X.unexpectedNullCharacter),this.state=_.SCRIPT_DATA_ESCAPED,this._emitChars(at);break}case w.EOF:{this._err(X.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=_.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedLessThanSign(t){t===w.SOLIDUS?this.state=_.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:zr(t)?(this._emitChars("<"),this.state=_.SCRIPT_DATA_DOUBLE_ESCAPE_START,this._stateScriptDataDoubleEscapeStart(t)):(this._emitChars("<"),this.state=_.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagOpen(t){zr(t)?(this.state=_.SCRIPT_DATA_ESCAPED_END_TAG_NAME,this._stateScriptDataEscapedEndTagName(t)):(this._emitChars("</"),this.state=_.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=_.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscapeStart(t){if(this.preprocessor.startsWith(Kt.SCRIPT,!1)&&v1(this.preprocessor.peek(Kt.SCRIPT.length))){this._emitCodePoint(t);for(let i=0;i<Kt.SCRIPT.length;i++)this._emitCodePoint(this._consume());this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED}else this._ensureHibernation()||(this.state=_.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscaped(t){switch(t){case w.HYPHEN_MINUS:{this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED_DASH,this._emitChars("-");break}case w.LESS_THAN_SIGN:{this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case w.NULL:{this._err(X.unexpectedNullCharacter),this._emitChars(at);break}case w.EOF:{this._err(X.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDash(t){switch(t){case w.HYPHEN_MINUS:{this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH,this._emitChars("-");break}case w.LESS_THAN_SIGN:{this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case w.NULL:{this._err(X.unexpectedNullCharacter),this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(at);break}case w.EOF:{this._err(X.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDashDash(t){switch(t){case w.HYPHEN_MINUS:{this._emitChars("-");break}case w.LESS_THAN_SIGN:{this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case w.GREATER_THAN_SIGN:{this.state=_.SCRIPT_DATA,this._emitChars(">");break}case w.NULL:{this._err(X.unexpectedNullCharacter),this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(at);break}case w.EOF:{this._err(X.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedLessThanSign(t){t===w.SOLIDUS?(this.state=_.SCRIPT_DATA_DOUBLE_ESCAPE_END,this._emitChars("/")):(this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateScriptDataDoubleEscapeEnd(t){if(this.preprocessor.startsWith(Kt.SCRIPT,!1)&&v1(this.preprocessor.peek(Kt.SCRIPT.length))){this._emitCodePoint(t);for(let i=0;i<Kt.SCRIPT.length;i++)this._emitCodePoint(this._consume());this.state=_.SCRIPT_DATA_ESCAPED}else this._ensureHibernation()||(this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateBeforeAttributeName(t){switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:break;case w.SOLIDUS:case w.GREATER_THAN_SIGN:case w.EOF:{this.state=_.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case w.EQUALS_SIGN:{this._err(X.unexpectedEqualsSignBeforeAttributeName),this._createAttr("="),this.state=_.ATTRIBUTE_NAME;break}default:this._createAttr(""),this.state=_.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateAttributeName(t){switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:case w.SOLIDUS:case w.GREATER_THAN_SIGN:case w.EOF:{this._leaveAttrName(),this.state=_.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case w.EQUALS_SIGN:{this._leaveAttrName(),this.state=_.BEFORE_ATTRIBUTE_VALUE;break}case w.QUOTATION_MARK:case w.APOSTROPHE:case w.LESS_THAN_SIGN:{this._err(X.unexpectedCharacterInAttributeName),this.currentAttr.name+=String.fromCodePoint(t);break}case w.NULL:{this._err(X.unexpectedNullCharacter),this.currentAttr.name+=at;break}default:this.currentAttr.name+=String.fromCodePoint(Lu(t)?Os(t):t)}}_stateAfterAttributeName(t){switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:break;case w.SOLIDUS:{this.state=_.SELF_CLOSING_START_TAG;break}case w.EQUALS_SIGN:{this.state=_.BEFORE_ATTRIBUTE_VALUE;break}case w.GREATER_THAN_SIGN:{this.state=_.DATA,this.emitCurrentTagToken();break}case w.EOF:{this._err(X.eofInTag),this._emitEOFToken();break}default:this._createAttr(""),this.state=_.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateBeforeAttributeValue(t){switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:break;case w.QUOTATION_MARK:{this.state=_.ATTRIBUTE_VALUE_DOUBLE_QUOTED;break}case w.APOSTROPHE:{this.state=_.ATTRIBUTE_VALUE_SINGLE_QUOTED;break}case w.GREATER_THAN_SIGN:{this._err(X.missingAttributeValue),this.state=_.DATA,this.emitCurrentTagToken();break}default:this.state=_.ATTRIBUTE_VALUE_UNQUOTED,this._stateAttributeValueUnquoted(t)}}_stateAttributeValueDoubleQuoted(t){switch(t){case w.QUOTATION_MARK:{this.state=_.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case w.AMPERSAND:{this._startCharacterReference();break}case w.NULL:{this._err(X.unexpectedNullCharacter),this.currentAttr.value+=at;break}case w.EOF:{this._err(X.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueSingleQuoted(t){switch(t){case w.APOSTROPHE:{this.state=_.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case w.AMPERSAND:{this._startCharacterReference();break}case w.NULL:{this._err(X.unexpectedNullCharacter),this.currentAttr.value+=at;break}case w.EOF:{this._err(X.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueUnquoted(t){switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:{this._leaveAttrValue(),this.state=_.BEFORE_ATTRIBUTE_NAME;break}case w.AMPERSAND:{this._startCharacterReference();break}case w.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=_.DATA,this.emitCurrentTagToken();break}case w.NULL:{this._err(X.unexpectedNullCharacter),this.currentAttr.value+=at;break}case w.QUOTATION_MARK:case w.APOSTROPHE:case w.LESS_THAN_SIGN:case w.EQUALS_SIGN:case w.GRAVE_ACCENT:{this._err(X.unexpectedCharacterInUnquotedAttributeValue),this.currentAttr.value+=String.fromCodePoint(t);break}case w.EOF:{this._err(X.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAfterAttributeValueQuoted(t){switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:{this._leaveAttrValue(),this.state=_.BEFORE_ATTRIBUTE_NAME;break}case w.SOLIDUS:{this._leaveAttrValue(),this.state=_.SELF_CLOSING_START_TAG;break}case w.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=_.DATA,this.emitCurrentTagToken();break}case w.EOF:{this._err(X.eofInTag),this._emitEOFToken();break}default:this._err(X.missingWhitespaceBetweenAttributes),this.state=_.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateSelfClosingStartTag(t){switch(t){case w.GREATER_THAN_SIGN:{const i=this.currentToken;i.selfClosing=!0,this.state=_.DATA,this.emitCurrentTagToken();break}case w.EOF:{this._err(X.eofInTag),this._emitEOFToken();break}default:this._err(X.unexpectedSolidusInTag),this.state=_.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateBogusComment(t){const i=this.currentToken;switch(t){case w.GREATER_THAN_SIGN:{this.state=_.DATA,this.emitCurrentComment(i);break}case w.EOF:{this.emitCurrentComment(i),this._emitEOFToken();break}case w.NULL:{this._err(X.unexpectedNullCharacter),i.data+=at;break}default:i.data+=String.fromCodePoint(t)}}_stateMarkupDeclarationOpen(t){this._consumeSequenceIfMatch(Kt.DASH_DASH,!0)?(this._createCommentToken(Kt.DASH_DASH.length+1),this.state=_.COMMENT_START):this._consumeSequenceIfMatch(Kt.DOCTYPE,!1)?(this.currentLocation=this.getCurrentLocation(Kt.DOCTYPE.length+1),this.state=_.DOCTYPE):this._consumeSequenceIfMatch(Kt.CDATA_START,!0)?this.inForeignNode?this.state=_.CDATA_SECTION:(this._err(X.cdataInHtmlContent),this._createCommentToken(Kt.CDATA_START.length+1),this.currentToken.data="[CDATA[",this.state=_.BOGUS_COMMENT):this._ensureHibernation()||(this._err(X.incorrectlyOpenedComment),this._createCommentToken(2),this.state=_.BOGUS_COMMENT,this._stateBogusComment(t))}_stateCommentStart(t){switch(t){case w.HYPHEN_MINUS:{this.state=_.COMMENT_START_DASH;break}case w.GREATER_THAN_SIGN:{this._err(X.abruptClosingOfEmptyComment),this.state=_.DATA;const i=this.currentToken;this.emitCurrentComment(i);break}default:this.state=_.COMMENT,this._stateComment(t)}}_stateCommentStartDash(t){const i=this.currentToken;switch(t){case w.HYPHEN_MINUS:{this.state=_.COMMENT_END;break}case w.GREATER_THAN_SIGN:{this._err(X.abruptClosingOfEmptyComment),this.state=_.DATA,this.emitCurrentComment(i);break}case w.EOF:{this._err(X.eofInComment),this.emitCurrentComment(i),this._emitEOFToken();break}default:i.data+="-",this.state=_.COMMENT,this._stateComment(t)}}_stateComment(t){const i=this.currentToken;switch(t){case w.HYPHEN_MINUS:{this.state=_.COMMENT_END_DASH;break}case w.LESS_THAN_SIGN:{i.data+="<",this.state=_.COMMENT_LESS_THAN_SIGN;break}case w.NULL:{this._err(X.unexpectedNullCharacter),i.data+=at;break}case w.EOF:{this._err(X.eofInComment),this.emitCurrentComment(i),this._emitEOFToken();break}default:i.data+=String.fromCodePoint(t)}}_stateCommentLessThanSign(t){const i=this.currentToken;switch(t){case w.EXCLAMATION_MARK:{i.data+="!",this.state=_.COMMENT_LESS_THAN_SIGN_BANG;break}case w.LESS_THAN_SIGN:{i.data+="<";break}default:this.state=_.COMMENT,this._stateComment(t)}}_stateCommentLessThanSignBang(t){t===w.HYPHEN_MINUS?this.state=_.COMMENT_LESS_THAN_SIGN_BANG_DASH:(this.state=_.COMMENT,this._stateComment(t))}_stateCommentLessThanSignBangDash(t){t===w.HYPHEN_MINUS?this.state=_.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:(this.state=_.COMMENT_END_DASH,this._stateCommentEndDash(t))}_stateCommentLessThanSignBangDashDash(t){t!==w.GREATER_THAN_SIGN&&t!==w.EOF&&this._err(X.nestedComment),this.state=_.COMMENT_END,this._stateCommentEnd(t)}_stateCommentEndDash(t){const i=this.currentToken;switch(t){case w.HYPHEN_MINUS:{this.state=_.COMMENT_END;break}case w.EOF:{this._err(X.eofInComment),this.emitCurrentComment(i),this._emitEOFToken();break}default:i.data+="-",this.state=_.COMMENT,this._stateComment(t)}}_stateCommentEnd(t){const i=this.currentToken;switch(t){case w.GREATER_THAN_SIGN:{this.state=_.DATA,this.emitCurrentComment(i);break}case w.EXCLAMATION_MARK:{this.state=_.COMMENT_END_BANG;break}case w.HYPHEN_MINUS:{i.data+="-";break}case w.EOF:{this._err(X.eofInComment),this.emitCurrentComment(i),this._emitEOFToken();break}default:i.data+="--",this.state=_.COMMENT,this._stateComment(t)}}_stateCommentEndBang(t){const i=this.currentToken;switch(t){case w.HYPHEN_MINUS:{i.data+="--!",this.state=_.COMMENT_END_DASH;break}case w.GREATER_THAN_SIGN:{this._err(X.incorrectlyClosedComment),this.state=_.DATA,this.emitCurrentComment(i);break}case w.EOF:{this._err(X.eofInComment),this.emitCurrentComment(i),this._emitEOFToken();break}default:i.data+="--!",this.state=_.COMMENT,this._stateComment(t)}}_stateDoctype(t){switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:{this.state=_.BEFORE_DOCTYPE_NAME;break}case w.GREATER_THAN_SIGN:{this.state=_.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t);break}case w.EOF:{this._err(X.eofInDoctype),this._createDoctypeToken(null);const i=this.currentToken;i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(X.missingWhitespaceBeforeDoctypeName),this.state=_.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t)}}_stateBeforeDoctypeName(t){if(Lu(t))this._createDoctypeToken(String.fromCharCode(Os(t))),this.state=_.DOCTYPE_NAME;else switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:break;case w.NULL:{this._err(X.unexpectedNullCharacter),this._createDoctypeToken(at),this.state=_.DOCTYPE_NAME;break}case w.GREATER_THAN_SIGN:{this._err(X.missingDoctypeName),this._createDoctypeToken(null);const i=this.currentToken;i.forceQuirks=!0,this.emitCurrentDoctype(i),this.state=_.DATA;break}case w.EOF:{this._err(X.eofInDoctype),this._createDoctypeToken(null);const i=this.currentToken;i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._createDoctypeToken(String.fromCodePoint(t)),this.state=_.DOCTYPE_NAME}}_stateDoctypeName(t){const i=this.currentToken;switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:{this.state=_.AFTER_DOCTYPE_NAME;break}case w.GREATER_THAN_SIGN:{this.state=_.DATA,this.emitCurrentDoctype(i);break}case w.NULL:{this._err(X.unexpectedNullCharacter),i.name+=at;break}case w.EOF:{this._err(X.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:i.name+=String.fromCodePoint(Lu(t)?Os(t):t)}}_stateAfterDoctypeName(t){const i=this.currentToken;switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:break;case w.GREATER_THAN_SIGN:{this.state=_.DATA,this.emitCurrentDoctype(i);break}case w.EOF:{this._err(X.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._consumeSequenceIfMatch(Kt.PUBLIC,!1)?this.state=_.AFTER_DOCTYPE_PUBLIC_KEYWORD:this._consumeSequenceIfMatch(Kt.SYSTEM,!1)?this.state=_.AFTER_DOCTYPE_SYSTEM_KEYWORD:this._ensureHibernation()||(this._err(X.invalidCharacterSequenceAfterDoctypeName),i.forceQuirks=!0,this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t))}}_stateAfterDoctypePublicKeyword(t){const i=this.currentToken;switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:{this.state=_.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;break}case w.QUOTATION_MARK:{this._err(X.missingWhitespaceAfterDoctypePublicKeyword),i.publicId="",this.state=_.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case w.APOSTROPHE:{this._err(X.missingWhitespaceAfterDoctypePublicKeyword),i.publicId="",this.state=_.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case w.GREATER_THAN_SIGN:{this._err(X.missingDoctypePublicIdentifier),i.forceQuirks=!0,this.state=_.DATA,this.emitCurrentDoctype(i);break}case w.EOF:{this._err(X.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(X.missingQuoteBeforeDoctypePublicIdentifier),i.forceQuirks=!0,this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypePublicIdentifier(t){const i=this.currentToken;switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:break;case w.QUOTATION_MARK:{i.publicId="",this.state=_.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case w.APOSTROPHE:{i.publicId="",this.state=_.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case w.GREATER_THAN_SIGN:{this._err(X.missingDoctypePublicIdentifier),i.forceQuirks=!0,this.state=_.DATA,this.emitCurrentDoctype(i);break}case w.EOF:{this._err(X.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(X.missingQuoteBeforeDoctypePublicIdentifier),i.forceQuirks=!0,this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypePublicIdentifierDoubleQuoted(t){const i=this.currentToken;switch(t){case w.QUOTATION_MARK:{this.state=_.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case w.NULL:{this._err(X.unexpectedNullCharacter),i.publicId+=at;break}case w.GREATER_THAN_SIGN:{this._err(X.abruptDoctypePublicIdentifier),i.forceQuirks=!0,this.emitCurrentDoctype(i),this.state=_.DATA;break}case w.EOF:{this._err(X.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:i.publicId+=String.fromCodePoint(t)}}_stateDoctypePublicIdentifierSingleQuoted(t){const i=this.currentToken;switch(t){case w.APOSTROPHE:{this.state=_.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case w.NULL:{this._err(X.unexpectedNullCharacter),i.publicId+=at;break}case w.GREATER_THAN_SIGN:{this._err(X.abruptDoctypePublicIdentifier),i.forceQuirks=!0,this.emitCurrentDoctype(i),this.state=_.DATA;break}case w.EOF:{this._err(X.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:i.publicId+=String.fromCodePoint(t)}}_stateAfterDoctypePublicIdentifier(t){const i=this.currentToken;switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:{this.state=_.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;break}case w.GREATER_THAN_SIGN:{this.state=_.DATA,this.emitCurrentDoctype(i);break}case w.QUOTATION_MARK:{this._err(X.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),i.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case w.APOSTROPHE:{this._err(X.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),i.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case w.EOF:{this._err(X.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(X.missingQuoteBeforeDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBetweenDoctypePublicAndSystemIdentifiers(t){const i=this.currentToken;switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:break;case w.GREATER_THAN_SIGN:{this.emitCurrentDoctype(i),this.state=_.DATA;break}case w.QUOTATION_MARK:{i.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case w.APOSTROPHE:{i.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case w.EOF:{this._err(X.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(X.missingQuoteBeforeDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateAfterDoctypeSystemKeyword(t){const i=this.currentToken;switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:{this.state=_.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;break}case w.QUOTATION_MARK:{this._err(X.missingWhitespaceAfterDoctypeSystemKeyword),i.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case w.APOSTROPHE:{this._err(X.missingWhitespaceAfterDoctypeSystemKeyword),i.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case w.GREATER_THAN_SIGN:{this._err(X.missingDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=_.DATA,this.emitCurrentDoctype(i);break}case w.EOF:{this._err(X.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(X.missingQuoteBeforeDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypeSystemIdentifier(t){const i=this.currentToken;switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:break;case w.QUOTATION_MARK:{i.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case w.APOSTROPHE:{i.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case w.GREATER_THAN_SIGN:{this._err(X.missingDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=_.DATA,this.emitCurrentDoctype(i);break}case w.EOF:{this._err(X.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(X.missingQuoteBeforeDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypeSystemIdentifierDoubleQuoted(t){const i=this.currentToken;switch(t){case w.QUOTATION_MARK:{this.state=_.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case w.NULL:{this._err(X.unexpectedNullCharacter),i.systemId+=at;break}case w.GREATER_THAN_SIGN:{this._err(X.abruptDoctypeSystemIdentifier),i.forceQuirks=!0,this.emitCurrentDoctype(i),this.state=_.DATA;break}case w.EOF:{this._err(X.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:i.systemId+=String.fromCodePoint(t)}}_stateDoctypeSystemIdentifierSingleQuoted(t){const i=this.currentToken;switch(t){case w.APOSTROPHE:{this.state=_.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case w.NULL:{this._err(X.unexpectedNullCharacter),i.systemId+=at;break}case w.GREATER_THAN_SIGN:{this._err(X.abruptDoctypeSystemIdentifier),i.forceQuirks=!0,this.emitCurrentDoctype(i),this.state=_.DATA;break}case w.EOF:{this._err(X.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:i.systemId+=String.fromCodePoint(t)}}_stateAfterDoctypeSystemIdentifier(t){const i=this.currentToken;switch(t){case w.SPACE:case w.LINE_FEED:case w.TABULATION:case w.FORM_FEED:break;case w.GREATER_THAN_SIGN:{this.emitCurrentDoctype(i),this.state=_.DATA;break}case w.EOF:{this._err(X.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(X.unexpectedCharacterAfterDoctypeSystemIdentifier),this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBogusDoctype(t){const i=this.currentToken;switch(t){case w.GREATER_THAN_SIGN:{this.emitCurrentDoctype(i),this.state=_.DATA;break}case w.NULL:{this._err(X.unexpectedNullCharacter);break}case w.EOF:{this.emitCurrentDoctype(i),this._emitEOFToken();break}}}_stateCdataSection(t){switch(t){case w.RIGHT_SQUARE_BRACKET:{this.state=_.CDATA_SECTION_BRACKET;break}case w.EOF:{this._err(X.eofInCdata),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateCdataSectionBracket(t){t===w.RIGHT_SQUARE_BRACKET?this.state=_.CDATA_SECTION_END:(this._emitChars("]"),this.state=_.CDATA_SECTION,this._stateCdataSection(t))}_stateCdataSectionEnd(t){switch(t){case w.GREATER_THAN_SIGN:{this.state=_.DATA;break}case w.RIGHT_SQUARE_BRACKET:{this._emitChars("]");break}default:this._emitChars("]]"),this.state=_.CDATA_SECTION,this._stateCdataSection(t)}}_stateCharacterReference(){let t=this.entityDecoder.write(this.preprocessor.html,this.preprocessor.pos);if(t<0)if(this.preprocessor.lastChunkWritten)t=this.entityDecoder.end();else{this.active=!1,this.preprocessor.pos=this.preprocessor.html.length-1,this.consumedAfterSnapshot=0,this.preprocessor.endOfChunkHit=!0;return}t===0?(this.preprocessor.pos=this.entityStartPos,this._flushCodePointConsumedAsCharacterReference(w.AMPERSAND),this.state=!this._isCharacterReferenceInAttribute()&&T1(this.preprocessor.peek(1))?_.AMBIGUOUS_AMPERSAND:this.returnState):this.state=this.returnState}_stateAmbiguousAmpersand(t){T1(t)?this._flushCodePointConsumedAsCharacterReference(t):(t===w.SEMICOLON&&this._err(X.unknownNamedCharacterReference),this.state=this.returnState,this._callState(t))}}const Ry=new Set([g.DD,g.DT,g.LI,g.OPTGROUP,g.OPTION,g.P,g.RB,g.RP,g.RT,g.RTC]),A1=new Set([...Ry,g.CAPTION,g.COLGROUP,g.TBODY,g.TD,g.TFOOT,g.TH,g.THEAD,g.TR]),zs=new Set([g.APPLET,g.CAPTION,g.HTML,g.MARQUEE,g.OBJECT,g.TABLE,g.TD,g.TEMPLATE,g.TH]),gO=new Set([...zs,g.OL,g.UL]),bO=new Set([...zs,g.BUTTON]),x1=new Set([g.ANNOTATION_XML,g.MI,g.MN,g.MO,g.MS,g.MTEXT]),w1=new Set([g.DESC,g.FOREIGN_OBJECT,g.TITLE]),yO=new Set([g.TR,g.TEMPLATE,g.HTML]),EO=new Set([g.TBODY,g.TFOOT,g.THEAD,g.TEMPLATE,g.HTML]),TO=new Set([g.TABLE,g.TEMPLATE,g.HTML]),vO=new Set([g.TD,g.TH]);class AO{get currentTmplContentOrNode(){return this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):this.current}constructor(t,i,u){this.treeAdapter=i,this.handler=u,this.items=[],this.tagIDs=[],this.stackTop=-1,this.tmplCount=0,this.currentTagId=g.UNKNOWN,this.current=t}_indexOf(t){return this.items.lastIndexOf(t,this.stackTop)}_isInTemplate(){return this.currentTagId===g.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===te.HTML}_updateCurrentElement(){this.current=this.items[this.stackTop],this.currentTagId=this.tagIDs[this.stackTop]}push(t,i){this.stackTop++,this.items[this.stackTop]=t,this.current=t,this.tagIDs[this.stackTop]=i,this.currentTagId=i,this._isInTemplate()&&this.tmplCount++,this.handler.onItemPush(t,i,!0)}pop(){const t=this.current;this.tmplCount>0&&this._isInTemplate()&&this.tmplCount--,this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!0)}replace(t,i){const u=this._indexOf(t);this.items[u]=i,u===this.stackTop&&(this.current=i)}insertAfter(t,i,u){const s=this._indexOf(t)+1;this.items.splice(s,0,i),this.tagIDs.splice(s,0,u),this.stackTop++,s===this.stackTop&&this._updateCurrentElement(),this.current&&this.currentTagId!==void 0&&this.handler.onItemPush(this.current,this.currentTagId,s===this.stackTop)}popUntilTagNamePopped(t){let i=this.stackTop+1;do i=this.tagIDs.lastIndexOf(t,i-1);while(i>0&&this.treeAdapter.getNamespaceURI(this.items[i])!==te.HTML);this.shortenToLength(Math.max(i,0))}shortenToLength(t){for(;this.stackTop>=t;){const i=this.current;this.tmplCount>0&&this._isInTemplate()&&(this.tmplCount-=1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(i,this.stackTop<t)}}popUntilElementPopped(t){const i=this._indexOf(t);this.shortenToLength(Math.max(i,0))}popUntilPopped(t,i){const u=this._indexOfTagNames(t,i);this.shortenToLength(Math.max(u,0))}popUntilNumberedHeaderPopped(){this.popUntilPopped(Ah,te.HTML)}popUntilTableCellPopped(){this.popUntilPopped(vO,te.HTML)}popAllUpToHtmlElement(){this.tmplCount=0,this.shortenToLength(1)}_indexOfTagNames(t,i){for(let u=this.stackTop;u>=0;u--)if(t.has(this.tagIDs[u])&&this.treeAdapter.getNamespaceURI(this.items[u])===i)return u;return-1}clearBackTo(t,i){const u=this._indexOfTagNames(t,i);this.shortenToLength(u+1)}clearBackToTableContext(){this.clearBackTo(TO,te.HTML)}clearBackToTableBodyContext(){this.clearBackTo(EO,te.HTML)}clearBackToTableRowContext(){this.clearBackTo(yO,te.HTML)}remove(t){const i=this._indexOf(t);i>=0&&(i===this.stackTop?this.pop():(this.items.splice(i,1),this.tagIDs.splice(i,1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!1)))}tryPeekProperlyNestedBodyElement(){return this.stackTop>=1&&this.tagIDs[1]===g.BODY?this.items[1]:null}contains(t){return this._indexOf(t)>-1}getCommonAncestor(t){const i=this._indexOf(t)-1;return i>=0?this.items[i]:null}isRootHtmlElementCurrent(){return this.stackTop===0&&this.tagIDs[0]===g.HTML}hasInDynamicScope(t,i){for(let u=this.stackTop;u>=0;u--){const s=this.tagIDs[u];switch(this.treeAdapter.getNamespaceURI(this.items[u])){case te.HTML:{if(s===t)return!0;if(i.has(s))return!1;break}case te.SVG:{if(w1.has(s))return!1;break}case te.MATHML:{if(x1.has(s))return!1;break}}}return!0}hasInScope(t){return this.hasInDynamicScope(t,zs)}hasInListItemScope(t){return this.hasInDynamicScope(t,gO)}hasInButtonScope(t){return this.hasInDynamicScope(t,bO)}hasNumberedHeaderInScope(){for(let t=this.stackTop;t>=0;t--){const i=this.tagIDs[t];switch(this.treeAdapter.getNamespaceURI(this.items[t])){case te.HTML:{if(Ah.has(i))return!0;if(zs.has(i))return!1;break}case te.SVG:{if(w1.has(i))return!1;break}case te.MATHML:{if(x1.has(i))return!1;break}}}return!0}hasInTableScope(t){for(let i=this.stackTop;i>=0;i--)if(this.treeAdapter.getNamespaceURI(this.items[i])===te.HTML)switch(this.tagIDs[i]){case t:return!0;case g.TABLE:case g.HTML:return!1}return!0}hasTableBodyContextInTableScope(){for(let t=this.stackTop;t>=0;t--)if(this.treeAdapter.getNamespaceURI(this.items[t])===te.HTML)switch(this.tagIDs[t]){case g.TBODY:case g.THEAD:case g.TFOOT:return!0;case g.TABLE:case g.HTML:return!1}return!0}hasInSelectScope(t){for(let i=this.stackTop;i>=0;i--)if(this.treeAdapter.getNamespaceURI(this.items[i])===te.HTML)switch(this.tagIDs[i]){case t:return!0;case g.OPTION:case g.OPTGROUP:break;default:return!1}return!0}generateImpliedEndTags(){for(;this.currentTagId!==void 0&&Ry.has(this.currentTagId);)this.pop()}generateImpliedEndTagsThoroughly(){for(;this.currentTagId!==void 0&&A1.has(this.currentTagId);)this.pop()}generateImpliedEndTagsWithExclusion(t){for(;this.currentTagId!==void 0&&this.currentTagId!==t&&A1.has(this.currentTagId);)this.pop()}}const $f=3;var Un;(function(e){e[e.Marker=0]="Marker",e[e.Element=1]="Element"})(Un||(Un={}));const S1={type:Un.Marker};class xO{constructor(t){this.treeAdapter=t,this.entries=[],this.bookmark=null}_getNoahArkConditionCandidates(t,i){const u=[],s=i.length,o=this.treeAdapter.getTagName(t),c=this.treeAdapter.getNamespaceURI(t);for(let h=0;h<this.entries.length;h++){const d=this.entries[h];if(d.type===Un.Marker)break;const{element:p}=d;if(this.treeAdapter.getTagName(p)===o&&this.treeAdapter.getNamespaceURI(p)===c){const y=this.treeAdapter.getAttrList(p);y.length===s&&u.push({idx:h,attrs:y})}}return u}_ensureNoahArkCondition(t){if(this.entries.length<$f)return;const i=this.treeAdapter.getAttrList(t),u=this._getNoahArkConditionCandidates(t,i);if(u.length<$f)return;const s=new Map(i.map(c=>[c.name,c.value]));let o=0;for(let c=0;c<u.length;c++){const h=u[c];h.attrs.every(d=>s.get(d.name)===d.value)&&(o+=1,o>=$f&&this.entries.splice(h.idx,1))}}insertMarker(){this.entries.unshift(S1)}pushElement(t,i){this._ensureNoahArkCondition(t),this.entries.unshift({type:Un.Element,element:t,token:i})}insertElementAfterBookmark(t,i){const u=this.entries.indexOf(this.bookmark);this.entries.splice(u,0,{type:Un.Element,element:t,token:i})}removeEntry(t){const i=this.entries.indexOf(t);i!==-1&&this.entries.splice(i,1)}clearToLastMarker(){const t=this.entries.indexOf(S1);t===-1?this.entries.length=0:this.entries.splice(0,t+1)}getElementEntryInScopeWithTagName(t){const i=this.entries.find(u=>u.type===Un.Marker||this.treeAdapter.getTagName(u.element)===t);return i&&i.type===Un.Element?i:null}getElementEntry(t){return this.entries.find(i=>i.type===Un.Element&&i.element===t)}}const jr={createDocument(){return{nodeName:"#document",mode:wn.NO_QUIRKS,childNodes:[]}},createDocumentFragment(){return{nodeName:"#document-fragment",childNodes:[]}},createElement(e,t,i){return{nodeName:e,tagName:e,attrs:i,namespaceURI:t,childNodes:[],parentNode:null}},createCommentNode(e){return{nodeName:"#comment",data:e,parentNode:null}},createTextNode(e){return{nodeName:"#text",value:e,parentNode:null}},appendChild(e,t){e.childNodes.push(t),t.parentNode=e},insertBefore(e,t,i){const u=e.childNodes.indexOf(i);e.childNodes.splice(u,0,t),t.parentNode=e},setTemplateContent(e,t){e.content=t},getTemplateContent(e){return e.content},setDocumentType(e,t,i,u){const s=e.childNodes.find(o=>o.nodeName==="#documentType");if(s)s.name=t,s.publicId=i,s.systemId=u;else{const o={nodeName:"#documentType",name:t,publicId:i,systemId:u,parentNode:null};jr.appendChild(e,o)}},setDocumentMode(e,t){e.mode=t},getDocumentMode(e){return e.mode},detachNode(e){if(e.parentNode){const t=e.parentNode.childNodes.indexOf(e);e.parentNode.childNodes.splice(t,1),e.parentNode=null}},insertText(e,t){if(e.childNodes.length>0){const i=e.childNodes[e.childNodes.length-1];if(jr.isTextNode(i)){i.value+=t;return}}jr.appendChild(e,jr.createTextNode(t))},insertTextBefore(e,t,i){const u=e.childNodes[e.childNodes.indexOf(i)-1];u&&jr.isTextNode(u)?u.value+=t:jr.insertBefore(e,jr.createTextNode(t),i)},adoptAttributes(e,t){const i=new Set(e.attrs.map(u=>u.name));for(let u=0;u<t.length;u++)i.has(t[u].name)||e.attrs.push(t[u])},getFirstChild(e){return e.childNodes[0]},getChildNodes(e){return e.childNodes},getParentNode(e){return e.parentNode},getAttrList(e){return e.attrs},getTagName(e){return e.tagName},getNamespaceURI(e){return e.namespaceURI},getTextNodeContent(e){return e.value},getCommentNodeContent(e){return e.data},getDocumentTypeNodeName(e){return e.name},getDocumentTypeNodePublicId(e){return e.publicId},getDocumentTypeNodeSystemId(e){return e.systemId},isTextNode(e){return e.nodeName==="#text"},isCommentNode(e){return e.nodeName==="#comment"},isDocumentTypeNode(e){return e.nodeName==="#documentType"},isElementNode(e){return Object.prototype.hasOwnProperty.call(e,"tagName")},setNodeSourceCodeLocation(e,t){e.sourceCodeLocation=t},getNodeSourceCodeLocation(e){return e.sourceCodeLocation},updateNodeSourceCodeLocation(e,t){e.sourceCodeLocation={...e.sourceCodeLocation,...t}}},ky="html",wO="about:legacy-compat",SO="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",Ly=["+//silmaril//dtd html pro v0r11 19970101//","-//as//dtd html 3.0 aswedit + extensions//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//sq//dtd html 2.0 hotmetal + extensions//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"],_O=[...Ly,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"],CO=new Set(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),Dy=["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"],NO=[...Dy,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"];function _1(e,t){return t.some(i=>e.startsWith(i))}function OO(e){return e.name===ky&&e.publicId===null&&(e.systemId===null||e.systemId===wO)}function RO(e){if(e.name!==ky)return wn.QUIRKS;const{systemId:t}=e;if(t&&t.toLowerCase()===SO)return wn.QUIRKS;let{publicId:i}=e;if(i!==null){if(i=i.toLowerCase(),CO.has(i))return wn.QUIRKS;let u=t===null?_O:Ly;if(_1(i,u))return wn.QUIRKS;if(u=t===null?Dy:NO,_1(i,u))return wn.LIMITED_QUIRKS}return wn.NO_QUIRKS}const C1={TEXT_HTML:"text/html",APPLICATION_XML:"application/xhtml+xml"},kO="definitionurl",LO="definitionURL",DO=new Map(["attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(e=>[e.toLowerCase(),e])),IO=new Map([["xlink:actuate",{prefix:"xlink",name:"actuate",namespace:te.XLINK}],["xlink:arcrole",{prefix:"xlink",name:"arcrole",namespace:te.XLINK}],["xlink:href",{prefix:"xlink",name:"href",namespace:te.XLINK}],["xlink:role",{prefix:"xlink",name:"role",namespace:te.XLINK}],["xlink:show",{prefix:"xlink",name:"show",namespace:te.XLINK}],["xlink:title",{prefix:"xlink",name:"title",namespace:te.XLINK}],["xlink:type",{prefix:"xlink",name:"type",namespace:te.XLINK}],["xml:lang",{prefix:"xml",name:"lang",namespace:te.XML}],["xml:space",{prefix:"xml",name:"space",namespace:te.XML}],["xmlns",{prefix:"",name:"xmlns",namespace:te.XMLNS}],["xmlns:xlink",{prefix:"xmlns",name:"xlink",namespace:te.XMLNS}]]),MO=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(e=>[e.toLowerCase(),e])),BO=new Set([g.B,g.BIG,g.BLOCKQUOTE,g.BODY,g.BR,g.CENTER,g.CODE,g.DD,g.DIV,g.DL,g.DT,g.EM,g.EMBED,g.H1,g.H2,g.H3,g.H4,g.H5,g.H6,g.HEAD,g.HR,g.I,g.IMG,g.LI,g.LISTING,g.MENU,g.META,g.NOBR,g.OL,g.P,g.PRE,g.RUBY,g.S,g.SMALL,g.SPAN,g.STRONG,g.STRIKE,g.SUB,g.SUP,g.TABLE,g.TT,g.U,g.UL,g.VAR]);function FO(e){const t=e.tagID;return t===g.FONT&&e.attrs.some(({name:u})=>u===gi.COLOR||u===gi.SIZE||u===gi.FACE)||BO.has(t)}function Iy(e){for(let t=0;t<e.attrs.length;t++)if(e.attrs[t].name===kO){e.attrs[t].name=LO;break}}function My(e){for(let t=0;t<e.attrs.length;t++){const i=DO.get(e.attrs[t].name);i!=null&&(e.attrs[t].name=i)}}function nd(e){for(let t=0;t<e.attrs.length;t++){const i=IO.get(e.attrs[t].name);i&&(e.attrs[t].prefix=i.prefix,e.attrs[t].name=i.name,e.attrs[t].namespace=i.namespace)}}function UO(e){const t=MO.get(e.tagName);t!=null&&(e.tagName=t,e.tagID=Na(e.tagName))}function HO(e,t){return t===te.MATHML&&(e===g.MI||e===g.MO||e===g.MN||e===g.MS||e===g.MTEXT)}function PO(e,t,i){if(t===te.MATHML&&e===g.ANNOTATION_XML){for(let u=0;u<i.length;u++)if(i[u].name===gi.ENCODING){const s=i[u].value.toLowerCase();return s===C1.TEXT_HTML||s===C1.APPLICATION_XML}}return t===te.SVG&&(e===g.FOREIGN_OBJECT||e===g.DESC||e===g.TITLE)}function zO(e,t,i,u){return(!u||u===te.HTML)&&PO(e,t,i)||(!u||u===te.MATHML)&&HO(e,t)}const jO="hidden",qO=8,YO=3;var k;(function(e){e[e.INITIAL=0]="INITIAL",e[e.BEFORE_HTML=1]="BEFORE_HTML",e[e.BEFORE_HEAD=2]="BEFORE_HEAD",e[e.IN_HEAD=3]="IN_HEAD",e[e.IN_HEAD_NO_SCRIPT=4]="IN_HEAD_NO_SCRIPT",e[e.AFTER_HEAD=5]="AFTER_HEAD",e[e.IN_BODY=6]="IN_BODY",e[e.TEXT=7]="TEXT",e[e.IN_TABLE=8]="IN_TABLE",e[e.IN_TABLE_TEXT=9]="IN_TABLE_TEXT",e[e.IN_CAPTION=10]="IN_CAPTION",e[e.IN_COLUMN_GROUP=11]="IN_COLUMN_GROUP",e[e.IN_TABLE_BODY=12]="IN_TABLE_BODY",e[e.IN_ROW=13]="IN_ROW",e[e.IN_CELL=14]="IN_CELL",e[e.IN_SELECT=15]="IN_SELECT",e[e.IN_SELECT_IN_TABLE=16]="IN_SELECT_IN_TABLE",e[e.IN_TEMPLATE=17]="IN_TEMPLATE",e[e.AFTER_BODY=18]="AFTER_BODY",e[e.IN_FRAMESET=19]="IN_FRAMESET",e[e.AFTER_FRAMESET=20]="AFTER_FRAMESET",e[e.AFTER_AFTER_BODY=21]="AFTER_AFTER_BODY",e[e.AFTER_AFTER_FRAMESET=22]="AFTER_AFTER_FRAMESET"})(k||(k={}));const VO={startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1},By=new Set([g.TABLE,g.TBODY,g.TFOOT,g.THEAD,g.TR]),N1={scriptingEnabled:!0,sourceCodeLocationInfo:!1,treeAdapter:jr,onParseError:null};class O1{constructor(t,i,u=null,s=null){this.fragmentContext=u,this.scriptHandler=s,this.currentToken=null,this.stopped=!1,this.insertionMode=k.INITIAL,this.originalInsertionMode=k.INITIAL,this.headElement=null,this.formElement=null,this.currentNotInHTML=!1,this.tmplInsertionModeStack=[],this.pendingCharacterTokens=[],this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,this.skipNextNewLine=!1,this.fosterParentingEnabled=!1,this.options={...N1,...t},this.treeAdapter=this.options.treeAdapter,this.onParseError=this.options.onParseError,this.onParseError&&(this.options.sourceCodeLocationInfo=!0),this.document=i??this.treeAdapter.createDocument(),this.tokenizer=new pO(this.options,this),this.activeFormattingElements=new xO(this.treeAdapter),this.fragmentContextID=u?Na(this.treeAdapter.getTagName(u)):g.UNKNOWN,this._setContextModes(u??this.document,this.fragmentContextID),this.openElements=new AO(this.document,this.treeAdapter,this)}static parse(t,i){const u=new this(i);return u.tokenizer.write(t,!0),u.document}static getFragmentParser(t,i){const u={...N1,...i};t??(t=u.treeAdapter.createElement(P.TEMPLATE,te.HTML,[]));const s=u.treeAdapter.createElement("documentmock",te.HTML,[]),o=new this(u,s,t);return o.fragmentContextID===g.TEMPLATE&&o.tmplInsertionModeStack.unshift(k.IN_TEMPLATE),o._initTokenizerForFragmentParsing(),o._insertFakeRootElement(),o._resetInsertionMode(),o._findFormInFragmentContext(),o}getFragment(){const t=this.treeAdapter.getFirstChild(this.document),i=this.treeAdapter.createDocumentFragment();return this._adoptNodes(t,i),i}_err(t,i,u){var s;if(!this.onParseError)return;const o=(s=t.location)!==null&&s!==void 0?s:VO,c={code:i,startLine:o.startLine,startCol:o.startCol,startOffset:o.startOffset,endLine:u?o.startLine:o.endLine,endCol:u?o.startCol:o.endCol,endOffset:u?o.startOffset:o.endOffset};this.onParseError(c)}onItemPush(t,i,u){var s,o;(o=(s=this.treeAdapter).onItemPush)===null||o===void 0||o.call(s,t),u&&this.openElements.stackTop>0&&this._setContextModes(t,i)}onItemPop(t,i){var u,s;if(this.options.sourceCodeLocationInfo&&this._setEndLocation(t,this.currentToken),(s=(u=this.treeAdapter).onItemPop)===null||s===void 0||s.call(u,t,this.openElements.current),i){let o,c;this.openElements.stackTop===0&&this.fragmentContext?(o=this.fragmentContext,c=this.fragmentContextID):{current:o,currentTagId:c}=this.openElements,this._setContextModes(o,c)}}_setContextModes(t,i){const u=t===this.document||t&&this.treeAdapter.getNamespaceURI(t)===te.HTML;this.currentNotInHTML=!u,this.tokenizer.inForeignNode=!u&&t!==void 0&&i!==void 0&&!this._isIntegrationPoint(i,t)}_switchToTextParsing(t,i){this._insertElement(t,te.HTML),this.tokenizer.state=i,this.originalInsertionMode=this.insertionMode,this.insertionMode=k.TEXT}switchToPlaintextParsing(){this.insertionMode=k.TEXT,this.originalInsertionMode=k.IN_BODY,this.tokenizer.state=ft.PLAINTEXT}_getAdjustedCurrentElement(){return this.openElements.stackTop===0&&this.fragmentContext?this.fragmentContext:this.openElements.current}_findFormInFragmentContext(){let t=this.fragmentContext;for(;t;){if(this.treeAdapter.getTagName(t)===P.FORM){this.formElement=t;break}t=this.treeAdapter.getParentNode(t)}}_initTokenizerForFragmentParsing(){if(!(!this.fragmentContext||this.treeAdapter.getNamespaceURI(this.fragmentContext)!==te.HTML))switch(this.fragmentContextID){case g.TITLE:case g.TEXTAREA:{this.tokenizer.state=ft.RCDATA;break}case g.STYLE:case g.XMP:case g.IFRAME:case g.NOEMBED:case g.NOFRAMES:case g.NOSCRIPT:{this.tokenizer.state=ft.RAWTEXT;break}case g.SCRIPT:{this.tokenizer.state=ft.SCRIPT_DATA;break}case g.PLAINTEXT:{this.tokenizer.state=ft.PLAINTEXT;break}}}_setDocumentType(t){const i=t.name||"",u=t.publicId||"",s=t.systemId||"";if(this.treeAdapter.setDocumentType(this.document,i,u,s),t.location){const c=this.treeAdapter.getChildNodes(this.document).find(h=>this.treeAdapter.isDocumentTypeNode(h));c&&this.treeAdapter.setNodeSourceCodeLocation(c,t.location)}}_attachElementToTree(t,i){if(this.options.sourceCodeLocationInfo){const u=i&&{...i,startTag:i};this.treeAdapter.setNodeSourceCodeLocation(t,u)}if(this._shouldFosterParentOnInsertion())this._fosterParentElement(t);else{const u=this.openElements.currentTmplContentOrNode;this.treeAdapter.appendChild(u??this.document,t)}}_appendElement(t,i){const u=this.treeAdapter.createElement(t.tagName,i,t.attrs);this._attachElementToTree(u,t.location)}_insertElement(t,i){const u=this.treeAdapter.createElement(t.tagName,i,t.attrs);this._attachElementToTree(u,t.location),this.openElements.push(u,t.tagID)}_insertFakeElement(t,i){const u=this.treeAdapter.createElement(t,te.HTML,[]);this._attachElementToTree(u,null),this.openElements.push(u,i)}_insertTemplate(t){const i=this.treeAdapter.createElement(t.tagName,te.HTML,t.attrs),u=this.treeAdapter.createDocumentFragment();this.treeAdapter.setTemplateContent(i,u),this._attachElementToTree(i,t.location),this.openElements.push(i,t.tagID),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(u,null)}_insertFakeRootElement(){const t=this.treeAdapter.createElement(P.HTML,te.HTML,[]);this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(t,null),this.treeAdapter.appendChild(this.openElements.current,t),this.openElements.push(t,g.HTML)}_appendCommentNode(t,i){const u=this.treeAdapter.createCommentNode(t.data);this.treeAdapter.appendChild(i,u),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(u,t.location)}_insertCharacters(t){let i,u;if(this._shouldFosterParentOnInsertion()?({parent:i,beforeElement:u}=this._findFosterParentingLocation(),u?this.treeAdapter.insertTextBefore(i,t.chars,u):this.treeAdapter.insertText(i,t.chars)):(i=this.openElements.currentTmplContentOrNode,this.treeAdapter.insertText(i,t.chars)),!t.location)return;const s=this.treeAdapter.getChildNodes(i),o=u?s.lastIndexOf(u):s.length,c=s[o-1];if(this.treeAdapter.getNodeSourceCodeLocation(c)){const{endLine:d,endCol:p,endOffset:y}=t.location;this.treeAdapter.updateNodeSourceCodeLocation(c,{endLine:d,endCol:p,endOffset:y})}else this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(c,t.location)}_adoptNodes(t,i){for(let u=this.treeAdapter.getFirstChild(t);u;u=this.treeAdapter.getFirstChild(t))this.treeAdapter.detachNode(u),this.treeAdapter.appendChild(i,u)}_setEndLocation(t,i){if(this.treeAdapter.getNodeSourceCodeLocation(t)&&i.location){const u=i.location,s=this.treeAdapter.getTagName(t),o=i.type===ke.END_TAG&&s===i.tagName?{endTag:{...u},endLine:u.endLine,endCol:u.endCol,endOffset:u.endOffset}:{endLine:u.startLine,endCol:u.startCol,endOffset:u.startOffset};this.treeAdapter.updateNodeSourceCodeLocation(t,o)}}shouldProcessStartTagTokenInForeignContent(t){if(!this.currentNotInHTML)return!1;let i,u;return this.openElements.stackTop===0&&this.fragmentContext?(i=this.fragmentContext,u=this.fragmentContextID):{current:i,currentTagId:u}=this.openElements,t.tagID===g.SVG&&this.treeAdapter.getTagName(i)===P.ANNOTATION_XML&&this.treeAdapter.getNamespaceURI(i)===te.MATHML?!1:this.tokenizer.inForeignNode||(t.tagID===g.MGLYPH||t.tagID===g.MALIGNMARK)&&u!==void 0&&!this._isIntegrationPoint(u,i,te.HTML)}_processToken(t){switch(t.type){case ke.CHARACTER:{this.onCharacter(t);break}case ke.NULL_CHARACTER:{this.onNullCharacter(t);break}case ke.COMMENT:{this.onComment(t);break}case ke.DOCTYPE:{this.onDoctype(t);break}case ke.START_TAG:{this._processStartTag(t);break}case ke.END_TAG:{this.onEndTag(t);break}case ke.EOF:{this.onEof(t);break}case ke.WHITESPACE_CHARACTER:{this.onWhitespaceCharacter(t);break}}}_isIntegrationPoint(t,i,u){const s=this.treeAdapter.getNamespaceURI(i),o=this.treeAdapter.getAttrList(i);return zO(t,s,o,u)}_reconstructActiveFormattingElements(){const t=this.activeFormattingElements.entries.length;if(t){const i=this.activeFormattingElements.entries.findIndex(s=>s.type===Un.Marker||this.openElements.contains(s.element)),u=i===-1?t-1:i-1;for(let s=u;s>=0;s--){const o=this.activeFormattingElements.entries[s];this._insertElement(o.token,this.treeAdapter.getNamespaceURI(o.element)),o.element=this.openElements.current}}}_closeTableCell(){this.openElements.generateImpliedEndTags(),this.openElements.popUntilTableCellPopped(),this.activeFormattingElements.clearToLastMarker(),this.insertionMode=k.IN_ROW}_closePElement(){this.openElements.generateImpliedEndTagsWithExclusion(g.P),this.openElements.popUntilTagNamePopped(g.P)}_resetInsertionMode(){for(let t=this.openElements.stackTop;t>=0;t--)switch(t===0&&this.fragmentContext?this.fragmentContextID:this.openElements.tagIDs[t]){case g.TR:{this.insertionMode=k.IN_ROW;return}case g.TBODY:case g.THEAD:case g.TFOOT:{this.insertionMode=k.IN_TABLE_BODY;return}case g.CAPTION:{this.insertionMode=k.IN_CAPTION;return}case g.COLGROUP:{this.insertionMode=k.IN_COLUMN_GROUP;return}case g.TABLE:{this.insertionMode=k.IN_TABLE;return}case g.BODY:{this.insertionMode=k.IN_BODY;return}case g.FRAMESET:{this.insertionMode=k.IN_FRAMESET;return}case g.SELECT:{this._resetInsertionModeForSelect(t);return}case g.TEMPLATE:{this.insertionMode=this.tmplInsertionModeStack[0];return}case g.HTML:{this.insertionMode=this.headElement?k.AFTER_HEAD:k.BEFORE_HEAD;return}case g.TD:case g.TH:{if(t>0){this.insertionMode=k.IN_CELL;return}break}case g.HEAD:{if(t>0){this.insertionMode=k.IN_HEAD;return}break}}this.insertionMode=k.IN_BODY}_resetInsertionModeForSelect(t){if(t>0)for(let i=t-1;i>0;i--){const u=this.openElements.tagIDs[i];if(u===g.TEMPLATE)break;if(u===g.TABLE){this.insertionMode=k.IN_SELECT_IN_TABLE;return}}this.insertionMode=k.IN_SELECT}_isElementCausesFosterParenting(t){return By.has(t)}_shouldFosterParentOnInsertion(){return this.fosterParentingEnabled&&this.openElements.currentTagId!==void 0&&this._isElementCausesFosterParenting(this.openElements.currentTagId)}_findFosterParentingLocation(){for(let t=this.openElements.stackTop;t>=0;t--){const i=this.openElements.items[t];switch(this.openElements.tagIDs[t]){case g.TEMPLATE:{if(this.treeAdapter.getNamespaceURI(i)===te.HTML)return{parent:this.treeAdapter.getTemplateContent(i),beforeElement:null};break}case g.TABLE:{const u=this.treeAdapter.getParentNode(i);return u?{parent:u,beforeElement:i}:{parent:this.openElements.items[t-1],beforeElement:null}}}}return{parent:this.openElements.items[0],beforeElement:null}}_fosterParentElement(t){const i=this._findFosterParentingLocation();i.beforeElement?this.treeAdapter.insertBefore(i.parent,t,i.beforeElement):this.treeAdapter.appendChild(i.parent,t)}_isSpecialElement(t,i){const u=this.treeAdapter.getNamespaceURI(t);return fO[u].has(i)}onCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){vk(this,t);return}switch(this.insertionMode){case k.INITIAL:{Ru(this,t);break}case k.BEFORE_HTML:{Fu(this,t);break}case k.BEFORE_HEAD:{Uu(this,t);break}case k.IN_HEAD:{Hu(this,t);break}case k.IN_HEAD_NO_SCRIPT:{Pu(this,t);break}case k.AFTER_HEAD:{zu(this,t);break}case k.IN_BODY:case k.IN_CAPTION:case k.IN_CELL:case k.IN_TEMPLATE:{Uy(this,t);break}case k.TEXT:case k.IN_SELECT:case k.IN_SELECT_IN_TABLE:{this._insertCharacters(t);break}case k.IN_TABLE:case k.IN_TABLE_BODY:case k.IN_ROW:{eh(this,t);break}case k.IN_TABLE_TEXT:{Yy(this,t);break}case k.IN_COLUMN_GROUP:{js(this,t);break}case k.AFTER_BODY:{qs(this,t);break}case k.AFTER_AFTER_BODY:{Ms(this,t);break}}}onNullCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){Tk(this,t);return}switch(this.insertionMode){case k.INITIAL:{Ru(this,t);break}case k.BEFORE_HTML:{Fu(this,t);break}case k.BEFORE_HEAD:{Uu(this,t);break}case k.IN_HEAD:{Hu(this,t);break}case k.IN_HEAD_NO_SCRIPT:{Pu(this,t);break}case k.AFTER_HEAD:{zu(this,t);break}case k.TEXT:{this._insertCharacters(t);break}case k.IN_TABLE:case k.IN_TABLE_BODY:case k.IN_ROW:{eh(this,t);break}case k.IN_COLUMN_GROUP:{js(this,t);break}case k.AFTER_BODY:{qs(this,t);break}case k.AFTER_AFTER_BODY:{Ms(this,t);break}}}onComment(t){if(this.skipNextNewLine=!1,this.currentNotInHTML){xh(this,t);return}switch(this.insertionMode){case k.INITIAL:case k.BEFORE_HTML:case k.BEFORE_HEAD:case k.IN_HEAD:case k.IN_HEAD_NO_SCRIPT:case k.AFTER_HEAD:case k.IN_BODY:case k.IN_TABLE:case k.IN_CAPTION:case k.IN_COLUMN_GROUP:case k.IN_TABLE_BODY:case k.IN_ROW:case k.IN_CELL:case k.IN_SELECT:case k.IN_SELECT_IN_TABLE:case k.IN_TEMPLATE:case k.IN_FRAMESET:case k.AFTER_FRAMESET:{xh(this,t);break}case k.IN_TABLE_TEXT:{ku(this,t);break}case k.AFTER_BODY:{JO(this,t);break}case k.AFTER_AFTER_BODY:case k.AFTER_AFTER_FRAMESET:{$O(this,t);break}}}onDoctype(t){switch(this.skipNextNewLine=!1,this.insertionMode){case k.INITIAL:{eR(this,t);break}case k.BEFORE_HEAD:case k.IN_HEAD:case k.IN_HEAD_NO_SCRIPT:case k.AFTER_HEAD:{this._err(t,X.misplacedDoctype);break}case k.IN_TABLE_TEXT:{ku(this,t);break}}}onStartTag(t){this.skipNextNewLine=!1,this.currentToken=t,this._processStartTag(t),t.selfClosing&&!t.ackSelfClosing&&this._err(t,X.nonVoidHtmlElementStartTagWithTrailingSolidus)}_processStartTag(t){this.shouldProcessStartTagTokenInForeignContent(t)?Ak(this,t):this._startTagOutsideForeignContent(t)}_startTagOutsideForeignContent(t){switch(this.insertionMode){case k.INITIAL:{Ru(this,t);break}case k.BEFORE_HTML:{tR(this,t);break}case k.BEFORE_HEAD:{rR(this,t);break}case k.IN_HEAD:{Ln(this,t);break}case k.IN_HEAD_NO_SCRIPT:{uR(this,t);break}case k.AFTER_HEAD:{sR(this,t);break}case k.IN_BODY:{It(this,t);break}case k.IN_TABLE:{va(this,t);break}case k.IN_TABLE_TEXT:{ku(this,t);break}case k.IN_CAPTION:{ik(this,t);break}case k.IN_COLUMN_GROUP:{ad(this,t);break}case k.IN_TABLE_BODY:{lo(this,t);break}case k.IN_ROW:{so(this,t);break}case k.IN_CELL:{lk(this,t);break}case k.IN_SELECT:{Qy(this,t);break}case k.IN_SELECT_IN_TABLE:{ok(this,t);break}case k.IN_TEMPLATE:{fk(this,t);break}case k.AFTER_BODY:{dk(this,t);break}case k.IN_FRAMESET:{mk(this,t);break}case k.AFTER_FRAMESET:{gk(this,t);break}case k.AFTER_AFTER_BODY:{yk(this,t);break}case k.AFTER_AFTER_FRAMESET:{Ek(this,t);break}}}onEndTag(t){this.skipNextNewLine=!1,this.currentToken=t,this.currentNotInHTML?xk(this,t):this._endTagOutsideForeignContent(t)}_endTagOutsideForeignContent(t){switch(this.insertionMode){case k.INITIAL:{Ru(this,t);break}case k.BEFORE_HTML:{nR(this,t);break}case k.BEFORE_HEAD:{iR(this,t);break}case k.IN_HEAD:{aR(this,t);break}case k.IN_HEAD_NO_SCRIPT:{lR(this,t);break}case k.AFTER_HEAD:{oR(this,t);break}case k.IN_BODY:{uo(this,t);break}case k.TEXT:{XR(this,t);break}case k.IN_TABLE:{Gu(this,t);break}case k.IN_TABLE_TEXT:{ku(this,t);break}case k.IN_CAPTION:{ak(this,t);break}case k.IN_COLUMN_GROUP:{uk(this,t);break}case k.IN_TABLE_BODY:{wh(this,t);break}case k.IN_ROW:{Gy(this,t);break}case k.IN_CELL:{sk(this,t);break}case k.IN_SELECT:{Xy(this,t);break}case k.IN_SELECT_IN_TABLE:{ck(this,t);break}case k.IN_TEMPLATE:{hk(this,t);break}case k.AFTER_BODY:{Wy(this,t);break}case k.IN_FRAMESET:{pk(this,t);break}case k.AFTER_FRAMESET:{bk(this,t);break}case k.AFTER_AFTER_BODY:{Ms(this,t);break}}}onEof(t){switch(this.insertionMode){case k.INITIAL:{Ru(this,t);break}case k.BEFORE_HTML:{Fu(this,t);break}case k.BEFORE_HEAD:{Uu(this,t);break}case k.IN_HEAD:{Hu(this,t);break}case k.IN_HEAD_NO_SCRIPT:{Pu(this,t);break}case k.AFTER_HEAD:{zu(this,t);break}case k.IN_BODY:case k.IN_TABLE:case k.IN_CAPTION:case k.IN_COLUMN_GROUP:case k.IN_TABLE_BODY:case k.IN_ROW:case k.IN_CELL:case k.IN_SELECT:case k.IN_SELECT_IN_TABLE:{jy(this,t);break}case k.TEXT:{KR(this,t);break}case k.IN_TABLE_TEXT:{ku(this,t);break}case k.IN_TEMPLATE:{Ky(this,t);break}case k.AFTER_BODY:case k.IN_FRAMESET:case k.AFTER_FRAMESET:case k.AFTER_AFTER_BODY:case k.AFTER_AFTER_FRAMESET:{id(this,t);break}}}onWhitespaceCharacter(t){if(this.skipNextNewLine&&(this.skipNextNewLine=!1,t.chars.charCodeAt(0)===w.LINE_FEED)){if(t.chars.length===1)return;t.chars=t.chars.substr(1)}if(this.tokenizer.inForeignNode){this._insertCharacters(t);return}switch(this.insertionMode){case k.IN_HEAD:case k.IN_HEAD_NO_SCRIPT:case k.AFTER_HEAD:case k.TEXT:case k.IN_COLUMN_GROUP:case k.IN_SELECT:case k.IN_SELECT_IN_TABLE:case k.IN_FRAMESET:case k.AFTER_FRAMESET:{this._insertCharacters(t);break}case k.IN_BODY:case k.IN_CAPTION:case k.IN_CELL:case k.IN_TEMPLATE:case k.AFTER_BODY:case k.AFTER_AFTER_BODY:case k.AFTER_AFTER_FRAMESET:{Fy(this,t);break}case k.IN_TABLE:case k.IN_TABLE_BODY:case k.IN_ROW:{eh(this,t);break}case k.IN_TABLE_TEXT:{qy(this,t);break}}}}function GO(e,t){let i=e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);return i?e.openElements.contains(i.element)?e.openElements.hasInScope(t.tagID)||(i=null):(e.activeFormattingElements.removeEntry(i),i=null):zy(e,t),i}function QO(e,t){let i=null,u=e.openElements.stackTop;for(;u>=0;u--){const s=e.openElements.items[u];if(s===t.element)break;e._isSpecialElement(s,e.openElements.tagIDs[u])&&(i=s)}return i||(e.openElements.shortenToLength(Math.max(u,0)),e.activeFormattingElements.removeEntry(t)),i}function XO(e,t,i){let u=t,s=e.openElements.getCommonAncestor(t);for(let o=0,c=s;c!==i;o++,c=s){s=e.openElements.getCommonAncestor(c);const h=e.activeFormattingElements.getElementEntry(c),d=h&&o>=YO;!h||d?(d&&e.activeFormattingElements.removeEntry(h),e.openElements.remove(c)):(c=KO(e,h),u===t&&(e.activeFormattingElements.bookmark=h),e.treeAdapter.detachNode(u),e.treeAdapter.appendChild(c,u),u=c)}return u}function KO(e,t){const i=e.treeAdapter.getNamespaceURI(t.element),u=e.treeAdapter.createElement(t.token.tagName,i,t.token.attrs);return e.openElements.replace(t.element,u),t.element=u,u}function WO(e,t,i){const u=e.treeAdapter.getTagName(t),s=Na(u);if(e._isElementCausesFosterParenting(s))e._fosterParentElement(i);else{const o=e.treeAdapter.getNamespaceURI(t);s===g.TEMPLATE&&o===te.HTML&&(t=e.treeAdapter.getTemplateContent(t)),e.treeAdapter.appendChild(t,i)}}function ZO(e,t,i){const u=e.treeAdapter.getNamespaceURI(i.element),{token:s}=i,o=e.treeAdapter.createElement(s.tagName,u,s.attrs);e._adoptNodes(t,o),e.treeAdapter.appendChild(t,o),e.activeFormattingElements.insertElementAfterBookmark(o,s),e.activeFormattingElements.removeEntry(i),e.openElements.remove(i.element),e.openElements.insertAfter(t,o,s.tagID)}function rd(e,t){for(let i=0;i<qO;i++){const u=GO(e,t);if(!u)break;const s=QO(e,u);if(!s)break;e.activeFormattingElements.bookmark=u;const o=XO(e,s,u.element),c=e.openElements.getCommonAncestor(u.element);e.treeAdapter.detachNode(o),c&&WO(e,c,o),ZO(e,s,u)}}function xh(e,t){e._appendCommentNode(t,e.openElements.currentTmplContentOrNode)}function JO(e,t){e._appendCommentNode(t,e.openElements.items[0])}function $O(e,t){e._appendCommentNode(t,e.document)}function id(e,t){if(e.stopped=!0,t.location){const i=e.fragmentContext?0:2;for(let u=e.openElements.stackTop;u>=i;u--)e._setEndLocation(e.openElements.items[u],t);if(!e.fragmentContext&&e.openElements.stackTop>=0){const u=e.openElements.items[0],s=e.treeAdapter.getNodeSourceCodeLocation(u);if(s&&!s.endTag&&(e._setEndLocation(u,t),e.openElements.stackTop>=1)){const o=e.openElements.items[1],c=e.treeAdapter.getNodeSourceCodeLocation(o);c&&!c.endTag&&e._setEndLocation(o,t)}}}}function eR(e,t){e._setDocumentType(t);const i=t.forceQuirks?wn.QUIRKS:RO(t);OO(t)||e._err(t,X.nonConformingDoctype),e.treeAdapter.setDocumentMode(e.document,i),e.insertionMode=k.BEFORE_HTML}function Ru(e,t){e._err(t,X.missingDoctype,!0),e.treeAdapter.setDocumentMode(e.document,wn.QUIRKS),e.insertionMode=k.BEFORE_HTML,e._processToken(t)}function tR(e,t){t.tagID===g.HTML?(e._insertElement(t,te.HTML),e.insertionMode=k.BEFORE_HEAD):Fu(e,t)}function nR(e,t){const i=t.tagID;(i===g.HTML||i===g.HEAD||i===g.BODY||i===g.BR)&&Fu(e,t)}function Fu(e,t){e._insertFakeRootElement(),e.insertionMode=k.BEFORE_HEAD,e._processToken(t)}function rR(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.HEAD:{e._insertElement(t,te.HTML),e.headElement=e.openElements.current,e.insertionMode=k.IN_HEAD;break}default:Uu(e,t)}}function iR(e,t){const i=t.tagID;i===g.HEAD||i===g.BODY||i===g.HTML||i===g.BR?Uu(e,t):e._err(t,X.endTagWithoutMatchingOpenElement)}function Uu(e,t){e._insertFakeElement(P.HEAD,g.HEAD),e.headElement=e.openElements.current,e.insertionMode=k.IN_HEAD,e._processToken(t)}function Ln(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.BASE:case g.BASEFONT:case g.BGSOUND:case g.LINK:case g.META:{e._appendElement(t,te.HTML),t.ackSelfClosing=!0;break}case g.TITLE:{e._switchToTextParsing(t,ft.RCDATA);break}case g.NOSCRIPT:{e.options.scriptingEnabled?e._switchToTextParsing(t,ft.RAWTEXT):(e._insertElement(t,te.HTML),e.insertionMode=k.IN_HEAD_NO_SCRIPT);break}case g.NOFRAMES:case g.STYLE:{e._switchToTextParsing(t,ft.RAWTEXT);break}case g.SCRIPT:{e._switchToTextParsing(t,ft.SCRIPT_DATA);break}case g.TEMPLATE:{e._insertTemplate(t),e.activeFormattingElements.insertMarker(),e.framesetOk=!1,e.insertionMode=k.IN_TEMPLATE,e.tmplInsertionModeStack.unshift(k.IN_TEMPLATE);break}case g.HEAD:{e._err(t,X.misplacedStartTagForHeadElement);break}default:Hu(e,t)}}function aR(e,t){switch(t.tagID){case g.HEAD:{e.openElements.pop(),e.insertionMode=k.AFTER_HEAD;break}case g.BODY:case g.BR:case g.HTML:{Hu(e,t);break}case g.TEMPLATE:{vi(e,t);break}default:e._err(t,X.endTagWithoutMatchingOpenElement)}}function vi(e,t){e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),e.openElements.currentTagId!==g.TEMPLATE&&e._err(t,X.closingOfElementWithOpenChildElements),e.openElements.popUntilTagNamePopped(g.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode()):e._err(t,X.endTagWithoutMatchingOpenElement)}function Hu(e,t){e.openElements.pop(),e.insertionMode=k.AFTER_HEAD,e._processToken(t)}function uR(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.BASEFONT:case g.BGSOUND:case g.HEAD:case g.LINK:case g.META:case g.NOFRAMES:case g.STYLE:{Ln(e,t);break}case g.NOSCRIPT:{e._err(t,X.nestedNoscriptInHead);break}default:Pu(e,t)}}function lR(e,t){switch(t.tagID){case g.NOSCRIPT:{e.openElements.pop(),e.insertionMode=k.IN_HEAD;break}case g.BR:{Pu(e,t);break}default:e._err(t,X.endTagWithoutMatchingOpenElement)}}function Pu(e,t){const i=t.type===ke.EOF?X.openElementsLeftAfterEof:X.disallowedContentInNoscriptInHead;e._err(t,i),e.openElements.pop(),e.insertionMode=k.IN_HEAD,e._processToken(t)}function sR(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.BODY:{e._insertElement(t,te.HTML),e.framesetOk=!1,e.insertionMode=k.IN_BODY;break}case g.FRAMESET:{e._insertElement(t,te.HTML),e.insertionMode=k.IN_FRAMESET;break}case g.BASE:case g.BASEFONT:case g.BGSOUND:case g.LINK:case g.META:case g.NOFRAMES:case g.SCRIPT:case g.STYLE:case g.TEMPLATE:case g.TITLE:{e._err(t,X.abandonedHeadElementChild),e.openElements.push(e.headElement,g.HEAD),Ln(e,t),e.openElements.remove(e.headElement);break}case g.HEAD:{e._err(t,X.misplacedStartTagForHeadElement);break}default:zu(e,t)}}function oR(e,t){switch(t.tagID){case g.BODY:case g.HTML:case g.BR:{zu(e,t);break}case g.TEMPLATE:{vi(e,t);break}default:e._err(t,X.endTagWithoutMatchingOpenElement)}}function zu(e,t){e._insertFakeElement(P.BODY,g.BODY),e.insertionMode=k.IN_BODY,ao(e,t)}function ao(e,t){switch(t.type){case ke.CHARACTER:{Uy(e,t);break}case ke.WHITESPACE_CHARACTER:{Fy(e,t);break}case ke.COMMENT:{xh(e,t);break}case ke.START_TAG:{It(e,t);break}case ke.END_TAG:{uo(e,t);break}case ke.EOF:{jy(e,t);break}}}function Fy(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t)}function Uy(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t),e.framesetOk=!1}function cR(e,t){e.openElements.tmplCount===0&&e.treeAdapter.adoptAttributes(e.openElements.items[0],t.attrs)}function fR(e,t){const i=e.openElements.tryPeekProperlyNestedBodyElement();i&&e.openElements.tmplCount===0&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(i,t.attrs))}function hR(e,t){const i=e.openElements.tryPeekProperlyNestedBodyElement();e.framesetOk&&i&&(e.treeAdapter.detachNode(i),e.openElements.popAllUpToHtmlElement(),e._insertElement(t,te.HTML),e.insertionMode=k.IN_FRAMESET)}function dR(e,t){e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._insertElement(t,te.HTML)}function mR(e,t){e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e.openElements.currentTagId!==void 0&&Ah.has(e.openElements.currentTagId)&&e.openElements.pop(),e._insertElement(t,te.HTML)}function pR(e,t){e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._insertElement(t,te.HTML),e.skipNextNewLine=!0,e.framesetOk=!1}function gR(e,t){const i=e.openElements.tmplCount>0;(!e.formElement||i)&&(e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._insertElement(t,te.HTML),i||(e.formElement=e.openElements.current))}function bR(e,t){e.framesetOk=!1;const i=t.tagID;for(let u=e.openElements.stackTop;u>=0;u--){const s=e.openElements.tagIDs[u];if(i===g.LI&&s===g.LI||(i===g.DD||i===g.DT)&&(s===g.DD||s===g.DT)){e.openElements.generateImpliedEndTagsWithExclusion(s),e.openElements.popUntilTagNamePopped(s);break}if(s!==g.ADDRESS&&s!==g.DIV&&s!==g.P&&e._isSpecialElement(e.openElements.items[u],s))break}e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._insertElement(t,te.HTML)}function yR(e,t){e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._insertElement(t,te.HTML),e.tokenizer.state=ft.PLAINTEXT}function ER(e,t){e.openElements.hasInScope(g.BUTTON)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(g.BUTTON)),e._reconstructActiveFormattingElements(),e._insertElement(t,te.HTML),e.framesetOk=!1}function TR(e,t){const i=e.activeFormattingElements.getElementEntryInScopeWithTagName(P.A);i&&(rd(e,t),e.openElements.remove(i.element),e.activeFormattingElements.removeEntry(i)),e._reconstructActiveFormattingElements(),e._insertElement(t,te.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function vR(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,te.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function AR(e,t){e._reconstructActiveFormattingElements(),e.openElements.hasInScope(g.NOBR)&&(rd(e,t),e._reconstructActiveFormattingElements()),e._insertElement(t,te.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function xR(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,te.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1}function wR(e,t){e.treeAdapter.getDocumentMode(e.document)!==wn.QUIRKS&&e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._insertElement(t,te.HTML),e.framesetOk=!1,e.insertionMode=k.IN_TABLE}function Hy(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,te.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function Py(e){const t=Ny(e,gi.TYPE);return t!=null&&t.toLowerCase()===jO}function SR(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,te.HTML),Py(t)||(e.framesetOk=!1),t.ackSelfClosing=!0}function _R(e,t){e._appendElement(t,te.HTML),t.ackSelfClosing=!0}function CR(e,t){e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._appendElement(t,te.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function NR(e,t){t.tagName=P.IMG,t.tagID=g.IMG,Hy(e,t)}function OR(e,t){e._insertElement(t,te.HTML),e.skipNextNewLine=!0,e.tokenizer.state=ft.RCDATA,e.originalInsertionMode=e.insertionMode,e.framesetOk=!1,e.insertionMode=k.TEXT}function RR(e,t){e.openElements.hasInButtonScope(g.P)&&e._closePElement(),e._reconstructActiveFormattingElements(),e.framesetOk=!1,e._switchToTextParsing(t,ft.RAWTEXT)}function kR(e,t){e.framesetOk=!1,e._switchToTextParsing(t,ft.RAWTEXT)}function R1(e,t){e._switchToTextParsing(t,ft.RAWTEXT)}function LR(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,te.HTML),e.framesetOk=!1,e.insertionMode=e.insertionMode===k.IN_TABLE||e.insertionMode===k.IN_CAPTION||e.insertionMode===k.IN_TABLE_BODY||e.insertionMode===k.IN_ROW||e.insertionMode===k.IN_CELL?k.IN_SELECT_IN_TABLE:k.IN_SELECT}function DR(e,t){e.openElements.currentTagId===g.OPTION&&e.openElements.pop(),e._reconstructActiveFormattingElements(),e._insertElement(t,te.HTML)}function IR(e,t){e.openElements.hasInScope(g.RUBY)&&e.openElements.generateImpliedEndTags(),e._insertElement(t,te.HTML)}function MR(e,t){e.openElements.hasInScope(g.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(g.RTC),e._insertElement(t,te.HTML)}function BR(e,t){e._reconstructActiveFormattingElements(),Iy(t),nd(t),t.selfClosing?e._appendElement(t,te.MATHML):e._insertElement(t,te.MATHML),t.ackSelfClosing=!0}function FR(e,t){e._reconstructActiveFormattingElements(),My(t),nd(t),t.selfClosing?e._appendElement(t,te.SVG):e._insertElement(t,te.SVG),t.ackSelfClosing=!0}function k1(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,te.HTML)}function It(e,t){switch(t.tagID){case g.I:case g.S:case g.B:case g.U:case g.EM:case g.TT:case g.BIG:case g.CODE:case g.FONT:case g.SMALL:case g.STRIKE:case g.STRONG:{vR(e,t);break}case g.A:{TR(e,t);break}case g.H1:case g.H2:case g.H3:case g.H4:case g.H5:case g.H6:{mR(e,t);break}case g.P:case g.DL:case g.OL:case g.UL:case g.DIV:case g.DIR:case g.NAV:case g.MAIN:case g.MENU:case g.ASIDE:case g.CENTER:case g.FIGURE:case g.FOOTER:case g.HEADER:case g.HGROUP:case g.DIALOG:case g.DETAILS:case g.ADDRESS:case g.ARTICLE:case g.SEARCH:case g.SECTION:case g.SUMMARY:case g.FIELDSET:case g.BLOCKQUOTE:case g.FIGCAPTION:{dR(e,t);break}case g.LI:case g.DD:case g.DT:{bR(e,t);break}case g.BR:case g.IMG:case g.WBR:case g.AREA:case g.EMBED:case g.KEYGEN:{Hy(e,t);break}case g.HR:{CR(e,t);break}case g.RB:case g.RTC:{IR(e,t);break}case g.RT:case g.RP:{MR(e,t);break}case g.PRE:case g.LISTING:{pR(e,t);break}case g.XMP:{RR(e,t);break}case g.SVG:{FR(e,t);break}case g.HTML:{cR(e,t);break}case g.BASE:case g.LINK:case g.META:case g.STYLE:case g.TITLE:case g.SCRIPT:case g.BGSOUND:case g.BASEFONT:case g.TEMPLATE:{Ln(e,t);break}case g.BODY:{fR(e,t);break}case g.FORM:{gR(e,t);break}case g.NOBR:{AR(e,t);break}case g.MATH:{BR(e,t);break}case g.TABLE:{wR(e,t);break}case g.INPUT:{SR(e,t);break}case g.PARAM:case g.TRACK:case g.SOURCE:{_R(e,t);break}case g.IMAGE:{NR(e,t);break}case g.BUTTON:{ER(e,t);break}case g.APPLET:case g.OBJECT:case g.MARQUEE:{xR(e,t);break}case g.IFRAME:{kR(e,t);break}case g.SELECT:{LR(e,t);break}case g.OPTION:case g.OPTGROUP:{DR(e,t);break}case g.NOEMBED:case g.NOFRAMES:{R1(e,t);break}case g.FRAMESET:{hR(e,t);break}case g.TEXTAREA:{OR(e,t);break}case g.NOSCRIPT:{e.options.scriptingEnabled?R1(e,t):k1(e,t);break}case g.PLAINTEXT:{yR(e,t);break}case g.COL:case g.TH:case g.TD:case g.TR:case g.HEAD:case g.FRAME:case g.TBODY:case g.TFOOT:case g.THEAD:case g.CAPTION:case g.COLGROUP:break;default:k1(e,t)}}function UR(e,t){if(e.openElements.hasInScope(g.BODY)&&(e.insertionMode=k.AFTER_BODY,e.options.sourceCodeLocationInfo)){const i=e.openElements.tryPeekProperlyNestedBodyElement();i&&e._setEndLocation(i,t)}}function HR(e,t){e.openElements.hasInScope(g.BODY)&&(e.insertionMode=k.AFTER_BODY,Wy(e,t))}function PR(e,t){const i=t.tagID;e.openElements.hasInScope(i)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(i))}function zR(e){const t=e.openElements.tmplCount>0,{formElement:i}=e;t||(e.formElement=null),(i||t)&&e.openElements.hasInScope(g.FORM)&&(e.openElements.generateImpliedEndTags(),t?e.openElements.popUntilTagNamePopped(g.FORM):i&&e.openElements.remove(i))}function jR(e){e.openElements.hasInButtonScope(g.P)||e._insertFakeElement(P.P,g.P),e._closePElement()}function qR(e){e.openElements.hasInListItemScope(g.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(g.LI),e.openElements.popUntilTagNamePopped(g.LI))}function YR(e,t){const i=t.tagID;e.openElements.hasInScope(i)&&(e.openElements.generateImpliedEndTagsWithExclusion(i),e.openElements.popUntilTagNamePopped(i))}function VR(e){e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilNumberedHeaderPopped())}function GR(e,t){const i=t.tagID;e.openElements.hasInScope(i)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(i),e.activeFormattingElements.clearToLastMarker())}function QR(e){e._reconstructActiveFormattingElements(),e._insertFakeElement(P.BR,g.BR),e.openElements.pop(),e.framesetOk=!1}function zy(e,t){const i=t.tagName,u=t.tagID;for(let s=e.openElements.stackTop;s>0;s--){const o=e.openElements.items[s],c=e.openElements.tagIDs[s];if(u===c&&(u!==g.UNKNOWN||e.treeAdapter.getTagName(o)===i)){e.openElements.generateImpliedEndTagsWithExclusion(u),e.openElements.stackTop>=s&&e.openElements.shortenToLength(s);break}if(e._isSpecialElement(o,c))break}}function uo(e,t){switch(t.tagID){case g.A:case g.B:case g.I:case g.S:case g.U:case g.EM:case g.TT:case g.BIG:case g.CODE:case g.FONT:case g.NOBR:case g.SMALL:case g.STRIKE:case g.STRONG:{rd(e,t);break}case g.P:{jR(e);break}case g.DL:case g.UL:case g.OL:case g.DIR:case g.DIV:case g.NAV:case g.PRE:case g.MAIN:case g.MENU:case g.ASIDE:case g.BUTTON:case g.CENTER:case g.FIGURE:case g.FOOTER:case g.HEADER:case g.HGROUP:case g.DIALOG:case g.ADDRESS:case g.ARTICLE:case g.DETAILS:case g.SEARCH:case g.SECTION:case g.SUMMARY:case g.LISTING:case g.FIELDSET:case g.BLOCKQUOTE:case g.FIGCAPTION:{PR(e,t);break}case g.LI:{qR(e);break}case g.DD:case g.DT:{YR(e,t);break}case g.H1:case g.H2:case g.H3:case g.H4:case g.H5:case g.H6:{VR(e);break}case g.BR:{QR(e);break}case g.BODY:{UR(e,t);break}case g.HTML:{HR(e,t);break}case g.FORM:{zR(e);break}case g.APPLET:case g.OBJECT:case g.MARQUEE:{GR(e,t);break}case g.TEMPLATE:{vi(e,t);break}default:zy(e,t)}}function jy(e,t){e.tmplInsertionModeStack.length>0?Ky(e,t):id(e,t)}function XR(e,t){var i;t.tagID===g.SCRIPT&&((i=e.scriptHandler)===null||i===void 0||i.call(e,e.openElements.current)),e.openElements.pop(),e.insertionMode=e.originalInsertionMode}function KR(e,t){e._err(t,X.eofInElementThatCanContainOnlyText),e.openElements.pop(),e.insertionMode=e.originalInsertionMode,e.onEof(t)}function eh(e,t){if(e.openElements.currentTagId!==void 0&&By.has(e.openElements.currentTagId))switch(e.pendingCharacterTokens.length=0,e.hasNonWhitespacePendingCharacterToken=!1,e.originalInsertionMode=e.insertionMode,e.insertionMode=k.IN_TABLE_TEXT,t.type){case ke.CHARACTER:{Yy(e,t);break}case ke.WHITESPACE_CHARACTER:{qy(e,t);break}}else rl(e,t)}function WR(e,t){e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),e._insertElement(t,te.HTML),e.insertionMode=k.IN_CAPTION}function ZR(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,te.HTML),e.insertionMode=k.IN_COLUMN_GROUP}function JR(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(P.COLGROUP,g.COLGROUP),e.insertionMode=k.IN_COLUMN_GROUP,ad(e,t)}function $R(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,te.HTML),e.insertionMode=k.IN_TABLE_BODY}function ek(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(P.TBODY,g.TBODY),e.insertionMode=k.IN_TABLE_BODY,lo(e,t)}function tk(e,t){e.openElements.hasInTableScope(g.TABLE)&&(e.openElements.popUntilTagNamePopped(g.TABLE),e._resetInsertionMode(),e._processStartTag(t))}function nk(e,t){Py(t)?e._appendElement(t,te.HTML):rl(e,t),t.ackSelfClosing=!0}function rk(e,t){!e.formElement&&e.openElements.tmplCount===0&&(e._insertElement(t,te.HTML),e.formElement=e.openElements.current,e.openElements.pop())}function va(e,t){switch(t.tagID){case g.TD:case g.TH:case g.TR:{ek(e,t);break}case g.STYLE:case g.SCRIPT:case g.TEMPLATE:{Ln(e,t);break}case g.COL:{JR(e,t);break}case g.FORM:{rk(e,t);break}case g.TABLE:{tk(e,t);break}case g.TBODY:case g.TFOOT:case g.THEAD:{$R(e,t);break}case g.INPUT:{nk(e,t);break}case g.CAPTION:{WR(e,t);break}case g.COLGROUP:{ZR(e,t);break}default:rl(e,t)}}function Gu(e,t){switch(t.tagID){case g.TABLE:{e.openElements.hasInTableScope(g.TABLE)&&(e.openElements.popUntilTagNamePopped(g.TABLE),e._resetInsertionMode());break}case g.TEMPLATE:{vi(e,t);break}case g.BODY:case g.CAPTION:case g.COL:case g.COLGROUP:case g.HTML:case g.TBODY:case g.TD:case g.TFOOT:case g.TH:case g.THEAD:case g.TR:break;default:rl(e,t)}}function rl(e,t){const i=e.fosterParentingEnabled;e.fosterParentingEnabled=!0,ao(e,t),e.fosterParentingEnabled=i}function qy(e,t){e.pendingCharacterTokens.push(t)}function Yy(e,t){e.pendingCharacterTokens.push(t),e.hasNonWhitespacePendingCharacterToken=!0}function ku(e,t){let i=0;if(e.hasNonWhitespacePendingCharacterToken)for(;i<e.pendingCharacterTokens.length;i++)rl(e,e.pendingCharacterTokens[i]);else for(;i<e.pendingCharacterTokens.length;i++)e._insertCharacters(e.pendingCharacterTokens[i]);e.insertionMode=e.originalInsertionMode,e._processToken(t)}const Vy=new Set([g.CAPTION,g.COL,g.COLGROUP,g.TBODY,g.TD,g.TFOOT,g.TH,g.THEAD,g.TR]);function ik(e,t){const i=t.tagID;Vy.has(i)?e.openElements.hasInTableScope(g.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(g.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=k.IN_TABLE,va(e,t)):It(e,t)}function ak(e,t){const i=t.tagID;switch(i){case g.CAPTION:case g.TABLE:{e.openElements.hasInTableScope(g.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(g.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=k.IN_TABLE,i===g.TABLE&&Gu(e,t));break}case g.BODY:case g.COL:case g.COLGROUP:case g.HTML:case g.TBODY:case g.TD:case g.TFOOT:case g.TH:case g.THEAD:case g.TR:break;default:uo(e,t)}}function ad(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.COL:{e._appendElement(t,te.HTML),t.ackSelfClosing=!0;break}case g.TEMPLATE:{Ln(e,t);break}default:js(e,t)}}function uk(e,t){switch(t.tagID){case g.COLGROUP:{e.openElements.currentTagId===g.COLGROUP&&(e.openElements.pop(),e.insertionMode=k.IN_TABLE);break}case g.TEMPLATE:{vi(e,t);break}case g.COL:break;default:js(e,t)}}function js(e,t){e.openElements.currentTagId===g.COLGROUP&&(e.openElements.pop(),e.insertionMode=k.IN_TABLE,e._processToken(t))}function lo(e,t){switch(t.tagID){case g.TR:{e.openElements.clearBackToTableBodyContext(),e._insertElement(t,te.HTML),e.insertionMode=k.IN_ROW;break}case g.TH:case g.TD:{e.openElements.clearBackToTableBodyContext(),e._insertFakeElement(P.TR,g.TR),e.insertionMode=k.IN_ROW,so(e,t);break}case g.CAPTION:case g.COL:case g.COLGROUP:case g.TBODY:case g.TFOOT:case g.THEAD:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE,va(e,t));break}default:va(e,t)}}function wh(e,t){const i=t.tagID;switch(t.tagID){case g.TBODY:case g.TFOOT:case g.THEAD:{e.openElements.hasInTableScope(i)&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE);break}case g.TABLE:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE,Gu(e,t));break}case g.BODY:case g.CAPTION:case g.COL:case g.COLGROUP:case g.HTML:case g.TD:case g.TH:case g.TR:break;default:Gu(e,t)}}function so(e,t){switch(t.tagID){case g.TH:case g.TD:{e.openElements.clearBackToTableRowContext(),e._insertElement(t,te.HTML),e.insertionMode=k.IN_CELL,e.activeFormattingElements.insertMarker();break}case g.CAPTION:case g.COL:case g.COLGROUP:case g.TBODY:case g.TFOOT:case g.THEAD:case g.TR:{e.openElements.hasInTableScope(g.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE_BODY,lo(e,t));break}default:va(e,t)}}function Gy(e,t){switch(t.tagID){case g.TR:{e.openElements.hasInTableScope(g.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE_BODY);break}case g.TABLE:{e.openElements.hasInTableScope(g.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE_BODY,wh(e,t));break}case g.TBODY:case g.TFOOT:case g.THEAD:{(e.openElements.hasInTableScope(t.tagID)||e.openElements.hasInTableScope(g.TR))&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE_BODY,wh(e,t));break}case g.BODY:case g.CAPTION:case g.COL:case g.COLGROUP:case g.HTML:case g.TD:case g.TH:break;default:Gu(e,t)}}function lk(e,t){const i=t.tagID;Vy.has(i)?(e.openElements.hasInTableScope(g.TD)||e.openElements.hasInTableScope(g.TH))&&(e._closeTableCell(),so(e,t)):It(e,t)}function sk(e,t){const i=t.tagID;switch(i){case g.TD:case g.TH:{e.openElements.hasInTableScope(i)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(i),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=k.IN_ROW);break}case g.TABLE:case g.TBODY:case g.TFOOT:case g.THEAD:case g.TR:{e.openElements.hasInTableScope(i)&&(e._closeTableCell(),Gy(e,t));break}case g.BODY:case g.CAPTION:case g.COL:case g.COLGROUP:case g.HTML:break;default:uo(e,t)}}function Qy(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.OPTION:{e.openElements.currentTagId===g.OPTION&&e.openElements.pop(),e._insertElement(t,te.HTML);break}case g.OPTGROUP:{e.openElements.currentTagId===g.OPTION&&e.openElements.pop(),e.openElements.currentTagId===g.OPTGROUP&&e.openElements.pop(),e._insertElement(t,te.HTML);break}case g.HR:{e.openElements.currentTagId===g.OPTION&&e.openElements.pop(),e.openElements.currentTagId===g.OPTGROUP&&e.openElements.pop(),e._appendElement(t,te.HTML),t.ackSelfClosing=!0;break}case g.INPUT:case g.KEYGEN:case g.TEXTAREA:case g.SELECT:{e.openElements.hasInSelectScope(g.SELECT)&&(e.openElements.popUntilTagNamePopped(g.SELECT),e._resetInsertionMode(),t.tagID!==g.SELECT&&e._processStartTag(t));break}case g.SCRIPT:case g.TEMPLATE:{Ln(e,t);break}}}function Xy(e,t){switch(t.tagID){case g.OPTGROUP:{e.openElements.stackTop>0&&e.openElements.currentTagId===g.OPTION&&e.openElements.tagIDs[e.openElements.stackTop-1]===g.OPTGROUP&&e.openElements.pop(),e.openElements.currentTagId===g.OPTGROUP&&e.openElements.pop();break}case g.OPTION:{e.openElements.currentTagId===g.OPTION&&e.openElements.pop();break}case g.SELECT:{e.openElements.hasInSelectScope(g.SELECT)&&(e.openElements.popUntilTagNamePopped(g.SELECT),e._resetInsertionMode());break}case g.TEMPLATE:{vi(e,t);break}}}function ok(e,t){const i=t.tagID;i===g.CAPTION||i===g.TABLE||i===g.TBODY||i===g.TFOOT||i===g.THEAD||i===g.TR||i===g.TD||i===g.TH?(e.openElements.popUntilTagNamePopped(g.SELECT),e._resetInsertionMode(),e._processStartTag(t)):Qy(e,t)}function ck(e,t){const i=t.tagID;i===g.CAPTION||i===g.TABLE||i===g.TBODY||i===g.TFOOT||i===g.THEAD||i===g.TR||i===g.TD||i===g.TH?e.openElements.hasInTableScope(i)&&(e.openElements.popUntilTagNamePopped(g.SELECT),e._resetInsertionMode(),e.onEndTag(t)):Xy(e,t)}function fk(e,t){switch(t.tagID){case g.BASE:case g.BASEFONT:case g.BGSOUND:case g.LINK:case g.META:case g.NOFRAMES:case g.SCRIPT:case g.STYLE:case g.TEMPLATE:case g.TITLE:{Ln(e,t);break}case g.CAPTION:case g.COLGROUP:case g.TBODY:case g.TFOOT:case g.THEAD:{e.tmplInsertionModeStack[0]=k.IN_TABLE,e.insertionMode=k.IN_TABLE,va(e,t);break}case g.COL:{e.tmplInsertionModeStack[0]=k.IN_COLUMN_GROUP,e.insertionMode=k.IN_COLUMN_GROUP,ad(e,t);break}case g.TR:{e.tmplInsertionModeStack[0]=k.IN_TABLE_BODY,e.insertionMode=k.IN_TABLE_BODY,lo(e,t);break}case g.TD:case g.TH:{e.tmplInsertionModeStack[0]=k.IN_ROW,e.insertionMode=k.IN_ROW,so(e,t);break}default:e.tmplInsertionModeStack[0]=k.IN_BODY,e.insertionMode=k.IN_BODY,It(e,t)}}function hk(e,t){t.tagID===g.TEMPLATE&&vi(e,t)}function Ky(e,t){e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(g.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode(),e.onEof(t)):id(e,t)}function dk(e,t){t.tagID===g.HTML?It(e,t):qs(e,t)}function Wy(e,t){var i;if(t.tagID===g.HTML){if(e.fragmentContext||(e.insertionMode=k.AFTER_AFTER_BODY),e.options.sourceCodeLocationInfo&&e.openElements.tagIDs[0]===g.HTML){e._setEndLocation(e.openElements.items[0],t);const u=e.openElements.items[1];u&&!(!((i=e.treeAdapter.getNodeSourceCodeLocation(u))===null||i===void 0)&&i.endTag)&&e._setEndLocation(u,t)}}else qs(e,t)}function qs(e,t){e.insertionMode=k.IN_BODY,ao(e,t)}function mk(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.FRAMESET:{e._insertElement(t,te.HTML);break}case g.FRAME:{e._appendElement(t,te.HTML),t.ackSelfClosing=!0;break}case g.NOFRAMES:{Ln(e,t);break}}}function pk(e,t){t.tagID===g.FRAMESET&&!e.openElements.isRootHtmlElementCurrent()&&(e.openElements.pop(),!e.fragmentContext&&e.openElements.currentTagId!==g.FRAMESET&&(e.insertionMode=k.AFTER_FRAMESET))}function gk(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.NOFRAMES:{Ln(e,t);break}}}function bk(e,t){t.tagID===g.HTML&&(e.insertionMode=k.AFTER_AFTER_FRAMESET)}function yk(e,t){t.tagID===g.HTML?It(e,t):Ms(e,t)}function Ms(e,t){e.insertionMode=k.IN_BODY,ao(e,t)}function Ek(e,t){switch(t.tagID){case g.HTML:{It(e,t);break}case g.NOFRAMES:{Ln(e,t);break}}}function Tk(e,t){t.chars=at,e._insertCharacters(t)}function vk(e,t){e._insertCharacters(t),e.framesetOk=!1}function Zy(e){for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==te.HTML&&e.openElements.currentTagId!==void 0&&!e._isIntegrationPoint(e.openElements.currentTagId,e.openElements.current);)e.openElements.pop()}function Ak(e,t){if(FO(t))Zy(e),e._startTagOutsideForeignContent(t);else{const i=e._getAdjustedCurrentElement(),u=e.treeAdapter.getNamespaceURI(i);u===te.MATHML?Iy(t):u===te.SVG&&(UO(t),My(t)),nd(t),t.selfClosing?e._appendElement(t,u):e._insertElement(t,u),t.ackSelfClosing=!0}}function xk(e,t){if(t.tagID===g.P||t.tagID===g.BR){Zy(e),e._endTagOutsideForeignContent(t);return}for(let i=e.openElements.stackTop;i>0;i--){const u=e.openElements.items[i];if(e.treeAdapter.getNamespaceURI(u)===te.HTML){e._endTagOutsideForeignContent(t);break}const s=e.treeAdapter.getTagName(u);if(s.toLowerCase()===t.tagName){t.tagName=s,e.openElements.shortenToLength(i);break}}}P.AREA,P.BASE,P.BASEFONT,P.BGSOUND,P.BR,P.COL,P.EMBED,P.FRAME,P.HR,P.IMG,P.INPUT,P.KEYGEN,P.LINK,P.META,P.PARAM,P.SOURCE,P.TRACK,P.WBR;const wk=/<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi,Sk=new Set(["mdxFlowExpression","mdxJsxFlowElement","mdxJsxTextElement","mdxTextExpression","mdxjsEsm"]),L1={sourceCodeLocationInfo:!0,scriptingEnabled:!1};function Jy(e,t){const i=Mk(e),u=vb("type",{handlers:{root:_k,element:Ck,text:Nk,comment:eE,doctype:Ok,raw:kk},unknown:Lk}),s={parser:i?new O1(L1):O1.getFragmentParser(void 0,L1),handle(h){u(h,s)},stitches:!1,options:t||{}};u(e,s),Oa(s,zn());const o=i?s.parser.document:s.parser.getFragment(),c=BN(o,{file:s.options.file});return s.stitches&&eo(c,"comment",function(h,d,p){const y=h;if(y.value.stitch&&p&&d!==void 0){const b=p.children;return b[d]=y.value.stitch,d}}),c.type==="root"&&c.children.length===1&&c.children[0].type===e.type?c.children[0]:c}function $y(e,t){let i=-1;if(e)for(;++i<e.length;)t.handle(e[i])}function _k(e,t){$y(e.children,t)}function Ck(e,t){Dk(e,t),$y(e.children,t),Ik(e,t)}function Nk(e,t){t.parser.tokenizer.state>4&&(t.parser.tokenizer.state=0);const i={type:ke.CHARACTER,chars:e.value,location:il(e)};Oa(t,zn(e)),t.parser.currentToken=i,t.parser._processToken(t.parser.currentToken)}function Ok(e,t){const i={type:ke.DOCTYPE,name:"html",forceQuirks:!1,publicId:"",systemId:"",location:il(e)};Oa(t,zn(e)),t.parser.currentToken=i,t.parser._processToken(t.parser.currentToken)}function Rk(e,t){t.stitches=!0;const i=Bk(e);if("children"in e&&"children"in i){const u=Jy({type:"root",children:e.children},t.options);i.children=u.children}eE({type:"comment",value:{stitch:i}},t)}function eE(e,t){const i=e.value,u={type:ke.COMMENT,data:i,location:il(e)};Oa(t,zn(e)),t.parser.currentToken=u,t.parser._processToken(t.parser.currentToken)}function kk(e,t){if(t.parser.tokenizer.preprocessor.html="",t.parser.tokenizer.preprocessor.pos=-1,t.parser.tokenizer.preprocessor.lastGapPos=-2,t.parser.tokenizer.preprocessor.gapStack=[],t.parser.tokenizer.preprocessor.skipNextNewLine=!1,t.parser.tokenizer.preprocessor.lastChunkWritten=!1,t.parser.tokenizer.preprocessor.endOfChunkHit=!1,t.parser.tokenizer.preprocessor.isEol=!1,tE(t,zn(e)),t.parser.tokenizer.write(t.options.tagfilter?e.value.replace(wk,"&lt;$1$2"):e.value,!1),t.parser.tokenizer._runParsingLoop(),t.parser.tokenizer.state===72||t.parser.tokenizer.state===78){t.parser.tokenizer.preprocessor.lastChunkWritten=!0;const i=t.parser.tokenizer._consume();t.parser.tokenizer._callState(i)}}function Lk(e,t){const i=e;if(t.options.passThrough&&t.options.passThrough.includes(i.type))Rk(i,t);else{let u="";throw Sk.has(i.type)&&(u=". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"),new Error("Cannot compile `"+i.type+"` node"+u)}}function Oa(e,t){tE(e,t);const i=e.parser.tokenizer.currentCharacterToken;i&&i.location&&(i.location.endLine=e.parser.tokenizer.preprocessor.line,i.location.endCol=e.parser.tokenizer.preprocessor.col+1,i.location.endOffset=e.parser.tokenizer.preprocessor.offset+1,e.parser.currentToken=i,e.parser._processToken(e.parser.currentToken)),e.parser.tokenizer.paused=!1,e.parser.tokenizer.inLoop=!1,e.parser.tokenizer.active=!1,e.parser.tokenizer.returnState=ft.DATA,e.parser.tokenizer.charRefCode=-1,e.parser.tokenizer.consumedAfterSnapshot=-1,e.parser.tokenizer.currentLocation=null,e.parser.tokenizer.currentCharacterToken=null,e.parser.tokenizer.currentToken=null,e.parser.tokenizer.currentAttr={name:"",value:""}}function tE(e,t){if(t&&t.offset!==void 0){const i={startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:-1,endCol:-1,endOffset:-1};e.parser.tokenizer.preprocessor.lineStartPos=-t.column+1,e.parser.tokenizer.preprocessor.droppedBufferSize=t.offset,e.parser.tokenizer.preprocessor.line=t.line,e.parser.tokenizer.currentLocation=i}}function Dk(e,t){const i=e.tagName.toLowerCase();if(t.parser.tokenizer.state===ft.PLAINTEXT)return;Oa(t,zn(e));const u=t.parser.openElements.current;let s="namespaceURI"in u?u.namespaceURI:pi.html;s===pi.html&&i==="svg"&&(s=pi.svg);const o=zN({...e,children:[]},{space:s===pi.svg?"svg":"html"}),c={type:ke.START_TAG,tagName:i,tagID:Na(i),selfClosing:!1,ackSelfClosing:!1,attrs:"attrs"in o?o.attrs:[],location:il(e)};t.parser.currentToken=c,t.parser._processToken(t.parser.currentToken),t.parser.tokenizer.lastStartTagName=i}function Ik(e,t){const i=e.tagName.toLowerCase();if(!t.parser.tokenizer.inForeignNode&&KN.includes(i)||t.parser.tokenizer.state===ft.PLAINTEXT)return;Oa(t,ro(e));const u={type:ke.END_TAG,tagName:i,tagID:Na(i),selfClosing:!1,ackSelfClosing:!1,attrs:[],location:il(e)};t.parser.currentToken=u,t.parser._processToken(t.parser.currentToken),i===t.parser.tokenizer.lastStartTagName&&(t.parser.tokenizer.state===ft.RCDATA||t.parser.tokenizer.state===ft.RAWTEXT||t.parser.tokenizer.state===ft.SCRIPT_DATA)&&(t.parser.tokenizer.state=ft.DATA)}function Mk(e){const t=e.type==="root"?e.children[0]:e;return!!(t&&(t.type==="doctype"||t.type==="element"&&t.tagName.toLowerCase()==="html"))}function il(e){const t=zn(e)||{line:void 0,column:void 0,offset:void 0},i=ro(e)||{line:void 0,column:void 0,offset:void 0};return{startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:i.line,endCol:i.column,endOffset:i.offset}}function Bk(e){return"children"in e?Ta({...e,children:[]}):Ta(e)}function th(e){return function(t,i){return Jy(t,{...e,file:i})}}function nE(e){return typeof e>"u"||e===null}function Fk(e){return typeof e=="object"&&e!==null}function Uk(e){return Array.isArray(e)?e:nE(e)?[]:[e]}function Hk(e,t){var i,u,s,o;if(t)for(o=Object.keys(t),i=0,u=o.length;i<u;i+=1)s=o[i],e[s]=t[s];return e}function Pk(e,t){var i="",u;for(u=0;u<t;u+=1)i+=e;return i}function zk(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var jk=nE,qk=Fk,Yk=Uk,Vk=Pk,Gk=zk,Qk=Hk,Tt={isNothing:jk,isObject:qk,toArray:Yk,repeat:Vk,isNegativeZero:Gk,extend:Qk};function rE(e,t){var i="",u=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(i+='in "'+e.mark.name+'" '),i+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(i+=`

`+e.mark.snippet),u+" "+i):u}function Qu(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=rE(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Qu.prototype=Object.create(Error.prototype);Qu.prototype.constructor=Qu;Qu.prototype.toString=function(t){return this.name+": "+rE(this,t)};var Pt=Qu;function nh(e,t,i,u,s){var o="",c="",h=Math.floor(s/2)-1;return u-t>h&&(o=" ... ",t=u-h+o.length),i-u>h&&(c=" ...",i=u+h-c.length),{str:o+e.slice(t,i).replace(/\t/g,"→")+c,pos:u-t+o.length}}function rh(e,t){return Tt.repeat(" ",t-e.length)+e}function Xk(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),typeof t.indent!="number"&&(t.indent=1),typeof t.linesBefore!="number"&&(t.linesBefore=3),typeof t.linesAfter!="number"&&(t.linesAfter=2);for(var i=/\r?\n|\r|\0/g,u=[0],s=[],o,c=-1;o=i.exec(e.buffer);)s.push(o.index),u.push(o.index+o[0].length),e.position<=o.index&&c<0&&(c=u.length-2);c<0&&(c=u.length-1);var h="",d,p,y=Math.min(e.line+t.linesAfter,s.length).toString().length,b=t.maxLength-(t.indent+y+3);for(d=1;d<=t.linesBefore&&!(c-d<0);d++)p=nh(e.buffer,u[c-d],s[c-d],e.position-(u[c]-u[c-d]),b),h=Tt.repeat(" ",t.indent)+rh((e.line-d+1).toString(),y)+" | "+p.str+`
`+h;for(p=nh(e.buffer,u[c],s[c],e.position,b),h+=Tt.repeat(" ",t.indent)+rh((e.line+1).toString(),y)+" | "+p.str+`
`,h+=Tt.repeat("-",t.indent+y+3+p.pos)+`^
`,d=1;d<=t.linesAfter&&!(c+d>=s.length);d++)p=nh(e.buffer,u[c+d],s[c+d],e.position-(u[c]-u[c+d]),b),h+=Tt.repeat(" ",t.indent)+rh((e.line+d+1).toString(),y)+" | "+p.str+`
`;return h.replace(/\n$/,"")}var Kk=Xk,Wk=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Zk=["scalar","sequence","mapping"];function Jk(e){var t={};return e!==null&&Object.keys(e).forEach(function(i){e[i].forEach(function(u){t[String(u)]=i})}),t}function $k(e,t){if(t=t||{},Object.keys(t).forEach(function(i){if(Wk.indexOf(i)===-1)throw new Pt('Unknown option "'+i+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(i){return i},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Jk(t.styleAliases||null),Zk.indexOf(this.kind)===-1)throw new Pt('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Rt=$k;function D1(e,t){var i=[];return e[t].forEach(function(u){var s=i.length;i.forEach(function(o,c){o.tag===u.tag&&o.kind===u.kind&&o.multi===u.multi&&(s=c)}),i[s]=u}),i}function e6(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,i;function u(s){s.multi?(e.multi[s.kind].push(s),e.multi.fallback.push(s)):e[s.kind][s.tag]=e.fallback[s.tag]=s}for(t=0,i=arguments.length;t<i;t+=1)arguments[t].forEach(u);return e}function Sh(e){return this.extend(e)}Sh.prototype.extend=function(t){var i=[],u=[];if(t instanceof Rt)u.push(t);else if(Array.isArray(t))u=u.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(i=i.concat(t.implicit)),t.explicit&&(u=u.concat(t.explicit));else throw new Pt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");i.forEach(function(o){if(!(o instanceof Rt))throw new Pt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new Pt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new Pt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),u.forEach(function(o){if(!(o instanceof Rt))throw new Pt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var s=Object.create(Sh.prototype);return s.implicit=(this.implicit||[]).concat(i),s.explicit=(this.explicit||[]).concat(u),s.compiledImplicit=D1(s,"implicit"),s.compiledExplicit=D1(s,"explicit"),s.compiledTypeMap=e6(s.compiledImplicit,s.compiledExplicit),s};var iE=Sh,aE=new Rt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),uE=new Rt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),lE=new Rt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),sE=new iE({explicit:[aE,uE,lE]});function t6(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function n6(){return null}function r6(e){return e===null}var oE=new Rt("tag:yaml.org,2002:null",{kind:"scalar",resolve:t6,construct:n6,predicate:r6,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function i6(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function a6(e){return e==="true"||e==="True"||e==="TRUE"}function u6(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var cE=new Rt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:i6,construct:a6,predicate:u6,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function l6(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function s6(e){return 48<=e&&e<=55}function o6(e){return 48<=e&&e<=57}function c6(e){if(e===null)return!1;var t=e.length,i=0,u=!1,s;if(!t)return!1;if(s=e[i],(s==="-"||s==="+")&&(s=e[++i]),s==="0"){if(i+1===t)return!0;if(s=e[++i],s==="b"){for(i++;i<t;i++)if(s=e[i],s!=="_"){if(s!=="0"&&s!=="1")return!1;u=!0}return u&&s!=="_"}if(s==="x"){for(i++;i<t;i++)if(s=e[i],s!=="_"){if(!l6(e.charCodeAt(i)))return!1;u=!0}return u&&s!=="_"}if(s==="o"){for(i++;i<t;i++)if(s=e[i],s!=="_"){if(!s6(e.charCodeAt(i)))return!1;u=!0}return u&&s!=="_"}}if(s==="_")return!1;for(;i<t;i++)if(s=e[i],s!=="_"){if(!o6(e.charCodeAt(i)))return!1;u=!0}return!(!u||s==="_")}function f6(e){var t=e,i=1,u;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),u=t[0],(u==="-"||u==="+")&&(u==="-"&&(i=-1),t=t.slice(1),u=t[0]),t==="0")return 0;if(u==="0"){if(t[1]==="b")return i*parseInt(t.slice(2),2);if(t[1]==="x")return i*parseInt(t.slice(2),16);if(t[1]==="o")return i*parseInt(t.slice(2),8)}return i*parseInt(t,10)}function h6(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Tt.isNegativeZero(e)}var fE=new Rt("tag:yaml.org,2002:int",{kind:"scalar",resolve:c6,construct:f6,predicate:h6,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),d6=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function m6(e){return!(e===null||!d6.test(e)||e[e.length-1]==="_")}function p6(e){var t,i;return t=e.replace(/_/g,"").toLowerCase(),i=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:i*parseFloat(t,10)}var g6=/^[-+]?[0-9]+e/;function b6(e,t){var i;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Tt.isNegativeZero(e))return"-0.0";return i=e.toString(10),g6.test(i)?i.replace("e",".e"):i}function y6(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Tt.isNegativeZero(e))}var hE=new Rt("tag:yaml.org,2002:float",{kind:"scalar",resolve:m6,construct:p6,predicate:y6,represent:b6,defaultStyle:"lowercase"}),dE=sE.extend({implicit:[oE,cE,fE,hE]}),mE=dE,pE=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),gE=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function E6(e){return e===null?!1:pE.exec(e)!==null||gE.exec(e)!==null}function T6(e){var t,i,u,s,o,c,h,d=0,p=null,y,b,v;if(t=pE.exec(e),t===null&&(t=gE.exec(e)),t===null)throw new Error("Date resolve error");if(i=+t[1],u=+t[2]-1,s=+t[3],!t[4])return new Date(Date.UTC(i,u,s));if(o=+t[4],c=+t[5],h=+t[6],t[7]){for(d=t[7].slice(0,3);d.length<3;)d+="0";d=+d}return t[9]&&(y=+t[10],b=+(t[11]||0),p=(y*60+b)*6e4,t[9]==="-"&&(p=-p)),v=new Date(Date.UTC(i,u,s,o,c,h,d)),p&&v.setTime(v.getTime()-p),v}function v6(e){return e.toISOString()}var bE=new Rt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:E6,construct:T6,instanceOf:Date,represent:v6});function A6(e){return e==="<<"||e===null}var yE=new Rt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:A6}),ud=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function x6(e){if(e===null)return!1;var t,i,u=0,s=e.length,o=ud;for(i=0;i<s;i++)if(t=o.indexOf(e.charAt(i)),!(t>64)){if(t<0)return!1;u+=6}return u%8===0}function w6(e){var t,i,u=e.replace(/[\r\n=]/g,""),s=u.length,o=ud,c=0,h=[];for(t=0;t<s;t++)t%4===0&&t&&(h.push(c>>16&255),h.push(c>>8&255),h.push(c&255)),c=c<<6|o.indexOf(u.charAt(t));return i=s%4*6,i===0?(h.push(c>>16&255),h.push(c>>8&255),h.push(c&255)):i===18?(h.push(c>>10&255),h.push(c>>2&255)):i===12&&h.push(c>>4&255),new Uint8Array(h)}function S6(e){var t="",i=0,u,s,o=e.length,c=ud;for(u=0;u<o;u++)u%3===0&&u&&(t+=c[i>>18&63],t+=c[i>>12&63],t+=c[i>>6&63],t+=c[i&63]),i=(i<<8)+e[u];return s=o%3,s===0?(t+=c[i>>18&63],t+=c[i>>12&63],t+=c[i>>6&63],t+=c[i&63]):s===2?(t+=c[i>>10&63],t+=c[i>>4&63],t+=c[i<<2&63],t+=c[64]):s===1&&(t+=c[i>>2&63],t+=c[i<<4&63],t+=c[64],t+=c[64]),t}function _6(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var EE=new Rt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:x6,construct:w6,predicate:_6,represent:S6}),C6=Object.prototype.hasOwnProperty,N6=Object.prototype.toString;function O6(e){if(e===null)return!0;var t=[],i,u,s,o,c,h=e;for(i=0,u=h.length;i<u;i+=1){if(s=h[i],c=!1,N6.call(s)!=="[object Object]")return!1;for(o in s)if(C6.call(s,o))if(!c)c=!0;else return!1;if(!c)return!1;if(t.indexOf(o)===-1)t.push(o);else return!1}return!0}function R6(e){return e!==null?e:[]}var TE=new Rt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:O6,construct:R6}),k6=Object.prototype.toString;function L6(e){if(e===null)return!0;var t,i,u,s,o,c=e;for(o=new Array(c.length),t=0,i=c.length;t<i;t+=1){if(u=c[t],k6.call(u)!=="[object Object]"||(s=Object.keys(u),s.length!==1))return!1;o[t]=[s[0],u[s[0]]]}return!0}function D6(e){if(e===null)return[];var t,i,u,s,o,c=e;for(o=new Array(c.length),t=0,i=c.length;t<i;t+=1)u=c[t],s=Object.keys(u),o[t]=[s[0],u[s[0]]];return o}var vE=new Rt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:L6,construct:D6}),I6=Object.prototype.hasOwnProperty;function M6(e){if(e===null)return!0;var t,i=e;for(t in i)if(I6.call(i,t)&&i[t]!==null)return!1;return!0}function B6(e){return e!==null?e:{}}var AE=new Rt("tag:yaml.org,2002:set",{kind:"mapping",resolve:M6,construct:B6}),ld=mE.extend({implicit:[bE,yE],explicit:[EE,TE,vE,AE]}),Vr=Object.prototype.hasOwnProperty,Ys=1,xE=2,wE=3,Vs=4,ih=1,F6=2,I1=3,U6=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,H6=/[\x85\u2028\u2029]/,P6=/[,\[\]\{\}]/,SE=/^(?:!|!!|![a-z\-]+!)$/i,_E=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function M1(e){return Object.prototype.toString.call(e)}function Hn(e){return e===10||e===13}function bi(e){return e===9||e===32}function Zt(e){return e===9||e===32||e===10||e===13}function ga(e){return e===44||e===91||e===93||e===123||e===125}function z6(e){var t;return 48<=e&&e<=57?e-48:(t=e|32,97<=t&&t<=102?t-97+10:-1)}function j6(e){return e===120?2:e===117?4:e===85?8:0}function q6(e){return 48<=e&&e<=57?e-48:-1}function B1(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function Y6(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function CE(e,t,i){t==="__proto__"?Object.defineProperty(e,t,{configurable:!0,enumerable:!0,writable:!0,value:i}):e[t]=i}var NE=new Array(256),OE=new Array(256);for(var ha=0;ha<256;ha++)NE[ha]=B1(ha)?1:0,OE[ha]=B1(ha);function V6(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||ld,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function RE(e,t){var i={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return i.snippet=Kk(i),new Pt(t,i)}function Ee(e,t){throw RE(e,t)}function Gs(e,t){e.onWarning&&e.onWarning.call(null,RE(e,t))}var F1={YAML:function(t,i,u){var s,o,c;t.version!==null&&Ee(t,"duplication of %YAML directive"),u.length!==1&&Ee(t,"YAML directive accepts exactly one argument"),s=/^([0-9]+)\.([0-9]+)$/.exec(u[0]),s===null&&Ee(t,"ill-formed argument of the YAML directive"),o=parseInt(s[1],10),c=parseInt(s[2],10),o!==1&&Ee(t,"unacceptable YAML version of the document"),t.version=u[0],t.checkLineBreaks=c<2,c!==1&&c!==2&&Gs(t,"unsupported YAML version of the document")},TAG:function(t,i,u){var s,o;u.length!==2&&Ee(t,"TAG directive accepts exactly two arguments"),s=u[0],o=u[1],SE.test(s)||Ee(t,"ill-formed tag handle (first argument) of the TAG directive"),Vr.call(t.tagMap,s)&&Ee(t,'there is a previously declared suffix for "'+s+'" tag handle'),_E.test(o)||Ee(t,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch{Ee(t,"tag prefix is malformed: "+o)}t.tagMap[s]=o}};function Yr(e,t,i,u){var s,o,c,h;if(t<i){if(h=e.input.slice(t,i),u)for(s=0,o=h.length;s<o;s+=1)c=h.charCodeAt(s),c===9||32<=c&&c<=1114111||Ee(e,"expected valid JSON character");else U6.test(h)&&Ee(e,"the stream contains non-printable characters");e.result+=h}}function U1(e,t,i,u){var s,o,c,h;for(Tt.isObject(i)||Ee(e,"cannot merge mappings; the provided source object is unacceptable"),s=Object.keys(i),c=0,h=s.length;c<h;c+=1)o=s[c],Vr.call(t,o)||(CE(t,o,i[o]),u[o]=!0)}function ba(e,t,i,u,s,o,c,h,d){var p,y;if(Array.isArray(s))for(s=Array.prototype.slice.call(s),p=0,y=s.length;p<y;p+=1)Array.isArray(s[p])&&Ee(e,"nested arrays are not supported inside keys"),typeof s=="object"&&M1(s[p])==="[object Object]"&&(s[p]="[object Object]");if(typeof s=="object"&&M1(s)==="[object Object]"&&(s="[object Object]"),s=String(s),t===null&&(t={}),u==="tag:yaml.org,2002:merge")if(Array.isArray(o))for(p=0,y=o.length;p<y;p+=1)U1(e,t,o[p],i);else U1(e,t,o,i);else!e.json&&!Vr.call(i,s)&&Vr.call(t,s)&&(e.line=c||e.line,e.lineStart=h||e.lineStart,e.position=d||e.position,Ee(e,"duplicated mapping key")),CE(t,s,o),delete i[s];return t}function sd(e){var t;t=e.input.charCodeAt(e.position),t===10?e.position++:t===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):Ee(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function bt(e,t,i){for(var u=0,s=e.input.charCodeAt(e.position);s!==0;){for(;bi(s);)s===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),s=e.input.charCodeAt(++e.position);if(t&&s===35)do s=e.input.charCodeAt(++e.position);while(s!==10&&s!==13&&s!==0);if(Hn(s))for(sd(e),s=e.input.charCodeAt(e.position),u++,e.lineIndent=0;s===32;)e.lineIndent++,s=e.input.charCodeAt(++e.position);else break}return i!==-1&&u!==0&&e.lineIndent<i&&Gs(e,"deficient indentation"),u}function oo(e){var t=e.position,i;return i=e.input.charCodeAt(t),!!((i===45||i===46)&&i===e.input.charCodeAt(t+1)&&i===e.input.charCodeAt(t+2)&&(t+=3,i=e.input.charCodeAt(t),i===0||Zt(i)))}function od(e,t){t===1?e.result+=" ":t>1&&(e.result+=Tt.repeat(`
`,t-1))}function G6(e,t,i){var u,s,o,c,h,d,p,y,b=e.kind,v=e.result,T;if(T=e.input.charCodeAt(e.position),Zt(T)||ga(T)||T===35||T===38||T===42||T===33||T===124||T===62||T===39||T===34||T===37||T===64||T===96||(T===63||T===45)&&(s=e.input.charCodeAt(e.position+1),Zt(s)||i&&ga(s)))return!1;for(e.kind="scalar",e.result="",o=c=e.position,h=!1;T!==0;){if(T===58){if(s=e.input.charCodeAt(e.position+1),Zt(s)||i&&ga(s))break}else if(T===35){if(u=e.input.charCodeAt(e.position-1),Zt(u))break}else{if(e.position===e.lineStart&&oo(e)||i&&ga(T))break;if(Hn(T))if(d=e.line,p=e.lineStart,y=e.lineIndent,bt(e,!1,-1),e.lineIndent>=t){h=!0,T=e.input.charCodeAt(e.position);continue}else{e.position=c,e.line=d,e.lineStart=p,e.lineIndent=y;break}}h&&(Yr(e,o,c,!1),od(e,e.line-d),o=c=e.position,h=!1),bi(T)||(c=e.position+1),T=e.input.charCodeAt(++e.position)}return Yr(e,o,c,!1),e.result?!0:(e.kind=b,e.result=v,!1)}function Q6(e,t){var i,u,s;if(i=e.input.charCodeAt(e.position),i!==39)return!1;for(e.kind="scalar",e.result="",e.position++,u=s=e.position;(i=e.input.charCodeAt(e.position))!==0;)if(i===39)if(Yr(e,u,e.position,!0),i=e.input.charCodeAt(++e.position),i===39)u=e.position,e.position++,s=e.position;else return!0;else Hn(i)?(Yr(e,u,s,!0),od(e,bt(e,!1,t)),u=s=e.position):e.position===e.lineStart&&oo(e)?Ee(e,"unexpected end of the document within a single quoted scalar"):(e.position++,s=e.position);Ee(e,"unexpected end of the stream within a single quoted scalar")}function X6(e,t){var i,u,s,o,c,h;if(h=e.input.charCodeAt(e.position),h!==34)return!1;for(e.kind="scalar",e.result="",e.position++,i=u=e.position;(h=e.input.charCodeAt(e.position))!==0;){if(h===34)return Yr(e,i,e.position,!0),e.position++,!0;if(h===92){if(Yr(e,i,e.position,!0),h=e.input.charCodeAt(++e.position),Hn(h))bt(e,!1,t);else if(h<256&&NE[h])e.result+=OE[h],e.position++;else if((c=j6(h))>0){for(s=c,o=0;s>0;s--)h=e.input.charCodeAt(++e.position),(c=z6(h))>=0?o=(o<<4)+c:Ee(e,"expected hexadecimal character");e.result+=Y6(o),e.position++}else Ee(e,"unknown escape sequence");i=u=e.position}else Hn(h)?(Yr(e,i,u,!0),od(e,bt(e,!1,t)),i=u=e.position):e.position===e.lineStart&&oo(e)?Ee(e,"unexpected end of the document within a double quoted scalar"):(e.position++,u=e.position)}Ee(e,"unexpected end of the stream within a double quoted scalar")}function K6(e,t){var i=!0,u,s,o,c=e.tag,h,d=e.anchor,p,y,b,v,T,A=Object.create(null),C,R,N,D;if(D=e.input.charCodeAt(e.position),D===91)y=93,T=!1,h=[];else if(D===123)y=125,T=!0,h={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=h),D=e.input.charCodeAt(++e.position);D!==0;){if(bt(e,!0,t),D=e.input.charCodeAt(e.position),D===y)return e.position++,e.tag=c,e.anchor=d,e.kind=T?"mapping":"sequence",e.result=h,!0;i?D===44&&Ee(e,"expected the node content, but found ','"):Ee(e,"missed comma between flow collection entries"),R=C=N=null,b=v=!1,D===63&&(p=e.input.charCodeAt(e.position+1),Zt(p)&&(b=v=!0,e.position++,bt(e,!0,t))),u=e.line,s=e.lineStart,o=e.position,Aa(e,t,Ys,!1,!0),R=e.tag,C=e.result,bt(e,!0,t),D=e.input.charCodeAt(e.position),(v||e.line===u)&&D===58&&(b=!0,D=e.input.charCodeAt(++e.position),bt(e,!0,t),Aa(e,t,Ys,!1,!0),N=e.result),T?ba(e,h,A,R,C,N,u,s,o):b?h.push(ba(e,null,A,R,C,N,u,s,o)):h.push(C),bt(e,!0,t),D=e.input.charCodeAt(e.position),D===44?(i=!0,D=e.input.charCodeAt(++e.position)):i=!1}Ee(e,"unexpected end of the stream within a flow collection")}function W6(e,t){var i,u,s=ih,o=!1,c=!1,h=t,d=0,p=!1,y,b;if(b=e.input.charCodeAt(e.position),b===124)u=!1;else if(b===62)u=!0;else return!1;for(e.kind="scalar",e.result="";b!==0;)if(b=e.input.charCodeAt(++e.position),b===43||b===45)ih===s?s=b===43?I1:F6:Ee(e,"repeat of a chomping mode identifier");else if((y=q6(b))>=0)y===0?Ee(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):c?Ee(e,"repeat of an indentation width identifier"):(h=t+y-1,c=!0);else break;if(bi(b)){do b=e.input.charCodeAt(++e.position);while(bi(b));if(b===35)do b=e.input.charCodeAt(++e.position);while(!Hn(b)&&b!==0)}for(;b!==0;){for(sd(e),e.lineIndent=0,b=e.input.charCodeAt(e.position);(!c||e.lineIndent<h)&&b===32;)e.lineIndent++,b=e.input.charCodeAt(++e.position);if(!c&&e.lineIndent>h&&(h=e.lineIndent),Hn(b)){d++;continue}if(e.lineIndent<h){s===I1?e.result+=Tt.repeat(`
`,o?1+d:d):s===ih&&o&&(e.result+=`
`);break}for(u?bi(b)?(p=!0,e.result+=Tt.repeat(`
`,o?1+d:d)):p?(p=!1,e.result+=Tt.repeat(`
`,d+1)):d===0?o&&(e.result+=" "):e.result+=Tt.repeat(`
`,d):e.result+=Tt.repeat(`
`,o?1+d:d),o=!0,c=!0,d=0,i=e.position;!Hn(b)&&b!==0;)b=e.input.charCodeAt(++e.position);Yr(e,i,e.position,!1)}return!0}function H1(e,t){var i,u=e.tag,s=e.anchor,o=[],c,h=!1,d;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=o),d=e.input.charCodeAt(e.position);d!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,Ee(e,"tab characters must not be used in indentation")),!(d!==45||(c=e.input.charCodeAt(e.position+1),!Zt(c))));){if(h=!0,e.position++,bt(e,!0,-1)&&e.lineIndent<=t){o.push(null),d=e.input.charCodeAt(e.position);continue}if(i=e.line,Aa(e,t,wE,!1,!0),o.push(e.result),bt(e,!0,-1),d=e.input.charCodeAt(e.position),(e.line===i||e.lineIndent>t)&&d!==0)Ee(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break}return h?(e.tag=u,e.anchor=s,e.kind="sequence",e.result=o,!0):!1}function Z6(e,t,i){var u,s,o,c,h,d,p=e.tag,y=e.anchor,b={},v=Object.create(null),T=null,A=null,C=null,R=!1,N=!1,D;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=b),D=e.input.charCodeAt(e.position);D!==0;){if(!R&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,Ee(e,"tab characters must not be used in indentation")),u=e.input.charCodeAt(e.position+1),o=e.line,(D===63||D===58)&&Zt(u))D===63?(R&&(ba(e,b,v,T,A,null,c,h,d),T=A=C=null),N=!0,R=!0,s=!0):R?(R=!1,s=!0):Ee(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,D=u;else{if(c=e.line,h=e.lineStart,d=e.position,!Aa(e,i,xE,!1,!0))break;if(e.line===o){for(D=e.input.charCodeAt(e.position);bi(D);)D=e.input.charCodeAt(++e.position);if(D===58)D=e.input.charCodeAt(++e.position),Zt(D)||Ee(e,"a whitespace character is expected after the key-value separator within a block mapping"),R&&(ba(e,b,v,T,A,null,c,h,d),T=A=C=null),N=!0,R=!1,s=!1,T=e.tag,A=e.result;else if(N)Ee(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=p,e.anchor=y,!0}else if(N)Ee(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=p,e.anchor=y,!0}if((e.line===o||e.lineIndent>t)&&(R&&(c=e.line,h=e.lineStart,d=e.position),Aa(e,t,Vs,!0,s)&&(R?A=e.result:C=e.result),R||(ba(e,b,v,T,A,C,c,h,d),T=A=C=null),bt(e,!0,-1),D=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>t)&&D!==0)Ee(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return R&&ba(e,b,v,T,A,null,c,h,d),N&&(e.tag=p,e.anchor=y,e.kind="mapping",e.result=b),N}function J6(e){var t,i=!1,u=!1,s,o,c;if(c=e.input.charCodeAt(e.position),c!==33)return!1;if(e.tag!==null&&Ee(e,"duplication of a tag property"),c=e.input.charCodeAt(++e.position),c===60?(i=!0,c=e.input.charCodeAt(++e.position)):c===33?(u=!0,s="!!",c=e.input.charCodeAt(++e.position)):s="!",t=e.position,i){do c=e.input.charCodeAt(++e.position);while(c!==0&&c!==62);e.position<e.length?(o=e.input.slice(t,e.position),c=e.input.charCodeAt(++e.position)):Ee(e,"unexpected end of the stream within a verbatim tag")}else{for(;c!==0&&!Zt(c);)c===33&&(u?Ee(e,"tag suffix cannot contain exclamation marks"):(s=e.input.slice(t-1,e.position+1),SE.test(s)||Ee(e,"named tag handle cannot contain such characters"),u=!0,t=e.position+1)),c=e.input.charCodeAt(++e.position);o=e.input.slice(t,e.position),P6.test(o)&&Ee(e,"tag suffix cannot contain flow indicator characters")}o&&!_E.test(o)&&Ee(e,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch{Ee(e,"tag name is malformed: "+o)}return i?e.tag=o:Vr.call(e.tagMap,s)?e.tag=e.tagMap[s]+o:s==="!"?e.tag="!"+o:s==="!!"?e.tag="tag:yaml.org,2002:"+o:Ee(e,'undeclared tag handle "'+s+'"'),!0}function $6(e){var t,i;if(i=e.input.charCodeAt(e.position),i!==38)return!1;for(e.anchor!==null&&Ee(e,"duplication of an anchor property"),i=e.input.charCodeAt(++e.position),t=e.position;i!==0&&!Zt(i)&&!ga(i);)i=e.input.charCodeAt(++e.position);return e.position===t&&Ee(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function eL(e){var t,i,u;if(u=e.input.charCodeAt(e.position),u!==42)return!1;for(u=e.input.charCodeAt(++e.position),t=e.position;u!==0&&!Zt(u)&&!ga(u);)u=e.input.charCodeAt(++e.position);return e.position===t&&Ee(e,"name of an alias node must contain at least one character"),i=e.input.slice(t,e.position),Vr.call(e.anchorMap,i)||Ee(e,'unidentified alias "'+i+'"'),e.result=e.anchorMap[i],bt(e,!0,-1),!0}function Aa(e,t,i,u,s){var o,c,h,d=1,p=!1,y=!1,b,v,T,A,C,R;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=c=h=Vs===i||wE===i,u&&bt(e,!0,-1)&&(p=!0,e.lineIndent>t?d=1:e.lineIndent===t?d=0:e.lineIndent<t&&(d=-1)),d===1)for(;J6(e)||$6(e);)bt(e,!0,-1)?(p=!0,h=o,e.lineIndent>t?d=1:e.lineIndent===t?d=0:e.lineIndent<t&&(d=-1)):h=!1;if(h&&(h=p||s),(d===1||Vs===i)&&(Ys===i||xE===i?C=t:C=t+1,R=e.position-e.lineStart,d===1?h&&(H1(e,R)||Z6(e,R,C))||K6(e,C)?y=!0:(c&&W6(e,C)||Q6(e,C)||X6(e,C)?y=!0:eL(e)?(y=!0,(e.tag!==null||e.anchor!==null)&&Ee(e,"alias node should not have any properties")):G6(e,C,Ys===i)&&(y=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):d===0&&(y=h&&H1(e,R))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&Ee(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),b=0,v=e.implicitTypes.length;b<v;b+=1)if(A=e.implicitTypes[b],A.resolve(e.result)){e.result=A.construct(e.result),e.tag=A.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(Vr.call(e.typeMap[e.kind||"fallback"],e.tag))A=e.typeMap[e.kind||"fallback"][e.tag];else for(A=null,T=e.typeMap.multi[e.kind||"fallback"],b=0,v=T.length;b<v;b+=1)if(e.tag.slice(0,T[b].tag.length)===T[b].tag){A=T[b];break}A||Ee(e,"unknown tag !<"+e.tag+">"),e.result!==null&&A.kind!==e.kind&&Ee(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+A.kind+'", not "'+e.kind+'"'),A.resolve(e.result,e.tag)?(e.result=A.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):Ee(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||y}function tL(e){var t=e.position,i,u,s,o=!1,c;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(c=e.input.charCodeAt(e.position))!==0&&(bt(e,!0,-1),c=e.input.charCodeAt(e.position),!(e.lineIndent>0||c!==37));){for(o=!0,c=e.input.charCodeAt(++e.position),i=e.position;c!==0&&!Zt(c);)c=e.input.charCodeAt(++e.position);for(u=e.input.slice(i,e.position),s=[],u.length<1&&Ee(e,"directive name must not be less than one character in length");c!==0;){for(;bi(c);)c=e.input.charCodeAt(++e.position);if(c===35){do c=e.input.charCodeAt(++e.position);while(c!==0&&!Hn(c));break}if(Hn(c))break;for(i=e.position;c!==0&&!Zt(c);)c=e.input.charCodeAt(++e.position);s.push(e.input.slice(i,e.position))}c!==0&&sd(e),Vr.call(F1,u)?F1[u](e,u,s):Gs(e,'unknown document directive "'+u+'"')}if(bt(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,bt(e,!0,-1)):o&&Ee(e,"directives end mark is expected"),Aa(e,e.lineIndent-1,Vs,!1,!0),bt(e,!0,-1),e.checkLineBreaks&&H6.test(e.input.slice(t,e.position))&&Gs(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&oo(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,bt(e,!0,-1));return}if(e.position<e.length-1)Ee(e,"end of the stream or a document separator is expected");else return}function kE(e,t){e=String(e),t=t||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var i=new V6(e,t),u=e.indexOf("\0");for(u!==-1&&(i.position=u,Ee(i,"null byte is not allowed in input")),i.input+="\0";i.input.charCodeAt(i.position)===32;)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)tL(i);return i.documents}function nL(e,t,i){t!==null&&typeof t=="object"&&typeof i>"u"&&(i=t,t=null);var u=kE(e,i);if(typeof t!="function")return u;for(var s=0,o=u.length;s<o;s+=1)t(u[s])}function rL(e,t){var i=kE(e,t);if(i.length!==0){if(i.length===1)return i[0];throw new Pt("expected a single document in the stream, but found more")}}var iL=nL,aL=rL,LE={loadAll:iL,load:aL},DE=Object.prototype.toString,IE=Object.prototype.hasOwnProperty,cd=65279,uL=9,Xu=10,lL=13,sL=32,oL=33,cL=34,_h=35,fL=37,hL=38,dL=39,mL=42,ME=44,pL=45,Qs=58,gL=61,bL=62,yL=63,EL=64,BE=91,FE=93,TL=96,UE=123,vL=124,HE=125,Mt={};Mt[0]="\\0";Mt[7]="\\a";Mt[8]="\\b";Mt[9]="\\t";Mt[10]="\\n";Mt[11]="\\v";Mt[12]="\\f";Mt[13]="\\r";Mt[27]="\\e";Mt[34]='\\"';Mt[92]="\\\\";Mt[133]="\\N";Mt[160]="\\_";Mt[8232]="\\L";Mt[8233]="\\P";var AL=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],xL=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function wL(e,t){var i,u,s,o,c,h,d;if(t===null)return{};for(i={},u=Object.keys(t),s=0,o=u.length;s<o;s+=1)c=u[s],h=String(t[c]),c.slice(0,2)==="!!"&&(c="tag:yaml.org,2002:"+c.slice(2)),d=e.compiledTypeMap.fallback[c],d&&IE.call(d.styleAliases,h)&&(h=d.styleAliases[h]),i[c]=h;return i}function SL(e){var t,i,u;if(t=e.toString(16).toUpperCase(),e<=255)i="x",u=2;else if(e<=65535)i="u",u=4;else if(e<=4294967295)i="U",u=8;else throw new Pt("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+i+Tt.repeat("0",u-t.length)+t}var _L=1,Ku=2;function CL(e){this.schema=e.schema||ld,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Tt.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=wL(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?Ku:_L,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function P1(e,t){for(var i=Tt.repeat(" ",t),u=0,s=-1,o="",c,h=e.length;u<h;)s=e.indexOf(`
`,u),s===-1?(c=e.slice(u),u=h):(c=e.slice(u,s+1),u=s+1),c.length&&c!==`
`&&(o+=i),o+=c;return o}function Ch(e,t){return`
`+Tt.repeat(" ",e.indent*t)}function NL(e,t){var i,u,s;for(i=0,u=e.implicitTypes.length;i<u;i+=1)if(s=e.implicitTypes[i],s.resolve(t))return!0;return!1}function Xs(e){return e===sL||e===uL}function Wu(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==cd||65536<=e&&e<=1114111}function z1(e){return Wu(e)&&e!==cd&&e!==lL&&e!==Xu}function j1(e,t,i){var u=z1(e),s=u&&!Xs(e);return(i?u:u&&e!==ME&&e!==BE&&e!==FE&&e!==UE&&e!==HE)&&e!==_h&&!(t===Qs&&!s)||z1(t)&&!Xs(t)&&e===_h||t===Qs&&s}function OL(e){return Wu(e)&&e!==cd&&!Xs(e)&&e!==pL&&e!==yL&&e!==Qs&&e!==ME&&e!==BE&&e!==FE&&e!==UE&&e!==HE&&e!==_h&&e!==hL&&e!==mL&&e!==oL&&e!==vL&&e!==gL&&e!==bL&&e!==dL&&e!==cL&&e!==fL&&e!==EL&&e!==TL}function RL(e){return!Xs(e)&&e!==Qs}function Du(e,t){var i=e.charCodeAt(t),u;return i>=55296&&i<=56319&&t+1<e.length&&(u=e.charCodeAt(t+1),u>=56320&&u<=57343)?(i-55296)*1024+u-56320+65536:i}function PE(e){var t=/^\n* /;return t.test(e)}var zE=1,Nh=2,jE=3,qE=4,ma=5;function kL(e,t,i,u,s,o,c,h){var d,p=0,y=null,b=!1,v=!1,T=u!==-1,A=-1,C=OL(Du(e,0))&&RL(Du(e,e.length-1));if(t||c)for(d=0;d<e.length;p>=65536?d+=2:d++){if(p=Du(e,d),!Wu(p))return ma;C=C&&j1(p,y,h),y=p}else{for(d=0;d<e.length;p>=65536?d+=2:d++){if(p=Du(e,d),p===Xu)b=!0,T&&(v=v||d-A-1>u&&e[A+1]!==" ",A=d);else if(!Wu(p))return ma;C=C&&j1(p,y,h),y=p}v=v||T&&d-A-1>u&&e[A+1]!==" "}return!b&&!v?C&&!c&&!s(e)?zE:o===Ku?ma:Nh:i>9&&PE(e)?ma:c?o===Ku?ma:Nh:v?qE:jE}function LL(e,t,i,u,s){e.dump=(function(){if(t.length===0)return e.quotingType===Ku?'""':"''";if(!e.noCompatMode&&(AL.indexOf(t)!==-1||xL.test(t)))return e.quotingType===Ku?'"'+t+'"':"'"+t+"'";var o=e.indent*Math.max(1,i),c=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),h=u||e.flowLevel>-1&&i>=e.flowLevel;function d(p){return NL(e,p)}switch(kL(t,h,e.indent,c,d,e.quotingType,e.forceQuotes&&!u,s)){case zE:return t;case Nh:return"'"+t.replace(/'/g,"''")+"'";case jE:return"|"+q1(t,e.indent)+Y1(P1(t,o));case qE:return">"+q1(t,e.indent)+Y1(P1(DL(t,c),o));case ma:return'"'+IL(t)+'"';default:throw new Pt("impossible error: invalid scalar style")}})()}function q1(e,t){var i=PE(e)?String(t):"",u=e[e.length-1]===`
`,s=u&&(e[e.length-2]===`
`||e===`
`),o=s?"+":u?"":"-";return i+o+`
`}function Y1(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function DL(e,t){for(var i=/(\n+)([^\n]*)/g,u=(function(){var p=e.indexOf(`
`);return p=p!==-1?p:e.length,i.lastIndex=p,V1(e.slice(0,p),t)})(),s=e[0]===`
`||e[0]===" ",o,c;c=i.exec(e);){var h=c[1],d=c[2];o=d[0]===" ",u+=h+(!s&&!o&&d!==""?`
`:"")+V1(d,t),s=o}return u}function V1(e,t){if(e===""||e[0]===" ")return e;for(var i=/ [^ ]/g,u,s=0,o,c=0,h=0,d="";u=i.exec(e);)h=u.index,h-s>t&&(o=c>s?c:h,d+=`
`+e.slice(s,o),s=o+1),c=h;return d+=`
`,e.length-s>t&&c>s?d+=e.slice(s,c)+`
`+e.slice(c+1):d+=e.slice(s),d.slice(1)}function IL(e){for(var t="",i=0,u,s=0;s<e.length;i>=65536?s+=2:s++)i=Du(e,s),u=Mt[i],!u&&Wu(i)?(t+=e[s],i>=65536&&(t+=e[s+1])):t+=u||SL(i);return t}function ML(e,t,i){var u="",s=e.tag,o,c,h;for(o=0,c=i.length;o<c;o+=1)h=i[o],e.replacer&&(h=e.replacer.call(i,String(o),h)),(hr(e,t,h,!1,!1)||typeof h>"u"&&hr(e,t,null,!1,!1))&&(u!==""&&(u+=","+(e.condenseFlow?"":" ")),u+=e.dump);e.tag=s,e.dump="["+u+"]"}function G1(e,t,i,u){var s="",o=e.tag,c,h,d;for(c=0,h=i.length;c<h;c+=1)d=i[c],e.replacer&&(d=e.replacer.call(i,String(c),d)),(hr(e,t+1,d,!0,!0,!1,!0)||typeof d>"u"&&hr(e,t+1,null,!0,!0,!1,!0))&&((!u||s!=="")&&(s+=Ch(e,t)),e.dump&&Xu===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=o,e.dump=s||"[]"}function BL(e,t,i){var u="",s=e.tag,o=Object.keys(i),c,h,d,p,y;for(c=0,h=o.length;c<h;c+=1)y="",u!==""&&(y+=", "),e.condenseFlow&&(y+='"'),d=o[c],p=i[d],e.replacer&&(p=e.replacer.call(i,d,p)),hr(e,t,d,!1,!1)&&(e.dump.length>1024&&(y+="? "),y+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),hr(e,t,p,!1,!1)&&(y+=e.dump,u+=y));e.tag=s,e.dump="{"+u+"}"}function FL(e,t,i,u){var s="",o=e.tag,c=Object.keys(i),h,d,p,y,b,v;if(e.sortKeys===!0)c.sort();else if(typeof e.sortKeys=="function")c.sort(e.sortKeys);else if(e.sortKeys)throw new Pt("sortKeys must be a boolean or a function");for(h=0,d=c.length;h<d;h+=1)v="",(!u||s!=="")&&(v+=Ch(e,t)),p=c[h],y=i[p],e.replacer&&(y=e.replacer.call(i,p,y)),hr(e,t+1,p,!0,!0,!0)&&(b=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,b&&(e.dump&&Xu===e.dump.charCodeAt(0)?v+="?":v+="? "),v+=e.dump,b&&(v+=Ch(e,t)),hr(e,t+1,y,!0,b)&&(e.dump&&Xu===e.dump.charCodeAt(0)?v+=":":v+=": ",v+=e.dump,s+=v));e.tag=o,e.dump=s||"{}"}function Q1(e,t,i){var u,s,o,c,h,d;for(s=i?e.explicitTypes:e.implicitTypes,o=0,c=s.length;o<c;o+=1)if(h=s[o],(h.instanceOf||h.predicate)&&(!h.instanceOf||typeof t=="object"&&t instanceof h.instanceOf)&&(!h.predicate||h.predicate(t))){if(i?h.multi&&h.representName?e.tag=h.representName(t):e.tag=h.tag:e.tag="?",h.represent){if(d=e.styleMap[h.tag]||h.defaultStyle,DE.call(h.represent)==="[object Function]")u=h.represent(t,d);else if(IE.call(h.represent,d))u=h.represent[d](t,d);else throw new Pt("!<"+h.tag+'> tag resolver accepts not "'+d+'" style');e.dump=u}return!0}return!1}function hr(e,t,i,u,s,o,c){e.tag=null,e.dump=i,Q1(e,i,!1)||Q1(e,i,!0);var h=DE.call(e.dump),d=u,p;u&&(u=e.flowLevel<0||e.flowLevel>t);var y=h==="[object Object]"||h==="[object Array]",b,v;if(y&&(b=e.duplicates.indexOf(i),v=b!==-1),(e.tag!==null&&e.tag!=="?"||v||e.indent!==2&&t>0)&&(s=!1),v&&e.usedDuplicates[b])e.dump="*ref_"+b;else{if(y&&v&&!e.usedDuplicates[b]&&(e.usedDuplicates[b]=!0),h==="[object Object]")u&&Object.keys(e.dump).length!==0?(FL(e,t,e.dump,s),v&&(e.dump="&ref_"+b+e.dump)):(BL(e,t,e.dump),v&&(e.dump="&ref_"+b+" "+e.dump));else if(h==="[object Array]")u&&e.dump.length!==0?(e.noArrayIndent&&!c&&t>0?G1(e,t-1,e.dump,s):G1(e,t,e.dump,s),v&&(e.dump="&ref_"+b+e.dump)):(ML(e,t,e.dump),v&&(e.dump="&ref_"+b+" "+e.dump));else if(h==="[object String]")e.tag!=="?"&&LL(e,e.dump,t,o,d);else{if(h==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new Pt("unacceptable kind of an object to dump "+h)}e.tag!==null&&e.tag!=="?"&&(p=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?p="!"+p:p.slice(0,18)==="tag:yaml.org,2002:"?p="!!"+p.slice(18):p="!<"+p+">",e.dump=p+" "+e.dump)}return!0}function UL(e,t){var i=[],u=[],s,o;for(Oh(e,i,u),s=0,o=u.length;s<o;s+=1)t.duplicates.push(i[u[s]]);t.usedDuplicates=new Array(o)}function Oh(e,t,i){var u,s,o;if(e!==null&&typeof e=="object")if(s=t.indexOf(e),s!==-1)i.indexOf(s)===-1&&i.push(s);else if(t.push(e),Array.isArray(e))for(s=0,o=e.length;s<o;s+=1)Oh(e[s],t,i);else for(u=Object.keys(e),s=0,o=u.length;s<o;s+=1)Oh(e[u[s]],t,i)}function HL(e,t){t=t||{};var i=new CL(t);i.noRefs||UL(e,i);var u=e;return i.replacer&&(u=i.replacer.call({"":u},"",u)),hr(i,0,u,!0,!0)?i.dump+`
`:""}var PL=HL,zL={dump:PL};function fd(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var YE=Rt,VE=iE,GE=sE,QE=dE,XE=mE,KE=ld,WE=LE.load,ZE=LE.loadAll,JE=zL.dump,$E=Pt,eT={binary:EE,float:hE,map:lE,null:oE,pairs:vE,set:AE,timestamp:bE,bool:cE,int:fE,merge:yE,omap:TE,seq:uE,str:aE},tT=fd("safeLoad","load"),nT=fd("safeLoadAll","loadAll"),rT=fd("safeDump","dump"),jL={Type:YE,Schema:VE,FAILSAFE_SCHEMA:GE,JSON_SCHEMA:QE,CORE_SCHEMA:XE,DEFAULT_SCHEMA:KE,load:WE,loadAll:ZE,dump:JE,YAMLException:$E,types:eT,safeLoad:tT,safeLoadAll:nT,safeDump:rT};const ah=Object.freeze(Object.defineProperty({__proto__:null,CORE_SCHEMA:XE,DEFAULT_SCHEMA:KE,FAILSAFE_SCHEMA:GE,JSON_SCHEMA:QE,Schema:VE,Type:YE,YAMLException:$E,default:jL,dump:JE,load:WE,loadAll:ZE,safeDump:rT,safeLoad:tT,safeLoadAll:nT,types:eT},Symbol.toStringTag,{value:"Module"})),qL="modulepreload",YL=function(e){return"/cs-333/"+e},X1={},uh=function(t,i,u){let s=Promise.resolve();if(i&&i.length>0){let p=function(y){return Promise.all(y.map(b=>Promise.resolve(b).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};var c=p;document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),d=h?.nonce||h?.getAttribute("nonce");s=p(i.map(y=>{if(y=YL(y),y in X1)return;X1[y]=!0;const b=y.endsWith(".css"),v=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${v}`))return;const T=document.createElement("link");if(T.rel=b?"stylesheet":qL,b||(T.as="script"),T.crossOrigin="",T.href=y,d&&T.setAttribute("nonce",d),document.head.appendChild(T),b)return new Promise((A,C)=>{T.addEventListener("load",A),T.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${y}`)))})}))}function o(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return s.then(h=>{for(const d of h||[])d.status==="rejected"&&o(d.reason);return t().catch(o)})};class VL{constructor(){this.isDevelopment=!1,this.compiledFiles=null,this.stats=null}initialize(t){if(!t||!t.compiledFiles){console.warn("⚠️ CompiledContentService: No compiled content provided, will use dynamic fetching only");return}this.compiledFiles=t.compiledFiles,this.stats=t.stats,console.log("📚 CompiledContentService initialized with:",this.stats),console.log("🔧 Development mode:",this.isDevelopment)}async getText(t){try{return this.isDevelopment?await this.fetchDynamically(t):await this.getCompiledText(t)}catch(i){console.error(`CompiledContentService: Error getting text for ${t}:`,i);try{return this.isDevelopment?(console.log("Development fetch failed, trying compiled content..."),await this.getCompiledText(t)):(console.log("Compiled content failed, trying dynamic fetch..."),await this.fetchDynamically(t))}catch(u){throw console.error(`CompiledContentService: Both methods failed for ${t}:`,u),new Error(`File not found: ${t}`)}}}async getCompiledText(t){if(!this.compiledFiles)throw new Error("CompiledContentService not initialized. Call initialize() with compiled content first.");const i=this.cleanPath(t);console.log(`CompiledContentService: Getting compiled text for path: ${i}`);const u=this.pathToKey(i),s=this.compiledFiles[u];if(!s)throw new Error(`File not found in compiled content: ${i}`);const o=s.module;return typeof o=="string"?o:JSON.stringify(o,null,2)}async fetchDynamically(t){const i=this.cleanPath(t);console.log(`CompiledContentService: Fetching dynamically: ${i}`);const u=`/textbook/${i}`,s=await fetch(u);if(!s.ok)throw new Error(`HTTP ${s.status}: Failed to fetch ${u}`);return await s.text()}async getYaml(t){try{if(this.isDevelopment){const h=await this.fetchDynamically(t);return(await uh(()=>Promise.resolve().then(()=>ah),[])).load(h)}if(!this.compiledFiles)throw new Error("CompiledContentService not initialized. Call initialize() with compiled content first.");const i=this.cleanPath(t);console.log(`CompiledContentService: Getting compiled YAML for path: ${i}`);const u=this.pathToKey(i),s=this.compiledFiles[u];if(!s)throw new Error(`File not found in compiled content: ${i}`);const o=s.module;return typeof o=="object"?o:(await uh(()=>Promise.resolve().then(()=>ah),void 0)).load(o)}catch(i){console.error(`CompiledContentService: Error getting YAML for ${t}:`,i);try{if(this.isDevelopment){console.log("Development YAML fetch failed, trying compiled content...");const u=this.cleanPath(t),s=this.pathToKey(u),o=this.compiledFiles?this.compiledFiles[s]:null;if(o&&typeof o.module=="object")return o.module}else{console.log("Compiled YAML failed, trying dynamic fetch...");const u=await this.fetchDynamically(t);return(await uh(()=>Promise.resolve().then(()=>ah),void 0)).load(u)}}catch(u){console.error(`CompiledContentService: Both YAML methods failed for ${t}:`,u)}throw new Error(`YAML file not found: ${t}`)}}async getTextFromMultiplePaths(t){for(const u of t)try{console.log(`CompiledContentService: Trying path: ${u}`);const s=await this.getText(u);if(s.trim().startsWith("<!doctype html>")||s.trim().startsWith("<html")){console.log(`CompiledContentService: Got HTML response for ${u}, trying next...`);continue}return console.log(`CompiledContentService: Successfully found content at: ${u}`),{text:s,path:u}}catch(s){console.log(`CompiledContentService: Path ${u} not found:`,s.message);continue}const i=`Failed to find compiled content at any of ${t.length} paths: ${t.join(", ")}`;throw console.error(i),new Error(i)}listFiles(t=null){if(!this.compiledFiles)return console.warn("CompiledContentService not initialized"),[];const i=Object.keys(this.compiledFiles);return t?i.filter(u=>{const s=this.compiledFiles[u];return s&&s.type===t}):i}getStats(){return this.stats||{yamlCount:0,markdownCount:0,totalCount:0}}cleanPath(t){let i=t.replace(/^.*\/textbook\//,"");return i=i.replace(/[?&]_cb=[^&]*/,"").replace(/[?&]v=[^&]*/,""),i=i.split("?")[0],i.length>1&&i.endsWith("/")&&(i=i.slice(0,-1)),i=i.replace(/\/+/g,"/"),i}pathToKey(t){return t}hasFile(t){try{const i=this.cleanPath(t),u=this.pathToKey(i);return this.compiledFiles&&this.compiledFiles.hasOwnProperty(u)}catch{return!1}}}const Rn=new VL,GL=[{key:"answer_kindergarten",label:"🧸 Tell Me Like I'm 5"},{key:"answer_3rd_grade",label:"📚 A little bit harder please..."},{key:"answer_7th_grade",label:"🤔 Even harder!"},{key:"answer_high_school",label:"🎓 I want to impress people"},{key:"answer_undergraduate",label:"🧠 I want to go to grad school"}],K1=(e,t)=>{if(!e||!t||t.length===0)return e;const i=t.map(h=>({word:h.word,definition:h.definition,regex:new RegExp(`\\b${h.word.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}\\b`,"gi")}));i.sort((h,d)=>d.word.length-h.word.length);let u=e;const s=[];let o=0;return i.forEach(({word:h,definition:d,regex:p})=>{let y;for(;(y=p.exec(u))!==null;){const b=`__VOCAB_${o}__`;s.push({placeholder:b,word:y[0],definition:d,index:o}),u=u.substring(0,y.index)+b+u.substring(y.index+y[0].length),p.lastIndex=0,o++;break}p.lastIndex=0}),s.length===0?e:u.split(/(__VOCAB_\d+__)/).map((h,d)=>{const p=s.find(y=>y.placeholder===h);return p?O.jsx("span",{className:"vocab-word",title:p.definition,children:p.word},`vocab-${p.index}-${d}`):h})};function QL({yamlPath:e,currentPath:t,concept_filter:i}){const[u,s]=H.useState([]),[o,c]=H.useState(!0),[h,d]=H.useState(null),[p,y]=H.useState({});if(H.useEffect(()=>{e&&(async()=>{try{c(!0),console.log("ExamQuestions: yamlPath =",e),console.log("ExamQuestions: currentPath =",t),console.log("ExamQuestions: concept_filter =",i);let A;if(e.startsWith("content/"))A=e,console.log("ExamQuestions: Using absolute path:",A);else{const F=t&&t.includes(".")?t.split("/").slice(0,-1).join("/"):t;A=F?`${F}/${e}`:e,console.log("ExamQuestions: Using relative path. directoryPath:",F,"fullPath:",A)}console.log("ExamQuestions: Loading concept map from path:",A);const C=await Rn.getYaml(A),R=[];if(C?.concept_map)C.concept_map.forEach(F=>{F.concepts&&F.concepts.forEach(ee=>{if(console.log("ExamQuestions: Checking concept:",ee.name,"against filter:",i),i&&ee.name!==i){console.log("ExamQuestions: Skipping concept due to filter mismatch");return}console.log("ExamQuestions: Including concept:",ee.name),ee.exam_questions&&ee.exam_questions.forEach(ne=>{R.includes(ne)||R.push(ne)})})});else if(C?.questions&&C.questions[0]?.file)C.questions.forEach(F=>{R.includes(F.file)||R.push(F.file)});else if(C?.questions){s(C.questions);return}if(console.log("ExamQuestions: Total question files found:",R.length,R),R.length===0){s([]);return}const N=R.map(async F=>{let ee;if(e.startsWith("content/"))ee=`${e.substring(0,e.lastIndexOf("/"))}/${F}`;else{const G=t&&t.includes(".")?t.split("/").slice(0,-1).join("/"):t;ee=G?`${G}/${F}`:F}return console.log("ExamQuestions: Loading question file from path:",ee),await Rn.getYaml(ee)}),D=await Promise.all(N);s(D)}catch(A){d(A.message)}finally{c(!1)}})()},[e,t]),o)return O.jsx("div",{children:"Loading questions..."});if(h)return O.jsxs("div",{children:["Error loading questions: ",h]});const b=(T,A)=>{const C=`${T}-${A}`;y(R=>({...R,[C]:!R[C]}))},v=T=>{const A=`${T}-videos`;y(C=>({...C,[A]:!C[A]}))};return O.jsx("div",{className:"exam-questions",children:u.map((T,A)=>O.jsxs("div",{className:"question-item",children:[O.jsx("h3",{children:T.question}),T.answer&&O.jsx("div",{className:"answer main-answer",children:O.jsx("p",{children:K1(T.answer,T.vocab_answer)})}),T.example_videos&&T.example_videos.length>0&&O.jsxs("div",{className:"example-videos-section",children:[O.jsxs("button",{className:"accordion-header videos-toggle",onClick:()=>v(T.id||A),"aria-expanded":p[`${T.id||A}-videos`]||!1,children:[O.jsxs("span",{className:"accordion-title",children:["📺 Example Videos",O.jsx("span",{className:"video-count-badge",children:T.example_videos.length})]}),O.jsx("span",{className:`accordion-icon ${p[`${T.id||A}-videos`]?"expanded":""}`,children:"▼"})]}),p[`${T.id||A}-videos`]&&O.jsx("div",{className:"accordion-content videos-content",children:T.example_videos.map((C,R)=>{const N=C.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)?.[1];return N?O.jsx("div",{className:"video-container",children:O.jsx("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${N}`,title:`Example video ${R+1}`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},R):null})})]}),O.jsx("div",{className:"answer-levels",children:GL.map(({key:C,label:R})=>{if(!T[C])return null;const N=T.id||A,D=`${N}-${C}`,F=p[D]||!1,ee=C.replace("answer_","vocab_"),ne=T[ee]||[];return O.jsxs("div",{className:"answer-accordion",children:[O.jsxs("button",{className:"accordion-header",onClick:()=>b(N,C),"aria-expanded":F,children:[O.jsx("span",{className:"accordion-title",children:R}),O.jsx("span",{className:`accordion-icon ${F?"expanded":""}`,children:"▼"})]}),F&&O.jsx("div",{className:"accordion-content",children:O.jsx("div",{className:"answer",children:O.jsx("p",{children:K1(T[C],ne)})})})]},C)})}),T.topics&&T.topics.length>0&&O.jsxs("div",{className:"topics",children:[O.jsx("strong",{children:"Topics:"})," ",T.topics.join(", ")]})]},T.id||A))})}function XL({yamlPath:e,currentPath:t}){console.log("VocabList component mounted with:",{yamlPath:e,currentPath:t});const[i,u]=H.useState({}),[s,o]=H.useState(!0),[c,h]=H.useState(null),[d,p]=H.useState({});H.useEffect(()=>{e&&(async()=>{try{o(!0);const A=t?t.split("/").slice(0,-1).join("/"):"",C=A?`${A}/${e}`:e,R=await Rn.getYaml(C);if(R?.questions&&R.questions[0]?.file){const N=R.questions.map(async ee=>{const ne=A?`${A}/${ee.file}`:ee.file;return await Rn.getYaml(ne)}),D=await Promise.all(N),F=y(D);u(F)}else{const N=R?.questions||[],D=y(N);u(D)}}catch(A){h(A.message)}finally{o(!1)}})()},[e,t]);const y=T=>{const A={},C=["vocab_answer","vocab_kindergarten","vocab_3rd_grade","vocab_7th_grade","vocab_high_school","vocab_undergraduate"],R={vocab_answer:"General",vocab_kindergarten:"Kindergarten",vocab_3rd_grade:"7th Grade",vocab_7th_grade:"High School",vocab_high_school:"Undergraduate",vocab_undergraduate:"Postgraduate"};return T.forEach((N,D)=>{C.forEach(F=>{const ee=N[F];ee&&Array.isArray(ee)&&(ee.length>0&&typeof ee[0]=="object"&&ee[0].word?ee.forEach(ne=>{ne.word&&ne.definition&&(A[ne.word]||(A[ne.word]=[]),A[ne.word].push({definition:ne.definition,level:R[F],questionId:N.id||D+1,context:F}))}):ee.forEach(ne=>{A[ne]||(A[ne]=[]),A[ne].push({definition:`[Definition needed for ${ne}]`,level:R[F],questionId:N.id||D+1,context:F})}))})}),A},b=T=>{p(A=>({...A,[T]:!A[T]}))};if(s)return O.jsx("div",{className:"vocab-list loading",children:"Loading vocabulary..."});if(c)return O.jsxs("div",{className:"vocab-list error",children:["Error loading vocabulary: ",c]});const v=Object.keys(i).sort((T,A)=>T.toLowerCase().localeCompare(A.toLowerCase()));return O.jsxs("div",{className:"vocab-list",children:[O.jsx("h2",{children:"Vocabulary"}),O.jsxs("div",{className:"vocab-count",children:[v.length," terms found"]}),O.jsx("div",{className:"vocab-items",children:v.map(T=>{const A=i[T],C=d[T]||!1,R=A.length>1;return O.jsxs("div",{className:"vocab-item",children:[O.jsxs("button",{className:"vocab-header",onClick:()=>b(T),"aria-expanded":C,children:[O.jsx("span",{className:"vocab-word",children:T}),R&&O.jsxs("span",{className:"definition-count",children:["(",A.length," definitions)"]}),O.jsx("span",{className:`vocab-icon ${C?"expanded":""}`,children:"▼"})]}),C&&O.jsx("div",{className:"vocab-content",children:A.map((N,D)=>O.jsxs("div",{className:"vocab-definition",children:[O.jsx("div",{className:"definition-text",children:N.definition}),O.jsxs("div",{className:"definition-meta",children:[O.jsx("span",{className:"definition-level",children:N.level}),O.jsxs("span",{className:"definition-question",children:["Question ",N.questionId]})]})]},D))})]},T)})})]})}function KL({yamlPath:e,currentPath:t}){console.log("ConceptMap: Component mounted with:",{yamlPath:e,currentPath:t});const[i,u]=H.useState([]),[s,o]=H.useState({}),[c,h]=H.useState(!0),[d,p]=H.useState(null),[y,b]=H.useState({}),[v,T]=H.useState({});H.useEffect(()=>{console.log("ConceptMap: useEffect triggered with yamlPath:",e),(async()=>{try{console.log("ConceptMap: Starting fetchConceptMap..."),h(!0);let D;if(e.startsWith("content/"))D=e,console.log("ConceptMap: Using absolute path:",D);else{const de=t&&t.includes(".")?t.split("/").slice(0,-1).join("/"):t;D=de?`${de}/${e}`:e,console.log("ConceptMap: Using relative path. directoryPath:",de,"fullPath:",D)}console.log("ConceptMap: Loading from path:",D);const F=await Rn.getYaml(D);if(console.log("ConceptMap: Loaded concept map data:",F),console.log("ConceptMap: Type of conceptMapData:",typeof F),console.log("ConceptMap: Keys in conceptMapData:",Object.keys(F||{})),console.log("ConceptMap: Has concept_map property:",!!F?.concept_map),!F?.concept_map)throw console.error("ConceptMap: Missing concept_map array. Full data:",F),new Error("Invalid concept map format: missing concept_map array");u(F.concept_map);const ee={};F.concept_map.forEach((de,Y)=>{ee[Y]=!0}),b(ee);const ne=new Set;F.concept_map.forEach(de=>{de.concepts?.forEach(Y=>{Y.exam_questions?.forEach(oe=>{ne.add(oe)})})});const G=Array.from(ne).map(async de=>{let Y;if(e.startsWith("content/"))Y=`${e.substring(0,e.lastIndexOf("/"))}/${de}`;else{const oe=t&&t.includes(".")?t.split("/").slice(0,-1).join("/"):t;Y=oe?`${oe}/${de}`:de}try{console.log("ConceptMap: Loading question file from path:",Y);const oe=await Rn.getYaml(Y);return console.log("ConceptMap: Loaded question data for:",de,oe),[de,oe]}catch(oe){return console.warn(`ConceptMap: Error loading question file ${de}:`,oe),[de,null]}}),se=await Promise.all(G),ye=Object.fromEntries(se);console.log("Loaded question details:",ye),o(ye)}catch(D){console.error("Error fetching concept map:",D),p(D.message)}finally{h(!1)}})()},[e,t]);const A=N=>{b(D=>({...D,[N]:!D[N]}))},C=(N,D)=>{const F=`${N}-${D}`;T(ee=>({...ee,[F]:!ee[F]}))},R=N=>{const D=s[N];return D&&D.question||N};return c?O.jsx("div",{className:"concept-map-loading",children:"Loading concept map..."}):d?O.jsxs("div",{className:"concept-map-error",children:["Error loading concept map: ",d]}):i.length?O.jsx("div",{className:"concept-map",children:O.jsx("div",{className:"concept-categories",children:i.map((N,D)=>O.jsxs("div",{className:"concept-category",children:[O.jsxs("button",{className:`category-header ${y[D]?"expanded":""}`,onClick:()=>A(D),children:[O.jsx("span",{className:"category-title",children:N.category}),O.jsx("span",{className:"expand-icon",children:y[D]?"−":"+"})]}),y[D]&&O.jsx("div",{className:"category-content",children:N.concepts?.map((F,ee)=>O.jsx("div",{className:"concept-item",children:O.jsxs("div",{className:"concept-content",children:[O.jsxs("div",{className:"concept-header",children:[O.jsx("span",{className:"concept-name",children:F.name}),F.description&&O.jsxs("span",{className:"concept-description",children:["(",F.description,")"]})]}),F.exam_questions?.length>0&&O.jsxs("div",{className:"concept-questions",children:[O.jsxs("button",{className:`questions-header ${v[`${D}-${ee}`]?"expanded":""}`,onClick:()=>C(D,ee),children:[O.jsxs("span",{children:[F.exam_questions.length," question",F.exam_questions.length!==1?"s":""]}),O.jsx("span",{className:"expand-icon",children:v[`${D}-${ee}`]?"−":"+"})]}),v[`${D}-${ee}`]&&O.jsx("ul",{className:"questions-list",children:F.exam_questions.map((ne,G)=>O.jsx("li",{className:"question-item",children:O.jsx("div",{className:"question-header",children:O.jsx("span",{className:"question-title",children:R(ne)})})},G))})]})]})},ee))})]},D))})}):O.jsx("div",{className:"concept-map-empty",children:"No concept map data available."})}function iT({url:e,title:t,width:i=560,height:u=315,timestamps:s=[]}){const o=H.useRef(null),[c,h]=H.useState(!1),p=(T=>{const A=/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/,C=T.match(A);return C?C[1]:null})(e);if(!p)return O.jsx("div",{className:"youtube-error",children:O.jsxs("p",{children:["Invalid YouTube URL: ",e]})});const y=T=>{const A=T.split(":").map(C=>parseInt(C,10));return A.length===2?A[0]*60+A[1]:A.length===3?A[0]*3600+A[1]*60+A[2]:0},b=T=>{if(!c){console.warn("YouTube player not ready yet");return}const A=y(T);if(o.current&&o.current.contentWindow){const C={event:"command",func:"seekTo",args:[A,!0]};o.current.contentWindow.postMessage(JSON.stringify(C),"https://www.youtube.com")}};H.useEffect(()=>{const T=o.current;if(T){const A=()=>{T.contentWindow.postMessage('{"event":"listening","id":"ytplayer"}',"https://www.youtube.com"),h(!0)};return T.addEventListener("load",A),()=>T.removeEventListener("load",A)}},[]);const v=`https://www.youtube.com/embed/${p}?enablejsapi=1&origin=${window.location.origin}`;return O.jsxs("div",{className:"youtube-container",children:[O.jsx("iframe",{ref:o,width:i,height:u,src:v,title:t||"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0}),t&&O.jsx("p",{className:"youtube-caption",children:t}),s&&s.length>0&&Array.isArray(s)&&O.jsxs("div",{className:"youtube-timestamps",children:[O.jsx("h4",{children:"Jump to:"}),O.jsx("div",{className:"timestamp-list",children:s.map((T,A)=>O.jsx("button",{className:"timestamp-button",onClick:()=>b(T),title:`Jump to ${T}`,children:O.jsx("span",{className:"timestamp-time",children:T})},A))})]})]})}function lh({href:e,children:t,currentPath:i,...u}){const s=Ih();if(!e)return O.jsx("a",{...u,children:t});if(e.startsWith("http")||e.startsWith("mailto")||e.startsWith("#"))return O.jsx("a",{href:e,...u,target:"_blank",rel:"noopener noreferrer",children:t});const o=e.startsWith("/textbook")||e.startsWith("/wiki"),c=!e.startsWith("/")&&!e.includes("://");if(o||c){let h;if(o)h=e.startsWith("/wiki")?e.replace("/wiki","/textbook"):e;else if(c){const d=i==="index"?"":i;h=`${d?`/textbook/${d}`:"/textbook"}/${e}`}return O.jsx("a",{...u,href:h,onClick:d=>{d.preventDefault(),s(h)},style:{cursor:"pointer"},children:t})}return O.jsx("a",{href:e,...u,target:"_blank",rel:"noopener noreferrer",children:t})}function WL(e,t){console.log("renderContentWithComponents called with content:",e.substring(0,200)+"..."),console.log("textbookPath:",t);const i=/\{\{(ExamQuestions|VocabList|ConceptMap|YouTube):([^}\s]+)([^}]*)\}\}/g,u=[];let s=0,o;for(;(o=i.exec(e))!==null;){const c=o[1],h=o[2],d=o[3]?o[3].trim():"";console.log(`Found ${c} marker:`,o[0],"File:",h,"Props:",d);const y=(b=>{const v={};if(!b)return v;const T=/(\w+):\s*(\[[^\]]*\]|"[^"]*"|'[^']*'|\S+)/g;let A;for(;(A=T.exec(b))!==null;){const C=A[1];let R=A[2];if(R.startsWith("[")&&R.endsWith("]"))try{v[C]=JSON.parse(R)}catch(N){console.error(`Failed to parse array for ${C}:`,R,N),v[C]=R}else if(R.startsWith('"')&&R.endsWith('"')||R.startsWith("'")&&R.endsWith("'"))v[C]=R.slice(1,-1);else try{v[C]=JSON.parse(R)}catch{v[C]=R}}return v})(d);if(o.index>s){const b=e.slice(s,o.index);u.push(O.jsx(mi,{remarkPlugins:[di],rehypePlugins:[th],components:{a:v=>O.jsx(lh,{...v,currentPath:t})},children:b},`md-${u.length}`))}c==="ExamQuestions"?u.push(O.jsx(QL,{yamlPath:h,currentPath:t,...y},`eq-${u.length}`)):c==="VocabList"?u.push(O.jsx(XL,{yamlPath:h,currentPath:t,...y},`vl-${u.length}`)):c==="ConceptMap"?(console.log("Creating ConceptMap component with props:",{yamlPath:h,currentPath:t,...y}),u.push(O.jsx(KL,{yamlPath:h,currentPath:t,...y},`cm-${u.length}`))):c==="YouTube"&&u.push(O.jsx(iT,{url:h,...y},`yt-${u.length}`)),s=o.index+o[0].length}if(s<e.length){const c=e.slice(s);u.push(O.jsx(mi,{remarkPlugins:[di],rehypePlugins:[th],components:{a:h=>O.jsx(lh,{...h,currentPath:t})},children:c},`md-${u.length}`))}return console.log("renderContentWithComponents: parts.length =",u.length),u.length>0?u:[O.jsx(mi,{remarkPlugins:[di],rehypePlugins:[th],components:{a:c=>O.jsx(lh,{...c,currentPath:t})},children:e},"default")]}function ZL(){const{"*":e}=hA(),[t,i]=H.useState(""),[u,s]=H.useState(!0),[o,c]=H.useState(null),h=e||"index";return H.useEffect(()=>{(async()=>{s(!0),c(null);try{let p;if(h==="index")p=await Rn.getText("index.md");else{const y=[`${h}.md`,`${h}/index.md`];p=(await Rn.getTextFromMultiplePaths(y)).text}i(p)}catch(p){c(p.message)}finally{s(!1)}})()},[h]),u?O.jsx("div",{className:"textbook-page loading",children:O.jsx("div",{className:"textbook-header",children:O.jsx("h1",{children:"Loading..."})})}):o?O.jsxs("div",{className:"textbook-page error",children:[O.jsx("div",{className:"textbook-header",children:O.jsx("h1",{children:"Page Not Found"})}),O.jsxs("div",{className:"textbook-content",children:[O.jsx("p",{children:"The requested textbook page could not be found."}),O.jsxs("p",{children:[O.jsx("strong",{children:"Path:"})," ",h]}),O.jsxs("p",{children:[O.jsx("strong",{children:"Error:"})," ",o]})]})]}):O.jsxs("div",{className:"textbook-page",children:[O.jsx("div",{className:"textbook-header",children:O.jsxs("div",{className:"textbook-breadcrumb",children:[O.jsx("span",{children:"Textbook"}),h!=="index"&&O.jsxs("span",{children:[" / ",h.replace(/\//g," / ")]})]})}),O.jsx("div",{className:"textbook-content",children:WL(t,h)})]})}function JL({questions:e,onStartExam:t,courseTitle:i="Course Exam"}){const[u,s]=H.useState(100),[o,c]=H.useState(!0),[h,d]=H.useState(!0),p=[...new Set(e.map(T=>T.chapter))].sort((T,A)=>T-A),y=()=>{const T=[];p.forEach(C=>{const R=e.filter(F=>F.chapter===C),N=Math.ceil(R.length*(u/100)),D=o?R.slice(0,N):[...R].sort(()=>Math.random()-.5).slice(0,N);T.push(...D)});const A=o?T.sort((C,R)=>C.chapter-R.chapter||C.order-R.order):T.sort(()=>Math.random()-.5);t({questions:A,settings:{showAnswerToggle:h}})},b=T=>e.filter(A=>A.chapter===T).length,v=p.reduce((T,A)=>{const C=b(A);return T+Math.ceil(C*(u/100))},0);return O.jsx("div",{className:"exam-dashboard-simple",children:O.jsxs("div",{className:"exam-overview",children:[O.jsx("h2",{children:i}),O.jsxs("div",{className:"exam-controls",children:[O.jsxs("div",{className:"control-group",children:[O.jsxs("label",{htmlFor:"percentage-slider",children:["Questions per Chapter: ",O.jsxs("strong",{children:[u,"%"]})]}),O.jsx("input",{id:"percentage-slider",type:"range",min:"10",max:"100",step:"10",value:u,onChange:T=>s(parseInt(T.target.value)),className:"percentage-slider"}),O.jsxs("div",{className:"slider-labels",children:[O.jsx("span",{children:"10%"}),O.jsx("span",{children:"50%"}),O.jsx("span",{children:"100%"})]})]}),O.jsx("div",{className:"control-group",children:O.jsxs("label",{className:"toggle-container",children:[O.jsx("input",{type:"checkbox",checked:o,onChange:T=>c(T.target.checked)}),O.jsx("span",{className:"toggle-text",children:"Sorted by Chapter"}),O.jsx("div",{className:"switch"})]})}),O.jsx("div",{className:"control-group",children:O.jsxs("label",{className:"toggle-container",children:[O.jsx("input",{type:"checkbox",checked:h,onChange:T=>d(T.target.checked)}),O.jsx("span",{className:"toggle-text",children:"Show Answer Button"}),O.jsx("div",{className:"switch"})]})})]}),O.jsxs("div",{className:"exam-details",children:[O.jsxs("div",{className:"detail-item",children:[O.jsx("strong",{children:v}),O.jsx("span",{children:"Questions"})]}),O.jsxs("div",{className:"detail-item",children:[O.jsx("strong",{children:p.length}),O.jsx("span",{children:"Chapters"})]}),O.jsxs("div",{className:"detail-item",children:[O.jsxs("strong",{children:[u,"%"]}),O.jsx("span",{children:"From Each"})]})]}),O.jsxs("div",{className:"chapter-preview",children:[O.jsx("h3",{children:"Chapter Breakdown"}),O.jsx("div",{className:"chapter-grid",children:p.map(T=>{const A=b(T),C=Math.ceil(A*(u/100));return O.jsxs("div",{className:"chapter-preview-item",children:[O.jsxs("span",{className:"chapter-number",children:["Ch. ",T]}),O.jsxs("span",{className:"question-count",children:[C," / ",A]})]},T)})})]}),O.jsx("button",{className:"generate-exam-btn",onClick:y,disabled:e.length===0,children:"Generate Exam"})]})})}const aT=H.forwardRef(({onChange:e,initialData:t,width:i=800,height:u=400},s)=>{const o=H.useRef(null),[c,h]=H.useState(!1),[d,p]=H.useState(null);H.useEffect(()=>{const A=o.current;if(!A)return;const C=A.getContext("2d");if(C.lineWidth=3,C.lineCap="round",C.lineJoin="round",C.strokeStyle="#000000",p(C),C.clearRect(0,0,A.width,A.height),t){const R=new Image;R.onload=()=>{C.drawImage(R,0,0)},R.src=t}},[t]);const y=A=>{if(!d)return;const C=o.current.getBoundingClientRect(),R=A.clientX-C.left,N=A.clientY-C.top;d.beginPath(),d.moveTo(R,N),h(!0)},b=A=>{if(!c||!d)return;const C=o.current.getBoundingClientRect(),R=A.clientX-C.left,N=A.clientY-C.top;d.lineTo(R,N),d.stroke()},v=()=>{if(c){h(!1),d.closePath();const A=o.current.toDataURL();e&&e(A)}},T=()=>{if(d&&o.current){d.clearRect(0,0,o.current.width,o.current.height);const A=o.current.toDataURL();e&&e(A)}};return H.useImperativeHandle(s,()=>({clear:T,getDataURL:()=>o.current?.toDataURL()||""})),O.jsx("canvas",{ref:o,width:i,height:u,onMouseDown:y,onMouseMove:b,onMouseUp:v,onMouseLeave:v,style:{border:"1px solid #ddd",borderRadius:"4px",cursor:"crosshair",touchAction:"none",backgroundColor:"#ffffff"}})});aT.displayName="DrawingCanvas";function $L({questions:e,settings:t,onEndExam:i}){const[u,s]=H.useState(0),[o,c]=H.useState({}),[h,d]=H.useState(!1),[p,y]=H.useState(!1),[b,v]=H.useState(0),[T,A]=H.useState(Date.now()),[C,R]=H.useState("canvas"),N=H.useRef(null);H.useEffect(()=>{const me=setInterval(()=>{v(ae=>ae+1)},1e3);return()=>clearInterval(me)},[]),H.useEffect(()=>{A(Date.now())},[u]),H.useEffect(()=>{const me=ae=>{ae.target.tagName==="TEXTAREA"||ae.target.tagName==="INPUT"||(ae.key==="ArrowRight"?(ae.preventDefault(),ye()):ae.key==="ArrowLeft"&&(ae.preventDefault(),de()))};return window.addEventListener("keydown",me),()=>window.removeEventListener("keydown",me)},[u,e.length]);const D=e[u],F=u===e.length-1,ee=o.hasOwnProperty(D.id),ne=(me,ae=null)=>{c(le=>({...le,[D.id]:{answer:me,canvasData:ae,timeSpent:Date.now()-T}}))},G=me=>{const ae=o[D.id]?.answer||"";ne(ae,me)},se=()=>{N.current&&N.current.clear()},ye=()=>{F||s(me=>me+1)},de=()=>{u>0&&s(me=>me-1)},Y=()=>{d(!0)},oe=()=>{const me=Object.keys(o).length,ae=e.length;return{answered:me,total:ae,percentage:Math.round(me/ae*100)}},fe=me=>{const ae=Math.floor(me/60),le=me%60;return`${ae}:${le.toString().padStart(2,"0")}`};if(h){const me=oe();return O.jsxs("div",{className:"exam-results",children:[O.jsx("h2",{children:"Exam Complete!"}),O.jsxs("div",{className:"score-summary",children:[O.jsxs("div",{className:"score-circle",children:[O.jsxs("span",{className:"score-percentage",children:[me.percentage,"%"]}),O.jsx("span",{className:"score-label",children:"Completed"})]}),O.jsxs("div",{className:"score-details",children:[O.jsxs("p",{children:["Questions Answered: ",me.answered," / ",me.total]}),O.jsxs("p",{children:["Time Spent: ",fe(b)]}),O.jsxs("p",{children:["Average per Question: ",fe(Math.round(b/e.length))]})]})]}),O.jsxs("div",{className:"question-review",children:[O.jsx("h3",{children:"Your Responses"}),e.map((ae,le)=>{const z=o[ae.id];return O.jsxs("div",{className:"question-result",children:[O.jsx("div",{className:"question-header",children:O.jsxs("h4",{children:["Question ",le+1," (Chapter ",ae.chapter,")"]})}),O.jsx("div",{className:"question-text",children:O.jsx(mi,{remarkPlugins:[di],children:ae.question})}),O.jsxs("div",{className:"answer-comparison",children:[O.jsxs("div",{className:"user-answer",children:[O.jsx("strong",{children:"Your Answer:"}),z?.canvasData&&O.jsx("div",{className:"canvas-preview",children:O.jsx("img",{src:z.canvasData,alt:"Canvas drawing",style:{maxWidth:"100%",border:"1px solid #ddd",borderRadius:"4px"}})}),O.jsx("p",{children:z?z.answer||(z.canvasData?"(Canvas drawing above)":""):"Not answered"})]}),O.jsxs("div",{className:"correct-answer",children:[O.jsx("strong",{children:"Model Answer:"}),O.jsx(mi,{remarkPlugins:[di],children:ae.answer})]})]}),z&&O.jsxs("p",{className:"time-spent",children:["Time spent: ",fe(Math.round(z.timeSpent/1e3))]})]},ae.id)})]}),O.jsx("button",{className:"return-dashboard-btn",onClick:i,children:"Return to Dashboard"})]})}return O.jsxs("div",{className:"exam-interface",children:[O.jsxs("div",{className:"exam-header",children:[O.jsxs("div",{className:"progress-info",children:[O.jsxs("span",{children:["Question ",u+1," of ",e.length]}),O.jsx("div",{className:"progress-bar",children:O.jsx("div",{className:"progress-fill",style:{width:`${(u+1)/e.length*100}%`}})})]}),O.jsx("div",{className:"time-info",children:O.jsxs("span",{children:["Time: ",fe(b)]})})]}),O.jsxs("div",{className:"question-section",children:[O.jsxs("div",{className:"question-meta",children:[O.jsxs("span",{className:"chapter-tag",children:["Chapter ",D.chapter]}),t?.showAnswerToggle&&O.jsx("button",{onClick:()=>y(!p),className:`show-answer-toggle ${p?"active":""}`,children:p?"Hide Answer":"Show Answer"})]}),O.jsx("div",{className:"question-text",children:O.jsx(mi,{remarkPlugins:[di],children:D.question})}),t?.showAnswerToggle&&p&&O.jsxs("div",{className:"answer-reveal",children:[O.jsx("strong",{children:"Answer:"}),O.jsx(mi,{remarkPlugins:[di],children:D.answer}),D.example_videos&&D.example_videos.length>0&&O.jsxs("div",{className:"answer-videos",children:[O.jsx("strong",{children:"Example Videos:"}),D.example_videos.map((me,ae)=>O.jsx(iT,{url:me},ae))]})]}),O.jsxs("div",{className:"answer-section",children:[O.jsxs("div",{className:"input-mode-toggle",children:[O.jsx("button",{className:`mode-btn ${C==="canvas"?"active":""}`,onClick:()=>R("canvas"),children:"Canvas"}),O.jsx("button",{className:`mode-btn ${C==="text"?"active":""}`,onClick:()=>R("text"),children:"Text"})]}),C==="canvas"?O.jsxs("div",{className:"canvas-container",children:[O.jsx("div",{className:"canvas-controls",children:O.jsx("button",{onClick:se,className:"canvas-btn",children:"✕ Clear"})}),O.jsx(aT,{ref:N,onChange:G,initialData:o[D.id]?.canvasData,width:800,height:400})]}):O.jsx("textarea",{placeholder:"Your notes can go here...",value:o[D.id]?.answer||"",onChange:me=>ne(me.target.value,o[D.id]?.canvasData),rows:"6",className:"answer-input"})]})]}),O.jsxs("div",{className:"navigation-section",children:[O.jsxs("div",{className:"nav-buttons",children:[O.jsx("button",{onClick:de,disabled:u===0,className:"nav-btn prev-btn",children:"← Previous"}),F?O.jsx("button",{onClick:Y,className:"submit-btn",disabled:Object.keys(o).length===0,children:"Submit Exam"}):O.jsx("button",{onClick:ye,className:"nav-btn next-btn",children:"Next →"})]}),O.jsx("div",{className:"question-status",children:O.jsxs("p",{children:[ee?"✓ Answered":"○ Not answered",ee&&` (${o[D.id].answer.length} characters)`]})})]}),O.jsxs("div",{className:"exam-overview",children:[O.jsx("h3",{children:"Question Overview"}),O.jsx("div",{className:"question-grid",children:e.map((me,ae)=>O.jsx("button",{className:`question-nav-item ${ae===u?"current":""} ${o[e[ae].id]?"answered":"unanswered"}`,onClick:()=>s(ae),children:ae+1},ae))})]})]})}const eD=["content/overviews/00-zero-computers/concept-map.yml","content/overviews/01-one-computer/concept-map.yml","content/overviews/02-a-few-computers/concept-map.yml","content/overviews/03-a-lot-of-computers/concept-map.yml"],tD=e=>{let t=e.match(/chapter-(\d+)/);return t?parseInt(t[1]):(t=e.match(/(\d+)-/),t?parseInt(t[1]):0)},nD=e=>{let t=e.match(/chapter-(\d+)/);return t?`Chapter ${parseInt(t[1])}`:(t=e.match(/\d+-(.*?)\/concept-map\.yml$/),t?t[1].replace(/-/g," ").replace(/\b\w/g,i=>i.toUpperCase()):"Unknown Chapter")},rD=async(e=eD)=>{const t=[];for(const i of e)try{console.log("Loading concept map:",i);const u=await Rn.getYaml(i);if(!u?.concept_map){console.warn(`Invalid concept map format: ${i}`);continue}const s=[];let o=0;u.concept_map.forEach(p=>{p.concepts&&p.concepts.forEach(y=>{y.exam_questions&&y.exam_questions.forEach(b=>{s.find(v=>v.file===b)||s.push({file:b,order:o++})})})});const c=i.substring(0,i.lastIndexOf("/")),h=tD(i),d=nD(i);for(const{file:p,order:y}of s)try{const b=`${c}/${p}`,T={...await Rn.getYaml(b),chapter:h,chapterTitle:d,id:`ch${h}-${p.replace(".yml","")}`,conceptMapPath:i,questionFile:p,order:y};t.push(T)}catch(b){console.error(`Error loading question file ${p}:`,b)}}catch(u){console.error(`Error loading concept map ${i}:`,u)}return t.sort((i,u)=>i.chapter!==u.chapter?i.chapter-u.chapter:i.order-u.order),console.log(`Loaded ${t.length} questions from ${e.length} concept maps`),t},iD={"content/chapter-01/concept-map.yml":{type:"yaml",module:{concept_map:[{category:"Mathematics of Algorithm Complexity",concepts:[{name:"Big picture",description:"Table of content for the material.",exam_questions:["questions/data-structure-inventory-datums-to-graphs.yml"]},{name:"Big-O Notation",description:"Mathematics of algorithm analysis",exam_questions:["questions/big-o-definition.yml","questions/linear-search-complexity.yml","questions/find-minimum-complexity.yml","questions/duplicate-detection-complexity.yml","questions/matrix-operations-complexity.yml"]},{name:"Basic Sorting Algorithms",description:"Insertion Sort and Selection Sort algorithms, their implementations, and analyses.",exam_questions:["questions/insertion-sort-implementation-and-analysis.yml","questions/selection-sort-implementation-and-analysis.yml"]}]}]}},"content/chapter-01/questions/big-o-definition.yml":{type:"yaml",module:{id:"ch1-big-o-definition",type:"short-answer",chapter:1,question:`**Implement an algorithm that returns the sum of the numbers from 1 to n.**

**Level 0** Discuss the big-picture significance of this problem in the context of computer science.

**Level 1** Discuss the intuition behind this problem by giving example inputs, describing relevant data structures; give the pseudocode for one or more algorithms and step through them.

**Level 2** Implement your algorithm(s) in a language of your choice.

**Level 3** Analyze/prove the space and time complexity of your algorithm(s), and re-discuss this problem in the larger context of computer science.
`,answer:"Big-O notation is a mathematical notation used to describe the upper bound of an algorithm's time or space complexity in terms of input size. It's important because it allows us to compare algorithm efficiency independent of hardware, predict scalability, and make informed decisions about which algorithms to use for different problem sizes.",answer_kindergarten:"Big-O is like counting how many steps it takes to do something. If you have more toys to sort, it takes more time. Big-O helps us figure out how much longer things take when we have more stuff to work with.",answer_3rd_grade:"Big-O notation is a way to measure how fast or slow a computer program runs. It tells us if a program will still work well when we give it lots of data to handle. For example, some programs get really slow with more data, while others stay pretty fast.",answer_7th_grade:"Big-O notation describes how the running time or memory usage of an algorithm grows as the input size increases. It helps programmers choose the best algorithm by showing which ones will be efficient for large amounts of data. Common complexities include O(1) for constant time, O(n) for linear time, and O(n²) for quadratic time.",answer_high_school:"Big-O notation provides an asymptotic upper bound on algorithm complexity, describing worst-case performance as input size approaches infinity. It abstracts away constant factors and lower-order terms, focusing on the dominant growth rate. This mathematical framework enables objective comparison of algorithms and helps predict scalability issues before implementation.",answer_undergraduate:"Big-O notation is a formal mathematical construct from asymptotic analysis that characterizes functions according to their growth rates. In computational complexity theory, it provides a tight upper bound on resource consumption (time or space) as a function of input size n. The notation facilitates complexity class categorization (P, NP, etc.) and enables rigorous algorithm analysis through recurrence relations and amortized analysis techniques.",topics:["Algorithm Analysis","Computational Complexity","Performance"],vocab_answer:[{word:"algorithm",definition:"A step-by-step procedure for solving a problem or accomplishing a task"},{word:"complexity",definition:"A measure of the resources (time or space) required by an algorithm"},{word:"scalability",definition:"The ability of a system to handle growing amounts of work efficiently"}],vocab_kindergarten:[{word:"steps",definition:"The individual actions you take to complete a task"},{word:"sort",definition:"To arrange things in a specific order"}],vocab_3rd_grade:[{word:"data",definition:"Information that a computer program works with"},{word:"efficient",definition:"Doing something quickly without wasting time or resources"}],vocab_7th_grade:[{word:"linear",definition:"Growing at a constant rate - if input doubles, time doubles"},{word:"quadratic",definition:"Growing as the square of the input - if input doubles, time increases by 4x"}],vocab_high_school:[{word:"asymptotic",definition:"Describing behavior as a value approaches infinity"},{word:"constant factors",definition:"Fixed multipliers that don't depend on input size"}],vocab_undergraduate:[{word:"recurrence relations",definition:"Mathematical equations that define a function in terms of its value at smaller inputs"},{word:"amortized analysis",definition:"Analyzing average time per operation over a sequence of operations"}]}},"content/chapter-01/questions/data-structure-inventory-datums-to-graphs.yml":{type:"yaml",module:{id:1,question:`Give an overview of this course in terms of the data structures and algorithms covered.

**Data structures** From simplest (datums) to most complex (graphs).

**Algorithms** From O(1) to O(2^n) complexity.
`,answer:"TODO: Add answer",topics:["data structures","algorithms","inventory"],type:"conceptual",points:5,difficulty:"medium",learning_objectives:[]}},"content/chapter-01/questions/duplicate-detection-complexity.yml":{type:"yaml",module:{id:"ch1-duplicate-detection-complexity",type:"short-answer",chapter:1,question:`**Write an algorithm that performs two tasks on an array:**

* Checks if the array contains any duplicate values
* Returns the total count of elements in the array

**Level 0** Discuss why analyzing compound algorithms (those that perform multiple tasks) requires understanding dominant terms in Big-O notation.

**Level 1** Provide example inputs and give pseudocode for both tasks. Step through your algorithm showing how the duplicate check requires comparing elements, while counting is straightforward.

**Level 2** Implement your algorithm in a language of your choice. Make it clear which part does the duplicate checking and which part does the counting.

**Level 3** Analyze the time complexity of each task separately, then combine them. Show why O(n² + n) simplifies to O(n²) by demonstrating that the n² term dominates as n grows large.
`,answer:`**Complexity Analysis:**
- Duplicate checking (nested loops): O(n²) - must compare each element with every other element
- Counting elements: O(n) - single pass through array
- Combined: O(n² + n)

**Why O(n² + n) = O(n²):**
- For large n, n² grows much faster than n
- Example: n=100 gives 10,000 + 100 = 10,100 ≈ 10,000
- Example: n=1000 gives 1,000,000 + 1,000 = 1,001,000 ≈ 1,000,000
- The ratio (n² + n)/n² = 1 + 1/n approaches 1 as n → ∞
- Therefore, the n term becomes negligible, and we drop it

**Key Insight:** When combining operations with different complexities, the dominant (fastest-growing) term determines the overall complexity. Lower-order terms become insignificant for large inputs and are dropped in Big-O analysis.
`,topics:["Algorithm Analysis","Big-O","Dominant Terms","Nested Loops","Asymptotic Simplification"]}},"content/chapter-01/questions/find-minimum-complexity.yml":{type:"yaml",module:{id:"ch1-find-minimum-complexity",type:"short-answer",chapter:1,question:`**Write an algorithm that finds the minimum value in an unsorted array.**

**Level 0** Discuss the big-picture significance of this problem and how it relates to Big-O (O), Big-Omega (Ω), and Big-Theta (Θ) notation. Explain why this problem is different from linear search in terms of complexity bounds.

**Level 1** Give example inputs and pseudocode for finding the minimum value; step through your algorithm.

**Level 2** Implement your algorithm in a language of your choice.

**Level 3** Analyze this algorithm using Ω, O, and Θ notation. Explain why all three notations converge to the same bound for this algorithm, unlike linear search.
`,answer:`**Finding Minimum Analysis:**
- Must examine every element: Ω(n) lower bound
- Never need more than one pass: O(n) upper bound
- Tight bound: Θ(n) - always exactly n comparisons

This algorithm shows when best case equals worst case, giving a tight Θ bound. Unlike linear search, we cannot terminate early - the minimum could be anywhere, including the last position. Every element must be checked to guarantee correctness. This demonstrates that when an algorithm's best and worst cases coincide, we can describe it with a tight Θ bound.

**Key Insight:** Big-Omega describes the best case (lower bound), Big-O describes the worst case (upper bound), and Big-Theta describes a tight bound when both converge. Finding minimum always requires Θ(n) work because you cannot skip any elements.
`,topics:["Algorithm Analysis","Asymptotic Notation","Big-O","Big-Omega","Big-Theta","Array Algorithms"]}},"content/chapter-01/questions/insertion-sort-implementation-and-analysis.yml":{type:"yaml",module:{id:"ch1-insertion-sort-implementation-and-analysis",type:"short-answer",chapter:1,question:`**Implement insertion sort to sort an array of integers in ascending order.**

**Level 0** Discuss the big-picture significance of insertion sort and why it's an important algorithm to understand despite not being the fastest sorting algorithm.

**Level 1** Provide example inputs showing best-case (already sorted) and worst-case (reverse sorted) scenarios. Give the pseudocode for insertion sort and step through it with a small example array.

**Level 2** Implement insertion sort in a language of your choice.

**Level 3** Analyze the time complexity for best case, worst case, and average case. Explain why insertion sort is adaptive (performs better on partially sorted data) and stable (preserves relative order of equal elements).
`,answer:`**Insertion Sort Analysis:**
- Best case: O(n) - array already sorted, only comparisons needed
- Worst case: O(n²) - array reverse sorted, maximum shifts required
- Average case: O(n²) - roughly half the elements need to be shifted on average

**Key Properties:**
- **Adaptive**: Performance improves with partially sorted data because fewer shifts are needed
- **Stable**: Equal elements maintain their original relative order
- **In-place**: Requires only O(1) extra space
- **Online**: Can sort data as it arrives

**Why It Matters:** Despite quadratic worst-case complexity, insertion sort is often the fastest algorithm for small arrays (< 10-20 elements) and nearly sorted data. Many advanced algorithms like Timsort use insertion sort as a subroutine for small subarrays.
`,topics:["Sorting Algorithms","Insertion Sort","Algorithm Analysis","Adaptive Algorithms","Stable Sorting"]}},"content/chapter-01/questions/linear-search-complexity.yml":{type:"yaml",module:{id:"ch1-linear-search-complexity",type:"short-answer",chapter:1,question:`**Write an algorithm that searches for a target value in an unsorted array.**

**Level 0** Discuss the big-picture significance of this problem and how it relates to Big-O (O), Big-Omega (Ω), and Big-Theta (Θ) notation.

**Level 1** Discuss the intuition behind this problem by giving example inputs (including best case and worst case scenarios); give the pseudocode for a linear search algorithm and step through it.

**Level 2** Implement your algorithm in a language of your choice.

**Level 3** Analyze the best-case, worst-case, and average-case time complexity using Ω, O, and Θ notation. Explain why this algorithm demonstrates the difference between these three notations.
`,answer:`**Linear Search Analysis:**
- Best case: Ω(1) - target found at first position
- Worst case: O(n) - target at last position or not found
- Average case: Θ(n) - on average, check half the array

This algorithm demonstrates how Ω (lower bound) and O (upper bound) can differ significantly. The best case is dramatically better than the worst case, showing that Big-O and Big-Omega describe different scenarios. The average case is Θ(n) because we expect to examine roughly n/2 elements on average, which is still linear growth.
`,topics:["Algorithm Analysis","Asymptotic Notation","Big-O","Big-Omega","Big-Theta","Linear Search"]}},"content/chapter-01/questions/matrix-operations-complexity.yml":{type:"yaml",module:{id:"ch1-matrix-operations-complexity",type:"short-answer",chapter:1,question:`**Write an algorithm that performs two tasks on an n×n matrix:**
1. Initialize the matrix by filling all positions with sequential values (1, 2, 3, ...)
2. Search the first row for a specific target value

**Level 0** Discuss why this problem clearly demonstrates the concept of dominant terms when analyzing algorithms with multiple operations.

**Level 1** Provide example inputs (e.g., a 3×3 matrix) and give pseudocode for both initialization and searching. Step through your algorithm showing how many operations each task requires.

**Level 2** Implement your algorithm in a language of your choice, clearly separating the initialization phase from the search phase.

**Level 3** Analyze the time complexity of each operation. Show that initialization requires O(n²) operations (filling n² positions) while searching requires O(n) operations (checking n elements). Explain why O(n² + n) simplifies to O(n²).
`,answer:`**Complexity Analysis:**
- Matrix initialization: O(n²) - must fill n×n = n² positions
- First row search: O(n) - linear search through n elements
- Combined: O(n² + n)

**Why O(n² + n) = O(n²):**
- The initialization dominates because it operates on n² elements
- The search operates on only n elements
- Mathematically: n² + n = n(n + 1) = O(n²)
- Visual example for n=10: 100 cells to fill + 10 cells to search = 110 operations ≈ 100
- Visual example for n=100: 10,000 cells to fill + 100 cells to search = 10,100 operations ≈ 10,000
- As n increases, the +n term becomes less than 1% of the total cost

**Key Insight:** This problem makes the dominance relationship visually clear - you can see that filling an entire n×n grid requires far more work than examining a single row. The matrix structure helps visualize why quadratic terms dominate linear terms in Big-O analysis.
`,topics:["Algorithm Analysis","Big-O","Dominant Terms","Matrix Operations","Asymptotic Simplification"]}},"content/chapter-01/questions/selection-sort-implementation-and-analysis.yml":{type:"yaml",module:{id:"ch1-selection-sort-implementation-and-analysis",type:"short-answer",chapter:1,question:`**Write a selection sort algorithm that sorts an array of integers in ascending order.**

**Level 0** Discuss the big-picture significance of selection sort and how it differs conceptually from insertion sort. Explain when selection sort might be preferred over other algorithms.

**Level 1** Provide example inputs and give the pseudocode for selection sort. Step through your algorithm with a small example array, showing how the minimum element is selected in each pass.

**Level 2** Implement selection sort in a language of your choice.

**Level 3** Analyze the time complexity for best case, worst case, and average case. Explain why selection sort always performs O(n²) comparisons regardless of input, and discuss why it minimizes the number of swaps (writes) compared to other simple sorting algorithms.
`,answer:`**Selection Sort Analysis:**
- Best case: O(n²) - must scan entire unsorted portion to find minimum
- Worst case: O(n²) - same as best case
- Average case: O(n²) - no variation in comparison count

**Key Properties:**
- **Not adaptive**: Performance doesn't improve with partially sorted data
- **Not stable**: May change relative order of equal elements
- **In-place**: Requires only O(1) extra space
- **Minimal swaps**: Performs exactly n-1 swaps, fewer than any comparison-based sort

**Why It Matters:** Selection sort's key advantage is minimizing write operations. When writing to memory is expensive (e.g., flash memory, EEPROM), selection sort's O(n) swaps can be preferable to insertion sort's O(n²) shifts. It also demonstrates the distinction between comparisons (O(n²)) and writes (O(n)).
`,topics:["Sorting Algorithms","Selection Sort","Algorithm Analysis","Write Complexity","Comparison-Based Sorting"]}},"content/chapter-02/concept-map.yml":{type:"yaml",module:{concept_map:[{category:"Recursion, Trees, and Graphs",concepts:[{name:"Recursion",description:"Recursive algorithms and data structures",exam_questions:["questions/iterative-vs-recursive.yml","questions/fibonacci-call-tree-optimizations-and-analysis.yml"]},{name:"Tree Structures",description:"Binary search trees, self-balancing trees, and multi-way trees",exam_questions:["questions/bst-avl-redblack-comparison.yml","questions/btree-analysis.yml"]}]},{category:"Graphs",concepts:[{name:"Graph Fundamentals",description:"Graph representation and basic traversal algorithms",exam_questions:["questions/graph-representation.yml","questions/graph-traversal-and-connectivity.yml"]},{name:"Shortest Paths",description:"Finding shortest paths in weighted and unweighted graphs",exam_questions:["questions/dijkstra-algorithm.yml"]},{name:"Minimum Spanning Trees",description:"Constructing minimum spanning trees with greedy algorithms",exam_questions:["questions/minimum-spanning-trees.yml"]}]}]}},"content/chapter-02/questions/bst-avl-redblack-comparison.yml":{type:"yaml",module:{id:"ch2-bst-avl-redblack-comparison",type:"short-answer",chapter:2,question:`**Compare and contrast binary search tree structures: Binary Search Trees (BSTs) vs AVL Trees**

**Level 0** Discuss why self-balancing trees were developed and their significance in computer science. Explain the fundamental trade-off between simplicity and guaranteed performance.

**Level 1** For each tree type (BST and AVL):
- Describe the defining property or invariant
- Explain the balancing mechanism (if any)
- Provide a simple example showing insertion and any rebalancing that occurs
- Step through the differences with concrete examples

**Level 2** Implement insertion for AVL Trees in a language of your choice, showing how balancing is maintained.

**Level 3** Analyze and compare:
- Height guarantees and how they affect lookup performance
- Insertion/deletion cost trade-offs (number of rotations required)
- When to choose each tree type based on workload characteristics (read-heavy vs write-heavy)
- Real-world applications where each is used
`,answer:`**Defining Properties:**
- **BST**: Left subtree < node < right subtree. No balancing guarantee.
- **AVL**: BST + strict balance: |height(left) - height(right)| ≤ 1 for every node

**Balancing Mechanisms:**
- **BST**: None - can degrade to O(n) height (linked list)
- **AVL**: Single and double rotations when balance factor exceeds ±1

**Height Guarantees:**
- **BST**: O(n) worst case, O(log n) average case
- **AVL**: Height ≤ 1.44 log n (strictest balance → fastest lookups)

**Performance Trade-offs:**
- **AVL**: Best for read-heavy workloads - strict balance means fastest lookups but more rotations on writes (up to O(log n) rotations per insert/delete)
- **BST**: Only use when data is known to be random or for educational purposes

**Real-World Uses:**
- **AVL**: In-memory databases, dictionaries where lookup speed dominates
- **BST**: Teaching tool to understand tree concepts before adding balancing complexity
`,topics:["Binary Search Trees","AVL Trees","Balanced Trees","Tree Rotations","Performance Trade-offs"]}},"content/chapter-02/questions/btree-analysis.yml":{type:"yaml",module:{id:"ch2-btree-analysis",type:"short-answer",chapter:2,question:`**Implement and explain B-Trees.**

**Level 0** Discuss why B-Trees are significant, both practically and theoretically. 

**Level 1** Step through insertions on a B-Tree and demonstrate how splitting works.

**Level 2** Implement B-Tree insertion in a language of your choice.

**Level 3** Analyze B-Trees:

- Height in terms of branching factor: O(log_b n) where b depends on node size
- Why large branching factors minimize disk I/O (fewer node accesses)
- Trade-off between disk access cost vs in-node search cost
- Compare to binary balanced trees (AVL/Red-Black) in terms of disk performance
- Explain why databases (MySQL, PostgreSQL) and file systems (NTFS, HFS+) use B-Trees or variants (B+-Trees)
`,answer:`**Defining Properties:**
- **Multi-way search tree**: Each node holds multiple keys (1 to 2t-1 keys where t is minimum degree)
- **Sorted keys**: Keys within node are sorted, enabling binary search within node
- **All leaves at same level**: Guarantees balanced height
- **Children between keys**: Node with k keys has k+1 children, maintaining search property

**Why B-Trees Matter:**
The critical insight is **disk I/O cost dominance**. Reading one disk block takes ~10ms (millions of CPU cycles), so minimizing disk accesses is paramount. B-Trees pack many keys per node (matching disk block size, often 4KB-64KB), dramatically reducing tree height.

**Height Analysis:**
- Height = O(log_b n) where b is branching factor (keys per node)
- Example: With b=100, one million keys requires only height 3
- Compare to binary tree: height 20 for one million keys
- Fewer levels = fewer disk reads = dramatically faster

**Performance Characteristics:**
- **Disk I/O**: O(log_b n) disk accesses for search/insert/delete
- **In-node search**: Binary search within node is fast (in-memory)
- **Trade-off**: Larger nodes reduce height but increase in-node search time (acceptable since in-memory search is cheap)

**Real-World Applications:**
- **Databases**: MySQL InnoDB, PostgreSQL use B+-Trees (variant where data lives in leaves)
- **File Systems**: NTFS, HFS+, ext4 use B-Trees for directory indexing
- **Reason**: Optimal for disk-based storage where minimizing I/O is more important than CPU efficiency

**Key Insight**: B-Trees are engineered for storage hierarchy - they match tree node size to disk block size, making each disk read as valuable as possible. This is why they dominate external storage despite binary trees being simpler.
`,topics:["B-Trees","Disk-Based Data Structures","Database Indexes","File Systems","I/O Optimization","Multi-way Search Trees"]}},"content/chapter-02/questions/dijkstra-algorithm.yml":{type:"yaml",module:{id:"ch2-dijkstra-algorithm",type:"short-answer",chapter:2,question:`**Implement Dijkstra's algorithm for shortest paths in weighted graphs.**

**Level 0** Discuss why Dijkstra's algorithm is significant and how it extends BFS to handle weighted graphs.

**Level 1** For sample weighted graphs, demonstrate Dijkstra's algorithm showing the priority queue and distance updates. Give pseudocode.

**Level 2** Implement Dijkstra's algorithm in a language of your choice, including path reconstruction.

**Level 3** Analyze the time complexity with different priority queue implementations. Explain why negative edge weights break the algorithm and what alternatives exist.
`,answer:`**Dijkstra's Algorithm:**
Uses a priority queue to always process the vertex with minimum distance. Maintains distances and predecessors like BFS, but updates distances when shorter paths are found.

**Time Complexity:**
- Binary heap: O((V+E) log V) - best for sparse graphs
- Simple array: O(V²) - competitive for dense graphs
- Fibonacci heap: O(E + V log V) - theoretically optimal

**Negative Edge Limitation:**
Dijkstra assumes once a vertex is finalized (extracted from priority queue), its distance is optimal. Negative edges can create shorter paths through "already finalized" vertices, breaking this assumption. For negative edges, use Bellman-Ford (O(VE)) or detect negative cycles.

**Significance:**
Dijkstra extends BFS's shortest path finding to weighted graphs, enabling GPS routing, network packet routing, and any system where connections have varying costs.
`,topics:["Dijkstra's Algorithm","Shortest Paths","Priority Queue","Algorithm Limitations","Negative Edges","Path Reconstruction","Predecessor Array"]}},"content/chapter-02/questions/fibonacci-call-tree-optimizations-and-analysis.yml":{type:"yaml",module:{id:"ch2-fibonacci-call-tree-optimizations-and-analysis",type:"short-answer",chapter:2,question:`**Write three implementations of the Fibonacci function: (1) naive recursive, (2) memoized recursive, and (3) iterative bottom-up.**

**Level 0** Discuss why the naive Fibonacci recursion is a classic example of algorithmic inefficiency and why this problem is fundamental to understanding dynamic programming. Explain the broader significance of memoization as an optimization technique.

**Level 1** For naive recursion: Draw or describe the call tree for fib(5) and identify repeated computations. For memoization: Explain how caching eliminates redundant calls. For iteration: Describe the bottom-up approach. Provide pseudocode for all three versions and step through them with small examples.

**Level 2** Implement all three versions in a language of your choice.

**Level 3** Analyze the time and space complexity of each approach:
- Write the recurrence relation T(n) for naive recursion and explain why it leads to O(2ⁿ) time
- Explain how memoization reduces complexity to O(n) time with O(n) space
- Show that iteration achieves O(n) time with O(1) space
- Discuss the trade-offs between these approaches and when each is appropriate
`,answer:`**Complexity Analysis:**

**1. Naive Recursion:**
- Time: O(2ⁿ) - Recurrence T(n) = T(n-1) + T(n-2) + O(1) grows exponentially
- Space: O(n) - Maximum call stack depth
- Problem: Recomputes same values exponentially many times (fib(3) computed 2 times, fib(2) computed 3 times in fib(5))

**2. Memoized Recursion:**
- Time: O(n) - Each fib(i) computed exactly once, then cached
- Space: O(n) - Cache storage + O(n) call stack
- Benefit: Elegant code with dramatic performance improvement through caching

**3. Iterative Bottom-Up:**
- Time: O(n) - Single loop computing values in order
- Space: O(1) - Only need two variables (previous two values)
- Benefit: Most efficient approach, no recursion overhead

**Key Insights:**
- Call tree visualization shows why naive approach is O(2ⁿ): full binary tree of height n has ~2ⁿ nodes
- Memoization transforms overlapping subproblems into single computations
- This pattern (naive → memoized → bottom-up) applies to all dynamic programming problems
- Choice depends on: code clarity vs space efficiency vs performance requirements
`,topics:["Recursion","Dynamic Programming","Memoization","Call Trees","Recurrence Relations","Algorithm Optimization"]}},"content/chapter-02/questions/graph-representation.yml":{type:"yaml",module:{id:"ch2-graph-representation",type:"short-answer",chapter:2,question:`**Compare data structures for storing graphs.**

**Level 0** Discuss the big-picture significance of graph representation and why it's important to consider various graph data structure representations carefully. 

**Level 1**  Illustrate data structure(s) for storing graphs and discuss their space and time trade-offs for common operations like adding an edge, checking for an edge, and retrieving all neighbors of a node.  IDEA: Use a social network with 1 million users and 75 million friendships as a running example.

**Level 2** Implement your data structure(s) in your preferred language. Each should support: adding an undirected edge between two nodes, checking if two nodes are connected by an edge, and retrieving all neighbors of a given node.

**Level 3** Analyze the time and space complexity for your data structure(s) and the circumstances under which one might be preferred over another. 
`,answer:`**Level 0**: The representation determines whether your system uses hundreds of megabytes or terabytes of memory—the difference between feasible and impossible. It also affects whether displaying a user's feed requires scanning millions of entries or just their actual friends. Poor choices lead to systems that either can't fit in memory or have multi-second response times for simple operations.

**Level 1**: 
Two natural approaches emerge:

**2D array approach** (5×5 = 25 entries): Store a V×V boolean grid where grid[i][j] = true if i and j are friends
Example: [[0,1,0,1,0], [1,0,1,0,0], [0,1,0,1,1], [1,0,1,0,1], [0,0,1,1,0]]

**Array-of-lists approach** (5 arrays): Store V lists where list[i] contains all friends of user i
Example: [0:[1,3], 1:[0,2], 2:[1,3,4], 3:[0,2,4], 4:[2,3]]

areFriends operations: Grid checks [i][j] in O(1). List searches list[i] in O(degree(i)).
getFriends operations: Grid scans entire row in O(V). List returns list[i] in O(1) access + O(degree) to iterate.

Space for 1M users, 75M edges: Grid = 1M × 1M = 1TB. Lists = 1M + 150M entries = ~150MB.

Pseudocode for grid.areFriends(u,v): return grid[u][v]
Pseudocode for lists.getFriends(u): return lists[u]

**Level 2**: Implementation uses 2D array/boolean[][] for grid approach, array of lists/List<Integer>[] for list approach. Both handle undirected edges symmetrically. Tests verify: empty graphs, single user, correct friendship detection, complete friend retrieval. Performance tests on 1000-user graph confirm dramatic space differences (~1M vs ~3200 memory units) and operation trade-offs.

**Level 3**: 
Space complexity proof: Grid stores V² booleans = Θ(V²). Lists store V list containers + 2E edge references (for undirected) = Θ(V+E).

Time complexity proof: Grid[i][j] is direct array access = O(1). Lists must search list[i] = O(|list[i]|) = O(degree(i)). Getting friends: grid scans entire row = O(V); lists return container immediately = O(1) access + O(degree) to iterate.

Critical insight: For sparse graphs (E << V²), lists win on both space and the operation that matters most. Graph algorithms iterate over neighbors, not check individual edges. The pattern "for each friend of u" takes O(V²) with grids (must check all V slots for each user) but O(V+E) with lists (only visit actual friends).

Real-world impact: Social networks (E ≈ 150V), road maps (E ≈ 3V), web graphs (E ≈ 10V) are all sparse. Lists save 100-1000× memory while making algorithms faster. Grids only justify themselves for dense graphs (E ≈ V²) where most pairs are connected, or for workloads dominated by "are these two connected?" queries (rare in practice). This is why graph databases, routing systems, and network analysis tools universally adopt list-based representations (often called "adjacency lists") as their default.
`,topics:["Graph Representation","Adjacency Matrix","Adjacency List","Sparse Graphs","Space-Time Trade-offs"]}},"content/chapter-02/questions/graph-traversal-and-connectivity.yml":{type:"yaml",module:{id:"ch2-graph-traversal-connectivity",type:"short-answer",chapter:2,question:`**Implement BFS and DFS algorithms to traverse a graph.**

**Level 0** Discuss the big-picture significance of graph traversal and why both BFS and DFS are fundamental algorithms.

**Level 1** For sample graphs, demonstrate both algorithms and give pseudocode.  Explain how BFS can be used to find shortest paths in unweighted graphs.

**Level 2** Implement both BFS and DFS in a language of your choice.

**Level 3** Analyze the time and space complexity of both algorithms. Explain when you would choose one over the other and how they enable more complex graph algorithms.
`,answer:`**BFS vs DFS:**
- Both: O(V+E) time, O(V) space for visited set
- BFS uses queue (FIFO), explores layer-by-layer, finds shortest paths in unweighted graphs
- DFS uses stack/recursion (LIFO), explores depth-first, better for cycle detection and topological sort

**Space trade-offs:**
- BFS: O(width) queue space - worse for wide graphs
- DFS: O(depth) stack space - worse for deep graphs

**Why They Matter:** Graph traversal is the foundation for all graph algorithms. BFS enables shortest path algorithms (Dijkstra extends it with priority queue). DFS enables topological sorting, cycle detection, and maze solving. Every graph algorithm builds on these two fundamental patterns.
`,topics:["Breadth-First Search","Depth-First Search","Graph Traversal","Connected Components","Graph Connectivity","Shortest Paths"]}},"content/chapter-02/questions/iterative-vs-recursive.yml":{type:"yaml",module:{id:"ch2-iterative-vs-recursive",type:"short-answer",chapter:2,question:`**Write both recursive and iterative implementations of the factorial function.**

**Level 0** Discuss the fundamental trade-offs between recursive and iterative approaches to problem-solving. Explain why understanding both paradigms is essential in algorithm design.

**Level 1** Provide example inputs (e.g., factorial(5)). Give pseudocode for both the recursive approach (using the mathematical definition: n! = n × (n-1)!) and the iterative approach (using a loop). Step through each version with a small example.

**Level 2** Implement both versions in a language of your choice.

**Level 3** Analyze and compare the time complexity and space complexity of both implementations. Explain why they have the same time complexity but different space complexity. Discuss when you would choose recursion over iteration and vice versa.
`,answer:`**Complexity Comparison:**
- **Time Complexity**: Both O(n) - n multiplications required
- **Space Complexity**: 
  - Recursive: O(n) - call stack depth of n frames
  - Iterative: O(1) - only local variables

**Key Insights:**
- Recursion uses implicit state (call stack) while iteration uses explicit state (variables)
- Each recursive call adds a stack frame storing local variables and return address
- Stack overflow risk with deep recursion (typically ~1000-10000 calls depending on language/platform)
- Iteration is more space-efficient but recursion can be more elegant for naturally recursive problems

**When to Choose:**
- **Recursion**: Tree/graph traversal, divide-and-conquer, problems with recursive structure
- **Iteration**: Simple loops, space-constrained environments, performance-critical code
- **Note**: Tail recursion (when recursive call is last operation) can be optimized to O(1) space by some compilers
`,topics:["Algorithm Analysis","Recursion","Iteration","Space Complexity","Call Stack"]}},"content/chapter-02/questions/minimum-spanning-trees.yml":{type:"yaml",module:{id:"ch2-minimum-spanning-trees",type:"short-answer",chapter:2,question:`**Implement minimum spanning tree algorithms (Prim's and Kruskal's).**

**Level 0** Discuss why minimum spanning trees are important and what problems they solve.

**Level 1** For sample graphs, demonstrate both Prim's and Kruskal's algorithms. Give pseudocode for both approaches.

**Level 2** Implement both Prim's and Kruskal's algorithms in a language of your choice.

**Level 3** Analyze the time complexity of both algorithms. Explain why the greedy approach works (cut property) and compare when to use each algorithm.
`,answer:`**MST Definition:**
A subset of edges that connects all vertices with minimum total weight and no cycles. Has exactly |V|-1 edges.

**Two Algorithms:**
- **Prim's**: Grows single tree from start vertex, always adding minimum-weight edge crossing the cut. Uses priority queue. O((V+E) log V)
- **Kruskal's**: Processes edges by weight, adds edge if it doesn't create cycle. Uses union-find. O(E log E)

**Greedy Correctness (Cut Property):**
For any partition of vertices, the minimum-weight edge crossing the partition is in some MST. Both algorithms respect this: Prim's explicitly chooses minimum crossing edges, Kruskal's chooses minimum edges between components.

**Applications:**
Network design (minimize cable cost while connecting all nodes), clustering (MST edges identify natural clusters), approximation algorithms for TSP.
`,topics:["Minimum Spanning Tree","Prim's Algorithm","Kruskal's Algorithm","Greedy Algorithms","Union-Find","Algorithm Correctness","Cut Property"]}},"content/chapter-03/concept-map.yml":{type:"yaml",module:{concept_map:[{category:"Algorithm Paradigms and Intractability",concepts:[{name:"Greedy",description:"Greedy algorithms and when they produce optimal solutions",exam_questions:["questions/activity-selection.yml"]},{name:"Divide and Conquer",description:"Recursive problem decomposition and merging solutions",exam_questions:["questions/merge-sort-analysis.yml","questions/quick-sort-analysis.yml"]},{name:"Dynamic Programming",description:"Optimal substructure and overlapping subproblems",exam_questions:["questions/knapsack-dp.yml","questions/lcs-problem.yml"]},{name:"Network Flow",description:"Maximum flow and minimum cut in networks",exam_questions:["questions/ford-fulkerson.yml"]},{name:"Intractability",description:"NP-completeness and computational complexity theory",exam_questions:["questions/sat-to-3sat-reduction.yml"]}]}]}},"content/chapter-03/questions/activity-selection.yml":{type:"yaml",module:{id:"ch3-greedy-algorithms",type:"short-answer",chapter:3,question:`**Implement greedy algorithms for activity selection and fractional knapsack.**

**Level 0** Discuss why greedy algorithms sometimes produce optimal solutions. Explain the key properties that make a problem suitable for greedy solutions.

**Level 1** For each problem, demonstrate the greedy algorithm with sample inputs and give pseudocode:
- Activity selection: activities with start/finish times
- Fractional knapsack: items with weights and values

**Level 2** Implement both greedy algorithms in a language of your choice.

**Level 3** Prove correctness for both algorithms. For activity selection, prove why sorting by finish time is optimal. For fractional knapsack, prove why selecting by value-to-weight ratio is optimal. Compare to 0/1 knapsack and explain when greedy approaches fail.
`,answer:`**Activity Selection:**
Sort by finish time, select first activity, then repeatedly select next compatible activity (start ≥ previous finish).

**Fractional Knapsack:**
Sort items by value/weight ratio (descending), take items greedily until capacity full (taking fractions as needed).

**Why Greedy Works:**
Both have greedy choice property - locally optimal choice leads to global optimum. Both have optimal substructure - optimal solution contains optimal solutions to subproblems.

**Activity Selection Proof:**
Exchange argument - if optimal solution doesn't include earliest-finishing activity, we can swap it in without decreasing solution size. Earliest finish leaves maximum room for remaining activities.

**Fractional Knapsack Proof:**
Exchange argument - if solution doesn't follow ratio order, swapping portions increases total value. Can always take fractions, so maximize value per unit weight.

**When Greedy Fails:**
0/1 knapsack lacks greedy choice property. Taking highest-ratio item might use capacity better filled by multiple smaller items. Requires DP to explore combinations. Greedy needs both greedy choice property AND optimal substructure.

**Time complexity:** Both O(n log n) for sorting.
`,topics:["Greedy Algorithms","Activity Selection","Fractional Knapsack","Interval Scheduling","Optimization"]}},"content/chapter-03/questions/ford-fulkerson.yml":{type:"yaml",module:{id:"ch3-ford-fulkerson",type:"short-answer",chapter:3,question:`**Implement the Ford-Fulkerson algorithm (maximum flow problem).**

**Level 0** Discuss what a maximum flow problem is, and give a few examples.  Explain the significance of the Ford-Fulkerson algorithm and an informal discussion of the max-flow min-cut theorem.

**Level 1** For sample flow networks, demonstrate finding augmenting paths and updating flow. Give pseudocode.

**Level 2** Implement Ford-Fulkerson in a language of your choice.

**Level 3** Analyze the complexity. Explain augmenting paths, residual networks, and why the algorithm terminates with integer capacities.  (Bonus: Give a more formal proof of the max-flow min-cut theorem.)
`,answer:`**Ford-Fulkerson:**
Repeatedly find augmenting paths (source to sink with residual capacity), push flow along path, update residual graph. Terminates when no augmenting path exists.

**Residual network:**
For each edge with flow f < capacity c, residual has forward edge (capacity c-f) and backward edge (capacity f).

**Complexity:**
O(E × max_flow) - can be slow if capacities are large. Edmonds-Karp (BFS for paths) gives O(VE²).

**Applications:**
Network routing, bipartite matching, airline scheduling, image segmentation.
`,topics:["Network Flow","Ford-Fulkerson","Augmenting Paths","Graph Algorithms"]}},"content/chapter-03/questions/knapsack-dp.yml":{type:"yaml",module:{id:"ch3-knapsack-dp",type:"short-answer",chapter:3,question:`**Implement a dynamic programming solution to the 0/1 knapsack problem.**

**Level 0** Discuss why DP is needed for 0/1 knapsack and what problems exhibit optimal substructure.

**Level 1** For sample items and capacity, demonstrate the DP table construction. Give pseudocode.

**Level 2** Implement 0/1 knapsack with DP in a language of your choice.

**Level 3** Analyze the O(nW) complexity. Explain why this is pseudo-polynomial and compare to fractional knapsack.
`,answer:`**0/1 Knapsack DP:**
Table dp[i][w] = max value using first i items with capacity w.
Recurrence: dp[i][w] = max(dp[i-1][w], value[i] + dp[i-1][w-weight[i]])

**Optimal substructure:**
Optimal solution contains optimal solutions to subproblems (with/without item i).

**Time:** O(nW) - pseudo-polynomial (exponential in input size since W is exponential in bits needed to represent it).

**vs. Fractional:**
Fractional: O(n log n) greedy. 0/1: must consider combinations, no greedy choice property.
`,topics:["Dynamic Programming","0/1 Knapsack","Optimal Substructure"]}},"content/chapter-03/questions/lcs-problem.yml":{type:"yaml",module:{id:"ch3-lcs-problem",type:"short-answer",chapter:3,question:`**Implement a dynamic programming solution to the longest common subsequence (LCS) problem.**

**Level 0** Discuss the significance of LCS in bioinformatics, version control, and other applications.

**Level 1** For sample sequences, demonstrate the DP table construction and backtracking. Give pseudocode.

**Level 2** Implement LCS with DP in a language of your choice.

**Level 3** Analyze the O(mn) complexity and space. Explain optimal substructure and how to recover the actual subsequence.
`,answer:`**LCS DP:**
Table lcs[i][j] = length of LCS of first i chars of X and first j chars of Y.
If X[i]=Y[j]: lcs[i][j] = 1 + lcs[i-1][j-1]
Else: lcs[i][j] = max(lcs[i-1][j], lcs[i][j-1])

**Optimal substructure:**
LCS of X[1..i] and Y[1..j] uses LCS of prefixes.

**Reconstruction:**
Backtrack from lcs[m][n]: when X[i]=Y[j], include character and move diagonally; else move toward max.

**Time:** O(mn), Space: O(mn) (can reduce to O(min(m,n)))
`,topics:["Dynamic Programming","Longest Common Subsequence","String Algorithms"]}},"content/chapter-03/questions/merge-sort-analysis.yml":{type:"yaml",module:{id:"ch3-merge-sort-analysis",type:"short-answer",chapter:3,question:`**Implement and analyze merge sort as a divide-and-conquer algorithm.**

**Level 0** Discuss why divide-and-conquer is a powerful paradigm and where merge sort is used.

**Level 1** For sample arrays, demonstrate merge sort's divide and merge steps. Give pseudocode.

**Level 2** Implement merge sort in a language of your choice.

**Level 3** Derive the recurrence T(n) = 2T(n/2) + O(n) and solve using the Master Theorem. Explain the Θ(n log n) complexity.
`,answer:`**Merge Sort:**
Divide array in half, recursively sort each half, merge sorted halves in O(n) time.

**Recurrence:** T(n) = 2T(n/2) + O(n)
- Two subproblems of size n/2
- O(n) to merge

**Master Theorem:** a=2, b=2, f(n)=n
- n^(log_b a) = n^1 = n
- Case 2: T(n) = Θ(n log n)

**Properties:**
Stable, Θ(n log n) in all cases, O(n) extra space. Good for linked lists and external sorting.
`,topics:["Divide and Conquer","Merge Sort","Master Theorem","Recurrence Relations"]}},"content/chapter-03/questions/quick-sort-analysis.yml":{type:"yaml",module:{id:"ch3-quick-sort-analysis",type:"short-answer",chapter:3,question:`**Implement and analyze quicksort as a divide-and-conquer algorithm.**

**Level 0** Discuss why quicksort is often faster than merge sort in practice despite worse worst-case complexity.

**Level 1** For sample arrays, demonstrate quicksort's partition step with different pivot choices. Give pseudocode.

**Level 2** Implement quicksort in a language of your choice.

**Level 3** Derive best, average, and worst-case complexity. Explain pivot selection strategies and why quicksort is often preferred.
`,answer:`**Quicksort:**
Choose pivot, partition array (elements < pivot on left, ≥ pivot on right), recursively sort partitions.

**Complexity:**
- Best/Average: O(n log n) - balanced partitions
- Worst: O(n²) - already sorted with bad pivot choice

**Recurrence (average):** T(n) = 2T(n/2) + O(n) → O(n log n)

**Pivot strategies:**
Random pivot or median-of-three to avoid worst case. Randomized quicksort has expected O(n log n).

**Why preferred:**
In-place (O(1) space), cache-friendly access patterns, smaller constant factors than merge sort.
`,topics:["Divide and Conquer","Quicksort","Randomized Algorithms","In-place Sorting"]}},"content/chapter-03/questions/sat-to-3sat-reduction.yml":{type:"yaml",module:{id:"ch3-sat-to-3sat-reduction",type:"short-answer",chapter:3,question:`**Implement a reduction from SAT to 3-SAT to show 3-SAT is NP-complete.**

**Level 0** Discuss the significance of the following: P, NP, NP-complete.  In light of your definitions, discuss SAT, 3-SAT, and 2-SAT.   Discuss why reductions are fundamental to complexity theory.

**Level 1** 2-SAT: Show a polynomial-time algorithm for solving 2-SAT problems.  3-SAT: For sample SAT formulas with varied clause sizes, demonstrate the reduction to 3-SAT; Give the transformation rules and/or pseudocode, and show (informally, in your concrete example) that satisfiability is preserved.

**Level 2** Implement a SAT-to-3SAT reduction in a language of your choice.

**Level 3** Prove the 3-SAT reduction is polynomial-time and preserves satisfiability in both directions.
`,answer:`**SAT to 3-SAT Reduction:**
- 1-literal clause (x): Add dummies → (x ∨ y ∨ ¬y)
- 2-literal clause (x ∨ y): Add dummy → (x ∨ y ∨ z)
- 4+ literal clause: Split with auxiliary variables

**Correctness:**
Forward: If SAT satisfied, set dummies/auxiliaries appropriately
Backward: If 3-SAT satisfied, original variables satisfy SAT

**Polynomial time:**
Each clause produces O(k) new clauses where k is clause length. Total O(n×k) where n = number of clauses.

**Significance:**
Once we know SAT is NP-complete (Cook-Levin), this shows 3-SAT is NP-complete by reduction.
`,topics:["NP-completeness","Reductions","SAT","3-SAT","Polynomial-time Transformations"]}},"content/chapter-04/concept-map.yml":{type:"yaml",module:{concept_map:[{category:"Bonus Questions",concepts:[{name:"Advanced Dynamic Programming",description:"Additional DP problems for extra practice",exam_questions:["questions/matrix-chain.yml"]},{name:"Network Flow",description:"Advanced network flow problems",exam_questions:["questions/max-flow-min-cut.yml"]},{name:"Advanced Topics",description:"Challenge problems beyond exam scope",exam_questions:["questions/bubble-sort-implementation-and-analysis.yml","questions/structural-recursion-on-lists-vs-arrays.yml"]}]}]}},"content/chapter-04/questions/bubble-sort-implementation-and-analysis.yml":{type:"yaml",module:{id:13,question:"Implement bubble sort and analyze its time complexity.",answer:"TODO: Add answer",topics:["sorting","bubble sort","analysis"],type:"problem_solving",points:5,difficulty:"medium",learning_objectives:[]}},"content/chapter-04/questions/matrix-chain.yml":{type:"yaml",module:{id:"ch4-matrix-chain",type:"short-answer",chapter:4,question:`**Implement a dynamic programming solution to the matrix chain multiplication optimization problem.**

**Level 0** Discuss why matrix multiplication order matters and the significance of this optimization problem.

**Level 1** For sample matrix dimensions, demonstrate the DP table construction. Give pseudocode.

**Level 2** Implement matrix chain ordering with DP in a language of your choice.

**Level 3** Analyze the O(n³) complexity. Explain optimal substructure and how dramatically the cost varies with parenthesization.
`,answer:`**Matrix Chain DP:**
Table m[i][j] = min scalar multiplications for Ai...Aj.
Recurrence: m[i][j] = min(m[i][k] + m[k+1][j] + pi-1×pk×pj) for all k between i and j.

**Why it matters:**
Different orders have dramatically different costs. (A×B)×C vs A×(B×C) can differ by orders of magnitude.

**Optimal substructure:**
Optimal parenthesization of Ai...Aj splits at some k, with optimal solutions on both sides.

**Time:** O(n³) - must try all split points for all subchains.
`,topics:["Dynamic Programming","Matrix Chain Multiplication","Optimization"]}},"content/chapter-04/questions/max-flow-min-cut.yml":{type:"yaml",module:{id:"ch4-max-flow-min-cut",type:"short-answer",chapter:4,question:`**Implement algorithms demonstrating the max-flow min-cut theorem.**

**Level 0** Discuss the significance of the max-flow min-cut theorem as a fundamental duality in optimization.

**Level 1** For sample networks, demonstrate finding both maximum flow and minimum cut. Give definitions.

**Level 2** Implement finding minimum cut after computing max flow.

**Level 3** Prove the max-flow min-cut theorem. Explain applications in network reliability and security.
`,answer:`**Max-Flow Min-Cut Theorem:**
Maximum flow value equals minimum cut capacity. A cut is a partition of vertices into sets S (containing source) and T (containing sink).

**Proof sketch:**
(1) Flow ≤ any cut capacity (flow conservation)
(2) When Ford-Fulkerson terminates, no augmenting path exists
(3) S = vertices reachable from source in residual graph
(4) Cut (S,T) has no residual capacity, so flow = cut capacity

**Finding min cut:**
After max flow, cut consists of edges from S to T where S = BFS-reachable vertices in residual graph.

**Applications:**
Network reliability (min cut = vulnerability), image segmentation, social network analysis.
`,topics:["Network Flow","Max-Flow Min-Cut Theorem","Graph Theory","Duality"]}},"content/chapter-04/questions/structural-recursion-on-lists-vs-arrays.yml":{type:"yaml",module:{id:10,question:"Compare structural recursion on lists vs arrays.",answer:"TODO: Add answer",topics:["recursion","arrays","linked lists"],type:"conceptual",points:3,difficulty:"medium",learning_objectives:[]}},"content/chapter-01/index.md":{type:"markdown",module:`# Chapter 1: Mathematics of Algorithm Complexity\r
\r
This chapter develops the mathematical foundations for analyzing algorithm efficiency using asymptotic notation.\r
\r
## This Book's Unique Approach: The Four Levels of Mastery\r
\r
This textbook takes a different approach from traditional algorithm texts. Rather than presenting completed proofs and implementations, each question guides you through **four distinct levels of mastery** that mirror how expert computer scientists actually think about problems.\r
\r
### The Four Levels\r
\r
#### Level 0: Big Picture Significance\r
\r
**"Why does this matter?"**\r
\r
Before diving into technical details, we establish the broader context:\r
- Why does this algorithm or data structure exist?\r
- What real-world problem does it solve?\r
- How does it fit into the larger landscape of computer science?\r
\r
This level prevents the common pitfall of learning techniques in isolation without understanding when or why to apply them. Expert developers don't just know *how* binary search works—they understand *why* it matters for massive datasets and when its preconditions (sorted data) make it practical.\r
\r
**Example**: Before studying sorting algorithms, you'll understand why sorting is fundamental to database indices, search engines, and virtually every efficient algorithm that follows.\r
\r
#### Level 1: High-Level Illustration\r
\r
**"How does it work conceptually?"**\r
\r
Here you'll:\r
- Work through concrete examples with small inputs\r
- See the algorithm's data structures visualized\r
- Study pseudocode that captures the core logic\r
- Step through the algorithm's execution trace\r
\r
This is where intuition develops. You're not yet worrying about array indices or pointer management—you're understanding the *strategy*. Can you explain the algorithm to a colleague at a whiteboard? Can you trace it on paper? If so, you're ready for Level 2.\r
\r
**Example**: For merge sort, you'll see the recursive divide-and-conquer pattern, how subarrays are merged, and why the algorithm naturally produces sorted output—all before writing a line of code.\r
\r
#### Level 2: Implementation and Testing\r
\r
**"Can you build it robustly?"**\r
\r
Now you implement the algorithm in a real programming language:\r
- Handle edge cases (empty inputs, single elements, duplicates)\r
- Write comprehensive tests that verify correctness\r
- Debug issues that arise from translating pseudocode to code\r
\r
This level teaches that algorithms aren't abstract theory—they're practical tools that must work reliably in production systems. Your implementation should be something you'd trust in a real codebase.\r
\r
**Example**: Your merge sort implementation must handle arrays of size 0, 1, and 2 correctly, preserve stability when elements are equal, and pass randomized tests with 1000+ element arrays.\r
\r
#### Level 3: Analysis and Synthesis\r
\r
**"What are the trade-offs, and how does this connect to the bigger picture?"**\r
\r
Finally, you step back to analyze deeply:\r
- **Prove complexity bounds**: Why is this algorithm O(n log n)? Can we do better?\r
- **Compare alternatives**: How does this compare to other solutions? When would you choose differently?\r
- **Return to significance**: Armed with implementation experience and theoretical analysis, you can now appreciate the algorithm's true value and limitations\r
\r
This level develops the judgment that separates competent programmers from exceptional ones. You'll understand not just that quicksort is O(n log n) on average, but *why* its cache-friendly access patterns often make it faster than merge sort in practice, despite worse worst-case complexity.\r
\r
**Example**: After implementing merge sort, you'll prove its Θ(n log n) bound, compare it to quicksort's average vs. worst case, understand why it's preferred for linked lists and external sorting, and recognize when its O(n) space overhead matters.\r
\r
### Why This Structure Works\r
\r
Traditional textbooks often jump directly to implementation or present finished proofs. But experts don't think that way. They:\r
\r
1. **Start with motivation** (Level 0)\r
2. **Develop intuition through examples** (Level 1)\r
3. **Validate understanding through implementation** (Level 2)\r
4. **Achieve mastery through analysis** (Level 3)\r
\r
By following this path yourself, you're not just memorizing facts—you're building the problem-solving habits that define expertise.\r
\r
### How to Use This Book\r
\r
**Don't skip levels.** The temptation is to jump to Level 2 (code) or Level 3 (proofs). Resist this. Each level builds essential understanding:\r
\r
- Without Level 0, you won't know *when* to apply what you've learned\r
- Without Level 1, your implementations will be buggy and your intuition weak\r
- Without Level 2, your theoretical knowledge will be disconnected from reality\r
- Without Level 3, you'll lack the deep understanding needed for novel problems\r
\r
**Take time at each level.** If Level 1's examples don't make intuitive sense, don't proceed to implementation. If your Level 2 code fails tests, don't move to analysis. Each level is a checkpoint.\r
\r
**Embrace the struggle.** This structure is designed to surface your misconceptions early. When Level 1 examples confuse you, that's valuable—it means you've discovered a gap before wasting time on broken implementations. When Level 2 tests fail, that's teaching you about edge cases. When Level 3 proofs seem opaque, that's revealing holes in your Level 1 understanding.\r
\r
### A Note on Answers\r
\r
The provided answers show what complete mastery looks like at each level. But **don't just read them passively**. Use them to:\r
\r
- Check your understanding after attempting each level\r
- See what details you missed\r
- Understand how experts structure their thinking\r
- Calibrate what "good enough" looks like\r
\r
Your goal isn't to reproduce these answers verbatim—it's to develop the ability to generate equivalent insights independently when facing new problems.\r
\r
---\r
\r
**Ready? Let's begin with the mathematics of algorithm complexity.**\r
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
{{YouTube:https://www.youtube.com/watch?v=MyeV2_tGqvw}} `},"content/chapter-02/index.md":{type:"markdown",module:`# Chapter 2: Recursion, Trees, and Graphs\r
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
{{YouTube:https://www.youtube.com/watch?v=3fU0w9XZjAA}}`},"content/chapter-03/index.md":{type:"markdown",module:`# Chapter 4: Algorithm Paradigms and Intractability\r
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
`},"content/chapter-04/index.md":{type:"markdown",module:`# Chapter 4: Bonus Questions\r
\r
This chapter contains additional practice questions to deepen your understanding of advanced algorithm concepts.\r
\r
## Advanced Dynamic Programming\r
\r
Additional dynamic programming problems that demonstrate the power and versatility of the DP paradigm:\r
\r
* **Matrix Chain Multiplication**: Finding the optimal parenthesization for multiplying a sequence of matrices\r
\r
These bonus questions are optional but provide valuable practice for mastering algorithmic problem-solving.\r
\r
\r
`},"index.md":{type:"markdown",module:`# CS333: Data Structures and Algorithms I\r
\r
Welcome to CS333! This course explores fundamental data structures and algorithms that are essential for efficient problem-solving in computer science.\r
\r
## Course Overview\r
\r
This course provides a comprehensive study of algorithm design and analysis, covering essential data structures, algorithmic paradigms, and computational complexity theory. Through core exam questions across three chapters, students will master the mathematical foundations of algorithm analysis, develop proficiency with fundamental data structures, and learn to apply key algorithmic strategies to solve complex computational problems.\r
\r
The curriculum progresses from mathematical analysis techniques (Big-O notation, recurrence relations) through advanced graph algorithms to key algorithmic paradigms including greedy algorithms, divide-and-conquer, dynamic programming, network flow, and NP-completeness theory. Students will learn both the theoretical frameworks for analyzing algorithmic efficiency and the practical skills needed to implement and optimize real-world algorithms.\r
\r
## Topics\r
\r
### [Chapter 1: Mathematics of Algorithm Complexity](content/chapter-01/)\r
\r
**Big-O Notation and Asymptotic Analysis:**\r
\r
* Mathematical definition of Big-O notation\r
* Determining asymptotic upper bounds for functions\r
* Distinguishing Big-O (O), Big-Omega (Ω), and Big-Theta (Θ)\r
* Comparing function classes: polynomials, logarithms, exponentials\r
* Analyzing nested loops and complex code structures\r
* Ranking algorithms by time complexity\r
* Lists vs Arrays\r
* Searching and basic sorting\r
\r
---\r
\r
### [Chapter 2: Recursion, Trees, and Graphs](content/chapter-02/) \r
\r
**Recursion:**\r
\r
* Comparing iterative vs. recursive implementations (factorial example)\r
* Fibonacci: call trees, recurrence relations, memoization optimization\r
* Writing and solving recurrence relations\r
\r
**Tree Data Structures:**\r
\r
* Comparing BSTs, AVL Trees, and B-Trees\r
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
### [Chapter 3: Algorithm Paradigms and Intractability](content/chapter-03/)\r
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
\r
**Network Flow:**\r
\r
* Ford-Fulkerson algorithm for maximum flow\r
* Max-flow min-cut theorem and applications\r
\r
**Computational Complexity:**\r
\r
* SAT to 3-SAT reduction: executing the transformation algorithm\r
* 3-SAT NP-completeness proof structure\r
\r
---\r
\r
## Further Reading\r
\r
* [Algorithm Design](https://theswissbay.ch/pdf/Gentoomen%20Library/Algorithms/Algorithm%20Design%20-%20John%20Kleinberg%20-%20%C3%89va%20Tardos.pdf)\r
* [Algorithms in a Nutshell](https://theswissbay.ch/pdf/Gentoomen%20Library/Algorithms/Algorithms_Nutshell%20.pdf)\r
`}},aD={yamlCount:31,markdownCount:5,totalCount:36},uD=["content/chapter-01/concept-map.yml","content/chapter-02/concept-map.yml","content/chapter-03/concept-map.yml"];function lD(){const e=dr(),[t,i]=H.useState([]),[u,s]=H.useState(null),[o,c]=H.useState(!0);if(H.useEffect(()=>{Rn.initialize({compiledFiles:iD,stats:aD,basePath:"/cs-333/"}),(async()=>{try{const b=await rD(uD);i(b)}catch(b){console.error("Failed to load questions:",b)}finally{c(!1)}})()},[]),o)return O.jsx("div",{className:"app loading",children:O.jsx("h2",{children:"Loading CS333 Textbook..."})});const h=y=>{s(y)},d=()=>{s(null)},p=e.pathname==="/exam"||e.pathname==="/#/exam";return O.jsxs("div",{className:"app",children:[O.jsx("header",{children:O.jsxs("div",{className:"header-content",children:[O.jsxs("div",{className:"header-title",children:[O.jsx("h1",{children:"CS333: Data Structures and Algorithms"}),O.jsx("p",{children:"Understanding computational complexity and efficient problem solving"})]}),O.jsxs("nav",{className:"main-nav",children:[O.jsx(Fs,{to:"/textbook",className:`nav-link ${e.pathname.startsWith("/textbook")?"active":""}`,children:"Textbook"}),O.jsx(Fs,{to:"/exam",className:`nav-link ${p?"active":""}`,children:"Practice Exam"})]})]})}),O.jsx("main",{children:O.jsxs(NA,{children:[O.jsx(Rs,{path:"/",element:O.jsx(_A,{to:"/textbook",replace:!0})}),O.jsx(Rs,{path:"/textbook/*",element:O.jsx(ZL,{})}),O.jsx(Rs,{path:"/exam",element:u?O.jsx($L,{questions:u.questions,settings:u.settings,onEndExam:d}):O.jsx(JL,{questions:t,onStartExam:h,courseTitle:"CS333: Data Structures and Algorithms"})})]})})]})}function sD(){return O.jsx(JA,{children:O.jsx(lD,{})})}O2.createRoot(document.getElementById("root")).render(O.jsx(H.StrictMode,{children:O.jsx(sD,{})}));
