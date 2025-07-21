const express = require("express");
const app = express();
const db = require("./config/connection")
const cors = require("cors");
const LoginRouter = require("./Src/Routes/Login");
require('dotenv').config();


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));

const Port = process.env.PORT || 5000;
app.use("/Login",LoginRouter)



app.listen(Port ,()=>{
    console.log(`server is running on ${Port}`)
})