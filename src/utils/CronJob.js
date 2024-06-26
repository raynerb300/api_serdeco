import { CronJob } from "cron";

const job = new CronJob (" 0 8 * * MON ", function () { 
        console.log("ver mensaje cada 1 segundo");
    });

export default job;
