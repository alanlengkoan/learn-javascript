const properties = {
    el: '#app',
    data: {

    },
    methods: {

    },
    computed: {

    },
};

Vue.component('componentone', {
    template: '<p>ini component {{ number }} milik {{ name }}</p>',
    data: function () {
        return {
            number: 1,
            name: 'Alan'
        }
    }
});

Vue.component('componenttwo', {
    template: '<p>ini component {{ number }} milik {{ name }}</p>',
    data: function () {
        return {
            number: 2,
            name: 'Lengkoan'
        }
    }
});

new Vue(properties);