require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "testnet",
  networks: {
    hardhat: {},
    testnet: {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545",
      chainId: 97,
      accounts: [String(process.env.AUTOFICA_BSC_TEST_ACCOUNT_PRIVATE_KEY)],
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org",
      chainId: 56,
      accounts: [String(process.env.AUTOFICA_BSC_TEST_ACCOUNT_PRIVATE_KEY)],
    },
  },
};
