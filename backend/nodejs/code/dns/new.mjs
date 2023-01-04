// import dns from "dns";
import dns from "dns/promises";

// function callback(err, data) {
//     console.info(data);
// }

// dns.lookup("alanlengkoan.com", callback);

const url = "alanlengkoan.com";

const check = await dns.lookup(url);

console.info(check.address);
console.info(check.family);