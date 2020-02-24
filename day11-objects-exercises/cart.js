const cart = [{id: 3, name: 'bag', price: 150, quantity: 1}, {id: 1, name: 'marker', price: 10, quantity: 150}]
function addToCart(cart, lineItem){
    const item = cart.find(function(cartItem){
        return cartItem.id == lineItem.id
    })
    if(item == undefined){
        cart.push(lineItem)
    }else{
        item.quantity += lineItem.quantity  
    }
    return cart
}

console.log(addToCart(cart, {id: 1, name: 'marker', price: 10, quantity: 1}))
console.log(addToCart(cart, {id: 2, name: 'book', price: 100, quantity: 200}))
console.log(addToCart(cart, {id: 3, name: 'bag', price: 150, quantity: 1000}))


function printTotalItems(cart){
    let quantity = 0
    cart.forEach(function(c){
        quantity += c.quantity
    })
    return quantity;
}

console.log("Total number of items in the cart :: ",printTotalItems(cart))

