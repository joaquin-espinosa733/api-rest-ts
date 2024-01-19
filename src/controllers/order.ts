import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interface/req-ext";


const getblog = async (req: RequestExt, res: Response) => {
    try {
        const userData = await req.user;
        res.json({
            data: "Esto solo lo ve las personas con session / JWT ",
            user: userData,
        })
    } catch (e) {
        handleHttp(res, "ERROR_GET_BLOG")
    }
}


export {
    getblog,
}