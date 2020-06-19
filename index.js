const express = require('express');
const app = express();
















//run the server on port 8000
app.listen(8000, function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
    }

    console.log('Server running on port 8000');
})