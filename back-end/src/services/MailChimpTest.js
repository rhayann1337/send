const mailchimp = require("@mailchimp/mailchimp_transactional")("e6ef5286ecd75fe98b2fbb6a7b3cde05-us5");

module.exports = {

    async run() {


        const message = {
            from_email: "styflerbbs@gmail.com",
            subject: "Hello world",
            text: "Welcome to Mailchimp Transactional!",
            to: [
                {
                    email: "crytektv@gmail.com",
                    type: "to"
                }
            ]
        };


        const response = await mailchimp.messages.send({
            message
        });
        console.log(response);
    }

}