!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";var r={interTime:70,endTime:300,startId:0,interval:20,sequence:[0,1,2,5,8,7,6,3]};e.a={name:"Turntable",props:{turntableOptions:{type:Object,default:function(){return{}}},prizeList:{type:Array,required:!0},lotteryId:{type:Number,required:!0},canStart:{type:Boolean,required:!0}},data:function(){return{mutex:!1,options:{},selectedId:-1,interTimeVal:70}},watch:{canStart:function(t){t&&this.startTurntable(this.lotteryId)}},created:function(){this.options=Object.assign({},r,this.turntableOptions),this.interTimeVal=this.options.interTime},methods:{clickLottery:function(){this.$emit("clickLottery")},startTurntable:function(t,e){var n=this;if(!e&&this.selectedId<0&&(this.selectedId=this.options.startId),4===t||!t)throw new Error("您配置的中奖id不正确");if(e||!this.mutex){this.mutex=!0;var r=setTimeout(function(){if(n.options.interTime>=n.options.endTime&&n.options.sequence[n.selectedId]===t)return n.$emit("success"),clearTimeout(r),n.mutex=!1,n.$emit("update:canStart",!1),void(n.options.interTime=n.interTimeVal);n.selectedId++,n.selectedId>=n.options.sequence.length&&(n.selectedId=0),n.options.interTime+=n.options.interval,n.options.interId=setTimeout(n.startTurntable(t,1),n.options.interTime)},this.options.interTime)}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);console.log(r.a,"turntable"),r.a.install=function(t){return t.component(r.a.name,r.a)},"undefined"!=typeof window&&window.Vue&&install(window.Vue),e.default=r.a},function(t,e,n){"use strict";function r(t){n(3)}var i=n(0),a=n(9),o=n(8),s=r,u=o(i.a,a.a,!1,s,"data-v-7b19b1e6",null);e.a=u.exports},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(6)("d4a8382a",r,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,".turntable-wrap[data-v-7b19b1e6]{width:9.333333rem;padding:.4rem 0;margin:0 auto;align-items:center;flex-wrap:wrap;background:#281d1b}.turntable-wrap .turntable-btn[data-v-7b19b1e6],.turntable-wrap .turntable-item[data-v-7b19b1e6],.turntable-wrap[data-v-7b19b1e6]{display:flex;justify-content:center}.turntable-wrap .turntable-btn[data-v-7b19b1e6],.turntable-wrap .turntable-item[data-v-7b19b1e6]{width:2.666667rem;height:2.666667rem;margin:.066667rem;border-radius:.266667rem;background:#eec587;flex-direction:column}.turntable-wrap .turntable-btn img[data-v-7b19b1e6],.turntable-wrap .turntable-item img[data-v-7b19b1e6]{display:block;width:1.333333rem;margin:.133333rem auto}.turntable-wrap .turntable-btn p[data-v-7b19b1e6],.turntable-wrap .turntable-item p[data-v-7b19b1e6]{text-align:center;font-size:.32rem;color:#fff;line-height:2}.turntable-wrap .turntable-btn .lottery-btn[data-v-7b19b1e6],.turntable-wrap .turntable-item .lottery-btn[data-v-7b19b1e6]{display:block;width:100%;outline:none;border:none;background:transparent;font-size:.533333rem;color:#fff}.start-btn[data-v-7b19b1e6]{font-size:.453333rem;color:#fff;text-align:center}.lottery-selected[data-v-7b19b1e6]{border:.08rem solid #fff391;box-sizing:border-box}",""])},function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var a=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(a(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],i=0;i<n.parts.length;i++)o.push(a(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:o}}}}function i(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function a(t){var e,n,r=document.querySelector("style["+h+'~="'+t.id+'"]');if(r){if(b)return m;r.parentNode.removeChild(r)}if(g){var a=p++;r=f||(f=i()),e=o.bind(null,r,a,!1),n=o.bind(null,r,a,!0)}else r=i(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function o(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var a=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function s(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),v.ssrId&&t.setAttribute(h,e.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(7),l={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,b=!1,m=function(){},v=null,h="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,i){b=n,v=i||{};var a=c(t,e);return r(a),function(e){for(var n=[],i=0;i<a.length;i++){var o=a[i],s=l[o.id];s.refs--,n.push(s)}e?(a=c(t,e),r(a)):a=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=a[0],s=a[1],u=a[2],c=a[3],l={id:t+":"+i,css:s,media:u,sourceMap:c};r[o]?r[o].parts.push(l):n.push(r[o]={id:o,parts:[l]})}return n}},function(t,e){t.exports=function(t,e,n,r,i,a){var o,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i);var l;if(a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):r&&(l=r),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(t,e){return l.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:o,exports:s,options:c}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"turntable-wrap"},t._l(t.prizeList,function(e,r){return n("li",{key:r,class:{"turntable-item":!0,"lottery-selected":t.options.sequence[t.selectedId]===r}},[4===r?[n("div",{staticClass:"start-btn",on:{click:t.clickLottery}},[t._v("免费抽奖")])]:n("div",[t._t("layout",[n("img",{attrs:{src:e.img,alt:""}}),t._v(" "),n("p",[t._v(t._s(e.name))])],{item:e})],2)],2)}),0)},i=[],a={render:r,staticRenderFns:i};e.a=a}]);
//# sourceMappingURL=vue-cb-turntable.js.map