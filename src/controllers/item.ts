import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler"
import { inserItem, getItemsService, getCar, updateCar, deleteCar } from "../services/item"

const getItem = async ({ params }: Request, res: Response) => {
    const { id } = params;
    try {
        const response = await getCar(id);
        const data = response ? response : "NOT_FOUND"
        res.status(200).json(data)
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEM", e)
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getItemsService();
        res.status(200).json(response)
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS", e)
    }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateCar(id, body)
        res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_ITEMS", e)
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await inserItem(body)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, "ERROR_POST_ITEMS", e)
    }
}

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteCar(id)
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_ITEM", e)
    }
}

export {
    getItem,
    getItems,
    updateItem,
    postItem,
    deleteItem
}