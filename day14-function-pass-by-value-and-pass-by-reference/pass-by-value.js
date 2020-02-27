let city = 'bangalore'
//when we are working with primitive datatypes it is always pass by value
//any changes made on primitive datatypes inside the function will affect the object outside the function

function updateLocation(city){
    city = 'mysore'
    return city
}

console.log(updateLocation(city))

//when we are working with object datatypes it is always pass by reference
//in argument place it will actually pass the value of the object it will pass the memory reference of that variable
//any changes made on an object inside the function will affect the object outside the function

let location = {
    name: "banglore"
}

function changeLocation(location){
    location.name = "mysore"
    return location
}
console.log(location)
console.log(changeLocation(location))
console.log(location)


let numbers = [1,2,3,4]

function addNumbers(numbers){
    numbers.push(5)
    return numbers
}

console.log(numbers)
console.log(addNumbers(numbers))
console.log(numbers)
