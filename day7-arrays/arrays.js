//Immutable Methods

let fruits = ['apple', 'spota','water melon', 'strawberry']
//join - will return the string of elements with the comma seperated

console.log(fruits.join(', '))

//indexOf - find the index of the element
console.log(fruits.indexOf('spota'))

//includes ? (boolean) - return the boolean value
console.log(fruits.includes('spota'))

//slice - return elements based on the index values 
console.log(fruits.slice(0, 2))
console.log(fruits.slice(0))

//create new array
const myFavourites = [].concat(fruits)

console.log(myFavourites)

//create mew array with copy and clone 
let numbers = [1,2,3,4,5,6]

let copy = numbers
numbers.push(7)
console.log(copy)
console.log(numbers)
