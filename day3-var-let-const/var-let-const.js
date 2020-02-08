var city = "banglore"
console.log(city)

//redeclare the same varibable
var city = "mysore"
console.log(city)


// 2015 - es6 (let)
let name = "shiva"
console.log(name)

name = "kumar"
console.log(name)
/*
let name = "kumar"
console.log(name)
-> SyntaxError: Identifier 'name' has already been declared

Re-declaration is not allowed but re-assignment is allowed while using let
*/

const location  = "banglore"
/*
const location = "mysore"
console.log(location)
-> SyntaxError: Identifier 'location' has already been declared
-> TypeError: Assignment to constant variable.

Re-declaration and Re-assignment is not allowed while using const
*/

// const will still allows you to change the value of the keys in the object and it will also allow you to add new key in to object
const player = {
    firstName: "shiva",lastName: "kumar"
}
console.log(player)

player.firstName = "sachin"
console.log(player)

player['age'] = 25

console.log("After adding key to player object", player)
// const will still allows you to push the values of the array 
const numbers = [1,2,3,4,5,6,7]
console.log(numbers)

numbers.push(8)
console.log(numbers)