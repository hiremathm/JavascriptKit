const person = {
    firstName: 'shiva'
}

console.log(person.firstName) //'shiva'
console.log(person['firstName']) //'shiva'
console.log(person.city) // 'undefined'

//oops - 
// 1)getter/reader
// 2)setter/writter

person.firstName = "Arjun"
person.lastName = "Mahadevan"

//property that dose not exist will return the undefined
console.log(person)

//add property to the object
person.occupation = "student"
console.log(person)

//delete property from an object
console.log(delete(person.lastName))
console.log(person)

//list all values in an object
console.log(Object.keys(person))

//check whether the object has property are not
console.log(Object.keys(person).includes('location'))// false
console.log(Object.keys(person).indexOf('location') >= 0) // false
console.log(person.gender != undefined) // true
console.log(person.firstName != undefined) // false

console.log(person.hasOwnProperty('gender'))// false