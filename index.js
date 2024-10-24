import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoute from './Routers/productRouter.js'

//initialization

dotenv.config();
const app=express();
//cors initialization
app.use(cors({
    origin:"*",
    credentials:true,
    methods:["GET","PUT","DELETE","POST"]
}));

//default middleware for req.body
app.use(express.json())

//Default Router
app.get('/',(req,res)=>{
    res.status(200).send("Welcome to backend")
})

//custom router from routers;
app.use('/api/product',productRoute)

const port =process.env.PORT || 5000

//port running 
app.listen(port,()=>{
    console.log("server started and running on the port");
    
})

