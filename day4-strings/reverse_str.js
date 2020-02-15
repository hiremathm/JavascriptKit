function reverse_string(str){
   let output = ""
   for(let i = 1; i <= str.length; i++){
     output += str[str.length - i]
   } 
   return output;
}

console.log("The reverse string is :: ", reverse_string("bangalore"))