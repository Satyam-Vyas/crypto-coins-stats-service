# Crypto Stats Service

This is a Node.js-based application that fetches cryptocurrency data from the CoinGecko API and provides two REST endpoints to access the latest statistics and calculate the standard deviation of historical price data.

---

## Features

1. **Background Job**: Fetches the current price, market cap, and 24-hour change of three cryptocurrencies (Bitcoin, Matic, Ethereum) every 2 hours and stores the data in MongoDB.
2. **Endpoints**:
   - `/stats`: Provides the latest stats of the requested cryptocurrency.
   - `/deviation`: Calculates and returns the standard deviation of the last 100 price records for the requested cryptocurrency.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/)
- [Render](https://render.com/) or a similar hosting platform (if deploying).

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project with the following variables:

```env
PORT=3000
CONNECTION_STRING=<Your MongoDB connection string>
```

### 4. Start the Application

```bash
node index.js
```

---

## API Endpoints

### 1. **Get Latest Cryptocurrency Stats**

#### Endpoint:
`GET /stats`

#### Query Parameters:
- `coin`: (string) The cryptocurrency ID (e.g., `bitcoin`, `matic-network`, `ethereum`).

#### Example Request:
```bash
GET /stats?coin=bitcoin
```

#### Example Response:
```json
{
  "price": 40000,
  "marketCap": 800000000,
  "24hChange": 3.4
}
```

### 2. **Get Price Standard Deviation**

#### Endpoint:
`GET /deviation`

#### Query Parameters:
- `coin`: (string) The cryptocurrency ID (e.g., `bitcoin`, `matic-network`, `ethereum`).

#### Example Request:
```bash
GET /deviation?coin=bitcoin
```

#### Example Response:
```json
{
  "deviation": 4082.48
}
```

---
