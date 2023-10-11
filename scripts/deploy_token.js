const hre = require("hardhat");


async function main() {
  const Token = await hre.ethers.getContractFactory("Token");

  const USDCToken = await Token.deploy();
  await USDCToken.deployed();
  console.log("PENDLE Token deployed to:", USDCToken.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  // import { ethers } from "hardhat";

  // async function main() {
  //   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  //   const unlockTime = currentTimestampInSeconds + 60;

  //   const lockedAmount = ethers.utils.parseEther("0.001");

  //   const Lock = await ethers.getContractFactory("Lock");
  //   const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  //   await lock.deployed();

  //   console.log(
  //     `Lock with ${ethers.utils.formatEther(lockedAmount)}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  //   );
  // }

  // // We recommend this pattern to be able to use async/await everywhere
  // // and properly handle errors.
  // main().catch((error) => {
  //   console.error(error);
  //   process.exitCode = 1;
  // });