const express = require("express");
const chalk = require("chalk");
const webpack = require("webpack");
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const contact = require("./routers/contacts/contact");

const config = require("./webpack.config");
const compiler = webpack(config); /* Компилятор */

const app = express();

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    })
);

app.use(
    webpackHotMiddleware(compiler) /* Горячая замена модулей */
);

app.use("/contact%20us", contact.routerContact);

app.listen(3000, () => {
    console.log(
        chalk.bgWhite.green(
            "Server is running"
        )
    );
});