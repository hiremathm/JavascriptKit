console.log(n1)

var n1 = 10

// console.log(n2)
let n2 = 10;
console.log(n2)
// console.log(n3)
const n3 = 20;
console.log(n3)
/*
    -> If we access a varible even befre it is get declared , javascript is going to through error saying
          => ReferenceError: n1 is not defined
    -> If we access a varible before the line it's get declared, then javascript is going to assign 'undefined' value to it
    -> The variables declared using keyword called var, are gets hoisted(that means variables are gets declared at first line , but value will be undefiend)
    -> The variables declared using keyword called let and const, are not going to hoisted(that means let will not allow variable to hoisted , it will through ReferenceError: Cannot access 'n2' before initialization)
    -> Node server is going to read the enteire source file at run time for first time and it is going to hoist the variables which are decalred using the keyword var 
    */

