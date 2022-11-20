require('dotenv').config()
const express = require('express')
const app = express()

const connectToDB = require('./config/db')
// const createTaskTodoController = require('./controllers/createTaskTodoController')
// const createTodoController = require('./controllers/createTodoController')
const todoRoutes = require('./routes/todoRoutes')

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB()
app.use('/',todoRoutes)
// app.get('/',createTodoController)
// app.post('/createtodo',createTodoController)
// app.post('/createtask/:id',createTaskTodoController)

module.exports = app;
