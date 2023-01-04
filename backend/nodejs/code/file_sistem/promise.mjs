import fs from "fs/promises";

// untuk membaca file
const buffer = await fs.readFile("file_sistem/read_file.txt", "utf8");
console.info(buffer);

// untuk membuat file
await fs.writeFile("file_sistem/creted_by_promise.txt", "Hello World");

// untuk membaca file
const read = await fs.readFile("file_sistem/creted_by_promise.txt", "utf8");
console.info(read);

// untuk hapus file
await fs.unlink("file_sistem/creted_by_promise.txt");