let persons = ['sheldon','lenaord', 'penny','rajesh','howard']

let r = 6;

function doubleCola(persons, r){
    for(let i = 0; i < r; i++){
        let person = persons.shift() 
        persons.push(person, person)
    }
   return persons
}
let output = doubleCola(persons, r)
console.log("Double Cola persons befor drink ::", persons)
console.log("Double Cola persons after drink :: ", output)
console.log("Double Cola person after drink the nth drink :: ", output[0])