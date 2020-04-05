// const express = require('express')
const Note = require("../models/note")

// const router = express.Router()
// router.get('/', (req, res) => { 
//     Note.find()
//         .then((notes) => {
//             res.json(notes)
//         })
//         .catch((error) => {
//             res.json(error)
//         })
// })
// // post notes
// router.post('/', (req, res) => { 
//     const body = req.body
//     const note = new Note(body)
//     note.save()
//         .then((note) => {
//             res.json(note)
//         })
//         .catch((error) => {
//             res.json(error)
//         })
// })

// // show note
// router.get('/:id', (req, res) => { 
//     const id = req.params.id
//     Note.findById(id)
//         .then((note) => {
//             res.json(note)
//         })
//         .catch((error) => {
//             res.json(error)
//         })
// })

// // delete single record
// router.delete('/:id', (req, res) => { 
//     const id = req.params.id
//     Note.findByIdAndDelete(id)
//         .then((note) => {
//             res.json(note)
//         })
//         .catch((error) => {
//             res.json(error)
//         })
// })

// // update single record
// router.put('/:id', (req, res) => { 
//     const id = req.params.id
//     const body = req.body
//     Note.findByIdAndUpdate(id,{$set: body},{new: true})
//         .then((note) => {
//             res.json(note)
//         })
//         .catch((error) => {
//             res.json(error)
//         })
// })

// module.exports = router

module.exports.notes = function(req,res){
    Note.find()
        .then((notes) => {
            res.json(notes)
        })
        .catch((error) => {
            res.json(error)
        })   
}

module.exports.create = function(req,res){
    const body = req.body
    const note = new Note(body)
    note.save()
        .then((note) => {
            res.json(note)
        })
        .catch((error) => {
            res.json(error)
        })   
}

module.exports.show = function(req,res){
    const id = req.params.id
    Note.findById(id)
        .then((note) => {
            res.json(note)
        })
        .catch((error) => {
            res.json(error)
        })   
}

module.exports.delete = function(req,res){
    const id = req.params.id
    Note.findByIdAndDelete(id)
        .then((note) => {
            res.json(note)
        })
        .catch((error) => {
            res.json(error)
        })
}

module.exports.update = function(req,res){
    const id = req.params.id
    const body = req.body
    Note.findByIdAndUpdate(id,{$set: body},{new: true})
        .then((note) => {
            res.json(note)
        })
        .catch((error) => {
            res.json(error)
        })
}