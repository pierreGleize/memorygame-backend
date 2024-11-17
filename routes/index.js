var express = require("express");
var router = express.Router();

const Score = require("../models/score");

/* GET home page. */
router.get("/", (req, res) => {
  Score.find().then((data) => {
    const dataSorted = data.sort((a, b) => a.score - b.score);
    const bestScore = dataSorted.slice(0, 10 || dataSorted.length);
    res.json({ score: bestScore });
  });
});

router.post("/", async (req, res) => {
  const newScore = new Score({
    name: req.body.name,
    score: req.body.score,
  });
  newScore.save().then(() => {
    Score.find().then((data) => {
      res.json({ score: data });
    });
  });
});

module.exports = router;
