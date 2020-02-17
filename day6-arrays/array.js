const players = ["sachin", "shewag","dhoni","rahul"]
console.log("players :: ", players)

const mixedValues = [1, "water mealon", 75, {first_name: "shiva",last_name: "kumar"}]

console.log(typeof mixedValues)

const person = {firstname: "shiva",lastname: "kumar"}

console.log(typeof person)

console.log(Array.isArray(mixedValues))
console.log(Array.isArray(person))

//Methods 
//Note String methods will not change original state of the object

//Mutable array methods - are those will change the state of the object
//push method returns the new length of the array and add the element to end of the array
players.push('yuvaraj') 
console.log(players)

//unshift method returns the newly added element from the array and will add the element to beginning of the array
players.unshift('shiva')
console.log(players)

//splice method is used to add element at perticular position and it will return the empty array 
players.splice(4, 0, 'lakshman')
console.log(players)

//update value at the perticular index
players[1] = 'abc'
console.log(players)

//pop method will delete and element from end of the array and it will return the element which is deleted
players.pop()
console.log(players) 

//shift will delete element from beginning of the array and it will return the element which is deleted
players.shift()
console.log(players)

//splice will also delete element from perticular index
console.log(players)
players.splice(3,1)
console.log(players)

//sort - sorting the records in alphabetical orders
players.sort()
console.log(players)
//sort is not pridictable on numbers
let numbers = [1,2,34.4, 88.23, 12.56, 89.23] 
console.log(numbers.sort())

//Reverse - will reverse the array and will return the new array
players.reverse()
console.log(players)


//Immutable array metohds - are those will not change the state of the object

