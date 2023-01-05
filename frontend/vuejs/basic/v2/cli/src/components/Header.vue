<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                title: 'Alan App'
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