import programService from "@/api/program.service";
import {
  // Actions
  FETCH_PROGRAMS,
  ADD_PROGRAM,
  EDIT_PROGRAM,
  REMOVE_PROGRAM,
  // Mutations
  SET_PROGRAMS,
  SET_MESSAGE
} from "./program.constants";

const state = {
  programs: [],
  message: ""
};

const getters = {
  getPrograms: state => state.programs,
  getProgramById: state => id => {
    return state.programs.find(program => program._id === id);
  },
  getMessage: state => state.message
};

const actions = {
  [FETCH_PROGRAMS]: async ({ commit, rootState }) => {
    return new Promise((resolve, reject) => {
      programService.getPrograms(rootState.auth.token).then(
        res => {
          commit(SET_PROGRAMS, res.body);
          resolve(res);
        },
        err => {
          commit(SET_MESSAGE, err.message);
          reject(err);
        }
      );
    });
  },
  [ADD_PROGRAM]: ({ commit, rootState }, payload) => {
    return new Promise((resolve, reject) => {
      programService.addProgram(rootState.auth.token, payload).then(
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
  [EDIT_PROGRAM]: ({ rootState }, payload) => {
    return new Promise((resolve, reject) => {
      programService
        .editProgram(rootState.auth.token, payload)
        .then(res => resolve(res), err => reject(err));
    });
  },
  [REMOVE_PROGRAM]: ({ commit, rootState }, id) => {
    return new Promise((resolve, reject) => {
      programService.removeProgram(rootState.auth.token, id).then(
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
  [SET_PROGRAMS]: (state, programs) => {
    state.programs = programs;
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
