(self.webpackChunkquickso_cms=self.webpackChunkquickso_cms||[]).push([[8750],{52451:(D,Y,g)=>{"use strict";D.exports=g(55638)},55638:function(D,Y,g){(function(v,I){D.exports=I(g(96540),g(8162),g(21732))})(this,function(v,I,l){return function(s){var a={};function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return s[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=s,t.c=a,t.d=function(n,i,u){t.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:u})},t.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,i){if(1&i&&(n=t(n)),8&i||4&i&&typeof n=="object"&&n&&n.__esModule)return n;var u=Object.create(null);if(t.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:n}),2&i&&typeof n!="string")for(var d in n)t.d(u,d,function(c){return n[c]}.bind(null,d));return u},t.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(i,"a",i),i},t.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},t.p="",t(t.s=112)}({0:function(s,a,t){s.exports=t(19)()},1:function(s,a){s.exports=v},10:function(s,a,t){var n=t(25),i=t(26),u=t(22),d=t(27);s.exports=function(c,p){return n(c)||i(c,p)||u(c,p)||d()},s.exports.default=s.exports,s.exports.__esModule=!0},112:function(s,a,t){"use strict";t.r(a),t.d(a,"Crumb",function(){return L}),t.d(a,"Breadcrumbs",function(){return V});var n,i=t(4),u=t.n(i),d=t(3),c=t.n(d),p=t(1),O=t.n(p),S=t(0),m=t.n(S),f=t(2),T=t.n(f),w=t(50),P=t.n(w),E=t(8),r=t(5),e=t(9),o=t(18),h=["children","label"],B=T()(e.Flex)(n||(n=c()([`
  svg {
    height: `,`rem;
    width: `,`rem;
    path {
      fill: `,`;
    }
  }
  :last-of-type `,` {
    display: none;
  }
  :last-of-type `,` {
    color: `,`;
    font-weight: `,`;
  }
`])),.625,.625,function(U){return U.theme.colors.neutral500},r.Box,E.Typography,function(U){return U.theme.colors.neutral800},function(U){return U.theme.fontWeights.bold}),L=function(U){var Q=U.children;return O.a.createElement(B,{inline:!0,as:"li"},O.a.createElement(E.Typography,{variant:"pi",textColor:"neutral600"},Q),O.a.createElement(r.Box,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},O.a.createElement(P.a,null)))};L.displayName="Crumb",L.propTypes={children:m.a.node.isRequired};var H=m.a.shape({type:m.a.oneOf([L])}),V=function(U){var Q=U.children,_=U.label,ee=u()(U,h);return O.a.createElement(e.Flex,ee,O.a.createElement(o.VisuallyHidden,null,_),O.a.createElement("ol",{"aria-hidden":!0},Q))};V.displayName="Breadcrumbs",V.propTypes={children:m.a.oneOfType([m.a.arrayOf(H),H]).isRequired,label:m.a.string.isRequired}},13:function(s,a){function t(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(s.exports=t=function(i){return typeof i},s.exports.default=s.exports,s.exports.__esModule=!0):(s.exports=t=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},s.exports.default=s.exports,s.exports.__esModule=!0),t(n)}s.exports=t,s.exports.default=s.exports,s.exports.__esModule=!0},18:function(s,a,t){"use strict";t.r(a),t.d(a,"VisuallyHidden",function(){return c});var n,i=t(3),u=t.n(i),d=t(2),c=t.n(d).a.div(n||(n=u()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},19:function(s,a,t){"use strict";var n=t(20);function i(){}function u(){}u.resetWarningCache=i,s.exports=function(){function d(O,S,m,f,T,w){if(w!==n){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}function c(){return d}d.isRequired=d;var p={array:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:c,element:d,elementType:d,instanceOf:c,node:d,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:u,resetWarningCache:i};return p.PropTypes=p,p}},2:function(s,a){s.exports=I},20:function(s,a,t){"use strict";s.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(s,a){s.exports=function(t,n){(n==null||n>t.length)&&(n=t.length);for(var i=0,u=new Array(n);i<n;i++)u[i]=t[i];return u},s.exports.default=s.exports,s.exports.__esModule=!0},22:function(s,a,t){var n=t(21);s.exports=function(i,u){if(i){if(typeof i=="string")return n(i,u);var d=Object.prototype.toString.call(i).slice(8,-1);return d==="Object"&&i.constructor&&(d=i.constructor.name),d==="Map"||d==="Set"?Array.from(i):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?n(i,u):void 0}},s.exports.default=s.exports,s.exports.__esModule=!0},24:function(s,a){s.exports=function(t,n){if(t==null)return{};var i,u,d={},c=Object.keys(t);for(u=0;u<c.length;u++)i=c[u],n.indexOf(i)>=0||(d[i]=t[i]);return d},s.exports.default=s.exports,s.exports.__esModule=!0},25:function(s,a){s.exports=function(t){if(Array.isArray(t))return t},s.exports.default=s.exports,s.exports.__esModule=!0},26:function(s,a){s.exports=function(t,n){var i=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var u,d,c=[],p=!0,O=!1;try{for(i=i.call(t);!(p=(u=i.next()).done)&&(c.push(u.value),!n||c.length!==n);p=!0);}catch(S){O=!0,d=S}finally{try{p||i.return==null||i.return()}finally{if(O)throw d}}return c}},s.exports.default=s.exports,s.exports.__esModule=!0},27:function(s,a){s.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},s.exports.default=s.exports,s.exports.__esModule=!0},3:function(s,a){s.exports=function(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))},s.exports.default=s.exports,s.exports.__esModule=!0},4:function(s,a,t){var n=t(24);s.exports=function(i,u){if(i==null)return{};var d,c,p=n(i,u);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(i);for(c=0;c<O.length;c++)d=O[c],u.indexOf(d)>=0||Object.prototype.propertyIsEnumerable.call(i,d)&&(p[d]=i[d])}return p},s.exports.default=s.exports,s.exports.__esModule=!0},5:function(s,a,t){"use strict";t.r(a),t.d(a,"Box",function(){return r});var n,i=t(3),u=t.n(i),d=t(2),c=t.n(d),p=t(7),O=t(1),S=t.n(O),m=t(0),f=t.n(m),T=function(e){return S.a.createElement("div",e)},w={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},P={_hover:f.a.func,background:f.a.string,basis:f.a.oneOfType([f.a.string,f.a.string]),borderColor:f.a.string,children:f.a.oneOfType([f.a.node,f.a.string]),color:f.a.string,flex:f.a.oneOfType([f.a.string,f.a.string]),grow:f.a.oneOfType([f.a.string,f.a.string]),hasRadius:f.a.bool,hiddenS:f.a.bool,hiddenXS:f.a.bool,padding:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingBottom:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingLeft:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingRight:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingTop:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),shadow:f.a.string,shrink:f.a.oneOfType([f.a.string,f.a.string])};T.defaultProps=w,T.propTypes=P;var E={color:!0},r=c.a.div.withConfig({shouldForwardProp:function(e,o){return!E[e]&&o(e)}})(n||(n=u()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var o=e.fontSize;return e.theme.fontSizes[o]||o},function(e){var o=e.theme,h=e.background;return o.colors[h]},function(e){var o=e.theme,h=e.color;return o.colors[h]},function(e){var o=e.theme,h=e.padding;return Object(p.a)("padding",h,o)},function(e){var o=e.theme,h=e.paddingTop;return Object(p.a)("padding-top",h,o)},function(e){var o=e.theme,h=e.paddingRight;return Object(p.a)("padding-right",h,o)},function(e){var o=e.theme,h=e.paddingBottom;return Object(p.a)("padding-bottom",h,o)},function(e){var o=e.theme,h=e.paddingLeft;return Object(p.a)("padding-left",h,o)},function(e){var o=e.theme,h=e.marginLeft;return Object(p.a)("margin-left",h,o)},function(e){var o=e.theme,h=e.marginRight;return Object(p.a)("margin-right",h,o)},function(e){var o=e.theme,h=e.marginTop;return Object(p.a)("margin-top",h,o)},function(e){var o=e.theme,h=e.marginBottom;return Object(p.a)("margin-bottom",h,o)},function(e){var o=e.theme;return e.hiddenS?"".concat(o.mediaQueries.tablet," { display: none; }"):void 0},function(e){var o=e.theme;return e.hiddenXS?"".concat(o.mediaQueries.mobile," { display: none; }"):void 0},function(e){var o=e.theme,h=e.hasRadius,B=e.borderRadius;return h?o.borderRadius:B},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var o=e.borderColor;return e.theme.colors[o]},function(e){var o=e.theme,h=e.borderColor,B=e.borderStyle,L=e.borderWidth;if(h&&!B&&!L)return"1px solid ".concat(o.colors[h])},function(e){var o=e.theme,h=e.shadow;return o.shadows[h]},function(e){return e.pointerEvents},function(e){var o=e._hover,h=e.theme;return o?o(h):void 0},function(e){return e.display},function(e){return e.position},function(e){var o=e.left;return e.theme.spaces[o]||o},function(e){var o=e.right;return e.theme.spaces[o]||o},function(e){var o=e.top;return e.theme.spaces[o]||o},function(e){var o=e.bottom;return e.theme.spaces[o]||o},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var o=e.width;return e.theme.spaces[o]||o},function(e){var o=e.maxWidth;return e.theme.spaces[o]||o},function(e){var o=e.minWidth;return e.theme.spaces[o]||o},function(e){var o=e.height;return e.theme.spaces[o]||o},function(e){var o=e.maxHeight;return e.theme.spaces[o]||o},function(e){var o=e.minHeight;return e.theme.spaces[o]||o},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});r.defaultProps=w,r.propTypes=P},50:function(s,a){s.exports=l},7:function(s,a,t){"use strict";var n=t(10),i=t.n(n),u=t(13),d=t.n(u);a.a=function(c,p,O){var S=p;if(Array.isArray(p)||d()(p)!=="object"||(S=[p==null?void 0:p.desktop,p==null?void 0:p.tablet,p==null?void 0:p.mobile]),S!==void 0){if(Array.isArray(S)){var m=S,f=i()(m,3),T=f[0],w=f[1],P=f[2],E="".concat(c,": ").concat(O.spaces[T],";");return w!==void 0&&(E+="".concat(O.mediaQueries.tablet,`{
          `).concat(c,": ").concat(O.spaces[w],`;
        }`)),P!==void 0&&(E+="".concat(O.mediaQueries.mobile,`{
          `).concat(c,": ").concat(O.spaces[P],`;
        }`)),E}var r=O.spaces[S]||S;return"".concat(c,": ").concat(r,";")}}},8:function(s,a,t){"use strict";t.r(a),t.d(a,"Typography",function(){return r});var n,i=t(3),u=t.n(i),d=t(2),c=t.n(d),p=["alpha","beta","delta","epsilon","omega","pi","sigma"],O=t(1),S=t.n(O),m=t(0),f=t.n(m),T=function(e){return S.a.createElement("div",e)},w={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},P={ellipsis:f.a.bool,fontSize:f.a.oneOfType([f.a.number,f.a.string]),fontWeight:f.a.string,lineHeight:f.a.oneOfType([f.a.number,f.a.string]),textColor:f.a.string,textTransform:f.a.string,variant:f.a.oneOf(p)};T.defaultProps=w,T.propTypes=P;var E={fontSize:!0,fontWeight:!0},r=c.a.span.withConfig({shouldForwardProp:function(e,o){return!E[e]&&o(e)}})(n||(n=u()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(e){var o=e.theme,h=e.fontWeight;return o.fontWeights[h]},function(e){var o=e.theme,h=e.fontSize;return o.fontSizes[h]},function(e){var o=e.theme,h=e.lineHeight;return o.lineHeights[h]},function(e){var o=e.theme,h=e.textColor;return o.colors[h||"neutral800"]},function(e){return e.textTransform},function(e){return e.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(e){var o=e.variant,h=e.theme;switch(o){case"alpha":return`
        font-weight: `.concat(h.fontWeights.bold,`;
        font-size: `).concat(h.fontSizes[5],`;
        line-height: `).concat(h.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(h.fontWeights.bold,`;
        font-size: `).concat(h.fontSizes[4],`;
        line-height: `).concat(h.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(h.fontWeights.semiBold,`;
        font-size: `).concat(h.fontSizes[3],`;
        line-height: `).concat(h.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(h.fontSizes[3],`;
        line-height: `).concat(h.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(h.fontSizes[2],`;
        line-height: `).concat(h.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(h.fontSizes[1],`;
        line-height: `).concat(h.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(h.fontWeights.bold,`;
        font-size: `).concat(h.fontSizes[0],`;
        line-height: `).concat(h.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(h.fontSizes[2],`;
      `)}});r.defaultProps=w,r.propTypes=P},9:function(s,a,t){"use strict";t.r(a),t.d(a,"Flex",function(){return e});var n,i=t(3),u=t.n(i),d=t(2),c=t.n(d),p=t(5),O=t(7),S=t(1),m=t.n(S),f=t(0),T=t.n(f),w=function(o){return m.a.createElement("div",o)},P={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},E={alignItems:T.a.string,basis:T.a.oneOfType([T.a.string,T.a.number]),direction:T.a.string,gap:T.a.oneOfType([T.a.shape({desktop:T.a.number,mobile:T.a.number,tablet:T.a.number}),T.a.number,T.a.arrayOf(T.a.number),T.a.string]),inline:T.a.bool,justifyContent:T.a.string,reverse:T.a.bool,shrink:T.a.number,wrap:T.a.string};w.defaultProps=P,w.propTypes=E;var r={direction:!0},e=c()(p.Box).withConfig({shouldForwardProp:function(o,h){return!r[o]&&h(o)}})(n||(n=u()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-shrink: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(o){return o.alignItems},function(o){return o.inline?"inline-flex":"flex"},function(o){return o.direction},function(o){return o.shrink},function(o){return o.wrap},function(o){var h=o.gap,B=o.theme;return Object(O.a)("gap",h,B)},function(o){return o.justifyContent});e.defaultProps=P,e.propTypes=E}})})},10848:(D,Y,g)=>{"use strict";D.exports=g(35871)},35871:function(D,Y,g){(function(v,I){D.exports=I(g(96540),g(8162))})(this,function(v,I){return function(l){var s={};function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return l[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=l,a.c=s,a.d=function(t,n,i){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},a.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n||4&n&&typeof t=="object"&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&typeof t!="string")for(var u in t)a.d(i,u,function(d){return t[d]}.bind(null,u));return i},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="",a(a.s=110)}({0:function(l,s,a){l.exports=a(19)()},1:function(l,s){l.exports=v},10:function(l,s,a){var t=a(25),n=a(26),i=a(22),u=a(27);l.exports=function(d,c){return t(d)||n(d,c)||i(d,c)||u()},l.exports.default=l.exports,l.exports.__esModule=!0},110:function(l,s,a){"use strict";a.r(s),a.d(s,"Main",function(){return r}),a.d(s,"SkipToContent",function(){return B});var t,n=a(6),i=a.n(n),u=a(4),d=a.n(u),c=a(3),p=a.n(c),O=a(1),S=a.n(O),m=a(0),f=a.n(m),T=a(2),w=a.n(T),P=["labelledBy"],E=w.a.main(t||(t=p()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),r=function(L){var H=L.labelledBy,V=d()(L,P),U=H||"main-content-title";return S.a.createElement(E,i()({"aria-labelledby":U,id:"main-content",tabIndex:-1},V))};r.defaultProps={labelledBy:void 0},r.propTypes={labelledBy:f.a.string};var e,o=a(5),h=w()(o.Box)(e||(e=p()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(L){return L.theme.spaces[3]},function(L){return L.theme.spaces[3]}),B=function(L){var H=L.children;return S.a.createElement(h,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},H)};B.propTypes={children:f.a.node.isRequired}},13:function(l,s){function a(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(l.exports=a=function(n){return typeof n},l.exports.default=l.exports,l.exports.__esModule=!0):(l.exports=a=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l.exports.default=l.exports,l.exports.__esModule=!0),a(t)}l.exports=a,l.exports.default=l.exports,l.exports.__esModule=!0},19:function(l,s,a){"use strict";var t=a(20);function n(){}function i(){}i.resetWarningCache=n,l.exports=function(){function u(p,O,S,m,f,T){if(T!==t){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}function d(){return u}u.isRequired=u;var c={array:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:d,element:u,elementType:u,instanceOf:d,node:u,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:i,resetWarningCache:n};return c.PropTypes=c,c}},2:function(l,s){l.exports=I},20:function(l,s,a){"use strict";l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(l,s){l.exports=function(a,t){(t==null||t>a.length)&&(t=a.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=a[n];return i},l.exports.default=l.exports,l.exports.__esModule=!0},22:function(l,s,a){var t=a(21);l.exports=function(n,i){if(n){if(typeof n=="string")return t(n,i);var u=Object.prototype.toString.call(n).slice(8,-1);return u==="Object"&&n.constructor&&(u=n.constructor.name),u==="Map"||u==="Set"?Array.from(n):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?t(n,i):void 0}},l.exports.default=l.exports,l.exports.__esModule=!0},24:function(l,s){l.exports=function(a,t){if(a==null)return{};var n,i,u={},d=Object.keys(a);for(i=0;i<d.length;i++)n=d[i],t.indexOf(n)>=0||(u[n]=a[n]);return u},l.exports.default=l.exports,l.exports.__esModule=!0},25:function(l,s){l.exports=function(a){if(Array.isArray(a))return a},l.exports.default=l.exports,l.exports.__esModule=!0},26:function(l,s){l.exports=function(a,t){var n=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var i,u,d=[],c=!0,p=!1;try{for(n=n.call(a);!(c=(i=n.next()).done)&&(d.push(i.value),!t||d.length!==t);c=!0);}catch(O){p=!0,u=O}finally{try{c||n.return==null||n.return()}finally{if(p)throw u}}return d}},l.exports.default=l.exports,l.exports.__esModule=!0},27:function(l,s){l.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},l.exports.default=l.exports,l.exports.__esModule=!0},3:function(l,s){l.exports=function(a,t){return t||(t=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(t)}}))},l.exports.default=l.exports,l.exports.__esModule=!0},4:function(l,s,a){var t=a(24);l.exports=function(n,i){if(n==null)return{};var u,d,c=t(n,i);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(d=0;d<p.length;d++)u=p[d],i.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(n,u)&&(c[u]=n[u])}return c},l.exports.default=l.exports,l.exports.__esModule=!0},5:function(l,s,a){"use strict";a.r(s),a.d(s,"Box",function(){return E});var t,n=a(3),i=a.n(n),u=a(2),d=a.n(u),c=a(7),p=a(1),O=a.n(p),S=a(0),m=a.n(S),f=function(r){return O.a.createElement("div",r)},T={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},w={_hover:m.a.func,background:m.a.string,basis:m.a.oneOfType([m.a.string,m.a.string]),borderColor:m.a.string,children:m.a.oneOfType([m.a.node,m.a.string]),color:m.a.string,flex:m.a.oneOfType([m.a.string,m.a.string]),grow:m.a.oneOfType([m.a.string,m.a.string]),hasRadius:m.a.bool,hiddenS:m.a.bool,hiddenXS:m.a.bool,padding:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingBottom:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingLeft:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingRight:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingTop:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),shadow:m.a.string,shrink:m.a.oneOfType([m.a.string,m.a.string])};f.defaultProps=T,f.propTypes=w;var P={color:!0},E=d.a.div.withConfig({shouldForwardProp:function(r,e){return!P[r]&&e(r)}})(t||(t=i()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(r){var e=r.fontSize;return r.theme.fontSizes[e]||e},function(r){var e=r.theme,o=r.background;return e.colors[o]},function(r){var e=r.theme,o=r.color;return e.colors[o]},function(r){var e=r.theme,o=r.padding;return Object(c.a)("padding",o,e)},function(r){var e=r.theme,o=r.paddingTop;return Object(c.a)("padding-top",o,e)},function(r){var e=r.theme,o=r.paddingRight;return Object(c.a)("padding-right",o,e)},function(r){var e=r.theme,o=r.paddingBottom;return Object(c.a)("padding-bottom",o,e)},function(r){var e=r.theme,o=r.paddingLeft;return Object(c.a)("padding-left",o,e)},function(r){var e=r.theme,o=r.marginLeft;return Object(c.a)("margin-left",o,e)},function(r){var e=r.theme,o=r.marginRight;return Object(c.a)("margin-right",o,e)},function(r){var e=r.theme,o=r.marginTop;return Object(c.a)("margin-top",o,e)},function(r){var e=r.theme,o=r.marginBottom;return Object(c.a)("margin-bottom",o,e)},function(r){var e=r.theme;return r.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0},function(r){var e=r.theme;return r.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0},function(r){var e=r.theme,o=r.hasRadius,h=r.borderRadius;return o?e.borderRadius:h},function(r){return r.borderStyle},function(r){return r.borderWidth},function(r){var e=r.borderColor;return r.theme.colors[e]},function(r){var e=r.theme,o=r.borderColor,h=r.borderStyle,B=r.borderWidth;if(o&&!h&&!B)return"1px solid ".concat(e.colors[o])},function(r){var e=r.theme,o=r.shadow;return e.shadows[o]},function(r){return r.pointerEvents},function(r){var e=r._hover,o=r.theme;return e?e(o):void 0},function(r){return r.display},function(r){return r.position},function(r){var e=r.left;return r.theme.spaces[e]||e},function(r){var e=r.right;return r.theme.spaces[e]||e},function(r){var e=r.top;return r.theme.spaces[e]||e},function(r){var e=r.bottom;return r.theme.spaces[e]||e},function(r){return r.zIndex},function(r){return r.overflow},function(r){return r.cursor},function(r){var e=r.width;return r.theme.spaces[e]||e},function(r){var e=r.maxWidth;return r.theme.spaces[e]||e},function(r){var e=r.minWidth;return r.theme.spaces[e]||e},function(r){var e=r.height;return r.theme.spaces[e]||e},function(r){var e=r.maxHeight;return r.theme.spaces[e]||e},function(r){var e=r.minHeight;return r.theme.spaces[e]||e},function(r){return r.transition},function(r){return r.transform},function(r){return r.animation},function(r){return r.shrink},function(r){return r.grow},function(r){return r.basis},function(r){return r.flex},function(r){return r.textAlign},function(r){return r.textTransform},function(r){return r.lineHeight},function(r){return r.cursor});E.defaultProps=T,E.propTypes=w},6:function(l,s){function a(){return l.exports=a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(t[u]=i[u])}return t},l.exports.default=l.exports,l.exports.__esModule=!0,a.apply(this,arguments)}l.exports=a,l.exports.default=l.exports,l.exports.__esModule=!0},7:function(l,s,a){"use strict";var t=a(10),n=a.n(t),i=a(13),u=a.n(i);s.a=function(d,c,p){var O=c;if(Array.isArray(c)||u()(c)!=="object"||(O=[c==null?void 0:c.desktop,c==null?void 0:c.tablet,c==null?void 0:c.mobile]),O!==void 0){if(Array.isArray(O)){var S=O,m=n()(S,3),f=m[0],T=m[1],w=m[2],P="".concat(d,": ").concat(p.spaces[f],";");return T!==void 0&&(P+="".concat(p.mediaQueries.tablet,`{
          `).concat(d,": ").concat(p.spaces[T],`;
        }`)),w!==void 0&&(P+="".concat(p.mediaQueries.mobile,`{
          `).concat(d,": ").concat(p.spaces[w],`;
        }`)),P}var E=p.spaces[O]||O;return"".concat(d,": ").concat(E,";")}}}})})},74567:(D,Y,g)=>{"use strict";g.r(Y),g.d(Y,{ProvidersPage:()=>xe,default:()=>Ke});var v=g(96540),I=g(89520),l=g(29434),s=g(61448),a=g.n(s),t=g(55808),n=g.n(t),i=g(46784),u=g(25443),d=g(10848),c=g(94830),p=g(7393),O=g(63760),S=g(69210),m=g(89764),f=g(97582),T=g.n(f),w=g(41337),P=g(68561),E=g(67487);const r={id:(0,E.gT)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},e={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},o={id:(0,E.gT)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},h={id:(0,E.gT)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},B={id:(0,E.gT)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},L={id:(0,E.gT)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},H={id:(0,E.gT)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},V={id:(0,E.gT)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Q={email:{form:[[{intlLabel:h,name:"enabled",type:"bool",description:o,size:6}]],schema:P.Ik().shape({enabled:P.lc().required(l.translatedErrors.required)})},providers:{form:[[{intlLabel:h,name:"enabled",type:"bool",description:o,size:6,validations:{required:!0}}],[{intlLabel:B,name:"key",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:V,name:"secret",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:r,placeholder:e,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:L,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:P.Ik().shape({enabled:P.lc().required(l.translatedErrors.required),key:P.Yj().when("enabled",{is:!0,then:P.Yj().required(l.translatedErrors.required),otherwise:P.Yj()}),secret:P.Yj().when("enabled",{is:!0,then:P.Yj().required(l.translatedErrors.required),otherwise:P.Yj()}),callback:P.Yj().when("enabled",{is:!0,then:P.Yj().required(l.translatedErrors.required),otherwise:P.Yj()})})},providersWithSubdomain:{form:[[{intlLabel:h,name:"enabled",type:"bool",description:o,size:6,validations:{required:!0}}],[{intlLabel:B,name:"key",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:V,name:"secret",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,E.gT)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,E.gT)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:r,placeholder:e,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:L,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:P.Ik().shape({enabled:P.lc().required(l.translatedErrors.required),key:P.Yj().when("enabled",{is:!0,then:P.Yj().required(l.translatedErrors.required),otherwise:P.Yj()}),secret:P.Yj().when("enabled",{is:!0,then:P.Yj().required(l.translatedErrors.required),otherwise:P.Yj()}),subdomain:P.Yj().when("enabled",{is:!0,then:P.Yj().required(l.translatedErrors.required),otherwise:P.Yj()}),callback:P.Yj().when("enabled",{is:!0,then:P.Yj().required(l.translatedErrors.required),otherwise:P.Yj()})})}};var _=(b,y,x)=>new Promise((k,C)=>{var W=R=>{try{F(x.next(R))}catch(M){C(M)}},A=R=>{try{F(x.throw(R))}catch(M){C(M)}},F=R=>R.done?k(R.value):Promise.resolve(R.value).then(W,A);F((x=x.apply(b,y)).next())});const ee=b=>_(void 0,null,function*(){try{const{data:y}=yield E.SP.get((0,E.X3)("providers"));return y}catch(y){throw b({type:"warning",message:{id:"notification.error"}}),new Error("error")}}),Te=b=>E.SP.put((0,E.X3)("providers"),b);var Ee=g(2543);const Se=b=>(0,Ee.sortBy)(Object.keys(b).reduce((y,x)=>{const{icon:k,enabled:C,subdomain:W}=b[x],A=k==="envelope"?["fas","envelope"]:["fab",k];return W!==void 0?y.push({name:x,icon:A,enabled:C,subdomain:W}):y.push({name:x,icon:A,enabled:C}),y},[]),"name");var ue=g(53210),de=g(60245),je=g(10661),ce=g(52451),fe=g(54109),G=g(9410),we=g(5556),j=g.n(we),Me=g(25221),Re=g(61129),Ce=g(69668),Le=Object.defineProperty,pe=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,me=(b,y,x)=>y in b?Le(b,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):b[y]=x,te=(b,y)=>{for(var x in y||(y={}))Ie.call(y,x)&&me(b,x,y[x]);if(pe)for(var x of pe(y))Ae.call(y,x)&&me(b,x,y[x]);return b};const re=({description:b,disabled:y,intlLabel:x,error:k,name:C,onChange:W,placeholder:A,providerToEditName:F,type:R,value:M})=>{const{formatMessage:N}=(0,I.useIntl)(),X=C==="noName"?`${strapi.backendURL}/api/connect/${F}/callback`:M,$=N({id:x.id,defaultMessage:x.defaultMessage},te({provider:F},x.values)),q=b?N({id:b.id,defaultMessage:b.defaultMessage},te({provider:F},b.values)):"";if(R==="bool")return v.createElement(Re.ToggleInput,{"aria-label":C,checked:M,disabled:y,hint:q,label:$,name:C,offLabel:N({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:N({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:K=>{W({target:{name:C,value:K.target.checked}})}});const ae=A?N({id:A.id,defaultMessage:A.defaultMessage},te({},A.values)):"",ie=k?N({id:k,defaultMessage:k}):"";return v.createElement(Ce.TextInput,{"aria-label":C,disabled:y,error:ie,label:$,name:C,onChange:W,placeholder:ae,type:R,value:X})};re.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},re.propTypes={description:j().shape({id:j().string.isRequired,defaultMessage:j().string.isRequired,values:j().object}),disabled:j().bool,error:j().string,intlLabel:j().shape({id:j().string.isRequired,defaultMessage:j().string.isRequired,values:j().object}).isRequired,name:j().string.isRequired,onChange:j().func.isRequired,placeholder:j().shape({id:j().string.isRequired,defaultMessage:j().string.isRequired,values:j().object}),providerToEditName:j().string.isRequired,type:j().string.isRequired,value:j().oneOfType([j().bool,j().string])};const ze=re;var Be=Object.defineProperty,ke=Object.defineProperties,Fe=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,ve=(b,y,x)=>y in b?Be(b,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):b[y]=x,He=(b,y)=>{for(var x in y||(y={}))Ue.call(y,x)&&ve(b,x,y[x]);if(he)for(var x of he(y))We.call(y,x)&&ve(b,x,y[x]);return b},De=(b,y)=>ke(b,Fe(y));const ne=({headerBreadcrumbs:b,initialData:y,isSubmiting:x,layout:k,isOpen:C,onSubmit:W,onToggle:A,providerToEditName:F})=>{const{formatMessage:R}=(0,I.useIntl)();return C?v.createElement(G.ModalLayout,{onClose:A,labelledBy:"title"},v.createElement(G.ModalHeader,null,v.createElement(ce.Breadcrumbs,{label:b.join(", ")},b.map(M=>v.createElement(ce.Crumb,{key:M},M)))),v.createElement(Me.Formik,{onSubmit:M=>W(M),initialValues:y,validationSchema:k.schema,validateOnChange:!1},({errors:M,handleChange:N,values:X})=>v.createElement(l.Form,null,v.createElement(G.ModalBody,null,v.createElement(je.Stack,{spacing:1},v.createElement(fe.Grid,{gap:5},k.form.map($=>$.map(q=>v.createElement(fe.GridItem,{key:q.name,col:q.size,xs:12},v.createElement(ze,De(He({},q),{error:M[q.name],onChange:N,value:X[q.name],providerToEditName:F})))))))),v.createElement(G.ModalFooter,{startActions:v.createElement(de.Button,{variant:"tertiary",onClick:A,type:"button"},R({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:v.createElement(de.Button,{type:"submit",loading:x},R({id:"global.save",defaultMessage:"Save"}))})))):null};ne.defaultProps={initialData:null,providerToEditName:null},ne.propTypes={headerBreadcrumbs:j().arrayOf(j().string).isRequired,initialData:j().object,layout:j().shape({form:j().arrayOf(j().array),schema:j().object}).isRequired,isOpen:j().bool.isRequired,isSubmiting:j().bool.isRequired,onSubmit:j().func.isRequired,onToggle:j().func.isRequired,providerToEditName:j().string};const Ye=ne;var Ne=Object.defineProperty,qe=Object.defineProperties,Ve=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,be=(b,y,x)=>y in b?Ne(b,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):b[y]=x,oe=(b,y)=>{for(var x in y||(y={}))Qe.call(y,x)&&be(b,x,y[x]);if(ge)for(var x of ge(y))Xe.call(y,x)&&be(b,x,y[x]);return b},$e=(b,y)=>qe(b,Ve(y)),ye=(b,y,x)=>new Promise((k,C)=>{var W=R=>{try{F(x.next(R))}catch(M){C(M)}},A=R=>{try{F(x.throw(R))}catch(M){C(M)}},F=R=>R.done?k(R.value):Promise.resolve(R.value).then(W,A);F((x=x.apply(b,y)).next())});const xe=()=>{const{formatMessage:b}=(0,I.useIntl)();(0,l.useFocusWhenNavigate)();const{notifyStatus:y}=(0,c.useNotifyAT)(),x=(0,w.useQueryClient)(),{trackUsage:k}=(0,l.useTracking)(),C=(0,v.useRef)(k),[W,A]=(0,v.useState)(!1),[F,R]=(0,v.useState)(!1),[M,N]=(0,v.useState)(null),X=(0,l.useNotification)(),{lockApp:$,unlockApp:q}=(0,l.useOverlayBlocker)(),ae=(0,v.useMemo)(()=>({update:ue.A.updateProviders}),[]),{isLoading:ie,allowedActions:{canUpdate:K}}=(0,l.useRBAC)(ae),{isLoading:Ge,data:J,isFetching:Je}=(0,w.useQuery)("get-providers",()=>ee(X),{onSuccess(){y(b({id:(0,E.gT)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Ze=Ge||Je,_e=(0,w.useMutation)(Te,{onSuccess(){return ye(this,null,function*(){yield x.invalidateQueries("get-providers"),X({type:"info",message:{id:(0,E.gT)("notification.success.submit")}}),C.current("didEditAuthenticationProvider"),R(!1),se(),q()})},onError(){X({type:"warning",message:{id:"notification.error"}}),q(),R(!1)},refetchActive:!1}),Z=(0,v.useMemo)(()=>Se(J),[J]),et=Z.length,Oe=(0,v.useMemo)(()=>{if(!M)return!1;const z=Z.find(le=>le.name===M);return a()(z,"subdomain")},[Z,M]),tt=b({id:(0,E.gT)("HeaderNav.link.providers"),defaultMessage:"Providers"}),rt=(0,v.useMemo)(()=>M==="email"?Q.email:Oe?Q.providersWithSubdomain:Q.providers,[M,Oe]),se=()=>{A(z=>!z)},Pe=z=>{K&&(N(z.name),se())},nt=z=>ye(void 0,null,function*(){R(!0),$(),C.current("willEditAuthenticationProvider");const le=$e(oe({},J),{[M]:z});_e.mutate({providers:le})});return v.createElement(u.Layout,null,v.createElement(l.SettingsPageTitle,{name:tt}),v.createElement(d.Main,null,v.createElement(u.HeaderLayout,{title:b({id:(0,E.gT)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Ze||ie?v.createElement(l.LoadingIndicatorPage,null):v.createElement(u.ContentLayout,null,v.createElement(p.Table,{colCount:4,rowCount:et+1},v.createElement(p.Thead,null,v.createElement(p.Tr,null,v.createElement(p.Th,null,v.createElement(O.Typography,{variant:"sigma",textColor:"neutral600"},v.createElement(S.VisuallyHidden,null,b({id:(0,E.gT)("Providers.image"),defaultMessage:"Image"})))),v.createElement(p.Th,null,v.createElement(O.Typography,{variant:"sigma",textColor:"neutral600"},b({id:"global.name",defaultMessage:"Name"}))),v.createElement(p.Th,null,v.createElement(O.Typography,{variant:"sigma",textColor:"neutral600"},b({id:(0,E.gT)("Providers.status"),defaultMessage:"Status"}))),v.createElement(p.Th,null,v.createElement(O.Typography,{variant:"sigma"},v.createElement(S.VisuallyHidden,null,b({id:"global.settings",defaultMessage:"Settings"})))))),v.createElement(p.Tbody,null,Z.map(z=>v.createElement(p.Tr,oe({key:z.name},(0,l.onRowClick)({fn:()=>Pe(z),condition:K})),v.createElement(p.Td,{width:""},v.createElement(i.g,{icon:z.icon})),v.createElement(p.Td,{width:"45%"},v.createElement(O.Typography,{fontWeight:"semiBold",textColor:"neutral800"},z.name)),v.createElement(p.Td,{width:"65%"},v.createElement(O.Typography,{textColor:z.enabled?"success600":"danger600","data-testid":`enable-${z.name}`},z.enabled?b({id:"global.enabled",defaultMessage:"Enabled"}):b({id:"global.disabled",defaultMessage:"Disabled"}))),v.createElement(p.Td,oe({},l.stopPropagation),K&&v.createElement(m.IconButton,{onClick:()=>Pe(z),noBorder:!0,icon:v.createElement(T(),null),label:"Edit"})))))))),v.createElement(Ye,{initialData:J[M],isOpen:W,isSubmiting:F,layout:rt,headerBreadcrumbs:[b({id:(0,E.gT)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),n()(M)],onToggle:se,onSubmit:nt,providerToEditName:M}))},Ke=()=>v.createElement(l.CheckPagePermissions,{permissions:ue.A.readProviders},v.createElement(xe,null))},41745:(D,Y,g)=>{"use strict";g.d(Y,{A:()=>n});var v=g(72505),I=g.n(v),l=g(29434),s=g.n(l),a=(i,u,d)=>new Promise((c,p)=>{var O=f=>{try{m(d.next(f))}catch(T){p(T)}},S=f=>{try{m(d.throw(f))}catch(T){p(T)}},m=f=>f.done?c(f.value):Promise.resolve(f.value).then(O,S);m((d=d.apply(i,u)).next())});const t=I().create({baseURL:""});t.interceptors.request.use(i=>a(void 0,null,function*(){return i.headers={Authorization:`Bearer ${l.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},i}),i=>{Promise.reject(i)}),t.interceptors.response.use(i=>i,i=>{var u;throw((u=i.response)==null?void 0:u.status)===401&&(l.auth.clearAppStorage(),window.location.reload()),i});const n=t},67487:(D,Y,g)=>{"use strict";g.d(Y,{SP:()=>v.A,mr:()=>s,X3:()=>n,gT:()=>i.A});var v=g(41745),I=g(2543);const s=u=>Object.keys(u).reduce((d,c)=>{const p=u[c].controllers,O=Object.keys(p).reduce((S,m)=>((0,I.isEmpty)(p[m])||(S[m]=p[m]),S),{});return(0,I.isEmpty)(O)||(d[c]={controllers:O}),d},{});var a=g(73658);const n=u=>`/${a.A}/${u}`;var i=g(61843)}}]);
