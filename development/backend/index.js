import "regenerator-runtime/runtime";
import Loadable from "react-loadable";
import express from "express";
import path from "path";
import os from "os";
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

let server, ip, mainMongoClientUrl = "mongodb://localhost:27017/";
// MongoDB cluster for production: mongodb+srv://Egor:Kuvs220504@cluster0.ll2ml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// MongoDB localhost cluster: mongodb://localhost:27017/

let interfaces = os.networkInterfaces();
Object.keys(interfaces).forEach(key => {
    let isEndIteration = false;
    interfaces[key].forEach(item => {
        if (item.family === "IPv4" && item.internal === false) {
            ip = item.address;
            isEndIteration = true;
            return;
        }
    });
    if (isEndIteration) return;
});

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
                server = app.listen(port, ip, () => {
                    console.log(
                        bgWhite.green(
                            `${
                                Object.entries(server.address()).map(item => {
                                    let [key, value] = item;
                                    return `${key}: ${value}`;
                                }).join(" ")
                            }`
                        )
                    )
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