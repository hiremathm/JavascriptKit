let n1 = 10, n2 = 20;

//The variables declared outside the function are called as global variables
function add(){
    return n1 + n2
}

console.log(add())

// console.log(n3) // any code that you have written in file is wrapped inside the function

console.log("filename and directry of file",__filename, __dirname)

//javascript will create the global scope for the file whenever we write code, global scope is nuthing but file
//javascript functions will create function scope

//function scope

function printValues(){
    n1 = 100
    n2 = 200
    return n1 + n2
}

// console.log(printValues())
// console.log(n1, n2)

function printValues1(){
    let n1 = 100
    let n2 = 200
    return n1 + n2
}

console.log(printValues1())
console.log(n1, n2)
