class PageGen
{
    returnPage(name,email,phoneNumber,service,date) 
    {
        var beginingOfPageString = `<!doctype html>
            <html class="no-js" lang="">
            <head>
            <link href="../css/MainPageStyling.css" rel="stylesheet" type="text/css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <ul class= "navBar">
                <li class = "navBarElement"><a class = "navLink" href="/">Home</a></li>
                <li class = "navBarElement"><a class = "navLink" href="/reviews">Reviews</a></li>
                <li class = "navBarElement"><a class = "navLink" href="/contact">Contact</a></li>
            </ul>	
            <body>
            <p id="ContactSubmitedPageMainContent">`
        var endOfPageString=`</body></html>`
        var dynamicContentString=`Thank you `+name+` for booking your apointment at: `+date+` for a `+service +` service. `+` Hector will contact you via your phone number: `+phoneNumber + ` and at your email: ` +email;
        return beginingOfPageString+dynamicContentString+endOfPageString;   // The function returns the product of p1 and p2
    }
}
