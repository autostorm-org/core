import React from "react";
import { render, waitFor, act } from "@testing-library/react";
import {
  MultiplierProvider,
  SupportedNetworks,
  useWallet,
  useLiquidationCall,
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

  const liquidationCall = useLiquidationCall();
  const liquidationCallMethod = liquidationCall.method;
  const account = wallet.account;
  if (liquidationCallMethod == null || account == null) {
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
    <div data-testid="liquidation-call-container">
      connected
      <button
        data-testid="liquidation-call-button"
        onClick={async () => {
          liquidationCallMethod(
            knownContracts.BNB,
            knownContracts.BNB,
            account,
            web3.utils.toWei("0.001", "ether").toString(),
            true,
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

            // wont succeed
            .catch(successLog);
        }}
      >
        liquidate
      </button>
    </div>
  );
};

describe("liquidation call method Tests", () => {
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
      await wrapper.findByTestId("liquidation-call-button");
      // match with snapshot since we have no liquidator list
      expect(wrapper).toMatchSnapshot();

      wrapper.unmount();
      done();
    });
  });
});
