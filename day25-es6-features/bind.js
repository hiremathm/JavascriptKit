const person = {
    name: 'shiva',
    greet: function(){
        return 'hello ' + this.name
    }
}

const name = person.name
const wish = person.greet

console.log(name)
console.log(wish()) // returns the global obj because person.greet is assgined to wish 
console.log(wish.bind(person)())