import { Car } from "../interface/car.interface"
import ItemModel from "../models/item"

const inserItem = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert
}

const getItemsService = async () => {
    const responseItem = await ItemModel.find({})
    return responseItem
}

const getCar = async (id: string) => {
    const responseItem = await ItemModel.findOne({ id: id });
    return responseItem
}

const updateCar = async (id: string, data: Car) => {
    const responseItem = await ItemModel.findOneAndUpdate(
        { _id: id },
        data,
        { new: true });
    return responseItem
}

const deleteCar = async (id: string) => {
    const responseItem = await ItemModel.deleteOne({ _id: id });
    return responseItem;
}

export { inserItem, getItemsService, getCar, updateCar, deleteCar }