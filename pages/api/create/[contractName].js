import hre from "hardhat";

export default async function (req, res) {
  const { contractName, args } = req.query;

  const ContractFactory = await hre.ethers.getContractFactory(contractName);
  const argList = args.split(";").slice(0, -1);
  if (!argList[0]) argList.pop();
  const contract = await ContractFactory.deploy(...argList);

  const response = `Contract "${contractName}" deployed to address: ${contract.address}`;
  res.status(200).json({ response });
  console.log(response);
}
