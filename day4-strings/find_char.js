function charCount(str,char){
    let output = 0;
    if(str.length == 0){
        return output
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] == char){
            output++;
        }
    }
    return output;
}
console.log("Char Count ::", charCount("", "i"))
