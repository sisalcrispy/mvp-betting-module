const path = require("path");

module.exports =  (env, argv) => {

    return ({
        entry: "./src/index.ts",
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
                    loader: "babel-loader",
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        resolve: {extensions: ["*", ".ts", ".tsx",".js", ".jsx"]},
        output: {
            path: path.resolve(__dirname, "dist/"),
            publicPath: "/dist/",
            filename: "public.js",
            libraryTarget: 'commonjs2'
        },

    });

};