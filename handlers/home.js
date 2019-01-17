const url = require('url');
const fs = require('fs');
const path = require('path');
const db = require('../config/database');
const qs = require('querystring');

module.exports = (req, res) => {
  req.pathname = req.pathname || url.parse(req.url).pathname;

  if (req.pathname === '/' && req.method === 'GET') {
    let filePath = path.normalize(
      path.join(__dirname, '../views/home/index.html')
    );

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/plain'
        });

        res.write('404 not found!');
        res.end();
        return;
      }

      let queryData = qs.parse(url.parse(req.url).query);

      let products = db.products.getAll();

      if (queryData.query) {
        products = products.filter(p => p.name === queryData['query']);
        // console.log(products);
      }

      let content = '';
      products.forEach(product => {
        content += `<div class="product-card">
        <img src="${product.image}" alt="" class="product-card">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
      </div>`;
      });

      let html = data.toString().replace('{content}', content);

      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(html);
      res.end();
    });
  } else return true;
};
