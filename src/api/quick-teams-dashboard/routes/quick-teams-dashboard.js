module.exports = {
  routes: [
    {
      method: "GET",
      path: "/quick-teams-dashboard/statistics",
      handler: "quick-teams-dashboard.getStats",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-teams-dashboard/employees-per-gender",
      handler: "quick-teams-dashboard.getEmployeesPerGender",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-teams-dashboard/employees-per-location",
      handler: "quick-teams-dashboard.getEmployeesPerLocation",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-teams-dashboard/employees-per-department",
      handler: "quick-teams-dashboard.getEmployeesPerDepartment",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-teams-dashboard/ticket-statuses",
      handler: "quick-teams-dashboard.getTicketStatuses",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-teams-dashboard/employees-per-project",
      handler: "quick-teams-dashboard.getEmployeesPerProject",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-teams-dashboard/employees",
      handler: "quick-teams-dashboard.getEmployees",
      config: {
        auth: false,
      },
    },
  ],
};
