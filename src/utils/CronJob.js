import { CronJob } from "cron";

const job = new CronJob (" 20 6 * * * ", async function () { 
        await SendFAGA();
    });
export default job;
