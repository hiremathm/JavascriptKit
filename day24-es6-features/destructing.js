function evenOdd(numbers){
    let even = [], odd = []
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i]%2 == 0){
            even.push(numbers[i])
        }else{
            odd.push(numbers[i])
        }
    }
    // return [even, odd]
    return {even: even, odd: odd}
}

const numbers = [1,2,3,4,5,6,7]
// const [even] = evenOdd(numbers)
// const [,odd] = evenOdd(numbers)

console.log(evenOdd(numbers))

const {even, odd} = evenOdd(numbers)
console.log("Even Numbers ", even)
console.log("Odd Numbers", odd)