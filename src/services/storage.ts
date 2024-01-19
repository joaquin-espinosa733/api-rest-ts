import { Storage } from "../interface/storage";
import StorageModel from "../models/storage";


const registerUpload = ({ fileName, idUser, path }: Storage) => {
    const responseUpload = StorageModel.create({ fileName, idUser, path });
    return responseUpload;
}

export { registerUpload }