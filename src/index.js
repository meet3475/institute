// console.log("okk");

const express = require('express')
const cors = require('cors')

const connectDB = require('./db/mongodb')
const route = require("./routes/api/v1/index");

const app = express();

app.use(cors())
app.use(express.json())

connectDB();

app.use('/api/v1' , route);

app.listen(8000,() => {
    console.log("server i started at port 8000");
} )