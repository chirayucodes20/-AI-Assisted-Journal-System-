const Journal = require("../models/Journal");

exports.createJournal = async (req, res) => {
  try {
    const entry = new Journal(req.body);
    const saved = await entry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEntries = async (req, res) => {
  try {
    const entries = await Journal.find({ userId: req.params.userId });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.analyzeJournal = async (req, res) => {
  try {
    const { text } = req.body;

    let emotion = "neutral";

    if (text.toLowerCase().includes("calm")) emotion = "calm";
    if (text.toLowerCase().includes("happy")) emotion = "happy";
    if (text.toLowerCase().includes("sad")) emotion = "sad";

    const keywords = text.split(" ").slice(0, 3);

    res.json({
      emotion,
      keywords,
      summary: `User feels ${emotion}`
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};