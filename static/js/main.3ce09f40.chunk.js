(this.webpackJsonpmytemplates=this.webpackJsonpmytemplates||[]).push([[0],{289:function(e,n,t){"use strict";t.r(n);var i,c,r,a,o,s,d,l,b,p,u,h,x,j,f,m,O,g,w,v,y,k,S,R,L,_=t(0),C=t(43),q=t.n(C),z=t(13),T=t(6),I=t(7),M=I.b.footer(i||(i=Object(T.a)(["\n    margin-top: 20px;\n    padding-bottom: 20px;\n"]))),N=t(3),P=function(){return Object(N.jsx)(M,{children:Object(N.jsx)("div",{children:Object(N.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://seleshabani.github.io/html_Templates/portfolio_v5",children:"\xa9Sele Shabani \xb72021"})})})},A=t(36),E="http://localhost:3500/api/",F="http://localhost:3500/public/",J="/myTemplates-website",U=t(91),D=I.b.div(c||(c=Object(T.a)(["\n    width: 30%;\n    @media(max-width:800px){\n        width:100%;\n    }\n"]))),H=I.b.div(r||(r=Object(T.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n"]))),W=I.b.div(a||(a=Object(T.a)(["\n    width: 70%;\n"]))),X=function(){var e=Object(U.a)(),n=e.register,t=e.handleSubmit,i=Object(z.f)();return Object(N.jsx)(D,{children:Object(N.jsx)("form",{onSubmit:t((function(e){i.push("".concat(J,"/search/").concat(e.query))})),children:Object(N.jsxs)(H,{children:[Object(N.jsx)(W,{children:Object(N.jsx)("input",{type:"text",name:"query",ref:n})}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{children:"Rechercher"})})]})})})},Y=I.b.header(o||(o=Object(T.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    align-content: center;\n\n    @media(max-width:800px){\n    flex-direction: column;\n    & .brand{\n        width: 100%;\n    }\n"]))),B=function(){return Object(N.jsxs)(Y,{children:[Object(N.jsx)("div",{className:"brand",children:Object(N.jsxs)("h2",{children:["Templates by ",Object(N.jsx)(A.b,{to:"".concat(J),children:"Sele Shabani"})]})}),Object(N.jsx)(X,{})]})},G=t(22),K=t(17),Q=t(5),V=t.n(Q),Z=t(14),$=t(31),ee=t.n($),ne="fecth_multiple",te="fech multiple error",ie="fetch one item",ce="item is loading",re="item is loaded",ae=function(e){return function(){var n=Object(Z.a)(V.a.mark((function n(t){var i;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ee.a.get(E+"items/".concat(e));case 3:i=n.sent,t({type:ie,payload:i.data}),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0),t({type:te,payload:n.t0});case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},oe=function(e){return function(){var n=Object(Z.a)(V.a.mark((function n(t){var i,c;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,(i=new URLSearchParams).append("itemId",e),n.next=5,ee.a.post("".concat(E,"likes"),i);case 5:c=n.sent,t({type:"",payload:{isLiked:!0,color:"tomato",likeInfo:c.data}}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},se=function(e){return function(){var n=Object(Z.a)(V.a.mark((function n(t){var i;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ee.a.get("".concat(E,"likes/").concat(e));case 3:i=n.sent,t({type:"",payload:{isLiked:!1,color:"whitesmoke",likeInfo:i.data}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},de=I.b.div(s||(s=Object(T.a)(["\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    width:100%;\n    height:100%;\n    background:rgba(0,0,0,0.2);\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    align-content:center;\n    visibility:",";\n    \n"])),(function(e){return e.visible?"visible":"hidden"})),le=I.b.div(d||(d=Object(T.a)(["\n    width:70%;\n    height:80%;\n    overflow-y:scroll;\n    border: solid 2px whitesmoke;\n    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);\n    padding:20px;\n    background:rgba(0,0,0,0.9);\n    color:whitesmoke;\n    @media(max-width:800px){\n        padding:10px;\n        width:88%;\n    }\n"]))),be=I.b.div(l||(l=Object(T.a)(["\n    width:100%;\n    display:flex;\n    flex-direction:row;\n    justify-content:space-between;\n    & h1{\n        width:60%;\n        text-transform: capitalize;\n    }\n\n    & div{\n        width:5%;\n        cursor:pointer;\n    }\n"]))),pe=I.b.div(b||(b=Object(T.a)(["\n    width:100%;\n    display:flex;\n    flex-direction:row;\n    align-items:flex-start;\n    justify-content:space-between;\n    @media(max-width:800px){\n        flex-direction: column;\n        gap:1rem;\n    }\n"]))),ue=I.b.div(p||(p=Object(T.a)(["\n    border-radius:5px;\n    overflow:hidden;\n    width:90%;\n    height:80%\n    & img{\n        height:100%;\n        width:100%;\n    }\n"]))),he=I.b.div(u||(u=Object(T.a)(["\n    width:5%;\n    display:flex;\n    flex-direction:column;\n    gap:1rem;\n"]))),xe=I.b.div(h||(h=Object(T.a)(["\n    width:100%;\n    padding:8px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    align-content:center;\n    background:rgba(0,0,0,0.6);\n    font-size:1.3rem;\n    color: ",";\n    cursor:pointer;\n"])),(function(e){return e.color})),je=function(e){var n=e.visible,t=e.onClick,i=e.id,c=Object(K.b)(),r=Object(K.c)((function(e){return e.oneItemReducer})),a=Object(K.c)((function(e){return e.likeReducer}));Object(_.useEffect)((function(){var e;0!==i&&(c(ae(i)),c((e=i,function(){var n=Object(Z.a)(V.a.mark((function n(t){var i;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ee.a.get("".concat(E,"likes/").concat(e,"/isliked"));case 3:i=n.sent,t({type:"",payload:{isLiked:i.data,color:!0===i.data?"tomato":"whitesmoke"}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}())))}),[i]);var o=function(){var e=Object(Z.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!1===a.isLiked?c(oe(r._id)):c(se(r._id));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsx)(de,{visible:n,children:function(e){if(0!==e)return Object(N.jsxs)(le,{children:[Object(N.jsxs)(be,{children:[Object(N.jsx)("h1",{children:r.name}),Object(N.jsx)(xe,{onClick:t,children:"X"})]}),Object(N.jsx)("h2",{children:Object(N.jsx)("a",{href:r.linkPreview,target:"_blank",rel:"noopener noreferrer",children:"Live Preview"})}),Object(N.jsxs)(pe,{children:[Object(N.jsx)(ue,{children:Object(N.jsx)(A.b,{to:"".concat(J,"/templates/").concat(r._id),children:Object(N.jsx)("img",{src:"".concat(F).concat(r.screen),alt:"capture d'\xe9cran ".concat(r.name)})})}),Object(N.jsx)(he,{children:Object(N.jsx)(xe,{color:a.color,onClick:o,children:Object(N.jsx)("i",{className:"fa fa-heart"})})})]})]})}(i)})},fe=I.b.div(x||(x=Object(T.a)(["\n    width: 30%;\n    height: max-content;\n    border: solid 2px whitesmoke;\n    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);\n    overflow: hidden;\n    transition: all 300ms;\n    object-fit:cover;\n    cursor:pointer;\n\n    &:hover{\n        transform: translateY(5px);\n    }\n    @media(max-width:800px){\n        width: 100%;\n    }\n"]))),me=function(e){var n=e.onClick,t=(e.name,e.link,e.img);e.id;return Object(N.jsx)(fe,{onClick:n,children:Object(N.jsx)("img",{src:"".concat(F).concat(t),alt:""})})},Oe=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Array.isArray(e)&&e.length>=1?e.map((function(e,t){return Object(N.jsx)(me,{id:e._id,onClick:function(t){return n(t,e)},name:e.name,link:e.linkPreview,img:e.screen},t)})):Object(N.jsx)("h1",{children:!1===t?"Aucun template n'est disponible pour l'instant":"Aucun r\xe9sultat pour votre r\xe9cherche"})},ge=I.b.div(j||(j=Object(T.a)(["\n    width:100%;\n    display:flex;\n    flex-direction:column;\n    gap:1rem;\n    @media(max-width:800px){\n        width:100%;\n    }\n"]))),we=I.b.div(f||(f=Object(T.a)(["\n    width: 100%;\n    padding-top: 20px;\n    padding-bottom: 10px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 1em;\n    justify-content: space-between;\n    align-items: center;\n    align-content: center;\n    @media(max-width:800px){\n        flex-direction: column;\n    }\n"]))),ve=I.b.div(m||(m=Object(T.a)(["\n    width:100%;\n    & button{\n        width:100%;\n        padding:10px;\n    }\n\n"]))),ye=function(){var e=Object(_.useState)(!1),n=Object(G.a)(e,2),t=n[0],i=n[1],c=Object(_.useState)({page:1,limit:4}),r=Object(G.a)(c,2),a=r[0],o=r[1],s=Object(_.useState)(0),d=Object(G.a)(s,2),l=d[0],b=d[1],p=Object(K.b)(),u=Object(K.c)((function(e){return e.itemReducer}));Object(_.useEffect)((function(){var e;p((e=a,function(){var n=Object(Z.a)(V.a.mark((function n(t){return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:ce}),n.next=4,ee.a.get("".concat(E,"items?page=").concat(e.page,"&limit=").concat(e.limit)).then((function(e){t({type:re,payload:e.data})}));case 4:n.next=10;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0),t({type:te,payload:n.t0});case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}())),window.document.querySelector("title").text="MyTemplates"}),[a]);return u.isLoading?Object(N.jsx)(ge,{children:Object(N.jsx)("h1",{children:"en cours de chargement"})}):Object(N.jsxs)(ge,{children:[Object(N.jsx)(we,{children:Oe(u.results,(function(e,n){b(n._id),i(!t)}))}),Object(N.jsx)(ve,{children:Object(N.jsx)("button",{onClick:function(){u.next?o(u.next):o({page:1,limit:a.limit})},children:u.next?"voir plus":"voir moins"})}),Object(N.jsx)(je,{id:l,visible:t,onClick:function(){i(!1)}})]})},ke=I.b.div(O||(O=Object(T.a)(["\n    width:100%;\n    display:flex;\n    flex-direction:row;\n    gap:1rem;\n    align-items:flex-start;\n"]))),Se=I.b.div(g||(g=Object(T.a)(["\n    width:70%;\n    display:flex;\n    flex-direction:row;\n    gap:.5rem;\n"]))),Re=function(e){var n=e.match.params.query,t=Object(K.b)(),i=Object(K.c)((function(e){return e.itemReducer})),c=Object(_.useState)(!1),r=Object(G.a)(c,2),a=r[0],o=r[1],s=Object(_.useState)(0),d=Object(G.a)(s,2),l=d[0],b=d[1];Object(_.useEffect)((function(){var e,c;window.document.querySelector("title").text="MyTemplates | Recherche | ".concat(n),t((e=n,c={page:1,limit:3},function(){var n=Object(Z.a)(V.a.mark((function n(t){var i;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ee.a.get(E+"items/search/".concat(e,"?page=").concat(c.page,"&limit=").concat(c.limit));case 3:i=n.sent,t({type:ne,payload:i.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}())),console.log(i)}),[n]);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("h1",{children:["R\xe9sultat de Recherche pour : ",n]}),Object(N.jsx)(ke,{children:Object(N.jsx)(Se,{children:Oe(i.results,(function(e,n){b(n._id),o(!a)}),!0)})}),Object(N.jsx)(je,{id:l,visible:a,onClick:function(){o(!1)}})]})},Le=I.b.div(w||(w=Object(T.a)(["\n    width:100%;\n    display:flex;\n    flex-direction:row;\n    align-items:flex-start;\n    justify-content:space-between;\n    @media(max-width:800px){\n        flex-direction: column;\n        gap:1rem;\n    }\n"]))),_e=I.b.div(v||(v=Object(T.a)(["\n    width:70%;\n    display:flex;\n    flex-direction:column;\n    gap:1rem;\n    border-radius:5px;\n    overflow:hidden;\n    & img{\n        width:100%;\n        display:inline-block;\n    }\n    @media(max-width:800px){\n       width:100%;\n    }\n"]))),Ce=I.b.div(y||(y=Object(T.a)(["\n    width:100%;\n    padding:5px;\n    display:flex;\n    flex-direction:row;\n    justify-content:space-between;\n    align-items:flex-start;\n"]))),qe=I.b.div(k||(k=Object(T.a)(["\n    width:70%;\n    display:flex;\n    flex-direction:row;\n    padding:5px;\n"]))),ze=I.b.div(S||(S=Object(T.a)(["\n    width:40px;\n    height:40px;\n    border-radius:50%;\n    padding:5px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    /* border:solid 1px whitesmoke; */\n    color:whitesmoke;\n    background: rgba(255, 255, 255,0.1);\n    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);\n    cursor:pointer;\n    margin-right:15px;\n"]))),Te=I.b.div(R||(R=Object(T.a)(["\n    width:25%;\n    display:flex;\n    flex-direction:row;\n"]))),Ie=I.b.div(L||(L=Object(T.a)(["\n    width:80px;\n    height:35px;\n    padding:5px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    color:whitesmoke;\n    background: rgba(255, 255, 255,0.1);\n    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);\n    border-radius:5px;\n    cursor:pointer;\n    margin-right:10px;\n"]))),Me=function(e){var n=Object(K.b)(),t=Object(K.c)((function(e){return e.oneItemReducer})),i=e.match.params.id;return Object(_.useEffect)((function(){n(ae(i)),window.document.querySelector("title").text="MyTemplates | ".concat(t.name)}),[i]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h1",{children:t.name}),Object(N.jsx)(Le,{children:Object(N.jsxs)(_e,{children:[Object(N.jsx)("img",{src:"".concat(F).concat(t.screen),alt:"capture d'\xe9cran ".concat(t.name)}),Object(N.jsxs)(Ce,{children:[Object(N.jsxs)(qe,{children:[Object(N.jsx)(ze,{children:Object(N.jsx)("i",{className:"fa fa-facebook"})}),Object(N.jsx)(ze,{children:Object(N.jsx)("i",{className:"fa fa-twitter"})})]}),Object(N.jsxs)(Te,{children:[Object(N.jsx)(Ie,{children:Object(N.jsx)("i",{className:"fa fa-download"})}),Object(N.jsx)(Ie,{children:Object(N.jsx)("h6",{children:Object(N.jsx)("a",{href:t.linkPreview,target:"_blank",rel:"noopener noreferrer",children:"Live preview"})})})]})]})]})})]})},Ne=t(88),Pe=t.n(Ne),Ae={background:{color:{value:"rgb(13 24 161 / 38%)"}},fpsLimit:60,interactivity:{detectsOn:"main",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:6,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0};var Ee,Fe=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(Pe.a,{options:Ae}),Object(N.jsxs)("main",{children:[Object(N.jsx)(B,{}),Object(N.jsxs)(z.c,{children:[Object(N.jsx)(z.a,{exact:!0,path:"".concat(J),component:ye}),Object(N.jsx)(z.a,{exact:!0,path:"".concat(J,"/templates/:id"),component:Me}),Object(N.jsx)(z.a,{exact:!0,path:"".concat(J,"/search/:query"),component:Re})]})]}),Object(N.jsx)(P,{})]})},Je=t(28),Ue=t(89),De=t(90),He=t(27),We={isLoading:!1},Xe={isLiked:!1},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ce:return{isLoading:!0};case re:case ne:return Object(He.a)(Object(He.a)({},n.payload),{},{isLoading:!1});case te:return{msg:"Une erreur est survenue",payload:n.payload};default:return e}},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ie:return Object(He.a)({},n.payload);default:return e}},Ge={isLiked:!1,color:"whitesmoke"},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"":case"":return Object(He.a)({},n.payload);default:return e}},Qe=Object(Je.combineReducers)({itemReducer:Ye,oneItemReducer:Be,likeReducer:Ke}),Ve=Object(Je.createStore)(Qe,Object(De.composeWithDevTools)(Object(Je.applyMiddleware)(Ue.a))),Ze=Object(I.a)(Ee||(Ee=Object(T.a)(["\nhtml{\n    box-sizing: border-box;\n}\nbody{\n    padding: 0;\n    margin: 0;\n    background-color: rgb(13 24 161 / 38%);\n}\nbody #root{\n    position: relative;\n    width:100%;\n    height:100%;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    align-items: center;\n    justify-content: center;\n    overflow:hidden;\n}\nbody #root #tsparticles{\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    z-index: -1;\n    width:100vw;\n    height:100vh;\n    margin-top:10px;\n    padding:0px;\n    & canvas{\n        width:100%;\n        height:100%;\n    }\n    @media(max-width:800px){\n        display:none;\n    }\n}\n}\n\n*,*::after,*::before{\n   box-sizing: inherit; \n}\n* img{\n    width: 100%;\n    height: auto;\n    aspect-ratio: 16/9;\n}\nh1{\n    text-transform:capitalize;\n}\ninput{\n    width: 100%;\n    border: none;\n    border-radius: 5px;\n    outline: none;\n    border: solid 2px whitesmoke;\n    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);\n    padding: 5px;\n}\na{\n    color:white;\n    transition: all 300ms;\n}\nbutton{\n    padding: 5px;\n    color: whitesmoke;\n    background: rgba(255, 255, 255,0.1);\n    border-radius: 5px;\n    border: solid 2px whitesmoke;\n    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);\n    cursor: pointer;\n    outline:none;\n}\nmain{\n   width: 90%;\n}\n"])));q.a.render(Object(N.jsx)(A.a,{children:Object(N.jsxs)(K.a,{store:Ve,children:[Object(N.jsx)(Ze,{}),Object(N.jsx)(Fe,{})]})}),document.querySelector("#root"))}},[[289,1,2]]]);
//# sourceMappingURL=main.3ce09f40.chunk.js.map