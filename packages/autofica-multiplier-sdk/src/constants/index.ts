enum WalletConnectionStates {
  NOT_CONNECTED,
  METAMASK_WALLET,
  BSC_WALLET,
  NO_WALLET_DETECTED,
}

enum SupportedNetworks {
  MAINNET = 56,
  TESTNET = 97,
}

const ChainData = {
  [SupportedNetworks.MAINNET]: {
    name: "BSC Mainnet",
  },

  [SupportedNetworks.TESTNET]: {
    name: "BSC Testnet",
  },
};

const Contracts = {
  [SupportedNetworks.MAINNET]: {
    lendingPoolAddressProvider: "0xCc0479a98cC66E85806D0Cd7970d6e07f77Fd633",
  },

  [SupportedNetworks.TESTNET]: {
    lendingPoolAddressProvider: "0x78547CBf195Dc3D92C5847acD9E89aFB35430c0f",
  },
};

export { WalletConnectionStates, SupportedNetworks, Contracts, ChainData };
