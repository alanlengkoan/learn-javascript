const number = 123;

console.info(btoa(number.toString()));
console.info(atob(number.toString()));

setTimeout(() => {
    console.info("timeout");
}, 2000);