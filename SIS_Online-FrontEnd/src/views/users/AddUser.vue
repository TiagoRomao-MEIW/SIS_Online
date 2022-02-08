<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Adicionar Utilizador" />
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="add">
            <div class="form-group">
              <input
                v-model="name"
                type="text"
                class="form-control form-control-lg"
                id="txtName"
                placeholder="escreve nome"
                required
              />
            </div>
            <div class="form-group">
              <select
                id="sltType"
                class="form-control form-control-lg"
                v-model="type"
                required
              >
                <option value>-- SELECIONA TIPO --</option>
                <option v-if="getUserType === 'admin'" value="admin">
                  ADMINISTRADOR
                </option>
                <option v-if="getUserType === 'admin'" value="Secretaria">
                  SECRETARIA
                </option>
                <option value="user">UTILIZADOR NORMAL</option>
                <option value="Professor">PROFESSOR</option>
                <option value="Estudante">ESTUDANTE</option>
              </select>
            </div>
            <div class="form-group">
              <input
                v-model="birth_date"
                type="text"
                onmouseenter="(this.type='date')"
                onmouseleave="(this.type='text')"
                class="form-control form-control-lg"
                id="txtBirthDate"
                placeholder="escreve data de nascimento"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="auth.username"
                type="text"
                class="form-control form-control-lg"
                id="txtEmail"
                placeholder="escreve username"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="auth.password"
                type="password"
                class="form-control form-control-lg"
                id="txtPassword"
                placeholder="escreve password"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control form-control-lg"
                id="txtConfirmPassword"
                placeholder="confirma password"
                required
              />
            </div>
            <button type="submit" class="btn btn-outline-success btn-lg mr-2">
              <i class="fas fa-plus-square"></i> ADICIONAR
            </button>
            <router-link
              :to="{ name: 'admin' }"
              tag="button"
              class="btn btn-outline-danger btn-lg"
            >
              <i class="fas fa-window-close"></i> CANCELAR
            </router-link>
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { ADD_USER } from "@/store/users/user.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "AddUser",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      auth: { username: "", password: "" },
      name: "",
      type: "",
      birth_date: "",
      NIF: "",
      BI: "",
      university: "",
      college: "",
      campus: "",
      programID: ""
    };
  },
  computed: {
    ...mapGetters("user", ["getMessage"]),
    ...mapGetters("auth", [
      "isUserLoggedIn",
      "getProfileName",
      "getUserType",
      "getProfile"
    ])
  },
  methods: {
    add() {
      if (
        document.querySelector("#txtPassword").value !==
        document.querySelector("#txtConfirmPassword").value
      ) {
        this.$alert(
          "Campos password não coincidem",
          "Erro de validação do formulário",
          "error"
        );
      } else {
        this.$store.dispatch(`user/${ADD_USER}`, this.$data).then(
          () => {
            this.$alert(this.getMessage, "Utilizador adicionado!", "success");
            router.push({ name: "admin" });
          },
          err => {
            this.$alert(`${err.message}`, "Erro", "error");
          }
        );
      }
    }
  }
};
</script>
