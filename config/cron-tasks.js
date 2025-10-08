const { checkReminders } = require("./crons/reminder.cron");
const { checkEvents } = require("./crons/events.cron");
const { checkToDos } = require("./crons/to-dos.cron");
const { checkMeetings } = require("./crons/meetings.cron");
const { checkTasks } = require("./crons/tasks.cron");
const { checkDailyReports } = require("./crons/daily-reports.cron");
const {
  checkTaskMaterialAvailability,
} = require("./crons/task-material-availability.cron");
const stockLedgersLog = require("./crons/stock-ledgers-logs.cron.js");

module.exports = {
  "*/5 * * * *": ({ strapi }) => {
    stockLedgersLog.execute(strapi);
  },
  "10 0 * * *": ({ strapi }) => {
    checkReminders(strapi);
    checkEvents(strapi);
    checkToDos(strapi);
    checkMeetings(strapi);
    checkTasks(strapi);
  
  },
  "0 23 * * *": ({ strapi }) => {
    checkDailyReports(strapi);
  },

  "0 */6 * * *": ({ strapi }) => {
    checkTaskMaterialAvailability(strapi);
  },
};
