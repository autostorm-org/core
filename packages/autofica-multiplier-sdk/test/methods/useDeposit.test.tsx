import React from "react";
import { render, waitFor, act } from "@testing-library/react";
import {
  MultiplierProvider,
  SupportedNetworks,
  useWallet,
  useDeposit,
  parseChainId,
  Contracts,
} from "../../src";
import { successLog, errorLog, delay } from "../test-utils";
import web3 from "web3";
import { ethers } from "ethers";

const App = () => {
  const wallet = useWallet();
  const chainId = parseChainId(wallet.chainId);
  const knownContracts = Contracts[chainId];

  const deposit = useDeposit();
  const depositMethod = deposit.method;

  if (depositMethod == null) {
    return (
      <div>
        Not Connected
        <button
          data-testid="connect-button"
          onClick={() => {
            wallet.connect("bsc").then(successLog).catch(errorLog);
          }}
        >
          connect
        </button>
      </div>
    );
  }
  return (
    <div data-testid="deposit-container">
      connected. balance {wallet.balance}
      <button
        data-testid="deposit-button"
        onClick={async () => {
          depositMethod(
            knownContracts.BNB,
            web3.utils.toWei("0.01", "ether").toString(),
            "0",
            {
              gasLimit: ethers.BigNumber.from(
                web3.utils.toWei("10000000", "wei").toString()
              ),
              value: web3.utils.toWei("0.01", "ether").toString(),
            }
          )
            .then((a) => {
              a.wait().then(successLog);
            })
            .catch(errorLog);
        }}
      >
        deposit
      </button>
    </div>
  );
};

describe("useLendingPool Tests", () => {
  beforeAll(() => {
    // Setup ethers providers as Hardhat's jsonrpc provider
    const { waffle } = require("hardhat");
    const provider = waffle.provider;
    window.BinanceChain = provider;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("Should should deposit to testnet contract", async (done) => {
    await act(async () => {
      // Render sample app
      const wrapper = await render(
        <MultiplierProvider chainId={SupportedNetworks.TESTNET}>
          <App />
        </MultiplierProvider>
      );
      // Find Connect to wallet button and authorize.
      let connectBtn = await wrapper.findByTestId("connect-button");
      connectBtn?.dispatchEvent(new MouseEvent("click", { bubbles: true }));

      // Wait for network requests to settle
      await waitFor(() => expect(successLog).toHaveBeenCalled());
      await wrapper.findByTestId("deposit-container");

      // Find deposit to multiplier button and authorize.
      let depositBtn = await wrapper.findByTestId("deposit-button");
      depositBtn?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      await wrapper.findByTestId("deposit-container");

      await delay(20000);

      // Assert that deposit transaction was successfully sent.

      await waitFor(() => expect(successLog).toHaveBeenCalled(), {
        interval: 5000,
      });
      wrapper.unmount();
      done();
    });
  });
});
