import{r as d,R as b,j as m}from"./app-BPtb4pdB.js";const _="https://app.cal.com/embed/embed.js";function x(c=_){(function(i,o,u){let s=function(e,r){e.q.push(r)},l=i.document;i.Cal=i.Cal||function(){let e=i.Cal,r=arguments;if(e.loaded||(e.ns={},e.q=e.q||[],l.head.appendChild(l.createElement("script")).src=o,e.loaded=!0),r[0]===u){const t=function(){s(t,arguments)},n=r[1];t.q=t.q||[],typeof n=="string"?(e.ns[n]=e.ns[n]||t,s(e.ns[n],r),s(e,["initNamespace",n])):s(e,r);return}s(e,r)}})(window,c,"init");/*!  Copying ends here. */return window.Cal}x.toString();function v(c){const[i,o]=d.useState();return d.useEffect(()=>{o(()=>x(c))},[]),i}var y={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h;function E(){if(h)return p;h=1;var c=b,i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,s=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function e(r,t,n){var a,f={},g=null,w=null;n!==void 0&&(g=""+n),t.key!==void 0&&(g=""+t.key),t.ref!==void 0&&(w=t.ref);for(a in t)u.call(t,a)&&!l.hasOwnProperty(a)&&(f[a]=t[a]);if(r&&r.defaultProps)for(a in t=r.defaultProps,t)f[a]===void 0&&(f[a]=t[a]);return{$$typeof:i,type:r,key:g,ref:w,props:f,_owner:s.current}}return p.Fragment=o,p.jsx=e,p.jsxs=e,p}y.exports=E();var j=y.exports;const k=j.jsx,R=function(c){const{calLink:i,calOrigin:o,namespace:u="",config:s,initConfig:l={},embedJsUrl:e,...r}=c;if(!i)throw new Error("calLink is required");const t=d.useRef(!1),n=v(e),a=d.useRef(null);return d.useEffect(()=>{if(!n||t.current||!a.current)return;t.current=!0;const f=a.current;u?(n("init",u,{...l,origin:o}),n.ns[u]("inline",{elementOrSelector:f,calLink:i,config:s})):(n("init",{...l,origin:o}),n("inline",{elementOrSelector:f,calLink:i,config:s}))},[n,i,s,u,o,l]),n?k("div",{ref:a,...r}):null},O=R;function N(c){const i=typeof c=="string"?{embedJsUrl:c}:c??{},{namespace:o="",embedJsUrl:u}=i;return new Promise(function s(l){const e=x(u);e("init",o);const r=o?e.ns[o]:e;if(!r){setTimeout(()=>{s(l)},50);return}l(r)})}function C(){return d.useEffect(()=>{(async function(){(await N({namespace:"demo"}))("ui",{theme:"light",styles:{branding:{brandColor:"#000000"}},hideEventTypeDetails:!1,layout:"week_view"})})()},[]),m.jsxs("div",{className:"w-full pt-20 pb-52 text-center px-44",children:[m.jsxs("h1",{className:"max-w-lg sm:max-w-2xl mx-auto mb-10 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-5xl sm:leading-[1.05]",children:["Solo",m.jsx("span",{className:"bg-gradient-to-r from-[#956AFF] via-[#D76D77] to-[#fc5713] bg-clip-text text-transparent",children:" 15 minuti "}),"per scoprire come migliorare le tue operazioni."]}),m.jsx("div",{className:"rounded-xl p-2 shadow-sm ring-1 ring-black/5",children:m.jsx("div",{className:"border rounded-lg",children:m.jsx(O,{namespace:"demo",calLink:"giacomo-barilari/demo",style:{width:"100%",height:"100%",overflow:"scroll"},config:{layout:"week_view",theme:"light"},className:"rounded-lg"})})})]})}export{C as default};
