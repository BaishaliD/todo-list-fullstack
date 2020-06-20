const todoDb = require('../models/todo_list');

//render the todo list from the database
module.exports.home = function(req,res){
    todoDb.find({},function(err,data){
        if(err){
            console.log('Error in fetching from db', err);
            return;
        }

        return res.render('index',{
            todo_list: data
        });
    });
}

//add a new todo to the list
module.exports.add = function(req,res){
    console.log('*****',req.body);
    todoDb.create({
        task: req.body.task,
        category: req.body.category,
        deadline: req.body.deadline,
        state: false
    }, function(err,data){
        if(err){
            console.log('error in creating a todo',err);
            return;
        }

        console.log('*****',data);
        return res.redirect('back');
    });
}

//delete a single todo from the database and display the updated list
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

//update the state of a todo (completed/pending)
module.exports.update = function(req,res){

    let id = req.query.id;
    let currentState = req.query.state;
    
    todoDb.updateOne({_id:id},{$set: {state: currentState}},function(err){        
        if(err){
            console.log('error in deleting a task',err);
            return;
        }
        return res.redirect('back');
    });
};

//delete all completed todos
module.exports.deleteCompleted = function(req,res){

    todoDb.deleteMany({state: true}, function(err){
        if(err){
            console.log('Error in deleting completed todos ',err);
            return;
        }
        return res.redirect('back');
    })
}

//delete all todos
module.exports.deleteAll = function(req,res){

    todoDb.deleteMany({},function(err){
        if(err){
            console.log('Error in deleting all todos ',err);
            return;
        }
        res.redirect('back');
    })
}