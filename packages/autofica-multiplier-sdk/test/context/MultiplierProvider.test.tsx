import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { MultiplierProvider, useWallet, SupportedNetworks } from "../../src";
const App = () => {
  const wallet = useWallet();
  return <div>Selected Network {wallet.chainId}</div>;
};

describe("Multiplier Provider tests", () => {
  let container: HTMLDivElement = document.createElement("div");

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    jest.resetAllMocks();
  });
  test("Should Provide wallet with testnet settings ", () => {
    act(() => {
      ReactDOM.render(
        <MultiplierProvider chainId={SupportedNetworks.TESTNET}>
          <App />
        </MultiplierProvider>,
        container
      );
    });

    const renderedText = container.querySelector("div");
    expect(renderedText?.textContent).toBe(
      `Selected Network ${SupportedNetworks.TESTNET}`
    );
  });

  test("Should Provide wallet with mainnet settings ", () => {
    act(() => {
      ReactDOM.render(
        <MultiplierProvider chainId={SupportedNetworks.MAINNET}>
          <App />
        </MultiplierProvider>,
        container
      );
    });

    const renderedText = container.querySelector("div");
    expect(renderedText?.textContent).toBe(
      `Selected Network ${SupportedNetworks.MAINNET}`
    );
  });
});
