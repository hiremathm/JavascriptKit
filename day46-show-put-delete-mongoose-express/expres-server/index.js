const express = require('express')
const mongoose = require('mongoose')

 
const app = express()
const port = 3000

// connect express to mongo via mongoose
// setup promise library to be ES6 promise
// javascript has global promise library
mongoose.Promise = global.Promise

// connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/note-app',{useNewUrlParser: true})
// it returns promise object, it is asynchronous operation
    .then(()=>{
        console.log("Connected to db")
    })
    .catch(() => {
        console.log("Unable to connect to mongodb")
    })

// schema == object constructor function
const Schema = mongoose.Schema

const NoteSchema = new Schema({
    // field configuration
    title: {type: String, required: true},
    body: {type: String, required: true},
    created_at: {type: Date, required: true, default: Date.now()}    
})

// create model based on schema
const Note = mongoose.model('Note', NoteSchema)


// app listening to port 
app.listen(port, function(){
    console.log('listening to port ', 3000)
})


// confifugre reading incoming json data
// application level middle ware function
app.use(express.json())

// home page
app.get('/' , (req, res) =>{
    res.send('Welcome to noteapp app')
})

// list notes
app.get('/notes', (req, res) => { 
    Note.find()
        .then((notes) => {
            res.json(notes)
        })
        .catch((error) => {
            res.json(error)
        })
})
// post notes
app.post('/notes', (req, res) => { 
    const body = req.body
    const note = new Note(body)
    note.save()
        .then((note) => {
            res.json(note)
        })
        .catch((error) => {
            res.json(error)
        })
})

// show note
app.get('/notes/:id', (req, res) => { 
    const id = req.params.id
    Note.findById(id)
        .then((note) => {
            res.json(note)
        })
        .catch((error) => {
            res.json(error)
        })
})

// delete single record
app.delete('/notes/:id', (req, res) => { 
    const id = req.params.id
    Note.findByIdAndDelete(id)
        .then((note) => {
            res.json(note)
        })
        .catch((error) => {
            res.json(error)
        })
})

// update single record
app.put('/notes/:id', (req, res) => { 
    const id = req.params.id
    const body = req.body
    Note.findByIdAndUpdate(id,{$set: body},{new: true})
        .then((note) => {
            res.json(note)
        })
        .catch((error) => {
            res.json(error)
        })
})
