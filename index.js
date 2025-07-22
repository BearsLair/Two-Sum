var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      console.log(`${nums[i]} + ${nums[k]}`, nums[i] + nums[k]);
      if (nums[i] + nums[k] == target) {
        return [i, k];
      }
    }
  }
};

// TESTS
console.log("Result: ", twoSum([3, 3], 6)); // [0, 1]
console.log("Result: ", twoSum([2, 3, 5, 9], 7)); // [0, 2]
console.log("Result: ", twoSum([2, 3, 5, 9], 7)); // [0, 2]
console.log("Result: ", twoSum([3, 4, 8, 12], 12)); // [1, 2]
console.log("Result: ", twoSum([1, 2, 9, 10], 19)); // [2, 3]
console.log("Result: ", twoSum([1, 2, 4, 5, 9, 15, 23, 100], 115)); // [5, 7]
