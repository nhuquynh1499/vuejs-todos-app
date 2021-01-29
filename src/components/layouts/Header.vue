<template>
  <header>
        <button @click="TOGGLE_AUTH"> {{ isAuthenticated ? "Logout" : "Login" }}</button>
  </header>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapState(['auth']),
        ...mapGetters(['isAuthenticated'])
    },

    methods: {
        ...mapMutations(["TOGGLE_AUTH"]),
    },
    created() {
        console.log(this.$store)
        console.log(this.auth)
    }
}
</script>

<style lang="scss" scoped>
    header {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;

        button {
            padding: 7px 15px;
            background-color: #2196F3;
            outline: none;
            border: none;
            cursor: pointer;
            transition: all .3s;
            margin-left: 10px;

            &:hover {
                background-color: #1296ba;
            }
        }
    }
</style>