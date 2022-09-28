const express = require('express');
const route = express.Router();
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const dotenv = require('dotenv');
const path = require('path');
    dotenv.config({path: './config.env'})

const services = require('../services/render');
const controller = require('../controller/controller');


route.get('/', services.homeRoutes);


route.get('/add-product', services.add_product);




route.post('/api/products', controller.create);
route.get('/api/products', controller.find);



let transporter = nodemailer.createTransport(smtpTransport({
    host: process.env.SMTP_MAIL_HOST,
    port: process.env.SMTP_MAIL_PORT,
    auth: {
      user: process.env.SMTP_MAIL_USERNAME, 
      pass: process.env.SMTP_MAIL_PASSWORD, 
    }
  }));
  

  route.post('/api/send-email', function(req,res){
    
    const mailOptions = {
         from: process.env.SMTP_MAIL_USERNAME,
         to: 'gabriel.picinato10@gmail.com',
         subject: 'Email',
         text:'Produto cadastrado no banco com sucesso!'
     };
  
    transporter.sendMail(mailOptions, function(error, info){
         if (error) {
             console.log(error);  
         } else {     
             res.redirect('/add-product');
         }   
    });
});

module.exports = route;