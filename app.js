const http = require('http');

const port = 3000;
const handlers = require('./handlers');

http
  .createServer((req, res) => {
    handlers.forEach(handler => {
      if (!handler(req, res)) return;
    });
  })
  .listen(port);
console.log(
  `Server running at http://localhost:${port} / CTRL + C to shutdown`
);
