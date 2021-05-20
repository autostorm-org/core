import React from "react";
import { render, waitFor, act } from "@testing-library/react";
import {
  MultiplierProvider,
  SupportedNetworks,
  useWallet,
  useRebalanceStableBorrowRate,
  parseChainId,
  Contracts,
} from "../../src";
import { delay, successLog, errorLog } from "../test-utils";
import web3 from "web3";
import { ethers } from "ethers";

const App = () => {
  const wallet = useWallet();
  const chainId = parseChainId(wallet.chainId);
  const knownContracts = Contracts[chainId];

  const rebalanceStableBorrowRate = useRebalanceStableBorrowRate();
  const rebalanceStableBorrowRateMethod = rebalanceStableBorrowRate.method;
  const account = wallet.account;
  if (rebalanceStableBorrowRateMethod == null || account == null) {
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
    <div data-testid="rebalanceStableBorrowRateMethod-call-container">
      connected
      <button
        data-testid="rebalanceStableBorrowRateMethod-call-button"
        onClick={async () => {
          rebalanceStableBorrowRateMethod(
            knownContracts.BNB,
            account,

            {
              gasLimit: ethers.BigNumber.from(
                web3.utils.toWei("10000000", "wei").toString()
              ),
            }
          )
            .then((a) => {
              a.wait().then(successLog);
            })

            // wont succeed
            .catch(successLog);
        }}
      >
        rebalance
      </button>
    </div>
  );
};

describe("rebalanceStableBorrowRate call method Tests", () => {
  beforeAll(() => {
    // Setup ethers providers as Hardhat's jsonrpc provider
    const { waffle } = require("hardhat");
    const provider = waffle.provider;
    window.BinanceChain = provider;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("Should provide liquidation call method", async (done) => {
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
      await delay(1000);
      await waitFor(() => expect(successLog).toHaveBeenCalled());
      successLog.mockReset();

      // Find liquidation-call to multiplier button
      await wrapper.findByTestId("rebalanceStableBorrowRateMethod-call-button");
      // match with snapshot since we have no liquidator list
      expect(wrapper).toMatchSnapshot();

      wrapper.unmount();
      done();
    });
  });
});
