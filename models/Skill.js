const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  skillCategory: {
    type: String,
    required: true,
  },
  skills: [
    {
      type: String,
    },
  ],
});

module.exports = Skill = mongoose.model("skill", SkillSchema);
