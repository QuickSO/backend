module.exports = {
  async sendOtp(ctx) {
    const { email, client_uid } = ctx.request.body;

    // Check if email exists in the app-users collection
    const user = await strapi.db.query('api::app-user.app-user').findOne({
      where: { email_1: email },
    });

    if (!user) {
      return ctx.badRequest('User not found');
    }

    // Check if client_uid matches the one in the database
    if (user.client_uid !== client_uid) {
      return ctx.badRequest('Client UID does not match');
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now

    // Save OTP to the database
    await strapi.db.query('api::otp.otp').create({
      data: {
        email,
        otp,
        expiry,
      },
    });

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUsername = process.env.SMTP_USERNAME;
    const smtpPassword = process.env.SMTP_PASSWORD;

    console.log('SMTP Host:', smtpHost, smtpPort, smtpUsername, smtpPassword);

    // Send OTP via email
    try {
      await strapi.plugins['email'].services.email.send({
        to: email,
        subject: 'OTP Verification',
        from: 'notification@quickso.in',
        text: `
          <h3>OTP Verification</h3>
          <p>Dear user,</p>
          <p>Thank you for requesting an OTP. Please use the following one-time password (OTP) to proceed:</p>
          <h2 style="color: #4CAF50;">${otp}</h2>
          <p>This OTP is valid for 5 minutes. If you did not request this, please ignore this email.</p>
          <p>Best regards,</p>
          <p>The QuickSo Team</p>
          <hr>
          <p>If you have any questions, feel free to reach out to us.</p>
        `,
      });
      ctx.send({ message: 'OTP sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      ctx.badRequest('Failed to send OTP');
    }
  },

  async verifyOtp(ctx) {
    const { email, otp, client_uid } = ctx.request.body;

    // Find the user by email
    const user = await strapi.db.query('api::app-user.app-user').findOne({
      where: { email_1: email },
    });

    if (!user) {
      return ctx.badRequest('User not found');
    }

    // Check if client_uid matches the one in the database
    if (user.client_uid !== client_uid) {
      return ctx.badRequest('Client UID does not match');
    }

    // Find the OTP record
    const record = await strapi.db.query('api::otp.otp').findOne({
      where: { email, otp },
    });

    if (!record) {
      return ctx.badRequest('Invalid OTP');
    }

    // Check if OTP has expired
    if (new Date(record.expiry) < new Date()) {
      return ctx.badRequest('OTP has expired');
    }

    // OTP is valid
    ctx.send({ message: 'OTP verified successfully', accessGranted: true });
  },
};
