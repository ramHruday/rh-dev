(this["webpackJsonpreact-dev"]=this["webpackJsonpreact-dev"]||[]).push([[0],{102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(31),l=t.n(c),o=t(13),s=(t(47),t(14)),m=(t(48),t(49),t(32)),i=t.n(m),u=t(33),d=t.n(u),p=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"app-header shadow-sm d-flex justify-content-between w-100 align-items-stretch flex-row ".concat(e.className)},r.a.createElement("div",{className:"px-2 head-logo bg-white"},r.a.createElement("img",{src:i.a,alt:e.brandName,className:"pb-2"})),r.a.createElement("div",{className:"bg-light w-100 d-flex justify-content-end pr-2"},r.a.createElement("img",{src:d.a,alt:"search"}))))},E=t(11),h=t(34),f=t.n(h),b=t(36),k=t(37),y=t(17),g=t(117),v=(t(57),t(58),t(59),t(60),t(61),t(62),t(63),t(64),t(65),t(66),t(67),t(68),t(69),t(70),t(71),t(72),t(73),t(74),t(75),t(76),t(77),t(78),t(79),t(80),t(81),t(82),t(83),t(84),t(85),t(86),t(87),t(88),t(89),t(90),t(91),t(92),t(93),t(94),t(95),["csharp","css","elixir","golang","html","java","javascript","json","markdown","mysql","python","ruby","sass","typescript"]),w=["monokai","github","tomorrow","kuroir","twilight","xcode","textmate","solarized_dark","solarized_light","terminal"],N=t(116),A=function(e){var a=e.setLang,t=e.setTheme,n=e.setTitle,c=e.setDesc;return r.a.createElement(N.a,null,r.a.createElement(N.a.Group,{controlId:"formBasicMode"},r.a.createElement(N.a.Label,null,"Title"),r.a.createElement(N.a.Control,{as:"input",placeholder:"name of your code-snippet's",onChange:function(e){return n(e.currentTarget.value)}})),r.a.createElement(N.a.Group,{controlId:"formBasicMode"},r.a.createElement(N.a.Label,null,"Mode"),r.a.createElement(N.a.Control,{as:"select",placeholder:"Enter Mode",onChange:function(e){return a(e.currentTarget.value)}},v.map((function(e){return r.a.createElement("option",null,e)})))),r.a.createElement(N.a.Group,{controlId:"formBasicTheme"},r.a.createElement(N.a.Label,null,"Theme"),r.a.createElement(N.a.Control,{as:"select",placeholder:"Enter Mode",onChange:function(e){return t(e.currentTarget.value)}},w.map((function(e){return r.a.createElement("option",{value:e},e)})))),r.a.createElement(N.a.Group,{controlId:"formBasicMode"},r.a.createElement(N.a.Label,null,"Description"),r.a.createElement(N.a.Control,{as:"textarea",placeholder:"describe how to use it",onChange:function(e){return c(e.currentTarget.value)}})))},x=function(){var e=Object(n.useState)(v[0]),a=Object(E.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(w[0]),o=Object(E.a)(l,2),s=o[0],m=o[1],i=Object(n.useState)(""),u=Object(E.a)(i,2),d=(u[0],u[1]),p=Object(n.useState)(""),h=Object(E.a)(p,2),N=(h[0],h[1]),x=Object(n.useState)(""),B=Object(E.a)(x,2),C=B[0],S=B[1];return r.a.createElement(b.a,{fluid:!0},r.a.createElement(k.a,null,r.a.createElement(y.a,{sm:"12",md:"2"},r.a.createElement(A,{setLang:c,setTheme:m,setTitle:d,setDesc:N})),r.a.createElement(y.a,{sm:"12",md:"8",className:"bg-light shadow p-3"},r.a.createElement("h2",null,"Code heere!!"),r.a.createElement(f.a,{placeholder:"Start Code",mode:t,theme:s,onChange:S,name:"blah2",fontSize:18,className:"w-100",showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:C,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}}),r.a.createElement(g.a,{variant:"primary",className:"mt-4"},"Upload"))))},B=(t(98),function(){var e=Object(n.useState)(""),a=Object(E.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),o=Object(E.a)(l,2),s=o[0],m=o[1],i=function(e){switch(typeof e){case"string":return e.replace(/,/g," & ").replace(/(\r\n|\n|\r)/gm,"");case"object":return e?e instanceof Array?e.join("    ##        ").replace(/,/g," ").replace(/(\r\n|\n|\r)/gm,""):e:"NA";default:return"NA-not handled"}},u=function(e){var a=document.createElement("textarea");a.setAttribute("style","width:1px;border:0;opacity:0;"),document.body.appendChild(a),a.value=e,a.select(),document.execCommand("copy"),document.body.removeChild(a)};return r.a.createElement(b.a,{fluid:!0},r.a.createElement(k.a,null,r.a.createElement(y.a,{xs:"6"},r.a.createElement("h1",{className:"abbr pt-5 pb-2"},"New"),r.a.createElement(N.a.Control,{as:"textarea",rows:"24",value:t,onChange:function(e){return c(e.target.value)}})),r.a.createElement(y.a,{xs:"6"},r.a.createElement("h1",{className:"abbr pt-5 pb-2"},"Old"),r.a.createElement(N.a.Control,{as:"textarea",rows:"24",value:s,onChange:function(e){return m(e.target.value)}})),r.a.createElement(y.a,{xs:"12"},r.a.createElement(g.a,{variant:"primary",className:"mt-4 float-right",onClick:function(){!function(e,a){var t=JSON.parse(e),n=JSON.parse(a),r="";for(var c in t)if(t.hasOwnProperty(c)){var l=i(t[c]),o=i(n[c]);r+="".concat(c," , ").concat(l," , ").concat(o," , ").concat(l===o,"\n")}u(r)}(t,s)}},"Compare and copy csv"))))}),C=t(106),S=t(107),j=t(108),O=t(109),V=t(110),M=t(111),Q=(t(99),function(){return r.a.createElement("div",{className:"nav-list p-2 w-100 h-100 justify-content-around"},r.a.createElement(o.b,{to:"/"},r.a.createElement(C.a,{key:"home",className:"cursor-pointer"})),r.a.createElement(o.b,{to:"/library"},r.a.createElement(S.a,{key:"library",className:"cursor-pointer"})),r.a.createElement(o.b,{to:"/code-play"},r.a.createElement(j.a,{key:"play",className:"cursor-pointer"})),r.a.createElement(o.b,{to:"/"},r.a.createElement(O.a,{key:"user",className:"cursor-pointer"})))}),D=function(){return r.a.createElement("div",{className:"social-list d-flex p-2 w-100 flex-column justify-content-around"},r.a.createElement("a",{href:"https://github.com/ramHruday",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(V.a,null)),r.a.createElement("a",{href:"https://www.linkedin.com/in/rama-hrudayb/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(M.a,null)))},G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"app-nav d-none d-md-flex flex-column justify-content-between "},r.a.createElement(Q,null),r.a.createElement(D,null)),r.a.createElement("nav",{className:"app-pill-nav d-md-none "},r.a.createElement(Q,null)))},I=t(22),L=t(12),T=(t(102),t(40)),X=t.n(T),q=(t(103),t(112)),Y=function(e){var a=e.isBookMarked,t=e.id;return a?r.a.createElement(q.a,{key:t,color:"black",className:"mx-2 cursor-pointer"}):r.a.createElement(q.a,{key:t,fill:"#159BFD",className:"mx-2 cursor-pointer"})},W=t(113),Z=function(e){var a=e.id;return r.a.createElement(W.a,{key:a,color:"black",className:"mx-2 cursor-pointer"})},R=t(114),U=function(e){var a=e.isLiked,t=e.id;return a?r.a.createElement(R.a,{key:t,fill:"#36B37E",className:"mx-2 cursor-pointer",onClick:function(){return console.log("hu")}}):r.a.createElement(R.a,{key:t,color:"black",className:"mx-2 cursor-pointer"})},H=t(115),J=function(e){var a=e.id;return r.a.createElement(H.a,{key:a,color:"black",className:"mx-2 cursor-pointer"})},F=function(e){return r.a.createElement("div",{className:"d-inline-flex action-panel p-2 justify-content-between"},r.a.createElement(J,{id:e.key}),r.a.createElement(Z,{id:e.key}),r.a.createElement(Y,{id:e.key,isBookMarked:e.isBookmarked}),r.a.createElement(U,{id:e.key,isLiked:e.isLiked}))},z=function(e){var a=e.component;return r.a.createElement(L.a,{className:"deck-card m-2"},a.imageSrc?r.a.createElement(L.a.Img,{variant:"top",src:a.imageSrc}):r.a.createElement(L.a.Img,{variant:"top",src:X.a}),r.a.createElement(L.a.Body,{className:"bg-white px-2 py-0"},r.a.createElement(L.a.Title,{as:"h1"},a.label)),r.a.createElement(L.a.Body,null,r.a.createElement(L.a.Text,null,a.description)),r.a.createElement(L.a.Footer,{className:"pl-0 "},r.a.createElement(F,{key:a.key,isBookmarked:a.isBookmarked,isLiked:a.isLiked})))},K=function(){return r.a.createElement(b.a,{fluid:!0},r.a.createElement("h1",{className:"abbr"},"Your feed"),r.a.createElement(k.a,null,I.length>0?I.map((function(e){return r.a.createElement(y.a,{sm:"12",md:"6",lg:"3"},r.a.createElement(z,{component:e}))})):r.a.createElement("div",null,"No Items Found")))},P=(t(104),t(41)),_=t.n(P),$=function(){return r.a.createElement(b.a,{fluid:!0},r.a.createElement(k.a,null,r.a.createElement(y.a,{sm:"12",md:"6",className:"section"},"My curated code snippets/ logics and tricks"),r.a.createElement(y.a,{sm:"12",md:"6",className:"section"},r.a.createElement("img",{src:_.a,alt:"site under construction",className:"w-100"}))))},ee=function(){return r.a.createElement("div",{className:"wrapper h-100"},r.a.createElement(p,{brandName:"RH-DEV"}),r.a.createElement("div",{className:"d-flex h-100"},r.a.createElement(G,null),r.a.createElement("div",{className:"p-4 ml-md-5 mt-5 w-100 mb-4"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/code-play"},r.a.createElement(x,null)),r.a.createElement(s.a,{path:"/play/:componentId"},r.a.createElement(B,null)),r.a.createElement(s.a,{path:"/library"},r.a.createElement(K,null)),r.a.createElement(s.a,{path:"/"},r.a.createElement($,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,{basename:"/rh-dev"},r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},22:function(e){e.exports=JSON.parse('[{"label":"FacetPanel","description":"Custom Facet panel with configurable filters","frameWorks":[],"isBookmarked":true,"isLiked":true,"key":"facetPanel"},{"label":"FacetDropdown","frameWorks":[],"description":"Facet Dropdown with count,multi-selection,esc-key especically for search-applications, with virtual scroll !","isBookmarked":true,"isLiked":true,"key":"facetDropdown"},{"label":"Paginator","frameWorks":[],"description":"Custom Paginator for Search-Results type applications","isBookmarked":true,"isLiked":true,"key":"paginator"},{"label":"StickyTable","frameWorks":[],"key":"stickyTable","isBookmarked":true,"isLiked":true,"description":"Pure css Table, first column sticky with dynamic headers"},{"key":"headerBar","label":"Header Bar","frameWorks":["React"],"isBookmarked":true,"description":"Simple-search Header Bar Component","isLiked":true}]')},32:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAAaCAYAAACwwaJoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXuSURBVHgB3VpdchpHEO6ZAST/VVEpS85byEtKNpWycwLht1QsJUouYHSC4BMEn8DoBEYXUJAl+dWrG6BK6aeSB6+e7Eh+oOKyShbsdHr2hx2WhZ2VDAZ/VcDO7Pz3TE/317D54q/3ATsVGAq0HZBN5+xst2VbrUGl8g9W8rkL51mQvjh7/2RY+QBzC48eM85Lbk9SWqdHO+twCcwVHz1jyPPxb9FGiXabodU6fHkMBjBbm34IzFbfHG4c315YXuQcykG+6XrE9a3azEjeyQsZNhgPBhkQIG7cas3fW6qdHGw/jSs1ew55FGFb1659VaWRJQ6OCV5i4Nej2REuJSwOfIWGWhjQC/XDYIae7hSXLGxD5eTv7b1h7ZmtTT9QXqjxH3dmxd5M2ykH+dlrN5v0s2bSBoNOmb7cukhr+OZgY5VDCtCC5hlj1fl7y3/CVIOVWJY1aeP9ASNEq9lQG9Xq9spYCYyBetmG+uoTFnPEtz0fhg8lsDK9ssNOYWXUE70yGKsEc5AofnDnQXnQMw9Wnbu79LtRewh239oM+JyfZ5pBNSlZIxwTlEy6yi/8WKDCD7rV0BNWJlrw7VHDjmQF6fU7xeVX9FvyWmCVfKG0ZqqDxw2JTuv06IUdybboszZffPScAS+rDM5ZLX/3p4bJPRazNokQyDcRnJp6VppJ3WPvjrZ2h9XJgljU0x/P3rvl06lBR6x2n6njzOyt+zCFONnfUfOwgnSO8RqMCL6A7SDNhFxJqkMbSCtDBpF/IFIJy+sYu0ecVMsDmFI4HKrdBN0lpCXyMCIgYj145pp6G1heu9sk8HpYN3XPPXfXyCY4arz7a2sXfUtVaYmZ67cWYUSQgllhavjGuP398qIaT5DOyEy3bnphfUFgiFbwjDA6LaFvDIXsjRu/DCpLrkKPClT+WpBKLyzNj0FM9qEmGozZWqIAIwSdlnr3GXlpcMnQZJcSGvqbVMKKmpQCYQ+mGHSXjG2z0R2pm/CxRkZ0fTOQ6xFWBgyh9GyOZ3Rn2H57tG0Nq+Owixo50MkMBpI7wGCigXQ/01yeJ5U7OdhajcvvCLHHpdNyiYUBJnzEZLd1FajQJ6z83d++ieZl+ccSR17VVSA5ylVIADmdiWbqtMC99JkR9RQrLMVmzBeX1UkpqzTnrrrrEZZuskuQjWgbfcKa4W0b+sBB3/mkPqqnB1uX4u/SYv67pfuSs1jrqcMc25SUnQQgOruMibJ6Zh6b0cOxKpM9WGbhsM1ofWM16DUGLXRIUIfbZmSkgw+pCzux3Qwx9Rivx4nDqwmIp2nc0x6Z8Mig6CYpHsIV0M7lGkTs+qrUM+EDh9c12WXXZI+9YvqERRZeXU+T41tQDbvPiM0TQ0F5dXOvo3o3DqQeWhN+Zbm4DN2kQ6lCouws8Defb8K7Gko32VFjV3T0CSt6QX69sFJA4bz2Uqxkwm19SkhH1hnXnUrtnYzPn2QoYte/rwIT3r9OVJ63ZbmDsVdMohpUu0nfDUJglX6upA7S4LKBSBPQ0nTNZGRyLGZ8e4avkyqs+QNQp2lVN9mV8/zvACvbyM/q4dH80wVfAnoClaIJY4Ae4wpM+B6THeNVoIKRsBRdApoe5VyWYcoRdUDhojM2Bx81mkuR4YyHBhRZhI1B9YwZDPKr6mEHvDxKlnocyHGhB0/t039ejuVkKejELuewQrG1UpBuf/hvc1A9Y2G1syqIFnKBues3zSKsE4i5hZ8fqw0XpE0c/E8JX1PZXoqVQnUcxq7iYCwsV9cihkE6L1I8VadLjVf9HYGLML5EsE73X4zFwY+gT93psas4pHKKL3KZtVzbqQT8ln+6xuOUpgRDVrlTXCprOQX6KkSK2Vxmy2AAxQ1Se69MykoH60lWrCJ2ybeq6Hl67CoOqYTlO3V1evQ6meD/YRAvOTQ+Rdxbrf0h+7RlbxiN3QsImv07iQwGK6mMUoU+GeBqJ4qnNZMIhNTxLJ3qVx1lZwcH0iYMNn0sxWvSaSqc7u88admNz73JumuJspc5isP/nHlm1r/bjOMAAAAASUVORK5CYII="},33:function(e,a,t){e.exports=t.p+"static/media/Vector.0e5f9fd7.svg"},40:function(e,a,t){e.exports=t.p+"static/media/img-placeholder.f6586620.svg"},41:function(e,a,t){e.exports=t.p+"static/media/uc-impro.98c8bdac.gif"},42:function(e,a,t){e.exports=t(105)},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[42,1,2]]]);
//# sourceMappingURL=main.1486abb0.chunk.js.map