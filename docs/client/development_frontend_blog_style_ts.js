/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["development_frontend_blog_style_ts"],{

/***/ "./development/frontend/blog/style.ts":
/*!********************************************!*\
  !*** ./development/frontend/blog/style.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main),\n/* harmony export */   \"main_conteiner\": () => (/* binding */ main_conteiner),\n/* harmony export */   \"main_conteiner__info\": () => (/* binding */ main_conteiner__info),\n/* harmony export */   \"inputSearch_conteiner\": () => (/* binding */ inputSearch_conteiner),\n/* harmony export */   \"inputSearch\": () => (/* binding */ inputSearch),\n/* harmony export */   \"searchIcon\": () => (/* binding */ searchIcon),\n/* harmony export */   \"pushIntoInput\": () => (/* binding */ pushIntoInput),\n/* harmony export */   \"pushIntoInput_field\": () => (/* binding */ pushIntoInput_field),\n/* harmony export */   \"conteiner_info__posts\": () => (/* binding */ conteiner_info__posts),\n/* harmony export */   \"postsH2\": () => (/* binding */ postsH2),\n/* harmony export */   \"postsH4\": () => (/* binding */ postsH4),\n/* harmony export */   \"postsH4Active\": () => (/* binding */ postsH4Active),\n/* harmony export */   \"info_posts__titles\": () => (/* binding */ info_posts__titles),\n/* harmony export */   \"info_posts__lineConteiner\": () => (/* binding */ info_posts__lineConteiner),\n/* harmony export */   \"greenLine\": () => (/* binding */ greenLine),\n/* harmony export */   \"info_posts__body\": () => (/* binding */ info_posts__body),\n/* harmony export */   \"posts_body__column\": () => (/* binding */ posts_body__column),\n/* harmony export */   \"column_post\": () => (/* binding */ column_post),\n/* harmony export */   \"column_post__text\": () => (/* binding */ column_post__text),\n/* harmony export */   \"column_post__text___h5\": () => (/* binding */ column_post__text___h5),\n/* harmony export */   \"column_post__text___p\": () => (/* binding */ column_post__text___p),\n/* harmony export */   \"listOfTypesBlog\": () => (/* binding */ listOfTypesBlog),\n/* harmony export */   \"listOfTypesBlog_h3\": () => (/* binding */ listOfTypesBlog_h3),\n/* harmony export */   \"listOfTypesBlog_items\": () => (/* binding */ listOfTypesBlog_items),\n/* harmony export */   \"listOfTypesBlog_items__item\": () => (/* binding */ listOfTypesBlog_items__item),\n/* harmony export */   \"listOfTypesBlog_items__item___p\": () => (/* binding */ listOfTypesBlog_items__item___p),\n/* harmony export */   \"tags\": () => (/* binding */ tags),\n/* harmony export */   \"tags_h3\": () => (/* binding */ tags_h3),\n/* harmony export */   \"tags_conteiner\": () => (/* binding */ tags_conteiner),\n/* harmony export */   \"tag\": () => (/* binding */ tag),\n/* harmony export */   \"breakElem\": () => (/* binding */ breakElem),\n/* harmony export */   \"main_conteiner__blogs\": () => (/* binding */ main_conteiner__blogs),\n/* harmony export */   \"main_conteiner__blogs___conteiner\": () => (/* binding */ main_conteiner__blogs___conteiner),\n/* harmony export */   \"main_conteiner__blogs___blog\": () => (/* binding */ main_conteiner__blogs___blog),\n/* harmony export */   \"blog_info\": () => (/* binding */ blog_info),\n/* harmony export */   \"blog_info__date\": () => (/* binding */ blog_info__date),\n/* harmony export */   \"blog_info__comment\": () => (/* binding */ blog_info__comment),\n/* harmony export */   \"iconOfComment\": () => (/* binding */ iconOfComment),\n/* harmony export */   \"blog_info__likes\": () => (/* binding */ blog_info__likes),\n/* harmony export */   \"heartIcon\": () => (/* binding */ heartIcon),\n/* harmony export */   \"teaxtAreaConteiner\": () => (/* binding */ teaxtAreaConteiner),\n/* harmony export */   \"commentOfPost\": () => (/* binding */ commentOfPost),\n/* harmony export */   \"arrow_submit\": () => (/* binding */ arrow_submit),\n/* harmony export */   \"comment\": () => (/* binding */ comment),\n/* harmony export */   \"comment_head\": () => (/* binding */ comment_head),\n/* harmony export */   \"h5OfCommentHead\": () => (/* binding */ h5OfCommentHead),\n/* harmony export */   \"contentOfComment\": () => (/* binding */ contentOfComment),\n/* harmony export */   \"showMoreComments\": () => (/* binding */ showMoreComments),\n/* harmony export */   \"title\": () => (/* binding */ title),\n/* harmony export */   \"descriptionOfPost\": () => (/* binding */ descriptionOfPost),\n/* harmony export */   \"toReadDescription\": () => (/* binding */ toReadDescription),\n/* harmony export */   \"arrowIcon\": () => (/* binding */ arrowIcon),\n/* harmony export */   \"main_conteinerMobile\": () => (/* binding */ main_conteinerMobile),\n/* harmony export */   \"main_conteiner__infoMobile\": () => (/* binding */ main_conteiner__infoMobile),\n/* harmony export */   \"main_conteiner__blogsMobile\": () => (/* binding */ main_conteiner__blogsMobile),\n/* harmony export */   \"main_conteiner__blogs___blogMobile\": () => (/* binding */ main_conteiner__blogs___blogMobile),\n/* harmony export */   \"blog_infoMobile\": () => (/* binding */ blog_infoMobile),\n/* harmony export */   \"commentsMobile\": () => (/* binding */ commentsMobile),\n/* harmony export */   \"commentMobile\": () => (/* binding */ commentMobile),\n/* harmony export */   \"comment_headMobile\": () => (/* binding */ comment_headMobile),\n/* harmony export */   \"titleMobile\": () => (/* binding */ titleMobile),\n/* harmony export */   \"descriptionOfPostMobile\": () => (/* binding */ descriptionOfPostMobile),\n/* harmony export */   \"switcherToBlogs\": () => (/* binding */ switcherToBlogs),\n/* harmony export */   \"switcherToBlogsAndInfo_circle\": () => (/* binding */ switcherToBlogsAndInfo_circle),\n/* harmony export */   \"switcherToBlogsAndInfoIcon\": () => (/* binding */ switcherToBlogsAndInfoIcon),\n/* harmony export */   \"switcherToInfo\": () => (/* binding */ switcherToInfo),\n/* harmony export */   \"conteiner_info__postsMobile\": () => (/* binding */ conteiner_info__postsMobile),\n/* harmony export */   \"info_posts__titlesMobile\": () => (/* binding */ info_posts__titlesMobile),\n/* harmony export */   \"info_posts__lineConteinerMobile\": () => (/* binding */ info_posts__lineConteinerMobile),\n/* harmony export */   \"column_postMobile\": () => (/* binding */ column_postMobile),\n/* harmony export */   \"breakElemMobile\": () => (/* binding */ breakElemMobile),\n/* harmony export */   \"main_conteinerTablet\": () => (/* binding */ main_conteinerTablet),\n/* harmony export */   \"main_conteiner__blogsTablet\": () => (/* binding */ main_conteiner__blogsTablet),\n/* harmony export */   \"main_conteiner__infoTablet\": () => (/* binding */ main_conteiner__infoTablet),\n/* harmony export */   \"info_posts__titlesTablet\": () => (/* binding */ info_posts__titlesTablet),\n/* harmony export */   \"info_posts__lineConteinerTablet\": () => (/* binding */ info_posts__lineConteinerTablet),\n/* harmony export */   \"searchIconMobileAndTablet\": () => (/* binding */ searchIconMobileAndTablet),\n/* harmony export */   \"main_conteinerNormal\": () => (/* binding */ main_conteinerNormal),\n/* harmony export */   \"main_conteiner__blogsNormal\": () => (/* binding */ main_conteiner__blogsNormal)\n/* harmony export */ });\nvar main = {\n  gridArea: \"main\",\n  transform: \"translate(-20px, -20px)\",\n  opacity: 0\n};\nvar main_conteiner = {\n  margin: \"150px 6.077% 0 6.154%\",\n  display: \"flex\",\n  justifyContent: \"space-between\",\n  alignItems: \"flex-start\"\n};\nvar main_conteiner__info = {\n  top: \"25px\",\n  position: \"sticky\",\n  width: \"263px\",\n  display: \"flex\",\n  flexDirection: \"column\",\n  alignItems: \"flex-start\",\n  justifyContent: \"flex-start\",\n  overflow: \"hidden scroll\"\n};\nvar inputSearch_conteiner = {\n  position: \"relative\",\n  width: \"100%\",\n  backgroundColor: \"#ececec\",\n  display: \"flex\",\n  alignItems: \"center\"\n};\nvar inputSearch = {\n  width: \"90%\",\n  height: \"40px\",\n  backgroundColor: \"#ececec\",\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"12px\",\n  lineHeight: \"48px\",\n  fontWeight: 700,\n  textTransform: \"uppercase\",\n  border: 0,\n  padding: \"0 0 0 15px\",\n  margin: 0,\n  outline: \"none\"\n};\nvar searchIcon = {\n  display: \"flex\",\n  position: \"absolute\",\n  cursor: \"pointer\",\n  top: \"13px\",\n  right: \"19px\",\n  opacity: .5,\n  fontFamily: \"Ionicons\",\n  fontSize: \"18px\",\n  lineHeight: \"48px\",\n  fontWeight: 400,\n  textTransform: \"uppercase\",\n  color: \"#60606e\"\n};\nvar pushIntoInput = {\n  position: \"absolute\",\n  top: \"100%\",\n  left: \"100%\",\n  opacity: 0,\n  width: \"100%\",\n  transition: \".25s ease-out\",\n  transitionProperty: \"top, opacity, left\",\n  WebkitBoxShadow: \"0px 50px 100px 17px rgba(34, 60, 80, 0.2)\",\n  MozBoxShadow: \"0px 50px 100px 17px rgba(34, 60, 80, 0.2)\",\n  boxShadow: \"0px 50px 100px 17px rgba(34, 60, 80, 0.2)\",\n  zIndex: 20,\n  height: \"156px\",\n  maxHeight: \"156px\",\n  overflowY: \"scroll\"\n};\nvar pushIntoInput_field = {\n  width: \"100%\",\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"center\",\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"12px\",\n  lineHeight: \"48px\",\n  fontWeight: 700,\n  textTransform: \"uppercase\",\n  backgroundColor: \"#7beec7\",\n  color: \"#ffffff\",\n  borderTop: \"2px solid #b2b2b3\",\n  borderBottom: \"2px solid #b2b2b3\",\n  cursor: \"pointer\"\n};\nvar conteiner_info__posts = {\n  margin: \"50px 0 0 0\",\n  display: \"flex\",\n  flexDirection: \"column\",\n  alignItems: \"flex-start\",\n  justifyContent: \"flex-start\",\n  width: \"100%\"\n};\nvar postsH2 = {\n  margin: 0,\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"14px\",\n  fontWeight: \"700\",\n  textTransform: \"uppercase\",\n  color: \"#60606e\"\n};\nvar postsH4 = {\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"12px\",\n  fontWeight: \"700\",\n  textTransform: \"uppercase\",\n  color: \"#999999\",\n  transition: \"color .25s linear\",\n  margin: 0,\n  cursor: \"pointer\"\n};\nvar postsH4Active = {\n  color: \"#60606e\"\n};\nvar info_posts__titles = {\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyConstent: \"space-between\",\n  margin: \"29px 0 0 0\"\n};\nvar info_posts__lineConteiner = {\n  margin: \"20px 0 0 0\",\n  position: \"relative\",\n  width: \"263px\",\n  height: \"2px\",\n  backgroundColor: \"#e6e6e6\"\n};\nvar greenLine = {\n  position: \"absolute\",\n  height: \"100%\",\n  width: \"33.333%\",\n  backgroundColor: \"#7beec7\",\n  top: 0,\n  left: 0\n};\nvar info_posts__body = {\n  maxWidth: \"100%\",\n  width: \"100%\",\n  height: \"263px\",\n  maxHeight: \"263px\",\n  display: \"flex\",\n  scrollSnapType: \"x mandatory\",\n  overflowX: \"hidden\",\n  scrollSnapStop: \"always\",\n  margin: \"29px 0 0 0\"\n};\nvar posts_body__column = {\n  width: \"100%\",\n  minWidth: \"100%\",\n  height: \"100%\",\n  display: \"flex\",\n  flexDirection: \"column\",\n  alignItems: \"flex-start\",\n  justifyContent: \"flex-start\"\n};\nvar column_post = {\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"flex-start\",\n  width: \"100%\"\n};\nvar column_post__text = {\n  margin: \"0 0 0 17px\",\n  width: \"120px\"\n};\nvar column_post__text___h5 = {\n  margin: 0,\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"14px\",\n  lineHeight: \"18px\",\n  fontWeight: 700,\n  textTransform: \"uppercase\",\n  color: \"#60606e\"\n};\nvar column_post__text___p = {\n  margin: 0,\n  fontFamily: 'Open Sans, sans-serif',\n  fontSize: \"12px\",\n  lineHeight: \"18px\",\n  fontWeight: 400,\n  color: \"#9a9a9a\"\n};\nvar listOfTypesBlog = {\n  display: \"flex\",\n  flexDirection: \"column\",\n  alignItems: \"flex-start\",\n  justifyContent: \"flex-start\",\n  width: \"100%\"\n};\nvar listOfTypesBlog_h3 = {\n  margin: 0,\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"14px\",\n  fontWeight: 700,\n  textTransform: \"uppercase\",\n  color: \"#60606e\"\n};\nvar listOfTypesBlog_items = {\n  margin: \"8px 0 0 0\",\n  display: \"flex\",\n  flexDirection: \"column\",\n  alignItems: \"flex-start\",\n  justifyContent: \"flex-start\",\n  width: \"100%\"\n};\nvar listOfTypesBlog_items__item = {\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"space-between\",\n  borderBottom: \"1px solid #bfbfbf\",\n  width: \"100%\",\n  transition: \"border-bottom .3s ease-in\",\n  cursor: \"pointer\"\n};\nvar listOfTypesBlog_items__item___p = {\n  margin: 0,\n  fontFamily: 'Open Sans, sans-serif',\n  fontSize: \"14px\",\n  lineHeight: \"48px\",\n  fontWeight: 400,\n  color: \"#60606e\",\n  transition: \"color .3s ease-in\"\n};\nvar tags = {\n  margin: \"49px 0 0 0\",\n  display: \"flex\",\n  flexDirection: \"column\",\n  alignItems: \"flex-start\",\n  justifyContent: \"flex-start\",\n  width: \"100%\"\n};\nvar tags_h3 = {\n  margin: 0,\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"14px\",\n  fontWeight: 700,\n  textTransform: \"uppercase\",\n  color: \"#60606e\"\n};\nvar tags_conteiner = {\n  width: \"100%\",\n  margin: \"31px 0 0 0\",\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"flex-start\",\n  flexWrap: \"wrap\",\n  gap: \"5px\"\n};\nvar tag = {\n  height: \"30px\",\n  backgroundColor: \"#e5e5e5\",\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"center\",\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"12px\",\n  fontWeight: 700,\n  textTransform: \"uppercase\",\n  color: \"#999999\",\n  cursor: \"pointer\",\n  transition: \"color .3s linear, background-color .3s linear\"\n};\nvar breakElem = {\n  flexBasis: \"10%\",\n  height: 0\n};\nvar main_conteiner__blogs = {\n  width: \"750px\",\n  display: \"flex\",\n  flexDirection: \"column\",\n  alignItems: \"flex-start\",\n  justifyContent: \"flex-start\"\n};\nvar main_conteiner__blogs___conteiner = {\n  width: \"100%\",\n  position: \"relative\",\n  height: \"747px\"\n};\nvar main_conteiner__blogs___blog = {\n  width: \"100%\",\n  height: \"100%\"\n};\nvar blog_info = {\n  margin: \"30px 0 0 0\",\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"flex-start\"\n};\nvar blog_info__date = {\n  width: \"166px\",\n  height: \"30px\",\n  backgroundColor: \"#7beec7\",\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"center\",\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"14px\",\n  fontWeight: 700,\n  textTransform: \"uppercase\",\n  color: \"#ffffff\"\n};\nvar blog_info__comment = {\n  margin: \"0 0 0 14px\",\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"flex-start\",\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"14px\",\n  fontWeight: 400,\n  textTransform: \"uppercase\",\n  color: \"#cccccc\",\n  cursor: \"pointer\"\n};\nvar iconOfComment = {\n  display: \"flex\",\n  margin: \"0 9px 0 0\",\n  cursor: \"pointer\",\n  fontFamily: \"Ionicons\",\n  fontSize: \"18px\",\n  lineHeight: \"48px\",\n  fontWeight: 400,\n  textTransform: \"uppercase\",\n  color: \"#cccccc\",\n  transform: \"rotateY(180deg)\"\n};\nvar blog_info__likes = {\n  margin: \"0 0 0 20px\",\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"flex-start\",\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"14px\",\n  fontWeight: 400,\n  textTransform: \"uppercase\",\n  color: \"#cccccc\",\n  cursor: \"pointer\"\n};\nvar heartIcon = {\n  display: \"flex\",\n  transition: \".25s linear\",\n  transitionProperty: \"color\",\n  margin: \"0 8px 0 0\",\n  cursor: \"pointer\",\n  fontFamily: \"Ionicons\",\n  fontSize: \"18px\",\n  lineHeight: \"48px\",\n  fontWeight: 400,\n  textTransform: \"uppercase\"\n};\nvar teaxtAreaConteiner = {\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"space-around\",\n  transitionDuration: \".25s\",\n  transitionTimingFunction: \"ease-in-out\",\n  transformOrigin: \"left center\",\n  transitionProperty: \"height, width, box-shadow, margin\",\n  width: 0\n};\nvar commentOfPost = {\n  transitionDuration: \".25s\",\n  transitionTimingFunction: \"ease-in-out\",\n  transitionProperty: \"padding, margin\",\n  transformOrigin: \"left center\",\n  padding: 0,\n  margin: 0,\n  width: \"90%\",\n  height: \"100%\",\n  border: 0,\n  color: \"#7beec7\",\n  outline: 0,\n  resize: \"none\",\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"12px\",\n  lineHeight: \"24px\",\n  fontWeight: 700,\n  textTransform: \"uppercase\"\n};\nvar arrow_submit = {\n  color: \"rgb(123, 238, 199)\",\n  transition: \".35s linear\",\n  transitionProperty: \"color\",\n  cursor: \"pointer\"\n};\nvar comment = {\n  backgroundColor: \"#7beec7\",\n  margin: \"15px 0 0 0\"\n};\nvar comment_head = {\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"space-between\",\n  borderBottom: \"2px solid #c1c1c2\"\n};\nvar h5OfCommentHead = {\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"14px\",\n  lineHeight: \"48px\",\n  fontWeight: 700,\n  textTransform: \"uppercase\",\n  color: \"#ffffff\"\n};\nvar contentOfComment = {\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"14px\",\n  margin: 0,\n  fontWeight: 700,\n  textTransform: \"uppercase\",\n  color: \"#60606e\",\n  padding: \"25px\",\n  maxWidth: \"calc(100% - 50px)\",\n  wordBreak: \"break-all\"\n};\nvar showMoreComments = {\n  margin: \"15px 0 0 0\",\n  width: \"160px\",\n  height: \"40px\",\n  border: \"none\",\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"center\",\n  backgroundColor: \"#e5e5e5\",\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"12px\",\n  lineHeight: \"48px\",\n  fontWeight: 700,\n  textTransform: \"uppercase\",\n  color: \"#999999\",\n  transition: \"0.25s ease-in\",\n  cursor: \"pointer\",\n  transitionProperty: \"color, background-color, box-shadow\",\n  outline: \"none\"\n};\nvar title = {\n  margin: \"20px 0 0 0\",\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"18px\",\n  fontWeight: 700,\n  textTransform: \"uppercase\",\n  color: \"#60606e\"\n};\nvar descriptionOfPost = {\n  margin: \"21px 0 0 0\",\n  fontFamily: 'Open Sans, sans-serif',\n  fontSize: \"14px\",\n  lineHeight: \"24px\",\n  fontWeight: 400,\n  color: \"#999999\",\n  overflowY: \"hidden\"\n};\nvar toReadDescription = {\n  margin: \"30px 0 0 0\",\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"flex-start\",\n  fontFamily: \"Montserrat, sans-serif\",\n  fontSize: \"14px\",\n  fontWeight: 700,\n  textTransform: \"uppercase\",\n  color: \"#60606e\",\n  cursor: \"pointer\"\n};\nvar arrowIcon = {\n  margin: \"0 0 0 9px\",\n  cursor: \"pointer\",\n  fontFamily: \"Ionicons\",\n  fontWeight: 400,\n  display: \"flex\"\n};\n/* Стили для мобильных устройств */\n\nvar main_conteinerMobile = {\n  margin: \"50px 10px 0 10px\",\n  overflow: \"hidden\"\n};\nvar main_conteiner__infoMobile = {\n  transition: \"transform .35s ease-in\",\n  top: 0,\n  position: \"relative\",\n  width: \"100%\",\n  minWidth: \"100%\",\n  maxHeight: \"none\",\n  height: \"auto\",\n  overflow: \"visible\"\n};\nvar main_conteiner__blogsMobile = {\n  width: \"100%\",\n  minWidth: \"100%\",\n  transition: \"transform .35s ease-in\"\n};\nvar main_conteiner__blogs___blogMobile = {\n  display: \"flex\",\n  flexDirection: \"column\",\n  alignItems: \"center\",\n  justifyContent: \"flex-start\"\n};\nvar blog_infoMobile = {\n  justifyContent: \"space-evenly\",\n  margin: \"15px 0 0 0\"\n};\nvar commentsMobile = {\n  display: \"flex\",\n  flexDirection: \"column\",\n  alignItems: \"center\",\n  width: \"90%\"\n};\nvar commentMobile = {\n  width: \"100%\"\n};\nvar comment_headMobile = {\n  flexWrap: \"wrap\",\n  justifyContent: \"space-evenly\"\n};\nvar titleMobile = {\n  textAlign: \"center\"\n};\nvar descriptionOfPostMobile = {\n  textAlign: \"center\"\n};\nvar switcherToBlogs = {\n  position: \"fixed\",\n  left: 0,\n  bottom: \"calc(50% - 25px)\",\n  width: \"50px\",\n  height: \"50px\",\n  backgroundColor: \"#7beec7\",\n  zIndex: 500\n};\nvar switcherToBlogsAndInfo_circle = {\n  position: \"relative\",\n  top: \"25%\",\n  left: \"25%\",\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"center\",\n  backgroundColor: \"#ffffff\",\n  borderRadius: \"50%\",\n  height: \"50%\",\n  width: \"50%\"\n};\nvar switcherToBlogsAndInfoIcon = {\n  display: \"flex\",\n  color: \"#7beec7\"\n};\nvar switcherToInfo = {\n  position: \"fixed\",\n  right: 0,\n  bottom: \"calc(50% - 25px)\",\n  width: \"50px\",\n  height: \"50px\",\n  backgroundColor: \"#7beec7\",\n  zIndex: 500\n};\nvar conteiner_info__postsMobile = {\n  alignItems: \"center\"\n};\nvar info_posts__titlesMobile = {\n  width: \"100%\",\n  justifyContent: \"space-around\"\n};\nvar info_posts__lineConteinerMobile = {\n  width: \"100%\",\n  minWidth: \"100%\"\n};\nvar column_postMobile = {\n  justifyContent: \"space-evenly\"\n};\nvar breakElemMobile = {\n  display: \"none\"\n};\n/* Стили для планшета */\n\nvar main_conteinerTablet = {\n  margin: \"70px 1% 0 1%\"\n};\nvar main_conteiner__blogsTablet = {\n  width: \"60%\"\n};\nvar main_conteiner__infoTablet = {\n  width: \"38%\"\n};\nvar info_posts__titlesTablet = {\n  width: \"100%\",\n  overflowX: \"scroll\"\n};\nvar info_posts__lineConteinerTablet = {\n  width: \"100%\"\n};\nvar searchIconMobileAndTablet = {\n  right: \"calc(10% - 19px)\"\n};\n/* Стили для средних экранов */\n\nvar main_conteinerNormal = {\n  margin: \"0px 2% 0px 2%\"\n};\nvar main_conteiner__blogsNormal = {\n  width: \"calc(96% - 263px)\"\n};\n\n//# sourceURL=webpack://web-app/./development/frontend/blog/style.ts?");

/***/ })

}]);