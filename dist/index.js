!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.hyperactiv=t()}(this,function(){"use strict";const e=[],t=new WeakMap,n=function(e){return e&&"object"==typeof e},o=Array.isArray,r=function(e,t,n){Object.defineProperty(e,"__key",{value:t,enumerable:!1,configurable:!0}),Object.defineProperty(e,"__parent",{value:n,enumerable:!1,configurable:!0})},u={timeout:null,queue:new Set,process(){for(const e of u.queue)e();u.queue.clear(),u.timeout=null},enqueue(e){null===u.timeout&&(u.timeout=setTimeout(u.process,0)),u.queue.add(e)}};return{observe:function c(i,s={}){const{props:f,ignore:p,batch:a,deep:d,handler:l,bind:y}=s;if(i.__observed)return i;t.set(i,new Map),d&&Object.entries(i).forEach(function([e,t]){n(t)&&(i[e]=c(t,s),l&&r(i[e],e,i))});const b=new Proxy(i,{get(n,o){if("__observed"===o)return!0;if((!f||f.includes(o))&&(!p||!p.includes(o))&&e.length){const n=t.get(i);n.has(o)||n.set(o,new Set),n.get(o).add(e[0])}return i[o]},set(y,_,h){const m=t.get(i);if(f&&!f.includes(_)||p&&p.includes(_))return i[_]=h,!0;if((!o(i)||"length"!==_)&&i[_]===h)return!0;if(i[_]=d&&n(h)?c(h,s):h,l&&d&&n(h)&&r(i[_],_,i),l){const e=[_];let t=i;for(;t.__key&&t.__parent;)e.unshift(t.__key),t=t.__parent;l(e,h,b)}if(m.has(_)){const t=m.get(_);for(const n of t)n.__disposed?t.delete(n):n!==e[0]&&(a?u.enqueue(n):n())}return!0}});y&&[...Object.getOwnPropertyNames(i),...Object.getOwnPropertyNames(Object.getPrototypeOf(i))].filter(e=>"constructor"!==e&&"function"==typeof i[e]).forEach(e=>i[e]=i[e].bind(b));return b},computed:function(t,{autoRun:n=!0,callback:o,bind:r}={}){const u=new Proxy(t,{apply(t,n,c){const i=function(i){e.unshift(o||u);const s=i?i():t.apply(r||n,c);return e.shift(),s};return c.push({computeAsync:function(e){return i(e)}}),i()}});return n&&u(),u},dispose:function(e){return e.__disposed=!0}}});
//# sourceMappingURL=index.js.map
