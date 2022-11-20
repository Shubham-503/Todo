require('dotenv').config()
const express = require('express')

const connectToDB = require('./config/db')
const createTaskTodoController = require('./controllers/createTaskTodoController')
const createTodoController = require('./controllers/createTodoController')
const app = express()

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB()
// app.use('/',createTodoController)
// app.get('/',createTodoController)
app.post('/createtodo',createTodoController)
app.post('/createtask/:id',createTaskTodoController)

module.exports = app;
