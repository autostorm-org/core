import "jest";
import { hello } from "../src/hello";

describe(`Test Hello`, () => {
  test("Example", async () => {
    expect(hello()).toBe("hello");
  });
});
