const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  projectHeading: {
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
  description: {
    type: String,
    required: true,
  },
  techUsed: {
    type: String,
    required: true,
  },
});

module.exports = Project = mongoose.model("project", ProjectSchema);
