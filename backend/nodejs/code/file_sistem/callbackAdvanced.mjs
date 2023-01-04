import fs from "fs";

// membuat folder
fs.mkdir('new_folder', () => {
    console.log('berhasil membuat folder!');
});

// menghapus folder
fs.rmdir('new_folder', () => {
    console.log('berhasil menghapus folder!');
});

// membuat folder & file
fs.mkdir('file_sistem/new_folder', () => {
    fs.writeFile('file_sistem/new_folder/new_file.txt', "testing buat file!", (err, result) => {
        console.log('berhasil buat folder & file!');
        fs.readFile('file_sistem/new_folder/new_file.txt', 'utf8', (err, data) => {
            console.log(data);
        });
    });
});