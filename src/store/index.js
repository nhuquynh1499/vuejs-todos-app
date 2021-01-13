import { createStore } from "vuex";
const shortid = require("shortid");

const store = new createStore({
  state: {
    todos: localStorage.todos ? JSON.parse(localStorage.getItem("todos")) : [],
    activeId: "",
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

    addItem(state, content) {
      const id = shortid.generate();
      const newItem = {
        _id: id,
        content: content.trim(),
        isCompleted: false,
      };
      state.todos.push(newItem);
    },

    removeItem(state, id) {
      state.todos = state.todos.filter((item) => item._id !== id);
    },

    setActiveId(state, id) {
      state.activeId = id;
    },

    updateItem(state, updateTodo) {
      state.todos = state.todos.map((item) => {
        if (item._id === updateTodo._id) {
          item.content = updateTodo.content;
        }
        return item;
      });

      state.activeId = "";
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
