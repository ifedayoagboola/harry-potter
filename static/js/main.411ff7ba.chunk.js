(this["webpackJsonpharry-potter"]=this["webpackJsonpharry-potter"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(12),n(3)),s=n(4),l=n(6),u=n(5),h=(n(13),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.hero.id,"?set=set2&size=180x180"),alt:"hero"}),r.a.createElement("h2",null,e.hero.actor),"AS",r.a.createElement("p",null,r.a.createElement("strong",null,e.hero.name)," "))}),m=(n(14),function(e){return r.a.createElement("div",{className:"card-list"},e.Heroes.map((function(e){return r.a.createElement(h,{key:e.id,hero:e})})))}),d=(n(15),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(16),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={Heroes:[],searchField:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://hp-api.herokuapp.com/api/characters").then((function(e){return e.json()})).then((function(t){return e.setState({Heroes:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.Heroes,a=t.searchField,o=n.filter((function(e){return e.actor.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"HARRY POTTER"),r.a.createElement(d,{placeholder:"search Hero",handleChange:function(t){return e.setState({searchField:t.target.value})}}),r.a.createElement(m,{Heroes:o}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.411ff7ba.chunk.js.map