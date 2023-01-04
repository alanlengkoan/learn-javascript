const properties_one = {
    el: '#app-one',
    data: {
        title: 'ini title milik app one'
    },
    methods: {
        changeTitle: function () {
            appTwo.title = "Title changed from app one";
        }
    },
    computed: {
        greet: function () {
            return 'Hello from app one';
        },
        greats: function () {
            return ['Morning App One', 'Afternoon App One', 'Evening App One'];
        },
    },
};

const properties_two = {
    el: '#app-two',
    data: {
        title: 'ini title milik app two'
    },
    methods: {
        changeTitle: function () {
            appOne.title = "Title changed from app two";
        }
    },
    computed: {
        greet: function () {
            return 'Hello from app two';
        },
        greats: function () {
            return ['Morning App Two', 'Afternoon App Two', 'Evening App Two'];
        },
    },
};

const appOne = new Vue(properties_one);
const appTwo = new Vue(properties_two);