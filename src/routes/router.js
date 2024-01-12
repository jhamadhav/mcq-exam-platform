const express = require("express");
const router = require("express").Router();

router.get("/", (req, res) => {
   res.sendFile("index.html", { root: "./public" });
});

router.get("*", (req, res) => {
   res.sendFile("404/404.html", { root: "./public/pages" });
});

router.use("/hello", require("./hello.route"));

module.exports = router;
