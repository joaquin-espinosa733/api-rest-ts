import { Router, Response, Request } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middlewares/log";

const router = Router();

router.get("/", getItems)
router.get("/:Id", logMiddleware, getItem)
router.put("/:id", updateItem)
router.delete("/:id", deleteItem)
router.post("/", postItem)






export { router } 