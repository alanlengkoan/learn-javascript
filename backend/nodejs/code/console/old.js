const stringModule = require('./stringModule.js');
const objectModule = require('./objectModule.js');

console.info("hello world");
console.log("hello world");
console.warn("hello world");
console.log('----------------------------------------------');
console.info(stringModule.nama);
console.log(stringModule.umur);
console.warn(stringModule.jenisKelamin);
console.log('----------------------------------------------');
console.info(objectModule.data.nama);
console.log(objectModule.data.umur);
console.warn(objectModule.data.jenisKelamin);