function add(n1, n2){
    return ` ${n1 + n2}`
}
console.log(add()) //when no arguments are passed , parametters get assigned with the undefied value in javascript
// in other languages it will through an error
console.log(add(10)) // 10 + undefined = NaN but in other languages wrong number of arguments 1 for 2
console.log(add(10, 20)) // 30
console.log(add(10, 20, 30))// value 30 gets ignored, but in other languages wrong number of arguments 3 for 2

console.log("*".repeat(50))
// typeof NaN is number and typeof undefined is undefined

console.log(add(undefined, 10)) // if you dont want to pass some value to the arguments , then we can pass value as undefined