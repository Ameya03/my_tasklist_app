var express = require ('express');
var router = express.Router();
var index ="../views/index.html";

router.get('/',(req,res,next)=>{
    
    res.render(index);
   

});

module.exports = router;