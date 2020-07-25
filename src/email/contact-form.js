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
            html: `Dear ${first_name},
            <div style="line-height:90%;"><br></div>
            <p>Thank you for writing to us. Your request was received. </p>
            Here is what you have submitted: <br>
            First Name: ${first_name} <br>
            Last Name: ${last_name} <br>
            Email: ${email} <br>
            Phone: ${phone} <br>
            Message: ${message} <br>
            <p> We will get back to you shortly. Until then, you can give us a call anytime at 818-703-8480.</p>
            <div style="line-height:90%;"><br></div>
            Sincerely, <br>
            Your Dynamic Massage team`
        };

        transporter.sendMail(emailMessage)
    })
  
}

module.exports = {
  sendContactFormEmail
}