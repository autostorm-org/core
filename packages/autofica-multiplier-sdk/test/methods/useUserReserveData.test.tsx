import React from "react";
import { render, waitFor, act } from "@testing-library/react";
import {
  MultiplierProvider,
  SupportedNetworks,
  useWallet,
  useUserReserveData,
  Contracts,
  parseChainId,
} from "../../src";
import { delay, successLog, errorLog } from "../test-utils";

const App = () => {
  const wallet = useWallet();
  const contract = Contracts[parseChainId(wallet.chainId)];

  const hookReturn = useUserReserveData(contract.BNB);
  const value = hookReturn.value;
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
    <div data-testid="useUserReserveData-container">
      connected
      <br />
      BNB Data
      <br />
      totalLiquidityBNB: {value[0].toString()}
      <br />
      totalCollateralBNB: {value[1].toString()}
      <br />
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
      await wrapper.findByTestId("useUserReserveData-container");
      successLog.mockReset();
      wrapper.unmount();
      done();
    });
  });
});
