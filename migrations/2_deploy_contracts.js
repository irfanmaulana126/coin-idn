var IMTKToken = artifacts.require("./IMTKToken.sol");
var IMTKTokenSale = artifacts.require("./IMTKTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(IMTKToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(IMTKTokenSale, IMTKToken.address, tokenPrice);
  });
};
