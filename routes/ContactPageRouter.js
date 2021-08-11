const { request } = require('express');
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const { getMaxListeners } = require('process');
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
  let plainTextForHector =`Hector a customer named: ${request.body.nameValue} wants a ${request.body.serviceTypeValue} on or near the date of: ${request.body.dateValue} \n 
  you can reach them at: ${request.body.phoneNumberValue} or at: ${request.body.emailValue}`
  let plainTextForCostomer = `Thank you for requesting an appointment with Hector. Hector will contact you and work out final pricing with labor and parts for your ${request.body.serviceTypeValue} as well as what date and time works. remember \n
                              When hector can see you might change.`
  console.log(emailOfCustomer);
  var HectorsEmailAddress = "Rotorlugo@getMaxListeners.com";
  transporter.sendMail({
    from: '"Hector" <appointmentcreator@hectorthemechanic.site>', // sender address
    to: "JeffreyFulmerGardner@Outlook.com", // list of receivers
    subject: "customer request", // Subject line
    text: plainTextForHector, // plain text body
    html:plainTextForHector // html body
  });
  transporter.sendMail({
    from: '"Hector" <appointmentcreator@hectorthemechanic.site>', // sender address
    to: emailOfCustomer, // list of receivers
    subject: "customer request", // Subject line
    text: plainTextForCostomer, // plain text body
    html:plainTextForCostomer // html body
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