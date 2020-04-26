const express = require('express')
const router = express.Router()
const {User} = require('../models/User')
const bcrypt = require('bcryptjs')
const {authenticateUser} = require('../middlewares/authenticate')

router.get('/', (req, res) => {
    User.find()
        .then(users => {
            console.log("users ", users)
            res.json(users)
        })
        .catch(error => {
            console.log(error)
        })
})


router.post('/', (req,res) => {
    const body = req.body
    const user = new User(body)
    console.log("is new user", user.isNew)
    user.save()
        .then(user => {
            console.log("is new user", user.isNew)
            res.json(user)
        })
        .catch(error => {
            res.json(error)
        })
})
// skiny controller and fact model
router.post('/login',(req, res)=>{
    const body = req.body

    User.findByCredentials(body.email, body.password)
        .then(function(user){
            return user.user.generateToken()
        })
        .then(function(token){
            res.setHeader('x-auth', token).send({})
        })
        .catch(function(error){
            res.send(error)
        })

    // User.findOne({email: body.email})
    //     .then(user => {
    //         if(!user){
    //             res.status('404').send({message: "Invalid Email / Password"})
    //         }
    //         bcrypt.compare(body.password, user.password)
    //             .then(result => {
    //                 if(result){
    //                     res.json({message: "User login is successfully",user})
    //                 }else{
    //                     res.status('404').send({message: "Invalid Email / Password"})
    //                 }
    //             })
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
})


// account route
router.get('/account', authenticateUser,(req, res) => {
   const user = req.user
   const token = req.token
   res.send(user)
})

router.delete('/logout', authenticateUser,(req, res) => {
    const user = req.user
    const token = req.token
    User.findByIdAndUpdate(user._id, {$pull: {tokens: {token: token}}})
        .then(()=> {
            res.send({notice: "Successfully Logged Out"})
        })
        .catch((error)=> {
            res.send(error)
        })
})

module.exports = {
    userRouter: router
}