const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define schema and model
const cryptoSchema = new Schema({
  coin: { type: String, required: true },
  price: { type: Number, required: true },
  marketCap: { type: Number, required: true },
  change24h: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = {
    cryptoSchema,
};