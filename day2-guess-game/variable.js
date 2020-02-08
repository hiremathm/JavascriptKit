var number;

console.log(number)

// In languages like javascript if we dont assign any value to the variable by default it is going to hold undefined but in case of languages called ruby or python it is going to through an exception why because whenever we are creating variable in ruby or python we should assign something to it , here everything is considered as object.

// Variables are just memory references.


var name = 'shiva'
var number = 10
var places = ['banglore','shimoga','manglore']
var player = {firstName: "Sachin", lastName: "Kumar"}

// Which is very very different way of assigning the function as value to the variable in javascript
// it is called as function expression
var details = function(){
	return "This is function."
} 

console.log(details) // invoke variable
console.log(details()) // invoke function