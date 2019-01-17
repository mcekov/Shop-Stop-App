const homeHandler = require('./home');
const addProductHandler = require('./product');
const fileHandler = require('./static-files');

module.exports = [homeHandler, fileHandler, addProductHandler];
