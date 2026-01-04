const moment = require("moment");
const DATE_TIME_FORMAT = "YYYY-MM-DD";

const sendEmail = async (templateId, strapi, result) => {
  let recipients = ["admin@gmail.com"]; // Replace with the actual admin email

  if (recipients?.length > 0) {
    await strapi.entityService.create("api::email-queue.email-queue", {
      data: {
        template: templateId,
        data: result,
        recipients,
      },
    });
  }
};
// Function to preprocess the employee data
function formatEmployeeNames(employeeString) {
  return employeeString
    .split(',')                 // Split string into an array
    .map(name => name.trim())   // Trim whitespace
    .map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()) // Capitalize the first letter
    .filter(name => name);      // Filter out any empty values
}

const checkDailyReports = async (strapi) => {
  try {
    console.log("[cron:daily-reports] Checking for daily reports");

    const today = moment().format(DATE_TIME_FORMAT);

    // Fetch all employees
    const employees = await strapi.db.query("api::employee.employee").findMany({
      where: { is_deleted: false },
    });

    // Fetch all daily reports for today
    const dailyReports = await strapi.db.query("api::daily-report.daily-report").findMany({
      where: { date: today,is_deleted: false,},
      populate: { employee: true },
    });

    // Create a set of employee IDs who have submitted their daily report
    const submittedReports = new Set(dailyReports.map(report => report.employee.id));

    // Identify employees who haven't submitted their daily report
    const employeesWithoutReports = employees.filter(employee => !submittedReports.has(employee.id));

    if (employeesWithoutReports.length > 0) {
      // Construct the email content with comma-separated employee names
      const employeeNames = employeesWithoutReports.map(employee => `${employee.first_name} ${employee.last_name}`).join(", ");
      const formattedEmployees = formatEmployeeNames(employeeNames);
      const emailContent = {
        date: today,
        employees: formattedEmployees,
      };

      // Send email to admin
      await sendEmail("daily-report-notsubmitted", strapi, emailContent);
    }
  } catch (error) {
    console.log("[cron:daily-report-notsubmitted]", error);
  }
};

module.exports = {
  checkDailyReports,
};