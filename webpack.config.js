const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const clientConfig = 
    {
        name: "frontend",
        mode: "production",
        target: "web",
        entry: {
            index: "./development/frontend/index.tsx"
        },
        output: {
            path: path.resolve(__dirname, "docs/frontend"),
            filename: '[name].js',
            publicPath: path.resolve(__dirname, "docs/frontend")
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
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
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        filename: "[name].bundle.js",
                        chunks: "all"
                    }
                }
            }
        },
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },
        plugins: [
            new NodePolyfillPlugin(),
            new CleanWebpackPlugin()
        ]
};

const serverConfig =
{
    name: "backend",
    mode: "production",
    entry: {
        server: "./development/backend/index.js",
    },
    output: {
        path: path.resolve(__dirname, "docs/backend"),
        filename: "[name].js",
        publicPath: "/"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
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
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    filename: "[name].bundle.js",
                    chunks: "all"
                }
            }
        }
    },
    target: "node",
    node: {
        __dirname: false,
    },
    externals: [nodeExternals()],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins: [
        new NodePolyfillPlugin(),
        new CleanWebpackPlugin()
    ]
};

module.exports = [serverConfig, clientConfig];