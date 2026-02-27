import cron from "node-cron";
import Order from "../models/order.js";

const task = cron.schedule("/10 * * * *", () => {
    // time limit...
});

task.start();