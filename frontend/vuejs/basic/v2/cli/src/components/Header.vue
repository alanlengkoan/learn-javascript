<template>
    <header>
        <h1 @click="changeTitle">{{ title }}</h1>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            title: {
                type: String,
                default: '-'
            }
        },
        data() {
            return {
            }
        },
        methods: {
            changeTitle: function () {
                this.$emit('changeTitle', 'Alan App Changed')
            }
        }
    }
</script>

<style scoped>
header {
    background-color: #42b983;
    color: white;
    text-align: center;
    padding: 20px;
}

h1 {
    font-size: 30px;
}
</style>