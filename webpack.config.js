const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');


const output = {
    prod: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "public.js",
        libraryTarget: 'commonjs2'
    },
    dev: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/',
    }
};


module.exports = (env, argv) => {
    const isDev = argv.mode === "development";

    return ({
        entry: "./src/index.tsx",
        mode: argv.mode,
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /(node_modules)/,
                    use: "ts-loader",
                },
                {
                    test: /\.s(a|c)ss$/,
                    exclude: /\.module.(s(a|c)ss)$/,
                    loader: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDev
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {extensions: ["*", ".ts", ".tsx", ".js", ".jsx", ".scss"]},
        output: isDev ? output.dev : output.prod,
        devServer: {
            historyApiFallback: true
        },
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
