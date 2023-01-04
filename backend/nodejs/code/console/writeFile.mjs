import {Console} from "console";
import fs from "fs";

const logFile = fs.createWriteStream("./console/console.log");

const log = new Console({
    stdout: logFile,
    stderr: logFile
});

log.info("Hello World");
log.log("Hello World");
log.warn("Hello World");

const person = {
    name: 'alan',
    age: 23,
    address: 'makassar'
};

log.table(person);