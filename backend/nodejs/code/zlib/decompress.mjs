import zlib from "zlib";
import fs from "fs/promises";

const readFile = await fs.readFile("./zlib/log.txt.gz");
console.info(readFile.toString());

// const result = zlib.unzipSync(readFile);
// console.info(result.toString());

// callback
zlib.unzip(readFile, (err, result) => {
    if (err) {
        console.error(`The Error: ${err}`);
    } else {
        console.info("decompress success");
        console.info(result.toString());
    }
});