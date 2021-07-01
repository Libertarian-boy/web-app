import { json, Router } from "express";

const jsonParser = json();
export const routerContact = Router();

routerContact.post("/server", jsonParser, async (req, res) => {
    try {
        if (!req.body) {
            throw new Error(
                "Request body not found"
            );
        }
        let body = req.body;
        let collection = req.app.locals.webAppDb.collection("users");
        const arrayofDocuments = await collection.find({
            email: body.email
        }, {
            _id: 0
        })
        .toArray();
        console.log(arrayofDocuments);
        if (arrayofDocuments.length === 0) {
            await collection.insertOne(body);
            res.status(200).json({
                status: "Ok",
                body: body
            });
            return;
        } else {
            res.status(422).send("That email was used!");
        }
    } catch (error) {
        res.status(500).json({
            status: `Error: ${error.status ? error.status : "Some error"}`,
            message: error.message
        });
    }
});