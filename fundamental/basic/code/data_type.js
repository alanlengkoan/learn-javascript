let undefined;
let nothing = null;
const int = 1;
const float = 1.1;
const str_a = 'hello world!';
const str_b = "hello world!";
const bigNumber = 1234567890123456789012345678901234567890n;
const bigIntButSmall = 7n;
const id = Symbol("id");

let x = true;
let y = false;
const a = 10;
const b = 12;
let isGreater = a > b;
let isLess = a < b;

console.info(typeof undefined);
console.info(nothing)
console.info(typeof int);
console.info(typeof float);
console.info(typeof str_a);
console.info(typeof str_b);
console.info(typeof bigNumber);
console.info(typeof bigIntButSmall);
console.info(typeof x);
console.info(typeof y);
console.info(isGreater);
console.info(isLess);
console.log(id);