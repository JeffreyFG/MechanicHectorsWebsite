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
});
router.get('/contact-info-submited',function(request,response,next)
{
  response.sendFile( './html/contactSubmited.html',rootPath);
});
module.exports = router;