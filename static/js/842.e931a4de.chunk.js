"use strict";(self.webpackChunkDins_project=self.webpackChunkDins_project||[]).push([[842],{3728:function(n,t,e){e.d(t,{cyF:function(){return o}});var r=e(9983);function o(n){return(0,r.w_)({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#3F51B5",points:"29,44 17.3,30 40.7,30"}},{tag:"path",attr:{fill:"#3F51B5",d:"M21,6H8v8h13c2.2,0,4,1.8,4,4v17h8V18C33,11.4,27.6,6,21,6z"}}]})(n)}},9349:function(n,t,e){e.d(t,{Y:function(){return c}});var r=e(9439),o=e(2791);function i(n,t){var e;return"string"===typeof n?t?(null!==(e=t[n])&&void 0!==e||(t[n]=document.querySelectorAll(n)),n=t[n]):n=document.querySelectorAll(n):n instanceof Element&&(n=[n]),Array.from(n||[])}var u={any:0,all:1};function a(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.root,o=e.margin,a=e.amount,c=void 0===a?"any":a,f=i(n),s=new WeakMap,l=function(n){n.forEach((function(n){var e=s.get(n.target);if(n.isIntersecting!==Boolean(e))if(n.isIntersecting){var r=t(n);"function"===typeof r?s.set(n.target,r):v.unobserve(n.target)}else e&&(e(n),s.delete(n.target))}))},v=new IntersectionObserver(l,{root:r,rootMargin:o,threshold:"number"===typeof c?c:u[c]});return f.forEach((function(n){return v.observe(n)})),function(){return v.disconnect()}}function c(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.root,i=t.margin,u=t.amount,c=t.once,f=void 0!==c&&c,s=(0,o.useState)(!1),l=(0,r.Z)(s,2),v=l[0],g=l[1];return(0,o.useEffect)((function(){if(!(!n.current||f&&v)){var t={root:e&&e.current||void 0,margin:i,amount:"some"===u?"any":u};return a(n.current,(function(){return g(!0),f?void 0:function(){return g(!1)}}),t)}}),[e,n,i,f]),v}}}]);
//# sourceMappingURL=842.e931a4de.chunk.js.map