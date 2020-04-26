const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        unique: true
    },
    // validator is package for email validation
    email: {
        type: String,
        required: true,
        uniq: true,
        validate: {
            validator: (value) => {
              return validator.isEmail(value)                
            },
            message: () => {
                return 'invalid email'
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128
    },
    tokens: [
        {
            token: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        
        }
    ]
})

userSchema.pre('save', function(next){
    const user = this
    if(user.isNew){
        bcrypt.genSalt(10)
        .then(function(salt){
            bcrypt.hash(user.password, salt)
                .then(function(encryptedPassword){
                    user.password = encryptedPassword
                    next()
                })
        })
    }
    else{
        next()
    }
})


// own static method(any class methods will attach to statics property)
userSchema.statics.findByCredentials = function(email, password){
   const User = this
//    console.log("password ", password)
//    console.log("email ", email)
   return User.findOne({email: email})
       .then(user => {
            if(!user){
                return new Promise(function(res, rej){
                    res({message: "Invalid Email / Password"})
                })
            }
            return bcrypt.compare(password, user.password)
            .then(result => {
                if(result){
                    return Promise.resolve({message: "User login is successfully", user: user})
                    
                }
                else {
                    return Promise.reject({message: "Invalid Email / Password"})
                }
            })
        
       })
       .catch(error => {
            return Promise.reject(error)
        })
}

userSchema.statics.findByToken = function(token){
    const User = this
    let tokendata
    try{
        tokendata = jwt.verify(token, 'jwt@123')
    }catch(error){
        return Promise.reject(error)
    }
    return User.findOne({_id: tokendata._id, 'tokens.token': token})
}

// own instance method(any instance method will attach to the methods property)

userSchema.methods.generateToken = function(){
    const user = this

    const tokendata = {
        _id: user._id,
        username: user.username,
        createdAt: Number(new Date())
    }

    const token = jwt.sign(tokendata, "jwt@123")
   
    user.tokens.push({token: token})

    return user.save()
        .then(function(user){
            return Promise.resolve(token)
        })
        .catch(function(error){
            return Promise.reject(error)
        })
}

const User = mongoose.model('User', userSchema);

module.exports = {
    User
} 