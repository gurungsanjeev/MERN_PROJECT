const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors());


mongoose.connect('mongodb://127.0.0.1:27017/todo')
.then(()=> console.log("database is connected"))
.catch((err)=> console.log("error aayo hai " + err));

let task=[];

app.get('/task', (req,res)=>{
    res.json(task); // respond with the current list of the task
})

app.post('/task', (req,res)=>{
    const {task} = req.body; // getting task from the reqest body
task.push(task);
res.status(201).json(task);
})

app.delete('/task/:index', (req,res)=>{
    const {index}=req.params;
    task.splice(index,1);
    res.status(200).json({message:'Task Delete'});

});

app.put('/tasks/:index', (req, res) => {
    const { index } = req.params; // Get the task index from the URL
    const { task } = req.body; // Get the new task from the request body
    tasks[index] = task; // Update the task at the specified index
    res.status(200).json({ message: 'Task updated' }); // Respond with a success message
  });


//   app.listen(port, () => {
//     console.log(`Backend running on http://localhost:${port}`);
//   });