import chalk from "chalk";
import { text, Router, json } from "express";
import { readFile } from "fs";
import { resolve, extname } from "path";

const textParser = text();
export const blogRouter = Router();
const jsonParser = json();

blogRouter.route("/server/search")
    .get(async (req, res) => {
        const searchCollection = req.app.locals.webAppDb.collection("searchs-requests");
        let searches = await searchCollection.find().toArray();
        if (searches) {
            res.status(202).json({
                searches: searches
            });
        } else {
            res.status(200).send(undefined);
        }
    })
    .post(textParser, async (req, res) => {
        if (!req.body) {
            res.status(404).send("Error: request body isn`t valid!");
        }
        const searchCollection = req.app.locals.webAppDb.collection("searchs-requests");
        let body = req.body;
        const document = await searchCollection.findOne({
            search: body
        });

        if (document) {
            res.status(200).send(document.search);
        } else {
            await searchCollection.insertOne({
                search: body
            });
            const document = await searchCollection.findOne({
                search: body
            });
            res.status(202).send(document.search);
        }
    });

blogRouter.route("/server/posts")
    .get(async (req, res) => {
        const idOfPost = +req.query.idOfPost;

        const objImgOfPost = await import(`../../images/${
            idOfPost % 3 === 0 ? "mount" :
            idOfPost % 2 === 0 ? "mount_smoke" : "mount_snow"
        }.png`);
        const urlOfImg = objImgOfPost.default;
        if (!urlOfImg) {
            res.status(500).send("Something is wrong on the server!");
            return;
        }
        if (typeof urlOfImg === "string") {
            res.type("json");
            res.status(200).json({
                src: urlOfImg,
                title: "Magna mollis ultricies",
                date: "3th oct 2012"
            });
        }
    });

blogRouter.route("/server/postsOfBlog")
    .get(async (req, res) => {
        const action = req.query.action, idOfPost = req.query.idOfPost;
        if (action && idOfPost) {
            const collectionOfBlogs = req.app.locals.webAppDb.collection("blogs");
            let documentOfBlog = await collectionOfBlogs.findOne({
                _id: idOfPost
            });
            switch(action) {
                case "getPost":
                    const objImgOfPost = await import("../../images/blog_image.png");
                    const urlOfImg = objImgOfPost.default;
                    if (documentOfBlog) {
                        res.type("json");
                        res.status(200).json(documentOfBlog);
                        return;
                    } else {
                        if (!urlOfImg) {
                            res.status(500).send("Something is wrong on the server!");
                            return;
                        }
                        if (urlOfImg) {
                            await collectionOfBlogs.insertOne({
                                _id: idOfPost,
                                srcOfImg: urlOfImg,
                                dateOfCreated: "October 13, 2015",
                                countOfComments: 0,
                                comments: [],
                                countOfLikes: 0,
                                wasLikedByUser: false,
                                title: "THE BIG LEAGUES OUR TURN STRAIGHTNIN",
                                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                            });
                            const response = await collectionOfBlogs.findOne({
                                _id: idOfPost
                            });
                            res.type("json");
                            res.status(200).json(response);
                        }
                    }
                    break;
                case "countOfComments":
                    if (documentOfBlog) {
                        const countOfComments = documentOfBlog.countOfComments;
                        res.status(200).send(`${countOfComments}`);
                    } else {
                        documentOfBlog = await collectionOfBlogs.findOne({
                            _id: idOfPost
                        });
                        if (documentOfBlog) {
                            const countOfComments = documentOfBlog.countOfComments;
                            res.status(200).send(`${countOfComments}`);
                        } else {
                            res.status(400).send("Error: param of blog countOfComments - not found!")
                        }
                    }
                    break;
                case "commentsOfPost":
                    const idOfComment = +req.query.idOfComment;
                    if (documentOfBlog && idOfComment) {
                        const comment = documentOfBlog.comments[idOfComment];
                        res.status(200).json(comment);
                    } else {
                        documentOfBlog = await collectionOfBlogs.findOne({
                            _id: idOfPost
                        });
                        if (documentOfBlog) {
                            const comment = documentOfBlog.comments[idOfComment];
                            res.status(200).json(comment);
                        } else {
                            res.status(400).send("Error: param of blog arrayOfComments - not found!")
                        }
                    }
                    break;
                default:
                    res.status(400).send("Search param isn`t valid!");
                    break;
            }
        } else {
            res.status(400).send("Error: request query isn`t valid!")
        }
    })
    .put(jsonParser, async (req, res) => {
        if (req.query.idOfPost) {
            const idOfPost = req.query.idOfPost, body = req.body;
            const collection =  req.app.locals.webAppDb.collection("blogs");
            let document;
            if (body) {
                switch(body.type) {
                    case "setStateOfLike":
                        await collection.findOneAndUpdate({
                            _id: idOfPost
                        }, {
                            "$set": {
                                countOfLikes: body.countOfLikes,
                                wasLikedByUser: body.wasLikedByUser
                            }
                        });
                        document = await collection.findOne({
                            _id: idOfPost
                        });
                        res.json(document);
                        break;
                    case "writeComment":
                        await collection.findOneAndUpdate({
                            _id: idOfPost
                        }, {
                            "$set": {
                                countOfComments: body.countOfComments
                            },
                            "$push": {
                                comments: {
                                    dateOfWrite: body.comment.dateOfWrite,
                                    userName: body.comment.userName,
                                    content: body.comment.content
                                }
                            }
                        });
                        document = await collection.findOne({
                            _id: idOfPost
                        });
                        res.json(document);
                        break; 
                }
            } else {
                res.status(400).send("Error: request body isn`t valid!");
            }
        } else {
            res.status(400).send("Error: request query isn`t valid!");
        }
    });