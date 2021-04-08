const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(proxy('/api', { 
       target: "http://www.scis.net.cn/literature",
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "^/api": "/"
       },
    })
  );
};