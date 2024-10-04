import Express from "express";
import { userRouter } from "./routes/user.routes.js";
import { mediaRouter } from "./routes/media.routes.js"
import { connectDb } from "./config/database.js";

const adel = Express();

await connectDb();

const PORT = 3000 || process.env.PORT;

adel.use(Express.json());


adel.use("/api/v1", [userRouter, mediaRouter]);

adel.get("/",(req, res)=>{
    return res.status(200).json("Na am?")
})


adel.listen(PORT,()=>{
    console.log(`Hi, I'm running on PORT ${PORT}`)
})

