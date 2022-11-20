const mongoose = require("mongoose");

const connectToDB = () => {
    mongoose
    .connect('mongodb://localhost:27017/todo')
    .then((conn)=> {
        console.log(`Connected to DB: ${conn.connection.host}`);
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1)
    })
}

module.exports = connectToDB