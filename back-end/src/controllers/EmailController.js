const { envio } = require('../services/EnvioEmail');
const { run } = require('../services/MailChimpTest');

module.exports = {
    async envio() {

        envio()

    },

    async mailchimp(){
        run()
    }
}