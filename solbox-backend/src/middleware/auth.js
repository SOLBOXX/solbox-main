import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export const userAccess = (req, res, next)=>{
    if(!req.headers.authorization){
        return res.status(401).json({ message: "Unauthorized - No Authorization header provided" });
    }
    let authorizationHeader = req.headers.authorization.split(' ')
    let signedToken = authorizationHeader[1]

    if(!signedToken){
        return res.status(401).json({message:"Unauthorized - No token provided"})
    }

    try{
        jwt.verify(signedToken, process.env.SECRET_KEY,(err, token)=>{
            if(err){
                return res.status(403).json({message:"Forbidden", code:403})
            }
            req.user = token

            console.log("Token verified")

            next()
        })
    }catch(error){
        return res.status(401).json({ message: "Unauthorized - Invalid token"})
    }
}

export const artistAccess = (req, res, next)=>{
    if(!req.headers.authorization){
        return res.status(401).json({ message: "Unauthorized - No Authorization header provided" });
    }
    let authorizationHeader = req.headers.authorization.split(' ')
    let signedToken = authorizationHeader[1]

    if(!signedToken){
        return res.status(401).json({message:"Unauthorized - No token provided"})
    }

    try{
        jwt.verify(signedToken, process.env.SECRET_KEY,(err, token)=>{
            if(err){
                return res.status(403).json({message:"Forbidden", code:403})
            }
            req.user = token

            if(token.isArtist == false){
                return res.status(403).json({message:"Permission Denied, Be an artist/creator", code:403})
           
            }
            console.log("Token verified")

            next()
        })
    }catch(error){
        return res.status(401).json({ message: "Unauthorized - Invalid token"})
    }
}

