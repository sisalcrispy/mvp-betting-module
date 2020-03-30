const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports =  (env, argv) => {
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
        }, {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: "babel-loader", // TOCHECK: to remove the compiler
        },
        {
          test: /\.module\.s(a|c)ss$/,
          loader: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: isDev
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDev
              }
            }
          ]
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
    resolve: {extensions: ["*", ".ts", ".tsx",".js", ".jsx", ".scss"]},
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "public.js",
        libraryTarget: 'commonjs2'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isDev ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDev ? '[id].css' : '[id].[hash].css'
      })
    ]
  });
};
