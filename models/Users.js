const mongoose = require('mongoose');
const chalk = require('chalk');

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: [true, chalk.red.bold("FirstName is required")], 
        
    },
    lastName : {
        type: String,
        required: [true, chalk.red.bold("LastName is required")], 
    },
    email: { 
        type: String, 
        trim: true,  // It's basically there to ensure the strings you save through the schema are properly trimmed.
        lowercase: true,
        unique: true ,
        required: [true, chalk.red.bold("Email is required")],
        index : {
            unique : true
        },
        minlength : [6, chalk.red.bold("Email cant be less than 6 characters")],
        maxlength : [30, chalk.red.bold("Email cant be more than 30 characters")],
    },
        


    password: { 
        type: String, 
        required: [true, chalk.red.bold("password is required")]

    },
    confirmPassword: { 
        type: String, 
        required: [true, chalk.red.bold("ConfirmPassword is required")]

    },
    registeredAt: { 
        type: Date, 
        index: true 
    },
  });

  const User = mongoose.model('User', userSchema);
  userSchema.indexes()
  
  module.exports = User;



  




