// I require the express module
const express = require("express");
const app = express();
const port = 3000;

// I require the routes handler
const router = require("./router.js");

// I set the views engine and folder
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// I set the static files folder
app.use(express.static("static"));

app.use(router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
