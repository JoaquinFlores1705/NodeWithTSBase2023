import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/request.interface";

const getItems = async (req: RequestExt, res: Response) => {
    try{
        res.send({
            data: 'ESTO SOLO LO VE LAS PERSONAS CON SESSION JWT',
            user: req.user
        });
    }catch (e){
        handleHttp(res, 'ERROR_GET_BLOGS',e);
    }
}

export {getItems};