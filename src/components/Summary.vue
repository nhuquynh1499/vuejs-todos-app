<template>
    <p>Doing: {{ doingList }}</p>
    <p>Completed: {{ completedList }}</p>
    <p>{{ todos }}</p>

</template>

<script>
export default {
    props: ["todos"],
    data() {
        return {
            doingList: this.todos.filter((item) => !item.isCompleted),
            completedList: this.todos.filter((item) => item.isCompleted)
        }
    }
}
</script>

<style scoped>

</style>