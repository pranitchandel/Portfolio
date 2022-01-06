const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
  degree: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  cgpa: {
    type: String,
    required: true,
  },
});

module.exports = Education = mongoose.model("education", EducationSchema);
