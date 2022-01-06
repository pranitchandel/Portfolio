const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  github: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
  email: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
