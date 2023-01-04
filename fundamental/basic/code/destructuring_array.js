const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);
// console.log(firstFood);

// untuk mengambil nilai spesifik dari array
// const [, , thirdFood ] = favorites;

// console.log(thirdFood);

// untuk manipulasi nilai spesifik dari array
let myFood = "Ice sCream";
let herFood = "Noodles";

[myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);







// destructuring assignment
// const firstName = profile.firstName
// const lastName = profile.lastName
// const age = profile.age

// destructuring object
// const { firstName, lastName, age } = profile

// default values
// const {firstName, age, isMale = false} = profile;

// console.log(firstName)
// console.log(age)
// console.log(isMale)

// Assigning to Different Local Variable Names
// const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;
 
// console.log(localFirstName);
// console.log(localLastName);
// console.log(localAge);

