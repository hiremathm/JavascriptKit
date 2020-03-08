let numbers = [1,2,3,8,4,5,7] // 30 is sum

let temp = 0
let sum = 0
let output = []
let length = Math.ceil(numbers.length/2)
for(var i = 0; i < numbers.length; i++){
    sum += numbers[i]
    if(temp < numbers[i]){
        temp = numbers[i]
        output.push(numbers[i])
    }
}

console.log(`The biggest number is : ${temp} and sum is ${sum} and sum divisible is ${sum/2} and ouptut is ${output} and length is ${length}`)

let first_partion_sum = numbers.slice(0,length).reduce(function(total, value){return total + value})
let second_partion_sum = numbers.slice(length).reduce(function(total, value){return total + value})

console.log(`First partion elements ${numbers.slice(0, length)} and sum is ${first_partion_sum}`)
console.log(`Second partion elements ${numbers.slice(length)} and sum is ${second_partion_sum}`)

let difference = second_partion_sum - first_partion_sum
console.log("difference ", difference)
console.log(`element is in second partion : ${numbers.slice(0,length).includes(difference)}`) 