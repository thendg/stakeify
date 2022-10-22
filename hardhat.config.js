/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { ALCHEMY_RPC_URL, ETH_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: ALCHEMY_RPC_URL,
      accounts: [`0x${ETH_PRIVATE_KEY}`], // TODO: at the moment, the app has an account, is this good?
    },
  },
};
