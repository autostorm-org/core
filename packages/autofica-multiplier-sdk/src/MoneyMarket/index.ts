// Import the ABIs,
import LendingPoolAddressesProviderABI from "./LendingPoolAddressesProvider.json";
import LendingPoolABI from "./LendingPool.json";

// Retrieve the LendingPool address
const lpAddressProviderAddress = 0xcc0479a98cc66e85806d0cd7970d6e07f77fd633; // mainnet address
const lpAddressProviderContract = new web3.eth.Contract(
  LendingPoolAddressesProviderABI,
  lpAddressProviderAddress
);

// Get the latest LendingPool contract address
const lpAddress = await lpAddressProviderContract.methods
  .getLendingPool()
  .call()
  .catch((e) => {
    throw Error(`Error getting lendingPool address: ${e.message}`);
  });
