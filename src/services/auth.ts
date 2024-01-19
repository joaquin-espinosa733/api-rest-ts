import { Auth } from "../interface/auth.interface"
import { User } from "../interface/user.interface";
import UserModel from "../models/auth"
import { encrypt, verified } from "../utils/bcrypt.handler";
import { generateToken } from "../utils/jwt.handler";


const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "ALREADY_USER";
    const passHash = await encrypt(password)
    const registerNewUser = await UserModel.create({ email, password: passHash, name });
    return registerNewUser;
}

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password //TODO el encriptado
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "PASSWORD_INCORRECT";

    const token = await generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs
    }
    return data;
}

export { registerNewUser, loginUser }