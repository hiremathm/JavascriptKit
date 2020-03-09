const name = "shiva"
const city = "bangalore"

const person = {
    name: name,city: city
}

console.log("Person :: ", person)

// ES6 concise properties - when the property name and variable names are same , then we can use property name only.

const student = {
    name, city
}

console.log("Student :: ", student)


// ES6 concise methods - method declaration can be done without using the funcation keyword 
const employee = {
    firstName: "shiva",lastName: "kumar",fullName: function(){return this.firstName + " " + this.lastName}
}

console.log("Full Name :: ", employee.fullName())

const emp = {    firstName: "shiva",lastName: "kumar",fullName(){return this.firstName + " " + this.lastName}}
console.log("Full Name :: ", emp.fullName())