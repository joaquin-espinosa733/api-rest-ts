import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { registerUpload } from "../services/storage";
import { RequestExt } from "../interface/req-ext";
import { Storage } from "../interface/storage";

const getFile = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req;
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`
        }
        const response = await registerUpload(dataToRegister)
        res.send(response)
    } catch (error) {
        handleHttp(res, "ERROR_GET_BLOG")
    }
}


export { getFile }