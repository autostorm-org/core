import React from "react";
import { render, waitFor, act } from "@testing-library/react";
import {
  MultiplierProvider,
  useBEP20Contract,
  SupportedNetworks,
  useAsyncValue,
  useWallet,
} from "../../src";
import { delay } from "../test-utils";
const DAI_ADDRESS_TESTNET = "0x20d3aa074ff340eee382d0ae91b3ef2e3166b88c";
const log = jest.fn(() => {});

const App = () => {
  const wallet = useWallet();
  const daiBEP20Contract = useBEP20Contract(DAI_ADDRESS_TESTNET);
  const assetName = useAsyncValue(() => {
    return daiBEP20Contract.contract?.name();
  }, [daiBEP20Contract.connected]);

  if (assetName.value == null) {
    return (
      <div>
        No asset name
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
  if (assetName.error) {
    return <div>{JSON.stringify(assetName.error)}</div>;
  }

  return <div data-testid="asset-name">Asset Name {assetName.value}</div>;
};

describe("useBEP20 Tests", () => {
  beforeAll(() => {
    // Setup ethers providers as Hardhat's jsonrpc provider
    const { waffle } = require("hardhat");
    const provider = waffle.provider;
    window.BinanceChain = provider;
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("Should successfully use a BEP20 contract", async (done) => {
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
      await waitFor(() => expect(log).toHaveBeenCalledTimes(1));
      // Wait for network requests to settle
      await delay(1000);
      // Check Asset name is expected. Third party BSC testnet DAI contract.
      let text = await wrapper.findByTestId("asset-name");
      expect(text?.textContent).toBe(`Asset Name DAI`);
      wrapper.unmount();
      done();
    });
  });
});
