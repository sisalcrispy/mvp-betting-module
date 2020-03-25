
var path = require('path');

module.exports = function override(config, env) {
    if(env === 'production') {
        config.entry = './src/export.js';
        config.output = {
            path: path.resolve('lib'),
            filename: 'ExternalModule.js',
            libraryTarget: 'commonjs2'
        };
    }


  /*
  config.module.rules = [
      ...config.module.rules,
    ...[{
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }]
    ];

  */

  return config;
};
