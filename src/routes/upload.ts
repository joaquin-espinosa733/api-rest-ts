import { Router } from "express";
import { getFile } from "../controllers/upload";
import { checkJwt } from "../middlewares/session";
import multerMiddleware from "../middlewares/file";



const router = Router();

router.post("/", checkJwt, multerMiddleware.single("miFile"), getFile);

export { router }