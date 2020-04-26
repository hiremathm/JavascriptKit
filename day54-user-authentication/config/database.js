const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/authentication-db',{useNewUrlParser: true})
.then(() =>{
        console.log("Connected to mongodb")
    })
    .catch(() => {
        console.log("Unable to connect mongodb")
    }) 

module.exports = mongoose