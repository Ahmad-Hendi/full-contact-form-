const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
const chalk = require('chalk');
const bcrypt = require('bcrypt');
const saltRounds = 10;




router.get('/', (req, res) => {
  res.render('register.ejs')
})



router.post('/', (req, res) => {
  console.log(req.body);
  let newRegister = new User ({
        firstName : req.body.firstName,
        lastName : req.body.lasttName,
        email : req.body.email,
        password : req.body.password,
        confirmPassword: req.body.passwordConfirm,
        registeredAt: new Date,


      });
      


      
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 8000,
        secure: false,
        tls: {
          rejectUnauthorized: false
        },
        requireTLS: true,
        auth: {
          user: 'nextflixteam@gmail.com',
          pass: '1234test'
        },
        
      });
      
      let mailOptions = {
        from: 'nextflixteam@gmail.com',
        to: req.body.email,
        subject: 'Sending email using nodemailer',
        text: `this is my first test for noode mailer`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log(chalk.bold.cyan('Email sent: ' + info.response));
        }

      });
      newRegister.save();
      res.redirect('/index')
});



  
    
module.exports = router;
    
        




