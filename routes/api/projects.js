const express = require("express");
const router = express.Router();

const Project = require("../../models/Project");

// @route  GET api/projects/health
// @desc   Tests project route
// @access Public
router.get("/health", (req, res) =>
  res.json({ msg: "Project api is working!!!" })
);

// @route  POST api/projects/addProject
// @desc   post a project
// @access Public
router.post("/addProject", async (req, res) => {
  const newProject = new Project({
    projectHeading: req.body.projectHeading,
    from: req.body.from,
    to: req.body.to,
    description: req.body.description,
    techUsed: req.body.techUsed,
  });
  const project = await newProject.save();
  return res.json(project);
});

// @route  GET api/projects/all
// @desc   get all projects
// @access Public
router.get("/all", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
module.exports = router;
