const router = require("express").Router({ mergeParams: true });
let logger = require("./../../config/logger.config");

router.get("", (req, res) => {
   let exam_ID = req.params.exam_ID;
   logger.info("exam ID: ", exam_ID);

   // TODO
   // check if exam exists else move to 404 page

   res.sendFile("exam/landing_page.html", { root: "./public/pages" });
});

/**
 * @api {get} /exam/:exam_ID/details Fetch Exam info
 * @apiGroup Exam
 * @apiName examDetails
 *
 * @apiSuccess {object} exam details
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "details": {
 *          name:"Exam 1",
 *          description:"Exam details",
 *
 *          sections: ["Science", "Math"],
 *          languages: ["English", "Hindi"],
 *
 *          start_time: Timestamp, // time in millisecond
 *          end_time: Timestamp, // time in millisecond
 *          duration: 90, // time in minutes
 *       },
 *     }
 *
 * @apiError examNotFound The id of the Exam was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "msg": "Invalid Exam ID"
 *     }
 */
router.get("/details", (req, res) => {
   // TODO
   // 1. add middleware to check if exam exists
   // 2. fetch exam details from DB
   // 3. filter necessary details and return

   res.json({ details: "exam details" });
});

/**
 * @api {get} /exam/:exam_ID/questions Fetch Exam questions list
 * @apiGroup Exam
 * @apiName fetchQuestions
 *
 * @apiSuccess {object} List of questions
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "questions": [
 *          {
 *          question_ID: "dfgytrfv",
 *          Section: "Science",
 *          description: {
 *          "english": "What is the color of the Sky ?",
 *          "हिन्दी ": "आकाश का रंग क्या है ?",
 *          },
 *          options: {
 *          1:{
 *             "english":"red",
 *             "हिन्दी":"लाल",
 *            },
 *          2:{
 *             "english":"Blue",
 *             "हिन्दी":"नीला",
 *            },
 *          3:{
 *             "english":"Black ",
 *             "हिन्दी":"काला",
 *            },
 *          4:{
 *             "english":"white",
 *             "हिन्दी":"सफेद",
 *            },
 *          },
 *       }],
 *     }
 *
 * @apiError examNotFound The id of the Exam was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "msg": "Invalid Exam ID"
 *     }
 */
router.get("/questions", (req, res) => {
   // TODO
   // 1. add middleware to check if exam exists
   // 2. fetch all questions assigned to exam_ID
   // 3. filter necessary details and return

   res.json({ details: "exam details" });
});

/**
 * @api {post} /exam/:exam_ID/save save exam answers
 * @apiGroup Exam
 * @apiName saveAnswers
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "question_ID": option // Number
 *     }
 *
 * @apiSuccess {String} msg Success or Failure to save results
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       msg: "Answers saved successfully."
 *     }
 *
 * @apiError examNotFound The id of the Exam was not found.
 * @apiError userNotLoggedIn User is not logged in
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "msg": "Invalid Exam ID"
 *     }
 *
 *     HTTP/1.1 403 Not Found
 *     {
 *       "msg": "User Not logged in"
 *     }
 */
router.post("/save", (req, res) => {
   // TODO
   // 1. add middleware to check if exam exists add user is logged in
   // 2. validate input
   // 3. store result to exam_attempt table

   res.json({ msg: "answers saved" });
});

/**
 * @api {post} /exam/:exam_ID/submit submit and end exam
 * @apiGroup Exam
 * @apiName submitExam
 *
 *
 * @apiSuccess {String} msg Success or Failure to submit exam
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       msg: "Exam submitted successfully."
 *     }
 *
 * @apiError examNotFound The id of the Exam was not found.
 * @apiError userNotLoggedIn User is not logged in
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "msg": "Invalid Exam ID"
 *     }
 *
 *     HTTP/1.1 403 Not Found
 *     {
 *       "msg": "User Not logged in"
 *     }
 */
router.post("/submit", (req, res) => {
   // TODO
   // 1. add middleware to check if exam exists add user is logged in
   // 2. store finish_time and exam_ended to exam_attempt table for user

   res.json({ msg: "answers saved" });
});

router.use("/login", require("./exam.login.route"));
router.use("/dashboard", require("./exam.dashboard.route"));

module.exports = router;
