"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{776:function(n,t,e){e.d(t,{E3:function(){return s},Hx:function(){return d},Y5:function(){return f},gJ:function(){return x},k1:function(){return i},xc:function(){return l}});var r=e(861),a=e(757),u=e.n(a),c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTY1ZThjZmEzYTU5MTE3MTRlMTE2ZGZkNmVlNjIxNCIsInN1YiI6IjY1MzEwOGJiMTEwOGE4MDBhYzc1MzgyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Ls_rD1Q4gtKlbPSi-Ur5NHe_VHhKmw2WTzzKtH2Lzg"}};function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",c);case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),c);case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),c);case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),c);case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US"),c);case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var x=function(n,t){return n?"https://image.tmdb.org/t/p/w".concat(t.toString()).concat(n):"https://placehold.jp/e6e7f4/242424/300x300.png?text=Image%20not%20found"}},126:function(n,t,e){e.d(t,{e:function(){return c}});var r=e(689),a=e(87),u=e(184),c=function(n){var t=n.movies,e=(0,r.TH)();return(0,u.jsx)("ul",{children:t.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(n.id),state:{from:e},children:n.name||n.original_title||n.original_name})},n.id)}))})}},415:function(n,t,e){e.r(t);var r=e(861),a=e(439),u=e(757),c=e.n(u),i=e(776),o=e(126),s=e(791),p=e(184);t.default=function(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),e=t[0],u=t[1];return(0,s.useEffect)((function(){function n(){return(n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.k1)();case 3:return t=n.sent,n.next=6,t.results;case 6:e=n.sent,u(e),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h2",{children:"Trending today"}),(0,p.jsx)(o.e,{movies:e})]})}},861:function(n,t,e){function r(n,t,e,r,a,u,c){try{var i=n[u](c),o=i.value}catch(s){return void e(s)}i.done?t(o):Promise.resolve(o).then(r,a)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(a,u){var c=n.apply(t,e);function i(n){r(c,a,u,i,o,"next",n)}function o(n){r(c,a,u,i,o,"throw",n)}i(void 0)}))}}e.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=415.9c34c477.chunk.js.map