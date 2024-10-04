import {Router} from "express"
import { login, register } from "../controllers/user.controller.js"

export const userRouter = Router();

userRouter.post("/register", register).post("/login", login)
