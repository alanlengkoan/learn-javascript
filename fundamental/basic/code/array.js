let myArray = ["Cokelat", 42.5, 22, true, "Programming"];

console.log(myArray);
console.log(myArray[1]);
console.log(myArray.length);

console.log("---------------");

myArray.push('JavaScript');
console.log(myArray);

console.log("---------------");

// menghapus elemen terakhir
myArray.pop();
console.log(myArray);

console.log("---------------");

// menghapus elemen pertama
myArray.shift();
console.log(myArray);

console.log("---------------");

// menambah elemen pertama
myArray.unshift("Keju");
console.log(myArray);

console.log("---------------");

// untuk mengosongkan nilai atau value tertentu berdasarkan index dari array
delete myArray[1];
console.log(myArray);

console.log("---------------");

// untuk menghapus nilai atau value tertentu berdasarkan index dari array
/*
splice(index, jumlah element yang akan dihapus)
*/
myArray.splice(4, 0);
console.log(myArray);

console.log("---------------");

// untuk menambah nilai atau value tertentu berdasarkan index dari array
/*
splice(index, jumlah element yang akan dihapus, element yang akan ditambahkan dsb)
*/
myArray.splice(3, 0, "Mangga", "Apel");
console.log(myArray);