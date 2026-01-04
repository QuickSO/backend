const { TEMPLATES } = require("../../templates");
const AWS = require("aws-sdk");
const { isEmpty } = require("lodash");

AWS.config.update({
  accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
  region: process.env.AWS_SES_REGION,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });


const getPropertyByPath = (object, path) => {
  const properties = path.split(".");
  let value = object;

  for (const property of properties) {
    value = value[property];
    if (value === undefined) {
      break;
    }
  }

  return value;
};

const getTemplateContent = (str, data) => {
  return str?.replace(/{{\s*([\w.]+)\s*}}/g, (match, propertyPath) => {
    const propertyValue = getPropertyByPath(data, propertyPath);

    if (propertyValue) {
      return propertyValue?.toString();
    } else {
      return "(Empty)";
    }
  });
};

const getEmailContent = (templateId, data) => {
  const template = TEMPLATES[templateId];

  if (!template) {
    console.log(`Template ${templateId} not found.`);
    return;
  }

  const bodyPart = template?.content
    ? `
      <div style="border-top: 2px dashed lightgray; border-bottom: 2px dashed lightgray; margin-bottom: 24px;">
        <p>Details:</p>
        ${getTemplateContent(template?.content, data)}
      </div>
  `
    : "";

  return {
    subject: `[QuickSo - ${getTemplateContent(template?.subject, data)}`,
    content: `
      ${getTemplateContent(template?.description, data)}
      ${bodyPart}

      <div>
        <a href="${getTemplateContent(
          template?.detailsUrl,
          data,
        )}" style="text-decoration: none; background: #0052cc; color: white; padding: 6px 16px; border-radius: 3px; display: inline-block;">View Details</a>
      </div>
    `,
  };
};

function sendSesEmail({
  subject = "",
  content = "",
  recipients = [],
  ccRecipients = [],
  bccRecipients = [],
}) {
  let emails = ["richard@tpix.in", "juliet@tpix.in", "angel@tpix.in"];
  let destination = {};

  if (Number(process.env.EXTERNAL_EMAILS_ENABLED) === 1) {
    recipients?.forEach((email) => {
      if (emails?.includes(email) === false) {
        emails.push(email);
      }
    });

    destination["ToAddresses"] = emails;
    destination["CcAddresses"] = ccRecipients;
    destination["BccAddresses"] = bccRecipients;
  } else {
    destination["ToAddresses"] = emails;
  }

  const params = {
    Destination: destination,
    Message: {
      Body: {
        Html: {
          Data: `<div style="font-size: 17px;">${content}</div>`,
        },
      },
      Subject: {
        Data: subject,
      },
    },
    Source: "richard@tpix.in",
  };

  ses.sendEmail(params, (err, data) => {
    if (err) {
      console.log("Error sending email:", err);
    } else {
      console.log("Email sent successfully!");
    }
  });
}

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    const newEmail = getEmailContent(result?.template, result?.data);

    if (
      !isEmpty(newEmail?.subject) &&
      newEmail?.subject !== "" &&
      !isEmpty(newEmail?.content) &&
      newEmail?.content !== ""
    ) {
      sendSesEmail({
        subject: newEmail?.subject,
        content: newEmail?.content,
        recipients: result?.recipients,
        ccRecipients: result?.cc_recipients,
        bccRecipients: result?.bcc_recipients,
      });

      strapi.entityService.create("api::notification.notification", {
        data: {
          title: newEmail?.subject,
          content: newEmail?.content,
          recipients: result.recipients?.join(";"),
          read_recipients: "",
        },
      });
    }
  },
};
