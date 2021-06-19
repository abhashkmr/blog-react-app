(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(16),r=c.n(a),j=(c(22),c(7)),o=c(2),i=(c(23),c(0)),l=function(){return Object(i.jsxs)("nav",{className:"navbar",children:[Object(i.jsx)("h1",{children:"Abhash's Blog"}),Object(i.jsxs)("div",{className:"links",children:[Object(i.jsx)(j.b,{to:"/",children:"Home"}),Object(i.jsx)(j.b,{to:"/create",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"New Blog"})]})]})},b=function(e){var t=e.blogs,c=e.title;return Object(i.jsxs)("div",{className:"blog-list",children:[Object(i.jsx)("h2",{children:c}),t.map((function(e){return Object(i.jsx)("div",{className:"blog-preview",children:Object(i.jsxs)(j.b,{to:"/blogs/".concat(e.id),children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsxs)("p",{children:["Written by ",e.author]})]})},e.id)}))]})},d=c(8),h=function(e){var t=Object(n.useState)(null),c=Object(d.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!0),j=Object(d.a)(r,2),o=j[0],i=j[1],l=Object(n.useState)(null),b=Object(d.a)(l,2),h=b[0],u=b[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){a(e),i(!1)})).catch((function(e){u(e.message)}))}),[e]),{data:s,isPending:o,error:h}},u=function(){var e=h("https://my-json-server.typicode.com/abhashkmr/blog-project-db/blogs"),t=e.data,c=e.isPending;e.error;return Object(i.jsxs)("div",{className:"home",children:[c&&Object(i.jsx)("div",{children:"Loading..."}),t&&Object(i.jsx)(b,{blogs:t,title:"All blogs!"})]})},O=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)("Abhash"),r=Object(d.a)(a,2),j=r[0],l=r[1],b=Object(n.useState)(""),h=Object(d.a)(b,2),u=h[0],O=h[1],x=Object(n.useState)(!1),g=Object(d.a)(x,2),p=g[0],v=g[1],f=Object(o.f)();return Object(i.jsxs)("div",{className:"create",children:[Object(i.jsx)("h2",{children:"Add a new Blog"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(!0);var t={title:c,author:j,body:u};console.log(t),fetch("https://my-json-server.typicode.com/abhashkmr/blog-project-db/blogs/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("new blog added"),f.push("/")}))},children:[Object(i.jsx)("label",{children:"Blog Title"}),Object(i.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){s(e.target.value)}}),Object(i.jsx)("label",{children:"Blog Body"}),Object(i.jsx)("textarea",{required:!0,value:u,onChange:function(e){O(e.target.value)}}),Object(i.jsx)("label",{children:"Select author:"}),Object(i.jsxs)("select",{required:!0,value:j,onChange:function(e){l(e.target.value)},children:[Object(i.jsx)("option",{value:"Abhash",children:"Abhash"}),Object(i.jsx)("option",{value:"Mahtab",children:"Mahtab"}),Object(i.jsx)("option",{value:"Rajat",children:"Rajat"}),Object(i.jsx)("option",{value:"Sudhanshu",children:"Sudhanhshu"}),Object(i.jsx)("option",{value:"Armaan",children:"Armaan"}),Object(i.jsx)("option",{value:"Akash",children:"Akash"})]}),!p&&Object(i.jsx)("button",{children:"Add Blog"}),p&&Object(i.jsx)("button",{disabled:!0,children:"Adding Blog"})]})]})},x=function(){var e=Object(o.g)().id,t=h("https://my-json-server.typicode.com/abhashkmr/blog-project-db/blogs/"+e),c=t.data,n=t.isPending,s=(t.error,Object(o.f)());return Object(i.jsxs)("div",{className:"blog-details",children:[n&&Object(i.jsx)("div",{children:"Loading"}),c&&Object(i.jsxs)("article",{children:[Object(i.jsx)("h2",{children:c.title}),Object(i.jsxs)("p",{children:["Written by ",c.author]}),Object(i.jsx)("div",{children:c.body}),Object(i.jsx)("button",{onClick:function(){fetch("https://my-json-server.typicode.com/abhashkmr/blog-project-db/blogs/"+e,{method:"DELETE"}).then((function(){s.go(-1)}))},children:"Delete Blog!"})]})]})},g=function(){return Object(i.jsxs)("div",{className:"not-found",children:[Object(i.jsx)("h2",{children:"Sorry!"}),Object(i.jsx)("p",{children:"The page you are looking for is unavailable"}),Object(i.jsx)(j.b,{to:"/",children:"Back to HomePage"})]})};var p=function(){return Object(i.jsx)(j.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{exact:!0,path:"/",children:Object(i.jsx)(u,{})}),Object(i.jsx)(o.a,{exact:!0,path:"/create",children:Object(i.jsx)(O,{})}),Object(i.jsx)(o.a,{exact:!0,path:"/blogs/:id",children:Object(i.jsx)(x,{})}),Object(i.jsx)(o.a,{path:"*",children:Object(i.jsx)(g,{})})]})})]})})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.9229ae8b.chunk.js.map