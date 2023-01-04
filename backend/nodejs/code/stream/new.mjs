import fs from "fs";

const writer = fs.createWriteStream("stream/target.txt");
writer.write("Alan\n");
writer.write("Saputra\n");
writer.write("Lengkoan\n");
writer.end();

const reader = fs.createReadStream("stream/target.txt");
reader.addListener("data", (chunk) => {
    console.log(chunk.toString());
});