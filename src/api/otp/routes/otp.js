module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/otp/sendotp',
        handler: 'otp.sendOtp',
        config: {
          auth: false,
        },
      },
      {
        method: 'POST',
        path: '/otp/verifyotp',
        handler: 'otp.verifyOtp',
        config: {
          auth: false,
        },
      },
    ],
  };
  