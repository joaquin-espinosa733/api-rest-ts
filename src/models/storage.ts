import { Schema, Types, model, Model } from "mongoose";
import { Storage } from "../interface/storage";


const storageSchema = new Schema<Storage>(
    {
        fileName: {
            type: String,
        },
        idUser: {
            type: String
        },
        path: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const StorageModel = model('storage', storageSchema);
export default StorageModel;