const express = require("express");
const chalk = require("chalk");
const webpack = require("webpack");
/* const fs = require("fs");
const path = require("path"); */
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const contact = require("./routers/contacts/contact");
const blog = require("./routers/blog/blog");

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

/* app.get("/", (_req, res) => {
    const indexHtml = path.resolve("../frontend/index.html");
    fs.readFile(indexHtml, (err, _data) => {
        if (err) {
            return res.status(500).send("Error");
        }
        const reactHtml = ReactDOMServer.renderToNodeStream(App);
        reactHtml.pipe(res);

        reactHtml.on("close", () => {
            res.end();
        });
    });
}); */

app.use(express.static("../frontend"));

app.use("/contact%20us", contact.routerContact);
app.use("/blog", blog.blogRouter);

app.listen(3000, () => {
    console.log(
        chalk.bgWhite.green(
            "Server is running"
        )
    );
});