/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./development/frontend/index.tsx":
/*!****************************************!*\
  !*** ./development/frontend/index.tsx ***!
  \****************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: The keyword 'interface' is reserved (54:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| export default function App() {\\n| \\n>     interface LoaderContextInterface {\\n|         up: boolean;\\n|         name: string;\");\n\n//# sourceURL=webpack://web-app/./development/frontend/index.tsx?");

/***/ }),

/***/ "./development/backend/index.js":
/*!**************************************!*\
  !*** ./development/backend/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chalk */ \"chalk\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routers_contacts_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routers/contacts/contact */ \"./development/backend/routers/contacts/contact.js\");\n/* harmony import */ var _routers_blog_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routers/blog/blog */ \"./development/backend/routers/blog/blog.js\");\n/* harmony import */ var _routers_basic_route_basic_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routers/basic_route/basic_route */ \"./development/backend/routers/basic_route/basic_route.js\");\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(\"../frontend\"));\napp.use(_routers_basic_route_basic_route__WEBPACK_IMPORTED_MODULE_5__.basicRouter);\napp.use(\"/contact%20us\", _routers_contacts_contact__WEBPACK_IMPORTED_MODULE_3__.routerContact);\napp.use(\"/blog\", _routers_blog_blog__WEBPACK_IMPORTED_MODULE_4__.blogRouter);\nvar server,\n    mainMongoClientUrl = \"mongodb://localhost:27017/\";\nvar mongoClient = new mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoClient(mainMongoClientUrl, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\nmongoClient.connect(function (error, client) {\n  if (error) {\n    console.error(error);\n    return;\n  }\n\n  server = app.listen(3000, function () {\n    console.log(chalk__WEBPACK_IMPORTED_MODULE_1__.bgWhite.green(\"Server is running\"));\n    var webAppDb = client.db(\"web-app\");\n    app.locals.webAppDb = webAppDb;\n  });\n});\nprocess.on(\"SIGTERM\", function () {\n  console.log(chalk__WEBPACK_IMPORTED_MODULE_1__.bgWhite.green(\"Server is closing\"));\n  server.close();\n  mongoClient.close();\n});\n\n//# sourceURL=webpack://web-app/./development/backend/index.js?");

/***/ }),

/***/ "./development/backend/routers/basic_route/basic_route.js":
/*!****************************************************************!*\
  !*** ./development/backend/routers/basic_route/basic_route.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basicRouter\": () => (/* binding */ basicRouter)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontend_index_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../frontend/index.tsx */ \"./development/frontend/index.tsx\");\n/* harmony import */ var _frontend_index_tsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_frontend_index_tsx__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar basicRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nbasicRouter.get(\"/\", function (_, res) {\n  var appStream = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToNodeStream)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_frontend_index_tsx__WEBPACK_IMPORTED_MODULE_2___default()), null));\n  var startHTML = \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n    <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n        <meta name=\\\"google\\\" value=\\\"notranslate\\\">\\n        <title>Loading...</title>\\n    </head>\\n    <body>\\n        <div id=\\\"root\\\" translate=\\\"no\\\"></div>\\n    \";\n  var endHTML = \"\\n        </body>\\n        </html>\\n    \";\n  res.write(startHTML);\n  appStream.pipe(res);\n  appStream.on(\"end\", function () {\n    res.write(endHTML);\n    res.end();\n  });\n});\n\n//# sourceURL=webpack://web-app/./development/backend/routers/basic_route/basic_route.js?");

/***/ }),

