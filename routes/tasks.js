var express = require ('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin@ds163796.mlab.com:63796/my_task_app',['tasks']);


router.get('/tasks',(req,res,next)=>{
    
   // res.send('tasks file');
    db.tasks.find((err,tasks)=>{
        if(err){
            res.send(err);
        }
         res.json(tasks);
  
      });


});

// Get Single Task
router.get('/tasks/:id',(req,res,next)=>{
    
    // res.send('tasks file');
     db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)},(err,tasks)=>{
         if(err){
             res.send(err);
         }
          res.json(tasks);
   
       });
 
 
 });
 





module.exports = router;