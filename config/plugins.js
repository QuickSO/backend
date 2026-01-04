const { provider } = require("@strapi/provider-email-nodemailer");

module.exports = ({ env }) => ({
  "import-export-entries": {
    enabled: true,
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.zoho.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: env("SMTP_USERNAME"),
        defaultReplyTo: env("SMTP_USERNAME"),
      },
    },
  },
  upload: {
    config: {
      provider:"local",
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
      },
    },
  },
  documentation: {
    enabled: false,
  },
});
