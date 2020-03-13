class Student {
    constructor(data){
        this.name = data.name
        this.age = data.age
    }
}

const s = new Student({name: "shiva", age: "20"})

console.log(s)

class Person extends Student {
    constructor(data){
        super(data)
        this.marks = "25"
    }
}
const p = new Person({name: 'kumar', age: "30"})
console.log(p)