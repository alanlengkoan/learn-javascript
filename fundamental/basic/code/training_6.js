function minimal(a, b) {
  	if (a < b) {
    	return a;
    } else if (a > b) {
    	return b;
    } else {
        return a;
    }
}

function power(a, b) {
  	return a**b;
}

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));

// console.log(minimal(3, 3));
console.log(power(7, 3));
console.log(power(3, 3));
console.log(power(4, 0.5));