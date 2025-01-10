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


