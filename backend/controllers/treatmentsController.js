//CONFIGURATION
const express = require("express");
const treatments = express.Router();
const { getAllTreatments } = require("../queries/treatments");

//INDEX ROUTE
treatments.get("/", async (req, res) => {
  const allTreatments = await getAllTreatments();
  if (allTreatments[0]) {
    res.status(200).json(allTreatments);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

module.exports = treatments;
