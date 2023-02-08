//CONFIGURATION
const db = require("../db/dbConfig.js");

//GET ALL Function
const getAllTreatments = async () => {
  try {
    const allTreatments = await db.any("SELECT * FROM treatments");
    return allTreatments;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  getAllTreatments,
};
