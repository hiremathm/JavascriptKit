
function findCartTotal(prices, discount=10){ // es6 way of setting default parametter value
    //discount = discount == undefined ? 10 : discount // es5 way of setting default parametter value
    let total = 0;
    prices.forEach(function(price){
        total = total + price
    })

    return (total - (total * discount/100))
}


console.log(findCartTotal([10, 20 , 970], 25))
console.log(findCartTotal([10, 20 , 970]))