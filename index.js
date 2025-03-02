const express = require('express');
const path = require("node:path");
let dotenv = require('dotenv').config()
const homeRoute = require('./routes/index')
const newRoute = require('./routes/newRoute')

const app = express();

app.use(express.urlencoded({ extended: true }));


// template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', homeRoute)
app.use('/new', newRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));