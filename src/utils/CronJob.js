import { CronJob } from "cron";
import { ReportFAGA } from "../libs/ReportFAGA.js";
import { SendFAGA } from "../libs/SendEmail.js";

const job = new CronJob (
    " 20 6 * * * ",
    function () { 
    ReportFAGA ()
    SendFAGA ("Facturas Generadas Anuladas")
    },
    null,
    true
);
export default job