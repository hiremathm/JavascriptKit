//Function declaration
function greet(name){
    return `Hello ${name}`
}

console.log(greet("shiva"))

//Function expression
//When no arguments are passed by default "undefined" value is going to stored in argments
const sayHello = function(name){
    return `Hello ${name}`
}
console.log(sayHello("shiva"))