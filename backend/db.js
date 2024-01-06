const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://paliwalarpit93:ri4X1OcH1iGfWI5o@cluster0.yalb5cm.mongodb.net/todo");
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});
const todo = mongoose.model('todo', todoSchema);
module.exports={
    todo
};