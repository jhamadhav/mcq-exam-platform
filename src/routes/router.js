const router = require("express").Router();

router.get("/", (req, res) => {
   res.sendFile("index.html", { root: "./public" });
});

// test route
router.use("/hello", require("./hello.route"));

// exam route
router.get("/exam", (req, res) => {
   res.redirect("/");
});

router.use("/exam/:exam_ID", require("./exam.route"));

router.use("/user", require("./user.route"));

router.get("*", (req, res) => {
   res.sendFile("404/404.html", { root: "./public/pages" });
});

module.exports = router;
