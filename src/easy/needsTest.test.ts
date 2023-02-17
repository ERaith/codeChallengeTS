import { removeMatches } from "./needsTest";

it("Function should return false", () => {
  expect(removeMatches(["one", 0], "0")).toEqual(false);
  expect(removeMatches([], "0")).toEqual(false);
});

it("Function should return a new array with none of the items to be filtered", () => {
  expect(removeMatches(["one", "0"], "0")).toEqual(["one"]);
  expect(removeMatches([2, 2, 2], 2)).toEqual([]);
  expect(removeMatches([1, 3, 4, 5, 6, 7, 2, 9], 2)).toEqual([
    1, 3, 4, 5, 6, 7, 9,
  ]);
  expect(removeMatches([2, "three", "j"], "three")).toEqual([2, "j"]);
});
