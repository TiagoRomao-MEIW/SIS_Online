<template>
  <section class="page-section">
    <b-container fluid>
      <HeaderPage title="Gestão de Utilizadores" />
      <b-row class="mb-4">
        <b-col cols="1"></b-col>
        <b-col>
          <router-link
            :to="{ name: 'addUser' }"
            tag="button"
            class="btn btn-outline-success mr-2 mt-2"
            ><i class="fas fa-plus-square"></i> ADICIONAR
            UTILIZADOR</router-link
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
                  NOME
                  <i
                    class="fas fa-arrow-up"
                    v-if="sortType === 1"
                    @click="sort()"
                  ></i>
                  <i class="fas fa-arrow-down" v-else @click="sort()"></i>
                </th>
                <th scope="col">
                  TIPO
                  <i
                    class="fas fa-arrow-up"
                    v-if="sortType2 === 1"
                    @click="sort2()"
                  ></i>
                  <i class="fas fa-arrow-down" v-else @click="sort2()"></i>
                </th>
                <th scope="col">UNIVERSIDADE</th>
                <th scope="col">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user of users" :key="user._id">
                <td class="pt-4">{{ user.name }}</td>
                <td class="pt-4">{{ user.type }}</td>
                <td class="pt-4">{{ user.university }}</td>
                <td>
                  <router-link
                    :to="{ name: 'editUser', params: { userId: user._id } }"
                    tag="button"
                    class="btn btn-success mr-2"
                    ><i class="fas fa-edit"></i> EDITAR</router-link
                  >
                  <router-link
                    :to="{ name: 'enrollUser', params: { userId: user._id } }"
                    tag="button"
                    class="btn btn-secondary mr-2"
                    ><i class="fas fa-edit"></i> INSCRIÇÕES</router-link
                  >
                  <button
                    @click="viewUser(user._id)"
                    type="button"
                    class="btn btn-info mr-2"
                  >
                    <i class="fas fa-search"></i> VER
                  </button>
                  <button
                    @click="removeUser(user._id)"
                    type="button"
                    class="btn btn-danger mr-2"
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
import { FETCH_USERS, REMOVE_USER } from "@/store/users/user.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import { mapGetters } from "vuex";

export default {
  name: "ManageUsers",
  components: {
    HeaderPage
  },
  data: function() {
    return {
      users: [],
      sortType: 1,
      sortType2: 1
    };
  },
  computed: {
    ...mapGetters(["getUserLevelByPoints"]),
    ...mapGetters("user", ["getUsers", "getMessage", "getUserType"])
  },
  methods: {
    fetchUsers() {
      this.$store.dispatch(`user/${FETCH_USERS}`).then(
        () => {
          this.users = this.getUsers;
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    },
    sort() {
      this.users.sort(this.compareNames);
      this.sortType *= -1;
    },
    compareNames(u1, u2) {
      if (u1.name > u2.name) return 1 * this.sortType;
      else if (u1.name < u2.name) return -1 * this.sortType;
      else return 0;
    },

    sort2() {
      this.users.sort(this.compareNames2);
      this.sortType2 *= -1;
    },
    compareNames2(u1, u2) {
      if (u1.type > u2.type) return 1 * this.sortType2;
      else if (u1.type < u2.type) return -1 * this.sortType2;
      else return 0;
    },

    viewUser(id) {
      const user = this.users.find(user => user._id === id);
      this.$fire({
        title: user.auth.username,
        html: this.generateTemplate(user)
      });
    },
    generateTemplate(user) {
      let response = `
          <h5>${user.name}</h5>
          <p>
          <b>Nome:</b> ${user.name} <br>
          <b>Tipo de utilizador:</b> ${user.type}<br> <br>
          <b>Número de BI:</b> ${user.BI} <br>
          <b>Número de Identificação Fiscal (NIF):</b> ${user.NIF} <br>
          
          <b>Data de nascimento:</b> ${this.formatDate(user.birth_date)}<br><br>
          <b>Cursos:</b> ${user.programID} <br>
          <b>UC:</b> ${user.courseID} <br><br>
          
          <b>Universidade:</b> ${user.university} <br>
          <b>Faculdade:</b> ${user.college} <br>
          <b>Campus:</b> ${user.campus} <br>
      
          </p>
        `;
      return response;
    },
    formatDate: d => {
      const newDate = new Date(Date.parse(d));
      return (
        newDate.getFullYear() +
        "-" +
        (newDate.getMonth() + 1) +
        "-" +
        newDate.getDate() +
        " " +
        newDate.getHours() +
        ":" +
        newDate.getMinutes() +
        ":" +
        newDate.getSeconds()
      );
    },
    removeUser(id) {
      this.$confirm(
        "Se sim, clique em OK",
        "Deseja mesmo remover o utilizador?",
        "warning",
        { confirmButtonText: "OK", cancelButtonText: "Cancelar" }
      ).then(
        () => {
          this.$store.dispatch(`user/${REMOVE_USER}`, id).then(() => {
            this.$alert(this.getMessage, "Utilizador removido!", "success");
            this.fetchUsers();
          });
        },
        () => {
          this.$alert("Remoção cancelada!", "Informação", "info");
        }
      );
    }
  },
  created() {
    this.fetchUsers();
  }
};
</script>
