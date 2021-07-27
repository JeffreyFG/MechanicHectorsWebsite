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
  },
  tls:
  {
    rejectUnauthorized:false
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

  let messageToHector =`
  <html class="no-js" lang="">
    <head>
      <link href="https://hectorthemechanic.site/css/MainPageStyling.css" rel="stylesheet" type="text/css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
  <ul class= "navBar">
      <li class = "navBarElement"><a class = "navLink" href="/">Home</a></li>
      <li class = "navBarElement"><a class = "navLink" href="/reviews">Reviews</a></li>
      <li class = "navBarElement"><a class = "navLink" href="/contact">Contact</a></li>
  </ul>	
    <body style="background:url(https://hectorthemechanic.site/images/Background.jpg)">
          <p id="ContactSubmitedPageMainContent">
          Hector a customer named: ${request.body.nameValue} wants a ${request.body.serviceTypeValue} on or near the date of: ${request.body.dateValue} \n 
          you can reach them at: ${request.body.phoneNumberValue} or at: ${request.body.emailValue}
          </p>

    </body>
  </html>`;




  transporter.sendMail({
    from: '"Hector" <appointmentcreator@hectorthemechanic.site>', // sender address
    to: "JeffreyFulmerGardner@Outlook.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html:messageToHector // html body
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