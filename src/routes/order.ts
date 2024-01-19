import { Router } from "express";
import { getblog } from "../controllers/order";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.get("/", checkJwt, getblog)

export { router }