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
 


//Save Task
router.post('/task', (req, res, next)=>{
    var task = req.body;
    if(!task.title || !(task.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

//Upate task
router.put('/task/:id', (req, res, next)=>{
var task = req.body;
var updTask = {};

if(task.isDone){
updTask.isDone = task.isDone;
}

if(task.title){
updTask=task.title;
}

if(!updTask){

    res.status(400);
    res.json({
   "error":"Bad Data"
})
}else{
db.tasks.update({_id:mongojs:ObjectId(req.params.id)},updTask, {},(err,task)=>{

if(err){
res.send(err);

}
res.json(task);
});
}
});
module.exports = router;



module.exports = router;