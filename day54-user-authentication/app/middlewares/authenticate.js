const {User} = require('../models/User')
const authenticateUser = function(req, res, next){
    const token = req.header('x-auth')
    User.findByToken(token)
        .then(user => {
            if(user){
                req.user = user
                req.token = token
                next()
            }else{
                res.status('401').send({notice: "Token is invalid"})
            }
        })
        .catch(error => {
            res.status('401').send(error)
        })
}

module.exports = {
    authenticateUser
}