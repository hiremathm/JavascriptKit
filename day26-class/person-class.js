class Personobj {
    //constructor is a method which will help us to assign the value object when it is getting created
    constructor(data){
        this.firstName = data.firstName
        this.lastName = data.lastName
    }
}

const p = new Personobj({firstName: "shiva",lastName: "kumar"})
console.log(p)
