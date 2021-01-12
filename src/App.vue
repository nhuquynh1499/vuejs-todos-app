<template>
<div id="app">
    <todo-list></todo-list>
</div>
</template>

<script>
import TodoList from './components/TodoList';

export default {
  components: {
    TodoList
  }
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
</style>
