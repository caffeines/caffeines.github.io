(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},8045:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}var u,s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(7294)),l=(u=n(5443))&&u.__esModule?u:{default:u},f=n(5809),d=n(7190);function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){for(var e=arguments,n=function(n){var r=null!=e[n]?e[n]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),o.forEach((function(e){m(t,e,r[e])}))},r=1;r<arguments.length;r++)n(r);return t}var y=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var h=new Map([["default",function(t){var e=t.root,n=t.src,r=t.width,o=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(t){var e=t.root,n=t.src,r=t.width,o=t.quality,i=new URL("".concat(e).concat(E(n))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(t){var e=t.root,n=t.src,r=t.width,o=t.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(e).concat(i).concat(E(n))}],["akamai",function(t){var e=t.root,n=t.src,r=t.width;return"".concat(e).concat(E(n),"?imwidth=").concat(r)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(t){return void 0!==t.default}var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://caffeines.github.io/",loader:"imgix"}||f.imageConfigDefault,w=b.deviceSizes,_=b.imageSizes,A=b.loader,j=b.path,S=(b.domains,a(w).concat(a(_)));function O(t){var e=t.src,n=t.unoptimized,r=t.layout,o=t.width,i=t.quality,c=t.sizes,u=t.loader;if(n)return{src:e,srcSet:void 0,sizes:void 0};var s=function(t,e,n){if(n&&("fill"===e||"responsive"===e)){for(var r,o=/(^|\s)(1?\d?\d)vw/g,i=[];r=o.exec(n);r)i.push(parseInt(r[2]));if(i.length){var c,u=.01*(c=Math).min.apply(c,a(i));return{widths:S.filter((function(t){return t>=w[0]*u})),kind:"w"}}return{widths:S,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:w,kind:"w"}:{widths:a(new Set([t,2*t].map((function(t){return S.find((function(e){return e>=t}))||S[S.length-1]})))),kind:"x"}}(o,r,c),l=s.widths,f=s.kind,d=l.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:l.map((function(t,n){return"".concat(u({src:e,quality:i,width:t})," ").concat("w"===f?t:n+1).concat(f)})).join(", "),src:u({src:e,quality:i,width:l[d]})}}function x(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function I(t){var e=h.get(A);if(e)return e(p({root:j},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(A))}function E(t){return"/"===t[0]?t.slice(1):t}w.sort((function(t,e){return t-e})),S.sort((function(t,e){return t-e}))},7190:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootRef,n=t.rootMargin,r=t.disabled||!c,s=i.useRef(),l=o(i.useState(!1),2),f=l[0],d=l[1],m=o(i.useState(e?e.current:null),2),p=m[0],y=m[1],v=i.useCallback((function(t){s.current&&(s.current(),s.current=void 0),r||f||t&&t.tagName&&(s.current=function(t,e,n){var r=function(t){var e=t.rootMargin||"",n=u.get(e);if(n)return n;var r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=r.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return u.set(e,n={id:e,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(t,e),i.observe(t),function(){a.delete(t),i.unobserve(t),0===a.size&&(i.disconnect(),u.delete(o))}}(t,(function(t){return t&&d(t)}),{root:p,rootMargin:n}))}),[r,p,n,f]);return i.useEffect((function(){if(!c&&!f){var t=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(t)}}}),[f]),i.useEffect((function(){e&&y(e.current)}),[e]),[v,f]};var i=n(7294),a=n(9311),c="undefined"!==typeof IntersectionObserver;var u=new Map},3678:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var r=n(5893),o=n(9008),i=(n(5675),n(214)),a=n.n(i);function c(){return(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Sadat"}),(0,r.jsx)("meta",{name:"description",content:"caffeines"}),(0,r.jsx)("meta",{name:"name",content:"sadat"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("main",{className:a().main,children:(0,r.jsxs)("h1",{className:a().title,children:["Welcome to ",(0,r.jsx)("a",{href:"https://www.linkedin.com/in/sadatsayem/",target:"_blank",rel:"noreferrer",children:"Sadat's "})," profile"]})})]})}},214:function(t){t.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(t,e,n){t.exports=n(5443)},5675:function(t,e,n){n(8045)}},function(t){t.O(0,[774,888,179],(function(){return e=8581,t(t.s=e);var e}));var e=t.O();_N_E=e}]);