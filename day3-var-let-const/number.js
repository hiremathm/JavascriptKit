const n1 = 10;
const n2 = 18.75;
const n3 = 17.3;
const n4 = -250;

console.log(typeof n1) //number
console.log(typeof typeof n1) //string

/*
    What makes primitive datatypes?
    -> Primitive datatype dose not have inbuilt datatypes
*/

console.log(Math.round(n2)) // 19
console.log(Math.ceil(n2))  // 19
console.log(Math.ceil(n3)) //18
console.log(Math.floor(n2)) // 18
console.log(Math.floor(n3)) // 17

console.log(Math.abs(n4)) // 250 (it is going to absolute value of the variable , means positiive value)

console.log(Math.pow(2,3)) // 8
console.log(Math.sqrt(64)) // 8

console.log(Math.random())

//Method overloading
console.log(Math.min(12,34,56,78,90))
console.log(Math.min(12,34))

console.log(Math.max(12,34,56))
console.log(Math.max(45,34))

/*
To find out the max or min value on array we have to use spread operator(...)
Whenever we use the spread operator on array , it is going to extract each value from the array and pass it as an argument
*/
const numbers = [1,2,4,5,6,7,8]
console.log(Math.max(...numbers))