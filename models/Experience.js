const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  designation: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
    required: true,
  },
});

module.exports = Experience = mongoose.model("experience", ExperienceSchema);
