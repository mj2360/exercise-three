const express = require('express'); 
const router = express.Router(); 

router.get('/', (request, respnse) => {
    //sending a string //could send html, json, 
    respnse.send('Server Running!')
});

module.exports = router; 