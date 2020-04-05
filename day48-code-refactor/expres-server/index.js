const express = require('express')
const {mongoose} = require('./config/database')
const Router = require('./config/routes')


const cors = require('cors')
const app = express()
// confifugre reading incoming json data
// application level middle ware function
app.use(express.json())
app.use(cors())
const port = 3002

// app listening to port 
app.listen(port, function(){
    console.log('listening to port ', port)
})
// home page
app.get('/' , (req, res) =>{
    res.send('Welcome to noteapp app')
})

// note routes
// app.use('/notes,notesController)
app.use('/', Router)
