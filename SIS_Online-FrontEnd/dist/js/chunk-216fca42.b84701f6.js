(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-216fca42"],{"39b4":function(t,e,r){"use strict";var a=r("e341"),s=r.n(a);s.a},e341:function(t,e,r){},e9c6:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-row",{staticClass:"text-center"},[r("b-col",[r("h2",{staticClass:"page-section-heading mt-5"},[t._v(t._s(t.title.toUpperCase()))])])],1),r("b-row",{staticClass:"text-center"},[r("b-col",[r("div",{staticClass:"divider-custom"},[r("div",{staticClass:"divider-custom-line"}),r("div",{staticClass:"divider-custom-icon"},[r("i",{staticClass:"fas fa-university"})]),r("div",{staticClass:"divider-custom-line"})])])],1)],1)},s=[],o={name:"HeaderPage",props:["title"]},n=o,i=(r("39b4"),r("2877")),c=Object(i["a"])(n,a,s,!1,null,"4440c599",null);e["a"]=c.exports},ff1b:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"page-section"},[r("b-container",[r("HeaderPage",{attrs:{title:"Adicionar Utilizador"}}),r("b-row",[r("b-col",{attrs:{cols:"2"}}),r("b-col",{attrs:{cols:"8"}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"txtName",placeholder:"escreve nome",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-control form-control-lg",attrs:{id:"sltType",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.type=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("-- SELECIONA TIPO --")]),"admin"===t.getUserType?r("option",{attrs:{value:"admin"}},[t._v(" ADMINISTRADOR ")]):t._e(),"admin"===t.getUserType?r("option",{attrs:{value:"Secretaria"}},[t._v(" SECRETARIA ")]):t._e(),r("option",{attrs:{value:"user"}},[t._v("UTILIZADOR NORMAL")]),r("option",{attrs:{value:"Professor"}},[t._v("PROFESSOR")]),r("option",{attrs:{value:"Estudante"}},[t._v("ESTUDANTE")])])]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.birth_date,expression:"birth_date"}],staticClass:"form-control form-control-lg",attrs:{type:"text",onmouseenter:"(this.type='date')",onmouseleave:"(this.type='text')",id:"txtBirthDate",placeholder:"escreve data de nascimento",required:""},domProps:{value:t.birth_date},on:{input:function(e){e.target.composing||(t.birth_date=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.username,expression:"auth.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",value:"ricardo.queiros@gmail.com",id:"txtEmail",placeholder:"escreve username",required:""},domProps:{value:t.auth.username},on:{input:function(e){e.target.composing||t.$set(t.auth,"username",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.password,expression:"auth.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",id:"txtPassword",placeholder:"escreve password",required:""},domProps:{value:t.auth.password},on:{input:function(e){e.target.composing||t.$set(t.auth,"password",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{staticClass:"form-control form-control-lg",attrs:{type:"password",id:"txtConfirmPassword",placeholder:"confirma password",required:""}})]),r("button",{staticClass:"btn btn-outline-success btn-lg mr-2",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-plus-square"}),t._v(" ADICIONAR ")]),r("router-link",{staticClass:"btn btn-outline-danger btn-lg",attrs:{to:{name:"admin"},tag:"button"}},[r("i",{staticClass:"fas fa-window-close"}),t._v(" CANCELAR ")])],1)]),r("b-col",{attrs:{cols:"2"}})],1)],1)],1)},s=[],o=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),n=r("e680"),i=r("e9c6"),c=r("a18c"),l=r("2f62");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={name:"AddUser",components:{HeaderPage:i["a"]},data:function(){return{auth:{username:"",password:""},name:"",type:"",birth_date:"",NIF:"",BI:"",university:"",college:"",campus:"",programID:""}},computed:d({},Object(l["b"])("user",["getMessage"]),{},Object(l["b"])("auth",["isUserLoggedIn","getProfileName","getUserType","getProfile"])),methods:{add:function(){var t=this;document.querySelector("#txtPassword").value!==document.querySelector("#txtConfirmPassword").value?this.$alert("Campos password não coincidem","Erro de validação do formulário","error"):this.$store.dispatch("user/".concat(n["a"]),this.$data).then((function(){t.$alert(t.getMessage,"Utilizador adicionado!","success"),c["a"].push({name:"admin"})}),(function(e){t.$alert("".concat(e.message),"Erro","error")}))}}},m=p,v=r("2877"),f=Object(v["a"])(m,a,s,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-216fca42.b84701f6.js.map