import React from "react";
import { render, waitFor, act } from "@testing-library/react";
import {
  MultiplierProvider,
  SupportedNetworks,
  useWallet,
  useRepay,
  parseChainId,
  Contracts,
} from "../../src";
import { delay, successLog, errorLog, testGasLimit } from "../test-utils";
import web3 from "web3";

const App = () => {
  const wallet = useWallet();
  const chainId = parseChainId(wallet.chainId);
  const knownContracts = Contracts[chainId];

  const repay = useRepay();
  const repayMethod = repay.method;
  const account = wallet.account;

  if (repayMethod == null || account == null) {
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
    <div data-testid="repayMethod-container">
      connected
      <button
        data-testid="repayMethod-button"
        onClick={async () => {
          repayMethod(
            knownContracts.BNB,
            web3.utils.toWei("0.005", "ether").toString(),
            account,
            {
              gasLimit: testGasLimit,
              value: web3.utils.toWei("0.005", "ether").toString(),
            }
          )
            .then((a) => {
              a.wait().then(successLog);
            })
            .catch(errorLog);
        }}
      >
        repay
      </button>
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

      // Find deposit to multiplier button and authorize.
      let depositBtn = await wrapper.findByTestId("repayMethod-button");
      depositBtn?.dispatchEvent(new MouseEvent("click", { bubbles: true }));

      // Assert that borrow transaction was successfully sent.
      await wrapper.findByTestId("repayMethod-container");
      await delay(15000);

      await waitFor(() => expect(successLog).toHaveBeenCalled(), {
        interval: 5000,
      });
      successLog.mockReset();

      wrapper.unmount();
      done();
    });
  });
});
