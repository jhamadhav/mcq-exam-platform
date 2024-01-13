const router = require("express").Router({ mergeParams: true });
let logger = require("./../../config/logger.config");

router.get("", (req, res) => {
   let exam_ID = req.params.exam_ID;
   logger.info("exam ID: ", exam_ID);

   // TODO
   // check if exam exists else move to 404 page
   // check if user is logged in
   // if if user has ended the exam

   res.sendFile("exam/dashboard.html", { root: "./public/pages" });
});

module.exports = router;
