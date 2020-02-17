const items = [{id: 1, name: "babycorn monchuri", price: 250, isVeg: true, category: 'starter'},{id: 2, name: 'chilly chicken', price: 275, isVeg: false, category: 'starter'},{id: 3, name: "gobi manchuri", price: 150, isVeg: true, category: 'starter'},{id: 4, name: "sholey kabab", price: 350, isVeg: false,category: 'starter'},{id: 5, name: "chikken biriyani", price: 500, isVeg: false,  category: 'starter'}]

function filterVeg(items){
    return items.filter(function(item){
        return item.isVeg == true
    })
}
console.log("Filter by veg :: ", filterVeg(items))

function filterByCategory(items, category){
    return items.filter(function(item){
        return item.category == category
    })
}
console.log("Filter by category :: ", filterByCategory(items, 'starter'))
