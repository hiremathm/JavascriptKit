const text = "make in india"

const strs = text.split(' ')

console.log(strs)
let str = "#"
for(let i = 0; i < strs.length ; i++){
    str += strs[i][0].toUpperCase() + strs[i].slice(1)
}

console.log("hash tag is :: ", str)
