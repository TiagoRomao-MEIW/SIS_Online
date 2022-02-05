<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fluid>
      <b-navbar-brand class="ml-5">
        <b-button
          variant="outline-light"
          href="#rules"
          class="p-2 mr-2"
          :to="{ name: 'home' }"
          style="position: relative; right: 5%"
        >
          <i class="fas fa-home mr-2"></i>INICIO
        </b-button>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto mr-5">
          <b-button
            variant="outline-danger"
            style="float: right"
            :hidden="!isUserLoggedIn"
            @click="logout()"
          >
            <i class="fas fa-sign-out-alt"></i> LOGOUT
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import router from "@/router";
import { AUTH_LOGOUT_SUCCESS } from "@/store/auth/auth.constants";

export default {
  computed: {
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
    },
    setCurrentDateTime(paramDate) {
      const date = new Date(paramDate);
      return (
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDay()
      );
    }
  }
};
</script>
