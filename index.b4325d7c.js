!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var s=i("bpxeT"),r=i("2TvXO"),c=(s=i("bpxeT"),r=i("2TvXO"),"api-key=3HHtrx1v9QZUfdmskYGXIqIWRgxdBdcv"),a="https://api.nytimes.com/svc";"https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?".concat(c);function u(){return l.apply(this,arguments)}function l(){return(l=e(s)(e(r).mark((function t(){var n,o,i;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/news/v3/content/section-list.json?").concat(c));case 2:return n=e.sent,e.next=5,n.json();case 5:return o=e.sent,i=o.results,e.abrupt("return",i);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var d=document.querySelector(".buttons-list"),p=document.querySelector("#btn-open-category"),m=document.querySelector(".category__menu");function f(){return(f=e(s)(e(r).mark((function t(n){var o,i,s,c;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u();case 3:o=e.sent,i=o,window.matchMedia("(max-width: 767px)").matches&&(d.innerHTML="",n.innerHTML=h(i)),window.matchMedia("(min-width: 768px) and (max-width: 1279px)").matches&&(d.innerHTML="",s=b(i,4),n.innerHTML=h(s[1]),d.insertAdjacentHTML("beforeend",v(s[0]))),window.matchMedia("(min-width: 1280px)").matches&&(d.innerHTML="",c=b(i,6),n.innerHTML=h(c[1]),d.insertAdjacentHTML("beforeend",v(c[0]))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(error);case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function g(e){if(m.classList.contains("is-open-categories"))if(m.classList.remove("is-open-categories"),e.length<18)p.firstChild.textContent=e;else{var t="".concat(e.slice(0,15),"...");p.firstChild.textContent=t}else window.matchMedia("(max-width: 767px)").matches&&(p.firstChild.textContent="Categories"),window.matchMedia("(min-width: 768px)").matches&&(p.firstChild.textContent="Others")}function h(e){return e.map((function(e){var t=e.section,n=e.display_name;return"<li class='category__item'>\n        <button class=\"btn-item\"\n            data-btn=".concat(w(t),">").concat(n,"</button>\n            </li>")})).join(" ")}function v(e){return e.map((function(e){var t=e.section,n=e.display_name;return"<li class='buttons-list__item'>\n        <button class='buttons-list__button' data-btn=".concat(w(t),">\n        ").concat(n,"</button>\n        </li>")})).join(" ")}function b(e,t){var n=[];return n.push(e.slice(0,t)),n.push(e.slice(t)),n}function w(e){return encodeURIComponent(e)}var x=document.querySelector(".buttons-list"),y=document.querySelector("#btn-open-category"),L=document.querySelector(".category__menu"),_=document.querySelector(".arrow-icon");!function(e){f.apply(this,arguments)}(L),g(),x.addEventListener("click",(function(e){var t=e.target.dataset.btn;console.log(t)})),y.addEventListener("click",(function(){var e="true"===y.getAttribute("aria-expanded")||!1;y.setAttribute("aria-expanded",!e),L.classList.toggle("is-open-categories"),L.classList.contains("is-open-categories")&&_.classList.add("open-categories");L.classList.contains("is-open-categories")||(_.classList.remove("open-categories"),y.blur())})),L.addEventListener("click",(function(e){var t=e.target.dataset.btn,n=e.target.innerText;console.log(t),g(decodeURIComponent(n)),L.classList.remove("is-open-categories"),_.classList.add("open-categories"),y.focus()})),window.onclick=function(e){e.target.matches(".category__btn")||e.target.matches(".btn-item")||L.classList.contains("is-open-categories")&&L.classList.remove("is-open-categories"),e.target.matches(".category__btn")||_.classList.contains("open-categories")&&_.classList.remove("open-categories")}}();
//# sourceMappingURL=index.b4325d7c.js.map