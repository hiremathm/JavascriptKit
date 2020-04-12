const express = require('express')
const Router = express.Router()

// controllers call
const notesController = require('../app/controllers/notesController')
const usersController = require('../app/controllers/usersController')

// Notes Routes
Router.get('/notes', notesController.notes)
Router.post('/notes', notesController.create)
Router.get('/notes/:id',notesController.show)
Router.put('/notes/:id', notesController.update)
Router.delete('/notes/removeTag', notesController.removeTag)
Router.delete('/notes/:id', notesController.delete)

// Users Routes
Router.get('/users', usersController.users)
Router.post('/users', usersController.create)
Router.get('/users/:id', usersController.show)
Router.put('/users/:id', usersController.update)
Router.delete('/users/:id', usersController.delete)

module.exports = Router