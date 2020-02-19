const counter = {
    count: 0,
    up: function(){
        this.count++
        return `${this.count}` 
    },
    down: function(){
        this.count--
        return this.count
    },
    reset: function(){
        this.count = 0
        return this.count
    },
    moveUP: function(value){
        this.count += value
        return this.count
    },
    moveDown: function(value){
        this.count -= value
        return this.count
    }
}

console.log("Move UP :: ", counter.up())
console.log("Move UP :: ", counter.up())
console.log("Move Down :: ", counter.down())
console.log("Move Up by 5 :: ", counter.moveUP(5))
console.log("Move Down by 3 :: ", counter.moveDown(6))

