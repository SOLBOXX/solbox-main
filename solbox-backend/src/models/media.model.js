import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title:{
        type:String
    },
    file:{ //IPFS link
        type:String
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const Song = mongoose.model("Song", songSchema)
