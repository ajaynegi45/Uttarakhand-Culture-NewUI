import nodemailer from 'nodemailer';



const mailer = nodemailer.createTransport({
  host: process.env.MAIL_SERVER_HOST as string,
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MAIL_SERVER_USER,
    pass: process.env.MAIL_SERVER_PASS,
  }
});

export default mailer;