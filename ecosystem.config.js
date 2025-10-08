module.exports = {
  apps: [
    {
      name: 'strapi',
      script: 'yarn',
      args: 'start',
      instances: 1,
      exec_mode: 'cluster',
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
