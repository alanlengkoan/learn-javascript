const properties = {
    el: '#app',
    data: {
        name: 'Alan Saputra Lengkoan',
        age: 24,
        x: 0,
        y: 0,
    },
    methods: {
        add: function (inc) {
            // this.age++;
            this.age += inc;
        },
        subtract: function (inc) {
            // this.age++;
            this.age -= inc;
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function () {
            alert('You clicked me!');
        },
        clickMe: function () {
            alert('halo, how are you?');
        },
        saying: function () {
            alert(`halo, my name is ${this.name}`)
        }
    }
};

new Vue(properties);