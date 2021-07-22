import { json, Router } from "express";
import { callResponseError } from "../../functions";
import { Schema, model } from "mongoose";

const jsonParser = json();
export const routerContact = Router();

const schemaOfUser = new Schema({
    name: {
        type: String,
        minLength: 1,
        lowercase: true
    },
    email: {
        type: String,
        minLength: 10,
        lowercase: true
    },
    object: {
        type: String,
        minLength: 1,
        lowercase: true
    },
    message: {
        type: String,
        minLength: 1,
        lowercase: true
    }
}, {
    collection: "users"
});
const ModelOfUser = model("user", schemaOfUser);

routerContact.post("/server", jsonParser, async (req, res) => {
    try {
        let body = req.body;
        if ( !body ) throw new Error("Request body not found");
        let collectionOfUsers = await ModelOfUser.find({
            email: body.email
        }, {
            _id: 0,
            __v: 0
        });
        if (collectionOfUsers.length > 0) throw new Error("This email was used!");
        let newUser = new ModelOfUser(body);
        let response = await newUser.save();
        res.status(200).json(response);
    } catch (err) {
        callResponseError(res, err, 404);
    }
});