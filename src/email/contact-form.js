const nodemailer = require('nodemailer');

let transporter;

if (process.env.APP_ENV === 'production') {
    throw new Error('Email transport for production is not implemented');
} else {
    transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        auth: {
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASSWORD
        }
    });
}

const sendContactFormEmail = ({first_name, last_name, email, phone, message} = {}) => {
  process.env.SEND_TO_CONTACT_FORM.split(',').forEach((sendTo) => {
      const emailMessage = {
            from: "info@dcdynamicmassage.com",
            to: sendTo,
            subject: "Contact form submission",
            text: `You have a new contact form submission.\n\nFirst Name: ${first_name}\nLast Name: ${last_name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
            html: `<p>You have a new contact form submission!</p>
            Here is what they wrote: <br>
            First Name: ${first_name} <br>
            Last Name: ${last_name} <br>
            Email: ${email} <br>
            Phone: ${phone} <br>
            Message: ${message} <br>`
        };

        transporter.sendMail(emailMessage)
    })
  
}

module.exports = {
  sendContactFormEmail
}