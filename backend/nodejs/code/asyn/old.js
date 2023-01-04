function samplePromise() {
    return Promise.resolve('Alan');
}

const nama = await samplePromise();
console.log(nama);


// function samplePromise() {
//     return Promise.resolve('Alan');
// }

// async function run() {
//     const nama = await samplePromise();
//     console.log(nama);
// }

// run();