<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Gestão de Unidades Curriculares" />
      <b-row class="mb-4">
        <b-col cols="1"></b-col>
        <b-col>
          <router-link
            :to="{ name: 'addCourse' }"
            tag="button"
            class="btn btn-outline-success mr-2 mt-2"
            ><i class="fas fa-plus-square"></i> ADICIONAR UC</router-link
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
                  UNIDADE CURRICULAR
                  <i
                    class="fas fa-arrow-up"
                    v-if="sortType === 1"
                    @click="sort()"
                  ></i>
                  <i class="fas fa-arrow-down" v-else @click="sort()"></i>
                </th>
                <th scope="col">SEMESTRE</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="course of courses" :key="course._id">
                <td class="pt-4">{{ course.course }}</td>
                <td class="pt-4">{{ course.semester }}</td>
                <td class="pt-4">{{ course.credits }}</td>
                <td>
                  <router-link
                    :to="{
                      name: 'editCourse',
                      params: { courseId: course._id }
                    }"
                    tag="button"
                    class="btn btn-outline-success mr-2"
                    ><i class="fas fa-edit"></i> EDITAR</router-link
                  >
                  <button
                    @click="viewCourse(course._id)"
                    type="button"
                    class="btn btn-outline-warning mr-2"
                  >
                    <i class="fas fa-search"></i> VER
                  </button>
                  <button
                    @click="removeCourse(course._id)"
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
import { FETCH_COURSES, REMOVE_COURSE } from "@/store/courses/course.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import { mapGetters } from "vuex";
import router from "@/router";

export default {
  name: "ListCourses",
  components: {
    HeaderPage
  },
  data: function() {
    return {
      courses: [],
      sortType: 1
    };
  },
  computed: {
    ...mapGetters("course", ["getCourses", "getMessage"])
  },
  methods: {
    fetchCourses() {
      this.$store.dispatch(`course/${FETCH_COURSES}`).then(
        () => {
          this.courses = this.getCourses;
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    },
    sort() {
      this.courses.sort(this.compareNames);
      this.sortType *= -1;
    },
    compareNames(u1, u2) {
      if (u1.course > u2.course) return 1 * this.sortType;
      else if (u1.course < u2.course) return -1 * this.sortType;
      else return 0;
    },
    viewCourse(id) {
      const course = this.courses.find(course => course._id === id);
      this.$fire({
        title: "UNIDADE CURRICULAR",
        html: this.generateTemplate(course)
      });
    },
    generateTemplate(course) {
      let response = `
          <p><b>Nome:</b> ${course.course}</p>
          <p><b>Grau:</b> ${course.semester}</p>
          <p><b>Tipo de Oferta:</b> ${course.credits}</p>
          <p><b>Área Científica:</b> ${course.sci_field}</p>
          
          
          `;
      return response;
    },
    removeCourse(id) {
      this.$confirm(
        "Se sim, clique em OK",
        "Deseja mesmo remover a UC?",
        "warning",
        { confirmButtonText: "OK", cancelButtonText: "Cancelar" }
      ).then(
        () => {
          this.$store.dispatch(`course/${REMOVE_COURSE}`, id).then(() => {
            this.$alert(this.getMessage, "UC removida!", "success");
            this.fetchCourses();
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
    this.fetchCourses();
  }
};
</script>
