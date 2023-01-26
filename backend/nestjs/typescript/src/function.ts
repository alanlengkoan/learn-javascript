let greet: Function;

greet = () => {
    return 'Hello, again!';
}
console.log(greet());

console.log("====================================");

const count = (a: number, b: number, c?: number | string) => {
    const result = a + b;

    return `${c} = ${result}`;
}
console.log(count(5, 10, "hasil"));

console.log("====================================");

// spesifik fungsi untuk hasil
const minus = (a: number, b: number): number => {
    return a - b;
}
console.log(minus(10, 5));