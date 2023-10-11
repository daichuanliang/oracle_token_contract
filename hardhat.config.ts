import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config()
// require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks:{
    mumbai:{
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    agor:{
      url: 'https://arbitrum-goerli.public.blastapi.io',
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};

export default config;
