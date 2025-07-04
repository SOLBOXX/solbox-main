import multer from "multer";
import {v2 as cloudinary }from "cloudinary";
import { configDotenv } from "dotenv";
configDotenv()


cloudinary.config({
    cloud_name: 'dvvxydanl',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



export async function songUpload(file){
    let cloudOutput = await cloudinary.uploader.upload(`${file}`, {
        resource_type:"auto",
        folder:"songbox",
    })
    console.log(cloudOutput.secure_url)
    return cloudOutput.secure_url
}



let storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './tmp/my-uploads')
        },

        filename:(req, file, cb)=>{
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            file.originalname.split(".")[1]
            cb(null, file.fieldname + '-' + uniqueSuffix + `.${file.mimetype.split("/")[1]}`)
        }
});

export const uploadMedia = multer({storage:storage})