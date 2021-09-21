const Usuario = require('../models/Usuario')
const mongoose = require('mongoose');

module.exports = {
    async store(req, res) {

        const { email, senha, nome, sobrenome, cpf, matricula, cargo, endereco, complemento, cidade } = req.body.usuario;

         const usuarioExistente = await Usuario.findOne({ email: email });

        if (usuarioExistente) {
            return res.json('Usuário já existente!');
        }

        const usuario = await Usuario.create({
            email,
             senha,
              nome,
               sobrenome,
                cpf,
                 matricula,
                  cargo,
                   endereco,
                    complemento,
                     cidade
        });

        return res.json(usuario);
    },

    async show(req, res) {

        const { nome } = req.params;

            const usuarioExistente = await Usuario.find(nome);

            if(usuarioExistente) {
                return res.json(usuarioExistente);
            } else {
                return res.status(400).json('Usuário não encontrado');
            }
        
    },

    async delete(req, res) {

        const ObjectId = mongoose.Types.ObjectId;
        const { usuarioId } = req.params;

        if(ObjectId.isValid(usuarioId)) {

            const usuarioExistente = await Usuario.findById(usuarioId);


                if(usuarioExistente) {
                    await usuarioExistente.delete();
                    return res.json("Usuário excluído com sucesso!");
                } else {
                    return res.json("Usuário não encontrado.");
                }

            } else {
                return res.status(400).json("Id inválido");
            }  
        
    },
}