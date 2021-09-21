const express = require('express')

const routes = express.Router()

const UserController = require('./controllers/UsuarioController')
const UsuarioColaboradorController = require('./controllers/UsuarioColaboradorController')
const UsuarioAdminController = require('./controllers/UsuarioAdminController')
const LoginController = require('./controllers/LoginController')
const EmailController = require('./controllers/EmailController')
const MailChimpTest = require('./services/MailChimpTest')
//Usuario
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.delete('/users/:usuarioId', UserController.delete);
routes.get('/users/:usuarioId', UserController.show);
//Usuario Colaborador
routes.post('/users', UsuarioColaboradorController.store);
routes.get('/users', UsuarioColaboradorController.index);
routes.delete('/users/:usuarioId', UsuarioColaboradorController.delete);
routes.get('/users/:usuarioId', UsuarioColaboradorController.show);
//Usuario Admin
routes.post('/users', UsuarioAdminController.store);
routes.get('/users', UsuarioAdminController.index);
routes.delete('/users/:usuarioId', UsuarioAdminController.delete);
routes.get('/users/:usuarioId', UsuarioAdminController.show);

routes.post('/login', LoginController.login);
routes.post('/email', EmailController.envio);
routes.post('/mailchimp', EmailController.mailchimp);

module.exports = routes