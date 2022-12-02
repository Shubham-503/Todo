const Todo = require('../models/Todo')

const deleteTaskTodoCOntroller = async (req,res)=> {
    try {
        // Extract id and task
        const { id, idx } = req.params
        const { token } = req.cookies


        // Query DB and Delete task
        const todo = await Todo.find({ _id: id, user: token });

        if (todo.length == 0)
            return res.status(200).json({
                message: "No todo found"
            })
        todo[0].tasks.splice(idx,1)
        todo[0].save()

         // Send Response Back to Client
         res.status(201).json({
            success: true,
            message: 'Task Deleted Successfully',
            todo,
        })

    } catch (error) {
        // Log the error and send back response to client
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: 'Error Occured in Task Deletion',
            error

        })
    }
}

module.exports = deleteTaskTodoCOntroller