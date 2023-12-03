import {Request, Response, Router} from "express";
import { checkJwt } from "../middleware/session";
import multerMiddleware from "../middleware/file";
import { getFile } from "../controllers/upload";

const router = Router();

router.get('/', checkJwt, multerMiddleware.single('myFile'), getFile);

export {router};