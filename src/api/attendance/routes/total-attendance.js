module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/attendance-total',
      handler: 'attendance.totalAttendance',
      config: {
        policies: [],
        middlewares: [],
        auth:false,
      },
    },
  ],
};
