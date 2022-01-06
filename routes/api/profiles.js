const express = require("express");
const router = express.Router();

const Profile = require("../../models/Profile");

// @route  GET api/profiles/health
// @desc   Tests profile route
// @access Public
router.get("/health", (req, res) =>
  res.json({ msg: "Profiles api is working!!!" })
);

// @route  POST api/profiles/addProfile
// @desc   post a profile
// @access Public
router.post("/addProfile", async (req, res) => {
  const newProfile = new Profile({
    github: req.body.github,
    linkedIn: req.body.linkedIn,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
  });
  const profile = await newProfile.save();
  return res.json(profile);
});

// @route  GET api/profiles/all
// @desc   get all profiles
// @access Public
router.get("/all", async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
module.exports = router;
