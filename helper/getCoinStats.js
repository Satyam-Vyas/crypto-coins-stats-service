const { CryptoInstance } = require("../createDBConnection");

const getCoinStats = async (req, res) => {
  const { coin } = req.query;
  if (!coin)
    return res.status(400).json({ error: "Coin query param is required" });

  try {
    const latestData = await CryptoInstance.findOne({ coin }).sort({
      timestamp: -1,
    });
    if (!latestData)
      return res
        .status(404)
        .json({ error: "Data not found for the specified coin" });

    const { price, marketCap, change24h } = latestData;
    res.json({ price, marketCap, "24hChange": change24h });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getCoinStats,
};
