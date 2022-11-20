const Todo = require("../models/Todo");

const createTodoController = async (req, res) => {
    const { title } = req.body
    try {
        const todo = await  Todo.create({ title })
        res.status(201).json({
            success: true,
            message: 'Title Created Successfully',
            todo,
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success:false,
            message: 'Error Occured in Title Creation',
            error

        })
    }
    console.log("In create todo controller")

}

module.exports= createTodoController