import{r as n,j as e,Y as u}from"./index-RuNb00TO.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=(...t)=>t.filter((a,r,l)=>!!a&&a.trim()!==""&&l.indexOf(a)===r).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=n.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:r=2,absoluteStrokeWidth:l,className:s="",children:o,iconNode:d,...p},x)=>n.createElement("svg",{ref:x,...f,width:a,height:a,stroke:t,strokeWidth:l?Number(r)*24/Number(a):r,className:c("lucide",s),...p},[...d.map(([m,h])=>n.createElement(m,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=(t,a)=>{const r=n.forwardRef(({className:l,...s},o)=>n.createElement(b,{ref:o,iconNode:a,className:c(`lucide-${g(t)}`,l),...s}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=i("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=i("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=i("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=i("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=i("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),N=[{to:"/",label:"Главная",icon:k,end:!0},{to:"/plan",label:"План",icon:w},{to:"/topics",label:"Темы",icon:y},{to:"/duels",label:"Дуэли",icon:j},{to:"/profile",label:"Профиль",icon:v}];function M(){return e.jsxs("nav",{"aria-label":"Основная навигация",className:"no-print fixed inset-x-0 bottom-0 z-30 border-t border-line bg-[#150926]/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:inset-y-0 lg:right-auto lg:w-60 lg:border-t-0 lg:border-r lg:pb-0",children:[e.jsx("div",{className:"hidden px-6 pt-8 pb-10 lg:block",children:e.jsx("span",{className:"font-display text-2xl font-bold tracking-tight",children:"Эврика"})}),e.jsx("ul",{className:"mx-auto flex max-w-md justify-around lg:mx-0 lg:max-w-none lg:flex-col lg:gap-1 lg:px-3",children:N.map(({to:t,label:a,icon:r,end:l})=>e.jsx("li",{children:e.jsx(u,{to:t,end:l,className:({isActive:s})=>`flex min-h-16 min-w-14 flex-col items-center justify-center gap-1 rounded-2xl px-3 text-xs font-medium transition-colors lg:min-h-12 lg:flex-row lg:justify-start lg:gap-3 lg:px-4 lg:text-[15px] ${s?"text-ink lg:bg-violet/15":"text-faint hover:text-muted"}`,children:({isActive:s})=>e.jsxs(e.Fragment,{children:[e.jsx("span",{className:`grid size-9 place-items-center rounded-full transition-shadow ${s?"bg-selected shadow-glow-strong":""}`,children:e.jsx(r,{size:20,"aria-hidden":"true"})}),e.jsx("span",{children:a})]})})},t))})]})}function C({children:t,nav:a=!0,wide:r=!1,accent:l=!1}){return e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#main",className:"sr-only z-50 rounded-full bg-cta px-4 py-2 font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3",children:"К содержанию"}),l&&e.jsx("div",{className:"h-1.5 w-full bg-lime shadow-[0_0_24px_rgb(163_230_53/0.6)]","aria-hidden":"true"}),e.jsx("div",{className:a?"lg:pl-60":"",children:e.jsx("main",{id:"main",className:`mx-auto w-full px-4 sm:px-6 ${r?"max-w-5xl":"max-w-2xl"} ${a?"pb-32 lg:pb-16":"pb-12"}`,children:t})}),a&&e.jsx(M,{})]})}function $({children:t}){return e.jsx("main",{id:"main",className:"relative grid min-h-dvh place-items-center overflow-hidden px-6 py-12",style:{background:"radial-gradient(120% 80% at 50% 30%, #3a1766 0%, #1a0b2e 45%, #07030d 100%)"},children:t})}export{y as B,$ as I,C as P,w as R,j as T,i as c};
