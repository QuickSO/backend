module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/attendance-checkin',
      handler: 'attendance.checkLocation',
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/attendance-checkout',
      handler: 'attendance.checkOut',
      config: {
        policies: [],
        middlewares: [],
        auth:false,
      },
    },
  ],
};
