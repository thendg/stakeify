import hre from "hardhat";

export default async function (req, res) {
  const { contractName, args } = req.query;

  const ContractFactory = await hre.ethers.getContractFactory(contractName);
  const contract = await ContractFactory.deploy(...args.split(";"));

  const response = `Contract "${contractName}" deployed to address: ${contract.address}`;
  res.status(200).json({ response });
  console.log(response);
}
