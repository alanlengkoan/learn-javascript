import readline from "readline";
// import process from 'process';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is ur name? ', (answer) => {
    setTimeout(() => {
        console.log(`Hello, ${answer} welcome to my app`);
    }, 5000);

    rl.question('What is ur age? ', (answer) => {
        setTimeout(() => {
            console.log(`Ur age is ${answer}.`);
        }, 5000);

        rl.close();
    });
});