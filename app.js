const path = require("node:path");
const express = require("express");
const app = express();

const indexRoute = require("./routes/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoute);

app.listen(8080);
