import { deepStrictEqual } from "assert";

export const handleTwoSumProblem = (fn) => {
  try {
    const nums = [
      [2, 7, 11, 15],
      [3, 2, 4],
      [3, 3],
    ];
    const target = [9, 6, 6];
    const answers = [
      [0, 1],
      [1, 2],
      [0, 1],
    ];
    for (let i = 0; i < nums.length; i++) {
      const result = fn(nums[i], target[i]);
      deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log("error in two sum problem");
    throw new Error(error);
  }
};
