function e(e){let n=[];return e in localStorage&&null!==localStorage[e]&&(n=JSON.parse(localStorage[e])),n}function n(e,n){localStorage[e]=JSON.stringify(n)}function t(t,a){const d=e(t);d.push(a),n(t,d)}function a(t,a){n(t,e(t).filter((e=>!a(e))))}function d(n,t){return e(n).some(t)}function r(e){return e.toLocaleDateString("en-GB")}function s(e){"response"in e&&"docs"in e.response&&(e=e.response.docs);const n=(e=e||[]).map((e=>{const{headline:n,web_url:s,pub_date:i,lead_paragraph:c,news_desk:l,bigMobileImg:o,smallMobileImg:_,smallSquareImg:u,bigSquareImg:m}=e,p=c.length>80?c.slice(0,80)+"...":c,h=d("favorite-key",(e=>e.web_url==s)),b=d("read-key",(e=>e.web_url==s)),g=r(new Date(i)),v=m?`https://www.nytimes.com/${m}`:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9eXq6h_EHL7Iu-tVrAWQPJ4ozAiL3y5NY2m5jmcw&s",f=document.createElement("li");f.classList.add("card__item"),f.innerHTML=`<div class="card__wrapper">\n      <div class="card-image__wrapper">\n        <img\n          class="card__image"\n          src=${v}\n          alt="news"\n          width="288"\n          height="395"\n          loading='lazy'\n        />\n        <span class="card-jobsearching"> ${l} </span>\n        <span class="card-already__read ${b?"":"is-hidden"}">Already read</span>\n        <button class="card__btn btn-add ${h?"is-hidden":""}" type="button" \n        data-url="${s}">Add to favorite</button>\n        <button class="card__btn btn-remove ${h?"":"is-hidden"}" type="button" data-url="${s}">Remove from favorite</button>\n      </div>\n\n      <h2 class="card__title">${n}</h2>\n      <p class="card__article">${p}</p>\n\n      <div class="card__info">\n        <span class="card__info--date">${g}</span>\n        <a class="card__info--readmore" href="${s}" target="_blank">\n          Read more\n        </a>\n      </div>\n    </div>`;const y=f.querySelector("button.card__btn.btn-add"),w=f.querySelector("button.card__btn.btn-remove"),L=f.querySelector(".card-already__read"),S=f.querySelector("a.card__info--readmore");return y.addEventListener("click",(()=>{t("favorite-key",e),y.classList.add("is-hidden"),w.classList.remove("is-hidden")})),w.addEventListener("click",(()=>{a("favorite-key",(({web_url:e})=>s===e)),w.classList.add("is-hidden"),y.classList.remove("is-hidden")})),S.addEventListener("click",(()=>{a("read-key",(({web_url:e})=>s===e)),e.readDate=r(new Date),t("read-key",e),L.classList.remove("is-hidden")})),f})),s=document.createElement("li");s.classList.add("card__item"),s.innerHTML='<div class="card__item--weather"></div>';let i=window.innerWidth;i>=768&&i<1280?n.splice(1,0,s):i>=1280?n.splice(2,0,s):n.splice(0,0,s);const c=document.createDocumentFragment();return n.forEach((e=>c.appendChild(e))),c}function i(e){e.target.nextElementSibling.classList.toggle("hidden"),e.target.classList.toggle("hidden")}!function(){const n=document.querySelector(".read-news__container"),t=e("read-key"),a=(d="readDate",t.reduce(((e,n)=>{const t=n[d];return e[t]||(e[t]=[]),e[t].push(n),e}),{}));var d;for(let e of Object.keys(a)){const t=document.createElement("div");t.classList.add("read-news__header","hidden"),t.innerHTML=e,t.addEventListener("click",i),n.appendChild(t);const d=document.createElement("div");d.classList.add("read-news__items","hidden"),d.appendChild(s(a[e])),n.appendChild(d)}}();
//# sourceMappingURL=read.b1eab39e.js.map