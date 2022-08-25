/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable quotes */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.get("/", (_req, res) => {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const day = today.toLocaleDateString("en-us", options);

  res.render("list", {
    kindOfDay: day,
    newListItems: items,
  });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("server is running");
});
