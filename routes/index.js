var express = require ('express');
var router = express.Router();
//var index = 


router.get('/',(req,res,next)=>{
    
    res.render('index.html');


});

module.exports = router;