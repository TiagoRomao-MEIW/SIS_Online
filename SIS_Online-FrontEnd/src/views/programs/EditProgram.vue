<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Editar Curso" />
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="update">
            <div class="form-group">
              <input
                v-model="program.program"
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
                v-model="program.degree"
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
                v-model="program.type"
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
                v-model="program.sci_field"
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
                v-model="program.acad_year"
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
              <i class="fas fa-save"></i> ATUALIZAR
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
      <!-- <pre>{{$data}}</pre> -->
    </b-container>
  </section>
</template>

<script>
import { EDIT_PROGRAM } from "@/store/programs/program.constants";
import router from "@/router";
import HeaderPage from "@/components/HeaderPage.vue";
import { mapGetters } from "vuex";

export default {
  name: "EditProgram",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      program: {}
    };
  },
  computed: {
    ...mapGetters("program", ["getProgramById", "getMessage"])
  },
  methods: {
    update() {
      this.$store.dispatch(`program/${EDIT_PROGRAM}`, this.$data.program).then(
        () => {
          this.$alert(this.getMessage, "Curso atualizado!", "success");
          router.push({ name: "listPrograms" });
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
    this.program = this.getProgramById(this.$route.params.programId);
  }
};
</script>
