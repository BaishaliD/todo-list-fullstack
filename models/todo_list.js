const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    deadline: {
        type: Date
    },
    deadline_string: String,
    category: {
        type: String
    },
    state: {
        type: Boolean       
    }
});

//define the collection that stores the schema
const todo = mongoose.model('todo',todoSchema);
module.exports = todo;
