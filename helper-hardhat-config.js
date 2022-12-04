const networkConfig = {
  5: {
    name: "goerli",
    ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
  },
  137: {
    name: "mumbai",
    ethUsdPriceFeed: "0x70d1F773A9f81C852087B77F6Ae6d3032B02D2AB",
  },
};

const developmentChain = ["hardhat", "localhost"];
const DECIMALS = 8;
const INITIAL_ANSWER = 200000000000;

module.exports = {
  networkConfig,
  developmentChain,
  DECIMALS,
  INITIAL_ANSWER,
};
