!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r);var s=r("8nrFW"),d=r("7iFtI"),n=r("fMavV"),l=r("gpT04"),c=r("crlC9"),o=r("l16qp"),u="https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=".concat("3HHtrx1v9QZUfdmskYGXIqIWRgxdBdcv"),f=document.getElementById("small-paginator-btns");var g,h,p,b={body:[],firstNews:0,lastNews:0,perPage:0,page:1,indexOfActivePage:0,getPages:function(){return Math.ceil(this.body.length/this.perPage)},initOrderNews:function(){this.lastNews=this.perPage,this.firstNews=0},cutToLimitOrder:function(){this.page=this.getPages(),this.lastNews=this.body.length,this.firstNews=this.body.length-this.perPage},resetLimitOrder:function(){this.page=1,this.lastNews=this.perPage,this.firstNews=0},increasePage:function(){this.page+=1,this.indexOfActivePage+=1},decreasePage:function(){this.page-=1,this.indexOfActivePage-=1},increaseStep:function(){this.firstNews+=this.perPage,this.lastNews+=this.perPage},decreaseStep:function(){this.firstNews-=this.perPage,this.lastNews-=this.perPage},addToBody:function(t){this.body=e(s)(t)},sliceBody:function(){return this.body.slice(this.firstNews,this.lastNews)},getIndexOfActivePage:function(){return this.indexOfActivePage}};function w(e){var t=[];return e.map((function(e){var i=e.title,a=e.url,r=e.published_date,s=e.abstract,d=e.section,n=e.id,l=e.media,c={headline:i,web_url:a,pub_date:r,lead_paragraph:s,news_desk:d,bigSquareImg:l.length>0?l[0]["media-metadata"][2].url:"https://as1.ftcdn.net/v2/jpg/00/77/50/78/500_F_77507884_B00iVspJkgxbh6o1JuKza9qYpioCZ9ja.jpg",id:n};t.push(c)})),f.innerHTML=function(){for(var e="",t=1;t<=b.getPages();t+=1)e+='<li><button type="button" class="buttons" value="'.concat(t,'" id="small-pag-btn">').concat(t,"</button><li>");return e}(),t}g=window.matchMedia("(min-width: 1280px)"),h=window.matchMedia("(min-width: 768px)"),p=window.matchMedia("(max-width: 767px)"),g.matches?b.perPage=8:h.matches?b.perPage=7:p.matches&&(b.perPage=4),b.initOrderNews(),(0,l.default)(u).then((function(e){var t=e.results;b.addToBody(t)})).then((function(){c.headerRefs.list.replaceChildren((0,d.default)(w(b.sliceBody()))),document.querySelectorAll("#small-pag-btn")[b.getIndexOfActivePage()].classList.add("isActivePage"),(0,n.initWeather)()})),c.headerRefs.nextArrow.addEventListener("click",(function(){0===b.firstNews&&b.resetLimitOrder();b.page<=b.getPages()?(b.increaseStep(),b.increasePage(),c.headerRefs.backArrow.removeAttribute("disabled"),c.headerRefs.list.replaceChildren((0,d.default)(w(b.sliceBody()))),document.querySelectorAll("#small-pag-btn")[b.indexOfActivePage].classList.add("isActivePage"),(0,n.initWeather)()):b.page>b.getPages()&&(b.cutToLimitOrder(),c.headerRefs.nextArrow.setAttribute("disabled",!0));Number(document.querySelectorAll("#small-pag-btn")[b.indexOfActivePage].value)===b.getPages()&&c.headerRefs.nextArrow.setAttribute("disabled",!0);(0,o.default)()})),c.headerRefs.backArrow.addEventListener("click",(function(){b.page>0&&(b.decreasePage(),b.decreaseStep(),c.headerRefs.nextArrow.removeAttribute("disabled"),c.headerRefs.list.replaceChildren((0,d.default)(w(b.sliceBody()))),document.querySelectorAll("#small-pag-btn")[b.indexOfActivePage].classList.add("isActivePage"),(0,n.initWeather)());0!==b.page&&0!==b.firstNews||c.headerRefs.backArrow.setAttribute("disabled",!0);b.firstNews<0&&(b.firstNews=0);(0,o.default)()})),f.addEventListener("click",(function(e){"small-pag-btn"===e.target.id&&(b.page=e.target.value,b.indexOfActivePage=b.page-1,b.firstNews=b.indexOfActivePage*b.perPage,b.lastNews=b.firstNews+b.perPage,c.headerRefs.list.replaceChildren((0,d.default)(w(b.sliceBody()))),document.querySelectorAll("#small-pag-btn")[b.page-1].classList.add("isActivePage"),(0,o.default)());if(1===Number(e.target.value))return c.headerRefs.backArrow.setAttribute("disabled",!0),void c.headerRefs.nextArrow.removeAttribute("disabled");c.headerRefs.backArrow.removeAttribute("disabled");if(Number(e.target.value)===b.getPages())return c.headerRefs.nextArrow.setAttribute("disabled",!0),void c.headerRefs.backArrow.removeAttribute("disabled");c.headerRefs.nextArrow.removeAttribute("disabled")}))}();
//# sourceMappingURL=index.5ef071ee.js.map
