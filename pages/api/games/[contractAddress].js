import dotenv from "dotenv";
dotenv.config();
import hre from "hardhat";
import HelloWorld from "../../../contracts/HelloWorld/abi.json";
import Prize from "../../../contracts/Prize/abi.json";

const { ALCHEMY_API_KEY, ALCHEMY_RPC_URL } = process.env;

const queryContract = async (contract, call, ...args) =>
  await contract[call](...args);

export default async function (req, res) {
  const { contractAddress, type, call, args = [] } = req.query;

  let contractInterface;
  switch (type) {
    case "helloworld":
      contractInterface = HelloWorld;
      break;
    case "prize":
      contractInterface = Prize;
      break;
  }

  const alchemyProvider = new hre.ethers.getDefaultProvider(
    {
      name: "maticmum",
      chainId: 80001,
      _defaultProvider: (providers) =>
        new providers.JsonRpcProvider(ALCHEMY_RPC_URL),
    },
    { alchemy: ALCHEMY_API_KEY }
  );
  const signer = new hre.ethers.Wallet.createRandom().connect(alchemyProvider);

  const contract = new hre.ethers.Contract(
    contractAddress,
    contractInterface,
    signer
  );
  console.log(call);
  const contractResponse = await queryContract(contract, call, ...args);

  res.status(200).json({ contractResponse });
}
