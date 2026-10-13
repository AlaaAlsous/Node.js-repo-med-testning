import { test, expect } from "@jest/globals";
import { quack } from "./index.js";

test("returns the correct text for Donald", () => {
  expect(quack("Donald")).toBe("Donald quacks!");
});

test("returns the correct text for Kalle", () => {
  expect(quack("Kalle")).toBe("Kalle quacks!");
});

test("returns the correct text for Alex", () => {
  expect(quack("Alex")).toBe("Alex quacks!");
});
