(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),r=n.n(s),a=n(4),c=n(5),o=n(7),p=n(6),d=n(1),i=n(0),u=function(e){Object(o.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pressedKey:""},e.handlerKeyUp=function(t){return"Space"===t.code?e.setState({pressedKey:t.code}):e.setState({pressedKey:t.key})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handlerKeyUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handlerKeyUp)}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(d.Component);n(13);r.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c4405502.chunk.js.map