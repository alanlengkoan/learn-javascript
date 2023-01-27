type strValue = string;
type strOrNum = string | number;

const hello = (name: strValue, id: strOrNum) => {
    return `Hello, again ${name}!`;
}

console.log(hello('Alan', 30));
