import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/request.interface";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try{

        const jwtByUSer = req.headers.authorization || '';
        const jwt = jwtByUSer.split(' ').pop();
        const isUser = verifyToken(`${jwt}`) as { id: string };
        console.log(isUser);
        if(!isUser){
            res.status(401);
            res.send("NOT_VALID_SESSION");
        }else{
            req.user = isUser;
            console.log({jwtByUSer});
            next();
        }
    }catch(e){
        res.status(402);
        res.send('SESSION_NOT_VALID');
    }
}

export {checkJwt}