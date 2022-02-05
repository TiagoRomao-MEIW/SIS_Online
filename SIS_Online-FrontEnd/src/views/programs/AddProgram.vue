<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Adicionar Curso" />
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="add">
            <div class="form-group">
              <input
                v-model="program"
                type="text"
                class="form-control"
                id="txtName"
                placeholder="nome do curso"
                required
              />
            </div>
            <div class="form-group">
              <select
                id="sltType"
                class="form-control form-control-lg"
                v-model="degree"
                required
              >
                <option value>-- SELECIONA GRAU --</option>
                <option value="Licenciatura">LICENCIATURA</option>
                <option value="Mestrado">MESTRADO</option>
                <option value="Doutoramento">DOUTORAMENTO</option>
              </select>
            </div>

            <div class="form-group">
              <select
                id="sltType"
                class="form-control form-control-lg"
                v-model="type"
                required
              >
                <option value>-- SELECIONA TIPO --</option>
                <option value="Presencial">Presencial</option>
                <option value="Online">Online</option>
                <option value="Misto">Misto</option>
              </select>
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
            <div class="form-group">
              <select
                id="sltType"
                class="form-control form-control-lg"
                v-model="acad_year"
                required
              >
                <option value>-- SELECIONA TIPO --</option>
                <option value="2020/2021">2020/2021</option>
                <option value="2021/2022">2021/2022</option>
                <option value="2022/2023">2022/2023</option>
                <option value="2023/2024">2023/2024</option>
              </select>
            </div>
            <button type="submit" class="btn btn-outline-success mr-2">
              <i class="fas fa-save"></i> GRAVAR CURSO
            </button>
            <router-link
              :to="{ name: 'listPrograms' }"
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
import { ADD_PROGRAM } from "@/store/programs/program.constants";
import router from "@/router";
import HeaderPage from "@/components/HeaderPage.vue";
import { mapGetters } from "vuex";

export default {
  name: "AddProgram",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      program: "",
      degree: "",
      type: "",
      sci_field: "",
      acad_year: ""
    };
  },
  computed: {
    ...mapGetters("program", ["getMessage"])
  },
  methods: {
    add() {
      this.$store.dispatch(`program/${ADD_PROGRAM}`, this.$data).then(
        () => {
          this.$alert(this.getMessage, "Curso adicionado!", "success");
          router.push({ name: "listPrograms" });
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
