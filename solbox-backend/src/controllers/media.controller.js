import { Song } from "../models/media.model.js";
import { songUpload } from "../utils/fileupload.js";
import { User } from "../models/user.model.js";

// let blockstore = new FsBlockstore({path:'../blockstore',});
// let helia = await createHelia({
//     blockstore:blockstore,
//     peerDiscovery
// });
// let xfs = unixfs(helia);

export const uploadSong = async(req, res)=>{ //middleware to check
    // const data = req.file
    // const data = fs.readFileSync(req.file.path)
    // console.log(data)
    // let suuffix = data.originalname.split(".")
    // console.log(suuffix[1])
    // console.log(data)
    // const cid = await xfs.addBytes(data)
    // console.log(cid)
    try{
        const user = await User.findOne({_id:req.user._id})
    
        if(user.isArtist == false){
            return res.status(400).json({"message":"Only Artist can upload song"})
        }
    
        let songUrl = await songUpload(req.file.path)
    
        let song = new Song({
            title:req.body.title,
            file:songUrl,
            userId:req.user._id
        })
        return res.status(201).json({"data":song})
    }catch(error){
        console.error(error)
        return res.status(500).json({error:error})
    }    
}

export const getSongById = async(req, res)=>{
    try{
        const song = await Song.findOne({_id:req.params.songId})
        return res.status(200).json({"message":"Song retrieved successfully","data":song})
    }catch(error){
        console.error(error)
        return res.status(500).json({error:error})
    }  
}

export const getArtistSongs = async(req, res)=>{ //middleware
    try{
        const user = await User.findOne({_id:req.user._id})
    
        if(user.isArtist == false){
            return res.status(400).json({"message":"Artist song only"})
        }
        const song = await Song.find({userId:req.user._id})
        return res.status(200).json({"message":"Songs retrieved successfully","data":song})
    }catch(error){
        console.error(error)
        return res.status(500).json({error:error})
    }
}

export const getAllSongs = async(req, res) =>{
    try{
        let songData = [];
        const songs = await Song.find({}).populate("userId", "username")

        for(let song of songs ){
            songData.push({
                title:song.title,
                file:song.file,
                artist:song.userId.username,
            })    
        }
        return res.status(200).json({"message":"Songs retrieved successfully","data":songData})
    }catch(error){
        console.error(error);
        return res.status(500).json({error:error})
    }
}