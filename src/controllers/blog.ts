import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler"

const getblog = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "ERROR_GET_BLOG")
    }
}

const getblogs = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "ERROR_GET_BLOGS")
    }
}

const updateblog = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_BLOGS")
    }
}

const postblog = async({body}: Request, res: Response) => {
    try {
        res.send(body)
    } catch (e) {
        handleHttp(res, "ERROR_POST_BLOGS")
    }
}

const deleteblog = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "ERROR_DELETE_BLOG")
    }
}

export {
    getblog,
    getblogs,
    updateblog,
    postblog,
    deleteblog
}