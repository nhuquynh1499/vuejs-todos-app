<template>
    <li :class="{ completed: todo.isCompleted }">
        <todo-list-item-checkbox :todo="todo"></todo-list-item-checkbox>
        <todo-list-item-main-content 
            :todo="todo"
            :activeId="activeId"
            class="main-content"
        ></todo-list-item-main-content>
        <img 
            src="../assets/edit.svg" 
            @click="openInputEdit(todo._id)"
        />
        <img 
            src="../assets/delete.svg" 
            @click="removeItem(todo._id)"
        />
    </li>   
</template>

<script>
import TodoListItemMainContent from "./TodoListItemMainContent";
import TodoListItemCheckbox from "./TodoListItemCheckbox";

export default {
    name: "TodoListItem",

    props: {
        todo: Object,
        activeId: String
    },

    components: {
        TodoListItemMainContent,
        TodoListItemCheckbox
    },

    methods: {
        openInputEdit(_id) {
            this.$store.commit('setActiveId', _id)
        },

        removeItem(_id) {
            this.$store.commit('removeItem', _id)
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