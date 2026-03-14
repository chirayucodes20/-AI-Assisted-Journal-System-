const express = require("express");
const router = express.Router();

const journalController = require("../controllers/journalController");

router.post("/", journalController.createJournal);

router.get("/:userId", journalController.getEntries);

router.post("/analyze", journalController.analyzeJournal);

module.exports = router;