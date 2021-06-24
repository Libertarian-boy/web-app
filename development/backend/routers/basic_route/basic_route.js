import { Router } from "express";
import { renderToNodeStream } from "react-dom/server";
import App from "../../../frontend/index.tsx"
import React from "react";

export const basicRouter = Router();

basicRouter.get("/", (_, res) => {
    const appStream = renderToNodeStream(<App />);
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
        <div id="root" translate="no"></div>
    `;
    const endHTML = `
        </body>
        </html>
    `
    res.write(startHTML);
    appStream.pipe(res);

    appStream.on("end", () => {
        res.write(endHTML);
        res.end();
    });
});