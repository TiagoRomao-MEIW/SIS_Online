import courseService from "@/api/course.service";
import {
  // Actions
  FETCH_COURSES,
  ADD_COURSE,
  EDIT_COURSE,
  REMOVE_COURSE,
  // Mutations
  SET_COURSES,
  SET_MESSAGE
} from "./course.constants";

const state = {
  courses: [],
  message: ""
};

const getters = {
  getCourses: state => state.courses,

  getCourseById: state => id => {
    return state.courses.find(course => course._id === id);
  },
  getMessage: state => state.message
};

const actions = {
  [FETCH_COURSES]: async ({ commit, rootState }) => {
    return new Promise((resolve, reject) => {
      courseService.getCourses(rootState.auth.token).then(
        res => {
          commit(SET_COURSES, res.body);
          resolve(res);
        },
        err => {
          commit(SET_MESSAGE, err.message);
          reject(err);
        }
      );
    });
  },
  [ADD_COURSE]: ({ commit, rootState }, payload) => {
    return new Promise((resolve, reject) => {
      courseService.addCourse(rootState.auth.token, payload).then(
        res => {
          commit(SET_MESSAGE, "sucesso!");
          resolve(res.body);
        },
        err => {
          commit(SET_MESSAGE, err.message);
          reject(err);
        }
      );
    });
  },
  [EDIT_COURSE]: ({ rootState }, payload) => {
    return new Promise((resolve, reject) => {
      courseService
        .editCourse(rootState.auth.token, payload)
        .then(res => resolve(res), err => reject(err));
    });
  },
  [REMOVE_COURSE]: ({ commit, rootState }, id) => {
    return new Promise((resolve, reject) => {
      courseService.removeCourse(rootState.auth.token, id).then(
        res => {
          commit(SET_MESSAGE, "sucesso!");
          resolve(res);
        },
        err => reject(err)
      );
    });
  }
};

export const mutations = {
  [SET_COURSES]: (state, courses) => {
    state.courses = courses;
  },
  [SET_MESSAGE]: (state, message) => {
    state.message = message;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
