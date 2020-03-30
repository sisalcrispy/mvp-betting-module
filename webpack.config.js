const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const PortfinderSync = require('portfinder-sync');


/*
| -------------------------------------------------------
| Webpack Loader configuration:
| _______________________________________________________
 */
const styleLoader = {
    loader: 'style-loader'
};
const cssLoader = {
    loader: "css-loader"
};
const sassLoader = {
    loader: 'sass-loader',
    options: {
        sourceMap: true
    }
};


/*
| -------------------------------------------------------
| Env parameters
| -------------------------------------------------------
 */

const entry = {
    prod: path.resolve(__dirname, 'src/export.ts'),
    dev: path.resolve(__dirname, 'src/index.ts'),
};

const output = {
    prod: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "public.js",
        libraryTarget: 'commonjs2'
    },
    dev: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'main.js',
        publicPath: '/',
    }
};

const externals = {
    dev: {},
    prod: {
        "react": "react"
    }
};

/*
| -------------------------------------------------------
| Dev server configuration:
| -------------------------------------------------------
 */

const devServer = {
    port: PortfinderSync.getPort(8000),
    historyApiFallback: true,
};

module.exports = (env, argv) => {
    const isDev = argv.mode === "development";

    return ({
        entry: isDev ? entry.dev : entry.prod,
        mode: argv.mode,
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /(node_modules)/,
                    use: "ts-loader",
                },
                {
                    test: /\.s?css$/,
                    use: [
                        isDev ? styleLoader : MiniCssExtractPlugin.loader,
                        cssLoader,
                        sassLoader
                    ]
                }
            ]
        },
        resolve: {extensions: ["*", ".ts", ".tsx", ".js", ".jsx", ".scss"]},
        output: isDev ? output.dev : output.prod,
        externals: isDev ? externals.dev : externals.prod,
        devServer: devServer,
        plugins: [
            new MiniCssExtractPlugin({
                filename: isDev ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDev ? '[id].css' : '[id].[hash].css'
            }),
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, 'public/index.html'),
                filename: 'index.html'
            })
        ]
    });
};
