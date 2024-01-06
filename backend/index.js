const express = require('express');
const cors = require('cors');
const app = express();
const {todo} = require('./db');
const {createTodo, updateTodo} = require('./types');
app.use(express.json());
app.use(cors());

app.post('/todo', async(req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({msg: "Invalid payload!"});
        return ;
    }
    // put in db
    await todo.create({
        title: createPayload.title,

        description: createPayload.description,
        completed: false
    })
    return res.json({msg: "Added!"});
});
app.get('/todos', async(req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    });
});
app.put('/completed', async(req, res) => {
    const updatePayload = req.body;
    // console.log(updatePayload);
    const parsedPayload = updateTodo.safeParse(updatePayload);
   // console.log(parsedPayload.error);
    if (!parsedPayload.success) {
        res.status(411).json({msg: "Invalid payload!"});
        return;
    }
    // update as completed
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })
    return res.json({msg: "Updated!"});

});

//app.use(express.json({msg: "Some Error Occured!"}));
app.listen(3000);