import fs from 'fs';
import archiver from 'archiver';

export function CompressFile(nombreArchivo){
    let ubicacionArchivo = "./reports/"
    let output = fs.createWriteStream (ubicacionArchivo + nombreArchivo + ".zip");
    let archive = archiver ("zip");
    archive.pipe (output);

    archive.append(fs.createReadStream("./reports/documento.txt"), {name: "documentoZip.txt"});
    archive.finalize().then(() => {
        fs.unlinkSync("./reports/documento.txt")
    });
}