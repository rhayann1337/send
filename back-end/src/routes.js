const express = require('express')

const routes = express.Router()

const UserController = require('./controllers/UsuarioController')

routes.post('/users', UserController.store)
routes.get('/users', UserController.show)
routes.delete('/users', UserController.delete)

module.exports = routes