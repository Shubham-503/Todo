require('dotenv').config()
const express = require('express')
const connectToDB = require('./config/db')

const app = express()

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB()
app.use('/',(req,res)=>{
    res.send("Home Route")
})
module.exports = app;
