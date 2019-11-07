(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},25:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),l=a.n(r);a(25);var c=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-custom fixed-top"},o.a.createElement("div",{className:"container"},o.a.createElement("a",{className:"navbar-brand",href:"#"},"Tori's Sight Words"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},o.a.createElement("ul",{className:"navbar-nav ml-auto"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"#"},"Sign Up")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"#"},"Log In"))))))};var s=function(){return o.a.createElement("header",{className:"masthead text-center text-white"},o.a.createElement("div",{className:"masthead-content"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"masthead-heading mb-0"},"Tori's Sight Words"),o.a.createElement("h2",{className:"masthead-subheading mb-0"},"Parent Directed Learning Plan"),o.a.createElement("a",{href:"#",className:"btn btn-primary btn-xl rounded-pill mt-5"},"Learn More"))),o.a.createElement("div",{className:"bg-circle-1 bg-circle"}),o.a.createElement("div",{className:"bg-circle-2 bg-circle"}),o.a.createElement("div",{className:"bg-circle-3 bg-circle"}),o.a.createElement("div",{className:"bg-circle-4 bg-circle"}))},i=a(2),d=a(3),m=a(5),u=a(4),b=a(6),h=a(18),g=a.n(h),p=a(19),v=(n.Component,a(7)),E=a.n(v),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){e.preventDefault();var t=e.target.words.value;E.a.post("http://localhost:3001/add_words",{words:t}).then((function(e){document.getElementById("words").value="",console.log(e)})).catch((function(e){console.log(e)}))},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"modal",id:"myModal"},o.a.createElement("div",{className:"modal-dialog"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),o.a.createElement("div",{className:"modal-body"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{for:"pwd"},"New Words:"),o.a.createElement("input",{type:"text",className:"form-control",id:"words",name:"words"})),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal"},"Close"))))))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).handleVoices=function(){"undefined"===typeof speechSynthesis&&console.log("No voices");for(var e=speechSynthesis.getVoices(),t=0;t<e.length;t++){var a=document.createElement("option");a.textContent=e[t].name+" ("+e[t].lang+")",e[t].default&&(a.textContent+=" -- DEFAULT"),a.setAttribute("data-lang",e[t].lang),a.setAttribute("data-name",e[t].name),document.getElementById("voiceSelect").appendChild(a),console.log(document.getElementById("voiceSelect").appendChild(a))}},e.handleWords=function(){return e.state.sightwords.map((function(t){var a=t.word;return o.a.createElement("div",{className:"tcol col-md-3 tdiv"},o.a.createElement(g.a,{styles:N,text:"".concat(a),pitch:1.4,lang:"en-US",rate:"0.5",voice:"Fred",textAsButton:!0}),o.a.createElement("canva",{style:{fontSize:"20px"}},o.a.createElement("button",{onClick:function(){return e.handleReveal("".concat(a,"_id"))},className:"btn btn-primary"},"Spell"),o.a.createElement("div",{style:{display:"none"},id:"".concat(a,"_id")},o.a.createElement("hr",{style:{padding:"7px"}}),o.a.createElement("i",{id:"".concat(a,"_answer")}),o.a.createElement("input",{id:a,type:"text",name:a,defaultValue:""}),o.a.createElement("button",{onClick:function(){return e.handleSpelling(a,document.getElementById(a).value)},className:"btn btn-primary"},"Submit"))))}))},e.handleReveal=function(e){"none"!==document.getElementById(e).style.display?document.getElementById(e).style.display="none":document.getElementById(e).style.display="block"},e.handleSpelling=function(e,t){var a=e+"_answer";t==e?(document.getElementById(a).innerHTML="&#10004",document.getElementById(a).style.color="green"):(document.getElementById(a).innerHTML="x",document.getElementById(a).style.color="red")},e.state={answer:"d-none",sightwords:[]},e}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:3001/api/sight_words").then((function(t){e.setState({sightwords:t.data})}))}},{key:"render",value:function(){return this.state.sightwords<1?"Loading":o.a.createElement("div",{className:"container"},o.a.createElement("a",{className:"btn btn-primary btn-xl rounded-pill mt-5","data-toggle":"modal","data-target":"#myModal"},"Add New Sight Words +"),o.a.createElement("hr",null),o.a.createElement("div",{className:"row text-center"},this.handleWords(),this.handleVoices),o.a.createElement(y,null))}}]),t}(n.Component),N={container:{width:"100%"},text:{width:"100%",display:""},play:{hover:{backgroundColor:"purple"},button:{width:"34",height:"34",cursor:"pointer",pointerEvents:"none",outline:"none",backgroundColor:"Gainsboro",border:"solid 1px rgba(255,255,255,1)",borderRadius:6}},stop:{hover:{backgroundColor:"GhostWhite"},button:{width:"34",height:"34",cursor:"pointer",pointerEvents:"none",outline:"none",backgroundColor:"Gainsboro",border:"solid 1px rgba(255,255,255,1)",borderRadius:6}},pause:{hover:{backgroundColor:"purple"},button:{width:"34",height:"10",cursor:"pointer",pointerEvents:"none",outline:"none",backgroundColor:"Gainsboro",border:"solid 1px rgba(255,255,255,1)",borderRadius:6}},resume:{hover:{backgroundColor:"GhostWhite"},button:{width:"34",height:"15",cursor:"pointer",pointerEvents:"none",outline:"none",backgroundColor:"Gainsboro",border:"solid 1px rgba(255,255,255,1)",borderRadius:6}}},w=f;var x=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c,null),o.a.createElement(s,null),o.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.2fe67695.chunk.js.map