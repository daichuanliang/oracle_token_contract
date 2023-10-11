const { ethers } = require('hardhat');

async function main() {
  const MockV3Aggregator = await ethers.getContractFactory('MockV3Aggregator');
  const oracle = await MockV3Aggregator.deploy(8,100000000000n); // 初始化价格为 1000 STETH/USD
  console.log('MockV3Aggregator deployed to:', oracle.address);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});