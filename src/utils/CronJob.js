import { CronJob } from "cron";
import { ReportFAGA } from "../libs/ReportFAGA.js";
import { SendFAGA } from "../libs/SendEmail.js";

const job = new CronJob (
    " * * * * * ",
    function () { 
    ReportFAGA ()
    SendFAGA ("Facturas_Generadas_Anuladas")
    },
    null,
    true
);
export default job