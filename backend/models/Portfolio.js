const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  riskScore: Number,
  nigerianStocks: String,
  foreignStocks: String,
  techStocks: String,
  emergingStocks: String,
  nigerianBonds: String,
  foreignBonds: String,
  commodities: String,
  realEstate: String,
  tBills: String,
  alternative: String,
});

const Advisor = mongoose.model("Advisor", portfolioSchema);

module.exports = { Advisor };
