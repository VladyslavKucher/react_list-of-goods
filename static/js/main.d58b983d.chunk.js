(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n,r=s(3),c=s.n(r),o=s(4),i=s(5),a=s(8),l=s(6),u=s(7),b=s(1),h=s.n(b),d=(s(13),s(14),s(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var j=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={isReversed:!1,sortType:n.NONE},t.sortAlphabetically=function(){t.setState({sortType:n.ALPHABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.sortType,r=e||s===n.ALPHABET||s===n.LENGTH,c=function(t,e){var s=e.sortType,r=e.isReversed,c=Object(u.a)(t);return c.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),r&&c.reverse(),console.log(s,r),c}(p,{sortType:s,isReversed:e}).map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t},t)}));return Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:"button is-info ".concat(s===n.ALPHABET?"":"is-light"),onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:"button is-info ".concat(s===n.LENGTH?"":"is-light"),onClick:this.sortByLength,children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:"button is-info ".concat(e?"":"is-light"),onClick:this.reverse,children:"Reverse"}),r&&Object(d.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.reset,children:"Reset"})]}),Object(d.jsx)("ul",{children:Object(d.jsx)("ul",{children:c})})]})}}]),s}(h.a.Component);c.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d58b983d.chunk.js.map