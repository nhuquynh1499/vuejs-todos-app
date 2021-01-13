<template>
<div class="todo-list-summary">
    <p>All: {{ todos.length }}</p>
    <p>Doing: {{ doingTodos.length }}</p>
    <p>Completed: {{ completedTodos.length }}</p>
</div>
</template>

<script>
export default {
    name: "TodoListSummary",

    computed: {
        todos() {
            return this.$store.state.todos;
        },

        completedTodos() {
            return this.$store.getters.completedTodos;
        },

        doingTodos() {
            return this.$store.getters.doingTodos;
        },
    },
}
</script>

<style scoped>
    .todo-list-summary {
        display: flex;
        justify-content: space-evenly;
        margin-top: 50px;
        margin-bottom: 20px;
    }
</style>