<template>
  <section class="page-section">
    <b-container>
      <b-card class="overflow-hidden mt-5" style="max-width: 1540px">
        <b-row>
          <b-col md="6" align="center">
            <br />
            <HeaderPage :title="user.name.toUpperCase()" />
            <p class="text-left" style="padding-left: 35%">
              <b-card-text align="left">
                <h5>Dados pessoais</h5>
                <strong>
                  <i class="fas fa-signature fa-lg mr-1"></i>Nome: </strong
                >{{ user.name }}
                <br />
                <strong>
                  <i class="fas fa-calendar-alt fa-lg mr-1"></i>Data de
                  nascimento:</strong
                >
                {{ setCurrentDateTime(user.birth_date) }}
                <br />
                <strong>
                  <i class="fas fa-id-card fa-lg mr-1"></i>Nº BI/CC:</strong
                >
                {{ user.BI }} <br />
                <strong> <i class="fas fa-list-alt fa-lg mr-1"></i>NIF:</strong>
                {{ user.NIF }}
                <br />

                <br />
                <br />
                <br
              /></b-card-text>
            </p>
          </b-col>
          <b-col md="6">
            <b-card-body title="PERFIL" align="center">
              <b-card-text align="left">
                <h5>Matrícula</h5>
                <strong>
                  <i class="fas fa-university fa-lg mr-1"></i
                  >Universidade:</strong
                >
                {{ user.university }}
                <br />
                <strong>
                  <i class="fas fa-building fa-lg mr-1"></i>Faculdade:</strong
                >
                {{ user.college }}
                <br />
                <strong> <i class="fas fa-city fa-lg mr-1"></i>Campus:</strong>
                {{ user.campus }}
                <br />
                <br />
                <h5>Inscrições</h5>
                <strong>
                  <i class="fas fa-book-open fa-lg mr-1"></i>Curso:</strong
                >
                <br />
                <strong>
                  <i class="fas fa-file-alt fa-lg mr-1"></i>Unidades
                  Curriculares:</strong
                >
                <br /><br />
                <strong>
                  <i class="fas fa-chalkboard-teacher fa-lg mr-1"></i
                  >Turma:</strong
                >
                <br />
                <br />
                <br />
              </b-card-text>
              <br />
              <b-button
                variant="outline-primary"
                style="float: right"
                class="p-2 mr-2"
                :to="{ name: 'home' }"
              >
                <i class="fas fa-undo"></i> VOLTAR
              </b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </section>
</template>

<script>
import { AUTH_LOGOUT_SUCCESS } from "@/store/auth/auth.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import { mapGetters } from "vuex";
import router from "@/router";
export default {
  components: {
    HeaderPage
  },
  data: function() {
    return {
      avatar: {}
    };
  },
  computed: {
    ...mapGetters({ user: "auth/getProfile" })
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
