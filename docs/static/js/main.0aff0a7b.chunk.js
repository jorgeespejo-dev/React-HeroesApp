(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{37:function(e,a,r){},53:function(e,a,r){"use strict";r.r(a);var t=r(0),c=r(1),s=r(23),n=r.n(s),i=r(9),l=Object(c.createContext)(),o=r(4),h="[auth] login",j="[auth] logout",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case h:return Object(o.a)(Object(o.a)({},a.payload),{},{logged:!0});case j:return{logged:!1};default:return e}},b=r(5),d=r(2),m=r(13),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(c.useState)(e),r=Object(i.a)(a,2),t=r[0],s=r[1],n=function(){s(e)},l=function(e){var a=e.target;s(Object(o.a)(Object(o.a)({},t),{},Object(m.a)({},a.name,a.value)))};return[t,l,n]},O=function(e){var a=e.message;return Object(t.jsx)("div",{className:"alert alert-danger",role:"alert",children:a})},x=function(e){var a=e.history,r=p({username:""}),s=Object(i.a)(r,2),n=s[0],o=s[1],j=Object(c.useState)(!1),u=Object(i.a)(j,2),b=u[0],d=u[1],m=n.username,x=Object(c.useContext)(l).dispatch;return Object(t.jsx)("div",{className:"container mt-5",children:Object(t.jsx)("div",{className:"col-12 col-lg-6 mx-auto",children:Object(t.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===m||m.length<=3)d(!0);else{var r=localStorage.getItem("lastPath")||"/";x({type:h,payload:{name:m}}),a.replace(r)}},children:[Object(t.jsx)("h1",{children:"Login"}),Object(t.jsx)("hr",{}),Object(t.jsxs)("div",{className:"form-group mb-2",children:[Object(t.jsx)("label",{children:"Usuario:"}),Object(t.jsx)("input",{type:"text",className:"form-control",name:"username",autoComplete:"off",value:m,onChange:o})]}),b&&Object(t.jsx)(O,{message:"Debe ingresar un usuario y debe ser mayor a 3 caracteres"}),Object(t.jsxs)("div",{className:"form-group mb-2",children:[Object(t.jsx)("label",{children:"Contrase\xf1a:"}),Object(t.jsx)("input",{className:"form-control",type:"password",disabled:!0})]}),Object(t.jsx)("div",{className:"d-grid gap-2",children:Object(t.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Login"})}),Object(t.jsx)("p",{class:"text-center",children:"Demo Curso React, debes ingresar un nombre de usuario"})]})})})},v=r(24),g=r.n(v),f=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],C=(r(37),function(e){var a=e.id,r=e.superhero,c=e.alter_ego,s=e.first_appearance,n=e.characters;return Object(t.jsx)("div",{className:"col-12 col-sm-12 col-md-6 col-lg-3",children:Object(t.jsxs)("div",{className:"card bg-dark text-white mb-3",children:[Object(t.jsx)("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"card-img-top",alt:r}),Object(t.jsxs)("div",{className:"card-img-overlay",style:{backgroundColor:"rgba(52, 52, 52, 0.5)"},children:[Object(t.jsx)("h4",{className:"card-title",children:r}),Object(t.jsx)("h6",{className:"card-text",children:c}),c!==n&&Object(t.jsx)("p",{className:"card-text",children:n}),Object(t.jsx)("p",{className:"card-text",children:Object(t.jsx)("small",{children:s})}),Object(t.jsx)(b.b,{to:"./hero/".concat(a),className:"btn btn-dark",children:"Mas.."})]})]})})}),N=function(e){var a=e.publisher,r=Object(c.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto'));return f.filter((function(a){return a.publisher===e}))}(a)}),[a]),s=Object(c.useState)(1),n=Object(i.a)(s,2),l=n[0],h=n[1],j=8*l,u=j-8,b=r.slice(u,j);return Object(t.jsxs)("div",{className:"row animate__animated animate__fadeIn",children:[b.map((function(e){return Object(t.jsx)(C,Object(o.a)({},e),e.id)})),Object(t.jsx)(g.a,{itemClass:"page-item",linkClass:"page-link",activePage:l,itemsCountPerPage:8,totalItemsCount:r.length,pageRangeDisplayed:8,onChange:function(e){h(e)}})]})},_=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"DC Screen"}),Object(t.jsx)("hr",{}),Object(t.jsx)(N,{publisher:"DC Comics"})]})},y=function(e){var a=e.history,r=Object(d.i)().heroeId,s=Object(c.useMemo)((function(){return e=r,f.find((function(a){return a.id===e}));var e}),[r]);if(!s)return Object(t.jsx)(d.a,{to:"/"});var n=s.superhero,i=s.publisher,l=s.alter_ego,o=s.first_appearance,h=s.characters;return Object(t.jsx)("div",{children:Object(t.jsxs)("div",{className:"row mt-5",children:[Object(t.jsx)("div",{className:"col-8 col-sm-8 col-md-6 col-lg-4 mx-auto",children:Object(t.jsx)("img",{src:"./assets/heroes/".concat(r,".jpg"),alt:n,className:"img-thumbnail animate__animated animate__fadeInLeft animate__faster"})}),Object(t.jsxs)("div",{className:"col-8 col-sm-8 col-md-6 col-lg-8 mx-auto",children:[Object(t.jsxs)("h3",{children:[" ",n," "]}),Object(t.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:" Alter ego:"})," ",l]}),Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:" Publisher:"})," ",i]}),Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:" First Appearance:"})," ",o]})]}),Object(t.jsx)("h5",{children:"Characters"}),Object(t.jsxs)("p",{children:[" ",h," "]}),Object(t.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?a.push("/"):a.goBack()},children:"Return"})]})]})})},S=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"Marven Screen"}),Object(t.jsx)("hr",{}),Object(t.jsx)(N,{publisher:"Marvel Comics"})]})},k=r(26),D=r.n(k),M=function(e){var a=e.history,r=Object(d.h)(),s=D.a.parse(r.search).q,n=void 0===s?"":s,l=p({searchText:n}),h=Object(i.a)(l,2),j=h[0],u=h[1],b=j.searchText,m=Object(c.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLowerCase(),f.filter((function(a){return a.superhero.toLowerCase().includes(e)})))}(n)}),[n]);return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"Search Screen"}),Object(t.jsx)("hr",{}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-12 col-sm-12 col-md-8 col-lg-6 mx-auto",children:[Object(t.jsx)("h4",{children:"Search Form"}),Object(t.jsx)("hr",{}),Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(b))},children:[Object(t.jsx)("input",{name:"searchText",type:"text",placeholder:"Find your Hero",className:"form-control",value:b,autoComplete:"of",onChange:u}),Object(t.jsx)("div",{className:"d-grid gap-2",children:Object(t.jsx)("button",{className:"btn btn-outline-primary mt-2 mb-2",type:"submit",children:"Search.."})})]})]}),Object(t.jsx)("div",{className:"col-12 mx-auto",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("h4",{children:" Results "}),Object(t.jsx)("hr",{}),""===n&&Object(t.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==n&&0===m.length&&Object(t.jsxs)("div",{className:"alert alert-danger",children:["There is no a hero with ",n]}),m.map((function(e){return Object(t.jsx)(C,Object(o.a)({},e),e.id)}))]})})]})]})},w=function(){var e=Object(c.useContext)(l),a=e.user.name,r=e.dispatch,s=Object(d.g)();return Object(t.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(t.jsx)(b.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(t.jsx)("div",{className:"navbar-collapse",children:Object(t.jsxs)("div",{className:"navbar-nav",children:[Object(t.jsx)(b.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(t.jsx)(b.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(t.jsx)(b.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(t.jsx)("div",{className:"navbar",children:Object(t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(t.jsx)("span",{className:"nav-item nav-link text-info",children:a}),Object(t.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){r({type:j}),s.replace("/login")},children:"Logout"})]})})]})},A=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(w,{}),Object(t.jsx)("div",{className:"container py-4",children:Object(t.jsxs)(d.d,{children:[Object(t.jsx)(d.b,{exact:!0,path:"/marvel",component:S}),Object(t.jsx)(d.b,{exact:!0,path:"/hero/:heroeId",component:y}),Object(t.jsx)(d.b,{exact:!0,path:"/dc",component:_}),Object(t.jsx)(d.b,{exact:!0,path:"/search",component:M}),Object(t.jsx)(d.a,{to:"/marvel"})]})})]})},B=r(14),J=function(e){var a=e.isAuthenticated,r=e.component,c=Object(B.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",c.location.pathname+c.location.search),Object(t.jsx)(d.b,Object(o.a)(Object(o.a)({},c),{},{component:function(e){return a?Object(t.jsx)(r,Object(o.a)({},e)):Object(t.jsx)(d.a,{to:"/login"})}}))},T=function(e){var a=e.isAuthenticated,r=e.component,c=Object(B.a)(e,["isAuthenticated","component"]);return Object(t.jsx)(d.b,Object(o.a)(Object(o.a)({},c),{},{component:function(e){return a?Object(t.jsx)(d.a,{to:"/"}):Object(t.jsx)(r,Object(o.a)({},e))}}))},P=function(){var e=Object(c.useContext)(l).user;return Object(t.jsx)(b.a,{children:Object(t.jsx)("div",{children:Object(t.jsxs)(d.d,{children:[Object(t.jsx)(T,{exact:!0,path:"/login",component:x,isAuthenticated:e.logged}),Object(t.jsx)(J,{path:"/",component:A,isAuthenticated:e.logged})]})})})},F=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},I=function(){var e=Object(c.useReducer)(u,{},F),a=Object(i.a)(e,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(t.jsx)(l.Provider,{value:{user:r,dispatch:s},children:Object(t.jsx)(P,{})})};n.a.render(Object(t.jsx)(I,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.0aff0a7b.chunk.js.map