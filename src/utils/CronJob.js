import { CronJob } from "cron";
import { ReportFAGA } from "../libs/ReportFAGA.js";

const job = new CronJob (" 20 6 * * * ", async function () { 
        await ReportFAGA();
    });
export default job;
