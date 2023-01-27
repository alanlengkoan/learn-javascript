type myStr = string;
type myPerson = {name: string, age: number};

let saying: (a: myStr, b: myStr) => void;

saying = (name: myStr, greeting: myStr) => {
    return `${greeting}, again ${name}!`;
}

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (data: myPerson) => {
    return `${data.name} is ${data.age} years old`;
}

console.log(saying('Alan', 'Hello'));
console.log("====================================");
console.log(calc(5, 10, 'add'));
console.log(calc(5, 10, 'reduce'));
console.log("====================================");
console.log(logDetails({name: 'Alan', age: 24}));