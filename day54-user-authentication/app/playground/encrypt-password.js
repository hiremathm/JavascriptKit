const bcrypt = require('bcryptjs')

const password = "shiva@123"
bcrypt.genSalt(10)
    .then((salt)=> {
        console.log("salt", salt)
        bcrypt.hash(password, salt)
            .then((encryptedpassword) => {
                console.log("encrypted password", encryptedpassword)
            })
    })