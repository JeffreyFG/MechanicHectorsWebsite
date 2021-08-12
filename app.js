const express = require('express');

const LandingPageRouter = require('./routes/LandingPageRouter');
const ReviewsPageRouter = require('./routes/ReviewsPageRouter');
const ContactPageRouter = require('./routes/ContactPageRouter');
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/', LandingPageRouter);
app.use('/reviews',ReviewsPageRouter);
app.use('/contact',ContactPageRouter);
app.listen(3001);
