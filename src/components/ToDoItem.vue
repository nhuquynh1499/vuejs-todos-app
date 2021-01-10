<template>
    <li :class="{ completed: isCompleted }">
        <input type="checkbox" :checked="isCompleted"/> 
        <img src="../assets/edit.svg" @click="openInputEdit(_id)"/>
        <MainContent 
            :_id="_id"
            :content="content"
            :activeId="activeId"
        ></MainContent>
        <img src="../assets/delete.svg" @click="removeItem(_id)"/>
    </li>   
</template>

<script>
import MainContent from './MainContent.vue';
export default {
    props: ['_id', 'content', 'isCompleted', 'activeId'],
    components: {
        MainContent
    },
    methods: {
        openInputEdit(_id) {
            this.$emit('openInputEdit', _id)
        },

        removeItem(_id) {
            this.$emit('removeItem', _id)
        }
    }
}
</script>

<style lang="scss" scoped>
    li {
        display: flex;
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