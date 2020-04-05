const express = require('express')
const Router = express.Router()

// controllers call
const notesController = require('../app/controllers/notesController')


// Notes Routes
Router.get('/notes', notesController.notes)
Router.post('/notes', notesController.create)
Router.get('/notes/:id',notesController.show)
Router.put('/notes/:id', notesController.update)
Router.delete('/notes/:id', notesController.delete)


module.exports = Router 