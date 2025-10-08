(self.webpackChunkquickso_cms=self.webpackChunkquickso_cms||[]).push([[3064],{52451:(z,W,v)=>{"use strict";z.exports=v(55638)},55638:function(z,W,v){(function(m,j){z.exports=j(v(96540),v(8162),v(21732))})(this,function(m,j,u){return function(o){var n={};function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return o[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=o,t.c=n,t.d=function(r,s,l){t.o(r,s)||Object.defineProperty(r,s,{enumerable:!0,get:l})},t.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,s){if(1&s&&(r=t(r)),8&s||4&s&&typeof r=="object"&&r&&r.__esModule)return r;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:r}),2&s&&typeof r!="string")for(var c in r)t.d(l,c,function(f){return r[f]}.bind(null,c));return l},t.n=function(r){var s=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(s,"a",s),s},t.o=function(r,s){return Object.prototype.hasOwnProperty.call(r,s)},t.p="",t(t.s=112)}({0:function(o,n,t){o.exports=t(19)()},1:function(o,n){o.exports=m},10:function(o,n,t){var r=t(25),s=t(26),l=t(22),c=t(27);o.exports=function(f,h){return r(f)||s(f,h)||l(f,h)||c()},o.exports.default=o.exports,o.exports.__esModule=!0},112:function(o,n,t){"use strict";t.r(n),t.d(n,"Crumb",function(){return R}),t.d(n,"Breadcrumbs",function(){return D});var r,s=t(4),l=t.n(s),c=t(3),f=t.n(c),h=t(1),y=t.n(h),x=t(0),d=t.n(x),p=t(2),b=t.n(p),P=t(50),S=t.n(P),M=t(8),a=t(5),e=t(9),i=t(18),g=["children","label"],B=b()(e.Flex)(r||(r=f()([`
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
`])),.625,.625,function(A){return A.theme.colors.neutral500},a.Box,M.Typography,function(A){return A.theme.colors.neutral800},function(A){return A.theme.fontWeights.bold}),R=function(A){var V=A.children;return y.a.createElement(B,{inline:!0,as:"li"},y.a.createElement(M.Typography,{variant:"pi",textColor:"neutral600"},V),y.a.createElement(a.Box,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},y.a.createElement(S.a,null)))};R.displayName="Crumb",R.propTypes={children:d.a.node.isRequired};var U=d.a.shape({type:d.a.oneOf([R])}),D=function(A){var V=A.children,G=A.label,$=l()(A,g);return y.a.createElement(e.Flex,$,y.a.createElement(i.VisuallyHidden,null,G),y.a.createElement("ol",{"aria-hidden":!0},V))};D.displayName="Breadcrumbs",D.propTypes={children:d.a.oneOfType([d.a.arrayOf(U),U]).isRequired,label:d.a.string.isRequired}},13:function(o,n){function t(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(o.exports=t=function(s){return typeof s},o.exports.default=o.exports,o.exports.__esModule=!0):(o.exports=t=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},o.exports.default=o.exports,o.exports.__esModule=!0),t(r)}o.exports=t,o.exports.default=o.exports,o.exports.__esModule=!0},18:function(o,n,t){"use strict";t.r(n),t.d(n,"VisuallyHidden",function(){return f});var r,s=t(3),l=t.n(s),c=t(2),f=t.n(c).a.div(r||(r=l()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},19:function(o,n,t){"use strict";var r=t(20);function s(){}function l(){}l.resetWarningCache=s,o.exports=function(){function c(y,x,d,p,b,P){if(P!==r){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}function f(){return c}c.isRequired=c;var h={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:f,element:c,elementType:c,instanceOf:f,node:c,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:l,resetWarningCache:s};return h.PropTypes=h,h}},2:function(o,n){o.exports=j},20:function(o,n,t){"use strict";o.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(o,n){o.exports=function(t,r){(r==null||r>t.length)&&(r=t.length);for(var s=0,l=new Array(r);s<r;s++)l[s]=t[s];return l},o.exports.default=o.exports,o.exports.__esModule=!0},22:function(o,n,t){var r=t(21);o.exports=function(s,l){if(s){if(typeof s=="string")return r(s,l);var c=Object.prototype.toString.call(s).slice(8,-1);return c==="Object"&&s.constructor&&(c=s.constructor.name),c==="Map"||c==="Set"?Array.from(s):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?r(s,l):void 0}},o.exports.default=o.exports,o.exports.__esModule=!0},24:function(o,n){o.exports=function(t,r){if(t==null)return{};var s,l,c={},f=Object.keys(t);for(l=0;l<f.length;l++)s=f[l],r.indexOf(s)>=0||(c[s]=t[s]);return c},o.exports.default=o.exports,o.exports.__esModule=!0},25:function(o,n){o.exports=function(t){if(Array.isArray(t))return t},o.exports.default=o.exports,o.exports.__esModule=!0},26:function(o,n){o.exports=function(t,r){var s=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(s!=null){var l,c,f=[],h=!0,y=!1;try{for(s=s.call(t);!(h=(l=s.next()).done)&&(f.push(l.value),!r||f.length!==r);h=!0);}catch(x){y=!0,c=x}finally{try{h||s.return==null||s.return()}finally{if(y)throw c}}return f}},o.exports.default=o.exports,o.exports.__esModule=!0},27:function(o,n){o.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},o.exports.default=o.exports,o.exports.__esModule=!0},3:function(o,n){o.exports=function(t,r){return r||(r=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))},o.exports.default=o.exports,o.exports.__esModule=!0},4:function(o,n,t){var r=t(24);o.exports=function(s,l){if(s==null)return{};var c,f,h=r(s,l);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(s);for(f=0;f<y.length;f++)c=y[f],l.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(s,c)&&(h[c]=s[c])}return h},o.exports.default=o.exports,o.exports.__esModule=!0},5:function(o,n,t){"use strict";t.r(n),t.d(n,"Box",function(){return a});var r,s=t(3),l=t.n(s),c=t(2),f=t.n(c),h=t(7),y=t(1),x=t.n(y),d=t(0),p=t.n(d),b=function(e){return x.a.createElement("div",e)},P={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},S={_hover:p.a.func,background:p.a.string,basis:p.a.oneOfType([p.a.string,p.a.string]),borderColor:p.a.string,children:p.a.oneOfType([p.a.node,p.a.string]),color:p.a.string,flex:p.a.oneOfType([p.a.string,p.a.string]),grow:p.a.oneOfType([p.a.string,p.a.string]),hasRadius:p.a.bool,hiddenS:p.a.bool,hiddenXS:p.a.bool,padding:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingBottom:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingLeft:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingRight:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingTop:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),shadow:p.a.string,shrink:p.a.oneOfType([p.a.string,p.a.string])};b.defaultProps=P,b.propTypes=S;var M={color:!0},a=f.a.div.withConfig({shouldForwardProp:function(e,i){return!M[e]&&i(e)}})(r||(r=l()([`
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
`])),function(e){var i=e.fontSize;return e.theme.fontSizes[i]||i},function(e){var i=e.theme,g=e.background;return i.colors[g]},function(e){var i=e.theme,g=e.color;return i.colors[g]},function(e){var i=e.theme,g=e.padding;return Object(h.a)("padding",g,i)},function(e){var i=e.theme,g=e.paddingTop;return Object(h.a)("padding-top",g,i)},function(e){var i=e.theme,g=e.paddingRight;return Object(h.a)("padding-right",g,i)},function(e){var i=e.theme,g=e.paddingBottom;return Object(h.a)("padding-bottom",g,i)},function(e){var i=e.theme,g=e.paddingLeft;return Object(h.a)("padding-left",g,i)},function(e){var i=e.theme,g=e.marginLeft;return Object(h.a)("margin-left",g,i)},function(e){var i=e.theme,g=e.marginRight;return Object(h.a)("margin-right",g,i)},function(e){var i=e.theme,g=e.marginTop;return Object(h.a)("margin-top",g,i)},function(e){var i=e.theme,g=e.marginBottom;return Object(h.a)("margin-bottom",g,i)},function(e){var i=e.theme;return e.hiddenS?"".concat(i.mediaQueries.tablet," { display: none; }"):void 0},function(e){var i=e.theme;return e.hiddenXS?"".concat(i.mediaQueries.mobile," { display: none; }"):void 0},function(e){var i=e.theme,g=e.hasRadius,B=e.borderRadius;return g?i.borderRadius:B},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var i=e.borderColor;return e.theme.colors[i]},function(e){var i=e.theme,g=e.borderColor,B=e.borderStyle,R=e.borderWidth;if(g&&!B&&!R)return"1px solid ".concat(i.colors[g])},function(e){var i=e.theme,g=e.shadow;return i.shadows[g]},function(e){return e.pointerEvents},function(e){var i=e._hover,g=e.theme;return i?i(g):void 0},function(e){return e.display},function(e){return e.position},function(e){var i=e.left;return e.theme.spaces[i]||i},function(e){var i=e.right;return e.theme.spaces[i]||i},function(e){var i=e.top;return e.theme.spaces[i]||i},function(e){var i=e.bottom;return e.theme.spaces[i]||i},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var i=e.width;return e.theme.spaces[i]||i},function(e){var i=e.maxWidth;return e.theme.spaces[i]||i},function(e){var i=e.minWidth;return e.theme.spaces[i]||i},function(e){var i=e.height;return e.theme.spaces[i]||i},function(e){var i=e.maxHeight;return e.theme.spaces[i]||i},function(e){var i=e.minHeight;return e.theme.spaces[i]||i},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});a.defaultProps=P,a.propTypes=S},50:function(o,n){o.exports=u},7:function(o,n,t){"use strict";var r=t(10),s=t.n(r),l=t(13),c=t.n(l);n.a=function(f,h,y){var x=h;if(Array.isArray(h)||c()(h)!=="object"||(x=[h==null?void 0:h.desktop,h==null?void 0:h.tablet,h==null?void 0:h.mobile]),x!==void 0){if(Array.isArray(x)){var d=x,p=s()(d,3),b=p[0],P=p[1],S=p[2],M="".concat(f,": ").concat(y.spaces[b],";");return P!==void 0&&(M+="".concat(y.mediaQueries.tablet,`{
          `).concat(f,": ").concat(y.spaces[P],`;
        }`)),S!==void 0&&(M+="".concat(y.mediaQueries.mobile,`{
          `).concat(f,": ").concat(y.spaces[S],`;
        }`)),M}var a=y.spaces[x]||x;return"".concat(f,": ").concat(a,";")}}},8:function(o,n,t){"use strict";t.r(n),t.d(n,"Typography",function(){return a});var r,s=t(3),l=t.n(s),c=t(2),f=t.n(c),h=["alpha","beta","delta","epsilon","omega","pi","sigma"],y=t(1),x=t.n(y),d=t(0),p=t.n(d),b=function(e){return x.a.createElement("div",e)},P={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},S={ellipsis:p.a.bool,fontSize:p.a.oneOfType([p.a.number,p.a.string]),fontWeight:p.a.string,lineHeight:p.a.oneOfType([p.a.number,p.a.string]),textColor:p.a.string,textTransform:p.a.string,variant:p.a.oneOf(h)};b.defaultProps=P,b.propTypes=S;var M={fontSize:!0,fontWeight:!0},a=f.a.span.withConfig({shouldForwardProp:function(e,i){return!M[e]&&i(e)}})(r||(r=l()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(e){var i=e.theme,g=e.fontWeight;return i.fontWeights[g]},function(e){var i=e.theme,g=e.fontSize;return i.fontSizes[g]},function(e){var i=e.theme,g=e.lineHeight;return i.lineHeights[g]},function(e){var i=e.theme,g=e.textColor;return i.colors[g||"neutral800"]},function(e){return e.textTransform},function(e){return e.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(e){var i=e.variant,g=e.theme;switch(i){case"alpha":return`
        font-weight: `.concat(g.fontWeights.bold,`;
        font-size: `).concat(g.fontSizes[5],`;
        line-height: `).concat(g.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(g.fontWeights.bold,`;
        font-size: `).concat(g.fontSizes[4],`;
        line-height: `).concat(g.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(g.fontWeights.semiBold,`;
        font-size: `).concat(g.fontSizes[3],`;
        line-height: `).concat(g.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(g.fontSizes[3],`;
        line-height: `).concat(g.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(g.fontSizes[2],`;
        line-height: `).concat(g.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(g.fontSizes[1],`;
        line-height: `).concat(g.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(g.fontWeights.bold,`;
        font-size: `).concat(g.fontSizes[0],`;
        line-height: `).concat(g.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(g.fontSizes[2],`;
      `)}});a.defaultProps=P,a.propTypes=S},9:function(o,n,t){"use strict";t.r(n),t.d(n,"Flex",function(){return e});var r,s=t(3),l=t.n(s),c=t(2),f=t.n(c),h=t(5),y=t(7),x=t(1),d=t.n(x),p=t(0),b=t.n(p),P=function(i){return d.a.createElement("div",i)},S={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},M={alignItems:b.a.string,basis:b.a.oneOfType([b.a.string,b.a.number]),direction:b.a.string,gap:b.a.oneOfType([b.a.shape({desktop:b.a.number,mobile:b.a.number,tablet:b.a.number}),b.a.number,b.a.arrayOf(b.a.number),b.a.string]),inline:b.a.bool,justifyContent:b.a.string,reverse:b.a.bool,shrink:b.a.number,wrap:b.a.string};P.defaultProps=S,P.propTypes=M;var a={direction:!0},e=f()(h.Box).withConfig({shouldForwardProp:function(i,g){return!a[i]&&g(i)}})(r||(r=l()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-shrink: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(i){return i.alignItems},function(i){return i.inline?"inline-flex":"flex"},function(i){return i.direction},function(i){return i.shrink},function(i){return i.wrap},function(i){var g=i.gap,B=i.theme;return Object(y.a)("gap",g,B)},function(i){return i.justifyContent});e.defaultProps=S,e.propTypes=M}})})},10848:(z,W,v)=>{"use strict";z.exports=v(35871)},35871:function(z,W,v){(function(m,j){z.exports=j(v(96540),v(8162))})(this,function(m,j){return function(u){var o={};function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return u[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=u,n.c=o,n.d=function(t,r,s){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:s})},n.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r||4&r&&typeof t=="object"&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&r&&typeof t!="string")for(var l in t)n.d(s,l,function(c){return t[c]}.bind(null,l));return s},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=110)}({0:function(u,o,n){u.exports=n(19)()},1:function(u,o){u.exports=m},10:function(u,o,n){var t=n(25),r=n(26),s=n(22),l=n(27);u.exports=function(c,f){return t(c)||r(c,f)||s(c,f)||l()},u.exports.default=u.exports,u.exports.__esModule=!0},110:function(u,o,n){"use strict";n.r(o),n.d(o,"Main",function(){return a}),n.d(o,"SkipToContent",function(){return B});var t,r=n(6),s=n.n(r),l=n(4),c=n.n(l),f=n(3),h=n.n(f),y=n(1),x=n.n(y),d=n(0),p=n.n(d),b=n(2),P=n.n(b),S=["labelledBy"],M=P.a.main(t||(t=h()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),a=function(R){var U=R.labelledBy,D=c()(R,S),A=U||"main-content-title";return x.a.createElement(M,s()({"aria-labelledby":A,id:"main-content",tabIndex:-1},D))};a.defaultProps={labelledBy:void 0},a.propTypes={labelledBy:p.a.string};var e,i=n(5),g=P()(i.Box)(e||(e=h()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(R){return R.theme.spaces[3]},function(R){return R.theme.spaces[3]}),B=function(R){var U=R.children;return x.a.createElement(g,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},U)};B.propTypes={children:p.a.node.isRequired}},13:function(u,o){function n(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(u.exports=n=function(r){return typeof r},u.exports.default=u.exports,u.exports.__esModule=!0):(u.exports=n=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},u.exports.default=u.exports,u.exports.__esModule=!0),n(t)}u.exports=n,u.exports.default=u.exports,u.exports.__esModule=!0},19:function(u,o,n){"use strict";var t=n(20);function r(){}function s(){}s.resetWarningCache=r,u.exports=function(){function l(h,y,x,d,p,b){if(b!==t){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}function c(){return l}l.isRequired=l;var f={array:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:c,element:l,elementType:l,instanceOf:c,node:l,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:s,resetWarningCache:r};return f.PropTypes=f,f}},2:function(u,o){u.exports=j},20:function(u,o,n){"use strict";u.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(u,o){u.exports=function(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=n[r];return s},u.exports.default=u.exports,u.exports.__esModule=!0},22:function(u,o,n){var t=n(21);u.exports=function(r,s){if(r){if(typeof r=="string")return t(r,s);var l=Object.prototype.toString.call(r).slice(8,-1);return l==="Object"&&r.constructor&&(l=r.constructor.name),l==="Map"||l==="Set"?Array.from(r):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?t(r,s):void 0}},u.exports.default=u.exports,u.exports.__esModule=!0},24:function(u,o){u.exports=function(n,t){if(n==null)return{};var r,s,l={},c=Object.keys(n);for(s=0;s<c.length;s++)r=c[s],t.indexOf(r)>=0||(l[r]=n[r]);return l},u.exports.default=u.exports,u.exports.__esModule=!0},25:function(u,o){u.exports=function(n){if(Array.isArray(n))return n},u.exports.default=u.exports,u.exports.__esModule=!0},26:function(u,o){u.exports=function(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var s,l,c=[],f=!0,h=!1;try{for(r=r.call(n);!(f=(s=r.next()).done)&&(c.push(s.value),!t||c.length!==t);f=!0);}catch(y){h=!0,l=y}finally{try{f||r.return==null||r.return()}finally{if(h)throw l}}return c}},u.exports.default=u.exports,u.exports.__esModule=!0},27:function(u,o){u.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},u.exports.default=u.exports,u.exports.__esModule=!0},3:function(u,o){u.exports=function(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))},u.exports.default=u.exports,u.exports.__esModule=!0},4:function(u,o,n){var t=n(24);u.exports=function(r,s){if(r==null)return{};var l,c,f=t(r,s);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(c=0;c<h.length;c++)l=h[c],s.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(r,l)&&(f[l]=r[l])}return f},u.exports.default=u.exports,u.exports.__esModule=!0},5:function(u,o,n){"use strict";n.r(o),n.d(o,"Box",function(){return M});var t,r=n(3),s=n.n(r),l=n(2),c=n.n(l),f=n(7),h=n(1),y=n.n(h),x=n(0),d=n.n(x),p=function(a){return y.a.createElement("div",a)},b={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},P={_hover:d.a.func,background:d.a.string,basis:d.a.oneOfType([d.a.string,d.a.string]),borderColor:d.a.string,children:d.a.oneOfType([d.a.node,d.a.string]),color:d.a.string,flex:d.a.oneOfType([d.a.string,d.a.string]),grow:d.a.oneOfType([d.a.string,d.a.string]),hasRadius:d.a.bool,hiddenS:d.a.bool,hiddenXS:d.a.bool,padding:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingBottom:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingLeft:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingRight:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingTop:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),shadow:d.a.string,shrink:d.a.oneOfType([d.a.string,d.a.string])};p.defaultProps=b,p.propTypes=P;var S={color:!0},M=c.a.div.withConfig({shouldForwardProp:function(a,e){return!S[a]&&e(a)}})(t||(t=s()([`
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
`])),function(a){var e=a.fontSize;return a.theme.fontSizes[e]||e},function(a){var e=a.theme,i=a.background;return e.colors[i]},function(a){var e=a.theme,i=a.color;return e.colors[i]},function(a){var e=a.theme,i=a.padding;return Object(f.a)("padding",i,e)},function(a){var e=a.theme,i=a.paddingTop;return Object(f.a)("padding-top",i,e)},function(a){var e=a.theme,i=a.paddingRight;return Object(f.a)("padding-right",i,e)},function(a){var e=a.theme,i=a.paddingBottom;return Object(f.a)("padding-bottom",i,e)},function(a){var e=a.theme,i=a.paddingLeft;return Object(f.a)("padding-left",i,e)},function(a){var e=a.theme,i=a.marginLeft;return Object(f.a)("margin-left",i,e)},function(a){var e=a.theme,i=a.marginRight;return Object(f.a)("margin-right",i,e)},function(a){var e=a.theme,i=a.marginTop;return Object(f.a)("margin-top",i,e)},function(a){var e=a.theme,i=a.marginBottom;return Object(f.a)("margin-bottom",i,e)},function(a){var e=a.theme;return a.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0},function(a){var e=a.theme;return a.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0},function(a){var e=a.theme,i=a.hasRadius,g=a.borderRadius;return i?e.borderRadius:g},function(a){return a.borderStyle},function(a){return a.borderWidth},function(a){var e=a.borderColor;return a.theme.colors[e]},function(a){var e=a.theme,i=a.borderColor,g=a.borderStyle,B=a.borderWidth;if(i&&!g&&!B)return"1px solid ".concat(e.colors[i])},function(a){var e=a.theme,i=a.shadow;return e.shadows[i]},function(a){return a.pointerEvents},function(a){var e=a._hover,i=a.theme;return e?e(i):void 0},function(a){return a.display},function(a){return a.position},function(a){var e=a.left;return a.theme.spaces[e]||e},function(a){var e=a.right;return a.theme.spaces[e]||e},function(a){var e=a.top;return a.theme.spaces[e]||e},function(a){var e=a.bottom;return a.theme.spaces[e]||e},function(a){return a.zIndex},function(a){return a.overflow},function(a){return a.cursor},function(a){var e=a.width;return a.theme.spaces[e]||e},function(a){var e=a.maxWidth;return a.theme.spaces[e]||e},function(a){var e=a.minWidth;return a.theme.spaces[e]||e},function(a){var e=a.height;return a.theme.spaces[e]||e},function(a){var e=a.maxHeight;return a.theme.spaces[e]||e},function(a){var e=a.minHeight;return a.theme.spaces[e]||e},function(a){return a.transition},function(a){return a.transform},function(a){return a.animation},function(a){return a.shrink},function(a){return a.grow},function(a){return a.basis},function(a){return a.flex},function(a){return a.textAlign},function(a){return a.textTransform},function(a){return a.lineHeight},function(a){return a.cursor});M.defaultProps=b,M.propTypes=P},6:function(u,o){function n(){return u.exports=n=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(t[l]=s[l])}return t},u.exports.default=u.exports,u.exports.__esModule=!0,n.apply(this,arguments)}u.exports=n,u.exports.default=u.exports,u.exports.__esModule=!0},7:function(u,o,n){"use strict";var t=n(10),r=n.n(t),s=n(13),l=n.n(s);o.a=function(c,f,h){var y=f;if(Array.isArray(f)||l()(f)!=="object"||(y=[f==null?void 0:f.desktop,f==null?void 0:f.tablet,f==null?void 0:f.mobile]),y!==void 0){if(Array.isArray(y)){var x=y,d=r()(x,3),p=d[0],b=d[1],P=d[2],S="".concat(c,": ").concat(h.spaces[p],";");return b!==void 0&&(S+="".concat(h.mediaQueries.tablet,`{
          `).concat(c,": ").concat(h.spaces[b],`;
        }`)),P!==void 0&&(S+="".concat(h.mediaQueries.mobile,`{
          `).concat(c,": ").concat(h.spaces[P],`;
        }`)),S}var M=h.spaces[y]||y;return"".concat(c,": ").concat(M,";")}}}})})},99440:function(z,W,v){(function(m,j){z.exports=j(v(96540))})(this,function(m){return function(j){var u={};function o(n){if(u[n])return u[n].exports;var t=u[n]={i:n,l:!1,exports:{}};return j[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=j,o.c=u,o.d=function(n,t,r){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},o.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t||4&t&&typeof n=="object"&&n&&n.__esModule)return n;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&typeof n!="string")for(var s in n)o.d(r,s,function(l){return n[l]}.bind(null,s));return r},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="",o(o.s=155)}({0:function(j,u){j.exports=m},155:function(j,u,o){"use strict";o.r(u);var n=o(0);function t(){return(t=Object.assign||function(r){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(r[c]=l[c])}return r}).apply(this,arguments)}u.default=function(r){return n.createElement("svg",t({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",fill:"#212134"}))}}})})},33953:(z,W,v)=>{"use strict";v.r(W),v.d(W,{default:()=>Oe});var m=v(96540),j=v(41337),u=v(89520),o=v(29434),n=v(94830),t=v(10848),r=v(25443),s=v(53210),l=v(67487),c=(E,O,T)=>new Promise((I,w)=>{var L=C=>{try{k(T.next(C))}catch(F){w(F)}},H=C=>{try{k(T.throw(C))}catch(F){w(F)}},k=C=>C.done?I(C.value):Promise.resolve(C.value).then(L,H);k((T=T.apply(E,O)).next())});const f=()=>c(void 0,null,function*(){const{data:E}=yield l.SP.get((0,l.X3)("email-templates"));return E}),h=E=>l.SP.put((0,l.X3)("email-templates"),E);var y=v(5556),x=v.n(y),d=v(7393),p=v(69210),b=v(63760),P=v(89764),S=v(48444),M=v(97582),a=v.n(M),e=v(99440),i=v.n(e),g=v(96327),B=v.n(g),R=Object.defineProperty,U=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,V=(E,O,T)=>O in E?R(E,O,{enumerable:!0,configurable:!0,writable:!0,value:T}):E[O]=T,G=(E,O)=>{for(var T in O||(O={}))D.call(O,T)&&V(E,T,O[T]);if(U)for(var T of U(O))A.call(O,T)&&V(E,T,O[T]);return E};const $=({canUpdate:E,onEditClick:O})=>{const{formatMessage:T}=(0,u.useIntl)();return m.createElement(d.Table,{colCount:3,rowCount:3},m.createElement(d.Thead,null,m.createElement(d.Tr,null,m.createElement(d.Th,{width:"1%"},m.createElement(p.VisuallyHidden,null,T({id:(0,l.gT)("Email.template.table.icon.label"),defaultMessage:"icon"}))),m.createElement(d.Th,null,m.createElement(b.Typography,{variant:"sigma",textColor:"neutral600"},T({id:(0,l.gT)("Email.template.table.name.label"),defaultMessage:"name"}))),m.createElement(d.Th,{width:"1%"},m.createElement(p.VisuallyHidden,null,T({id:(0,l.gT)("Email.template.table.action.label"),defaultMessage:"action"}))))),m.createElement(d.Tbody,null,m.createElement(d.Tr,G({},(0,o.onRowClick)({fn:()=>O("reset_password")})),m.createElement(d.Td,null,m.createElement(S.Icon,null,m.createElement(i(),{"aria-label":T({id:"global.reset-password",defaultMessage:"Reset password"})}))),m.createElement(d.Td,null,m.createElement(b.Typography,null,T({id:"global.reset-password",defaultMessage:"Reset password"}))),m.createElement(d.Td,G({},o.stopPropagation),m.createElement(P.IconButton,{onClick:()=>O("reset_password"),label:T({id:(0,l.gT)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:E&&m.createElement(a(),null)}))),m.createElement(d.Tr,G({},(0,o.onRowClick)({fn:()=>O("email_confirmation")})),m.createElement(d.Td,null,m.createElement(S.Icon,null,m.createElement(B(),{"aria-label":T({id:(0,l.gT)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),m.createElement(d.Td,null,m.createElement(b.Typography,null,T({id:(0,l.gT)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),m.createElement(d.Td,G({},o.stopPropagation),m.createElement(P.IconButton,{onClick:()=>O("email_confirmation"),label:T({id:(0,l.gT)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:E&&m.createElement(a(),null)})))))};$.propTypes={canUpdate:x().bool.isRequired,onEditClick:x().func.isRequired};const le=$;var ue=v(25221),Y=v(9410),Q=v(54109),ne=v(60245),ee=v(52451),ce=v(76399),_=v(68561);const de=_.Ik().shape({options:_.Ik().shape({from:_.Ik().shape({name:_.Yj().required(o.translatedErrors.required),email:_.Yj().email(o.translatedErrors.email).required(o.translatedErrors.required)}).required(),response_email:_.Yj().email(o.translatedErrors.email),object:_.Yj().required(o.translatedErrors.required),message:_.Yj().required(o.translatedErrors.required)}).required(o.translatedErrors.required)}),re=({template:E,onToggle:O,onSubmit:T})=>{const{formatMessage:I}=(0,u.useIntl)();return m.createElement(Y.ModalLayout,{onClose:O,labelledBy:`${I({id:(0,l.gT)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${I({id:(0,l.gT)(E.display),defaultMessage:E.display})}`},m.createElement(Y.ModalHeader,null,m.createElement(ee.Breadcrumbs,{label:`${I({id:(0,l.gT)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${I({id:(0,l.gT)(E.display),defaultMessage:E.display})}`},m.createElement(ee.Crumb,null,I({id:(0,l.gT)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),m.createElement(ee.Crumb,null,I({id:(0,l.gT)(E.display),defaultMessage:E.display})))),m.createElement(ue.Formik,{onSubmit:T,initialValues:E,validateOnChange:!1,validationSchema:de,enableReinitialize:!0},({errors:w,values:L,handleChange:H,isSubmitting:k})=>{var C,F,X,K,J,Z,q;return m.createElement(o.Form,null,m.createElement(Y.ModalBody,null,m.createElement(Q.Grid,{gap:5},m.createElement(Q.GridItem,{col:6,s:12},m.createElement(o.GenericInput,{intlLabel:{id:(0,l.gT)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:H,value:L.options.from.name,error:(F=(C=w==null?void 0:w.options)==null?void 0:C.from)==null?void 0:F.name,type:"text"})),m.createElement(Q.GridItem,{col:6,s:12},m.createElement(o.GenericInput,{intlLabel:{id:(0,l.gT)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:H,value:L.options.from.email,error:(K=(X=w==null?void 0:w.options)==null?void 0:X.from)==null?void 0:K.email,type:"text"})),m.createElement(Q.GridItem,{col:6,s:12},m.createElement(o.GenericInput,{intlLabel:{id:(0,l.gT)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:H,value:L.options.response_email,error:(J=w==null?void 0:w.options)==null?void 0:J.response_email,type:"text"})),m.createElement(Q.GridItem,{col:6,s:12},m.createElement(o.GenericInput,{intlLabel:{id:(0,l.gT)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:H,value:L.options.object,error:(Z=w==null?void 0:w.options)==null?void 0:Z.object,type:"text"})),m.createElement(Q.GridItem,{col:12,s:12},m.createElement(ce.Textarea,{label:I({id:(0,l.gT)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",onChange:H,value:L.options.message,error:((q=w==null?void 0:w.options)==null?void 0:q.message)&&I({id:w.options.message,defaultMessage:w.options.message})})))),m.createElement(Y.ModalFooter,{startActions:m.createElement(ne.Button,{onClick:O,variant:"tertiary"},"Cancel"),endActions:m.createElement(ne.Button,{loading:k,type:"submit"},"Finish")}))}))};re.propTypes={template:x().shape({display:x().string,icon:x().string,options:x().shape({from:x().shape({name:x().string,email:x().string}),message:x().string,object:x().string,response_email:x().string})}).isRequired,onSubmit:x().func.isRequired,onToggle:x().func.isRequired};const pe=re;var fe=Object.defineProperty,me=Object.defineProperties,ge=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ae=(E,O,T)=>O in E?fe(E,O,{enumerable:!0,configurable:!0,writable:!0,value:T}):E[O]=T,ye=(E,O)=>{for(var T in O||(O={}))he.call(O,T)&&ae(E,T,O[T]);if(oe)for(var T of oe(O))ve.call(O,T)&&ae(E,T,O[T]);return E},be=(E,O)=>me(E,ge(O)),xe=(E,O,T)=>new Promise((I,w)=>{var L=C=>{try{k(T.next(C))}catch(F){w(F)}},H=C=>{try{k(T.throw(C))}catch(F){w(F)}},k=C=>C.done?I(C.value):Promise.resolve(C.value).then(L,H);k((T=T.apply(E,O)).next())});const Te=()=>m.createElement(o.CheckPagePermissions,{permissions:s.A.readEmailTemplates},m.createElement(Ee,null)),Ee=()=>{const{formatMessage:E}=(0,u.useIntl)(),{trackUsage:O}=(0,o.useTracking)(),{notifyStatus:T}=(0,n.useNotifyAT)(),I=(0,o.useNotification)(),{lockApp:w,unlockApp:L}=(0,o.useOverlayBlocker)(),H=(0,m.useRef)(O),k=(0,j.useQueryClient)();(0,o.useFocusWhenNavigate)();const[C,F]=(0,m.useState)(!1),[X,K]=(0,m.useState)(null),J=(0,m.useMemo)(()=>({update:s.A.updateEmailTemplates}),[]),{isLoading:Z,allowedActions:{canUpdate:q}}=(0,o.useRBAC)(J),{status:Pe,data:ie}=(0,j.useQuery)("email-templates",()=>f(),{onSuccess(){T(E({id:(0,l.gT)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Se=Z||Pe!=="success",te=()=>{F(N=>!N)},je=N=>{K(N),te()},se=(0,j.useMutation)(N=>h({"email-templates":N}),{onSuccess(){return xe(this,null,function*(){yield k.invalidateQueries("email-templates"),I({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),H.current("didEditEmailTemplates"),L(),te()})},onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),L()},refetchActive:!0}),{isLoading:Me}=se,we=N=>{w(),H.current("willEditEmailTemplates");const Ce=be(ye({},ie),{[X]:N});se.mutate(Ce)};return Se?m.createElement(t.Main,{"aria-busy":"true"},m.createElement(o.SettingsPageTitle,{name:E({id:(0,l.gT)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),m.createElement(r.HeaderLayout,{title:E({id:(0,l.gT)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),m.createElement(r.ContentLayout,null,m.createElement(o.LoadingIndicatorPage,null))):m.createElement(t.Main,{"aria-busy":Me},m.createElement(o.SettingsPageTitle,{name:E({id:(0,l.gT)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),m.createElement(r.HeaderLayout,{title:E({id:(0,l.gT)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),m.createElement(r.ContentLayout,null,m.createElement(le,{onEditClick:je,canUpdate:q}),C&&m.createElement(pe,{template:ie[X],onToggle:te,onSubmit:we})))},Oe=Te},41745:(z,W,v)=>{"use strict";v.d(W,{A:()=>r});var m=v(72505),j=v.n(m),u=v(29434),o=v.n(u),n=(s,l,c)=>new Promise((f,h)=>{var y=p=>{try{d(c.next(p))}catch(b){h(b)}},x=p=>{try{d(c.throw(p))}catch(b){h(b)}},d=p=>p.done?f(p.value):Promise.resolve(p.value).then(y,x);d((c=c.apply(s,l)).next())});const t=j().create({baseURL:""});t.interceptors.request.use(s=>n(void 0,null,function*(){return s.headers={Authorization:`Bearer ${u.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},s}),s=>{Promise.reject(s)}),t.interceptors.response.use(s=>s,s=>{var l;throw((l=s.response)==null?void 0:l.status)===401&&(u.auth.clearAppStorage(),window.location.reload()),s});const r=t},67487:(z,W,v)=>{"use strict";v.d(W,{SP:()=>m.A,mr:()=>o,X3:()=>r,gT:()=>s.A});var m=v(41745),j=v(2543);const o=l=>Object.keys(l).reduce((c,f)=>{const h=l[f].controllers,y=Object.keys(h).reduce((x,d)=>((0,j.isEmpty)(h[d])||(x[d]=h[d]),x),{});return(0,j.isEmpty)(y)||(c[f]={controllers:y}),c},{});var n=v(73658);const r=l=>`/${n.A}/${l}`;var s=v(61843)}}]);
