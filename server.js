const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const projects = require("./routes/api/projects");
const experiences = require("./routes/api/experiences");
const educations = require("./routes/api/educations");
const profiles = require("./routes/api/profiles");
const skills = require("./routes/api/skills");

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//connect to db
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello!!"));

//use routes
app.use("/api/projects", projects);
app.use("/api/profiles", profiles);
app.use("/api/skills", skills);
app.use("/api/educations", educations);
app.use("/api/experiences", experiences);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
