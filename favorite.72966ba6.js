!function(){function e(e){var n=[];return e in localStorage&&null!==localStorage[e]&&(n=JSON.parse(localStorage[e])),n}function n(e,n){localStorage[e]=JSON.stringify(n)}function t(t,a){var r=e(t);r.push(a),n(t,r)}function a(t,a){n(t,e(t).filter((function(e){return!a(e)})))}function r(n,t){return e(n).some(t)}var c="favorite-key",i="read-key";function o(e){return e.toLocaleDateString("en-GB")}function d(e){"response"in e&&"docs"in e.response&&(e=e.response.docs);var n=(e=e||[]).map((function(e){var n=e.headline,d=e.web_url,s=e.pub_date,l=e.lead_paragraph,u=e.news_desk,_=(e.bigMobileImg,e.smallMobileImg,e.smallSquareImg,e.bigSquareImg),m=l.length>80?l.slice(0,80)+"...":l,f=r(c,(function(e){return e.web_url==d})),p=r(i,(function(e){return e.web_url==d})),v=o(new Date(s)),g=_?"https://www.nytimes.com/".concat(_):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9eXq6h_EHL7Iu-tVrAWQPJ4ozAiL3y5NY2m5jmcw&s",b=document.createElement("li");b.classList.add("card__item"),b.innerHTML='<div class="card__wrapper">\n      <div class="card-image__wrapper">\n        <img\n          class="card__image"\n          src='.concat(g,'\n          alt="news"\n          width="288"\n          height="395"\n          loading=\'lazy\'\n        />\n        <span class="card-jobsearching"> ').concat(u,' </span>\n        <span class="card-already__read ').concat(p?"":"is-hidden",'">Already read</span>\n        <button class="card__btn btn-add ').concat(f?"is-hidden":"",'" type="button" \n        data-url="').concat(d,'">Add to favorite</button>\n        <button class="card__btn btn-remove ').concat(f?"":"is-hidden",'" type="button" data-url="').concat(d,'">Remove from favorite</button>\n      </div>\n\t\t<h2 class="card__title">').concat(n,'</h2>\n      <p class="card__article">').concat(m,'</p>\n      <div class="card__info">\n        <span class="card__info--date">').concat(v,'</span>\n        <a class="card__info--readmore" href="').concat(d,'" target="_blank">\n          Read more\n        </a>\n      </div>\n    </div>');var h=b.querySelector("button.card__btn.btn-add"),y=b.querySelector("button.card__btn.btn-remove"),w=b.querySelector(".card-already__read"),S=b.querySelector("a.card__info--readmore");return h.addEventListener("click",(function(){t(c,e),h.classList.add("is-hidden"),y.classList.remove("is-hidden")})),y.addEventListener("click",(function(){a(c,(function(e){var n=e.web_url;return d===n})),y.classList.add("is-hidden"),h.classList.remove("is-hidden")})),S.addEventListener("click",(function(){a(i,(function(e){var n=e.web_url;return d===n})),e.readDate=o(new Date),t(i,e),w.classList.remove("is-hidden")})),b})),d=document.createElement("li");d.classList.add("card__item"),d.innerHTML='<div class="card__item--weather"></div>';var s=window.innerWidth;s>=768&&s<1280?n.splice(1,0,d):s>=1280?n.splice(2,0,d):n.splice(0,0,d);var l=document.createDocumentFragment();return n.forEach((function(e){return l.appendChild(e)})),l}var s=document.querySelector(".favorite-container"),l=document.querySelector(".favorite-not-found"),u="favorite-key",_=localStorage.getItem(u),m=JSON.parse(_);s.replaceChildren(d(m)),s.addEventListener("click",(function(e){console.log(e.target.dataset.url);var n=e.target.dataset.url;m.map((function(e){if(e.web_url===n){var t=m.indexOf(e);m.splice(t,1),localStorage.setItem(u,JSON.stringify(m)),s.replaceChildren(d(m))}}))})),console.log(m===[]),0===m.length&&(console.log(1111),s.style.display="none",l.style.display="flex",l.querySelector(".underfined").classList.remove("underfined-hidden"))}();
//# sourceMappingURL=favorite.72966ba6.js.map
