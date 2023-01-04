// new
import os from "os";

console.info("os : " + os.platform());
console.info("bit : " + os.arch());
console.info("user : " + os.hostname());
console.info("realese : " + os.release());
console.info("free memori : " + os.freemem());
console.info("total memori : " + os.totalmem());
console.table(os.cpus());
console.table(os.networkInterfaces());