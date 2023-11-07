const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const portfolioRoute = require("./routes/portfolios");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("API, UP & RUNNIN");
});

// MongoDB Connection
mongoose.set("strictQuery", false);

const connetDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use("/api/portfolio", portfolioRoute);

app.listen(PORT, () => {
  connetDB();
  console.log(`Server running on... ${PORT}`);
});
