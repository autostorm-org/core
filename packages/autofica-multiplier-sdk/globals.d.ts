// This allows to extend the global window object type
import { ethers } from "ethers";

export {};

declare global {
  interface Window {
    BinanceChain?: ethers.providers.Provider;
  }
}
