import { ethers } from "ethers";
import web3 from "web3";
const BSC_TESTNET_ENDPOINTS = [
  "https://data-seed-prebsc-1-s1.binance.org:8545/",
  "https://data-seed-prebsc-2-s1.binance.org:8545/",
  "https://data-seed-prebsc-1-s2.binance.org:8545/",
  "https://data-seed-prebsc-2-s2.binance.org:8545/",
  "https://data-seed-prebsc-1-s3.binance.org:8545/",
  "https://data-seed-prebsc-2-s3.binance.org:8545/",
];

const getTestNetURL = (): string => {
  return BSC_TESTNET_ENDPOINTS[
    Math.floor(Math.random() * BSC_TESTNET_ENDPOINTS.length)
  ];
};

const delay = (ms: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
};
const successLog = jest.fn(console.log);
const errorLog = jest.fn(console.error);

const testGasLimit = ethers.BigNumber.from(
  web3.utils.toWei("1000000", "wei").toString()
);

class NonceOffsetManager {
  private offset = 0;
  private hasBeenSet = false;

  increase = () => {
    this.offset += 1;
  };
  getNonceOffset = () => {
    return this.offset;
  };
  setNonceOffset = (nonce: number) => {
    if (this.hasBeenSet == false) {
      this.offset = nonce;
      this.hasBeenSet = true;
    }
  };

  hasNonceBeenSet = () => {
    return this.hasBeenSet;
  };
}

const nonceOffsetManager = new NonceOffsetManager();

export {
  getTestNetURL,
  BSC_TESTNET_ENDPOINTS,
  successLog,
  errorLog,
  delay,
  testGasLimit,
  nonceOffsetManager,
};
