import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue")
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/Admin.vue")
  },
  {
    path: "/admin/programs",
    name: "listPrograms",
    component: () => import("@/views/programs/ListPrograms.vue")
  },
  {
    path: "/admin/programs/add",
    name: "addProgram",
    component: () => import("@/views/programs/AddProgram.vue")
  },
  {
    path: "/admin/programs/:programId",
    name: "editProgram",
    component: () => import("@/views/programs/EditProgram.vue")
  },
  {
    path: "/admin/courses",
    name: "listCourses",
    component: () => import("@/views/courses/ListCourses.vue")
  },
  {
    path: "/admin/courses/add",
    name: "addCourse",
    component: () => import("@/views/courses/AddCourse.vue")
  },
  {
    path: "/admin/courses/:courseId",
    name: "editCourse",
    component: () => import("@/views/courses/EditCourse.vue")
  },
  {
    path: "/admin/users",
    name: "listUsers",
    component: () => import("@/views/users/ListUsers.vue")
  },
  {
    path: "/admin/users",
    name: "listStudent",
    component: () => import("@/views/users/ListStudent.vue")
  },
  {
    path: "/admin/users",
    name: "listTeacher",
    component: () => import("@/views/users/ListTeacher.vue")
  },
  {
    path: "/admin/users/add",
    name: "addUser",
    component: () => import("@/views/users/AddUser.vue")
  },
  {
    path: "/admin/users/:userId",
    name: "editUser",
    component: () => import("@/views/users/EditUser.vue")
  },
  {
    path: "/admin/users/:userId",
    name: "enrollUser",
    component: () => import("@/views/users/EnrollUser.vue")
  },

  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/Profile.vue"),
    meta: {
      rule: "user"
    }
  },
  // Redirect to 404 page, if no match found
  {
    path: "*",
    component: () => import("@/views/Error404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
