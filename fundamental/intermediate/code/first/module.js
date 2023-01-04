const myLib = require('./myLib/coffee');
const moment = require('moment');

const now = moment().format('YYYY-MM-DD HH:mm:ss');

console.log(myLib.message('Alan Lengkoan'));
console.log("==================================");
console.log(now);