const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const clientConfig = 
    {
        mode: "development",
        name: "client",
        target: "web",
        entry: {
            app: path.resolve(__dirname, "development/frontend/index.tsx")
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
        output: {
            path: path.resolve(__dirname, "docs/client"),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    use: ["babel-loader", "ts-loader"],
                    exclude: /[\//]node_modules[\//]/
                },
                {
                    test: /\.m?jsx?$/,
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
            new CleanWebpackPlugin(),
            new NodePolyfillPlugin()
        ]
};

const serverConfig =
{
    mode: "development",
    entry: {
        server: path.resolve(__dirname, "development/backend/index.js"),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /[\//]node_modules[\//]/,
                use: {
                    loader: "babel-loader"
                },
              }
        ],
    },
    output: {
        path: path.resolve(__dirname, "docs/server"),
        filename: "[name].js",
    },
    target: "node",
    node: {
        __dirname: false,
    },
    externals: [nodeExternals()]
};

module.exports = [serverConfig, clientConfig];