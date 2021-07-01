const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon');

const clientConfig = 
    {
        name: "frontend",
        mode: "development",
        target: "web",
        entry: {
            index: "./development/frontend/index.tsx"
        },
        output: {
            path: path.resolve(__dirname, "docs/frontend"),
            publicPath: "/docs/",
            filename: '[name].js',
            chunkFilename: "[name].chunk.js"
        },
        resolve: {
            extensions: ['.json', '.ts', '.tsx', '.js']
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
                    },
                    chunks: {
                        test: /[\\/]development[\\/]/,
                        name: "chunks",
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
            new CleanWebpackPlugin(),
            new ReactLoadableSSRAddon({
                filename: "assets-manifest.json"
            })
        ]
};

const serverConfig =
{
    name: "backend",
    mode: "development",
    entry: {
        server: "./development/backend/index.js",
    },
    output: {
        path: path.resolve(__dirname, "docs/backend"),
        filename: "[name].js",
        chunkFilename: "[name].chunk.js",
        publicPath: "/docs/"
    },
    resolve: {
        extensions: ['.json', '.ts', '.tsx', '.js']
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
                },
                chunks: {
                    test: /[\\/]development[\\/]/,
                    name: "chunks",
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

module.exports = [clientConfig, serverConfig];