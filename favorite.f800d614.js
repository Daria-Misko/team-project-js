!function(){function e(e){var n=[];return e in localStorage&&null!==localStorage[e]&&(n=JSON.parse(localStorage[e])),n}function n(e,n){localStorage[e]=JSON.stringify(n)}function a(a,t){var r=e(a);r.push(t),n(a,r)}function t(a,t){n(a,e(a).filter((function(e){return!t(e)})))}function r(n,a){return e(n).some(a)}var c="favorite-key",d="read-key";function i(e){return e.toLocaleDateString("en-GB")}function s(e){"response"in e&&"docs"in e.response&&(e=e.response.docs);var n=(e=e||[]).map((function(e){var n=e.headline,s=e.web_url,o=e.pub_date,l=e.lead_paragraph,u=e.news_desk,_=(e.bigMobileImg,e.smallMobileImg,e.smallSquareImg,e.bigSquareImg),v=l.length>80?l.slice(0,80)+"...":l,p=r(c,(function(e){return e.web_url==s})),f=r(d,(function(e){return e.web_url==s})),m=i(new Date(o)),b=_||"https://as1.ftcdn.net/v2/jpg/00/77/50/78/500_F_77507884_B00iVspJkgxbh6o1JuKza9qYpioCZ9ja.jpg",g=document.createElement("li");g.classList.add("card__item"),g.innerHTML='<div class="card__wrapper">\n    <div>\n      <div class="card-image__wrapper">\n        <img\n          class="card__image"\n          src='.concat(b,'\n          alt="news"\n          width="288"\n          height="395"\n          loading=\'lazy\'\n        />\n        <span class="card-jobsearching"> ').concat(u,' </span>\n        <span class="card-already__read ').concat(f?"":"is-hidden",'">Already read</span>\n        <button class="card__btn btn-add ').concat(p?"is-hidden":"",'" type="button" \n        data-url="').concat(s,'">Add to favorite</button>\n        <button class="card__btn btn-remove ').concat(p?"":"is-hidden",'" type="button" data-url="').concat(s,'">Remove from favorite</button>\n      </div>\n\n      <div class="card__text">\n      <h2 class="card__title">').concat(n,'</h2>\n      <p class="card__article">').concat(v,'</p>\n      </div>\n      </div>\n\n      <div class="card__info">\n        <span class="card__info--date">').concat(m,'</span>\n        <a class="card__info--readmore" href="').concat(s,'" target="_blank">\n          Read more\n        </a>\n      </div>\n    </div>');var h=g.querySelector("button.card__btn.btn-add"),y=g.querySelector("button.card__btn.btn-remove"),w=g.querySelector(".card-already__read"),S=g.querySelector("a.card__info--readmore");return h.addEventListener("click",(function(){a(c,e),h.classList.add("is-hidden"),y.classList.remove("is-hidden")})),y.addEventListener("click",(function(){t(c,(function(e){var n=e.web_url;return s===n})),y.classList.add("is-hidden"),h.classList.remove("is-hidden")})),S.addEventListener("click",(function(){t(d,(function(e){var n=e.web_url;return s===n})),e.readDate=i(new Date),a(d,e),w.classList.remove("is-hidden")})),g})),s=document.createElement("li");s.classList.add("card__item"),s.innerHTML='<div class="card__item--weather"></div>';var o=window.innerWidth;o>=768&&o<1280?n.splice(1,0,s):o>=1280?n.splice(2,0,s):n.splice(0,0,s);var l=document.createDocumentFragment();return n.forEach((function(e){return l.appendChild(e)})),l}function s(e){"response"in e&&"docs"in e.response&&(e=e.response.docs);var n=(e=e||[]).map((function(e){var n=e.headline,s=e.web_url,o=e.pub_date,l=e.lead_paragraph,u=e.news_desk,_=(e.bigMobileImg,e.smallMobileImg,e.smallSquareImg,e.bigSquareImg),v=l.length>80?l.slice(0,80)+"...":l,p=r(c,(function(e){return e.web_url==s})),f=r(d,(function(e){return e.web_url==s})),m=i(new Date(o)),b=_||"https://as1.ftcdn.net/v2/jpg/00/77/50/78/500_F_77507884_B00iVspJkgxbh6o1JuKza9qYpioCZ9ja.jpg",g=document.createElement("li");g.classList.add("card__item"),g.innerHTML='<div class="card__wrapper">\n    <div>\n      <div class="card-image__wrapper">\n        <img\n          class="card__image"\n          src='.concat(b,'\n          alt="news"\n          width="288"\n          height="395"\n          loading=\'lazy\'\n        />\n        <span class="card-jobsearching"> ').concat(u,' </span>\n        <span class="card-already__read ').concat(f?"":"is-hidden",'">Already read</span>\n        <button class="card__btn btn-add ').concat(p?"is-hidden":"",'" type="button" \n        data-url="').concat(s,'">Add to favorite</button>\n        <button class="card__btn btn-remove ').concat(p?"":"is-hidden",'" type="button" data-url="').concat(s,'">Remove from favorite</button>\n      </div>\n\n      <div class="card__text">\n      <h2 class="card__title">').concat(n,'</h2>\n      <p class="card__article">').concat(v,'</p>\n      </div>\n      </div>\n\n      <div class="card__info">\n        <span class="card__info--date">').concat(m,'</span>\n        <a class="card__info--readmore" href="').concat(s,'" target="_blank">\n          Read more\n        </a>\n      </div>\n    </div>');var h=g.querySelector("button.card__btn.btn-add"),y=g.querySelector("button.card__btn.btn-remove"),w=g.querySelector(".card-already__read"),S=g.querySelector("a.card__info--readmore");return h.addEventListener("click",(function(){a(c,e),h.classList.add("is-hidden"),y.classList.remove("is-hidden")})),y.addEventListener("click",(function(){t(c,(function(e){var n=e.web_url;return s===n})),y.classList.add("is-hidden"),h.classList.remove("is-hidden")})),S.addEventListener("click",(function(){t(d,(function(e){var n=e.web_url;return s===n})),e.readDate=i(new Date),a(d,e),w.classList.remove("is-hidden")})),g})),s=document.createDocumentFragment();return n.forEach((function(e){return s.appendChild(e)})),s}var o=document.querySelector(".favorite-container"),l=document.querySelector(".favorite-not-found"),u="favorite-key",_=localStorage.getItem(u),v=JSON.parse(_);o.replaceChildren(s(v)),o.addEventListener("click",(function(e){console.log(e.target.dataset.url);var n=e.target.dataset.url;v.map((function(e){if(e.web_url===n){var a=v.indexOf(e);v.splice(a,1),localStorage.setItem(u,JSON.stringify(v)),o.replaceChildren(s(v))}}))})),console.log(v===[]),0===v.length&&(console.log(1111),o.style.display="none",l.style.display="flex",l.querySelector(".underfined").classList.remove("underfined-hidden"))}();
//# sourceMappingURL=favorite.f800d614.js.map
