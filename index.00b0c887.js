var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=a);var i=a("eVqJU");(async function(){const e=await fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=3HHtrx1v9QZUfdmskYGXIqIWRgxdBdcv"),t=await e.json(),{results:o}=t,a=[];console.log(o);const i=o[0].media[0]["media-metadata"][2].url;return console.log(i),o.map((({title:e,url:t,published_date:o,abstract:i,section:l,id:n})=>{const r={headline:e,web_url:t,pub_date:o,lead_paragraph:i,news_desk:l,bigMobileImg:"https://static01.nyt.com/images/2023/03/07/multimedia/-01WELL-AGING-EXERCISES21-bzjq/-01WELL-AGING-EXERCISES21-bzjq-mediumThreeByTwo440.jpg",id:n};a.push(r)})),console.log(a),a})().then((e=>{document.querySelector(".popular-articles__list").replaceChildren((0,i.default)(e))}));
//# sourceMappingURL=index.00b0c887.js.map