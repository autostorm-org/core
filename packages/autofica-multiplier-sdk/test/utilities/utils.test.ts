import { parseChainId, SupportedNetworks } from "../../src";

describe("Utilities", () => {
  test("Should parse MAINNET", () => {
    expect(parseChainId(56)).toBe(SupportedNetworks.MAINNET);
  });
  test("Should parse TESTNET", () => {
    expect(parseChainId(97)).toBe(SupportedNetworks.TESTNET);
  });

  test("Should default to  TESTNET", () => {
    expect(parseChainId(0)).toBe(SupportedNetworks.TESTNET);
  });
});
