<template>
  <section class="page-section">
    <b-container fluid>
      <HeaderPage title="SIS Online" />

      <b-row v-if="getUserType === 'admin'">
        <b-col cols="3"></b-col>
        <b-col cols="6">
          <b-card-group deck>
            <AdminOptionBox
              routeName="listTeacher"
              iconName="graduation-cap"
              title="Professores"
            />
            <AdminOptionBox
              routeName="listStudent"
              iconName="user-graduate"
              title="Estudantes"
            />
          </b-card-group>
          <b-card-group deck class="mt-3">
            <AdminOptionBox
              routeName="listPrograms"
              iconName="book-open"
              title="Cursos"
            />
            <AdminOptionBox
              routeName="listCourses"
              iconName="file-alt"
              title="Unidades Curriculares"
            />
          </b-card-group>

          <b-card-group deck class="mt-3">
            <AdminOptionBox
              routeName="listUsers"
              iconName="users"
              title="Utilizadores"
            />
          </b-card-group>
        </b-col>
        <b-col cols="4"></b-col>
      </b-row>
      <b-row v-if="getUserType === 'Secretaria'">
        <b-col cols="3"></b-col>
        <b-col cols="6">
          <b-card-group deck>
            <AdminOptionBox
              routeName="listTeacher"
              iconName="graduation-cap"
              title="Professores"
            />
            <AdminOptionBox
              routeName="listStudent"
              iconName="user-graduate"
              title="Estudantes"
            />
          </b-card-group>
          <b-card-group deck class="mt-3">
            <AdminOptionBox
              routeName="listPrograms"
              iconName="book-open"
              title="Cursos"
            />
            <AdminOptionBox
              routeName="listCourses"
              iconName="file-alt"
              title="Unidades Curriculares"
            />
          </b-card-group>
        </b-col>
        <b-col cols="4"></b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import HeaderPage from "@/components/HeaderPage.vue";
import AdminOptionBox from "@/components/AdminOptionBox.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    HeaderPage,
    AdminOptionBox
  },
  computed: {
    ...mapGetters(["getUserLevelByPoints"]),
    ...mapGetters("auth", [
      "isUserLoggedIn",
      "getProfileName",
      "getUserType",
      "getProfile"
    ])
  }
};
</script>
