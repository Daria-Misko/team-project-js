function e(e){let a=[];return e in localStorage&&null!==localStorage[e]&&(a=JSON.parse(localStorage[e])),a}function a(e,a){localStorage[e]=JSON.stringify(a)}function n(n,t){const r=e(n);r.push(t),a(n,r)}function t(n,t){a(n,e(n).filter((e=>!t(e))))}function r(a,n){return e(a).some(n)}function d(e){return e.toLocaleDateString("en-GB")}function s(e){"response"in e&&"docs"in e.response&&(e=e.response.docs);const a=(e=e||[]).map((e=>{const{headline:a,web_url:s,pub_date:i,lead_paragraph:c,news_desk:l,bigMobileImg:o,smallMobileImg:_,smallSquareImg:u,bigSquareImg:p}=e,m=c.length>80?c.slice(0,80)+"...":c,b=r("favorite-key",(e=>e.web_url==s)),v=r("read-key",(e=>e.web_url==s)),g=d(new Date(i)),h=p||"https://as1.ftcdn.net/v2/jpg/00/77/50/78/500_F_77507884_B00iVspJkgxbh6o1JuKza9qYpioCZ9ja.jpg",f=document.createElement("li");f.classList.add("card__item"),f.innerHTML=`<div class="card__wrapper">\n    <div>\n      <div class="card-image__wrapper">\n        <img\n          class="card__image"\n          src=${h}\n          alt="news"\n          width="288"\n          height="395"\n          loading='lazy'\n        />\n        <span class="card-jobsearching"> ${l} </span>\n        <span class="card-already__read ${v?"":"is-hidden"}">Already read</span>\n        <button class="card__btn btn-add ${b?"is-hidden":""}" type="button" \n        data-url="${s}">Add to favorite</button>\n        <button class="card__btn btn-remove ${b?"":"is-hidden"}" type="button" data-url="${s}">Remove from favorite</button>\n      </div>\n\n      <div class="card__text">\n      <h2 class="card__title">${a}</h2>\n      <p class="card__article">${m}</p>\n      </div>\n      </div>\n\n      <div class="card__info">\n        <span class="card__info--date">${g}</span>\n        <a class="card__info--readmore" href="${s}" target="_blank">\n          Read more\n        </a>\n      </div>\n    </div>`;const y=f.querySelector("button.card__btn.btn-add"),w=f.querySelector("button.card__btn.btn-remove"),k=f.querySelector(".card-already__read"),S=f.querySelector("a.card__info--readmore");return y.addEventListener("click",(()=>{n("favorite-key",e),y.classList.add("is-hidden"),w.classList.remove("is-hidden")})),w.addEventListener("click",(()=>{t("favorite-key",(({web_url:e})=>s===e)),w.classList.add("is-hidden"),y.classList.remove("is-hidden")})),S.addEventListener("click",(()=>{t("read-key",(({web_url:e})=>s===e)),e.readDate=d(new Date),n("read-key",e),k.classList.remove("is-hidden")})),f})),s=document.createElement("li");s.classList.add("card__item"),s.innerHTML='<div class="card__item--weather"></div>';let i=window.innerWidth;i>=768&&i<1280?a.splice(1,0,s):i>=1280?a.splice(2,0,s):a.splice(0,0,s);const c=document.createDocumentFragment();return a.forEach((e=>c.appendChild(e))),c}function s(e){"response"in e&&"docs"in e.response&&(e=e.response.docs);const a=(e=e||[]).map((e=>{const{headline:a,web_url:s,pub_date:i,lead_paragraph:c,news_desk:l,bigMobileImg:o,smallMobileImg:_,smallSquareImg:u,bigSquareImg:p}=e,m=c.length>80?c.slice(0,80)+"...":c,b=r("favorite-key",(e=>e.web_url==s)),v=r("read-key",(e=>e.web_url==s)),g=d(new Date(i)),h=p||"https://as1.ftcdn.net/v2/jpg/00/77/50/78/500_F_77507884_B00iVspJkgxbh6o1JuKza9qYpioCZ9ja.jpg",f=document.createElement("li");f.classList.add("card__item"),f.innerHTML=`<div class="card__wrapper">\n    <div>\n      <div class="card-image__wrapper">\n        <img\n          class="card__image"\n          src=${h}\n          alt="news"\n          width="288"\n          height="395"\n          loading='lazy'\n        />\n        <span class="card-jobsearching"> ${l} </span>\n        <span class="card-already__read ${v?"":"is-hidden"}">Already read</span>\n        <button class="card__btn btn-add ${b?"is-hidden":""}" type="button" \n        data-url="${s}">Add to favorite</button>\n        <button class="card__btn btn-remove ${b?"":"is-hidden"}" type="button" data-url="${s}">Remove from favorite</button>\n      </div>\n\n      <div class="card__text">\n      <h2 class="card__title">${a}</h2>\n      <p class="card__article">${m}</p>\n      </div>\n      </div>\n\n      <div class="card__info">\n        <span class="card__info--date">${g}</span>\n        <a class="card__info--readmore" href="${s}" target="_blank">\n          Read more\n        </a>\n      </div>\n    </div>`;const y=f.querySelector("button.card__btn.btn-add"),w=f.querySelector("button.card__btn.btn-remove"),k=f.querySelector(".card-already__read"),S=f.querySelector("a.card__info--readmore");return y.addEventListener("click",(()=>{n("favorite-key",e),y.classList.add("is-hidden"),w.classList.remove("is-hidden")})),w.addEventListener("click",(()=>{t("favorite-key",(({web_url:e})=>s===e)),w.classList.add("is-hidden"),y.classList.remove("is-hidden")})),S.addEventListener("click",(()=>{t("read-key",(({web_url:e})=>s===e)),e.readDate=d(new Date),n("read-key",e),k.classList.remove("is-hidden")})),f})),s=document.createDocumentFragment();return a.forEach((e=>s.appendChild(e))),s}const i=document.querySelector(".favorite-container"),c=document.querySelector(".favorite-not-found"),l=localStorage.getItem("favorite-key");let o=JSON.parse(l);i.replaceChildren(s(o)),i.addEventListener("click",(function(e){console.log(e.target.dataset.url);let a=e.target.dataset.url;o.map((e=>{if(e.web_url===a){const a=o.indexOf(e);o.splice(a,1),localStorage.setItem("favorite-key",JSON.stringify(o)),i.replaceChildren(s(o))}}))})),console.log(o===[]),0===o.length&&(console.log(1111),i.style.display="none",c.style.display="flex",c.querySelector(".underfined").classList.remove("underfined-hidden"));
//# sourceMappingURL=favorite.462f6043.js.map
