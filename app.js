const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const chalk = require('chalk');
const nodemailer = require("nodemailer");

// const nodeMailer = require('express-handlebars');



const app = express();

let port = 8000;


// view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




// Connecting to MongoDB
const mongooseURI = 'mongodb+srv://Ahmad:1234@cluster0.9arla.mongodb.net/Registration';

mongoose.connect(mongooseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

mongoose.connection.on('connected', (error) => {
    if (error) {
        console.log(error)
    }else {
        console.log(chalk.cyan.bold('DB connected'))
    }
})








app.listen(port, () => {
    console.log(chalk.cyan.bold('Server Started ..... '));
})


app.use('/public', express.static(path.join(__dirname, 'public')))





app.use('/', require('./routes/index'));
app.use('/register' ,require('./routes/register'));