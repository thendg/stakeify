const fsp = require("fs/promises");
const hre = require("hardhat");

async function getDirectories(source) {
  return (await fsp.readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

async function main() {
  const contractNames = await getDirectories("contracts");
  for (const contractName of contractNames) {
    const ContractFactory = await hre.ethers.getContractFactory(contractName);
    const path = `../contracts/${contractName}/args.js`;

    const args = require(path);
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
