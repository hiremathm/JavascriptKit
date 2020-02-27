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

// const p2 = new Player()
// console.log(typeof p2)

// console.log(p1 == p2)

console.log(Player()) // global object
console.log(new Player()) // local object
