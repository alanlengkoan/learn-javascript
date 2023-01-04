import { writeToFile } from "belajar-nodejs-npm/write";
import { readFromFile } from "belajar-nodejs-npm/read";

writeToFile("log.txt", "Hello Alan Saputra Lengkoan");

console.log(readFromFile("log.txt"));