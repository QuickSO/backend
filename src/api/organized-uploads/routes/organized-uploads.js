'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/organized-uploads',
      handler: 'organized-uploads.getOrganizedUploads',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/organized-uploads/:origin',
      handler: 'organized-uploads.getFilesByOrigin',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
