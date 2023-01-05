<template>
    <div id="teams">
        <h1>List Player Basketball </h1>
        <ul>
            <li v-for="(row, i) in teams" :key="i" @click="row.show = !row.show">
                <h2>{{ row.name }}</h2>
                <h3 v-show="row.show">{{ row.position }}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Team',
        data() {
            return {
                teams: [
                    {
                        name: 'Stephen Curry',
                        position: 'Guard',
                        show: false
                    },
                    {
                        name: 'James Wiseman',
                        position: 'Center',
                        show: false
                    },
                    {
                        name: 'Draymond Green',
                        position: 'Forward',
                        show: false
                    },
                    {
                        name: 'Ty Jerome',
                        position: 'Guard-Forward',
                        show: false
                    },
                    {
                        name: 'JaMychal Green',
                        position: 'Forward-Center',
                        show: false
                    },
                ]
            }
        },
    }
</script>

<style scoped>
#teams {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>