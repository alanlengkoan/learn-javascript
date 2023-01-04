const myMap = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(myMap);
console.log(myMap.size);
console.log(myMap.get("London"));
myMap.set("New Delhi", "India");
console.log(myMap);
console.log(myMap.size);
console.log(myMap.get("New Delhi"));