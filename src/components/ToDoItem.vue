<template>
    <li :class="{ completed: isCompleted }">
        <CheckBox 
            :todo="todo"
            @checkDone="checkDone"
        ></CheckBox>
        <MainContent 
            :todo="todo"
            :activeId="activeId"
            @updateItem="updateItem"
        ></MainContent>
        <img src="../assets/edit.svg" @click="openInputEdit(todo._id)"/>
        <img src="../assets/delete.svg" @click="removeItem(todo._id)"/>
    </li>   
</template>

<script>
import MainContent from './MainContent.vue';
import CheckBox from './CheckBox.vue';

export default {
    props: ['todo', 'activeId'],

    components: {
        MainContent,
        CheckBox
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
        img {
            width: 24px;
        }
    }
    .completed {
        span {
            text-decoration: line-through;
            color: #b2b2b2;
        }
    }
</style>