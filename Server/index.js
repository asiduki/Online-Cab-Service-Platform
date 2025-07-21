const express = require("express");
const app = express();
const db = require("./config/connection")
const cors = require("cors");
const LoginRouter = require("./Src/Routes/Login");
require('dotenv').config();


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use("/Login",LoginRouter)



app.listen(5000 ,()=>{
    console.log("server is running on 5000")
})