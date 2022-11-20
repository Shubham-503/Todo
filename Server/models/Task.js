const mongoose = require('mongoose')

//Task Schema
const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }

})

const TaskModel = mongoose.model("Task", TaskSchema)
export default TaskModel 