// Import the ABIs,
import { LendingPoolAddressesProvider__factory } from "@autofica/abi";
import { utils, ethers } from "ethers";

// Retrieve // Retrieve the LendingPool address
const lpAddressProviderAddress = "0xCc0479a98cC66E85806D0Cd7970d6e07f77Fd633"; // mainnet address

const BSC_RPC = "https://bsc-dataseed1.defibit.io";
const provider = new ethers.providers.JsonRpcProvider(BSC_RPC);

const lendingPoolAddressProviderContract = LendingPoolAddressesProvider__factory.connect(
  lpAddressProviderAddress,
  provider
);

// Get the latest LendingPool contract address
(async () => {
  try {
    const address = await lendingPoolAddressProviderContract.getLendingPool();
    console.log(address);
  } catch (e) {
    console.error(e);
  }
})();
