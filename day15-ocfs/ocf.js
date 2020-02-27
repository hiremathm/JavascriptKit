//Object constructor function - Javascript
//is a blueprint of an object
//is used to define our own type
//it allows us to choose properties and methods on an object
//it allows us to define two types of methods - static / class method and instance method.

//class - Java, rb, py, c#
//is a blue print of an object
//is used to define our own type
//it allows us to choose properties and methods on an object
//it allows us to define two types of methods - static / class method and instance method.

//es6
//es6 allows us to make use of the class keyword

function Player(){
    this.name = "shiva" 
    console.log(this)
}

// const p1 = new Player()
// console.log(typeof p1)

const p2 = new Player()
// console.log(typeof p2)

// console.log(p1 == p2)

console.log(Player()) // global object
// console.log(new Player()) // local object

//in node main object is global
//in browser main object is window

//in node we have access to process object(another object)
//in browser we have access to the document

// node:global::browser:window
// node:process::browser:document

console.log(p2.firstname)// if we access a property which is not defined inside the constructor function then it will be undefined

