let myAge: any;
// let myAge: number;
// let myAge: string;

myAge = 25;
console.log(myAge);

myAge = true;
console.log(myAge);

myAge = "hello";
console.log(myAge);

myAge = { name: 'Alan' };
console.log(myAge);

console.log("====================================");

let mixed: any[] = [];
// let mixed: number[] = [];
// let mixed: string[] = [];

mixed.push(5);
mixed.push("hello");
mixed.push(false);

console.log(mixed);

console.log("====================================");

let myData : {name: any, age: any, job: any, skills: any[]};

myData = {name: 'Alan', age: 24, job: 'Web Developer', skills: ['HTML', 'CSS', 'JavaScript']};
console.log(myData);

myData = {name: 30, age: 'John', job: false, skills: [1, 'CSS', true, 'Bootstrap', 'Sass']};
console.log(myData);