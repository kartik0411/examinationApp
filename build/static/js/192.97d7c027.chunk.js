/*! For license information please see 192.97d7c027.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkexaminationApp=self.webpackChunkexaminationApp||[]).push([[192],{9290:function(e,t,n){n.d(t,{nX:function(){return l},cK:function(){return c}});var o=n(4165),r=n(5861),a=n(4852),i=(n(8329),n(3524)),c=function(e){return function(){var t=(0,r.Z)((0,o.Z)().mark((function t(n){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=(0,r.Z)((0,o.Z)().mark((function t(r,c){var l,s,d,u;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:i.k1}),t.next=4,a.Z.post("/signup",e);case 4:l=t.sent,s=l.data,n({type:i.hk,payload:s}),n({type:i.v,payload:{showToast:!0,message:s.message,toastType:"success"}}),r(s),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:i.K_}),c((null===t.t0||void 0===t.t0||null===(d=t.t0.response)||void 0===d||null===(u=d.data)||void 0===u?void 0:u.message)||t.t0.message);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},l=function(){return function(e){return new Promise(function(){var t=(0,r.Z)((0,o.Z)().mark((function t(n,r){var c,l,s,d,u,m;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.get("/getAllSchools");case 3:c=t.sent,l=c.data,n(l.schools),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),e({type:i.v,payload:{showToast:!0,message:(null===t.t0||void 0===t.t0||null===(s=t.t0.response)||void 0===s||null===(d=s.data)||void 0===d?void 0:d.message)||t.t0.message,toastType:"error"}}),r((null===t.t0||void 0===t.t0||null===(u=t.t0.response)||void 0===u||null===(m=u.data)||void 0===m?void 0:m.message)||t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}())}}},4852:function(e,t,n){var o=n(5294),r=n(3524),a=o.Z.create({baseURL:r.CT,headers:{"Content-Type":"application/json"}}),i=JSON.parse(localStorage.getItem("token"));a.interceptors.request.use((function(e){return i&&(e.headers.authorization=i),e.headers["Access-Control-Allow-Origin"]="*",e}),(function(e){return Promise.reject(e)})),a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),t.Z=a},5192:function(e,t,n){n.r(t),n.d(t,{default:function(){return fe}});var o=n(4165),r=n(5861),a=n(2791),i=n(9434),c=n(7689),l=n(6106),s=n(914),d=n(5140),u=n(4942),m=n(9439),f=n(1694),p=n.n(f),g=n(7462),v=n(5987),h=n(1413),b=n(1002),x=n(5179),Z=n(8834),y=n(1818),S=n(8568),j=n(1605),C=function(e){return e?{left:e.offsetLeft,right:e.parentElement.clientWidth-e.clientWidth-e.offsetLeft,width:e.clientWidth}:null},w=function(e){return void 0!==e?"".concat(e,"px"):void 0};function O(e){var t=e.prefixCls,n=e.containerRef,o=e.value,r=e.getValueIndex,i=e.motionName,c=e.onMotionStart,l=e.onMotionEnd,s=e.direction,d=a.useRef(null),u=a.useState(o),f=(0,m.Z)(u,2),g=f[0],v=f[1],b=function(e){var o,a=r(e),i=null===(o=n.current)||void 0===o?void 0:o.querySelectorAll(".".concat(t,"-item"))[a];return(null===i||void 0===i?void 0:i.offsetParent)&&i},x=a.useState(null),y=(0,m.Z)(x,2),O=y[0],E=y[1],N=a.useState(null),k=(0,m.Z)(N,2),z=k[0],P=k[1];(0,j.Z)((function(){if(g!==o){var e=b(g),t=b(o),n=C(e),r=C(t);v(o),E(n),P(r),e&&t?c():l()}}),[o]);var R=a.useMemo((function(){return w("rtl"===s?-(null===O||void 0===O?void 0:O.right):null===O||void 0===O?void 0:O.left)}),[s,O]),M=a.useMemo((function(){return w("rtl"===s?-(null===z||void 0===z?void 0:z.right):null===z||void 0===z?void 0:z.left)}),[s,z]);return O&&z?a.createElement(S.ZP,{visible:!0,motionName:i,motionAppear:!0,onAppearStart:function(){return{transform:"translateX(var(--thumb-start-left))",width:"var(--thumb-start-width)"}},onAppearActive:function(){return{transform:"translateX(var(--thumb-active-left))",width:"var(--thumb-active-width)"}},onVisibleChanged:function(){E(null),P(null),l()}},(function(e,n){var o=e.className,r=e.style,i=(0,h.Z)((0,h.Z)({},r),{},{"--thumb-start-left":R,"--thumb-start-width":w(null===O||void 0===O?void 0:O.width),"--thumb-active-left":M,"--thumb-active-width":w(null===z||void 0===z?void 0:z.width)}),c={ref:(0,Z.sQ)(d,n),style:i,className:p()("".concat(t,"-thumb"),o)};return a.createElement("div",c)})):null}var E=["prefixCls","direction","options","disabled","defaultValue","value","onChange","className","motionName"];function N(e){return e.map((function(e){if("object"===(0,b.Z)(e)&&null!==e){var t=function(e){return"undefined"!==typeof e.title?e.title:"object"!==(0,b.Z)(e.label)?null===(t=e.label)||void 0===t?void 0:t.toString():void 0;var t}(e);return(0,h.Z)((0,h.Z)({},e),{},{title:t})}return{label:null===e||void 0===e?void 0:e.toString(),title:null===e||void 0===e?void 0:e.toString(),value:e}}))}var k=function(e){var t=e.prefixCls,n=e.className,o=e.disabled,r=e.checked,i=e.label,c=e.title,l=e.value,s=e.onChange;return a.createElement("label",{className:p()(n,(0,u.Z)({},"".concat(t,"-item-disabled"),o))},a.createElement("input",{className:"".concat(t,"-item-input"),type:"radio",disabled:o,checked:r,onChange:function(e){o||s(e,l)}}),a.createElement("div",{className:"".concat(t,"-item-label"),title:c},i))},z=a.forwardRef((function(e,t){var n,o,r=e.prefixCls,i=void 0===r?"rc-segmented":r,c=e.direction,l=e.options,s=e.disabled,d=e.defaultValue,f=e.value,h=e.onChange,b=e.className,S=void 0===b?"":b,j=e.motionName,C=void 0===j?"thumb-motion":j,w=(0,v.Z)(e,E),z=a.useRef(null),P=a.useMemo((function(){return(0,Z.sQ)(z,t)}),[z,t]),R=a.useMemo((function(){return N(l)}),[l]),M=(0,x.Z)(null===(n=R[0])||void 0===n?void 0:n.value,{value:f,defaultValue:d}),H=(0,m.Z)(M,2),T=H[0],I=H[1],A=a.useState(!1),B=(0,m.Z)(A,2),L=B[0],F=B[1],W=function(e,t){s||(I(t),null===h||void 0===h||h(t))},G=(0,y.Z)(w,["children"]);return a.createElement("div",(0,g.Z)({},G,{className:p()(i,(o={},(0,u.Z)(o,"".concat(i,"-rtl"),"rtl"===c),(0,u.Z)(o,"".concat(i,"-disabled"),s),o),S),ref:P}),a.createElement("div",{className:"".concat(i,"-group")},a.createElement(O,{prefixCls:i,value:T,containerRef:z,motionName:"".concat(i,"-").concat(C),direction:c,getValueIndex:function(e){return R.findIndex((function(t){return t.value===e}))},onMotionStart:function(){F(!0)},onMotionEnd:function(){F(!1)}}),R.map((function(e){return a.createElement(k,(0,g.Z)({},e,{key:e.value,prefixCls:i,className:p()(e.className,"".concat(i,"-item"),(0,u.Z)({},"".concat(i,"-item-selected"),e.value===T&&!L)),checked:e.value===T,onChange:W,disabled:!!s||!!e.disabled}))}))))}));z.displayName="Segmented",z.defaultProps={options:[]};var P=z,R=n(1929),M=n(4107),H=n(7521),T=n(5564),I=n(9922);function A(e,t){return(0,u.Z)({},"".concat(e,", ").concat(e,":hover, ").concat(e,":focus"),{color:t.colorTextDisabled,cursor:"not-allowed"})}function B(e){return{backgroundColor:e.itemSelectedBg,boxShadow:e.boxShadowTertiary}}var L=Object.assign({overflow:"hidden"},H.vS),F=function(e){var t,n,o,r,a=e.componentCls;return(0,u.Z)({},a,Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,H.Wf)(e)),(r={display:"inline-block",padding:e.segmentedPadding,color:e.itemColor,backgroundColor:e.segmentedBgColor,borderRadius:e.borderRadius,transition:"all ".concat(e.motionDurationMid," ").concat(e.motionEaseInOut)},(0,u.Z)(r,"".concat(a,"-group"),{position:"relative",display:"flex",alignItems:"stretch",justifyItems:"flex-start",width:"100%"}),(0,u.Z)(r,"&".concat(a,"-rtl"),{direction:"rtl"}),(0,u.Z)(r,"&".concat(a,"-block"),{display:"flex"}),(0,u.Z)(r,"&".concat(a,"-block ").concat(a,"-item"),{flex:1,minWidth:0}),(0,u.Z)(r,"".concat(a,"-item"),(t={position:"relative",textAlign:"center",cursor:"pointer",transition:"color ".concat(e.motionDurationMid," ").concat(e.motionEaseInOut),borderRadius:e.borderRadiusSM,transform:"translateZ(0)","&-selected":Object.assign(Object.assign({},B(e)),{color:e.itemSelectedColor}),"&::after":{content:'""',position:"absolute",width:"100%",height:"100%",top:0,insetInlineStart:0,borderRadius:"inherit",transition:"background-color ".concat(e.motionDurationMid),pointerEvents:"none"}},(0,u.Z)(t,"&:hover:not(".concat(a,"-item-selected):not(").concat(a,"-item-disabled)"),{color:e.itemHoverColor,"&::after":{backgroundColor:e.itemHoverBg}}),(0,u.Z)(t,"&:active:not(".concat(a,"-item-selected):not(").concat(a,"-item-disabled)"),{color:e.itemHoverColor,"&::after":{backgroundColor:e.itemActiveBg}}),(0,u.Z)(t,"&-label",Object.assign({minHeight:e.controlHeight-2*e.segmentedPadding,lineHeight:"".concat(e.controlHeight-2*e.segmentedPadding,"px"),padding:"0 ".concat(e.segmentedPaddingHorizontal,"px")},L)),(0,u.Z)(t,"&-icon + *",{marginInlineStart:e.marginSM/2}),(0,u.Z)(t,"&-input",{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:0,opacity:0,pointerEvents:"none"}),t)),(0,u.Z)(r,"".concat(a,"-thumb"),Object.assign(Object.assign({},B(e)),(0,u.Z)({position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:"100%",padding:"".concat(e.paddingXXS,"px 0"),borderRadius:e.borderRadiusSM},"& ~ ".concat(a,"-item:not(").concat(a,"-item-selected):not(").concat(a,"-item-disabled)::after"),{backgroundColor:"transparent"}))),(0,u.Z)(r,"&".concat(a,"-lg"),(n={borderRadius:e.borderRadiusLG},(0,u.Z)(n,"".concat(a,"-item-label"),{minHeight:e.controlHeightLG-2*e.segmentedPadding,lineHeight:"".concat(e.controlHeightLG-2*e.segmentedPadding,"px"),padding:"0 ".concat(e.segmentedPaddingHorizontal,"px"),fontSize:e.fontSizeLG}),(0,u.Z)(n,"".concat(a,"-item, ").concat(a,"-thumb"),{borderRadius:e.borderRadius}),n)),(0,u.Z)(r,"&".concat(a,"-sm"),(o={borderRadius:e.borderRadiusSM},(0,u.Z)(o,"".concat(a,"-item-label"),{minHeight:e.controlHeightSM-2*e.segmentedPadding,lineHeight:"".concat(e.controlHeightSM-2*e.segmentedPadding,"px"),padding:"0 ".concat(e.segmentedPaddingHorizontalSM,"px")}),(0,u.Z)(o,"".concat(a,"-item, ").concat(a,"-thumb"),{borderRadius:e.borderRadiusXS}),o)),r)),A("&-disabled ".concat(a,"-item"),e)),A("".concat(a,"-item-disabled"),e)),(0,u.Z)({},"".concat(a,"-thumb-motion-appear-active"),{transition:"transform ".concat(e.motionDurationSlow," ").concat(e.motionEaseInOut,", width ").concat(e.motionDurationSlow," ").concat(e.motionEaseInOut),willChange:"transform, width"})))},W=(0,T.Z)("Segmented",(function(e){var t=e.lineWidth,n=e.lineWidthBold,o=e.colorBgLayout,r=(0,I.TS)(e,{segmentedPadding:n,segmentedBgColor:o,segmentedPaddingHorizontal:e.controlPaddingHorizontal-t,segmentedPaddingHorizontalSM:e.controlPaddingHorizontalSM-t});return[F(r)]}),(function(e){var t=e.colorTextLabel,n=e.colorText;return{itemColor:t,itemHoverColor:n,itemHoverBg:e.colorFillSecondary,itemSelectedBg:e.colorBgElevated,itemActiveBg:e.colorFill,itemSelectedColor:n}})),G=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};var D=a.forwardRef((function(e,t){var n,o=e.prefixCls,r=e.className,i=e.rootClassName,c=e.block,l=e.options,s=void 0===l?[]:l,d=e.size,f=void 0===d?"middle":d,g=e.style,v=G(e,["prefixCls","className","rootClassName","block","options","size","style"]),h=a.useContext(R.E_),b=h.getPrefixCls,x=h.direction,Z=h.segmented,y=b("segmented",o),S=W(y),j=(0,m.Z)(S,2),C=j[0],w=j[1],O=(0,M.Z)(f),E=a.useMemo((function(){return s.map((function(e){if(function(e){return"object"===typeof e&&!!(null===e||void 0===e?void 0:e.icon)}(e)){var t=e.icon,n=e.label,o=G(e,["icon","label"]);return Object.assign(Object.assign({},o),{label:a.createElement(a.Fragment,null,a.createElement("span",{className:"".concat(y,"-item-icon")},t),n&&a.createElement("span",null,n))})}return e}))}),[s,y]),N=p()(r,i,null===Z||void 0===Z?void 0:Z.className,(n={},(0,u.Z)(n,"".concat(y,"-block"),c),(0,u.Z)(n,"".concat(y,"-sm"),"small"===O),(0,u.Z)(n,"".concat(y,"-lg"),"large"===O),n),w),k=Object.assign(Object.assign({},null===Z||void 0===Z?void 0:Z.style),g);return C(a.createElement(P,Object.assign({},v,{className:N,style:k,options:E,ref:t,prefixCls:y,direction:x})))}));var X=D,V=n(1143),U=n(635),_=n(2832),K=a.createContext({}),q=function(e){var t,n,o=e.antCls,r=e.componentCls,a=e.iconCls,i=e.avatarBg,c=e.avatarColor,l=e.containerSize,s=e.containerSizeLG,d=e.containerSizeSM,m=e.textFontSize,f=e.textFontSizeLG,p=e.textFontSizeSM,g=e.borderRadius,v=e.borderRadiusLG,h=e.borderRadiusSM,b=e.lineWidth,x=e.lineType,Z=function(e,t,n){var o;return o={width:e,height:e,lineHeight:"".concat(e-2*b,"px"),borderRadius:"50%"},(0,u.Z)(o,"&".concat(r,"-square"),{borderRadius:n}),(0,u.Z)(o,"".concat(r,"-string"),{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"}),(0,u.Z)(o,"&".concat(r,"-icon"),(0,u.Z)({fontSize:t},"> ".concat(a),{margin:0})),o};return(0,u.Z)({},r,Object.assign(Object.assign(Object.assign(Object.assign({},(0,H.Wf)(e)),(t={position:"relative",display:"inline-block",overflow:"hidden",color:c,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:i,border:"".concat(b,"px ").concat(x," transparent")},(0,u.Z)(t,"&-image",{background:"transparent"}),(0,u.Z)(t,"".concat(o,"-image-img"),{display:"block"}),t)),Z(l,m,g)),(n={},(0,u.Z)(n,"&-lg",Object.assign({},Z(s,f,v))),(0,u.Z)(n,"&-sm",Object.assign({},Z(d,p,h))),(0,u.Z)(n,"> img",{display:"block",width:"100%",height:"100%",objectFit:"cover"}),n)))},Q=function(e){var t,n,o=e.componentCls,r=e.groupBorderColor,a=e.groupOverlapping,i=e.groupSpace;return n={},(0,u.Z)(n,"".concat(o,"-group"),(t={display:"inline-flex"},(0,u.Z)(t,"".concat(o),{borderColor:r}),(0,u.Z)(t,"> *:not(:first-child)",{marginInlineStart:a}),t)),(0,u.Z)(n,"".concat(o,"-group-popover"),(0,u.Z)({},"".concat(o," + ").concat(o),{marginInlineStart:i})),n},J=(0,T.Z)("Avatar",(function(e){var t=e.colorTextLightSolid,n=e.colorTextPlaceholder,o=(0,I.TS)(e,{avatarBg:n,avatarColor:t});return[q(o),Q(o)]}),(function(e){var t=e.controlHeight,n=e.controlHeightLG,o=e.controlHeightSM,r=e.fontSize,a=e.fontSizeLG,i=e.fontSizeXL,c=e.fontSizeHeading3,l=e.marginXS,s=e.marginXXS,d=e.colorBorderBg;return{containerSize:t,containerSizeLG:n,containerSizeSM:o,textFontSize:Math.round((a+i)/2),textFontSizeLG:c,textFontSizeSM:r,groupSpace:s,groupOverlapping:-l,groupBorderColor:d}})),Y=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},$=function(e,t){var n,o,r=a.useState(1),i=(0,m.Z)(r,2),c=i[0],l=i[1],s=a.useState(!1),d=(0,m.Z)(s,2),f=d[0],g=d[1],v=a.useState(!0),h=(0,m.Z)(v,2),b=h[0],x=h[1],y=a.useRef(null),S=a.useRef(null),j=(0,Z.sQ)(t,y),C=a.useContext(R.E_),w=C.getPrefixCls,O=C.avatar,E=a.useContext(K),N=function(){if(S.current&&y.current){var t=S.current.offsetWidth,n=y.current.offsetWidth;if(0!==t&&0!==n){var o=e.gap,r=void 0===o?4:o;2*r<n&&l(n-2*r<t?(n-2*r)/t:1)}}};a.useEffect((function(){g(!0)}),[]),a.useEffect((function(){x(!0),l(1)}),[e.src]),a.useEffect(N,[e.gap]);var k,z=e.prefixCls,P=e.shape,H=e.size,T=e.src,I=e.srcSet,A=e.icon,B=e.className,L=e.rootClassName,F=e.alt,W=e.draggable,G=e.children,D=e.crossOrigin,X=Y(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),q=(0,M.Z)((function(e){var t,n;return null!==(n=null!==(t=null!==H&&void 0!==H?H:null===E||void 0===E?void 0:E.size)&&void 0!==t?t:e)&&void 0!==n?n:"default"})),Q=Object.keys("object"===typeof q&&q||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),$=(0,_.Z)(Q),ee=a.useMemo((function(){if("object"!==typeof q)return{};var e=U.c4.find((function(e){return $[e]})),t=q[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:t&&(A||G)?t/2:18}:{}}),[$,q]),te=w("avatar",z),ne=J(te),oe=(0,m.Z)(ne,2),re=oe[0],ae=oe[1],ie=p()((n={},(0,u.Z)(n,"".concat(te,"-lg"),"large"===q),(0,u.Z)(n,"".concat(te,"-sm"),"small"===q),n)),ce=a.isValidElement(T),le=P||(null===E||void 0===E?void 0:E.shape)||"circle",se=p()(te,ie,null===O||void 0===O?void 0:O.className,"".concat(te,"-").concat(le),(o={},(0,u.Z)(o,"".concat(te,"-image"),ce||T&&b),(0,u.Z)(o,"".concat(te,"-icon"),!!A),o),B,L,ae),de="number"===typeof q?{width:q,height:q,lineHeight:"".concat(q,"px"),fontSize:A?q/2:18}:{};if("string"===typeof T&&b)k=a.createElement("img",{src:T,draggable:W,srcSet:I,onError:function(){var t=e.onError;!1!==(null===t||void 0===t?void 0:t())&&x(!1)},alt:F,crossOrigin:D});else if(ce)k=T;else if(A)k=A;else if(f||1!==c){var ue="scale(".concat(c,") translateX(-50%)"),me={msTransform:ue,WebkitTransform:ue,transform:ue},fe="number"===typeof q?{lineHeight:"".concat(q,"px")}:{};k=a.createElement(V.Z,{onResize:N},a.createElement("span",{className:"".concat(te,"-string"),ref:S,style:Object.assign(Object.assign({},fe),me)},G))}else k=a.createElement("span",{className:"".concat(te,"-string"),style:{opacity:0},ref:S},G);return delete X.onError,delete X.gap,re(a.createElement("span",Object.assign({},X,{style:Object.assign(Object.assign(Object.assign(Object.assign({},de),ee),null===O||void 0===O?void 0:O.style),X.style),className:se,ref:j}),k))};var ee=a.forwardRef($),te=n(5501),ne=n(3403),oe=n(1113),re=function(e){var t=a.useContext(K),n=t.size,o=t.shape,r=a.useMemo((function(){return{size:e.size||n,shape:e.shape||o}}),[e.size,e.shape,n,o]);return a.createElement(K.Provider,{value:r},e.children)},ae=function(e){var t=a.useContext(R.E_),n=t.getPrefixCls,o=t.direction,r=e.prefixCls,i=e.className,c=e.rootClassName,l=e.style,s=e.maxCount,d=e.maxStyle,f=e.size,g=e.shape,v=e.maxPopoverPlacement,h=void 0===v?"top":v,b=e.maxPopoverTrigger,x=void 0===b?"hover":b,Z=e.children,y=n("avatar",r),S="".concat(y,"-group"),j=J(y),C=(0,m.Z)(j,2),w=C[0],O=C[1],E=p()(S,(0,u.Z)({},"".concat(S,"-rtl"),"rtl"===o),i,c,O),N=(0,te.Z)(Z).map((function(e,t){return(0,oe.Tm)(e,{key:"avatar-key-".concat(t)})})),k=N.length;if(s&&s<k){var z=N.slice(0,s),P=N.slice(s,k);return z.push(a.createElement(ne.Z,{key:"avatar-popover-key",content:P,trigger:x,placement:h,overlayClassName:"".concat(S,"-popover")},a.createElement(ee,{style:d},"+".concat(k-s)))),w(a.createElement(re,{shape:g,size:f},a.createElement("div",{className:E,style:l},z)))}return w(a.createElement(re,{shape:g,size:f},a.createElement("div",{className:E,style:l},N)))},ie=ee;ie.Group=ae;var ce=ie,le=n(376),se=n(2641),de=(n(9290),n(3524)),ue=(n(6470),n(859),n(4852)),me=n(184);var fe=function(){var e=(0,i.I0)(),t=(0,c.s0)(),n=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(r){var a,i,c,l,s;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,console.log("value hai "+JSON.stringify(r)),!(a=r.password)){n.next=9;break}return n.next=6,ue.Z.get("/students/"+a);case 6:c=n.sent,console.log(c),null!==c&&void 0!==c&&null!==(i=c.data)&&void 0!==i&&i.name?(console.log(null===c||void 0===c||null===(l=c.data)||void 0===l?void 0:l.name),e({type:de.v,payload:{showToast:!0,message:"Welcome "+(null===c||void 0===c||null===(s=c.data)||void 0===s?void 0:s.name),toastType:"success"}}),t("/student/exam/preview",{state:null===c||void 0===c?void 0:c.data})):e({type:de.v,payload:{showToast:!0,message:"No Student found for the provided details!",toastType:"error"}});case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),e({type:de.v,payload:{showToast:!0,message:"No Student found for the provided details!",toastType:"error"}});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}();return(0,me.jsx)("section",{className:"h-100 d-flex align-items-center justify-content-center",children:(0,me.jsx)("div",{className:"container-fluid h-100",children:(0,me.jsxs)(l.Z,{gutter:16,className:"h-100",children:[(0,me.jsx)(s.Z,{md:12,className:"d-flex align-items-center justify-content-center",children:(0,me.jsx)("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp",className:"img-fluid",alt:"Sample image"})}),(0,me.jsxs)(s.Z,{md:12,className:"d-flex justify-content-center flex-column",children:[(0,me.jsx)(l.Z,{gutter:16,children:(0,me.jsxs)(s.Z,{md:24,className:"d-flex align-items-center flex-column",children:[(0,me.jsx)("h1",{className:"mb-0",children:(0,me.jsx)("b",{children:"MYNDKARE"})}),(0,me.jsx)("p",{children:(0,me.jsx)("u",{children:"CAREER ASSESSMENT PLATFORM"})})]})}),(0,me.jsxs)(d.Z,{name:"trigger",onFinish:n,layout:"vertical",autoComplete:"off",initialValues:{role:"student"},children:[(0,me.jsx)(l.Z,{children:(0,me.jsx)(s.Z,{md:24,className:"d-flex align-items-center flex-column",children:(0,me.jsx)(d.Z.Item,{name:"role",children:(0,me.jsx)(X,{onChange:function(e){console.log(e)},defaultValue:"student",name:"role",options:[{label:(0,me.jsxs)("div",{style:{padding:4},children:[(0,me.jsx)(ce,{src:"\thttps://img.icons8.com/?size=512&id=23319&format=png"}),(0,me.jsx)("div",{children:"Student"})]}),value:"student"}]})})})}),(0,me.jsx)(l.Z,{className:"d-flex justify-content-center",children:(0,me.jsx)(s.Z,{md:15,className:"form-outline",children:(0,me.jsx)(d.Z.Item,{label:"Enter Exam Key",rules:[{required:!0,message:"Please enter your exam key!"}],name:"password",children:(0,me.jsx)(le.Z.Password,{placeholder:"Enter ExamKey"})})})}),(0,me.jsx)(l.Z,{className:"d-flex justify-content-center",children:(0,me.jsx)(s.Z,{md:15,children:(0,me.jsx)(se.ZP,{size:"middle",type:"primary",htmlType:"submit",loading:!1,children:"Login"})})})]})]})]})})})}},8329:function(e,t,n){function o(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}(function e(t,n){function r(e,r,a){if("undefined"!==typeof document){"number"===typeof(a=o({},n,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var c in a)a[c]&&(i+="; "+c,!0!==a[c]&&(i+="="+a[c].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+i}}return Object.create({set:r,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],o={},r=0;r<n.length;r++){var a=n[r].split("="),i=a.slice(1).join("=");try{var c=decodeURIComponent(a[0]);if(o[c]=t.read(i,c),e===c)break}catch(l){}}return e?o[e]:o}},remove:function(e,t){r(e,"",o({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,o({},this.attributes,t))},withConverter:function(t){return e(o({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})})({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}}]);
//# sourceMappingURL=192.97d7c027.chunk.js.map