const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
    // field configuration
    title: {type: String, required: true},
    body: {type: String, required: true},
    created_at: {type: Date, required: true, default: Date.now()},
    category: {type: Schema.Types.ObjectId, ref: 'Category', required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}    
    
})

// create model based on schema
const Note = mongoose.model('Note', NoteSchema)

module.exports = Note;