const express = require('express')
const router = express.Router()

// Controllers
const createTodoController = require('../controllers/createTodoController')
const createTaskTodoController = require('../controllers/createTaskTodoController')
const editTodoController = require('../controllers/editTodoController')
const editTaskTodoController = require('../controllers/editTaskTodoController')

router.post('/createtodo',createTodoController)
router.post('/createtask/:id',createTaskTodoController)
router.post('/edittodo/:id',editTodoController)
router.post('/edittask/:id/:idx',editTaskTodoController)

module.exports = router