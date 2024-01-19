import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handler";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interface/req-ext";


const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop()
        const isUser = verifyToken(`${jwt}`);
        if (!isUser) {
            res.status(401)
            res.send("NO_TIENES_UN_JWT_VALIDO")
        } else {
            req.user = isUser
            console.log({ jwtByUser });
            next()
        }
    } catch (error) {
        res.status(400)
        res.send("SESSION_NO_VALIDA");
    }
}

export { checkJwt }