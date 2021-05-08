import "jest";
import { LendingPoolAddressesProvider, LendingPool, BSCDAI } from "../src";

describe(`Test correct abis were imported`, () => {
  test("Generated contracts abis match snapshots", async () => {
    expect(LendingPoolAddressesProvider).toMatchSnapshot();
    expect(LendingPool).toMatchSnapshot();
  });

  test("Static contracts abis match snapshots", async () => {
    expect(BSCDAI).toMatchSnapshot();
  });
});
