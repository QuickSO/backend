module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "http://localhost:1337",   // Strapi Admin
        "http://localhost:3000",   // Local frontend
        "https://test01.quickso.in",
        "https://test01-api.quickso.in",
        "https://mrvcjkil01.quickso.in",
        "https://mrvcjkil01-api.quickso.in",
        "https://3dviewer.net",
      ],
      headers: "*",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb",
      jsonLimit: "256mb",
      textLimit: "256mb",
      formidable: {
        maxFileSize: 250 * 1024 * 1024,
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
