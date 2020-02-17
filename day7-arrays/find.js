const tempratures = [23, 24, 25.5, 26, 27, 18, 29]

function find_temp(tempratures, value){
    let temp;
    for(let i = 0; i < tempratures.length; i++){
        if(tempratures[i] > value){
            temp = tempratures[i]
            break;
        }
    }
    return temp
}

console.log(find_temp(tempratures, 25))

function find_temp_js(tempratures, value){
    let temp = tempratures.find(function(temprature){
        return temprature > value
    })
    return temp
}

console.log(find_temp_js(tempratures, 25))

function find_all_temp_js(tempratures, value){
    let output = []
    output = tempratures.filter(function(temprature){
        return temprature > value
    })
    return output
}

console.log(find_all_temp_js(tempratures, 25))

//Note : forEach will not return anything
//filter will return the value and check condtions
