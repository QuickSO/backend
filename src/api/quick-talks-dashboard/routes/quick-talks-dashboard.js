module.exports = {
  routes: [
    {
      method: "GET",
      path: "/quick-talks-dashboard/statistics",
      handler: "quick-talks-dashboard.getStatistics",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-talks-dashboard/meetings",
      handler: "quick-talks-dashboard.getMeetings",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-talks-dashboard/events",
      handler: "quick-talks-dashboard.getEvents",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-talks-dashboard/reminders",
      handler: "quick-talks-dashboard.getReminders",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-talks-dashboard/to-dos",
      handler: "quick-talks-dashboard.getToDos",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-talks-dashboard/mail-statuses",
      handler: "quick-talks-dashboard.getMailStatuses",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-talks-dashboard/chat-statuses",
      handler: "quick-talks-dashboard.getChatStatuses",
      config: {
        auth: false,
      },
    },
  ],
};
