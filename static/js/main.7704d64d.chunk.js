(this["webpackJsonpgithub-explorer-react"]=this["webpackJsonpgithub-explorer-react"]||[]).push([[0],{18:function(n,e,t){n.exports=t.p+"static/media/logo.04f6798f.svg"},35:function(n,e,t){n.exports=t.p+"static/media/github-background.0b819d63.svg"},43:function(n,e,t){n.exports=t(70)},70:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(34),l=t.n(o),c=t(10),i=t(6),u=t(7),p=t(35),s=t.n(p);function m(){var n=Object(i.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background-color: #f0f0f5;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-position-y: top;\n    background-position-x: 70%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 16px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 20px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return m=function(){return n},n}var d=Object(u.a)(m(),s.a),f=t(2),g=t(20),b=t.n(g),x=t(42),E=t(39),h=t(12),v=t(9),y=t(40),O=t.n(y).a.create({baseURL:"https://api.github.com"}),j=t(18),k=t.n(j),w=t(41);function S(){var n=Object(i.a)(["\n  margin-top: 80px;\n  max-width: 700px;\n\n  a {\n    background-color: #fff;\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n\n    &:hover {\n      transform: translateX(10px);\n      transition: transform 0.2s;\n    }\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    img {\n      width: 64px;\n      height: 64px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin-left: 0 16px;\n      flex: 1;\n\n      strong {\n        font-size: 20px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #a8a8b3;\n        margin-top: 4px;\n      }\n    }\n\n    svg {\n      margin-left: auto;\n      color: #cbcbd6;\n    }\n  }\n"]);return S=function(){return n},n}function z(){var n=Object(i.a)(["\n  display: block;\n  color: #c53030;\n  margin-top: 8px;\n"]);return z=function(){return n},n}function _(){var n=Object(i.a)(["\n        border-color: #c53030;\n      "]);return _=function(){return n},n}function G(){var n=Object(i.a)(["\n  margin-top: 40px;\n  max-width: 700px;\n  display: flex;\n\n  input {\n    flex: 1;\n    height: 70px;\n    padding: 0 24px;\n    border: 0;\n    border-radius: 5px 0px 0px 5px;\n    color: #3a3a3a;\n    border: 2px solid #fff;\n    border-right: 0;\n\n    ","\n  }\n\n  button {\n    width: 210px;\n    height: 70px;\n    background-color: #04d361;\n    border-radius: 0px 5px 5px 0px;\n    border: 0;\n    color: #fff;\n    font-weight: bold;\n    transition: background-color 0.2s;\n\n    &:hover {\n      background-color: ",";\n    }\n\n    &::placeholder {\n      color: #a8a8b3;\n    }\n  }\n"]);return G=function(){return n},n}function H(){var n=Object(i.a)(["\n  font-size: 48px;\n  color: #3a3a3a;\n  margin-top: 80px;\n  max-width: 450px;\n  line-height: 56px;\n"]);return H=function(){return n},n}var F=u.c.h1(H()),J=u.c.form(G(),(function(n){return n.hasError&&Object(u.b)(_())}),Object(w.a)(.2,"#04d361")),L=u.c.span(z()),I=u.c.div(S()),N=function(){var n=Object(r.useState)(""),e=Object(h.a)(n,2),t=e[0],o=e[1],l=Object(r.useState)(""),i=Object(h.a)(l,2),u=i[0],p=i[1],s=Object(r.useState)((function(){var n=localStorage.getItem("@GitHubExplorer:repositories");return n?JSON.parse(n):[]})),m=Object(h.a)(s,2),d=m[0],f=m[1];function g(){return(g=Object(E.a)(b.a.mark((function n(e){var r,a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t){n.next=4;break}return p('Enter a valid "author/repository"'),n.abrupt("return");case 4:return n.prev=4,n.next=7,O.get("/repos/".concat(t));case 7:r=n.sent,a=r.data,f([].concat(Object(x.a)(d),[a])),o(""),p(""),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),p("Not found, or communication error.");case 17:case"end":return n.stop()}}),n,null,[[4,14]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){localStorage.setItem("@GitHubExplorer:repositories",JSON.stringify(d))}),[d]),a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:k.a,alt:"GitHub Explorer Logo"}),a.a.createElement(F,null,"GitHub Repository Explorer"),a.a.createElement(J,{hasError:!!u,onSubmit:function(n){return g.apply(this,arguments)}},a.a.createElement("input",{value:t,onChange:function(n){return o(n.target.value)},placeholder:"Enter repo name"}),a.a.createElement("button",{type:"submit"},"Search")),u&&a.a.createElement(L,null,u),a.a.createElement(I,null,d.map((function(n){return a.a.createElement(c.b,{key:n.full_name,to:"/repository/".concat(n.full_name)},a.a.createElement("img",{src:n.owner.avatar_url,alt:n.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,n.full_name),a.a.createElement("p",null,n.description)),a.a.createElement(v.b,{size:20}))}))))};function R(){var n=Object(i.a)(["\n  margin-top: 80px;\n\n  a {\n    background-color: #fff;\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n\n    &:hover {\n      transform: translateX(10px);\n      transition: transform 0.2s;\n    }\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    div {\n      margin-left: 0 16px;\n      flex: 1;\n\n      strong {\n        font-size: 20px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #a8a8b3;\n        margin-top: 4px;\n      }\n    }\n\n    svg {\n      margin-left: auto;\n      color: #cbcbd6;\n    }\n  }\n"]);return R=function(){return n},n}function X(){var n=Object(i.a)(["\n  margin-top: 80px;\n\n  header {\n    display: flex;\n    align-items: center;\n\n    img {\n      width: 120px;\n      height: 120px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin-left: 25px;\n\n      strong {\n        font-size: 36px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #737380;\n        margin-top: 4px;\n      }\n    }\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n    margin-top: 40px;\n\n    li {\n      & + li {\n        margin-left: 80px;\n      }\n\n      strong {\n        display: block;\n        font-size: 36px;\n        color: #3d3d4d;\n      }\n\n      span {\n        display: block;\n        margin-top: 4px;\n        color: #6c6c80;\n\n        svg {\n          margin-right: 4px;\n        }\n      }\n    }\n  }\n"]);return X=function(){return n},n}function B(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  a {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: #a8a8b3;\n    transition: color 0.2s;\n\n    &:hover {\n      color: #666;\n    }\n\n    svg {\n      margin-right: 4px;\n    }\n  }\n"]);return B=function(){return n},n}var C=u.c.header(B()),D=u.c.section(X()),M=u.c.div(R()),U=function(){var n=Object(r.useState)(null),e=Object(h.a)(n,2),t=e[0],o=e[1],l=Object(r.useState)([]),i=Object(h.a)(l,2),u=i[0],p=i[1],s=Object(f.f)().params;return Object(r.useEffect)((function(){O.get("repos/".concat(s.repository)).then((function(n){o(n.data)})),O.get("repos/".concat(s.repository,"/issues")).then((function(n){p(n.data)}))}),[s.repository]),a.a.createElement(a.a.Fragment,null,a.a.createElement(C,null,a.a.createElement("img",{src:k.a,alt:"GitHub Explorer Logo"}),a.a.createElement(c.b,{to:"/"},a.a.createElement(v.a,null)," Voltar")),t?a.a.createElement(D,null,a.a.createElement("header",null,a.a.createElement("img",{src:t.owner.avatar_url,alt:t.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,t.full_name),a.a.createElement("p",null,t.description))),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("strong",null,t.stargazers_count),a.a.createElement("span",null,a.a.createElement(v.e,null),"Stars")),a.a.createElement("li",null,a.a.createElement("strong",null,t.forks_count),a.a.createElement("span",null,a.a.createElement(v.c,null)," Forks")),a.a.createElement("li",null,a.a.createElement("strong",null,t.open_issues_count),a.a.createElement("span",null,a.a.createElement(v.d,null)," Open issues")))):a.a.createElement("p",null,"Loading..."),a.a.createElement(M,null,u.map((function(n){return a.a.createElement("a",{key:n.id,href:n.html_url},a.a.createElement("div",null,a.a.createElement("strong",null,n.title),a.a.createElement("p",null,n.user.login)),a.a.createElement(v.b,{size:20}))}))))},V=function(){return a.a.createElement(f.c,null,a.a.createElement(f.a,{path:"/repository/:repository+",component:U}),a.a.createElement(f.a,{exact:!0,path:"/",component:N}))},q=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{basename:"/gostack-s03"},a.a.createElement(V,null)),a.a.createElement(d,null))};l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(q,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.7704d64d.chunk.js.map