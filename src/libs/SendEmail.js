import { generateFile } from "../utils/GenerateFile.js";
import { CompressFile } from "../utils/CompressFile.js";
import { ReportFAGA } from "./ReportFAGA.js";
import { Resend } from 'resend';

export async function SendFAGA(nombreDelComprimido) {
const data = await ReportFAGA()
generateFile(data)
CompressFile(nombreDelComprimido)
console.log(nombreDelComprimido+".zip");

}

const resend = new Resend('re_LWqp5V9A_BnbapR1dfFEhV5Zar1oC76Li');

(async function() {
  const { data, error } = await resend.emails.send({
    from: 'Acme<onboarding@resend.dev>',
    to: ['diegoirnoguera@gmail.com'],
    subject: 'Hello World',
    html: '<strong>it works!</strong>'
  });

  if (error) {
    return console.log(error);
  }

  console.log(data);
})();