const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongodbSession = require('connect-mongodb-session')(session);
require("dotenv").config();

var bookRouter = require('./routes/bookRoute');
var indexRouter = require('./routes/indexRoute');
var authRouter = require('./routes/authRoute');
var userRouter = require('./routes/userRoute');

const mongodbConnection =  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jytlndi.mongodb.net/bookworm`;


const store = new mongodbSession({
    uri: mongodbConnection,
    collection: "mySessions",
});

app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: false,
    store: store,
}));

const isAuth = (req,res,next)=>{
    if(req.session.isAuth){
        next();
    }else{
        res.render('pleaseAuth.ejs');
    }
};

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', isAuth, userRouter);
app.use('/books', isAuth, bookRouter);




mongoose.connect(mongodbConnection, () => console.log(`connected with ${process.env.DB_USERNAME}`));

 

app.listen(process.env.PORT || 3000);
