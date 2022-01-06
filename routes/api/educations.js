const express = require("express");
const router = express.Router();
const Education = require("../../models/Education");

// @route  GET api/educations/health
// @desc   Tests education route
// @access Public
router.get("/health", (req, res) =>
  res.json({ msg: "education api is working!!!" })
);

// @route  POST api/educations/addEducation
// @desc   post an education
// @access Public
router.post("/addEducation", async (req, res) => {
  const newEducation = new Education({
    degree: req.body.degree,
    institution: req.body.institution,
    place: req.body.place,
    cgpa: req.body.cgpa,
  });
  const education = await newEducation.save();
  return res.json(education);
});

// @route  GET api/educations/all
// @desc   get all educations
// @access Public
router.get("/all", async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
module.exports = router;
