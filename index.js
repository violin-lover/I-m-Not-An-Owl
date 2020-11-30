const express = require('express'); 
const sha1 = require("sha1");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const sendMail = require('./lib/sendEmail.js')

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
//will send the new user a link to the signup form

app.get("/verify/:email", (req, res) => {
  //receive email, form a link, send email with the link
  let email = req.params.email;
    console.log(email);
    sendMail(email)
    res.json({"success" : email});
})

const cors = require('cors');

// set up port
const PORT = 3000;

app.use(bodyParser.json())
app.use(cors());

// add routes
const router = require('./routes/router.js');
app.use('/api', router);

// run server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));