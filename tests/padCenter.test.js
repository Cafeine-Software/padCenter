import { describe, it } from "node:test";
import assert from "node:assert";
import {padCenter} from "../src/index.js";

describe("padCenter function", () => {

  it("Basic usage", () => {
    const paddedResult = padCenter("neko", 10);
    const expectedResult = "   neko   ";
    assert.strictEqual(paddedResult, expectedResult);

  });

  it("Custom padding character", () => {
    const paddedResult = padCenter("neko", 10,"*");
    const expectedResulkt = "***neko***";
    assert.strictEqual(paddedResult, expectedResulkt);
  });

  it("Odd width distribution", () => {
    const paddedResult = padCenter("cat", 10,"*");
    const expectedResulkt = "***cat****";
    assert.strictEqual(paddedResult, expectedResulkt);
  });

});