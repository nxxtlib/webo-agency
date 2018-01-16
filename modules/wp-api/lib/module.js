const { resolve } = require('path');
const defaults = {};

module.exports = async function wp (moduleOptions) {
  let options = Object.assign({}, defaults, this.options['wp'], moduleOptions);

  this.addPlugin({
    src: resolve(__dirname, './templates/wp.plugin.js'),
    fileName: 'wp.plugin.js',
    options
  });
};

module.exports.meta = require('../package.json');
