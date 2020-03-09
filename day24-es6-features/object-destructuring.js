const employee = {
    firstName: 'shiva',lastName: 'kumar',middleName: 's',state: 'maharastra'
}

// firstName = employee.firstName
// lastName = employee.lastName

//ES6 - Object destructuring

const {firstName, lastName} = employee

console.log(firstName, lastName)

//Overriding property

const {middleName: name, city} = employee

console.log(name)

//The property that dose not exist will return the undefined
console.log(city)

//Assign default value when property dose not exist 
const {state = 'karnata'} = employee
console.log(state)