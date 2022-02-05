(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e1f2d2c"],{"39b4":function(t,e,s){"use strict";var r=s("e341"),a=s.n(r);a.a},"4e82":function(t,e,s){"use strict";var r=s("23e7"),a=s("1c0b"),n=s("7b0b"),o=s("d039"),c=s("b301"),i=[].sort,u=[1,2,3],l=o((function(){u.sort(void 0)})),b=o((function(){u.sort(null)})),f=c("sort"),d=l||!b||f;r({target:"Array",proto:!0,forced:d},{sort:function(t){return void 0===t?i.call(n(this)):i.call(n(this),a(t))}})},6655:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"page-section"},[s("b-container",{attrs:{fluid:""}},[s("HeaderPage",{attrs:{title:"Gestão de Professores"}}),s("b-row",{staticClass:"mb-4"},[s("b-col",{attrs:{cols:"1"}}),s("b-col",[s("router-link",{staticClass:"btn btn-outline-success mr-2 mt-2",attrs:{to:{name:"addUser"},tag:"button"}},[s("i",{staticClass:"fas fa-plus-square"}),t._v(" ADICIONAR UTILIZADOR")]),s("router-link",{staticClass:"btn btn-outline-info mr-2 mt-2",attrs:{to:{name:"admin"},tag:"button"}},[s("i",{staticClass:"fas fa-bars"}),t._v(" MENU PRINCIPAL")])],1),s("b-col",{attrs:{cols:"1"}})],1),s("b-row",[s("b-col",{attrs:{cols:"1"}}),s("b-col",[s("table",{staticClass:"table table-striped"},[s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{attrs:{scope:"col"}},[t._v(" NOME "),1===t.sortType?s("i",{staticClass:"fas fa-arrow-up",on:{click:function(e){return t.sort()}}}):s("i",{staticClass:"fas fa-arrow-down",on:{click:function(e){return t.sort()}}})]),s("th",{attrs:{scope:"col"}},[t._v("TIPO")]),s("th",{attrs:{scope:"col"}},[t._v("CURSO")]),s("th",{attrs:{scope:"col"}},[t._v("AÇÕES")])])]),s("tbody",t._l(t.users,(function(e){return s("tr",{key:e._id},["Professor"===e.type?s("td",{staticClass:"pt-4"},[t._v(" "+t._s(e.name)+" ")]):t._e(),"Professor"===e.type?s("td",{staticClass:"pt-4"},[t._v(" "+t._s(e.type)+" ")]):t._e(),"Professor"===e.type?s("td",{staticClass:"pt-4"},[t._v(" "+t._s(e.programID)+" ")]):t._e(),"Professor"===e.type?s("td",[s("router-link",{staticClass:"btn btn-success mr-2",attrs:{to:{name:"editUser",params:{userId:e._id}},tag:"button"}},[s("i",{staticClass:"fas fa-edit"}),t._v(" EDITAR")]),s("router-link",{staticClass:"btn btn-secondary mr-2",attrs:{to:{name:"enrollUser",params:{userId:e._id}},tag:"button"}},[s("i",{staticClass:"fas fa-edit"}),t._v(" INSCRIÇÕES")]),s("button",{staticClass:"btn btn-info mr-2",attrs:{type:"button"},on:{click:function(s){return t.viewUser(e._id)}}},[s("i",{staticClass:"fas fa-search"}),t._v(" VER ")]),s("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(s){return t.removeUser(e._id)}}},[s("i",{staticClass:"fas fa-trash-alt"}),t._v(" REMOVER ")])],1):t._e()])})),0)])]),s("b-col",{attrs:{cols:"1"}})],1)],1)],1)},a=[],n=(s("a4d3"),s("99af"),s("4de4"),s("7db0"),s("4160"),s("4e82"),s("0d03"),s("b0c0"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("2fa7")),o=s("e680"),c=s("e9c6"),i=s("2f62");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(s,!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var b={name:"ManageUsers",components:{HeaderPage:c["a"]},data:function(){return{users:[],sortType:1}},computed:l({},Object(i["b"])(["getUserLevelByPoints"]),{},Object(i["b"])("user",["getUsers","getMessage","getUserType"])),methods:{fetchUsers:function(){var t=this;this.$store.dispatch("user/".concat(o["c"])).then((function(){t.users=t.getUsers}),(function(e){t.$alert("".concat(e.message),"Erro","error")}))},sort:function(){this.users.sort(this.compareNames),this.sortType*=-1},compareNames:function(t,e){return t.name>e.name?1*this.sortType:t.name<e.name?-1*this.sortType:0},viewUser:function(t){var e=this.users.find((function(e){return e._id===t}));this.$fire({title:e.auth.username,html:this.generateTemplate(e)})},generateTemplate:function(t){var e="\n          <h5>".concat(t.name,"</h5>\n          <p>\n          <b>Nome:</b> ").concat(t.name," <br>\n          <b>Tipo de utilizador:</b> ").concat(t.type,"<br> <br>\n          <b>Número de BI:</b> ").concat(t.BI," <br>\n          <b>Número de Identificação Fiscal (NIF):</b> ").concat(t.NIF," <br>\n          \n          <b>Data de nascimento:</b> ").concat(this.formatDate(t.birth_date),"<br><br>\n          <b>Cursos:</b> ").concat(t.programID," <br>\n          <b>UC:</b> ").concat(t.courseID," <br><br>\n          \n          <b>Universidade:</b> ").concat(t.university," <br>\n          <b>Faculdade:</b> ").concat(t.college," <br>\n          <b>Campus:</b> ").concat(t.campus," <br>\n      \n          </p>\n        ");return e},formatDate:function(t){var e=new Date(Date.parse(t));return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()},removeUser:function(t){var e=this;this.$confirm("Se sim, clique em OK","Deseja mesmo remover o utilizador?","warning",{confirmButtonText:"OK",cancelButtonText:"Cancelar"}).then((function(){e.$store.dispatch("user/".concat(o["d"]),t).then((function(){e.$alert(e.getMessage,"Utilizador removido!","success"),e.fetchUsers()}))}),(function(){e.$alert("Remoção cancelada!","Informação","info")}))}},created:function(){this.fetchUsers()}},f=b,d=s("2877"),p=Object(d["a"])(f,r,a,!1,null,null,null);e["default"]=p.exports},e341:function(t,e,s){},e9c6:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("b-row",{staticClass:"text-center"},[s("b-col",[s("h2",{staticClass:"page-section-heading mt-5"},[t._v(t._s(t.title.toUpperCase()))])])],1),s("b-row",{staticClass:"text-center"},[s("b-col",[s("div",{staticClass:"divider-custom"},[s("div",{staticClass:"divider-custom-line"}),s("div",{staticClass:"divider-custom-icon"},[s("i",{staticClass:"fas fa-university"})]),s("div",{staticClass:"divider-custom-line"})])])],1)],1)},a=[],n={name:"HeaderPage",props:["title"]},o=n,c=(s("39b4"),s("2877")),i=Object(c["a"])(o,r,a,!1,null,"4440c599",null);e["a"]=i.exports}}]);
//# sourceMappingURL=chunk-7e1f2d2c.a910ac6d.js.map