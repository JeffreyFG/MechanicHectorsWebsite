const express = require('express');

const app = express();
app.use(express.static('public'));
app.use('/',function(request,response,next)
{
     // response.send("jeffrey");
    response.sendFile('./index.html',{ root: '/home/hectuywu/HectorSite/public/Html'});
});
app.listen(process.env.PORT);
