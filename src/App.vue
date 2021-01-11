<template>
<div id="app">
  <h1 class="title">todo list</h1>

  <add-new-task @addItem="addItem"></add-new-task>

  <ul>
    <todo-item v-for="todo in todos" 
      :key="todo._id" 
      :activeId="activeId"
      :todo="todo"
      @openInputEdit="openInputEdit"
      @removeItem="removeItem"
      @checkDone="checkDone"
      @updateItem="updateItem"
    >
    </todo-item>
  </ul>

  <Summary :todos="todos"></Summary>
</div>
</template>

<script>
import TodoItem from "./components/TodoItem";
import AddNewTask from "./components/AddNewTask";
import Summary from './components/Summary';


const shortid = require('shortid');

export default {
  components: {
    TodoItem,
    AddNewTask,
    Summary
  },
  data() {
    return {
      activeId: "",
      todos: [],
    }
  },
  
  mounted() {
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.getItem("todos")).sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
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

    checkDone(id) {
      this.todos = this.todos.map(item => {
        if (item._id === id) {
          item.isCompleted = !item.isCompleted
        }
        return item;
      })
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

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat";
}

#app {
  max-width: 70%;
  margin: auto;

  .title {
    text-transform: uppercase;
    text-align: center;
  }
}

ul {
  list-style-type: none;
}
</style>
