import { Router } from "express";
import { renderToNodeStream } from "react-dom/server";
import App from "../../../frontend/app.tsx"
import React from "react";
import Loadable from "react-loadable";
import {StaticRouter} from "react-router-dom";
import {getBundles} from "react-loadable-ssr-addon";
import manifest from "../../../../docs/frontend/assets-manifest.json";
export const basicRouter = Router();

const stringForRegExp = "/(web-app)?/?(home|blog|about%20us|services|contact%20us)?(#\\w*|/)?$";
const regExpPath = new RegExp(stringForRegExp, "is");

basicRouter.get(regExpPath, (_req, res) => {
    const modules = new Set();
    const context = {
        url: undefined
    };
    const appStream = renderToNodeStream(
        <StaticRouter basename="/web-app" context={context}>
            <Loadable.Capture report={moduleName => modules.add(moduleName)}>
                <App/>
            </Loadable.Capture>
        </StaticRouter>
    );
    const bundles = getBundles(manifest, [...manifest.entrypoints, ...Array.from(modules)]);
    const scripts = bundles.js || [];
    const startHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="google" value="notranslate">
            <title>Loading...</title>
            ${
                scripts.map(script => (
                    `<script defer src="/${script.file}"></script>`
                )).join("\n")
            }
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