!function(n){var a={};function r(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=a,r.d=function(n,a,e){r.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,a){if(1&a&&(n=r(n)),8&a)return n;if(4&a&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&a&&"string"!=typeof n)for(var o in n)r.d(e,o,function(a){return n[a]}.bind(null,o));return e},r.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(a,"a",a),a},r.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},r.p="",r(r.s=10)}([function(n,a,r){var e=r(1);"string"==typeof e&&(e=[[n.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(8)(e,o);e.locals&&(n.exports=e.locals)},function(n,a,r){a=n.exports=r(2)(!1);var e=r(3),o=e(r(4)),i=e(r(5)),t=e(r(6)),s=e(r(7));a.push([n.i,"@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 62.5%; }\n  @media only screen and (max-width: 68.75em) {\n    html {\n      font-size: 55%; } }\n  @media only screen and (max-width: 59.38em) {\n    html {\n      font-size: 60%; } }\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  background-image: linear-gradient(to left top, rgba(11, 60, 93, 0.4), rgba(50, 140, 193, 0.4)), url("+o+");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed; }\n  @media only screen and (min-width: 37.5em), only screen and (min-resolution: 192dpi) and (min-width: 18.75em), only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 18.75em) {\n    body {\n      background-image: linear-gradient(to left top, rgba(11, 60, 93, 0.4), rgba(50, 140, 193, 0.4)), url("+i+"); } }\n  @media only screen and (min-resolution: 192dpi) and (min-width: 37.5em), only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em), only screen and (min-width: 75em) {\n    body {\n      background-image: linear-gradient(to left top, rgba(11, 60, 93, 0.4), rgba(50, 140, 193, 0.4)), url("+t+"); } }\n  @media only screen and (min-resolution: 192dpi) and (min-width: 75em), only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 75em), only screen and (min-width: 150em) {\n    body {\n      background-image: linear-gradient(to left top, rgba(11, 60, 93, 0.4), rgba(50, 140, 193, 0.4)), url("+s+"); } }\n\n::selection {\n  background-color: #F79E02;\n  color: #fff; }\n\n.checkbox {\n  display: none; }\n\n.search {\n  display: flex;\n  align-items: center; }\n  .search__icon {\n    font-size: 2rem;\n    color: #D6D9DB;\n    transform: translateX(-3.5rem); }\n  .search__input {\n    padding: 1rem;\n    text-align: center;\n    border-radius: 2.5rem;\n    border: none;\n    outline: none; }\n  .search__input:focus {\n    border: 2px solid #F79E02; }\n\n.button {\n  background-color: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all .2s;\n  font-size: 1.5rem; }\n  .button__add, .button__close {\n    color: #fff; }\n    .button__add:hover, .button__close:hover {\n      color: #F79E02; }\n  .button__add {\n    font-size: 2rem; }\n  .button__close {\n    font-size: 3rem;\n    position: absolute;\n    top: 1.5rem;\n    right: 2rem; }\n    .button__close:hover {\n      color: #F79E02; }\n  .button__check {\n    color: #F79E02;\n    font-size: 2rem;\n    padding-right: 1rem; }\n  .button__hidden {\n    visibility: hidden;\n    transform: scale(0.7, 0.7); }\n  .button__delete {\n    font-size: 2rem;\n    color: #FF5049; }\n  .button__edit {\n    font-size: 2rem;\n    color: #0B3C5D;\n    padding: 0 .7rem; }\n  .button__previous {\n    color: #328CC1;\n    font-size: 3rem; }\n    .button__previous:hover {\n      color: #F79E02; }\n  .button__next {\n    color: #328CC1;\n    font-size: 3rem; }\n    .button__next:hover {\n      color: #F79E02; }\n\ninput {\n  border: none; }\n\n/* width */\n::-webkit-scrollbar {\n  width: 10px; }\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #fff; }\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #328CC1; }\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #0B3C5D; }\n\n.container {\n  padding: 3rem 4rem;\n  top: 0; }\n  @media only screen and (max-width: 68.75em) {\n    .container {\n      padding: 2rem 2rem;\n      padding-bottom: 3rem; } }\n  @media only screen and (max-width: 59.38em) {\n    .container {\n      padding: 1.5rem 3.5rem; } }\n  @media only screen and (max-width: 37.5em) {\n    .container {\n      padding: 1.5rem 2rem; } }\n\n.header {\n  font-family: 'Rammetto One', cursive;\n  padding-bottom: 2rem;\n  color: #0B3C5D;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  @media only screen and (max-width: 59.38em) {\n    .header {\n      flex-direction: column;\n      text-align: center; } }\n\n.sections {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 2rem; }\n  @media only screen and (max-width: 59.38em) {\n    .sections {\n      grid-template-columns: repeat(2, 1fr); } }\n  @media only screen and (max-width: 37.5em) {\n    .sections {\n      grid-template-columns: 1fr; } }\n\n.popup {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  background-color: rgba(29, 39, 49, 0.8); }\n  .popup__bg {\n    color: #0B3C5D;\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: .5rem;\n    width: 90%;\n    height: 90%;\n    transform: translate(5%, 5%); }\n  .popup__header {\n    height: 9rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #328CC1; }\n  .popup__icons {\n    margin: 2rem auto;\n    width: 95%;\n    height: calc(100% - 19rem);\n    overflow: auto;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    justify-content: center;\n    transition: all .2s; }\n  .popup__add {\n    height: 7rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #328CC1; }\n    .popup__add--btn {\n      background-color: #F79E02;\n      padding: 1rem 2rem;\n      color: #fff;\n      letter-spacing: .2rem;\n      border-radius: 2.5rem; }\n      .popup__add--btn:hover {\n        background-color: #F9BB4D; }\n\n.hide {\n  visibility: hidden;\n  animation: fadeIn 1s; }\n\n.popup-task {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  background-color: rgba(29, 39, 49, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .popup-task__bg {\n    color: #0B3C5D;\n    background-color: #328CC1;\n    border-radius: .5rem;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column; }\n    .popup-task__bg--close {\n      color: #fff;\n      font-size: 2.5rem;\n      transform: translate(50%, -1rem); }\n  .popup-task__header {\n    color: #fff;\n    text-align: center;\n    padding-bottom: 1rem;\n    transform: translate(0, -1rem); }\n  .popup-task__form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n    .popup-task__form--text {\n      border: none;\n      outline: none;\n      border-radius: 1rem;\n      padding: 1rem;\n      margin-bottom: 2rem; }\n    .popup-task__form--submit {\n      background-color: #F79E02;\n      padding: 1rem 2rem;\n      color: #fff;\n      letter-spacing: .2rem;\n      border-radius: 2.5rem;\n      cursor: pointer; }\n      .popup-task__form--submit:hover {\n        background-color: #F9BB4D; }\n\n.section {\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: .5rem;\n  padding-bottom: 1.5rem; }\n  .section:first-child .section__title {\n    border-bottom: 0.3rem solid #328CC1; }\n  .section__title {\n    text-transform: uppercase;\n    text-align: center;\n    padding: 1.5rem;\n    line-height: 1;\n    color: #328CC1;\n    margin: 0 auto;\n    width: 95%; }\n    .section__title--arrows {\n      display: flex;\n      margin: 0 1.5rem; }\n  .section__content {\n    display: grid;\n    grid-template-rows: auto; }\n  .section__item--title {\n    background-color: #328CC1;\n    color: #fff;\n    padding: .7rem 2rem;\n    display: flex;\n    justify-content: space-between; }\n  .section__item--content {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    padding: .5rem 0;\n    width: 95%;\n    margin: 0 auto; }\n  .section__item--goal {\n    display: flex;\n    align-items: flex-start;\n    padding: .2rem 0; }\n    .section__item--goal:not(:last-child) {\n      padding-bottom: .5rem; }\n    .section__item--goal:hover .button__hidden {\n      visibility: visible;\n      transform: scale(1, 1); }\n  .section__item--paragraph {\n    width: calc(100% - 3rem - 3rem - 2rem); }\n  .section__item--input {\n    background-color: transparent;\n    border: none;\n    outline: #0B3C5D; }\n    .section__item--input:focus {\n      border-bottom: 2px solid #328CC1;\n      transform: translateY(1px); }\n\n.skills__icons {\n  padding-top: 1.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n  justify-content: center;\n  color: #0B3C5D; }\n\n.skills__icon {\n  font-size: 5rem;\n  margin: .5rem;\n  padding: .5rem;\n  background-color: #fff;\n  border-radius: .5rem;\n  align-self: flex-start;\n  cursor: pointer;\n  transition: all .2s; }\n  .skills__icon:hover {\n    transform: scale(1.1, 1.1);\n    box-shadow: 2px 2px 12px -3px rgba(0, 0, 0, 0.5); }\n\n.skills__icon-add {\n  color: #F79E02; }\n\n.skills__icon-add:hover {\n  color: rgba(247, 158, 2, 0.7); }\n\n.selected-icon {\n  background-color: #F79E02;\n  color: #fff; }\n\n.header-1 {\n  font-size: 3.5rem; }\n  @media only screen and (max-width: 59.38em) {\n    .header-1 {\n      font-size: 3rem; } }\n\n.header-2 {\n  font-size: 2.5rem; }\n\n.header-3 {\n  font-size: 1.8rem; }\n\n.paragraph {\n  font-size: 1.6rem;\n  font-weight: 100; }\n",""])},function(n,a,r){"use strict";n.exports=function(n){var a=[];return a.toString=function(){return this.map(function(a){var r=function(n,a){var r=n[1]||"",e=n[3];if(!e)return r;if(a&&"function"==typeof btoa){var o=(t=e,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"),i=e.sources.map(function(n){return"/*# sourceURL="+e.sourceRoot+n+" */"});return[r].concat(i).concat([o]).join("\n")}var t;return[r].join("\n")}(a,n);return a[2]?"@media "+a[2]+"{"+r+"}":r}).join("")},a.i=function(n,r){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(e[i]=!0)}for(o=0;o<n.length;o++){var t=n[o];null!=t[0]&&e[t[0]]||(r&&!t[2]?t[2]=r:r&&(t[2]="("+t[2]+") and ("+r+")"),a.push(t))}},a}},function(n,a,r){"use strict";n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,a,r){n.exports=r.p+"images/background-small.jpg"},function(n,a,r){n.exports=r.p+"images/background-medium.jpg"},function(n,a,r){n.exports=r.p+"images/background-large.jpg"},function(n,a,r){n.exports=r.p+"images/background.jpg"},function(n,a,r){var e,o,i={},t=(e=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=e.apply(this,arguments)),o}),s=function(n){var a={};return function(n,r){if("function"==typeof n)return n();if(void 0===a[n]){var e=function(n,a){return a?a.querySelector(n):document.querySelector(n)}.call(this,n,r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}a[n]=e}return a[n]}}(),l=null,d=0,p=[],c=r(9);function m(n,a){for(var r=0;r<n.length;r++){var e=n[r],o=i[e.id];if(o){o.refs++;for(var t=0;t<o.parts.length;t++)o.parts[t](e.parts[t]);for(;t<e.parts.length;t++)o.parts.push(w(e.parts[t],a))}else{var s=[];for(t=0;t<e.parts.length;t++)s.push(w(e.parts[t],a));i[e.id]={id:e.id,refs:1,parts:s}}}}function g(n,a){for(var r=[],e={},o=0;o<n.length;o++){var i=n[o],t=a.base?i[0]+a.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};e[t]?e[t].parts.push(s):r.push(e[t]={id:t,parts:[s]})}return r}function u(n,a){var r=s(n.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var e=p[p.length-1];if("top"===n.insertAt)e?e.nextSibling?r.insertBefore(a,e.nextSibling):r.appendChild(a):r.insertBefore(a,r.firstChild),p.push(a);else if("bottom"===n.insertAt)r.appendChild(a);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,r);r.insertBefore(a,o)}}function f(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var a=p.indexOf(n);a>=0&&p.splice(a,1)}function k(n){var a=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var e=function(){0;return r.nc}();e&&(n.attrs.nonce=e)}return v(a,n.attrs),u(n,a),a}function v(n,a){Object.keys(a).forEach(function(r){n.setAttribute(r,a[r])})}function w(n,a){var r,e,o,i;if(a.transform&&n.css){if(!(i="function"==typeof a.transform?a.transform(n.css):a.transform.default(n.css)))return function(){};n.css=i}if(a.singleton){var t=d++;r=l||(l=k(a)),e=_.bind(null,r,t,!1),o=_.bind(null,r,t,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(n){var a=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",v(a,n.attrs),u(n,a),a}(a),e=function(n,a,r){var e=r.css,o=r.sourceMap,i=void 0===a.convertToAbsoluteUrls&&o;(a.convertToAbsoluteUrls||i)&&(e=c(e));o&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var t=new Blob([e],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(t),s&&URL.revokeObjectURL(s)}.bind(null,r,a),o=function(){f(r),r.href&&URL.revokeObjectURL(r.href)}):(r=k(a),e=function(n,a){var r=a.css,e=a.media;e&&n.setAttribute("media",e);if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){f(r)});return e(n),function(a){if(a){if(a.css===n.css&&a.media===n.media&&a.sourceMap===n.sourceMap)return;e(n=a)}else o()}}n.exports=function(n,a){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs="object"==typeof a.attrs?a.attrs:{},a.singleton||"boolean"==typeof a.singleton||(a.singleton=t()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var r=g(n,a);return m(r,a),function(n){for(var e=[],o=0;o<r.length;o++){var t=r[o];(s=i[t.id]).refs--,e.push(s)}n&&m(g(n,a),a);for(o=0;o<e.length;o++){var s;if(0===(s=e[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var b,h=(b=[],function(n,a){return b[n]=a,b.filter(Boolean).join("\n")});function _(n,a,r,e){var o=r?"":e.css;if(n.styleSheet)n.styleSheet.cssText=h(a,o);else{var i=document.createTextNode(o),t=n.childNodes;t[a]&&n.removeChild(t[a]),t.length?n.insertBefore(i,t[a]):n.appendChild(i)}}},function(n,a){n.exports=function(n){var a="undefined"!=typeof window&&window.location;if(!a)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var r=a.protocol+"//"+a.host,e=r+a.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,a){var o,i=a.trim().replace(/^"(.*)"$/,function(n,a){return a}).replace(/^'(.*)'$/,function(n,a){return a});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:e+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,a,r){"use strict";r.r(a);r(0);var e={headerDate:document.querySelector(".header__date"),skills:document.querySelector(".skills__icons"),popup:document.querySelector(".popup"),popupIcons:document.querySelector(".popup__icons"),popupAddIcon:document.querySelector(".skills__icon-add"),popupCloseBtn:document.querySelector(".popup__close-btn"),popupUpdateBtn:document.querySelector(".popup__add--btn"),popupSearch:document.querySelector(".search__input"),weekNumber:document.querySelector(".week__number"),weekDays:document.querySelector(".week-days"),popupTask:document.querySelector(".popup-task"),popupTaskClose:document.querySelector(".popup-task__bg--close"),popupTaskForm:document.querySelector(".popup-task__form"),popupTaskText:document.querySelector(".popup-task__form--text"),sectionItem:document.querySelector(".section__item"),sectionItemContent:document.querySelector(".section__item--content"),sectionItemInput:document.querySelector(".section__item--input"),month:document.querySelector(".month-name")};var o=new Date,i=(o.getDate(),o.getMonth(),o.getFullYear(),o),t=["January","February","March","April","May","June","July","August","September","October","November","December"];var s=[],l=function(n){e.month.innerHTML=t[n.getMonth()]};function d(n,a){for(var r=0;r<a.length;r++){var e=a[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}!function(){for(var n=new Date(i.getFullYear(),0,1),a=0;a<=51;a++){var r=(void 0)(new Date(n.getTime()+7*a*24*60*60*1e3),0),e=new Date(++r),o=e.toString().split(" ",4),t=new Date(e.getTime()+5184e5).toString().split(" ",4);s.push({weekNr:a+1,firstDay:"".concat(o[2]," ").concat(o[1]),lastDay:"".concat(t[2]," ").concat(t[1])})}}(),console.log(s);var p=new Date,c=p.getDate(),m=p.getMonth(),g=p.getFullYear(),u=p,f=function(n){var a=new Date(n.valueOf()),r=(n.getDay()+6)%7;a.setDate(a.getDate()-r+3);var e=a.valueOf();return a.setMonth(0,1),4!==a.getDay()&&a.setMonth(0,1+(4-a.getDay()+7)%7),1+Math.ceil((e-a)/6048e5)},k=function(n){e.weekNumber.innerHTML=f(n)};function v(n,a){var r=n.getDate()-(n.getDay()-a)+(0===n.getDay()?-6:1);return new Date(n.setDate(r))}var w=function(n,a){var r=v(new Date(n.getTime()-7*a*24*60*60*1e3),1);u=new Date(r),b(r),h(r),f(r),k(u)},b=function(n){for(var a=[],r=0;r<=6;r++){var e=v(new Date(n),r).toString(),o=e.split(" ",4);a.push({day:"".concat(o[0]," ").concat(o[2]," ").concat(o[1]),date:"".concat(o[2]," ").concat(o[1]," ").concat(o[3])}),e++}return a},h=function(n){e.weekDays.innerHTML="",b(n).forEach(function(n){var a='<div class="section__item" data-date="'.concat(n.date,'">\n                    <h3 class="header-3 section__item--title"> \n                      <span class="week__day">').concat(n.day,'</span>\n                      <button class="button ">\n                        <i class="fas fa-plus-circle button__add"></i>\n                      </button>\n                    </h3>\n                    <h3 class="header-3 section__item--content"></h3>\n                  </div>');e.weekDays.insertAdjacentHTML("beforeend",a),_.find(function(a){return a.date==n.date})&&T(n.date)}),k(u),l(u)},_=[],y=function(){function n(a,r){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,n),this.date=a,this.tasks=[{task:r,done:e}]}var a,r,e;return a=n,(r=[{key:"addTask",value:function(n){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.tasks.push({task:n,done:a})}},{key:"updateTask",value:function(n,a){this.tasks.find(function(a){return a.task==n}).task=a}},{key:"toggleChecked",value:function(n){var a=this.tasks.find(function(a){return a.task==n});a.done=!a.done}},{key:"deleteTask",value:function(n){var a=this.tasks.findIndex(function(a){return a.task==n});this.tasks.splice(a,1)}}])&&d(a.prototype,r),e&&d(a,e),n}(),x=function(){var n=e.popupTask;n.classList.add("hide"),n.removeAttribute("data-date"),n.removeAttribute("data-action")},j=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Your task";e.popupTask.classList.remove("hide"),e.popupTaskText.placeholder=n,e.popupTaskText.focus()},C=function(n){e.popupTask.dataset.date=n};var T=function(n){var a,r=e.weekDays.querySelectorAll("[data-date]");r.forEach(function(r){if(r.dataset.date==n){var e=r.children[1],o=_.find(function(a){return a.date==n});e.innerHTML="",o.tasks.forEach(function(n){a=n.done?"far fa-check-circle":"far fa-circle";var r='<div class="section__item--goal">\n                        <button class="button ">\n                          <i class="'.concat(a,' button__check"></i>\n                        </button>\n                        <p class="paragraph section__item--paragraph">').concat(n.task,'</p>\n                        <button class="button button__hidden">\n                          <i class="far fa-edit button__edit"></i>\n                        </button>\n                        <button class="button button__hidden">\n                          <i class="far fa-trash-alt button__delete"></i>\n                        </button>\n                      </div>');e.insertAdjacentHTML("beforeend",r)})}})},L=[{name:"amazonwebservices",tags:["cloud","hosting","server"],versions:{svg:["original","original-wordmark","plain-wordmark"],font:["original","plain-wordmark"]}},{name:"android",tags:["os","mobile"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"angularjs",tags:["framework","javascript"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"apache",tags:["php"],versions:{svg:["original","original-wordmark","plain","plain-wordmark","line","line-wordmark"],font:["plain","plain-wordmark","line","line-wordmark"]}},{name:"appcelerator",tags:["app","mobile"],versions:{svg:["original","original-wordmark","plain-wordmark"],font:["original","plain-wordmark"]}},{name:"apple",tags:["brand","mobile"],versions:{svg:["original"],font:["original"]}},{name:"atom",tags:["editor"],versions:{svg:["original","original-wordmark"],font:["original","original-wordmark"]}},{name:"babel",tags:["javascript","transpiler"],versions:{svg:["original","plain"],font:["plain"]}},{name:"backbonejs",tags:["javascript","framework"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"bitbucket",tags:[],versions:{svg:["original","original-wordmark"],font:["plain","plain-wordmark"]}},{name:"bootstrap",tags:["css","framework"],versions:{svg:["plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"bower",tags:["package","manager"],versions:{svg:["original","original-wordmark","plain","plain-wordmark","line","line-wordmark"],font:["plain","plain-wordmark","line","line-wordmark"]}},{name:"c",tags:["language"],versions:{svg:["original","plain","line"],font:["plain","plain-wordmark","line","line-wordmark"]}},{name:"chrome",tags:["browser"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"codeigniter",tags:["php","framework"],versions:{svg:["plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"coffeescript",tags:["javascript","language"],versions:{svg:["original","original-wordmark"],font:["original","original-wordmark"]}},{name:"confluence",tags:[],versions:{svg:["original","original-wordmark"],font:["plain","plain-wordmark"]}},{name:"cplusplus",tags:["language"],versions:{svg:["original","plain","line"],font:["plain","plain-wordmark","line","line-wordmark"]}},{name:"csharp",tags:["language"],versions:{svg:["original","plain","line"],font:["plain","plain-wordmark","line","line-wordmark"]}},{name:"css3",tags:["language","programming"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"cucumber",tags:["framework"],versions:{svg:["plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"d3js",tags:[],versions:{svg:["original","plain"],font:["plain"]}},{name:"debian",tags:["os","server"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"devicon",tags:["iconset"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"django",tags:[],versions:{svg:["original","plain","line"],font:["plain","plain-wordmark","line","line-wordmark"]}},{name:"docker",tags:["platform","deploy"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"doctrine",tags:[],versions:{svg:["original","original-wordmark","plain","plain-wordmark","line","line-wordmark"],font:["plain","plain-wordmark","line","line-wordmark"]}},{name:"dot-net",tags:["framework"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"drupal",tags:["cms"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"erlang",tags:[],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"express",tags:["framework"],versions:{svg:["original","original-wordmark"],font:["original","original-wordmark"]}},{name:"facebook",tags:["auth"],versions:{svg:["original","plain"],font:["plain"]}},{name:"firefox",tags:["browser"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"foundation",tags:["framework","css"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"gatling",tags:["framework","testing"],versions:{svg:["plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"gimp",tags:["graphic"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain"]}},{name:"git",tags:["version-control"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"github",tags:["version-control"],versions:{svg:["original","original-wordmark"],font:["plain","plain-wordmark"]}},{name:"gitlab",tags:["version-control"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"go",tags:["language"],versions:{svg:["original","plain","line"],font:["plain","line"]}},{name:"google",tags:["auth"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"gradle",tags:["task-runner"],versions:{svg:["plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"grunt",tags:["task-runner","nodejs"],versions:{svg:["original","original-wordmark","plain","plain-wordmark","line","line-wordmark"],font:["plain","plain-wordmark","line","line-wordmark"]}},{name:"gulp",tags:["task-runner","nodejs"],versions:{svg:["plain"],font:["plain"]}},{name:"heroku",tags:["cloud"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["original","original-wordmark","plain","plain-wordmark","line","line-wordmark"]}},{name:"html5",tags:["programming","language"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"ie10",tags:["browser"],versions:{svg:["original"],font:["original"]}},{name:"illustrator",tags:["editor","vector"],versions:{svg:["plain","line"],font:["plain","line"]}},{name:"inkscape",tags:["editor","vector"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"intellij",tags:["editor"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"java",tags:["programming","language"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"jasmine",tags:["testing"],versions:{svg:["plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"javascript",tags:["programming","language"],versions:{svg:["original","plain"],font:["plain"]}},{name:"jeet",tags:["framework","css"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"jetbrains",tags:[],versions:{svg:["original","plain"],font:["plain","plain-wordmark","line","line-wordmark"]}},{name:"jquery",tags:["library","javascript"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"krakenjs",tags:["nodejs","framework"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"laravel",tags:["php","framework"],versions:{svg:["plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"less",tags:["css","pre-processor"],versions:{svg:["plain-wordmark"],font:["plain-wordmark"]}},{name:"linux",tags:["os"],versions:{svg:["original","plain"],font:["plain"]}},{name:"meteor",tags:["javascript"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"mocha",tags:["testing"],versions:{svg:["plain"],font:["plain"]}},{name:"mongodb",tags:["database"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"moodle",tags:["platform"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"mysql",tags:["database","language"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"nginx",tags:["server"],versions:{svg:["original"],font:["original","original-wordmark","plain","plain-wordmark"]}},{name:"nodejs",tags:["javascript","language"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"nodewebkit",tags:[],versions:{svg:["original","original-wordmark","plain","plain-wordmark","line","line-wordmark"],font:["plain","plain-wordmark","line","line-wordmark"]}},{name:"oracle",tags:["database"],versions:{svg:["original"],font:["original"]}},{name:"photoshop",tags:["editor","graphic"],versions:{svg:["plain","line"],font:["plain","line"]}},{name:"php",tags:["programming","language"],versions:{svg:["original","plain"],font:["plain"]}},{name:"phpstorm",tags:["editor"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"protractor",tags:["framework","javascript"],versions:{svg:["plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"postgresql",tags:["database"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"python",tags:["programming","language"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"pycharm",tags:["editor"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"rails",tags:["framework"],versions:{svg:["original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"react",tags:["framework"],versions:{svg:["original","original-wordmark"],font:["original","original-wordmark"]}},{name:"redhat",tags:["server","linux"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"redis",tags:["server"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"ruby",tags:["programming","language"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"rubymine",tags:["editor"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"safari",tags:["browser"],versions:{svg:["original","original-wordmark","plain","plain-wordmark","line-wordmark","line"],font:["plain","plain-wordmark","line-wordmark","line"]}},{name:"sass",tags:["pre-processor","css"],versions:{svg:["original"],font:["original"]}},{name:"sequelize",tags:["database","language"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"slack",tags:["chat"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"sourcetree",tags:["version-control"],versions:{svg:["original","original-wordmark"],font:["plain","plain-wordmark"]}},{name:"ssh",tags:["security"],versions:{svg:["original","original-wordmark"],font:["plain","plain-wordmark"]}},{name:"swift",tags:["language"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"symfony",tags:["framework"],versions:{svg:["original","original-wordmark"],font:["original","original-wordmark"]}},{name:"tomcat",tags:["server"],versions:{svg:["original","original-wordmark","line","line-wordmark"],font:["line","line-wordmark"]}},{name:"travis",tags:["platform","integration"],versions:{svg:["plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"trello",tags:["platform","organize"],versions:{svg:["plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"twitter",tags:["auth"],versions:{svg:["original"],font:["plain"]}},{name:"typescript",tags:["programming","transpiler"],versions:{svg:["original","plain"],font:["plain"]}},{name:"ubuntu",tags:["os"],versions:{svg:["plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"vim",tags:["editor"],versions:{svg:["original","plain"],font:["plain"]}},{name:"visualstudio",tags:["editor"],versions:{svg:["plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"vuejs",tags:["framework"],versions:{svg:["original","original-wordmark","plain","plain-wordmark","line","line-wordmark"],font:["plain","plain-wordmark","line","line-wordmark"]}},{name:"webpack",tags:["package","manager"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"webstorm",tags:["editor"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"windows8",tags:["os"],versions:{svg:["original","original-wordmark"],font:["original","original-wordmark"]}},{name:"wordpress",tags:["cms"],versions:{svg:["original","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"yii",tags:["php","framework"],versions:{svg:["original","original-wordmark","plain","plain-wordmark"],font:["plain","plain-wordmark"]}},{name:"zend",tags:["php","framework"],versions:{svg:["plain","plain-wordmark"],font:["plain","plain-wordmark"]}}],S=function(){e.popup.classList.add("hide")},D=[],E=function(){e.popupIcons.innerHTML="",D.forEach(function(n){var a='<i class="skills__icon devicon-'.concat(n.name,"-").concat(n.font," ").concat(n.selectedClass,'"></i>');e.popupIcons.insertAdjacentHTML("beforeend",a)})},M=function(){e.popupIcons.innerHTML="";var n,a=(n=e.popupSearch.value,D.filter(function(a){var r=new RegExp("^".concat(n),"gi");return a.name.match(r)})).map(function(n){return'\n     <i class="skills__icon devicon-'.concat(n.name,"-").concat(n.font," ").concat(n.selectedClass,'"></i>\n     ')}).join("");e.popupIcons.insertAdjacentHTML("beforeend",a)};e.headerDate.innerHTML="".concat(c," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][m]," ").concat(g),L.forEach(function(n){if(n.versions.font.length>1)for(var a=0;a<n.versions.font.length;a++)D.push({name:n.name,font:n.versions.font[a],selectedClass:""});else D.push({name:n.name,font:String(n.versions.font),selectedClass:""})}),e.skills.addEventListener("click",function(n){n.target.classList.contains("skills__icon-add")&&e.popup.classList.remove("hide");e.popupSearch.value="",E()}),e.popupCloseBtn.addEventListener("click",S),e.popupIcons.addEventListener("click",function(n){var a,r,e=n.target;"I"===e.tagName&&(a=e.classList.item(1).split("-")[1],r=e.classList.item(1).replace("devicon-".concat(a,"-"),"")),function(n){"I"===n.tagName&&n.classList.toggle("selected-icon")}(e),function(n,a,r){D.forEach(function(e){var o=e.name.match("".concat(n,"$"),"gi"),i=String(e.font).match("".concat(a,"$"),"gi");o&&i&&(e.selectedClass=r)})}(a,r,"selected-icon"===e.classList.item(2)?e.classList.item(2):"")}),e.popupUpdateBtn.addEventListener("click",function(){for(;e.skills.hasChildNodes();)e.skills.removeChild(e.skills.firstChild);D.forEach(function(n){if("selected-icon"===n.selectedClass){var a='<i class="skills__icon devicon-'.concat(n.name,"-").concat(n.font,'"></i>');e.skills.insertAdjacentHTML("beforeend",a)}}),e.skills.insertAdjacentHTML("beforeend",'<i class="fas fa-plus-circle skills__icon skills__icon-add"></i>'),S()}),e.popupSearch.addEventListener("change",M),e.popupSearch.addEventListener("keyup",M),h(p),e.popupTaskClose.addEventListener("click",x),document.addEventListener("click",function(n){var a=n.target,r=n.target.parentNode.parentNode.parentNode.dataset.date;a.matches(".button__add")&&(j(),C(r),e.popupTask.dataset.action="addTask")}),e.popupTaskForm.addEventListener("submit",function(n){n.preventDefault();var a=n.target.parentNode.parentNode.dataset.action,r=e.popupTaskText.value,o=e.popupTask.dataset.date,i=new y(o,r),t=_.some(function(n){return n.date==o}),s=this.children[0].placeholder;"addTask"==a?t&&0!=_.length||0===r.length?_.forEach(function(n){n.date!=o||0===r.length||n.tasks.some(function(n){return n.task==r})||n.addTask(r)}):_.push(i):"editTask"==a&&_.forEach(function(n){n.date==o&&0!==r.length&&n.tasks.some(function(n){return n.task==s})&&n.updateTask(s,r)}),this.reset(),T(o),x()}),document.addEventListener("click",function(n){if(n.target.classList.contains("button__edit")){var a=n.target.parentNode.parentNode.parentNode.parentNode.dataset.date,r=n.target.parentNode.previousSibling.previousSibling.textContent;C(a),e.popupTask.dataset.action="editTask",j(r)}}),document.addEventListener("click",function(n){var a=n.target;if(a.classList.contains("button__delete")){var r=a.parentNode.parentNode.children[1].textContent,e=a.parentNode.parentNode.parentNode.parentNode.dataset.date;_.forEach(function(n,a){n.date==e&&n.deleteTask(r,a),T(e)})}}),document.addEventListener("click",function(n){var a=n.target;if(a.matches(".button__check")){var r=a.parentNode.parentNode.parentNode.parentNode.dataset.date,e=a.parentNode.nextSibling.nextSibling.textContent;_.find(function(n){return n.date==r}).toggleChecked(e),T(r)}}),document.addEventListener("click",function(n){n.target.matches(".button__next")&&w(u,-1)}),document.addEventListener("click",function(n){n.target.matches(".button__previous")&&w(u,1)})}]);