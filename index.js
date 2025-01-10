// Required modules
const express = require("express");
const schedule = require("node-schedule");
const { getCoinStats } = require("./helper/getCoinStats");
const { fetchCoinsData } = require("./helper/fetchCoinsData");
const { calculateDeviation } = require("./utils/calculateDeviation");
const { createDBConnection } = require("./createDBConnection");

// Express setup
const app = express();
const PORT = 3000;

// Instantiate DB connection
createDBConnection();

// Schedule the fetchCryptoData job to run every 2 hours
schedule.scheduleJob("0 */2 * * *", fetchCoinsData);

// API to get the latest stats for a cryptocurrency
app.get("/stats", getCoinStats);

// API to calculate standard deviation of the last 100 records for a cryptocurrency
app.get("/deviation", calculateDeviation);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
