const express = require("express");
const {MongoClient} = require("mongodb");
const fs = require("fs");
const path = require("path");

const textParser = express.text();
const blogRouter = express.Router();

const masOfImages = [];

blogRouter.route("/server/search")
    .post(textParser, async (req, res) => {
        try {
            
            if (!req.body) {
                res.status(404).json({
                    message: "Body not found",
                    status: "Error",
                    body: null
                });
                throw new Error("Body not found");
            }

            const mongoClient = new MongoClient("mongodb://localhost:27017/", {
                useUnifiedTopology: true
            });

            const client = await mongoClient.connect();
            let body = req.body;
            const searchRequests = client.db("web-app").collection("searchs-requests");
            
            const document = await searchRequests.findOne({
                search: body
            });

            if (document) {
                res.status(200).json(document);
            } else {
                await searchRequests.insertOne({
                    search: body
                });
                const document = await searchRequests.findOne({
                    search: body
                });
                res.status(202).json(document);
            }

            client.close();
            res.end();
    
        } catch (error) {
            res.status(400).json({
                message: error.message,
                status: "Error",
                body: undefined
            });

            client.close();
            res.end();
        }
    });

blogRouter.route("/server/posts/:id")
    .get(async (req, res) => {
        const pathToImage = path.resolve(`C:/Users/Егор/Desktop/web-app/development/backend/images/${
            +req.params.id % 3 === 0 ? "mount" :
            +req.params.id % 2 === 0 ? "mount_smoke" : "mount_snow"
        }.png`);

        let imageFile = fs.readFileSync(pathToImage, {
            encoding: "base64"
        });
        const ext = path.extname("image.png");

        masOfImages.push(`data:image/${ext.split(".").pop()};base64,${imageFile}`);
        res.type("png");

        res.status(200).json({
            src: masOfImages,
            title: "Magna mollis ultricies",
            date: "3th oct 2012"
        });
        res.end();
    });

blogRouter.route("/server/postOfBlog/:id")
    .get(async (req, res) => {
        const id = req.params.id;
        if (id) {
            const mongoClient = new MongoClient("mongodb://localhost:27017/", {
                useUnifiedTopology: true
            });
            const client = await mongoClient.connect();
            const collectionOfBlogs = client.db("web-app").collection("blogs");
            const documentOfBlog = await collectionOfBlogs.findOne({
                _id: id
            });

            const pathToImage = "C:/Users/Егор/Desktop/web-app/development/backend/images/blog_image.png";
            const ext = path.extname("blog_image.png");

            if (documentOfBlog) {
                res.status(200).json({
                    ...documentOfBlog
                });
                res.end();
            } else {
                fs.readFile(pathToImage, {
                    encoding: "base64"
                }, async (err, data) => {
                    if (err) {
                        res.status(404).json({
                            status: "Error",
                            message: "Image not found"
                        });
                        res.end();
                    }
                    await collectionOfBlogs.insertOne({
                        _id: id,
                        srcOfImg: `data:image/${ext.split(".").pop()};base64,${data}`,
                        dateOfCreated: "October 13, 2015",
                        countOfComments: 8,
                        comment: {
                            date: null,
                            user: null,
                            content: null,
                        },
                        countOfLikes: 15,
                        wasLikedByUser: false,
                        title: "THE BIG LEAGUES OUR TURN STRAIGHTNIN",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    });
                    const response = await collectionOfBlogs.findOne({
                        _id: id
                    });
                    res.status(200).json({
                        ...response
                    });
                    res.end();
                });
            }
        }
    });

module.exports = {
    blogRouter: blogRouter
}