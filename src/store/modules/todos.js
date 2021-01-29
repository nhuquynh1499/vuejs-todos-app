import {
  MARK_COMPLETE,
  SET_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
} from "../mutation-types";
const shortid = require("shortid");
import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  getTodoItemById: (state) => (id) => {
    return state.todos.find((todo) => todo.id === id);
  },

  completedTodos: (state) => {
    return state.todos.filter((todo) => todo.isCompleted);
  },

  doingTodos: (state) => {
    return state.todos.filter((todo) => !todo.isCompleted);
  },

  todosCount: (state) => {
    return state.todos.length;
  },

  completedTodosCount: (state, getters) => {
    return getters.completedTodos.length;
  },

  doingTodosCount: (state, getters) => {
    return getters.doingTodos.length;
  },

  sortTodos: (state) => {
    const sortList = [...state.todos];
    return sortList.sort(
      (a, b) => Number(a.isCompleted) - Number(b.isCompleted)
    );
  },
};

const mutations = {
  [MARK_COMPLETE](state, id) {
    state.todos = state.todos.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
  },

  [SET_TODOS](state, newToDo) {
    state.todos = newToDo;
  },

  [ADD_TODO](state, newToDo) {
    state.todos = [...state.todos, newToDo];
  },

  [REMOVE_TODO](state, id) {
    state.todos = state.todos.filter((item) => item.id !== id);
  },

  [UPDATE_TODO](state, payload) {
    state.todos = state.todos.map((item) => {
      if (item.id === payload.id) {
        item.content = payload.content;
      }
      return item;
    });
  },
};

const actions = {
  getTodosList: {
    root: true,
    handler({ commit }) {
      axios
        .get("http://localhost:3000/todos")
        .then((response) => {
          commit("SET_TODOS", response.data);
        })
        .catch((err) => console.log(err));
    },
  },

  addNewTodo({ commit }, content) {
    axios
      .post("http://localhost:3000/todos", {
        id: shortid.generate(),
        content: content.trim(),
        isCompleted: false,
      })
      .then((response) => {
        commit("ADD_TODO", response.data);
      })
      .catch((err) => console.log(err));
  },
  markTodoCompleted({ commit, getters }, id) {
    const todoItem = getters.getTodoItemById(id);
    axios
      .put("http://localhost:3000/todos/" + id, {
        isCompleted: !todoItem.isCompleted,
        content: todoItem.content,
      })
      .then(() => {
        commit("MARK_COMPLETE", id);
      })
      .catch((err) => console.log(err));
  },
  updateTodosItem({ commit }, payload) {
    axios
      .put("http://localhost:3000/todos/" + payload.id, payload)
      .then(() => {
        commit("UPDATE_TODO", payload);
      })
      .catch((err) => console.log(err));
  },

  deleteTodoItem({ commit }, id) {
    axios
      .delete("http://localhost:3000/todos/" + id)
      .then(() => {
        commit("REMOVE_TODO", id);
      })
      .catch((err) => console.log(err));
  },
};

export default { state, getters, mutations, actions };
