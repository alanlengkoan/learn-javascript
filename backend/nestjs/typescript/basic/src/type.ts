let nama = 'Alan';
let umur = 30;
let kerja = 'Web Developer';
let isBlackBelt = false;

const circ = (diameter: any) => {
    return diameter * Math.PI;
}

const whatType = (diameter: any) => {
    return typeof diameter;
}

console.log(circ(umur));

console.log(whatType(nama));
console.log(whatType(umur));
console.log(whatType(kerja));