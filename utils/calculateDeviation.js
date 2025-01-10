const { CryptoInstance } = require("../createDBConnection");

const calculateDeviation = async (req, res) => {
  const { coin } = req.query;
  if (!coin)
    return res.status(400).json({ error: "Coin query param is required" });

  try {
    const records = await CryptoInstance.find({ coin })
      .sort({ timestamp: -1 })
      .limit(100);
    if (records.length === 0)
      return res
        .status(404)
        .json({ error: "Not enough data for the specified coin" });

    const prices = records.map((record) => record.price);
    const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
    const variance =
      prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) /
      prices.length;
    const deviation = Math.sqrt(variance).toFixed(2);

    res.json({ deviation: parseFloat(deviation) });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  calculateDeviation,
};
