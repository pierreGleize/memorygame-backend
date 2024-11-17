const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema({
  name: String,
  score: Number,
});

const Score = mongoose.model("scores", scoreSchema);

module.exports = Score;
