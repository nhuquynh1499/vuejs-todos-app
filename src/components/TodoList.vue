<template>
<div class="todo-list">
  <h1 class="title">todo list</h1>

  <todo-list-input-add></todo-list-input-add>

  <ul>
    <todo-list-item v-for="todo in sortTodos" 
      :key="todo._id" 
      :activeId="activeId"
      :todo="todo"
    >
    </todo-list-item>
  </ul>

  <todo-list-summary></todo-list-summary>
</div>
</template>

<script>
import TodoListItem from "./TodoListItem";
import TodoListInputAdd from "./TodoListInputAdd";
import TodoListSummary from './TodoListSummary';

export default {
  name: "TodoList",
  components: {
    TodoListItem,
    TodoListInputAdd,
    TodoListSummary
  },

  mounted() {
    if(localStorage.todos) {
      this.$store.commit('setTodos',  JSON.parse(localStorage.getItem("todos")))
    }
  },
  
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    
    activeId() {
      return this.$store.state.activeId;
    },

    sortTodos() {
      return this.$store.getters.sortTodos;
    }
  },

  updated() {
    localStorage.setItem("todos", JSON.stringify(this.$store.state.todos))
  },
}
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
</style>
