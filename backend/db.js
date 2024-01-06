const mongoose = require('mongoose');
mongoose.connect("conection_string");
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});
const todo = mongoose.model('todo', todoSchema);
module.exports={
    todo
};
