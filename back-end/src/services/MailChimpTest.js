const mailchimp = require("@mailchimp/mailchimp_transactional")(
  "6OxWlWa79BHIK5BrXHsnkw"
);

// mailchimp.setConfig({
//   apiKey: "2d645aa617eead1d90ada5e0cacde070-us5",
//   server: "us5",
// });

module.exports = {
  async run() {
    const message = {
      from_email: "styflerbbs@gmail.com",
      subject: "Hello world",
      text: "Welcome to Mailchimp Transactional!",
      to: [
        {
          email: "crytektv@gmail.com",
          type: "to",
        },
      ],
    };

    const response = await mailchimp.messages.send({
      message,
    });
    console.log(response);
  },
};
