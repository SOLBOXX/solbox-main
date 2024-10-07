import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const { MONGO_URI } = process.env;
// connect database


export const connectDb = async()=>{
    const connectionParams = {
        autoIndex:false,
        dbName:process.env.DATABASE_NAME
    }
      
    try{
        let dbConn = await mongoose.connect(MONGO_URI, connectionParams)
        if(dbConn ){
            console.log("Successfully connected to database");
        }
    }catch(error){
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
    }
}
