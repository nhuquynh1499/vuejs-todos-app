import { createStore } from "vuex";

const store = new createStore({
  state: {
    todos: localStorage.todos ? JSON.parse(localStorage.getItem("todos")) : [],
  },
  mutations: {
    checkDone(state, id) {
      state.todos = state.todos.map((item) => {
        if (item._id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
    },
  },
  getters: {
    completedTodos(state) {
      return state.todos.filter((todo) => todo.isCompleted);
    },

    doingTodos(state) {
      return state.todos.filter((todo) => !todo.isCompleted);
    },
  },
  actions: {},
  modules: {},
});

export default store;
