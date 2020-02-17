let fruits = ['Banana','Apple','Water Melon','Graphes','Mango']

//for - loop

console.log('-----------------------------for------------------------------------')
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

console.log('----------print without first and last element from array-----------')
for(let i = 1; i < fruits.length - 1; i++){
    console.log(fruits[i])
}


//while and do while

//forEach - method
console.log("---------------------------forEach-----------------------------------")
fruits.forEach(function(fruit, i){
    console.log(i, fruit)
})

console.log("---------------------------forEach skip index-----------------------------------")
fruits.forEach(function(fruit,i){
    if((i != 0) && (i != fruits.length - 1)){
        console.log(i, fruits[i])
    }
})
//Note :: for loop is more faster than forEach but forEach is more convinent