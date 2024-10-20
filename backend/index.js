import express from "express";
import connectDB from "./db/connectdb.js";
import router from "./route/route.js"; 
import cors from "cors"

const app=express()

const port = process.env.PORT || "8000"
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017"


connectDB(DATABASE_URL)

app.use(cors())
app.use(express.json());

app.use("/api",router)

app.listen(port, ()=>{
    console.log(`server is running at port ${port}`);
})