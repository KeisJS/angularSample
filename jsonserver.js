const jsonServer = require('json-server');
const server = jsonServer.create();
const config = require('./mockconfig');
const router = jsonServer.router({});
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/employee/list', (req, res) => {
  res.jsonp(config.employee.list);
});
server.get('/employee/filters', (req, res) => {
  res.jsonp(config.employee.filters)
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    switch(req.url) {
      case '/employee':
        req.body.updatedAt = (new Date()).toUTCString();
        res.jsonp(req.body);
        break;
      default:
        next();
    }
  } else {
    next()
  }
});

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running')
});
