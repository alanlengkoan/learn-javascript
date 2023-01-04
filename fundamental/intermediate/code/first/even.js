const {EventEmitter} = require("events");

const emit = new EventEmitter();

// manual
// const makeCoffee = ({ name }) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };

// const makeBill = ({ price }) => {
//     console.log(`Bill sebesar ${price} telah dibuat!`);
// };

// emit.on("coffee-order", makeCoffee);
// emit.on("coffee-order", makeBill);

const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
};

const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}
 
emit.on('coffee-order', onCoffeeOrderedListener);

// langsung dijalankan
// emit.addListener("coffee-order", ({name}) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// });

emit.emit("coffee-order", { name: "Luwak", price: 50000 });