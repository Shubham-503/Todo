const mongoose = require('mongoose')


//Todo Schema
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    },
    tasks: {
        type: [String],
        trim: true
    },
    user: {
        type: String,
        required:[true, "user Id is missing"]
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Todo", TodoSchema)