import React from "react";
import { render, waitFor, act } from "@testing-library/react";
import {
  MultiplierProvider,
  useLendingPoolAddressProvider,
  SupportedNetworks,
  useAsyncValue,
  useWallet,
} from "../../src";
import { delay } from "../test-utils";
const log = jest.fn(() => {});

const App = () => {
  const wallet = useWallet();
  const lendingPoolAddressProviderContract = useLendingPoolAddressProvider();
  const lendingPoolAddress = useAsyncValue(() => {
    return lendingPoolAddressProviderContract.contract?.getLendingPool();
  }, [
    lendingPoolAddressProviderContract.account,
    lendingPoolAddressProviderContract.connected,
    lendingPoolAddressProviderContract.contract != null,
  ]);

  if (lendingPoolAddress.value == null) {
    return (
      <div>
        Not Connected
        <button
          data-testid="connect-button"
          onClick={() => {
            wallet.connect("bsc").then(log).catch(log);
          }}
        >
          connect
        </button>
      </div>
    );
  }
  if (lendingPoolAddress.error) {
    return <div>{JSON.stringify(lendingPoolAddress.error)}</div>;
  }

  return <div data-testid="contract-address">{lendingPoolAddress.value}</div>;
};

const knownTestNetAddresses = ["0xf03ffd30a47a9A253a1e5AAbdD1ce5d1E1f4f177"];
describe("useLendingPoolAddressProvider Tests", () => {
  beforeAll(() => {
    // Setup ethers providers as Hardhat's jsonrpc provider
    const { waffle } = require("hardhat");
    const provider = waffle.provider;
    window.BinanceChain = provider;
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("Should successfully fetch known testnet addresses", async (done) => {
    await act(async () => {
      // Render sample app
      const wrapper = await render(
        <MultiplierProvider chainId={SupportedNetworks.TESTNET}>
          <App />
        </MultiplierProvider>
      );
      // Find Connect to wallet button and authorize.
      let button = await wrapper.findByTestId("connect-button");
      button?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      // Wait for network requests to settle
      await delay(1000);
      await waitFor(() => expect(log).toHaveBeenCalled());
      // Assert that testnet address is known.
      let text = await wrapper.findByTestId("contract-address");
      const textContent = String(text?.textContent);
      expect(knownTestNetAddresses).toContain(textContent);
      wrapper.unmount();
      done();
    });
  });
});
