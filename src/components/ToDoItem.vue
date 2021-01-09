<template>
    <li :class="{ completed: isCompleted }">
        <input type="checkbox" :checked="isCompleted"/> 
        <span >{{ content }}</span>
    </li>    
</template>

<script>
export default {
    props: ['content', 'isCompleted']
}
</script>

<style lang="scss">
    .completed {
        span {
            text-decoration: line-through;
            color: #b2b2b2;
        }
    }
</style>