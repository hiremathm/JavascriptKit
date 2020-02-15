function reverse_string(str){
   let output = ""
   for(let i = 1; i <= str.length; i++){
     output += str[str.length - i]
   } 
   return output;
}

console.log("The reverse string is :: ", reverse_string("bAngalore"))

console.log("By default if we dont declare a variable with var,let,const then variable scope will be global")