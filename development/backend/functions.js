import { response } from "express";

export function callResponseError(res, err, statusCode) {
    if ( !err instanceof Error ) return console.error("TypeError: error type isn`t Error!");
    if ( !res instanceof response.constructor ) return console.error("TypeError: response type isn`t Response!");
    if ( typeof +statusCode !== "number" ) return console.error("TypeError: statusCode type isn`t number!");
    let errorString = `${err.name}: ${err.message}`;
    res.status(+statusCode).send(errorString);
    console.error(errorString);
}

export function logError(err) {
    if ( !err instanceof Error ) return console.error("TypeError: err type isn`t Error!");
    let message = `${err.name}: ${err.message}`;
    console.error(message);
    return err;
}

String.prototype.addSpace = function(before = false) {
    return before ? ` ${this}` : `${this} `;
}