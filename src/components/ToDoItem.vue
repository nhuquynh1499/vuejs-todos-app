<template>
    <li :class="{ completed: isCompleted }">
        <checkbox 
            :todo="todo"
            @checkDone="checkDone"
        ></checkbox>
        <main-content 
            :todo="todo"
            :activeId="activeId"
            @updateItem="updateItem"
            class="main-content"
        ></main-content>
        <img src="../assets/edit.svg" @click="openInputEdit(todo._id)"/>
        <img src="../assets/delete.svg" @click="removeItem(todo._id)"/>
    </li>   
</template>

<script>
import MainContent from "./MainContent";
import Checkbox from "./Checkbox";

export default {
    props: {
        todo: Array, 
        activeId: String
    },

    components: {
        MainContent,
        Checkbox
    },

    methods: {
        openInputEdit(_id) {
            this.$emit('openInputEdit', _id)
        },

        removeItem(_id) {
            this.$emit('removeItem', _id)
        },

        checkDone(_id) {
            this.$emit('checkDone', _id)
        },

        updateItem(_id, value) {
            this.$emit('updateItem', _id, value)
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