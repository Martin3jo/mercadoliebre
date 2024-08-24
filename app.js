const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});
app.get("/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

app.listen(port, () => {
  console.log(`
    Nuestra app funciona en
    http://localhost:${port}`);
});

const carpetaPublic = path.resolve(__dirname, "./public");
app.use(express.static(carpetaPublic));
