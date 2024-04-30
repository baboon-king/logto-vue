import { expect, test } from "bun:test";

import { add } from ".";

test("Add", () => {
  expect(add(2, 2)).toBe(4);
  expect(add(1, 2)).toBe(3);
});
