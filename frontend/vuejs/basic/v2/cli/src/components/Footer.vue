<template>
    <footer>
        <span>
            &copy; {{ copyright }}
        </span>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            copyright: 'Copyright 2023 Alan'
        }
    }
}
</script>

<style scoped>
footer {
    background-color: #42b983;
    color: white;
    text-align: center;
    font-style: italic;
    padding: 20px;
}
</style>