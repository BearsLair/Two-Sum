// Works for small arrays
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let k = i + 1; k < nums.length; k++) {
//       console.log(`${nums[i]} + ${nums[k]}`, nums[i] + nums[k]);
//       if (nums[i] + nums[k] == target) {
//         return [i, k];
//       }
//     }
//   }
// };

var twoSum = function (nums, target) {
  let secondIndex = 0;
  let numberAtSecondIndex = 0;

  if (nums[nums.length - 1] == 0) {
    null;
  } else if (nums[nums.length - 1] < target) {
    secondIndex = nums.length - 1;
    numberAtSecondIndex = nums[secondIndex];
  } else {
    for (let i = nums.length - 2; i > 0; i--) {
      if (nums[i] < target) {
        secondIndex = i;
        numberAtSecondIndex = nums[i];
        break;
      }
    }
  }

  let difference = target - numberAtSecondIndex;

  if (nums.includes(difference) && nums.indexOf(difference) < secondIndex) {
    return [nums.indexOf(difference), secondIndex];
  } else {
    for (let k = secondIndex - 1; k > -1; k--) {
      difference = target - nums[k];
      if (nums.indexOf(difference)) {
        return [nums.indexOf(difference), k];
      }
    }
  }
};

// TESTS
console.log("Result: ", twoSum([0, 4, 3, 0], 0)); // [0, 3]
console.log("Result: ", twoSum([3, 3], 6)); // [0, 1]
console.log("Result: ", twoSum([2, 3, 5, 7, 9], 8)); // [1, 2]
console.log("Result: ", twoSum([2, 3, 5, 9], 7)); // [0, 2]
console.log("Result: ", twoSum([3, 4, 8, 12], 12)); // [1, 2]
console.log("Result: ", twoSum([1, 2, 9, 10], 19)); // [2, 3]
console.log("Result: ", twoSum([1, 2, 4, 5, 9, 15, 23, 100], 115)); // [5, 7]
