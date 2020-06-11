(this.webpackJsonpvisualizer=this.webpackJsonpvisualizer||[]).push([[0],{27:function(e,t,a){e.exports=a(82)},32:function(e,t,a){},34:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),l=a.n(c),i=(a(32),a(33),a(3)),o=a(10),u={dissipating:!1,radius:2};var s=function(e){var t=e.incidents.map((function(e){var t=e.geocoding;return new google.maps.LatLng(t.lat,t.long)}));return r.a.createElement(o.b,{data:t,options:u})},m=function(e,t){var a=Math.pow(e.lat-t.lat,2),n=Math.pow(e.long-t.long,2);return Math.sqrt(a+n)},d=function(e,t){for(var a=m(e,t[0].geocoding),n={name:t[0],distance:a,coordinate:t[0].geocoding},r=0;r<t.length;r+=1){var c=t[r].geocoding,l=m(e,c);l<n.distance&&(n.name=t[r].city,n.distance=l,n.coordinate=c)}return n},v=["visualization"],f={flex:"1",height:"100vh"},p={center:{lat:38,lng:-98},restriction:{latLngBounds:{north:52,south:22,west:-136,east:-60}},zoom:5,mapTypeControl:!1,fullscreenControl:!1,streetViewControl:!1};var E=function(e){var t=e.incidents,a=e.onCityClick,n=r.a.useState(null),c=Object(i.a)(n,2),l=c[0],u=c[1],m=r.a.useCallback((function(e){u(e)}),[]);return r.a.createElement(o.c,{libraries:v,googleMapsApiKey:"AIzaSyDGPAOkljsjapYWRKo89y6McxkZ3JzwZKI"},r.a.createElement(o.a,{mapContainerStyle:f,options:p,onLoad:m,onClick:function(e){if(0!==t.length){var n=d({lat:e.latLng.lat(),long:e.latLng.lng()},t);l.setZoom(8),l.panTo({lat:Number(n.coordinate.lat),lng:Number(n.coordinate.long)}),a(n.name)}}},r.a.createElement(s,{incidents:t})))},h=a(26),y=a(6),b=a(14);a(34);function g(e){var t=e.defaultInput,a=e.onClear,n=e.onSearch,c=r.a.useState(t),l=Object(i.a)(c,2),o=l[0],u=l[1],s=function(e){n(o),e.preventDefault()};return r.a.createElement("div",{className:"omnibox"},r.a.createElement("form",{onSubmit:s},r.a.createElement(y.c,{className:"icon logo",onClick:function(){window.open("https://github.com/police-brutality-2020/visualizer","police-brutality-2020")}}),r.a.createElement("input",{type:"text",value:o,placeholder:"Search Police Brutality",onChange:function(e){return u(e.target.value)}}),r.a.createElement(b.b,{className:"icon",onClick:s}),r.a.createElement("div",{className:"divider"}),r.a.createElement(b.a,{className:"icon",onClick:function(){a(),u("")}})))}g.defaultProps={defaultInput:"",onClear:function(){},onSearch:function(){}};var k=g,w=a(83),C=a(25),N=a.n(C),O=function(e){var t=new URL(e);switch(t.hostname.match(/[^.]+\.\w+$/)[0]){case"twitter.com":return[r.a.createElement(y.f,null),"@".concat(t.pathname.match(/([^/]+)/)[1])];case"reddit.com":return[r.a.createElement(y.e,null),t.pathname.match(/r\/[^/]+/)[0]];case"facebook.com":return[r.a.createElement(y.b,null),t.hostname];default:return[r.a.createElement(y.d,null),t.hostname]}};a(56);var j=function(e){var t=e.type,a=e.date,n=e.description,c=e.videoUrl,l=e.linkUrl,o=e.thumbnailUrl,u=O(l),s=Object(i.a)(u,2)[1];return r.a.createElement("div",{className:"video"},r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:o,alt:"thumbnail"}),r.a.createElement("div",{className:"source"},r.a.createElement("div",{className:"label"},s),r.a.createElement("div",{className:"type"},t," \u2022 ",Object(w.a)(new Date(a),"LLLL do, yyyy")))),r.a.createElement("p",null,n),r.a.createElement("video",{controls:!0},r.a.createElement("source",{type:"video/mp4",src:c}),r.a.createElement("track",{kind:"captions"})))};a(57);var L=function(e){var t=e.data.map((function(e){if(!e.video[0]||!e.video[0].streams)return null;var t=e.video[0],a=t.streams[0];return r.a.createElement(j,{key:e.id,type:t.site,date:t.created_at,description:t.description,linkUrl:t.url,videoUrl:a.url,thumbnailUrl:t.thumbnail})}));return r.a.createElement("div",{className:"evidence"},r.a.createElement("h4",null,"Evidence"),t)};a(58);function S(e){var t=e.urls.map((function(e){var t=O(e),a=Object(i.a)(t,2),n=a[0],c=a[1];return r.a.createElement("a",{key:e,href:e,target:"_blank",rel:"noopener noreferrer"},n,r.a.createElement("span",null,c))}));return r.a.createElement("div",{className:"links"},t)}S.defaultProps={urls:[]};var x=S,D=a(8),R=a.n(D),z=a(12),I=a(13),U=a.n(I),M=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){(function(){var t=Object(z.a)(R.a.mark((function t(){var a,n;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.a.get("https://api.846policebrutality.com/api/incidents/".concat(e,"?include=evidence"));case 2:a=t.sent,n=a.data,c(n.data[0]);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),r};a(77);var B=function(e){var t=e.id,a=e.hideResultDetail,n=M(t);return n?r.a.createElement("div",{className:"result-details"},r.a.createElement("div",{className:"header"},r.a.createElement(y.a,{onClick:a}),r.a.createElement("div",null,r.a.createElement("h3",null,n.title),r.a.createElement("p",null,n.city,", ",n.state," \u2022"," ",Object(w.a)(new Date(n.date),"LLL dd, yyyy")))),r.a.createElement("div",{className:"divider"}),r.a.createElement(x,{urls:n.links}),r.a.createElement("div",{className:"divider"}),r.a.createElement(L,{data:n.evidence})):r.a.createElement("div",{className:"results-details-loader"},r.a.createElement(N.a,{type:"TailSpin",color:"#000000",height:50,width:50,timeout:3e3}))};a(78);var K=function(e){var t=e.id,a=e.title,n=e.city,c=e.state,l=e.date,i=e.onResultClick,o=function(){return i(t)};return r.a.createElement("div",{className:"search-result",role:"button",tabIndex:0,onClick:o,onKeyDown:o},r.a.createElement("h4",null,a),r.a.createElement("p",null,n,", ",c," \u2022 ",Object(w.a)(new Date(l),"LLLL do, yyyy")))};a(79);var P=function(e){var t=e.results,a=e.onResultClick,n=t.map((function(e){return r.a.createElement(K,{id:e.id,key:e.id,title:e.title,city:e.city,state:e.state,date:e.date,onResultClick:a})}));return r.a.createElement("div",{className:"search-results"},n)};a(80);var A=function(e){var t=e.results,a=e.isOpen,n=r.a.useState(null),c=Object(i.a)(n,2),l=c[0],o=c[1];return r.a.createElement("div",{className:"panel ".concat(a?"open":"")},r.a.createElement("div",{className:"omnibox-spacer"}),l?r.a.createElement(B,{hideResultDetail:function(){return o(!1)},id:l}):r.a.createElement(P,{results:t,onResultClick:o}))},J=new h.a([],{includeScore:!0,isCaseSensitive:!1,threshold:.3,keys:["city","state","title"]});var T=function(e){var t=e.incidents,a=e.mapValue,n=r.a.useState(""),c=Object(i.a)(n,2),l=c[0],o=c[1];r.a.useEffect((function(){o(a)}),[a]);var u=!!l;J.setCollection(t);var s=J.search(l).map((function(e){return e.item})).sort((function(e,t){return t.date.localeCompare(e.date)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{key:"omnibox-".concat(l),defaultInput:l,onClear:function(){return o("")},onSearch:o}),r.a.createElement(A,{key:"panel-".concat(l),results:s,isOpen:u}))},V=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(z.a)(R.a.mark((function e(){var t,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("https://api.846policebrutality.com/api/incidents");case 2:t=e.sent,a=t.data,r(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a};a(81);var W=function(){var e=r.a.useState(""),t=Object(i.a)(e,2),a=t[0],n=t[1],c=V();return c?r.a.createElement("div",{className:"app"},r.a.createElement(T,{incidents:c,mapValue:a}),r.a.createElement(E,{incidents:c,onCityClick:n})):null};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.3162048d.chunk.js.map