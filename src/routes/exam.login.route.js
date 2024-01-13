const router = require("express").Router({ mergeParams: true });
const dotenv = require("dotenv").config();

const joi_schema = require("./../services/schema.service");
const crud_db = require("./../services/db/crud.service");
let logger = require("./../../config/logger.config");
const { log } = require("winston");

router.get("/login", (req, res) => {
   res.sendFile("exam/login.html", { root: "./public/pages" });
});

/**
 * @api {post} /exam/:exam_ID/login Exam login
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

router.post("", async (req, res) => {
   // TODO
   // validate input
   let inp_data = {
      user_ID: req.body.user_ID,
      password: req.body.password,
   };

   try {
      await joi_schema.exam_user_login_scheme.validateAsync(inp_data);
   } catch (error) {
      let error_msg = error["details"][0]["message"];
      logger.warn("error_msg", { error_msg });

      res.status(403);
      res.json({ msg: "validation error", error_msg });
      return;
   }

   // // check against DB if user exists
   let user_db = await crud_db.readRecord(
      process.env.USER_TABLE_NAME,
      "user_ID",
      inp_data["user_ID"]
   );

   if (user_db == null) {
      res.status(404);
      res.json({ msg: "User Not Found" });
      return;
   }
   // create session
   // send cookie

   res.json({ msg: "User logged in" });
});

module.exports = router;
