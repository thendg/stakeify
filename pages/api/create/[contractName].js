import hre from "hardhat";
import HelloWorldArgs from "../../../contracts/HelloWorld/args";

export default async function (req, res) {
  const { contractName } = req.query;

  let args;
  switch (contractName) {
    case "HelloWorld":
      args = HelloWorldArgs;
      break;
  }

  const ContractFactory = await hre.ethers.getContractFactory(contractName);
  const contract = await ContractFactory.deploy(...args);

  const response = `Contract "${contractName}" deployed to address: ${contract.address}`;
  res.status(200).json({ response });
  console.log(response);
}
