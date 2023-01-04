import zlib from "zlib";
import fs from "fs/promises";

const readFile = await fs.readFile("./zlib/log.txt", "utf8");
console.info(readFile);

// const gzip = zlib.gzipSync(readFile);
// await fs.writeFile("./zlib/log.txt.gz", gzip);

// const readFileZip = await fs.readFile("./zlib/log.txt.gz", "utf8");
// console.info(readFileZip);

// calback
zlib.gzip(readFile, async (err, result) => {
    if (err) {
        console.error(`The Error: ${err}`);
    } else {
        console.info("compress success");
        await fs.writeFile("./zlib/log.txt.gz", result);

        const read = await fs.readFile("./zlib/log.txt.gz", "utf8");
        console.info(read);
    }
});