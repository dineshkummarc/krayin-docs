(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{246:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return f})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return b}));n(92);const r=/#.*$/,i=/\.(md|html)$/,o=/\/$/,a=/^[a-z]+:/i;function s(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function p(t){if(u(t))return t;const e=t.match(r),n=e?e[0]:"",i=s(t);return o.test(i)?t:i+".html"+n}function f(t,e){const n=decodeURIComponent(t.hash),i=function(t){const e=t.match(r);if(e)return e[0]}(e);if(i&&n!==i)return!1;return s(t.path)===s(e)}function h(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const o=t.replace(/^\//,"").split("/");for(let t=0;t<o.length;t++){const e=o[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=s(e);for(let e=0;e<t.length;e++)if(s(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:p(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:i,themeConfig:o}=n,a=r&&o.locales&&o.locales[r]||o;if("auto"===(t.frontmatter.sidebar||a.sidebar||o.sidebar))return g(t);const s=a.sidebar||o.sidebar;if(s){const{base:n,config:r}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,s);return"auto"===r?g(t):r?r.map(t=>function t(e,n,r,i=1){if("string"==typeof e)return h(n,e,r);if(Array.isArray(e))return Object.assign(h(n,e[0],r),{title:e[1]});{const o=e.children||[];return 0===o.length&&e.path?Object.assign(h(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:o.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}}(t,i,n)):[]}return[]}function g(t){const e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function v(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},255:function(t,e,n){},267:function(t,e,n){"use strict";n(255)},276:function(t,e,n){"use strict";n.r(e);n(92);var r=n(246),i={name:"PageNav",props:["sidebarItems"],computed:{prev(){return a(o.PREV,this)},next(){return a(o.NEXT,this)}}};const o={NEXT:{resolveLink:function(t,e){return s(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return s(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function a(t,{$themeConfig:e,$page:n,$route:i,$site:o,sidebarItems:a}){var s;const{resolveLink:u,getThemeLinkConfig:c,getPageLinkConfig:l}=t,p=null!==(s=l(n))&&void 0!==s?s:c(e);return!1===p?null:"string"==typeof p?Object(r.k)(o.pages,p,i.path):u(n,a)}function s(t,e,n){const r=[];!function t(e,n){for(let r=0;r<e.length;r++){const i=e[r];n.push(i),"group"===i.type&&t(i.children||[],n)}}(e,r);for(let e=0;e<r.length;e++){const i=r[e],o="page"===i.type&&i.path===decodeURIComponent(t.path),a="group"===i.type&&i.title===decodeURIComponent(t.title);if(o||a)return r[e+n]||null}return null}var u=i,c=(n(267),n(10)),l=Object(c.a)(u,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.default=l.exports}}]);