import { describe, it } from "node:test";
import assert from "node:assert";
import { padCenter } from "./index.js";

describe("padCenter function", () => {

  it("Basic usage", () => {
    assert.strictEqual(padCenter("neko", 10), "   neko   ");
  });

  it("Custom padding character", () => {
    assert.strictEqual(padCenter("neko", 10, "*"), "***neko***");
  });

  it("Odd width distribution adds extra padding to the end", () => {
    assert.strictEqual(padCenter("cat", 10, "*"), "***cat****");
  });

  it("Empty string", () => {
    assert.strictEqual(padCenter("", 4, "-"), "----");
  });

  it("Width equal to string length returns unchanged string", () => {
    assert.strictEqual(padCenter("hello", 5), "hello");
  });

  it("Width smaller than string length returns unchanged string", () => {
    assert.strictEqual(padCenter("hello", 3), "hello");
  });

  it("Width of zero returns unchanged string", () => {
    assert.strictEqual(padCenter("hi", 0), "hi");
  });

  it("Negative width returns unchanged string", () => {
    assert.strictEqual(padCenter("hi", -5), "hi");
  });

  it("Width of 1 more than string length pads end", () => {
    assert.strictEqual(padCenter("ab", 3, "-"), "ab-");
  });

  it("Throws if first argument is not a string", () => {
    assert.throws(() => padCenter(123, 10), { message: "First argument must be a valid string to be padded." });
    assert.throws(() => padCenter(null, 10), { message: "First argument must be a valid string to be padded." });
    assert.throws(() => padCenter(undefined, 10), { message: "First argument must be a valid string to be padded." });
  });

  it("Throws if width is not a finite number", () => {
    assert.throws(() => padCenter("hi", "10"), { message: "Width must be a finite number." });
    assert.throws(() => padCenter("hi", NaN), { message: "Width must be a finite number." });
    assert.throws(() => padCenter("hi", Infinity), { message: "Width must be a finite number." });
  });

  it("Throws if width is not an integer", () => {
    assert.throws(() => padCenter("hi", 5.5), { message: "Width must be an integer." });
  });

  it("Throws if padding character is not a string", () => {
    assert.throws(() => padCenter("hi", 10, 0), { message: "Padding character must be a string." });
  });

  it("Throws if padding character is not a single character", () => {
    assert.throws(() => padCenter("hi", 10, "ab"), { message: "Padding character must be a single character." });
    assert.throws(() => padCenter("hi", 10, ""), { message: "Padding character must be a single character." });
  });

  it("Validates char even when string is longer than width", () => {
    assert.throws(() => padCenter("hello", 3, 123), { message: "Padding character must be a string." });
    assert.throws(() => padCenter("hello", 3, "ab"), { message: "Padding character must be a single character." });
  });

});
