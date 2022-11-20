const Todo = require("../models/Todo")

module.exports = async (req, res) => {
    try {
        const todoId = req.params.id
        const task = req.body.task
        const todo = await Todo.findById(todoId)
        todo.tasks.push(task)
        todo.save()
        res.status(201).json({
            success: true,
            message: 'Task added successfully',
            todo
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

}