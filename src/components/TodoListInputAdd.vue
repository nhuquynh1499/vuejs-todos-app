<template>
    <div class="addNewTask">
        <input 
            placeholder="Enter a new task" 
            type="text" 
            v-model="newTodo" 
            @keyup.enter="addItem(newTodo)"
        /> 
    </div>
</template>

<script>
export default {
    name: "TodoListInputAdd",

    data() {
        return {
            newTodo: "",
        }
    },
    methods: {
        addItem(value) {
            this.$store.commit('addItem', value)
            this.newTodo = "";
        }
    }
}
</script>

<style lang="scss" scoped>
    .addNewTask {
        margin-top: 10px;
        margin-bottom: 10px;
        input {
            width: 100%;
            padding: 10px;
        }
    }
</style>