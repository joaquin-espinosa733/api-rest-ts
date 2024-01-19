import ItemModel from "../models/item"
import { Car } from "../interface/car.interface";


const getOrders = async () => {
    const responseOrder = await ItemModel.find({});
    return responseOrder;
}

export { getOrders }