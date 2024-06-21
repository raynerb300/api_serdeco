import { HEADER } from "./Constants.js";
import fs from 'fs';

export function generateFile(data=[]) {
    let contenido = "";
    const numero = [];
    let fileName = "documento.txt"
    let dirFile ="./reports/" + fileName;

    for (let i = 0; i < data.length; i++) {
        let object = data[i];
        for ( let key in object){
            numero.push (object[key]);
            contenido += object[key] + "|";
        }
        contenido = contenido.slice(0, contenido.length-1)
        contenido += "\n"
    }
    
    contenido = contenido.slice(0, contenido.length-1)

    let content = HEADER + "\n" + contenido 

    fs.appendFile(dirFile, content, (error) => {
        if (error){
            throw error;
        }
    });
    
    return {
        fileName:fileName, dirFile: dirFile
    };
}