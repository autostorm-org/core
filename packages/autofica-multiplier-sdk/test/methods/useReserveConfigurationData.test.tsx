import React from "react";
import { render, waitFor, act } from "@testing-library/react";
import {
  MultiplierProvider,
  SupportedNetworks,
  useWallet,
  useReserveConfigurationData,
  parseChainId,
  Contracts,
} from "../../src";
import { delay, successLog, errorLog } from "../test-utils";

const App = () => {
  const wallet = useWallet();
  const chainId = parseChainId(wallet.chainId);
  const knownContracts = Contracts[chainId];

  const reserveConfigurationData = useReserveConfigurationData(
    knownContracts.BNB
  );
  const value = reserveConfigurationData.value;
  const account = wallet.account;

  if (value == null || account == null) {
    return (
      <div>
        Not Connected
        <button
          data-testid="connect-button"
          onClick={async () => {
            wallet.connect("bsc").then(successLog).catch(errorLog);
          }}
        >
          connect
        </button>
      </div>
    );
  }
  return (
    <div data-testid="useReserveConfigurationData-container">
      connected
      <br />
      BNB Data
      <br />
      LTV: {value.ltv.toString()}
      <br />
      borrowingEnabled: {value.borrowingEnabled}
      <br />
      interestRateStrategyAddress: {value.interestRateStrategyAddress}
    </div>
  );
};

describe("useRepay Tests", () => {
  beforeAll(() => {
    // Setup ethers providers as Hardhat's jsonrpc provider
    const { waffle } = require("hardhat");
    const provider = waffle.provider;
    window.BinanceChain = provider;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("Should should repay borrowings on testnet contract", async (done) => {
    await act(async () => {
      // Render sample app
      const wrapper = render(
        <MultiplierProvider chainId={SupportedNetworks.TESTNET}>
          <App />
        </MultiplierProvider>
      );
      // Find Connect to wallet button and authorize.
      let connectBtn = await wrapper.findByTestId("connect-button");
      connectBtn?.dispatchEvent(new MouseEvent("click", { bubbles: true }));

      // Wait for network requests to settle
      await delay(1000);
      await waitFor(() => expect(successLog).toHaveBeenCalled());
      successLog.mockReset();

      // Assert that data was fetched.
      await wrapper.findByTestId("useReserveConfigurationData-container");

      successLog.mockReset();

      wrapper.unmount();
      done();
    });
  });
});
