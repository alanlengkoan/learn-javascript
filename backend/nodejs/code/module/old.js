const fun = require('./function/hello');
const count = require('./function/count');

fun.sayHello("Alan Lengkoan");

console.info(count.tambah(1, 2));
console.info(count.kurang(1, 2));
console.info(count.kali(1, 2));
console.info(count.bagi(1, 2));