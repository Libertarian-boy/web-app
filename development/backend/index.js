import "regenerator-runtime/runtime";
import Loadable from "react-loadable";
import express from "express";
import path from "path";
import { bgWhite } from "chalk";
import { MongoClient } from "mongodb";

import { routerContact } from "./routers/contacts/contact";
import { blogRouter } from "./routers/blog/blog";
import { basicRouter } from "./routers/basic_route/basic_route";

const app = express();
const port = process.env.PORT | 3000;

app.use(
    express.static(path.resolve(__dirname, "../frontend"))
);

app.use(basicRouter);
app.use("/contact%20us", routerContact);
app.use("/blog", blogRouter);

let server, mainMongoClientUrl = "mongodb+srv://Egor:Kuvs220504@cluster0.ll2ml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoClient = new MongoClient(mainMongoClientUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

Loadable.preloadAll()
    .then(
        () => {
            mongoClient.connect((error, client) => {
                if (error) {
                    console.error(error);
                    return;
                }
                server = app.listen(port, () => {
                    console.log(
                        bgWhite.green(
                            "Server is running"
                        )
                    );
                    let webAppDb = client.db("web-app");
                    app.locals.webAppDb = webAppDb;
                });
            });
        }
    )
    .catch(
        err => {
            console.error(err);
        }
    )

process.on("SIGTERM", () => {
    console.log(
        bgWhite.green(
            "Server is closing"
        )
    );
    server.close();
    mongoClient.close();
});