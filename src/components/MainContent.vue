<template>
    <div>
        <span >{{ content }}</span>
        <input type="text" :class="{ actived: _id === activeId }" :value="content"/>
    </div>
</template>

<script>
export default {
    props: ['_id', 'content', 'activeId'],
}
</script>

<style lang="scss" scoped>
    input[type="text"] {
        display: none;
    }

    input[type="text"].actived {
        display: block;
    }
</style>