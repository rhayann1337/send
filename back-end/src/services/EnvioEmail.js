const nodemailer = require('nodemailer');

module.exports = {

  async envio() {

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'crytektv@gmail.com',
        pass: '*******'
      }
    });

    const mailOptions = {
      from: 'crytektv@gmail.com',
      to: 'rhayannbianco@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'DEU CERTO AMIGAO!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

}