// normal function

function add(a1, a2){
    return a1 + a2
}

console.log(add(10,11))


// function expression - anonymous function
const addNumbers = function(a1, a2){
    return a1 + a2
}

// arrow function
console.log(addNumbers(10, 11))
const sum = (a1, a2) => {
    return a1 + a2
}

console.log(sum(10,11))

const numbers = [1,2,3,4,5]

const total = numbers.filter((number)=>{
    return number % 2 == 0
})
console.log(total)
const allNumbers = numbers.filter(number =>number % 2 == 0)
console.log(allNumbers)

