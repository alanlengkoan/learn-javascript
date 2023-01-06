<template>
    <footer>
        <span>
            &copy; {{ copyright }} {{ title }}
        </span>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        copyright: {
            type: String,
            default: '-'
        },
        title: {
            type: String,
            default: '-'
        }
    },
    data() {
        return {
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