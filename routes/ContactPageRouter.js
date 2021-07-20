const { request } = require('express');
var express = require('express');
var router = express.Router();
const url = require('url');    
/* GET Contact page. */
let rootPath = { root: './public'}
router.get('/', function(request, response, next) 
{
  response.sendFile( './html/contact.html',rootPath);
});
router.post('/submit-contact-info', function(request, response, next) 
{
  response.redirect(url.format({
    pathname:"/contact/contact-info-submited",
    query:request.body,
  }));
  /*
  var nameValue = request.body.nameValue; 
  var emailValue = request.body.emailValue;
  var phoneNumberValue = request.body.phoneNumberValue;
  var serviceTypeValue = request.body.serviceTypeValue;
  var dateValue = request.body.dateValue;
  response.redirect('/contact/contact-info-submited?nameValue='+nameValue+"&emailValue="+emailValue+"&phoneNumberValue="+phoneNumberValue+"&serviceTypeValue="+serviceTypeValue+"&dateValue="+dateValue);
  */
});
router.get('/contact-info-submited',function(request,response,next)
{
  response.sendFile( './html/contactSubmited.html',rootPath);
});
module.exports = router;