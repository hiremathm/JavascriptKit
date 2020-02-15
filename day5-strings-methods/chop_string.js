function chopString(str, len){
    let output = []
    for(let i = 0; i < str.length; i += len){
        let text = str.substr(i, len)
        output.push(text)
    }
    return output;
}

console.log(chopString("shivakumaram",3))