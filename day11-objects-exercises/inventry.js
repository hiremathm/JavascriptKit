const currentInventry = [
    {name: "HTC", stock: 10},
    {name: "Nokia", stock: 15},
    {name: "Samsung", stock: 20},
    {name: "Sony", stock: 25},
    {name: "Apple", stock: 30}
]

const newInventry = [
    {name: "LG", stock: 10},
    {name: "Sony", stock: 25},
    {name: "Samsung", stock: 30},
    {name: "Apple", stock: 55}
]



function updateInventry(currentInventry, newInventry){
    newInventry.forEach(function(newInventry){
        let item = currentInventry.find(function(currentInventry){
            return currentInventry.name == newInventry.name
        })
        if(item != undefined){
            item.stock += newInventry.stock
        }else{
            currentInventry.push(newInventry)
        }
    })
    return currentInventry
}
console.log("current inventry :: ", currentInventry)
console.log("new inventry :: ", newInventry)
console.log("updated inventry :: ",updateInventry(currentInventry, newInventry))