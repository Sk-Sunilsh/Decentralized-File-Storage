require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/2e2c861981fc4783b03dae827b0bf145",
      accounts: ["0x204e02e612f9fd968bfcea22460e135320d53e50813548134ddd8270b6fe90d5"],
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
