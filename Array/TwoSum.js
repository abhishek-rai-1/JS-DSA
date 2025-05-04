const TwoSum = (array, target) => {
  let ans = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) ans.push([i, j]);
    }
  }
  return ans;
};

const arr = [2, 7, 11, 15, 2];
console.log(TwoSum(arr, 9));
