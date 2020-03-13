class Player {
    constructor(data){
        this.name = data.name
        this.runs = data.runs
    }

    totalRuns(){
        const total = this.runs.reduce(function(total, run){
            return total += run
        })

        return total
    }

    calAvg(){
        let sum = this.totalRuns();
        
        const avg = sum/this.runs.length
        return avg
    }
}

const p1 = new Player({name: "shiva", runs: [2,3,4,5]})

console.log(p1.totalRuns())
console.log(p1.calAvg())

