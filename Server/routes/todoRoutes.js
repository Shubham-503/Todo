const express = require('express')
const router = express.Router()

// Controllers Import
const createTaskController = require('../controllers/createTodoController')
const createTaskTodoController = require('../controllers/createTaskTodoController')

// Routes
router.post('/createtodo',createTaskController)
router.post('/createtask/:id',createTaskTodoController)

module.exports = router