import "jest";
import request from "supertest";
import { urlComposer } from "@autofica/common";

describe(`Test ${urlComposer("prefix", "route")}`, () => {
  test("Example", async () => {
    expect(true).toBe(true);
  });
});
