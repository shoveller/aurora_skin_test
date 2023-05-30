"use strict";(self.webpackChunk_shopby_react_skin=self.webpackChunk_shopby_react_skin||[]).push([[9114],{9114:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(7294),o=n(246),c=n(9437),a=n(2557),i=n(8504),l=n(8412),s=n(5697),u=["kcCd04","kcCd05","kcCd06","방송통신기자재 잠정인증","방송통신기자재 적합등록","방송통신기자재 적합인증"],m=n(7294),f=function(e){var t=e.certifications,n=void 0===t?[]:t;return m.createElement(m.Fragment,null,n.map((function(e,t){return m.createElement("dl",{className:"kc-info",key:"".concat(e.no,"-").concat(t)},m.createElement("dt",null,e.type," 안전확인 대상 품목으로 아래의 국가 통합인증 필함"),m.createElement(a.Z,{shows:u.includes(e.code)||u.includes(e.type),TruthyComponent:m.createElement("dd",null,m.createElement("span",{className:"kc-logo"}),m.createElement("span",null,"인증 날짜: ",m.createElement("a",{href:"https://rra.go.kr/ko/license/A_c_search.do"},e.date))),FalsyComponent:m.createElement("dd",null,m.createElement("span",{className:"kc-logo"}),"인증 번호:"," ",m.createElement("a",{href:"https://www.safetykorea.kr/search/searchPop?certNum=".concat(e.code)},e.code))}))})))};f.propTypes={certifications:(0,s.arrayOf)((0,s.shape)({no:s.number,type:s.string,code:s.string,date:s.string}))};const p=f;var d=n(7294),y=function(e){var t=e.includesKcInDutyInfo,n=e.showsOnPageDetail,r=e.certificationInformation,o=n||!t&&"NOT_TARGET"!==(null==r?void 0:r.certificationType),c=!t&&"TARGET"===(null==r?void 0:r.certificationType);return d.createElement(d.Fragment,null,d.createElement(a.Z,{shows:o,TruthyComponent:d.createElement("p",{className:"product-content__title"},"인증 정보")}),d.createElement(a.Z,{shows:c,TruthyComponent:d.createElement(d.Fragment,null,d.createElement(p,{certifications:null==r?void 0:r.certifications}))}),d.createElement(a.Z,{shows:"DETAIL_PAGE"===(null==r?void 0:r.certificationType),TruthyComponent:d.createElement("p",null,"상품 상세페이지 내 별도 표기")}))};y.propTypes={includesKcInDutyInfo:s.bool,showsOnPageDetail:s.bool,certificationInformation:(0,s.shape)({certificationType:s.string,certifications:(0,s.arrayOf)((0,s.shape)({no:s.number,type:s.string,code:s.string,date:s.string}))})};const h=y;var E=n(7294),v=function(e){var t=e.hasDutyInfo,n=e.includesKcInDutyInfo,r=e.contents,o=void 0===r?[]:r,c=e.certifications;return E.createElement(E.Fragment,null,E.createElement(a.Z,{shows:t,TruthyComponent:E.createElement("p",{className:"product-content__title"},"상품정보제공고시")}),E.createElement(a.Z,{shows:t,TruthyComponent:E.createElement("div",{className:"product-content__certification product-content__certification--duty-info"},o.map((function(e,t){var r=e.label,o=e.description;return E.createElement("dl",{key:t},E.createElement("dt",null,r),E.createElement("dd",null,E.createElement(a.Z,{shows:n&&r.startsWith("KC"),TruthyComponent:E.createElement(E.Fragment,null,o,E.createElement(p,{certifications:c})),FalsyComponent:o})))})))}))};const g=v;v.propTypes={hasDutyInfo:s.bool,includesKcInDutyInfo:s.bool,contents:(0,s.arrayOf)((0,s.shape)({label:s.string,description:s.string})),certifications:(0,s.arrayOf)((0,s.shape)({no:s.number,type:s.string,code:s.string,date:s.string}))};var I=n(7294),b=["dutyInfo"];function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],l=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const _=function(){var e=(0,r.useRef)(),t=w((0,r.useState)(!1),2),n=t[0],s=t[1],u=w((0,r.useState)(!1),2),m=u[0],f=u[1],p=(0,o.NO)().productDetail,d=p.content,y=d.dutyInfo,E=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(d,b),v=p.baseInfo,T=(0,c.I1)().originOption,_=(0,r.useMemo)((function(){var e=Object.values(E);return{hasContent:e.some(Boolean),contents:e}}),[E]),O=_.contents,C=_.hasContent,k=(0,r.useMemo)((function(){var e,t;return{showsOptionImages:null==v?void 0:v.optionImageViewable,optionImages:null===(e=null!==(t=null==T?void 0:T.flatOptions)&&void 0!==t?t:[])||void 0===e?void 0:e.flatMap((function(e){return e.images.filter((function(e){return e.main}))}))}}),[null==v?void 0:v.optionImageViewable,null==T?void 0:T.flatOptions]),D=k.showsOptionImages,A=k.optionImages,N=(0,r.useMemo)((function(){var e;return{hasDutyInfo:y.contents.length>0,includesKcInDutyInfo:null===(e=y.contents)||void 0===e?void 0:e.some((function(e){return e.label.startsWith("KC")}))}}),[y]),Z=N.hasDutyInfo,j=N.includesKcInDutyInfo;return requestAnimationFrame((function(){var t,n=null==e||null===(t=e.current)||void 0===t?void 0:t.offsetHeight;f(n>=500)})),I.createElement(I.Fragment,null,I.createElement("div",{ref:e,className:"editor product-content__content ".concat(n?"":"hidden")},I.createElement("div",{className:"product-content__content-box"},I.createElement(a.Z,{shows:C||D,TruthyComponent:I.createElement("p",{className:"product-content__title"},"상품상세정보")}),I.createElement(a.Z,{shows:D,TruthyComponent:I.createElement("div",null,null==A?void 0:A.map((function(e,t){return I.createElement("div",{key:"option-main-image-".concat(t)},I.createElement("img",{src:e.url}))}))),FalsyComponent:I.createElement("div",null,O.map((function(e,t){return I.createElement(i.Z,{key:"product-detail-content-".concat(t),html:null!=e?e:""})})))}),I.createElement(a.Z,{shows:!C&&!D,TruthyComponent:I.createElement("p",{className:"product-content__empty-content"},"등록된 상품 상세 정보가 없습니다.")}),I.createElement(g,{hasDutyInfo:Z,includesKcInDutyInfo:j,contents:y.contents,certifications:null==v?void 0:v.certifications}),I.createElement(h,{includesKcInDutyInfo:j,showsOnPageDetail:"DETAIL_PAGE"===(null==v?void 0:v.certificationType),certificationInformation:{certificationType:null==v?void 0:v.certificationType,certifications:null==v?void 0:v.certifications}}),I.createElement(a.Z,{shows:m,TruthyComponent:I.createElement("div",{className:"product-content__more-btn"},I.createElement("button",{onClick:function(){return s((function(e){return!e}))}},n?"상세정보 접기":"상세정보 펼쳐보기"))}))),I.createElement(l.default,null))}}}]);