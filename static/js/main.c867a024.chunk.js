(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),a=n(3),s=n.n(a),c=(n(95),n(96),n(97),n(98),n(75)),r=n(76),u=n(88),i=n(77),m=n(30),h=n(87),d=n(158),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleChange=function(e){n.setState({selectedUserInfo:e});var t="https://jsonplaceholder.typicode.com/albums?userId="+e;fetch(t).then(function(e){return e.json()}).then(function(e){n.setState({userAlbums:e}),console.log("Test - Retrive Albums for selected users."),console.log("Album URL"),console.log(t),console.log("Albums"),console.log(n.state.userAlbums)}).catch(function(e){console.log(e)})},n.handleAlbumClick=function(e,t){console.log("Test - Displaying albumId # of album clicked."),console.log(e);var o="https://jsonplaceholder.typicode.com/photos?albumId="+e;console.log(o),fetch(o).then(function(e){return e.json()}).then(function(e){n.setState({albumPhotos:e}),console.log(n.state.albumPhotos)}).catch(function(e){console.log(e)})},n.state={users:[],selectedUserInfo:[],userAlbums:[],albumPhotos:[]},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleAlbumClick=n.handleAlbumClick.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({users:t}),console.log("Test - Retriving list of users on component did mount."),console.log(e.state.users)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e,t=d.a.Option;return this.state.userAlbums.length>0&&(e=l.a.createElement("div",{className:"User-albums-dropdown"},l.a.createElement("h2",null,"Ok! Now Select Album You Want To See!"),l.a.createElement(d.a,{defaultValue:"Select Album",style:{width:520},onChange:this.handleAlbumClick},this.state.userAlbums.map(function(e){return l.a.createElement(t,{key:e.id},"Album # - "+e.id+" "+e.title)})))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"User-selection"},l.a.createElement(d.a,{defaultValue:"Select User",style:{width:220},onChange:this.handleChange},this.state.users.map(function(e){return l.a.createElement(t,{key:e.id},e.name)}))),e,l.a.createElement("div",{className:"responsiveGrid"},this.state.albumPhotos.map(function(e){return l.a.createElement("a",{href:e.url},l.a.createElement("figure",null,l.a.createElement("img",{src:e.url,alt:""})))})))}}]),t}(o.Component);var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Albums & Photos"),l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},90:function(e,t,n){e.exports=n(156)},95:function(e,t,n){},98:function(e,t,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.c867a024.chunk.js.map