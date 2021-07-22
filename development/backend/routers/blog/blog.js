import { text, Router, json } from "express";
import { Schema, model } from "mongoose";
import { callResponseError } from "../../functions";

const textParser = text();
export const blogRouter = Router();
const jsonParser = json();

const schemaOfSearch = new Schema({
    search: String
}, {
    collection: "search-requests"
});
const ModelOfSearch = model("search-request", schemaOfSearch);

const schemaOfComment = new Schema({
    dateOfWrite: String,
    useName: String,
    content: String
}, {
    autoIndex: false
});
const schemaOfBlog = new Schema({
    _id: String,
    srcOfImg: String,
    dateOfCreated: String,
    countOfComments: Number,
    comments: [schemaOfComment],
    countOfLikes: Number,
    wasLikedByUser: Boolean,
    title: String,
    description: String
}, {
    collection: "blogs",
    autoIndex: false
});
const ModelOfBlog = model("blog", schemaOfBlog);

blogRouter.route("/server/search")
    .get(async (_req, res) => {
        try {
            let searches = await ModelOfSearch.find({});
            let response = {
                searches: searches
            };
            res.status(200).json(response);
        } catch (err) {
            callResponseError(res, err, 404);
        }
    })
    .post(textParser, async (req, res) => {
        try {
            if ( !req.body ) {
                let errorMessage = "Error: request body isn`t valid!";
                res.status(404).send(errorMessage);
                throw new Error(errorMessage);
            }
            let body = req.body;
            let search = await ModelOfSearch.findOne({
                search: body
            });

            if ( search ) {
                res.status(200).send(document.search);
                return;
            }
            let newSearch = new ModelOfSearch("search", {
                search: body
            });
            let response = await newSearch.save();
            if ( !response ) throw new Error("Search hasn`t been saved!");
            res.status(200).send(response.search);
        } catch (err) {
            callResponseError(res, err, 404);
        }
    });

blogRouter.route("/server/posts")
    .get(async (req, res) => {
        try {
            let idOfPost = +req.query.idOfPost;
            let objImgOfPost = await import(`../../images/${
                idOfPost % 3 === 0 ? "mount" :
                idOfPost % 2 === 0 ? "mount_smoke" : "mount_snow"
            }.png`);

            let urlOfImg = objImgOfPost.default;
            if ( typeof urlOfImg !== "string" ) throw new TypeError("Url of image isn`t valid!");
            let response = {
                src: urlOfImg,
                title: "Magna mollis ultricies",
                date: "3th oct 2012"
            };
            res.status(200).json(response);
        } catch (err) {
            callResponseError(res, err, 404);
        }
    });

blogRouter.route("/server/postsOfBlog")
    .get(async (req, res) => {
        try {
            let action = req.query.action, idOfPost = req.query.idOfPost;
            if ( !action || !idOfPost ) throw new Error("Error: request query isn`t valid!");
            let blog = await ModelOfBlog.findOne({
                _id: idOfPost
            });
            
            switch( action ) {
                case "getPost":
                    if ( blog ) {
                        res.status(200).json(blog);
                        return;
                    }
                    let objImgOfPost = await import("../../images/blog_image.png");
                    let urlOfImg = objImgOfPost.default;
                    if ( typeof urlOfImg !== "string" ) throw new TypeError("Url of image isn`t valid!");
                    let newBlog = new ModelOfBlog({
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
                    let response = await newBlog.save();
                    if ( !response ) throw new Error("Blog hasn`t been saved!");
                    res.status(200).json(response);
                    break;
                case "countOfComments":
                    if ( blog ) {
                        let countOfComments = blog.countOfComments;
                        res.status(200).send(`${countOfComments}`);
                        return;
                    }
                    throw new Error("Error: param of blog countOfComments - not found!");
                case "commentsOfPost":
                    let idOfComment = +req.query.idOfComment;
                    if ( !blog || ( !idOfComment && idOfComment !== 0 ) ) throw new Error("Error: param of blog arrayOfComments - not found!");
                    let comment = blog.comments[idOfComment];
                    res.status(200).json(comment);
                    break;
                default:
                    throw new Error("Search action isn`t valid!");
            }
        } catch (err) {
            callResponseError(res, err, 404);
        }
    })
    .put(jsonParser, async (req, res) => {
        try {
            let idOfPost = req.query.idOfPost, type = req.query.action, body = req.body;
            if ( !idOfPost ) throw new Error("Error: request query isn`t valid!");
            if ( !body ) throw new Error("Error: request body isn`t valid!");

            let response;
            let blog = await ModelOfBlog.findOne({
                _id: idOfPost 
            });

            switch ( type ) {
                case "setStateOfLike":
                    blog.set("countOfLikes", body.countOfLikes);
                    blog.set("wasLikedByUser", body.wasLikedByUser);
                    response = await blog.save();
                    if ( !response ) throw new Error("StateOfLike hasn`t been saved!");
                    res.status(200).json(response);
                    break;
                case "writeComment":
                    let comment = {
                        dateOfWrite: body.comment.dateOfWrite,
                        userName: body.comment.userName,
                        content: body.comment.content
                    }
                    blog.set("countOfComments", body.countOfComments);
                    blog.get("comments").push(comment);
                    response = await blog.save();
                    if ( !response ) throw new Error("StateOfLike hasn`t been saved!");
                    res.status(200).json(response);
                    break;
                default:
                    throw new Error("Error: request type isn`t valid!");
            }
        } catch (err) {
            callResponseError(res, err, 404);
        }
    });