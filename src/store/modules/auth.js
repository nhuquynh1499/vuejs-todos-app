import { TOGGLE_AUTH } from "../mutation-types";

const state = {
  auth: { isAuthenticated: false }
};

const getters = {
  isAuthenticated: (state) => {
    return state.auth.isAuthenticated;
  },
};

const mutations = {
  [TOGGLE_AUTH](state) {
    state.auth.isAuthenticated = !state.auth.isAuthenticated;
  },
};

const actions = {}


export default { state, getters, mutations, actions };