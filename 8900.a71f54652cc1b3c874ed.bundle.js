"use strict";(self.webpackChunk_shopby_react_skin=self.webpackChunk_shopby_react_skin||[]).push([[8900],{7927:(e,t,r)=>{r.d(t,{AE:()=>m,ZP:()=>h,Ze:()=>v,uc:()=>s});var n=r(7294),o=r(5697),u=r(7294);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s={isMain:!1,hasBackBtnOnHeader:!1,hasHomeBtnOnHeader:!1,hasCartBtnOnHeader:!1,hasSearchKeywordHeader:!1,hasCancelBtnOnHeader:!1,hasBottomNav:!1,title:""},y=(0,n.createContext)(null),p=(0,n.createContext)(null),b=function(e){var t,r,o=e.children,a=(t=(0,n.useState)(s),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,a,i=[],c=!0,l=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=u.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],l=a[1],b=(0,n.useMemo)((function(){return{changeLayoutStatus:function(e){return l(c(c({},s),e))}}}),[l]);return u.createElement(y.Provider,{value:b},u.createElement(p.Provider,{value:i},o))},m=function(){var e=(0,n.useContext)(y);if(!e)throw new Error("INVALID_LayoutActionContext");return e},v=function(){var e=(0,n.useContext)(p);if(!e)throw new Error("INVALID_LayoutValueContext");return e};const h=b;b.propTypes={children:(0,o.oneOfType)([o.node,o.element]).isRequired}},176:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(7294),o=r(7927);const u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.uc,t=(0,o.AE)().changeLayoutStatus;(0,n.useEffect)((function(){t&&t(e)}),[t,e])}},8900:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(3219),o=r(7605),u=r(5748),a=r(176),i=r(1777),c=r(7294),l=function(){var e=(0,n.$G)("title").t;return(0,a.Z)({hasBackBtnOnHeader:!0,title:e("signIn")}),c.createElement(o.ZP,null,c.createElement(u.ZP,null,c.createElement(i.Z,null)))};const f=l;l.propTypes={};const s=f}}]);