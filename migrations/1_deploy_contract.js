const CoinToken = artifacts.require("CoinToken");

module.exports = function (deployer) {
  deployer.deploy(CoinToken);
};
