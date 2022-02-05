<template>
  <b-container fluid>
    <body class="masthead bg-SIS text-white text-center">
      <b-row style="padding-bottom: 150px">
        <b-col>
          <img
            class="masthead-avatar mb-2"
            src="@/assets/uni.png"
            style="width: 500px"
          />
        </b-col>
      </b-row>
      <p class="masthead-subheading font-weight-light"></p>
      <b-row>
        <b-col>
          <b-button
            variant="info"
            class="p-2 mr-2"
            :to="{ name: 'login' }"
            v-if="!isUserLoggedIn"
          >
            <i class="fas fa-sign-in-alt mr-2"></i>ENTRAR
          </b-button>

          <b-button
            variant="secondary"
            class="p-2 mr-2"
            :to="{ name: 'profile' }"
            v-if="getUserType === 'Professor'"
          >
            <i class="fas fa-user-circle mr-2"></i>VER INSCRIÇÕES
          </b-button>
          <b-button
            variant="secondary"
            class="p-2 mr-2"
            :to="{ name: 'profile' }"
            v-if="getUserType === 'Estudante'"
          >
            <i class="fas fa-user-circle mr-2"></i>VER INSCRIÇÕES
          </b-button>
          <b-button
            variant="secondary"
            class="p-2 mr-2"
            :to="{ name: 'admin' }"
            v-if="getUserType === 'Secretaria'"
          >
            <i class="fas fa-clipboard-list mr-2"></i>SIS ONLINE
          </b-button>
          <b-button
            variant="secondary"
            class="p-2 mr-2"
            :to="{ name: 'admin' }"
            v-if="getUserType === 'admin'"
          >
            <i class="fas fa-clipboard-list mr-2"></i>ADMIN
          </b-button>
          <b-button
            variant="danger"
            class="p-2 mr-2"
            @click="logout()"
            v-if="isUserLoggedIn"
          >
            <i class="fas fa-sign-out-alt mr-2"></i>SAIR
          </b-button>
        </b-col>
      </b-row>
    </body>
    <footer class="autor py-4 text-center text-white">
      <div class="container">MEIW | PWA - Tiago Romão - 75309</div>
    </footer>

    <div class="scroll-to-top d-lg-none position-fixed">
      <a
        class="js-scroll-trigger d-block text-center text-white rounded"
        href="#page-top"
      >
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import router from "@/router";
import { AUTH_LOGOUT_SUCCESS } from "@/store/auth/auth.constants";

export default {
  computed: {
    ...mapGetters(["getMessage", "auth/isUserLoggedIn"]),
    ...mapGetters(["getUserLevelByPoints"]),
    ...mapGetters("auth", [
      "isUserLoggedIn",
      "getProfileName",
      "getUserType",
      "getProfile"
    ])
  },
  methods: {
    logout() {
      this.$confirm("", "Sair do SIS Online?", "warning", {
        confirmButtonText: "Sim",
        cancelButtonText: "Não"
      }).then(() => {
        this.$store.commit(`auth/${AUTH_LOGOUT_SUCCESS}`);
        router.push({ name: "home" });
      });
    }
  }
};
</script>
