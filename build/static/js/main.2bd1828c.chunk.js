(this.webpackJsonpCatalogue=this.webpackJsonpCatalogue||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports={navSection:"Navbar_navSection__1-Pe5",navbar:"Navbar_navbar__1Nna9",navLinks:"Navbar_navLinks__RoNqv",navToggle:"Navbar_navToggle__prVyv",logo:"Navbar_logo__OAuYz",login:"Navbar_login__1QO-Q",maskHidden:"Navbar_maskHidden__2uZnv",maskShown:"Navbar_maskShown__2PDZG",navClicked:"Navbar_navClicked__1baBw",navShown:"Navbar_navShown__3sWuH"}},function(e,t,n){e.exports={footer:"Footer_footer__345yP",solid:"Footer_solid__3nJqe",menuContainer:"Footer_menuContainer__2E8fi",copyright:"Footer_copyright__31XeR",credit:"Footer_credit__2RD4Z",social:"Footer_social__3v5Pq",socialIcon:"Footer_socialIcon__1Fzwt"}},,,function(e,t,n){e.exports={item:"SearchItem_item__1KTfR",image:"SearchItem_image__1hDOu",info:"SearchItem_info__3oPfu",authors:"SearchItem_authors__3IYO3",description:"SearchItem_description__1wJNL",actions:"SearchItem_actions__1yO6i",disabled:"SearchItem_disabled__uoTNW",noImage:"SearchItem_noImage__2hzv1"}},,function(e,t,n){e.exports={auth:"Login_auth__2ZklP",authCard:"Login_authCard__sM-zp",control:"Login_control__m0cCq",actions:"Login_actions__3de6K",toggle:"Login_toggle__j-PqS"}},,function(e,t,n){e.exports={grid:"ExploreGrid_grid__Qkg2-",block1:"ExploreGrid_block1__6oYwR",block2:"ExploreGrid_block2__1mZW9",block3:"ExploreGrid_block3__1eXNH",block4:"ExploreGrid_block4__3iuaI"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__KVgd0",modal:"Modal_modal__2cn8t",header:"Modal_header__2Bhx3",content:"Modal_content__3J3zr",actions:"Modal_actions__1OmcQ"}},,function(e,t,n){e.exports={item:"SavedItem_item__1C2Fv",imgContainer:"SavedItem_imgContainer__3dbdu",button:"SavedItem_button__1H-js",noImage:"SavedItem_noImage__3jC4O"}},function(e,t,n){e.exports={inputForm:"SearchInput_inputForm__248CP",inputContainer:"SearchInput_inputContainer__j7HO0",searchIcon:"SearchInput_searchIcon__2r7L2"}},,,,,function(e,t,n){e.exports={card:"ExploreCard_card__EaGCB",abstract:"ExploreCard_abstract__3A8ic"}},function(e,t,n){e.exports={thumb:"ExploreThumb_thumb__KTSx1",abstract:"ExploreThumb_abstract__3JVgk"}},,function(e,t,n){e.exports={layout:"Layout_layout__28YrU"}},function(e,t,n){e.exports={button:"Button_button__1FFjm"}},function(e,t,n){},function(e,t,n){e.exports={header:"PageHeader_header__3QcEe"}},function(e,t,n){e.exports={loader:"Loader_loader__1ZgvS"}},function(e,t,n){e.exports={saved:"Saved_saved__2Vjf1"}},function(e,t,n){e.exports={notLogin:"Empty_notLogin__1jONL"}},function(e,t,n){e.exports={searchBar:"Search_searchBar__2y9fH"}},,,,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a,A=n(17),c=n.n(A),r=n(15),o=n(2),s=(n(49),n(5)),i=n(1),l=n.n(i),d=n(13),u=n.n(d),b=n(0),j=function(){return Object(b.jsxs)("footer",{className:u.a.footer,children:[Object(b.jsx)("hr",{className:u.a.solid}),Object(b.jsxs)("div",{className:u.a.menuContainer,children:[Object(b.jsxs)("div",{className:u.a.copyright,children:[Object(b.jsx)("p",{children:"\xa9 2021 Catalogue by Jin Choi"}),Object(b.jsxs)("p",{className:u.a.credit,children:["Website design inspired by",Object(b.jsx)("a",{href:"https://www.nytimes.com/section/books",target:"_blank",rel:"noopener noreferrer",children:"The New York Times."})]})]}),Object(b.jsxs)("div",{className:u.a.social,children:[Object(b.jsx)("div",{className:u.a.socialIcon,children:Object(b.jsx)("a",{href:"https://github.com/jchoi166",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("i",{className:"fab fa-github"})})}),Object(b.jsx)("div",{className:u.a.socialIcon,children:Object(b.jsx)("a",{href:"https://www.instagram.com/therealjinchoi/?hl=en",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("i",{className:"fab fa-instagram"})})}),Object(b.jsx)("div",{className:u.a.socialIcon,children:Object(b.jsx)("a",{href:"https://www.linkedin.com/in/jin-choi-ab1083167/",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("i",{className:"fab fa-linkedin"})})})]}),Object(b.jsx)("div",{className:u.a.copyright})]})]})},h=n(32),f=n.n(h),p=n(14),m=n(4),x=n.n(m),O=n(7),v=n(10),g=Object(v.b)({name:"authentication",initialState:{isLoggedIn:!1,token:"",uId:""},reducers:{login:function(e,t){e.token=t.payload.token,e.uId=t.payload.uId,e.expirationTime=t.payload.expirationTime,e.isLoggedIn=!0},logout:function(e){e.isLoggedIn=!1,e.token=null,e.uId=null,e.expirationTime=null}}}),k=g.actions,_=g,y="AIzaSyC6rsYpDeS0JX18D5cqfumdrQx_g72FpvY",N=function(e,t){var n=function(){var n=Object(O.a)(x.a.mark((function n(){var a;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://catalogue-6cbbf-default-rtdb.firebaseio.com/users/".concat(e,".json?auth=").concat(t),{method:"PUT",body:JSON.stringify({uId:e}),headers:{"Content-Type":"application/json"}});case 2:if((a=n.sent).ok){n.next=8;break}return n.next=6,a.json();case 6:throw n.sent;case 8:case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();try{n()}catch(a){console.log(a)}},S=function(){localStorage.removeItem("token"),localStorage.removeItem("uId"),localStorage.removeItem("expirationDate")},I=function(){return function(e){S(),e(k.logout())}},w=function(){return function(e){var t=localStorage.getItem("token"),n=localStorage.getItem("uId"),a=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t}(localStorage.getItem("expirationDate"));a<=6e4?(S(),e(k.logout())):(setTimeout((function(){S(),e(k.logout())}),a),e(k.login({token:t,uId:n,expirationTime:a,isLoggedIn:!0})))}},C=n(12),L=n.n(C),R=n.p+"static/media/nav-logo.e0ebb0e1.png",F=n(33),T=n.n(F),B=function(e){return Object(b.jsx)("button",{type:e.type,className:"".concat(T.a.button," ").concat(e.className),onClick:e.onClick,children:e.children})},V=function(){var e=Object(o.b)(),t=Object(i.useState)(!1),n=Object(p.a)(t,2),a=n[0],A=n[1],c=Object(o.c)((function(e){return e.authSlice.isLoggedIn})),s="".concat(L.a.navLinks," ").concat(a&&L.a.navShown),l="".concat(L.a.navToggle," ").concat(a&&L.a.navClicked),d="".concat(L.a.maskHidden," ").concat(a&&L.a.maskShown);return Object(b.jsx)("section",{className:L.a.navSection,children:Object(b.jsxs)("nav",{className:L.a.navbar+" container",children:[Object(b.jsxs)("div",{className:s,children:[Object(b.jsx)(r.b,{to:"/search",children:"Find A Book!"}),Object(b.jsx)(r.b,{to:"/saved",children:"Your Books"}),Object(b.jsx)(r.b,{to:"/explore",children:"Explore"})]}),Object(b.jsx)("button",{className:l,onClick:function(){A(!a)},children:Object(b.jsx)("i",{className:"fas fa-bars"})}),Object(b.jsx)("div",{className:d,onClick:function(){A(!1)}}),Object(b.jsxs)("div",{className:L.a.logo,children:[Object(b.jsx)("img",{src:R,alt:"c/at silhouette"}),Object(b.jsx)(r.b,{to:"/explore",children:Object(b.jsx)("h3",{children:"Catalogue"})})]}),!c&&Object(b.jsx)(B,{className:L.a.login,children:Object(b.jsx)(r.b,{to:"/login",children:"Login"})}),c&&Object(b.jsx)(B,{className:L.a.login,onClick:function(){console.log("logout"),e(I())},children:"Logout"})]})})},D=function(e){return Object(b.jsxs)(i.Fragment,{children:[Object(b.jsx)(V,{}),Object(b.jsxs)("div",{className:f.a.layout+" container",children:[e.children,Object(b.jsx)(j,{})]})]})},E=n(34),J=n.n(E),Z=n(20),P=n.n(Z),H=n(29),z=n.n(H),K=function(e){var t=e.articleData,n=e.articleImg;return Object(b.jsxs)("div",{className:z.a.card,children:[Object(b.jsx)("a",{href:t.web_url,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{src:"https://static01.nyt.com/"+n,alt:t.headline.main})}),Object(b.jsx)("a",{href:t.web_url,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("h1",{children:t.headline.main})}),Object(b.jsx)("p",{children:t.abstract}),Object(b.jsxs)("p",{className:z.a.abstract,children:[function(){var e=new Date(t.pub_date);return e=e.toLocaleString()}()," \xb7 ",t.byline.original]})]})},Y=n(30),U=n.n(Y),G=function(e){var t=e.articleData,n=e.articleImg;return Object(b.jsxs)("div",{className:U.a.thumb,children:[Object(b.jsx)("a",{href:t.web_url,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("h1",{children:t.headline.main})}),Object(b.jsx)("a",{href:t.web_url,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{src:"https://static01.nyt.com/"+n,alt:t.headline.main})}),Object(b.jsx)("p",{children:t.abstract}),Object(b.jsxs)("p",{className:U.a.abstract,children:[function(){var e=new Date(t.pub_date);return e=e.toLocaleString()}()," \xb7",t.byline.original]})]})},W=function(e){var t=e.articles;return Object(b.jsxs)("div",{className:P.a.grid,children:[Object(b.jsx)("div",{className:P.a.block1,children:Object(b.jsx)(K,{articleData:t[0],articleImg:t[0].multimedia[0].url})}),Object(b.jsx)("div",{className:P.a.block2,children:Object(b.jsx)(K,{articleData:t[1],articleImg:t[1].multimedia[70].url})}),Object(b.jsx)("div",{className:P.a.block3,children:Object(b.jsx)(G,{articleData:t[2],articleImg:t[2].multimedia[19].url})}),Object(b.jsx)("div",{className:P.a.block4,children:Object(b.jsx)(G,{articleData:t[3],articleImg:t[3].multimedia[19].url})})]})},q=n(35),Q=n.n(q),X=function(e){return Object(b.jsxs)("section",{className:Q.a.header,children:[Object(b.jsx)("h1",{children:e.title}),Object(b.jsx)("p",{children:e.caption})]})},M=n(36),$=n.n(M),ee=function(){return Object(b.jsx)("div",{className:$.a.loader,children:Object(b.jsx)("img",{src:"data:image/gif;base64,R0lGODlh3AClAPf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AGRkY5GRkba2tuHh4Pv6+v///f///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgD4ACwAAAAA3AClAAAI/wD/CRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gza97MubPnz6BDix5NurTp06gH+lvdL/VLf/z06WvteqW/fvry5eNHuzbKfvvyBd/Xz59vkcYJ8suXm3nx4yH7CR/YnLk+6B5vDwyuj19w5uD5Yf/naNy7+OW6d8dG3/15wdX/ko9fWD539+UA9hHsF1v3PvHxCdTPgL3Np9BqsNmnG4Cq8bePfbwJyJ18BiJ0G3zoEWcccPzIxx+E3zFXIX0ICrTcbNQRV9CHujWn34gJIVgcbLsNRCCFylXHIIz/DLhicfzVKGCJDdLmnW4FzpfcbQTGB9uD6e04pJO4vfjPiTDCxyQ/3kHZ4j7D2diePsQNSKZAt+3mHmc+RsSfd9W1SCaXXAKXz3PLeQfAnazNaOeamt14YI9wxskcmHTWSSCBwrWG3oIdIshaozha5s937TFJIZfVyYZoookueiONZcK523QDpsmcopktB2Zu/9H/+Wp6ZP73Jqii5rroiRGytyiNsrUY4WXSEXdkerTGKqtsvOkq6bOS9teeoqnidueA/alomZ2lgtosgZjKluRDt/XX6KjffevguJCx9p2tBCbqpa2yVSpRcHvedySYh35r72N9moossswuWi9GNA6822rmzgafpVreiuuot5EJKLlLStcsnUDGq+G/AMsnY6rx/coamQ9b+K92afqr64wpcyapk6zJON2/JMfXZZJBqvtyzqdJqrHKJZvb4pvwBQczzNDGjFrL7BIaYqzi5japtjw2uHDNAkrnX7PGVZ1PeTVql7WTC/cIpnEJqvlwsdaaqY/IUc83XY9IDpTnpmoys0ejlGf3eLDX+ySX537iuoqbw4EXpLTgsAJpsY1q5salcCDzWOxqDw43oNLwaYzekRc3/k9wJu7meZ5+Djyc06ZLNxvrmKoJZKKRm34QsMEB2OXHF5bcpu4HsYgiucRb2CPQyTfv/PPQRy/99NRXb/312Gev/fbcd+/99+CHL/745Jdv/vnop6/++uy37/778Mcv//z012///fjnr//+/Pfv//8ADKAAB0jAAhrwgAiMS0AAACH5BAUKAPgALEoAQQBEACgAAAj/APEJHEiwoMGDCBPi+8dQocOHECPi6zeQYUOJGDMq3JeP30KL/jSKHDkxn8l+/lKmJMkSor9//Ezmw7evJj9+FBFy1JezpcZ/HE0KnElUn759Hgfqy7c0qc+IKSnuE4i0n9V+/GouNYk0KNenGHH2M7oPZcGrWPdtldnxH1iIS4/i6/gya8GU/6ziuxmUn9u3CbHe3LrXrVp8Kwn6Q/lvsUe/gBN6ZXryr8DFBdWiXEwRcmSEN7PK7GdZ4NKpVFGnfBzy80OOnmkGRep0oD+PZl0jdDx1n+W1sAXqNc0zsE/OSfUNFdrTo9qZA82KVq6TaU+IjVGmHTjzKOqY1D9m/88tMKZQk3IJGmVa2yBDvI7Xpk+Yr+rL99fN4xyszyPDfvWZh1pF70VFEXAR9RPUUTehRRVXVmEmkEU5eRTXXqSplNZW80mUFz/rQYceV1PNhNRKII2FoV1zGRWiiSwV2FNNASKWlVGIYWbRg8rpVdOPK+LUkkUX4dMUSIr9Nd5tW9VUnmAgyvQUY5wZSdd9EhLU2H0bcseWdx2RNBZT9l21FEVb4uUeflHtFZqQe9VHEnhLGclPlXJOWCRJwUl0k3rURTkgR7r5uZVTMd1p1U5JhflWeK+Z9hxObhk1nKCJvpVoaw/1p91ckCV63YJvjbXPS6kRBGJ0nObV1FBlnYIF51McbUYTUyE9h+GahQYmJ0r6VeopqlpaFFNZh/WaqVWjYRXmfQU11FCYkLpG6EQu8qRgeHvu+F+JA+qGI01xngpgrOIRSGReSPUKa5wl7dcRaemqSySnvcqJo6iE3rejvf+6OxeNiI5FHZECR9SkUnG2l3CCTg4UpaMPP/XnwwEBACH5BAUKAPgALEcAQQBKACgAAAj/APEJHEiwoMGDCBMO5KePn8KHECNKNNjPIb5++vLlswix4sSPIPHx29hvXz6T+iKa3Biy5UOGIvVl1Ciz5r59/Dia3Omy50F9+1Lmw6eRZs2i+WoSzbjPp9OBKS3eBMqvn9WrOZsSJcryZVCZSIvKxNmvJUawHC/+89fPn7+1V28STVuQX1CjQKfWBEuTLsJ//wRazdhQoEmObtneTDwX4UqqVyvmzCk5K2G/BQGvZUt0X9uYUh1WTdq27Ea7VEVqJIt6b16ckyff1Wpws23Tnv0RrJh0pFWB/0oipTqyYcWZr78OLyzSbm+KFYPiE5q07smkGQuuhJ0T307kVQ+W/229uqrzriLv4tVbFvjIpBrT+ns/POZYzAnPe455Uj3xyeOdhI9mHlXU3kD+7ATgUwKdJxpy3IUXmXe9WfUWYAPuxpNEgU2UE00LCRZZZG7xJ1ZyR3l34EOadZhQSTM9l9iMNFr4VoOW7VUUVJ59plCLLtb1GE7AAanZjB26pdlDVqG2Wj9BZmakQduVdaGRLf6FZZRKuojSirVtyV9TUG6ZJURbWnUTZZEV9+OSRzpEUoucPWXkSjtWFSB+GWYZWIVtYTgTbQx6txRf2MWHJoEy/VaWSdN9hdCIbcp205oCzadef0ERyeE/osVlmEMZ0cVQWKgiJVCMQOFTonOEgsI0kmGr8cccrUldemlsAF7FlpO9TZYRmB/FCNtlUDbIFJ8YDtRscL/dxZWAPnmkWmE3nnprmEsW6eJbJYokbqHXlvXbZQmJ6a2zbJ1JrkwOzYfuQVOuO2CzCHZLbj8ndfecq7o5CyS3RRJM7qpiIRZul1FKWfDBL1E20IQX3cgihvhCnBBjADPG8aL6aoxQuB0HTHJE7opMb4cD3/tRyCqHea+fGcdsZ2BT1myzUwPD2fDOPbnbMtA3Bzk00SLrDHRAAAAh+QQFCgD4ACxHAEEASgAoAAAI/wDxCRxIEF8/fvsSKtzHr1/BhxAj/psYsaLFh/zy5dPHkaNGjfoYXoQ48R++khRHnjSpUqC+fPwwIny5MWbLlSZRsryI8mbGjR07Mjy4T+M+hyp1Kl06UOdNfPxmBvWYjyFCo0mXat268ylEfjQbXtWHtCLXnDi3jizpj6s/hy+PjrUpUa1Zp3XPLu1XdJ/An3RJ9sQpuGnKh3q5HqxqECzjuzv/+fMHlR/lnJGZJtbrL6NfojXzFuz3Emrbw2k3JxY40V/fxj/9Tj79r1/bgvrwbTTYNXVJ378RA2/NlyDcfPiGTnZ4dGfpgf16a/X9VKlBfGT7aY+qe6NfgRuRFv+t+lEwXq/mU8LUrn2gY+8Z9V0d6rFsWvQt2VLmaN99VJo0JWdbbYDRhhp+6fW0T24XjfcRe7UdJFBz5yFoWIXPWcTXR9+NVlRurQVnYWoYPTYSYO6ZCBZZA012YH6DFeRYhyoVRZBnArH3klQMUYZejASNF1iNyBmXY3Sd0bSRRrZ5BSQ+bzHYn0oZDfmXi7V9x1h7N8Uo2YYw+YiYYvx92RFyA27H0YJT8pSSZG/pZtBtBG3WmYC1gffYcv2QRyOMKCW5Hp0HNdTabFpNFt9AcUHF11GFwoSfThtahtR72LVZEYo/rZepdrshmBJp1/FVWkKhPuWYfAjFRFmTNo6myBplQGlUWVwOxbemlRi9JN9DQsq6EnYhRbXhr1CBtCBNIlm0YGhQKclrdfoN+NqEVdkH5p9fKfkRi8IeOhl4HV6LkbkWzQTTosISNtBjjTor6Y274pbPdu1GtKZG09prL4AN/TVvvl9h1RKOjDL43pIMEhwRlzcVRVesOSKUUL8O49dnh1Vm7DFERV068Mck66bwyCV77NliGKcs7IcZukzyjPgFBAAh+QQFCgD4ACxRAEEAPQAoAAAI/wDx/RtIsOA/fAgTKlzIsKHDhwoNSiwIsaLFiwQZTjx4saNHgRtDcvyosB/JhAT9iTR4El8/ffn4tYS4kiRMffpm9jPp8J/Kgf5++vO4L18+mCf5wTSqT2bDnVD7+dsJkZ/MfkazOiXalN++m/vC4lyaDx9TfWGtOiy6j19Wo22pXkSbsJ/SrGPbytyH76tRs/n4MnQL9+vSpjwrwtxqEepWr3BNvuRbNCZVu0gZO3x5VK/Vz1bDGh7LTzJmo3uPmt3Hc6fPu6wt3n1L+yhO0fhyKrSK1G7ZmAi99iPYrzJjuxCjQtVYtGRCvl1z8puKNOhUfLCxVxY8c27nmCrVIv90fbAy3MDdEaJ/avcrQtYqF+6MD/no+plFE1vUJ3Wzz/dZ6XfSUUNdxNd0CwEXXH+2deePTJolh1N7uQGgoFGOBTbQSVO599FeXxFWFIguFYddRh0R5BZ3HRVn34v8ydfXTyNVVNCIJ7nYVF/YxRccTMNtaBFL9330j2+BDRfUSPkAsA+NQ6Lo1lUCRuliYKUNNFtZP0U50oQ74egRUH2VlVtzCKHlo40F/jPldWZpFuFCxN001oQuCVmRdeHls5NMi02FZJI0+aYbdkfxg+KePgWVn0lNceliX3wV+ZRT+rGmJ1F+xpnfg+t12JBXmiUZFHktOXUfpIeOF5xCWbV49VxZUqU00034+OMeVizKqF5YZZUG4HRC6VSaVM25VaVL96GFHHb9TRhUelA2h1NFTn11KkzwvZkeQkJOqaBDOA2VH0dF8efttyUxVdGBiAYZ3HdzfhviftJxOdJdrbKbFKV+runvwJXyJ/DA/pJ6MML+WlejRQEBADs=",alt:"A gif of a cat running"})})},te=function(){var e=Object(o.c)((function(e){return e.exploreSlice.articles})),t=Object(o.c)((function(e){return e.exploreSlice.isLoaded}));return Object(b.jsxs)("section",{className:J.a.explore,children:[Object(b.jsx)(X,{title:"Explore",caption:"Check out our features on upcoming and noteworty books!"}),t&&Object(b.jsx)(W,{articles:e}),!t&&Object(b.jsx)(ee,{})]})},ne=n(37),ae=n.n(ne),Ae=n(23),ce=n.n(Ae),re=Object(v.b)({name:"saved",initialState:{savedBooks:[],changed:!1,isLoaded:!1,savedIds:[]},reducers:{setBooks:function(e,t){e.savedBooks=t.payload.savedBooks,e.savedIds=t.payload.savedIds},addBook:function(e,t){e.savedBooks.push(t.payload.book),e.savedIds.push(t.payload.id),e.changed=!0},removeBook:function(e,t){var n=e.savedBooks.findIndex((function(e){return e.id===t.payload}));e.savedBooks.splice(n,1);var a=e.savedIds.indexOf(t.payload);e.savedIds.splice(a,1),e.changed=!0}}}),oe=re.actions,se=re,ie=function(e){var t=e.book,n=Object(o.b)();return Object(b.jsxs)("div",{className:ce.a.item,children:[Object(b.jsxs)("div",{className:ce.a.imgContainer,onClick:function(n){e.onOpenModal(t)},children:[t.image&&Object(b.jsx)("img",{src:t.image.thumbnail,alt:t.title}),!t.image&&Object(b.jsxs)("div",{className:ce.a.noImage,children:[Object(b.jsx)("i",{className:"fas fa-cat"}),Object(b.jsx)("p",{children:"Image not available!"})]})]}),Object(b.jsx)(B,{className:ce.a.button,onClick:function(){n(oe.removeBook(t.id))},children:"Remove"})]})},le=n(21),de=n.n(le),ue=function(e){return Object(b.jsx)("div",{className:de.a.backdrop,onClick:e.onClose})},be=function(e){var t=e.book;return Object(b.jsxs)("div",{className:de.a.modal,children:[Object(b.jsx)("header",{className:de.a.header,children:Object(b.jsx)("h2",{children:t.title})}),Object(b.jsx)("div",{className:de.a.content,children:Object(b.jsx)("p",{children:t.description})}),Object(b.jsxs)("footer",{className:de.a.actions,children:[Object(b.jsx)(B,{onClick:e.onConfirm,children:"Remove From List"}),Object(b.jsx)("a",{href:t.buyLink,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(B,{children:"Find A Copy"})}),Object(b.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(B,{children:"More Info"})})]})]})},je=function(e){return Object(b.jsxs)(l.a.Fragment,{children:[c.a.createPortal(Object(b.jsx)(ue,{onClose:e.onClose}),document.getElementById("backdrop-root")),c.a.createPortal(Object(b.jsx)(be,{book:e.book}),document.getElementById("overlay-root"))]})},he=n(38),fe=n.n(he),pe=function(e){return Object(b.jsxs)("div",{className:fe.a.notLogin,children:[Object(b.jsx)("h1",{children:e.header}),Object(b.jsx)("p",{children:e.message})]})},me=function(){var e=Object(o.c)((function(e){return e.savedSlice.savedBooks})),t=Object(o.c)((function(e){return e.authSlice.isLoggedIn})),n=Object(i.useState)(!1),a=Object(p.a)(n,2),A=a[0],c=a[1],r=Object(i.useState)({}),s=Object(p.a)(r,2),l=s[0],d=s[1],u=function(e){c(!0),d(e)};return Object(b.jsxs)("section",{children:[Object(b.jsx)(X,{title:"Saved",caption:"View your bookmarked books here!"}),t&&Object(b.jsxs)("div",{className:ae.a.saved,children:[e&&e.map((function(e){return Object(b.jsx)(ie,{onOpenModal:u,book:e},e.id)})),0===e.length&&Object(b.jsx)(pe,{header:"There are no saved books at this time",message:"Find new books in the 'Find A Book' section and bookmark any that you would like to read in the future :)"})]}),!t&&Object(b.jsx)(pe,{header:"Its seems you are not logged in!",message:"Please log in or create an account to save books to your library"}),A&&Object(b.jsx)(je,{book:l,onClose:function(){c(!1)}})]})},xe=n(39),Oe=n.n(xe),ve=n(24),ge=n.n(ve),ke=Object(v.b)({name:"search",initialState:{books:[],isLoaded:null},reducers:{loadBooks:function(e,t){e.books=t.payload,e.isLoaded="loaded"},setStatus:function(e,t){e.isLoaded=t.payload}}}),_e=ke.actions,ye=ke,Ne="",Se=function(e){var t=Object(i.useState)(Ne),n=Object(p.a)(t,2),a=n[0],A=n[1],c=Object(o.b)(),r=function(e){e.preventDefault(),Ne=a;var t=a.replace(/ /gi,"+");c(function(e){return function(){var t=Object(O.a)(x.a.mark((function t(n){var a,A;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_e.setStatus("pending")),a=function(){var t=Object(O.a)(x.a.mark((function t(){var n,a,A;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&maxResults=40"));case 2:if((n=t.sent).ok){t.next=5;break}throw new Error("Could not fetch books by that search!");case 5:return t.next=7,n.json();case 7:return a=t.sent,A=a.items.map((function(t){return{id:t.id,title:t.volumeInfo.title,authors:t.volumeInfo.authors,publishDate:t.volumeInfo.publishedDate,description:t.volumeInfo.description,buyLink:"https://www.amazon.com/s?k=".concat(e,"&i=stripbooks&ref=nb_sb_noss_2"),url:t.volumeInfo.infoLink,image:t.volumeInfo.imageLinks}})),t.abrupt("return",A);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=2,t.next=5,a();case 5:A=t.sent,n(_e.loadBooks(A)),n(_e.setStatus("loaded")),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))};return Object(b.jsx)("form",{className:ge.a.inputForm,onSubmit:r,children:Object(b.jsxs)("div",{className:ge.a.inputContainer,children:[Object(b.jsx)("input",{type:"text",onChange:function(e){A(e.target.value)},placeholder:"Search for a book...",value:a}),Object(b.jsx)("i",{className:"fas fa-search ".concat(ge.a.searchIcon),onClick:r})]})})},Ie=n(16),we=n.n(Ie),Ce=function(e){var t,n=e.book,a=Object(o.c)((function(e){return e.authSlice.isLoggedIn}));return Object(b.jsxs)("div",{className:we.a.item,children:[Object(b.jsx)("div",{className:we.a.image,children:Object(b.jsxs)("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",children:[!n.image&&Object(b.jsxs)("div",{className:we.a.noImage,children:[Object(b.jsx)("i",{className:"fas fa-cat"}),Object(b.jsx)("p",{children:"Image not available!"})]}),n.image&&Object(b.jsx)("img",{src:n.image.smallThumbnail,alt:n.title})]})}),Object(b.jsxs)("div",{className:we.a.info,children:[Object(b.jsx)("h3",{children:Object(b.jsx)("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",children:n.title})}),Object(b.jsxs)("p",{className:we.a.authors,children:[n.authors&&n.authors.length>1?n.authors.join(", "):n.authors," ","\xb7"," "+(t=n.publishDate,new Date(t).getFullYear())]}),Object(b.jsx)("p",{className:we.a.description,children:n.description}),Object(b.jsxs)("div",{className:we.a.actions,children:[a&&Object(b.jsxs)("div",{children:[!e.isSaved&&Object(b.jsx)(B,{onClick:function(){e.onSaveBook(n)},children:"Bookmark"}),e.isSaved&&Object(b.jsx)(B,{className:we.a.disabled,disabled:!0,children:"Bookmarked!"})]}),Object(b.jsx)("a",{href:n.buyLink,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(B,{children:"Find a copy"})})]})]})]})},Le=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.searchSlice.books})),n=Object(o.c)((function(e){return e.searchSlice.isLoaded})),a=Object(o.c)((function(e){return e.savedSlice.savedIds})),A=function(t){e(oe.addBook({id:t.id,book:t}))};return Object(b.jsxs)("section",{children:[Object(b.jsx)(X,{title:"Search",caption:"Discover great new books and save your favorites after creating an account!"}),Object(b.jsx)("div",{className:Oe.a.searchBar,children:Object(b.jsx)(Se,{})}),Object(b.jsxs)("div",{children:["loaded"===n&&t.map((function(e){return function(e){var t;return a.includes(e.id)?(console.log("this book is saved!"),t=!0):t=!1,Object(b.jsx)(Ce,{onSaveBook:A,isSaved:t,book:e},e.id)}(e)})),"pending"===n&&Object(b.jsx)(ee,{}),0===t.length&&Object(b.jsx)(pe,{header:"No search results at this time.",message:"Search for a new book by typing in its title in the input bar above!"})]})]})},Re=n(18),Fe=n.n(Re),Te=function(){var e=Object(i.useState)(!0),t=Object(p.a)(e,2),n=t[0],A=t[1],c=Object(s.g)(),r=Object(o.b)(),l=Object(i.useRef)(),d=Object(i.useRef)(),u=Object(o.c)((function(e){return e.authSlice.expirationTime}));Object(o.c)((function(e){return e.authSlice.isLoggedIn}))&&c.replace("/");return Object(b.jsx)("section",{className:Fe.a.auth,children:Object(b.jsxs)("div",{className:Fe.a.authCard,children:[Object(b.jsx)("h1",{children:n?"Login":"Sign Up"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t,A=l.current.value,c=d.current.value;r((t={enteredEmail:A,enteredPassword:c,isLogin:n},function(){var e=Object(O.a)(x.a.mark((function e(n){var A,c,r,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.isLogin?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(y):"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(y),A=function(){var e=Object(O.a)(x.a.mark((function e(){var n,A;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a,{method:"POST",body:JSON.stringify({email:t.enteredEmail,password:t.enteredPassword,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw e.sent;case 8:return e.next=11,n.json();case 11:return A=e.sent,e.abrupt("return",A);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=2,e.next=5,A();case 5:c=e.sent,t.isLogin||N(c.localId,c.idToken),localStorage.setItem("token",c.idToken),localStorage.setItem("uId",c.localId),r=new Date((new Date).getTime()+1e3*+c.expiresIn),localStorage.setItem("expirationDate",r.toISOString()),o=1e3*c.expiresIn,setTimeout((function(){S(),n(k.logout())}),o),n(k.login({token:c.idToken,uId:c.localId,expirationTime:o,isLoggedIn:!0})),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),alert(e.t0.error.message);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}())),setTimeout((function(){r(I())}),u)},children:[Object(b.jsxs)("div",{className:Fe.a.control,children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(b.jsx)("input",{type:"email",id:"email",required:!0,ref:l})]}),Object(b.jsxs)("div",{className:Fe.a.control,children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",id:"password",required:!0,ref:d})]}),Object(b.jsxs)("div",{className:Fe.a.actions,children:[Object(b.jsx)(B,{type:"submit",children:n?"Login":"Create Account"}),Object(b.jsx)(B,{type:"button",onClick:function(){A((function(e){return!e}))},className:Fe.a.toggle,children:n?"Create new account":"Login with existing account"})]})]})]})})},Be=Object(v.b)({name:"explore",initialState:{articles:[],isLoaded:!1},reducers:{loadArticles:function(e,t){e.articles=t.payload,e.isLoaded=!0}}}),Ve=Be.actions,De=Be,Ee=!0;var Je=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.authSlice.uId})),n=Object(o.c)((function(e){return e.authSlice.token})),a=Object(o.c)((function(e){return e.savedSlice.changed})),A=Object(o.c)((function(e){return e.savedSlice.savedBooks}));return Object(i.useEffect)((function(){e(function(){var e=Object(O.a)(x.a.mark((function e(t){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=books&fq=type_of_material:("news")ANDnews_desk:("books")&api-key=cQ7HvAZE9347iW9igcgZu5Aerg8ucRDG');case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Could not fetch article data");case 5:return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n.response.docs);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,n();case 4:a=e.sent,t(Ve.loadArticles(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(i.useEffect)((function(){e(w())}),[e]),Object(i.useEffect)((function(){var a,A;t&&e((a=t,A=n,function(){var e=Object(O.a)(x.a.mark((function e(t){var n,c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://catalogue-6cbbf-default-rtdb.firebaseio.com/users/".concat(a,".json?auth=").concat(A));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Could not fetch books by that search!");case 5:return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,n();case 4:c=e.sent,r=c.savedBooks.map((function(e){return e.id})),t(oe.setBooks({savedBooks:c.savedBooks,savedIds:r})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()))}),[e,t,n]),Object(i.useEffect)((function(){Ee?Ee=!1:a&&function(e,t,n){console.log("function is being reached");var a=function(){var a=Object(O.a)(x.a.mark((function a(){return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://catalogue-6cbbf-default-rtdb.firebaseio.com/users/".concat(t,".json?auth=").concat(n),{method:"PUT",body:JSON.stringify({uid:t,savedBooks:e}),headers:{"Content-Type":"application/json"}});case 2:if(a.sent.ok){a.next=5;break}throw new Error("Could not fetch books by that search!");case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();try{a()}catch(A){console.log(A)}}(A,t,n)}),[A,a,t,n]),Object(b.jsx)(D,{children:Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{path:"/",exact:!0,children:Object(b.jsx)(te,{})}),Object(b.jsx)(s.b,{path:"/saved",children:Object(b.jsx)(me,{})}),Object(b.jsx)(s.b,{path:"/search",children:Object(b.jsx)(Le,{})}),Object(b.jsx)(s.b,{path:"/explore",children:Object(b.jsx)(te,{})}),Object(b.jsx)(s.b,{path:"/Login",children:Object(b.jsx)(Te,{})}),Object(b.jsx)(s.b,{path:"*",children:Object(b.jsx)(s.a,{to:"/"})})]})})},Ze=Object(v.b)({name:"loader",initialState:{notification:null},reducers:{setStatus:function(e,t){e.notification={status:t.payload.status,title:t.payload.title,message:t.payload.message}}}}),Pe=(Ze.actions,Ze),He=Object(v.a)({reducer:{exploreSlice:De.reducer,searchSlice:ye.reducer,loaderSlice:Pe.reducer,authSlice:_.reducer,savedSlice:se.reducer}});c.a.render(Object(b.jsx)(o.a,{store:He,children:Object(b.jsx)(r.a,{children:Object(b.jsx)(Je,{})})}),document.getElementById("root"))}],[[56,1,2]]]);
//# sourceMappingURL=main.2bd1828c.chunk.js.map