const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require("dotenv").config();
var bookRouter = require('./routes/bookRoute');
var indexRouter = require('./routes/indexRoute');

const mongodbConnection =  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jytlndi.mongodb.net/test`+ +

app.use(bodyParser.json());

app.use('/',indexRouter);
app.use('/books',bookRouter);




mongoose.connect(mongodbConnection, () => console.log(`connected with ${process.env.DB_USERNAME}`))



app.listen(3000);
