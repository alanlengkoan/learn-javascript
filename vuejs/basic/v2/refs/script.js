const properties = {
    el: '#app',
    data: {
        food: 'Masukkan makanan favorit kamu',
        name: 'Masukkan nama kamu',
        age: 'Masukkan umur kamu'
    },
    methods: {
        readRefs: function () {
            this.food = this.$refs.input.value;
        },
        addData: function () {
            this.name = this.$refs.name.value;
            this.age = this.$refs.age.value;
        }
    },
    computed: {

    }
};

new Vue(properties);