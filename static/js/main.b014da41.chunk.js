(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{137:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),o=a.n(r),s=(a(67),a(5)),c=a(7),l=a(8),d=a(10),m=a(9),u=a(24),p=a.n(u),A=a(51),g=a.n(A),h=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getNewQuote=function(){n.getQuote()},n.state={quote:"",author:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"getQuote",value:function(){var e=this;g.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){var a=t.data.quotes;console.log(a);var n=a[Math.floor(Math.random()*a.length)];console.log(n),e.setState({quote:n.quote,author:n.author})}))}},{key:"render",value:function(){var e=this.state,t=e.quote,a=e.author;return i.a.createElement("div",null,i.a.createElement("div",{id:"text"},i.a.createElement("p",null,'"',t,'"')),i.a.createElement("div",{id:"author"},i.a.createElement("p",null,a)))}}]),a}(n.Component),f=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"landing-page"},i.a.createElement("img",{className:"avatar-img",src:p.a,alt:"Diana Toth"}),i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",null,"Front End Developer"),i.a.createElement("hr",null),i.a.createElement("p",null,"HTML/CSS | JavaScript | React"),i.a.createElement("hr",null),i.a.createElement("div",{className:"social-links"},i.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.linkedin.com/in/diana-toth-825843111/",target:"_blank"},i.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),i.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/Dianadtt",target:"_blank"},i.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})),i.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.facebook.com/diana.toth.33",target:"_blank"},i.a.createElement("i",{className:"fa fa-facebook-square","aria-hidden":"true"})),i.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.instagram.com/diana.toth/?hl=ro",target:"_blank"},i.a.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"}))),i.a.createElement("hr",null),i.a.createElement(h,null)))}}]),a}(n.Component),b=a(52),E=a.n(b),y=a(53),v=a.n(y),k=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"landing-box"},i.a.createElement("img",{className:"about-me",src:E.a,alt:"Diana Toth"}),i.a.createElement("div",{className:"banner-text"},i.a.createElement("hr",null),i.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versi"),i.a.createElement("hr",null),i.a.createElement("div",{className:"social-links"},i.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.linkedin.com/in/diana-toth-825843111/",target:"_blank"},i.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),i.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/Dianadtt",target:"_blank"},i.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})),i.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.facebook.com/diana.toth.33",target:"_blank"},i.a.createElement("i",{className:"fa fa-facebook-square","aria-hidden":"true"})),i.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.instagram.com/diana.toth/?hl=ro",target:"_blank"},i.a.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"})))),i.a.createElement("img",{className:"about-me",src:v.a,alt:"Diana Toth"}))}}]),a}(n.Component),w=a(54),N=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isActive:!1},e.handleShow=function(){e.setState({isActive:!0})},e.handleHide=function(){e.setState({isActive:!1})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"project"},w.map((function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("div",{className:"card"},i.a.createElement("h5",null,t.title),i.a.createElement("p",{id:"text"},t.description),i.a.createElement("img",{id:"project-image",src:t.img,alt:"project"}),i.a.createElement("div",{className:"links"},i.a.createElement("a",{rel:"noopener noreferrer",href:t.linkForCode,target:"_blank"},i.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"}),"Source Code"),i.a.createElement("a",{rel:"noopener noreferrer",href:t.linkForProject,target:"_blank"},i.a.createElement("i",{className:"fa fa-link","aria-hidden":"true"}),"Demo"),i.a.createElement("i",{onMouseOver:e.handleShow,onMouseLeave:e.handleHide,id:"arrow-down",className:"fa fa-angle-down","aria-hidden":"true"}))),i.a.createElement("div",{className:"card"},e.state.isActive?i.a.createElement("div",{onMouseLeave:e.handleHide}," ",i.a.createElement("p",null,t.description)):null))}))))}}]),a}(n.Component),I=a(55),j=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"experience"},i.a.createElement("div",{className:"card"},i.a.createElement("h4",null,"Experience")),I.map((function(e){return i.a.createElement("div",{key:e.id,className:"card"},i.a.createElement("h5",null,e.title),i.a.createElement("div",null,i.a.createElement("img",{id:"job-logo",src:e.img,alt:"job logo"})),i.a.createElement("div",{className:"company-details"},i.a.createElement("p",null,e.company),i.a.createElement("p",null,e.period),i.a.createElement("p",null,e.location)),i.a.createElement("p",{id:"text"},e.description),i.a.createElement("img",{id:"work-img",src:e.workImg,alt:"work"}))})))}}]),a}(n.Component),C=a(56),L=a.n(C),z=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"card",id:"contact-body"},i.a.createElement("div",{id:"contact-left"},i.a.createElement("h2",null,"Toth Diana"),i.a.createElement("img",{src:p.a,alt:"diana toth"}),i.a.createElement("button",null,i.a.createElement("a",{href:L.a,download:!0},"Click to Download!"))),i.a.createElement("div",{id:"contact-right"},i.a.createElement("h2",null,"Contact Me"),i.a.createElement(s.List,null,i.a.createElement(s.ListItem,null,i.a.createElement(s.ListItemContent,null,i.a.createElement("i",{className:"fa fa-phone-square"}),"+40 745-951-222")),i.a.createElement(s.ListItem,null,i.a.createElement(s.ListItemContent,null,i.a.createElement("i",{className:"fa fa-envelope"}),"dianatoth.dtt@gmail.com")),i.a.createElement(s.ListItem,null,i.a.createElement(s.ListItemContent,null,i.a.createElement("i",{className:"fa fa-skype"}),"live:.cid.de5ed57d39af7dd4")))))}}]),a}(n.Component),x=a(57),P=a(58),q=a.n(P),R=a(59),O=a.n(R),S=a(60),B=a.n(S),M=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"education"},i.a.createElement("div",{id:"header-education",className:"card"},i.a.createElement("img",{src:q.a,alt:"education"}),i.a.createElement("h4",null,"Education")),x.map((function(e){return i.a.createElement("div",{key:e.id,className:"card"},i.a.createElement("div",{className:"school-container"},i.a.createElement("img",{id:"school-logo",src:e.img,alt:"school"})),i.a.createElement("div",{className:"education-detail"},i.a.createElement("h5",null,e.university),i.a.createElement("p",null,e.period),i.a.createElement("p",null,e.location),i.a.createElement("p",null,e.title)),i.a.createElement("p",{id:"text"},e.description))}))),i.a.createElement("div",{id:"header-education",className:"card"},i.a.createElement("img",{src:O.a,alt:"certificate"}),i.a.createElement("h4",null,"Licenses & Certifications")),i.a.createElement("div",{className:"card"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("span",null,"Aug 2020"),"Front-end Developer"),i.a.createElement("hr",null),i.a.createElement("li",null,i.a.createElement("span",null,"May 2019"),"Comunication training"),i.a.createElement("hr",null),i.a.createElement("li",null,i.a.createElement("span",null,"March 2013"),"Procurement specialist"),i.a.createElement("hr",null),i.a.createElement("li",null,i.a.createElement("span",null,"Oct 2012"),"Driving license"),i.a.createElement("hr",null),i.a.createElement("li",null,i.a.createElement("span",null,"June 2012"),"Masters degree in Infrastructure Engineering"),i.a.createElement("hr",null),i.a.createElement("li",null,i.a.createElement("span",null,"June 2010"),"Licence in Civil Engineering"),i.a.createElement("hr",null),i.a.createElement("li",null,i.a.createElement("span",null,"June 2006"),"Computer science ceritificate"),i.a.createElement("hr",null),i.a.createElement("li",null,i.a.createElement("span",null,"June 2006"),"Bachelor degree"))),i.a.createElement("div",{id:"header-education",className:"card"},i.a.createElement("img",{src:B.a,alt:"language"}),i.a.createElement("h4",null,"Languages")),i.a.createElement("div",{className:"card"},i.a.createElement("ul",null,i.a.createElement("li",null,"Romanian"),i.a.createElement("li",null,"Hungarian"),i.a.createElement("li",null,"English"))))}}]),a}(n.Component),T=a(3),V=function(){return i.a.createElement(T.c,null,i.a.createElement(T.a,{exact:!0,path:"/",component:f}),i.a.createElement(T.a,{exact:!0,path:"/landingpage",component:f}),i.a.createElement(T.a,{exact:!0,path:"/aboutMe",component:k}),i.a.createElement(T.a,{exact:!0,path:"/projects",component:N}),i.a.createElement(T.a,{exact:!0,path:"/experience",component:j}),i.a.createElement(T.a,{exact:!0,path:"/education",component:M}),i.a.createElement(T.a,{exact:!0,path:"/contact",component:z}))},F=a(6);var U=function(){return i.a.createElement("div",null,i.a.createElement(s.Layout,null,i.a.createElement(s.Header,{className:"header-color",title:"Diana Toth",scroll:!0},i.a.createElement(s.Navigation,null,i.a.createElement(F.b,{to:"/landingpage"},"Home"),i.a.createElement(F.b,{to:"/aboutMe"},"About Me"),i.a.createElement(F.b,{to:"/experience"},"Experience"),i.a.createElement(F.b,{to:"/education"},"Education"),i.a.createElement(F.b,{to:"/projects"},"Projects"),i.a.createElement(F.b,{to:"/contact"},"Contact"))),i.a.createElement(s.Drawer,{title:"Diana Toth"},i.a.createElement(s.Navigation,null,i.a.createElement(F.b,{to:"/landingpage"},"Home"),i.a.createElement(F.b,{to:"/aboutMe"},"About Me"),i.a.createElement(F.b,{to:"/experience"},"Experience"),i.a.createElement(F.b,{to:"/education"},"Education"),i.a.createElement(F.b,{to:"/projects"},"Projects"),i.a.createElement(F.b,{to:"/contact"},"Contact"))),i.a.createElement(s.Content,null,i.a.createElement(V,null)),i.a.createElement(s.Footer,{className:"header-color",size:"mini"},i.a.createElement(s.FooterSection,{type:"left",logo:"@DianaToth"},i.a.createElement(s.FooterLinkList,null,i.a.createElement("a",{href:"/"},"Help"),i.a.createElement("a",{href:"/contact"},"Privacy & Terms"))))))},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(135),a(136);o.a.render(i.a.createElement(F.a,null,i.a.createElement(U,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Personal-webpage",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Personal-webpage","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):X(t,e)}))}}()},24:function(e,t,a){e.exports=a.p+"static/media/avatar.ea8bb1c5.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/aboutme.e89c521a.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/me.ef031c06.jpg"},54:function(e){e.exports=JSON.parse('[{"id":1,"title":"My First Web Page","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versi","linkForCode":"https://codesandbox.io/s/extrawork1dogs-g3ej7?fontsize=14&hidenavigation=1&theme=dark","linkForProject":"https://g3ej7.csb.app/beagle.html","img":"../staticAssets/staticWebPage.png"},{"id":2,"title":"Layouting","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versi","linkForCode":"https://codesandbox.io/embed/serene-violet-hy5xf?fontsize=14&hidenavigation=1&theme=dark","linkForProject":"https://hy5xf.csb.app/","img":"../staticAssets/layoting.png"},{"id":3,"title":"Putting things on top of eachother","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versi","linkForCode":"https://codesandbox.io/embed/eloquent-cherry-97d37?fontsize=14&hidenavigation=1&theme=dark","linkForProject":"https://97d37.csb.app/","img":"../staticAssets/modal.png"},{"id":4,"title":"Diving into JavaScript","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versi","linkForCode":"https://github.com/Dianadtt/DOM-ManipulationHomework","linkForProject":"https://dianadtt.github.io/DOM-ManipulationHomework/","img":"../staticAssets/forms.png"},{"id":5,"title":"Game app","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versi","linkForCode":"https://github.com/Dianadtt/GameApp-with-objects.git","linkForProject":"https://dianadtt.github.io/GameApp-ES6-classes/index.html","img":"../staticAssets/gameApp.png"},{"id":6,"title":"My first Game","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versi","linkForCode":"https://github.com/Dianadtt/Obstacles-Game.git","linkForProject":"https://dianadtt.github.io/Obstacles-Game/","img":"../staticAssets/game.png"},{"id":7,"title":"Weather App","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versi","linkForCode":"https://github.com/Dianadtt/WeatherApp.git","linkForProject":"https://dianadtt.github.io/WeatherApp/","img":"../staticAssets/weather.png"},{"id":8,"title":"My Imdb page","description":"My IMDB is a team project created at the end of the web development classes at Scoala Informala de IT. It was created using JS and Bootstrap technologies. Overall the application displays some movies coming form a database, it gives the user the opportunity to Register/ Login, add, delete or update a movie.","linkForCode":"https://github.com/Dianadtt/GameApp-with-React.git","linkForProject":"https://crinel.github.io/myIMDB-13.1/pages/home.html","img":"../staticAssets/myimdb.png"},{"id":9,"title":"Game app with React","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versi","linkForCode":"https://github.com/Dianadtt/GameApp-with-React.git","linkForProject":"http://dianadtt.github.io/GameApp-with-React/","img":"../staticAssets/weather.png"}]')},55:function(e){e.exports=JSON.parse('[{"id":1,"title":"Physical / Chemical Analysis Product Lead Engineer R&D","img":"./staticAssets/bosch.png","company":"Robert Bosch GmbH","period":"Aug 2017 \u2013 Present","location":"Cluj County, Romania","description":"I currently work for Robert Bosch SRL in Cluj-Napoca as lead engineer for the quality and validation department. In this context, I am responsible for the analysis activities on breaking systems, smart wheels and blower control units. This involves defining and documenting the product specific analysis methods based on the validation plan. In a second phase, I organise and execute the activities amongst the analysis team such as resouces and time planning, and if the technical aspects are fully understud. I am planing and performing failure analysis of electronic control units (ECUs) after design validation (DV) testing. I am making physical assessment of ECUs regarding ageing and damaging of all relevant components, their assembly and interconnect technologies by judging ageing indicators with respect to lifetime requirements based on material science knowledge. I am also improving and adapting methods of analysis as required by new products/technologies such as the new smart wheel product. Since 2018 I am also responsible for reviewing the reports made by my collegues before the approval stage.","workImg":"./staticAssets/boschwork.jpg"},{"id":2,"title":"Procurement Consultant","img":"./staticAssets/siab.png","company":"SIAB DEVELOPMENT","period":"Jun 2016 \u2013 Aug 2017","location":"Cluj County, Romania","description":"Responsible for tendering process: from planning, documenting up to participation.Perform project costs analysis.Perform legal compliance studies for each managed project.Reporting process; reporting results; documenting actions.Counseling mayors in public administration, with main focus on: budget, procurement, concession assets.Contrasting list prices, analyzing price offers.Analysis of tender documentation, identifying inconsistencies and formulating requests for clarification.Collaborating and assisting partners, subcontractors and third parties in order to prepare the documentation for participation at tender procedures.Request price offers and follow their correspondence with requirements imposed by the specifications, as applicable.","workImg":"./staticAssets/siabwork.jpg"},{"id":3,"title":"Procurement specialist engineer","img":"./staticAssets/urbana.jpg","company":"Urban Public Services","period":"Apr 2013 \u2013 Jun 2016","location":"Sighetu Marmatiei, Maramures, Romania","description":"QHSE verifier for all managed projects / public works.Responsible for tendering process: from planning, documenting up to participation;Main contact for contractors and subcontractors on each managed project;Prepare technical drawings;Reporting process; reporting results; documenting actions;Perform project costs analysis;Perform legal compliance studies for each managed project;Commissioning officer for various projects;Quality controller for all completed projects-including field measurements and calculations;","workImg":"./staticAssets/urbanawork.jpg"}]')},56:function(e,t,a){e.exports=a.p+"static/media/file.65adfd96.pdf"},57:function(e){e.exports=JSON.parse('[{"id":1,"img":"./staticAssets/siit.jpg","university":"The Informal School of IT","period":"Feb 2020 \u2013 Aug 2020","title":"Front End Developer","location":"Cluj County, Romania","description":"During this six months of classes I learned how to build a User Interface web application unsing HTML5 and CSS. After diving into JvaScript I coverd some concepts like: variables, functions, objects and interconnect them with the browser with the DOM. Server based request (CRUD) using HTTP protocols (AJAX, fetch API and promises). I started to use the OOP model based programming and ES6 syntax. Learned the principles and basic commands in GIT and at the end basics of React.js conceps like: components (functional and class based components), props and state, react router and other lybraries."},{"id":2,"img":"./staticAssets/utcn.png","university":"Technical University of Cluj-Napoca, Faculty of Constuctions","period":"2010-2012","title":"Master\u2019s Degree","location":"Cluj County, Romania","description":"Advanced engineering fundamentals on: environmental mechanics continues in the field of elastic and plastic behavior. Vehicle - roadway interaction and systems of administration of a road transport network;"},{"id":3,"img":"./staticAssets/utcn.png","university":"Technical University of Cluj-Napoca, Faculty of Constructions","period":"2006-2010","title":"Bachelor\u2019s Degree","location":"Cluj County, Romania","description":"Specialized in the complex design of buildings from an engineering point of view, the composition and calculation of the resistance structures used and the most modern calculation methods (Robot Structural Analysis, MathCad, AutoCad), the evaluation of acoustic and thermal comfort in buildings, the execution of buildings and the management of construction works."},{"id":4,"img":"./staticAssets/dragosvoda.png","university":"National College \'Dragos Voda\'","period":"2002-2006","title":"High School","location":"Sighetu-Marmatiei County, Romania","description":"Mathematics-Computer Science"}]')},58:function(e,t,a){e.exports=a.p+"static/media/education.f0f22b29.jpg"},59:function(e,t){e.exports="data:image/jpeg;base64,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"},60:function(e,t,a){e.exports=a.p+"static/media/language.18205123.jpg"},62:function(e,t,a){e.exports=a(137)},67:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.b014da41.chunk.js.map