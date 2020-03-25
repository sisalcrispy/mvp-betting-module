var path = require('path');

module.exports = function override(config, env) {
    if(env === 'production') {
        config = {
            mode: 'production',
            entry: './src/export.js',
            output: {
                path: path.resolve('lib'),
                filename: 'ExternalModule.js',
                libraryTarget: 'commonjs2'
            },
            module: {
                rules: [
                    {
                        test: /\.js?$/,
                        exclude: /(node_modules)/,
                        use: 'babel-loader'
                    }
                ]
            }
        }
    }

    return config;
};
