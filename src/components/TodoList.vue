<template>
<div class="todo-list">
  <h1 class="title">todo list</h1>

  <todo-list-input-add @addItem="addItem"></todo-list-input-add>

  <ul>
    <todo-list-item v-for="todo in todos" 
      :key="todo._id" 
      :activeId="activeId"
      :todo="todo"
      @openInputEdit="openInputEdit"
      @removeItem="removeItem"
      @checkDone="checkDone"
      @updateItem="updateItem"
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

const shortid = require('shortid');

export default {
  name: "TodoList",
  components: {
    TodoListItem,
    TodoListInputAdd,
    TodoListSummary
  },
  data() {
    return {
      activeId: "",
    }
  },
  
  // mounted() {
  //   if (localStorage.todos) {
  //     this.todos = JSON.parse(localStorage.getItem("todos")).sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
  //   }
  // },

  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },

  updated() {
    localStorage.setItem("todos", JSON.stringify(this.todos))
    this.todos.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
  },

  methods: {
    addItem(value) {
      const id = shortid.generate();
      const newItem = {
        _id: id,
        content: value.trim(),
        isCompleted: false
      }
      this.todos.push(newItem);
    },

    openInputEdit(id) {
      this.activeId = id
    },

    removeItem(id) {
      this.todos = this.todos.filter(item => item._id !== id)
    },

    updateItem(id, value) {
      this.todos = this.todos.map(item => {
        if (item._id === id) {
          item.content = value;
        }
        return item;
      });
      this.activeId = "";
    }
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
