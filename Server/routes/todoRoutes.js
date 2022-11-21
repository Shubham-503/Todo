const express = require('express')
const router = express.Router()

// Controllers
const createTodoController = require('../controllers/createTodoController')
const createTaskTodoController = require('../controllers/createTaskTodoController')
const editTodoController = require('../controllers/editTodoController')
const editTaskTodoController = require('../controllers/editTaskTodoController')
const deleteTodoController = require('../controllers/deleteTodoController')
const deleteTaskTodoController = require('../controllers/deleteTaskTodoController')

// Routes
router.post('/createtodo',createTodoController)
router.post('/createtask/:id',createTaskTodoController)
router.put('/edittodo/:id',editTodoController)
router.put('/edittask/:id/:idx',editTaskTodoController)
router.delete('/deletetodo/:id',deleteTodoController)
router.delete('/deletetask/:id/:idx',deleteTaskTodoController)

module.exports = router