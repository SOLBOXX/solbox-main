import {Router} from "express";
import { getAllSongs, uploadSong, getArtistSongs, getSongById } from "../controllers/media.controller.js";
import { uploadMedia } from "../utils/fileupload.js";
import { artistAccess, userAccess } from "../middleware/auth.js";

export const mediaRouter = Router();

mediaRouter.post("/upload-song",[uploadMedia.single("songFile"),artistAccess], uploadSong).get("/song",userAccess, getAllSongs)
mediaRouter.get("/artist-songs",artistAccess, getArtistSongs).get("/song/:songId", getSongById)
