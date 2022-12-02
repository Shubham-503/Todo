const Todo = require('../models/Todo')

const deleteTodoController = async (req, res) => {
    try {
        // Extract id 
        const { id } = req.params;
        const { token } = req.cookies


        // Query DB and delete
        const todo = await Todo.findOneAndDelete({_id:id,user:token})

         // Send Response Back to Client
         res.status(201).json({
            success: true,
            message: 'Todo Deleted Successfully',
            todo,
        })
    } catch (error) {
        // Log the error and send back response to client
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: 'Error Occured in Todo Deletion',
            error

        })
    }
}

module.exports = deleteTodoController