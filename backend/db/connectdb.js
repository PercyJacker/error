

//here we connect mongoose database to our database 


import { mongoose } from "mongoose";

const connectDB= async(DATABASE_URL)=>{
    try {
        const DB_OPTION ={
            DBname:'toDoList'
        }
        //DB_name is a name of the database 
        const connectionInstance = await mongoose.connect(DATABASE_URL,DB_OPTION)
        console.log(`\n mongo db is connected DB host ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("mongodb connection error ",error);
        process.exit(1)
    }
}


export default connectDB