const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://20.246.194.163', // Change the port if needed
      changeOrigin: true,
      secure: false,
      // pathRewrite: {
      //   '^/api': '', // Rewrites '/api' to ''
      // },
    })
  );
};
