const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@core': 'src/components',
    '@features': 'src/container',
    '@pages': 'src/lib',
  })(config);

  return config;
};
