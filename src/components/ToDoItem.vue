<template>
    <li :class="{ completed: isCompleted }">
        <CheckBox 
            :_id="_id"
            :isCompleted="isCompleted"
            @checkDone="checkDone"
        ></CheckBox>
        <MainContent 
            :_id="_id"
            :content="content"
            :activeId="activeId"
            :isCompleted="isCompleted"
        ></MainContent>
        <img src="../assets/edit.svg" @click="openInputEdit(_id)"/>
        <img src="../assets/delete.svg" @click="removeItem(_id)"/>
    </li>   
</template>

<script>
import MainContent from './MainContent.vue';
import CheckBox from './CheckBox.vue';

export default {
    props: ['_id', 'content', 'isCompleted', 'activeId'],

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