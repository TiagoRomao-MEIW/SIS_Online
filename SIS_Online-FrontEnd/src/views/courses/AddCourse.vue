<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Adicionar Unidade Curricular" />
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="add">
            <div class="form-group">
              <input
                v-model="course"
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
                v-model="semester"
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
                v-model="credits"
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
                v-model="sci_field"
                type="text"
                class="form-control"
                id="txtSciField"
                placeholder="área científica"
              />
            </div>
            <button type="submit" class="btn btn-outline-success mr-2">
              <i class="fas fa-save"></i> GRAVAR UC
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
import { ADD_COURSE } from "@/store/courses/course.constants";
import router from "@/router";
import HeaderPage from "@/components/HeaderPage.vue";
import { mapGetters } from "vuex";

export default {
  name: "AddCourse",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      course: "",
      semester: "",
      credits: "",
      sci_field: ""
    };
  },
  computed: {
    ...mapGetters("course", ["getMessage"])
  },
  methods: {
    add() {
      this.$store.dispatch(`course/${ADD_COURSE}`, this.$data).then(
        () => {
          this.$alert(
            this.getMessage,
            "Unidade Curricular adicionado!",
            "success"
          );
          router.push({ name: "listCourses" });
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    },
    setPlaceHolder: index => {
      return `insira a ${index}ª resposta`;
    },
    addAnswer() {
      this.answers.push({ title: "", description: "", correct: false });
    },
    removeAnswer(index) {
      this.answers.splice(index, 1);
    }
  }
};
</script>
