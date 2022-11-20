const mongoose = require('mongoose')

//import Task Model
const Task = require("./Task")

//Todo Schema
const TodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    },
    tasks: {
        type: [Task],
        trim: true
    }
})

const TodoModel = mongoose.model("Todo", TodoSchema)
export default TodoModel