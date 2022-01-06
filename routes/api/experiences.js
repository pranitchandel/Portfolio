const express = require("express");
const Experience = require("../../models/Experience");
const router = express.Router();

// @route  GET api/experiences/health
// @desc   Tests experience route
// @access Public
router.get("/health", (req, res) =>
  res.json({ msg: "Experience api is working!!!" })
);

// @route  POST api/projects/addExperience
// @desc   post an experience
// @access Public
router.post("/addExperience", async (req, res) => {
  const newExperience = new Experience({
    designation: req.body.designation,
    company: req.body.company,
    place: req.body.place,
    from: req.body.from,
    to: req.body.to,
  });
  const experience = await newExperience.save();
  return res.json(experience);
});

// @route  GET api/experiences/all
// @desc   get all experiences
// @access Public
router.get("/all", async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
module.exports = router;
