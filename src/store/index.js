import { createStore } from "vuex";

// Import modules
import auth from "./modules/auth";
import todos from "./modules/todos"

const store = new createStore({
  modules: {
    auth,
    todos,
  },
});

export default store;
