//define function for sending emails and export it for use in verify
const nodemailer = require('nodemailer');

function sendMail(email) {
  console.log("recipients" + email)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tsaiada1',
      pass: process.env.user
    }
  });

  const mailOptions = {
    from: 'tsaiada1@gmail.com',
    to: email,
    subject: 'Welcome to Owlery™!',
    html: '<h1>Please click the link below to finish your signup and set up your profile! Your owl awaits you!</h1>'
  };

  console.log("recipients" + email)

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}


module.exports = sendMail; 