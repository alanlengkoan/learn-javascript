import util from 'util';

const fisrtName = 'Alan';
const lastName = 'Lengkoan';

const check = util.format('%s %s %d', fisrtName, lastName, 2022);

console.info(check);
console.info(`${fisrtName} ${lastName} 2022`);

const person = {
    name: 'alan',
    age: 23,
    address: 'makassar'
};

const parsing = util.format('%j', person);


console.info(parsing);
console.info(`${JSON.stringify(person)}`);