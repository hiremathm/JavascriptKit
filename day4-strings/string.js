const name = "shivakumara m"
const city = "banglore"
const destination = "mysore"
const kms = "150"
const time = "1 hour 30 minutes"
//String concatination
console.log(name + ' is from ' + city)
console.log('The distance between ' + city + ' and ' + destination + ' is ' + kms + ' kms and time taken to travel is ' + time)

//Template string
console.log(`The distance between ${city} and ${destination} is ${kms} kms and time taken to travel is ${time}`)