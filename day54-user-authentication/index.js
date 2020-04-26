const express = require('express')
const {mongoose} = require('./config/database')
const app = express()
const port = 3005
app.use(express.json())

// const {User} = require('./app/models/User')
const {userRouter} = require('./app/controllers/UsersController')

app.get('/', function(req, res){
    res.send('Welcome to website')
})

app.use('/users',userRouter)


app.listen(port, () => {
    console.log("listening to port ", port)
})
