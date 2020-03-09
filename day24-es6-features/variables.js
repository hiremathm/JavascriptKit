//ECMA - 5 (2009)
var city = 'bangalore' // get hoisted, can redclare, can assign, function scope

function add(n){
    for(var i = 0; i < n; i++){
        var result = i + 5
    }
    console.log(i, result)// can be accessed
}

add(10)

// ECMA - 6 (2015) 
//let - don't get hoised, can't redclare, can reassign, block and function scope
let name = "shiva" 

function addNumbers(n){
    for(let i = 0; i < n; i++){
        let result = i + 5
    }
    console.log(i, result)// can not be accessed
}

addNumbers(10)


//const - don't get hoised, can't redclare, can't reassign, block and function scope
const numbers = [1,2,3,4] 