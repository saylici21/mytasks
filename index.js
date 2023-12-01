import  Express  from "express"
import mongoose from "mongoose"
import Tasks from "./model/tasksModel.js";

const app = Express()
const port=5555;
app.use(Express.json())

app.get('/', async(req,res)=>{
    const tasks = await Tasks.find()
    res.json(tasks)
    
    })
  


app.post('/',async(req,res)=>{
    const{title, date, finished}=req.body;
    const newTask=new Tasks({
        title, date, finished
    });
     const task = await newTask.save();
     res.json(task)
     
    
})

app.put('/:id',async(req,res)=>{
    const{title, date, finished}=req.body;

    const task= await Tasks.findById(req.params.id)
    
     if(task){
        task.title=title
        task.date=date
        task.finished=finished
        const updateedTask= await task.save();
        res.json(updateedTask)
     }
     
    
})

app.delete('/:id',async(req,res)=>{
    
    const task= await Tasks.findByIdAndDelete(req.params.id)
    res.json({message:"task delete"})
})

app.listen(port,()=>{
    console.log(`the server is running ${port}`)
})

mongoose.connect('mongodb+srv://sayliciupdy:sayliciupdy@nuur.oo8eqoz.mongodb.net/mytasks?retryWrites=true&w=majority')
.then(()=>{
    console.log('connect to the database')
})