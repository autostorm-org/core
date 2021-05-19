import {
  WalletConnectionStates,
  SupportedNetworks,
  Contracts,
  ChainData,
} from "../../src";

describe("Constants", () => {
  test("WalletConnectionStates should match snapshots", () => {
    expect(WalletConnectionStates).toMatchSnapshot();
  });
  test("SupportedNetworks should match snapshots", () => {
    expect(SupportedNetworks).toMatchSnapshot();
  });
  test("Contracts should match snapshots", () => {
    expect(Contracts).toMatchSnapshot();
  });
  test("ChainData should match snapshots", () => {
    expect(ChainData).toMatchSnapshot();
  });
});
