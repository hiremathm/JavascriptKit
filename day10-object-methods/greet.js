const person = {
    name: 'shivakumara',
    sayHello: function(){
        return `Hello! My Name is ${this.name}`
    },
    greet: function(name){
        return `Hello! ${name} My Name is ${this.name}`
    }
}

console.log(person.sayHello())
console.log(person.greet('Ani'))