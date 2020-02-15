function find_vowels(str){
    str = str.toLowerCase();
    let output = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            output++;
        }
    }
    return output;
}

console.log("Vowels count :: ", find_vowels("bAngalore"))