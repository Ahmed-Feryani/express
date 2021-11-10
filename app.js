const path = require("path");
const express = require("express");

const routes = require("./routes/routes");
const app = express();
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hours = date.getHours();
  if (hours >= 17 && hours <= 9 && (day == 0 || day == 6)) {
    return res.render("notWorking");
  }
  next();
});

app.use(routes);

app.listen(3000);
