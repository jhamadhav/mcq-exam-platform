const router = require("express").Router();
let logger = require("./../../config/logger.config");

router.post("", (req, res) => {
   logger.info("System says:", { msg: "hello" });
   res.json({ msg: "hello world" });
});

module.exports = router;
