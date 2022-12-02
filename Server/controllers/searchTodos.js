const Todo = require("../models/Todo")

const searchTodos = async (req, res) => {

    try {
        // Extract query and token
        const { q } = req.query
        const { token } = req.cookies


        // validate q
        if (!q) {
            return res.status(400).json({
                success: false,
                error: "search can not be empty"
            })
        }
        if (typeof q !== 'string') {
            return res.status(400).json({
                success: false,
                error: "search  must be of string type"
            })
        }

        // Search for todo and tasks
        const todo = await Todo.find({ $or: [{ title: new RegExp(q, 'i') }, { tasks: new RegExp(q, 'i') }],  $and:[{user:token}] })

        if (todo.length == 0)
            return res.status(200).json({
                message: "No todo found"
            })

        // Send Response Back to Client
        return res.status(200).json({
            success: true,
            message: 'Todo fetched successfully',
            todo
        })
    } catch (error) {
        // Log the error and send back response to client
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: 'Error Occured in Todo search',
            error

        })
    }

}

module.exports = searchTodos