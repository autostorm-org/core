import React from "react";
import { render, waitFor, act } from "@testing-library/react";
import {
  MultiplierProvider,
  useLendingPool,
  SupportedNetworks,
  useAsyncValue,
  useWallet,
} from "../../src";
import { delay } from "../test-utils";
const log = jest.fn(() => {});

const App = () => {
  const wallet = useWallet();
  const lendingPoolContract = useLendingPool();
  const reserves = useAsyncValue(() => {
    return lendingPoolContract.contract?.getReserves();
  }, [
    lendingPoolContract.account,
    lendingPoolContract.connected,
    lendingPoolContract.contract != null,
  ]);

  if (reserves.value == null) {
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
  if (reserves.error) {
    return <div>{JSON.stringify(reserves.error)}</div>;
  }

  return <div data-testid="reserves-value">{reserves.value.join(" ")}</div>;
};

const knownTestNetReserves = [
  "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  "0x0Be6c9a1037CdFbb013a73cA361E84662278D551",
  "0x0597d4825daBc17415C46cd1F7fb15fB68904152",
  "0x2C5c163b09C36fA547Fa2E163c8fF739FDDE1aFD",
];

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

  test("Should get the last known testnet reserve addresses", async (done) => {
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
      await waitFor(() => expect(log).toHaveBeenCalledTimes(1));
      // Assert that testnet address is known.
      let text = await wrapper.findByTestId("reserves-value");
      const textContent = String(text?.textContent);
      expect(knownTestNetReserves.join(" ")).toContain(textContent);
      wrapper.unmount();
      done();
    });
  });
});
