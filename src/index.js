// console.log("okk");

const express = require('express')
const connectDB = require('./db/mongodb')
const app = express();
const route = require("./routes/api/v1/index");


connectDB();

app.use(express.json())
app.use('/api/v1' , route);

app.listen(3000,() => {
    console.log("server i started at port 3000");
} )