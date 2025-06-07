function bubbleSort(arr, n) {
  for (let i = n - 2; i > 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

let arr = [4, 2, 6, 5, 1, 3];
const res = bubbleSort(arr, arr.length);
console.log(res);
