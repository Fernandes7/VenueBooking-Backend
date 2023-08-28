import express from "express";
import cors from "cors"
import { conn } from "./src/connections/database.js";
import authRouter from "./src/routes/authrouter.js"

//basic requirement for Connections
const app=express()
const PORT=8000

//middlewares
app.use(cors())
app.use(express.json({limit:"10mb"}))

//database connection
conn

//Routers for server and database
app.use("/",authRouter)

//healthcheck for checking the server
app.get("/healthcheck",(req,res)=>{
    res.send("Health Checking is Progress")
})

//sever connection
app.listen(PORT,(req,res)=>{
    console.log("Server Started for Running")
})