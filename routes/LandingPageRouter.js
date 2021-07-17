var express = require('express');
var router = express.Router();
var path = require('path');
/* GET Home page. */
let rootPath = { root: './public'}
router.get('/', function(req, res, next) 
{
  res.sendFile( './html/index.html',rootPath);
});
module.exports = router;