// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array. You can assume that there will be at most one pair of numbers summing up the target sum.

const arr = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

function twoNumberSum(array: number[], targetSum: number) {
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (obj[targetSum - num]) {
      return [num, targetSum - num];
    } else {
      obj[num] = true;
    }
  }
}

console.log(twoNumberSum(arr, targetSum));
