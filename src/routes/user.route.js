const router = require("express").Router({ mergeParams: true });
let logger = require("./../../config/logger.config");

/**
 * @api {get} /user Fetch user info
 * @apiGroup User
 * @apiName userDetails
 *
 * @apiSuccess {object} user details
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "details": {
 *          name:"Madhav Jha",
 *          user_ID:"abc123",
 *
 *          exam_start_time: Timestamp, // time in millisecond
 *       },
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "msg": "User not signed in"
 *     }
 */
router.get("/user", (req, res) => {
   // TODO
   // 1. add middleware to check if user is logged in and if exam is valid
   // 2. fetch user details from DB
   // 3. fetch user_exam_attempt
   // 4. filter necessary details and return

   res.json({ details: "exam details" });
});

module.exports = router;
