(this["webpackJsonptodo-machine"]=this["webpackJsonptodo-machine"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,o=n(1),r=n(4),a=n.n(r),l=n(6),i=n(2),s=n(0),u=Object(o.createContext)(),d=u.Provider,j=function(e){var t=e.children,n=function(e,t){var n=Object(o.useState)(!0),c=Object(i.a)(n,2),r=c[0],a=c[1],l=Object(o.useState)(!1),s=Object(i.a)(l,2),u=s[0],d=s[1],j=Object(o.useState)(t),b=Object(i.a)(j,2),O=b[0],f=b[1];return Object(o.useEffect)((function(){setTimeout((function(){try{var n,c=localStorage.getItem(e);c?n=JSON.parse(c):(localStorage.setItem(e,JSON.stringify(t)),n=t),f(n),a(!1)}catch(u){d(u)}}),1e3)}),[e,t]),{item:O,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),f(t)}catch(u){d(u)}},loading:r,error:u}}("TODOS_V1",[]),c=n.item,r=n.saveItem,a=n.loading,u=n.error,j=Object(o.useState)(""),b=Object(i.a)(j,2),O=b[0],f=b[1],p=Object(o.useState)(c),m=Object(i.a)(p,2),x=m[0],h=m[1],v=Object(o.useState)(!1),g=Object(i.a)(v,2),y=g[0],_=g[1],T=x.filter((function(e){return!!e.completed})).length,C=x.length;Object(o.useEffect)((function(){h(c.filter((function(e){return e.text.toLowerCase().includes(O.toLowerCase())})))}),[O,c]);return Object(s.jsx)(d,{value:{loading:a,error:u,totalTodos:C,completedTodos:T,searchValue:O,searchedTodos:x,openModal:y,setSearchValue:f,addTodo:function(e){var t=Object(l.a)(c);t.push({completed:!1,text:e}),r(t)},completeTodo:function(e){var t=c.findIndex((function(t){return t.text===e})),n=Object(l.a)(c);n[t].completed=!0,r(n)},deleteTodo:function(e){var t=c.findIndex((function(t){return t.text===e})),n=Object(l.a)(c);n.splice(t,1),r(n)},setOpenModal:_},children:t})},b=(n(13),function(){var e=Object(o.useContext)(u),t=e.totalTodos,n=e.completedTodos;return Object(s.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODOs"]})}),O=(n(14),function(){var e=Object(o.useContext)(u),t=e.searchValue,n=e.setSearchValue;return Object(s.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",onChange:function(e){n(e.target.value)},value:t})}),f=(n(15),function(e){var t=e.children;return Object(s.jsx)("section",{className:"TodoList",children:Object(s.jsx)("ul",{children:t})})}),p=["title","titleId"];function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},m.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,c,o=function(e,t){if(null==e)return{};var n,c,o={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){var n=e.title,r=e.titleId,a=x(e,p);return o.createElement("svg",m({viewBox:"0 0 405.272 405.272",xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?o.createElement("title",{id:r},n):null,c||(c=o.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"})))}var v,g=o.forwardRef(h),y=(n.p,["title","titleId"]);function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},_.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,c,o=function(e,t){if(null==e)return{};var n,c,o={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function C(e,t){var n=e.title,c=e.titleId,r=T(e,y);return o.createElement("svg",_({viewBox:"0 0 348.333 348.334",xmlSpace:"preserve",ref:t,"aria-labelledby":c},r),n?o.createElement("title",{id:c},n):null,v||(v=o.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"})))}var S=o.forwardRef(C),I=(n.p,n(16),function(e){var t=e.type,n=e.color,c=void 0===n?"gray":n,o=e.onClick,r={check:function(e){return Object(s.jsx)(g,{className:"Icon__svg Icon__svg--check",fill:e})},delete:function(e){return Object(s.jsx)(S,{className:"Icon__svg Icon__svg--delete",fill:e})}};return Object(s.jsx)("span",{className:"Icon__container Icon__container--".concat(t),onClick:o,children:r[t](c)})}),N=function(e){var t=e.completed,n=e.onCompleted;return Object(s.jsx)(I,{type:"check",color:t?"#4caf50":"gray",onClick:n})},w=function(e){var t=e.onDelete;return Object(s.jsx)(I,{type:"delete",onClick:t})},L=(n(17),function(e){var t=e.text,n=e.completed,c=e.onComplete,o=e.onDelete;return Object(s.jsxs)("li",{className:"TodoItem",children:[Object(s.jsx)(N,{completed:n,onCompleted:c}),Object(s.jsx)("p",{className:"TodoItem__p ".concat(n&&"TodoItem__p--complete"),children:t}),Object(s.jsx)(w,{onDelete:o})]})}),k=(n(18),function(){var e=Object(o.useContext)(u).setOpenModal;return Object(s.jsx)("button",{className:"CreateTodoButton",onClick:function(){e((function(e){return!e}))},children:"+"})}),E=(n(19),function(e){var t=e.children;return a.a.createPortal(Object(s.jsx)("div",{className:"Modal",children:t}),document.getElementById("modal"))}),D=(n(20),function(){var e=Object(o.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(o.useContext)(u),a=r.addTodo,l=r.setOpenModal;return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(n),l(!1)},children:[Object(s.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(s.jsx)("textarea",{value:n,onChange:function(e){c(e.target.value)},placeholder:"Cortar la cebolla para el almuerzo"}),Object(s.jsxs)("div",{className:"TodoForm__button-container",children:[Object(s.jsx)("button",{type:"button",className:"TodoForm__button TodoForm__button--cancel",onClick:function(){c(""),l(!1)},children:"Cancelar"}),Object(s.jsx)("button",{className:"TodoForm__button TodoForm__button--add",type:"submit",children:"A\xf1adir"})]})]})}),P=function(e){var t=e.error;return Object(s.jsxs)("section",{children:[Object(s.jsx)("p",{children:"Peligro, hubo un error y anda suelto"}),Object(s.jsx)("p",{children:t})]})},M=(n(21),function(){return Object(s.jsxs)("div",{className:"TodosLoading__container",children:[Object(s.jsx)("span",{className:"TodosLoading__complete-icon"}),Object(s.jsx)("p",{className:"TodosLoading__text",children:"Cargando TODOS..."}),Object(s.jsx)("span",{className:"TodosLoading__delete-icon"})]})}),F=function(){return Object(s.jsx)("p",{children:"\xa1Crea tu primer TODO!"})},B=function(){var e=Object(o.useContext)(u),t=e.error,n=e.loading,c=e.searchedTodos,r=e.completeTodo,a=e.deleteTodo,l=e.openModal;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b,{}),Object(s.jsx)(O,{}),Object(s.jsxs)(f,{children:[t&&Object(s.jsx)(P,{error:t}),n&&new Array(3).fill(1).map((function(e,t){return Object(s.jsx)(M,{},t)})),!n&&!c.length&&Object(s.jsx)(F,{}),c.map((function(e){return Object(s.jsx)(L,{text:e.text,completed:e.completed,onComplete:function(){return r(e.text)},onDelete:function(){return a(e.text)}},e.text)}))]}),Object(s.jsx)(k,{}),l&&Object(s.jsx)(E,{children:Object(s.jsx)(D,{})})]})},J=function(){return Object(s.jsx)(j,{children:Object(s.jsx)(B,{})})};n(22);a.a.render(Object(s.jsx)(J,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.087d09bc.chunk.js.map