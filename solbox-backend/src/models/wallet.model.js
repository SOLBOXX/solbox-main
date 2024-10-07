import mongoose, { mongo } from "mongoose";

const walletSchema = new mongoose.Schema({
    address:{
        type:String,
    },
    key:{
        type:String,
    },

    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const Wallet = mongoose.model("Wallet", walletSchema)