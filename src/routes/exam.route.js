const router = require("express").Router({ mergeParams: true });
let logger = require("./../../config/logger.config");

router.get("", (req, res) => {
   let exam_ID = req.params.exam_ID;
   logger.info("exam ID: ", exam_ID);

   // TODO
   // check if exam exists else move to 404 page

   res.sendFile("exam/landing_page.html", { root: "./public/pages" });
});

router.use("/login", require("./exam.login.route"));

module.exports = router;
