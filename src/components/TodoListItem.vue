<template>
    <li :class="{ completed: todo.isCompleted }">
        <todo-list-item-checkbox :todo="todo"></todo-list-item-checkbox>
        <todo-list-item-main-content 
            :todo="todo"
            :activeId="activeId"
            @resetActiveId="resetActiveId"
            class="main-content"
        ></todo-list-item-main-content>
        <img 
            src="../assets/edit.svg" 
            @click="openInputEdit(todo.id)"
        />
        <img 
            src="../assets/delete.svg" 
            @click="removeItem(todo.id)"
        />
    </li>   
</template>

<script>
import TodoListItemMainContent from "./TodoListItemMainContent";
import TodoListItemCheckbox from "./TodoListItemCheckbox";
import { mapActions } from 'vuex';

export default {
    name: "TodoListItem",
    data:  function() {
        return {
            activeId: "",
        }
    },
    props: {
        todo: Object,
    },

    components: {
        TodoListItemMainContent,
        TodoListItemCheckbox
    },

    methods: {
        ...mapActions(['deleteTodoItem']),

        openInputEdit(todoId) {
            this.activeId = todoId;
        },

        resetActiveId() {
            this.activeId = "";
        },

        removeItem(todoId) {
            this.deleteTodoItem(todoId)
        }
    }
}
</script>

<style lang="scss" scoped>
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0px;
        img {
            width: 20px;
            margin-left: 10px;
            cursor: pointer;
        }

        .main-content {
            flex-grow: 2;
            margin-left: 10px;
        }
    }
    li.completed {
        span {
            text-decoration: line-through;
            color: #b2b2b2;
        }
    }
</style>