<template>
    <div class="mainContent">
        <span :class="{ completed: todo.isCompleted }"> {{ todo.content }} </span>

        <div :class="{ actived: todo._id === activeId, inputUpdate: true}">
            <input type="text" v-model="valueInputUpdate" @keyup.enter="updateItem(todo._id)"/>
            <button @click="updateItem(todo._id)">Ok</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['todo', 'activeId'],
    data() {
        return {
            valueInputUpdate: this.todo.content,
        }
    },

    methods: {
        updateItem(id) {
            this.$emit('updateItem', id, this.valueInputUpdate);
        }
    }   
}
</script>

<style lang="scss" scoped>
    .mainContent {
        position: relative;

        .inputUpdate {
            display: none;
        }

        .inputUpdate.actived {
            display: flex;
            position: absolute;
            top: 0;
            
        }

        .completed {
            text-decoration: line-through;
            color: #b2b2b2;
        }
    }

</style>