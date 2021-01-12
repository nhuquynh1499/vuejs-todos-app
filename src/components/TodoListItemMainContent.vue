<template>
    <div class="todo-list-item-mainContent">
        <span v-bind:class="{ completed: todo.isCompleted }"> {{ todo.content }} </span>

        <div v-bind:class="{ actived: todo._id === activeId, inputUpdate: true}">
            <input 
                type="text" 
                v-model="valueInputUpdate" 
                v-on:keyup.enter="updateItem(todo._id)"/>
            <button v-on:click="updateItem(todo._id)">Ok</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoListItemMainContent",
    props: {
        todo: Object, 
        activeId: String
    },

    data() {
        return {
            valueInputUpdate: this.todo.content,
        }
    },

    methods: {
        updateItem(id) {
            this.$emit('updateItem', id, this.valueInputUpdate);
        }
    }   
}
</script>

<style lang="scss" scoped>
    .todo-list-item-mainContent {
        position: relative;

        .inputUpdate {
            display: none;
        }

        .inputUpdate.actived {
            display: flex;
            position: absolute;
            top: 0;
            
        }

        .completed {
            text-decoration: line-through;
            color: #b2b2b2;
        }
    }

</style>