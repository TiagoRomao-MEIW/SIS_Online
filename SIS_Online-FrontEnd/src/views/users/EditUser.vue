<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Editar Utilizador" />
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="update">
            <div class="form-group">
              <input
                v-model="user.name"
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
                v-model="user.type"
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
                v-model="user.birth_date"
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
                v-model="user.BI"
                type="text"
                class="form-control form-control-lg"
                id="txtBI"
                placeholder="número do BI/CC"
              />
            </div>

            <div class="form-group">
              <input
                v-model="user.NIF"
                type="text"
                class="form-control form-control-lg"
                id="txtNIF"
                placeholder="número identificação fiscal (NIF)"
              />
            </div>

            <div class="form-group">
              <input
                v-if="getUserType === 'admin'"
                v-model="user.auth.username"
                type="text"
                class="form-control form-control-lg"
                id="txtEmail"
                placeholder="escreve username"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-if="getUserType === 'admin'"
                v-model="user.auth.password"
                type="password"
                class="form-control form-control-lg"
                id="txtPassword"
                placeholder="escreve password"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-if="getUserType === 'admin'"
                v-model="user.auth.password"
                type="password"
                class="form-control form-control-lg"
                id="txtConfirmPassword"
                placeholder="confirma password"
              />
            </div>

            <div class="form-group">
              <select
                id="sltUni"
                class="form-control form-control-lg"
                v-model="user.university"
              >
                <option value>-- SELECIONA UNIVERSIDADE --</option>
                <option value="UTAD">UTAD</option>
                <option value="UAb">UAb</option>
                <option value="UP">UP</option>
                <option value="UL">UL</option>
              </select>
            </div>

            <div class="form-group">
              <select
                id="sltFac"
                class="form-control form-control-lg"
                v-model="user.college"
              >
                <option value>-- SELECIONA FACULDADE --</option>
                <option value="Fac1">FACULDADE 1</option>
                <option value="Fac2">FACULDADE 2</option>
                <option value="Fac3">FACULDADE 3</option>
              </select>
            </div>

            <div class="form-group">
              <select
                id="sltCamp"
                class="form-control form-control-lg"
                v-model="user.campus"
              >
                <option value>-- SELECIONA CAMPUS --</option>
                <option value="Porto">PORTO</option>
                <option value="Lisboa">LISBOA</option>
                <option value="Vila Real">VILA REAL</option>
              </select>
            </div>
            <div class="form-group">
              <select
                id="sltProg"
                class="form-control"
                v-model="user.programID"
              >
                <option
                  v-for="p in getPrograms"
                  :key="p._id"
                  :value="p.program"
                >
                  {{ p.program }}
                </option>
              </select>
            </div>

            <button type="submit" class="btn btn-outline-success btn-lg mr-2">
              <i class="fas fa-edit"></i> ATUALIZAR
            </button>
            <router-link
              :to="{ name: 'admin' }"
              tag="button"
              class="btn btn-outline-danger btn-lg"
              ><i class="fas fa-window-close"></i> CANCELAR</router-link
            >
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { EDIT_USER } from "@/store/users/user.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import router from "@/router";
import { mapGetters } from "vuex";

import { FETCH_PROGRAMS } from "@/store/programs/program.constants";

export default {
  name: "EditUser",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      user: {}
    };
  },
  computed: {
    ...mapGetters("user", ["getUsersById", "getMessage"]),
    ...mapGetters("auth", [
      "isUserLoggedIn",
      "getProfileName",
      "getUserType",
      "getProfile"
    ]),
    ...mapGetters("program", ["getPrograms"])
  },
  methods: {
    update() {
      this.$store.dispatch(`user/${EDIT_USER}`, this.$data.user).then(
        () => {
          this.$alert(this.getMessage, "Utilizador atualizado!", "success");
          router.push({ name: "listUsers" });
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    }
  },
  created() {
    this.user = this.getUsersById(this.$route.params.userId);
    this.$store.dispatch(`program/${FETCH_PROGRAMS}`).then(
      () => {
        this.myQuestions = this.getPrograms;
      },
      err => {
        this.$alert(`${err.message}`, "Erro", "error");
      }
    );
  }
};
</script>
