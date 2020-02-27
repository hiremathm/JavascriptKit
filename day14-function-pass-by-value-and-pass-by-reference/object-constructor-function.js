const sachin = {
    runs: [10,20,30],
    calcAvg: function(){
        let total = 0;
        this.runs.forEach(function(run){
            total += run
        })
        return total;
    }
}

console.log("runs",sachin.runs)
console.log("avg", sachin.calcAvg())
//Javascript way of implementing oops
//Object constructor funcation / Object prototype function
//it creates an blueprint for an object
//it is an our own way of creating new datatype

function Player(runs, player){
    this.name = player
    this.runs = runs
    this.calcAvg = function(){
        let total = 0;
        runs.forEach(function(run){
            total += run
        })
        return total
    }
    //instance method - called on objects 
    this.isPlayer = function(p1){
        return p1 instanceof Player
    }
}
//static method or class method - called on objects
Player.isPlayer = function(args){
    return args instanceof Player
}
const p1 = new Player([10,20,30], 'sachin')
console.log(`Player 1 runs : ${p1.runs}`)
console.log(`Player 1 average : ${p1.calcAvg()}`)

const a = new Array(10, 20 , 30)
console.log("a", a)
a.push(50)
console.log("a", a)
// when a method is called on an instance/object , is known as an instance method
// when a method is called on an class/type , is known as an class method/static method
// Any method which is declared inside the constructor function is know as instance method
// static method / class method needs to be declared outside the function

console.log("p1 is instance of player :: ", Player.isPlayer(p1))
console.log("p1 is instance of player :: ", p1 instanceof Player)
