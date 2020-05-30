const nodemailer = require("nodemailer");

// Create reusable transporter object using SMTP transport.
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: strapi.config.mail.GOOGLE_USER,
    pass: strapi.config.mail.GOOGLE_PASSWORD,
  },
});

module.exports = {
  send: (to, subject, text) => {
    // Setup e-mail data.
    const options = {
      from: strapi.config.GOOGLE_USER,
      to,
      subject,
      text,
    };

    // Return a promise of the function that sends the email.
    return transporter.sendMail(options);
  },
};
