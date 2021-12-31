var S=Object.defineProperty,V=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var h=(l,e,t)=>e in l?S(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,f=(l,e)=>{for(var t in e||(e={}))N.call(e,t)&&h(l,t,e[t]);if(w)for(var t of w(e))j.call(e,t)&&h(l,t,e[t]);return l},x=(l,e)=>V(l,I(e));import{Z as O,p as k,a as R,J as g,u as M,v as Z,B as q,n as _,G as A,W as $,ag as z,ac as D}from"./framework.6504b2a8.js";import{r as y,l as m,P as F,c as B}from"./popup-manager.2621cba3.js";import{g as G,v as H,T as J}from"./framework.39f5a22f.js";import{i as K}from"./index.7ac00024.js";function W(l){let e;const t=k(!1),o=R(x(f({},l),{originalPosition:"",originalOverflow:"",visible:!1}));function a(n){o.text=n}function r(){const n=o.parent;if(!n.vLoadingAddClassList){let s=n.getAttribute("loading-number");s=Number.parseInt(s)-1,s?n.setAttribute("loading-number",s.toString()):(y(n,"el-loading-parent--relative"),n.removeAttribute("loading-number")),y(n,"el-loading-parent--hidden")}d()}function d(){var n,s;(s=(n=u.$el)==null?void 0:n.parentNode)==null||s.removeChild(u.$el)}function i(){var n;if(l.beforeClose&&!l.beforeClose())return;const s=o.parent;s.vLoadingAddClassList=void 0,t.value=!0,clearTimeout(e),e=window.setTimeout(()=>{t.value&&(t.value=!1,r())},400),o.visible=!1,(n=l.closed)==null||n.call(l)}function b(){!t.value||(t.value=!1,r())}const u=G({name:"ElLoading",setup(){return()=>{const n=o.spinner||o.svg,s=g("svg",f({class:"circular",viewBox:o.svgViewBox?o.svgViewBox:"25 25 50 50"},n?{innerHTML:n}:{}),[g("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),v=o.text?g("p",{class:"el-loading-text"},[o.text]):void 0;return g(J,{name:"el-loading-fade",onAfterLeave:b},{default:M(()=>[Z(q("div",{style:{backgroundColor:o.background||""},class:["el-loading-mask",o.customClass,o.fullscreen?"is-fullscreen":""]},[g("div",{class:"el-loading-spinner"},[s,v])]),[[H,o.visible]])])})}}}).mount(document.createElement("div"));return x(f({},O(o)),{setText:a,remvoeElLoadingChild:d,close:i,handleAfterLeave:b,vm:u,get $el(){return u.$el}})}let p;const C=function(l={}){if(!K)return;const e=Y(l);e.fullscreen&&p&&(p.remvoeElLoadingChild(),p.close());const t=W(x(f({},e),{closed:()=>{var a;(a=e.closed)==null||a.call(e),e.fullscreen&&(p=void 0)}}));Q(e,e.parent,t),E(e,e.parent,t),e.parent.vLoadingAddClassList=()=>E(e,e.parent,t);let o=e.parent.getAttribute("loading-number");return o?o=`${Number.parseInt(o)+1}`:o="1",e.parent.setAttribute("loading-number",o),e.parent.appendChild(t.$el),_(()=>t.visible.value=e.visible),e.fullscreen&&(p=t),t},Y=l=>{var e,t,o,a;let r;return A(l.target)?r=(e=document.querySelector(l.target))!=null?e:document.body:r=l.target||document.body,{parent:r===document.body||l.body?document.body:r,background:l.background||"",svg:l.svg||"",svgViewBox:l.svgViewBox||"",spinner:l.spinner||!1,text:l.text||"",fullscreen:r===document.body&&((t=l.fullscreen)!=null?t:!0),lock:(o=l.lock)!=null?o:!1,customClass:l.customClass||"",visible:(a=l.visible)!=null?a:!0,target:r}},Q=async(l,e,t)=>{const o={};if(l.fullscreen)t.originalPosition.value=m(document.body,"position"),t.originalOverflow.value=m(document.body,"overflow"),o.zIndex=F.nextZIndex();else if(l.parent===document.body){t.originalPosition.value=m(document.body,"position"),await _();for(const a of["top","left"]){const r=a==="top"?"scrollTop":"scrollLeft";o[a]=`${l.target.getBoundingClientRect()[a]+document.body[r]+document.documentElement[r]-parseInt(m(document.body,`margin-${a}`),10)}px`}for(const a of["height","width"])o[a]=`${l.target.getBoundingClientRect()[a]}px`}else t.originalPosition.value=m(e,"position");for(const[a,r]of Object.entries(o))t.$el.style[a]=r},E=(l,e,t)=>{t.originalPosition.value!=="absolute"&&t.originalPosition.value!=="fixed"?B(e,"el-loading-parent--relative"):y(e,"el-loading-parent--relative"),l.fullscreen&&l.lock?B(e,"el-loading-parent--hidden"):y(e,"el-loading-parent--hidden")},L=Symbol("ElLoading"),P=(l,e)=>{var t,o,a,r;const d=e.instance,i=s=>$(e.value)?e.value[s]:void 0,b=s=>{const v=A(s)&&(d==null?void 0:d[s])||s;return v&&k(v)},c=s=>b(i(s)||l.getAttribute(`element-loading-${z(s)}`)),u=(t=i("fullscreen"))!=null?t:e.modifiers.fullscreen,n={text:c("text"),svg:c("svg"),svgViewBox:c("svgViewBox"),spinner:c("spinner"),background:c("background"),customClass:c("customClass"),fullscreen:u,target:(o=i("target"))!=null?o:u?void 0:l,body:(a=i("body"))!=null?a:e.modifiers.body,lock:(r=i("lock"))!=null?r:e.modifiers.lock};l[L]={options:n,instance:C(n)}},U=(l,e)=>{for(const t of Object.keys(e))D(e[t])&&(e[t].value=l[t])},T={mounted(l,e){e.value&&P(l,e)},updated(l,e){const t=l[L];e.oldValue!==e.value&&(e.value&&!e.oldValue?P(l,e):e.value&&e.oldValue?$(e.value)&&U(e.value,t.options):t==null||t.instance.close())},unmounted(l){var e;(e=l[L])==null||e.instance.close()}},ae={install(l){l.directive("loading",T),l.config.globalProperties.$loading=C},directive:T,service:C};export{ae as E};