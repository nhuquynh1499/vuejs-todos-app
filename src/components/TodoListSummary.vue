<template>
<div class="todo-list-summary">
    <p>Doing: {{ doingList.length }}</p>
    <p>Completed: {{ completedList.length }}</p>
</div>
</template>

<script>
export default {
    name: "TodoListSummary",
    props: {
        todos: Array, 
    },
    data() {
        return {
            doingList: this.todos.filter((item) => !item.isCompleted),
            completedList: this.todos.filter((item) => item.isCompleted)
        }
    },

    watch: {
        todos: function() {
            this.doingList =  this.todos.filter((item) => !item.isCompleted),
            this.completedList = this.todos.filter((item) => item.isCompleted)
        }
    }
}
</script>

<style scoped>
    .todo-list-summary {
        display: flex;
        justify-content: space-evenly;
    }
</style>