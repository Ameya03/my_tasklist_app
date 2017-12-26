var express = require ('express');
var router = express.Router();
var index = 


router.get('/',(req,res,next)=>{
    
    res.send('Index File');


});

module.exports = router;