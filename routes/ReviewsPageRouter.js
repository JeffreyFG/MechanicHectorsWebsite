var express = require('express');
let rootPath = { root: './public'}
const mongoose = require('mongoose');
require('dotenv').config();
const ReviewPost = require('../DataBase/reviewSchema');
var router = express.Router();
/* GET Contact page. */
const DataBasePassword = process.env.DataBasePassword;
const URI=`mongodb+srv://HectorSiteWebAdmin:${DataBasePassword}@cluster0.hafug.mongodb.net/clustor0?retryWrites=true&w=majority`
//console.log(URI);
try
  {
    mongoose.connect(URI,{ useNewUrlParser: true,useUnifiedTopology: true });
  }
catch(e)
{
    console.log(e);
}
finally
{
        
}
router.get('/',function(request, response, next) 
{
  response.sendFile( './html/reviews.html',rootPath);
});
router.get('/recentReviews', async function(request,response,next)
{
  var recentReviews = await ReviewPost.find();
  response.json(recentReviews);
});

router.post('/createReview',function(request, response,next)
{
  let reviewPost = new ReviewPost({
    title:request.body.titleValue,
    description:request.body.descriptionValue,
    Stars:request.body.starValue});
     console.log("before saving");
  try
  {
    const newPost =reviewPost.save()
  }
  catch(err)
  {
    response.status(400);
    console.log("error in creating post");
    console.log(err);
  }
  response.redirect('/reviews');
});
router.get('/createReviewPage',function(request,response,next)
{
  response.sendFile('./html/createReview.html',rootPath);
});
module.exports = router;