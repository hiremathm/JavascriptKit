const bcrypt = require('bcryptjs')

const password = 'rash123'
const encryptedPassword = "$2a$10$j/GFp87A2Az7cthIiUUJaeAo2KbL5nRS6AXG1uIAvVSvtaLYbZDci"
bcrypt.compare(password, encryptedPassword)
    .then(result => {
        console.log(result)
    })