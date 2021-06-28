import { Router } from "express";
import { renderToNodeStream } from "react-dom/server";
import App from "../../../frontend/app.tsx"
import React from "react";
import {StaticRouter} from "react-router-dom";

export const basicRouter = Router();

basicRouter.get(/\//, (req, res) => {

    const context = {};

    const appStream = renderToNodeStream(
        <StaticRouter basename="/web-app" locaion={req.url} context={context} >
            <App />
        </StaticRouter>
    );

    const startHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="google" value="notranslate">
            <title>Loading...</title>
        </head>
        <body>
            <div id="root" translate="no">
    `;
    const endHTML = `
            </div>
        </body>
        </html>
    `;

    if (context.url) {
        res.redirect(301, context.url);
        return;
    } else {
        res.write(startHTML);

        appStream.pipe(res, {
            end: false
        });

        appStream.on("end", () => {
            res.write(endHTML);
            res.end();
        });
    }
});