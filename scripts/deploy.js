const fs = require("fs/promises");
const hre = require("hardhat");
const path = require("path");

async function getDirectories(source) {
  return (await fs.readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

export default async function main() {
  const contractNames = await getDirectories("contracts");
  for (const contractName of contractNames) {
    const ContractFactory = await hre.ethers.getContractFactory(contractName);
    const argsPath = path.join("../", "contracts", contractName, "args.js");

    const args = require(argsPath);
    const contract = await ContractFactory.deploy(...args);

    console.log(
      `Contract "${contractName}" deployed to address:`,
      contract.address
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
