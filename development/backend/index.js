import express from "express";
import path from "path";
import { bgWhite } from "chalk";
import { MongoClient } from "mongodb";
import "regenerator-runtime/runtime";

import { routerContact } from "./routers/contacts/contact";
import { blogRouter } from "./routers/blog/blog";
import { basicRouter } from "./routers/basic_route/basic_route";

const app = express();

app.all(/\//, (req, _, next) => {
    console.log(req.url);
    next();
});

app.use(
    express.static(path.resolve(__dirname, "../frontend")),
    (_req, _res, next) => {
        console.log(path.resolve(__dirname, "../frontend"));
        next();
    }
);

app.use(basicRouter);
app.use("/contact%20us", routerContact);
app.use("/blog", blogRouter);

let server, mainMongoClientUrl = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(mainMongoClientUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoClient.connect((error, client) => {
    if (error) {
        console.error(error);
        return;
    }
    server = app.listen(3000, () => {
        console.log(
            bgWhite.green(
                "Server is running"
            )
        );
        let webAppDb = client.db("web-app");
        app.locals.webAppDb = webAppDb;
    });
});

process.on("SIGTERM", () => {
    console.log(
        bgWhite.green(
            "Server is closing"
        )
    );
    server.close();
    mongoClient.close();
});