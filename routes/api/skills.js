const express = require("express");
const router = express.Router();

const Skill = require("../../models/Skill");
// @route  GET api/skills/health
// @desc   Tests skill route
// @access Public
router.get("/health", (req, res) =>
  res.json({ msg: "Skills api is working!!!" })
);

// @route  POST api/skills/addSkill
// @desc   post a skill
// @access Public
router.post("/addSkill", async (req, res) => {
  const skills = req.body.skills;
  const newSkill = new Skill({
    skillCategory: req.body.skillCategory,
    skills: Array.isArray(skills)
      ? skills
      : skills.split(",").map((skill) => " " + skill.trim()),
  });
  const skill = await newSkill.save();
  return res.json(skill);
});

// @route  GET api/skills/all
// @desc   get all skills
// @access Public
router.get("/all", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
module.exports = router;
