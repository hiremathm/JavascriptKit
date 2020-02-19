const person = {
    firstName: 'sachin',
    country: 'india',
    score: [10,20,30],
    details: function(){
        return `${this.firstName} represents ${this.country} and has scored ${this.score} runs`
    }
}

console.log('name', person.firstName)
console.log('country', person.country)
console.log('score', person.score)
console.log('details', person.details())


const product = {
    id: 1, name: 'marker',price: 5,addToCart: function(){
        return `Product :: ${this.name} and Price :: ${this.price} has been added to cart.`
    }
}


console.log(product.addToCart())
