var express = require('express');
var router = express.Router();
var path = require('path');
/* GET Contact page. */
let rootPath = { root: './public'}
router.get('/', function(req, res, next) 
{
  res.sendFile( './html/contact.html',rootPath);
});
router.post('/submit-contact-info', function(req, res, next) 
{
  res.redirect('/');
});
module.exports = router;