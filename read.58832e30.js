!function(){function e(e){var n=[];return e in localStorage&&null!==localStorage[e]&&(n=JSON.parse(localStorage[e])),n}function n(e,n){localStorage[e]=JSON.stringify(n)}function a(a,t){var r=e(a);r.push(t),n(a,r)}function t(a,t){n(a,e(a).filter((function(e){return!t(e)})))}function r(n,a){return e(n).some(a)}var c="favorite-key",d="read-key";function i(e){return e.toLocaleDateString("en-GB")}function s(e){"response"in e&&"docs"in e.response&&(e=e.response.docs);var n=(e=e||[]).map((function(e){var n=e.headline,s=e.web_url,o=e.pub_date,l=e.lead_paragraph,u=e.news_desk,_=(e.bigMobileImg,e.smallMobileImg,e.smallSquareImg,e.bigSquareImg),v=l.length>80?l.slice(0,80)+"...":l,f=r(c,(function(e){return e.web_url==s})),p=r(d,(function(e){return e.web_url==s})),m=i(new Date(o)),h=_||"https://as1.ftcdn.net/v2/jpg/00/77/50/78/500_F_77507884_B00iVspJkgxbh6o1JuKza9qYpioCZ9ja.jpg",b=document.createElement("li");b.classList.add("card__item"),b.innerHTML='<div class="card__wrapper">\n    <div>\n      <div class="card-image__wrapper">\n        <img\n          class="card__image"\n          src='.concat(h,'\n          alt="news"\n          width="288"\n          height="395"\n          loading=\'lazy\'\n        />\n        <span class="card-jobsearching"> ').concat(u,' </span>\n        <span class="card-already__read ').concat(p?"":"is-hidden",'">Already read</span>\n        <button class="card__btn btn-add ').concat(f?"is-hidden":"",'" type="button" \n        data-url="').concat(s,'">Add to favorite</button>\n        <button class="card__btn btn-remove ').concat(f?"":"is-hidden",'" type="button" data-url="').concat(s,'">Remove from favorite</button>\n      </div>\n\n      <div class="card__text">\n      <h2 class="card__title">').concat(n,'</h2>\n      <p class="card__article">').concat(v,'</p>\n      </div>\n      </div>\n\n      <div class="card__info">\n        <span class="card__info--date">').concat(m,'</span>\n        <a class="card__info--readmore" href="').concat(s,'" target="_blank">\n          Read more\n        </a>\n      </div>\n    </div>');var g=b.querySelector("button.card__btn.btn-add"),y=b.querySelector("button.card__btn.btn-remove"),L=b.querySelector(".card-already__read"),w=b.querySelector("a.card__info--readmore");return g.addEventListener("click",(function(){a(c,e),g.classList.add("is-hidden"),y.classList.remove("is-hidden")})),y.addEventListener("click",(function(){t(c,(function(e){var n=e.web_url;return s===n})),y.classList.add("is-hidden"),g.classList.remove("is-hidden")})),w.addEventListener("click",(function(){t(d,(function(e){var n=e.web_url;return s===n})),e.readDate=i(new Date),a(d,e),L.classList.remove("is-hidden")})),b})),s=document.createDocumentFragment();return n.forEach((function(e){return s.appendChild(e)})),s}function o(e){e.target.nextElementSibling.classList.toggle("hidden"),e.target.classList.toggle("hidden")}!function(){var n,a=document.querySelector(".read-news__container"),t=e("read-key"),r=(n="readDate",t.reduce((function(e,a){var t=a[n];return e[t]||(e[t]=[]),e[t].push(a),e}),{})),c=!0,d=!1,i=void 0;try{for(var l,u=Object.keys(r)[Symbol.iterator]();!(c=(l=u.next()).done);c=!0){var _=l.value,v=document.createElement("div");v.classList.add("read-news__header","hidden"),v.innerHTML=_,v.addEventListener("click",o),a.appendChild(v);var f=document.createElement("div");f.classList.add("read-news__items","hidden"),f.appendChild(s(r[_])),a.appendChild(f)}}catch(e){d=!0,i=e}finally{try{c||null==u.return||u.return()}finally{if(d)throw i}}}()}();
//# sourceMappingURL=read.58832e30.js.map