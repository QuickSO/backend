(self.webpackChunkquickso_cms=self.webpackChunkquickso_cms||[]).push([[1188],{33389:(J,te,g)=>{"use strict";J.exports=g(16980)},16980:function(J,te,g){(function(s,N){J.exports=N(g(96540),g(8162),g(28651),g(92312))})(this,function(s,N,l,b){return function(e){var a={};function t(i){if(a[i])return a[i].exports;var o=a[i]={i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=a,t.d=function(i,o,p){t.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:p})},t.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,o){if(1&o&&(i=t(i)),8&o||4&o&&typeof i=="object"&&i&&i.__esModule)return i;var p=Object.create(null);if(t.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:i}),2&o&&typeof i!="string")for(var u in i)t.d(p,u,function(O){return i[O]}.bind(null,u));return p},t.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(o,"a",o),o},t.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},t.p="",t(t.s=115)}({0:function(e,a,t){e.exports=t(19)()},1:function(e,a){e.exports=s},10:function(e,a,t){var i=t(25),o=t(26),p=t(22),u=t(27);e.exports=function(O,E){return i(O)||o(O,E)||p(O,E)||u()},e.exports.default=e.exports,e.exports.__esModule=!0},115:function(e,a,t){"use strict";t.r(a),t.d(a,"Link",function(){return re});var i,o,p=t(6),u=t.n(p),O=t(4),E=t.n(O),S=t(3),y=t.n(S),z=t(1),v=t.n(z),F=t(0),w=t.n(F),B=t(2),r=t.n(B),c=t(83),n=t.n(c),d=t(37),x=t(8),U=t(5),K=t(16),ie=["href","to","children","disabled","startIcon","endIcon"],A=r.a.a(i||(i=y()([`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: `,`;
  svg path {
    fill: `,`;
  }
  svg {
    font-size: `,`rem;
  }
  &:hover,
  &:active {
    color: `,`;
  }
  `,`;
`])),function(I){return I.disabled?"none":void 0},function(I){var $=I.disabled,Q=I.theme;return $?Q.colors.neutral600:Q.colors.primary600},.625,function(I){return I.theme.colors.primary800},K.a),ne=r()(U.Box)(o||(o=y()([`
  display: flex;
`]))),re=function(I){var $=I.href,Q=I.to,he=I.children,k=I.disabled,le=I.startIcon,ue=I.endIcon,ye=E()(I,ie),be=$?"_blank":void 0,de=$?"noreferrer noopener":void 0;return v.a.createElement(A,u()({as:Q&&!k?d.NavLink:"a",target:be,rel:de,to:k?void 0:Q,href:k?"#":$,disabled:k},ye),le&&v.a.createElement(ne,{as:"span","aria-hidden":!0,paddingRight:2},le),v.a.createElement(x.Typography,{textColor:k?"neutral600":"primary600"},he),ue&&!$&&v.a.createElement(ne,{as:"span","aria-hidden":!0,paddingLeft:2},ue),$&&v.a.createElement(ne,{as:"span","aria-hidden":!0,paddingLeft:2},v.a.createElement(n.a,null)))};re.displayName="Link",re.defaultProps={href:void 0,to:void 0,disabled:!1},re.propTypes={children:w.a.node.isRequired,disabled:w.a.bool,endIcon:w.a.element,href:function(I){if(!I.disabled&&!I.to&&!I.href)return new Error("href must be defined")},startIcon:w.a.element,to:function(I){if(!I.disabled&&!I.href&&!I.to)return new Error("to must be defined")}}},13:function(e,a){function t(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(e.exports=t=function(o){return typeof o},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},e.exports.default=e.exports,e.exports.__esModule=!0),t(i)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},16:function(e,a,t){"use strict";t.d(a,"b",function(){return i}),t.d(a,"c",function(){return o}),t.d(a,"a",function(){return p});var i=function(u){return function(O){var E=O.theme,S=O.size;return E.sizes[u][S]}},o=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"&";return function(O){var E=O.theme,S=O.hasError;return`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      `.concat(u,`:focus-within {
        border: 1px solid `).concat(S?E.colors.danger600:E.colors.primary600,`;
        box-shadow: `).concat(S?E.colors.danger600:E.colors.primary600,` 0px 0px 0px 2px;
      }
    `)}},p=function(u){var O=u.theme;return`
  position: relative;
  outline: none;
  
  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid `.concat(O.colors.primary600,`;
    }
  }
`)}},19:function(e,a,t){"use strict";var i=t(20);function o(){}function p(){}p.resetWarningCache=o,e.exports=function(){function u(S,y,z,v,F,w){if(w!==i){var B=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw B.name="Invariant Violation",B}}function O(){return u}u.isRequired=u;var E={array:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:O,element:u,elementType:u,instanceOf:O,node:u,objectOf:O,oneOf:O,oneOfType:O,shape:O,exact:O,checkPropTypes:p,resetWarningCache:o};return E.PropTypes=E,E}},2:function(e,a){e.exports=N},20:function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(e,a){e.exports=function(t,i){(i==null||i>t.length)&&(i=t.length);for(var o=0,p=new Array(i);o<i;o++)p[o]=t[o];return p},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,a,t){var i=t(21);e.exports=function(o,p){if(o){if(typeof o=="string")return i(o,p);var u=Object.prototype.toString.call(o).slice(8,-1);return u==="Object"&&o.constructor&&(u=o.constructor.name),u==="Map"||u==="Set"?Array.from(o):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?i(o,p):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,a){e.exports=function(t,i){if(t==null)return{};var o,p,u={},O=Object.keys(t);for(p=0;p<O.length;p++)o=O[p],i.indexOf(o)>=0||(u[o]=t[o]);return u},e.exports.default=e.exports,e.exports.__esModule=!0},25:function(e,a){e.exports=function(t){if(Array.isArray(t))return t},e.exports.default=e.exports,e.exports.__esModule=!0},26:function(e,a){e.exports=function(t,i){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var p,u,O=[],E=!0,S=!1;try{for(o=o.call(t);!(E=(p=o.next()).done)&&(O.push(p.value),!i||O.length!==i);E=!0);}catch(y){S=!0,u=y}finally{try{E||o.return==null||o.return()}finally{if(S)throw u}}return O}},e.exports.default=e.exports,e.exports.__esModule=!0},27:function(e,a){e.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,a){e.exports=function(t,i){return i||(i=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(i)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},37:function(e,a){e.exports=l},4:function(e,a,t){var i=t(24);e.exports=function(o,p){if(o==null)return{};var u,O,E=i(o,p);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(o);for(O=0;O<S.length;O++)u=S[O],p.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(o,u)&&(E[u]=o[u])}return E},e.exports.default=e.exports,e.exports.__esModule=!0},5:function(e,a,t){"use strict";t.r(a),t.d(a,"Box",function(){return c});var i,o=t(3),p=t.n(o),u=t(2),O=t.n(u),E=t(7),S=t(1),y=t.n(S),z=t(0),v=t.n(z),F=function(n){return y.a.createElement("div",n)},w={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},B={_hover:v.a.func,background:v.a.string,basis:v.a.oneOfType([v.a.string,v.a.string]),borderColor:v.a.string,children:v.a.oneOfType([v.a.node,v.a.string]),color:v.a.string,flex:v.a.oneOfType([v.a.string,v.a.string]),grow:v.a.oneOfType([v.a.string,v.a.string]),hasRadius:v.a.bool,hiddenS:v.a.bool,hiddenXS:v.a.bool,padding:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),paddingBottom:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),paddingLeft:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),paddingRight:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),paddingTop:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),shadow:v.a.string,shrink:v.a.oneOfType([v.a.string,v.a.string])};F.defaultProps=w,F.propTypes=B;var r={color:!0},c=O.a.div.withConfig({shouldForwardProp:function(n,d){return!r[n]&&d(n)}})(i||(i=p()([`
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
`])),function(n){var d=n.fontSize;return n.theme.fontSizes[d]||d},function(n){var d=n.theme,x=n.background;return d.colors[x]},function(n){var d=n.theme,x=n.color;return d.colors[x]},function(n){var d=n.theme,x=n.padding;return Object(E.a)("padding",x,d)},function(n){var d=n.theme,x=n.paddingTop;return Object(E.a)("padding-top",x,d)},function(n){var d=n.theme,x=n.paddingRight;return Object(E.a)("padding-right",x,d)},function(n){var d=n.theme,x=n.paddingBottom;return Object(E.a)("padding-bottom",x,d)},function(n){var d=n.theme,x=n.paddingLeft;return Object(E.a)("padding-left",x,d)},function(n){var d=n.theme,x=n.marginLeft;return Object(E.a)("margin-left",x,d)},function(n){var d=n.theme,x=n.marginRight;return Object(E.a)("margin-right",x,d)},function(n){var d=n.theme,x=n.marginTop;return Object(E.a)("margin-top",x,d)},function(n){var d=n.theme,x=n.marginBottom;return Object(E.a)("margin-bottom",x,d)},function(n){var d=n.theme;return n.hiddenS?"".concat(d.mediaQueries.tablet," { display: none; }"):void 0},function(n){var d=n.theme;return n.hiddenXS?"".concat(d.mediaQueries.mobile," { display: none; }"):void 0},function(n){var d=n.theme,x=n.hasRadius,U=n.borderRadius;return x?d.borderRadius:U},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var d=n.borderColor;return n.theme.colors[d]},function(n){var d=n.theme,x=n.borderColor,U=n.borderStyle,K=n.borderWidth;if(x&&!U&&!K)return"1px solid ".concat(d.colors[x])},function(n){var d=n.theme,x=n.shadow;return d.shadows[x]},function(n){return n.pointerEvents},function(n){var d=n._hover,x=n.theme;return d?d(x):void 0},function(n){return n.display},function(n){return n.position},function(n){var d=n.left;return n.theme.spaces[d]||d},function(n){var d=n.right;return n.theme.spaces[d]||d},function(n){var d=n.top;return n.theme.spaces[d]||d},function(n){var d=n.bottom;return n.theme.spaces[d]||d},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var d=n.width;return n.theme.spaces[d]||d},function(n){var d=n.maxWidth;return n.theme.spaces[d]||d},function(n){var d=n.minWidth;return n.theme.spaces[d]||d},function(n){var d=n.height;return n.theme.spaces[d]||d},function(n){var d=n.maxHeight;return n.theme.spaces[d]||d},function(n){var d=n.minHeight;return n.theme.spaces[d]||d},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});c.defaultProps=w,c.propTypes=B},6:function(e,a){function t(){return e.exports=t=Object.assign||function(i){for(var o=1;o<arguments.length;o++){var p=arguments[o];for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&(i[u]=p[u])}return i},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},7:function(e,a,t){"use strict";var i=t(10),o=t.n(i),p=t(13),u=t.n(p);a.a=function(O,E,S){var y=E;if(Array.isArray(E)||u()(E)!=="object"||(y=[E==null?void 0:E.desktop,E==null?void 0:E.tablet,E==null?void 0:E.mobile]),y!==void 0){if(Array.isArray(y)){var z=y,v=o()(z,3),F=v[0],w=v[1],B=v[2],r="".concat(O,": ").concat(S.spaces[F],";");return w!==void 0&&(r+="".concat(S.mediaQueries.tablet,`{
          `).concat(O,": ").concat(S.spaces[w],`;
        }`)),B!==void 0&&(r+="".concat(S.mediaQueries.mobile,`{
          `).concat(O,": ").concat(S.spaces[B],`;
        }`)),r}var c=S.spaces[y]||y;return"".concat(O,": ").concat(c,";")}}},8:function(e,a,t){"use strict";t.r(a),t.d(a,"Typography",function(){return c});var i,o=t(3),p=t.n(o),u=t(2),O=t.n(u),E=["alpha","beta","delta","epsilon","omega","pi","sigma"],S=t(1),y=t.n(S),z=t(0),v=t.n(z),F=function(n){return y.a.createElement("div",n)},w={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},B={ellipsis:v.a.bool,fontSize:v.a.oneOfType([v.a.number,v.a.string]),fontWeight:v.a.string,lineHeight:v.a.oneOfType([v.a.number,v.a.string]),textColor:v.a.string,textTransform:v.a.string,variant:v.a.oneOf(E)};F.defaultProps=w,F.propTypes=B;var r={fontSize:!0,fontWeight:!0},c=O.a.span.withConfig({shouldForwardProp:function(n,d){return!r[n]&&d(n)}})(i||(i=p()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(n){var d=n.theme,x=n.fontWeight;return d.fontWeights[x]},function(n){var d=n.theme,x=n.fontSize;return d.fontSizes[x]},function(n){var d=n.theme,x=n.lineHeight;return d.lineHeights[x]},function(n){var d=n.theme,x=n.textColor;return d.colors[x||"neutral800"]},function(n){return n.textTransform},function(n){return n.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(n){var d=n.variant,x=n.theme;switch(d){case"alpha":return`
        font-weight: `.concat(x.fontWeights.bold,`;
        font-size: `).concat(x.fontSizes[5],`;
        line-height: `).concat(x.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(x.fontWeights.bold,`;
        font-size: `).concat(x.fontSizes[4],`;
        line-height: `).concat(x.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(x.fontWeights.semiBold,`;
        font-size: `).concat(x.fontSizes[3],`;
        line-height: `).concat(x.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(x.fontSizes[3],`;
        line-height: `).concat(x.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(x.fontSizes[2],`;
        line-height: `).concat(x.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(x.fontSizes[1],`;
        line-height: `).concat(x.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(x.fontWeights.bold,`;
        font-size: `).concat(x.fontSizes[0],`;
        line-height: `).concat(x.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(x.fontSizes[2],`;
      `)}});c.defaultProps=w,c.propTypes=B},83:function(e,a){e.exports=b}})})},10848:(J,te,g)=>{"use strict";J.exports=g(35871)},35871:function(J,te,g){(function(s,N){J.exports=N(g(96540),g(8162))})(this,function(s,N){return function(l){var b={};function e(a){if(b[a])return b[a].exports;var t=b[a]={i:a,l:!1,exports:{}};return l[a].call(t.exports,t,t.exports,e),t.l=!0,t.exports}return e.m=l,e.c=b,e.d=function(a,t,i){e.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:i})},e.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},e.t=function(a,t){if(1&t&&(a=e(a)),8&t||4&t&&typeof a=="object"&&a&&a.__esModule)return a;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:a}),2&t&&typeof a!="string")for(var o in a)e.d(i,o,function(p){return a[p]}.bind(null,o));return i},e.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(t,"a",t),t},e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},e.p="",e(e.s=110)}({0:function(l,b,e){l.exports=e(19)()},1:function(l,b){l.exports=s},10:function(l,b,e){var a=e(25),t=e(26),i=e(22),o=e(27);l.exports=function(p,u){return a(p)||t(p,u)||i(p,u)||o()},l.exports.default=l.exports,l.exports.__esModule=!0},110:function(l,b,e){"use strict";e.r(b),e.d(b,"Main",function(){return r}),e.d(b,"SkipToContent",function(){return x});var a,t=e(6),i=e.n(t),o=e(4),p=e.n(o),u=e(3),O=e.n(u),E=e(1),S=e.n(E),y=e(0),z=e.n(y),v=e(2),F=e.n(v),w=["labelledBy"],B=F.a.main(a||(a=O()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),r=function(U){var K=U.labelledBy,ie=p()(U,w),A=K||"main-content-title";return S.a.createElement(B,i()({"aria-labelledby":A,id:"main-content",tabIndex:-1},ie))};r.defaultProps={labelledBy:void 0},r.propTypes={labelledBy:z.a.string};var c,n=e(5),d=F()(n.Box)(c||(c=O()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(U){return U.theme.spaces[3]},function(U){return U.theme.spaces[3]}),x=function(U){var K=U.children;return S.a.createElement(d,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},K)};x.propTypes={children:z.a.node.isRequired}},13:function(l,b){function e(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(l.exports=e=function(t){return typeof t},l.exports.default=l.exports,l.exports.__esModule=!0):(l.exports=e=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l.exports.default=l.exports,l.exports.__esModule=!0),e(a)}l.exports=e,l.exports.default=l.exports,l.exports.__esModule=!0},19:function(l,b,e){"use strict";var a=e(20);function t(){}function i(){}i.resetWarningCache=t,l.exports=function(){function o(O,E,S,y,z,v){if(v!==a){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}}function p(){return o}o.isRequired=o;var u={array:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:p,element:o,elementType:o,instanceOf:p,node:o,objectOf:p,oneOf:p,oneOfType:p,shape:p,exact:p,checkPropTypes:i,resetWarningCache:t};return u.PropTypes=u,u}},2:function(l,b){l.exports=N},20:function(l,b,e){"use strict";l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(l,b){l.exports=function(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,i=new Array(a);t<a;t++)i[t]=e[t];return i},l.exports.default=l.exports,l.exports.__esModule=!0},22:function(l,b,e){var a=e(21);l.exports=function(t,i){if(t){if(typeof t=="string")return a(t,i);var o=Object.prototype.toString.call(t).slice(8,-1);return o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set"?Array.from(t):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?a(t,i):void 0}},l.exports.default=l.exports,l.exports.__esModule=!0},24:function(l,b){l.exports=function(e,a){if(e==null)return{};var t,i,o={},p=Object.keys(e);for(i=0;i<p.length;i++)t=p[i],a.indexOf(t)>=0||(o[t]=e[t]);return o},l.exports.default=l.exports,l.exports.__esModule=!0},25:function(l,b){l.exports=function(e){if(Array.isArray(e))return e},l.exports.default=l.exports,l.exports.__esModule=!0},26:function(l,b){l.exports=function(e,a){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i,o,p=[],u=!0,O=!1;try{for(t=t.call(e);!(u=(i=t.next()).done)&&(p.push(i.value),!a||p.length!==a);u=!0);}catch(E){O=!0,o=E}finally{try{u||t.return==null||t.return()}finally{if(O)throw o}}return p}},l.exports.default=l.exports,l.exports.__esModule=!0},27:function(l,b){l.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},l.exports.default=l.exports,l.exports.__esModule=!0},3:function(l,b){l.exports=function(e,a){return a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))},l.exports.default=l.exports,l.exports.__esModule=!0},4:function(l,b,e){var a=e(24);l.exports=function(t,i){if(t==null)return{};var o,p,u=a(t,i);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(t);for(p=0;p<O.length;p++)o=O[p],i.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(u[o]=t[o])}return u},l.exports.default=l.exports,l.exports.__esModule=!0},5:function(l,b,e){"use strict";e.r(b),e.d(b,"Box",function(){return B});var a,t=e(3),i=e.n(t),o=e(2),p=e.n(o),u=e(7),O=e(1),E=e.n(O),S=e(0),y=e.n(S),z=function(r){return E.a.createElement("div",r)},v={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},F={_hover:y.a.func,background:y.a.string,basis:y.a.oneOfType([y.a.string,y.a.string]),borderColor:y.a.string,children:y.a.oneOfType([y.a.node,y.a.string]),color:y.a.string,flex:y.a.oneOfType([y.a.string,y.a.string]),grow:y.a.oneOfType([y.a.string,y.a.string]),hasRadius:y.a.bool,hiddenS:y.a.bool,hiddenXS:y.a.bool,padding:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.number)]),paddingBottom:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.number)]),paddingLeft:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.number)]),paddingRight:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.number)]),paddingTop:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.number)]),shadow:y.a.string,shrink:y.a.oneOfType([y.a.string,y.a.string])};z.defaultProps=v,z.propTypes=F;var w={color:!0},B=p.a.div.withConfig({shouldForwardProp:function(r,c){return!w[r]&&c(r)}})(a||(a=i()([`
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
`])),function(r){var c=r.fontSize;return r.theme.fontSizes[c]||c},function(r){var c=r.theme,n=r.background;return c.colors[n]},function(r){var c=r.theme,n=r.color;return c.colors[n]},function(r){var c=r.theme,n=r.padding;return Object(u.a)("padding",n,c)},function(r){var c=r.theme,n=r.paddingTop;return Object(u.a)("padding-top",n,c)},function(r){var c=r.theme,n=r.paddingRight;return Object(u.a)("padding-right",n,c)},function(r){var c=r.theme,n=r.paddingBottom;return Object(u.a)("padding-bottom",n,c)},function(r){var c=r.theme,n=r.paddingLeft;return Object(u.a)("padding-left",n,c)},function(r){var c=r.theme,n=r.marginLeft;return Object(u.a)("margin-left",n,c)},function(r){var c=r.theme,n=r.marginRight;return Object(u.a)("margin-right",n,c)},function(r){var c=r.theme,n=r.marginTop;return Object(u.a)("margin-top",n,c)},function(r){var c=r.theme,n=r.marginBottom;return Object(u.a)("margin-bottom",n,c)},function(r){var c=r.theme;return r.hiddenS?"".concat(c.mediaQueries.tablet," { display: none; }"):void 0},function(r){var c=r.theme;return r.hiddenXS?"".concat(c.mediaQueries.mobile," { display: none; }"):void 0},function(r){var c=r.theme,n=r.hasRadius,d=r.borderRadius;return n?c.borderRadius:d},function(r){return r.borderStyle},function(r){return r.borderWidth},function(r){var c=r.borderColor;return r.theme.colors[c]},function(r){var c=r.theme,n=r.borderColor,d=r.borderStyle,x=r.borderWidth;if(n&&!d&&!x)return"1px solid ".concat(c.colors[n])},function(r){var c=r.theme,n=r.shadow;return c.shadows[n]},function(r){return r.pointerEvents},function(r){var c=r._hover,n=r.theme;return c?c(n):void 0},function(r){return r.display},function(r){return r.position},function(r){var c=r.left;return r.theme.spaces[c]||c},function(r){var c=r.right;return r.theme.spaces[c]||c},function(r){var c=r.top;return r.theme.spaces[c]||c},function(r){var c=r.bottom;return r.theme.spaces[c]||c},function(r){return r.zIndex},function(r){return r.overflow},function(r){return r.cursor},function(r){var c=r.width;return r.theme.spaces[c]||c},function(r){var c=r.maxWidth;return r.theme.spaces[c]||c},function(r){var c=r.minWidth;return r.theme.spaces[c]||c},function(r){var c=r.height;return r.theme.spaces[c]||c},function(r){var c=r.maxHeight;return r.theme.spaces[c]||c},function(r){var c=r.minHeight;return r.theme.spaces[c]||c},function(r){return r.transition},function(r){return r.transform},function(r){return r.animation},function(r){return r.shrink},function(r){return r.grow},function(r){return r.basis},function(r){return r.flex},function(r){return r.textAlign},function(r){return r.textTransform},function(r){return r.lineHeight},function(r){return r.cursor});B.defaultProps=v,B.propTypes=F},6:function(l,b){function e(){return l.exports=e=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(a[o]=i[o])}return a},l.exports.default=l.exports,l.exports.__esModule=!0,e.apply(this,arguments)}l.exports=e,l.exports.default=l.exports,l.exports.__esModule=!0},7:function(l,b,e){"use strict";var a=e(10),t=e.n(a),i=e(13),o=e.n(i);b.a=function(p,u,O){var E=u;if(Array.isArray(u)||o()(u)!=="object"||(E=[u==null?void 0:u.desktop,u==null?void 0:u.tablet,u==null?void 0:u.mobile]),E!==void 0){if(Array.isArray(E)){var S=E,y=t()(S,3),z=y[0],v=y[1],F=y[2],w="".concat(p,": ").concat(O.spaces[z],";");return v!==void 0&&(w+="".concat(O.mediaQueries.tablet,`{
          `).concat(p,": ").concat(O.spaces[v],`;
        }`)),F!==void 0&&(w+="".concat(O.mediaQueries.mobile,`{
          `).concat(p,": ").concat(O.spaces[F],`;
        }`)),w}var B=O.spaces[E]||E;return"".concat(p,": ").concat(B,";")}}}})})},46643:function(J,te,g){(function(s,N){J.exports=N(g(96540))})(this,function(s){return function(N){var l={};function b(e){if(l[e])return l[e].exports;var a=l[e]={i:e,l:!1,exports:{}};return N[e].call(a.exports,a,a.exports,b),a.l=!0,a.exports}return b.m=N,b.c=l,b.d=function(e,a,t){b.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},b.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.t=function(e,a){if(1&a&&(e=b(e)),8&a||4&a&&typeof e=="object"&&e&&e.__esModule)return e;var t=Object.create(null);if(b.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&typeof e!="string")for(var i in e)b.d(t,i,function(o){return e[o]}.bind(null,i));return t},b.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return b.d(a,"a",a),a},b.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},b.p="",b(b.s=5)}({0:function(N,l){N.exports=s},5:function(N,l,b){"use strict";b.r(l);var e=b(0);function a(){return(a=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var p in o)Object.prototype.hasOwnProperty.call(o,p)&&(t[p]=o[p])}return t}).apply(this,arguments)}l.default=function(t){return e.createElement("svg",a({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}}})})},65472:(J,te,g)=>{"use strict";g.r(te),g.d(te,{default:()=>en});var s=g(96540),N=g(39125),l=g(89520),b=g(29434),e=g(83531),a=g(8162),t=g(79296),i=g(25443),o=g(10848),p=g(47932),u=g(82940),O=g(58817),E=g(69210),S=g(89764),y=g(63760),z=g(54109),v=g(76686),F=g(97582),w=g.n(F),B=g(26799),r=g(53759),c=g(31934),n=g(1971),d=g(33618),x=g(40418),U=g(78443),K=g(2113),ie=g(5556),A=g.n(ie);const ne=({pagination:h})=>s.createElement(p.Box,{paddingTop:6},s.createElement(v.Flex,{alignItems:"flex-end",justifyContent:"space-between"},s.createElement(b.PageSizeURLQuery,null),s.createElement(b.PaginationURLQuery,{pagination:h})));ne.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ne.propTypes={pagination:A().shape({page:A().number,pageCount:A().number,pageSize:A().number,total:A().number})};var re=g(57885),I=g(21090),$=g(10661),Q=g(25043),he=g(51887),k=g(60245),le=g(30637),ue=g.n(le),ye=g(22954),be=(h,f,m)=>new Promise((j,T)=>{var C=P=>{try{M(m.next(P))}catch(D){T(D)}},R=P=>{try{M(m.throw(P))}catch(D){T(D)}},M=P=>P.done?j(P.value):Promise.resolve(P.value).then(C,R);M((m=m.apply(h,f)).next())});const de=({selected:h,onSuccess:f})=>{const{formatMessage:m}=(0,l.useIntl)(),[j,T]=(0,s.useState)(!1),{isLoading:C,remove:R}=(0,ye.y)(),M=()=>be(void 0,null,function*(){yield R(h),f()});return s.createElement(s.Fragment,null,s.createElement(k.Button,{variant:"danger-light",size:"S",startIcon:s.createElement(ue(),null),onClick:()=>T(!0)},m({id:"global.delete",defaultMessage:"Delete"})),s.createElement(b.ConfirmDialog,{isConfirmButtonLoading:C,isOpen:j,onToggleDialog:()=>T(!1),onConfirm:M}))};de.propTypes={selected:A().arrayOf(Q.E_,Q.SI).isRequired,onSuccess:A().func.isRequired};var nt=g(93987),rt=g.n(nt),ot=g(25221),at=g(62193),it=g.n(at),st=g(29070),oe=g(9410),lt=g(15993),Fe=g(41337),xe=g(59902),ut=Object.defineProperty,dt=Object.defineProperties,ct=Object.getOwnPropertyDescriptors,Ie=Object.getOwnPropertySymbols,ft=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,Re=(h,f,m)=>f in h?ut(h,f,{enumerable:!0,configurable:!0,writable:!0,value:m}):h[f]=m,Be=(h,f)=>{for(var m in f||(f={}))ft.call(f,m)&&Re(h,m,f[m]);if(Ie)for(var m of Ie(f))pt.call(f,m)&&Re(h,m,f[m]);return h},ze=(h,f)=>dt(h,ct(f));const mt=()=>{const h=(0,b.useNotification)(),f=(0,Fe.useQueryClient)(),m=(0,e.rh)("actions/bulk-move"),j=({destinationFolderId:R,filesAndFolders:M})=>{const P=M.reduce((D,X)=>{const{id:V,type:H}=X,G=H==="asset"?"fileIds":"folderIds";return D[G]||(D[G]=[]),D[G].push(V),D},{});return e.SP.post(m,ze(Be({},P),{destinationFolderId:R}))},T=(0,Fe.useMutation)(j,{onSuccess(R){var M;const{data:{data:P}}=R;((M=P==null?void 0:P.files)==null?void 0:M.length)>0&&(f.refetchQueries([xe.A,"assets"],{active:!0}),f.refetchQueries([xe.A,"asset-count"],{active:!0})),f.refetchQueries([xe.A,"folders"],{active:!0}),h({type:"success",message:{id:(0,e.gT)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}}),C=(R,M)=>T.mutateAsync({destinationFolderId:R,filesAndFolders:M});return ze(Be({},T),{move:C})};var gt=g(74107),vt=g(43893),ht=(h,f,m)=>new Promise((j,T)=>{var C=P=>{try{M(m.next(P))}catch(D){T(D)}},R=P=>{try{M(m.throw(P))}catch(D){T(D)}},M=P=>P.done?j(P.value):Promise.resolve(P.value).then(C,R);M((m=m.apply(h,f)).next())});const Oe=({onClose:h,selected:f,currentFolder:m})=>{const{formatMessage:j}=(0,l.useIntl)(),{data:T,isLoading:C}=(0,vt.F)(),{move:R}=mt();if(!T)return null;const M=(X,V)=>ht(void 0,[X,V],function*(H,{setErrors:G}){try{yield R(H.destination.value,f),h()}catch(me){const W=(0,b.getAPIInnerErrors)(me,{getTrad:e.gT}),se=Object.entries(W).reduce((ee,[Y,Me])=>(ee[Y||"destination"]=Me.defaultMessage,ee),{});it()(se)||G(se)}}),P=()=>{h()};if(C)return s.createElement(oe.ModalLayout,{onClose:P,labelledBy:"title"},s.createElement(oe.ModalBody,null,s.createElement(v.Flex,{justifyContent:"center",paddingTop:4,paddingBottom:4},s.createElement(st.Loader,null,j({id:(0,e.gT)("content.isLoading"),defaultMessage:"Content is loading."})))));const D={destination:{value:(m==null?void 0:m.id)||"",label:(m==null?void 0:m.name)||T[0].label}};return s.createElement(oe.ModalLayout,{onClose:P,labelledBy:"title"},s.createElement(ot.Formik,{validateOnChange:!1,onSubmit:M,initialValues:D},({values:X,errors:V,setFieldValue:H})=>s.createElement(b.Form,{noValidate:!0},s.createElement(oe.ModalHeader,null,s.createElement(y.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},j({id:(0,e.gT)("modal.folder.move.title"),defaultMessage:"Move elements to"}))),s.createElement(oe.ModalBody,null,s.createElement(z.Grid,{gap:4},s.createElement(z.GridItem,{xs:12,col:12},s.createElement($.Stack,{spacing:1},s.createElement(lt.FieldLabel,{htmlFor:"folder-destination"},j({id:(0,e.gT)("form.input.label.folder-location"),defaultMessage:"Location"})),s.createElement(gt.A,{options:T,onChange:G=>{H("destination",G)},defaultValue:X.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:V==null?void 0:V.destination,ariaErrorMessage:"destination-error"}),V.destination&&s.createElement(y.Typography,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600"},V.destination))))),s.createElement(oe.ModalFooter,{startActions:s.createElement(k.Button,{onClick:P,variant:"tertiary",name:"cancel"},j({id:"cancel",defaultMessage:"Cancel"})),endActions:s.createElement(k.Button,{type:"submit",loading:C},j({id:"modal.folder.move.submit",defaultMessage:"Move"}))}))))};Oe.defaultProps={currentFolder:void 0},Oe.propTypes={onClose:A().func.isRequired,currentFolder:Q.SI,selected:A().arrayOf(Q.SI,Q.E_).isRequired};const Ee=({selected:h,onSuccess:f,currentFolder:m})=>{const{formatMessage:j}=(0,l.useIntl)(),[T,C]=(0,s.useState)(!1),R=()=>{C(!1),f()};return s.createElement(s.Fragment,null,s.createElement(k.Button,{variant:"secondary",size:"S",startIcon:s.createElement(rt(),null),onClick:()=>C(!0)},j({id:"global.move",defaultMessage:"Move"})),T&&s.createElement(Oe,{currentFolder:m,onClose:R,selected:h}))};Ee.defaultProps={currentFolder:void 0},Ee.propTypes={onSuccess:A().func.isRequired,currentFolder:Q.SI,selected:A().arrayOf(Q.E_,Q.SI).isRequired};const Se=({selected:h,onSuccess:f,currentFolder:m})=>{const{formatMessage:j}=(0,l.useIntl)();return s.createElement($.Stack,{horizontal:!0,spacing:2,paddingBottom:5},s.createElement(y.Typography,{variant:"epsilon",textColor:"neutral600"},j({id:(0,he.A)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:h.filter(({type:T})=>T==="folder").length,numberAssets:h.filter(({type:T})=>T==="asset").length})),s.createElement(de,{selected:h,onSuccess:f}),s.createElement(Ee,{currentFolder:m,selected:h,onSuccess:f}))};Se.defaultProps={currentFolder:void 0},Se.propTypes={onSuccess:A().func.isRequired,currentFolder:Q.SI,selected:A().arrayOf(Q.E_,Q.SI).isRequired};var ce=g(90139),yt=g(26869),bt=g.n(yt),xt=g(30135),Ot=g(37940),De=g(62643);const Et=()=>{var h;const f=(0,s.useRef)(null),[m,j]=(0,s.useState)(!1),{formatMessage:T}=(0,l.useIntl)(),{trackUsage:C}=(0,b.useTracking)(),[{query:R},M]=(0,b.useQueryParams)(),P=((h=R==null?void 0:R.filters)==null?void 0:h.$and)||[],D=()=>j(H=>!H),X=H=>{M({filters:{$and:H},page:1})},V=H=>{C("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(H[H.length-1])[0]}),M({filters:{$and:H},page:1})};return s.createElement(s.Fragment,null,s.createElement(k.Button,{variant:"tertiary",ref:f,startIcon:s.createElement(bt(),null),onClick:D,size:"S"},T({id:"app.utils.filters",defaultMessage:"Filters"})),m&&s.createElement(Ot.A,{displayedFilters:De.A,filters:P,onSubmit:V,onToggle:D,source:f}),s.createElement(xt.A,{appliedFilters:P,filtersSchema:De.A,onRemoveFilter:X}))};var St=g(55373),Pt=g(33389),Tt=g(46643),Mt=g.n(Tt),Ct=g(75871),Pe=g.n(Ct),jt=g(26466),Lt=Object.defineProperty,At=Object.defineProperties,wt=Object.getOwnPropertyDescriptors,He=Object.getOwnPropertySymbols,Ft=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,We=(h,f,m)=>f in h?Lt(h,f,{enumerable:!0,configurable:!0,writable:!0,value:m}):h[f]=m,Rt=(h,f)=>{for(var m in f||(f={}))Ft.call(f,m)&&We(h,m,f[m]);if(He)for(var m of He(f))It.call(f,m)&&We(h,m,f[m]);return h},Bt=(h,f)=>At(h,wt(f));const Te=({breadcrumbs:h,canCreate:f,folder:m,onToggleEditFolderDialog:j,onToggleUploadAssetDialog:T})=>{var C,R;const{formatMessage:M}=(0,l.useIntl)(),{pathname:P}=(0,t.useLocation)(),[{query:D}]=(0,b.useQueryParams)(),X=Bt(Rt({},D),{folder:(R=(C=m==null?void 0:m.parent)==null?void 0:C.id)!=null?R:void 0});return s.createElement(i.HeaderLayout,{title:M({id:(0,e.gT)("plugin.name"),defaultMessage:"Media Library"}),subtitle:h&&m&&s.createElement(jt.B,{as:"nav",label:M({id:(0,e.gT)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:h,currentFolderId:m==null?void 0:m.id}),navigationAction:m&&s.createElement(Pt.Link,{startIcon:s.createElement(Mt(),null),to:`${P}?${(0,St.stringify)(X,{encode:!1})}`},M({id:(0,e.gT)("header.actions.folder-level-up"),defaultMessage:"Back"})),primaryAction:f&&s.createElement($.Stack,{horizontal:!0,spacing:2},s.createElement(k.Button,{startIcon:s.createElement(Pe(),null),variant:"secondary",onClick:j},M({id:(0,e.gT)("header.actions.add-folder"),defaultMessage:"Add new folder"})),s.createElement(k.Button,{startIcon:s.createElement(Pe(),null),onClick:T},M({id:(0,e.gT)("header.actions.add-assets"),defaultMessage:"Add new assets"})))})};Te.defaultProps={breadcrumbs:!1,folder:null},Te.propTypes={breadcrumbs:A().oneOfType([Q.qu,A().bool]),canCreate:A().bool.isRequired,folder:Q.SI,onToggleEditFolderDialog:A().func.isRequired,onToggleUploadAssetDialog:A().func.isRequired};var zt=g(2444),Dt=g.n(zt),Ht=g(95722),Wt=Object.defineProperty,Qt=Object.defineProperties,Nt=Object.getOwnPropertyDescriptors,Qe=Object.getOwnPropertySymbols,Ut=Object.prototype.hasOwnProperty,kt=Object.prototype.propertyIsEnumerable,Ne=(h,f,m)=>f in h?Wt(h,f,{enumerable:!0,configurable:!0,writable:!0,value:m}):h[f]=m,Vt=(h,f)=>{for(var m in f||(f={}))Ut.call(f,m)&&Ne(h,m,f[m]);if(Qe)for(var m of Qe(f))kt.call(f,m)&&Ne(h,m,f[m]);return h},$t=(h,f)=>Qt(h,Nt(f));const Xt=({isFiltering:h,canCreate:f,canRead:m})=>h?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:m?f?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},Ue=({canCreate:h,isFiltering:f,canRead:m,onActionClick:j})=>{const{formatMessage:T}=(0,l.useIntl)(),C=Xt({isFiltering:f,canCreate:h,canRead:m});return s.createElement(Ht.r,{icon:m?null:Dt(),action:h&&!f&&s.createElement(k.Button,{variant:"secondary",startIcon:s.createElement(Pe(),null),onClick:j},T({id:(0,e.gT)("header.actions.add-assets"),defaultMessage:"Add new assets"})),content:T($t(Vt({},C),{id:(0,e.gT)(C.id)}))})};Ue.propTypes={canCreate:A().bool.isRequired,canRead:A().bool.isRequired,isFiltering:A().bool.isRequired,onActionClick:A().func.isRequired};var Gt=Object.defineProperty,Yt=Object.defineProperties,Jt=Object.getOwnPropertyDescriptors,ke=Object.getOwnPropertySymbols,Kt=Object.prototype.hasOwnProperty,Zt=Object.prototype.propertyIsEnumerable,Ve=(h,f,m)=>f in h?Gt(h,f,{enumerable:!0,configurable:!0,writable:!0,value:m}):h[f]=m,fe=(h,f)=>{for(var m in f||(f={}))Kt.call(f,m)&&Ve(h,m,f[m]);if(ke)for(var m of ke(f))Zt.call(f,m)&&Ve(h,m,f[m]);return h},pe=(h,f)=>Yt(h,Jt(f));const qt=(0,a.default)(p.Box)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,$e=(0,a.default)(y.Typography)`
  max-width: 100%;
`,_t=()=>{var h,f,m,j;const{push:T}=(0,t.useHistory)(),{canRead:C,canCreate:R,canUpdate:M,canCopyLink:P,canDownload:D,isLoading:X}=(0,re.n)(),V=(0,s.useRef)(),{formatMessage:H}=(0,l.useIntl)(),{pathname:G}=(0,t.useLocation)(),{trackUsage:me}=(0,b.useTracking)(),[{query:W},se]=(0,b.useQueryParams)(),ee=Boolean(W._q||W.filters),{data:Y,isLoading:Me,errors:tn}=(0,U.d)({skipWhen:!C,query:W}),{data:ge,isLoading:nn,errors:rn}=(0,K.n)({enabled:C&&((h=Y==null?void 0:Y.pagination)==null?void 0:h.page)===1&&!(0,e.Ao)(W),query:W}),{data:Ce,isLoading:Xe,error:Ge}=(0,I.a)(W==null?void 0:W.folder,{enabled:C&&!!(W!=null&&W.folder)});((f=Ge==null?void 0:Ge.response)==null?void 0:f.status)===404&&T(G);const Z=(ge==null?void 0:ge.length)||0,ve=Y==null?void 0:Y.results,q=(m=ve==null?void 0:ve.length)!=null?m:0,Ye=Xe||nn||X||Me,[on,an]=(0,s.useState)(!1),[sn,Je]=(0,s.useState)(!1),[Ke,Ze]=(0,s.useState)(void 0),[je,qe]=(0,s.useState)(void 0),[_,{selectOne:Le,selectAll:_e}]=(0,b.useSelectionState)(["type","id"],[]),Ae=()=>an(L=>!L),et=({created:L=!1}={})=>{L&&(W==null?void 0:W.page)!=="1"&&se(pe(fe({},W),{page:1})),Je(ae=>!ae)},ln=L=>{me("didSortMediaLibraryElements",{location:"upload",sort:L}),se({sort:L})},un=L=>{qe(L),Je(!0)},dn=L=>{qe(null),et(L),V.current&&V.current.focus()};return(0,b.useFocusWhenNavigate)(),s.createElement(i.Layout,null,s.createElement(o.Main,{"aria-busy":Ye},s.createElement(Te,{breadcrumbs:!Xe&&(0,e.Tw)(Ce,{pathname:G,query:W}),canCreate:R,onToggleEditFolderDialog:et,onToggleUploadAssetDialog:Ae,folder:Ce}),s.createElement(i.ActionLayout,{startActions:s.createElement(s.Fragment,null,M&&(q>0||Z>0)&&s.createElement(qt,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},s.createElement(O.BaseCheckbox,{"aria-label":H({id:(0,e.gT)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:(_==null?void 0:_.length)>0&&(_==null?void 0:_.length)!==q+Z,value:(q>0||Z>0)&&_.length===q+Z,onChange:L=>{L.target.checked&&me("didSelectAllMediaLibraryElements"),_e([...ve.map(ae=>pe(fe({},ae),{type:"asset"})),...ge.map(ae=>pe(fe({},ae),{type:"folder"}))])}})),C&&s.createElement(x.A,{onChangeSort:ln}),C&&s.createElement(Et,null)),endActions:s.createElement(b.SearchURLQuery,{label:H({id:(0,e.gT)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}})}),s.createElement(i.ContentLayout,null,_.length>0&&s.createElement(Se,{currentFolder:Ce,selected:_,onSuccess:_e}),Ye&&s.createElement(b.LoadingIndicatorPage,null),(tn||rn)&&s.createElement(b.AnErrorOccurred,null),Z===0&&q===0&&s.createElement(Ue,{canCreate:R,canRead:C,isFiltering:ee,onActionClick:Ae}),C&&s.createElement(s.Fragment,null,Z>0&&s.createElement(d.P,{title:(ee&&q>0||!ee)&&H({id:(0,e.gT)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:Z})||""},ge.map(L=>{const cn=!!_.filter(({type:we})=>we==="folder").find(we=>we.id===L.id),tt=(0,e._0)(G,W,L);return s.createElement(z.GridItem,{col:3,key:`folder-${L.id}`},s.createElement(ce.Rx,{ref:je&&L.id===je.id?V:void 0,ariaLabel:L.name,id:`folder-${L.id}`,to:tt,startAction:Le&&s.createElement(ce.gc,{"data-testid":`folder-checkbox-${L.id}`,value:cn,onChange:()=>Le(pe(fe({},L),{type:"folder"}))}),cardActions:s.createElement(S.IconButton,{icon:s.createElement(w(),null),"aria-label":H({id:(0,e.gT)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>un(L)})},s.createElement(ce.fC,null,s.createElement(ce.nB,{to:tt},s.createElement(v.Flex,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%"},s.createElement($e,{fontWeight:"semiBold",ellipsis:!0},L.name,s.createElement(E.VisuallyHidden,null,":")),s.createElement($e,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0},H({id:(0,e.gT)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:L.children.count,filesCount:L.files.count})))))))})),q>0&&Z>0&&s.createElement(p.Box,{paddingTop:6,paddingBottom:4},s.createElement(u.Divider,null)),q>0&&s.createElement(s.Fragment,null,s.createElement(n.P,{assets:ve,onEditAsset:Ze,onSelectAsset:Le,selectedAssets:_.filter(({type:L})=>L==="asset"),title:(!ee||ee&&Z>0)&&((j=Y==null?void 0:Y.pagination)==null?void 0:j.page)===1&&H({id:(0,e.gT)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:q})||""}),(Y==null?void 0:Y.pagination)&&s.createElement(ne,{pagination:Y.pagination}))))),on&&s.createElement(B.w,{onClose:Ae,trackedLocation:"upload",folderId:W==null?void 0:W.folder}),sn&&s.createElement(r.v,{onClose:dn,folder:je,parentFolderId:W==null?void 0:W.folder,location:"upload"}),Ke&&s.createElement(c.H,{onClose:()=>Ze(void 0),asset:Ke,canUpdate:M,canCopyLink:P,canDownload:D,trackedLocation:"upload"}))},en=()=>{const[{rawQuery:h},f]=(0,b.useQueryParams)(),{formatMessage:m}=(0,l.useIntl)(),j=m({id:(0,e.gT)("plugin.name"),defaultMessage:"Media Library"});return(0,s.useEffect)(()=>{h||f({sort:"updatedAt:DESC",page:1,pageSize:10})},[h,f]),h?s.createElement(s.Fragment,null,s.createElement(N.Helmet,{title:j}),s.createElement(_t,null)):null}}}]);
