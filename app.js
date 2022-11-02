const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
require("dotenv").config();
var bookRouter = require('./routes/bookRoute');
var indexRouter = require('./routes/indexRoute');
var userRouter = require('./routes/userRoute');

const mongodbConnection =  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jytlndi.mongodb.net/bookworm`;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use('/',indexRouter);
app.use('/auth',userRouter);
app.use('/books',bookRouter);




mongoose.connect(mongodbConnection, () => console.log(`connected with ${process.env.DB_USERNAME}`));



app.listen(process.env.PORT || 3000);
