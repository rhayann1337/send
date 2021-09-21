const { Schema, model } = require('mongoose')

const UserAdminSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },

    matricula: String,

    cargo: String,

    endereco: String,

    complemento: String,

    cidade: {
        type: String,
        required: true
    },
},
    {
    timestamps: true //createdAt and updatedAt
    })

module.exports = model('UsuarioAdmin', UserAdminSchema)

