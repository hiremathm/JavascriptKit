//Properties -> Property is going to hold some values

const name = "shivakumara m hiremath"

console.log("Length :: ", name.length)

console.log("Math PI value :: ", Math.PI)

//Method -> Method is going to performs some operation
console.log(name.toLowerCase())
console.log(name.toUpperCase())

//Extract parts of string 
console.log(name.slice(0,2))
console.log(name.slice(2))

//Capitalize string 
console.log(name[0].toUpperCase() + name.slice(1))

//Amarican phone numbers
const numbers = '1234567890'

console.log(`(${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6,10)}`)

//Substrings
const city = "bangalore"
console.log(`Substring - ${city.substr(0, 2)}`)

//Character At
const text = "This is the wonderfull place to visit"
console.log(text.charAt(5))

// Note : On String we can call method, why because whenever we call method on string(primitive datatype), javascript will internally convert string into string object.

//Index Of
console.log(text.indexOf("the")) // Scans from left to right
console.log(text.lastIndexOf('t')) // Scans from right to left

//Includes
console.log(text.includes('t')) //true

//Repeat (String multiplication)
console.log("*".repeat(4))
