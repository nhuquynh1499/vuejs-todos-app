<template>
<div class="todo-list-summary">
    <p>All: {{ todosCount }}</p>
    <p>Doing: {{ doingTodosCount }}</p>
    <p>Completed: {{ completedTodosCount }}</p>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "TodoListSummary",

    computed: {
        ...mapGetters(['todosCount','completedTodosCount', 'doingTodosCount']),
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