let str = 'aaaaaaaaaaaaaaaabbbbbbbbbbccccc'

function highest_occurance(str){
    let characters = str.split('')
    let output = {}
    for(let i = 0;i < characters.length; i ++){
        if(output[characters[i]] == undefined){
            output[characters[i]] = 1
        }else{
            output[characters[i]] += 1
        }
    }
    let max = 0;
    for(let key in output){
        if(output[key] > max){
            max = output[key]
        }
    }
    return max;
}

console.log(highest_occurance(str))