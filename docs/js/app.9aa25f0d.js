(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,h=[];d<o.length;d++)i=o[d],s[i]&&h.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/deployment/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},"03e8":function(t,e,a){"use strict";var n=a("918b"),s=a.n(n);s.a},"05a8":function(t,e,a){t.exports=a.p+"img/TD-logo.d0bd8be1.jpg"},"138d":function(t,e,a){t.exports=a.p+"img/scrimger.10525a07.jpg"},"32d8":function(t,e,a){t.exports=a.p+"img/farmers-logo.ee307ec9.jpg"},"4b25":function(t,e,a){t.exports=a.p+"img/ellie-and-jeannie.b25c2522.jpg"},"4bd7":function(t,e,a){},"55ff":function(t,e,a){t.exports=a.p+"img/sylvester.70005247.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=a("8c4f"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view"),a("Footer")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header"}},[a("div",{staticClass:"wrapper"},[t._m(0),a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),a("router-link",{attrs:{to:"/about"}},[t._v("About")]),a("router-link",{attrs:{to:"/authors"}},[t._v("Authors")]),a("router-link",{attrs:{to:"/teachers"}},[t._v("Teachers")]),a("router-link",{attrs:{to:"/partners"}},[t._v("Partners")])],1)])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-container"},[a("h1",[t._v("\n        Funny\n        "),a("span",{staticClass:"mobile"},[t._v("pages")])]),a("h3",{staticClass:"subtitle"},[t._v("\n        An all day festival of books that make kids laugh\n        "),a("span",{staticClass:"emoji"},[t._v("🤣")])])])}],c={name:"Header"},u=c,d=(a("8baf"),a("2877")),h=Object(d["a"])(u,o,l,!1,null,null,null),f=h.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"footer-flex-container"},[a("div",{staticClass:"contact-container"},[a("h2",[t._v("contact")]),a("p",[a("i",{staticClass:"fas fa-phone"}),t._v(" 902-555-5555\n        ")]),a("p",[a("i",{staticClass:"far fa-envelope"}),t._v(" funnypages@funnypages.com\n        ")]),a("p",[t._v("2020 Spring Garden Rd., Halifax, NS")]),a("p",[t._v("B3P-3H3")])]),a("div",{staticClass:"social-media-container"},[a("h2",[t._v("Follow Us")]),a("div",{staticClass:"social-icons"},[a("i",{staticClass:"fab fa-facebook"}),a("i",{staticClass:"fab fa-instagram"}),a("i",{staticClass:"fab fa-twitter"})])]),a("div",{staticClass:"newsletter-container"},[a("h2",[t._v("Newsletter")]),a("form",{attrs:{action:""}},[a("input",{attrs:{type:"email",placeholder:"e-mail address",id:"email"}}),a("label",{attrs:{for:"email"}},[t._v("e-mail address")]),a("button",[t._v("Subscribe")])])])])]),a("div",{staticClass:"copyright"},[a("h3",[t._v("2019 © Funny Pages Festival")])])])}],m={name:"Footer"},g=m,b=(a("86ff"),Object(d["a"])(g,p,v,!1,null,"63b1f166",null)),_=b.exports,w={name:"app",components:{Header:f,Footer:_}},y=w,C=(a("034f"),Object(d["a"])(y,r,i,!1,null,null,null)),k=C.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home-page"}},[a("div",{staticClass:"wrapper"},[a("div",{attrs:{id:"banner"}}),a("div",{staticClass:"home-text"},[a("h2",[t._v("Welcome to the Funny Pages Festival!")]),a("br"),a("p",[t._v("Join us this summer for the first annual “Funny Pages”, a day of workshops, presentations and lots and lots of laughing.")]),a("br"),a("p",[a("span",{staticClass:"bold"},[t._v("When:")]),t._v(" Friday, May 8, 2020 from\n        9 a.m. to 3:30 p.m.\n      ")]),a("br"),a("p",[a("span",{staticClass:"bold"},[t._v("Where:")]),t._v(" Halifax Central Library\n      ")])])])])}],T={name:"Home"},E=T,H=(a("fe04"),Object(d["a"])(E,x,j,!1,null,"95c6291e",null)),A=H.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about-section"}},[a("div",{staticClass:"wrapper"},[a("div",{attrs:{id:"about-banner"}}),a("div",{staticClass:"about-text"},[a("h2",[t._v("About Funny Pages")]),a("br"),a("p",[t._v("\n        There’s one thing kids of all ages and reading levels have in common. They love to laugh. That’s why The Halifax Public Library is introducing\n        "),a("span",{staticClass:"bold"},[t._v("Funny Pages")]),t._v(". This day-long celebration brings authors from across Canada and students from across HRM together for laughter-filled workshops built around their favourite funny books.\n        What’s more,\n        thanks to our generous sponsors, each kid will receive a free signed copy of one of this year’s highlighted books.\n      ")]),a("br"),a("p",[t._v("\n        As well, a special adults-only evening event will feature our authors in a panel discussion about breaking into the Canadian publishing industry.\n        "),a("span",{staticClass:"bold"},[t._v("Funny Pages")]),t._v(" will take place Friday, May 8, 2020 at Halifax Central Library.\n        Please contact us for more information.\n      ")])])])])}],$={name:"About"},M=$,O=(a("935e"),Object(d["a"])(M,S,P,!1,null,"35a2ad18",null)),F=O.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"authors-section"}},[a("div",{staticClass:"wrapper"},[a("div",{attrs:{id:"authors-banner"}}),a("h2",[t._v("Authors")]),a("div",{staticClass:"author-container"},[a("div",{staticClass:"auth-image left"},[a("img",{attrs:{src:t.becker,alt:"Helaine Becker"}})]),t._m(0)]),a("div",{staticClass:"author-container"},[a("div",{staticClass:"auth-image right"},[a("img",{attrs:{src:t.chan,alt:"Marty Chan"}})]),t._m(1)]),a("div",{staticClass:"author-container"},[a("div",{staticClass:"auth-image left"},[a("img",{attrs:{src:t.grant,alt:"vicki grant"}})]),t._m(2)]),a("div",{staticClass:"author-container"},[a("div",{staticClass:"auth-image right"},[a("img",{attrs:{src:t.hrab,alt:"Naseem Hrab"}})]),t._m(3)]),a("div",{staticClass:"author-container"},[a("div",{staticClass:"auth-image left"},[a("img",{attrs:{src:t.juby,alt:"Susan Juby"}})]),t._m(4)]),a("div",{staticClass:"author-container"},[a("div",{staticClass:"auth-image right"},[a("img",{attrs:{src:t.nielsen,alt:"Susin Nielsen"}})]),t._m(5)]),a("div",{staticClass:"author-container"},[a("div",{staticClass:"auth-image left"},[a("img",{attrs:{src:t.scrimger,alt:"Richard Scrimger"}})]),t._m(6)]),a("div",{staticClass:"author-container"},[a("div",{staticClass:"auth-image right"},[a("img",{attrs:{src:t.sylvester,alt:"Kevin Sylvester"}})]),t._m(7)])])])},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-text"},[a("p",[a("span",{staticClass:"bold"},[t._v("Helaine Becker")]),t._v(" is the bestselling author of more than 70 books for children and young adults, including the “enduring Canadian Christmas classic” A PORCUPINE IN A TREE and the giggle-inducing ODE TO UNDERWEAR. She's a multi-time winner of the Silver Birch Award and a two-time winner of the Lane Anderson Award for science writing for children.\n          "),a("a",{attrs:{href:"https://helainebecker.com"}},[t._v("helainebecker.com")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-text"},[a("p",[a("span",{staticClass:"bold"},[t._v("Marty Chan")]),t._v(" is an award-winning author living in Edmonton, Alberta. He has written for television, radio, theatre, newspaper, and has published several children’s and young adult books. Marty’s TV shows and plays have been watched around the world, and he continues to write in the company of his wife and two cats, Buddy and Max.\n          "),a("a",{attrs:{href:"https://www.martychan.com"}},[t._v("martychan.com")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-text"},[a("p",[t._v("\n          Former scriptwriter and advertising copywriter\n          "),a("span",{staticClass:"bold"},[t._v("Vicki Grant")]),t._v(" has been called “a superb storyteller” (CCBC) and “one of the funniest writers working today” (Vancouver Sun). Her books have won The Red Maple, The Arthur Ellis and Young Canada Reads as well as been shortlisted for the Edgar, the CLA Book of the Year and many Forest of Reading awards. Her latest YA novel, 36 Questions That Changed My Mind About You, sold to over 20 territories worldwide.\n          "),a("a",{attrs:{href:"https://www.vickigrant.com"}},[t._v("vickigrant.com")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-text"},[a("p",[a("span",{staticClass:"bold"},[t._v("Naseem Hrab")]),t._v(" is a writer, a storyteller and a pretty good friend. Her comedy writing has appeared on McSweeney's Internet Tendency and The Rumpus. Naseem worked as a librarian for a time and now works in children's publishing. She lives in Toronto, Ontario.\n          "),a("a",{attrs:{href:"https://www.naseemhrab.com"}},[t._v("naseemhrab.com")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-text"},[a("p",[a("span",{staticClass:"bold"},[t._v("Susan Juby")]),t._v(" has written a number of acclaimed novels for teenagers and adults, including the bestselling Alice, I Think, a Rolling Stone Best Top 40 Novel and the first of her Alice MacLeod trilogy, which was made into a successful television series. She is also the author of a memoir, Nice Recovery, and the adult comic novel The Woefield Poultry Collective and its sequel, Republic of Dirt: Return to Woefield. Juby lives with her husband and their dog in Nanaimo.\n          "),a("a",{attrs:{href:"https://www.susanjuby.com"}},[t._v("susanjuby.com")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-text"},[a("p",[a("span",{staticClass:"bold"},[t._v("Susin Nielsen")]),t._v(" got her start feeding cast and crew on the popular television series Degrassi Junior High. They hated her food, but they saw a spark in her writing. Nielsen went on to pen sixteen episodes of the hit TV show. Since then, Nielsen has written for many Canadian TV series.\n          Nielsen's first two young adult novels, Word Nerd and Dear George Clooney: Please Marry My Mom, won critical acclaim and multiple young readers choice awards. The Reluctant Journal of Henry K. Larsen won the prestigious Governor General's Literary Award and the Canadian Library Association's Children's Book of the Year.\n          She lives in Vancouver with her family and two extremely destructive cats.\n          "),a("a",{attrs:{href:"https://www.susinnielsen.com"}},[t._v("susinnielsen.com")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-text"},[a("p",[a("span",{staticClass:"bold"},[t._v("Richard Scrimger")]),t._v(" is the award-winning author of more than twenty books for children and adults, including The Nose from Jupiter, Zomboy, Viminy Crowe’s Comic Book and The Wolf and Me. When he’s not writing or talking about writing, Richard teaches at Humber College and gets laughed at by his children. He has four of them. Well, really, they have him. He lives in Toronto. Visit him at\n          "),a("a",{attrs:{href:"https://www.richardscrimger.com"}},[t._v("richardscrimger.com")]),t._v(" .\n        ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-text"},[a("p",[a("span",{staticClass:"bold"},[t._v("Kevin Sylvester")]),t._v(" is the bestselling author of Sports Hall of Weird. He is also a reporter, radio sports host, producer and documentary-maker, as well as an illustrator.\n          "),a("a",{attrs:{href:"https://www.kevinsylvesterbooks.com"}},[t._v("kevinsylvesterbooks.com")])])])}],W=a("a872"),B=a.n(W),L=a("d87a"),J=a.n(L),D=a("9d17"),V=a.n(D),G=a("5ade"),I=a.n(G),Y=a("af2c"),K=a.n(Y),U=a("c61d"),q=a.n(U),Q=a("138d"),X=a.n(Q),Z=a("55ff"),z=a.n(Z),tt={name:"Authors",data:function(){return{becker:B.a,chan:J.a,grant:V.a,hrab:I.a,juby:K.a,nielsen:q.a,scrimger:X.a,sylvester:z.a}}},et=tt,at=(a("03e8"),Object(d["a"])(et,N,R,!1,null,"e2ffa788",null)),nt=at.exports,st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"teachers-section"}},[n("div",{staticClass:"wrapper"},[n("div",{attrs:{id:"teachers-banner"}}),n("div",{staticClass:"teachers-text"},[n("h2",[t._v("Teachers")]),n("br"),n("p",[t._v("Interested in having your class attend our workshops and presentations? Funny Pages is open to all students between Grades Four and Twelve but because of space limitations, admission is on a first-come, first-serve basis.")]),n("div",{staticClass:"teachers-flex"},[n("div",{staticClass:"text-container"},[n("p",[t._v("Each school can bring up to thirty students and must have one supervising adult per ten children.")]),n("br"),n("p",[t._v("Please contact for more information.")])]),n("div",{staticClass:"gallery-container"},[n("div",{staticClass:"img-container one"},[n("img",{attrs:{src:a("4b25"),alt:"two young women laughing"}})]),n("div",{staticClass:"img-container two"},[n("img",{attrs:{src:a("f3c0"),alt:"kids reading"}})]),n("div",{staticClass:"img-container three"},[n("img",{attrs:{src:a("8f60"),alt:"a classroom of kids laughing"}})])])])])])])}],it={name:"Teachers"},ot=it,lt=(a("902a"),Object(d["a"])(ot,st,rt,!1,null,"43977043",null)),ct=lt.exports,ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},dt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"partners-section"}},[n("div",{staticClass:"wrapper"},[n("div",{attrs:{id:"partners-banner"}}),n("div",{staticClass:"partners-gallery"},[n("h2",[t._v("Special thanks to our partners")]),n("div",{staticClass:"image-grid"},[n("div",{staticClass:"partner-image"},[n("img",{attrs:{src:a("c400"),alt:"Halifax Public Library logo"}})]),n("div",{staticClass:"partner-image"},[n("img",{attrs:{src:a("05a8"),alt:"TD bank logo"}})]),n("div",{staticClass:"partner-image"},[n("img",{attrs:{src:a("bb83"),alt:"city of Halifax logo"}})]),n("div",{staticClass:"partner-image"},[n("img",{attrs:{src:a("5d49"),alt:"Emera corporation logo"}})]),n("div",{staticClass:"partner-image"},[n("img",{attrs:{src:a("cd47"),alt:"DHX media logo"}})]),n("div",{staticClass:"partner-image"},[n("img",{attrs:{src:a("32d8"),alt:"Halifax Farmer's Market logo"}})])])])])])}],ht={name:"Partners"},ft=ht,pt=(a("5a7e"),Object(d["a"])(ft,ut,dt,!1,null,null,null)),vt=pt.exports;n["a"].config.productionTip=!1,n["a"].use(s["a"]);var mt=[{path:"/",name:"Home",component:A},{path:"/About",name:"About",component:F},{path:"/Authors",name:"Authors",component:nt},{path:"/Teachers",name:"Teachers",component:ct},{path:"/Partners",name:"Partners",component:vt}],gt=new s["a"]({routes:mt});new n["a"]({el:"#app",router:gt,render:function(t){return t(k)}}).$mount("#app")},"5a7e":function(t,e,a){"use strict";var n=a("dcd0"),s=a.n(n);s.a},"5ade":function(t,e,a){t.exports=a.p+"img/hrab.4f638e04.jpg"},"5d49":function(t,e,a){t.exports=a.p+"img/emera-logo.396f99ae.png"},"64a9":function(t,e,a){},"70e4":function(t,e,a){},"782e":function(t,e,a){},"86ff":function(t,e,a){"use strict";var n=a("d142"),s=a.n(n);s.a},"8baf":function(t,e,a){"use strict";var n=a("782e"),s=a.n(n);s.a},"8f60":function(t,e,a){t.exports=a.p+"img/classroom.a80414c4.jpg"},"902a":function(t,e,a){"use strict";var n=a("70e4"),s=a.n(n);s.a},"918b":function(t,e,a){},"935e":function(t,e,a){"use strict";var n=a("4bd7"),s=a.n(n);s.a},"9d17":function(t,e,a){t.exports=a.p+"img/grant.30f09aec.jpg"},a872:function(t,e,a){t.exports=a.p+"img/becker.543712c6.jpg"},af2c:function(t,e,a){t.exports=a.p+"img/juby.3093b7dc.jpg"},bb83:function(t,e,a){t.exports=a.p+"img/halifax-logo.7bfc368b.jpg"},c400:function(t,e,a){t.exports=a.p+"img/library-logo.3c9955b7.jpg"},c61d:function(t,e,a){t.exports=a.p+"img/nielsen.71b12ed5.jpg"},cd47:function(t,e,a){t.exports=a.p+"img/dhx-logo.9eeaab02.jpg"},d142:function(t,e,a){},d87a:function(t,e,a){t.exports=a.p+"img/chan.f28be68e.jpg"},dcd0:function(t,e,a){},f3c0:function(t,e,a){t.exports=a.p+"img/kids-reading.9b284fe6.jpg"},fe04:function(t,e,a){"use strict";var n=a("fffe"),s=a.n(n);s.a},fffe:function(t,e,a){}});
//# sourceMappingURL=app.9aa25f0d.js.map