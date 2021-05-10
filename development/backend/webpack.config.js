const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = 
    {
        name: "client",
        entry: {
            app: [
                '../frontend/index.tsx',
                'webpack-dev-middleware',
                'webpack-hot-middleware'
            ]
        },
        output: {
            path: path.resolve("../../docs"),
            filename: '[name].js',
            publicPath: "/"
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: ["babel-loader", "ts-loader"],
                    exclude: /[\//]node_modules[\//]/
                },
                {
                    test: /\.m?js$/,
                    use: "babel-loader",
                    exclude: /[\//]node_modules[\//]/
                },
                {
                    test: /\.(jpg|png|gif|svg)$/i,
                    use: "url-loader",
                    exclude: /[\//]node_modules[\//]/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            fallback: {
              "fs": false,
              "tls": false,
              "net": false,
              "path": require.resolve("path"),
              "zlib": require.resolve('zlib'),
              "http": false,
              "https": false,
              "stream": false,
              "crypto": false,
              "crypto-browserify": require.resolve('crypto-browserify'),
              "worker_threads": false,
              "child_process": false
            }  
        },
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|react-router)/,
                        name: "vendors",
                        filename: "[name].bundle.js",
                        chunks: "all"
                    }
                }
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "../frontend/index.html",
            }),
            new CleanWebpackPlugin(),
            new NodePolyfillPlugin()
        ],
        mode: "development"
}