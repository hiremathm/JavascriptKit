const student = {
    id: 1,
    firstName: "shiva",
    lastName: "kumar"
}

const idProp = 'id'
console.log(student.id) //1
console.log(student['id'])//1

//Note :: Whenever a property value is assigned to the varible we can not use the dot(.) operator.
console.log(student.idProp)

console.log(student['idProp']) // 1

//Loop over object 
for(let key in student){
    console.log(key)
}