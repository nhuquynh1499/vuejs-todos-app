<template>
    <div :class="{ checked: todo.isCompleted, container: true }">
        <span class="checkmark" @click="checkDone(todo._id)"></span>
    </div>
</template>

<script>
export default {
    name: 'checkbox-complete',
    props: ['todo'],

    methods: {
        checkDone(_id) {
            this.$emit('checkDone', _id)
        }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        position: relative;
        cursor: pointer;
        font-size: 30px;
        user-select: none;
        width: 30px;
        height: 30px;

        .checkmark{
            position:absolute;
            top:0;
            left:0;
            width:30px;
            height:30px;
            background:#eee;
            border-radius:3px;
            border-radius: 50%;

            &::after{
                content:"";
                position:absolute;
                display:none;
                top:50%;
                left:50%;
                width: 5px;
                height: 10px;
                border: solid white;
                border-width: 0 3px 3px 0;
                transform:translate(-50%,-50%) rotate(45deg);
            }
        }

        &:hover {
            .checkmark {
                background:#ccc;
            }
        }
    }

    .container.checked {
        .checkmark{
            background:#2196F3;

            &::after{
                display:block;
            }
        }
    }
</style>