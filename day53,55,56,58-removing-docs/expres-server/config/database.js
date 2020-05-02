const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/note-app',{useNewUrlParser: true})
// it returns promise object, it is asynchronous operation
    .then(()=>{
        console.log("Connected to db")
    })
    .catch(() => {
        console.log("Unable to connect to mongodb")
    })

module.exports = {
    mongoose
}