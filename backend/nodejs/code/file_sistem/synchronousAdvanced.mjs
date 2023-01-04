import fs from "fs";

// membuat folder
fs.mkdirSync('file_sistem/new_folder');

// menghapus folder
fs.rmdirSync('file_sistem/new_folder');