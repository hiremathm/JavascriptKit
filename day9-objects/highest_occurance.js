let str = 'aaaaaaaaaaaaaaaabbbbbbbbbbccccc'

function highest_occurance(str){
    let characters = str.split('')
    let output = {}
    let max = 0;
    for(let i = 0;i < characters.length; i ++){
        if(output[characters[i]] == undefined){
            output[characters[i]] = 1
        }else{
            output[characters[i]] += 1
        }
        if(output[characters[i]] > max){
            max = output[characters[i]]
        }
    }
    return max;
}

console.log(highest_occurance(str))