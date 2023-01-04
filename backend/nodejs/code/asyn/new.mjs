function samplePromise() {
    return Promise.resolve('Alan');
}

const nama = await samplePromise();
console.log(nama);