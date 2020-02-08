var readline = require('readline-sync');
var count = 10;
var target_number = Math.round(Math.random() * 100)
console.log("Target number is : ", target_number)
var i = 1;
while(i <= count) {
  var number = readline.question("Please enter number : ")
  var choices = count - i
  console.log("The value is : ", number)
  if(i == count && number != target_number){
    console.log("Sorry!, You have reached maximum number of limits, my target number was this : ", target_number)
    break;
  }
  else if(number < target_number){
    console.log("OOPs! Your number is less than the target number and target numebr is beteween " +   number + " and " + 100 + " and you have left with these many choices " + choices)
  }else if(number > target_number) {
    console.log("OOPs! Your number is greater than the target number target numeber is between" + " 1 and " + number + " and you have left with these many choices " + choices)
  }else if(number == target_number){
    console.log("Good Job!, You have guessed my target numeber, my target number was : ", target_number)
    break;
  }
  i += 1  
}
