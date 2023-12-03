import { Router } from "express";
import {readdirSync} from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const clearFileName = (fileName:string) =>{
    const file = fileName.split('.').shift();
    return file;
}

readdirSync(PATH_ROUTER).filter(fileName => {
    const cleanName = clearFileName(fileName);

    if(cleanName !== "index"){
        import(`./${cleanName}`).then(moduleRouter => {
            console.log(`cargada la ruta /${cleanName}`)
            router.use(`/${cleanName}`, moduleRouter.router);
        })
    }

    
})


export {router};