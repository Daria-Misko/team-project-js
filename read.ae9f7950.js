function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}const t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu");var i={};e(i,"disableBodyScroll",(function(){return w})),e(i,"clearAllBodyScrollLocks",(function(){return h})),e(i,"enableBodyScroll",(function(){return b}));var r=!1;if("undefined"!=typeof window){var d={get passive(){r=!0}};window.addEventListener("testPassive",null,d),window.removeEventListener("testPassive",null,d)}var l="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),c=[],u=!1,a=-1,s=void 0,v=void 0,m=void 0,y=function(e){return c.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},f=function(e){var t=e||window.event;return!!y(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},p=function(){void 0!==m&&(document.body.style.paddingRight=m,m=void 0),void 0!==s&&(document.body.style.overflow=s,s=void 0)},g=function(){if(void 0!==v){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=v.position,document.body.style.top=v.top,document.body.style.left=v.left,window.scrollTo(t,e),v=void 0}},w=function(e,t){if(e){if(!c.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};c=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(c),[o]),l?window.requestAnimationFrame((function(){if(void 0===v){v={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===m){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);m=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===s&&(s=document.body.style.overflow,document.body.style.overflow="hidden")}(t),l&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(a=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-a;!y(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?f(e):e.stopPropagation())}(t,e)},u||(document.addEventListener("touchmove",f,r?{passive:!1}:void 0),u=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},h=function(){l&&(c.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),u&&(document.removeEventListener("touchmove",f,r?{passive:!1}:void 0),u=!1),a=-1),l?g():p(),c=[]},b=function(e){e?(c=c.filter((function(t){return t.targetElement!==e})),l&&(e.ontouchstart=null,e.ontouchmove=null,u&&0===c.length&&(document.removeEventListener("touchmove",f,r?{passive:!1}:void 0),u=!1)),l?g():p()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};const E=()=>{const e="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open");i[e?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",E),n.addEventListener("click",E),window.matchMedia("(min-width: 768px)").addEventListener("change",(e=>{e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),i.enableBodyScroll(document.body))}));
//# sourceMappingURL=read.ae9f7950.js.map
