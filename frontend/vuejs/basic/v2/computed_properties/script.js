const properties = {
    el: '#app',
    data: {
        age: 24,
        a: 0,
        b: 0,
    },
    methods: {
        // addToA: function () {
        //     return this.a + this.age;
        // },
        // addToB: function () {
        //     return this.b + this.age;
        // }
    },
    computed: {
        addToA: function () {
            return this.a + this.age;
        },
        addToB: function () {
            return this.b + this.age;
        }
    }
};

new Vue(properties);