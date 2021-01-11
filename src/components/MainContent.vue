<template>
    <div class="mainContent">
        <span :class="{ completed: isCompleted }"> {{ content }} </span>
        <input type="text" :class="{ actived: _id === activeId }" :value="content"/>
    </div>
</template>

<script>
export default {
    props: ['_id', 'content', 'isCompleted', 'activeId'],
}
</script>

<style lang="scss" scoped>
    .mainContent {
        position: relative;

        input[type="text"] {
            display: none;
        }

        input[type="text"].actived {
            display: block;
            position: absolute;
            top: 0;
        }

        .completed {
            text-decoration: line-through;
            color: #b2b2b2;
        }
    }

</style>