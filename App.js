const express=require('express');
const App=new express();
const route=require('./src/route/api');

const bodyParser=require('body-parser');
const helmet=require('helmet');
const hpp=require('hpp');
const cors=require('cors');
const cookie=require('cookie-parser');
const ratelimiter=require('express-rate-limit');
const mongoose=require('mongoose');
const path=require('path');

//Security Impliment
App.use(bodyParser.urlencoded({ extended: false }))
App.use(bodyParser.json())
App.use(helmet());
App.use(hpp());
App.use(cors());
App.use(cookie());


//
const limit=ratelimiter({
    windowMs: 15 * 60 * 1000,
	limit: 100,
})
App.use(limit)


//DataBase conencting with mongoose
let URI="mongodb+srv://<username>:<password>@cluster0.nsiopuc.mongodb.net/CRUD";
let OPTION={user:'test1111',pass:'test1111',autoIndex:true};
mongoose.connect(URI,OPTION).then((res)=>{
    console.log("Database Connect")
}).catch((error)=>{
    console.log(error)
})


//Routin back-end
App.use("/api/v1",route)

// Undefined Route Implemetn
App.use("*",(req,res)=>{
    res.status(400).json({status:"fail",data:"Not Found"})
})


module.exports=App;