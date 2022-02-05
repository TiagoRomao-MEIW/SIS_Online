<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Gestão de Cursos" />
      <b-row class="mb-4">
        <b-col cols="1"></b-col>
        <b-col>
          <router-link
            :to="{ name: 'addProgram' }"
            tag="button"
            class="btn btn-outline-success mr-2 mt-2"
            ><i class="fas fa-plus-square"></i> ADICIONAR CURSO</router-link
          >
          <router-link
            :to="{ name: 'admin' }"
            tag="button"
            class="btn btn-outline-info mr-2 mt-2"
            ><i class="fas fa-bars"></i> MENU PRINCIPAL</router-link
          >
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <b-row>
        <b-col cols="1"></b-col>
        <b-col>
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">
                  CURSO
                  <i
                    class="fas fa-arrow-up"
                    v-if="sortType === 1"
                    @click="sort()"
                  ></i>
                  <i class="fas fa-arrow-down" v-else @click="sort()"></i>
                </th>
                <th scope="col">GRAU</th>
                <th scope="col">TIPO DE OFERTA</th>
                <th scope="col">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="program of programs" :key="program._id">
                <td class="pt-4">{{ program.program }}</td>
                <td class="pt-4">{{ program.degree }}</td>
                <td class="pt-4">{{ program.type }}</td>
                <td>
                  <router-link
                    :to="{
                      name: 'editProgram',
                      params: { programId: program._id }
                    }"
                    tag="button"
                    class="btn btn-outline-success mr-2"
                    ><i class="fas fa-edit"></i> EDITAR</router-link
                  >
                  <button
                    @click="viewProgram(program._id)"
                    type="button"
                    class="btn btn-outline-warning mr-2"
                  >
                    <i class="fas fa-search"></i> VER
                  </button>
                  <button
                    @click="removeProgram(program._id)"
                    type="button"
                    class="btn btn-outline-danger mr-2"
                  >
                    <i class="fas fa-trash-alt"></i> REMOVER
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import {
  FETCH_PROGRAMS,
  REMOVE_PROGRAM
} from "@/store/programs/program.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import { mapGetters } from "vuex";
import router from "@/router";

export default {
  name: "ListPrograms",
  components: {
    HeaderPage
  },
  data: function() {
    return {
      programs: [],
      sortType: 1
    };
  },
  computed: {
    ...mapGetters("program", ["getPrograms", "getMessage"])
  },
  methods: {
    fetchPrograms() {
      this.$store.dispatch(`program/${FETCH_PROGRAMS}`).then(
        () => {
          this.programs = this.getPrograms;
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    },
    sort() {
      this.programs.sort(this.compareNames);
      this.sortType *= -1;
    },
    compareNames(u1, u2) {
      if (u1.program > u2.program) return 1 * this.sortType;
      else if (u1.program < u2.program) return -1 * this.sortType;
      else return 0;
    },
    viewProgram(id) {
      const program = this.programs.find(program => program._id === id);
      this.$fire({
        title: "CURSO",
        html: this.generateTemplate(program)
      });
    },
    generateTemplate(program) {
      let response = `
          <br/>
          <p><b>Nome:</b> ${program.program}</p>
          <p><b>Grau:</b> ${program.degree}</p>
          <p><b>Tipo de Oferta:</b> ${program.type}</p>
          <p><b>Área Científica:</b> ${program.sci_field}</p>
          <p><b>Ano Letivo:</b> ${program.acad_year}</p>
          
          `;
      return response;
    },
    removeProgram(id) {
      this.$confirm(
        "Se sim, clique em OK",
        "Deseja mesmo remover o curso?",
        "warning",
        { confirmButtonText: "OK", cancelButtonText: "Cancelar" }
      ).then(
        () => {
          this.$store.dispatch(`program/${REMOVE_PROGRAM}`, id).then(() => {
            this.$alert(this.getMessage, "Curso removido!", "success");
            this.fetchPrograms();
          });
        },
        () => {
          this.$alert("Remoção cancelada!", "Informação", "info");
          router.push({ name: "admin" });
        }
      );
    }
  },
  created() {
    this.fetchPrograms();
  }
};
</script>
<style>
.green {
  color: green;
}

.red {
  color: red;
}
</style>
