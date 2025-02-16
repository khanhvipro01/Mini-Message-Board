const express = require("express");
const path = require("node:path");
const app = express();
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// app.use(express.urlencoded({ extended: true }));

const newRoute = require('./routes/new')
const indexRouter = require('./routes/index')
app.use("/new", newRoute)
app.use("/", indexRouter)



// Template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

