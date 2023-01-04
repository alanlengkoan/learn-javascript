const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

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
const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

