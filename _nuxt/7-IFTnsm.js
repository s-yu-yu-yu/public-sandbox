function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Bn7fbvPM.js","./eWh6QpsX.js","./error-404.JekaaCis.css","./D10-U6TR.js","./error-500.CNP9nqm1.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tu(i,e){const t=new Set(i.split(","));return e?n=>t.has(n.toLowerCase()):n=>t.has(n)}const ut={},Br=[],dn=()=>{},l_=()=>!1,Ks=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),nu=i=>i.startsWith("onUpdate:"),Pt=Object.assign,iu=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},c_=Object.prototype.hasOwnProperty,Ze=(i,e)=>c_.call(i,e),Oe=Array.isArray,Hr=i=>Oa(i)==="[object Map]",gp=i=>Oa(i)==="[object Set]",De=i=>typeof i=="function",_t=i=>typeof i=="string",cs=i=>typeof i=="symbol",dt=i=>i!==null&&typeof i=="object",_p=i=>(dt(i)||De(i))&&De(i.then)&&De(i.catch),vp=Object.prototype.toString,Oa=i=>vp.call(i),u_=i=>Oa(i).slice(8,-1),xp=i=>Oa(i)==="[object Object]",ru=i=>_t(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,kr=tu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fa=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},d_=/-(\w)/g,Un=Fa(i=>i.replace(d_,(e,t)=>t?t.toUpperCase():"")),h_=/\B([A-Z])/g,us=Fa(i=>i.replace(h_,"-$1").toLowerCase()),Ba=Fa(i=>i.charAt(0).toUpperCase()+i.slice(1)),ll=Fa(i=>i?`on${Ba(i)}`:""),Li=(i,e)=>!Object.is(i,e),cl=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},ua=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},f_=i=>{const e=parseFloat(i);return isNaN(e)?i:e},p_=i=>{const e=_t(i)?Number(i):NaN;return isNaN(e)?i:e};let qu;const yp=()=>qu||(qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ha(i){if(Oe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=_t(n)?v_(n):Ha(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(_t(i)||dt(i))return i}const m_=/;(?![^(]*\))/g,g_=/:([^]+)/,__=/\/\*[^]*?\*\//g;function v_(i){const e={};return i.replace(__,"").split(m_).forEach(t=>{if(t){const n=t.split(g_);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function ka(i){let e="";if(_t(i))e=i;else if(Oe(i))for(let t=0;t<i.length;t++){const n=ka(i[t]);n&&(e+=n+" ")}else if(dt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}function x_(i){if(!i)return null;let{class:e,style:t}=i;return e&&!_t(e)&&(i.class=ka(e)),t&&(i.style=Ha(t)),i}const y_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",M_=tu(y_);function Mp(i){return!!i||i===""}const kP=i=>_t(i)?i:i==null?"":Oe(i)||dt(i)&&(i.toString===vp||!De(i.toString))?JSON.stringify(i,Ep,2):String(i),Ep=(i,e)=>e&&e.__v_isRef?Ep(i,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[ul(n,s)+" =>"]=r,t),{})}:gp(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ul(t))}:cs(e)?ul(e):dt(e)&&!Oe(e)&&!xp(e)?String(e):e,ul=(i,e="")=>{var t;return cs(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gn;class Sp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gn,!e&&gn&&(this.index=(gn.scopes||(gn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=gn;try{return gn=this,e()}finally{gn=t}}}on(){gn=this}off(){gn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function E_(i){return new Sp(i)}function S_(i,e=gn){e&&e.active&&e.effects.push(i)}function T_(){return gn}let er;class su{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,S_(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,or();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(b_(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ar()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ai,t=er;try{return Ai=!0,er=this,this._runnings++,Yu(this),this.fn()}finally{$u(this),this._runnings--,er=t,Ai=e}}stop(){var e;this.active&&(Yu(this),$u(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function b_(i){return i.value}function Yu(i){i._trackId++,i._depsLength=0}function $u(i){if(i.deps.length>i._depsLength){for(let e=i._depsLength;e<i.deps.length;e++)Tp(i.deps[e],i);i.deps.length=i._depsLength}}function Tp(i,e){const t=i.get(e);t!==void 0&&e._trackId!==t&&(i.delete(e),i.size===0&&i.cleanup())}let Ai=!0,_c=0;const bp=[];function or(){bp.push(Ai),Ai=!1}function ar(){const i=bp.pop();Ai=i===void 0?!0:i}function ou(){_c++}function au(){for(_c--;!_c&&vc.length;)vc.shift()()}function Ap(i,e,t){if(e.get(i)!==i._trackId){e.set(i,i._trackId);const n=i.deps[i._depsLength];n!==e?(n&&Tp(n,i),i.deps[i._depsLength++]=e):i._depsLength++}}const vc=[];function wp(i,e,t){ou();for(const n of i.keys()){let r;n._dirtyLevel<e&&(r??(r=i.get(n)===n._trackId))&&(n._shouldSchedule||(n._shouldSchedule=n._dirtyLevel===0),n._dirtyLevel=e),n._shouldSchedule&&(r??(r=i.get(n)===n._trackId))&&(n.trigger(),(!n._runnings||n.allowRecurse)&&n._dirtyLevel!==2&&(n._shouldSchedule=!1,n.scheduler&&vc.push(n.scheduler)))}au()}const Rp=(i,e)=>{const t=new Map;return t.cleanup=i,t.computed=e,t},da=new WeakMap,tr=Symbol(""),xc=Symbol("");function Yt(i,e,t){if(Ai&&er){let n=da.get(i);n||da.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=Rp(()=>n.delete(t))),Ap(er,r)}}function Jn(i,e,t,n,r,s){const o=da.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Oe(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||!cs(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Oe(i)?ru(t)&&a.push(o.get("length")):(a.push(o.get(tr)),Hr(i)&&a.push(o.get(xc)));break;case"delete":Oe(i)||(a.push(o.get(tr)),Hr(i)&&a.push(o.get(xc)));break;case"set":Hr(i)&&a.push(o.get(tr));break}ou();for(const l of a)l&&wp(l,4);au()}function A_(i,e){var t;return(t=da.get(i))==null?void 0:t.get(e)}const w_=tu("__proto__,__v_isRef,__isVue"),Cp=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(cs)),Ku=R_();function R_(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=et(this);for(let s=0,o=this.length;s<o;s++)Yt(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(et)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){or(),ou();const n=et(this)[e].apply(this,t);return au(),ar(),n}}),i}function C_(i){const e=et(this);return Yt(e,"has",i),e.hasOwnProperty(i)}class Pp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?z_:Up:s?Np:Ip).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=Oe(e);if(!r){if(o&&Ze(Ku,t))return Reflect.get(Ku,t,n);if(t==="hasOwnProperty")return C_}const a=Reflect.get(e,t,n);return(cs(t)?Cp.has(t):w_(t))||(r||Yt(e,"get",t),s)?a:Ft(a)?o&&ru(t)?a:a.value:dt(a)?r?Op(a):Ii(a):a}}class Lp extends Pp{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=ir(s);if(!ha(n)&&!ir(n)&&(s=et(s),n=et(n)),!Oe(e)&&Ft(s)&&!Ft(n))return l?!1:(s.value=n,!0)}const o=Oe(e)&&ru(t)?Number(t)<e.length:Ze(e,t),a=Reflect.set(e,t,n,r);return e===et(r)&&(o?Li(n,s)&&Jn(e,"set",t,n):Jn(e,"add",t,n)),a}deleteProperty(e,t){const n=Ze(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Jn(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!cs(t)||!Cp.has(t))&&Yt(e,"has",t),n}ownKeys(e){return Yt(e,"iterate",Oe(e)?"length":tr),Reflect.ownKeys(e)}}class P_ extends Pp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const L_=new Lp,I_=new P_,N_=new Lp(!0),lu=i=>i,Va=i=>Reflect.getPrototypeOf(i);function uo(i,e,t=!1,n=!1){i=i.__v_raw;const r=et(i),s=et(e);t||(Li(e,s)&&Yt(r,"get",e),Yt(r,"get",s));const{has:o}=Va(r),a=n?lu:t?du:ks;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function ho(i,e=!1){const t=this.__v_raw,n=et(t),r=et(i);return e||(Li(i,r)&&Yt(n,"has",i),Yt(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function fo(i,e=!1){return i=i.__v_raw,!e&&Yt(et(i),"iterate",tr),Reflect.get(i,"size",i)}function Zu(i){i=et(i);const e=et(this);return Va(e).has.call(e,i)||(e.add(i),Jn(e,"add",i,i)),this}function Qu(i,e){e=et(e);const t=et(this),{has:n,get:r}=Va(t);let s=n.call(t,i);s||(i=et(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?Li(e,o)&&Jn(t,"set",i,e):Jn(t,"add",i,e),this}function Ju(i){const e=et(this),{has:t,get:n}=Va(e);let r=t.call(e,i);r||(i=et(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&Jn(e,"delete",i,void 0),s}function ed(){const i=et(this),e=i.size!==0,t=i.clear();return e&&Jn(i,"clear",void 0,void 0),t}function po(i,e){return function(n,r){const s=this,o=s.__v_raw,a=et(o),l=e?lu:i?du:ks;return!i&&Yt(a,"iterate",tr),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function mo(i,e,t){return function(...n){const r=this.__v_raw,s=et(r),o=Hr(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?lu:e?du:ks;return!e&&Yt(s,"iterate",l?xc:tr),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function oi(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function U_(){const i={get(s){return uo(this,s)},get size(){return fo(this)},has:ho,add:Zu,set:Qu,delete:Ju,clear:ed,forEach:po(!1,!1)},e={get(s){return uo(this,s,!1,!0)},get size(){return fo(this)},has:ho,add:Zu,set:Qu,delete:Ju,clear:ed,forEach:po(!1,!0)},t={get(s){return uo(this,s,!0)},get size(){return fo(this,!0)},has(s){return ho.call(this,s,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:po(!0,!1)},n={get(s){return uo(this,s,!0,!0)},get size(){return fo(this,!0)},has(s){return ho.call(this,s,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:po(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=mo(s,!1,!1),t[s]=mo(s,!0,!1),e[s]=mo(s,!1,!0),n[s]=mo(s,!0,!0)}),[i,t,e,n]}const[D_,O_,F_,B_]=U_();function cu(i,e){const t=e?i?B_:F_:i?O_:D_;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Ze(t,r)&&r in n?t:n,r,s)}const H_={get:cu(!1,!1)},k_={get:cu(!1,!0)},V_={get:cu(!0,!1)},Ip=new WeakMap,Np=new WeakMap,Up=new WeakMap,z_=new WeakMap;function G_(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function W_(i){return i.__v_skip||!Object.isExtensible(i)?0:G_(u_(i))}function Ii(i){return ir(i)?i:uu(i,!1,L_,H_,Ip)}function Dp(i){return uu(i,!1,N_,k_,Np)}function Op(i){return uu(i,!0,I_,V_,Up)}function uu(i,e,t,n,r){if(!dt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=W_(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function Vr(i){return ir(i)?Vr(i.__v_raw):!!(i&&i.__v_isReactive)}function ir(i){return!!(i&&i.__v_isReadonly)}function ha(i){return!!(i&&i.__v_isShallow)}function Fp(i){return Vr(i)||ir(i)}function et(i){const e=i&&i.__v_raw;return e?et(e):i}function Bp(i){return Object.isExtensible(i)&&ua(i,"__v_skip",!0),i}const ks=i=>dt(i)?Ii(i):i,du=i=>dt(i)?Op(i):i;class Hp{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new su(()=>e(this._value),()=>Jo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=et(this);return(!e._cacheable||e.effect.dirty)&&Li(e._value,e._value=e.effect.run())&&Jo(e,4),kp(e),e.effect._dirtyLevel>=2&&Jo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function X_(i,e,t=!1){let n,r;const s=De(i);return s?(n=i,r=dn):(n=i.get,r=i.set),new Hp(n,r,s||!r,t)}function kp(i){var e;Ai&&er&&(i=et(i),Ap(er,(e=i.dep)!=null?e:i.dep=Rp(()=>i.dep=void 0,i instanceof Hp?i:void 0)))}function Jo(i,e=4,t){i=et(i);const n=i.dep;n&&wp(n,e)}function Ft(i){return!!(i&&i.__v_isRef===!0)}function nr(i){return Vp(i,!1)}function td(i){return Vp(i,!0)}function Vp(i,e){return Ft(i)?i:new j_(i,e)}class j_{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:et(e),this._value=t?e:ks(e)}get value(){return kp(this),this._value}set value(e){const t=this.__v_isShallow||ha(e)||ir(e);e=t?e:et(e),Li(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ks(e),Jo(this,4))}}function At(i){return Ft(i)?i.value:i}const q_={get:(i,e,t)=>At(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Ft(r)&&!Ft(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function zp(i){return Vr(i)?i:new Proxy(i,q_)}class Y_{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return A_(et(this._object),this._key)}}class $_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function K_(i,e,t){return Ft(i)?i:De(i)?new $_(i):dt(i)&&arguments.length>1?Z_(i,e,t):nr(i)}function Z_(i,e,t){const n=i[e];return Ft(n)?n:new Y_(i,e,t)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wi(i,e,t,n){try{return n?i(...n):i()}catch(r){ds(r,e,t)}}function Mn(i,e,t,n){if(De(i)){const s=wi(i,e,t,n);return s&&_p(s)&&s.catch(o=>{ds(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(Mn(i[s],e,t,n));return r}function ds(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){wi(l,null,10,[i,o,a]);return}}Q_(i,t,r,n)}function Q_(i,e,t,n=!0){console.error(i)}let Vs=!1,yc=!1;const Ot=[];let Cn=0;const zr=[];let _i=null,Yi=0;const Gp=Promise.resolve();let hu=null;function fu(i){const e=hu||Gp;return i?e.then(this?i.bind(this):i):e}function J_(i){let e=Cn+1,t=Ot.length;for(;e<t;){const n=e+t>>>1,r=Ot[n],s=zs(r);s<i||s===i&&r.pre?e=n+1:t=n}return e}function za(i){(!Ot.length||!Ot.includes(i,Vs&&i.allowRecurse?Cn+1:Cn))&&(i.id==null?Ot.push(i):Ot.splice(J_(i.id),0,i),Wp())}function Wp(){!Vs&&!yc&&(yc=!0,hu=Gp.then(Xp))}function ev(i){const e=Ot.indexOf(i);e>Cn&&Ot.splice(e,1)}function Mc(i){Oe(i)?zr.push(...i):(!_i||!_i.includes(i,i.allowRecurse?Yi+1:Yi))&&zr.push(i),Wp()}function nd(i,e,t=Vs?Cn+1:0){for(;t<Ot.length;t++){const n=Ot[t];if(n&&n.pre){if(i&&n.id!==i.uid)continue;Ot.splice(t,1),t--,n()}}}function fa(i){if(zr.length){const e=[...new Set(zr)].sort((t,n)=>zs(t)-zs(n));if(zr.length=0,_i){_i.push(...e);return}for(_i=e,Yi=0;Yi<_i.length;Yi++)_i[Yi]();_i=null,Yi=0}}const zs=i=>i.id==null?1/0:i.id,tv=(i,e)=>{const t=zs(i)-zs(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Xp(i){yc=!1,Vs=!0,Ot.sort(tv);try{for(Cn=0;Cn<Ot.length;Cn++){const e=Ot[Cn];e&&e.active!==!1&&wi(e,null,14)}}finally{Cn=0,Ot.length=0,fa(),Vs=!1,hu=null,(Ot.length||zr.length)&&Xp()}}function nv(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||ut;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=n[u]||ut;h&&(r=t.map(f=>_t(f)?f.trim():f)),d&&(r=t.map(f_))}let a,l=n[a=ll(e)]||n[a=ll(Un(e))];!l&&s&&(l=n[a=ll(us(e))]),l&&Mn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Mn(c,i,6,r)}}function jp(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!De(i)){const l=c=>{const u=jp(c,e,!0);u&&(a=!0,Pt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(dt(i)&&n.set(i,null),null):(Oe(s)?s.forEach(l=>o[l]=null):Pt(o,s),dt(i)&&n.set(i,o),o)}function Ga(i,e){return!i||!Ks(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ze(i,e[0].toLowerCase()+e.slice(1))||Ze(i,us(e))||Ze(i,e))}let en=null,Wa=null;function pa(i){const e=en;return en=i,Wa=i&&i.type.__scopeId||null,e}function VP(i){Wa=i}function zP(){Wa=null}function qp(i,e=en,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&md(-1);const s=pa(e);let o;try{o=i(...r)}finally{pa(s),n._d&&md(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function dl(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:f,ctx:g,inheritAttrs:_}=i;let p,m;const A=pa(i);try{if(t.shapeFlag&4){const E=r||n,C=E;p=cn(u.call(C,E,d,s,f,h,g)),m=l}else{const E=e;p=cn(E.length>1?E(s,{attrs:l,slots:a,emit:c}):E(s,null)),m=e.props?l:rv(l)}}catch(E){Ds.length=0,ds(E,i,1),p=yt(Ni)}let v=p;if(m&&_!==!1){const E=Object.keys(m),{shapeFlag:C}=v;E.length&&C&7&&(o&&E.some(nu)&&(m=sv(m,o)),v=Jr(v,m))}return t.dirs&&(v=Jr(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),p=v,pa(A),p}function iv(i,e=!0){let t;for(let n=0;n<i.length;n++){const r=i[n];if(_a(r)){if(r.type!==Ni||r.children==="v-if"){if(t)return;t=r}}else return}return t}const rv=i=>{let e;for(const t in i)(t==="class"||t==="style"||Ks(t))&&((e||(e={}))[t]=i[t]);return e},sv=(i,e)=>{const t={};for(const n in i)(!nu(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function ov(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?id(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==n[h]&&!Ga(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?id(n,o,c):!0:!!o;return!1}function id(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Ga(t,s))return!0}return!1}function pu({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const mu="components";function GP(i,e){return $p(mu,i,!0,e)||i}const Yp=Symbol.for("v-ndc");function av(i){return _t(i)?$p(mu,i,!1)||i:i||Yp}function $p(i,e,t=!0,n=!1){const r=en||Mt;if(r){const s=r.type;if(i===mu){const a=s0(s,!1);if(a&&(a===e||a===Un(e)||a===Ba(Un(e))))return s}const o=rd(r[i]||s[i],e)||rd(r.appContext[i],e);return!o&&n?s:o}}function rd(i,e){return i&&(i[e]||i[Un(e)]||i[Ba(Un(e))])}const lv=i=>i.__isSuspense;let Ec=0;const cv={name:"Suspense",__isSuspense:!0,process(i,e,t,n,r,s,o,a,l,c){if(i==null)dv(e,t,n,r,s,o,a,l,c);else{if(s&&s.deps>0&&!i.suspense.isInFallback){e.suspense=i.suspense,e.suspense.vnode=e,e.el=i.el;return}hv(i,e,t,n,r,o,a,l,c)}},hydrate:fv,create:gu,normalize:pv},uv=cv;function Gs(i,e){const t=i.props&&i.props[e];De(t)&&t()}function dv(i,e,t,n,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,d=u("div"),h=i.suspense=gu(i,r,n,e,d,t,s,o,a,l);c(null,h.pendingBranch=i.ssContent,d,null,n,h,s,o),h.deps>0?(Gs(i,"onPending"),Gs(i,"onFallback"),c(null,i.ssFallback,e,t,n,null,s,o),Gr(h,i.ssFallback)):h.resolve(!1,!0)}function hv(i,e,t,n,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const d=e.suspense=i.suspense;d.vnode=e,e.el=i.el;const h=e.ssContent,f=e.ssFallback,{activeBranch:g,pendingBranch:_,isInFallback:p,isHydrating:m}=d;if(_)d.pendingBranch=h,Ei(h,_)?(l(_,h,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0?d.resolve():p&&(m||(l(g,f,t,n,r,null,s,o,a),Gr(d,f)))):(d.pendingId=Ec++,m?(d.isHydrating=!1,d.activeBranch=_):c(_,r,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),p?(l(null,h,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0?d.resolve():(l(g,f,t,n,r,null,s,o,a),Gr(d,f))):g&&Ei(h,g)?(l(g,h,t,n,r,d,s,o,a),d.resolve(!0)):(l(null,h,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0&&d.resolve()));else if(g&&Ei(h,g))l(g,h,t,n,r,d,s,o,a),Gr(d,h);else if(Gs(e,"onPending"),d.pendingBranch=h,h.shapeFlag&512?d.pendingId=h.component.suspenseId:d.pendingId=Ec++,l(null,h,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0)d.resolve();else{const{timeout:A,pendingId:v}=d;A>0?setTimeout(()=>{d.pendingId===v&&d.fallback(f)},A):A===0&&d.fallback(f)}}function gu(i,e,t,n,r,s,o,a,l,c,u=!1){const{p:d,m:h,um:f,n:g,o:{parentNode:_,remove:p}}=c;let m;const A=mv(i);A&&e!=null&&e.pendingBranch&&(m=e.pendingId,e.deps++);const v=i.props?p_(i.props.timeout):void 0,E=s,C={vnode:i,parent:e,parentComponent:t,namespace:o,container:n,hiddenContainer:r,deps:0,pendingId:Ec++,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(b=!1,w=!1){const{vnode:O,activeBranch:T,pendingBranch:M,pendingId:B,effects:X,parentComponent:N,container:$}=C;let J=!1;C.isHydrating?C.isHydrating=!1:b||(J=T&&M.transition&&M.transition.mode==="out-in",J&&(T.transition.afterLeave=()=>{B===C.pendingId&&(h(M,$,s===E?g(T):s,0),Mc(X))}),T&&(_(T.el)!==C.hiddenContainer&&(s=g(T)),f(T,N,C,!0)),J||h(M,$,s,0)),Gr(C,M),C.pendingBranch=null,C.isInFallback=!1;let W=C.parent,te=!1;for(;W;){if(W.pendingBranch){W.effects.push(...X),te=!0;break}W=W.parent}!te&&!J&&Mc(X),C.effects=[],A&&e&&e.pendingBranch&&m===e.pendingId&&(e.deps--,e.deps===0&&!w&&e.resolve()),Gs(O,"onResolve")},fallback(b){if(!C.pendingBranch)return;const{vnode:w,activeBranch:O,parentComponent:T,container:M,namespace:B}=C;Gs(w,"onFallback");const X=g(O),N=()=>{C.isInFallback&&(d(null,b,M,X,T,null,B,a,l),Gr(C,b))},$=b.transition&&b.transition.mode==="out-in";$&&(O.transition.afterLeave=N),C.isInFallback=!0,f(O,T,null,!0),$||N()},move(b,w,O){C.activeBranch&&h(C.activeBranch,b,w,O),C.container=b},next(){return C.activeBranch&&g(C.activeBranch)},registerDep(b,w){const O=!!C.pendingBranch;O&&C.deps++;const T=b.vnode.el;b.asyncDep.catch(M=>{ds(M,b,0)}).then(M=>{if(b.isUnmounted||C.isUnmounted||C.pendingId!==b.suspenseId)return;b.asyncResolved=!0;const{vnode:B}=b;Rc(b,M,!1),T&&(B.el=T);const X=!T&&b.subTree.el;w(b,B,_(T||b.subTree.el),T?null:g(b.subTree),C,o,l),X&&p(X),pu(b,B.el),O&&--C.deps===0&&C.resolve()})},unmount(b,w){C.isUnmounted=!0,C.activeBranch&&f(C.activeBranch,t,b,w),C.pendingBranch&&f(C.pendingBranch,t,b,w)}};return C}function fv(i,e,t,n,r,s,o,a,l){const c=e.suspense=gu(e,n,t,i.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(i,c.pendingBranch=e.ssContent,t,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function pv(i){const{shapeFlag:e,children:t}=i,n=e&32;i.ssContent=sd(n?t.default:t),i.ssFallback=n?sd(t.fallback):yt(Ni)}function sd(i){let e;if(De(i)){const t=Qr&&i._c;t&&(i._d=!1,$n()),i=i(),t&&(i._d=!0,e=hn,mm())}return Oe(i)&&(i=iv(i)),i=cn(i),e&&!i.dynamicChildren&&(i.dynamicChildren=e.filter(t=>t!==i)),i}function Kp(i,e){e&&e.pendingBranch?Oe(i)?e.effects.push(...i):e.effects.push(i):Mc(i)}function Gr(i,e){i.activeBranch=e;const{vnode:t,parentComponent:n}=i;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;t.el=r,n&&n.subTree===t&&(n.vnode.el=r,pu(n,r))}function mv(i){var e;return((e=i.props)==null?void 0:e.suspensible)!=null&&i.props.suspensible!==!1}const gv=Symbol.for("v-scx"),_v=()=>Xr(gv);function WP(i,e){return _u(i,null,e)}const go={};function hl(i,e,t){return _u(i,e,t)}function _u(i,e,{immediate:t,deep:n,flush:r,once:s,onTrack:o,onTrigger:a}=ut){if(e&&s){const b=e;e=(...w)=>{b(...w),C()}}const l=Mt,c=b=>n===!0?b:Or(b,n===!1?1:void 0);let u,d=!1,h=!1;if(Ft(i)?(u=()=>i.value,d=ha(i)):Vr(i)?(u=()=>c(i),d=!0):Oe(i)?(h=!0,d=i.some(b=>Vr(b)||ha(b)),u=()=>i.map(b=>{if(Ft(b))return b.value;if(Vr(b))return c(b);if(De(b))return wi(b,l,2)})):De(i)?e?u=()=>wi(i,l,2):u=()=>(f&&f(),Mn(i,l,3,[g])):u=dn,e&&n){const b=u;u=()=>Or(b())}let f,g=b=>{f=v.onStop=()=>{wi(b,l,4),f=v.onStop=void 0}},_;if(Qs)if(g=dn,e?t&&Mn(e,l,3,[u(),h?[]:void 0,g]):u(),r==="sync"){const b=_v();_=b.__watcherHandles||(b.__watcherHandles=[])}else return dn;let p=h?new Array(i.length).fill(go):go;const m=()=>{if(!(!v.active||!v.dirty))if(e){const b=v.run();(n||d||(h?b.some((w,O)=>Li(w,p[O])):Li(b,p)))&&(f&&f(),Mn(e,l,3,[b,p===go?void 0:h&&p[0]===go?[]:p,g]),p=b)}else v.run()};m.allowRecurse=!!e;let A;r==="sync"?A=m:r==="post"?A=()=>qt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),A=()=>za(m));const v=new su(u,dn,A),E=T_(),C=()=>{v.stop(),E&&iu(E.effects,v)};return e?t?m():p=v.run():r==="post"?qt(v.run.bind(v),l&&l.suspense):v.run(),_&&_.push(C),C}function vv(i,e,t){const n=this.proxy,r=_t(i)?i.includes(".")?Zp(n,i):()=>n[i]:i.bind(n,n);let s;De(e)?s=e:(s=e.handler,t=e);const o=Zs(this),a=_u(r,s.bind(n),t);return o(),a}function Zp(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Or(i,e,t=0,n){if(!dt(i)||i.__v_skip)return i;if(e&&e>0){if(t>=e)return i;t++}if(n=n||new Set,n.has(i))return i;if(n.add(i),Ft(i))Or(i.value,e,t,n);else if(Oe(i))for(let r=0;r<i.length;r++)Or(i[r],e,t,n);else if(gp(i)||Hr(i))i.forEach(r=>{Or(r,e,t,n)});else if(xp(i))for(const r in i)Or(i[r],e,t,n);return i}function wn(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(or(),Mn(l,t,8,[i.el,a,i,e]),ar())}}/*! #__NO_SIDE_EFFECTS__ */function vu(i,e){return De(i)?Pt({name:i.name},e,{setup:i}):i}const Ns=i=>!!i.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function od(i){De(i)&&(i={loader:i});const{loader:e,loadingComponent:t,errorComponent:n,delay:r=200,timeout:s,suspensible:o=!0,onError:a}=i;let l=null,c,u=0;const d=()=>(u++,l=null,h()),h=()=>{let f;return l||(f=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((_,p)=>{a(g,()=>_(d()),()=>p(g),u+1)});throw g}).then(g=>f!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return vu({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const f=Mt;if(c)return()=>fl(c,f);const g=A=>{l=null,ds(A,f,13,!n)};if(o&&f.suspense||Qs)return h().then(A=>()=>fl(A,f)).catch(A=>(g(A),()=>n?yt(n,{error:A}):null));const _=nr(!1),p=nr(),m=nr(!!r);return r&&setTimeout(()=>{m.value=!1},r),s!=null&&setTimeout(()=>{if(!_.value&&!p.value){const A=new Error(`Async component timed out after ${s}ms.`);g(A),p.value=A}},s),h().then(()=>{_.value=!0,f.parent&&xu(f.parent.vnode)&&(f.parent.effect.dirty=!0,za(f.parent.update))}).catch(A=>{g(A),p.value=A}),()=>{if(_.value&&c)return fl(c,f);if(p.value&&n)return yt(n,{error:p.value});if(t&&!m.value)return yt(t)}}})}function fl(i,e){const{ref:t,props:n,children:r,ce:s}=e.vnode,o=yt(i,n,r);return o.ref=t,o.ce=s,delete e.vnode.ce,o}const xu=i=>i.type.__isKeepAlive;function xv(i,e){Qp(i,"a",e)}function yv(i,e){Qp(i,"da",e)}function Qp(i,e,t=Mt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Xa(e,n,t),t){let r=t.parent;for(;r&&r.parent;)xu(r.parent.vnode)&&Mv(n,e,t,r),r=r.parent}}function Mv(i,e,t,n){const r=Xa(e,i,n,!0);em(()=>{iu(n[e],r)},t)}function Xa(i,e,t=Mt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;or();const a=Zs(t),l=Mn(e,t,i,o);return a(),ar(),l});return n?r.unshift(s):r.push(s),s}}const ni=i=>(e,t=Mt)=>(!Qs||i==="sp")&&Xa(i,(...n)=>e(...n),t),Ev=ni("bm"),Jp=ni("m"),Sv=ni("bu"),Tv=ni("u"),bv=ni("bum"),em=ni("um"),Av=ni("sp"),wv=ni("rtg"),Rv=ni("rtc");function tm(i,e=Mt){Xa("ec",i,e)}const Sc=i=>i?Em(i)?Su(i)||i.proxy:Sc(i.parent):null,Us=Pt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Sc(i.parent),$root:i=>Sc(i.root),$emit:i=>i.emit,$options:i=>yu(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,za(i.update)}),$nextTick:i=>i.n||(i.n=fu.bind(i.proxy)),$watch:i=>vv.bind(i)}),pl=(i,e)=>i!==ut&&!i.__isScriptSetup&&Ze(i,e),Cv={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(pl(n,e))return o[e]=1,n[e];if(r!==ut&&Ze(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Ze(c,e))return o[e]=3,s[e];if(t!==ut&&Ze(t,e))return o[e]=4,t[e];Tc&&(o[e]=0)}}const u=Us[e];let d,h;if(u)return e==="$attrs"&&Yt(i,"get",e),u(i);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==ut&&Ze(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ze(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return pl(r,e)?(r[e]=t,!0):n!==ut&&Ze(n,e)?(n[e]=t,!0):Ze(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==ut&&Ze(i,o)||pl(e,o)||(a=s[0])&&Ze(a,o)||Ze(n,o)||Ze(Us,o)||Ze(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Ze(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function ad(i){return Oe(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Tc=!0;function Pv(i){const e=yu(i),t=i.proxy,n=i.ctx;Tc=!1,e.beforeCreate&&ld(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:A,destroyed:v,unmounted:E,render:C,renderTracked:b,renderTriggered:w,errorCaptured:O,serverPrefetch:T,expose:M,inheritAttrs:B,components:X,directives:N,filters:$}=e;if(c&&Lv(c,n,null),o)for(const te in o){const H=o[te];De(H)&&(n[te]=H.bind(t))}if(r){const te=r.call(t,t);dt(te)&&(i.data=Ii(te))}if(Tc=!0,s)for(const te in s){const H=s[te],oe=De(H)?H.bind(t,t):De(H.get)?H.get.bind(t,t):dn,le=!De(H)&&De(H.set)?H.set.bind(t):dn,ye=Tm({get:oe,set:le});Object.defineProperty(n,te,{enumerable:!0,configurable:!0,get:()=>ye.value,set:be=>ye.value=be})}if(a)for(const te in a)nm(a[te],n,t,te);if(l){const te=De(l)?l.call(t):l;Reflect.ownKeys(te).forEach(H=>{rm(H,te[H])})}u&&ld(u,i,"c");function W(te,H){Oe(H)?H.forEach(oe=>te(oe.bind(t))):H&&te(H.bind(t))}if(W(Ev,d),W(Jp,h),W(Sv,f),W(Tv,g),W(xv,_),W(yv,p),W(tm,O),W(Rv,b),W(wv,w),W(bv,A),W(em,E),W(Av,T),Oe(M))if(M.length){const te=i.exposed||(i.exposed={});M.forEach(H=>{Object.defineProperty(te,H,{get:()=>t[H],set:oe=>t[H]=oe})})}else i.exposed||(i.exposed={});C&&i.render===dn&&(i.render=C),B!=null&&(i.inheritAttrs=B),X&&(i.components=X),N&&(i.directives=N)}function Lv(i,e,t=dn){Oe(i)&&(i=bc(i));for(const n in i){const r=i[n];let s;dt(r)?"default"in r?s=Xr(r.from||n,r.default,!0):s=Xr(r.from||n):s=Xr(r),Ft(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function ld(i,e,t){Mn(Oe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function nm(i,e,t,n){const r=n.includes(".")?Zp(t,n):()=>t[n];if(_t(i)){const s=e[i];De(s)&&hl(r,s)}else if(De(i))hl(r,i.bind(t));else if(dt(i))if(Oe(i))i.forEach(s=>nm(s,e,t,n));else{const s=De(i.handler)?i.handler.bind(t):e[i.handler];De(s)&&hl(r,s,i)}}function yu(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>ma(l,c,o,!0)),ma(l,e,o)),dt(e)&&s.set(e,l),l}function ma(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&ma(i,s,t,!0),r&&r.forEach(o=>ma(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Iv[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Iv={data:cd,props:ud,emits:ud,methods:Ps,computed:Ps,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Ps,directives:Ps,watch:Uv,provide:cd,inject:Nv};function cd(i,e){return e?i?function(){return Pt(De(i)?i.call(this,this):i,De(e)?e.call(this,this):e)}:e:i}function Nv(i,e){return Ps(bc(i),bc(e))}function bc(i){if(Oe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function kt(i,e){return i?[...new Set([].concat(i,e))]:e}function Ps(i,e){return i?Pt(Object.create(null),i,e):e}function ud(i,e){return i?Oe(i)&&Oe(e)?[...new Set([...i,...e])]:Pt(Object.create(null),ad(i),ad(e??{})):e}function Uv(i,e){if(!i)return e;if(!e)return i;const t=Pt(Object.create(null),i);for(const n in e)t[n]=kt(i[n],e[n]);return t}function im(){return{app:null,config:{isNativeTag:l_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dv=0;function Ov(i,e){return function(n,r=null){De(n)||(n=Pt({},n)),r!=null&&!dt(r)&&(r=null);const s=im(),o=new WeakSet;let a=!1;const l=s.app={_uid:Dv++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:bm,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&De(c.install)?(o.add(c),c.install(l,...u)):De(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const h=yt(n,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),u&&e?e(h,c):i(h,c,d),a=!0,l._container=c,c.__vue_app__=l,Su(h.component)||h.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Wr;Wr=l;try{return c()}finally{Wr=u}}};return l}}let Wr=null;function rm(i,e){if(Mt){let t=Mt.provides;const n=Mt.parent&&Mt.parent.provides;n===t&&(t=Mt.provides=Object.create(n)),t[i]=e}}function Xr(i,e,t=!1){const n=Mt||en;if(n||Wr){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:Wr._context.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&De(e)?e.call(n&&n.proxy):e}}function sm(){return!!(Mt||en||Wr)}function Fv(i,e,t,n=!1){const r={},s={};ua(s,ja,1),i.propsDefaults=Object.create(null),om(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:Dp(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Bv(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=et(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Ga(i.emitsOptions,h))continue;const f=e[h];if(l)if(Ze(s,h))f!==s[h]&&(s[h]=f,c=!0);else{const g=Un(h);r[g]=Ac(l,a,g,f,i,!1)}else f!==s[h]&&(s[h]=f,c=!0)}}}else{om(i,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!Ze(e,d)&&((u=us(d))===d||!Ze(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=Ac(l,a,d,void 0,i,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!Ze(e,d))&&(delete s[d],c=!0)}c&&Jn(i,"set","$attrs")}function om(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(kr(l))continue;const c=e[l];let u;r&&Ze(r,u=Un(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ga(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=et(t),c=a||ut;for(let u=0;u<s.length;u++){const d=s[u];t[d]=Ac(r,l,d,c[d],i,!Ze(c,d))}}return o}function Ac(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Ze(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&De(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=Zs(r);n=c[t]=l.call(null,e),u()}}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===us(t))&&(n=!0))}return n}function am(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!De(i)){const u=d=>{l=!0;const[h,f]=am(d,e,!0);Pt(o,h),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return dt(i)&&n.set(i,Br),Br;if(Oe(s))for(let u=0;u<s.length;u++){const d=Un(s[u]);dd(d)&&(o[d]=ut)}else if(s)for(const u in s){const d=Un(u);if(dd(d)){const h=s[u],f=o[d]=Oe(h)||De(h)?{type:h}:Pt({},h);if(f){const g=pd(Boolean,f.type),_=pd(String,f.type);f[0]=g>-1,f[1]=_<0||g<_,(g>-1||Ze(f,"default"))&&a.push(d)}}}const c=[o,a];return dt(i)&&n.set(i,c),c}function dd(i){return i[0]!=="$"&&!kr(i)}function hd(i){return i===null?"null":typeof i=="function"?i.name||"":typeof i=="object"&&i.constructor&&i.constructor.name||""}function fd(i,e){return hd(i)===hd(e)}function pd(i,e){return Oe(e)?e.findIndex(t=>fd(t,i)):De(e)&&fd(e,i)?0:-1}const lm=i=>i[0]==="_"||i==="$stable",Mu=i=>Oe(i)?i.map(cn):[cn(i)],Hv=(i,e,t)=>{if(e._n)return e;const n=qp((...r)=>Mu(e(...r)),t);return n._c=!1,n},cm=(i,e,t)=>{const n=i._ctx;for(const r in i){if(lm(r))continue;const s=i[r];if(De(s))e[r]=Hv(r,s,n);else if(s!=null){const o=Mu(s);e[r]=()=>o}}},um=(i,e)=>{const t=Mu(e);i.slots.default=()=>t},kv=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=et(e),ua(e,"_",t)):cm(e,i.slots={})}else i.slots={},e&&um(i,e);ua(i.slots,ja,1)},Vv=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=ut;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Pt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,cm(e,r)),o=e}else e&&(um(i,e),o={default:1});if(s)for(const a in r)!lm(a)&&o[a]==null&&delete r[a]};function ga(i,e,t,n,r=!1){if(Oe(i)){i.forEach((h,f)=>ga(h,e&&(Oe(e)?e[f]:e),t,n,r));return}if(Ns(n)&&!r)return;const s=n.shapeFlag&4?Su(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===ut?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(_t(c)?(u[c]=null,Ze(d,c)&&(d[c]=null)):Ft(c)&&(c.value=null)),De(l))wi(l,a,12,[o,u]);else{const h=_t(l),f=Ft(l);if(h||f){const g=()=>{if(i.f){const _=h?Ze(d,l)?d[l]:u[l]:l.value;r?Oe(_)&&iu(_,s):Oe(_)?_.includes(s)||_.push(s):h?(u[l]=[s],Ze(d,l)&&(d[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,Ze(d,l)&&(d[l]=o)):f&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,qt(g,t)):g()}}}let ai=!1;const zv=i=>i.namespaceURI.includes("svg")&&i.tagName!=="foreignObject",Gv=i=>i.namespaceURI.includes("MathML"),_o=i=>{if(zv(i))return"svg";if(Gv(i))return"mathml"},vo=i=>i.nodeType===8;function Wv(i){const{mt:e,p:t,o:{patchProp:n,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=i,u=(v,E)=>{if(!E.hasChildNodes()){t(null,v,E),fa(),E._vnode=v;return}ai=!1,d(E.firstChild,v,null,null,null),fa(),E._vnode=v,ai&&console.error("Hydration completed but contains mismatches.")},d=(v,E,C,b,w,O=!1)=>{const T=vo(v)&&v.data==="[",M=()=>_(v,E,C,b,w,T),{type:B,ref:X,shapeFlag:N,patchFlag:$}=E;let J=v.nodeType;E.el=v,$===-2&&(O=!1,E.dynamicChildren=null);let W=null;switch(B){case Zr:J!==3?E.children===""?(l(E.el=r(""),o(v),v),W=v):W=M():(v.data!==E.children&&(ai=!0,v.data=E.children),W=s(v));break;case Ni:A(v)?(W=s(v),m(E.el=v.content.firstChild,v,C)):J!==8||T?W=M():W=s(v);break;case ea:if(T&&(v=s(v),J=v.nodeType),J===1||J===3){W=v;const te=!E.children.length;for(let H=0;H<E.staticCount;H++)te&&(E.children+=W.nodeType===1?W.outerHTML:W.data),H===E.staticCount-1&&(E.anchor=W),W=s(W);return T?s(W):W}else M();break;case _n:T?W=g(v,E,C,b,w,O):W=M();break;default:if(N&1)(J!==1||E.type.toLowerCase()!==v.tagName.toLowerCase())&&!A(v)?W=M():W=h(v,E,C,b,w,O);else if(N&6){E.slotScopeIds=w;const te=o(v);if(T?W=p(v):vo(v)&&v.data==="teleport start"?W=p(v,v.data,"teleport end"):W=s(v),e(E,te,null,C,b,_o(te),O),Ns(E)){let H;T?(H=yt(_n),H.anchor=W?W.previousSibling:te.lastChild):H=v.nodeType===3?Mm(""):yt("div"),H.el=v,E.component.subTree=H}}else N&64?J!==8?W=M():W=E.type.hydrate(v,E,C,b,w,O,i,f):N&128&&(W=E.type.hydrate(v,E,C,b,_o(o(v)),w,O,i,d))}return X!=null&&ga(X,null,b,E),W},h=(v,E,C,b,w,O)=>{O=O||!!E.dynamicChildren;const{type:T,props:M,patchFlag:B,shapeFlag:X,dirs:N,transition:$}=E,J=T==="input"||T==="option";if(J||B!==-1){N&&wn(E,null,C,"created");let W=!1;if(A(v)){W=hm(b,$)&&C&&C.vnode.props&&C.vnode.props.appear;const H=v.content.firstChild;W&&$.beforeEnter(H),m(H,v,C),E.el=v=H}if(X&16&&!(M&&(M.innerHTML||M.textContent))){let H=f(v.firstChild,E,v,C,b,w,O);for(;H;){ai=!0;const oe=H;H=H.nextSibling,a(oe)}}else X&8&&v.textContent!==E.children&&(ai=!0,v.textContent=E.children);if(M)if(J||!O||B&48)for(const H in M)(J&&(H.endsWith("value")||H==="indeterminate")||Ks(H)&&!kr(H)||H[0]===".")&&n(v,H,null,M[H],void 0,void 0,C);else M.onClick&&n(v,"onClick",null,M.onClick,void 0,void 0,C);let te;(te=M&&M.onVnodeBeforeMount)&&an(te,C,E),N&&wn(E,null,C,"beforeMount"),((te=M&&M.onVnodeMounted)||N||W)&&Kp(()=>{te&&an(te,C,E),W&&$.enter(v),N&&wn(E,null,C,"mounted")},b)}return v.nextSibling},f=(v,E,C,b,w,O,T)=>{T=T||!!E.dynamicChildren;const M=E.children,B=M.length;for(let X=0;X<B;X++){const N=T?M[X]:M[X]=cn(M[X]);if(v)v=d(v,N,b,w,O,T);else{if(N.type===Zr&&!N.children)continue;ai=!0,t(null,N,C,null,b,w,_o(C),O)}}return v},g=(v,E,C,b,w,O)=>{const{slotScopeIds:T}=E;T&&(w=w?w.concat(T):T);const M=o(v),B=f(s(v),E,M,C,b,w,O);return B&&vo(B)&&B.data==="]"?s(E.anchor=B):(ai=!0,l(E.anchor=c("]"),M,B),B)},_=(v,E,C,b,w,O)=>{if(ai=!0,E.el=null,O){const B=p(v);for(;;){const X=s(v);if(X&&X!==B)a(X);else break}}const T=s(v),M=o(v);return a(v),t(null,E,M,T,C,b,_o(M),w),T},p=(v,E="[",C="]")=>{let b=0;for(;v;)if(v=s(v),v&&vo(v)&&(v.data===E&&b++,v.data===C)){if(b===0)return s(v);b--}return v},m=(v,E,C)=>{const b=E.parentNode;b&&b.replaceChild(v,E);let w=C;for(;w;)w.vnode.el===E&&(w.vnode.el=w.subTree.el=v),w=w.parent},A=v=>v.nodeType===1&&v.tagName.toLowerCase()==="template";return[u,d]}const qt=Kp;function Xv(i){return dm(i)}function jv(i){return dm(i,Wv)}function dm(i,e){const t=yp();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:f=dn,insertStaticContent:g}=i,_=(P,U,V,Q=null,S=null,y=null,I=void 0,D=null,k=!!U.dynamicChildren)=>{if(P===U)return;P&&!Ei(P,U)&&(Q=pe(P),be(P,S,y,!0),P=null),U.patchFlag===-2&&(k=!1,U.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:q}=U;switch(F){case Zr:p(P,U,V,Q);break;case Ni:m(P,U,V,Q);break;case ea:P==null&&A(U,V,Q,I);break;case _n:X(P,U,V,Q,S,y,I,D,k);break;default:q&1?C(P,U,V,Q,S,y,I,D,k):q&6?N(P,U,V,Q,S,y,I,D,k):(q&64||q&128)&&F.process(P,U,V,Q,S,y,I,D,k,Pe)}ne!=null&&S&&ga(ne,P&&P.ref,y,U||P,!U)},p=(P,U,V,Q)=>{if(P==null)n(U.el=a(U.children),V,Q);else{const S=U.el=P.el;U.children!==P.children&&c(S,U.children)}},m=(P,U,V,Q)=>{P==null?n(U.el=l(U.children||""),V,Q):U.el=P.el},A=(P,U,V,Q)=>{[P.el,P.anchor]=g(P.children,U,V,Q,P.el,P.anchor)},v=({el:P,anchor:U},V,Q)=>{let S;for(;P&&P!==U;)S=h(P),n(P,V,Q),P=S;n(U,V,Q)},E=({el:P,anchor:U})=>{let V;for(;P&&P!==U;)V=h(P),r(P),P=V;r(U)},C=(P,U,V,Q,S,y,I,D,k)=>{U.type==="svg"?I="svg":U.type==="math"&&(I="mathml"),P==null?b(U,V,Q,S,y,I,D,k):T(P,U,S,y,I,D,k)},b=(P,U,V,Q,S,y,I,D)=>{let k,F;const{props:ne,shapeFlag:q,transition:se,dirs:ce}=P;if(k=P.el=o(P.type,y,ne&&ne.is,ne),q&8?u(k,P.children):q&16&&O(P.children,k,null,Q,S,ml(P,y),I,D),ce&&wn(P,null,Q,"created"),w(k,P,P.scopeId,I,Q),ne){for(const ae in ne)ae!=="value"&&!kr(ae)&&s(k,ae,null,ne[ae],y,P.children,Q,S,me);"value"in ne&&s(k,"value",null,ne.value,y),(F=ne.onVnodeBeforeMount)&&an(F,Q,P)}ce&&wn(P,null,Q,"beforeMount");const ie=hm(S,se);ie&&se.beforeEnter(k),n(k,U,V),((F=ne&&ne.onVnodeMounted)||ie||ce)&&qt(()=>{F&&an(F,Q,P),ie&&se.enter(k),ce&&wn(P,null,Q,"mounted")},S)},w=(P,U,V,Q,S)=>{if(V&&f(P,V),Q)for(let y=0;y<Q.length;y++)f(P,Q[y]);if(S){let y=S.subTree;if(U===y){const I=S.vnode;w(P,I,I.scopeId,I.slotScopeIds,S.parent)}}},O=(P,U,V,Q,S,y,I,D,k=0)=>{for(let F=k;F<P.length;F++){const ne=P[F]=D?vi(P[F]):cn(P[F]);_(null,ne,U,V,Q,S,y,I,D)}},T=(P,U,V,Q,S,y,I)=>{const D=U.el=P.el;let{patchFlag:k,dynamicChildren:F,dirs:ne}=U;k|=P.patchFlag&16;const q=P.props||ut,se=U.props||ut;let ce;if(V&&Di(V,!1),(ce=se.onVnodeBeforeUpdate)&&an(ce,V,U,P),ne&&wn(U,P,V,"beforeUpdate"),V&&Di(V,!0),F?M(P.dynamicChildren,F,D,V,Q,ml(U,S),y):I||H(P,U,D,null,V,Q,ml(U,S),y,!1),k>0){if(k&16)B(D,U,q,se,V,Q,S);else if(k&2&&q.class!==se.class&&s(D,"class",null,se.class,S),k&4&&s(D,"style",q.style,se.style,S),k&8){const ie=U.dynamicProps;for(let ae=0;ae<ie.length;ae++){const _e=ie[ae],he=q[_e],ge=se[_e];(ge!==he||_e==="value")&&s(D,_e,he,ge,S,P.children,V,Q,me)}}k&1&&P.children!==U.children&&u(D,U.children)}else!I&&F==null&&B(D,U,q,se,V,Q,S);((ce=se.onVnodeUpdated)||ne)&&qt(()=>{ce&&an(ce,V,U,P),ne&&wn(U,P,V,"updated")},Q)},M=(P,U,V,Q,S,y,I)=>{for(let D=0;D<U.length;D++){const k=P[D],F=U[D],ne=k.el&&(k.type===_n||!Ei(k,F)||k.shapeFlag&70)?d(k.el):V;_(k,F,ne,null,Q,S,y,I,!0)}},B=(P,U,V,Q,S,y,I)=>{if(V!==Q){if(V!==ut)for(const D in V)!kr(D)&&!(D in Q)&&s(P,D,V[D],null,I,U.children,S,y,me);for(const D in Q){if(kr(D))continue;const k=Q[D],F=V[D];k!==F&&D!=="value"&&s(P,D,F,k,I,U.children,S,y,me)}"value"in Q&&s(P,"value",V.value,Q.value,I)}},X=(P,U,V,Q,S,y,I,D,k)=>{const F=U.el=P?P.el:a(""),ne=U.anchor=P?P.anchor:a("");let{patchFlag:q,dynamicChildren:se,slotScopeIds:ce}=U;ce&&(D=D?D.concat(ce):ce),P==null?(n(F,V,Q),n(ne,V,Q),O(U.children||[],V,ne,S,y,I,D,k)):q>0&&q&64&&se&&P.dynamicChildren?(M(P.dynamicChildren,se,V,S,y,I,D),(U.key!=null||S&&U===S.subTree)&&fm(P,U,!0)):H(P,U,V,ne,S,y,I,D,k)},N=(P,U,V,Q,S,y,I,D,k)=>{U.slotScopeIds=D,P==null?U.shapeFlag&512?S.ctx.activate(U,V,Q,I,k):$(U,V,Q,S,y,I,k):J(P,U,k)},$=(P,U,V,Q,S,y,I)=>{const D=P.component=Jv(P,Q,S);if(xu(P)&&(D.ctx.renderer=Pe),t0(D),D.asyncDep){if(S&&S.registerDep(D,W),!P.el){const k=D.subTree=yt(Ni);m(null,k,U,V)}}else W(D,P,U,V,S,y,I)},J=(P,U,V)=>{const Q=U.component=P.component;if(ov(P,U,V))if(Q.asyncDep&&!Q.asyncResolved){te(Q,U,V);return}else Q.next=U,ev(Q.update),Q.effect.dirty=!0,Q.update();else U.el=P.el,Q.vnode=U},W=(P,U,V,Q,S,y,I)=>{const D=()=>{if(P.isMounted){let{next:ne,bu:q,u:se,parent:ce,vnode:ie}=P;{const Ne=pm(P);if(Ne){ne&&(ne.el=ie.el,te(P,ne,I)),Ne.asyncDep.then(()=>{P.isUnmounted||D()});return}}let ae=ne,_e;Di(P,!1),ne?(ne.el=ie.el,te(P,ne,I)):ne=ie,q&&cl(q),(_e=ne.props&&ne.props.onVnodeBeforeUpdate)&&an(_e,ce,ne,ie),Di(P,!0);const he=dl(P),ge=P.subTree;P.subTree=he,_(ge,he,d(ge.el),pe(ge),P,S,y),ne.el=he.el,ae===null&&pu(P,he.el),se&&qt(se,S),(_e=ne.props&&ne.props.onVnodeUpdated)&&qt(()=>an(_e,ce,ne,ie),S)}else{let ne;const{el:q,props:se}=U,{bm:ce,m:ie,parent:ae}=P,_e=Ns(U);if(Di(P,!1),ce&&cl(ce),!_e&&(ne=se&&se.onVnodeBeforeMount)&&an(ne,ae,U),Di(P,!0),q&&Be){const he=()=>{P.subTree=dl(P),Be(q,P.subTree,P,S,null)};_e?U.type.__asyncLoader().then(()=>!P.isUnmounted&&he()):he()}else{const he=P.subTree=dl(P);_(null,he,V,Q,P,S,y),U.el=he.el}if(ie&&qt(ie,S),!_e&&(ne=se&&se.onVnodeMounted)){const he=U;qt(()=>an(ne,ae,he),S)}(U.shapeFlag&256||ae&&Ns(ae.vnode)&&ae.vnode.shapeFlag&256)&&P.a&&qt(P.a,S),P.isMounted=!0,U=V=Q=null}},k=P.effect=new su(D,dn,()=>za(F),P.scope),F=P.update=()=>{k.dirty&&k.run()};F.id=P.uid,Di(P,!0),F()},te=(P,U,V)=>{U.component=P;const Q=P.vnode.props;P.vnode=U,P.next=null,Bv(P,U.props,Q,V),Vv(P,U.children,V),or(),nd(P),ar()},H=(P,U,V,Q,S,y,I,D,k=!1)=>{const F=P&&P.children,ne=P?P.shapeFlag:0,q=U.children,{patchFlag:se,shapeFlag:ce}=U;if(se>0){if(se&128){le(F,q,V,Q,S,y,I,D,k);return}else if(se&256){oe(F,q,V,Q,S,y,I,D,k);return}}ce&8?(ne&16&&me(F,S,y),q!==F&&u(V,q)):ne&16?ce&16?le(F,q,V,Q,S,y,I,D,k):me(F,S,y,!0):(ne&8&&u(V,""),ce&16&&O(q,V,Q,S,y,I,D,k))},oe=(P,U,V,Q,S,y,I,D,k)=>{P=P||Br,U=U||Br;const F=P.length,ne=U.length,q=Math.min(F,ne);let se;for(se=0;se<q;se++){const ce=U[se]=k?vi(U[se]):cn(U[se]);_(P[se],ce,V,null,S,y,I,D,k)}F>ne?me(P,S,y,!0,!1,q):O(U,V,Q,S,y,I,D,k,q)},le=(P,U,V,Q,S,y,I,D,k)=>{let F=0;const ne=U.length;let q=P.length-1,se=ne-1;for(;F<=q&&F<=se;){const ce=P[F],ie=U[F]=k?vi(U[F]):cn(U[F]);if(Ei(ce,ie))_(ce,ie,V,null,S,y,I,D,k);else break;F++}for(;F<=q&&F<=se;){const ce=P[q],ie=U[se]=k?vi(U[se]):cn(U[se]);if(Ei(ce,ie))_(ce,ie,V,null,S,y,I,D,k);else break;q--,se--}if(F>q){if(F<=se){const ce=se+1,ie=ce<ne?U[ce].el:Q;for(;F<=se;)_(null,U[F]=k?vi(U[F]):cn(U[F]),V,ie,S,y,I,D,k),F++}}else if(F>se)for(;F<=q;)be(P[F],S,y,!0),F++;else{const ce=F,ie=F,ae=new Map;for(F=ie;F<=se;F++){const Le=U[F]=k?vi(U[F]):cn(U[F]);Le.key!=null&&ae.set(Le.key,F)}let _e,he=0;const ge=se-ie+1;let Ne=!1,He=0;const ke=new Array(ge);for(F=0;F<ge;F++)ke[F]=0;for(F=ce;F<=q;F++){const Le=P[F];if(he>=ge){be(Le,S,y,!0);continue}let xe;if(Le.key!=null)xe=ae.get(Le.key);else for(_e=ie;_e<=se;_e++)if(ke[_e-ie]===0&&Ei(Le,U[_e])){xe=_e;break}xe===void 0?be(Le,S,y,!0):(ke[xe-ie]=F+1,xe>=He?He=xe:Ne=!0,_(Le,U[xe],V,null,S,y,I,D,k),he++)}const je=Ne?qv(ke):Br;for(_e=je.length-1,F=ge-1;F>=0;F--){const Le=ie+F,xe=U[Le],x=Le+1<ne?U[Le+1].el:Q;ke[F]===0?_(null,xe,V,x,S,y,I,D,k):Ne&&(_e<0||F!==je[_e]?ye(xe,V,x,2):_e--)}}},ye=(P,U,V,Q,S=null)=>{const{el:y,type:I,transition:D,children:k,shapeFlag:F}=P;if(F&6){ye(P.component.subTree,U,V,Q);return}if(F&128){P.suspense.move(U,V,Q);return}if(F&64){I.move(P,U,V,Pe);return}if(I===_n){n(y,U,V);for(let q=0;q<k.length;q++)ye(k[q],U,V,Q);n(P.anchor,U,V);return}if(I===ea){v(P,U,V);return}if(Q!==2&&F&1&&D)if(Q===0)D.beforeEnter(y),n(y,U,V),qt(()=>D.enter(y),S);else{const{leave:q,delayLeave:se,afterLeave:ce}=D,ie=()=>n(y,U,V),ae=()=>{q(y,()=>{ie(),ce&&ce()})};se?se(y,ie,ae):ae()}else n(y,U,V)},be=(P,U,V,Q=!1,S=!1)=>{const{type:y,props:I,ref:D,children:k,dynamicChildren:F,shapeFlag:ne,patchFlag:q,dirs:se}=P;if(D!=null&&ga(D,null,V,P,!0),ne&256){U.ctx.deactivate(P);return}const ce=ne&1&&se,ie=!Ns(P);let ae;if(ie&&(ae=I&&I.onVnodeBeforeUnmount)&&an(ae,U,P),ne&6)ue(P.component,V,Q);else{if(ne&128){P.suspense.unmount(V,Q);return}ce&&wn(P,null,U,"beforeUnmount"),ne&64?P.type.remove(P,U,V,S,Pe,Q):F&&(y!==_n||q>0&&q&64)?me(F,U,V,!1,!0):(y===_n&&q&384||!S&&ne&16)&&me(k,U,V),Q&&$e(P)}(ie&&(ae=I&&I.onVnodeUnmounted)||ce)&&qt(()=>{ae&&an(ae,U,P),ce&&wn(P,null,U,"unmounted")},V)},$e=P=>{const{type:U,el:V,anchor:Q,transition:S}=P;if(U===_n){ee(V,Q);return}if(U===ea){E(P);return}const y=()=>{r(V),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(P.shapeFlag&1&&S&&!S.persisted){const{leave:I,delayLeave:D}=S,k=()=>I(V,y);D?D(P.el,y,k):k()}else y()},ee=(P,U)=>{let V;for(;P!==U;)V=h(P),r(P),P=V;r(U)},ue=(P,U,V)=>{const{bum:Q,scope:S,update:y,subTree:I,um:D}=P;Q&&cl(Q),S.stop(),y&&(y.active=!1,be(I,P,U,V)),D&&qt(D,U),qt(()=>{P.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},me=(P,U,V,Q=!1,S=!1,y=0)=>{for(let I=y;I<P.length;I++)be(P[I],U,V,Q,S)},pe=P=>P.shapeFlag&6?pe(P.component.subTree):P.shapeFlag&128?P.suspense.next():h(P.anchor||P.el);let Ae=!1;const Re=(P,U,V)=>{P==null?U._vnode&&be(U._vnode,null,null,!0):_(U._vnode||null,P,U,null,null,null,V),Ae||(Ae=!0,nd(),fa(),Ae=!1),U._vnode=P},Pe={p:_,um:be,m:ye,r:$e,mt:$,mc:O,pc:H,pbc:M,n:pe,o:i};let G,Be;return e&&([G,Be]=e(Pe)),{render:Re,hydrate:G,createApp:Ov(Re,G)}}function ml({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Di({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function hm(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function fm(i,e,t=!1){const n=i.children,r=e.children;if(Oe(n)&&Oe(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=vi(r[s]),a.el=o.el),t||fm(o,a)),a.type===Zr&&(a.el=o.el)}}function qv(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function pm(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pm(e)}const Yv=i=>i.__isTeleport,_n=Symbol.for("v-fgt"),Zr=Symbol.for("v-txt"),Ni=Symbol.for("v-cmt"),ea=Symbol.for("v-stc"),Ds=[];let hn=null;function $n(i=!1){Ds.push(hn=i?null:[])}function mm(){Ds.pop(),hn=Ds[Ds.length-1]||null}let Qr=1;function md(i){Qr+=i}function gm(i){return i.dynamicChildren=Qr>0?hn||Br:null,mm(),Qr>0&&hn&&hn.push(i),i}function _m(i,e,t,n,r,s){return gm(xm(i,e,t,n,r,s,!0))}function Dr(i,e,t,n,r){return gm(yt(i,e,t,n,r,!0))}function _a(i){return i?i.__v_isVNode===!0:!1}function Ei(i,e){return i.type===e.type&&i.key===e.key}const ja="__vInternal",vm=({key:i})=>i??null,ta=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?_t(i)||Ft(i)||De(i)?{i:en,r:i,k:e,f:!!t}:i:null);function xm(i,e=null,t=null,n=0,r=null,s=i===_n?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&vm(e),ref:e&&ta(e),scopeId:Wa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:en};return a?(Eu(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),Qr>0&&!o&&hn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hn.push(l),l}const yt=$v;function $v(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Yp)&&(i=Ni),_a(i)){const a=Jr(i,e,!0);return t&&Eu(a,t),Qr>0&&!s&&hn&&(a.shapeFlag&6?hn[hn.indexOf(i)]=a:hn.push(a)),a.patchFlag|=-2,a}if(o0(i)&&(i=i.__vccOpts),e){e=ym(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=ka(a)),dt(l)&&(Fp(l)&&!Oe(l)&&(l=Pt({},l)),e.style=Ha(l))}const o=_t(i)?1:lv(i)?128:Yv(i)?64:dt(i)?4:De(i)?2:0;return xm(i,e,t,n,r,o,s,!0)}function ym(i){return i?Fp(i)||ja in i?Pt({},i):i:null}function Jr(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?Kv(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&vm(a),ref:e&&e.ref?t&&r?Oe(r)?r.concat(ta(e)):[r,ta(e)]:ta(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==_n?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Jr(i.ssContent),ssFallback:i.ssFallback&&Jr(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Mm(i=" ",e=0){return yt(Zr,null,i,e)}function cn(i){return i==null||typeof i=="boolean"?yt(Ni):Oe(i)?yt(_n,null,i.slice()):typeof i=="object"?vi(i):yt(Zr,null,String(i))}function vi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Jr(i)}function Eu(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Eu(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(ja in e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else De(e)?(e={default:e,_ctx:en},t=32):(e=String(e),n&64?(t=16,e=[Mm(e)]):t=8);i.children=e,i.shapeFlag|=t}function Kv(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=ka([e.class,n.class]));else if(r==="style")e.style=Ha([e.style,n.style]);else if(Ks(r)){const s=e[r],o=n[r];o&&s!==o&&!(Oe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function an(i,e,t,n=null){Mn(i,e,7,[t,n])}const Zv=im();let Qv=0;function Jv(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||Zv,s={uid:Qv++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:am(n,r),emitsOptions:jp(n,r),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:n.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=nv.bind(null,s),i.ce&&i.ce(s),s}let Mt=null;const e0=()=>Mt||en;let va,wc;{const i=yp(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};va=e("__VUE_INSTANCE_SETTERS__",t=>Mt=t),wc=e("__VUE_SSR_SETTERS__",t=>Qs=t)}const Zs=i=>{const e=Mt;return va(i),i.scope.on(),()=>{i.scope.off(),va(e)}},gd=()=>{Mt&&Mt.scope.off(),va(null)};function Em(i){return i.vnode.shapeFlag&4}let Qs=!1;function t0(i,e=!1){e&&wc(e);const{props:t,children:n}=i.vnode,r=Em(i);Fv(i,t,r,e),kv(i,n);const s=r?n0(i,e):void 0;return e&&wc(!1),s}function n0(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=Bp(new Proxy(i.ctx,Cv));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?r0(i):null,s=Zs(i);or();const o=wi(n,i,0,[i.props,r]);if(ar(),s(),_p(o)){if(o.then(gd,gd),e)return o.then(a=>{Rc(i,a,e)}).catch(a=>{ds(a,i,0)});i.asyncDep=o}else Rc(i,o,e)}else Sm(i,e)}function Rc(i,e,t){De(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:dt(e)&&(i.setupState=zp(e)),Sm(i,t)}let _d;function Sm(i,e,t){const n=i.type;if(!i.render){if(!e&&_d&&!n.render){const r=n.template||yu(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Pt(Pt({isCustomElement:s,delimiters:a},o),l);n.render=_d(r,c)}}i.render=n.render||dn}{const r=Zs(i);or();try{Pv(i)}finally{ar(),r()}}}function i0(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(e,t){return Yt(i,"get","$attrs"),e[t]}}))}function r0(i){const e=t=>{i.exposed=t||{}};return{get attrs(){return i0(i)},slots:i.slots,emit:i.emit,expose:e}}function Su(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(zp(Bp(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Us)return Us[t](i)},has(e,t){return t in e||t in Us}}))}function s0(i,e=!0){return De(i)?i.displayName||i.name:i.name||e&&i.__name}function o0(i){return De(i)&&"__vccOpts"in i}const Tm=(i,e)=>X_(i,e,Qs);function a0(i,e,t){const n=arguments.length;return n===2?dt(e)&&!Oe(e)?_a(e)?yt(i,null,[e]):yt(i,e):yt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&_a(t)&&(t=[t]),yt(i,e,t))}const bm="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const l0="http://www.w3.org/2000/svg",c0="http://www.w3.org/1998/Math/MathML",xi=typeof document<"u"?document:null,vd=xi&&xi.createElement("template"),u0={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?xi.createElementNS(l0,i):e==="mathml"?xi.createElementNS(c0,i):xi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>xi.createTextNode(i),createComment:i=>xi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>xi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{vd.innerHTML=n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i;const a=vd.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},d0=Symbol("_vtc");function h0(i,e,t){const n=i[d0];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const xd=Symbol("_vod"),f0=Symbol("_vsh"),p0=Symbol(""),m0=/(^|;)\s*display\s*:/;function g0(i,e,t){const n=i.style,r=_t(t);let s=!1;if(t&&!r){if(e)if(_t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&na(n,a,"")}else for(const o in e)t[o]==null&&na(n,o,"");for(const o in t)o==="display"&&(s=!0),na(n,o,t[o])}else if(r){if(e!==t){const o=n[p0];o&&(t+=";"+o),n.cssText=t,s=m0.test(t)}}else e&&i.removeAttribute("style");xd in i&&(i[xd]=s?n.display:"",i[f0]&&(n.display="none"))}const yd=/\s*!important$/;function na(i,e,t){if(Oe(t))t.forEach(n=>na(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=_0(i,e);yd.test(t)?i.setProperty(us(n),t.replace(yd,""),"important"):i[n]=t}}const Md=["Webkit","Moz","ms"],gl={};function _0(i,e){const t=gl[e];if(t)return t;let n=Un(e);if(n!=="filter"&&n in i)return gl[e]=n;n=Ba(n);for(let r=0;r<Md.length;r++){const s=Md[r]+n;if(s in i)return gl[e]=s}return e}const Ed="http://www.w3.org/1999/xlink";function v0(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Ed,e.slice(6,e.length)):i.setAttributeNS(Ed,e,t);else{const s=M_(e);t==null||s&&!Mp(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function x0(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}const a=i.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?i.getAttribute("value")||"":i.value,u=t??"";(c!==u||!("_value"in i))&&(i.value=u),t==null&&i.removeAttribute(e),i._value=t;return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=Mp(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function y0(i,e,t,n){i.addEventListener(e,t,n)}function M0(i,e,t,n){i.removeEventListener(e,t,n)}const Sd=Symbol("_vei");function E0(i,e,t,n,r=null){const s=i[Sd]||(i[Sd]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=S0(e);if(n){const c=s[e]=A0(n,r);y0(i,a,c,l)}else o&&(M0(i,a,o,l),s[e]=void 0)}}const Td=/(?:Once|Passive|Capture)$/;function S0(i){let e;if(Td.test(i)){e={};let n;for(;n=i.match(Td);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):us(i.slice(2)),e]}let _l=0;const T0=Promise.resolve(),b0=()=>_l||(T0.then(()=>_l=0),_l=Date.now());function A0(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Mn(w0(n,t.value),e,5,[n])};return t.value=i,t.attached=b0(),t}function w0(i,e){if(Oe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const bd=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,R0=(i,e,t,n,r,s,o,a,l)=>{const c=r==="svg";e==="class"?h0(i,n,c):e==="style"?g0(i,t,n):Ks(e)?nu(e)||E0(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):C0(i,e,n,c))?x0(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),v0(i,e,n,c))};function C0(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&bd(e)&&De(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return bd(e)&&_t(t)?!1:e in i}const Am=Pt({patchProp:R0},u0);let Os,Ad=!1;function P0(){return Os||(Os=Xv(Am))}function L0(){return Os=Ad?Os:jv(Am),Ad=!0,Os}const I0=(...i)=>{const e=P0().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Rm(n);if(!r)return;const s=e._component;!De(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,wm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},N0=(...i)=>{const e=L0().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Rm(n);if(r)return t(r,!0,wm(r))},e};function wm(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function Rm(i){return _t(i)?document.querySelector(i):i}const U0=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,D0=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,O0=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function F0(i,e){if(i==="__proto__"||i==="constructor"&&e&&typeof e=="object"&&"prototype"in e){B0(i);return}return e}function B0(i){console.warn(`[destr] Dropping "${i}" key to prevent prototype pollution.`)}function xa(i,e={}){if(typeof i!="string")return i;const t=i.trim();if(i[0]==='"'&&i.endsWith('"')&&!i.includes("\\"))return t.slice(1,-1);if(t.length<=9){const n=t.toLowerCase();if(n==="true")return!0;if(n==="false")return!1;if(n==="undefined")return;if(n==="null")return null;if(n==="nan")return Number.NaN;if(n==="infinity")return Number.POSITIVE_INFINITY;if(n==="-infinity")return Number.NEGATIVE_INFINITY}if(!O0.test(i)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return i}try{if(U0.test(i)||D0.test(i)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(i,F0)}return JSON.parse(i)}catch(n){if(e.strict)throw n;return i}}const H0=/#/g,k0=/&/g,V0=/\//g,z0=/=/g,Tu=/\+/g,G0=/%5e/gi,W0=/%60/gi,X0=/%7c/gi,j0=/%20/gi;function q0(i){return encodeURI(""+i).replace(X0,"|")}function Cc(i){return q0(typeof i=="string"?i:JSON.stringify(i)).replace(Tu,"%2B").replace(j0,"+").replace(H0,"%23").replace(k0,"%26").replace(W0,"`").replace(G0,"^").replace(V0,"%2F")}function vl(i){return Cc(i).replace(z0,"%3D")}function ya(i=""){try{return decodeURIComponent(""+i)}catch{return""+i}}function Y0(i){return ya(i.replace(Tu," "))}function $0(i){return ya(i.replace(Tu," "))}function Cm(i=""){const e={};i[0]==="?"&&(i=i.slice(1));for(const t of i.split("&")){const n=t.match(/([^=]+)=?(.*)/)||[];if(n.length<2)continue;const r=Y0(n[1]);if(r==="__proto__"||r==="constructor")continue;const s=$0(n[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function K0(i,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(t=>`${vl(i)}=${Cc(t)}`).join("&"):`${vl(i)}=${Cc(e)}`:vl(i)}function Pm(i){return Object.keys(i).filter(e=>i[e]!==void 0).map(e=>K0(e,i[e])).filter(Boolean).join("&")}const Z0=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,Q0=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,J0=/^([/\\]\s*){2,}[^/\\]/,ex=/^[\s\0]*(blob|data|javascript|vbscript):$/i,tx=/\/$|\/\?|\/#/,nx=/^\.?\//;function hs(i,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?Z0.test(i):Q0.test(i)||(e.acceptRelative?J0.test(i):!1)}function ix(i){return!!i&&ex.test(i)}function Pc(i="",e){return e?tx.test(i):i.endsWith("/")}function bu(i="",e){if(!e)return(Pc(i)?i.slice(0,-1):i)||"/";if(!Pc(i,!0))return i||"/";let t=i,n="";const r=i.indexOf("#");r>=0&&(t=i.slice(0,r),n=i.slice(r));const[s,...o]=t.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+n}function Lc(i="",e){if(!e)return i.endsWith("/")?i:i+"/";if(Pc(i,!0))return i||"/";let t=i,n="";const r=i.indexOf("#");if(r>=0&&(t=i.slice(0,r),n=i.slice(r),!t))return n;const[s,...o]=t.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+n}function rx(i=""){return i.startsWith("/")}function wd(i=""){return rx(i)?i:"/"+i}function sx(i,e){if(Im(e)||hs(i))return i;const t=bu(e);return i.startsWith(t)?i:qa(t,i)}function ox(i,e){if(Im(e))return i;const t=bu(e);if(!i.startsWith(t))return i;const n=i.slice(t.length);return n[0]==="/"?n:"/"+n}function Lm(i,e){const t=Js(i),n={...Cm(t.search),...e};return t.search=Pm(n),Dm(t)}function Im(i){return!i||i==="/"}function ax(i){return i&&i!=="/"}function qa(i,...e){let t=i||"";for(const n of e.filter(r=>ax(r)))if(t){const r=n.replace(nx,"");t=Lc(t)+r}else t=n;return t}function Nm(...i){var o,a,l,c;const e=/\/(?!\/)/,t=i.filter(Boolean),n=[];let r=0;for(const u of t)if(!(!u||u==="/")){for(const[d,h]of u.split(e).entries())if(!(!h||h===".")){if(h===".."){if(n.length===1&&hs(n[0]))continue;n.pop(),r--;continue}if(d===1&&((o=n[n.length-1])!=null&&o.endsWith(":/"))){n[n.length-1]+="/"+h;continue}n.push(h),r++}}let s=n.join("/");return r>=0?(a=t[0])!=null&&a.startsWith("/")&&!s.startsWith("/")?s="/"+s:(l=t[0])!=null&&l.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,(c=t[t.length-1])!=null&&c.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function lx(i,e,t={}){return t.trailingSlash||(i=Lc(i),e=Lc(e)),t.leadingSlash||(i=wd(i),e=wd(e)),t.encoding||(i=ya(i),e=ya(e)),i===e}const Um=Symbol.for("ufo:protocolRelative");function Js(i="",e){const t=i.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(t){const[,d,h=""]=t;return{protocol:d.toLowerCase(),pathname:h,href:d+h,auth:"",host:"",search:"",hash:""}}if(!hs(i,{acceptRelative:!0}))return e?Js(e+i):Rd(i);const[,n="",r,s=""]=i.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[],{pathname:l,search:c,hash:u}=Rd(a.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:c,hash:u,[Um]:!n}}function Rd(i=""){const[e="",t="",n=""]=(i.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:t,hash:n}}function Dm(i){const e=i.pathname||"",t=i.search?(i.search.startsWith("?")?"":"?")+i.search:"",n=i.hash||"",r=i.auth?i.auth+"@":"",s=i.host||"";return(i.protocol||i[Um]?(i.protocol||"")+"//":"")+r+s+e+t+n}class cx extends Error{constructor(e,t){super(e,t),this.name="FetchError",t!=null&&t.cause&&!this.cause&&(this.cause=t.cause)}}function ux(i){var l,c,u,d,h;const e=((l=i.error)==null?void 0:l.message)||((c=i.error)==null?void 0:c.toString())||"",t=((u=i.request)==null?void 0:u.method)||((d=i.options)==null?void 0:d.method)||"GET",n=((h=i.request)==null?void 0:h.url)||String(i.request)||"/",r=`[${t}] ${JSON.stringify(n)}`,s=i.response?`${i.response.status} ${i.response.statusText}`:"<no response>",o=`${r}: ${s}${e?` ${e}`:""}`,a=new cx(o,i.error?{cause:i.error}:void 0);for(const f of["request","options","response"])Object.defineProperty(a,f,{get(){return i[f]}});for(const[f,g]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,f,{get(){return i.response&&i.response[g]}});return a}const dx=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Cd(i="GET"){return dx.has(i.toUpperCase())}function hx(i){if(i===void 0)return!1;const e=typeof i;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(i)?!0:i.buffer?!1:i.constructor&&i.constructor.name==="Object"||typeof i.toJSON=="function"}const fx=new Set(["image/svg","application/xml","application/xhtml","application/html"]),px=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function mx(i=""){if(!i)return"json";const e=i.split(";").shift()||"";return px.test(e)?"json":fx.has(e)||e.startsWith("text/")?"text":"blob"}function gx(i,e,t=globalThis.Headers){const n={...e,...i};if(e!=null&&e.params&&(i!=null&&i.params)&&(n.params={...e==null?void 0:e.params,...i==null?void 0:i.params}),e!=null&&e.query&&(i!=null&&i.query)&&(n.query={...e==null?void 0:e.query,...i==null?void 0:i.query}),e!=null&&e.headers&&(i!=null&&i.headers)){n.headers=new t((e==null?void 0:e.headers)||{});for(const[r,s]of new t((i==null?void 0:i.headers)||{}))n.headers.set(r,s)}return n}const _x=new Set([408,409,425,429,500,502,503,504]),vx=new Set([101,204,205,304]);function Om(i={}){const{fetch:e=globalThis.fetch,Headers:t=globalThis.Headers,AbortController:n=globalThis.AbortController}=i;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let u;typeof a.options.retry=="number"?u=a.options.retry:u=Cd(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):_x.has(d))){const h=a.options.retryDelay||0;return h>0&&await new Promise(f=>setTimeout(f,h)),s(a.request,{...a.options,retry:u-1})}}const c=ux(a);throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}const s=async function(l,c={}){var f;const u={request:l,options:gx(c,i.defaults,t),response:void 0,error:void 0};u.options.method=(f=u.options.method)==null?void 0:f.toUpperCase(),u.options.onRequest&&await u.options.onRequest(u),typeof u.request=="string"&&(u.options.baseURL&&(u.request=sx(u.request,u.options.baseURL)),(u.options.query||u.options.params)&&(u.request=Lm(u.request,{...u.options.params,...u.options.query}))),u.options.body&&Cd(u.options.method)&&(hx(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new t(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half")));let d;if(!u.options.signal&&u.options.timeout){const g=new n;d=setTimeout(()=>g.abort(),u.options.timeout),u.options.signal=g.signal}try{u.response=await e(u.request,u.options)}catch(g){return u.error=g,u.options.onRequestError&&await u.options.onRequestError(u),await r(u)}finally{d&&clearTimeout(d)}if(u.response.body&&!vx.has(u.response.status)&&u.options.method!=="HEAD"){const g=(u.options.parseResponse?"json":u.options.responseType)||mx(u.response.headers.get("content-type")||"");switch(g){case"json":{const _=await u.response.text(),p=u.options.parseResponse||xa;u.response._data=p(_);break}case"stream":{u.response._data=u.response.body;break}default:u.response._data=await u.response[g]()}}return u.options.onResponse&&await u.options.onResponse(u),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await u.options.onResponseError(u),await r(u)):u.response},o=async function(l,c){return(await s(l,c))._data};return o.raw=s,o.native=(...a)=>e(...a),o.create=(a={})=>Om({...i,defaults:{...i.defaults,...a}}),o}const Au=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),xx=Au.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),yx=Au.Headers,Mx=Au.AbortController,Ex=Om({fetch:xx,Headers:yx,AbortController:Mx}),Sx=Ex,Tx=()=>{var i;return((i=window==null?void 0:window.__NUXT__)==null?void 0:i.config)||{}},Ma=Tx().app,bx=()=>Ma.baseURL,Ax=()=>Ma.buildAssetsDir,wu=(...i)=>Nm(Fm(),Ax(),...i),Fm=(...i)=>{const e=Ma.cdnURL||Ma.baseURL;return i.length?Nm(e,...i):e};globalThis.__buildAssetsURL=wu,globalThis.__publicAssetsURL=Fm;globalThis.$fetch||(globalThis.$fetch=Sx.create({baseURL:bx()}));function Ic(i,e={},t){for(const n in i){const r=i[n],s=t?`${t}:${n}`:n;typeof r=="object"&&r!==null?Ic(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const wx={run:i=>i()},Rx=()=>wx,Bm=typeof console.createTask<"u"?console.createTask:Rx;function Cx(i,e){const t=e.shift(),n=Bm(t);return i.reduce((r,s)=>r.then(()=>n.run(()=>s(...e))),Promise.resolve())}function Px(i,e){const t=e.shift(),n=Bm(t);return Promise.all(i.map(r=>n.run(()=>r(...e))))}function xl(i,e){for(const t of[...i])t(e)}class Lx{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,n={}){if(!e||typeof t!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!n.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let n,r=(...s)=>(typeof n=="function"&&n(),n=void 0,r=void 0,t(...s));return n=this.hook(e,r),n}removeHook(e,t){if(this._hooks[e]){const n=this._hooks[e].indexOf(t);n!==-1&&this._hooks[e].splice(n,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const n=this._hooks[e]||[];delete this._hooks[e];for(const r of n)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=Ic(e),n=Object.keys(t).map(r=>this.hook(r,t[r]));return()=>{for(const r of n.splice(0,n.length))r()}}removeHooks(e){const t=Ic(e);for(const n in t)this.removeHook(n,t[n])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith(Cx,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(Px,e,...t)}callHookWith(e,t,...n){const r=this._before||this._after?{name:t,args:n,context:{}}:void 0;this._before&&xl(this._before,r);const s=e(t in this._hooks?[...this._hooks[t]]:[],n);return s instanceof Promise?s.finally(()=>{this._after&&r&&xl(this._after,r)}):(this._after&&r&&xl(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}}function Hm(){return new Lx}function Ix(i={}){let e,t=!1;const n=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(i.asyncContext){const o=i.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r&&e===void 0){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||n(o),e=o,t=!0},unset:()=>{e=void 0,t=!1},call:(o,a)=>{n(o),e=o;try{return r?r.run(o,a):a()}finally{t||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},c=()=>e===o?l:void 0;Nc.add(c);try{const u=r?r.run(o,a):a();return t||(e=void 0),await u}finally{Nc.delete(c)}}}}function Nx(i={}){const e={};return{get(t,n={}){return e[t]||(e[t]=Ix({...i,...n})),e[t],e[t]}}}const Ea=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Pd="__unctx__",Ux=Ea[Pd]||(Ea[Pd]=Nx()),Dx=(i,e={})=>Ux.get(i,e),Ld="__unctx_async_handlers__",Nc=Ea[Ld]||(Ea[Ld]=new Set);function km(i){const e=[];for(const r of Nc){const s=r();s&&e.push(s)}const t=()=>{for(const r of e)r()};let n=i();return n&&typeof n=="object"&&"catch"in n&&(n=n.catch(r=>{throw t(),r})),[n,t]}const Vm=Dx("nuxt-app",{asyncContext:!1}),Ox="__nuxt_plugin";function Fx(i){let e=0;const t={_scope:E_(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.11.2"},get vue(){return t.vueApp.version}},payload:Ii({data:{},state:{},once:new Set,_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:r=>t._scope.run(()=>kx(t,r)),isHydrating:!0,deferHydration(){if(!t.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return t.isHydrating=!1,t.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...i};t.hooks=Hm(),t.hook=t.hooks.hook,t.callHook=t.hooks.callHook,t.provide=(r,s)=>{const o="$"+r;xo(t,o,s),xo(t.vueApp.config.globalProperties,o,s)},xo(t.vueApp,"$nuxt",t),xo(t.vueApp.config.globalProperties,"$nuxt",t);{window.addEventListener("nuxt.preloadError",s=>{t.callHook("app:chunkError",{error:s.payload})}),window.useNuxtApp=window.useNuxtApp||Rt;const r=t.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});t.hook("app:mounted",r)}const n=t.payload.config;return t.provide("config",n),t}async function Bx(i,e){if(e.hooks&&i.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:t}=await i.runWithContext(()=>e(i))||{};if(t&&typeof t=="object")for(const n in t)i.provide(n,t[n])}}async function Hx(i,e){const t=[],n=[],r=[],s=[];let o=0;async function a(l){var u;const c=((u=l.dependsOn)==null?void 0:u.filter(d=>e.some(h=>h._name===d)&&!t.includes(d)))??[];if(c.length>0)n.push([new Set(c),l]);else{const d=Bx(i,l).then(async()=>{l._name&&(t.push(l._name),await Promise.all(n.map(async([h,f])=>{h.has(l._name)&&(h.delete(l._name),h.size===0&&(o++,await a(f)))})))});l.parallel?r.push(d.catch(h=>s.push(h))):await d}}for(const l of e)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s.length)throw s[0]}function lr(i){if(typeof i=="function")return i;const e=i._name||i.name;return delete i.name,Object.assign(i.setup||(()=>{}),i,{[Ox]:!0,_name:e})}function kx(i,e,t){const n=()=>t?e(...t):e();return Vm.set(i),i.vueApp.runWithContext(n)}function Vx(){var e;let i;return sm()&&(i=(e=e0())==null?void 0:e.appContext.app.$nuxt),i=i||Vm.tryUse(),i||null}function Rt(){const i=Vx();if(!i)throw new Error("[nuxt] instance unavailable");return i}function Sa(i){return Rt().$config}function xo(i,e,t){Object.defineProperty(i,e,{get:()=>t})}function zx(i,e){return{ctx:{table:i},matchAll:t=>Gm(t,i,e)}}function zm(i){const e={};for(const t in i)e[t]=t==="dynamic"?new Map(Object.entries(i[t]).map(([n,r])=>[n,zm(r)])):new Map(Object.entries(i[t]));return e}function Gx(i){return zx(zm(i))}function Gm(i,e,t){t!==!0&&i.endsWith("/")&&(i=i.slice(0,-1)||"/");const n=[];for(const[s,o]of Id(e.wildcard))(i===s||i.startsWith(s+"/"))&&n.push(o);for(const[s,o]of Id(e.dynamic))if(i.startsWith(s+"/")){const a="/"+i.slice(s.length).split("/").splice(2).join("/");n.push(...Gm(a,o))}const r=e.static.get(i);return r&&n.push(r),n.filter(Boolean)}function Id(i){return[...i.entries()].sort((e,t)=>e[0].length-t[0].length)}function yl(i){if(i===null||typeof i!="object")return!1;const e=Object.getPrototypeOf(i);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in i?!1:Symbol.toStringTag in i?Object.prototype.toString.call(i)==="[object Module]":!0}function Uc(i,e,t=".",n){if(!yl(e))return Uc(i,{},t,n);const r=Object.assign({},e);for(const s in i){if(s==="__proto__"||s==="constructor")continue;const o=i[s];o!=null&&(n&&n(r,s,o,t)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:yl(o)&&yl(r[s])?r[s]=Uc(o,r[s],(t?`${t}.`:"")+s.toString(),n):r[s]=o))}return r}function Wm(i){return(...e)=>e.reduce((t,n)=>Uc(t,n,"",i),{})}const Wx=Wm(),Xx=Wm((i,e,t)=>{if(i[e]!==void 0&&typeof t=="function")return i[e]=t(i[e]),!0});function jx(i,e){try{return e in i}catch{return!1}}var qx=Object.defineProperty,Yx=(i,e,t)=>e in i?qx(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,ji=(i,e,t)=>(Yx(i,typeof e!="symbol"?e+"":e,t),t);class Dc extends Error{constructor(e,t={}){super(e,t),ji(this,"statusCode",500),ji(this,"fatal",!1),ji(this,"unhandled",!1),ji(this,"statusMessage"),ji(this,"data"),ji(this,"cause"),t.cause&&!this.cause&&(this.cause=t.cause)}toJSON(){const e={message:this.message,statusCode:Oc(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Xm(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}ji(Dc,"__h3_error__",!0);function $x(i){if(typeof i=="string")return new Dc(i);if(Kx(i))return i;const e=new Dc(i.message??i.statusMessage??"",{cause:i.cause||i});if(jx(i,"stack"))try{Object.defineProperty(e,"stack",{get(){return i.stack}})}catch{try{e.stack=i.stack}catch{}}if(i.data&&(e.data=i.data),i.statusCode?e.statusCode=Oc(i.statusCode,e.statusCode):i.status&&(e.statusCode=Oc(i.status,e.statusCode)),i.statusMessage?e.statusMessage=i.statusMessage:i.statusText&&(e.statusMessage=i.statusText),e.statusMessage){const t=e.statusMessage;Xm(e.statusMessage)!==t&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return i.fatal!==void 0&&(e.fatal=i.fatal),i.unhandled!==void 0&&(e.unhandled=i.unhandled),e}function Kx(i){var e;return((e=i==null?void 0:i.constructor)==null?void 0:e.__h3_error__)===!0}const Zx=/[^\u0009\u0020-\u007E]/g;function Xm(i=""){return i.replace(Zx,"")}function Oc(i,e=200){return!i||(typeof i=="string"&&(i=Number.parseInt(i,10)),i<100||i>999)?e:i}const jm=Symbol("route"),eo=()=>{var i;return(i=Rt())==null?void 0:i.$router},qm=()=>sm()?Xr(jm,Rt()._route):Rt()._route;const Qx=()=>{try{if(Rt()._processingMiddleware)return!0}catch{return!1}return!1},Jx=(i,e)=>{i||(i="/");const t=typeof i=="string"?i:Lm(i.path||"/",i.query||{})+(i.hash||"");if(e!=null&&e.open){const{target:a="_blank",windowFeatures:l={}}=e.open,c=Object.entries(l).filter(([u,d])=>d!==void 0).map(([u,d])=>`${u.toLowerCase()}=${d}`).join(", ");return open(t,a,c),Promise.resolve()}const n=(e==null?void 0:e.external)||hs(t,{acceptRelative:!0});if(n){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const a=Js(t).protocol;if(a&&ix(a))throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)}const r=Qx();if(!n&&r)return i;const s=eo(),o=Rt();return n?(o._scope.stop(),e!=null&&e.replace?location.replace(t):location.href=t,r?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?s.replace(i):s.push(i)},Ym="__nuxt_error",Ru=()=>K_(Rt().payload,"error"),ey=i=>{const e=Cu(i);try{const t=Rt(),n=Ru();t.hooks.callHook("app:error",e),n.value=n.value||e}catch{throw e}return e},ty=async(i={})=>{const e=Rt(),t=Ru();e.callHook("app:error:cleared",i),i.redirect&&await eo().replace(i.redirect),t.value=null},ny=i=>!!i&&typeof i=="object"&&Ym in i,Cu=i=>{const e=$x(i);return Object.defineProperty(e,Ym,{value:!0,configurable:!1,writable:!1}),e},iy="modulepreload",ry=function(i,e){return i[0]==="."?new URL(i,e).href:i},Nd={},sy=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.all(t.map(l=>{if(l=ry(l,n),l in Nd)return;Nd[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!n)for(let f=s.length-1;f>=0;f--){const g=s[f];if(g.href===l&&(!c||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":iy,c||(h.as="script",h.crossOrigin=""),h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((f,g)=>{h.addEventListener("load",f),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}return r.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Ud=(...i)=>sy(...i).catch(e=>{const t=new Event("nuxt.preloadError");throw t.payload=e,window.dispatchEvent(t),e}),oy=-1,ay=-2,ly=-3,cy=-4,uy=-5,dy=-6;function hy(i,e){return fy(JSON.parse(i),e)}function fy(i,e){if(typeof i=="number")return r(i,!0);if(!Array.isArray(i)||i.length===0)throw new Error("Invalid input");const t=i,n=Array(t.length);function r(s,o=!1){if(s===oy)return;if(s===ly)return NaN;if(s===cy)return 1/0;if(s===uy)return-1/0;if(s===dy)return-0;if(o)throw new Error("Invalid input");if(s in n)return n[s];const a=t[s];if(!a||typeof a!="object")n[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],c=e==null?void 0:e[l];if(c)return n[s]=c(r(a[1]));switch(l){case"Date":n[s]=new Date(a[1]);break;case"Set":const u=new Set;n[s]=u;for(let f=1;f<a.length;f+=1)u.add(r(a[f]));break;case"Map":const d=new Map;n[s]=d;for(let f=1;f<a.length;f+=2)d.set(r(a[f]),r(a[f+1]));break;case"RegExp":n[s]=new RegExp(a[1],a[2]);break;case"Object":n[s]=Object(a[1]);break;case"BigInt":n[s]=BigInt(a[1]);break;case"null":const h=Object.create(null);n[s]=h;for(let f=1;f<a.length;f+=2)h[a[f]]=r(a[f+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);n[s]=l;for(let c=0;c<a.length;c+=1){const u=a[c];u!==ay&&(l[c]=r(u))}}else{const l={};n[s]=l;for(const c in a){const u=a[c];l[c]=r(u)}}return n[s]}return r(0)}function py(i){return Array.isArray(i)?i:[i]}const my=["title","titleTemplate","script","style","noscript"],ia=["base","meta","link","style","script","noscript"],gy=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],_y=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],$m=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],vy=typeof window<"u";function Pu(i){let e=9;for(let t=0;t<i.length;)e=Math.imul(e^i.charCodeAt(t++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Dd(i){return i._h||Pu(i._d?i._d:`${i.tag}:${i.textContent||i.innerHTML||""}:${Object.entries(i.props).map(([e,t])=>`${e}:${String(t)}`).join(",")}`)}function Km(i,e){const{props:t,tag:n}=i;if(_y.includes(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const r=["id"];n==="meta"&&r.push("name","property","http-equiv");for(const s of r)if(typeof t[s]<"u"){const o=String(t[s]);return e&&!e(o)?!1:`${n}:${s}:${o}`}return!1}function Od(i,e){return i==null?e||null:typeof i=="function"?i(e):i}async function xy(i,e,t){const n={tag:i,props:await Zm(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(i)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(i))};return $m.forEach(r=>{const s=typeof n.props[r]<"u"?n.props[r]:t[r];typeof s<"u"&&((!["innerHTML","textContent","children"].includes(r)||my.includes(n.tag))&&(n[r==="children"?"innerHTML":r]=s),delete n.props[r])}),n.props.body&&(n.tagPosition="bodyClose",delete n.props.body),n.tag==="script"&&typeof n.innerHTML=="object"&&(n.innerHTML=JSON.stringify(n.innerHTML),n.props.type=n.props.type||"application/json"),Array.isArray(n.props.content)?n.props.content.map(r=>({...n,props:{...n.props,content:r}})):n}function yy(i,e){const t=i==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,n])=>n).map(([n,r])=>i==="style"?`${n}:${r}`:n)),(Array.isArray(e)?e.join(t):e).split(t).filter(n=>n.trim()).filter(Boolean).join(t)}async function Zm(i,e){for(const t of Object.keys(i)){if(["class","style"].includes(t)){i[t]=yy(t,i[t]);continue}if(i[t]instanceof Promise&&(i[t]=await i[t]),!e&&!$m.includes(t)){const n=String(i[t]),r=t.startsWith("data-");n==="true"||n===""?i[t]=r?"true":!0:i[t]||(r&&n==="false"?i[t]="false":delete i[t])}}return i}const My=10;async function Ey(i){const e=[];return Object.entries(i.resolvedInput).filter(([t,n])=>typeof n<"u"&&gy.includes(t)).forEach(([t,n])=>{const r=py(n);e.push(...r.map(s=>xy(t,s,i)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((t,n)=>(t._e=i._i,i.mode&&(t._m=i.mode),t._p=(i._i<<My)+n,t))}const Fd={base:-10,title:10},Bd={critical:-80,high:-10,low:20};function Ta(i){let e=100;const t=i.tagPriority;return typeof t=="number"?t:(i.tag==="meta"?(i.props["http-equiv"]==="content-security-policy"&&(e=-30),i.props.charset&&(e=-20),i.props.name==="viewport"&&(e=-15)):i.tag==="link"&&i.props.rel==="preconnect"?e=20:i.tag in Fd&&(e=Fd[i.tag]),typeof t=="string"&&t in Bd?e+Bd[t]:e)}const Sy=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Hd=["onload","onerror","onabort","onprogress","onloadstart"],li="%separator";function ra(i,e,t){if(typeof i!="string"||!i.includes("%"))return i;function n(o){let a;return["s","pageTitle"].includes(o)?a=e.pageTitle:o.includes(".")?a=o.split(".").reduce((l,c)=>l&&l[c]||void 0,e):a=e[o],typeof a<"u"?(a||"").replace(/"/g,'\\"'):!1}let r=i;try{r=decodeURI(i)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=n(o.slice(1));typeof a=="string"&&(i=i.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,c)=>`${a}${c}`).trim())}),i.includes(li)&&(i.endsWith(li)&&(i=i.slice(0,-li.length).trim()),i.startsWith(li)&&(i=i.slice(li.length).trim()),i=i.replace(new RegExp(`\\${li}\\s*\\${li}`,"g"),li),i=ra(i,{separator:t},t)),i}async function Qm(i,e={}){var u;const t=e.document||i.resolvedOptions.document;if(!t||!i.dirty)return;const n={shouldRender:!0,tags:[]};if(await i.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const r=(await i.resolveTags()).map(d=>({tag:d,id:ia.includes(d.tag)?Dd(d):d.tag,shouldRender:!0}));let s=i._dom;if(!s){s={elMap:{htmlAttrs:t.documentElement,bodyAttrs:t.body}};for(const d of["body","head"]){const h=(u=t[d])==null?void 0:u.children,f=[];for(const g of[...h].filter(_=>ia.includes(_.tagName.toLowerCase()))){const _={tag:g.tagName.toLowerCase(),props:await Zm(g.getAttributeNames().reduce((A,v)=>({...A,[v]:g.getAttribute(v)}),{})),innerHTML:g.innerHTML};let p=1,m=Km(_);for(;m&&f.find(A=>A._d===m);)m=`${m}:${p++}`;_._d=m||void 0,f.push(_),s.elMap[g.getAttribute("data-hid")||Dd(_)]=g}}}s.pendingSideEffects={...s.sideEffects||{}},s.sideEffects={};function o(d,h,f){const g=`${d}:${h}`;s.sideEffects[g]=f,delete s.pendingSideEffects[g]}function a({id:d,$el:h,tag:f}){const g=f.tag.endsWith("Attrs");s.elMap[d]=h,g||(["textContent","innerHTML"].forEach(_=>{f[_]&&f[_]!==h[_]&&(h[_]=f[_])}),o(d,"el",()=>{var _;(_=s.elMap[d])==null||_.remove(),delete s.elMap[d]}));for(const[_,p]of Object.entries(f._eventHandlers||{}))h.getAttribute(`data-${_}`)!==""&&((f.tag==="bodyAttrs"?t.defaultView:h).addEventListener(_.replace("on",""),p.bind(h)),h.setAttribute(`data-${_}`,""));Object.entries(f.props).forEach(([_,p])=>{const m=`attr:${_}`;if(_==="class")for(const A of(p||"").split(" ").filter(Boolean))g&&o(d,`${m}:${A}`,()=>h.classList.remove(A)),!h.classList.contains(A)&&h.classList.add(A);else if(_==="style")for(const A of(p||"").split(";").filter(Boolean)){const[v,...E]=A.split(":").map(C=>C.trim());o(d,`${m}:${A}:${v}`,()=>{h.style.removeProperty(v)}),h.style.setProperty(v,E.join(":"))}else h.getAttribute(_)!==p&&h.setAttribute(_,p===!0?"":String(p)),g&&o(d,m,()=>h.removeAttribute(_))})}const l=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const d of r){const{tag:h,shouldRender:f,id:g}=d;if(f){if(h.tag==="title"){t.title=h.textContent;continue}d.$el=d.$el||s.elMap[g],d.$el?a(d):ia.includes(h.tag)&&l.push(d)}}for(const d of l){const h=d.tag.tagPosition||"head";d.$el=t.createElement(d.tag.tag),a(d),c[h]=c[h]||t.createDocumentFragment(),c[h].appendChild(d.$el)}for(const d of r)await i.hooks.callHook("dom:renderTag",d,t,o);c.head&&t.head.appendChild(c.head),c.bodyOpen&&t.body.insertBefore(c.bodyOpen,t.body.firstChild),c.bodyClose&&t.body.appendChild(c.bodyClose),Object.values(s.pendingSideEffects).forEach(d=>d()),i._dom=s,i.dirty=!1,await i.hooks.callHook("dom:rendered",{renders:r})}async function Ty(i,e={}){const t=e.delayFn||(n=>setTimeout(n,10));return i._domUpdatePromise=i._domUpdatePromise||new Promise(n=>t(async()=>{await Qm(i,e),delete i._domUpdatePromise,n()}))}function by(i){return e=>{var n,r;const t=((r=(n=e.resolvedOptions.document)==null?void 0:n.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return t&&e.push(JSON.parse(t)),{mode:"client",hooks:{"entries:updated":function(s){Ty(s,i)}}}}}const Ay=["templateParams","htmlAttrs","bodyAttrs"],wy={hooks:{"tag:normalise":function({tag:i}){["hid","vmid","key"].forEach(n=>{i.props[n]&&(i.key=i.props[n],delete i.props[n])});const t=Km(i)||(i.key?`${i.tag}:${i.key}`:!1);t&&(i._d=t)},"tags:resolve":function(i){const e={};i.tags.forEach(n=>{const r=(n.key?`${n.tag}:${n.key}`:n._d)||n._p,s=e[r];if(s){let a=n==null?void 0:n.tagDuplicateStrategy;if(!a&&Ay.includes(n.tag)&&(a="merge"),a==="merge"){const l=s.props;["class","style"].forEach(c=>{l[c]&&(n.props[c]?(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),n.props[c]=`${l[c]} ${n.props[c]}`):n.props[c]=l[c])}),e[r].props={...l,...n.props};return}else if(n._e===s._e){s._duped=s._duped||[],n._d=`${s._d}:${s._duped.length+1}`,s._duped.push(n);return}else if(Ta(n)>Ta(s))return}const o=Object.keys(n.props).length+(n.innerHTML?1:0)+(n.textContent?1:0);if(ia.includes(n.tag)&&o===0){delete e[r];return}e[r]=n});const t=[];Object.values(e).forEach(n=>{const r=n._duped;delete n._duped,t.push(n),r&&t.push(...r)}),i.tags=t,i.tags=i.tags.filter(n=>!(n.tag==="meta"&&(n.props.name||n.props.property)&&!n.props.content))}}},Ry={mode:"server",hooks:{"tags:resolve":function(i){const e={};i.tags.filter(t=>["titleTemplate","templateParams","title"].includes(t.tag)&&t._m==="server").forEach(t=>{e[t.tag]=t.tag.startsWith("title")?t.textContent:t.props}),Object.keys(e).length&&i.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},Cy=["script","link","bodyAttrs"],Py=i=>({hooks:{"tags:resolve":function(e){for(const t of e.tags.filter(n=>Cy.includes(n.tag)))Object.entries(t.props).forEach(([n,r])=>{n.startsWith("on")&&typeof r=="function"&&(i.ssr&&Hd.includes(n)?t.props[n]=`this.dataset.${n}fired = true`:delete t.props[n],t._eventHandlers=t._eventHandlers||{},t._eventHandlers[n]=r)}),i.ssr&&t._eventHandlers&&(t.props.src||t.props.href)&&(t.key=t.key||Pu(t.props.src||t.props.href))},"dom:renderTag":function({$el:e,tag:t}){var n,r;for(const s of Object.keys((e==null?void 0:e.dataset)||{}).filter(o=>Hd.some(a=>`${a}fired`===o))){const o=s.replace("fired","");(r=(n=t._eventHandlers)==null?void 0:n[o])==null||r.call(e,new Event(o.replace("on","")))}}}}),Ly=["link","style","script","noscript"],Iy={hooks:{"tag:normalise":({tag:i})=>{i.key&&Ly.includes(i.tag)&&(i.props["data-hid"]=i._h=Pu(i.key))}}},Ny={hooks:{"tags:resolve":i=>{const e=t=>{var n;return(n=i.tags.find(r=>r._d===t))==null?void 0:n._p};for(const{prefix:t,offset:n}of Sy)for(const r of i.tags.filter(s=>typeof s.tagPriority=="string"&&s.tagPriority.startsWith(t))){const s=e(r.tagPriority.replace(t,""));typeof s<"u"&&(r._p=s+n)}i.tags.sort((t,n)=>t._p-n._p).sort((t,n)=>Ta(t)-Ta(n))}}},Uy={meta:"content",link:"href",htmlAttrs:"lang"},Dy=i=>({hooks:{"tags:resolve":e=>{var a;const{tags:t}=e,n=(a=t.find(l=>l.tag==="title"))==null?void 0:a.textContent,r=t.findIndex(l=>l.tag==="templateParams"),s=r!==-1?t[r].props:{},o=s.separator||"|";delete s.separator,s.pageTitle=ra(s.pageTitle||n||"",s,o);for(const l of t.filter(c=>c.processTemplateParams!==!1)){const c=Uy[l.tag];c&&typeof l.props[c]=="string"?l.props[c]=ra(l.props[c],s,o):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(u=>{typeof l[u]=="string"&&(l[u]=ra(l[u],s,o))})}i._templateParams=s,i._separator=o,e.tags=t.filter(l=>l.tag!=="templateParams")}}}),Oy={hooks:{"tags:resolve":i=>{const{tags:e}=i;let t=e.findIndex(r=>r.tag==="titleTemplate");const n=e.findIndex(r=>r.tag==="title");if(n!==-1&&t!==-1){const r=Od(e[t].textContent,e[n].textContent);r!==null?e[n].textContent=r||e[n].textContent:delete e[n]}else if(t!==-1){const r=Od(e[t].textContent);r!==null&&(e[t].textContent=r,e[t].tag="title",t=-1)}t!==-1&&delete e[t],i.tags=e.filter(Boolean)}}},Fy={hooks:{"tags:afterResolve":function(i){for(const e of i.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let Jm;function By(i={}){const e=Hy(i);return e.use(by()),Jm=e}function kd(i,e){return!i||i==="server"&&e||i==="client"&&!e}function Hy(i={}){const e=Hm();e.addHooks(i.hooks||{}),i.document=i.document||(vy?document:void 0);const t=!i.document,n=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let r=0,s=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:i,hooks:e,headEntries(){return s},use(l){const c=typeof l=="function"?l(a):l;(!c.key||!o.some(u=>u.key===c.key))&&(o.push(c),kd(c.mode,t)&&e.addHooks(c.hooks||{}))},push(l,c){c==null||delete c.head;const u={_i:r++,input:l,...c};return kd(u.mode,t)&&(s.push(u),n()),{dispose(){s=s.filter(d=>d._i!==u._i),e.callHook("entries:updated",a),n()},patch(d){s=s.map(h=>(h._i===u._i&&(h.input=u.input=d),h)),n()}}},async resolveTags(){const l={tags:[],entries:[...s]};await e.callHook("entries:resolve",l);for(const c of l.entries){const u=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(u):u),c.resolvedInput)for(const d of await Ey(c)){const h={tag:d,entry:c,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",h),l.tags.push(h.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:t};return[wy,Ry,Py,Iy,Ny,Dy,Oy,Fy,...(i==null?void 0:i.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function ky(){return Jm}const Vy=bm.startsWith("3");function zy(i){return typeof i=="function"?i():At(i)}function Fc(i,e=""){if(i instanceof Promise)return i;const t=zy(i);return!i||!t?t:Array.isArray(t)?t.map(n=>Fc(n,e)):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([n,r])=>n==="titleTemplate"||n.startsWith("on")?[n,At(r)]:[n,Fc(r,n)])):t}const Gy={hooks:{"entries:resolve":function(i){for(const e of i.entries)e.resolvedInput=Fc(e.input)}}},eg="usehead";function Wy(i){return{install(t){Vy&&(t.config.globalProperties.$unhead=i,t.config.globalProperties.$head=i,t.provide(eg,i))}}.install}function Xy(i={}){i.domDelayFn=i.domDelayFn||(t=>fu(()=>setTimeout(()=>t(),0)));const e=By(i);return e.use(Gy),e.install=Wy(e),e}const Bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hc="__unhead_injection_handler__";function jy(i){Bc[Hc]=i}function XP(){if(Hc in Bc)return Bc[Hc]();const i=Xr(eg);return i||ky()}const qy={nuxt:{buildId:"5e0c8968-7900-4126-bd30-a713b07942d3"}},Yy=Xx(qy);function tg(){const i=Rt();return i._appConfig||(i._appConfig=Ii(Yy)),i._appConfig}const jP={componentName:"NuxtLink"},$y="#__nuxt";let sa,ng;function Ky(){var e;const i=(e=tg().nuxt)==null?void 0:e.buildId;return sa=$fetch(wu(`builds/meta/${i}.json`)),sa.then(t=>{ng=Gx(t.matcher)}),sa}function Ya(){return sa||Ky()}async function Lu(i){return await Ya(),Wx({},...ng.matchAll(i).reverse())}function Vd(i,e={}){const t=Qy(i,e),n=Rt(),r=n._payloadCache=n._payloadCache||{};return t in r||(r[t]=Jy(i).then(s=>s?ig(t).then(o=>o||(delete r[t],null)):(r[t]=null,null))),r[t]}const Zy="_payload.json";function Qy(i,e={}){var r;const t=new URL(i,"http://localhost");if(t.host!=="localhost"||hs(t.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+i);const n=e.hash||(e.fresh?Date.now():(r=tg().nuxt)==null?void 0:r.buildId);return qa(Sa().app.baseURL,t.pathname,Zy+(n?`?${n}`:""))}async function ig(i){const e=fetch(i).then(t=>t.text().then(rg));try{return await e}catch(t){console.warn("[nuxt] Cannot load payload ",i,t)}return null}async function Jy(i=qm().path){if(i=bu(i),(await Ya()).prerendered.includes(i))return!0;const t=await Lu(i);return!!t.prerender&&!t.redirect}let yo=null;async function eM(){if(yo)return yo;const i=document.getElementById("__NUXT_DATA__");if(!i)return{};const e=await rg(i.textContent||""),t=i.dataset.src?await ig(i.dataset.src):void 0;return yo={...e,...t,...window.__NUXT__},yo}async function rg(i){return await hy(i,Rt()._payloadRevivers)}function tM(i,e){Rt()._payloadRevivers[i]=e}const zd={NuxtError:i=>Cu(i),EmptyShallowRef:i=>td(i==="_"?void 0:i==="0n"?BigInt(0):xa(i)),EmptyRef:i=>nr(i==="_"?void 0:i==="0n"?BigInt(0):xa(i)),ShallowRef:i=>td(i),ShallowReactive:i=>Dp(i),Ref:i=>nr(i),Reactive:i=>Ii(i)},nM=lr({name:"nuxt:revive-payload:client",order:-30,async setup(i){let e,t;for(const n in zd)tM(n,zd[n]);Object.assign(i.payload,([e,t]=km(()=>i.runWithContext(eM)),e=await e,t(),e)),window.__NUXT__=i.payload}}),iM=[],rM=lr({name:"nuxt:head",enforce:"pre",setup(i){const e=Xy({plugins:iM});jy(()=>Rt().vueApp._context.provides.usehead),i.vueApp.use(e);{let t=!0;const n=async()=>{t=!1,await Qm(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!t}),i.hooks.hook("page:start",()=>{t=!0}),i.hooks.hook("page:finish",()=>{i.isHydrating||n()}),i.hooks.hook("app:error",n),i.hooks.hook("app:suspense:resolve",n)}}}),sM=async i=>{let e,t;const n=([e,t]=km(()=>Lu(i.path)),e=await e,t(),e);if(n.redirect)return hs(n.redirect,{acceptRelative:!0})?(window.location.href=n.redirect,!1):n.redirect},oM=[sM];function Ml(i){typeof i=="object"&&(i=Dm({pathname:i.path||"",search:Pm(i.query||{}),hash:i.hash||""}));const e=Js(i.toString());return{path:e.pathname,fullPath:i,query:Cm(e.search),hash:e.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:i}}const aM=lr({name:"nuxt:router",enforce:"pre",setup(i){const e=ox(window.location.pathname,Sa().app.baseURL)+window.location.search+window.location.hash,t=[],n={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},r=(d,h)=>(n[d].push(h),()=>n[d].splice(n[d].indexOf(h),1)),s=Sa().app.baseURL,o=Ii(Ml(e));async function a(d,h){try{const f=Ml(d);for(const g of n["navigate:before"]){const _=await g(f,o);if(_===!1||_ instanceof Error)return;if(typeof _=="string"&&_.length)return a(_,!0)}for(const g of n["resolve:before"])await g(f,o);Object.assign(o,f),window.history[h?"replaceState":"pushState"]({},"",qa(s,f.fullPath)),i.isHydrating||await i.runWithContext(ty);for(const g of n["navigate:after"])await g(f,o)}catch(f){for(const g of n.error)await g(f)}}const c={currentRoute:Tm(()=>o),isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:d=>a(d,!1),replace:d=>a(d,!0),back:()=>window.history.go(-1),go:d=>window.history.go(d),forward:()=>window.history.go(1),beforeResolve:d=>r("resolve:before",d),beforeEach:d=>r("navigate:before",d),afterEach:d=>r("navigate:after",d),onError:d=>r("error",d),resolve:Ml,addRoute:(d,h)=>{t.push(h)},getRoutes:()=>t,hasRoute:d=>t.some(h=>h.name===d),removeRoute:d=>{const h=t.findIndex(f=>f.name===d);h!==-1&&t.splice(h,1)}};i.vueApp.component("RouterLink",vu({functional:!0,props:{to:{type:String,required:!0},custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(d,{slots:h})=>{const f=()=>a(d.to,d.replace);return()=>{var _;const g=c.resolve(d.to);return d.custom?(_=h.default)==null?void 0:_.call(h,{href:d.to,navigate:f,route:g}):a0("a",{href:d.to,onClick:p=>(p.preventDefault(),f())},h)}}})),window.addEventListener("popstate",d=>{const h=d.target.location;c.replace(h.href.replace(h.origin,""))}),i._route=o,i._middleware=i._middleware||{global:[],named:{}};const u=i.payload.state._layout;return i.hooks.hookOnce("app:created",async()=>{c.beforeEach(async(d,h)=>{d.meta=Ii(d.meta||{}),i.isHydrating&&u&&!ir(d.meta.layout)&&(d.meta.layout=u),i._processingMiddleware=!0;{const f=new Set([...oM,...i._middleware.global]);{const g=await i.runWithContext(()=>Lu(d.path));if(g.appMiddleware)for(const _ in g.appMiddleware){const p=i._middleware.named[_];if(!p)return;g.appMiddleware[_]?f.add(p):f.delete(p)}}for(const g of f){const _=await i.runWithContext(()=>g(d,h));if(_!==!0&&(_||_===!1))return _}}}),c.afterEach(()=>{delete i._processingMiddleware}),await c.replace(e),lx(o.fullPath,e)||await i.runWithContext(()=>Jx(o.fullPath))}),{provide:{route:o,router:c}}}}),Gd=globalThis.requestIdleCallback||(i=>{const e=Date.now(),t={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{i(t)},1)}),qP=globalThis.cancelIdleCallback||(i=>{clearTimeout(i)}),sg=i=>{const e=Rt();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Gd(i)}):Gd(i)},lM=lr({name:"nuxt:payload",setup(i){eo().beforeResolve(async(e,t)=>{if(e.path===t.path)return;const n=await Vd(e.path);n&&Object.assign(i.static.data,n.data)}),sg(()=>{var e;i.hooks.hook("link:prefetch",async t=>{Js(t).protocol||await Vd(t)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Ya,1e3)})}}),cM=lr(i=>{let e;async function t(){const n=await Ya();e&&clearTimeout(e),e=setTimeout(t,1e3*60*60);try{const r=await $fetch(wu("builds/latest.json")+`?${Date.now()}`);r.id!==n.id&&i.hooks.callHook("app:manifest:update",r)}catch{}}sg(()=>{e=setTimeout(t,1e3*60*60)})}),uM=lr({name:"nuxt:global-components"});function dM(i={}){const e=i.path||window.location.pathname;let t={};try{t=xa(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(i.force||(t==null?void 0:t.path)!==e||(t==null?void 0:t.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(i.ttl??1e4)}))}catch{}if(i.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Rt().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const hM=lr({name:"nuxt:chunk-reload",setup(i){const e=eo(),t=Sa(),n=new Set;e.beforeEach(()=>{n.clear()}),i.hook("app:chunkError",({error:s})=>{n.add(s)});function r(s){const a="href"in s&&s.href[0]==="#"?t.app.baseURL+s.href:qa(t.app.baseURL,s.fullPath);dM({path:a,persistState:!0})}i.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((s,o)=>{n.has(s)&&r(o)})}}),fM=[nM,rM,aM,lM,cM,uM,hM];/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vn="163",dr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pM=0,Wd=1,mM=2,og=1,gM=2,Yn=3,ei=0,jt=1,un=2,Ri=0,jr=1,Xd=2,jd=3,qd=4,_M=5,$i=100,vM=101,xM=102,yM=103,MM=104,EM=200,SM=201,TM=202,bM=203,kc=204,Vc=205,AM=206,wM=207,RM=208,CM=209,PM=210,LM=211,IM=212,NM=213,UM=214,DM=0,OM=1,FM=2,ba=3,BM=4,HM=5,kM=6,VM=7,ag=0,zM=1,GM=2,Ci=0,WM=1,XM=2,jM=3,qM=4,YM=5,$M=6,KM=7,Yd="attached",ZM="detached",lg=300,es=301,ts=302,zc=303,Gc=304,$a=306,ns=1e3,Ti=1001,Aa=1002,Wt=1003,cg=1004,Ls=1005,Jt=1006,oa=1007,Kn=1008,Pi=1009,QM=1010,JM=1011,ug=1012,dg=1013,is=1014,In=1015,wa=1016,hg=1017,fg=1018,to=1020,eE=35902,tE=1021,nE=1022,yn=1023,iE=1024,rE=1025,qr=1026,Ws=1027,pg=1028,mg=1029,sE=1030,gg=1031,_g=1033,El=33776,Sl=33777,Tl=33778,bl=33779,$d=35840,Kd=35841,Zd=35842,Qd=35843,vg=36196,Jd=37492,eh=37496,th=37808,nh=37809,ih=37810,rh=37811,sh=37812,oh=37813,ah=37814,lh=37815,ch=37816,uh=37817,dh=37818,hh=37819,fh=37820,ph=37821,Al=36492,mh=36494,gh=36495,oE=36283,_h=36284,vh=36285,xh=36286,Xs=2300,rs=2301,wl=2302,yh=2400,Mh=2401,Eh=2402,aE=2500,lE=0,xg=1,Wc=2,cE=3200,uE=3201,Iu=0,dE=1,Si="",zt="srgb",Lt="srgb-linear",Nu="display-p3",Ka="display-p3-linear",Ra="linear",lt="srgb",Ca="rec709",Pa="p3",fr=7680,Sh=519,hE=512,fE=513,pE=514,yg=515,mE=516,gE=517,_E=518,vE=519,Xc=35044,xE=35048,Th="300 es",Zn=2e3,La=2001;class cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bh=1234567;const Fs=Math.PI/180,ss=180/Math.PI;function En(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function Uu(i,e){return(i%e+e)%e}function yE(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function ME(i,e,t){return i!==e?(t-i)/(e-i):0}function Bs(i,e,t){return(1-t)*i+t*e}function EE(i,e,t,n){return Bs(i,e,1-Math.exp(-t*n))}function SE(i,e=1){return e-Math.abs(Uu(i,e*2)-e)}function TE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function bE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function AE(i,e){return i+Math.floor(Math.random()*(e-i+1))}function wE(i,e){return i+Math.random()*(e-i)}function RE(i){return i*(.5-Math.random())}function CE(i){i!==void 0&&(bh=i);let e=bh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function PE(i){return i*Fs}function LE(i){return i*ss}function IE(i){return(i&i-1)===0&&i!==0}function NE(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function UE(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function DE(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),h=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gt={DEG2RAD:Fs,RAD2DEG:ss,generateUUID:En,clamp:Ct,euclideanModulo:Uu,mapLinear:yE,inverseLerp:ME,lerp:Bs,damp:EE,pingpong:SE,smoothstep:TE,smootherstep:bE,randInt:AE,randFloat:wE,randFloatSpread:RE,seededRandom:CE,degToRad:PE,radToDeg:LE,isPowerOfTwo:IE,ceilPowerOfTwo:NE,floorPowerOfTwo:UE,setQuaternionFromProperEuler:DE,normalize:nt,denormalize:xn};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class we{constructor(e,t,n,r,s,o,a,l,c){we.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=r[0],p=r[3],m=r[6],A=r[1],v=r[4],E=r[7],C=r[2],b=r[5],w=r[8];return s[0]=o*_+a*A+l*C,s[3]=o*p+a*v+l*b,s[6]=o*m+a*E+l*w,s[1]=c*_+u*A+d*C,s[4]=c*p+u*v+d*b,s[7]=c*m+u*E+d*w,s[2]=h*_+f*A+g*C,s[5]=h*p+f*v+g*b,s[8]=h*m+f*E+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,g=t*d+n*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rl.makeScale(e,t)),this}rotate(e){return this.premultiply(Rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rl=new we;function Mg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function OE(){const i=js("canvas");return i.style.display="block",i}const Ah={};function Eg(i){i in Ah||(Ah[i]=!0,console.warn(i))}const wh=new we().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rh=new we().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mo={[Lt]:{transfer:Ra,primaries:Ca,toReference:i=>i,fromReference:i=>i},[zt]:{transfer:lt,primaries:Ca,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ka]:{transfer:Ra,primaries:Pa,toReference:i=>i.applyMatrix3(Rh),fromReference:i=>i.applyMatrix3(wh)},[Nu]:{transfer:lt,primaries:Pa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Rh),fromReference:i=>i.applyMatrix3(wh).convertLinearToSRGB()}},FE=new Set([Lt,Ka]),tt={enabled:!0,_workingColorSpace:Lt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!FE.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Mo[e].toReference,r=Mo[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Mo[i].primaries},getTransfer:function(i){return i===Si?Ra:Mo[i].transfer}};function Yr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pr;class BE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pr===void 0&&(pr=js("canvas")),pr.width=e.width,pr.height=e.height;const n=pr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yr(t[n]/255)*255):t[n]=Yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HE=0;class Sg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=En(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pl(r[o].image)):s.push(Pl(r[o]))}else s=Pl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?BE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kE=0;class wt extends cr{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Ti,r=Ti,s=Jt,o=Kn,a=yn,l=Pi,c=wt.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=En(),this.name="",this.source=new Sg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new we,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=lg;wt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(f+1)/2,C=(m+1)/2,b=(u+h)/4,w=(d+_)/4,O=(g+p)/4;return v>E&&v>C?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=b/n,s=w/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=b/r,s=O/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=w/s,r=O/s),this.set(n,r,s,t),this}let A=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(d-_)/A,this.z=(h-u)/A,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VE extends cr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends VE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tg extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zE extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fe{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const h=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let p=1-a;const m=l*h+c*f+u*g+d*_,A=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const C=Math.sqrt(v),b=Math.atan2(C,m*A);p=Math.sin(p*b)/C,a=Math.sin(a*b)/C}const E=a*A;if(l=l*p+h*E,c=c*p+f*E,u=u*p+g*E,d=d*p+_*E,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),h=l(n/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ch.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ll=new L,Ch=new Fe;class ii{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),So.subVectors(this.max,vs),mr.subVectors(e.a,vs),gr.subVectors(e.b,vs),_r.subVectors(e.c,vs),ci.subVectors(gr,mr),ui.subVectors(_r,gr),Oi.subVectors(mr,_r);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Oi.z,Oi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Oi.z,0,-Oi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Oi.y,Oi.x,0];return!Il(t,mr,gr,_r,So)||(t=[1,0,0,0,1,0,0,0,1],!Il(t,mr,gr,_r,So))?!1:(To.crossVectors(ci,ui),t=[To.x,To.y,To.z],Il(t,mr,gr,_r,So))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new L,new L,new L,new L,new L,new L,new L,new L],fn=new L,Eo=new ii,mr=new L,gr=new L,_r=new L,ci=new L,ui=new L,Oi=new L,vs=new L,So=new L,To=new L,Fi=new L;function Il(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Fi.fromArray(i,s);const a=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),u=n.dot(Fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const GE=new ii,xs=new L,Nl=new L;class Dn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):GE.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);const t=xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(xs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(Nl)),this.expandByPoint(xs.copy(e.center).sub(Nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new L,Ul=new L,bo=new L,di=new L,Dl=new L,Ao=new L,Ol=new L;class no{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ul.copy(e).add(t).multiplyScalar(.5),bo.copy(t).sub(e).normalize(),di.copy(this.origin).sub(Ul);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bo),a=di.dot(this.direction),l=-di.dot(bo),c=di.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ul).addScaledVector(bo,h),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),r=zn.dot(zn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,r,s){Dl.subVectors(t,e),Ao.subVectors(n,e),Ol.crossVectors(Dl,Ao);let o=this.direction.dot(Ol),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(Ao.crossVectors(di,Ao));if(l<0)return null;const c=a*this.direction.dot(Dl.cross(di));if(c<0||l+c>o)return null;const u=-a*di.dot(Ol);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,r,s,o,a,l,c,u,d,h,f,g,_,p){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,d,h,f,g,_,p)}set(e,t,n,r,s,o,a,l,c,u,d,h,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/vr.setFromMatrixColumn(e,0).length(),s=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WE,e,XE)}lookAt(e,t,n){const r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),hi.crossVectors(n,Zt),hi.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),hi.crossVectors(n,Zt)),hi.normalize(),wo.crossVectors(Zt,hi),r[0]=hi.x,r[4]=wo.x,r[8]=Zt.x,r[1]=hi.y,r[5]=wo.y,r[9]=Zt.y,r[2]=hi.z,r[6]=wo.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],A=n[3],v=n[7],E=n[11],C=n[15],b=r[0],w=r[4],O=r[8],T=r[12],M=r[1],B=r[5],X=r[9],N=r[13],$=r[2],J=r[6],W=r[10],te=r[14],H=r[3],oe=r[7],le=r[11],ye=r[15];return s[0]=o*b+a*M+l*$+c*H,s[4]=o*w+a*B+l*J+c*oe,s[8]=o*O+a*X+l*W+c*le,s[12]=o*T+a*N+l*te+c*ye,s[1]=u*b+d*M+h*$+f*H,s[5]=u*w+d*B+h*J+f*oe,s[9]=u*O+d*X+h*W+f*le,s[13]=u*T+d*N+h*te+f*ye,s[2]=g*b+_*M+p*$+m*H,s[6]=g*w+_*B+p*J+m*oe,s[10]=g*O+_*X+p*W+m*le,s[14]=g*T+_*N+p*te+m*ye,s[3]=A*b+v*M+E*$+C*H,s[7]=A*w+v*B+E*J+C*oe,s[11]=A*O+v*X+E*W+C*le,s[15]=A*T+v*N+E*te+C*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*d-r*c*d-s*a*h+n*c*h+r*a*f-n*l*f)+_*(+t*l*f-t*c*h+s*o*h-r*o*f+r*c*u-s*l*u)+p*(+t*c*d-t*a*f-s*o*d+n*o*f+s*a*u-n*c*u)+m*(-r*a*u-t*l*d+t*a*h+r*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],A=d*p*c-_*h*c+_*l*f-a*p*f-d*l*m+a*h*m,v=g*h*c-u*p*c-g*l*f+o*p*f+u*l*m-o*h*m,E=u*_*c-g*d*c+g*a*f-o*_*f-u*a*m+o*d*m,C=g*d*l-u*_*l-g*a*h+o*_*h+u*a*p-o*d*p,b=t*A+n*v+r*E+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=A*w,e[1]=(_*h*s-d*p*s-_*r*f+n*p*f+d*r*m-n*h*m)*w,e[2]=(a*p*s-_*l*s+_*r*c-n*p*c-a*r*m+n*l*m)*w,e[3]=(d*l*s-a*h*s-d*r*c+n*h*c+a*r*f-n*l*f)*w,e[4]=v*w,e[5]=(u*p*s-g*h*s+g*r*f-t*p*f-u*r*m+t*h*m)*w,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*m-t*l*m)*w,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*f+t*l*f)*w,e[8]=E*w,e[9]=(g*d*s-u*_*s-g*n*f+t*_*f+u*n*m-t*d*m)*w,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*w,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*f-t*a*f)*w,e[12]=C*w,e[13]=(u*_*r-g*d*r+g*n*h-t*_*h-u*n*p+t*d*p)*w,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*p-t*a*p)*w,e[15]=(o*d*r-u*a*r+u*n*l-t*d*l-o*n*h+t*a*h)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,g=s*d,_=o*u,p=o*d,m=a*d,A=l*c,v=l*u,E=l*d,C=n.x,b=n.y,w=n.z;return r[0]=(1-(_+m))*C,r[1]=(f+E)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(f-E)*b,r[5]=(1-(h+m))*b,r[6]=(p+A)*b,r[7]=0,r[8]=(g+v)*w,r[9]=(p-A)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=vr.set(r[0],r[1],r[2]).length();const o=vr.set(r[4],r[5],r[6]).length(),a=vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pn.copy(this);const c=1/s,u=1/o,d=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,t.setFromRotationMatrix(pn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Zn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let f,g;if(a===Zn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===La)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Zn){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(o-s),h=(t+e)*c,f=(n+r)*u;let g,_;if(a===Zn)g=(o+s)*d,_=-2*d;else if(a===La)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vr=new L,pn=new Ie,WE=new L(0,0,0),XE=new L(1,1,1),hi=new L,wo=new L,Zt=new L,Ph=new Ie,Lh=new Fe;class nn{constructor(e=0,t=0,n=0,r=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ph,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class bg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jE=0;const Ih=new L,xr=new Fe,Gn=new Ie,Ro=new L,ys=new L,qE=new L,YE=new Fe,Nh=new L(1,0,0),Uh=new L(0,1,0),Dh=new L(0,0,1),Oh={type:"added"},$E={type:"removed"},yr={type:"childadded",child:null},Fl={type:"childremoved",child:null};class st extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new L,t=new nn,n=new Fe,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ie},normalMatrix:{value:new we}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Nh,e)}rotateY(e){return this.rotateOnAxis(Uh,e)}rotateZ(e){return this.rotateOnAxis(Dh,e)}translateOnAxis(e,t){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nh,e)}translateY(e){return this.translateOnAxis(Uh,e)}translateZ(e){return this.translateOnAxis(Dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ro.copy(e):Ro.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(ys,Ro,this.up):Gn.lookAt(Ro,ys,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),xr.setFromRotationMatrix(Gn),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oh),yr.child=e,this.dispatchEvent(yr),yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($E),Fl.child=e,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oh),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,qE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,YE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}st.DEFAULT_UP=new L(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new L,Wn=new L,Bl=new L,Xn=new L,Mr=new L,Er=new L,Fh=new L,Hl=new L,kl=new L,Vl=new L;class Pn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),mn.subVectors(e,t),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){mn.subVectors(r,t),Wn.subVectors(n,t),Bl.subVectors(e,t);const o=mn.dot(mn),a=mn.dot(Wn),l=mn.dot(Bl),c=Wn.dot(Wn),u=Wn.dot(Bl),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static isFrontFacing(e,t,n,r){return mn.subVectors(n,t),Wn.subVectors(e,t),mn.cross(Wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),mn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Mr.subVectors(r,n),Er.subVectors(s,n),Hl.subVectors(e,n);const l=Mr.dot(Hl),c=Er.dot(Hl);if(l<=0&&c<=0)return t.copy(n);kl.subVectors(e,r);const u=Mr.dot(kl),d=Er.dot(kl);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Mr,o);Vl.subVectors(e,s);const f=Mr.dot(Vl),g=Er.dot(Vl);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Er,a);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Fh.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(Fh,a);const m=1/(p+_+h);return o=_*m,a=h*m,t.copy(n).addScaledVector(Mr,o).addScaledVector(Er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Co={h:0,s:0,l:0};function zl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=Uu(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=zl(o,s,e+1/3),this.g=zl(o,s,e),this.b=zl(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=Ag[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=Cl(e.r),this.g=Cl(e.g),this.b=Cl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return tt.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Ct(Dt.r*255,0,255))*65536+Math.round(Ct(Dt.g*255,0,255))*256+Math.round(Ct(Dt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,r=Dt.g,s=Dt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=zt){tt.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,r=Dt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Co);const n=Bs(fi.h,Co.h,t),r=Bs(fi.s,Co.s,t),s=Bs(fi.l,Co.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Se;Se.NAMES=Ag;let KE=0;class Nn extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=En(),this.name="",this.type="Material",this.blending=jr,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Vc,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kc&&(n.blendSrc=this.blendSrc),this.blendDst!==Vc&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ba&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qn extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=ag,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new L,Po=new Te;class at{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Eg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Po.fromBufferAttribute(this,t),Po.applyMatrix3(e),this.setXY(t,Po.x,Po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xc&&(e.usage=this.usage),e}}class wg extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rg extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Sn extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ZE=0;const sn=new Ie,Gl=new st,Sr=new L,Qt=new ii,Ms=new ii,bt=new L;class It extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mg(e)?Rg:wg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new we().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(Qt.min,Ms.min),Qt.expandByPoint(bt),bt.addVectors(Qt.max,Ms.max),Qt.expandByPoint(bt)):(Qt.expandByPoint(Ms.min),Qt.expandByPoint(Ms.max))}Qt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(Sr.fromBufferAttribute(e,c),bt.add(Sr)),r=Math.max(r,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new L,l[O]=new L;const c=new L,u=new L,d=new L,h=new Te,f=new Te,g=new Te,_=new L,p=new L;function m(O,T,M){c.fromBufferAttribute(n,O),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,M),h.fromBufferAttribute(s,O),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,M),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const B=1/(f.x*g.y-g.x*f.y);isFinite(B)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(B),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(B),a[O].add(_),a[T].add(_),a[M].add(_),l[O].add(p),l[T].add(p),l[M].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let O=0,T=A.length;O<T;++O){const M=A[O],B=M.start,X=M.count;for(let N=B,$=B+X;N<$;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const v=new L,E=new L,C=new L,b=new L;function w(O){C.fromBufferAttribute(r,O),b.copy(C);const T=a[O];v.copy(T),v.sub(C.multiplyScalar(C.dot(T))).normalize(),E.crossVectors(b,T);const B=E.dot(l[O])<0?-1:1;o.setXYZW(O,v.x,v.y,v.z,B)}for(let O=0,T=A.length;O<T;++O){const M=A[O],B=M.start,X=M.count;for(let N=B,$=B+X;N<$;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new at(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new Ie,Bi=new no,Lo=new Dn,Hh=new L,Tr=new L,br=new L,Ar=new L,Wl=new L,Io=new L,No=new Te,Uo=new Te,Do=new Te,kh=new L,Vh=new L,zh=new L,Oo=new L,Fo=new L;class Xt extends st{constructor(e=new It,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Io.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Wl.fromBufferAttribute(d,e),o?Io.addScaledVector(Wl,u):Io.addScaledVector(Wl.sub(t),u))}t.add(Io)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),Bi.copy(e.ray).recast(e.near),!(Lo.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Lo,Hh)===null||Bi.origin.distanceToSquared(Hh)>(e.far-e.near)**2))&&(Bh.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(Bh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],A=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let E=A,C=v;E<C;E+=3){const b=a.getX(E),w=a.getX(E+1),O=a.getX(E+2);r=Bo(this,m,e,n,c,u,d,b,w,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const A=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);r=Bo(this,o,e,n,c,u,d,A,v,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],A=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let E=A,C=v;E<C;E+=3){const b=E,w=E+1,O=E+2;r=Bo(this,m,e,n,c,u,d,b,w,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const A=p,v=p+1,E=p+2;r=Bo(this,o,e,n,c,u,d,A,v,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function QE(i,e,t,n,r,s,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ei,a),l===null)return null;Fo.copy(a),Fo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Fo);return c<t.near||c>t.far?null:{distance:c,point:Fo.clone(),object:i}}function Bo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Tr),i.getVertexPosition(l,br),i.getVertexPosition(c,Ar);const u=QE(i,e,t,n,Tr,br,Ar,Oo);if(u){r&&(No.fromBufferAttribute(r,a),Uo.fromBufferAttribute(r,l),Do.fromBufferAttribute(r,c),u.uv=Pn.getInterpolation(Oo,Tr,br,Ar,No,Uo,Do,new Te)),s&&(No.fromBufferAttribute(s,a),Uo.fromBufferAttribute(s,l),Do.fromBufferAttribute(s,c),u.uv1=Pn.getInterpolation(Oo,Tr,br,Ar,No,Uo,Do,new Te)),o&&(kh.fromBufferAttribute(o,a),Vh.fromBufferAttribute(o,l),zh.fromBufferAttribute(o,c),u.normal=Pn.getInterpolation(Oo,Tr,br,Ar,kh,Vh,zh,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Pn.getNormal(Tr,br,Ar,d.normal),u.face=d}return u}class io extends It{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(u,3)),this.setAttribute("uv",new Sn(d,2));function g(_,p,m,A,v,E,C,b,w,O,T){const M=E/w,B=C/O,X=E/2,N=C/2,$=b/2,J=w+1,W=O+1;let te=0,H=0;const oe=new L;for(let le=0;le<W;le++){const ye=le*B-N;for(let be=0;be<J;be++){const $e=be*M-X;oe[_]=$e*A,oe[p]=ye*v,oe[m]=$,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[p]=0,oe[m]=b>0?1:-1,u.push(oe.x,oe.y,oe.z),d.push(be/w),d.push(1-le/O),te+=1}}for(let le=0;le<O;le++)for(let ye=0;ye<w;ye++){const be=h+ye+J*le,$e=h+ye+J*(le+1),ee=h+(ye+1)+J*(le+1),ue=h+(ye+1)+J*le;l.push(be,$e,ue),l.push($e,ee,ue),H+=6}a.addGroup(f,H,T),f+=H,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=os(i[t]);for(const r in n)e[r]=n[r]}return e}function JE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cg(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Pg={clone:os,merge:Vt};var eS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eS,this.fragmentShader=tS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=JE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lg extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new L,Gh=new Te,Wh=new Te;class Gt extends Lg{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,Gh,Wh),t.subVectors(Wh,Gh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wr=-90,Rr=1;class nS extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(wr,Rr,e,t);r.layers=this.layers,this.add(r);const s=new Gt(wr,Rr,e,t);s.layers=this.layers,this.add(s);const o=new Gt(wr,Rr,e,t);o.layers=this.layers,this.add(o);const a=new Gt(wr,Rr,e,t);a.layers=this.layers,this.add(a);const l=new Gt(wr,Rr,e,t);l.layers=this.layers,this.add(l);const c=new Gt(wr,Rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ig extends wt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iS extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ig(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new io(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Ri});s.uniforms.tEquirect.value=t;const o=new Xt(r,s),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Jt),new nS(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Xl=new L,rS=new L,sS=new we;class yi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Xl.subVectors(n,t).cross(rS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sS.getNormalMatrix(e),r=this.coplanarPoint(Xl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new Dn,Ho=new L;class Du{constructor(e=new yi,t=new yi,n=new yi,r=new yi,s=new yi,o=new yi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],_=r[10],p=r[11],m=r[12],A=r[13],v=r[14],E=r[15];if(n[0].setComponents(l-s,h-c,p-f,E-m).normalize(),n[1].setComponents(l+s,h+c,p+f,E+m).normalize(),n[2].setComponents(l+o,h+u,p+g,E+A).normalize(),n[3].setComponents(l-o,h-u,p-g,E-A).normalize(),n[4].setComponents(l-a,h-d,p-_,E-v).normalize(),t===Zn)n[5].setComponents(l+a,h+d,p+_,E+v).normalize();else if(t===La)n[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ho.x=r.normal.x>0?e.max.x:e.min.x,Ho.y=r.normal.y>0?e.max.y:e.min.y,Ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ng(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function oS(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(i.bindBuffer(c,a),d.count===-1&&h.length===0&&i.bufferSubData(c,0,u),h.length!==0){for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Za extends It{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const A=m*h-o;for(let v=0;v<c;v++){const E=v*d-s;g.push(E,-A,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let A=0;A<a;A++){const v=A+c*m,E=A+c*(m+1),C=A+1+c*(m+1),b=A+1+c*m;f.push(v,E,b),f.push(E,C,b)}this.setIndex(f),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.widthSegments,e.heightSegments)}}var aS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_S=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,PS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,NS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FS="gl_FragColor = linearToOutputTexel( gl_FragColor );",BS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,HS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$S=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,KS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_T=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ET=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ST=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,TT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,FT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,WT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$T=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ZT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ab=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ib=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:aS,alphahash_pars_fragment:lS,alphamap_fragment:cS,alphamap_pars_fragment:uS,alphatest_fragment:dS,alphatest_pars_fragment:hS,aomap_fragment:fS,aomap_pars_fragment:pS,batching_pars_vertex:mS,batching_vertex:gS,begin_vertex:_S,beginnormal_vertex:vS,bsdfs:xS,iridescence_fragment:yS,bumpmap_pars_fragment:MS,clipping_planes_fragment:ES,clipping_planes_pars_fragment:SS,clipping_planes_pars_vertex:TS,clipping_planes_vertex:bS,color_fragment:AS,color_pars_fragment:wS,color_pars_vertex:RS,color_vertex:CS,common:PS,cube_uv_reflection_fragment:LS,defaultnormal_vertex:IS,displacementmap_pars_vertex:NS,displacementmap_vertex:US,emissivemap_fragment:DS,emissivemap_pars_fragment:OS,colorspace_fragment:FS,colorspace_pars_fragment:BS,envmap_fragment:HS,envmap_common_pars_fragment:kS,envmap_pars_fragment:VS,envmap_pars_vertex:zS,envmap_physical_pars_fragment:eT,envmap_vertex:GS,fog_vertex:WS,fog_pars_vertex:XS,fog_fragment:jS,fog_pars_fragment:qS,gradientmap_pars_fragment:YS,lightmap_fragment:$S,lightmap_pars_fragment:KS,lights_lambert_fragment:ZS,lights_lambert_pars_fragment:QS,lights_pars_begin:JS,lights_toon_fragment:tT,lights_toon_pars_fragment:nT,lights_phong_fragment:iT,lights_phong_pars_fragment:rT,lights_physical_fragment:sT,lights_physical_pars_fragment:oT,lights_fragment_begin:aT,lights_fragment_maps:lT,lights_fragment_end:cT,logdepthbuf_fragment:uT,logdepthbuf_pars_fragment:dT,logdepthbuf_pars_vertex:hT,logdepthbuf_vertex:fT,map_fragment:pT,map_pars_fragment:mT,map_particle_fragment:gT,map_particle_pars_fragment:_T,metalnessmap_fragment:vT,metalnessmap_pars_fragment:xT,morphinstance_vertex:yT,morphcolor_vertex:MT,morphnormal_vertex:ET,morphtarget_pars_vertex:ST,morphtarget_vertex:TT,normal_fragment_begin:bT,normal_fragment_maps:AT,normal_pars_fragment:wT,normal_pars_vertex:RT,normal_vertex:CT,normalmap_pars_fragment:PT,clearcoat_normal_fragment_begin:LT,clearcoat_normal_fragment_maps:IT,clearcoat_pars_fragment:NT,iridescence_pars_fragment:UT,opaque_fragment:DT,packing:OT,premultiplied_alpha_fragment:FT,project_vertex:BT,dithering_fragment:HT,dithering_pars_fragment:kT,roughnessmap_fragment:VT,roughnessmap_pars_fragment:zT,shadowmap_pars_fragment:GT,shadowmap_pars_vertex:WT,shadowmap_vertex:XT,shadowmask_pars_fragment:jT,skinbase_vertex:qT,skinning_pars_vertex:YT,skinning_vertex:$T,skinnormal_vertex:KT,specularmap_fragment:ZT,specularmap_pars_fragment:QT,tonemapping_fragment:JT,tonemapping_pars_fragment:eb,transmission_fragment:tb,transmission_pars_fragment:nb,uv_pars_fragment:ib,uv_pars_vertex:rb,uv_vertex:sb,worldpos_vertex:ob,background_vert:ab,background_frag:lb,backgroundCube_vert:cb,backgroundCube_frag:ub,cube_vert:db,cube_frag:hb,depth_vert:fb,depth_frag:pb,distanceRGBA_vert:mb,distanceRGBA_frag:gb,equirect_vert:_b,equirect_frag:vb,linedashed_vert:xb,linedashed_frag:yb,meshbasic_vert:Mb,meshbasic_frag:Eb,meshlambert_vert:Sb,meshlambert_frag:Tb,meshmatcap_vert:bb,meshmatcap_frag:Ab,meshnormal_vert:wb,meshnormal_frag:Rb,meshphong_vert:Cb,meshphong_frag:Pb,meshphysical_vert:Lb,meshphysical_frag:Ib,meshtoon_vert:Nb,meshtoon_frag:Ub,points_vert:Db,points_frag:Ob,shadow_vert:Fb,shadow_frag:Bb,sprite_vert:Hb,sprite_frag:kb},fe={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new we}},envmap:{envMap:{value:null},envMapRotation:{value:new we},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new we}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new we}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new we},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new we},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new we},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new we}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new we}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new we}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0},uvTransform:{value:new we}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}}},Rn={basic:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Se(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Vt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Vt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Se(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Vt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Vt([fe.points,fe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Vt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Vt([fe.common,fe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Vt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Vt([fe.sprite,fe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new we},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new we}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Vt([fe.common,fe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Vt([fe.lights,fe.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Rn.physical={uniforms:Vt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new we},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new we},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new we},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new we},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new we},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new we},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new we},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new we},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new we},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new we},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new we},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new we}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ko={r:0,b:0,g:0},ki=new nn,Vb=new Ie;function zb(i,e,t,n,r,s,o){const a=new Se(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function g(p,m){let A=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),A=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===$a)?(u===void 0&&(u=new Xt(new io(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:os(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ki.copy(m.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vb.makeRotationFromEuler(ki)),u.material.toneMapped=tt.getTransfer(v.colorSpace)!==lt,(d!==v||h!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,f=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Xt(new Za(2,2),new ti({name:"BackgroundMaterial",uniforms:os(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=tt.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(ko,Cg(i)),n.buffers.color.setClear(ko.r,ko.g,ko.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Gb(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(M,B,X,N,$){let J=!1;const W=d(N,X,B);s!==W&&(s=W,c(s.object)),J=f(M,N,X,$),J&&g(M,N,X,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,E(M,B,X,N),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,B,X){const N=X.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let J=$[B.id];J===void 0&&(J={},$[B.id]=J);let W=J[N];return W===void 0&&(W=h(l()),J[N]=W),W}function h(M){const B=[],X=[],N=[];for(let $=0;$<t;$++)B[$]=0,X[$]=0,N[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,B,X,N){const $=s.attributes,J=B.attributes;let W=0;const te=X.getAttributes();for(const H in te)if(te[H].location>=0){const le=$[H];let ye=J[H];if(ye===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),le===void 0||le.attribute!==ye||ye&&le.data!==ye.data)return!0;W++}return s.attributesNum!==W||s.index!==N}function g(M,B,X,N){const $={},J=B.attributes;let W=0;const te=X.getAttributes();for(const H in te)if(te[H].location>=0){let le=J[H];le===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));const ye={};ye.attribute=le,le&&le.data&&(ye.data=le.data),$[H]=ye,W++}s.attributes=$,s.attributesNum=W,s.index=N}function _(){const M=s.newAttributes;for(let B=0,X=M.length;B<X;B++)M[B]=0}function p(M){m(M,0)}function m(M,B){const X=s.newAttributes,N=s.enabledAttributes,$=s.attributeDivisors;X[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),$[M]!==B&&(i.vertexAttribDivisor(M,B),$[M]=B)}function A(){const M=s.newAttributes,B=s.enabledAttributes;for(let X=0,N=B.length;X<N;X++)B[X]!==M[X]&&(i.disableVertexAttribArray(X),B[X]=0)}function v(M,B,X,N,$,J,W){W===!0?i.vertexAttribIPointer(M,B,X,$,J):i.vertexAttribPointer(M,B,X,N,$,J)}function E(M,B,X,N){_();const $=N.attributes,J=X.getAttributes(),W=B.defaultAttributeValues;for(const te in J){const H=J[te];if(H.location>=0){let oe=$[te];if(oe===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const le=oe.normalized,ye=oe.itemSize,be=e.get(oe);if(be===void 0)continue;const $e=be.buffer,ee=be.type,ue=be.bytesPerElement,me=ee===i.INT||ee===i.UNSIGNED_INT||oe.gpuType===dg;if(oe.isInterleavedBufferAttribute){const pe=oe.data,Ae=pe.stride,Re=oe.offset;if(pe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<H.locationSize;Pe++)m(H.location+Pe,pe.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Pe=0;Pe<H.locationSize;Pe++)p(H.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Pe=0;Pe<H.locationSize;Pe++)v(H.location+Pe,ye/H.locationSize,ee,le,Ae*ue,(Re+ye/H.locationSize*Pe)*ue,me)}else{if(oe.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)m(H.location+pe,oe.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let pe=0;pe<H.locationSize;pe++)p(H.location+pe);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let pe=0;pe<H.locationSize;pe++)v(H.location+pe,ye/H.locationSize,ee,le,ye*ue,ye/H.locationSize*pe*ue,me)}}else if(W!==void 0){const le=W[te];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(H.location,le);break;case 3:i.vertexAttrib3fv(H.location,le);break;case 4:i.vertexAttrib4fv(H.location,le);break;default:i.vertexAttrib1fv(H.location,le)}}}}A()}function C(){O();for(const M in n){const B=n[M];for(const X in B){const N=B[X];for(const $ in N)u(N[$].object),delete N[$];delete B[X]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const B=n[M.id];for(const X in B){const N=B[X];for(const $ in N)u(N[$].object),delete N[$];delete B[X]}delete n[M.id]}function w(M){for(const B in n){const X=n[B];if(X[M.id]===void 0)continue;const N=X[M.id];for(const $ in N)u(N[$].object),delete N[$];delete X[M.id]}}function O(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:A}}function Wb(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<u;h++)this.render(l[h],c[h]);else{d.multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Xb(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),p=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:h,maxAttributes:f,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:p,vertexTextures:m,maxSamples:A}}function jb(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new yi,a=new we,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const A=s?0:n,v=A*4;let E=m.clippingState||null;l.value=E,E=u(g,h,v,f);for(let C=0;C!==v;++C)E[C]=t[C];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,E=f;v!==_;++v,E+=4)o.copy(d[v]).applyMatrix4(A,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function qb(i){let e=new WeakMap;function t(o,a){return a===zc?o.mapping=es:a===Gc&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===zc||a===Gc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new iS(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ou extends Lg{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fr=4,Xh=[.125,.215,.35,.446,.526,.582],Ki=20,jl=new Ou,jh=new Se;let ql=null,Yl=0,$l=0,Kl=!1;const qi=(1+Math.sqrt(5))/2,Cr=1/qi,qh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,qi,Cr),new L(0,qi,-Cr),new L(Cr,0,qi),new L(-Cr,0,qi),new L(qi,Cr,0),new L(-qi,Cr,0)];class Yh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ql,Yl,$l),this._renderer.xr.enabled=Kl,e.scissorTest=!1,Vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:wa,format:yn,colorSpace:Lt,depthBuffer:!1},r=$h(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yb(s)),this._blurMaterial=$b(s,e,t)}return r}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,jl)}_sceneToCubeUV(e,t,n,r){const a=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(jh),u.toneMapping=Ci,u.autoClear=!1;const f=new Qn({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new Xt(new io,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(jh),_=!0);for(let m=0;m<6;m++){const A=m%3;A===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):A===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Vo(r,A*v,m>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===es||e.mapping===ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Vo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,jl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=qh[(r-1)%qh.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Xt(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ki-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Ki;p>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ki}`);const m=[];let A=0;for(let w=0;w<Ki;++w){const O=w/_,T=Math.exp(-O*O/2);m.push(T),w===0?A+=T:w<p&&(A+=2*T)}for(let w=0;w<m.length;w++)m[w]=m[w]/A;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const E=this._sizeLods[r],C=3*E*(r>v-Fr?r-v+Fr:0),b=4*(this._cubeSize-E);Vo(t,C,b,3*E,2*E),l.setRenderTarget(t),l.render(d,jl)}}function Yb(i){const e=[],t=[],n=[];let r=i;const s=i-Fr+1+Xh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Fr?l=Xh[o-i+Fr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,p=2,m=1,A=new Float32Array(_*g*f),v=new Float32Array(p*g*f),E=new Float32Array(m*g*f);for(let b=0;b<f;b++){const w=b%3*2/3-1,O=b>2?0:-1,T=[w,O,0,w+2/3,O,0,w+2/3,O+1,0,w,O,0,w+2/3,O+1,0,w,O+1,0];A.set(T,_*g*b),v.set(h,p*g*b);const M=[b,b,b,b,b,b];E.set(M,m*g*b)}const C=new It;C.setAttribute("position",new at(A,_)),C.setAttribute("uv",new at(v,p)),C.setAttribute("faceIndex",new at(E,m)),e.push(C),r>Fr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $h(i,e,t){const n=new rr(i,e,t);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function $b(i,e,t){const n=new Float32Array(Ki),r=new L(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Kh(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Zh(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Fu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kb(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===zc||l===Gc,u=l===es||l===ts;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Yh(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Yh(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Qb(i,e,t,n){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const A=f.array;_=f.version;for(let v=0,E=A.length;v<E;v+=3){const C=A[v+0],b=A[v+1],w=A[v+2];h.push(C,b,b,w,w,C)}}else if(g!==void 0){const A=g.array;_=g.version;for(let v=0,E=A.length/3-1;v<E;v+=3){const C=v+0,b=v+1,w=v+2;h.push(C,b,b,w,w,C)}}else return;const p=new(Mg(h)?Rg:wg)(h,1);p.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Jb(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){i.drawElements(n,h,s,d*o),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,s,d*o,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<f;_++)this.render(d[_]/o,h[_]);else{g.multiDrawElementsWEBGL(n,h,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=h[p];t.update(_,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function eA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function tA(i,e,t){const n=new WeakMap,r=new rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let E=a.attributes.position.count*v,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const b=new Float32Array(E*C*4*d),w=new Tg(b,E,C,d);w.type=In,w.needsUpdate=!0;const O=v*4;for(let M=0;M<d;M++){const B=p[M],X=m[M],N=A[M],$=E*C*4*M;for(let J=0;J<B.count;J++){const W=J*O;f===!0&&(r.fromBufferAttribute(B,J),b[$+W+0]=r.x,b[$+W+1]=r.y,b[$+W+2]=r.z,b[$+W+3]=0),g===!0&&(r.fromBufferAttribute(X,J),b[$+W+4]=r.x,b[$+W+5]=r.y,b[$+W+6]=r.z,b[$+W+7]=0),_===!0&&(r.fromBufferAttribute(N,J),b[$+W+8]=r.x,b[$+W+9]=r.y,b[$+W+10]=r.z,b[$+W+11]=N.itemSize===4?r.w:1)}}h={count:d,texture:w,size:new Te(E,C)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function nA(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Ug extends wt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:qr,u!==qr&&u!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qr&&(n=is),n===void 0&&u===Ws&&(n=to),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Dg=new wt,Og=new Ug(1,1);Og.compareFunction=yg;const Fg=new Tg,Bg=new zE,Hg=new Ig,Qh=[],Jh=[],ef=new Float32Array(16),tf=new Float32Array(9),nf=new Float32Array(4);function fs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Qh[r];if(s===void 0&&(s=new Float32Array(r),Qh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qa(i,e){let t=Jh[e];t===void 0&&(t=new Int32Array(e),Jh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function iA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function sA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function oA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function aA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Et(t,n))return;nf.set(n),i.uniformMatrix2fv(this.addr,!1,nf),St(t,n)}}function lA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Et(t,n))return;tf.set(n),i.uniformMatrix3fv(this.addr,!1,tf),St(t,n)}}function cA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Et(t,n))return;ef.set(n),i.uniformMatrix4fv(this.addr,!1,ef),St(t,n)}}function uA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function hA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function fA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function pA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function gA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function _A(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function vA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Og:Dg;t.setTexture2D(e||s,r)}function xA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Bg,r)}function yA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Hg,r)}function MA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Fg,r)}function EA(i){switch(i){case 5126:return iA;case 35664:return rA;case 35665:return sA;case 35666:return oA;case 35674:return aA;case 35675:return lA;case 35676:return cA;case 5124:case 35670:return uA;case 35667:case 35671:return dA;case 35668:case 35672:return hA;case 35669:case 35673:return fA;case 5125:return pA;case 36294:return mA;case 36295:return gA;case 36296:return _A;case 35678:case 36198:case 36298:case 36306:case 35682:return vA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return yA;case 36289:case 36303:case 36311:case 36292:return MA}}function SA(i,e){i.uniform1fv(this.addr,e)}function TA(i,e){const t=fs(e,this.size,2);i.uniform2fv(this.addr,t)}function bA(i,e){const t=fs(e,this.size,3);i.uniform3fv(this.addr,t)}function AA(i,e){const t=fs(e,this.size,4);i.uniform4fv(this.addr,t)}function wA(i,e){const t=fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function RA(i,e){const t=fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function CA(i,e){const t=fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function PA(i,e){i.uniform1iv(this.addr,e)}function LA(i,e){i.uniform2iv(this.addr,e)}function IA(i,e){i.uniform3iv(this.addr,e)}function NA(i,e){i.uniform4iv(this.addr,e)}function UA(i,e){i.uniform1uiv(this.addr,e)}function DA(i,e){i.uniform2uiv(this.addr,e)}function OA(i,e){i.uniform3uiv(this.addr,e)}function FA(i,e){i.uniform4uiv(this.addr,e)}function BA(i,e,t){const n=this.cache,r=e.length,s=Qa(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Dg,s[o])}function HA(i,e,t){const n=this.cache,r=e.length,s=Qa(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Bg,s[o])}function kA(i,e,t){const n=this.cache,r=e.length,s=Qa(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hg,s[o])}function VA(i,e,t){const n=this.cache,r=e.length,s=Qa(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Fg,s[o])}function zA(i){switch(i){case 5126:return SA;case 35664:return TA;case 35665:return bA;case 35666:return AA;case 35674:return wA;case 35675:return RA;case 35676:return CA;case 5124:case 35670:return PA;case 35667:case 35671:return LA;case 35668:case 35672:return IA;case 35669:case 35673:return NA;case 5125:return UA;case 36294:return DA;case 36295:return OA;case 36296:return FA;case 35678:case 36198:case 36298:case 36306:case 35682:return BA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return VA}}class GA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=EA(t.type)}}class WA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zA(t.type)}}class XA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function rf(i,e){i.seq.push(e),i.map[e.id]=e}function jA(i,e,t){const n=i.name,r=n.length;for(Zl.lastIndex=0;;){const s=Zl.exec(n),o=Zl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){rf(t,c===void 0?new GA(a,i,e):new WA(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new XA(a),rf(t,d)),t=d}}}class aa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);jA(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function sf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const qA=37297;let YA=0;function $A(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function KA(i){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(i);let n;switch(e===t?n="":e===Pa&&t===Ca?n="LinearDisplayP3ToLinearSRGB":e===Ca&&t===Pa&&(n="LinearSRGBToLinearDisplayP3"),i){case Lt:case Ka:return[n,"LinearTransferOETF"];case zt:case Nu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function of(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$A(i.getShaderSource(e),o)}else return r}function ZA(i,e){const t=KA(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function QA(i,e){let t;switch(e){case WM:t="Linear";break;case XM:t="Reinhard";break;case jM:t="OptimizedCineon";break;case qM:t="ACESFilmic";break;case $M:t="AgX";break;case KM:t="Neutral";break;case YM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function JA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function ew(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tw(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Is(i){return i!==""}function af(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(i){return i.replace(nw,rw)}const iw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rw(i,e){let t=Xe[e];if(t===void 0){const n=iw.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return jc(t)}const sw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(i){return i.replace(sw,ow)}function ow(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aw(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===og?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===gM?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function lw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cw(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function uw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ag:e="ENVMAP_BLENDING_MULTIPLY";break;case zM:e="ENVMAP_BLENDING_MIX";break;case GM:e="ENVMAP_BLENDING_ADD";break}return e}function dw(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hw(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=aw(t),c=lw(t),u=cw(t),d=uw(t),h=dw(t),f=JA(t),g=ew(s),_=r.createProgram();let p,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Is).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Is).join(`
`),m.length>0&&(m+=`
`)):(p=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),m=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Ci?QA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,ZA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),o=jc(o),o=af(o,t),o=lf(o,t),a=jc(a),a=af(a,t),a=lf(a,t),o=cf(o),a=cf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=A+p+o,E=A+m+a,C=sf(r,r.VERTEX_SHADER,v),b=sf(r,r.FRAGMENT_SHADER,E);r.attachShader(_,C),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(B){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(_).trim(),N=r.getShaderInfoLog(C).trim(),$=r.getShaderInfoLog(b).trim();let J=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,C,b);else{const te=of(r,C,"vertex"),H=of(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+X+`
`+te+`
`+H)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(N===""||$==="")&&(W=!1);W&&(B.diagnostics={runnable:J,programLog:X,vertexShader:{log:N,prefix:p},fragmentShader:{log:$,prefix:m}})}r.deleteShader(C),r.deleteShader(b),O=new aa(r,_),T=tw(r,_)}let O;this.getUniforms=function(){return O===void 0&&w(this),O};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,qA)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=b,this}let fw=0;class pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mw(e),t.set(e,n)),n}}class mw{constructor(e){this.id=fw++,this.code=e,this.usedTimes=0}}function gw(i,e,t,n,r,s,o){const a=new bg,l=new pw,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,M,B,X,N){const $=X.fog,J=N.geometry,W=T.isMeshStandardMaterial?X.environment:null,te=(T.isMeshStandardMaterial?t:e).get(T.envMap||W),H=te&&te.mapping===$a?te.image.height:null,oe=g[T.type];T.precision!==null&&(f=r.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const le=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ye=le!==void 0?le.length:0;let be=0;J.morphAttributes.position!==void 0&&(be=1),J.morphAttributes.normal!==void 0&&(be=2),J.morphAttributes.color!==void 0&&(be=3);let $e,ee,ue,me;if(oe){const vt=Rn[oe];$e=vt.vertexShader,ee=vt.fragmentShader}else $e=T.vertexShader,ee=T.fragmentShader,l.update(T),ue=l.getVertexShaderID(T),me=l.getFragmentShaderID(T);const pe=i.getRenderTarget(),Ae=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,Pe=!!T.map,G=!!T.matcap,Be=!!te,P=!!T.aoMap,U=!!T.lightMap,V=!!T.bumpMap,Q=!!T.normalMap,S=!!T.displacementMap,y=!!T.emissiveMap,I=!!T.metalnessMap,D=!!T.roughnessMap,k=T.anisotropy>0,F=T.clearcoat>0,ne=T.iridescence>0,q=T.sheen>0,se=T.transmission>0,ce=k&&!!T.anisotropyMap,ie=F&&!!T.clearcoatMap,ae=F&&!!T.clearcoatNormalMap,_e=F&&!!T.clearcoatRoughnessMap,he=ne&&!!T.iridescenceMap,ge=ne&&!!T.iridescenceThicknessMap,Ne=q&&!!T.sheenColorMap,He=q&&!!T.sheenRoughnessMap,ke=!!T.specularMap,je=!!T.specularColorMap,Le=!!T.specularIntensityMap,xe=se&&!!T.transmissionMap,x=se&&!!T.thicknessMap,j=!!T.gradientMap,re=!!T.alphaMap,de=T.alphaTest>0,Me=!!T.alphaHash,Ye=!!T.extensions;let qe=Ci;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(qe=i.toneMapping);const ot={shaderID:oe,shaderType:T.type,shaderName:T.name,vertexShader:$e,fragmentShader:ee,defines:T.defines,customVertexShaderID:ue,customFragmentShaderID:me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Re,instancing:Ae,instancingColor:Ae&&N.instanceColor!==null,instancingMorph:Ae&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Lt,alphaToCoverage:!!T.alphaToCoverage,map:Pe,matcap:G,envMap:Be,envMapMode:Be&&te.mapping,envMapCubeUVHeight:H,aoMap:P,lightMap:U,bumpMap:V,normalMap:Q,displacementMap:h&&S,emissiveMap:y,normalMapObjectSpace:Q&&T.normalMapType===dE,normalMapTangentSpace:Q&&T.normalMapType===Iu,metalnessMap:I,roughnessMap:D,anisotropy:k,anisotropyMap:ce,clearcoat:F,clearcoatMap:ie,clearcoatNormalMap:ae,clearcoatRoughnessMap:_e,iridescence:ne,iridescenceMap:he,iridescenceThicknessMap:ge,sheen:q,sheenColorMap:Ne,sheenRoughnessMap:He,specularMap:ke,specularColorMap:je,specularIntensityMap:Le,transmission:se,transmissionMap:xe,thicknessMap:x,gradientMap:j,opaque:T.transparent===!1&&T.blending===jr&&T.alphaToCoverage===!1,alphaMap:re,alphaTest:de,alphaHash:Me,combine:T.combine,mapUv:Pe&&_(T.map.channel),aoMapUv:P&&_(T.aoMap.channel),lightMapUv:U&&_(T.lightMap.channel),bumpMapUv:V&&_(T.bumpMap.channel),normalMapUv:Q&&_(T.normalMap.channel),displacementMapUv:S&&_(T.displacementMap.channel),emissiveMapUv:y&&_(T.emissiveMap.channel),metalnessMapUv:I&&_(T.metalnessMap.channel),roughnessMapUv:D&&_(T.roughnessMap.channel),anisotropyMapUv:ce&&_(T.anisotropyMap.channel),clearcoatMapUv:ie&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:He&&_(T.sheenRoughnessMap.channel),specularMapUv:ke&&_(T.specularMap.channel),specularColorMapUv:je&&_(T.specularColorMap.channel),specularIntensityMapUv:Le&&_(T.specularIntensityMap.channel),transmissionMapUv:xe&&_(T.transmissionMap.channel),thicknessMapUv:x&&_(T.thicknessMap.channel),alphaMapUv:re&&_(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Q||k),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!J.attributes.uv&&(Pe||re),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pe&&T.map.isVideoTexture===!0&&tt.getTransfer(T.map.colorSpace)===lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===un,flipSided:T.side===jt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ye&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ye&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function m(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const B in T.defines)M.push(B),M.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(A(M,T),v(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function A(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function v(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),T.push(a.mask)}function E(T){const M=g[T.type];let B;if(M){const X=Rn[M];B=Pg.clone(X.uniforms)}else B=T.uniforms;return B}function C(T,M){let B;for(let X=0,N=u.length;X<N;X++){const $=u[X];if($.cacheKey===M){B=$,++B.usedTimes;break}}return B===void 0&&(B=new hw(i,M,T,s),u.push(B)),B}function b(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function w(T){l.remove(T)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:E,acquireProgram:C,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:O}}function _w(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function vw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function df(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hf(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,h,f,g,_,p){let m=i[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=p),e++,m}function a(d,h,f,g,_,p){const m=o(d,h,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?r.push(m):t.push(m)}function l(d,h,f,g,_,p){const m=o(d,h,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function c(d,h){t.length>1&&t.sort(d||vw),n.length>1&&n.sort(h||df),r.length>1&&r.sort(h||df)}function u(){for(let d=e,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function xw(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new hf,i.set(n,[o])):r>=s.length?(o=new hf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function yw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Se};break;case"SpotLight":t={position:new L,direction:new L,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Mw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ew=0;function Sw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Tw(i){const e=new yw,t=Mw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const r=new L,s=new Ie,o=new Ie;function a(c,u){let d=0,h=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let g=0,_=0,p=0,m=0,A=0,v=0,E=0,C=0,b=0,w=0,O=0;c.sort(Sw);const T=u===!0?Math.PI:1;for(let B=0,X=c.length;B<X;B++){const N=c[B],$=N.color,J=N.intensity,W=N.distance,te=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=$.r*J*T,h+=$.g*J*T,f+=$.b*J*T;else if(N.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(N.sh.coefficients[H],J);O++}else if(N.isDirectionalLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const oe=N.shadow,le=t.get(N);le.shadowBias=oe.bias,le.shadowNormalBias=oe.normalBias,le.shadowRadius=oe.radius,le.shadowMapSize=oe.mapSize,n.directionalShadow[g]=le,n.directionalShadowMap[g]=te,n.directionalShadowMatrix[g]=N.shadow.matrix,v++}n.directional[g]=H,g++}else if(N.isSpotLight){const H=e.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy($).multiplyScalar(J*T),H.distance=W,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,n.spot[p]=H;const oe=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,oe.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[p]=oe.matrix,N.castShadow){const le=t.get(N);le.shadowBias=oe.bias,le.shadowNormalBias=oe.normalBias,le.shadowRadius=oe.radius,le.shadowMapSize=oe.mapSize,n.spotShadow[p]=le,n.spotShadowMap[p]=te,C++}p++}else if(N.isRectAreaLight){const H=e.get(N);H.color.copy($).multiplyScalar(J),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=H,m++}else if(N.isPointLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*T),H.distance=N.distance,H.decay=N.decay,N.castShadow){const oe=N.shadow,le=t.get(N);le.shadowBias=oe.bias,le.shadowNormalBias=oe.normalBias,le.shadowRadius=oe.radius,le.shadowMapSize=oe.mapSize,le.shadowCameraNear=oe.camera.near,le.shadowCameraFar=oe.camera.far,n.pointShadow[_]=le,n.pointShadowMap[_]=te,n.pointShadowMatrix[_]=N.shadow.matrix,E++}n.point[_]=H,_++}else if(N.isHemisphereLight){const H=e.get(N);H.skyColor.copy(N.color).multiplyScalar(J*T),H.groundColor.copy(N.groundColor).multiplyScalar(J*T),n.hemi[A]=H,A++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const M=n.hash;(M.directionalLength!==g||M.pointLength!==_||M.spotLength!==p||M.rectAreaLength!==m||M.hemiLength!==A||M.numDirectionalShadows!==v||M.numPointShadows!==E||M.numSpotShadows!==C||M.numSpotMaps!==b||M.numLightProbes!==O)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=m,n.point.length=_,n.hemi.length=A,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=C+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=O,M.directionalLength=g,M.pointLength=_,M.spotLength=p,M.rectAreaLength=m,M.hemiLength=A,M.numDirectionalShadows=v,M.numPointShadows=E,M.numSpotShadows=C,M.numSpotMaps=b,M.numLightProbes=O,n.version=Ew++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,A=c.length;m<A;m++){const v=c[m];if(v.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(v.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function ff(i){const e=new Tw(i),t=[],n=[];function r(){t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:r,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function bw(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ff(i),e.set(r,[a])):s>=o.length?(a=new ff(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Aw extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ww extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pw(i,e,t){let n=new Du;const r=new Te,s=new Te,o=new rt,a=new Aw({depthPacking:uE}),l=new ww,c={},u=t.maxTextureSize,d={[ei]:jt,[jt]:ei,[un]:un},h=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Rw,fragmentShader:Cw}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=og;let m=this.type;this.render=function(b,w,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Ri),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const N=m!==Yn&&this.type===Yn,$=m===Yn&&this.type!==Yn;for(let J=0,W=b.length;J<W;J++){const te=b[J],H=te.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const oe=H.getFrameExtents();if(r.multiply(oe),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,H.mapSize.y=s.y)),H.map===null||N===!0||$===!0){const ye=this.type!==Yn?{minFilter:Wt,magFilter:Wt}:{};H.map!==null&&H.map.dispose(),H.map=new rr(r.x,r.y,ye),H.map.texture.name=te.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const le=H.getViewportCount();for(let ye=0;ye<le;ye++){const be=H.getViewport(ye);o.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),X.viewport(o),H.updateMatrices(te,ye),n=H.getFrustum(),E(w,O,H.camera,te,this.type)}H.isPointLightShadow!==!0&&this.type===Yn&&A(H,O),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(T,M,B)};function A(b,w){const O=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new rr(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,O,h,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,O,f,_,null)}function v(b,w,O,T){let M=null;const B=O.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(B!==void 0)M=B;else if(M=O.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const X=M.uuid,N=w.uuid;let $=c[X];$===void 0&&($={},c[X]=$);let J=$[N];J===void 0&&(J=M.clone(),$[N]=J,w.addEventListener("dispose",C)),M=J}if(M.visible=w.visible,M.wireframe=w.wireframe,T===Yn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=i.properties.get(M);X.light=O}return M}function E(b,w,O,T,M){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Yn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld);const N=e.update(b),$=b.material;if(Array.isArray($)){const J=N.groups;for(let W=0,te=J.length;W<te;W++){const H=J[W],oe=$[H.materialIndex];if(oe&&oe.visible){const le=v(b,oe,T,M);b.onBeforeShadow(i,b,w,O,N,le,H),i.renderBufferDirect(O,null,N,le,b,H),b.onAfterShadow(i,b,w,O,N,le,H)}}}else if($.visible){const J=v(b,$,T,M);b.onBeforeShadow(i,b,w,O,N,J,null),i.renderBufferDirect(O,null,N,J,b,null),b.onAfterShadow(i,b,w,O,N,J,null)}}const X=b.children;for(let N=0,$=X.length;N<$;N++)E(X[N],w,O,T,M)}function C(b){b.target.removeEventListener("dispose",C);for(const O in c){const T=c[O],M=b.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}function Lw(i){function e(){let x=!1;const j=new rt;let re=null;const de=new rt(0,0,0,0);return{setMask:function(Me){re!==Me&&!x&&(i.colorMask(Me,Me,Me,Me),re=Me)},setLocked:function(Me){x=Me},setClear:function(Me,Ye,qe,ot,vt){vt===!0&&(Me*=ot,Ye*=ot,qe*=ot),j.set(Me,Ye,qe,ot),de.equals(j)===!1&&(i.clearColor(Me,Ye,qe,ot),de.copy(j))},reset:function(){x=!1,re=null,de.set(-1,0,0,0)}}}function t(){let x=!1,j=null,re=null,de=null;return{setTest:function(Me){Me?me(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(Me){j!==Me&&!x&&(i.depthMask(Me),j=Me)},setFunc:function(Me){if(re!==Me){switch(Me){case DM:i.depthFunc(i.NEVER);break;case OM:i.depthFunc(i.ALWAYS);break;case FM:i.depthFunc(i.LESS);break;case ba:i.depthFunc(i.LEQUAL);break;case BM:i.depthFunc(i.EQUAL);break;case HM:i.depthFunc(i.GEQUAL);break;case kM:i.depthFunc(i.GREATER);break;case VM:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=Me}},setLocked:function(Me){x=Me},setClear:function(Me){de!==Me&&(i.clearDepth(Me),de=Me)},reset:function(){x=!1,j=null,re=null,de=null}}}function n(){let x=!1,j=null,re=null,de=null,Me=null,Ye=null,qe=null,ot=null,vt=null;return{setTest:function(Qe){x||(Qe?me(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Qe){j!==Qe&&!x&&(i.stencilMask(Qe),j=Qe)},setFunc:function(Qe,ht,pt){(re!==Qe||de!==ht||Me!==pt)&&(i.stencilFunc(Qe,ht,pt),re=Qe,de=ht,Me=pt)},setOp:function(Qe,ht,pt){(Ye!==Qe||qe!==ht||ot!==pt)&&(i.stencilOp(Qe,ht,pt),Ye=Qe,qe=ht,ot=pt)},setLocked:function(Qe){x=Qe},setClear:function(Qe){vt!==Qe&&(i.clearStencil(Qe),vt=Qe)},reset:function(){x=!1,j=null,re=null,de=null,Me=null,Ye=null,qe=null,ot=null,vt=null}}}const r=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,p=null,m=null,A=null,v=null,E=null,C=null,b=new Se(0,0,0),w=0,O=!1,T=null,M=null,B=null,X=null,N=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,W=0;const te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(te)[1]),J=W>=1):te.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),J=W>=2);let H=null,oe={};const le=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),be=new rt().fromArray(le),$e=new rt().fromArray(ye);function ee(x,j,re,de){const Me=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(x,Ye),i.texParameteri(x,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(x,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<re;qe++)x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(j+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Ye}const ue={};ue[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(i.DEPTH_TEST),s.setFunc(ba),V(!1),Q(Wd),me(i.CULL_FACE),P(Ri);function me(x){c[x]!==!0&&(i.enable(x),c[x]=!0)}function pe(x){c[x]!==!1&&(i.disable(x),c[x]=!1)}function Ae(x,j){return u[x]!==j?(i.bindFramebuffer(x,j),u[x]=j,x===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=j),x===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Re(x,j){let re=h,de=!1;if(x){re=d.get(j),re===void 0&&(re=[],d.set(j,re));const Me=x.textures;if(re.length!==Me.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,qe=Me.length;Ye<qe;Ye++)re[Ye]=i.COLOR_ATTACHMENT0+Ye;re.length=Me.length,de=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,de=!0);de&&i.drawBuffers(re)}function Pe(x){return f!==x?(i.useProgram(x),f=x,!0):!1}const G={[$i]:i.FUNC_ADD,[vM]:i.FUNC_SUBTRACT,[xM]:i.FUNC_REVERSE_SUBTRACT};G[yM]=i.MIN,G[MM]=i.MAX;const Be={[EM]:i.ZERO,[SM]:i.ONE,[TM]:i.SRC_COLOR,[kc]:i.SRC_ALPHA,[PM]:i.SRC_ALPHA_SATURATE,[RM]:i.DST_COLOR,[AM]:i.DST_ALPHA,[bM]:i.ONE_MINUS_SRC_COLOR,[Vc]:i.ONE_MINUS_SRC_ALPHA,[CM]:i.ONE_MINUS_DST_COLOR,[wM]:i.ONE_MINUS_DST_ALPHA,[LM]:i.CONSTANT_COLOR,[IM]:i.ONE_MINUS_CONSTANT_COLOR,[NM]:i.CONSTANT_ALPHA,[UM]:i.ONE_MINUS_CONSTANT_ALPHA};function P(x,j,re,de,Me,Ye,qe,ot,vt,Qe){if(x===Ri){g===!0&&(pe(i.BLEND),g=!1);return}if(g===!1&&(me(i.BLEND),g=!0),x!==_M){if(x!==_||Qe!==O){if((p!==$i||v!==$i)&&(i.blendEquation(i.FUNC_ADD),p=$i,v=$i),Qe)switch(x){case jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xd:i.blendFunc(i.ONE,i.ONE);break;case jd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}m=null,A=null,E=null,C=null,b.set(0,0,0),w=0,_=x,O=Qe}return}Me=Me||j,Ye=Ye||re,qe=qe||de,(j!==p||Me!==v)&&(i.blendEquationSeparate(G[j],G[Me]),p=j,v=Me),(re!==m||de!==A||Ye!==E||qe!==C)&&(i.blendFuncSeparate(Be[re],Be[de],Be[Ye],Be[qe]),m=re,A=de,E=Ye,C=qe),(ot.equals(b)===!1||vt!==w)&&(i.blendColor(ot.r,ot.g,ot.b,vt),b.copy(ot),w=vt),_=x,O=!1}function U(x,j){x.side===un?pe(i.CULL_FACE):me(i.CULL_FACE);let re=x.side===jt;j&&(re=!re),V(re),x.blending===jr&&x.transparent===!1?P(Ri):P(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),s.setFunc(x.depthFunc),s.setTest(x.depthTest),s.setMask(x.depthWrite),r.setMask(x.colorWrite);const de=x.stencilWrite;o.setTest(de),de&&(o.setMask(x.stencilWriteMask),o.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),o.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),y(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function V(x){T!==x&&(x?i.frontFace(i.CW):i.frontFace(i.CCW),T=x)}function Q(x){x!==pM?(me(i.CULL_FACE),x!==M&&(x===Wd?i.cullFace(i.BACK):x===mM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),M=x}function S(x){x!==B&&(J&&i.lineWidth(x),B=x)}function y(x,j,re){x?(me(i.POLYGON_OFFSET_FILL),(X!==j||N!==re)&&(i.polygonOffset(j,re),X=j,N=re)):pe(i.POLYGON_OFFSET_FILL)}function I(x){x?me(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function D(x){x===void 0&&(x=i.TEXTURE0+$-1),H!==x&&(i.activeTexture(x),H=x)}function k(x,j,re){re===void 0&&(H===null?re=i.TEXTURE0+$-1:re=H);let de=oe[re];de===void 0&&(de={type:void 0,texture:void 0},oe[re]=de),(de.type!==x||de.texture!==j)&&(H!==re&&(i.activeTexture(re),H=re),i.bindTexture(x,j||ue[x]),de.type=x,de.texture=j)}function F(){const x=oe[H];x!==void 0&&x.type!==void 0&&(i.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function _e(){try{i.texStorage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ne(){try{i.texImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function He(x){be.equals(x)===!1&&(i.scissor(x.x,x.y,x.z,x.w),be.copy(x))}function ke(x){$e.equals(x)===!1&&(i.viewport(x.x,x.y,x.z,x.w),$e.copy(x))}function je(x,j){let re=l.get(j);re===void 0&&(re=new WeakMap,l.set(j,re));let de=re.get(x);de===void 0&&(de=i.getUniformBlockIndex(j,x.name),re.set(x,de))}function Le(x,j){const de=l.get(j).get(x);a.get(j)!==de&&(i.uniformBlockBinding(j,de,x.__bindingPointIndex),a.set(j,de))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,oe={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,p=null,m=null,A=null,v=null,E=null,C=null,b=new Se(0,0,0),w=0,O=!1,T=null,M=null,B=null,X=null,N=null,be.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:pe,bindFramebuffer:Ae,drawBuffers:Re,useProgram:Pe,setBlending:P,setMaterial:U,setFlipSided:V,setCullFace:Q,setLineWidth:S,setPolygonOffset:y,setScissorTest:I,activeTexture:D,bindTexture:k,unbindTexture:F,compressedTexImage2D:ne,compressedTexImage3D:q,texImage2D:ge,texImage3D:Ne,updateUBOMapping:je,uniformBlockBinding:Le,texStorage2D:_e,texStorage3D:he,texSubImage2D:se,texSubImage3D:ce,compressedTexSubImage2D:ie,compressedTexSubImage3D:ae,scissor:He,viewport:ke,reset:xe}}function Iw(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return f?new OffscreenCanvas(S,y):js("canvas")}function _(S,y,I){let D=1;const k=Q(S);if((k.width>I||k.height>I)&&(D=I/Math.max(k.width,k.height)),D<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const F=Math.floor(D*k.width),ne=Math.floor(D*k.height);d===void 0&&(d=g(F,ne));const q=y?g(F,ne):d;return q.width=F,q.height=ne,q.getContext("2d").drawImage(S,0,0,F,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+F+"x"+ne+")."),q}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),S;return S}function p(S){return S.generateMipmaps&&S.minFilter!==Wt&&S.minFilter!==Jt}function m(S){i.generateMipmap(S)}function A(S,y,I,D,k=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let F=y;if(y===i.RED&&(I===i.FLOAT&&(F=i.R32F),I===i.HALF_FLOAT&&(F=i.R16F),I===i.UNSIGNED_BYTE&&(F=i.R8)),y===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(F=i.R8UI),I===i.UNSIGNED_SHORT&&(F=i.R16UI),I===i.UNSIGNED_INT&&(F=i.R32UI),I===i.BYTE&&(F=i.R8I),I===i.SHORT&&(F=i.R16I),I===i.INT&&(F=i.R32I)),y===i.RG&&(I===i.FLOAT&&(F=i.RG32F),I===i.HALF_FLOAT&&(F=i.RG16F),I===i.UNSIGNED_BYTE&&(F=i.RG8)),y===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(F=i.RG8UI),I===i.UNSIGNED_SHORT&&(F=i.RG16UI),I===i.UNSIGNED_INT&&(F=i.RG32UI),I===i.BYTE&&(F=i.RG8I),I===i.SHORT&&(F=i.RG16I),I===i.INT&&(F=i.RG32I)),y===i.RGB&&I===i.UNSIGNED_INT_5_9_9_9_REV&&(F=i.RGB9_E5),y===i.RGBA){const ne=k?Ra:tt.getTransfer(D);I===i.FLOAT&&(F=i.RGBA32F),I===i.HALF_FLOAT&&(F=i.RGBA16F),I===i.UNSIGNED_BYTE&&(F=ne===lt?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(F=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(F=i.RGB5_A1)}return(F===i.R16F||F===i.R32F||F===i.RG16F||F===i.RG32F||F===i.RGBA16F||F===i.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function v(S,y){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==Wt&&S.minFilter!==Jt?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function E(S){const y=S.target;y.removeEventListener("dispose",E),b(y),y.isVideoTexture&&u.delete(y)}function C(S){const y=S.target;y.removeEventListener("dispose",C),O(y)}function b(S){const y=n.get(S);if(y.__webglInit===void 0)return;const I=S.source,D=h.get(I);if(D){const k=D[y.__cacheKey];k.usedTimes--,k.usedTimes===0&&w(S),Object.keys(D).length===0&&h.delete(I)}n.remove(S)}function w(S){const y=n.get(S);i.deleteTexture(y.__webglTexture);const I=S.source,D=h.get(I);delete D[y.__cacheKey],o.memory.textures--}function O(S){const y=n.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(y.__webglFramebuffer[D]))for(let k=0;k<y.__webglFramebuffer[D].length;k++)i.deleteFramebuffer(y.__webglFramebuffer[D][k]);else i.deleteFramebuffer(y.__webglFramebuffer[D]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[D])}else{if(Array.isArray(y.__webglFramebuffer))for(let D=0;D<y.__webglFramebuffer.length;D++)i.deleteFramebuffer(y.__webglFramebuffer[D]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let D=0;D<y.__webglColorRenderbuffer.length;D++)y.__webglColorRenderbuffer[D]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[D]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const I=S.textures;for(let D=0,k=I.length;D<k;D++){const F=n.get(I[D]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),o.memory.textures--),n.remove(I[D])}n.remove(S)}let T=0;function M(){T=0}function B(){const S=T;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),T+=1,S}function X(S){const y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function N(S,y){const I=n.get(S);if(S.isVideoTexture&&U(S),S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){const D=S.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(I,S,y);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+y)}function $(S,y){const I=n.get(S);if(S.version>0&&I.__version!==S.version){be(I,S,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+y)}function J(S,y){const I=n.get(S);if(S.version>0&&I.__version!==S.version){be(I,S,y);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+y)}function W(S,y){const I=n.get(S);if(S.version>0&&I.__version!==S.version){$e(I,S,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+y)}const te={[ns]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},H={[Wt]:i.NEAREST,[cg]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[oa]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},oe={[hE]:i.NEVER,[vE]:i.ALWAYS,[fE]:i.LESS,[yg]:i.LEQUAL,[pE]:i.EQUAL,[_E]:i.GEQUAL,[mE]:i.GREATER,[gE]:i.NOTEQUAL};function le(S,y){if(y.type===In&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Jt||y.magFilter===oa||y.magFilter===Ls||y.magFilter===Kn||y.minFilter===Jt||y.minFilter===oa||y.minFilter===Ls||y.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,te[y.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,te[y.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,te[y.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,H[y.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,H[y.minFilter]),y.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,oe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Wt||y.minFilter!==Ls&&y.minFilter!==Kn||y.type===In&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ye(S,y){let I=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",E));const D=y.source;let k=h.get(D);k===void 0&&(k={},h.set(D,k));const F=X(y);if(F!==S.__cacheKey){k[F]===void 0&&(k[F]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),k[F].usedTimes++;const ne=k[S.__cacheKey];ne!==void 0&&(k[S.__cacheKey].usedTimes--,ne.usedTimes===0&&w(y)),S.__cacheKey=F,S.__webglTexture=k[F].texture}return I}function be(S,y,I){let D=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(D=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(D=i.TEXTURE_3D);const k=ye(S,y),F=y.source;t.bindTexture(D,S.__webglTexture,i.TEXTURE0+I);const ne=n.get(F);if(F.version!==ne.__version||k===!0){t.activeTexture(i.TEXTURE0+I);const q=tt.getPrimaries(tt.workingColorSpace),se=y.colorSpace===Si?null:tt.getPrimaries(y.colorSpace),ce=y.colorSpace===Si||q===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let ie=_(y.image,!1,r.maxTextureSize);ie=V(y,ie);const ae=s.convert(y.format,y.colorSpace),_e=s.convert(y.type);let he=A(y.internalFormat,ae,_e,y.colorSpace,y.isVideoTexture);le(D,y);let ge;const Ne=y.mipmaps,He=y.isVideoTexture!==!0&&he!==vg,ke=ne.__version===void 0||k===!0,je=F.dataReady,Le=v(y,ie);if(y.isDepthTexture)he=i.DEPTH_COMPONENT16,y.type===In?he=i.DEPTH_COMPONENT32F:y.type===is?he=i.DEPTH_COMPONENT24:y.type===to&&(he=i.DEPTH24_STENCIL8),ke&&(He?t.texStorage2D(i.TEXTURE_2D,1,he,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,he,ie.width,ie.height,0,ae,_e,null));else if(y.isDataTexture)if(Ne.length>0){He&&ke&&t.texStorage2D(i.TEXTURE_2D,Le,he,Ne[0].width,Ne[0].height);for(let xe=0,x=Ne.length;xe<x;xe++)ge=Ne[xe],He?je&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ge.width,ge.height,ae,_e,ge.data):t.texImage2D(i.TEXTURE_2D,xe,he,ge.width,ge.height,0,ae,_e,ge.data);y.generateMipmaps=!1}else He?(ke&&t.texStorage2D(i.TEXTURE_2D,Le,he,ie.width,ie.height),je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,ae,_e,ie.data)):t.texImage2D(i.TEXTURE_2D,0,he,ie.width,ie.height,0,ae,_e,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){He&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,he,Ne[0].width,Ne[0].height,ie.depth);for(let xe=0,x=Ne.length;xe<x;xe++)ge=Ne[xe],y.format!==yn?ae!==null?He?je&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,ge.width,ge.height,ie.depth,ae,ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,he,ge.width,ge.height,ie.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?je&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,ge.width,ge.height,ie.depth,ae,_e,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,he,ge.width,ge.height,ie.depth,0,ae,_e,ge.data)}else{He&&ke&&t.texStorage2D(i.TEXTURE_2D,Le,he,Ne[0].width,Ne[0].height);for(let xe=0,x=Ne.length;xe<x;xe++)ge=Ne[xe],y.format!==yn?ae!==null?He?je&&t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,ge.width,ge.height,ae,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,he,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?je&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ge.width,ge.height,ae,_e,ge.data):t.texImage2D(i.TEXTURE_2D,xe,he,ge.width,ge.height,0,ae,_e,ge.data)}else if(y.isDataArrayTexture)He?(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,he,ie.width,ie.height,ie.depth),je&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ae,_e,ie.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,ie.width,ie.height,ie.depth,0,ae,_e,ie.data);else if(y.isData3DTexture)He?(ke&&t.texStorage3D(i.TEXTURE_3D,Le,he,ie.width,ie.height,ie.depth),je&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ae,_e,ie.data)):t.texImage3D(i.TEXTURE_3D,0,he,ie.width,ie.height,ie.depth,0,ae,_e,ie.data);else if(y.isFramebufferTexture){if(ke)if(He)t.texStorage2D(i.TEXTURE_2D,Le,he,ie.width,ie.height);else{let xe=ie.width,x=ie.height;for(let j=0;j<Le;j++)t.texImage2D(i.TEXTURE_2D,j,he,xe,x,0,ae,_e,null),xe>>=1,x>>=1}}else if(Ne.length>0){if(He&&ke){const xe=Q(Ne[0]);t.texStorage2D(i.TEXTURE_2D,Le,he,xe.width,xe.height)}for(let xe=0,x=Ne.length;xe<x;xe++)ge=Ne[xe],He?je&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ae,_e,ge):t.texImage2D(i.TEXTURE_2D,xe,he,ae,_e,ge);y.generateMipmaps=!1}else if(He){if(ke){const xe=Q(ie);t.texStorage2D(i.TEXTURE_2D,Le,he,xe.width,xe.height)}je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,_e,ie)}else t.texImage2D(i.TEXTURE_2D,0,he,ae,_e,ie);p(y)&&m(D),ne.__version=F.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function $e(S,y,I){if(y.image.length!==6)return;const D=ye(S,y),k=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+I);const F=n.get(k);if(k.version!==F.__version||D===!0){t.activeTexture(i.TEXTURE0+I);const ne=tt.getPrimaries(tt.workingColorSpace),q=y.colorSpace===Si?null:tt.getPrimaries(y.colorSpace),se=y.colorSpace===Si||ne===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const ce=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,ae=[];for(let x=0;x<6;x++)!ce&&!ie?ae[x]=_(y.image[x],!0,r.maxCubemapSize):ae[x]=ie?y.image[x].image:y.image[x],ae[x]=V(y,ae[x]);const _e=ae[0],he=s.convert(y.format,y.colorSpace),ge=s.convert(y.type),Ne=A(y.internalFormat,he,ge,y.colorSpace),He=y.isVideoTexture!==!0,ke=F.__version===void 0||D===!0,je=k.dataReady;let Le=v(y,_e);le(i.TEXTURE_CUBE_MAP,y);let xe;if(ce){He&&ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ne,_e.width,_e.height);for(let x=0;x<6;x++){xe=ae[x].mipmaps;for(let j=0;j<xe.length;j++){const re=xe[j];y.format!==yn?he!==null?He?je&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,j,0,0,re.width,re.height,he,re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,j,Ne,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,j,0,0,re.width,re.height,he,ge,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,j,Ne,re.width,re.height,0,he,ge,re.data)}}}else{if(xe=y.mipmaps,He&&ke){xe.length>0&&Le++;const x=Q(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ne,x.width,x.height)}for(let x=0;x<6;x++)if(ie){He?je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,0,0,ae[x].width,ae[x].height,he,ge,ae[x].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,Ne,ae[x].width,ae[x].height,0,he,ge,ae[x].data);for(let j=0;j<xe.length;j++){const de=xe[j].image[x].image;He?je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,j+1,0,0,de.width,de.height,he,ge,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,j+1,Ne,de.width,de.height,0,he,ge,de.data)}}else{He?je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,0,0,he,ge,ae[x]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,Ne,he,ge,ae[x]);for(let j=0;j<xe.length;j++){const re=xe[j];He?je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,j+1,0,0,he,ge,re.image[x]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,j+1,Ne,he,ge,re.image[x])}}}p(y)&&m(i.TEXTURE_CUBE_MAP),F.__version=k.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function ee(S,y,I,D,k,F){const ne=s.convert(I.format,I.colorSpace),q=s.convert(I.type),se=A(I.internalFormat,ne,q,I.colorSpace);if(!n.get(y).__hasExternalTextures){const ie=Math.max(1,y.width>>F),ae=Math.max(1,y.height>>F);k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?t.texImage3D(k,F,se,ie,ae,y.depth,0,ne,q,null):t.texImage2D(k,F,se,ie,ae,0,ne,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),P(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,D,k,n.get(I).__webglTexture,0,Be(y)):(k===i.TEXTURE_2D||k>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,D,k,n.get(I).__webglTexture,F),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(S,y,I){if(i.bindRenderbuffer(i.RENDERBUFFER,S),y.depthBuffer&&!y.stencilBuffer){let D=i.DEPTH_COMPONENT24;if(I||P(y)){const k=y.depthTexture;k&&k.isDepthTexture&&(k.type===In?D=i.DEPTH_COMPONENT32F:k.type===is&&(D=i.DEPTH_COMPONENT24));const F=Be(y);P(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F,D,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,F,D,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,D,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(y.depthBuffer&&y.stencilBuffer){const D=Be(y);I&&P(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,D,i.DEPTH24_STENCIL8,y.width,y.height):P(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{const D=y.textures;for(let k=0;k<D.length;k++){const F=D[k],ne=s.convert(F.format,F.colorSpace),q=s.convert(F.type),se=A(F.internalFormat,ne,q,F.colorSpace),ce=Be(y);I&&P(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,se,y.width,y.height):P(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,se,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,se,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),N(y.depthTexture,0);const D=n.get(y.depthTexture).__webglTexture,k=Be(y);if(y.depthTexture.format===qr)P(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,D,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,D,0);else if(y.depthTexture.format===Ws)P(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,D,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function pe(S){const y=n.get(S),I=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");me(y.__webglFramebuffer,S)}else if(I){y.__webglDepthbuffer=[];for(let D=0;D<6;D++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[D]),y.__webglDepthbuffer[D]=i.createRenderbuffer(),ue(y.__webglDepthbuffer[D],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),ue(y.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(S,y,I){const D=n.get(S);y!==void 0&&ee(D.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&pe(S)}function Re(S){const y=S.texture,I=n.get(S),D=n.get(y);S.addEventListener("dispose",C);const k=S.textures,F=S.isWebGLCubeRenderTarget===!0,ne=k.length>1;if(ne||(D.__webglTexture===void 0&&(D.__webglTexture=i.createTexture()),D.__version=y.version,o.memory.textures++),F){I.__webglFramebuffer=[];for(let q=0;q<6;q++)if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[q]=[];for(let se=0;se<y.mipmaps.length;se++)I.__webglFramebuffer[q][se]=i.createFramebuffer()}else I.__webglFramebuffer[q]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let q=0;q<y.mipmaps.length;q++)I.__webglFramebuffer[q]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(ne)for(let q=0,se=k.length;q<se;q++){const ce=n.get(k[q]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&P(S)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let q=0;q<k.length;q++){const se=k[q];I.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[q]);const ce=s.convert(se.format,se.colorSpace),ie=s.convert(se.type),ae=A(se.internalFormat,ce,ie,se.colorSpace,S.isXRRenderTarget===!0),_e=Be(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ae,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,I.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(I.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(F){t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture),le(i.TEXTURE_CUBE_MAP,y);for(let q=0;q<6;q++)if(y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)ee(I.__webglFramebuffer[q][se],S,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,se);else ee(I.__webglFramebuffer[q],S,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(y)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){for(let q=0,se=k.length;q<se;q++){const ce=k[q],ie=n.get(ce);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),le(i.TEXTURE_2D,ce),ee(I.__webglFramebuffer,S,ce,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,0),p(ce)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(q=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,D.__webglTexture),le(q,y),y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)ee(I.__webglFramebuffer[se],S,y,i.COLOR_ATTACHMENT0,q,se);else ee(I.__webglFramebuffer,S,y,i.COLOR_ATTACHMENT0,q,0);p(y)&&m(q),t.unbindTexture()}S.depthBuffer&&pe(S)}function Pe(S){const y=S.textures;for(let I=0,D=y.length;I<D;I++){const k=y[I];if(p(k)){const F=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ne=n.get(k).__webglTexture;t.bindTexture(F,ne),m(F),t.unbindTexture()}}}function G(S){if(S.samples>0&&P(S)===!1){const y=S.textures,I=S.width,D=S.height;let k=i.COLOR_BUFFER_BIT;const F=[],ne=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=n.get(S),se=y.length>1;if(se)for(let ce=0;ce<y.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let ce=0;ce<y.length;ce++){F.push(i.COLOR_ATTACHMENT0+ce),S.depthBuffer&&F.push(ne);const ie=q.__ignoreDepthValues!==void 0?q.__ignoreDepthValues:!1;if(ie===!1&&(S.depthBuffer&&(k|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&q.__isTransmissionRenderTarget!==!0&&(k|=i.STENCIL_BUFFER_BIT)),se&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,q.__webglColorRenderbuffer[ce]),ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ne]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ne])),se){const ae=n.get(y[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,I,D,0,0,I,D,k,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,F)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let ce=0;ce<y.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,q.__webglColorRenderbuffer[ce]);const ie=n.get(y[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}}function Be(S){return Math.min(r.maxSamples,S.samples)}function P(S){const y=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(S){const y=o.render.frame;u.get(S)!==y&&(u.set(S,y),S.update())}function V(S,y){const I=S.colorSpace,D=S.format,k=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||I!==Lt&&I!==Si&&(tt.getTransfer(I)===lt?(D!==yn||k!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),y}function Q(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=M,this.setTexture2D=N,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=Ae,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=P}function Nw(i,e){function t(n,r=Si){let s;const o=tt.getTransfer(r);if(n===Pi)return i.UNSIGNED_BYTE;if(n===hg)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fg)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eE)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===QM)return i.BYTE;if(n===JM)return i.SHORT;if(n===ug)return i.UNSIGNED_SHORT;if(n===dg)return i.INT;if(n===is)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===wa)return i.HALF_FLOAT;if(n===tE)return i.ALPHA;if(n===nE)return i.RGB;if(n===yn)return i.RGBA;if(n===iE)return i.LUMINANCE;if(n===rE)return i.LUMINANCE_ALPHA;if(n===qr)return i.DEPTH_COMPONENT;if(n===Ws)return i.DEPTH_STENCIL;if(n===pg)return i.RED;if(n===mg)return i.RED_INTEGER;if(n===sE)return i.RG;if(n===gg)return i.RG_INTEGER;if(n===_g)return i.RGBA_INTEGER;if(n===El||n===Sl||n===Tl||n===bl)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===El)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===El)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$d||n===Kd||n===Zd||n===Qd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$d)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vg)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Jd||n===eh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Jd)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===eh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===th||n===nh||n===ih||n===rh||n===sh||n===oh||n===ah||n===lh||n===ch||n===uh||n===dh||n===hh||n===fh||n===ph)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===th)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ih)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ah)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ch)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ph)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Al||n===mh||n===gh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Al)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oE||n===_h||n===vh||n===xh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Al)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_h)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===to?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Uw extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dw={type:"move"};class Ql{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new wt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new ti({vertexShader:Ow,fragmentShader:Fw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xt(new Za(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Hw extends cr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=new Bw,p=t.getContextAttributes();let m=null,A=null;const v=[],E=[],C=new Te;let b=null;const w=new Gt;w.layers.enable(1),w.viewport=new rt;const O=new Gt;O.layers.enable(2),O.viewport=new rt;const T=[w,O],M=new Uw;M.layers.enable(1),M.layers.enable(2);let B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=v[ee];return ue===void 0&&(ue=new Ql,v[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=v[ee];return ue===void 0&&(ue=new Ql,v[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=v[ee];return ue===void 0&&(ue=new Ql,v[ee]=ue),ue.getHandSpace()};function N(ee){const ue=E.indexOf(ee.inputSource);if(ue===-1)return;const me=v[ue];me!==void 0&&(me.update(ee.inputSource,ee.frame,c||o),me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function $(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",J);for(let ee=0;ee<v.length;ee++){const ue=E[ee];ue!==null&&(E[ee]=null,v[ee].disconnect(ue))}B=null,X=null,_.reset(),e.setRenderTarget(m),f=null,h=null,d=null,r=null,A=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",$),r.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ue={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new rr(f.framebufferWidth,f.framebufferHeight,{format:yn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ue=null,me=null,pe=null;p.depth&&(pe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=p.stencil?Ws:qr,me=p.stencil?to:is);const Ae={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new rr(h.textureWidth,h.textureHeight,{format:yn,type:Pi,depthTexture:new Ug(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Re=e.properties.get(A);Re.__ignoreDepthValues=h.ignoreDepthValues}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(ee){for(let ue=0;ue<ee.removed.length;ue++){const me=ee.removed[ue],pe=E.indexOf(me);pe>=0&&(E[pe]=null,v[pe].disconnect(me))}for(let ue=0;ue<ee.added.length;ue++){const me=ee.added[ue];let pe=E.indexOf(me);if(pe===-1){for(let Re=0;Re<v.length;Re++)if(Re>=E.length){E.push(me),pe=Re;break}else if(E[Re]===null){E[Re]=me,pe=Re;break}if(pe===-1)break}const Ae=v[pe];Ae&&Ae.connect(me)}}const W=new L,te=new L;function H(ee,ue,me){W.setFromMatrixPosition(ue.matrixWorld),te.setFromMatrixPosition(me.matrixWorld);const pe=W.distanceTo(te),Ae=ue.projectionMatrix.elements,Re=me.projectionMatrix.elements,Pe=Ae[14]/(Ae[10]-1),G=Ae[14]/(Ae[10]+1),Be=(Ae[9]+1)/Ae[5],P=(Ae[9]-1)/Ae[5],U=(Ae[8]-1)/Ae[0],V=(Re[8]+1)/Re[0],Q=Pe*U,S=Pe*V,y=pe/(-U+V),I=y*-U;ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(I),ee.translateZ(y),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const D=Pe+y,k=G+y,F=Q-I,ne=S+(pe-I),q=Be*G/k*D,se=P*G/k*D;ee.projectionMatrix.makePerspective(F,ne,q,se,D,k),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function oe(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;_.texture!==null&&(ee.near=_.depthNear,ee.far=_.depthFar),M.near=O.near=w.near=ee.near,M.far=O.far=w.far=ee.far,(B!==M.near||X!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),B=M.near,X=M.far,w.near=B,w.far=X,O.near=B,O.far=X,w.updateProjectionMatrix(),O.updateProjectionMatrix(),ee.updateProjectionMatrix());const ue=ee.parent,me=M.cameras;oe(M,ue);for(let pe=0;pe<me.length;pe++)oe(me[pe],ue);me.length===2?H(M,w,O):M.projectionMatrix.copy(w.projectionMatrix),le(ee,M,ue)};function le(ee,ue,me){me===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ss*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null};let ye=null;function be(ee,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const me=u.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let pe=!1;me.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let Re=0;Re<me.length;Re++){const Pe=me[Re];let G=null;if(f!==null)G=f.getViewport(Pe);else{const P=d.getViewSubImage(h,Pe);G=P.viewport,Re===0&&(e.setRenderTargetTextures(A,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(A))}let Be=T[Re];Be===void 0&&(Be=new Gt,Be.layers.enable(Re),Be.viewport=new rt,T[Re]=Be),Be.matrix.fromArray(Pe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Pe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(G.x,G.y,G.width,G.height),Re===0&&(M.matrix.copy(Be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(Be)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Re=d.getDepthInformation(me[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,r.renderState)}}for(let me=0;me<v.length;me++){const pe=E[me],Ae=v[me];pe!==null&&Ae!==void 0&&Ae.update(pe,ue,c||o)}_.render(e,M),ye&&ye(ee,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}const $e=new Ng;$e.setAnimationLoop(be),this.setAnimationLoop=function(ee){ye=ee},this.dispose=function(){}}}const Vi=new nn,kw=new Ie;function Vw(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Cg(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,A,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,E)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,A,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const A=e.get(m),v=A.envMap,E=A.envMapRotation;if(v&&(p.envMap.value=v,Vi.copy(E),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),p.envMapRotation.value.setFromMatrix4(kw.makeRotationFromEuler(Vi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const C=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*C,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,A,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*A,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,A){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const A=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function zw(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,v){const E=v.program;n.uniformBlockBinding(A,E)}function c(A,v){let E=r[A.id];E===void 0&&(g(A),E=u(A),r[A.id]=E,A.addEventListener("dispose",p));const C=v.program;n.updateUBOMapping(A,C);const b=e.render.frame;s[A.id]!==b&&(h(A),s[A.id]=b)}function u(A){const v=d();A.__bindingPointIndex=v;const E=i.createBuffer(),C=A.__size,b=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const v=r[A.id],E=A.uniforms,C=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,w=E.length;b<w;b++){const O=Array.isArray(E[b])?E[b]:[E[b]];for(let T=0,M=O.length;T<M;T++){const B=O[T];if(f(B,b,T,C)===!0){const X=B.__offset,N=Array.isArray(B.value)?B.value:[B.value];let $=0;for(let J=0;J<N.length;J++){const W=N[J],te=_(W);typeof W=="number"||typeof W=="boolean"?(B.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,X+$,B.__data)):W.isMatrix3?(B.__data[0]=W.elements[0],B.__data[1]=W.elements[1],B.__data[2]=W.elements[2],B.__data[3]=0,B.__data[4]=W.elements[3],B.__data[5]=W.elements[4],B.__data[6]=W.elements[5],B.__data[7]=0,B.__data[8]=W.elements[6],B.__data[9]=W.elements[7],B.__data[10]=W.elements[8],B.__data[11]=0):(W.toArray(B.__data,$),$+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(A,v,E,C){const b=A.value,w=v+"_"+E;if(C[w]===void 0)return typeof b=="number"||typeof b=="boolean"?C[w]=b:C[w]=b.clone(),!0;{const O=C[w];if(typeof b=="number"||typeof b=="boolean"){if(O!==b)return C[w]=b,!0}else if(O.equals(b)===!1)return O.copy(b),!0}return!1}function g(A){const v=A.uniforms;let E=0;const C=16;for(let w=0,O=v.length;w<O;w++){const T=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,B=T.length;M<B;M++){const X=T[M],N=Array.isArray(X.value)?X.value:[X.value];for(let $=0,J=N.length;$<J;$++){const W=N[$],te=_(W),H=E%C;H!==0&&C-H<te.boundary&&(E+=C-H),X.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=te.storage}}}const b=E%C;return b>0&&(E+=C-b),A.__size=E,A.__cache={},this}function _(A){const v={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(v.boundary=4,v.storage=4):A.isVector2?(v.boundary=8,v.storage=8):A.isVector3||A.isColor?(v.boundary=16,v.storage=12):A.isVector4?(v.boundary=16,v.storage=16):A.isMatrix3?(v.boundary=48,v.storage=48):A.isMatrix4?(v.boundary=64,v.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),v}function p(A){const v=A.target;v.removeEventListener("dispose",p);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(const A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class Gw{constructor(e={}){const{canvas:t=OE(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=Ci,this.toneMappingExposure=1;const v=this;let E=!1,C=0,b=0,w=null,O=-1,T=null;const M=new rt,B=new rt;let X=null;const N=new Se(0);let $=0,J=t.width,W=t.height,te=1,H=null,oe=null;const le=new rt(0,0,J,W),ye=new rt(0,0,J,W);let be=!1;const $e=new Du;let ee=!1,ue=!1;const me=new Ie,pe=new Te,Ae=new L,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return w===null?te:1}let G=n;function Be(R,z){const K=t.getContext(R,z);return K!==null?K:null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vn}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",de,!1),G===null){const z="webgl2";if(G=Be(z,R),G===null)throw Be(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let P,U,V,Q,S,y,I,D,k,F,ne,q,se,ce,ie,ae,_e,he,ge,Ne,He,ke,je,Le;function xe(){P=new Zb(G),P.init(),U=new Xb(G,P,e),ke=new Nw(G,P),V=new Lw(G),Q=new eA(G),S=new _w,y=new Iw(G,P,V,S,U,ke,Q),I=new qb(v),D=new Kb(v),k=new oS(G),je=new Gb(G,k),F=new Qb(G,k,Q,je),ne=new nA(G,F,k,Q),ge=new tA(G,U,y),ae=new jb(S),q=new gw(v,I,D,P,U,je,ae),se=new Vw(v,S),ce=new xw,ie=new bw(P),he=new zb(v,I,D,V,ne,h,l),_e=new Pw(v,ne,U),Le=new zw(G,Q,U,V),Ne=new Wb(G,P,Q),He=new Jb(G,P,Q),Q.programs=q.programs,v.capabilities=U,v.extensions=P,v.properties=S,v.renderLists=ce,v.shadowMap=_e,v.state=V,v.info=Q}xe();const x=new Hw(v,G);this.xr=x,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=P.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=P.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(R){R!==void 0&&(te=R,this.setSize(J,W,!1))},this.getSize=function(R){return R.set(J,W)},this.setSize=function(R,z,K=!0){if(x.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=R,W=z,t.width=Math.floor(R*te),t.height=Math.floor(z*te),K===!0&&(t.style.width=R+"px",t.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(J*te,W*te).floor()},this.setDrawingBufferSize=function(R,z,K){J=R,W=z,te=K,t.width=Math.floor(R*K),t.height=Math.floor(z*K),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(le)},this.setViewport=function(R,z,K,Z){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,z,K,Z),V.viewport(M.copy(le).multiplyScalar(te).round())},this.getScissor=function(R){return R.copy(ye)},this.setScissor=function(R,z,K,Z){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,z,K,Z),V.scissor(B.copy(ye).multiplyScalar(te).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){V.setScissorTest(be=R)},this.setOpaqueSort=function(R){H=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(R=!0,z=!0,K=!0){let Z=0;if(R){let Y=!1;if(w!==null){const ve=w.texture.format;Y=ve===_g||ve===gg||ve===mg}if(Y){const ve=w.texture.type,Ee=ve===Pi||ve===is||ve===ug||ve===to||ve===hg||ve===fg,Ce=he.getClearColor(),Ue=he.getClearAlpha(),ze=Ce.r,Ve=Ce.g,Ge=Ce.b;Ee?(f[0]=ze,f[1]=Ve,f[2]=Ge,f[3]=Ue,G.clearBufferuiv(G.COLOR,0,f)):(g[0]=ze,g[1]=Ve,g[2]=Ge,g[3]=Ue,G.clearBufferiv(G.COLOR,0,g))}else Z|=G.COLOR_BUFFER_BIT}z&&(Z|=G.DEPTH_BUFFER_BIT),K&&(Z|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ce.dispose(),ie.dispose(),S.dispose(),I.dispose(),D.dispose(),ne.dispose(),je.dispose(),Le.dispose(),q.dispose(),x.dispose(),x.removeEventListener("sessionstart",ht),x.removeEventListener("sessionend",pt),Bt.stop()};function j(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=Q.autoReset,z=_e.enabled,K=_e.autoUpdate,Z=_e.needsUpdate,Y=_e.type;xe(),Q.autoReset=R,_e.enabled=z,_e.autoUpdate=K,_e.needsUpdate=Z,_e.type=Y}function de(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Me(R){const z=R.target;z.removeEventListener("dispose",Me),Ye(z)}function Ye(R){qe(R),S.remove(R)}function qe(R){const z=S.get(R).programs;z!==void 0&&(z.forEach(function(K){q.releaseProgram(K)}),R.isShaderMaterial&&q.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,K,Z,Y,ve){z===null&&(z=Re);const Ee=Y.isMesh&&Y.matrixWorld.determinant()<0,Ce=co(R,z,K,Z,Y);V.setMaterial(Z,Ee);let Ue=K.index,ze=1;if(Z.wireframe===!0){if(Ue=F.getWireframeAttribute(K),Ue===void 0)return;ze=2}const Ve=K.drawRange,Ge=K.attributes.position;let mt=Ve.start*ze,Kt=(Ve.start+Ve.count)*ze;ve!==null&&(mt=Math.max(mt,ve.start*ze),Kt=Math.min(Kt,(ve.start+ve.count)*ze)),Ue!==null?(mt=Math.max(mt,0),Kt=Math.min(Kt,Ue.count)):Ge!=null&&(mt=Math.max(mt,0),Kt=Math.min(Kt,Ge.count));const Tt=Kt-mt;if(Tt<0||Tt===1/0)return;je.setup(Y,Z,Ce,K,Ue);let kn,ft=Ne;if(Ue!==null&&(kn=k.get(Ue),ft=He,ft.setIndex(kn)),Y.isMesh)Z.wireframe===!0?(V.setLineWidth(Z.wireframeLinewidth*Pe()),ft.setMode(G.LINES)):ft.setMode(G.TRIANGLES);else if(Y.isLine){let We=Z.linewidth;We===void 0&&(We=1),V.setLineWidth(We*Pe()),Y.isLineSegments?ft.setMode(G.LINES):Y.isLineLoop?ft.setMode(G.LINE_LOOP):ft.setMode(G.LINE_STRIP)}else Y.isPoints?ft.setMode(G.POINTS):Y.isSprite&&ft.setMode(G.TRIANGLES);if(Y.isBatchedMesh)ft.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ft.renderInstances(mt,Tt,Y.count);else if(K.isInstancedBufferGeometry){const We=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,rl=Math.min(K.instanceCount,We);ft.renderInstances(mt,Tt,rl)}else ft.render(mt,Tt)};function ot(R,z,K){R.transparent===!0&&R.side===un&&R.forceSinglePass===!1?(R.side=jt,R.needsUpdate=!0,Hn(R,z,K),R.side=ei,R.needsUpdate=!0,Hn(R,z,K),R.side=un):Hn(R,z,K)}this.compile=function(R,z,K=null){K===null&&(K=R),p=ie.get(K),p.init(),A.push(p),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),R!==K&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(v._useLegacyLights);const Z=new Set;return R.traverse(function(Y){const ve=Y.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){const Ce=ve[Ee];ot(Ce,K,Y),Z.add(Ce)}else ot(ve,K,Y),Z.add(ve)}),A.pop(),p=null,Z},this.compileAsync=function(R,z,K=null){const Z=this.compile(R,z,K);return new Promise(Y=>{function ve(){if(Z.forEach(function(Ee){S.get(Ee).currentProgram.isReady()&&Z.delete(Ee)}),Z.size===0){Y(R);return}setTimeout(ve,10)}P.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let vt=null;function Qe(R){vt&&vt(R)}function ht(){Bt.stop()}function pt(){Bt.start()}const Bt=new Ng;Bt.setAnimationLoop(Qe),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(R){vt=R,x.setAnimationLoop(R),R===null?Bt.stop():Bt.start()},x.addEventListener("sessionstart",ht),x.addEventListener("sessionend",pt),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),x.enabled===!0&&x.isPresenting===!0&&(x.cameraAutoUpdate===!0&&x.updateCamera(z),z=x.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,z,w),p=ie.get(R,A.length),p.init(),A.push(p),me.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),$e.setFromProjectionMatrix(me),ue=this.localClippingEnabled,ee=ae.init(this.clippingPlanes,ue),_=ce.get(R,m.length),_.init(),m.push(_),$t(R,z,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(H,oe),this.info.render.frame++,ee===!0&&ae.beginShadows();const K=p.state.shadowsArray;if(_e.render(K,R,z),ee===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1)&&he.render(_,R),p.setupLights(v._useLegacyLights),z.isArrayCamera){const Z=z.cameras;for(let Y=0,ve=Z.length;Y<ve;Y++){const Ee=Z[Y];Tn(_,R,Ee,Ee.viewport)}}else Tn(_,R,z);w!==null&&(y.updateMultisampleRenderTarget(w),y.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(v,R,z),je.resetDefaultState(),O=-1,T=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function $t(R,z,K,Z){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||$e.intersectsSprite(R)){Z&&Ae.setFromMatrixPosition(R.matrixWorld).applyMatrix4(me);const Ee=ne.update(R),Ce=R.material;Ce.visible&&_.push(R,Ee,Ce,K,Ae.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||$e.intersectsObject(R))){const Ee=ne.update(R),Ce=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ae.copy(R.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ae.copy(Ee.boundingSphere.center)),Ae.applyMatrix4(R.matrixWorld).applyMatrix4(me)),Array.isArray(Ce)){const Ue=Ee.groups;for(let ze=0,Ve=Ue.length;ze<Ve;ze++){const Ge=Ue[ze],mt=Ce[Ge.materialIndex];mt&&mt.visible&&_.push(R,Ee,mt,K,Ae.z,Ge)}}else Ce.visible&&_.push(R,Ee,Ce,K,Ae.z,null)}}const ve=R.children;for(let Ee=0,Ce=ve.length;Ee<Ce;Ee++)$t(ve[Ee],z,K,Z)}function Tn(R,z,K,Z){const Y=R.opaque,ve=R.transmissive,Ee=R.transparent;p.setupLightsView(K),ee===!0&&ae.setGlobalState(v.clippingPlanes,K),ve.length>0&&Fn(Y,ve,z,K),Z&&V.viewport(M.copy(Z)),Y.length>0&&Bn(Y,z,K),ve.length>0&&Bn(ve,z,K),Ee.length>0&&Bn(Ee,z,K),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Fn(R,z,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new rr(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")||P.has("EXT_color_buffer_float")?wa:Pi,minFilter:Kn,samples:4,stencilBuffer:s});const ze=S.get(p.state.transmissionRenderTarget);ze.__isTransmissionRenderTarget=!0}const ve=p.state.transmissionRenderTarget;v.getDrawingBufferSize(pe),ve.setSize(pe.x,pe.y);const Ee=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(N),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear();const Ce=v.toneMapping;v.toneMapping=Ci,Bn(R,K,Z),y.updateMultisampleRenderTarget(ve),y.updateRenderTargetMipmap(ve);let Ue=!1;for(let ze=0,Ve=z.length;ze<Ve;ze++){const Ge=z[ze],mt=Ge.object,Kt=Ge.geometry,Tt=Ge.material,kn=Ge.group;if(Tt.side===un&&mt.layers.test(Z.layers)){const ft=Tt.side;Tt.side=jt,Tt.needsUpdate=!0,oo(mt,K,Z,Kt,Tt,kn),Tt.side=ft,Tt.needsUpdate=!0,Ue=!0}}Ue===!0&&(y.updateMultisampleRenderTarget(ve),y.updateRenderTargetMipmap(ve)),v.setRenderTarget(Ee),v.setClearColor(N,$),v.toneMapping=Ce}function Bn(R,z,K){const Z=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,ve=R.length;Y<ve;Y++){const Ee=R[Y],Ce=Ee.object,Ue=Ee.geometry,ze=Z===null?Ee.material:Z,Ve=Ee.group;Ce.layers.test(K.layers)&&oo(Ce,z,K,Ue,ze,Ve)}}function oo(R,z,K,Z,Y,ve){R.onBeforeRender(v,z,K,Z,Y,ve),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(v,z,K,Z,R,ve),Y.transparent===!0&&Y.side===un&&Y.forceSinglePass===!1?(Y.side=jt,Y.needsUpdate=!0,v.renderBufferDirect(K,z,Z,Y,R,ve),Y.side=ei,Y.needsUpdate=!0,v.renderBufferDirect(K,z,Z,Y,R,ve),Y.side=un):v.renderBufferDirect(K,z,Z,Y,R,ve),R.onAfterRender(v,z,K,Z,Y,ve)}function Hn(R,z,K){z.isScene!==!0&&(z=Re);const Z=S.get(R),Y=p.state.lights,ve=p.state.shadowsArray,Ee=Y.state.version,Ce=q.getParameters(R,Y.state,ve,z,K),Ue=q.getProgramCacheKey(Ce);let ze=Z.programs;Z.environment=R.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(R.isMeshStandardMaterial?D:I).get(R.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,ze===void 0&&(R.addEventListener("dispose",Me),ze=new Map,Z.programs=ze);let Ve=ze.get(Ue);if(Ve!==void 0){if(Z.currentProgram===Ve&&Z.lightsStateVersion===Ee)return lo(R,Ce),Ve}else Ce.uniforms=q.getUniforms(R),R.onBuild(K,Ce,v),R.onBeforeCompile(Ce,v),Ve=q.acquireProgram(Ce,Ue),ze.set(Ue,Ve),Z.uniforms=Ce.uniforms;const Ge=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=ae.uniform),lo(R,Ce),Z.needsLights=o_(R),Z.lightsStateVersion=Ee,Z.needsLights&&(Ge.ambientLightColor.value=Y.state.ambient,Ge.lightProbe.value=Y.state.probe,Ge.directionalLights.value=Y.state.directional,Ge.directionalLightShadows.value=Y.state.directionalShadow,Ge.spotLights.value=Y.state.spot,Ge.spotLightShadows.value=Y.state.spotShadow,Ge.rectAreaLights.value=Y.state.rectArea,Ge.ltc_1.value=Y.state.rectAreaLTC1,Ge.ltc_2.value=Y.state.rectAreaLTC2,Ge.pointLights.value=Y.state.point,Ge.pointLightShadows.value=Y.state.pointShadow,Ge.hemisphereLights.value=Y.state.hemi,Ge.directionalShadowMap.value=Y.state.directionalShadowMap,Ge.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ge.spotShadowMap.value=Y.state.spotShadowMap,Ge.spotLightMatrix.value=Y.state.spotLightMatrix,Ge.spotLightMap.value=Y.state.spotLightMap,Ge.pointShadowMap.value=Y.state.pointShadowMap,Ge.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=Ve,Z.uniformsList=null,Ve}function ao(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=aa.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function lo(R,z){const K=S.get(R);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function co(R,z,K,Z,Y){z.isScene!==!0&&(z=Re),y.resetTextureUnits();const ve=z.fog,Ee=Z.isMeshStandardMaterial?z.environment:null,Ce=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Lt,Ue=(Z.isMeshStandardMaterial?D:I).get(Z.envMap||Ee),ze=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ge=!!K.morphAttributes.position,mt=!!K.morphAttributes.normal,Kt=!!K.morphAttributes.color;let Tt=Ci;Z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Tt=v.toneMapping);const kn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ft=kn!==void 0?kn.length:0,We=S.get(Z),rl=p.state.lights;if(ee===!0&&(ue===!0||R!==T)){const rn=R===T&&Z.id===O;ae.setState(Z,R,rn)}let ct=!1;Z.version===We.__version?(We.needsLights&&We.lightsStateVersion!==rl.state.version||We.outputColorSpace!==Ce||Y.isBatchedMesh&&We.batching===!1||!Y.isBatchedMesh&&We.batching===!0||Y.isInstancedMesh&&We.instancing===!1||!Y.isInstancedMesh&&We.instancing===!0||Y.isSkinnedMesh&&We.skinning===!1||!Y.isSkinnedMesh&&We.skinning===!0||Y.isInstancedMesh&&We.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&We.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&We.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&We.instancingMorph===!1&&Y.morphTexture!==null||We.envMap!==Ue||Z.fog===!0&&We.fog!==ve||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ae.numPlanes||We.numIntersection!==ae.numIntersection)||We.vertexAlphas!==ze||We.vertexTangents!==Ve||We.morphTargets!==Ge||We.morphNormals!==mt||We.morphColors!==Kt||We.toneMapping!==Tt||We.morphTargetsCount!==ft)&&(ct=!0):(ct=!0,We.__version=Z.version);let Ui=We.currentProgram;ct===!0&&(Ui=Hn(Z,z,Y));let Xu=!1,_s=!1,sl=!1;const Nt=Ui.getUniforms(),si=We.uniforms;if(V.useProgram(Ui.program)&&(Xu=!0,_s=!0,sl=!0),Z.id!==O&&(O=Z.id,_s=!0),Xu||T!==R){Nt.setValue(G,"projectionMatrix",R.projectionMatrix),Nt.setValue(G,"viewMatrix",R.matrixWorldInverse);const rn=Nt.map.cameraPosition;rn!==void 0&&rn.setValue(G,Ae.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&Nt.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Nt.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,_s=!0,sl=!0)}if(Y.isSkinnedMesh){Nt.setOptional(G,Y,"bindMatrix"),Nt.setOptional(G,Y,"bindMatrixInverse");const rn=Y.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Nt.setValue(G,"boneTexture",rn.boneTexture,y))}Y.isBatchedMesh&&(Nt.setOptional(G,Y,"batchingTexture"),Nt.setValue(G,"batchingTexture",Y._matricesTexture,y));const ol=K.morphAttributes;if((ol.position!==void 0||ol.normal!==void 0||ol.color!==void 0)&&ge.update(Y,K,Ui),(_s||We.receiveShadow!==Y.receiveShadow)&&(We.receiveShadow=Y.receiveShadow,Nt.setValue(G,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(si.envMap.value=Ue,si.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(si.envMapIntensity.value=z.environmentIntensity),_s&&(Nt.setValue(G,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&il(si,sl),ve&&Z.fog===!0&&se.refreshFogUniforms(si,ve),se.refreshMaterialUniforms(si,Z,te,W,p.state.transmissionRenderTarget),aa.upload(G,ao(We),si,y)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(aa.upload(G,ao(We),si,y),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Nt.setValue(G,"center",Y.center),Nt.setValue(G,"modelViewMatrix",Y.modelViewMatrix),Nt.setValue(G,"normalMatrix",Y.normalMatrix),Nt.setValue(G,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const rn=Z.uniformsGroups;for(let al=0,a_=rn.length;al<a_;al++){const ju=rn[al];Le.update(ju,Ui),Le.bind(ju,Ui)}}return Ui}function il(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function o_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,z,K){S.get(R.texture).__webglTexture=z,S.get(R.depthTexture).__webglTexture=K;const Z=S.get(R);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,z){const K=S.get(R);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,K=0){w=R,C=z,b=K;let Z=!0,Y=null,ve=!1,Ee=!1;if(R){const Ue=S.get(R);Ue.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(G.FRAMEBUFFER,null),Z=!1):Ue.__webglFramebuffer===void 0?y.setupRenderTarget(R):Ue.__hasExternalTextures&&y.rebindTextures(R,S.get(R.texture).__webglTexture,S.get(R.depthTexture).__webglTexture);const ze=R.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);const Ve=S.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?Y=Ve[z][K]:Y=Ve[z],ve=!0):R.samples>0&&y.useMultisampledRTT(R)===!1?Y=S.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?Y=Ve[K]:Y=Ve,M.copy(R.viewport),B.copy(R.scissor),X=R.scissorTest}else M.copy(le).multiplyScalar(te).floor(),B.copy(ye).multiplyScalar(te).floor(),X=be;if(V.bindFramebuffer(G.FRAMEBUFFER,Y)&&Z&&V.drawBuffers(R,Y),V.viewport(M),V.scissor(B),V.setScissorTest(X),ve){const Ue=S.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue.__webglTexture,K)}else if(Ee){const Ue=S.get(R.texture),ze=z||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ue.__webglTexture,K||0,ze)}O=-1},this.readRenderTargetPixels=function(R,z,K,Z,Y,ve,Ee){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=S.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){V.bindFramebuffer(G.FRAMEBUFFER,Ce);try{const Ue=R.texture,ze=Ue.format,Ve=Ue.type;if(ze!==yn&&ke.convert(ze)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ve===wa&&(P.has("EXT_color_buffer_half_float")||P.has("EXT_color_buffer_float"));if(Ve!==Pi&&ke.convert(Ve)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&Ve!==In&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-Z&&K>=0&&K<=R.height-Y&&G.readPixels(z,K,Z,Y,ke.convert(ze),ke.convert(Ve),ve)}finally{const Ue=w!==null?S.get(w).__webglFramebuffer:null;V.bindFramebuffer(G.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(R,z,K=0){const Z=Math.pow(2,-K),Y=Math.floor(z.image.width*Z),ve=Math.floor(z.image.height*Z);y.setTexture2D(z,0),G.copyTexSubImage2D(G.TEXTURE_2D,K,0,0,R.x,R.y,Y,ve),V.unbindTexture()},this.copyTextureToTexture=function(R,z,K,Z=0){const Y=z.image.width,ve=z.image.height,Ee=ke.convert(K.format),Ce=ke.convert(K.type);y.setTexture2D(K,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment),z.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Z,R.x,R.y,Y,ve,Ee,Ce,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Z,R.x,R.y,z.mipmaps[0].width,z.mipmaps[0].height,Ee,z.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,Z,R.x,R.y,Ee,Ce,z.image),Z===0&&K.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(R,z,K,Z,Y=0){const ve=Math.round(R.max.x-R.min.x),Ee=Math.round(R.max.y-R.min.y),Ce=R.max.z-R.min.z+1,Ue=ke.convert(Z.format),ze=ke.convert(Z.type);let Ve;if(Z.isData3DTexture)y.setTexture3D(Z,0),Ve=G.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)y.setTexture2DArray(Z,0),Ve=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ge=G.getParameter(G.UNPACK_ROW_LENGTH),mt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Kt=G.getParameter(G.UNPACK_SKIP_PIXELS),Tt=G.getParameter(G.UNPACK_SKIP_ROWS),kn=G.getParameter(G.UNPACK_SKIP_IMAGES),ft=K.isCompressedTexture?K.mipmaps[Y]:K.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,ft.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ft.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,R.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,R.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,R.min.z),K.isDataTexture||K.isData3DTexture?G.texSubImage3D(Ve,Y,z.x,z.y,z.z,ve,Ee,Ce,Ue,ze,ft.data):Z.isCompressedArrayTexture?G.compressedTexSubImage3D(Ve,Y,z.x,z.y,z.z,ve,Ee,Ce,Ue,ft.data):G.texSubImage3D(Ve,Y,z.x,z.y,z.z,ve,Ee,Ce,Ue,ze,ft),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ge),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,mt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Kt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Tt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,kn),Y===0&&Z.generateMipmaps&&G.generateMipmap(Ve),V.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?y.setTextureCube(R,0):R.isData3DTexture?y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?y.setTexture2DArray(R,0):y.setTexture2D(R,0),V.unbindTexture()},this.resetState=function(){C=0,b=0,w=null,V.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Nu?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Ka?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ww extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Eg("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new L;class Bu{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pf=new L,mf=new rt,gf=new rt,jw=new L,_f=new Ie,zo=new L,Jl=new Dn,vf=new Ie,ec=new no;class kg extends Xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yd,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ii),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zo),this.boundingBox.expandByPoint(zo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zo),this.boundingSphere.expandByPoint(zo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jl.copy(this.boundingSphere),Jl.applyMatrix4(r),e.ray.intersectsSphere(Jl)!==!1&&(vf.copy(r).invert(),ec.copy(e.ray).applyMatrix4(vf),!(this.boundingBox!==null&&ec.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ec)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ZM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;mf.fromBufferAttribute(r.attributes.skinIndex,e),gf.fromBufferAttribute(r.attributes.skinWeight,e),pf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=gf.getComponent(s);if(o!==0){const a=mf.getComponent(s);_f.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(jw.copy(pf).applyMatrix4(_f),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Vg extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zg extends wt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Wt,u=Wt,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xf=new Ie,qw=new Ie;class Ja{constructor(e=[],t=[]){this.uuid=En(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:qw;xf.multiplyMatrices(a,t[s]),xf.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ja(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new zg(t,e,e,yn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Vg),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class qc extends at{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pr=new Ie,yf=new Ie,Go=[],Mf=new ii,Yw=new Ie,Es=new Xt,Ss=new Dn;class $w extends Xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Yw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),Mf.copy(e.boundingBox).applyMatrix4(Pr),this.boundingBox.union(Mf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),Ss.copy(e.boundingSphere).applyMatrix4(Pr),this.boundingSphere.union(Ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),e.ray.intersectsSphere(Ss)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Pr),yf.multiplyMatrices(n,Pr),Es.matrixWorld=yf,Es.raycast(e,Go);for(let o=0,a=Go.length;o<a;o++){const l=Go[o];l.instanceId=s,l.object=this,t.push(l)}Go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new zg(new Float32Array(r*this.count),r,this.count,pg,In));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ur extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ef=new L,Sf=new L,Tf=new Ie,tc=new no,Wo=new Dn;class el extends st{constructor(e=new It,t=new ur){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ef.fromBufferAttribute(t,r-1),Sf.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ef.distanceTo(Sf);e.setAttribute("lineDistance",new Sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),Wo.radius+=s,e.ray.intersectsSphere(Wo)===!1)return;Tf.copy(r).invert(),tc.copy(e.ray).applyMatrix4(Tf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,d=new L,h=new L,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),A=Math.min(g.count,o.start+o.count);for(let v=m,E=A-1;v<E;v+=f){const C=g.getX(v),b=g.getX(v+1);if(c.fromBufferAttribute(p,C),u.fromBufferAttribute(p,b),tc.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(h);O<e.near||O>e.far||t.push({distance:O,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),A=Math.min(p.count,o.start+o.count);for(let v=m,E=A-1;v<E;v+=f){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),tc.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const bf=new L,Af=new L;class ro extends el{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)bf.fromBufferAttribute(t,r),Af.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+bf.distanceTo(Af);e.setAttribute("lineDistance",new Sn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kw extends el{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Gg extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wf=new Ie,Yc=new no,Xo=new Dn,jo=new L;class Zw extends st{constructor(e=new It,t=new Gg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(r),Xo.radius+=s,e.ray.intersectsSphere(Xo)===!1)return;wf.copy(r).invert(),Yc.copy(e.ray).applyMatrix4(wf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,_=f;g<_;g++){const p=c.getX(g);jo.fromBufferAttribute(d,p),Rf(jo,p,l,r,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,_=f;g<_;g++)jo.fromBufferAttribute(d,g),Rf(jo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rf(i,e,t,n,r,s,o){const a=Yc.distanceSqToPoint(i);if(a<t){const l=new L;Yc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Hu extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ri extends Hu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function qo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Qw(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Jw(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Cf(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Wg(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class so{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class eR extends so{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mh:s=e,a=2*t-n;break;case Eh:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mh:o=e,l=2*n-t;break;case Eh:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),_=g*g,p=_*g,m=-h*p+2*h*_-h*g,A=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*g+1,v=(-1-f)*p+(1.5+f)*_+.5*g,E=f*p-f*_;for(let C=0;C!==a;++C)s[C]=m*o[u+C]+A*o[c+C]+v*o[l+C]+E*o[d+C];return s}}class tR extends so{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}}class nR extends so{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class On{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qo(t,this.TimeBufferType),this.values=qo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qo(e.times,Array),values:qo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eR(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xs:t=this.InterpolantFactoryMethodDiscrete;break;case rs:t=this.InterpolantFactoryMethodLinear;break;case wl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return rs;case this.InterpolantFactoryMethodSmooth:return wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Qw(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===wl,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=rs;class ps extends On{}ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Xs;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Xg extends On{}Xg.prototype.ValueTypeName="color";class as extends On{}as.prototype.ValueTypeName="number";class iR extends so{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Fe.slerpFlat(s,0,o,c-a,o,c,l);return s}}class sr extends On{InterpolantFactoryMethodLinear(e){return new iR(this.times,this.values,this.getValueSize(),e)}}sr.prototype.ValueTypeName="quaternion";sr.prototype.DefaultInterpolation=rs;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class ms extends On{}ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Xs;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends On{}ls.prototype.ValueTypeName="vector";class rR{constructor(e="",t=-1,n=[],r=aE){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=En(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(oR(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(On.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Jw(l);l=Cf(l,1,u),c=Cf(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new as(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=r[d];h||(r[d]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,g,_){if(f.length!==0){const p=[],m=[];Wg(f,p,m,g),p.length!==0&&_.push(new d(h,p,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)f[h[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let A=0;A!==h[g].morphTargets.length;++A){const v=h[g];p.push(v.time),m.push(v.morphTarget===_?1:0)}r.push(new as(".morphTargetInfluence["+_+"]",p,m))}l=f.length*o}else{const f=".bones["+t[d].name+"]";n(ls,f+".position",h,"pos",r),n(sr,f+".quaternion",h,"rot",r),n(ls,f+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sR(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return as;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return Xg;case"quaternion":return sr;case"bool":case"boolean":return ps;case"string":return ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function oR(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=sR(i.type);if(i.times===void 0){const t=[],n=[];Wg(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class aR{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const lR=new aR;class gs{constructor(e){this.manager=e!==void 0?e:lR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gs.DEFAULT_MATERIAL_NAME="__DEFAULT";const jn={};class cR extends Error{constructor(e,t){super(e),this.response=t}}class jg extends gs{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=bi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(jn[e]!==void 0){jn[e].push({onLoad:t,onProgress:n,onError:r});return}jn[e]=[],jn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=jn[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=h?parseInt(h):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){A();function A(){d.read().then(({done:v,value:E})=>{if(v)m.close();else{_+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let b=0,w=u.length;b<w;b++){const O=u[b];O.onProgress&&O.onProgress(C)}m.enqueue(E),A()}})}}});return new Response(p)}else throw new cR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{bi.add(e,c);const u=jn[e];delete jn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=jn[e];if(u===void 0)throw this.manager.itemError(e),c;delete jn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qg extends gs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=bi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=js("img");function l(){u(),bi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class uR extends gs{constructor(e){super(e)}load(e,t,n,r){const s=new wt,o=new qg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class ku extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const nc=new Ie,Pf=new L,Lf=new L;class Vu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Du,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pf),Lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lf),t.updateMatrixWorld(),nc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dR extends Vu{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ss*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hR extends ku{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new dR}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const If=new Ie,Ts=new L,ic=new L;class fR extends Vu{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ts),ic.copy(n.position),ic.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ic),n.updateMatrixWorld(),r.makeTranslation(-Ts.x,-Ts.y,-Ts.z),If.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(If)}}class pR extends ku{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new fR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mR extends Vu{constructor(){super(new Ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yg extends ku{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new mR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hs{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class gR extends gs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=bi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return bi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),bi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});bi.add(e,l),s.manager.itemStart(e)}}const zu="\\[\\]\\.:\\/",_R=new RegExp("["+zu+"]","g"),Gu="[^"+zu+"]",vR="[^"+zu.replace("\\.","")+"]",xR=/((?:WC+[\/:])*)/.source.replace("WC",Gu),yR=/(WCOD+)?/.source.replace("WCOD",vR),MR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gu),ER=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gu),SR=new RegExp("^"+xR+yR+MR+ER+"$"),TR=["material","materials","bones","map"];class bR{constructor(e,t,n){const r=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_R,"")}static parseTrackName(e){const t=SR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);TR.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=bR;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Nf{constructor(e,t,n,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class Uf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class AR extends ro{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new It;r.setAttribute("position",new Sn(t,3)),r.setAttribute("color",new Sn(n,3));const s=new ur({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new Se,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vn}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vn);function Df(i,e){if(e===lE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Wc||e===xg){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Wc)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class wR extends gs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new IR(t)}),this.register(function(t){return new VR(t)}),this.register(function(t){return new zR(t)}),this.register(function(t){return new GR(t)}),this.register(function(t){return new UR(t)}),this.register(function(t){return new DR(t)}),this.register(function(t){return new OR(t)}),this.register(function(t){return new FR(t)}),this.register(function(t){return new LR(t)}),this.register(function(t){return new BR(t)}),this.register(function(t){return new NR(t)}),this.register(function(t){return new kR(t)}),this.register(function(t){return new HR(t)}),this.register(function(t){return new CR(t)}),this.register(function(t){return new WR(t)}),this.register(function(t){return new XR(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Hs.extractUrlBase(e);o=Hs.resolveURL(c,this.path)}else o=Hs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new jg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===$g){try{o[Ke.KHR_BINARY_GLTF]=new jR(e)}catch(d){r&&r(d);return}s=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new sC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case Ke.KHR_MATERIALS_UNLIT:o[d]=new PR;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[d]=new qR(s,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[d]=new YR;break;case Ke.KHR_MESH_QUANTIZATION:o[d]=new $R;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function RR(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class CR{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Se(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Lt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Yg(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new pR(u),c.distance=d;break;case"spot":c=new hR(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class PR{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Qn}extendParams(e,t,n){const r=[];e.color=new Se(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Lt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,zt))}return Promise.all(r)}}class LR{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class IR{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(a,a)}return Promise.all(s)}}class NR{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class UR{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Lt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,zt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class DR{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class OR{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(a[0],a[1],a[2],Lt),Promise.all(s)}}class FR{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class BR{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(a[0],a[1],a[2],Lt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,zt)),Promise.all(s)}}class HR{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class kR{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class VR{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class zR{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class GR{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class WR{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(f),u,d,h,r.mode,r.filter),f})})}else return null}}class XR{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==ln.TRIANGLES&&c.mode!==ln.TRIANGLE_STRIP&&c.mode!==ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const g of d){const _=new Ie,p=new L,m=new Fe,A=new L(1,1,1),v=new $w(g.geometry,g.material,h);for(let E=0;E<h;E++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,E),l.SCALE&&A.fromBufferAttribute(l.SCALE,E),v.setMatrixAt(E,_.compose(p,m,A));for(const E in l)if(E==="_COLOR_0"){const C=l[E];v.instanceColor=new qc(C.array,C.itemSize,C.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);st.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const $g="glTF",bs=12,Of={JSON:1313821514,BIN:5130562};class jR{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,bs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$g)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-bs,s=new DataView(e,bs);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Of.JSON){const c=new Uint8Array(e,bs+o,a);this.content=n.decode(c)}else if(l===Of.BIN){const c=bs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class qR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=$c[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=$c[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],f=$r[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){r.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}d(f)},a,c,Lt,h)})})}}class YR{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class $R{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class Kg extends so{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,d=(n-t)/u,h=d*d,f=h*d,g=e*c,_=g-c,p=-2*f+3*h,m=f-h,A=1-p,v=m-h+d;for(let E=0;E!==a;E++){const C=o[_+E+a],b=o[_+E+l]*u,w=o[g+E+a],O=o[g+E]*u;s[E]=A*C+v*b+p*w+m*O}return s}}const KR=new Fe;class ZR extends Kg{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return KR.fromArray(s).normalize().toArray(s),s}}const ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ff={9728:Wt,9729:Jt,9984:cg,9985:oa,9986:Ls,9987:Kn},Bf={33071:Ti,33648:Aa,10497:ns},rc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$c={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},QR={CUBICSPLINE:void 0,LINEAR:rs,STEP:Xs},sc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function JR(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Hu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ei})),i.DefaultMaterial}function zi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Mi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function eC(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;o.push(h)}if(r){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=d),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function tC(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function nC(i){let e;const t=i.extensions&&i.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oc(t.attributes):e=i.indices+":"+oc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+oc(i.targets[n]);return e}function oc(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Kc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function iC(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const rC=new Ie;class sC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new RR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new uR(this.options.manager):this.textureLoader=new gR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return zi(s,a,r),Mi(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Hs.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=rc[r.type],a=$r[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new at(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=rc[r.type],c=$r[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=r.byteOffset||0,f=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,p;if(f&&f!==d){const m=Math.floor(h/f),A="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let v=t.cache.get(A);v||(_=new c(a,m*f,r.count*f/u),v=new Xw(_,f/u),t.cache.add(A,v)),p=new Bu(v,l,h%f/u,g)}else a===null?_=new c(r.count*l):_=new c(a,h,r.count*l),p=new at(_,l,g);if(r.sparse!==void 0){const m=rc.SCALAR,A=$r[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,E=r.sparse.values.byteOffset||0,C=new A(o[1],v,r.sparse.count*m),b=new c(o[2],E,r.sparse.count*l);a!==null&&(p=new at(p.array.slice(),p.itemSize,p.normalized));for(let w=0,O=C.length;w<O;w++){const T=C[w];if(p.setX(T,b[w*l]),l>=2&&p.setY(T,b[w*l+1]),l>=3&&p.setZ(T,b[w*l+2]),l>=4&&p.setW(T,b[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Ff[h.magFilter]||Jt,u.minFilter=Ff[h.minFilter]||Kn,u.wrapS=Bf[h.wrapS]||ns,u.wrapT=Bf[h.wrapT]||ns,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const p=new wt(_);p.needsUpdate=!0,h(p)}),t.load(Hs.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||iC(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Gg,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ur,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Hu}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const d=r[Ke.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Lt),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,zt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=un);const u=s.alphaMode||sc.OPAQUE;if(u===sc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===sc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Qn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Te(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==Qn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Qn){const d=s.emissiveFactor;a.emissive=new Se().setRGB(d[0],d[1],d[2],Lt)}return s.emissiveTexture!==void 0&&o!==Qn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,zt)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),Mi(d,s),t.associations.set(d,{materials:e}),s.extensions&&zi(r,d,s),d})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Hf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=nC(c),d=r[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Hf(new It,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?JR(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],p=o[f];let m;const A=c[f];if(p.mode===ln.TRIANGLES||p.mode===ln.TRIANGLE_STRIP||p.mode===ln.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new kg(_,A):new Xt(_,A),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===ln.TRIANGLE_STRIP?m.geometry=Df(m.geometry,xg):p.mode===ln.TRIANGLE_FAN&&(m.geometry=Df(m.geometry,Wc));else if(p.mode===ln.LINES)m=new ro(_,A);else if(p.mode===ln.LINE_STRIP)m=new el(_,A);else if(p.mode===ln.LINE_LOOP)m=new Kw(_,A);else if(p.mode===ln.POINTS)m=new Zw(_,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&tC(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Mi(m,s),p.extensions&&zi(r,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&zi(r,d[0],s),d[0];const h=new tn;s.extensions&&zi(r,h,s),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(gt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Ou(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Mi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new Ie;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ja(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=r.channels.length;d<h;d++){const f=r.channels[d],g=r.samplers[f.sampler],_=f.target,p=_.node,m=r.parameters!==void 0?r.parameters[g.input]:g.input,A=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",A)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],g=d[2],_=d[3],p=d[4],m=[];for(let A=0,v=h.length;A<v;A++){const E=h[A],C=f[A],b=g[A],w=_[A],O=p[A];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const T=n._createAnimationTracks(E,C,b,w,O);if(T)for(let M=0;M<T.length;M++)m.push(T[M])}return new rR(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,rC)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Vg:c.length>1?u=new tn:c.length===1?u=c[0]:u=new st,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),Mi(u,s),s.extensions&&zi(n,u,s),s.matrix!==void 0){const d=new Ie;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new tn;n.name&&(s.name=r.createUniqueName(n.name)),Mi(s,n),n.extensions&&zi(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)s.add(l[u]);const c=u=>{const d=new Map;for(const[h,f]of r.associations)(h instanceof Nn||h instanceof wt)&&d.set(h,f);return u.traverse(h=>{const f=r.associations.get(h);f!=null&&d.set(h,f)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];mi[s.path]===mi.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(mi[s.path]){case mi.weights:c=as;break;case mi.rotation:c=sr;break;case mi.position:case mi.scale:c=ls;break;default:switch(n.itemSize){case 1:c=as;break;case 2:case 3:default:c=ls;break}break}const u=r.interpolation!==void 0?QR[r.interpolation]:rs,d=this._getArrayFromAccessor(n);for(let h=0,f=l.length;h<f;h++){const g=new c(l[h]+"."+mi[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Kc(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof sr?ZR:Kg;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function oC(i,e,t){const n=e.attributes,r=new ii;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const u=Kc($r[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new L,l=new L;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const _=Kc($r[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Dn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Hf(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=$c[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return tt.workingColorSpace!==Lt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Mi(i,e),oC(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?eC(i,e.targets,t):i})}const kf={type:"change"},ac={type:"start"},Vf={type:"end"},Yo=new no,zf=new yi,aC=Math.cos(70*gt.DEG2RAD);class lC extends cr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:dr.ROTATE,MIDDLE:dr.DOLLY,RIGHT:dr.PAN},this.touches={ONE:hr.ROTATE,TWO:hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",ae),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ae),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(kf),n.update(),s=r.NONE},this.update=function(){const x=new L,j=new Fe().setFromUnitVectors(e.up,new L(0,1,0)),re=j.clone().invert(),de=new L,Me=new Fe,Ye=new L,qe=2*Math.PI;return function(vt=null){const Qe=n.object.position;x.copy(Qe).sub(n.target),x.applyQuaternion(j),a.setFromVector3(x),n.autoRotate&&s===r.NONE&&X(M(vt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ht=n.minAzimuthAngle,pt=n.maxAzimuthAngle;isFinite(ht)&&isFinite(pt)&&(ht<-Math.PI?ht+=qe:ht>Math.PI&&(ht-=qe),pt<-Math.PI?pt+=qe:pt>Math.PI&&(pt-=qe),ht<=pt?a.theta=Math.max(ht,Math.min(pt,a.theta)):a.theta=a.theta>(ht+pt)/2?Math.max(ht,a.theta):Math.min(pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Bt=!1;if(n.zoomToCursor&&b||n.object.isOrthographicCamera)a.radius=le(a.radius);else{const $t=a.radius;a.radius=le(a.radius*c),Bt=$t!=a.radius}if(x.setFromSpherical(a),x.applyQuaternion(re),Qe.copy(n.target).add(x),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&b){let $t=null;if(n.object.isPerspectiveCamera){const Tn=x.length();$t=le(Tn*c);const Fn=Tn-$t;n.object.position.addScaledVector(E,Fn),n.object.updateMatrixWorld(),Bt=!!Fn}else if(n.object.isOrthographicCamera){const Tn=new L(C.x,C.y,0);Tn.unproject(n.object);const Fn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Bt=Fn!==n.object.zoom;const Bn=new L(C.x,C.y,0);Bn.unproject(n.object),n.object.position.sub(Bn).add(Tn),n.object.updateMatrixWorld(),$t=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;$t!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar($t).add(n.object.position):(Yo.origin.copy(n.object.position),Yo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Yo.direction))<aC?e.lookAt(n.target):(zf.setFromNormalAndCoplanarPoint(n.object.up,n.target),Yo.intersectPlane(zf,n.target))))}else if(n.object.isOrthographicCamera){const $t=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),$t!==n.object.zoom&&(n.object.updateProjectionMatrix(),Bt=!0)}return c=1,b=!1,Bt||de.distanceToSquared(n.object.position)>o||8*(1-Me.dot(n.object.quaternion))>o||Ye.distanceToSquared(n.target)>o?(n.dispatchEvent(kf),de.copy(n.object.position),Me.copy(n.object.quaternion),Ye.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ge),n.domElement.removeEventListener("pointerdown",I),n.domElement.removeEventListener("pointercancel",k),n.domElement.removeEventListener("wheel",q),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",k),n.domElement.getRootNode().removeEventListener("keydown",ce,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ae),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Uf,l=new Uf;let c=1;const u=new L,d=new Te,h=new Te,f=new Te,g=new Te,_=new Te,p=new Te,m=new Te,A=new Te,v=new Te,E=new L,C=new Te;let b=!1;const w=[],O={};let T=!1;function M(x){return x!==null?2*Math.PI/60*n.autoRotateSpeed*x:2*Math.PI/60/60*n.autoRotateSpeed}function B(x){const j=Math.abs(x*.01);return Math.pow(.95,n.zoomSpeed*j)}function X(x){l.theta-=x}function N(x){l.phi-=x}const $=function(){const x=new L;return function(re,de){x.setFromMatrixColumn(de,0),x.multiplyScalar(-re),u.add(x)}}(),J=function(){const x=new L;return function(re,de){n.screenSpacePanning===!0?x.setFromMatrixColumn(de,1):(x.setFromMatrixColumn(de,0),x.crossVectors(n.object.up,x)),x.multiplyScalar(re),u.add(x)}}(),W=function(){const x=new L;return function(re,de){const Me=n.domElement;if(n.object.isPerspectiveCamera){const Ye=n.object.position;x.copy(Ye).sub(n.target);let qe=x.length();qe*=Math.tan(n.object.fov/2*Math.PI/180),$(2*re*qe/Me.clientHeight,n.object.matrix),J(2*de*qe/Me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(re*(n.object.right-n.object.left)/n.object.zoom/Me.clientWidth,n.object.matrix),J(de*(n.object.top-n.object.bottom)/n.object.zoom/Me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function te(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function oe(x,j){if(!n.zoomToCursor)return;b=!0;const re=n.domElement.getBoundingClientRect(),de=x-re.left,Me=j-re.top,Ye=re.width,qe=re.height;C.x=de/Ye*2-1,C.y=-(Me/qe)*2+1,E.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function le(x){return Math.max(n.minDistance,Math.min(n.maxDistance,x))}function ye(x){d.set(x.clientX,x.clientY)}function be(x){oe(x.clientX,x.clientX),m.set(x.clientX,x.clientY)}function $e(x){g.set(x.clientX,x.clientY)}function ee(x){h.set(x.clientX,x.clientY),f.subVectors(h,d).multiplyScalar(n.rotateSpeed);const j=n.domElement;X(2*Math.PI*f.x/j.clientHeight),N(2*Math.PI*f.y/j.clientHeight),d.copy(h),n.update()}function ue(x){A.set(x.clientX,x.clientY),v.subVectors(A,m),v.y>0?te(B(v.y)):v.y<0&&H(B(v.y)),m.copy(A),n.update()}function me(x){_.set(x.clientX,x.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),W(p.x,p.y),g.copy(_),n.update()}function pe(x){oe(x.clientX,x.clientY),x.deltaY<0?H(B(x.deltaY)):x.deltaY>0&&te(B(x.deltaY)),n.update()}function Ae(x){let j=!1;switch(x.code){case n.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),j=!0;break}j&&(x.preventDefault(),n.update())}function Re(x){if(w.length===1)d.set(x.pageX,x.pageY);else{const j=Le(x),re=.5*(x.pageX+j.x),de=.5*(x.pageY+j.y);d.set(re,de)}}function Pe(x){if(w.length===1)g.set(x.pageX,x.pageY);else{const j=Le(x),re=.5*(x.pageX+j.x),de=.5*(x.pageY+j.y);g.set(re,de)}}function G(x){const j=Le(x),re=x.pageX-j.x,de=x.pageY-j.y,Me=Math.sqrt(re*re+de*de);m.set(0,Me)}function Be(x){n.enableZoom&&G(x),n.enablePan&&Pe(x)}function P(x){n.enableZoom&&G(x),n.enableRotate&&Re(x)}function U(x){if(w.length==1)h.set(x.pageX,x.pageY);else{const re=Le(x),de=.5*(x.pageX+re.x),Me=.5*(x.pageY+re.y);h.set(de,Me)}f.subVectors(h,d).multiplyScalar(n.rotateSpeed);const j=n.domElement;X(2*Math.PI*f.x/j.clientHeight),N(2*Math.PI*f.y/j.clientHeight),d.copy(h)}function V(x){if(w.length===1)_.set(x.pageX,x.pageY);else{const j=Le(x),re=.5*(x.pageX+j.x),de=.5*(x.pageY+j.y);_.set(re,de)}p.subVectors(_,g).multiplyScalar(n.panSpeed),W(p.x,p.y),g.copy(_)}function Q(x){const j=Le(x),re=x.pageX-j.x,de=x.pageY-j.y,Me=Math.sqrt(re*re+de*de);A.set(0,Me),v.set(0,Math.pow(A.y/m.y,n.zoomSpeed)),te(v.y),m.copy(A);const Ye=(x.pageX+j.x)*.5,qe=(x.pageY+j.y)*.5;oe(Ye,qe)}function S(x){n.enableZoom&&Q(x),n.enablePan&&V(x)}function y(x){n.enableZoom&&Q(x),n.enableRotate&&U(x)}function I(x){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(x.pointerId),n.domElement.addEventListener("pointermove",D),n.domElement.addEventListener("pointerup",k)),!ke(x)&&(Ne(x),x.pointerType==="touch"?_e(x):F(x)))}function D(x){n.enabled!==!1&&(x.pointerType==="touch"?he(x):ne(x))}function k(x){switch(He(x),w.length){case 0:n.domElement.releasePointerCapture(x.pointerId),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",k),n.dispatchEvent(Vf),s=r.NONE;break;case 1:const j=w[0],re=O[j];_e({pointerId:j,pageX:re.x,pageY:re.y});break}}function F(x){let j;switch(x.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case dr.DOLLY:if(n.enableZoom===!1)return;be(x),s=r.DOLLY;break;case dr.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enablePan===!1)return;$e(x),s=r.PAN}else{if(n.enableRotate===!1)return;ye(x),s=r.ROTATE}break;case dr.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enableRotate===!1)return;ye(x),s=r.ROTATE}else{if(n.enablePan===!1)return;$e(x),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ac)}function ne(x){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ee(x);break;case r.DOLLY:if(n.enableZoom===!1)return;ue(x);break;case r.PAN:if(n.enablePan===!1)return;me(x);break}}function q(x){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(x.preventDefault(),n.dispatchEvent(ac),pe(se(x)),n.dispatchEvent(Vf))}function se(x){const j=x.deltaMode,re={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(j){case 1:re.deltaY*=16;break;case 2:re.deltaY*=100;break}return x.ctrlKey&&!T&&(re.deltaY*=10),re}function ce(x){x.key==="Control"&&(T=!0,n.domElement.getRootNode().addEventListener("keyup",ie,{passive:!0,capture:!0}))}function ie(x){x.key==="Control"&&(T=!1,n.domElement.getRootNode().removeEventListener("keyup",ie,{passive:!0,capture:!0}))}function ae(x){n.enabled===!1||n.enablePan===!1||Ae(x)}function _e(x){switch(je(x),w.length){case 1:switch(n.touches.ONE){case hr.ROTATE:if(n.enableRotate===!1)return;Re(x),s=r.TOUCH_ROTATE;break;case hr.PAN:if(n.enablePan===!1)return;Pe(x),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case hr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(x),s=r.TOUCH_DOLLY_PAN;break;case hr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;P(x),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ac)}function he(x){switch(je(x),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;U(x),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;V(x),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;S(x),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;y(x),n.update();break;default:s=r.NONE}}function ge(x){n.enabled!==!1&&x.preventDefault()}function Ne(x){w.push(x.pointerId)}function He(x){delete O[x.pointerId];for(let j=0;j<w.length;j++)if(w[j]==x.pointerId){w.splice(j,1);return}}function ke(x){for(let j=0;j<w.length;j++)if(w[j]==x.pointerId)return!0;return!1}function je(x){let j=O[x.pointerId];j===void 0&&(j=new Te,O[x.pointerId]=j),j.set(x.pageX,x.pageY)}function Le(x){const j=x.pointerId===w[0]?w[1]:w[0];return O[j]}n.domElement.addEventListener("contextmenu",ge),n.domElement.addEventListener("pointerdown",I),n.domElement.addEventListener("pointercancel",k),n.domElement.addEventListener("wheel",q,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}/*!
 * @pixiv/three-vrm v2.1.1
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-core v2.1.1
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2020-2024 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */class Gf extends st{get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.weight?1:0:this.overrideBlink==="blend"?this.weight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.weight?1:0:this.overrideLookAt==="blend"?this.weight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.weight?1:0:this.overrideMouth==="blend"?this.weight:0}constructor(e){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${e}`,this.expressionName=e,this.type="VRMExpression",this.visible=!1}addBind(e){this._binds.push(e)}applyWeight(e){var t;let n=this.isBinary?this.weight<=.5?0:1:this.weight;n*=(t=e==null?void 0:e.multiplier)!==null&&t!==void 0?t:1,this._binds.forEach(r=>r.applyWeight(n))}clearAppliedWeight(){this._binds.forEach(e=>e.clearAppliedWeight())}}function Je(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(n.next(u))}catch(d){o(d)}}function l(u){try{c(n.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((n=n.apply(i,e||[])).next())})}function Zg(i,e,t){var n,r;const s=i.parser.json,o=(n=s.nodes)===null||n===void 0?void 0:n[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;const a=o.mesh;if(a==null)return null;const l=(r=s.meshes)===null||r===void 0?void 0:r[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;const c=l.primitives.length,u=[];return t.traverse(d=>{u.length<c&&d.isMesh&&u.push(d)}),u}function Wf(i,e){return Je(this,void 0,void 0,function*(){const t=yield i.parser.getDependency("node",e);return Zg(i,e,t)})}function Xf(i){return Je(this,void 0,void 0,function*(){const e=yield i.parser.getDependencies("node"),t=new Map;return e.forEach((n,r)=>{const s=Zg(i,r,n);s!=null&&t.set(r,s)}),t})}function jf(i,e){var t,n;const r=parseInt(vn,10);let s=null;if(r>=133)s=(n=(t=i.associations.get(e))===null||t===void 0?void 0:t.materials)!==null&&n!==void 0?n:null;else{const a=i.associations.get(e);(a==null?void 0:a.type)==="materials"&&(s=a.index)}return s}const Zc={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function Qg(i){return Math.max(Math.min(i,1),0)}class Ia{get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const e={},t=new Set(Object.values(Zc));return Object.entries(this._expressionMap).forEach(([n,r])=>{t.has(n)&&(e[n]=r)}),e}get customExpressionMap(){const e={},t=new Set(Object.values(Zc));return Object.entries(this._expressionMap).forEach(([n,r])=>{t.has(n)||(e[n]=r)}),e}constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}copy(e){return this._expressions.concat().forEach(n=>{this.unregisterExpression(n)}),e._expressions.forEach(n=>{this.registerExpression(n)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new Ia().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!==null&&t!==void 0?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){const t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;const n=this.getExpression(e);return(t=n==null?void 0:n.weight)!==null&&t!==void 0?t:null}setValue(e,t){const n=this.getExpression(e);n&&(n.weight=Qg(t))}getExpressionTrackName(e){const t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){const e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1;const r=t.expressionName;this.blinkExpressionNames.indexOf(r)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(r)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(r)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(r=>{e-=r.overrideBlinkAmount,t-=r.overrideLookAtAmount,n-=r.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}}const As={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",MatcapColor:"matcapColor",RimColor:"rimColor",OutlineColor:"outlineColor"},cC={_Color:As.Color,_EmissionColor:As.EmissionColor,_ShadeColor:As.ShadeColor,_RimColor:As.RimColor,_OutlineColor:As.OutlineColor},uC=new Se;class qs{constructor({material:e,type:t,targetValue:n,targetAlpha:r}){this.material=e,this.type=t,this.targetValue=n,this.targetAlpha=r??1;const s=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:s,alpha:o}}applyWeight(e){const{color:t,alpha:n}=this._state;if(t!=null){const{propertyName:r,deltaValue:s}=t,o=this.material[r];o!=null&&o.add(uC.copy(s).multiplyScalar(e))}if(n!=null){const{propertyName:r,deltaValue:s}=n;this.material[r]!=null&&(this.material[r]+=s*e)}}clearAppliedWeight(){const{color:e,alpha:t}=this._state;if(e!=null){const{propertyName:n,initialValue:r}=e,s=this.material[n];s!=null&&s.copy(r)}if(t!=null){const{propertyName:n,initialValue:r}=t;this.material[n]!=null&&(this.material[n]=r)}}_initColorBindState(){var e,t,n;const{material:r,type:s,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[s])===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(n=r.name)!==null&&n!==void 0?n:"(no name)"}, the type ${s} but the material or the type is not supported.`),null;const u=r[l].clone(),d=new Se(o.r-u.r,o.g-u.g,o.b-u.b);return{propertyName:l,initialValue:u,deltaValue:d}}_initAlphaBindState(){var e,t,n;const{material:r,type:s,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[s])===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(n=r.name)!==null&&n!==void 0?n:"(no name)"}, the type ${s} but the material or the type does not support alpha.`),null;if(l==null)return null;const c=r[l],u=o-c;return{propertyName:l,initialValue:c,deltaValue:u}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(qs._propertyNameMapMap).find(([n])=>this.material[n]===!0))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null}}qs._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};class qf{constructor({primitives:e,index:t,weight:n}){this.primitives=e,this.index=t,this.weight=n}applyWeight(e){this.primitives.forEach(t=>{var n;((n=t.morphTargetInfluences)===null||n===void 0?void 0:n[this.index])!=null&&(t.morphTargetInfluences[this.index]+=this.weight*e)})}clearAppliedWeight(){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)===null||t===void 0?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]=0)})}}const Yf=new Te;class Ys{constructor({material:e,scale:t,offset:n}){var r,s;this.material=e,this.scale=t,this.offset=n;const o=(r=Object.entries(Ys._propertyNamesMap).find(([a])=>e[a]===!0))===null||r===void 0?void 0:r[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(s=e.name)!==null&&s!==void 0?s:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;const c=(l=e[a])===null||l===void 0?void 0:l.clone();if(!c)return null;e[a]=c;const u=c.offset.clone(),d=c.repeat.clone(),h=n.clone().sub(u),f=t.clone().sub(d);this._properties.push({name:a,initialOffset:u,deltaOffset:h,initialScale:d,deltaScale:f})}))}applyWeight(e){this._properties.forEach(t=>{const n=this.material[t.name];n!==void 0&&(n.offset.add(Yf.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add(Yf.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{const t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}}Ys._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};const dC=new Set(["1.0","1.0-beta"]);class tl{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return Je(this,void 0,void 0,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return Je(this,void 0,void 0,function*(){const t=yield this._v1Import(e);if(t)return t;const n=yield this._v0Import(e);return n||null})}_v1Import(e){var t,n;return Je(this,void 0,void 0,function*(){const r=this.parser.json;if(!(((t=r.extensionsUsed)===null||t===void 0?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(n=r.extensions)===null||n===void 0?void 0:n.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!dC.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.expressions;if(!l)return null;const c=new Set(Object.values(Zc)),u=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([h,f])=>{if(f!=null){if(!c.has(h)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${h}" detected. Ignoring the expression`);return}u.set(h,f)}}),l.custom!=null&&Object.entries(l.custom).forEach(([h,f])=>{if(c.has(h)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${h}". Ignoring the expression`);return}u.set(h,f)});const d=new Ia;return yield Promise.all(Array.from(u.entries()).map(([h,f])=>Je(this,void 0,void 0,function*(){var g,_,p,m,A,v,E;const C=new Gf(h);if(e.scene.add(C),C.isBinary=(g=f.isBinary)!==null&&g!==void 0?g:!1,C.overrideBlink=(_=f.overrideBlink)!==null&&_!==void 0?_:"none",C.overrideLookAt=(p=f.overrideLookAt)!==null&&p!==void 0?p:"none",C.overrideMouth=(m=f.overrideMouth)!==null&&m!==void 0?m:"none",(A=f.morphTargetBinds)===null||A===void 0||A.forEach(b=>Je(this,void 0,void 0,function*(){var w;if(b.node===void 0||b.index===void 0)return;const O=yield Wf(e,b.node),T=b.index;if(!O.every(M=>Array.isArray(M.morphTargetInfluences)&&T<M.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${f.name} attempts to index morph #${T} but not found.`);return}C.addBind(new qf({primitives:O,index:T,weight:(w=b.weight)!==null&&w!==void 0?w:1}))})),f.materialColorBinds||f.textureTransformBinds){const b=[];e.scene.traverse(w=>{const O=w.material;O&&b.push(O)}),(v=f.materialColorBinds)===null||v===void 0||v.forEach(w=>Je(this,void 0,void 0,function*(){b.filter(T=>{const M=jf(this.parser,T);return w.material===M}).forEach(T=>{C.addBind(new qs({material:T,type:w.type,targetValue:new Se().fromArray(w.targetValue),targetAlpha:w.targetValue[3]}))})})),(E=f.textureTransformBinds)===null||E===void 0||E.forEach(w=>Je(this,void 0,void 0,function*(){b.filter(T=>{const M=jf(this.parser,T);return w.material===M}).forEach(T=>{var M,B;C.addBind(new Ys({material:T,offset:new Te().fromArray((M=w.offset)!==null&&M!==void 0?M:[0,0]),scale:new Te().fromArray((B=w.scale)!==null&&B!==void 0?B:[1,1])}))})}))}d.registerExpression(C)}))),d})}_v0Import(e){var t;return Je(this,void 0,void 0,function*(){const n=this.parser.json,r=(t=n.extensions)===null||t===void 0?void 0:t.VRM;if(!r)return null;const s=r.blendShapeMaster;if(!s)return null;const o=new Ia,a=s.blendShapeGroups;if(!a)return o;const l=new Set;return yield Promise.all(a.map(c=>Je(this,void 0,void 0,function*(){var u;const d=c.presetName,h=d!=null&&tl.v0v1PresetNameMap[d]||null,f=h??c.name;if(f==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${d} has duplicated entries. Ignoring the expression`);return}l.add(f);const g=new Gf(f);e.scene.add(g),g.isBinary=(u=c.isBinary)!==null&&u!==void 0?u:!1,c.binds&&c.binds.forEach(p=>Je(this,void 0,void 0,function*(){var m;if(p.mesh===void 0||p.index===void 0)return;const A=[];(m=n.nodes)===null||m===void 0||m.forEach((E,C)=>{E.mesh===p.mesh&&A.push(C)});const v=p.index;yield Promise.all(A.map(E=>Je(this,void 0,void 0,function*(){var C;const b=yield Wf(e,E);if(!b.every(w=>Array.isArray(w.morphTargetInfluences)&&v<w.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${v}th morph but not found.`);return}g.addBind(new qf({primitives:b,index:v,weight:.01*((C=p.weight)!==null&&C!==void 0?C:100)}))})))}));const _=c.materialValues;_&&_.length!==0&&_.forEach(p=>{if(p.materialName===void 0||p.propertyName===void 0||p.targetValue===void 0)return;const m=[];e.scene.traverse(v=>{if(v.material){const E=v.material;Array.isArray(E)?m.push(...E.filter(C=>(C.name===p.materialName||C.name===p.materialName+" (Outline)")&&m.indexOf(C)===-1)):E.name===p.materialName&&m.indexOf(E)===-1&&m.push(E)}});const A=p.propertyName;m.forEach(v=>{if(A==="_MainTex_ST"){const C=new Te(p.targetValue[0],p.targetValue[1]),b=new Te(p.targetValue[2],p.targetValue[3]);b.y=1-b.y-C.y,g.addBind(new Ys({material:v,scale:C,offset:b}));return}const E=cC[A];if(E){g.addBind(new qs({material:v,type:E,targetValue:new Se().fromArray(p.targetValue),targetAlpha:p.targetValue[3]}));return}console.warn(A+" is not supported")})}),o.registerExpression(g)}))),o})}}tl.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};class Ln{constructor(e,t){this._firstPersonOnlyLayer=Ln.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Ln.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new Ln(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=Ln.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=Ln.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(n=>{n.meshes.forEach(r=>{n.type==="firstPersonOnly"?(r.layers.set(this._firstPersonOnlyLayer),r.traverse(s=>s.layers.set(this._firstPersonOnlyLayer))):n.type==="thirdPersonOnly"?(r.layers.set(this._thirdPersonOnlyLayer),r.traverse(s=>s.layers.set(this._thirdPersonOnlyLayer))):n.type==="auto"&&this._createHeadlessModel(r)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,n,r){let s=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){const a=e[o],l=e[o+1],c=e[o+2],u=t[a],d=n[a];if(u[0]>0&&r.includes(d[0])||u[1]>0&&r.includes(d[1])||u[2]>0&&r.includes(d[2])||u[3]>0&&r.includes(d[3]))continue;const h=t[l],f=n[l];if(h[0]>0&&r.includes(f[0])||h[1]>0&&r.includes(f[1])||h[2]>0&&r.includes(f[2])||h[3]>0&&r.includes(f[3]))continue;const g=t[c],_=n[c];g[0]>0&&r.includes(_[0])||g[1]>0&&r.includes(_[1])||g[2]>0&&r.includes(_[2])||g[3]>0&&r.includes(_[3])||(e[s++]=a,e[s++]=l,e[s++]=c)}return s}_createErasedMesh(e,t){const n=new kg(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);const r=n.geometry,s=r.getAttribute("skinIndex"),o=s instanceof Nf?[]:s.array,a=[];for(let _=0;_<o.length;_+=4)a.push([o[_],o[_+1],o[_+2],o[_+3]]);const l=r.getAttribute("skinWeight"),c=l instanceof Nf?[]:l.array,u=[];for(let _=0;_<c.length;_+=4)u.push([c[_],c[_+1],c[_+2],c[_+3]]);const d=r.getIndex();if(!d)throw new Error("The geometry doesn't have an index buffer");const h=Array.from(d.array),f=this._excludeTriangles(h,u,a,t),g=[];for(let _=0;_<f;_++)g[_]=h[_];return r.setIndex(g),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new Ja(e.skeleton.bones,e.skeleton.boneInverses),new Ie),n}_createHeadlessModelForSkinnedMesh(e,t){const n=[];if(t.skeleton.bones.forEach((s,o)=>{this._isEraseTarget(s)&&n.push(o)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);const r=this._createErasedMesh(t,n);e.add(r)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{const t=new tn;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(n=>n.type==="SkinnedMesh").forEach(n=>{const r=n;this._createHeadlessModelForSkinnedMesh(t,r)})}else if(e.type==="SkinnedMesh"){const t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}}Ln.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;Ln.DEFAULT_THIRDPERSON_ONLY_LAYER=10;const hC=new Set(["1.0","1.0-beta"]);class fC{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return Je(this,void 0,void 0,function*(){const t=e.userData.vrmHumanoid;if(t!==null){if(t===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");e.userData.vrmFirstPerson=yield this._import(e,t)}})}_import(e,t){return Je(this,void 0,void 0,function*(){if(t==null)return null;const n=yield this._v1Import(e,t);if(n)return n;const r=yield this._v0Import(e,t);return r||null})}_v1Import(e,t){var n,r;return Je(this,void 0,void 0,function*(){const s=this.parser.json;if(!(((n=s.extensionsUsed)===null||n===void 0?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;const a=(r=s.extensions)===null||r===void 0?void 0:r.VRMC_vrm;if(!a)return null;const l=a.specVersion;if(!hC.has(l))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${l}"`),null;const c=a.firstPerson;if(!c)return null;const u=[],d=yield Xf(e);return Array.from(d.entries()).forEach(([h,f])=>{var g;const _=c.meshAnnotations?c.meshAnnotations.find(p=>p.node===h):void 0;u.push({meshes:f,type:(g=_==null?void 0:_.type)!==null&&g!==void 0?g:"both"})}),new Ln(t,u)})}_v0Import(e,t){var n;return Je(this,void 0,void 0,function*(){const r=this.parser.json,s=(n=r.extensions)===null||n===void 0?void 0:n.VRM;if(!s)return null;const o=s.firstPerson;if(!o)return null;const a=[],l=yield Xf(e);return Array.from(l.entries()).forEach(([c,u])=>{const d=r.nodes[c],h=o.meshAnnotations?o.meshAnnotations.find(f=>f.mesh===d.mesh):void 0;a.push({meshes:u,type:this._convertV0FlagToV1Type(h==null?void 0:h.firstPersonFlag)})}),new Ln(t,a)})}_convertV0FlagToV1Type(e){return e==="FirstPersonOnly"?"firstPersonOnly":e==="ThirdPersonOnly"?"thirdPersonOnly":e==="Auto"?"auto":"both"}}const $f=new L,Kf=new L,pC=new Fe;class Zf extends tn{constructor(e){super(),this.vrmHumanoid=e,this._boneAxesMap=new Map,Object.values(e.humanBones).forEach(t=>{const n=new AR(1);n.matrixAutoUpdate=!1,n.material.depthTest=!1,n.material.depthWrite=!1,this.add(n),this._boneAxesMap.set(t,n)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(e=>{e.geometry.dispose(),e.material.dispose()})}updateMatrixWorld(e){Array.from(this._boneAxesMap.entries()).forEach(([t,n])=>{t.node.updateWorldMatrix(!0,!1),t.node.matrixWorld.decompose($f,pC,Kf);const r=$f.set(.1,.1,.1).divide(Kf);n.matrix.copy(t.node.matrixWorld).scale(r)}),super.updateMatrixWorld(e)}}const lc=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],mC={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function Jg(i){return i.invert?i.invert():i.inverse(),i}const Gi=new L,Wi=new Fe;class Qc{constructor(e){this.humanBones=e,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const e={};return Object.keys(this.humanBones).forEach(t=>{const n=t,r=this.getBoneNode(n);r&&(Gi.copy(r.position),Wi.copy(r.quaternion),e[n]={position:Gi.toArray(),rotation:Wi.toArray()})}),e}getPose(){const e={};return Object.keys(this.humanBones).forEach(t=>{const n=t,r=this.getBoneNode(n);if(!r)return;Gi.set(0,0,0),Wi.identity();const s=this.restPose[n];s!=null&&s.position&&Gi.fromArray(s.position).negate(),s!=null&&s.rotation&&Jg(Wi.fromArray(s.rotation)),Gi.add(r.position),Wi.premultiply(r.quaternion),e[n]={position:Gi.toArray(),rotation:Wi.toArray()}}),e}setPose(e){Object.entries(e).forEach(([t,n])=>{const r=t,s=this.getBoneNode(r);if(!s)return;const o=this.restPose[r];o&&(n!=null&&n.position&&(s.position.fromArray(n.position),o.position&&s.position.add(Gi.fromArray(o.position))),n!=null&&n.rotation&&(s.quaternion.fromArray(n.rotation),o.rotation&&s.quaternion.multiply(Wi.fromArray(o.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([e,t])=>{const n=this.getBoneNode(e);n&&(t!=null&&t.position&&n.position.fromArray(t.position),t!=null&&t.rotation&&n.quaternion.fromArray(t.rotation))})}getBone(e){var t;return(t=this.humanBones[e])!==null&&t!==void 0?t:void 0}getBoneNode(e){var t,n;return(n=(t=this.humanBones[e])===null||t===void 0?void 0:t.node)!==null&&n!==void 0?n:null}}const cc=new L,gC=new Fe,_C=new L;class Na extends Qc{static _setupTransforms(e){const t=new st;t.name="VRMHumanoidRig";const n={},r={},s={};lc.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const u=new L,d=new Fe;c.updateWorldMatrix(!0,!1),c.matrixWorld.decompose(u,d,cc),n[a]=u,r[a]=c.quaternion.clone();const h=new Fe;(l=c.parent)===null||l===void 0||l.matrixWorld.decompose(cc,h,cc),s[a]=h}});const o={};return lc.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const u=n[a];let d=a,h;for(;h==null&&(d=mC[d],d!=null);)h=n[d];const f=new st;f.name="Normalized_"+c.name,(d?(l=o[d])===null||l===void 0?void 0:l.node:t).add(f),f.position.copy(u),h&&f.position.sub(h),o[a]={node:f}}}),{rigBones:o,root:t,parentWorldRotations:s,boneRotations:r}}constructor(e){const{rigBones:t,root:n,parentWorldRotations:r,boneRotations:s}=Na._setupTransforms(e);super(t),this.original=e,this.root=n,this._parentWorldRotations=r,this._boneRotations=s}update(){lc.forEach(e=>{const t=this.original.getBoneNode(e);if(t!=null){const n=this.getBoneNode(e),r=this._parentWorldRotations[e],s=gC.copy(r).invert(),o=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(r).premultiply(s).multiply(o),e==="hips"){const a=n.getWorldPosition(_C);t.parent.updateWorldMatrix(!0,!1);const l=t.parent.matrixWorld,c=a.applyMatrix4(l.invert());t.position.copy(c)}}})}}class Ua{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var n;this.autoUpdateHumanBones=(n=t==null?void 0:t.autoUpdateHumanBones)!==null&&n!==void 0?n:!0,this._rawHumanBones=new Qc(e),this._normalizedHumanBones=new Na(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new Qc(e.humanBones),this._normalizedHumanBones=new Na(this._rawHumanBones),this}clone(){return new Ua(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}}const vC={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},xC=new Set(["1.0","1.0-beta"]),Qf={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"};class yC{get name(){return"VRMHumanoidLoaderPlugin"}constructor(e,t){this.parser=e,this.helperRoot=t==null?void 0:t.helperRoot,this.autoUpdateHumanBones=t==null?void 0:t.autoUpdateHumanBones}afterRoot(e){return Je(this,void 0,void 0,function*(){e.userData.vrmHumanoid=yield this._import(e)})}_import(e){return Je(this,void 0,void 0,function*(){const t=yield this._v1Import(e);if(t)return t;const n=yield this._v0Import(e);return n||null})}_v1Import(e){var t,n;return Je(this,void 0,void 0,function*(){const r=this.parser.json;if(!(((t=r.extensionsUsed)===null||t===void 0?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(n=r.extensions)===null||n===void 0?void 0:n.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!xC.has(a))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.humanoid;if(!l)return null;const c=l.humanBones.leftThumbIntermediate!=null||l.humanBones.rightThumbIntermediate!=null,u={};l.humanBones!=null&&(yield Promise.all(Object.entries(l.humanBones).map(([h,f])=>Je(this,void 0,void 0,function*(){let g=h;const _=f.node;if(c){const m=Qf[g];m!=null&&(g=m)}const p=yield this.parser.getDependency("node",_);if(p==null){console.warn(`A glTF node bound to the humanoid bone ${g} (index = ${_}) does not exist`);return}u[g]={node:p}}))));const d=new Ua(this._ensureRequiredBonesExist(u),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(e.scene.add(d.normalizedHumanBonesRoot),this.helperRoot){const h=new Zf(d);this.helperRoot.add(h),h.renderOrder=this.helperRoot.renderOrder}return d})}_v0Import(e){var t;return Je(this,void 0,void 0,function*(){const r=(t=this.parser.json.extensions)===null||t===void 0?void 0:t.VRM;if(!r)return null;const s=r.humanoid;if(!s)return null;const o={};s.humanBones!=null&&(yield Promise.all(s.humanBones.map(l=>Je(this,void 0,void 0,function*(){const c=l.bone,u=l.node;if(c==null||u==null)return;const d=yield this.parser.getDependency("node",u);if(d==null){console.warn(`A glTF node bound to the humanoid bone ${c} (index = ${u}) does not exist`);return}const h=Qf[c],f=h??c;if(o[f]!=null){console.warn(`Multiple bone entries for ${f} detected (index = ${u}), ignoring duplicated entries.`);return}o[f]={node:d}}))));const a=new Ua(this._ensureRequiredBonesExist(o),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(e.scene.add(a.normalizedHumanBonesRoot),this.helperRoot){const l=new Zf(a);this.helperRoot.add(l),l.renderOrder=this.helperRoot.renderOrder}return a})}_ensureRequiredBonesExist(e){const t=Object.values(vC).filter(n=>e[n]==null);if(t.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${t.join(", ")}`);return e}}class Jf extends It{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new at(new Float32Array(65*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new at(new Uint16Array(3*63),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,e=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,e=!0),e&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let e=0;e<64;e++){const t=e/63*this._currentTheta;this._attrPos.setXYZ(e+1,this._currentRadius*Math.sin(t),0,this._currentRadius*Math.cos(t))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<63;e++)this._attrIndex.setXYZ(e*3,0,e+1,e+2);this._attrIndex.needsUpdate=!0}}class MC extends It{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new L,this._currentTail=new L,this._attrPos=new at(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new at(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,e=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),e=!0),e&&this._buildPosition()}_buildPosition(){for(let e=0;e<32;e++){const t=e/16*Math.PI;this._attrPos.setXYZ(e,Math.cos(t),Math.sin(t),0),this._attrPos.setXYZ(32+e,0,Math.cos(t),Math.sin(t)),this._attrPos.setXYZ(64+e,Math.sin(t),0,Math.cos(t))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<32;e++){const t=(e+1)%32;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(64+e*2,32+e,32+t),this._attrIndex.setXY(128+e*2,64+e,64+t)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}}const $o=new Fe,ep=new Fe,ws=new L,tp=new L,np=Math.sqrt(2)/2,EC=new Fe(0,0,-np,np),SC=new L(0,1,0);class TC extends tn{constructor(e){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=e;{const t=new Jf;t.radius=.5;const n=new Qn({color:65280,transparent:!0,opacity:.5,side:un,depthTest:!1,depthWrite:!1});this._meshPitch=new Xt(t,n),this.add(this._meshPitch)}{const t=new Jf;t.radius=.5;const n=new Qn({color:16711680,transparent:!0,opacity:.5,side:un,depthTest:!1,depthWrite:!1});this._meshYaw=new Xt(t,n),this.add(this._meshYaw)}{const t=new MC;t.radius=.1;const n=new ur({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new ro(t,n),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(e){const t=gt.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=t,this._meshYaw.geometry.update();const n=gt.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=n,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(ws),this.vrmLookAt.getLookAtWorldQuaternion($o),$o.multiply(this.vrmLookAt.getFaceFrontQuaternion(ep)),this._meshYaw.position.copy(ws),this._meshYaw.quaternion.copy($o),this._meshPitch.position.copy(ws),this._meshPitch.quaternion.copy($o),this._meshPitch.quaternion.multiply(ep.setFromAxisAngle(SC,t)),this._meshPitch.quaternion.multiply(EC);const{target:r,autoUpdate:s}=this.vrmLookAt;r!=null&&s&&(r.getWorldPosition(tp).sub(ws),this._lineTarget.geometry.tail.copy(tp),this._lineTarget.geometry.update(),this._lineTarget.position.copy(ws)),super.updateMatrixWorld(e)}}const bC=new L,AC=new L;function Jc(i,e){return i.matrixWorld.decompose(bC,e,AC),e}function la(i){return[Math.atan2(-i.z,i.x),Math.atan2(i.y,Math.sqrt(i.x*i.x+i.z*i.z))]}function ip(i){const e=Math.round(i/2/Math.PI);return i-2*Math.PI*e}const rp=new L(0,0,1),wC=new L,RC=new L,CC=new L,PC=new Fe,uc=new Fe,sp=new Fe,LC=new Fe,dc=new nn;class nl{get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new nn)}constructor(e,t){this.offsetFromHeadBone=new L,this.autoUpdate=!0,this.faceFront=new L(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new Fe)}getEuler(e){return e.set(gt.DEG2RAD*this._pitch,gt.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new nl(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){const t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){const t=this.humanoid.getRawBoneNode("head");return Jc(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(rp)<.01)return e.copy(this._restHeadWorldQuaternion).invert();const[t,n]=la(this.faceFront);return dc.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(dc).premultiply(LC.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(uc),this.getFaceFrontQuaternion(sp),e.copy(rp).applyQuaternion(uc).applyQuaternion(sp).applyEuler(this.getEuler(dc))}lookAt(e){const t=PC.copy(this._restHeadWorldQuaternion).multiply(Jg(this.getLookAtWorldQuaternion(uc))),n=this.getLookAtWorldPosition(RC),r=CC.copy(e).sub(n).applyQuaternion(t).normalize(),[s,o]=la(this.faceFront),[a,l]=la(r),c=ip(a-s),u=ip(o-l);this._yaw=gt.RAD2DEG*c,this._pitch=gt.RAD2DEG*u,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(wC)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}}nl.EULER_ORDER="YXZ";const IC=new L(0,0,1),bn=new Fe,Lr=new Fe,on=new nn(0,0,0,"YXZ");class ca{constructor(e,t,n,r,s){this.humanoid=e,this.rangeMapHorizontalInner=t,this.rangeMapHorizontalOuter=n,this.rangeMapVerticalDown=r,this.rangeMapVerticalUp=s,this.faceFront=new L(0,0,1),this._restQuatLeftEye=new Fe,this._restQuatRightEye=new Fe,this._restLeftEyeParentWorldQuat=new Fe,this._restRightEyeParentWorldQuat=new Fe;const o=this.humanoid.getRawBoneNode("leftEye"),a=this.humanoid.getRawBoneNode("rightEye");o&&(this._restQuatLeftEye.copy(o.quaternion),Jc(o.parent,this._restLeftEyeParentWorldQuat)),a&&(this._restQuatRightEye.copy(a.quaternion),Jc(a.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(e,t){const n=this.humanoid.getRawBoneNode("leftEye"),r=this.humanoid.getRawBoneNode("rightEye"),s=this.humanoid.getNormalizedBoneNode("leftEye"),o=this.humanoid.getNormalizedBoneNode("rightEye");n&&(t<0?on.x=-gt.DEG2RAD*this.rangeMapVerticalDown.map(-t):on.x=gt.DEG2RAD*this.rangeMapVerticalUp.map(t),e<0?on.y=-gt.DEG2RAD*this.rangeMapHorizontalInner.map(-e):on.y=gt.DEG2RAD*this.rangeMapHorizontalOuter.map(e),bn.setFromEuler(on),this._getWorldFaceFrontQuat(Lr),s.quaternion.copy(Lr).multiply(bn).multiply(Lr.invert()),bn.copy(this._restLeftEyeParentWorldQuat),n.quaternion.copy(s.quaternion).multiply(bn).premultiply(bn.invert()).multiply(this._restQuatLeftEye)),r&&(t<0?on.x=-gt.DEG2RAD*this.rangeMapVerticalDown.map(-t):on.x=gt.DEG2RAD*this.rangeMapVerticalUp.map(t),e<0?on.y=-gt.DEG2RAD*this.rangeMapHorizontalOuter.map(-e):on.y=gt.DEG2RAD*this.rangeMapHorizontalInner.map(e),bn.setFromEuler(on),this._getWorldFaceFrontQuat(Lr),o.quaternion.copy(Lr).multiply(bn).multiply(Lr.invert()),bn.copy(this._restRightEyeParentWorldQuat),r.quaternion.copy(o.quaternion).multiply(bn).premultiply(bn.invert()).multiply(this._restQuatRightEye))}lookAt(e){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const t=gt.RAD2DEG*e.y,n=gt.RAD2DEG*e.x;this.applyYawPitch(t,n)}_getWorldFaceFrontQuat(e){if(this.faceFront.distanceToSquared(IC)<.01)return e.identity();const[t,n]=la(this.faceFront);return on.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(on)}}ca.type="bone";class eu{constructor(e,t,n,r,s){this.expressions=e,this.rangeMapHorizontalInner=t,this.rangeMapHorizontalOuter=n,this.rangeMapVerticalDown=r,this.rangeMapVerticalUp=s}applyYawPitch(e,t){t<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-t))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(t))),e<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-e))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(e)))}lookAt(e){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const t=gt.RAD2DEG*e.y,n=gt.RAD2DEG*e.x;this.applyYawPitch(t,n)}}eu.type="expression";class op{constructor(e,t){this.inputMaxValue=e,this.outputScale=t}map(e){return this.outputScale*Qg(e/this.inputMaxValue)}}const NC=new Set(["1.0","1.0-beta"]),Ko=.01;class UC{get name(){return"VRMLookAtLoaderPlugin"}constructor(e,t){this.parser=e,this.helperRoot=t==null?void 0:t.helperRoot}afterRoot(e){return Je(this,void 0,void 0,function*(){const t=e.userData.vrmHumanoid;if(t===null)return;if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const n=e.userData.vrmExpressionManager;if(n!==null){if(n===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");e.userData.vrmLookAt=yield this._import(e,t,n)}})}_import(e,t,n){return Je(this,void 0,void 0,function*(){if(t==null||n==null)return null;const r=yield this._v1Import(e,t,n);if(r)return r;const s=yield this._v0Import(e,t,n);return s||null})}_v1Import(e,t,n){var r,s,o;return Je(this,void 0,void 0,function*(){const a=this.parser.json;if(!(((r=a.extensionsUsed)===null||r===void 0?void 0:r.indexOf("VRMC_vrm"))!==-1))return null;const c=(s=a.extensions)===null||s===void 0?void 0:s.VRMC_vrm;if(!c)return null;const u=c.specVersion;if(!NC.has(u))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${u}"`),null;const d=c.lookAt;if(!d)return null;const h=d.type==="expression"?1:10,f=this._v1ImportRangeMap(d.rangeMapHorizontalInner,h),g=this._v1ImportRangeMap(d.rangeMapHorizontalOuter,h),_=this._v1ImportRangeMap(d.rangeMapVerticalDown,h),p=this._v1ImportRangeMap(d.rangeMapVerticalUp,h);let m;d.type==="expression"?m=new eu(n,f,g,_,p):m=new ca(t,f,g,_,p);const A=this._importLookAt(t,m);return A.offsetFromHeadBone.fromArray((o=d.offsetFromHeadBone)!==null&&o!==void 0?o:[0,.06,0]),A})}_v1ImportRangeMap(e,t){var n,r;let s=(n=e==null?void 0:e.inputMaxValue)!==null&&n!==void 0?n:90;const o=(r=e==null?void 0:e.outputScale)!==null&&r!==void 0?r:t;return s<Ko&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),s=Ko),new op(s,o)}_v0Import(e,t,n){var r,s,o,a;return Je(this,void 0,void 0,function*(){const c=(r=this.parser.json.extensions)===null||r===void 0?void 0:r.VRM;if(!c)return null;const u=c.firstPerson;if(!u)return null;const d=u.lookAtTypeName==="BlendShape"?1:10,h=this._v0ImportDegreeMap(u.lookAtHorizontalInner,d),f=this._v0ImportDegreeMap(u.lookAtHorizontalOuter,d),g=this._v0ImportDegreeMap(u.lookAtVerticalDown,d),_=this._v0ImportDegreeMap(u.lookAtVerticalUp,d);let p;u.lookAtTypeName==="BlendShape"?p=new eu(n,h,f,g,_):p=new ca(t,h,f,g,_);const m=this._importLookAt(t,p);return u.firstPersonBoneOffset?m.offsetFromHeadBone.set((s=u.firstPersonBoneOffset.x)!==null&&s!==void 0?s:0,(o=u.firstPersonBoneOffset.y)!==null&&o!==void 0?o:.06,-((a=u.firstPersonBoneOffset.z)!==null&&a!==void 0?a:0)):m.offsetFromHeadBone.set(0,.06,0),m.faceFront.set(0,0,-1),p instanceof ca&&p.faceFront.set(0,0,-1),m})}_v0ImportDegreeMap(e,t){var n,r;const s=e==null?void 0:e.curve;JSON.stringify(s)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let o=(n=e==null?void 0:e.xRange)!==null&&n!==void 0?n:90;const a=(r=e==null?void 0:e.yRange)!==null&&r!==void 0?r:t;return o<Ko&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),o=Ko),new op(o,a)}_importLookAt(e,t){const n=new nl(e,t);if(this.helperRoot){const r=new TC(n);this.helperRoot.add(r),r.renderOrder=this.helperRoot.renderOrder}return n}}function DC(i,e){return typeof i!="string"||i===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(i)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(i)||/^data:.*,.*$/i.test(i)||/^blob:.*$/i.test(i)?i:e+i)}const OC=new Set(["1.0","1.0-beta"]);class FC{get name(){return"VRMMetaLoaderPlugin"}constructor(e,t){var n,r,s;this.parser=e,this.needThumbnailImage=(n=t==null?void 0:t.needThumbnailImage)!==null&&n!==void 0?n:!0,this.acceptLicenseUrls=(r=t==null?void 0:t.acceptLicenseUrls)!==null&&r!==void 0?r:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(s=t==null?void 0:t.acceptV0Meta)!==null&&s!==void 0?s:!0}afterRoot(e){return Je(this,void 0,void 0,function*(){e.userData.vrmMeta=yield this._import(e)})}_import(e){return Je(this,void 0,void 0,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const n=yield this._v0Import(e);return n??null})}_v1Import(e){var t,n,r;return Je(this,void 0,void 0,function*(){const s=this.parser.json;if(!(((t=s.extensionsUsed)===null||t===void 0?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const a=(n=s.extensions)===null||n===void 0?void 0:n.VRMC_vrm;if(a==null)return null;const l=a.specVersion;if(!OC.has(l))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${l}"`),null;const c=a.meta;if(!c)return null;const u=c.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(u))throw new Error(`VRMMetaLoaderPlugin: The license url "${u}" is not accepted`);let h;return this.needThumbnailImage&&c.thumbnailImage!=null&&(h=(r=yield this._extractGLTFImage(c.thumbnailImage))!==null&&r!==void 0?r:void 0),{metaVersion:"1",name:c.name,version:c.version,authors:c.authors,copyrightInformation:c.copyrightInformation,contactInformation:c.contactInformation,references:c.references,thirdPartyLicenses:c.thirdPartyLicenses,thumbnailImage:h,licenseUrl:c.licenseUrl,avatarPermission:c.avatarPermission,allowExcessivelyViolentUsage:c.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:c.allowExcessivelySexualUsage,commercialUsage:c.commercialUsage,allowPoliticalOrReligiousUsage:c.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:c.allowAntisocialOrHateUsage,creditNotation:c.creditNotation,allowRedistribution:c.allowRedistribution,modification:c.modification,otherLicenseUrl:c.otherLicenseUrl}})}_v0Import(e){var t;return Je(this,void 0,void 0,function*(){const r=(t=this.parser.json.extensions)===null||t===void 0?void 0:t.VRM;if(!r)return null;const s=r.meta;if(!s)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let o;return this.needThumbnailImage&&s.texture!=null&&s.texture!==-1&&(o=yield this.parser.getDependency("texture",s.texture)),{metaVersion:"0",allowedUserName:s.allowedUserName,author:s.author,commercialUssageName:s.commercialUssageName,contactInformation:s.contactInformation,licenseName:s.licenseName,otherLicenseUrl:s.otherLicenseUrl,otherPermissionUrl:s.otherPermissionUrl,reference:s.reference,sexualUssageName:s.sexualUssageName,texture:o??void 0,title:s.title,version:s.version,violentUssageName:s.violentUssageName}})}_extractGLTFImage(e){var t;return Je(this,void 0,void 0,function*(){const r=(t=this.parser.json.images)===null||t===void 0?void 0:t[e];if(r==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${e}] of glTF as a thumbnail but the image doesn't exist`),null;let s=r.uri;if(r.bufferView!=null){const a=yield this.parser.getDependency("bufferView",r.bufferView),l=new Blob([a],{type:r.mimeType});s=URL.createObjectURL(l)}return s==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${e}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new qg().loadAsync(DC(s,this.parser.options.path)).catch(a=>(console.error(a),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}}class BC{constructor(e){this.scene=e.scene,this.meta=e.meta,this.humanoid=e.humanoid,this.expressionManager=e.expressionManager,this.firstPerson=e.firstPerson,this.lookAt=e.lookAt}update(e){this.humanoid.update(),this.lookAt&&this.lookAt.update(e),this.expressionManager&&this.expressionManager.update()}}class HC extends BC{constructor(e){super(e),this.materials=e.materials,this.springBoneManager=e.springBoneManager,this.nodeConstraintManager=e.nodeConstraintManager}update(e){super.update(e),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(e),this.materials&&this.materials.forEach(t=>{t.update&&t.update(e)})}}function Zo(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(n.next(u))}catch(d){o(d)}}function l(u){try{c(n.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((n=n.apply(i,e||[])).next())})}/*!
 * @pixiv/three-vrm-materials-mtoon v2.1.1
 * MToon (toon material) module for @pixiv/three-vrm
 *
 * Copyright (c) 2020-2024 pixiv Inc.
 * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */function Zi(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(n.next(u))}catch(d){o(d)}}function l(u){try{c(n.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((n=n.apply(i,e||[])).next())})}var kC=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  float outlineTex = 1.0;

  #ifdef OUTLINE
    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
    #endif

    #ifdef OUTLINE_WIDTH_WORLD
      float worldNormalLength = length( transformedNormal );
      vec3 outlineOffset = outlineWidthFactor * outlineTex * worldNormalLength * objectNormal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      vec3 clipNormal = ( projectionMatrix * modelViewMatrix * vec4( objectNormal, 0.0 ) ).xyz;
      vec2 projectedNormal = normalize( clipNormal.xy );
      projectedNormal.x *= projectionMatrix[ 0 ].x / projectionMatrix[ 1 ].y;
      gl_Position.xy += 2.0 * outlineWidthFactor * outlineTex * projectedNormal.xy;
    #endif

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,VC=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#if THREE_VRM_THREE_REVISION >= 132
  #include <alphatest_pars_fragment>
#endif

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#if THREE_VRM_THREE_REVISION >= 132
  #include <normal_pars_fragment>
#endif

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

#if THREE_VRM_THREE_REVISION < 132
  #ifndef FLAT_SHADED
    varying vec3 vNormal;
  #endif
#endif

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  #if THREE_VRM_THREE_REVISION < 132
    #ifndef PHYSICALLY_CORRECT_LIGHTS
      lightColor *= PI;
    #endif
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    #if THREE_VRM_THREE_REVISION < 132
      #ifndef PHYSICALLY_CORRECT_LIGHTS
        irradiance *= PI;
      #endif
    #endif

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #elif THREE_VRM_THREE_REVISION >= 126

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {

      // Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude

      vec3 S = ( q0 * st1.t - q1 * st0.t ) * scale;
      vec3 T = ( - q0 * st1.s + q1 * st0.s ) * scale;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?

      if ( length( S ) == 0.0 || length( T ) == 0.0 ) {
        return surf_norm;
      }

      S = normalize( S );
      T = normalize( T );
      vec3 N = normalize( surf_norm );

      #ifdef DOUBLE_SIDED

        // Workaround for Adreno GPUs gl_FrontFacing bug. See #15850 and #10331

        bool frontFacing = dot( cross( S, T ), N ) > 0.0;

        mapN.xy *= ( float( frontFacing ) * 2.0 - 1.0 );

      #else

        mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

      #endif

      mat3 tsn = mat3( S, T, N );
      return normalize( tsn * mapN );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      // Temporary compat against shader change @ Three.js r126
      // See: #21205, #21307, #21299
      #if THREE_VRM_THREE_REVISION >= 126

        normal = normal * faceDirection;

      #else

        normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

      #endif

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      // pre-r126
      #if THREE_VRM_THREE_REVISION >= 126

        normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

      #else

        normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN );

      #endif

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #elif THREE_VRM_THREE_REVISION >= 132
        getPointLightInfo( pointLight, geometry, directLight );
      #else
        getPointDirectLightIrradiance( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #elif THREE_VRM_THREE_REVISION >= 132
        getSpotLightInfo( spotLight, geometry, directLight );
      #else
        getSpotDirectLightIrradiance( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #elif THREE_VRM_THREE_REVISION >= 132
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #else
        getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #elif THREE_VRM_THREE_REVISION >= 133
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #elif THREE_VRM_THREE_REVISION >= 133
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, 1.0 );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`;const zC={None:"none",Normal:"normal",LitShadeRate:"litShadeRate",UV:"uv"},hc={None:"none",WorldCoordinates:"worldCoordinates",ScreenCoordinates:"screenCoordinates"},GC={3e3:"",3001:"srgb"};function fc(i){return parseInt(vn,10)>=152?i.colorSpace:GC[i.encoding]}class pc extends ti{get color(){return this.uniforms.litFactor.value}set color(e){this.uniforms.litFactor.value=e}get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}get normalMap(){return this.uniforms.normalMap.value}set normalMap(e){this.uniforms.normalMap.value=e}get normalScale(){return this.uniforms.normalScale.value}set normalScale(e){this.uniforms.normalScale.value=e}get emissive(){return this.uniforms.emissive.value}set emissive(e){this.uniforms.emissive.value=e}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(e){this.uniforms.emissiveIntensity.value=e}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(e){this.uniforms.emissiveMap.value=e}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(e){this.uniforms.shadeColorFactor.value=e}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(e){this.uniforms.shadeMultiplyTexture.value=e}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(e){this.uniforms.shadingShiftFactor.value=e}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(e){this.uniforms.shadingShiftTexture.value=e}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(e){this.uniforms.shadingShiftTextureScale.value=e}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(e){this.uniforms.shadingToonyFactor.value=e}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(e){this.uniforms.giEqualizationFactor.value=e}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(e){this.uniforms.matcapFactor.value=e}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(e){this.uniforms.matcapTexture.value=e}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(e){this.uniforms.parametricRimColorFactor.value=e}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(e){this.uniforms.rimMultiplyTexture.value=e}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(e){this.uniforms.rimLightingMixFactor.value=e}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(e){this.uniforms.parametricRimFresnelPowerFactor.value=e}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(e){this.uniforms.parametricRimLiftFactor.value=e}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(e){this.uniforms.outlineWidthMultiplyTexture.value=e}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(e){this.uniforms.outlineWidthFactor.value=e}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(e){this.uniforms.outlineColorFactor.value=e}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(e){this.uniforms.outlineLightingMixFactor.value=e}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(e){this.uniforms.uvAnimationMaskTexture.value=e}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(e){this.uniforms.uvAnimationScrollXOffset.value=e}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(e){this.uniforms.uvAnimationScrollYOffset.value=e}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(e){this.uniforms.uvAnimationRotationPhase.value=e}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(e){this._ignoreVertexColor=e,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(e){this._v0CompatShade=e,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(e){this._debugMode=e,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(e){this._outlineWidthMode=e,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(e){this._isOutline=e,this.needsUpdate=!0}get isMToonMaterial(){return!0}constructor(e={}){var t;super({vertexShader:kC,fragmentShader:VC}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=Iu,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=zC.None,this._outlineWidthMode=hc.None,this._isOutline=!1,e.transparentWithZWrite&&(e.depthWrite=!0),delete e.transparentWithZWrite,e.fog=!0,e.lights=!0,e.clipping=!0,parseInt(vn,10)<129&&(e.skinning=e.skinning||!1),parseInt(vn,10)<131&&(e.morphTargets=e.morphTargets||!1,e.morphNormals=e.morphNormals||!1),this.uniforms=Pg.merge([fe.common,fe.normalmap,fe.emissivemap,fe.fog,fe.lights,{litFactor:{value:new Se(1,1,1)},mapUvTransform:{value:new we},colorAlpha:{value:1},normalMapUvTransform:{value:new we},shadeColorFactor:{value:new Se(.97,.81,.86)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new we},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new we},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new Se(0,0,0)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new we},parametricRimColorFactor:{value:new Se(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new we},rimLightingMixFactor:{value:0},parametricRimFresnelPowerFactor:{value:1},parametricRimLiftFactor:{value:0},emissive:{value:new Se(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new we},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new we},outlineWidthFactor:{value:.5},outlineColorFactor:{value:new Se(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new we},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(t=e.uniforms)!==null&&t!==void 0?t:{}]),this.setValues(e),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([n,r])=>`${n}:${r}`),this.matcapTexture?`matcapTextureColorSpace:${fc(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${fc(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${fc(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=n=>{const r=parseInt(vn,10),s=Object.entries(Object.assign(Object.assign({},this._generateDefines()),this.defines)).filter(([o,a])=>!!a).map(([o,a])=>`#define ${o} ${a}`).join(`
`)+`
`;n.vertexShader=s+n.vertexShader,n.fragmentShader=s+n.fragmentShader,r<154&&(n.fragmentShader=n.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>")),r<132&&(n.fragmentShader=n.fragmentShader.replace("#include <normal_pars_fragment>",""),n.fragmentShader=n.fragmentShader.replace("#include <alphatest_pars_fragment>",""))}}update(e){this._uploadUniformsWorkaround(),this._updateUVAnimation(e)}copy(e){return super.copy(e),this.map=e.map,this.normalMap=e.normalMap,this.emissiveMap=e.emissiveMap,this.shadeMultiplyTexture=e.shadeMultiplyTexture,this.shadingShiftTexture=e.shadingShiftTexture,this.matcapTexture=e.matcapTexture,this.rimMultiplyTexture=e.rimMultiplyTexture,this.outlineWidthMultiplyTexture=e.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=e.uvAnimationMaskTexture,this.normalMapType=e.normalMapType,this.uvAnimationScrollXSpeedFactor=e.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=e.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=e.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=e.ignoreVertexColor,this.v0CompatShade=e.v0CompatShade,this.debugMode=e.debugMode,this.outlineWidthMode=e.outlineWidthMode,this.isOutline=e.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(e){this.uniforms.uvAnimationScrollXOffset.value+=e*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=e*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=e*this.uvAnimationRotationSpeedFactor,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),parseInt(vn,10)>=132&&(this.uniforms.alphaTest.value=this.alphaTest),this.uniformsNeedUpdate=!0}_generateDefines(){const e=parseInt(vn,10),t=this.outlineWidthMultiplyTexture!==null,n=this.map!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:e,OUTLINE:this._isOutline,MTOON_USE_UV:t||n,MTOON_UVS_VERTEX_ONLY:t&&!n,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_WORLD:this._isOutline&&this._outlineWidthMode===hc.WorldCoordinates,OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===hc.ScreenCoordinates}}_updateTextureMatrix(e,t){e.value&&(e.value.matrixAutoUpdate&&e.value.updateMatrix(),t.value.copy(e.value.matrix))}}const WC={"":3e3,srgb:3001};function XC(i,e){parseInt(vn,10)>=152?i.colorSpace=e:i.encoding=WC[e]}class jC{get pending(){return Promise.all(this._pendings)}constructor(e,t){this._parser=e,this._materialParams=t,this._pendings=[]}assignPrimitive(e,t){t!=null&&(this._materialParams[e]=t)}assignColor(e,t,n){t!=null&&(this._materialParams[e]=new Se().fromArray(t),n&&this._materialParams[e].convertSRGBToLinear())}assignTexture(e,t,n){return Zi(this,void 0,void 0,function*(){const r=Zi(this,void 0,void 0,function*(){t!=null&&(yield this._parser.assignTexture(this._materialParams,e,t),n&&XC(this._materialParams[e],"srgb"))});return this._pendings.push(r),r})}assignTextureByIndex(e,t,n){return Zi(this,void 0,void 0,function*(){return this.assignTexture(e,t!=null?{index:t}:void 0,n)})}}const qC=new Set(["1.0","1.0-beta"]);class Kr{get name(){return Kr.EXTENSION_NAME}constructor(e,t={}){var n,r,s;this.parser=e,this.renderOrderOffset=(n=t.renderOrderOffset)!==null&&n!==void 0?n:0,this.v0CompatShade=(r=t.v0CompatShade)!==null&&r!==void 0?r:!1,this.debugMode=(s=t.debugMode)!==null&&s!==void 0?s:"none",this._mToonMaterialSet=new Set}beforeRoot(){return Zi(this,void 0,void 0,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return Zi(this,void 0,void 0,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?pc:null}extendMaterialParams(e,t){const n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){var t;return Zi(this,void 0,void 0,function*(){const n=this.parser,s=(t=n.json.meshes)===null||t===void 0?void 0:t[e];if(s==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);const o=s.primitives,a=yield n.loadMesh(e);if(o.length===1){const l=a,c=o[0].material;c!=null&&this._setupPrimitive(l,c)}else{const l=a;for(let c=0;c<o.length;c++){const u=l.children[c],d=o[c].material;d!=null&&this._setupPrimitive(u,d)}}return a})}_removeUnlitExtensionIfMToonExists(){const n=this.parser.json.materials;n==null||n.map((r,s)=>{var o;this._getMToonExtension(s)&&(!((o=r.extensions)===null||o===void 0)&&o.KHR_materials_unlit)&&delete r.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,n;const o=(t=this.parser.json.materials)===null||t===void 0?void 0:t[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(n=o.extensions)===null||n===void 0?void 0:n[Kr.EXTENSION_NAME];if(a==null)return;const l=a.specVersion;if(!qC.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${Kr.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,t){var n;return Zi(this,void 0,void 0,function*(){delete t.metalness,delete t.roughness;const r=new jC(this.parser,t);r.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),r.assignColor("shadeColorFactor",e.shadeColorFactor),r.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),r.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),r.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),r.assignPrimitive("shadingShiftTextureScale",(n=e.shadingShiftTexture)===null||n===void 0?void 0:n.scale),r.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),r.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),r.assignColor("matcapFactor",e.matcapFactor),r.assignTexture("matcapTexture",e.matcapTexture,!0),r.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),r.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),r.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),r.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),r.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),r.assignPrimitive("outlineWidthMode",e.outlineWidthMode),r.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),r.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),r.assignColor("outlineColorFactor",e.outlineColorFactor),r.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),r.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),r.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),r.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),r.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),r.assignPrimitive("v0CompatShade",this.v0CompatShade),r.assignPrimitive("debugMode",this.debugMode),yield r.pending})}_setupPrimitive(e,t){const n=this._getMToonExtension(t);if(n){const r=this._parseRenderOrder(n);e.renderOrder=r+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_generateOutline(e){const t=e.material;if(!(t instanceof pc)||t.outlineWidthMode==="none"||t.outlineWidthFactor<=0)return;e.material=[t];const n=t.clone();n.name+=" (Outline)",n.isOutline=!0,n.side=jt,e.material.push(n);const r=e.geometry,s=r.index?r.index.count:r.attributes.position.count/3;r.addGroup(0,s,0),r.addGroup(0,s,1)}_addToMaterialSet(e){const t=e.material,n=new Set;Array.isArray(t)?t.forEach(r=>n.add(r)):n.add(t);for(const r of n)r instanceof pc&&this._mToonMaterialSet.add(r)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!==null&&t!==void 0?t:0)}}Kr.EXTENSION_NAME="VRMC_materials_mtoon";/*!
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier v2.1.1
 * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
 *
 * Copyright (c) 2020-2024 pixiv Inc.
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */function YC(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(n.next(u))}catch(d){o(d)}}function l(u){try{c(n.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((n=n.apply(i,e||[])).next())})}class $s{get name(){return $s.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return YC(this,void 0,void 0,function*(){const n=this._getHDREmissiveMultiplierExtension(e);if(n==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const r=n.emissiveMultiplier;t.emissiveIntensity=r})}_getHDREmissiveMultiplierExtension(e){var t,n;const o=(t=this.parser.json.materials)===null||t===void 0?void 0:t[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(n=o.extensions)===null||n===void 0?void 0:n[$s.EXTENSION_NAME];if(a!=null)return a}}$s.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";/*!
 * @pixiv/three-vrm-materials-v0compat v2.1.1
 * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
 *
 * Copyright (c) 2020-2024 pixiv Inc.
 * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */function $C(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(n.next(u))}catch(d){o(d)}}function l(u){try{c(n.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((n=n.apply(i,e||[])).next())})}function Ir(i){return Math.pow(i,2.2)}class KC{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(e){var t;this.parser=e,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const n=this.parser.json;n.extensionsUsed=(t=n.extensionsUsed)!==null&&t!==void 0?t:[],n.extensionsUsed.indexOf("KHR_texture_transform")===-1&&n.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){var e;return $C(this,void 0,void 0,function*(){const t=this.parser.json,n=(e=t.extensions)===null||e===void 0?void 0:e.VRM,r=n==null?void 0:n.materialProperties;r&&(this._populateRenderQueueMap(r),r.forEach((s,o)=>{var a,l;const c=(a=t.materials)===null||a===void 0?void 0:a[o];if(c==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${o}] of glTF but the material doesn't exist`);return}if(s.shader==="VRM/MToon"){const u=this._parseV0MToonProperties(s,c);t.materials[o]=u}else if(!((l=s.shader)===null||l===void 0)&&l.startsWith("VRM/Unlit")){const u=this._parseV0UnlitProperties(s,c);t.materials[o]=u}else s.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${s.shader}`)}))})}_parseV0MToonProperties(e,t){var n,r,s,o,a,l,c,u,d,h,f,g,_,p,m,A,v,E,C,b,w,O,T,M,B,X,N,$,J,W,te,H,oe,le,ye,be,$e,ee,ue,me,pe,Ae,Re,Pe;const G=(r=(n=e.keywordMap)===null||n===void 0?void 0:n._ALPHABLEND_ON)!==null&&r!==void 0?r:!1,P=((s=e.floatProperties)===null||s===void 0?void 0:s._ZWrite)===1&&G,U=this._v0ParseRenderQueue(e),V=(a=(o=e.keywordMap)===null||o===void 0?void 0:o._ALPHATEST_ON)!==null&&a!==void 0?a:!1,Q=G?"BLEND":V?"MASK":"OPAQUE",S=V?(l=e.floatProperties)===null||l===void 0?void 0:l._Cutoff:void 0,I=((u=(c=e.floatProperties)===null||c===void 0?void 0:c._CullMode)!==null&&u!==void 0?u:2)===0,D=this._portTextureTransform(e),k=(h=(d=e.vectorProperties)===null||d===void 0?void 0:d._Color)===null||h===void 0?void 0:h.map((co,il)=>il===3?co:Ir(co)),F=(f=e.textureProperties)===null||f===void 0?void 0:f._MainTex,ne=F!=null?{index:F,extensions:Object.assign({},D)}:void 0,q=(g=e.floatProperties)===null||g===void 0?void 0:g._BumpScale,se=(_=e.textureProperties)===null||_===void 0?void 0:_._BumpMap,ce=se!=null?{index:se,scale:q,extensions:Object.assign({},D)}:void 0,ie=(m=(p=e.vectorProperties)===null||p===void 0?void 0:p._EmissionColor)===null||m===void 0?void 0:m.map(Ir),ae=(A=e.textureProperties)===null||A===void 0?void 0:A._EmissionMap,_e=ae!=null?{index:ae,extensions:Object.assign({},D)}:void 0,he=(E=(v=e.vectorProperties)===null||v===void 0?void 0:v._ShadeColor)===null||E===void 0?void 0:E.map(Ir),ge=(C=e.textureProperties)===null||C===void 0?void 0:C._ShadeTexture,Ne=ge!=null?{index:ge,extensions:Object.assign({},D)}:void 0;let He=(w=(b=e.floatProperties)===null||b===void 0?void 0:b._ShadeShift)!==null&&w!==void 0?w:0,ke=(T=(O=e.floatProperties)===null||O===void 0?void 0:O._ShadeToony)!==null&&T!==void 0?T:.9;ke=gt.lerp(ke,1,.5+.5*He),He=-He-(1-ke);const je=(M=e.floatProperties)===null||M===void 0?void 0:M._IndirectLightIntensity,Le=je?1-je:void 0,xe=(B=e.textureProperties)===null||B===void 0?void 0:B._SphereAdd,x=xe!=null?[1,1,1]:void 0,j=xe!=null?{index:xe}:void 0,re=(X=e.floatProperties)===null||X===void 0?void 0:X._RimLightingMix,de=(N=e.textureProperties)===null||N===void 0?void 0:N._RimTexture,Me=de!=null?{index:de,extensions:Object.assign({},D)}:void 0,Ye=(J=($=e.vectorProperties)===null||$===void 0?void 0:$._RimColor)===null||J===void 0?void 0:J.map(Ir),qe=(W=e.floatProperties)===null||W===void 0?void 0:W._RimFresnelPower,ot=(te=e.floatProperties)===null||te===void 0?void 0:te._RimLift,vt=["none","worldCoordinates","screenCoordinates"][(oe=(H=e.floatProperties)===null||H===void 0?void 0:H._OutlineWidthMode)!==null&&oe!==void 0?oe:0];let Qe=(ye=(le=e.floatProperties)===null||le===void 0?void 0:le._OutlineWidth)!==null&&ye!==void 0?ye:0;Qe=.01*Qe;const ht=(be=e.textureProperties)===null||be===void 0?void 0:be._OutlineWidthTexture,pt=ht!=null?{index:ht,extensions:Object.assign({},D)}:void 0,Bt=(ee=($e=e.vectorProperties)===null||$e===void 0?void 0:$e._OutlineColor)===null||ee===void 0?void 0:ee.map(Ir),Tn=((ue=e.floatProperties)===null||ue===void 0?void 0:ue._OutlineColorMode)===1?(me=e.floatProperties)===null||me===void 0?void 0:me._OutlineLightingMix:0,Fn=(pe=e.textureProperties)===null||pe===void 0?void 0:pe._UvAnimMaskTexture,Bn=Fn!=null?{index:Fn,extensions:Object.assign({},D)}:void 0,oo=(Ae=e.floatProperties)===null||Ae===void 0?void 0:Ae._UvAnimScrollX;let Hn=(Re=e.floatProperties)===null||Re===void 0?void 0:Re._UvAnimScrollY;Hn!=null&&(Hn=-Hn);const ao=(Pe=e.floatProperties)===null||Pe===void 0?void 0:Pe._UvAnimRotation,lo={specVersion:"1.0",transparentWithZWrite:P,renderQueueOffsetNumber:U,shadeColorFactor:he,shadeMultiplyTexture:Ne,shadingShiftFactor:He,shadingToonyFactor:ke,giEqualizationFactor:Le,matcapFactor:x,matcapTexture:j,rimLightingMixFactor:re,rimMultiplyTexture:Me,parametricRimColorFactor:Ye,parametricRimFresnelPowerFactor:qe,parametricRimLiftFactor:ot,outlineWidthMode:vt,outlineWidthFactor:Qe,outlineWidthMultiplyTexture:pt,outlineColorFactor:Bt,outlineLightingMixFactor:Tn,uvAnimationMaskTexture:Bn,uvAnimationScrollXSpeedFactor:oo,uvAnimationScrollYSpeedFactor:Hn,uvAnimationRotationSpeedFactor:ao};return Object.assign(Object.assign({},t),{pbrMetallicRoughness:{baseColorFactor:k,baseColorTexture:ne},normalTexture:ce,emissiveTexture:_e,emissiveFactor:ie,alphaMode:Q,alphaCutoff:S,doubleSided:I,extensions:{VRMC_materials_mtoon:lo}})}_parseV0UnlitProperties(e,t){var n,r,s,o;const a=e.shader==="VRM/UnlitTransparentZWrite",l=e.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(e),u=e.shader==="VRM/UnlitCutout",d=l?"BLEND":u?"MASK":"OPAQUE",h=u?(n=e.floatProperties)===null||n===void 0?void 0:n._Cutoff:void 0,f=this._portTextureTransform(e),g=(s=(r=e.vectorProperties)===null||r===void 0?void 0:r._Color)===null||s===void 0?void 0:s.map(Ir),_=(o=e.textureProperties)===null||o===void 0?void 0:o._MainTex,p=_!=null?{index:_,extensions:Object.assign({},f)}:void 0,m={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:g,shadeMultiplyTexture:p};return Object.assign(Object.assign({},t),{pbrMetallicRoughness:{baseColorFactor:g,baseColorTexture:p},alphaMode:d,alphaCutoff:h,extensions:{VRMC_materials_mtoon:m}})}_portTextureTransform(e){var t,n,r,s,o;const a=(t=e.vectorProperties)===null||t===void 0?void 0:t._MainTex;if(a==null)return{};const l=[(n=a==null?void 0:a[0])!==null&&n!==void 0?n:0,(r=a==null?void 0:a[1])!==null&&r!==void 0?r:0],c=[(s=a==null?void 0:a[2])!==null&&s!==void 0?s:1,(o=a==null?void 0:a[3])!==null&&o!==void 0?o:1];return l[1]=1-c[1]-l[1],{KHR_texture_transform:{offset:l,scale:c}}}_v0ParseRenderQueue(e){var t,n,r;const s=(n=(t=e.keywordMap)===null||t===void 0?void 0:t._ALPHABLEND_ON)!==null&&n!==void 0?n:!1,o=((r=e.floatProperties)===null||r===void 0?void 0:r._ZWrite)===1;let a=0;if(s){const l=e.renderQueue;l!=null&&(o?a=this._renderQueueMapTransparentZWrite.get(l):a=this._renderQueueMapTransparent.get(l))}return a}_populateRenderQueueMap(e){const t=new Set,n=new Set;e.forEach(r=>{var s,o,a;const l=(o=(s=r.keywordMap)===null||s===void 0?void 0:s._ALPHABLEND_ON)!==null&&o!==void 0?o:!1,c=((a=r.floatProperties)===null||a===void 0?void 0:a._ZWrite)===1;if(l){const u=r.renderQueue;u!=null&&(c?n.add(u):t.add(u))}}),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),n.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${n.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(t).sort().forEach((r,s)=>{const o=Math.min(Math.max(s-t.size+1,-9),0);this._renderQueueMapTransparent.set(r,o)}),Array.from(n).sort().forEach((r,s)=>{const o=Math.min(Math.max(s,0),9);this._renderQueueMapTransparentZWrite.set(r,o)})}}/*!
 * @pixiv/three-vrm-node-constraint v2.1.1
 * Node constraint module for @pixiv/three-vrm
 *
 * Copyright (c) 2020-2024 pixiv Inc.
 * @pixiv/three-vrm-node-constraint is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */const gi=new L;class mc extends tn{constructor(e){super(),this._attrPosition=new at(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(xE);const t=new It;t.setAttribute("position",this._attrPosition);const n=new ur({color:16711935,depthTest:!1,depthWrite:!1});this._line=new el(t,n),this.add(this._line),this.constraint=e}updateMatrixWorld(e){gi.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,gi.x,gi.y,gi.z),this.constraint.source&&gi.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,gi.x,gi.y,gi.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(e)}}function ap(i,e){return e.set(i.elements[12],i.elements[13],i.elements[14])}const ZC=new L,QC=new L;function JC(i,e){return i.decompose(ZC,e,QC),e}function Da(i){return i.invert?i.invert():i.inverse(),i}class Wu{constructor(e,t){this.destination=e,this.source=t,this.weight=1}}const eP=new L,tP=new L,nP=new L,iP=new Fe,rP=new Fe,sP=new Fe;class oP extends Wu{get aimAxis(){return this._aimAxis}set aimAxis(e){this._aimAxis=e,this._v3AimAxis.set(e==="PositiveX"?1:e==="NegativeX"?-1:0,e==="PositiveY"?1:e==="NegativeY"?-1:0,e==="PositiveZ"?1:e==="NegativeZ"?-1:0)}get dependencies(){const e=new Set([this.source]);return this.destination.parent&&e.add(this.destination.parent),e}constructor(e,t){super(e,t),this._aimAxis="PositiveX",this._v3AimAxis=new L(1,0,0),this._dstRestQuat=new Fe}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const e=iP.identity(),t=rP.identity();this.destination.parent&&(JC(this.destination.parent.matrixWorld,e),Da(t.copy(e)));const n=eP.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(e),r=ap(this.source.matrixWorld,tP).sub(ap(this.destination.matrixWorld,nP)).normalize(),s=sP.setFromUnitVectors(n,r).premultiply(t).multiply(e).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(s,this.weight)}}function lp(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(n.next(u))}catch(d){o(d)}}function l(u){try{c(n.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((n=n.apply(i,e||[])).next())})}function aP(i,e){const t=[i];let n=i.parent;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(r=>{e(r)})}class lP{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(e){this._constraints.add(e);let t=this._objectConstraintsMap.get(e.destination);t==null&&(t=new Set,this._objectConstraintsMap.set(e.destination,t)),t.add(e)}deleteConstraint(e){this._constraints.delete(e),this._objectConstraintsMap.get(e.destination).delete(e)}setInitState(){const e=new Set,t=new Set;for(const n of this._constraints)this._processConstraint(n,e,t,r=>r.setInitState())}update(){const e=new Set,t=new Set;for(const n of this._constraints)this._processConstraint(n,e,t,r=>r.update())}_processConstraint(e,t,n,r){if(n.has(e))return;if(t.has(e))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");t.add(e);const s=e.dependencies;for(const o of s)aP(o,a=>{const l=this._objectConstraintsMap.get(a);if(l)for(const c of l)this._processConstraint(c,t,n,r)});r(e),n.add(e)}}const cP=new Fe,uP=new Fe;class dP extends Wu{get dependencies(){return new Set([this.source])}constructor(e,t){super(e,t),this._dstRestQuat=new Fe,this._invSrcRestQuat=new Fe}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Da(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const e=cP.copy(this._invSrcRestQuat).multiply(this.source.quaternion),t=uP.copy(this._dstRestQuat).multiply(e);this.destination.quaternion.copy(this._dstRestQuat).slerp(t,this.weight)}}const hP=new L,fP=new Fe,pP=new Fe;class mP extends Wu{get rollAxis(){return this._rollAxis}set rollAxis(e){this._rollAxis=e,this._v3RollAxis.set(e==="X"?1:0,e==="Y"?1:0,e==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(e,t){super(e,t),this._rollAxis="X",this._v3RollAxis=new L(1,0,0),this._dstRestQuat=new Fe,this._invDstRestQuat=new Fe,this._invSrcRestQuatMulDstRestQuat=new Fe}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Da(this._invDstRestQuat.copy(this._dstRestQuat)),Da(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const e=fP.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),t=hP.copy(this._v3RollAxis).applyQuaternion(e),r=pP.setFromUnitVectors(t,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(e);this.destination.quaternion.copy(this._dstRestQuat).slerp(r,this.weight)}}const gP=new Set(["1.0","1.0-beta"]);class Qi{get name(){return Qi.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t==null?void 0:t.helperRoot}afterRoot(e){return lp(this,void 0,void 0,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){var t;return lp(this,void 0,void 0,function*(){const n=this.parser.json;if(!(((t=n.extensionsUsed)===null||t===void 0?void 0:t.indexOf(Qi.EXTENSION_NAME))!==-1))return null;const s=new lP,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var c;const u=n.nodes[l],d=(c=u==null?void 0:u.extensions)===null||c===void 0?void 0:c[Qi.EXTENSION_NAME];if(d==null)return;const h=d.specVersion;if(!gP.has(h)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${Qi.EXTENSION_NAME} specVersion "${h}"`);return}const f=d.constraint;if(f.roll!=null){const g=this._importRollConstraint(a,o,f.roll);s.addConstraint(g)}else if(f.aim!=null){const g=this._importAimConstraint(a,o,f.aim);s.addConstraint(g)}else if(f.rotation!=null){const g=this._importRotationConstraint(a,o,f.rotation);s.addConstraint(g)}}),e.scene.updateMatrixWorld(),s.setInitState(),s})}_importRollConstraint(e,t,n){const{source:r,rollAxis:s,weight:o}=n,a=t[r],l=new mP(e,a);if(s!=null&&(l.rollAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new mc(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,t,n){const{source:r,aimAxis:s,weight:o}=n,a=t[r],l=new oP(e,a);if(s!=null&&(l.aimAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new mc(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,t,n){const{source:r,weight:s}=n,o=t[r],a=new dP(e,o);if(s!=null&&(a.weight=s),this.helperRoot){const l=new mc(a);this.helperRoot.add(l)}return a}}Qi.EXTENSION_NAME="VRMC_node_constraint";/*!
 * @pixiv/three-vrm-springbone v2.1.1
 * Spring bone module for @pixiv/three-vrm
 *
 * Copyright (c) 2020-2024 pixiv Inc.
 * @pixiv/three-vrm-springbone is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */class e_{}const gc=new L,Xi=new L;class t_ extends e_{get type(){return"capsule"}constructor(e){var t,n,r;super(),this.offset=(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:new L(0,0,0),this.tail=(n=e==null?void 0:e.tail)!==null&&n!==void 0?n:new L(0,0,0),this.radius=(r=e==null?void 0:e.radius)!==null&&r!==void 0?r:0}calculateCollision(e,t,n,r){gc.copy(this.offset).applyMatrix4(e),Xi.copy(this.tail).applyMatrix4(e),Xi.sub(gc);const s=Xi.lengthSq();r.copy(t).sub(gc);const o=Xi.dot(r);o<=0||(s<=o||Xi.multiplyScalar(o/s),r.sub(Xi));const a=n+this.radius,l=r.length()-a;return r.normalize(),l}}class n_ extends e_{get type(){return"sphere"}constructor(e){var t,n;super(),this.offset=(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:new L(0,0,0),this.radius=(n=e==null?void 0:e.radius)!==null&&n!==void 0?n:0}calculateCollision(e,t,n,r){r.copy(this.offset).applyMatrix4(e),r.negate().add(t);const s=n+this.radius,o=r.length()-s;return r.normalize(),o}}const An=new L;class _P extends It{constructor(e){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new L,this._currentTail=new L,this._shape=e,this._attrPos=new at(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new at(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;const t=this._shape.radius/this.worldScale;this._currentRadius!==t&&(this._currentRadius=t,e=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),e=!0);const n=An.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(n)>1e-10&&(this._currentTail.copy(n),e=!0),e&&this._buildPosition()}_buildPosition(){An.copy(this._currentTail).sub(this._currentOffset);const e=An.length()/this._currentRadius;for(let r=0;r<=16;r++){const s=r/16*Math.PI;this._attrPos.setXYZ(r,-Math.sin(s),-Math.cos(s),0),this._attrPos.setXYZ(17+r,e+Math.sin(s),Math.cos(s),0),this._attrPos.setXYZ(34+r,-Math.sin(s),0,-Math.cos(s)),this._attrPos.setXYZ(51+r,e+Math.sin(s),0,Math.cos(s))}for(let r=0;r<32;r++){const s=r/16*Math.PI;this._attrPos.setXYZ(68+r,0,Math.sin(s),Math.cos(s)),this._attrPos.setXYZ(100+r,e,Math.sin(s),Math.cos(s))}const t=Math.atan2(An.y,Math.sqrt(An.x*An.x+An.z*An.z)),n=-Math.atan2(An.z,An.x);this.rotateZ(t),this.rotateY(n),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<34;e++){const t=(e+1)%34;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(68+e*2,34+e,34+t)}for(let e=0;e<32;e++){const t=(e+1)%32;this._attrIndex.setXY(136+e*2,68+e,68+t),this._attrIndex.setXY(200+e*2,100+e,100+t)}this._attrIndex.needsUpdate=!0}}class vP extends It{constructor(e){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new L,this._shape=e,this._attrPos=new at(new Float32Array(32*3*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new at(new Uint16Array(64*3),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;const t=this._shape.radius/this.worldScale;this._currentRadius!==t&&(this._currentRadius=t,e=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),e=!0),e&&this._buildPosition()}_buildPosition(){for(let e=0;e<32;e++){const t=e/16*Math.PI;this._attrPos.setXYZ(e,Math.cos(t),Math.sin(t),0),this._attrPos.setXYZ(32+e,0,Math.cos(t),Math.sin(t)),this._attrPos.setXYZ(64+e,Math.sin(t),0,Math.cos(t))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<32;e++){const t=(e+1)%32;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(64+e*2,32+e,32+t),this._attrIndex.setXY(128+e*2,64+e,64+t)}this._attrIndex.needsUpdate=!0}}const xP=new L;class cp extends tn{constructor(e){if(super(),this.matrixAutoUpdate=!1,this.collider=e,this.collider.shape instanceof n_)this._geometry=new vP(this.collider.shape);else if(this.collider.shape instanceof t_)this._geometry=new _P(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const t=new ur({color:16711935,depthTest:!1,depthWrite:!1});this._line=new ro(this._geometry,t),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(e){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const t=this.matrix.elements;this._geometry.worldScale=xP.set(t[0],t[1],t[2]).length(),this._geometry.update(),super.updateMatrixWorld(e)}}class yP extends It{constructor(e){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new L,this._springBone=e,this._attrPos=new at(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new at(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;const t=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==t&&(this._currentRadius=t,e=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),e=!0),e&&this._buildPosition()}_buildPosition(){for(let e=0;e<32;e++){const t=e/16*Math.PI;this._attrPos.setXYZ(e,Math.cos(t),Math.sin(t),0),this._attrPos.setXYZ(32+e,0,Math.cos(t),Math.sin(t)),this._attrPos.setXYZ(64+e,Math.sin(t),0,Math.cos(t))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<32;e++){const t=(e+1)%32;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(64+e*2,32+e,32+t),this._attrIndex.setXY(128+e*2,64+e,64+t)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}}const MP=new L;class EP extends tn{constructor(e){super(),this.matrixAutoUpdate=!1,this.springBone=e,this._geometry=new yP(this.springBone);const t=new ur({color:16776960,depthTest:!1,depthWrite:!1});this._line=new ro(this._geometry,t),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(e){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const t=this.matrix.elements;this._geometry.worldScale=MP.set(t[0],t[1],t[2]).length(),this._geometry.update(),super.updateMatrixWorld(e)}}class up extends st{constructor(e){super(),this.shape=e}}const SP=new Ie;function i_(i){return i.invert?i.invert():i.getInverse(SP.copy(i)),i}class TP{get inverse(){return this._shouldUpdateInverse&&(this._inverseCache.copy(this.matrix),i_(this._inverseCache),this._shouldUpdateInverse=!1),this._inverseCache}constructor(e){this._inverseCache=new Ie,this._shouldUpdateInverse=!0,this.matrix=e;const t={set:(n,r,s)=>(this._shouldUpdateInverse=!0,n[r]=s,!0)};this._originalElements=e.elements,e.elements=new Proxy(e.elements,t)}revert(){this.matrix.elements=this._originalElements}}const bP=new Ie,qn=new L,Rs=new L,AP=new L,Nr=new L,dp=new L,Cs=new L,hp=new Fe,Ur=new Ie,wP=new Ie;class RP{get center(){return this._center}set center(e){var t;!((t=this._center)===null||t===void 0)&&t.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=e,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new TP(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:bP}constructor(e,t,n={},r=[]){var s,o,a,l,c,u;this._currentTail=new L,this._prevTail=new L,this._boneAxis=new L,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new Ie,this._initialLocalRotation=new Fe,this._initialLocalChildPosition=new L,this.bone=e,this.bone.matrixAutoUpdate=!1,this.child=t,this.settings={hitRadius:(s=n.hitRadius)!==null&&s!==void 0?s:0,stiffness:(o=n.stiffness)!==null&&o!==void 0?o:1,gravityPower:(a=n.gravityPower)!==null&&a!==void 0?a:0,gravityDir:(c=(l=n.gravityDir)===null||l===void 0?void 0:l.clone())!==null&&c!==void 0?c:new L(0,-1,0),dragForce:(u=n.dragForce)!==null&&u!==void 0?u:.4},this.colliderGroups=r}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const e=this._getMatrixWorldToCenter(Ur);this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(e),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const e=this._getMatrixWorldToCenter(Ur);this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(e),this._prevTail.copy(this._currentTail)}update(e){if(e<=0)return;this._calcWorldSpaceBoneLength(),Nr.setFromMatrixPosition(this.bone.matrixWorld);let t=this._getMatrixWorldToCenter(Ur);dp.copy(Nr).applyMatrix4(t);const n=hp.setFromRotationMatrix(t),r=wP.copy(t).multiply(this._parentMatrixWorld),s=Rs.copy(this._boneAxis).applyMatrix4(this._initialLocalMatrix).applyMatrix4(r).sub(dp).normalize(),o=AP.copy(this.settings.gravityDir).applyQuaternion(n).normalize(),a=this._getMatrixCenterToWorld(Ur);Cs.copy(this._currentTail).add(qn.copy(this._currentTail).sub(this._prevTail).multiplyScalar(1-this.settings.dragForce)).add(qn.copy(s).multiplyScalar(this.settings.stiffness*e)).add(qn.copy(o).multiplyScalar(this.settings.gravityPower*e)).applyMatrix4(a),Cs.sub(Nr).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Nr),this._collision(Cs),t=this._getMatrixWorldToCenter(Ur),this._prevTail.copy(this._currentTail),this._currentTail.copy(qn.copy(Cs).applyMatrix4(t));const l=i_(Ur.copy(this._parentMatrixWorld).multiply(this._initialLocalMatrix)),c=hp.setFromUnitVectors(this._boneAxis,qn.copy(Cs).applyMatrix4(l).normalize());this.bone.quaternion.copy(this._initialLocalRotation).multiply(c),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(e){this.colliderGroups.forEach(t=>{t.colliders.forEach(n=>{const r=n.shape.calculateCollision(n.matrixWorld,e,this.settings.hitRadius,qn);r<0&&(e.add(qn.multiplyScalar(-r)),e.sub(Nr).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Nr))})})}_calcWorldSpaceBoneLength(){qn.setFromMatrixPosition(this.bone.matrixWorld),this.child?Rs.setFromMatrixPosition(this.child.matrixWorld):(Rs.copy(this._initialLocalChildPosition),Rs.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=qn.sub(Rs).length()}_getMatrixCenterToWorld(e){return this._center?e.copy(this._center.matrixWorld):e.identity(),e}_getMatrixWorldToCenter(e){return this._center?e.copy(this._center.userData.inverseCacheProxy.inverse):e.identity(),e}}function Qo(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(n.next(u))}catch(d){o(d)}}function l(u){try{c(n.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((n=n.apply(i,e||[])).next())})}function CP(i,e){const t=[];let n=i;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(r=>{e(r)})}function r_(i,e){i.children.forEach(t=>{e(t)||r_(t,e)})}class fp{constructor(){this._joints=new Set,this._objectSpringBonesMap=new Map}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const e=new Set;return this._joints.forEach(t=>{t.colliderGroups.forEach(n=>{e.add(n)})}),Array.from(e)}get colliders(){const e=new Set;return this.colliderGroups.forEach(t=>{t.colliders.forEach(n=>{e.add(n)})}),Array.from(e)}addJoint(e){this._joints.add(e);let t=this._objectSpringBonesMap.get(e.bone);t==null&&(t=new Set,this._objectSpringBonesMap.set(e.bone,t)),t.add(e)}addSpringBone(e){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(e)}deleteJoint(e){this._joints.delete(e),this._objectSpringBonesMap.get(e.bone).delete(e)}deleteSpringBone(e){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(e)}setInitState(){const e=new Set,t=new Set,n=new Set;for(const r of this._joints)this._processSpringBone(r,e,t,n,s=>s.setInitState())}reset(){const e=new Set,t=new Set,n=new Set;for(const r of this._joints)this._processSpringBone(r,e,t,n,s=>s.reset())}update(e){const t=new Set,n=new Set,r=new Set;for(const s of this._joints)this._processSpringBone(s,t,n,r,o=>o.update(e)),r_(s.bone,o=>{var a,l;return((l=(a=this._objectSpringBonesMap.get(o))===null||a===void 0?void 0:a.size)!==null&&l!==void 0?l:0)>0?!0:(o.updateWorldMatrix(!1,!1),!1)})}_processSpringBone(e,t,n,r,s){if(n.has(e))return;if(t.has(e))throw new Error("VRMSpringBoneManager: Circular dependency detected while updating springbones");t.add(e);const o=this._getDependencies(e);for(const a of o)CP(a,l=>{const c=this._objectSpringBonesMap.get(l);if(c)for(const u of c)this._processSpringBone(u,t,n,r,s);else r.has(l)||(l.updateWorldMatrix(!1,!1),r.add(l))});e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),s(e),r.add(e.bone),n.add(e)}_getDependencies(e){const t=new Set,n=e.bone.parent;return n&&t.add(n),e.colliderGroups.forEach(r=>{r.colliders.forEach(s=>{t.add(s)})}),t}}const PP=new Set(["1.0","1.0-beta"]);class Ji{get name(){return Ji.EXTENSION_NAME}constructor(e,t){this.parser=e,this.jointHelperRoot=t==null?void 0:t.jointHelperRoot,this.colliderHelperRoot=t==null?void 0:t.colliderHelperRoot}afterRoot(e){return Qo(this,void 0,void 0,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return Qo(this,void 0,void 0,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const n=yield this._v0Import(e);return n??null})}_v1Import(e){var t,n,r,s,o;return Qo(this,void 0,void 0,function*(){const a=e.parser.json;if(!(((t=a.extensionsUsed)===null||t===void 0?void 0:t.indexOf(Ji.EXTENSION_NAME))!==-1))return null;const c=new fp,u=yield e.parser.getDependencies("node"),d=(n=a.extensions)===null||n===void 0?void 0:n[Ji.EXTENSION_NAME];if(!d)return null;const h=d.specVersion;if(!PP.has(h))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Ji.EXTENSION_NAME} specVersion "${h}"`),null;const f=(r=d.colliders)===null||r===void 0?void 0:r.map((_,p)=>{var m,A,v,E,C;const b=u[_.node],w=_.shape;if(w.sphere)return this._importSphereCollider(b,{offset:new L().fromArray((m=w.sphere.offset)!==null&&m!==void 0?m:[0,0,0]),radius:(A=w.sphere.radius)!==null&&A!==void 0?A:0});if(w.capsule)return this._importCapsuleCollider(b,{offset:new L().fromArray((v=w.capsule.offset)!==null&&v!==void 0?v:[0,0,0]),radius:(E=w.capsule.radius)!==null&&E!==void 0?E:0,tail:new L().fromArray((C=w.capsule.tail)!==null&&C!==void 0?C:[0,0,0])});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${p} has no valid shape`)}),g=(s=d.colliderGroups)===null||s===void 0?void 0:s.map((_,p)=>{var m;return{colliders:((m=_.colliders)!==null&&m!==void 0?m:[]).map(v=>{const E=f==null?void 0:f[v];if(E==null)throw new Error(`VRMSpringBoneLoaderPlugin: The colliderGroup #${p} attempted to use a collider #${v} but not found`);return E}),name:_.name}});return(o=d.springs)===null||o===void 0||o.forEach((_,p)=>{var m;const A=_.joints,v=(m=_.colliderGroups)===null||m===void 0?void 0:m.map(b=>{const w=g==null?void 0:g[b];if(w==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${p} attempted to use a colliderGroup ${b} but not found`);return w}),E=_.center!=null?u[_.center]:void 0;let C;A.forEach(b=>{if(C){const w=C.node,O=u[w],T=b.node,M=u[T],B={hitRadius:C.hitRadius,dragForce:C.dragForce,gravityPower:C.gravityPower,stiffness:C.stiffness,gravityDir:C.gravityDir!=null?new L().fromArray(C.gravityDir):void 0},X=this._importJoint(O,M,B,v);E&&(X.center=E),c.addJoint(X)}C=b})}),c.setInitState(),c})}_v0Import(e){var t,n,r;return Qo(this,void 0,void 0,function*(){const s=e.parser.json;if(!(((t=s.extensionsUsed)===null||t===void 0?void 0:t.indexOf("VRM"))!==-1))return null;const a=(n=s.extensions)===null||n===void 0?void 0:n.VRM,l=a==null?void 0:a.secondaryAnimation;if(!l)return null;const c=l==null?void 0:l.boneGroups;if(!c)return null;const u=new fp,d=yield e.parser.getDependencies("node"),h=(r=l.colliderGroups)===null||r===void 0?void 0:r.map(f=>{var g;const _=d[f.node];return{colliders:((g=f.colliders)!==null&&g!==void 0?g:[]).map((m,A)=>{var v,E,C;const b=new L(0,0,0);return m.offset&&b.set((v=m.offset.x)!==null&&v!==void 0?v:0,(E=m.offset.y)!==null&&E!==void 0?E:0,m.offset.z?-m.offset.z:0),this._importSphereCollider(_,{offset:b,radius:(C=m.radius)!==null&&C!==void 0?C:0})})}});return c==null||c.forEach((f,g)=>{const _=f.bones;_&&_.forEach(p=>{var m,A,v,E;const C=d[p],b=new L;f.gravityDir?b.set((m=f.gravityDir.x)!==null&&m!==void 0?m:0,(A=f.gravityDir.y)!==null&&A!==void 0?A:0,(v=f.gravityDir.z)!==null&&v!==void 0?v:0):b.set(0,-1,0);const w=f.center!=null?d[f.center]:void 0,O={hitRadius:f.hitRadius,dragForce:f.dragForce,gravityPower:f.gravityPower,stiffness:f.stiffiness,gravityDir:b},T=(E=f.colliderGroups)===null||E===void 0?void 0:E.map(M=>{const B=h==null?void 0:h[M];if(B==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${g} attempted to use a colliderGroup ${M} but not found`);return B});C.traverse(M=>{var B;const X=(B=M.children[0])!==null&&B!==void 0?B:null,N=this._importJoint(M,X,O,T);w&&(N.center=w),u.addJoint(N)})})}),e.scene.updateMatrixWorld(),u.setInitState(),u})}_importJoint(e,t,n,r){const s=new RP(e,t,n,r);if(this.jointHelperRoot){const o=new EP(s);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return s}_importSphereCollider(e,t){const{offset:n,radius:r}=t,s=new n_({offset:n,radius:r}),o=new up(s);if(e.add(o),this.colliderHelperRoot){const a=new cp(o);this.colliderHelperRoot.add(a),a.renderOrder=this.colliderHelperRoot.renderOrder}return o}_importCapsuleCollider(e,t){const{offset:n,radius:r,tail:s}=t,o=new t_({offset:n,radius:r,tail:s}),a=new up(o);if(e.add(a),this.colliderHelperRoot){const l=new cp(a);this.colliderHelperRoot.add(l),l.renderOrder=this.colliderHelperRoot.renderOrder}return a}}Ji.EXTENSION_NAME="VRMC_springBone";class LP{get name(){return"VRMLoaderPlugin"}constructor(e,t){var n,r,s,o,a,l,c,u,d,h;this.parser=e;const f=t==null?void 0:t.helperRoot,g=t==null?void 0:t.autoUpdateHumanBones;this.expressionPlugin=(n=t==null?void 0:t.expressionPlugin)!==null&&n!==void 0?n:new tl(e),this.firstPersonPlugin=(r=t==null?void 0:t.firstPersonPlugin)!==null&&r!==void 0?r:new fC(e),this.humanoidPlugin=(s=t==null?void 0:t.humanoidPlugin)!==null&&s!==void 0?s:new yC(e,{helperRoot:f,autoUpdateHumanBones:g}),this.lookAtPlugin=(o=t==null?void 0:t.lookAtPlugin)!==null&&o!==void 0?o:new UC(e,{helperRoot:f}),this.metaPlugin=(a=t==null?void 0:t.metaPlugin)!==null&&a!==void 0?a:new FC(e),this.mtoonMaterialPlugin=(l=t==null?void 0:t.mtoonMaterialPlugin)!==null&&l!==void 0?l:new Kr(e),this.materialsHDREmissiveMultiplierPlugin=(c=t==null?void 0:t.materialsHDREmissiveMultiplierPlugin)!==null&&c!==void 0?c:new $s(e),this.materialsV0CompatPlugin=(u=t==null?void 0:t.materialsV0CompatPlugin)!==null&&u!==void 0?u:new KC(e),this.springBonePlugin=(d=t==null?void 0:t.springBonePlugin)!==null&&d!==void 0?d:new Ji(e,{colliderHelperRoot:f,jointHelperRoot:f}),this.nodeConstraintPlugin=(h=t==null?void 0:t.nodeConstraintPlugin)!==null&&h!==void 0?h:new Qi(e,{helperRoot:f})}beforeRoot(){return Zo(this,void 0,void 0,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(e){return Zo(this,void 0,void 0,function*(){return yield this.mtoonMaterialPlugin.loadMesh(e)})}getMaterialType(e){const t=this.mtoonMaterialPlugin.getMaterialType(e);return t??null}extendMaterialParams(e,t){return Zo(this,void 0,void 0,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(e,t),yield this.mtoonMaterialPlugin.extendMaterialParams(e,t)})}afterRoot(e){return Zo(this,void 0,void 0,function*(){yield this.metaPlugin.afterRoot(e),yield this.humanoidPlugin.afterRoot(e),yield this.expressionPlugin.afterRoot(e),yield this.lookAtPlugin.afterRoot(e),yield this.firstPersonPlugin.afterRoot(e),yield this.springBonePlugin.afterRoot(e),yield this.nodeConstraintPlugin.afterRoot(e),yield this.mtoonMaterialPlugin.afterRoot(e);const t=e.userData.vrmMeta,n=e.userData.vrmHumanoid;if(t&&n){const r=new HC({scene:e.scene,expressionManager:e.userData.vrmExpressionManager,firstPerson:e.userData.vrmFirstPerson,humanoid:n,lookAt:e.userData.vrmLookAt,meta:t,materials:e.userData.vrmMToonMaterials,springBoneManager:e.userData.vrmSpringBoneManager,nodeConstraintManager:e.userData.vrmNodeConstraintManager});e.userData.vrm=r}})}}const IP=vu({__name:"VrmContainer",setup(i){const e=nr(null);return Jp(()=>{if(!e.value)return;const t=e.value.clientWidth,n=e.value.clientHeight,r=new Ww,s=new Gt(45,t/n,.1,1e3);s.position.set(0,1,-5),s.lookAt(new L(0,0,0));const o=new Gw;o.setSize(t,n),o.setClearColor(16777215,1),console.log(e.value),e.value.appendChild(o.domElement);const a=new lC(s,o.domElement),l=new Yg(16777215,3);l.position.set(0,0,-5),r.add(l);const c=new wR;c.register(d=>new LP(d)),c.load("/MyAvatar.vrm",d=>{const h=d.userData.vrm;r.add(h.scene),console.log(h)},d=>console.log("Loading model...",100*(d.loaded/d.total),"%"),d=>console.error(d));const u=()=>{requestAnimationFrame(u),a.update(),o.render(r,s)};u()}),(t,n)=>($n(),_m("div",{ref_key:"canvas",ref:e,class:"canvas"},null,512))}}),s_=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},NP=s_(IP,[["__scopeId","data-v-aedd3671"]]),UP={};function DP(i,e){const t=NP;return $n(),_m("div",null,[yt(t)])}const OP=s_(UP,[["render",DP]]),FP={__name:"nuxt-error-page",props:{error:Object},setup(i){const t=i.error;t.stack&&t.stack.split(`
`).splice(1).map(d=>({text:d.replace("webpack:/","").replace(".vue",".js").trim(),internal:d.includes("node_modules")&&!d.includes(".cache")||d.includes("internal")||d.includes("new Promise")})).map(d=>`<span class="stack${d.internal?" internal":""}">${d.text}</span>`).join(`
`);const n=Number(t.statusCode||500),r=n===404,s=t.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=t.message||t.toString(),a=void 0,u=r?od(()=>Ud(()=>import("./Bn7fbvPM.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(d=>d.default||d)):od(()=>Ud(()=>import("./D10-U6TR.js"),__vite__mapDeps([3,1,4]),import.meta.url).then(d=>d.default||d));return(d,h)=>($n(),Dr(At(u),x_(ym({statusCode:At(n),statusMessage:At(s),description:At(o),stack:At(a)})),null,16))}},BP=FP,HP={__name:"nuxt-root",setup(i){const e=()=>null,t=Rt(),n=t.deferHydration();if(t.isHydrating){const a=t.hooks.hookOnce("app:error",n);eo().beforeEach(a)}const r=!1;rm(jm,qm()),t.hooks.callHookWith(a=>a.map(l=>l()),"vue:setup");const s=Ru();tm((a,l,c)=>{if(t.hooks.callHook("vue:error",a,l,c).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),ny(a)&&(a.fatal||a.unhandled))return t.runWithContext(()=>ey(a)),!1});const o=!1;return(a,l)=>($n(),Dr(uv,{onResolve:At(n)},{default:qp(()=>[At(s)?($n(),Dr(At(BP),{key:0,error:At(s)},null,8,["error"])):At(o)?($n(),Dr(At(e),{key:1,context:At(o)},null,8,["context"])):At(r)?($n(),Dr(av(At(r)),{key:2})):($n(),Dr(At(OP),{key:3}))]),_:1},8,["onResolve"]))}},pp=HP;let mp;{let i;mp=async function(){var o,a;if(i)return i;const n=!!((o=window.__NUXT__)!=null&&o.serverRendered||((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?N0(pp):I0(pp),r=Fx({vueApp:n});async function s(l){await r.callHook("app:error",l),r.payload.error=r.payload.error||Cu(l)}n.config.errorHandler=s;try{await Hx(r,fM)}catch(l){s(l)}try{await r.hooks.callHook("app:created",n),await r.hooks.callHook("app:beforeMount",n),n.mount($y),await r.hooks.callHook("app:mounted",n),await fu()}catch(l){s(l)}return n.config.errorHandler===s&&(n.config.errorHandler=void 0),n},i=mp().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{qp as A,Mm as B,VP as C,zP as D,XP as E,WP as F,hl as G,yv as H,xv as I,Fc as J,e0 as K,s_ as _,sg as a,Gd as b,Tm as c,vu as d,bv as e,qP as f,a0 as g,hs as h,GP as i,qa as j,Cm as k,Sa as l,Rt as m,jP as n,Jp as o,Js as p,Jx as q,nr as r,bu as s,$n as t,eo as u,_m as v,Lc as w,xm as x,kP as y,yt as z};
