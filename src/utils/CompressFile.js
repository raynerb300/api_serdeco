import fs from 'fs';
import archiver from 'archiver';

export function CompressFile(nombreArchivo){
    let ubicacionArchivo = "./reports/"
    let output = fs.createWriteStream (ubicacionArchivo + nombreArchivo + ".zip");
    let archive = archiver ("zip");

    archive.pipe (output);
    archive.directory (ubicacionArchivo, "Archivos")
    archive.finalize()
}