var express = require('express');
var router = express.Router();
var path = require('path');
let serverRootPath = { root: '/home/hectuywu/HectorSite/public/'};
let developmentRootPath = { root: './public'}
router.get('/', function(req, res, next) 
{
  //res.sendFile( './index.html',serverRootPath);  
  res.sendFile( './html/reviews.html',developmentRootPath);
});

module.exports = router;