import { json, Router } from "express";
import { MongoClient } from "mongodb";

const jsonParser = json();
export const routerContact = Router();

routerContact.post("/server", jsonParser, (req, res) => {

    const mongoClient = new MongoClient("mongodb://localhost:27017/", {
        useUnifiedTopology: true
    });

    try {
        if (!req.body) {
            throw new Error(
                "Request body not found"
            );
        }
        mongoClient.connect(async (err, result) => {
            if (err) throw new Error(
                "Something wrong!"
            );
            let body = req.body;
            let collection = result.db("web-app").collection("users");
            const arrayofDocuments = await collection.find({
                email: body.email
            }, {
                _id: 0
            })
            .toArray();
            if (arrayofDocuments.length === 0) {
                await collection.insertOne(body);
                res.status(200).json({
                    status: "Ok",
                    body: body
                });
                res.end();
                result.close();
            } else {
                console.log(arrayofDocuments);
                res.status(422).json({
                    status: "Error",
                    message: "This email was used"
                });
                res.end();
                result.close();
            }
        });
    } catch (error) {
        res.status(500).json({
            status: `Error: ${error.status ? error.status : "Some error"}`,
            message: error.message
        });
    }
});