<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Editar Unidade Curricular" />
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="update">
            <div class="form-group">
              <input
                v-model="course.course"
                type="text"
                class="form-control"
                id="txtName"
                placeholder="nome da UC"
                required
              />
            </div>

            <div class="form-group">
              <select
                id="sltSem"
                class="form-control form-control-lg"
                v-model="course.semester"
                required
              >
                <option value>-- SELECIONA SEMESTRE --</option>
                <option value="Primeiro">PRIMEIRO</option>
                <option value="Segundo">SEGUNDO</option>
                <option value="Anual">ANUAL</option>
              </select>
            </div>

            <div class="form-group">
              <input
                v-model="course.credits"
                type="text"
                min="0"
                onmouseenter="(this.type='number')"
                onmouseleave="(this.type='text')"
                class="form-control form-control-lg"
                id="txtCred"
                placeholder="nº de créditos"
              />
            </div>
            <div class="form-group">
              <input
                v-model="course.sci_field"
                type="text"
                class="form-control"
                id="txtSciField"
                placeholder="área científica"
              />
            </div>

            <button type="submit" class="btn btn-outline-success mr-2">
              <i class="fas fa-save"></i> ATUALIZAR
            </button>
            <router-link
              :to="{ name: 'listCourses' }"
              tag="button"
              class="btn btn-outline-danger"
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
import { EDIT_COURSE } from "@/store/courses/course.constants";
import router from "@/router";
import HeaderPage from "@/components/HeaderPage.vue";
import { mapGetters } from "vuex";

export default {
  name: "EditCourse",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      course: {}
    };
  },
  computed: {
    ...mapGetters("course", ["getCourseById", "getMessage"])
  },
  methods: {
    update() {
      this.$store.dispatch(`course/${EDIT_COURSE}`, this.$data.course).then(
        () => {
          this.$alert(this.getMessage, "Curso atualizado!", "success");
          router.push({ name: "listCourses" });
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    },
    setPlaceHolder: index => {
      return `insira a ${index}ª resposta`;
    }
  },
  created() {
    this.course = this.getCourseById(this.$route.params.courseId);
  }
};
</script>