/***/ "./development/backend/routers/blog/blog.js":
/*!**************************************************!*\
  !*** ./development/backend/routers/blog/blog.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blogRouter\": () => (/* binding */ blogRouter)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar textParser = (0,express__WEBPACK_IMPORTED_MODULE_0__.text)();\nvar blogRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nvar jsonParser = (0,express__WEBPACK_IMPORTED_MODULE_0__.json)();\nblogRouter.route(\"/server/search\").get( /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var searchCollection, searches;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            searchCollection = req.app.locals.webAppDb.collection(\"searchs-requests\");\n            _context.next = 3;\n            return searchCollection.find().toArray();\n\n          case 3:\n            searches = _context.sent;\n\n            if (searches) {\n              res.status(202).json({\n                searches: searches\n              });\n            } else {\n              res.status(200).send(undefined);\n            }\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}()).post(textParser, /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n    var searchCollection, body, document, _document;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            if (!req.body) {\n              res.status(404).send(\"Error: request body isn`t valid!\");\n            }\n\n            searchCollection = req.app.locals.webAppDb.collection(\"searchs-requests\");\n            body = req.body;\n            _context2.next = 5;\n            return searchCollection.findOne({\n              search: body\n            });\n\n          case 5:\n            document = _context2.sent;\n\n            if (!document) {\n              _context2.next = 10;\n              break;\n            }\n\n            res.status(200).send(document.search);\n            _context2.next = 16;\n            break;\n\n          case 10:\n            _context2.next = 12;\n            return searchCollection.insertOne({\n              search: body\n            });\n\n          case 12:\n            _context2.next = 14;\n            return searchCollection.findOne({\n              search: body\n            });\n\n          case 14:\n            _document = _context2.sent;\n            res.status(202).send(_document.search);\n\n          case 16:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());\nblogRouter.route(\"/server/posts\").get( /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n    var idOfPost, pathToImage;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            idOfPost = +req.query.idOfPost;\n            pathToImage = (0,path__WEBPACK_IMPORTED_MODULE_2__.resolve)(\"././images/\".concat(idOfPost % 3 === 0 ? \"mount\" : idOfPost % 2 === 0 ? \"mount_smoke\" : \"mount_snow\", \".png\"));\n            (0,fs__WEBPACK_IMPORTED_MODULE_1__.readFile)(pathToImage, {\n              encoding: \"base64\"\n            }, function (err, data) {\n              if (err) {\n                res.status(404).json({\n                  status: \"Error\",\n                  code: 404\n                });\n                return;\n              }\n\n              var ext = (0,path__WEBPACK_IMPORTED_MODULE_2__.extname)(\"image.png\");\n              res.type(\"json\");\n              res.status(200).json({\n                src: \"data:image/\".concat(ext.split(\".\").pop(), \";base64,\").concat(data),\n                title: \"Magna mollis ultricies\",\n                date: \"3th oct 2012\"\n              });\n            });\n\n          case 3:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function (_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}());\nblogRouter.route(\"/server/postsOfBlog\").get( /*#__PURE__*/function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {\n    var action, idOfPost, collectionOfBlogs, documentOfBlog, pathToImage, ext, countOfComments, _countOfComments, idOfComment, comment, _comment;\n\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            action = req.query.action, idOfPost = req.query.idOfPost;\n\n            if (!(action && idOfPost)) {\n              _context5.next = 38;\n              break;\n            }\n\n            collectionOfBlogs = req.app.locals.webAppDb.collection(\"blogs\");\n            _context5.next = 5;\n            return collectionOfBlogs.findOne({\n              _id: idOfPost\n            });\n\n          case 5:\n            documentOfBlog = _context5.sent;\n            _context5.t0 = action;\n            _context5.next = _context5.t0 === \"getPost\" ? 9 : _context5.t0 === \"countOfComments\" ? 13 : _context5.t0 === \"commentsOfPost\" ? 23 : 34;\n            break;\n\n          case 9:\n            pathToImage = (0,path__WEBPACK_IMPORTED_MODULE_2__.resolve)(\"././images/blog_image.png\");\n            ext = (0,path__WEBPACK_IMPORTED_MODULE_2__.extname)(\"blog_image.png\");\n\n            if (documentOfBlog) {\n              res.status(200).json(documentOfBlog);\n            } else {\n              (0,fs__WEBPACK_IMPORTED_MODULE_1__.readFile)(pathToImage, {\n                encoding: \"base64\"\n              }, /*#__PURE__*/function () {\n                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(err, data) {\n                  var response;\n                  return regeneratorRuntime.wrap(function _callee4$(_context4) {\n                    while (1) {\n                      switch (_context4.prev = _context4.next) {\n                        case 0:\n                          if (err) {\n                            res.status(500).json({\n                              status: \"Error\",\n                              message: \"Image not found\"\n                            });\n                          }\n\n                          _context4.next = 3;\n                          return collectionOfBlogs.insertOne({\n                            _id: idOfPost,\n                            srcOfImg: \"data:image/\".concat(ext.split(\".\").pop(), \";base64,\").concat(data),\n                            dateOfCreated: \"October 13, 2015\",\n                            countOfComments: 0,\n                            comments: [],\n                            countOfLikes: 0,\n                            wasLikedByUser: false,\n                            title: \"THE BIG LEAGUES OUR TURN STRAIGHTNIN\",\n                            description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\"\n                          });\n\n                        case 3:\n                          _context4.next = 5;\n                          return collectionOfBlogs.findOne({\n                            _id: idOfPost\n                          });\n\n                        case 5:\n                          response = _context4.sent;\n                          res.status(200).json(response);\n\n                        case 7:\n                        case \"end\":\n                          return _context4.stop();\n                      }\n                    }\n                  }, _callee4);\n                }));\n\n                return function (_x9, _x10) {\n                  return _ref5.apply(this, arguments);\n                };\n              }());\n            }\n\n            return _context5.abrupt(\"break\", 36);\n\n          case 13:\n            if (!documentOfBlog) {\n              _context5.next = 18;\n              break;\n            }\n\n            countOfComments = documentOfBlog.countOfComments;\n            res.status(200).send(\"\".concat(countOfComments));\n            _context5.next = 22;\n            break;\n\n          case 18:\n            _context5.next = 20;\n            return collectionOfBlogs.findOne({\n              _id: idOfPost\n            });\n\n          case 20:\n            documentOfBlog = _context5.sent;\n\n            if (documentOfBlog) {\n              _countOfComments = documentOfBlog.countOfComments;\n              res.status(200).send(\"\".concat(_countOfComments));\n            } else {\n              res.status(400).send(\"Error: param of blog countOfComments - not found!\");\n            }\n\n          case 22:\n            return _context5.abrupt(\"break\", 36);\n\n          case 23:\n            idOfComment = +req.query.idOfComment;\n\n            if (!(documentOfBlog && idOfComment)) {\n              _context5.next = 29;\n              break;\n            }\n\n            comment = documentOfBlog.comments[idOfComment];\n            res.status(200).json(comment);\n            _context5.next = 33;\n            break;\n\n          case 29:\n            _context5.next = 31;\n            return collectionOfBlogs.findOne({\n              _id: idOfPost\n            });\n\n          case 31:\n            documentOfBlog = _context5.sent;\n\n            if (documentOfBlog) {\n              _comment = documentOfBlog.comments[idOfComment];\n              res.status(200).json(_comment);\n            } else {\n              res.status(400).send(\"Error: param of blog arrayOfComments - not found!\");\n            }\n\n          case 33:\n            return _context5.abrupt(\"break\", 36);\n\n          case 34:\n            res.status(400).send(\"Search param isn`t valid!\");\n            return _context5.abrupt(\"break\", 36);\n\n          case 36:\n            _context5.next = 39;\n            break;\n\n          case 38:\n            res.status(400).send(\"Error: request query isn`t valid!\");\n\n          case 39:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n\n  return function (_x7, _x8) {\n    return _ref4.apply(this, arguments);\n  };\n}()).put(jsonParser, /*#__PURE__*/function () {\n  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {\n    var idOfPost, body, collection, document;\n    return regeneratorRuntime.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            if (!req.query.idOfPost) {\n              _context6.next = 26;\n              break;\n            }\n\n            idOfPost = req.query.idOfPost, body = req.body;\n            collection = req.app.locals.webAppDb.collection(\"blogs\");\n\n            if (!body) {\n              _context6.next = 23;\n              break;\n            }\n\n            _context6.t0 = body.type;\n            _context6.next = _context6.t0 === \"setStateOfLike\" ? 7 : _context6.t0 === \"writeComment\" ? 14 : 21;\n            break;\n\n          case 7:\n            _context6.next = 9;\n            return collection.findOneAndUpdate({\n              _id: idOfPost\n            }, {\n              \"$set\": {\n                countOfLikes: body.countOfLikes,\n                wasLikedByUser: body.wasLikedByUser\n              }\n            });\n\n          case 9:\n            _context6.next = 11;\n            return collection.findOne({\n              _id: idOfPost\n            });\n\n          case 11:\n            document = _context6.sent;\n            res.json(document);\n            return _context6.abrupt(\"break\", 21);\n\n          case 14:\n            _context6.next = 16;\n            return collection.findOneAndUpdate({\n              _id: idOfPost\n            }, {\n              \"$set\": {\n                countOfComments: body.countOfComments\n              },\n              \"$push\": {\n                comments: {\n                  dateOfWrite: body.comment.dateOfWrite,\n                  userName: body.comment.userName,\n                  content: body.comment.content\n                }\n              }\n            });\n\n          case 16:\n            _context6.next = 18;\n            return collection.findOne({\n              _id: idOfPost\n            });\n\n          case 18:\n            document = _context6.sent;\n            res.json(document);\n            return _context6.abrupt(\"break\", 21);\n\n          case 21:\n            _context6.next = 24;\n            break;\n\n          case 23:\n            res.status(400).send(\"Error: request body isn`t valid!\");\n\n          case 24:\n            _context6.next = 27;\n            break;\n\n          case 26:\n            res.status(400).send(\"Error: request query isn`t valid!\");\n\n          case 27:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n\n  return function (_x11, _x12) {\n    return _ref6.apply(this, arguments);\n  };\n}());\n\n//# sourceURL=webpack://web-app/./development/backend/routers/blog/blog.js?");

