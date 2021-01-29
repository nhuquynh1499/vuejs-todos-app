<template>
  <Header></Header>
  <div class="todo-list">
    <h1 class="title">todo list</h1>
    <template v-if="isAuthenticated">
      <todo-list-input-add></todo-list-input-add>
      <ul>
        <todo-list-item
          v-for="todo in sortTodos"
          :key="todo.id"
          :todo="todo"
        >
        </todo-list-item>
      </ul>
      <todo-list-summary></todo-list-summary>
    </template>
    <p v-else> Vui lòng đăng nhập!!!</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Header from "./layouts/Header";
import TodoListItem from "./TodoListItem";
import TodoListInputAdd from "./TodoListInputAdd";
import TodoListSummary from "./TodoListSummary";

export default {
  name: "TodoList",
  components: {
    Header,
    TodoListItem,
    TodoListInputAdd,
    TodoListSummary,
  },

  methods: {
    ...mapActions(["getTodosList"]),
  },

  created() {
    this.getTodosList();
  },

  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["sortTodos", "getTodoItemById"]),
    ...mapGetters(["isAuthenticated"]),

  },
};
</script>

<style lang="scss" scoped>
.title {
  text-transform: uppercase;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

ul {
  list-style-type: none;
}

p {
  margin: 10px 0px;
  text-align: center;
}

</style>
