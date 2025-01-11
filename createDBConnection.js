const mongoose = require("mongoose");
const { cryptoSchema } = require("./schema/schema");
require('dotenv').config();

const CONNECTION_STRING = process.env.CONNECTION_STRING;

function createDBConnection() {

  if(!CONNECTION_STRING) {
    console.error("MongoDB Connection string is not defined.");
    return;
  }

  mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connectionObj = mongoose.connection;

  connectionObj.on("error", console.error.bind(console, "connection error:"));

  connectionObj.once("open", () => {
    console.log("Connected to MongoDB");
  });
}

const CryptoInstance = mongoose.model("Crypto", cryptoSchema);

module.exports = {
  CryptoInstance,
  createDBConnection,
};