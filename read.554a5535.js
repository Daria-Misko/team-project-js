!function(){function e(e){var n=[];return e in localStorage&&null!==localStorage[e]&&(n=JSON.parse(localStorage[e])),n}function n(e,n){localStorage[e]=JSON.stringify(n)}function t(t,a){var r=e(t);r.push(a),n(t,r)}function a(t,a){n(t,e(t).filter((function(e){return!a(e)})))}function r(n,t){return e(n).some(t)}var c="favorite-key",i="read-key";function d(e){return e.toLocaleDateString("en-GB")}function s(e){"response"in e&&"docs"in e.response&&(e=e.response.docs);var n=(e=e||[]).map((function(e){var n=e.headline,s=e.web_url,o=e.pub_date,l=e.lead_paragraph,u=e.news_desk,_=(e.bigMobileImg,e.smallMobileImg,e.smallSquareImg,e.bigSquareImg),m=l.length>80?l.slice(0,80)+"...":l,v=r(c,(function(e){return e.web_url==s})),p=r(i,(function(e){return e.web_url==s})),f=d(new Date(o)),h=_?"https://www.nytimes.com/".concat(_):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9eXq6h_EHL7Iu-tVrAWQPJ4ozAiL3y5NY2m5jmcw&s",b=document.createElement("li");b.classList.add("card__item"),b.innerHTML='<div class="card__wrapper">\n      <div class="card-image__wrapper">\n        <img\n          class="card__image"\n          src='.concat(h,'\n          alt="news"\n          width="288"\n          height="395"\n          loading=\'lazy\'\n        />\n        <span class="card-jobsearching"> ').concat(u,' </span>\n        <span class="card-already__read ').concat(p?"":"is-hidden",'">Already read</span>\n        <button class="card__btn btn-add ').concat(v?"is-hidden":"",'" type="button" \n        data-url="').concat(s,'">Add to favorite</button>\n        <button class="card__btn btn-remove ').concat(v?"":"is-hidden",'" type="button" data-url="').concat(s,'">Remove from favorite</button>\n      </div>\n\n      <h2 class="card__title">').concat(n,'</h2>\n      <p class="card__article">').concat(m,'</p>\n\n      <div class="card__info">\n        <span class="card__info--date">').concat(f,'</span>\n        <a class="card__info--readmore" href="').concat(s,'" target="_blank">\n          Read more\n        </a>\n      </div>\n    </div>');var g=b.querySelector("button.card__btn.btn-add"),y=b.querySelector("button.card__btn.btn-remove"),w=b.querySelector(".card-already__read"),L=b.querySelector("a.card__info--readmore");return g.addEventListener("click",(function(){t(c,e),g.classList.add("is-hidden"),y.classList.remove("is-hidden")})),y.addEventListener("click",(function(){a(c,(function(e){var n=e.web_url;return s===n})),y.classList.add("is-hidden"),g.classList.remove("is-hidden")})),L.addEventListener("click",(function(){a(i,(function(e){var n=e.web_url;return s===n})),e.readDate=d(new Date),t(i,e),w.classList.remove("is-hidden")})),b})),s=document.createElement("li");s.classList.add("card__item"),s.innerHTML='<div class="card__item--weather"></div>';var o=window.innerWidth;o>=768&&o<1280?n.splice(1,0,s):o>=1280?n.splice(2,0,s):n.splice(0,0,s);var l=document.createDocumentFragment();return n.forEach((function(e){return l.appendChild(e)})),l}function o(e){e.target.nextElementSibling.classList.toggle("hidden"),e.target.classList.toggle("hidden")}!function(){var n,t=document.querySelector(".read-news__container"),a=e("read-key"),r=(n="readDate",a.reduce((function(e,t){var a=t[n];return e[a]||(e[a]=[]),e[a].push(t),e}),{})),c=!0,i=!1,d=void 0;try{for(var l,u=Object.keys(r)[Symbol.iterator]();!(c=(l=u.next()).done);c=!0){var _=l.value,m=document.createElement("div");m.classList.add("read-news__header","hidden"),m.innerHTML=_,m.addEventListener("click",o),t.appendChild(m);var v=document.createElement("div");v.classList.add("read-news__items","hidden"),v.appendChild(s(r[_])),t.appendChild(v)}}catch(e){i=!0,d=e}finally{try{c||null==u.return||u.return()}finally{if(i)throw d}}}()}();
//# sourceMappingURL=read.554a5535.js.map
