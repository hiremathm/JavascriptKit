const city = "bangalore"

console.log(city[0])
console.log(city[1])
//If we access the index which is not present, then javascript will give the undefined
console.log(city[10])
//String is an array of characters

for(let i = 0; i < city.length; i++){
    console.log(city[i])
}