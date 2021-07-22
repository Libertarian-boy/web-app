import "regenerator-runtime/runtime";
import Loadable from "react-loadable";
import express from "express";
import path from "path";
import process from "process";
import console from "console";
import os from "os";

import { bgYellow, bgRed } from "chalk";
import { connect } from "mongoose";
import { createInterface } from "readline";
import { routerContact } from "./routers/contacts/contact";
import { blogRouter } from "./routers/blog/blog";
import { basicRouter } from "./routers/basic_route/basic_route";

const app = express();
const port = process.env.PORT || 3000;

app.use(
    express.static(path.resolve(__dirname, "../frontend"))
);

app.use(basicRouter);
app.use("/contact%20us", routerContact);
app.use("/blog", blogRouter);

let server, mainMongoClientUrl, ip, connection, isServerStarted = false;
// MongoDB cluster for production: mongodb+srv://Egor:Kuvs220504@cluster0.ll2ml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/
// MongoDB localhost cluster: mongodb://localhost:27017/

async function startServer(mode) {
    await Loadable.preloadAll();

    if ( mode === "development" ) {
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
    }

    switch ( mode ) {
        case "production":
            mainMongoClientUrl = "mongodb+srv://Egor:Kuvs220504@cluster0.ll2ml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/"
            break;
        case "development":
            mainMongoClientUrl = "mongodb://localhost:27017/";
            break;
        default:
            break;
    }

    const mongoClient = await connect(mainMongoClientUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: mode === "production" ? false : true,
        dbName: "web-app"
    });

    connection = mongoClient.connection;

    server = app.listen(port, ip, () => {
        console.log(
            bgYellow.green(
                `${
                    Object.entries(server.address()).map(item => {
                        let [key, value] = item;
                        if ( typeof value !== undefined ) return `${key}: ${value}`;
                        return;
                    }).join(" ")
                }`
            )
        );
        console.log(
            bgYellow.green(
                `Server is running: mode - ${mode}!`
            )
        );
    });
}

function question(rl, ask) {
    rl.question(
        bgYellow.green(
            ask
        ),
        mode => {
            mode = mode.toLowerCase().replace(/\s/sg, "");
            if ( mode !== "development" && mode !== "production" ) {
                console.log(
                    bgRed.yellow(
                        "Wrong type of mode, try again!"
                    )
                );
                return question(rl, ask);
            }
            rl.close();
            return startServer(mode);
        }
    );
}

const args = process.argv;
args.forEach(arg => {
    if ( /mode/i.test(arg) ) {
        let mode = arg.replace(/mode=?/, "");
        isServerStarted = true;
        startServer(mode);
    }
});

if ( !isServerStarted ) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    question(
        rl,
        new String("What is mode using now (development/production):").addSpace()
    );
}

process.on("SIGINT", () => {
    if ( typeof connection !== "undefined" && typeof server !== "undefined" ) {
        console.log(
            bgYellow.green(
                "Server is closing!"
            )
        );
        server.close();
        connection.close();
    }
});