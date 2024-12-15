const CryptoMedsSupplyChain = artifacts.require("CryptoMedsSupplyChain");

module.exports = function (deployer) {
  deployer.deploy(CryptoMedsSupplyChain);
};
