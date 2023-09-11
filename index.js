import express from "express";
import cors from "cors"
import { conn } from "./src/connections/database.js";
import authRouter from "./src/routes/authrouter.js"
import venueRouter from "./src/routes/venuerouter.js"
import bookingRouter from "./src/routes/bookingrouter.js"
import dotenv from "dotenv"

//basic requirement for Connections
dotenv.config()
const app=express()
const PORT=process.env.PORTNO

//middlewares
app.use(cors())
app.use(express.json({limit:"10mb"}))

//database connection
conn

//Routers for server and database
app.use("/",authRouter)
app.use("/",venueRouter)
app.use("/",bookingRouter)

//healthcheck for checking the server
app.get("/healthcheck",(req,res)=>{
    res.send("Health Checking is Progress")
})

//sever connection
app.listen(PORT,(req,res)=>{
    console.log("Server Started for Running")
})