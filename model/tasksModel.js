import mongoose from 'mongoose'
const tasksSchema=mongoose.Schema({
    title:{
        type:string,
        required:[true,'Title is required'],
    },
    date:{
        type:string,
        required:[true,'Date is required'],
    },
    finished:{
        type:boolean,
        default:false
}
})
const Tasks= mongoose.model('tasks',tasksSchema)

export default Tasks