(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(1),s=n.n(i),c=n(8),o=n.n(c),l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),s(t),c(t)}))},r=n(9),d=n(2),h=n(3),u=n(5),j=n(4),p=(n(15),function(t){var e=t.todos.length,n=t.todos.filter((function(t){return t.completed})).length,i=e-n;return Object(a.jsx)("table",{className:"stats",children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"All:"}),Object(a.jsx)("td",{children:e})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Done:"}),Object(a.jsx)("td",{children:n})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Active:"}),Object(a.jsx)("td",{children:i})]})]})})}),b=n(7),f=function(t){return Object(a.jsx)("button",Object(b.a)(Object(b.a)({className:t.className,onClick:t.onClick},t),{},{children:t.icon?Object(a.jsx)("i",{className:"material-icons",children:t.icon}):t.children}))},m=(n(16),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={running:!1,elapsed:0,lastTick:0},t.tick=function(){if(t.state.running){var e=Date.now(),n=e-t.state.lastTick;t.setState({elapsed:t.state.elapsed+n,lastTick:e})}},t.handleStart=function(){t.setState({running:!0,lastTick:Date.now()})},t.handlePause=function(){t.setState({running:!1})},t.handleStop=function(){t.setState({running:!1,elapsed:0,lastTick:0})},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.tick,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"format",value:function(t){var e=Math.floor(t/1e3),n=Math.floor(e/60),a=e%60;return"".concat(n>9?n:"0"+n,":").concat(a>9?a:"0"+a)}},{key:"render",value:function(){var t=this.format(this.state.elapsed);return Object(a.jsxs)("section",{className:"stopwatch",children:[Object(a.jsx)("div",{className:"stopwatch-time",children:t}),Object(a.jsxs)("div",{className:"stopwatch-controls",children:[this.state.running?Object(a.jsx)(f,{className:"icon",onClick:this.handlePause,icon:"pause"}):Object(a.jsx)(f,{className:"icon",onClick:this.handleStart,icon:"play_arrow"}),Object(a.jsx)(f,{className:"icon",onClick:this.handleStop,icon:"stop"})]})]})}}]),n}(s.a.Component)),v=(n(17),function(t){return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)(p,{todos:t.todos}),Object(a.jsx)("h1",{className:"title",children:t.title}),Object(a.jsx)(m,{})]})}),O=function(t){return Object(a.jsx)("button",{className:"checkbox icon",onClick:t.onChange,children:Object(a.jsx)("i",{className:"material-icons",children:t.checked?"check_box":"check_box_outline_blank"})})},x=(n(18),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={editing:!1,text:t.props.title,isInvalid:!1},t.handleSubmit=function(e){e.preventDefault(),t.state.text.trim().length>0?(t.props.onEdit(t.props.id,t.state.text),t.setState({editing:!1,isInvalid:!1})):t.setState({isInvalid:!0})},t.handleChange=function(e){t.setState({text:e.target.value})},t}return Object(h.a)(n,[{key:"renderForm",value:function(){return Object(a.jsxs)("form",{className:"todo-edit-form",onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{className:"".concat(this.state.isInvalid?"is-invalid":""),type:"text",onChange:this.handleChange,value:this.state.text}),Object(a.jsx)(f,{className:"save icon",icon:"save",type:"submit"})]})}},{key:"renderDisplay",value:function(){var t=this;return Object(a.jsxs)("div",{className:"todo".concat(this.props.completed?" completed":""),children:[Object(a.jsx)(O,{checked:this.props.completed,onChange:function(){t.props.onStatusChange(t.props.id)}}),Object(a.jsx)("span",{className:"todo-title",children:this.props.title}),Object(a.jsx)(f,{className:"edit icon",icon:"edit",onClick:function(){t.setState({editing:!0})}}),Object(a.jsx)(f,{className:"delete icon",icon:"delete",onClick:function(){t.props.onDelete(t.props.id)}})]})}},{key:"render",value:function(){return this.state.editing?this.renderForm():this.renderDisplay()}}]),n}(s.a.Component)),g=(n(19),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={title:"",isInvalid:!1},t.handleSubmit=function(e){e.preventDefault();var n=t.state.title.trim();n.length>0?(t.props.onAdd(n),t.setState({title:"",isInvalid:!1})):t.setState({isInvalid:!0})},t.handleChange=function(e){t.setState({title:e.target.value})},t}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:"todo-form",onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{type:"text",value:this.state.title,placeholder:"What needs to be done",onChange:this.handleChange,className:"".concat(this.state.isInvalid?"is-invalid":"")}),Object(a.jsx)(f,{type:"submit",children:"Add"})]})}}]),n}(s.a.Component)),k=(n(20),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={todos:t.props.initialData},t.handleStatusChange=function(e){var n=t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));t.setState({todos:n})},t.handleDelete=function(e){var n=t.state.todos.filter((function(t){return t.id!==e}));t.setState({todos:n})},t.handleAdd=function(e){var n={id:t.nextId(),title:e,completed:!1},a=[].concat(Object(r.a)(t.state.todos),[n]);t.setState({todos:a})},t.handleEdit=function(e,n){var a=t.state.todos.map((function(t){return t.id===e&&(t.title=n),t}));t.setState({todos:a})},t}return Object(h.a)(n,[{key:"nextId",value:function(){return this._nextId=this._nextId||4,this._nextId++}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("main",{children:[Object(a.jsx)(v,{title:this.props.title,todos:this.state.todos}),Object(a.jsx)("section",{className:"todo-list",children:this.state.todos.map((function(e){return Object(a.jsx)(x,{id:e.id,title:e.title,completed:e.completed,onStatusChange:t.handleStatusChange,onDelete:t.handleDelete,onEdit:t.handleEdit},e.id)}))}),Object(a.jsx)(g,{onAdd:this.handleAdd})]})}}]),n}(s.a.Component));k.defaultProps={title:"React Todo"};var S=k,C=[{id:1,title:"Drink Coffee",completed:!0},{id:2,title:"Make Awesome App",completed:!1},{id:3,title:"Have a lunch",completed:!1}];o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(S,{initialData:C})}),document.getElementById("root")),l()}],[[21,1,2]]]);
//# sourceMappingURL=main.5ac64669.chunk.js.map