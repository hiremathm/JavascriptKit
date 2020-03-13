const person = {
    name: "shiva",
    skills: ["js", "rb"],
    details: function(){
        // this reffers to the current object 
      this.skills.forEach(function(skill){
        // this reffers to the global object
          console.log(`${this.name} knows ${skill}`)
      })
    }
}

console.log(person.details())

// first fix 

const emp = {
    name: "shiva",
    skills: ["js", "rb"],
    details: function(){
        // this reffers to the current object
        const that = this 
      this.skills.forEach(function(skill){
        // this reffers to the global object
          console.log(`${that.name} knows ${skill}`)
      })
    }
}


console.log(emp.details())
// Second fix

const stu = {
    name: "shiva",
    skills: ["js", "rb"],
    details: function(){
        // this reffers to the current object
        this.skills.forEach(function(skill){
            // this reffers to the global object
            console.log(`${this.name} knows ${skill}`)
        }.bind(this))
    }
}

console.log(stu.details())

// Third

const coder = {
    name: "shiva",
    skills: ["js", "rb"],
    details: function(){
        // this reffers to the current object
        this.skills.forEach(skill =>
            // withing the function if u use the arrow(es6 six) function the keyword this will refers to the current object 
            console.log(`${this.name} knows ${skill}`)
        )
    }
}

console.log(coder.details())

// within a method (ie a property whose value is a function) the keyword this reffers to the current object

// inside a function , within a function this reffers to the global object

// const student = {
//     name: 'shiva',
//     details: function(){
//         function printDetails(){
//             console.log(this)
//         }
//         console.log(printDetails())
//     }
// }

// console.log(student.details())