const express = require('express');
const app = express();
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const path = require('path');
const PORT = process.env.PORT||4000
const cors = require('cors')
const basicRoutes = require('./routers/basic');
const ejs = require('ejs');
const methodoverride = require('method-override');

//for ejs templet
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(methodoverride('_method'))
app.use(express.static(path.join(__dirname,'public')));


//load config
dotenv.config({path: './config/config.env'})
//connecting to database
connectDB()

//common middleware
app.use(cors());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/',basicRoutes)

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})