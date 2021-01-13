import { createStore } from "vuex";

const store = new createStore({
  state: {
    todos: localStorage.todos ? JSON.parse(localStorage.getItem("todos")) : [],
  },
  mutations: {
    update() {},
  },
  getters: {
    completedTodos(state) {
      return state.todos.filter((todo) => todo.isCompleted);
    },

    doingTodos(state) {
      return state.todos.filter((todo) => !todo.isCompleted);
    }
  },
  actions: {},
  modules: {},
});

export default store;
