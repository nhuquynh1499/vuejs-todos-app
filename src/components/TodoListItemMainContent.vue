<template>
    <div class="todo-list-item-mainContent">
        <span v-bind:class="{ completed: todo.isCompleted }"> {{ todo.content }} </span>

        <div v-bind:class="{ actived: todo.id === activeId, inputUpdate: true}">
            <input 
                type="text" 
                v-model="valueInputUpdate" 
                v-on:keyup.enter="updateItem({
                    id: todo.id, 
                    content: valueInputUpdate,
                    isCompleted: todo.isCompleted
                })"/>
            <button 
                @click="updateItem({
                    id: todo.id, 
                    content: valueInputUpdate,
                    isCompleted: todo.isCompleted
                })"
            >Update</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

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
        ...mapActions(['updateTodosItem']),

        updateItem(payload) {
            this.updateTodosItem(payload)
            this.$emit("resetActiveId")
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