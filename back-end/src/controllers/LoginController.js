const Usuario = require('../models/Usuario')
const UsuarioAdmin = require('../models/UsuarioAdmin')
const UsuarioColaborador = require('../models/UsuarioColaborador');
const { envio } = require('../services/EnvioEmail');

module.exports = {
    async login(req, res) {

        const { email, senha, tipo } = req.body.usuario;

        const usuarioAutenticado = await Usuario.findOne({ email: email, senha: senha });
        
        envio()

        if(tipo === 'admin'){
            const usuarioAutenticado = await UsuarioAdmin.findOne({ email: email, senha: senha });
            console.log('Usuario adm')
        }

        if(tipo === 'colaborador'){
            const usuarioAutenticado = await UsuarioColaborador.findOne({ email: email, senha: senha });
            console.log('Usuario colaborador')
        }

        if(usuarioAutenticado) {
            return res.json(usuarioAutenticado);
        } else {
            return res.status(403).json('Dados incorretos ou usuário não existe.');
        }
    }

};