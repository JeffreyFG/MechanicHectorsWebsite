var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
let serverRootPath = { root: '/home/hectuywu/HectorSite/public/'};
let developmentRootPath = { root: './public'}
router.get('/', function(req, res, next) 
{
  //res.sendFile( './index.html',serverRootPath);  
  res.sendFile( './html/index.html',developmentRootPath);
});

module.exports = router;