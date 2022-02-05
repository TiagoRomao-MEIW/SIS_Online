<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Login" />

      <b-row>
        <b-col cols="4"></b-col>
        <b-col cols="">
          <form @submit.prevent="login">
            <div class="form-group">
              <input
                type="text"
                v-model="username"
                class="form-control form-control-lg"
                id="exampleInputEmail1"
                placeholder="username"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                v-model="password"
                class="form-control form-control-lg"
                id="exampleInputPassword1"
                placeholder="password"
                required
              />
            </div>
            <button type="submit" class="btn btn-success mr-2">
              <i class="fas fa-sign-in-alt"></i> ENTRAR
            </button>
            <router-link
              :to="{ name: 'home' }"
              tag="button"
              class="btn btn-warning"
              style="position: absolute; right: 5%"
            >
              <i class="fas fa-undo"></i> VOLTAR
            </router-link>
          </form>
        </b-col>
        <b-col cols="4"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { MODULE_BASE, AUTH_LOGIN } from "@/store/auth/auth.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import router from "@/router";
import { mapGetters } from "vuex";
export default {
  name: "Login",
  components: {
    HeaderPage
  },
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters("auth", ["getMessage"])
  },
  methods: {
    login() {
      this.$store
        .dispatch(`${MODULE_BASE}/${AUTH_LOGIN}`, this.$data)
        .then(() => {
          this.$alert(this.getMessage, "Login", "success");
          router.push({ name: "home" });
        })
        .catch(err => {
          this.$alert(`${err.message}`, "Erro", "error");
        });
    }
  }
};
</script>
