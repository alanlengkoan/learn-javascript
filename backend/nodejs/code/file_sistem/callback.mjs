import fs from "fs";

// untuk membaca file
fs.readFile("file_sistem/read_file.txt", "utf8", (err, data) => {
    console.info(data);
});

// untuk membuat file
fs.writeFile('file_sistem/creted_by_callback.txt', "Hello World", 'utf8', (err, data) => {
    console.log('berhasil');
    // untuk membaca file
    fs.readFile("file_sistem/creted_by_callback.txt", "utf8", (err, data) => {
        console.info(data);
    });
    // untuk hapus file
    fs.unlink('file_sistem/creted_by_callback.txt', (err) => {
        if (err) throw err;
        console.log('successfully deleted');
    });
});