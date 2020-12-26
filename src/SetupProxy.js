const { createProxyMiddleware } = require('http-proxy-middleware');
// const target = "http://c0002211.test.cloud.fedex.com";
const target = "http://localhost:8080";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/**", {
      target: target,
      changeOrigin: true,
      logLevel: "debug"
    }),
  )
}