/***/ }),

/***/ "./development/backend/routers/contacts/contact.js":
/*!*********************************************************!*\
  !*** ./development/backend/routers/contacts/contact.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routerContact\": () => (/* binding */ routerContact)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar jsonParser = (0,express__WEBPACK_IMPORTED_MODULE_0__.json)();\nvar routerContact = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouterContact.post(\"/server\", jsonParser, function (req, res) {\n  var mongoClient = new mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient(\"mongodb://localhost:27017/\", {\n    useUnifiedTopology: true\n  });\n\n  try {\n    if (!req.body) {\n      throw new Error(\"Request body not found\");\n    }\n\n    mongoClient.connect( /*#__PURE__*/function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, result) {\n        var body, collection, arrayofDocuments;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!err) {\n                  _context.next = 2;\n                  break;\n                }\n\n                throw new Error(\"Something wrong!\");\n\n              case 2:\n                body = req.body;\n                collection = result.db(\"web-app\").collection(\"users\");\n                _context.next = 6;\n                return collection.find({\n                  email: body.email\n                }, {\n                  _id: 0\n                }).toArray();\n\n              case 6:\n                arrayofDocuments = _context.sent;\n\n                if (!(arrayofDocuments.length === 0)) {\n                  _context.next = 15;\n                  break;\n                }\n\n                _context.next = 10;\n                return collection.insertOne(body);\n\n              case 10:\n                res.status(200).json({\n                  status: \"Ok\",\n                  body: body\n                });\n                res.end();\n                result.close();\n                _context.next = 19;\n                break;\n\n              case 15:\n                console.log(arrayofDocuments);\n                res.status(422).json({\n                  status: \"Error\",\n                  message: \"This email was used\"\n                });\n                res.end();\n                result.close();\n\n              case 19:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x, _x2) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n  } catch (error) {\n    res.status(500).json({\n      status: \"Error: \".concat(error.status ? error.status : \"Some error\"),\n      message: error.message\n    });\n  }\n});\n\n//# sourceURL=webpack://web-app/./development/backend/routers/contacts/contact.js?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("chalk");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./development/backend/index.js");
/******/ 	
/******/ })()
;