const { Advisor } = require("../models/Portfolio");

const getPortfolio = async (req, res) => {
  const portfolioId = req.params.id;
  console.log(portfolioId);
  try {
    Advisor.findOne({ id: portfolioId }).then((portfolio) => {
      console.log(portfolioId);
      console.log(portfolio);
    });
    // if (!portfolio) {
    //   return res.status(404).json({ message: "Portfolio not found" });
    // }
    // res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getPortfolio };
