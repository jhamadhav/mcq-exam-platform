const router = require("express").Router({ mergeParams: true });
let logger = require("./../../config/logger.config");

router.get("/login", (req, res) => {
   res.sendFile("exam/login.html", { root: "./public/pages" });
});

/**
 * @api {post} /exam/:exam_ID/login login
 * @apiGroup User
 * @apiName loginExamUser
 *
 * @apiParam {String} user_ID Users unique ID.
 * @apiParam {String} user_password Users password.
 *
 * @apiSuccess {String} msg success or failure based on authentication
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "msg": "Exam user successfully logged in",
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 * @apiError incorrectPassword The password entered is incorrect
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "msg": "User Not Found"
 *     }
 *
 *     HTTP/1.1 401 Not Found
 *     {
 *       "msg": "Incorrect user password"
 *     }
 *
 *     HTTP/1.1 403 Not Found
 *     {
 *       "msg": "validation error"
 *     }
 */

router.post("/login", (req, res) => {
   // TODO
   //
});

module.exports = router;
