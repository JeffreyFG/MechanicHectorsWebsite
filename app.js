const exprees = require('express');

const app = exprees();
app.use('/',function(request,response,next)
{
    response.sendFile('./public/Html/index.html', { root: __dirname });
});
app.listen(3000);
