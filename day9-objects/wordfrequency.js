const str = 'virat virat virat sachin dhoni'

function word_frequency(str){
    let words = str.split(" ")
    let output = {}
    for(let i = 0; i < words.length; i++){
        if(output[words[i]] == undefined){
            output[words[i]] = 1
        }else{
            output[words[i]] += 1
        }
    }
    return output;
}
console.log(word_frequency(str))