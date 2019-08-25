(window.webpackJsonptodo_rect_firebase=window.webpackJsonptodo_rect_firebase||[]).push([[3],{484:function(e,t,n){"use strict";n.r(t);var r=n(113),o=n(2),a=n(0),i=n.n(a),c=n(44),l=n(16),d=n(1),u=n(81),s=n(18),m=n(21),f=n(7),b=n.n(f),h=n(15),v=n(11),p=n(9),g=n(30),E=n(166),w=n(19),j=n(27),y=n(17);function O(){var e=Object(o.a)(["\n  position: absolute;\n  bottom: 0rem;\n  width: 100%;\n  padding: 0 3rem;\n"]);return O=function(){return e},e}function x(){var e=Object(o.a)(["\n  display: flex;\n  width: 100%;\n  margin-bottom: 2rem;\n  justify-content: space-around;\n"]);return x=function(){return e},e}var k=d.d.div(x()),T=d.d.div(O()),z=p.object().shape({todo:p.string().required("The todo is required.").min(4,"Too short.")}),C={addTodo:y.a,editTodoAction:y.f},A=Object(l.b)(function(e){var t=e.todos;return{loading:t.loading,error:t.error}},C)(function(e){var t=e.editTodo,n=e.close,r=e.opened,o=e.addTodo,a=e.loading,c=e.error,l=e.editTodoAction,d=t?"Editing...":"Adding...";return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{opened:r,close:n},i.a.createElement(s.a,{noMargin:!0,size:"h1",color:"white"},t?"Edit your todo":"Add your new todo"),i.a.createElement(s.a,{bold:!0,size:"h4",color:"white"},t?"Edit your todo and tap edit":"Type your todo and press add"),i.a.createElement(v.c,{initialValues:{todo:t?t.todo:""},validationSchema:z,onSubmit:function(){var e=Object(h.a)(b.a.mark(function e(r,a){var i,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=a.setSubmitting,c=a.resetForm,!t){e.next=7;break}return e.next=4,l(t.id,r);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,o(r);case 9:e.t0=e.sent;case 10:e.t0&&n(),i(!1),c();case 14:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},function(e){var r=e.isSubmitting,o=e.isValid,l=e.resetForm;return i.a.createElement(m.c,null,i.a.createElement(v.a,{type:"text",name:"todo",placeholder:"Write your todo...",component:w.a}),i.a.createElement(k,null,i.a.createElement(g.a,{contain:!0,color:"main",type:"submit",disabled:!o||r,loading:a?d:null},t?"Edit todo":"Add todo"),i.a.createElement(g.a,{type:"button",color:"main",contain:!0,onClick:function(){n(),l()}},"Cancel")),i.a.createElement(T,null,i.a.createElement(j.a,{error:!0,show:c},c)))})))}),q=n(254);function S(){var e=Object(o.a)(["\n  position: absolute;\n  bottom: 2rem;\n  width: 100%;\n  padding: 0 3rem;\n"]);return S=function(){return e},e}function _(){var e=Object(o.a)(["\n  margin: 1rem 0rem;\n  font-size: 1.3rem;\n  text-align: center;\n  color: var(--color-white);\n"]);return _=function(){return e},e}function D(){var e=Object(o.a)(["\n  display: flex;\n  width: 100%;\n  margin-bottom: 2rem;\n  justify-content: space-around;\n"]);return D=function(){return e},e}var F=d.d.div(D()),I=d.d.div(_()),M=d.d.div(S()),Y={deleteTodo:y.c},J=Object(l.b)(function(e){var t=e.todos;return{error:t.deleteTodo.error,loading:t.deleteTodo.loading}},Y)(function(e){var t=e.show,n=e.close,r=e.todo,o=e.deleteTodo,a=e.error,c=e.loading;return i.a.createElement(E.a,{opened:t,close:n},i.a.createElement(s.a,{noMargin:!0,size:"h1",color:"white"},"Deleting todo"),i.a.createElement(s.a,{bold:!0,size:"h4",color:"white"},"Are you sure you want to delete this todo?"),i.a.createElement(I,null,r.todo),i.a.createElement(F,null,i.a.createElement(g.a,{contain:!0,color:"red",onClick:Object(h.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(r.id);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),disabled:c,loading:c?"Deleting...":null},"Delete"),i.a.createElement(g.a,{color:"main",contain:!0,onClick:n},"Cancel")),i.a.createElement(M,null,i.a.createElement(j.a,{error:!0,show:a},a)))});function L(){var e=Object(o.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  padding: 1rem;\n  justify-content: center;\n"]);return L=function(){return e},e}function N(){var e=Object(o.a)(["\n  width: 100%;\n  position: relative;\n  padding: 4rem 3rem;\n  background-color: var(--color-mainLighter);\n  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);\n  margin-bottom: 3.5rem;\n  border-radius: 0.5rem;\n  font-size: 1.4rem;\n  font-weight: 700;\n  text-align: center;\n  color: var(--color-white);\n"]);return N=function(){return e},e}var V=d.d.div(N()),W=d.d.div(L()),R={color:"var(--color-main)",margin:"0 .5rem",cursor:"pointer"},B={color:"var(--color-errorRed)",margin:"0 .5rem",cursor:"pointer"},G=function(e){var t=e.todo,n=Object(a.useState)(!1),o=Object(r.a)(n,2),c=o[0],l=o[1],d=Object(a.useState)(!1),u=Object(r.a)(d,2),s=u[0],m=u[1];return i.a.createElement(V,null,t.todo,i.a.createElement(W,null,i.a.createElement("i",{className:"fas fa-edit",style:R,onClick:function(){return m(!0)}}),i.a.createElement("i",{className:"fas fa-trash-alt",style:B,onClick:function(){return l(!0)}}),i.a.createElement(J,{todo:t,show:c,close:function(){return l(!1)}}),i.a.createElement(A,{editTodo:t,opened:s,close:function(){return m(!1)}})))};function H(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 60rem;\n  flex-direction: column;\n  margin-top: 2rem;\n"]);return H=function(){return e},e}function K(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5rem 4rem;\n"]);return K=function(){return e},e}function P(){var e=Object(o.a)(["\n  width: 100%;\n  align-self: flex-start;\n  height: 100%;\n  min-height: calc(100vh - 6rem);\n  background-color: var(--color-mainLight);\n"]);return P=function(){return e},e}var Q=d.d.div(P()),U=d.d.div(K()),X=d.d.div(H());t.default=Object(c.d)(Object(l.b)(function(e){var t=e.firebase,n=e.firestore;return{userId:t.auth.uid,todos:n.data.todos,requesting:n.status.requesting,requested:n.status.requested}},{}),Object(u.firestoreConnect)(function(e){return["todos/".concat(e.userId)]}))(function(e){var t,n=e.todos,o=(e.requested,e.userId),c=Object(a.useState)(!1),l=Object(r.a)(c,2),d=l[0],u=l[1];return t=n?n[o]&&n[o].todos?0===n[o].todos.length?i.a.createElement(X,null,i.a.createElement(s.a,{color:"white",size:"h2"},"You have no todos!")):i.a.createElement(X,null,n[o].todos.slice(0).reverse().map(function(e){return i.a.createElement(G,{key:e.id,todo:e})})):i.a.createElement(X,null,i.a.createElement(s.a,{color:"white",size:"h2"},"You have no todos!")):i.a.createElement(X,null,i.a.createElement(q.a,{isWhite:!0})),i.a.createElement(Q,null,i.a.createElement(m.a,null,i.a.createElement(U,null,i.a.createElement(s.a,{noMargin:!0,size:"h1",color:"white"},"Your Todos"),i.a.createElement(s.a,{bold:!0,size:"h4",color:"white"},"All you have to do for now..."),i.a.createElement(g.a,{color:"main",contain:!0,onClick:function(){return u(!0)}},"Add Todo"),i.a.createElement(A,{opened:d,close:function(){return u(!1)}}),t)))})}}]);
//# sourceMappingURL=3.375895f4.chunk.js.map