import { HardhatUserConfig } from "hardhat/config";
require("dotenv/config");
require("@nomicfoundation/hardhat-toolbox");

if (!process.env.ACCOUNT_PRIVATE_KEY) {
  throw new Error("ACCOUNT_PRIVATE_KEY is not set in .env file");
}

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    "sepolia-testnet": {
      // Make sure this name matches the one used in your deploy command
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY].filter(Boolean),
    },
  },
};

export default config;
