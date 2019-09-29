const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', 
      {
        // "*": "http://[::1]:5000"
        target: 'http://localhost:5000/' 
      })
  )
}