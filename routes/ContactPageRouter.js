const { request } = require('express');
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const url = require('url');  
require('dotenv').config();
EmailUserName=process.env.EmailUserName;
EmailPassword=process.env.EmailPassword;
let transporter =nodemailer.createTransport({
  host: "hectorthemechanic.site",
  port: 465,
  secure: true,
  auth: {
    user: EmailUserName,
    pass: EmailPassword
  }
});
let rootPath = { root: './public'}
/* GET Contact page. */
router.get('/', function(request, response, next) 
{
  response.sendFile( './html/contact.html',rootPath);
});
router.post('/submit-contact-info', function(request, response, next) 
{
  transporter.sendMail({
    from: '"Hector" <apointmentcreator@hectorthemechanic.site>', // sender address
    to: "JeffreyFulmerGardner@Outlook.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  transporter.verify(function(error, success) 
  {
    if (error) 
    {
      console.log(error);
    } 
    else 
    {
      
    }
  });
  response.redirect(url.format({
    pathname:"/contact/contact-info-submited",
    query:request.body,
  }));
});
router.get('/contact-info-submited',function(request,response,next)
{
  response.sendFile( './html/contactSubmited.html',rootPath);
});
module.exports = router;