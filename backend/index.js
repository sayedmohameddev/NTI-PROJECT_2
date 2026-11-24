
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 4000;

mongoose
  .connect("mongodb://localhost:27017/portfolio")
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log("Database Error:", error));

const home = require("./seeds/user/home");
const about = require("./seeds/user/about");
const skills = require("./seeds/user/skills");
const projects = require("./seeds/user/projects");
const contacts = require("./seeds/user/contact");

app.use(cors());
app.use(express.json());

// Static Files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/portfolio", home);
app.use("/about", about);
app.use("/skills", skills);
app.use("/projects", projects);
app.use("/contacts", contacts);

app.listen(PORT, () => {
  console.log(`Server started at Port: ${PORT}`);
});
