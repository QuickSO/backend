module.exports = {
  routes: [
    {
      method: "GET",
      path: "/quick-projects-dashboard/discussions",
      handler: "quick-projects-dashboard.getDiscussions",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-projects-dashboard/cost-performance",
      handler: "quick-projects-dashboard.getCostPerformance",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-projects-dashboard/project-performance",
      handler: "quick-projects-dashboard.getProjectPerformance",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-projects-dashboard/performance-reviews",
      handler: "quick-projects-dashboard.getPerformanceReviews",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-projects-dashboard/projects-health",
      handler: "quick-projects-dashboard.getProjectsHealth",
      config: {
        auth: false,
      },
    },
    // {
    //   method: "GET",
    //   path: "/quick-projects-dashboard/milestone-statuses",
    //   handler: "quick-projects-dashboard.getMilestoneStatuses",
    //   config: {
    //     auth: false,
    //   },
    // },
    // {
    //   method: "GET",
    //   path: "/quick-projects-dashboard/task-statuses",
    //   handler: "quick-projects-dashboard.getTaskStatuses",
    //   config: {
    //     auth: false,
    //   },
    // },
    {
      method: "GET",
      path: "/quick-projects-dashboard/phase-completion",
      handler: "quick-projects-dashboard.getPhaseCompletion",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-projects-dashboard/timeline-and-resources",
      handler: "quick-projects-dashboard.getTimelineAndResources",
      config: {
        auth: false,
      },
    },
  ],
};
