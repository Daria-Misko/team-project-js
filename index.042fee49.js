var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a.register("bkgkh",(function(e,t){var n,a,i,o;n=e.exports,a="initWeather",i=function(){return c},Object.defineProperty(n,a,{get:i,set:o,enumerable:!0,configurable:!0});const s="73bd6bca6bd522830119f0c6decba840",r=273;function c(){document.querySelector(".card__item--weather").innerHTML='<div class="weather-container__all">\n  <div class="weather-container">\n    <div class="weather-current__container">\n      <div class="weather-top-card">\n        <div class="temperature-value animate__animated animate__fadeInUp">\n          <p></p>\n        </div>\n        <div class="description-wrapper">\n          <div\n            class="temperature-description animate__animated animate__fadeInUp"\n          >\n            <p>weather description</p>\n          </div>\n          <div class="location animate__animated animate__fadeInUp">\n            <p>Location</p>\n          </div>\n        </div>\n      </div>\n      <div class="weather-icon">\n        <img\n          src="/src/images/svg/unknown.png"\n          alt=""\n          height="155"\n          width="165"\n        />\n      </div>\n      <div class="day animate__animated animate__fadeInUp">\n        <p></p>\n      </div>\n      <div class="date animate__animated animate__fadeInUp">\n        <p></p>\n      </div>\n      <div class="week-weather animate__animated animate__fadeInUp">\n        <button class="weather-button" type="button">weather for week</button>\n      </div>\n    </div>\n  </div>\n  <div class="weather-week__container">\n    <div class="weather-week__list">\n      <p>Weather for week</p>\n      <ul class="weather-week__forecast">\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n      </ul>\n    </div>\n    <div class="date animate__animated animate__fadeInUp">\n      <button class="weather-week-close-button" type="button">back</button>\n    </div>\n  </div>\n</div>';const e=document.querySelector(".temperature-value p"),t=document.querySelector(".temperature-description p"),n=document.querySelector(".location p"),a=document.querySelector(".weather-icon"),i=document.querySelector(".day p"),o=document.querySelector(".date p"),c=document.querySelector(".weather-button"),d=document.querySelector(".weather-week__container"),l=document.querySelector(".weather-current__container"),u=document.querySelector(".weather-week-close-button"),m=document.querySelector(".weather-week__forecast");c.addEventListener("click",(function(e){e.preventDefault(),l.classList.add("is-hidden"),d.classList.contains("is-hidden")&&d.classList.remove("is-hidden")})),u.addEventListener("click",(function(e){e.preventDefault(),d.classList.add("is-hidden"),l.classList.contains("is-hidden")&&l.classList.remove("is-hidden")}));const p=new Date;let h=p.toLocaleDateString("en-gb",{day:"numeric",month:"short",year:"numeric"});let w=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][p.getDay()];const f={temperature:{value:"",unit:"celsius"},description:"",iconId:"",city:"",country:"",day:`${p}`,data:`${w}`};i.insertAdjacentHTML("beforeend",`${w}`),o.insertAdjacentHTML("beforeend",`${h}`),"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(i){if(i&&i.coords){let o=i.coords.latitude,c=i.coords.longitude;!function(i,o){fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${i}&lon=${o}&appid=${s}`).then((function(e){return e.json()})).then((function(e){f.temperature.value=Math.floor(e.main.temp-r),f.description=e.weather[0].description,f.iconId=e.weather[0].icon,f.city=e.name,f.country=e.sys.country})).then((function(){a.innerHTML=`<img src="http://openweathermap.org/img/wn/${f.iconId}@4x.png" height= "155"\n\twidth= "165"/>`,e.insertAdjacentHTML("beforeend",`${f.temperature.value}°`),t.innerHTML=`${f.description}`,n.innerHTML=`${f.city}`}))}(o,c),function(e,t){fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${t}&appid=ba7fddf449339701f9df702aeb87be1d`).then((e=>e.json())).then((e=>{const t=e.list,n={};for(let e=0;e<t.length;e++){const a=t[e].dt_txt.slice(0,10);n[a]?(t[e].main.temp<n[a].minTemp&&(n[a].minTemp=t[e].main.temp),t[e].main.temp>n[a].maxTemp&&(n[a].maxTemp=t[e].main.temp)):n[a]={date:a,minTemp:t[e].main.temp,maxTemp:t[e].main.temp,weather:t[e].weather[0].description}}console.log(n);m.innerHTML="",Object.keys(n).forEach((e=>{const t=n[e],a=t.date,i=new Date(a).toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"}),o=Math.floor(t.minTemp-r),s=Math.floor(t.maxTemp-r),c=t.weather,d=document.createElement("li");d.classList.add("weather-week__item"),d.innerHTML=`<span class="weather-week__value">${i}</span>:<br> Min. temp: <span class="weather-week__value">${o}</span>, Max. temp: <span class="weather-week__value">${s}</span><br> Descr.: <span class="weather-week__value">${c}</span>`,m.appendChild(d)}))})).catch((e=>console.log(e)))}(o,c)}else console.log("Position data not available.")}),(function(e){console.log("nothing")})):console.log(error),d.classList.add("is-hidden")}}));async function i(){const e=await fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=3HHtrx1v9QZUfdmskYGXIqIWRgxdBdcv"),t=await e.json();let{results:n}=t;return n}const o=document.querySelector(".buttons-list"),s=document.querySelector("#btn-open-category"),r=document.querySelector(".category__menu");function c(e){if(r.classList.contains("is-open-categories"))if(r.classList.remove("is-open-categories"),e.length<18)s.firstChild.textContent=e;else{const t=`${e.slice(0,15)}...`;s.firstChild.textContent=t}else window.matchMedia("(max-width: 767px)").matches&&(s.firstChild.textContent="Categories"),window.matchMedia("(min-width: 768px)").matches&&(s.firstChild.textContent="Others")}function d(e){return e.map((({section:e,display_name:t})=>`<li class='category__item'>\n        <button class="btn-item"\n            data-btn=${m(e)}>${t}</button>\n            </li>`)).join(" ")}function l(e){return e.map((({section:e,display_name:t})=>`<li class='buttons-list__item'>\n        <button class='buttons-list__button' data-btn=${m(e)}>\n        ${t}</button>\n        </li>`)).join(" ")}function u(e,t){const n=[];return n.push(e.slice(0,t)),n.push(e.slice(t)),n}function m(e){return encodeURIComponent(e)}var p=a("eVqJU"),h=a("bkgkh");const w=document.querySelector(".buttons-list"),f=document.querySelector("#btn-open-category"),_=document.querySelector(".category__menu"),g=document.querySelector(".arrow-icon");!async function(e){try{const t=await i();if(window.matchMedia("(max-width: 767px)").matches&&(o.innerHTML="",e.innerHTML=d(t)),window.matchMedia("(min-width: 768px) and (max-width: 1279px)").matches){o.innerHTML="";const n=u(t,4);e.innerHTML=d(n[1]),o.insertAdjacentHTML("beforeend",l(n[0]))}if(window.matchMedia("(min-width: 1280px)").matches){o.innerHTML="";const n=u(t,6);e.innerHTML=d(n[1]),o.insertAdjacentHTML("beforeend",l(n[0]))}}catch{console.log(error)}}(_),c(),w.addEventListener("click",(function(e){v(e.target.dataset.btn).then((e=>{document.querySelector(".popular-articles__list").replaceChildren((0,p.default)(e)),(0,h.initWeather)()}))})),f.addEventListener("click",(function(){const e="true"===f.getAttribute("aria-expanded")||!1;f.setAttribute("aria-expanded",!e),_.classList.toggle("is-open-categories"),_.classList.contains("is-open-categories")&&g.classList.add("open-categories");_.classList.contains("is-open-categories")||(g.classList.remove("open-categories"),f.blur())})),_.addEventListener("click",(function(e){const t=e.target.dataset.btn,n=e.target.innerText;v(t).then((e=>{document.querySelector(".popular-articles__list").replaceChildren((0,p.default)(e)),(0,h.initWeather)()})),c(decodeURIComponent(n)),_.classList.remove("is-open-categories"),g.classList.add("open-categories"),f.focus()})),window.onclick=e=>{e.target.matches(".category__btn")||e.target.matches(".btn-item")||_.classList.contains("is-open-categories")&&_.classList.remove("is-open-categories"),e.target.matches(".category__btn")||g.classList.contains("open-categories")&&g.classList.remove("open-categories")};async function v(e){const t=e,n=await fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/${t}.json?api-key=3HHtrx1v9QZUfdmskYGXIqIWRgxdBdcv`),a=await n.json(),{results:i}=a,o=[];i[0].multimedia[2].url,i.map((({title:e,url:t,published_date:n,abstract:a,section:i,id:s})=>{const r={headline:e,web_url:t,pub_date:n,lead_paragraph:a,news_desk:i,bigMobileImg:"https://static01.nyt.com/images/2023/03/07/multimedia/-01WELL-AGING-EXERCISES21-bzjq/-01WELL-AGING-EXERCISES21-bzjq-mediumThreeByTwo440.jpg",id:s};o.push(r)}));return o}
//# sourceMappingURL=index.042fee49.js.map
