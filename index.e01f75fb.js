!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var o=a("bpxeT"),i=a("2TvXO"),s=a("7iFtI"),l=a("fMavV"),u="3HHtrx1v9QZUfdmskYGXIqIWRgxdBdcv";"https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=".concat(u);function c(){return(c=e(o)(e(i).mark((function t(){var n,r,a,o,s;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=".concat(u));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.results,o=[],console.log(a),s=a[0].media[0]["media-metadata"][2].url,console.log(s),a.map((function(e){var t={headline:e.title,web_url:e.url,pub_date:e.published_date,lead_paragraph:e.abstract,news_desk:e.section,bigMobileImg:"https://static01.nyt.com/images/2023/03/07/multimedia/-01WELL-AGING-EXERCISES21-bzjq/-01WELL-AGING-EXERCISES21-bzjq-mediumThreeByTwo440.jpg",id:e.id};o.push(t)})),console.log(o),e.abrupt("return",o);case 14:case"end":return e.stop()}}),t)})))).apply(this,arguments)}(function(){return c.apply(this,arguments)})().then((function(e){document.querySelector(".popular-articles__list").replaceChildren((0,s.default)(e)),(0,l.initWeather)()}))}();
//# sourceMappingURL=index.e01f75fb.js.map