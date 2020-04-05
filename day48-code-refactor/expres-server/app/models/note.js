const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
    // field configuration
    title: {type: String, required: true},
    body: {type: String, required: true},
    created_at: {type: Date, required: true, default: Date.now()}    
})

// create model based on schema
const Note = mongoose.model('Note', NoteSchema)

module.exports = Note;