var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in s){var i=s[e];delete s[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},e.parcelRequired7c6=i);var r=i("eVqJU"),a=i("bkgkh"),d=i("3lSCO"),n=i("6W1HG"),h=i("2cKMc");const l={body:[],firstNews:0,lastNews:0,perPage:0,page:1,getPages(){return Math.ceil(this.body.length/this.perPage)},initOrderNews(){this.lastNews=this.perPage,this.firstNews=0},cutToLimitOrder(){this.page=this.getPages(),this.lastNews=this.body.length,this.firstNews=this.body.length-this.perPage},resetLimitOrder(){this.page=1,this.lastNews=this.perPage,this.firstNews=0},increasePage(){this.page+=1},decreasePage(){this.page-=1},increaseStep(){this.firstNews+=this.perPage,this.lastNews+=this.perPage},decreaseStep(){this.firstNews-=this.perPage,this.lastNews-=this.perPage},addToBody(e){this.body=[...e]},sliceBody(){return this.body.slice(this.firstNews,this.lastNews)}};function o(e){const t=[];return e.map((({title:e,url:s,published_date:i,abstract:r,section:a,id:d,media:n})=>{const h={headline:e,web_url:s,pub_date:i,lead_paragraph:r,news_desk:a,bigSquareImg:n.length>0?n[0]["media-metadata"][2].url:"https://as1.ftcdn.net/v2/jpg/00/77/50/78/500_F_77507884_B00iVspJkgxbh6o1JuKza9qYpioCZ9ja.jpg",id:d};t.push(h)})),t}!function(){const e=window.matchMedia("(min-width: 1280px)"),t=window.matchMedia("(min-width: 768px)"),s=window.matchMedia("(max-width: 767px)");e.matches?l.perPage=8:t.matches?l.perPage=7:s.matches&&(l.perPage=4)}(),l.initOrderNews(),(0,d.default)("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=3HHtrx1v9QZUfdmskYGXIqIWRgxdBdcv").then((e=>{const t=e.results;l.addToBody(t)})).then((()=>{n.headerRefs.list.replaceChildren((0,r.default)(o(l.sliceBody()))),(0,a.initWeather)()})),n.headerRefs.nextArrow.addEventListener("click",(function(){0===l.firstNews&&l.resetLimitOrder();l.page<=l.getPages()?(l.increaseStep(),l.increasePage(),n.headerRefs.backArrow.removeAttribute("disabled"),n.headerRefs.list.replaceChildren((0,r.default)(o(l.sliceBody()))),(0,a.initWeather)()):l.page>l.getPages()&&(l.cutToLimitOrder(),n.headerRefs.nextArrow.setAttribute("disabled",!0));l.body.length-l.lastNews+l.perPage<l.perPage&&n.headerRefs.nextArrow.setAttribute("disabled",!0);(0,h.default)()})),n.headerRefs.backArrow.addEventListener("click",(function(){l.page>0&&(l.decreasePage(),l.decreaseStep(),n.headerRefs.nextArrow.removeAttribute("disabled"),n.headerRefs.list.replaceChildren((0,r.default)(o(l.sliceBody()))),(0,a.initWeather)());0!==l.page&&0!==l.firstNews||n.headerRefs.backArrow.setAttribute("disabled",!0);l.firstNews<0&&(l.firstNews=0);(0,h.default)()}));
//# sourceMappingURL=index.be4252f2.js.map