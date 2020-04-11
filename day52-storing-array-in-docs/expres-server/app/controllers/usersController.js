const User = require('../models/user')
const Note = require('../models/note')
module.exports.users = (req, res) => {
    User.find()
        .then(users => {
            res.json(users)
        })
        .catch(error => {
            res.json(error)
        })
}

module.exports.create = (req,res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then(user => {
            res.json(user)
        })
        .catch(error=> {
            res.json(error)
        })
}

module.exports.update = (req,res) => {
    const body = req.body
    const id = req.params.id 
    User.findByIdAndUpdate(id, {$set: body},{new: true, runValidators: true})
        .then(user => {
            res.json(user)
        })
        .catch(error=> {
            res.json(error)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Promise.all([User.findById(id), Note.find({user: id})])
        .then(response => {
            res.json({user: response[0], notes: response[1]})
        })
        .catch(error => {
            res.json(error)
        })
}

module.exports.delete = (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then(user => {
            res.json(user)
        })
        .catch(error => {
            res.json(error)
        })
}