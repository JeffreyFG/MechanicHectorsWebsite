var express = require('express');
var router = express.Router();
let rootPath = { root: './public'}
/* GET Contact page. */
router.get('/', function(req, res, next) 
{
  res.sendFile( './html/reviews.html',rootPath);
});

module.exports = router;