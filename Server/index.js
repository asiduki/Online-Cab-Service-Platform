import 'dotenv/config'; // Loads environment variables
import express from 'express';
import cors from 'cors';
import db from './config/connection.js'; 
import LoginRouter from './Src/Routes/Login.js'; 

const app = express();



app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));

const Port = process.env.PORT || 5000;
app.use("/Login",LoginRouter)



app.listen(Port ,()=>{
    console.log(`server is running on ${Port}`)
})