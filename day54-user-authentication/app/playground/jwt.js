const jwt = require('jsonwebtoken')

const data = {
    id: 1,
    username: 'shiva'
}

const token = jwt.sign(data, 'shiva')
console.log("token", token)

console.log(jwt.verify(token, 'shiva'))