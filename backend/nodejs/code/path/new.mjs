import path from "path";

const fileLocation = "new.mjs";

console.info(path.sep);
console.info(path.dirname(fileLocation));
console.info(path.basename(fileLocation));
console.info(path.extname(fileLocation));
console.info(path.parse(fileLocation));

// console.log(__dirname);
// console.log(__filename);