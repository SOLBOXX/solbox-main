import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isArtist:{
        type:Boolean,
        default:false
    }
},{timestamps:true})


export const User = mongoose.model("User", userSchema)



