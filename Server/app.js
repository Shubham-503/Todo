require('dotenv').config()
const express = require('express')
const app = express()

const connectToDB = require('./config/db')
const todoRoutes = require('./routes/todoRoutes')

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',todoRoutes)

//Db connection
connectToDB()


module.exports = app;
