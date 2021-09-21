const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const bodyParser = require('body-parser')

const server = express()

mongoose.connect('mongodb+srv://rhayann:2s6nvgiYVPfGOO6v@cluster0.js721.mongodb.net/sendtest?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

server.use(express.json());

server.use(routes)

server.listen(3333)