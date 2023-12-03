import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { deleteCar, getCar, getCars, insertCar, updateCar } from "../services/item.service";

const getItem = async ({params}: Request, res: Response) =>{
    try{
        const {id} = params;
        const response = await getCar(id);
        const data = response ? response : 'NOT_FOUND';
        res.send(data);
    }catch (e){
        handleHttp(res, 'ERROR_GETITEM',e);
    }
}

const getItems = async (req: Request, res: Response) => {
    try{
        const response = await getCars();
        res.send(response);
    }catch (e){
        handleHttp(res, 'ERROR_GETITEMs',e);
    }
}

const updateItem = async({params, body}: Request, res: Response) =>{
    try{
        const {id} = params;
        const response = await updateCar(id,body);
        res.send(response);
    }catch (e){
        handleHttp(res, 'ERROR_UPDATEITEM',e);
    }
}

const postItem = async ({body}: Request, res: Response) =>{
    try{
        const responseItem = await insertCar(body);
        res.send(responseItem);
    }catch (e){
        handleHttp(res, 'ERROR_POSTITEM',e);
    }
}

const deleteItem = async ({params}: Request, res: Response) =>{
    try{
        const {id} = params;
        const responseItem = await deleteCar(id);
        res.send(responseItem);
    }catch (e){
        handleHttp(res, 'ERROR_DELETEITEM');
    }
}

export {getItem, getItems, postItem, updateItem, deleteItem};