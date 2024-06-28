import { generateFile } from "../utils/GenerateFile.js";
import { CompressFile } from "../utils/CompressFile.js";
import { ReportFAGA } from "./ReportFAGA.js";
import { Resend } from 'resend';
import path from "path";
import fs from "fs";

export async function SendFAGA(nombreDelComprimido) {
    const data = await ReportFAGA()
    let attachement = [];
    await generateFile(data)
    await CompressFile(nombreDelComprimido)
    console.log(nombreDelComprimido+".zip");
    let fileBytes= fs.readFileSync(path.join(path.resolve(),"src/libs/hola.txt"), { encoding: 'UTF-8' });

    const resend = new Resend('re_LWqp5V9A_BnbapR1dfFEhV5Zar1oC76Li');

    attachement.push ({
        filename: "hola.txt",
        // path: path.join(path.resolve(),"/reports/Facturas_Generadas_Anuladas") ,
        content: fileBytes,

     })
        
    await resend.emails.send({
        from: 'Acme<onboarding@resend.dev>',
        to: ['diegoirnoguera@gmail.com'],
        subject: 'Hello World',
        attachment : fileBytes.toString("bytes"),
        text: "tu mama siempre tu mama"
    }).catch((err)=>{
        console.log(err)
    })

}
