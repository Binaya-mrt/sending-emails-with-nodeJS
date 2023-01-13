const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
const sendEmailEthereal = async (req, res) => {
  let testAccount = nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "justen.pfannerstill@ethereal.email",
      pass: "JFzvS23xmA7ZbUAWzm",
    },
  });
  let info = await transporter.sendMail({
    from: '"binaya marahatha" <marahathabinaya@gmail.com>',
    to: "marahathabinaya@gmail.com",
    subject: "hello",
    text: "hi! i send this email from node js :( ",
  });
  res.json(info);
};
const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "marahathabinaya@gmail.com", // Change to your recipient
    from: "marahathabinaya@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  const info = await sgMail.send(msg);
  res.json({ message: `email send sucessfully !` });
};
module.exports = sendEmail;
