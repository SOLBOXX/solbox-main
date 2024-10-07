import { User } from "../models/user.model.js";
import { Keypair } from "@solana/web3.js";
import { Wallet } from "../models/wallet.model.js";

export const register = async(req, res) => {
    let {username, email, password, confirmPassword, isArtist} = req.body

    try{
        let emailExist = await User.findOne({email:email})
        if (emailExist){
            return res.status(400).json({message:"Email exist, please login"})
        }

        if(password !== confirmPassword){
            return res.status(400).json({message:"Passwords must be same"})
        }
        if(password.length < 8){
            return res.status(400).json({message:"Minimum of 8 character long password!"})
        }
        let hashPassword = await bcrypt.hash(password, 10)
        let userWallet = Keypair.generate()
        let privateKey = bs58.encode(userWallet.secretKey)

        let user = new User({
            username:username,
            email:email,
            password:hashPassword,
            isArtist:isArtist
        })
        await Wallet.create({
            address:userWallet.publicKey.toBase58(),
            key:privateKey,
            userId:user._id
        });
        return res.status(201).json({message:"User registered successfully"})
    }catch(error){
        console.error(error)
        return res.status(201).json({message:"User registered successfully"})
    }
}

export const login = async(req, res)=>{
    let {email, password} = req.body
    try{
        let userExist = await User.findOne({email:email}).select("password")
        if(!userExist){
            return res.status(400).json({message:"User not found, Please register"})
        }

        let comparedPassword = await bcrypt.compare(password, userExist.password)

        if(!comparedPassword){
            return res.status(400).json({message:"Incorrect password"})
        }

        let token = jwt.sign(userExist.toJSON(), process.env.JWT_SECRET_KEY)

        return res.status(200).json({message:"Log in successful", accessToken:token})
    }catch(error){
        console.error(error)
        return res.status(500).json({message:error.message,error:error})
    }

}
