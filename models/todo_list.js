const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    
});

const todo = mongoose.model('todo',todoSchema);
module.exports = todo;
