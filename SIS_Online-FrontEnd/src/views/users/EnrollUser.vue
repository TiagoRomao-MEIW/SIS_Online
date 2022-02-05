<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Editar inscrições" />
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="update">
            <div class="form-group">
              <input
                v-model="user.name"
                type="text"
                class="form-control"
                id="txtName"
                placeholder="escreve o nome do user"
                required
              />
            </div>

            <div v-if="user.courseID.length">
              <div class="row">
                <div class="col-md-9">
                  <h4>Lista de UCs</h4>
                </div>
                <div class="col-md-3">
                  <h4>Ações</h4>
                </div>
              </div>
            </div>
            <div v-for="(course, index) in user.courseID" :key="course.id">
              <div class="form-group">
                <div class="row">
                  <div class="col-md-9">
                    <select
                      v-model="course.id"
                      :key="index"
                      class="form-control"
                      required
                    >
                      <option
                        v-for="p in getCourses"
                        :key="p._id"
                        :value="p._id"
                      >
                        {{ p.course }}
                      </option>
                    </select>
                  </div>

                  <div class="col-md-3">
                    <button
                      @click="removeUC(index)"
                      type="button"
                      class="btn btn-outline-danger mr-2"
                    >
                      <i class="fas fa-trash"></i> REMOVER
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              @click="addUC"
              type="button"
              class="btn btn-outline-success mr-2"
            >
              <i class="fas fa-plus-square"></i> ADICIONAR UC
            </button>

            <button
              type="submit"
              class="btn btn-outline-success mr-2"
              :disabled="true"
            >
              <i class="fas fa-save"></i> ATUALIZAR
            </button>
            <router-link
              :to="{ name: 'admin' }"
              tag="button"
              class="btn btn-outline-danger"
            >
              <i class="fas fa-window-close"></i> CANCELAR
            </router-link>
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { EDIT_USER } from "@/store/users/user.constants";
import router from "@/router";
import HeaderPage from "@/components/HeaderPage.vue";
import { FETCH_COURSES } from "@/store/courses/course.constants";
import { mapGetters } from "vuex";

export default {
  name: "EditUC",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      user: {},
      myUC: {}
    };
  },
  computed: {
    ...mapGetters("user", ["getUsersById", "getMessage"]),
    ...mapGetters("course", ["getCourses"])
  },
  methods: {
    setPlaceHolder: index => {
      return `insira a ${index}ª resposta`;
    },
    addUC() {
      this.user.courseID.push({ id: "" });
    },
    removeUC(index) {
      this.user.courseID.splice(index, 1);
    },

    update() {
      this.$store
        .dispatch(`user/${EDIT_USER}`, this.$data.user)

        .then(
          () => {
            this.$alert(this.getMessage, "Utilizador atualizado!", "success");
            router.push({ name: "admin" });
          },
          err => {
            this.$alert(`${err.message}`, "Erro", "error");
          }
        );
    }
  },
  created() {
    this.user = this.getUsersById(this.$route.params.userId);
    this.$store.dispatch(`course/${FETCH_COURSES}`).then(
      () => {
        this.myUC = this.getCourses;
      },
      err => {
        this.$alert(`${err.message}`, "Erro", "error");
      }
    );
  }
};
</script>
