import fs from "fs";

// untuk membaca file
const buffer = fs.readFileSync("file_sistem/read_files.txt", "utf8");
console.info(buffer);

// untuk membuat file
fs.writeFileSync("file_sistem/creted_by_synchronous.txt", "Hello World");

// untuk membaca file
const read = fs.readFileSync("file_sistem/creted_by_synchronous.txt", "utf8");
console.info(read);

// untuk hapus file
fs.unlinkSync("file_sistem/creted_by_synchronous.txt");