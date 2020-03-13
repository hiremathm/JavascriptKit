function Personobj(data){
    this.firstName = data["firstName"]
    this.lastName = data["lastName"]

}

const p = new Personobj({firstName: "shiva", lastName: "kumar"})
console.log(p)
