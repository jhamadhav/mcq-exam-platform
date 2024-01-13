const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const cors = require("cors");

// parser
app.use(require("./src/routes/router"));
app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

// listen for requests :)
// port infos
const port = process.env.PORT || 8000;
app.listen(port, () =>
   console.log(`Example app listening at http://localhost:${port}`)
);
