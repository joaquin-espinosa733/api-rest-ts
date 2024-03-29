import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interface/user.interface";

const userSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            default: "soy la description"
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = model('users', userSchema);
export default UserModel;