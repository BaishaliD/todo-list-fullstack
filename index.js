const express = require('express');
const app = express();


//use static files
app.use(express.static('./assets')); 


//use express router
app.use('/',require('./routes/router'));


//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');


//run the server on port 8000
app.listen(8000, function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
    }

    console.log('Server running on port 8000');
})