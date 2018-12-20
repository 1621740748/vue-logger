!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-ui",[],t):"object"==typeof exports?exports["vue-ui"]=t():e["vue-ui"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),a=(r=o)&&r.__esModule?r:{default:r};var c={arrivalTime:0,unPublish:function(){var e=window.location.href||"";if(e.search("2dfire.com")<0&&e.search("zm1717.com")<0)return!0},fire:function(e,t,n){var r=a.default.utils.getParams(),i=Object.assign({},r,n);console.warn(i),this.unPublish()||a.default.fire(e,t,i)},getPageInfo:function(){return{page_name:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).name||document.title}},pageArrival:function(e){var t=this.getPageInfo(e);this.arrivalTime=a.default.utils.getNowTime(),t.arrival_time=this.arrivalTime,t.event_type="pageViewEvent",console.warn("page-arrival"),this.fire("pv","page_arrival",t)},pageLeave:function(e){var t=this.getPageInfo(e);t.arrival_time=this.arrivalTime,t.leave_time=a.default.utils.getNowTime(),t.event_type="pageViewEvent",console.warn("page-leave"),this.fire("pv","page_leave",t)},click:function(e,t){var n=e.name,r=e.value,i=void 0===r?{}:r,o=this.getPageInfo(t);o.click=i.name||n,o.info=i.info||"",o.event_type="clickEvent",console.warn("click：",o),this.fire("Cu",o.click,o)},addEvent:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.addEventListener?e.addEventListener(t,n,r):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},removeEvent:function(e,t){e.removeEventListener?e.removeEventListener(t,function(){}):e.detachEvent?e.detachEvent("on"+t,function(){}):e["on"+t]=function(){}}},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.product,r=t.project,o=t.router;if(o){n&&sessionStorage.setItem("product",n),r&&sessionStorage.setItem("project",r);var a={},u={};e.prototype.logger=function(e){return c.click({name:"click",value:i({},e)},u)},e.directive("click",{bind:function(e,t,n){if(!this){var r=n.context.$route;a=i({},r),c.addEvent(e,"click",function(){c.click(t,a)})}},update:function(e){if(this){var t=this.el,n={name:this.descriptor.name,value:e},r=this.vm.$route;a=i({},r),c.removeEvent(t,"click"),c.addEvent(t,"click",function(){c.click(n,a)})}},unbind:function(e){this?c.removeEvent(this.el,"click"):c.removeEvent(e,"click")}}),o.beforeEach(function(e,t,n){var r=e,i=t,o=n;e.to&&(r=e.to,i=e.from,o=e.next),i.name&&c.pageLeave(i),r.name&&(u=r,c.pageArrival(r)),o()}),window.onbeforeunload=function(){c.pageLeave(a)}}else console.error("logger error：can not find router in options")};"undefined"!=typeof window&&window.Vue&&u(window.Vue),e.exports={install:u}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=["product","project","page_name","chain_id","activity_id","entity_id","click","source","token","uid","ip","seat_code","screen_width","screen_height","qr_code","arrival_time","leave_time","log_time"],a={utils:{fireStatic:function(e,t){t||(t={}),t.V=((new Date).getTime()+parseInt(1e3*Math.random(0,1))).toString(36);var n=new Image;n.onload=n.onerror=function(e){n=null},n.src=e+this.formatParam(t)},fireAPI:function(e,t,n,r){var o=void 0,a=void 0,c=void 0;"object"==(void 0===t?"undefined":i(t))?(o=t,a=n,c=r):(o=void 0,a=t,c=n);var u=new XMLHttpRequest;u.onreadystatechange=function(){if(4==u.readyState)if(200==u.status){var e=JSON.parse(u.responseText);1==e.code&&a?a(e.data):c&&c(e)}else c&&c("error status: "+u.status)},u.open("get",e+this.formatParam(o),!0),u.setRequestHeader("Access-Control-Allow-Origin","*"),u.timeout=15e3,u.ontimeout=function(){c("timeout")},u.send()},formatParam:function(e){if(e&&Object.keys(e).length>0){var t=[];for(var n in e)e.hasOwnProperty(n)&&("object"===i(e[n])&&(e[n]=JSON.stringify(e[n])),e[n]&&t.unshift(n+"="+encodeURIComponent(e[n])));return"?"+t.join("&")}return""},getParams:function(){var e=this.getBrowserInfo(),t={},n=!0,i=!1,a=void 0;try{for(var c,u=o[Symbol.iterator]();!(n=(c=u.next()).done);n=!0){var s=c.value,f=this.getParamByName(s);t[s]=f}}catch(e){i=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(i)throw a}}return t.log_time=this.getNowTime(),r({},t,e)},getBrowserInfo:function(){return{screen_width:this.getScreenWidth(),screen_height:this.getScreenHeight()}},getScreenWidth:function(){return document.documentElement.clientWidth},getScreenHeight:function(){return document.documentElement.clientHeight},getNowTime:function(){return(new Date).getTime()},setSessionFromUrl:function(){var e=!0,t=!1,n=void 0;try{for(var r,i=o[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var a=r.value,c=this.queryUrl(a)||"";c&&this.setSession(a,c)}}catch(e){t=!0,n=e}finally{try{!e&&i.return&&i.return()}finally{if(t)throw n}}},getParamByName:function(e){var t,n,r;return(t=this.queryUrl(e))&&this.setSession(e,t),n=this.getSession(e),r=this.getLocalStorage(e),t||n||r||""},setSession:function(e,t){sessionStorage.setItem(e,t)},getSession:function(e){return sessionStorage.getItem(e)},getLocalStorage:function(e){return localStorage.getItem(e)},queryUrl:function(e){var t=window.location.href.match(new RegExp("[(?)|(&)]"+e+"=[^?&\\/#]*","g")),n="";if(t){1===t.length?n=(t[0]||"").split("=")[1]:t.length>1&&(n=(t[t.length-1]||"").split("=")[1])}return n||""}},fire:function(e,t,n,r,i){n||(n={}),n.T=e||"Nm",n.M=t,n.U=encodeURIComponent(window.location.href),n.S=r||"",i&&"api"==i?this.utils.fireAPI("https://trace.2dfire.com/0.gif",n):this.utils.fireStatic("https://trace.2dfire.com/0.gif",n)}};t.default=a}])});