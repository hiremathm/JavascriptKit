//invoking function 
//function declarations will get hoisted but function expression

console.log(greet())

function greet(){
    return `Hello World`
}

console.log(sayHello()) //Cannot access 'sayHello' before initialization
const sayHello = function(){
    return `Hello World`
} 