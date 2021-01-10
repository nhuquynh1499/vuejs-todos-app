<template>
  <div class="">
    <input type="text" v-model="newTodo"/> 
    <button @click="addItem">OK</button>

  </div>

  <ul>
    <ToDoItem v-for="todo in todos" 
      :key="todo._id" 
      :_id="todo._id"
      :activeId="activeId"
      :content="todo.content"
      :isCompleted="todo.isCompleted"
      @openInputEdit="openInputEdit"
      @removeItem="removeItem"
    >
    </ToDoItem>
  </ul>
</template>

<script>
import ToDoItem from './components/ToDoItem.vue';
const shortid = require('shortid');

export default {
  components: {
    ToDoItem
  },
  data() {
    return {
      name: "Quynh",
      newTodo: "",
      activeId: "9897ecfd-9244-4c53-af2f-9fd1c4db2d48",
      todos: [{
        _id: "1789db9a-2a3b-453e-87e4-a6749c5f2f7e",
        content: "Learn English",
        isCompleted: true,
      }, {
        _id: "eb5332b1-d9f1-4af2-8118-e71eb909b350",
        content: "Go to market",
        isCompleted: true,
      }, {
        _id: "97fe55b0-15b5-4262-99b1-588c77c10aa1",
        content: "Buy something",
        isCompleted: false,
      }, {
        _id: "9897ecfd-9244-4c53-af2f-9fd1c4db2d48",
        content: "Cook a dinner",
        isCompleted: false,
      }]
    }
  },
  methods: {
    addItem() {
      const id = shortid.generate();
      const newItem = {
        _id: id,
        content: this.newTodo,
        isCompleted: false
      }
      this.todos.push(newItem);
    },

    openInputEdit(id) {
      this.activeId = id
    },

    removeItem(id) {
      this.todos = this.todos.filter(item => item._id !== id)
    }
  },
}
</script>

<style>
ul {
  list-style-type: none;
}
</style>
