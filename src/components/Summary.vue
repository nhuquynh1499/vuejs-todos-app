<template>
<div class="summary">
    <p>Doing: {{ doingList.length }}</p>
    <p>Completed: {{ completedList.length }}</p>
</div>
</template>

<script>
export default {
    props: ["todos"],
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
    .summary {
        display: flex;
        justify-content: space-evenly;
    }
</style>