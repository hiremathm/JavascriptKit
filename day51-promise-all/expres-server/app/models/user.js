const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {type: String},
    email: {type: String},
    mobile: {type: Number}
})

const User = mongoose.model('User', UserSchema)

module.exports = User;