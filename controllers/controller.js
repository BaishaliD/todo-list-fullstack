const todoDb = require('../models/todo_list');


module.exports.home = function(req,res){
    todoDb.find({},function(err,data){
        if(err){
            console.log('Error in fetching from db', err);
            return;
        }

        return res.render('index',{
            //title: "Contact List",
            todo_list: data
        });
    });
}


module.exports.add = function(req,res){
    console.log('*****',req.body);
    todoDb.create({
        task: req.body.task,
        category: req.body.category,
        deadline: req.body.deadline,
        status: false
    }, function(err,data){
        if(err){
            console.log('error in creating a todo',err);
            return;
        }

        console.log('*****',data);
        return res.redirect('back');
    });
}


module.exports.delete = function(req,res){
    //get the id param from the url
    let id = req.query.id;
    
    //find the task from the db with the given id and delete it
    todoDb.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting a task',err);
            return;
        }
        return res.redirect('back');
    });
};


module.exports.update = function(req,res){
 //   return res.render('back');
}