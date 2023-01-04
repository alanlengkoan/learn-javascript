import {
    stringModule
} from './stringModule.mjs';

import {
    objectModule
} from './objectModule.mjs';

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