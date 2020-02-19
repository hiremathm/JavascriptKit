const colors = [['white', 'peace'],['blue','tranquality']]

function makeObj(colors){
    let output = {}
    colors.forEach(function(color){
        output[color[0]] = color[1]
    })
    return output;
}

function makeArr(colors){
    let output = []
    for(let key in colors){
        let data = [key, colors[key]]
        output.push(data)
    }
    return output
}

console.log("Make Object :: ",makeObj(colors))
console.log("Make Array :: ", makeArr(makeObj(colors)))