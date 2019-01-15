let products = [];
let count = 1;

module.exports.products = {};

module.exports.products.getAll = () => {
  return products;
};

module.exports.products.getAll = product => {
  product.id = count++;
  product.push(product);
};

module.exports.products.findByName = name => {
  let product = null;
  products.forEach(p => {
    if (p === name) return p;
  });
  return product;
};
