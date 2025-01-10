const axios = require('axios');
const { CryptoInstance } = require("../createDBConnection");

// Fetch and store cryptocurrency data
const fetchCoinsData = async () => {
  try {
    const coins = ["bitcoin", "matic-network", "ethereum"];
    const responses = await Promise.all(
      coins.map((coin) =>
        axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
        )
      )
    );

    const data = responses.map((response, index) => {
      const coin = coins[index];
      const {
        usd: price,
        usd_market_cap: marketCap,
        usd_24h_change: change24h,
      } = response.data[coin];
      return { coin, price, marketCap, change24h };
    });

    await CryptoInstance.insertMany(data);
    console.log("Data saved successfully");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

module.exports = {
    fetchCoinsData,  
};