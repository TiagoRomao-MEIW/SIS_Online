(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-523c1f76"],{"0820":function(t,r,e){"use strict";e.r(r);var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",{staticClass:"page-section"},[e("b-container",[e("HeaderPage",{attrs:{title:"Gestão de Cursos"}}),e("b-row",{staticClass:"mb-4"},[e("b-col",{attrs:{cols:"1"}}),e("b-col",[e("router-link",{staticClass:"btn btn-outline-success mr-2 mt-2",attrs:{to:{name:"addProgram"},tag:"button"}},[e("i",{staticClass:"fas fa-plus-square"}),t._v(" ADICIONAR CURSO")]),e("router-link",{staticClass:"btn btn-outline-info mr-2 mt-2",attrs:{to:{name:"admin"},tag:"button"}},[e("i",{staticClass:"fas fa-bars"}),t._v(" MENU PRINCIPAL")])],1),e("b-col",{attrs:{cols:"1"}})],1),e("b-row",[e("b-col",{attrs:{cols:"1"}}),e("b-col",[e("table",{staticClass:"table table-striped"},[e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v(" CURSO "),1===t.sortType?e("i",{staticClass:"fas fa-arrow-up",on:{click:function(r){return t.sort()}}}):e("i",{staticClass:"fas fa-arrow-down",on:{click:function(r){return t.sort()}}})]),e("th",{attrs:{scope:"col"}},[t._v("GRAU")]),e("th",{attrs:{scope:"col"}},[t._v("TIPO DE OFERTA")]),e("th",{attrs:{scope:"col"}},[t._v("AÇÕES")])])]),e("tbody",t._l(t.programs,(function(r){return e("tr",{key:r._id},[e("td",{staticClass:"pt-4"},[t._v(t._s(r.program))]),e("td",{staticClass:"pt-4"},[t._v(t._s(r.degree))]),e("td",{staticClass:"pt-4"},[t._v(t._s(r.type))]),e("td",[e("router-link",{staticClass:"btn btn-outline-success mr-2",attrs:{to:{name:"editProgram",params:{programId:r._id}},tag:"button"}},[e("i",{staticClass:"fas fa-edit"}),t._v(" EDITAR")]),e("button",{staticClass:"btn btn-outline-warning mr-2",attrs:{type:"button"},on:{click:function(e){return t.viewProgram(r._id)}}},[e("i",{staticClass:"fas fa-search"}),t._v(" VER ")]),e("button",{staticClass:"btn btn-outline-danger mr-2",attrs:{type:"button"},on:{click:function(e){return t.removeProgram(r._id)}}},[e("i",{staticClass:"fas fa-trash-alt"}),t._v(" REMOVER ")])],1)])})),0)])]),e("b-col",{attrs:{cols:"1"}})],1)],1)],1)},s=[],o=(e("a4d3"),e("99af"),e("4de4"),e("7db0"),e("4160"),e("4e82"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("2fa7")),n=e("d525"),c=e("e9c6"),i=e("2f62"),l=e("a18c");function u(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,a)}return e}function p(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?u(e,!0).forEach((function(r){Object(o["a"])(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(e).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var f={name:"ListPrograms",components:{HeaderPage:c["a"]},data:function(){return{programs:[],sortType:1}},computed:p({},Object(i["b"])("program",["getPrograms","getMessage"])),methods:{fetchPrograms:function(){var t=this;this.$store.dispatch("program/".concat(n["c"])).then((function(){t.programs=t.getPrograms}),(function(r){t.$alert("".concat(r.message),"Erro","error")}))},sort:function(){this.programs.sort(this.compareNames),this.sortType*=-1},compareNames:function(t,r){return t.program>r.program?1*this.sortType:t.program<r.program?-1*this.sortType:0},viewProgram:function(t){var r=this.programs.find((function(r){return r._id===t}));this.$fire({title:"CURSO",html:this.generateTemplate(r)})},generateTemplate:function(t){var r="\n          <br/>\n          <p><b>Nome:</b> ".concat(t.program,"</p>\n          <p><b>Grau:</b> ").concat(t.degree,"</p>\n          <p><b>Tipo de Oferta:</b> ").concat(t.type,"</p>\n          <p><b>Área Científica:</b> ").concat(t.sci_field,"</p>\n          <p><b>Ano Letivo:</b> ").concat(t.acad_year,"</p>\n          \n          ");return r},removeProgram:function(t){var r=this;this.$confirm("Se sim, clique em OK","Deseja mesmo remover o curso?","warning",{confirmButtonText:"OK",cancelButtonText:"Cancelar"}).then((function(){r.$store.dispatch("program/".concat(n["d"]),t).then((function(){r.$alert(r.getMessage,"Curso removido!","success"),r.fetchPrograms()}))}),(function(){r.$alert("Remoção cancelada!","Informação","info"),l["a"].push({name:"admin"})}))}},created:function(){this.fetchPrograms()}},b=f,m=(e("1a3a"),e("2877")),d=Object(m["a"])(b,a,s,!1,null,null,null);r["default"]=d.exports},1302:function(t,r,e){},"1a3a":function(t,r,e){"use strict";var a=e("1302"),s=e.n(a);s.a},"39b4":function(t,r,e){"use strict";var a=e("e341"),s=e.n(a);s.a},"4e82":function(t,r,e){"use strict";var a=e("23e7"),s=e("1c0b"),o=e("7b0b"),n=e("d039"),c=e("b301"),i=[].sort,l=[1,2,3],u=n((function(){l.sort(void 0)})),p=n((function(){l.sort(null)})),f=c("sort"),b=u||!p||f;a({target:"Array",proto:!0,forced:b},{sort:function(t){return void 0===t?i.call(o(this)):i.call(o(this),s(t))}})},e341:function(t,r,e){},e9c6:function(t,r,e){"use strict";var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-container",[e("b-row",{staticClass:"text-center"},[e("b-col",[e("h2",{staticClass:"page-section-heading mt-5"},[t._v(t._s(t.title.toUpperCase()))])])],1),e("b-row",{staticClass:"text-center"},[e("b-col",[e("div",{staticClass:"divider-custom"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-university"})]),e("div",{staticClass:"divider-custom-line"})])])],1)],1)},s=[],o={name:"HeaderPage",props:["title"]},n=o,c=(e("39b4"),e("2877")),i=Object(c["a"])(n,a,s,!1,null,"4440c599",null);r["a"]=i.exports}}]);
//# sourceMappingURL=chunk-523c1f76.85fdb1ac.js.map