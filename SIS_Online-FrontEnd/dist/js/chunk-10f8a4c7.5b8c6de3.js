(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10f8a4c7"],{"6a1d":function(t,e,a){t.exports=a.p+"img/uni.3f2af121.png"},bb51:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{attrs:{fluid:""}},[s("body",{staticClass:"masthead bg-SIS text-white text-center"},[s("b-row",{staticStyle:{"padding-bottom":"150px"}},[s("b-col",[s("img",{staticClass:"masthead-avatar mb-2",staticStyle:{width:"500px"},attrs:{src:a("6a1d")}})])],1),s("p",{staticClass:"masthead-subheading font-weight-light"}),s("b-row",[s("b-col",[t.isUserLoggedIn?t._e():s("b-button",{staticClass:"p-2 mr-2",attrs:{variant:"info",to:{name:"login"}}},[s("i",{staticClass:"fas fa-sign-in-alt mr-2"}),t._v("ENTRAR ")]),"Professor"===t.getUserType?s("b-button",{staticClass:"p-2 mr-2",attrs:{variant:"secondary",to:{name:"profile"}}},[s("i",{staticClass:"fas fa-user-circle mr-2"}),t._v("VER INSCRIÇÕES ")]):t._e(),"Estudante"===t.getUserType?s("b-button",{staticClass:"p-2 mr-2",attrs:{variant:"secondary",to:{name:"profile"}}},[s("i",{staticClass:"fas fa-user-circle mr-2"}),t._v("VER INSCRIÇÕES ")]):t._e(),"Secretaria"===t.getUserType?s("b-button",{staticClass:"p-2 mr-2",attrs:{variant:"secondary",to:{name:"admin"}}},[s("i",{staticClass:"fas fa-clipboard-list mr-2"}),t._v("SIS ONLINE ")]):t._e(),"admin"===t.getUserType?s("b-button",{staticClass:"p-2 mr-2",attrs:{variant:"secondary",to:{name:"admin"}}},[s("i",{staticClass:"fas fa-clipboard-list mr-2"}),t._v("ADMIN ")]):t._e(),t.isUserLoggedIn?s("b-button",{staticClass:"p-2 mr-2",attrs:{variant:"danger"},on:{click:function(e){return t.logout()}}},[s("i",{staticClass:"fas fa-sign-out-alt mr-2"}),t._v("SAIR ")]):t._e()],1)],1)],1),s("footer",{staticClass:"autor py-4 text-center text-white"},[s("div",{staticClass:"container"},[t._v("MEIW | PWA - Tiago Romão - 75309")])]),s("div",{staticClass:"scroll-to-top d-lg-none position-fixed"},[s("a",{staticClass:"js-scroll-trigger d-block text-center text-white rounded",attrs:{href:"#page-top"}},[s("i",{staticClass:"fa fa-chevron-up"})])])])},r=[],i=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("2fa7")),n=a("2f62"),o=a("a18c"),c=a("17d5");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={computed:b({},Object(n["b"])(["getMessage","auth/isUserLoggedIn"]),{},Object(n["b"])(["getUserLevelByPoints"]),{},Object(n["b"])("auth",["isUserLoggedIn","getProfileName","getUserType","getProfile"])),methods:{logout:function(){var t=this;this.$confirm("","Sair do SIS Online?","warning",{confirmButtonText:"Sim",cancelButtonText:"Não"}).then((function(){t.$store.commit("auth/".concat(c["d"])),o["a"].push({name:"home"})}))}}},p=f,u=a("2877"),d=Object(u["a"])(p,s,r,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-10f8a4c7.5b8c6de3.js.map