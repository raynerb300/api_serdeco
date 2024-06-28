import { generateFile } from "../utils/GenerateFile.js";
import { CompressFile } from "../utils/CompressFile.js";
import { ReportFAGA } from "./ReportFAGA.js";

export async function SendFAGA(nombreDelComprimido) {
const data = await ReportFAGA()
generateFile(data)
CompressFile(nombreDelComprimido)
console.log(nombreDelComprimido+".zip");
} 