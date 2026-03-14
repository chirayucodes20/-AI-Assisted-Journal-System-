const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    ambience: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    emotion: String,
    keywords: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Journal", journalSchema);