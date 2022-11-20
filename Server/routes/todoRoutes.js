const express = require('express')
const router = express.Router()

const createTaskController = require('../controllers/createTodoController')
const createTaskTodoController = require('../controllers/createTaskTodoController')

router.post('/createtodo',createTaskController)
router.post('/createtask/:id',createTaskTodoController)

module.exports = router