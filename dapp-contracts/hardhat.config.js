require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com/v1/${process.env.MATICVIGIL_APP_ID}`,
      accounts: [process.env.MATIC_ACCOUNT_DEPLOYER_PRIV_KEY],
    },
    matic: {
      url: `https://rpc-mainnet.maticvigil.com/v1/${process.env.MATICVIGIL_APP_ID}`,
      accounts: [process.env.MATIC_ACCOUNT_DEPLOYER_PRIV_KEY],
    },
  },
};
