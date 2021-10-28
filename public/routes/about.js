const express = require('express'); 
const router = express.Router(); 

router.get('/about', (request, respnse) => {
    //sending a string //could send html, json, 
    respnse.send('About Page and html here haha')
});

router.get('/me', (request, respnse) => {
    //sending a string //could send html, json, 
    respnse.send('THis is about meeeee I could also put html here heheb')
});



